/* eslint camelcase: ["error", {properties: "never"}] */
import 'regenerator-runtime';
import { v1 } from 'uuid';
import {
  getRules,
  pollReserveStatus,
  reserve,
  subscribeToReserveComplete,
} from './api.mjs';
import {
  HEADER_TITLE,
  HIDE_LEFT_PANEL,
  INTEGRATOR_ID,
  PLACEMENT_ID,
  SHOW_HEADER,
} from './constants/accounts.mjs';
import { LANGUAGE } from './constants/cookies.mjs';
import { RADIX_DECIMAL } from './constants/math.mjs';
import { DESKTOP, MOBILE } from './constants/devices.mjs';
import { RESERVE_PARENT_SPAN } from './constants/spanNames.mjs';
import { SYSTEM_CO2, SYSTEM_RCO } from './constants/system.mjs';

import { getCookie } from './cookies.mjs';
import Logger from './logger.mjs';
import { processReserveRequestMetric } from './metrics.mjs';
import {
  getMatchingRules,
  getSystemFromRules,
  isCO2,
} from './rules.mjs';
import Tracer from './tracer/index.mjs';
import { tracer } from './tracer/config.mjs';
import {
  getCheckoutBaseUrl,
  getCheckoutBaseUrlOverride,
  getIsAppview,
  getLoginPageEnabled,
  getLoginPageBaseUrl,
  getTickets,
  removeUndefinedFields,
} from './utils/index.mjs';
import { deriveChannelId } from './utils/channelId.mjs';

const logger = new Logger('src/sdk.js');

class CheckoutSDK {
  constructor({ eventId, region = 'east', smartQueueToken }) {
    this.accessTokenValid = false;
    this.eventId = eventId;
    this.region = region;
    this.remainingTimestamp = Infinity;
    this.requiresSessionInvalidation = false;
    this.requestId = null;
    this.smartQueueToken = smartQueueToken;
  }

  loadCheckout({
    appview,
    appviewLN,
    appviewVersion,
    channel,
    edp = window.location.href,
    layout,
    source,
    target = window,
  }) {
    /* eslint-disable camelcase */
    const flags = {
      ccp_src: source,
      ccp_channel: channel,
      edp: encodeURIComponent(edp),
      f_appview: appview,
      f_appview_ln: appviewLN,
      f_appview_version: appviewVersion,
      f_layout: layout,
    };
    /* eslint-enable camelcase */
    const buildQueryString = (flags) => {
      let queryString = '';

      Object.entries(removeUndefinedFields(flags)).forEach((entry) => {
        const separator = queryString.length ? '&' : '?';
        queryString += `${separator}${entry[0]}=${entry[1]}`;
      });

      return `/${this.requestId}${queryString}`;
    };
    const checkoutBaseUrl = getCheckoutBaseUrlOverride() || getCheckoutBaseUrl();

    const checkoutUrl = `${checkoutBaseUrl}${buildQueryString(flags)}`;
    const isAppview = getIsAppview();

    if (!isAppview && getLoginPageEnabled() && !this.accessTokenValid) {
      const LOCALE = getCookie(LANGUAGE);

      let loginPageUrl = `${getLoginPageBaseUrl()}/sign-in?${LOCALE ? `lang=${LOCALE}&` : ''}integratorId=${INTEGRATOR_ID}&placementId=${PLACEMENT_ID}&showHeader=${SHOW_HEADER}&headerTitle=${HEADER_TITLE}&hideLeftPanel=${HIDE_LEFT_PANEL}&redirectUri=${window.encodeURIComponent(checkoutUrl)}`;

      if (this.remainingTimestamp !== Infinity && !isNaN(this.remainingTimestamp)) {
        const remainingTime = parseInt((this.remainingTimestamp - Date.now()) / 1000, RADIX_DECIMAL);
        const timerData = window.btoa(JSON.stringify({
          artistName: '',
          remainingTime,
          timesOutRedirectURL: edp,
        }));

        loginPageUrl += `&timerData=${timerData}`;
      }

      window.location.assign(loginPageUrl);
    } else {
      const redirect = () => {
        try {
          target.location.assign(checkoutUrl);
        } catch (exception) {
          window.location.assign(checkoutUrl);
        }
      };

      if (this.requiresSessionInvalidation) {
        window.TMAuthAdaptor && window.TMAuthAdaptor.signOut().then(() => redirect());
      } else {
        redirect();
      }
    }
  }

