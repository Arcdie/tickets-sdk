import path from 'path';
import { Worker } from 'worker_threads';

const events = ['0F005E5CD4FC2F47', '05005D7EF30764C5'];
const sessionId = '3:UNfH9dHE4Bhz1UVu5wGBKw==:dcZEmELabu6TDlcqPbFKKCc31Ue6Xj2fGMVW08KY78sK8GMf0wB+1EeerHmM/cj6m/K+VO6MoefYNCKsgcqZrRPAZfGjXwbufbM/eFuf4qyqXszqq3QpHOSpsZED5HNYB+TyVKIgv121/Tk68t30PD0nbxqiKDcUlgHrzsOzFwGhj1PGE791P7oT08RaCUnIrUtitA+Ej5UTqSU4NqWS9ISwectKb60b6wCAHF1TNWU2AUmV3W93jFmE/0rMutuQhx8/fnHsrHZxFV497QDxVSi8jtVaF80N4p2SyuBPepcUbVKP2KjLr4vtinCl2sOeugXmongw1Fu6PrenVfqIOd03NPYEabfrRiw+nngEcKgh6YjCXhmXdSIZ7M17E4Q7l8JdYzNqBMMftXy9DVZ78iaDPjjKgYx9ptGs109ABphQSg01oZ8Ut5+yR9tU2GvxZNQlrT5wbzuQa1tPJa6d5Q==:0DM9b1tf2nes/xMRqSh6OBzNKpwrwgmqKOMeRy4Rxog=';

const getPathToInitHandler = () => path.join(__dirname, './init');

const handleEvent = (eventId: string) => new Promise((res, rej) => {
  const worker = new Worker(getPathToInitHandler(), {
    workerData: {
      eventId,
      sessionId,
    },
  });

  worker
    .on('message', msg => res(msg))
    .on('error', err => (console.log('error', `eventId: ${eventId}`, err), rej(err)))
    .on('exit', () => console.log('exit', `eventId: ${eventId}`));
});

(async () => {
  await Promise.all(events.map(async eventId => {
    const result = await handleEvent(eventId);
    console.log(`eventId: ${eventId}`, result);
  }));
})().catch(e => console.error(e));
