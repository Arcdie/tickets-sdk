import SDK from './sdk.mjs';

import {
  getRegion,
} from './api.mjs';
import {
  EVENT_ID_REQUIRED,
} from './constants/errors.mjs';
import Logger from './logger.mjs';

const logger = new Logger('src/index.js');

const init = ({ eventId, smartQueueToken }, proxyAgent) => {
  return new Promise((resolve, reject) => {
    if (!eventId) {
      logger.warn(EVENT_ID_REQUIRED, proxyAgent);
      return reject(new Error(EVENT_ID_REQUIRED));
    }

    return getRegion(eventId, proxyAgent)
      .then(
        ({ region }) => resolve(new SDK({ eventId, region, smartQueueToken }, proxyAgent))
      )
      .catch(reject);
  });
};

const CheckoutSDK = {
  build: `${process.env.BUILD_ID}`,
  init,
};

window.CheckoutSDK = CheckoutSDK;

export default CheckoutSDK;
