import { parentPort, workerData } from 'worker_threads';

import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import initRasSDK from '../libs/rasSdk';
import { CustomWebSocket } from '../libs/ws';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, getUserAgent } from '../libs/jsdom';

interface IInitParams {
  eventId: string;
  sessionId: string;
};

const findOutWhatReleasedAndWhatRemoved = (oldSet: Set<unknown>, newSet: Set<unknown>) => {
  const released = [...newSet].filter(el => !oldSet.has(el));
  const removed = [...oldSet].filter(el => !newSet.has(el));

  return { released, removed };
};

const init = ({
  eventId,
  sessionId,
}: IInitParams) => new Promise(async (res, rej) => {
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
      return res(e);
    },
  });
});

(async () => {
  parentPort?.postMessage(await init(workerData));
})();

