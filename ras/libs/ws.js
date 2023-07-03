const WebSocket = require('ws');

module.exports = class WebSocketByProxy extends WebSocket {
  constructor(url, protocol, settings) {
    console.log('Websocket constructor called');
    super(url, protocol, settings);
  }
};
