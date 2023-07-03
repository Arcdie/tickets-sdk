const WebSocket = require('ws');

module.exports = class CustomWebSocket extends WebSocket {
  constructor(url, protocol, settings) {
    console.log('Websocket constructor called');
    super(url, protocol, settings);
  }
};
