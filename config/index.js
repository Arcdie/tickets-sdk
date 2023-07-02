module.exports = {
  proxy: {
    port: process.env.PROXY_PORT,
    ip: process.env.PROXY_IP,
    login: process.env.PROXY_LOGIN,
    password: process.env.PROXY_PASSWORD,
  },
};

