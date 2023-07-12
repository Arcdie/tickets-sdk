import WebSocket, { ClientOptions } from 'ws';
import { HttpsProxyAgent } from 'https-proxy-agent';

import { getProxyAgent } from './proxyAgent';

export class CustomWebSocket extends WebSocket {
  constructor(url: string, protocol: string, settings: ClientOptions) {
    console.log('Websocket constructor called', url);
    super(url, protocol, settings);
  }
};

export const getConnection = (url: string, agent: HttpsProxyAgent<string>) =>
  new CustomWebSocket(`wss://${url}`, 'graphql-ws', { agent: getProxyAgent() });
