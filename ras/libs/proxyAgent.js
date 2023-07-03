const { HttpsProxyAgent } = require('https-proxy-agent');

const config = require('../../config');

exports.getProxyAgent = () => {
  const str = `http://${config.proxy.login}:${config.proxy.password}@${config.proxy.ip}:${config.proxy.port}`;
  return new HttpsProxyAgent(str, {
    // rejectUnauthorized: false,
  });
};
