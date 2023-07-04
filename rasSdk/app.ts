import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import initRasSDK from '../libs/rasSdk';
import { CustomWebSocket } from '../libs/ws';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, getUserAgent } from '../libs/jsdom';

const eventId = '15005E58EEB15F8A';
const sessionId = '3:UNfH9dHE4Bhz1UVu5wGBKw==:dcZEmELabu6TDlcqPbFKKCc31Ue6Xj2fGMVW08KY78sK8GMf0wB+1EeerHmM/cj6m/K+VO6MoefYNCKsgcqZrRPAZfGjXwbufbM/eFuf4qyqXszqq3QpHOSpsZED5HNYB+TyVKIgv121/Tk68t30PD0nbxqiKDcUlgHrzsOzFwGhj1PGE791P7oT08RaCUnIrUtitA+Ej5UTqSU4NqWS9ISwectKb60b6wCAHF1TNWU2AUmV3W93jFmE/0rMutuQhx8/fnHsrHZxFV497QDxVSi8jtVaF80N4p2SyuBPepcUbVKP2KjLr4vtinCl2sOeugXmongw1Fu6PrenVfqIOd03NPYEabfrRiw+nngEcKgh6YjCXhmXdSIZ7M17E4Q7l8JdYzNqBMMftXy9DVZ78iaDPjjKgYx9ptGs109ABphQSg01oZ8Ut5+yR9tU2GvxZNQlrT5wbzuQa1tPJa6d5Q==:0DM9b1tf2nes/xMRqSh6OBzNKpwrwgmqKOMeRy4Rxog=';

const findOutWhatReleasedAndWhatRemoved = (oldSet: Set<unknown>, newSet: Set<unknown>) => {
  const released = [...newSet].filter(el => !oldSet.has(el));
  const removed = [...oldSet].filter(el => !newSet.has(el));

  return { released, removed };
};

const subsOnce = async (eventId: string) => {
  let oldSet = new Set();
  const { window } = initJSDOM();
  const proxyAgent = getProxyAgent();

  const fetch = fetchLocal({
    proxyAgent,
    userAgent: getUserAgent(),
  });

  const created = await initRasSDK({
    avscURL: 'https://pubapi.ticketmaster.com',
    avppURL: 'wss://marketplace.prod.pub-tmaws.io',
    geometryURL: 'https://supermaps.prod.us-east-1.pub-tmaws.io',
    manifestURL: 'https://pubapi.ticketmaster.com',
    app: 'PRD2663_EDPAPP',
    remoteLogging: true,
    sessionId,
  }, {
    fetch,
    proxyAgent,
    window,
    document: window.document,
    CustomWebSocket,
  });

  const asd = created.observeEventAvailability(eventId, {});

  asd.subscribe({
    next: (t: any) => {
      const e = t.getAvailablePlaceIds();
      const newSet = new Set(e);
      const { removed, released } = findOutWhatReleasedAndWhatRemoved(oldSet, newSet);

      if (oldSet.size > 0) {
        console.log('received update', eventId, new Date(), { removed, released });
      } else {
        console.log('initial assignment. Received: ' + newSet.size);
      }

      oldSet = newSet;
    },
  });
};

(async () => {
  subsOnce(eventId);
})().catch(e => console.error(e));
