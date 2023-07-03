const nodeFetch = require('node-fetch');
const { JSDOM, ResourceLoader } = require('jsdom');

require('../ras/libs/setEnvironment')
const { getProxyAgent } = require('../ras/libs/proxyAgent');

const eventId = '0F005E5CD4FC2F47';
const cookies = 'reese84=3:mddy71vC0dB93Pe1LSlOqw==:afqWAhwY3kZr7AM+tWqkYWwfm+WRZ+3aJfzwmmHres9TYJtWNoIgBqkVbd+klTkeb1gIsdrhj72myC7NyeXJrpK1x3fJpXiX5Wog9FqctOMJzeAIbrzxLb8VzVd+mbdJ/JZyYcbGHZLh8Ez4V9PiZ6yvowIniqROqoZF0myAbu8XaI7P0Ea8qjZMO6g8YP5o52kcNKE9KHH/RyjeGIXJPBGA0c0iIEWe5GBhWDh/nMfSi4t7hKLMUNN3aSoZfGDXmGX+dCNPN7cizjWDJ4xIuGWtMjqAiJ0NiUmDSz+Ym6AYwUWzpOBZBt8SOutAdlFoDh2ASQzRq+EiE1yGSKK4C8TGnGthIr2hDZGV65Q1sElajNJsB4AvFOFFSVBOniQf6evTeIEmKtAalMKSp30G9gE4SbGVBXMIKtvJGFZEIYUO4k7a3XLsMzB3n3swC10tfV1sohkZYTEWYWdbtApnx6zcrelmCG+ZKimW5SruTotgbVLYAShZeBAAHGfROp10lmCfZ2l//Pyb++M4RI5YdgZ1Cen8nXL28AR+ZLjaGbmnUr4dSAYeGkQaCP578ARd:EfSsjqHwJVNoRa2ZMATJR0sPLhAsUw72tntG+rUursw=';
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';

const initJSDOM = ({ url, userAgent }) => {
  const resources = new ResourceLoader({ userAgent });

  return new JSDOM('', {
    url,
    resources,
    features: {
      FetchExternalResources: false,
      ProcessExternalResources: false
    }
  });
};

const setCookies = (document, cookies) => {
  const arr = cookies.split('; ');
  arr.forEach(e => document.cookie = `${e};`);
};

(async () => {
  const proxyAgent = getProxyAgent();

  const { window } = initJSDOM({
    userAgent,
    url: `https://concerts.livenation.com/event/${eventId}`,
  });

  const document = window.document;

  const fetch = (...args) => {
    if (!args[1]) {
      args[1] = {};
    }

    if (!args[1].headers) {
      args[1].headers = {};
    }

    if (args[1].credentials) {
      delete args[1].credentials;
    }

    args[1].agent = proxyAgent;
    args[1].headers.cookie = document.cookie;
    args[1].headers['user-agent'] = userAgent;
    
    console.log('fetchLocal', args);
    return nodeFetch(...args);
  };

  setCookies(document, cookies);
  const sdk = require('../libs/sdk.min')({
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
