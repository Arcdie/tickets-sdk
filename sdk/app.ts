import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import initSdk from '../libs/sdk';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, setCookies, getUserAgent } from '../libs/jsdom';

const eventId = '0F005E5CD4FC2F47';
const url = 'concerts.livenation.com/event';
const cookies = 'reese84=3:syBvDipvTE5LRiLtnXHc6g==:zIaUQlJW9MqjOBcoMbz2a9fpdxN4EIKxL6agVINT35Y0yz4MnxfRMfPFDkmzatjghEK5Abw6YfKN6VG20CkpRoZ7mSQajqDmU7oRbEL0UPizC7X4accNTmexEXsp0BiloSf8GmCkB9UhjZEBXPL+txeGQPQYVaCuBUdOJPiUY5TwNTUTY/1j5Vz0URlJtiwgfpzsGKz6x+QDN/44WqTA2yJBJqDUfMZI4rZhf0O/c6SEZyPdF0k23hNyEcKCj402/fBQDmwod9CiM1XTTKU8ELVrFI9KLtWmiVX2bEn3PRiAmbUFZhfW89cnJY15h91Q2bgUwPl+93RO/4Wp8W7Gg0rfykmjBcsL5EE3sNCnz+hphWXzdQt4dKumm9SkKPnd4oDnO19x8WFsQ4GELso5FJO+cEOu1EF+qla23F1JZf264mLwi2OONJWgnYERcgVRODoZMcm7qTcjpyCubwj+F90JceQugSEPAzqqtU6UFoKWnM4z7Remn+xIZiPan3cllkpY3VpU9ti0HRkWOkzdYblx1nm1iX5Mwf42ISYfdV7qIAQj9Alk2FCzXkK2ZhcZ:SMNR+QAntwLbBeXGjtbGYiVaKbbrr+r9Yr9rFGVkH9Q=';

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