  async checkout({
    clubSiteId,
    eventId,
    jwtToken,
    requestorId = v1(),
    requestContext,
    tickets,
    upsells,
  } = {},
  {
    appview,
    appviewLN,
    appviewVersion,
    channel,
    edp = window.location.href,
    layout,
    redirect = true,
    source,
    target = window,
    toolspreview = !!window.location.pathname && window.location.pathname.includes('toolspreview'),
  } = {}) {
    // requestContext for Primary
    const { channel: channelInjected, locale: localeInjected } = requestContext || {};
    const { host, search } = window.location;
    const isAppview = getIsAppview();
    const deviceType = DESKTOP;

    const derivedChannel = deriveChannelId({
      clubSiteId,
      deviceType,
      host,
      isAppview,
      isResale: false,
      isThirdParty: false,
      search,
    });

    const reserveInput = removeUndefinedFields({
      clubSiteId,
      eventId,
      jwtToken,
      requestorId,
      requestContext: {
        channel: channelInjected || derivedChannel,
        locale: localeInjected || null,
      },
      tickets: getTickets(tickets),
      upsells,
    });

    const urlSearchParams = new URLSearchParams(window.location.search);
    const { region, smartQueueToken } = this;

    let rules = [];
    try {
      rules = await getRules(eventId);
    } catch (error) {
     return Promise.reject(error);
    }

    return new Promise((resolve, reject) => {
      const forceCheckoutValue = urlSearchParams.get('force_checkout');
      // Force 3PE on SYSTEM_RCO on TM.ca
      let system;
      if ([SYSTEM_RCO, SYSTEM_CO2].includes(forceCheckoutValue)) {
        system = forceCheckoutValue;
      } else {
        system = getSystemFromRules(getMatchingRules(reserveInput, rules));
      }

      const parentTracerSpan = new Tracer(null);
      parentTracerSpan.startSpan(RESERVE_PARENT_SPAN);
      const parentSpanHeaders = parentTracerSpan.getSpanHeaders();

      const onReserveCompleteSuccess = (response) => {
        const {
          requestId,
          ticketOrderItems = [],
        } = response;

        if (requestId) this.requestId = requestId;

        parentTracerSpan.finishSpan();
        tracer.flush();

        this.accessTokenValid = !!response.accessTokenValid;
        this.requiresSessionInvalidation = !!response.requiresSessionInvalidation;

        if (ticketOrderItems && ticketOrderItems.length) {
          ticketOrderItems.forEach(({ expirationTime }) => {
            if (expirationTime) {
              this.remainingTimestamp = Math.min(expirationTime * 1000, this.remainingTimestamp);
            }
          });
        }

        if (redirect === true) {
          processReserveRequestMetric({ requestId: this.requestId });
          this.loadCheckout({ appview, appviewLN, appviewVersion, channel, edp, layout, source, target });
        }

        resolve({ response, system });
      };

      const onSubscribe = () => reserve({
        eventId: this.eventId,
        parentSpanHeaders,
        region,
        reserveInput,
        smartQueueToken,
        toolspreview,
      })
      .then(({ error, requestId }) => {
        if (error) {
          reject(error);
        }

        this.requestId = requestId;
      });

      if (isCO2(system)) {
        subscribeToReserveComplete({
          onSubscribe,
          region,
          requestorId,
        })
        .then((subscriptionResponse) => {
          const { pollingRequired = null } = subscriptionResponse;

          if (pollingRequired) {            
            pollReserveStatus({
              eventId: this.eventId,
              parentSpanHeaders,
              requestId: this.requestId,
            })
            .then((pollingResponse) => {
              onReserveCompleteSuccess(pollingResponse);
            })
            .catch((error) => {
              logger.error({ data: error.message, requestId: this.requestId });

              reject(error);
            });
          } else {
            onReserveCompleteSuccess(subscriptionResponse);
          }
        })
        .catch(error => {
          logger.error({ data: error.message, requestId: this.requestId });
          parentTracerSpan.logError(error.message);
          parentTracerSpan.finishSpan();
          reject(error);
        });
      } else {
        resolve({ system });
      }
    });
  }
}

export default CheckoutSDK;
