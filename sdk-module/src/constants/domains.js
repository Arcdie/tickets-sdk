export const TM_US = 'TM_US';
export const TM_CA = 'TM_CA';
export const LN_US = 'LN_US';
export const TM_UK = 'TM_UK';
export const TM_IE = 'TM_IE';
export const TM_MX = 'TM_MX';

export const DOMAIN_DATA = {
  TM_US: {
    checkoutBaseUrl: process.env.TM_US_CHECKOUT_BASE_URL,
    cookieDomain: process.env.TM_US_COOKIE_DOMAIN,
    domain: TM_US,
    loginPageEnabled: process.env.TM_US_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.TM_US_LOGIN_PAGE_BASE_URL,
  },
  LN_US: {
    checkoutBaseUrl: process.env.LN_US_CHECKOUT_BASE_URL,
    cookieDomain: process.env.LN_US_COOKIE_DOMAIN,
    domain: LN_US,
    loginPageEnabled: process.env.LN_US_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.LN_US_LOGIN_PAGE_BASE_URL,
  },
  TM_CA: {
    checkoutBaseUrl: process.env.TM_CA_CHECKOUT_BASE_URL,
    cookieDomain: process.env.TM_CA_COOKIE_DOMAIN,
    domain: TM_CA,
    loginPageEnabled: process.env.TM_CA_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.TM_CA_LOGIN_PAGE_BASE_URL,
  },
  TM_UK: {
    checkoutBaseUrl: process.env.TM_UK_CHECKOUT_BASE_URL,
    cookieDomain: process.env.TM_UK_COOKIE_DOMAIN,
    domain: TM_UK,
    loginPageEnabled: process.env.TM_UK_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.TM_UK_LOGIN_PAGE_BASE_URL,
  },
  TM_IE: {
    checkoutBaseUrl: process.env.TM_IE_CHECKOUT_BASE_URL,
    cookieDomain: process.env.TM_IE_COOKIE_DOMAIN,
    domain: TM_IE,
    loginPageEnabled: process.env.TM_IE_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.TM_IE_LOGIN_PAGE_BASE_URL,
  },
  TM_MX: {
    checkoutBaseUrl: process.env.TM_MX_CHECKOUT_BASE_URL,
    cookieDomain: process.env.TM_MX_COOKIE_DOMAIN,
    domain: TM_MX,
    loginPageEnabled: process.env.TM_MX_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.TM_MX_LOGIN_PAGE_BASE_URL,
  },
  default: {
    checkoutBaseUrl: process.env.TM_US_CHECKOUT_BASE_URL,
    cookieDomain: process.env.TM_US_COOKIE_DOMAIN,
    domain: TM_US,
    loginPageEnabled: process.env.TM_US_LOGIN_PAGE_ENABLED,
    loginPageBaseUrl: process.env.TM_US_LOGIN_PAGE_BASE_URL,
  },
};
