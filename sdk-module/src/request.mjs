import cookies from 'cookies-js';
import fetch from 'isomorphic-fetch';
import {v1} from 'uuid';
import {
  REGION,
  RESERVE,
  RESERVE_STATUS,
  RULES,
} from './constants/requestNames.mjs';
import { REQUEST_SPAN_MAPPING } from './constants/spanNames.mjs';
import { reserveMutation } from './graphql/mutation.mjs';
import { reserveStatusQuery } from './graphql/query.mjs';
import Logger from './logger.mjs';
import Tracer from './tracer/index.mjs';
import {
  getCheckoutBaseUrl,
  removeUndefinedFields,
} from './utils/index.mjs';

const logger = new Logger('src/request.js');
const { API_KEY } = process.env;
const BID_COOKIE_NAME = 'BID';
const SID_COOKIE_NAME = 'SID';

const getRequestOptions = () => ({
  credentials: 'include',
  method: 'POST',
});

const getRequestHeaders = (headers = {}, eventId, requestName) => removeUndefinedFields({
  'Content-Type': 'application/json',
  'TMPS-Correlation-Id': v1(),
  'TMPS-Monetate-Id': cookies.get('mt.v'),
  'TMPS-Session-Id': cookies.get(SID_COOKIE_NAME),
  'X-API-Key': API_KEY,
  'x-cmd': requestName,
  'x-eid': eventId,
  'X-Environment-Tag': process.env.ENVIRONMENT_TAG,
  'X-TM-BID': cookies.get(BID_COOKIE_NAME),
  ...headers,
});

const handleResponse = ({ channelId, correlationId, isLightstepEnabled = true, requestName, response, span, url }) => {
  const { status, statusText } = response;
  // order log importance
  const logContent = {
    requestName,
    correlationId,
    status,
    statusText,
    url,
    channelId,
  };

  if (status < 200 || status >= 400) {
    if (isLightstepEnabled && span) {
      span.logError(statusText);
      span.finishSpan();
    }
    throw new Error(`${statusText} (${status})`);
  }

  logger.info(logContent);

  return response.json();
};

const handleError = ({ correlationId, err, isLightstepEnabled = true, requestName, span, url }) => {
  // order log importance
  const content = {
    message: err.message,
    requestName,
    url,
  };

  if (isLightstepEnabled && span) {
    span.logError(err.message);
    span.finishSpan();
  }

  logger.error({ correlationId, data: content });

  throw err;
};

const sendGraphQLRequest = ({ additionalHeaders = {}, eventId, parentSpanHeaders = {}, requestId, requestInput, requestName }) => {
  const span = new Tracer(parentSpanHeaders, removeUndefinedFields({ 'tm.correlation_id': v1(), 'tm.request_id': requestId }));
  span.startSpan(REQUEST_SPAN_MAPPING[requestName]);
  const spanHeaders = span.getSpanHeaders();

  const headers = getRequestHeaders({ ...additionalHeaders, ...spanHeaders }, eventId, requestName);
  const correlationId = headers['TMPS-Correlation-Id'];

  const url = `${getCheckoutBaseUrl()}/graphql`;

  return fetch(url, {
    body: JSON.stringify(requestInput),
    headers,
    ...getRequestOptions(),
  })
  .then(response => handleResponse({ channelId: requestInput.variables?.reserveInput?.requestContext?.channel, correlationId, requestName, response, span, url }))
  .then(response => {
    const { errors: [{ message }] = [{}] } = response;

    if (message) {
      span.logError(message);
      span.finishSpan();
      throw new Error(message);
    }

    span.finishSpan();

    return response;
  })
  .catch(err => handleError({ correlationId, err, requestName, span, url }));
};

export const sendRegionRequest = (eventId) => {
  const url = `${getCheckoutBaseUrl()}/region`;
  const headers = getRequestHeaders({}, eventId, REGION);
  const correlationId = headers['TMPS-Correlation-Id'];

  return fetch(url, { credentials: 'include' })
  .then(response => handleResponse({ requestName: REGION, response, url }))
  .catch(err => handleError({ correlationId, err, requestName: REGION, url }));
};

export const sendRulesRequest = (eventId) => {
  const url = `${getCheckoutBaseUrl()}/api/rules?eventId=${eventId}`;
  const headers = getRequestHeaders({}, eventId, RULES);
  const correlationId = headers['TMPS-Correlation-Id'];

  return fetch(url, { credentials: 'include' })
  .then(response => handleResponse({ requestName: RULES, response, url }))
  .catch(err => handleError({ correlationId, err, requestName: RULES, url }));
};

export const sendReserveRequest = ({ eventId, parentSpanHeaders, region, reserveInput, smartQueueToken, toolspreview }) => {
  const requestInput = {
    query: reserveMutation,
    variables: { reserveInput },
  };

  const additionalHeaders = {
    'X-Region': region,
    'X-TMPS-SmartQueue-Token': smartQueueToken,
  };

  if (toolspreview) {
    additionalHeaders['X-Toolspreview'] = toolspreview
  }

  return sendGraphQLRequest({
    additionalHeaders,
    eventId,
    parentSpanHeaders,
    requestInput,
    requestName: RESERVE,
  });
};

export const sendReserveStatusRequest = ({ eventId, parentSpanHeaders, requestId }) => {
  const requestInput = {
    query: reserveStatusQuery,
    variables: { requestId },
  };

  return sendGraphQLRequest({
    eventId,
    parentSpanHeaders,
    requestId,
    requestInput,
    requestName: RESERVE_STATUS,
  });
};
