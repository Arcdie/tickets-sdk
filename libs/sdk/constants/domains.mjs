export const TM_US = 'TM_US';
export const TM_CA = 'TM_CA';
export const LN_US = 'LN_US';
export const TM_UK = 'TM_UK';
export const TM_IE = 'TM_IE';
export const TM_MX = 'TM_MX';

export const DOMAIN_DATA = {
  TM_US: {
    checkoutBaseUrl: "https://checkout.ticketmaster.com",
    cookieDomain: "ticketmaster.com",
    domain: TM_US,
    loginPageEnabled: "false",
    loginPageBaseUrl: "https://identity.ticketmaster.com"
  },
  LN_US: {
    checkoutBaseUrl: "https://checkout.livenation.com",
    cookieDomain: "livenation.com",
    domain: LN_US,
    loginPageEnabled: "true",
    loginPageBaseUrl: "https://identity.livenation.com"
  },
  TM_CA: {
    checkoutBaseUrl: "https://checkout.ticketmaster.ca",
    cookieDomain: "ticketmaster.ca",
    domain: TM_CA,
    loginPageEnabled: "true",
    loginPageBaseUrl: "https://identity.ticketmaster.ca"
  },
  TM_UK: {
    checkoutBaseUrl: "https://checkout.ticketmaster.co.uk",
    cookieDomain: "ticketmaster.co.uk",
    domain: TM_UK,
    loginPageEnabled: "true",
    loginPageBaseUrl: "https://identity.ticketmaster.co.uk"
  },
  TM_IE: {
    checkoutBaseUrl: "https://checkout.ticketmaster.ie",
    cookieDomain: "ticketmaster.ie",
    domain: TM_IE,
    loginPageEnabled: "true",
    loginPageBaseUrl: "https://identity.ticketmaster.ie"
  },
  TM_MX: {
    checkoutBaseUrl: "https://checkout.ticketmaster.com.mx",
    cookieDomain: "ticketmaster.com.mx",
    domain: TM_MX,
    loginPageEnabled: "true",
    loginPageBaseUrl: "https://identity.ticketmaster.com.mx"
  },
  default: {
    checkoutBaseUrl: "https://checkout.ticketmaster.com",
    cookieDomain: "ticketmaster.com",
    domain: TM_US,
    loginPageEnabled: "false",
    loginPageBaseUrl: "https://identity.ticketmaster.com"
  }
};
