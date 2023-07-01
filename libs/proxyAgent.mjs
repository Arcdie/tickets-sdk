import { HttpsProxyAgent } from 'https-proxy-agent';

import config from '../config/index.mjs';
import { getRandomNumber } from './helper.mjs';

const MIN_LOGIN_VALUE = 1;
const MAX_LOGIN_VALUE = 960;

export const generateProxyUrl = () => `http://${config.proxy.ip}:${config.proxy.port}`;

export const getRandomLogin = () => `${config.proxy.login}-${getRandomNumber(MIN_LOGIN_VALUE, MAX_LOGIN_VALUE)}`;

export const getProxyAgent = () => {
  const str = `http://${getRandomLogin()}:${config.proxy.password}@${config.proxy.ip}:${config.proxy.port}`;
  return new HttpsProxyAgent(str);
};
