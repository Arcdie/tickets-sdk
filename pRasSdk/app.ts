import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import { getConnection } from '../libs/ws';
import { getProxyAgent } from '../libs/proxyAgent';
import getInitMessages from './getInitMessages';

const appId = 'PRD2663_EDPAPP';
const eventId = '05005D7EF30764C5';
const sessionId = '3%3AJdoF8poGBQqCnTJZBh1b6Q%3D%3D%3AaUmHG8AAfbihYAv5aGdblrTJEZ%2F0NsePpFL02sqZ%2FxVvS15V%2FW66EySzVOiaiVZrOv0soD0U1qW7%2FnbmlcySnULIewVnG4tGdN6ZMBlm%2BDkF8Eqf8XA0FX1a7SqokxTmxgDUJrUkBiZteWPLJh8mwdLe83oXnP2RuSHGpbWK1b95VaBIzgY7lZILOC88myC1wXQtZvXTG0ZQgCIppRwfZQ%2Bi9ipYTk%2FbZWxrSWnt56kTLotdwYVSyPVWBY%2F7%2BnroqYi3VP%2B0IpgaoLBqKfogDTr3vUeGJO8W2EXDm9DEGnlkrMLSg73BfRJftMgmqdzjVXtyI9aAdDQqcYSHP6Cb1W%2F%2BBeCjtgGev%2FRONS%2FtIcyedKYOzAyVbXSVoQRkMKIOGSQZqGvwwQCWRa00aA93bMPnpO9tnRWFJAF8okXr6%2FrEQg0QjFG%2BNtV5QsYjupm1RMoGrBhQbC%2FO1zg3FJZv0w%3D%3D%3ARfsIJNz%2BYYmqRUjgqy%2BpF8OMNrQk4zkXUuFkruFnxGg%3D';

const requestUrl = `marketplace.prod.pub-tmaws.io/avpp/v2/graphql?app=${appId}&sessionId=${sessionId}`;

const setConnection = () => {
  // connection lives 12 minutes
  const wss = getConnection(requestUrl, getProxyAgent());

  wss.on('error', err => console.log('ws.error', err));

  wss.on('message', bufferData => {
    const message = JSON.parse(bufferData.toString());
    console.log('ws.message', JSON.stringify(message, null, 2));
  });

  wss.on('open', () => {
    console.log('ws.open');
    const initMessages = getInitMessages(eventId);

    for (const message of initMessages) {
      wss.send(JSON.stringify(message));
    }
  });

  wss.on('close', () => {
    console.log('ws.close');
    setConnection();
  });
};

setConnection();
