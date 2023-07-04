import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import initSdk from '../libs/sdk';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, setCookies, getUserAgent } from '../libs/jsdom';

const eventId = '0F005E5CD4FC2F47';
const url = 'concerts.livenation.com/event';
const cookies = 'reese84=3:FUi3q8E1g7Q59+87ZMOOnA==:0XHbyfAGgKqjJEjz0YcRcgScRfMmj0optgN04O8Mc1q1kO8RkBOJIwOF++2o4NLKvGlWt/0lrSUdUdfpl38ztfxqvfGhcA1rK5flKKJOqfEtgmzytZprctjYg3EAz7HBiMFq4gj+5SoNXjQN++iMEGeNyOiVAGjGdRrNqNrbR2hWOv3Hno1Chk5YHDOSb7dp6P/KKVMn7g0wBcq87+cw/LujmFQnffa06hXAG23C5rEol6pP4fAvmm/XEjiM0++LKVdJIf35Si4CIwOujuDLD8LLk2mfesS9jB7f8fr62HOwMx8vX2ks30YfbEdlIZcGU8tY3vi+5PcmXtCBJ7nhtbEqssZWQWFnc2n8K00joVK/xdBWkeOFxwbOZXB7CjAgEHgBCNNRfy06ZAtyMn3sr7mbbrX2YqsXq7WF4VyfJlJX9GG8kf3zMmckMCp1nIRKKo9ibI1ugpDlAI7BORRi6A==:nHSTohVBal3uRfgDwiHgRZk8Lsd6OB/3O3/Qs9bFwQw=';

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
  });

  const instance = await sdk.default.init({ eventId });
  console.log('instance', instance);

  const checkout = await instance.checkout({ eventId, "requestorId": "f38ce660-16a0-11ee-a669-d9853f663d51", "requestContext": { "localeInjected": "en-us", "locale": "en-us" }, "tickets": [{ "inventoryDetail": { "type": "Primary" }, "row": "4", "section": "RSLWNB", "ticketTypes": [{ "id": "000000000001", "quantity": 1 }] }] }, { "appview": false, "appviewLN": false, "appviewVersion": 1, "toolspreview": false, "channel": 0, "layout": "", "redirect": true, "source": 2 });
  console.log('checkout', checkout);
})();
