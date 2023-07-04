import WebSocket, { ClientOptions } from 'ws';

export class CustomWebSocket extends WebSocket {
  constructor(url: string, protocol: string, settings: ClientOptions) {
    console.log('Websocket constructor called');
    super(url, protocol, settings);
  }
};
