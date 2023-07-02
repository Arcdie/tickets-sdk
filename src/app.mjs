import crypto from 'crypto';
import browserEnv from './browserEnv.mjs';
import { getProxyAgent } from '../libs/proxyAgent.mjs';

const eventId = '0F005E5CD4FC2F47';
const cookies = 'reese84=3:Aj1bx/+3MZihwEk5WtsOzg==:hNYH50tBNoGUYbEJSDDVf4EkgAkS4NgvdOeq/cGtbzCQn70ocjfn4xzySRt1LyGVpQGnrMnuw86ASUt7WKp4E5JyNkZUuKZ269rGypssQ+F0nMTaVRyBlaHtea6cnO8MJfd/VCJFjLqU6NKSkymMwQQRbOufMSzwCqmmOirjwNSVcvgCvz4jVvBpVGM8Sr4edJ4BzSzWLmZjvOABwbqJ9MVlxaBIJU672qPLtBS4CMGZYjAUwAJV+1tOupLdTms7QAQ74tjO17E2JnlUjq9b5adWrkmTblTti2erE6BXfN21+JI6X0xkXhLpOya3yUBVV5dKWhc0nfOsp3iLi7PBso8tdOpQUgYpQZ5I6QwFAtWbbgvdjuSg8dJw54iAIXaRJf3yeoh+Kg5FZmOVBa8tlalDpuI4BRbjmByMIpkxsYRIlYZPJhGpKGjDJhNhbw+XNd+uYv4d1H4evSGe+5uzdg==:WqInAtSdfQcD/WEH98EfOT1rPWkv/RnOJFwhCXSb9Rc=';

browserEnv({
  url: `https://concerts.livenation.com/event/${eventId}`,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
});

self.fetch = fetch;
self.crypto = crypto;
window.crypto = crypto;
window.encodeURIComponent = encodeURIComponent;

const setCookies = (cookies) => {
  const arr = cookies.split('; ');
  arr.forEach(e => document.cookie = `${e};`);
};

(async () => {
  setCookies(cookies);

  const sdk = await import('../libs/sdk/index.mjs');

  const proxyAgent = getProxyAgent();
  const instance = await sdk.default.init({ eventId }, proxyAgent);
  console.log('instance', instance);

  const checkout = await instance.checkout({ eventId, "requestorId": "f38ce660-16a0-11ee-a669-d9853f663d51", "requestContext": { "localeInjected": "en-us", "locale": "en-us" }, "tickets": [{ "inventoryDetail": { "type": "Primary" }, "row": "4", "section": "RSLWNB", "ticketTypes": [{ "id": "000000000001", "quantity": 1 }] }] }, { "appview": false, "appviewLN": false, "appviewVersion": 1, "toolspreview": false, "channel": 0, "layout": "", "redirect": true, "source": 2 });
  console.log('checkout', checkout);
})();
