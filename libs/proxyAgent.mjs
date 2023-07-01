import { HttpsProxyAgent } from 'https-proxy-agent';

import config from '../config/index.mjs';

export const getProxyAgent = () => {
  const str = `http://${config.proxy.login}:${config.proxy.password}@${config.proxy.ip}:${config.proxy.port}`;
  return new HttpsProxyAgent(str);
};
