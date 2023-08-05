import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import initRasSDK from '../libs/rasSdk';
import { CustomWebSocket } from '../libs/ws';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';
import { initJSDOM, getUserAgent } from '../libs/jsdom';

const eventIds = ['00005E508E691825'];
const sessionId = '3:IxXEo8Pfipkb0hJJrLIbpg==:+yINVfXgMatGrUijxQ346pUXwfdDgL6/gU7Z30Cq3U2hT4YSJJUFIMiSOsG1JzHYlIiHlAfb5PuMzSafWtOsuXyBaQyzrEmi5WLivVtq5U543dG2BgsMSkao3PvqUA8HhRLF2/NYJgHtyV9CQTVDVlpuGsmRUyXL7DtjqoG3aW7p/ZKD0hK/z0wVQVIyeUOpQUwdHA3+O3+nm5LInfpZON1Kg41NcG2027e/jA6AoHfAWWol4pcU5+5mVsdC8gQoWo3tko6RMfbSdHHQwY/x1MFbQ0vsys/G9YVwT0kZb5y77BUPhuZF6T++D0QxY3foURf+1R+mg/pyhD0kOtnEAZYIU/jajaVC2trDQFMwlKn6JRKcQ44kF+8rJ4mvBiZ8yKvgvvIWJJUsLguVEc8uXOhlBW6DTjnrdxSgWDp2QFG541KxZ2gR0cZ0bIzjscnyRpDmOSBRpGr3HOBrxBl+3Q==:SFAIJmzWERkV4J3nQKipGiAmMlnvuWiU1KaEypBhKsg=';

const go = async (eventId: string) => {
  const { window } = initJSDOM();
  const proxyAgent = getProxyAgent();

  const fetch = fetchLocal({
    proxyAgent,
    userAgent: getUserAgent(),
  });

  const instance = await initRasSDK({
    avscURL: 'https://pubapi.ticketmaster.com',
    avppURL: 'wss://marketplace.prod.pub-tmaws.io',
    geometryURL: 'https://supermaps.prod.us-east-1.pub-tmaws.io',
    manifestURL: 'https://pubapi.ticketmaster.com',
    app: 'PRD2663_EDPAPP',
    remoteLogging: true,
    sessionId,
  }, {
    // fetch,
    window,
    document: window.document,
    CustomWebSocket,
  });

  const observer = instance.observeEventAvailability(eventId, {});

  observer.subscribe({
    next: (t: any) => {
      const e = t.getAvailablePlaceIds();
      console.log(eventId, e);
    },
  });
};

go(eventIds[0]);
