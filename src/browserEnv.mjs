import { JSDOM, ResourceLoader } from 'browser-env/node_modules/jsdom/lib/api.js';

const defaultJsdomConfig = {
  features: {
    FetchExternalResources: false,
    ProcessExternalResources: false
  }
};

class Window {
  constructor(jsdomConfig = {}) {
    const { proxy, strictSSL, userAgent, url } = jsdomConfig;
    const resources = new ResourceLoader({ proxy, strictSSL, userAgent });

    return (new JSDOM('', Object.assign(jsdomConfig, {
      resources,
    }))).window;
  }
};

const protectedProperties = (() => Object
  .getOwnPropertyNames(new Window(defaultJsdomConfig))
  .filter(prop => typeof global[prop] !== 'undefined')
)();

const browserEnv = function () {
  const args = Array.from(arguments);
  const properties = args.filter(arg => Array.isArray(arg))[0];
  const userJsdomConfig = args.filter(arg => !Array.isArray(arg))[0];

  const window = new Window({
    ...userJsdomConfig,
    ...defaultJsdomConfig,
  });

  Object.getOwnPropertyNames(window)
    .filter(prop => protectedProperties.indexOf(prop) === -1)
    .filter(prop => !(properties && properties.indexOf(prop) === -1))
    .forEach(prop => {
      Object.defineProperty(global, prop, {
        configurable: true,
        get: () => window[prop]
      });
    });

  return window;
};

export default browserEnv;
