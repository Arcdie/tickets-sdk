import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import { getUniqueId } from '../libs/uuid';
import { getConnection } from '../libs/ws';
import { fetchWrapper } from '../libs/nodeFetch';
import { getUserAgent } from '../libs/jsdom';
import { getProxyAgent } from '../libs/proxyAgent';

import getQueryForReserveRequest from './getQueryForReserveRequest';
import getQueryForWebsocketRequest from './getQueryForWebsocketRequest';

const eventId = '0F005E5CD4FC2F47';
const cookies = 'reese84=3:3gBnJMc5Sd4NEKNnXmjVBQ==:7hnCRibfM1+NySM8BhepcsPsg9RRGdFnYzWgGdgHe72aBrhaTRWmH2wB2qjTvwNBViJkRKTQIVISUye95cwrd+VDxXyIszGW2McjELeoXoaULrlOPAo713VzMzkoHis/X5W/rOabJkjtSoBUGtloRIhTyLZwHxaHgdkADzSQoKq83bXXxCnYQr/Na4/99z9I4On+lVQU2IMwchyqEhqtYPSjRx3OD8yz8lyaNW0jw45gJ+3dWtadKNaoYDlZjgUNNA1H1G728WFD/cQTqY9dMPSYlc/uUhR2J9mBdmxcYHATjcbc4pWN7jLszWSe5hf0h/1PsbKs/rF4T9qRq+aTLVclpgOyao1uINy2zRPnHIjS5JPlrQsLtgsQozoUlZZuUnFjExhMwL2aBiLiHVeh04afn0N1EnF5gSnsEjobL8tHAiAHsyofBnQXH6ufCMxLinhhgBr2zm60e665kiE8Rw==:y95u6i/svS5of3LpjHealx9WJIXZIFhTUCYX/trKUJ4=';

const requestorId = getUniqueId();
const userAgent = getUserAgent();
const proxyAgent = getProxyAgent();

const makeRequest = fetchWrapper({
  proxyAgent,
  userAgent,
  cookies
});

type TRegion = 'east' | 'west';

interface IResultReserve {
  data: {
    reserve: {
      errors: null;
      requestId: string;
      status: 'SUCCESS'
    };
  };
}

const getApiKeyAndHostByRegion = (region: TRegion) =>
  region === 'east' ? {
    apikey: 'da2-esrv7m4ch5cmhk4tftair7zi74',
    host: 'o26jo4blcnf65jyg3hzjxarpwy.appsync-api.us-east-1.amazonaws.com',
  } : {
    apikey: 'da2-pbjuejzc5rac3fspc2ozvtouxy',
    host: 'ciziftt2drddxnqhvcpaffgv5y.appsync-api.us-west-2.amazonaws.com',
  };

const getRegion = () => makeRequest('https://checkout.livenation.com/region');

const reserve = async (requestorId: string) => {
  const requestBody = {
    query: getQueryForReserveRequest(),
    variables: {
      reserveInput: {
        eventId,
        requestorId,
        requestContext: {
          channel: 'mobile.livenation.us',
          locale: 'en-us',
        },
        tickets: [{
          row: '3',
          inventoryDetail: { type: 'Primary' },
          section: 'RSLWNB',
          ticketTypes: [{ id: '000000000001', quantity: 1 }],
        }]
      },
    },
  };

  return makeRequest('https://checkout.livenation.com/graphql', {
    method: 'POST',
    body: JSON.stringify(requestBody),
  })
};

const setConnection = (host: string, apikey: string) => {
  const getRequestUrl = () => {
    
    const headers = btoa(JSON.stringify({
      host,
      'x-api-key': apikey,
    }));
  
    return `${host.replace('api', 'realtime-api')}/graphql?header=${headers}&payload=e30=`;
  };

  const wss = getConnection(getRequestUrl(), proxyAgent);
  
  wss.on('error', err => console.log('ws.error', err));

  wss.on('message', bufferData => {
    const message = JSON.parse(bufferData.toString());
    console.log('ws.message', JSON.stringify(message, null, 2));

    if (message.type === 'connection_ack') {
      wss.send(JSON.stringify({
        type: 'start',
        id: requestorId,
        payload: {
          data: JSON.stringify({
            query: getQueryForWebsocketRequest(),
            variables: { requestorId },
          }),
          extensions: {
            authorization: {
              host,
              'x-api-key': apikey,
            },
          },
        },
      }));
    }

    if (message.type === 'data') {
      wss.close();
    }
  });

  wss.on('open', () => {
    console.log('ws.open');
    wss.send(JSON.stringify({ type: 'connection_init' }));
  });

  wss.on('close', () => {
    console.log('ws.close');
    process.exit(1);
  });
};

(async () => {
  const { region }: { region: TRegion } = await getRegion();
  const { apikey, host } = getApiKeyAndHostByRegion(region);

  const resultReserve: IResultReserve = await reserve(requestorId);
  console.log('resultReserve', resultReserve);

  setConnection(host, apikey);
})();

