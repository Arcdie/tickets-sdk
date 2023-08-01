import { parentPort, workerData } from 'worker_threads';

const getUnixNow = () => (new Date().getTime() / 1000);

const init = async () => {
  let lastPing = getUnixNow();

  parentPort?.postMessage({
    childMessage: 'childMessage',
  });

  // throw new Error('myError');

  parentPort?.on('message', (msg) => {
    console.log('child_message', msg);

    if (msg.action === 'ping') {
      console.log('get ping');
      lastPing = getUnixNow();
    }

    if (msg.action === 'exit') {
      console.log('here');
      process.exit(0);
    }
  });

  /*
  setInterval(() => {
    if (getUnixNow() - lastPing > (1 * 60)) {
      // log
      console.log('getUnixNow() - lastPing');
      process.exit();
    }
  }, 5000);
  */
};

init();
