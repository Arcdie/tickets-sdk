import { FORMAT_HTTP_HEADERS } from '../opentracing';
import lightstepTracer from './config';

class Tracer {
  constructor(parentTracerHeaders, additionalTags) {
    if (parentTracerHeaders) {
      this.parentSpan = lightstepTracer.extract(FORMAT_HTTP_HEADERS, parentTracerHeaders);
    }

    this.additionalTags = additionalTags || {};
  }

  startSpan(spanName) {
    const spanOptions = {};
    const { additionalTags } = this;

    if (this.parentSpan) {
      spanOptions.childOf = this.parentSpan;
    }

    const span = lightstepTracer.startSpan(spanName, spanOptions);
    span.log({ request_received: Date.now() });
    span.setTag('span.kind', 'client');
    span.setTag('git.commit_id', process.env.COMMIT_HASH);

    if (Object.keys(additionalTags).length) {
      Object.keys(additionalTags).forEach((tag) => {
        span.setTag(tag, additionalTags[tag]);
      });
    }

    this.span = span;
  }

  finishSpan() {
    if (!this.span) {
      throw new Error('Can\'t finish a span that was never started.');
    }

    this.span.log({ request_finished: Date.now() });
    this.span.finish();
  }

  getSpanHeaders() {
    if (!this.span) {
      throw new Error('Can\'t get headers of span that was never started.');
    }

    const spanHeaders = {};

    this.span.tracer().inject(this.span, FORMAT_HTTP_HEADERS, spanHeaders);

    return spanHeaders;
  }

  logError(errorMsg) {
    if (!this.span) {
      throw new Error('Can\'t log for span that was never started.');
    }

    this.span.setTag('error', true);
    this.span.log({
      error: true,
      message: errorMsg,
    });
  }
}

export default Tracer;
