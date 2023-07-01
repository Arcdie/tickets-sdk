import { DOMAIN_DATA, TM_IE, TM_MX, TM_UK } from '../constants/domains.mjs';

export const removeUndefinedFields = (obj) => JSON.parse(JSON.stringify(obj));

export const isNumber = (data) => !!data && !Number.isNaN(Number(data));

// eslint-disable-next-line complexity
export const getDomainData = () => {
  let domainData = null;

  if (window?.location?.hostname) {
    const { hostname, search } = window.location;

    if ((/\.nonprod-tmaws\.io$/u).test(hostname)) {
      if ((/domain_name=TM_CA/u).test(search)) domainData = DOMAIN_DATA.TM_CA;
      if ((/iccp-tmuk\./u).test(hostname)) domainData = DOMAIN_DATA.TM_UK;
      if ((/iccp-tmie\./u).test(hostname)) domainData = DOMAIN_DATA.TM_IE;
      if ((/iccp-tmmx\./u).test(hostname)) domainData = DOMAIN_DATA.TM_MX;
      if
        ((/domain_name=LN_US/u).test(search) ||
        (/iccp-lnus\./u).test(hostname)
      ) {
        domainData = DOMAIN_DATA.LN_US;
      }
    } else if (
      (/lnus\.preprod\.ticketmaster\.net$/u).test(hostname) ||
      (/\.livenation\.com$/u).test(hostname)
    ) {
      domainData = DOMAIN_DATA.LN_US;
    } else if (
      (/tmca\.preprod\.ticketmaster\.net$/u).test(hostname) ||
      (/\.ticketmaster\.ca$/u).test(hostname)
    ) {
      domainData = DOMAIN_DATA.TM_CA;
    } else if (
      (/tmus\.preprod\.ticketmaster\.net$/u).test(hostname) ||
      (/\.ticketmaster\.com$/u).test(hostname)
    ) {
      domainData = DOMAIN_DATA.TM_US;
    } else if ((/\.ticketmaster\.co\.uk$/u).test(hostname)) {
      domainData = DOMAIN_DATA.TM_UK;
    } else if ((/\.ticketmaster\.ie$/u).test(hostname)) {
      domainData = DOMAIN_DATA.TM_IE;
    } else if ((/\.ticketmaster\.com.mx$/u).test(hostname)) {
      domainData = DOMAIN_DATA.TM_MX;
    }
  }

  console.log('domainData', domainData);

  return domainData || DOMAIN_DATA.default;
};

export const getCurrentDomain = () => {
  const domainData = getDomainData();
  const  { domain } = domainData;

  return domain;
};

export const getCookieDomain = () => {
  const domainData = getDomainData();

  return domainData.cookieDomain;
};

export const getCheckoutBaseUrl = () => {
  const domainData = getDomainData();

  return domainData.checkoutBaseUrl;
};

const getNonProdSubDomain = () => {
  switch (getCurrentDomain()) {
    case TM_UK:
     return 'tmuk.';
    case TM_IE:
      return 'tmie.';
    case TM_MX:
      return 'tmmx.';
    default:
      return '';
  }
};

export const getCheckoutBaseUrlOverride = () => {
  if (window?.location?.hostname) {
    const { hostname } = window.location;
    const iccpDomains = /dev\.ticketmaster\.(?:co\.uk|com\.mx|ie)/u;
    const nonProdDomains = /\.nonprod-tmaws\.io$/u;
    const queryStrings = new URLSearchParams(window.location.search);
    const checkoutWebappEnv = queryStrings.get('co');
    const nonProdEnvPattern = /^[\w-]+$/u;
    const isNonProdDomain = nonProdDomains.test(hostname) || iccpDomains.test(hostname);

    if (
      isNonProdDomain &&
      checkoutWebappEnv &&
      nonProdEnvPattern.test(checkoutWebappEnv)
    ) {
      return `https://${checkoutWebappEnv}.checkout.${getNonProdSubDomain()}nonprod-tmaws.io`;
    }
  }

  return null;
};

export const getLoginPageEnabled = () => {
  const domainData = getDomainData();
  return domainData.loginPageEnabled === 'true';
}

export const getLoginPageBaseUrl = () => {
  const domainData = getDomainData();

  return domainData.loginPageBaseUrl;
};

export const getTickets = (tickets) => {
  return tickets.map(ticket => ({
    ...ticket,
    ticketTypes: ticket.ticketTypes.map(type => {
      const { priceDetails } = type;

      if (priceDetails) {
        const { distanceCharges, serviceCharges } = priceDetails;

        return {
          ...type,
          priceDetails: removeUndefinedFields({
            ...priceDetails,
            distanceCharges: undefined,
            serviceCharges: distanceCharges ? {
              currencyCode: serviceCharges.currencyCode,
              subCurrencyValue: serviceCharges.subCurrencyValue + distanceCharges.subCurrencyValue,
            } : serviceCharges,
          }),
        }
      }

      return type;
    }),
  }));
};

export const getIsAppview = () => {
  const queryStrings = new URLSearchParams(window.location.search);

  return (
    queryStrings.get('f_app') === 'true' ||
    queryStrings.get('f_appview') === 'true'
  );
};
