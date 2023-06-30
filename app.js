const crypto = require('crypto');

require('browser-env')({ userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' });

self.fetch = fetch;
self.crypto = crypto;
window.crypto = crypto;

const sdk = require('./sdk');

(async () => {
  document.cookies = 'eps_sid=e9e01949def257888fb3fe766e0fbdc4dc4e5bc4; _gcl_au=1.1.1781729629.1688056739; _gid=GA1.2.1865993604.1688056753; _pnvl=false; pushly.user_puuid=DWryAzmIrTwrmR2vucoHmGhce1E3D3dd; _au_1d=AU1D0200001688056753T08W9JNWR2WF; _scid=97c88ef8-c434-4cea-a079-960643c17aaf; _rdt_uuid=1688056753554.1574fe34-8da4-48d0-b1ba-be6b80838c12; _tt_enable_cookie=1; _ttp=NaN66zy-cncbs06D164Fb_VnRx6; _pnlspid=19778; _sctr=1%7C1687986000000; __qca=P0-328805128-1688056752922; mt.v=5.1674385400.1687187728189; _au_last_seen_pixels=eyJhcG4iOjE2ODgwNTY3NTMsInR0ZCI6MTY4ODA1Njc1MywicHViIjoxNjg4MDU2NzUzLCJydWIiOjE2ODgwNTY3NTMsInRhcGFkIjoxNjg4MDU2NzUzLCJhZHgiOjE2ODgwNTY3NTMsImdvbyI6MTY4ODA1Njc1MywidGFib29sYSI6MTY4ODA1Njc1MywidW5ydWx5IjoxNjg4MDU2NzUzLCJtZWRpYW1hdGgiOjE2ODgwNTY5MjksInNvbiI6MTY4ODA1NjkyOSwiaW1wciI6MTY4ODA1NjkyOSwicHBudCI6MTY4ODA1NjkyOSwiYmVlcyI6MTY4ODA1NjkyOSwiYWRvIjoxNjg4MDU2OTI5LCJvcGVueCI6MTY4ODA1NjkyOSwic21hcnQiOjE2ODgwNTY5MjksImNvbG9zc3VzIjoxNjg4MDU2OTI5fQ%3D%3D; _pnss=blocked; LANGUAGE=en-us; SID=U_aCnS14_mpXr5xksyDHqLytv9tt0CwDYGNyeWwWZwwU8vxxoedWJX86gnnVEoRcLmMQB0aDVXxla54-; TMUO=west_tY2JZAFL/+8rdzejaNFojF4mQPryf6txuoPVN2T3MJ4=; mt.pc=2.1; mt.g.2f013145=5.1674385400.1687187728189; TM_PIXEL={"_dvs":"0:ljhdemn2:305hVoS4GjjIHOax~_Df3gIXZ4TgnpeY","_dvp":"0:ljhdemn2:hy_qgYKs7zFKYMdN_M5s2Hvfzv2DyNkU"}; APPSYNC_REGION=east; TMSPON=48b26025-4941-413b-9803-9ea6aa7035a7; reese84=3:KSGqUjNS5lduysI3rkLi4A==:EjN+nDxPQM89QHy487QuES9NaS/UF1QCqWV1kj/Xnev0OsKj2nQomWKU7CyYEuArBIxlFABQIqUE3NGZ2k2lUoT78YKc4vfhrRDWAuEVK6L+Xq23UHQxaqX7cEzbZMdBjAuDawoydSoFxpBXIjFkL/f3t8FqUiGre7Y+E8GwLucwvxKvp649PtgjkHIzXe0I8WcIH2Wc8T0e8GfetB7JzeNkko60zfUTqnuNZUtqtrQrha8gGf2udFMESONz7S0ZTIlWBnWSbqLx0VuW8t0WbNs5zD6ygiZYWAInUWxzMJ/jyHbEisq6WTS269hXDLXS8Z5zSqQSHET5it4S1Kkt1/6o/ZJDMziVoOsJaUSWIwqq7LFJfconZs2Z2N5LRSO3Qx/bFBKViMDFl+jEd539VhP/iZaZz+CBG3zXYTGbcSTxzPpM0A8klDAs98lnqNCSGX5N0wyZMYxgxDlnQNAHu00Mq5P60F6WCmR4MeTy/dvQaehVdKUFAnGYyGvC9KEVy3P1505iLpOnKFm6w4ozCjegrl4UoifG993kffpwol1efgCCwp+k3dlLNGLb6JA2:+IqIVrovFT6cv1wGXVuW1tPkdr32ml6zm2B+mV3rHGs=; WEBAPP_REGION=east; BID=Wv9tqacWGZa5O7KFDLQepGf1ZMfhlZG8Qx_0fpOE_M0lZXepLMlBfakYOcSQJxCTxfgXN7E7YxdmiPNG; _ga_H1KKSGW33X=GS1.1.1688066556.2.1.1688068199.34.0.0; _scid_r=97c88ef8-c434-4cea-a079-960643c17aaf; _uetsid=7c00c900169b11ee9f160d53b81a2490; _uetvid=7c011f00169b11eeb32f9da33620c76b; _dc_gtm_UA-60025178-2=1; _ga=GA1.2.1101093227.1688056739; _dc_gtm_UA-60025178-7=1';

  const checkout = await new sdk.default.init({ eventId: '00005E66AD4B2014' });
  console.log('checkout', checkout);
})();
