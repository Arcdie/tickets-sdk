import { Agent } from 'http';
import { RequestInit, HeadersInit } from 'node-fetch';
const importDynamic = new Function('modulePath', 'return import(modulePath)');

const nodeFetch = async (...args: any[]) => {
  const module = await importDynamic('node-fetch');
  return module.default(...args);
};

type TFetchLocalParams = { proxyAgent: Agent, userAgent: string; cookies?: string };
type TRequestInitHeaders = HeadersInit & { 'user-agent'?: string; cookie?: string };
type TExtendedRequestInit = RequestInit & { credentials?: string; headers?: TRequestInitHeaders };

export const fetchLocal = ({ proxyAgent, userAgent, cookies }: TFetchLocalParams) =>
  (url: string, options: TExtendedRequestInit = {}) => {
    if (!options.headers) {
      options.headers = {};
    }

    if (options.credentials) {
      delete options.credentials;
    }

    if (cookies) {
      options.headers.cookie = cookies;
    }

    options.agent = proxyAgent;
    options.headers['user-agent'] = userAgent;

    console.log('fetchLocal', url, options);
    return nodeFetch(url, options);
  };
