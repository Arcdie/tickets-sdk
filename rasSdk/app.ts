import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import { sleep } from '../libs/helper';
import initRasSDK from '../libs/rasSdk';
import { CustomWebSocket } from '../libs/ws';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, getUserAgent } from '../libs/jsdom';

const eventIds = ['0F005E5CD4FC2F47', '00005EA29B784B9C', '00005EABDBF97CD8', '00005D85C34A21D9', '00005EABDBF97CD8'];
// const eventIds = ['0F005E5CD4FC2F47', '00005EA29B784B9C', '00005EABDBF97CD8', '00005D85C34A21D9', '00005EABDBF97CD8', '0F005E5CD4FC2F47', '00005EA29B784B9C', '00005EABDBF97CD8', '00005D85C34A21D9', '00005EABDBF97CD8'];
const sessionId = '3:UNfH9dHE4Bhz1UVu5wGBKw==:dcZEmELabu6TDlcqPbFKKCc31Ue6Xj2fGMVW08KY78sK8GMf0wB+1EeerHmM/cj6m/K+VO6MoefYNCKsgcqZrRPAZfGjXwbufbM/eFuf4qyqXszqq3QpHOSpsZED5HNYB+TyVKIgv121/Tk68t30PD0nbxqiKDcUlgHrzsOzFwGhj1PGE791P7oT08RaCUnIrUtitA+Ej5UTqSU4NqWS9ISwectKb60b6wCAHF1TNWU2AUmV3W93jFmE/0rMutuQhx8/fnHsrHZxFV497QDxVSi8jtVaF80N4p2SyuBPepcUbVKP2KjLr4vtinCl2sOeugXmongw1Fu6PrenVfqIOd03NPYEabfrRiw+nngEcKgh6YjCXhmXdSIZ7M17E4Q7l8JdYzNqBMMftXy9DVZ78iaDPjjKgYx9ptGs109ABphQSg01oZ8Ut5+yR9tU2GvxZNQlrT5wbzuQa1tPJa6d5Q==:0DM9b1tf2nes/xMRqSh6OBzNKpwrwgmqKOMeRy4Rxog=';

const go = async () => {
  const { window } = initJSDOM();
  const proxyAgent = getProxyAgent();

  const fetch = fetchLocal({
    proxyAgent,
    userAgent: getUserAgent(),
  });

  let instance = await initRasSDK({
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

  const subscriptions = [];

  for await (const eventId of eventIds) {
    const observer = instance.observeEventAvailability(eventId, {});

    const subscription = observer.subscribe({
      next: (t: any) => {
        const e = t.getAvailablePlaceIds();
        console.log(eventId, e);     
      },
    });

    subscriptions.push(subscription);
    await sleep(3000);
  }

  await sleep(5000);

  subscriptions.forEach(subscribtion => subscribtion.unsubscribe());
  instance = undefined;
};

setTimeout(async () => {
  console.log('next GO');
  await go();
  await sleep(10000);

  setTimeout(async () => {
    console.log('next GO');
    await go();
    await sleep(10000);
  }, 10000);
}, 5000);
