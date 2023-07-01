/* eslint handle-callback-err: "warn" */

import fetch from 'isomorphic-fetch';
import cookies from 'cookies-js';
import { getCheckoutBaseUrl } from './utils/index.mjs';

const LOG_ENDPOINT = `${getCheckoutBaseUrl()}/api/log`;

const getLogMeta = ({ correlationId, requestId, requestorId }) => {
  const meta = {
    accessToken: cookies.get('SOTC'),
    bid: cookies.get('BID'),
    domain: getCheckoutBaseUrl(),
    logSource: 'sdk',
    sid: cookies.get('SID'),
  };

  if (requestId) meta.requestId = requestId;
  if (correlationId) meta.correlationId = correlationId;
  if (requestorId) meta.requestorId = requestorId;

  return meta;
};

const sendLog = ({ correlationId, data, logLevel, requestId, requestorId, source }) => {
  let content = {};

  if (data && typeof data === 'object') {
    content = {
      ...data,
      source,
    };
  } else {
    content = {
      message: data,
      source,
    };
  }

  const logRequest = {
    content,
    level: logLevel,
    meta: getLogMeta({ correlationId, requestId, requestorId }),
  };

  fetch(LOG_ENDPOINT, {
    agent: window.proxyAgent,
    body: JSON.stringify(logRequest),
    headers: {
      'Content-Type': 'application/json',
      cookie: document.cookie,
    },
    method: 'POST',
    mode: 'cors',
  }).catch(() => {
    // ignore
  });
};

export default class ClientLogger {
  constructor(source) {
    if (!source) {
      throw new Error('Log file source is required.');
    }

    this.source = source;
  }

  error({ correlationId, data, requestId, requestorId }) {
    sendLog({ correlationId, data, logLevel: 'error', requestId, requestorId, source: this.source });
  }

  warn(data) {
    sendLog({ data, logLevel: 'warn', source: this.source });
  }

  info(data) {
    sendLog({ data, logLevel: 'info', source: this.source });
  }

  debug(data) {
    sendLog({ data, logLevel: 'debug', source: this.source });
  }
}
