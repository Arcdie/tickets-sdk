import { Observable, Subscriber } from 'rxjs';
import { Worker } from 'worker_threads';

let ob: Subscriber<unknown>;

export const getObserver = () => {
  return new Observable(observer => {
    const worker = new Worker('./test/workerRunner.js');
    ob = observer;

    // observer.next('message');
    // observer.complete();

    worker
      .on('message', msg => observer.next(msg))
      .on('error', err => {
        console.log('on.error');
        observer.error(err);
      })
      .on('exit', code => {
        console.log('exit', code);
        observer.complete();
      });

    return () => {
      console.log('return ()');
      // worker.terminate();
      // worker.postMessage({ action: 'exit' });

      /*
      setTimeout(() => {
        console.log('worker.threadId', worker.threadId);

        if (worker.threadId !== -1) {
          throw new Error('worker.threadId !== -1');
        }
      }, 2000);
      */
    };
  });
};

const observer = getObserver();

const subscribtion = observer.subscribe({
  next: (msg) => {
    console.log('message', msg);
    // subscribtion.unsubscribe();
  },
  error: (err) => {
    console.log('error', err);
  },
  complete: () => {
    console.log('complete');
  }
});

// setInterval(() => {
//   console.log(worker.threadId);
// }, 2000);

// /*
setTimeout(() => {
  // ob.next('message2');
  ob.complete();
  // console.log('unsubscribe');
  // subscribtion.unsubscribe();

  // setInterval(() => {
  //   console.log(worker.threadId);
  // }, 2000);
}, 3000);
// */
