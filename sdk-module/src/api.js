import {
  sendRegionRequest,
  sendReserveRequest,
  sendReserveStatusRequest,
  sendRulesRequest,
} from 'request';
import { createWebSocketClient } from '/websocket';
import {
  RESERVE_FAILURE,
  RESERVE_COMPLETE_TIMEOUT_EXCEEDED,
  RESERVE_COMPLETE_WS_ERROR,
  RESERVE_COMPLETE_WS_MESSAGE_ERROR,
} from 'constants/errors';
import { reserveCompleteSubscription } from '/graphql/subscription';
import { STATUS_PROCESSING, STATUS_SUCCESS } from '/constants/status';
import Logger from 'logger';
import { RESERVE_START } from '/constants/cookies';
import { setCookie } from 'cookies';

const logger = new Logger('src/api.js');

// 30 seconds
const RESERVE_COMPLETE_TIMEOUT = 30000;
// 5 seconds
const RESERVE_POLLING_INTERVAL = 5000;
// 30 minutes
const RESERVE_POLLING_TIMEOUT = 1000 * 60 * 30;
const RESERVE_POLLING_MAX_RETRIES = Math.floor(RESERVE_POLLING_TIMEOUT / RESERVE_POLLING_INTERVAL);


const isReserveSuccessful = (requestId, status) => requestId && status && [STATUS_SUCCESS, 'IN', 'IP'].includes(status.toUpperCase());

const handleReserveResponse = ({ data: { reserve } = {} }) => {
  const { errors = [], requestId, status } = reserve;
  const reserveStartTime = window.sessionStorage.getItem(RESERVE_START);
  setCookie(requestId, JSON.stringify({ RESERVE_START: reserveStartTime }));
  window.sessionStorage.removeItem(RESERVE_START);

  let errorMessage = '';

  if (!!errors && !!errors.length) {
    const error  = errors[0];
    const { code, message } = error;

    errorMessage = `${message} (${code})`;

    logger.error({ data: errorMessage, requestId });

    return {
      ...reserve,
      error,
    }
  }

  if (!isReserveSuccessful(requestId, status)) {
    errorMessage = RESERVE_FAILURE;

    logger.error({ data: errorMessage, requestId });

    return {
      ...reserve,
      error: {
        message: errorMessage,
      }
    }
  }

  return reserve;
};

export const getRegion = (eventId) => sendRegionRequest(eventId);

export const getRules = (eventId) => sendRulesRequest(eventId);

export const reserve = ({ eventId, parentSpanHeaders, region, reserveInput, smartQueueToken, spanHeaders, toolspreview }) => {
  window.sessionStorage.setItem(RESERVE_START, Date.now());

  return sendReserveRequest({ eventId, parentSpanHeaders, region, reserveInput, smartQueueToken, spanHeaders, toolspreview })
    .then(handleReserveResponse);
};

function delayPromise(interval) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(this), interval);
  });
}

export const pollReserveStatus = ({ count = 1, eventId, parentSpanHeaders, requestId }) => {
  return sendReserveStatusRequest({ eventId, parentSpanHeaders, requestId }).then(({ data = {} }) => {
    const { getReserveStatus = {} } = data;
    const { status, errors = [] } = getReserveStatus;

    if (count < RESERVE_POLLING_MAX_RETRIES && status === STATUS_PROCESSING) {
      return delayPromise(RESERVE_POLLING_INTERVAL).then(() => pollReserveStatus({ count: count + 1, eventId, parentSpanHeaders, requestId }));
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
  }
) => {
  return new Promise((resolve, reject) => {
    const apiKey = region === 'west' ? process.env.SUBSCRIPTION_API_KEY_WEST : process.env.SUBSCRIPTION_API_KEY_EAST;
    const host = region === 'west' ? process.env.SUBSCRIPTION_API_HOST_WEST : process.env.SUBSCRIPTION_API_HOST_EAST;

    let client = null;
    let reserveCompleteReceived = false;
    let reserved = false;
    let subscribed = false;

    const handleWebsocketError = (error) => {
      error && error.message && logger.error({ data: error.message, requestorId });
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
      });

      setTimeout(() => {
        handleWebsocketError(new Error(RESERVE_COMPLETE_TIMEOUT_EXCEEDED));
      }, RESERVE_COMPLETE_TIMEOUT);

      client.onerror = () => {
        handleWebsocketError(new Error(RESERVE_COMPLETE_WS_ERROR));
      };

      client.onmessage = (event) => {
        const message = JSON.parse(event.data);

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
            reject(errors[0]);
          }
        }

        if (message.type === 'error') {
          handleWebsocketError(new Error(RESERVE_COMPLETE_WS_MESSAGE_ERROR));
        }
      };

      client.onopen = () => client.send(JSON.stringify({ type: 'connection_init' }));
    } catch (error) {
      handleWebsocketError(error);
    }
  });
};
