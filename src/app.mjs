import crypto from 'crypto';
import browserEnv from './browserEnv.mjs';
import { getProxyAgent } from '../libs/proxyAgent.mjs';

const eventId = '0F005E5CD4FC2F47';
const cookies = 'reese84=3:Kg+gv3FnQ5BDa8kIBBEepg==:uy3PPZ4T7C3bzRr77zLDOSNzikC7roh/1isF+2cSZP+mcUTllUxTr6fR+cZGPMrqxjjviOAevzhtWWpxdYYUcJ+ntvi9qSi7zCiuKgLngkUHgk9n5SO8DhG6aWkXb9HO6Ke33WKja4WRC24pSpVdE8VNaseW8jKg52+xr0fFy9pbLhVBo206Ss0hpLfISPb9dOft7GQ6PnbqcjWLSm4/iiX5MTMwaI23+AQwRryMMjDpoEUj+ozaOm4/S5xhrOYkZWI6iiHgJZ0JsKiebZrqy7V68hUz7vF5rz5RMh5zOmkF8QqqCH0w1M2/xtKsTpgcaiXgZ1XlyBOnjVF/McW/OmJ4stYIjt1kV4s5xnfbm9VgXUMKoNWFI2o84sX//MSzhKZYaLvM1vHIrx6MsDRvdivyQxkbyemjLZuJ7rjXDY7V5PB0lU3+kF9pUy3uCmijrsqyCVBZJqEVdY+zEdywbK4AdnEh/iEvaxxPEuabrGmVv/3aYGqRuoEZNqFyJvLCcgrhH7mR/uUmJShLcvhD70jREGrVNZ9YOsYLaW5f3BkxoekqaM7/JMQMUDSKtvcz:/m8HwkNM3D+2R7eWh27gGAh02KO3WqFa80NSbH1eOL4=';

browserEnv({
  url: `https://concerts.livenation.com/event/${eventId}`,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
});

self.fetch = fetch;
self.crypto = crypto;
window.crypto = crypto;
window.proxyAgent = getProxyAgent();
window.encodeURIComponent = encodeURIComponent;

const setCookies = (cookies) => {
  const arr = cookies.split('; ');
  arr.forEach(e => document.cookie = `${e};`);
};

(async () => {
  setCookies(cookies);

  const sdk = await import('../libs/sdk/index.mjs');
  const instance = await sdk.default.init({ eventId });
  console.log('instance', instance);

  const checkout = await instance.checkout({ eventId, "requestorId": "f38ce660-16a0-11ee-a669-d9853f663d51", "requestContext": { "localeInjected": "en-us", "locale": "en-us" }, "tickets": [{ "inventoryDetail": { "type": "Primary" }, "row": "4", "section": "RSLWNB", "ticketTypes": [{ "id": "000000000001", "quantity": 1 }] }] }, { "appview": false, "appviewLN": false, "appviewVersion": 1, "toolspreview": false, "channel": 0, "layout": "", "redirect": true, "source": 2 });
  console.log('checkout', checkout);
})();
