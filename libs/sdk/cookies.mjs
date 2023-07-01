import cookies from 'cookies-js/dist/cookies.js';
import { getCookieDomain } from './utils/index.mjs';

export const setCookie = (name, value) => {
  const domain = getCookieDomain();
  const day = 60 * 60 * 24 * 1000;

  cookies.set(name, value, {
    domain,
    expires: new Date(Date.now() + day),
    path: '/',
  });
};

export const getCookie = (name) => cookies.get(name);