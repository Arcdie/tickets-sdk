const WebSocket = require('ws');

module.exports = class WebSocketByProxy extends WebSocket {
  constructor(...args) {
    super(args);
    console.log('constructor called');
  }
};
