import nodeFetch from 'node-fetch';

import {
  JSDOM,
  ResourceLoader,
  ConstructorOptions,
} from 'jsdom';

export const getUserAgent = () =>
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';

export const initJSDOM = ({ url }: ConstructorOptions = {}) => {
  const resources = new ResourceLoader({
    userAgent: getUserAgent(),
  });

  return new JSDOM('', {
    url,
    resources,
  });
};

export const setCookies = (document: any, cookies: string) =>
  cookies.split('; ').forEach(e => document.cookie = `${e};`);

export const expandWindow = (window: Window, fetch: typeof nodeFetch) => {
  Object.defineProperties(window, {
    fetch: {
      writable: true,
      value: fetch,
    },

    matchMedia: {
      writable: true,
      value: () => { },
    },
  });

  return window;
};
