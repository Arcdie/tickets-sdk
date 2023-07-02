const WebSocket = require('ws');

const { getProxyAgent } = require('./proxyAgent');

module.exports = class WebSocketByProxy extends WebSocket {
  constructor(...args) {
    const newArgs = [...args, { agent: getProxyAgent() }];
    super(newArgs);
    console.log('newArgs', newArgs);
  }
};
