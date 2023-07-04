import { HttpsProxyAgent } from 'https-proxy-agent';

import config from '../config';

export const getProxyAgent = () =>
  new HttpsProxyAgent(`http://${config.proxy.login}:${config.proxy.password}@${config.proxy.ip}:${config.proxy.port}`);
