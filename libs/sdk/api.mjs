import {
  sendRegionRequest,
  sendReserveRequest,
  sendReserveStatusRequest,
  sendRulesRequest,
} from './request.mjs';
import { createWebSocketClient } from './websocket.mjs';
import {
  RESERVE_FAILURE,
  RESERVE_COMPLETE_TIMEOUT_EXCEEDED,
  RESERVE_COMPLETE_WS_ERROR,
  RESERVE_COMPLETE_WS_MESSAGE_ERROR,
} from './constants/errors.mjs';
import { reserveCompleteSubscription } from './graphql/subscription.mjs';
import { STATUS_PROCESSING, STATUS_SUCCESS } from './constants/status.mjs';
import Logger from './logger.mjs';
import { RESERVE_START } from './constants/cookies.mjs';
import { setCookie } from './cookies.mjs';

const logger = new Logger('src/api.js');

// 30 seconds
const RESERVE_COMPLETE_TIMEOUT = 30000;
// 5 seconds
const RESERVE_POLLING_INTERVAL = 5000;
// 30 minutes
const RESERVE_POLLING_TIMEOUT = 1000 * 60 * 30;
const RESERVE_POLLING_MAX_RETRIES = Math.floor(RESERVE_POLLING_TIMEOUT / RESERVE_POLLING_INTERVAL);


const isReserveSuccessful = (requestId, status) => requestId && status && [STATUS_SUCCESS, 'IN', 'IP'].includes(status.toUpperCase());

const handleReserveResponse = ({ data: { reserve } = {} }, proxyAgent) => {
  const { errors = [], requestId, status } = reserve;
  const reserveStartTime = window.sessionStorage.getItem(RESERVE_START);
  setCookie(requestId, JSON.stringify({ RESERVE_START: reserveStartTime }));
  window.sessionStorage.removeItem(RESERVE_START);

  let errorMessage = '';

  if (!!errors && !!errors.length) {
    const error  = errors[0];
    const { code, message } = error;

    errorMessage = `${message} (${code})`;

    logger.error({ data: errorMessage, requestId }, proxyAgent);

    return {
      ...reserve,
      error,
    }
  }

  if (!isReserveSuccessful(requestId, status)) {
    errorMessage = RESERVE_FAILURE;

    logger.error({ data: errorMessage, requestId }, proxyAgent);

    return {
      ...reserve,
      error: {
        message: errorMessage,
      }
    }
  }

  return reserve;
};

export const getRegion = (eventId, proxyAgent) => sendRegionRequest(eventId, proxyAgent);

export const getRules = (eventId, proxyAgent) => sendRulesRequest(eventId, proxyAgent);

export const reserve = ({ eventId, parentSpanHeaders, region, reserveInput, smartQueueToken, spanHeaders, toolspreview }, proxyAgent) => {
  window.sessionStorage.setItem(RESERVE_START, Date.now());

  return sendReserveRequest({ eventId, parentSpanHeaders, region, reserveInput, smartQueueToken, spanHeaders, toolspreview }, proxyAgent)
    .then(data => handleReserveResponse(data, proxyAgent));
};

function delayPromise(interval) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(this), interval);
  });
}

export const pollReserveStatus = ({ count = 1, eventId, parentSpanHeaders, requestId }, proxyAgent) => {
  return sendReserveStatusRequest({ eventId, parentSpanHeaders, requestId }, proxyAgent).then(({ data = {} }) => {
    const { getReserveStatus = {} } = data;
    const { status, errors = [] } = getReserveStatus;

    if (count < RESERVE_POLLING_MAX_RETRIES && status === STATUS_PROCESSING) {
      return delayPromise(RESERVE_POLLING_INTERVAL).then(() => pollReserveStatus({ count: count + 1, eventId, parentSpanHeaders, requestId }, proxyAgent));
    } else if (isReserveSuccessful(requestId, status)) {
      return Promise.resolve(getReserveStatus);
    }

    const errorMsg = count >= RESERVE_POLLING_MAX_RETRIES ? 'Max polling retries reached.' : errors[0];
    return Promise.reject(errorMsg);
  });
};

export const subscribeToReserveComplete = (
  {
    onSubscribe,
    region,
    requestorId,
  }, proxyAgent,
) => {
  return new Promise((resolve, reject) => {
    const SUBSCRIPTION_API_KEY_WEST = 'da2-pbjuejzc5rac3fspc2ozvtouxy';
    const SUBSCRIPTION_API_KEY_EAST = 'da2-esrv7m4ch5cmhk4tftair7zi74';

    const SUBSCRIPTION_API_HOST_WEST = 'ciziftt2drddxnqhvcpaffgv5y.appsync-api.us-west-2.amazonaws.com';
    const SUBSCRIPTION_API_HOST_EAST = 'o26jo4blcnf65jyg3hzjxarpwy.appsync-api.us-east-1.amazonaws.com';

    const apiKey = region === 'west' ? SUBSCRIPTION_API_KEY_WEST : SUBSCRIPTION_API_KEY_EAST;
    const host = region === 'west' ? SUBSCRIPTION_API_HOST_WEST : SUBSCRIPTION_API_HOST_EAST;

    let client = null;
    let reserveCompleteReceived = false;
    let reserved = false;
    let subscribed = false;

    const handleWebsocketError = (error) => {
      console.log('error', error);
      error && error.message && logger.error({ data: error.message, requestorId }, proxyAgent);
      client && client.close && client.close();

      if (!subscribed) {
        subscribed = true;

        onSubscribe()
        .then(() => {
          reserved = true;
          resolve({ pollingRequired: true });
        })
        .catch(error => {
          handleWebsocketError(error);
        });
      } else if (subscribed && reserved && !reserveCompleteReceived) {
        resolve({ pollingRequired: true });
      } else {
        reject(error);
      }
    }

    try {
      client = createWebSocketClient({
        apiKey,
        host,
      }, proxyAgent);

      setTimeout(() => {
        handleWebsocketError(new Error(RESERVE_COMPLETE_TIMEOUT_EXCEEDED));
      }, RESERVE_COMPLETE_TIMEOUT);

      client.onerror = () => {
        handleWebsocketError(new Error(RESERVE_COMPLETE_WS_ERROR));
      };

      client.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log('message', message);

        if (message.type === 'connection_ack') {
          client.send(JSON.stringify({
            id: requestorId,
            payload: {
              data: JSON.stringify({
                query: reserveCompleteSubscription,
                variables: {
                  requestorId,
                },
              }),
              extensions: {
                authorization: {
                  host,
                  'x-api-key': apiKey,
                },
              },
            },
            type: 'start',
          }));
        }

        if (message.type === 'start_ack') {
          subscribed = true;

          onSubscribe()
          .then(() => {
            reserved = true;
          })
          .catch(error => {
            handleWebsocketError(error);
          });
        }

        if (message.type === 'data') {
          const { payload: { data: { reserveComplete = {} } } = {} } = message;
          const { errors = [], requestId, status } = reserveComplete;

          reserveCompleteReceived = true;

          client.close();

          if (isReserveSuccessful(requestId, status)) {
            resolve(reserveComplete);
          } else {
            console.log('message.type === data', errors);
            reject(errors[0]);
          }
        }

        if (message.type === 'error') {
          handleWebsocketError(new Error(RESERVE_COMPLETE_WS_MESSAGE_ERROR));
        }
      };

      client.onopen = () => {
        console.log('client.onopen');
        client.send(JSON.stringify({ type: 'connection_init' }));
      };
    } catch (error) {
      handleWebsocketError(error);
    }
  });
};
