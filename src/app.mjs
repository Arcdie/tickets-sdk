import crypto from 'crypto';
import browserEnv from './browserEnv.mjs';
import { getProxyAgent } from '../libs/proxyAgent.mjs';

const eventId = '00005E66AD4B2014';
const cookies = 'reese84=3:OqR1kHkkfaT1DkL8ElJ3tA==:8RpiR4gm/tyK+U9ugHTmJZMIg5lH8lCyJQKRhK6XhkgRGnAWWw40Wqi9VDdIrPMiQaoRkMPJfZowFMjE8TMbtnzzMxuHPRfZjsrtE9PiLcRVue9an6P/xdxk8kUMNCLYHNtj3bb/fEeFwvvP8YvGKIU70+rLanqRbC3hTjJ2Kt2OYFDxqAhRn+Veey2114QOAlzFsb+rwjTKY3xgpbfOG0SltyHfX+s5rdClWbXFI1NWkW/CfqDOz/Xvxu38CfmwnFJ5vAVJ/3c2QfF51d71Z6B3HqjSRXiMQpK22xToUkkP1w05uEy6rwEfFDZ59Z/+ETis0yJZpbULbq8cPDlBg8sLSoL+nA9cgSCmUT+eHovNpQH89BuuN7tq1phMED+/vXLkho47M7dNKBB0nxCRnUkTNGKtn9P57LAdbNNwt8PB891fQMhBWyjYssYDw/8GwxhnL7CY6HCt+VKR3dLYZQ==:wj3/RD42ATfwD5zUe8t7U4Zon78aBG4ppFXYchyU5ks=';

browserEnv({
  url: `https://concerts.livenation.com/event/${eventId}`,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
});

self.fetch = fetch;
self.crypto = crypto;
window.crypto = crypto;
window.proxyAgent = getProxyAgent();

const setCookies = (cookies) => {
  const arr = cookies.split('; ');
  arr.forEach(e => document.cookie = `${e};`);
};

(async () => {
  setCookies(cookies);

  const sdk = await import('../libs/sdk/index.mjs');
  const instance = await sdk.default.init({ eventId });
  console.log('instance', instance);

  const checkout = await instance.checkout({ eventId, "requestorId": "f38ce660-16a0-11ee-a669-d9853f663d51", "requestContext": { "localeInjected": "en-us", "locale": "en-us" }, "tickets": [{ "inventoryDetail": { "type": "Primary" }, "row": "A", "section": "SECA", "ticketTypes": [{ "id": "000000000001", "quantity": 4 }] }] }, { "appview": false, "appviewLN": false, "appviewVersion": 1, "toolspreview": false, "channel": 0, "layout": "", "redirect": true, "source": 2 });
  console.log('checkout', checkout);
})();
