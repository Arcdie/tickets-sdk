import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import initSdk from '../libs/sdk';
import { CustomWebSocket } from '../libs/ws';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, setCookies, getUserAgent } from '../libs/jsdom';

const eventId = '0F005E5CD4FC2F47';
const url = 'concerts.livenation.com/event';
const cookies = 'reese84=3:3gBnJMc5Sd4NEKNnXmjVBQ==:7hnCRibfM1+NySM8BhepcsPsg9RRGdFnYzWgGdgHe72aBrhaTRWmH2wB2qjTvwNBViJkRKTQIVISUye95cwrd+VDxXyIszGW2McjELeoXoaULrlOPAo713VzMzkoHis/X5W/rOabJkjtSoBUGtloRIhTyLZwHxaHgdkADzSQoKq83bXXxCnYQr/Na4/99z9I4On+lVQU2IMwchyqEhqtYPSjRx3OD8yz8lyaNW0jw45gJ+3dWtadKNaoYDlZjgUNNA1H1G728WFD/cQTqY9dMPSYlc/uUhR2J9mBdmxcYHATjcbc4pWN7jLszWSe5hf0h/1PsbKs/rF4T9qRq+aTLVclpgOyao1uINy2zRPnHIjS5JPlrQsLtgsQozoUlZZuUnFjExhMwL2aBiLiHVeh04afn0N1EnF5gSnsEjobL8tHAiAHsyofBnQXH6ufCMxLinhhgBr2zm60e665kiE8Rw==:y95u6i/svS5of3LpjHealx9WJIXZIFhTUCYX/trKUJ4=';

(async () => {
  const userAgent = getUserAgent();
  const proxyAgent = getProxyAgent();

  const { window } = initJSDOM({
    url: `https://${url}/${eventId}`,
  });

  const { document } = window;
  setCookies(document, cookies);

  const fetch = fetchLocal({
    userAgent,
    proxyAgent,
    cookies: document.cookie
  });

  const sdk: any = initSdk({
    fetch,
    window,
    document,
    proxyAgent,
    CustomWebSocket,
  });

  const instance = await sdk.default.init({ eventId });
  console.log('instance', instance);

  const checkout = await instance.checkout({ eventId, "requestorId": "f38ce660-16a0-11ee-a669-d9853f663d51", "requestContext": { "localeInjected": "en-us", "locale": "en-us" }, "tickets": [{ "inventoryDetail": { "type": "Primary" }, "row": "4", "section": "RSLWNB", "ticketTypes": [{ "id": "000000000001", "quantity": 1 }] }] }, { "appview": false, "appviewLN": false, "appviewVersion": 1, "toolspreview": false, "channel": 0, "layout": "", "redirect": true, "source": 2 });
  console.log('checkout', checkout);
})();
