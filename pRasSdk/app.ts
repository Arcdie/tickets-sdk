import { setEnvironment } from '../libs/dotenv';

setEnvironment();

import { getConnection } from '../libs/ws';
import { getAvailablePlaceIds, compare } from './wasm';
import { getProxyAgent } from '../libs/proxyAgent';
import getInitMessages from './getInitMessages';

const appId = 'PRD2663_EDPAPP';
const eventId = '0C005E7DA5612A0D';
const sessionId = '3:IxXEo8Pfipkb0hJJrLIbpg==:+yINVfXgMatGrUijxQ346pUXwfdDgL6/gU7Z30Cq3U2hT4YSJJUFIMiSOsG1JzHYlIiHlAfb5PuMzSafWtOsuXyBaQyzrEmi5WLivVtq5U543dG2BgsMSkao3PvqUA8HhRLF2/NYJgHtyV9CQTVDVlpuGsmRUyXL7DtjqoG3aW7p/ZKD0hK/z0wVQVIyeUOpQUwdHA3+O3+nm5LInfpZON1Kg41NcG2027e/jA6AoHfAWWol4pcU5+5mVsdC8gQoWo3tko6RMfbSdHHQwY/x1MFbQ0vsys/G9YVwT0kZb5y77BUPhuZF6T++D0QxY3foURf+1R+mg/pyhD0kOtnEAZYIU/jajaVC2trDQFMwlKn6JRKcQ44kF+8rJ4mvBiZ8yKvgvvIWJJUsLguVEc8uXOhlBW6DTjnrdxSgWDp2QFG541KxZ2gR0cZ0bIzjscnyRpDmOSBRpGr3HOBrxBl+3Q==:SFAIJmzWERkV4J3nQKipGiAmMlnvuWiU1KaEypBhKsg=';

const requestUrl = `marketplace.prod.pub-tmaws.io/avpp/v2/graphql?app=${appId}&sessionId=${sessionId}`;

const setConnection = () => {
  // connection lives 12 minutes
  const wss = getConnection(requestUrl, getProxyAgent());

  wss.on('error', err => console.log('ws.error', err));

  wss.on('message', async bufferData => {
    const message = JSON.parse(bufferData.toString());
    console.log('ws.message', JSON.stringify(message, null, 2));

    if (message.payload && message.payload.data && message.payload.data.availability) {
      const placeIds = await getAvailablePlaceIds(eventId, message.payload.data.availability.buffer);
      console.log('placeIds', placeIds);

      // for debugging
      // compare();
    }
  });

  wss.on('open', () => {
    console.log('ws.open');
    const initMessages = getInitMessages(eventId);

    for (const message of initMessages) {
      wss.send(JSON.stringify(message));
    }
  });

  wss.on('close', () => {
    console.log('ws.close');
    setConnection();
  });
};

setConnection();
