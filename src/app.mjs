import crypto from 'crypto';
import browserEnv from './browserEnv.mjs';
import { getProxyAgent } from '../libs/proxyAgent.mjs';

const eventId = '00005E66AD4B2014';
const cookies = 'reese84=3:9Cb8Hl60PZ53/CjaV/if8A==:UAG9wYIvOQItnP8XyaO5zhrPkpcKoovpYquI0q/z/k7iDKJihPUucbJv30z41s3l4HfTbQlp20ioY21lGLsH5f/G9SYxFjoxMhBGbz9ur1RiH8ov8YwA1TYEPPBkbOhSfeeredSbH2hLcRNnkANiMM6MCNLOMzcBCYd8ApDejBWZyaYcJeBGSLsrs8opXZGTab45ASfPM6PIr9zfpf/PJLfjHZ9+yMXLRfpMxRL8zYZAbp2ZIQIr4aSzKwTXKD5LevDpnILMlKrnGp+Qy0q/yQpUDcGYDWGt+ot90f6iVoe2WGHR0b5TOBs4TQvxTBMJnNnpbcrGqCyOxedMMdoWzMrwwyHghDuXzgz3wc6VqhuIUv9ZBDF6utnRn32mlvwOdzan60gNqsJKNh0R3r6pH3s7xIh0aQ/L5dOPVipzkrG3MUtXZoiHMZQXzOddOlY57MC399SaRtaTczUinBBroHIRnkXQcHOlVBx68zBqo5CDoIkJeGBm5ueN8UlK0yxEAHGeISgfXBZh5/M8+DbymRlHY36eVRzy7+jkb2sO3JqZ1cQCNvKpuWazyUcwsS9W:SFsCu0pAnzw9x7N87PH0ISFUIOiwYNvixyZG+0EvuzM=';

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
