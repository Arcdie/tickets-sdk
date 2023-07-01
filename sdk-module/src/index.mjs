import SDK from './sdk.mjs';

import {
  getRegion,
} from './api.mjs';
import {
  EVENT_ID_REQUIRED,
} from './constants/errors.mjs';
import Logger from './logger.mjs';

const logger = new Logger('src/index.js');

const init = ({ eventId, smartQueueToken }) => {
  return new Promise((resolve, reject) => {
    if (!eventId) {
      logger.warn(EVENT_ID_REQUIRED);
      return reject(new Error(EVENT_ID_REQUIRED));
    }

    return getRegion(eventId)
    .then(
      ({ region }) => resolve(new SDK({ eventId, region, smartQueueToken }))
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
