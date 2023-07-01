import crypto from 'crypto';
import browserEnv from './browserEnv.mjs';

browserEnv({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' });

self.fetch = fetch;
self.crypto = crypto;
window.crypto = crypto;

const cookies = 'eps_sid=e9e01949def257888fb3fe766e0fbdc4dc4e5bc4; _gcl_au=1.1.1781729629.1688056739; _gid=GA1.2.1865993604.1688056753; _pnvl=false; pushly.user_puuid=DWryAzmIrTwrmR2vucoHmGhce1E3D3dd; _au_1d=AU1D0200001688056753T08W9JNWR2WF; _scid=97c88ef8-c434-4cea-a079-960643c17aaf; _rdt_uuid=1688056753554.1574fe34-8da4-48d0-b1ba-be6b80838c12; _tt_enable_cookie=1; _ttp=NaN66zy-cncbs06D164Fb_VnRx6; _pnlspid=19778; _sctr=1%7C1687986000000; __qca=P0-328805128-1688056752922; mt.v=5.1674385400.1687187728189; _pnss=blocked; reese84=3:uHfaXywXdZC2Y5jm9zkHDA==:IAemjmfQOdfpee/gGl5d93ib0AL8nxKNl4v9Z6hnQ0LGZ9AbeJhM2f6uc3lZV3H3osXRtdwYiYK/v/eRRmPRlz3Bdj9xAD7HM1hM9DLXSkdd4hVvsBm+ycCACO8Mo8E88zJ6qaG0/sMDtPXvBGnCWsyd+vowUntw5AKqfizxMcFjSVTVguQh3asj+KHvoOxJ1bzeyoroNYHmh93nJFj27qAT13hTdRahqToeFB98QuEbUdohWW7jfMGuax2XFOUT5FTLpe7SeGVG8vyugKRVxgivGAR24EX9X44VkvDuMLC1zmNVe8lckZSoP7uP+0EGCWjQDo67BE2iFfB3PgpRSY8HURfJqVaUgehfjBicHSCusGqoSh5vkp4PYtwQfHuldGmnka5Ecudr+nzC9DenoXT0lu3p5QmToWKANsueHMrTtElJ4azVmrb20Mr7WWmMC+BP57ruq+KpCTEcUi1AbQ==:NYZ18crMkejEGD/zPh5vp6cN2tB8FdYB8sG96N6KqTY=; LANGUAGE=en-us; SID=CBgJU_YFl8qR-KiEX0BlEK1-F5_1lRzfIkvCWnx1ABeKADTUiml52_A49B9FyzJoDxI7FqWtwGRbHMV5; BID=ogaS4mxZ7mV0S-cV5BiNyMdqkNsq_AEE1kdHrsj51ZALJcroXv6Uvz2Hbw_NaIkAxFUj9wurGc_ZnoDe; TMUO=east_uunAxGliHgpXSJT82ttHw+KbpuQJTj8SaKA2yEXFJtU=; mt.pc=2.1; mt.g.2f013145=5.1674385400.1687187728189; APPSYNC_REGION=east; WEBAPP_REGION=east; _ga_H1KKSGW33X=GS1.1.1688207980.6.0.1688207980.60.0.0; _ga=GA1.2.1101093227.1688056739; _dc_gtm_UA-60025178-7=1; TM_PIXEL={"_dvs":"0:ljjvfyy0:Q1vXQVeOIwkrvt7wRJwGzV5P2vp3GK_Q","_dvp":"0:ljhdemn2:hy_qgYKs7zFKYMdN_M5s2Hvfzv2DyNkU"}; _au_last_seen_pixels=eyJhcG4iOjE2ODgyMDc5ODEsInR0ZCI6MTY4ODIwNzk4MSwicHViIjoxNjg4MjA3OTgxLCJydWIiOjE2ODgyMDc5ODEsInRhcGFkIjoxNjg4MjA3OTgxLCJhZHgiOjE2ODgyMDc5ODEsImdvbyI6MTY4ODIwNzk4MSwidGFib29sYSI6MTY4ODEyMzU4MywidW5ydWx5IjoxNjg4MjA3OTgxLCJtZWRpYW1hdGgiOjE2ODgyMDc5ODEsInNvbiI6MTY4ODExNzQxMiwiaW1wciI6MTY4ODEyMzU4MywicHBudCI6MTY4ODExNzQxMiwiYmVlcyI6MTY4ODEyMzU4MywiYWRvIjoxNjg4MTIzNTgzLCJvcGVueCI6MTY4ODEyMzU4Mywic21hcnQiOjE2ODgxMjM1ODMsImNvbG9zc3VzIjoxNjg4MTIzNTgzfQ%3D%3D; _scid_r=97c88ef8-c434-4cea-a079-960643c17aaf; _uetsid=7c00c900169b11ee9f160d53b81a2490; _uetvid=7c011f00169b11eeb32f9da33620c76b; _dc_gtm_UA-60025178-2=1; TMSPON=48b26025-4941-413b-9803-9ea6aa7035a7';
const arr = cookies.split('; ');
arr.forEach(e => {
  document.cookie = `${e};`;
});

(async () => {
  const sdk = await import('./sdk-module/src/index.mjs');
  const init = await sdk.default.init({ eventId: '00005E66AD4B2014' });
  console.log('init', init);

  const result = await init.checkout({ "eventId": "0F005E5CD4FC2F47", "requestorId": "f38ce660-16a0-11ee-a669-d9853f663d51", "requestContext": { "localeInjected": "en-us", "locale": "en-us" }, "tickets": [{ "inventoryDetail": { "type": "Primary" }, "row": "A", "section": "SECA", "ticketTypes": [{ "id": "000000000001", "quantity": 4 }] }] }, { "appview": false, "appviewLN": false, "appviewVersion": 1, "toolspreview": false, "channel": 0, "layout": "", "redirect": true, "source": 2 });
  console.log('result', result);
})();
