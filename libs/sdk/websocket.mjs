import WebSocket from 'ws';

export const createWebSocketClient = ({
  apiKey,
  host,
}, proxyAgent) => {
  const headers = btoa(JSON.stringify({
    host,
    'x-api-key': apiKey,
  }));
  const realtimeHost = host.replace('api', 'realtime-api');

  const url = `wss://${realtimeHost}/graphql?header=${headers}&payload=e30=`;

  return new WebSocket(
    url,
    'graphql-ws',
    { agent: proxyAgent }
  );
}
