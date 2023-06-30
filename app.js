const xhr2 = require('xhr2');
const crypto = require('crypto');

// require('./browserEnv')({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' });

const Window = require('./window');

global.window = new Window({
  features: {
    FetchExternalResources: false,
    ProcessExternalResources: false
  },
});

document = window.document;
self = window;
self.fetch = fetch;
self.crypto = crypto;
window.crypto = crypto;

global.XMLHttpRequest = xhr2;

// console.log(window.navigator.userAgent)

const cookies = 'eps_sid=e9e01949def257888fb3fe766e0fbdc4dc4e5bc4; _gcl_au=1.1.1781729629.1688056739; _gid=GA1.2.1865993604.1688056753; _pnvl=false; pushly.user_puuid=DWryAzmIrTwrmR2vucoHmGhce1E3D3dd; _au_1d=AU1D0200001688056753T08W9JNWR2WF; _scid=97c88ef8-c434-4cea-a079-960643c17aaf; _rdt_uuid=1688056753554.1574fe34-8da4-48d0-b1ba-be6b80838c12; _tt_enable_cookie=1; _ttp=NaN66zy-cncbs06D164Fb_VnRx6; _pnlspid=19778; _sctr=1%7C1687986000000; __qca=P0-328805128-1688056752922; mt.v=5.1674385400.1687187728189; _pnss=blocked; LANGUAGE=en-us; SID=HKK7-gOkJAYjfABCL8KTyuCS8bi4lZWsIMtjEsHBt0IhsrAtIn_bsQx6OSv7FvoP47hwa1frcMa2ePsZ; TMUO=west_oeQQEx0EJQVbC6dfVJJePfZ/ZKiavpZf0nnDLd8JlSQ=; mt.pc=2.1; mt.g.2f013145=5.1674385400.1687187728189; _ga_H1KKSGW33X=GS1.1.1688117403.3.0.1688117403.60.0.0; TM_PIXEL={"_dvs":"0:ljidilna:B2d88xX66SFQu_jPlrRgWjC1V_mzfXv3","_dvp":"0:ljhdemn2:hy_qgYKs7zFKYMdN_M5s2Hvfzv2DyNkU"}; _uetsid=7c00c900169b11ee9f160d53b81a2490; _uetvid=7c011f00169b11eeb32f9da33620c76b; _ga=GA1.2.1101093227.1688056739; reese84=3:T/BixsQ0Gtmin/LtR8ltYA==:pgqPGTEFYFDvBMLvvho8n2IB1bHyrTIycGPLRa5T3HzmcTkExkvRlIyVTcWbREhWsX0K0QFDeOvAph3cSZRznFL6Z98q92csuWMYv2ejqIthE72OAnz3rKvvAXyKpXsfMf69MuwimxFnxaKD7ufWGD9CcsDh0Fu5KToSRR2LXYMnA7VtFPAmgUFLhNECBw0l3scz8K0Q9J1SeYj55rrVEK78KvZzLWcaN++/nAaal1X8sou7FczYIsFJCmeUrinz1Rbz2Fbz71OZwWiEJ8stJk2fiRUI2kQkw/pBVAItHINDrN3LxMVNuUoU8Qsa0LOzgbWV3g4Hrm7upuaYUcTIeySoxVCic1pQT4VVDtm38TZD8JhJqVmvbLfLZ4hKEAgh9pEiEcTuzGEfI5AxccvLnGaIyhTMQqUEtVJlJ/3wy2dJ8A/Ref01Lsg17/ijX/1+JogoBreC8ikhnkcfT3a9Wg==:hCiJTCsMFIeCICg1XlSsYNbTwdHkXwRI4JfdTQLBAT4=; APPSYNC_REGION=east; WEBAPP_REGION=east; BID=M5xGwT4-bZX_iVE8GRKjQL0KkITz15eNXqTAPGGwDcKSUK8F4j7DPRfjCAgVaybWJxpHxHMN4wvsNBDx; _scid_r=97c88ef8-c434-4cea-a079-960643c17aaf; _au_last_seen_pixels=eyJhcG4iOjE2ODgxMTc0MTIsInR0ZCI6MTY4ODExNzQxMiwicHViIjoxNjg4MTE3NDEyLCJydWIiOjE2ODgxMTc0MTIsInRhcGFkIjoxNjg4MTE3NDEyLCJhZHgiOjE2ODgxMTc0MTIsImdvbyI6MTY4ODExNzQxMiwidGFib29sYSI6MTY4ODEyMzU4MywidW5ydWx5IjoxNjg4MTIzNTgzLCJtZWRpYW1hdGgiOjE2ODgxMTc0MTIsInNvbiI6MTY4ODExNzQxMiwiaW1wciI6MTY4ODEyMzU4MywicHBudCI6MTY4ODExNzQxMiwiYmVlcyI6MTY4ODEyMzU4MywiYWRvIjoxNjg4MTIzNTgzLCJvcGVueCI6MTY4ODEyMzU4Mywic21hcnQiOjE2ODgxMjM1ODMsImNvbG9zc3VzIjoxNjg4MTIzNTgzfQ%3D%3D; _dc_gtm_UA-60025178-7=1';
const arr = cookies.split('; ');
arr.forEach(e => {
  document.cookie = `${e};`;
});

const sdk = require('./sdk.min');

(async () => {
  const checkout = await new sdk.default.init({ eventId: '00005E66AD4B2014' });
  console.log('checkout', checkout);
})();
