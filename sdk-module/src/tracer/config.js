import lightstep from 'lightstep-tracer';
import { globalTracer, initGlobalTracer } from 'opentracing';

const config = {
  access_token: process.env.LIGHTSTEP_TOKEN,
  component_name: 'co2.sdk',
  collector_encryption: 'tls',
  collector_host: process.env.LIGHTSTEP_URL,
  collector_port: 443,
  tags: {
    'tm.product_code': 'prd1908',
  },
};

export const tracer = new lightstep.Tracer(config);

initGlobalTracer(tracer);

export default globalTracer();
