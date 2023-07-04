const crypto = require('crypto');
const XMLHttpRequest = require('xhr2');
const CustomWebSocket = require('./ws');
const { expandWindow } = require('./jsdom');

/* for debugging
const nativeFetch = fetch;
fetch = (...args) => {
  console.log('fetchGlobal', args);
  return nativeFetch(...args);
};
// */

const initSdk = ({
  fetch,
  window,
  document,
  proxyAgent,
}) => {
  window = expandWindow(window, fetch);
  global.WebSocket = window.WebSocket = window.MozWebSocket = CustomWebSocket;
  const self = window;

  /*! For license information please see sdk.js.LICENSE.txt */
  return (function(t, e) {
    const sdk = e();
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.sdk = e() : t.sdk = e()
    return sdk;
  })(this, (()=>(()=>{
      var t = {
          360: function(t, e, r) {
              var n;
              !function(o, i) {
                  "use strict";
                  var a = function(t) {
                      if ("object" != typeof t.document)
                          throw new Error("Cookies.js requires a `window` with a `document` object");
                      var e = function(t, r, n) {
                          return 1 === arguments.length ? e.get(t) : e.set(t, r, n)
                      };
                      return e._document = t.document,
                      e._cacheKeyPrefix = "cookey.",
                      e._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"),
                      e.defaults = {
                          path: "/",
                          secure: !1
                      },
                      e.get = function(t) {
                          e._cachedDocumentCookie !== e._document.cookie && e._renewCache();
                          var r = e._cache[e._cacheKeyPrefix + t];
                          return r === i ? i : decodeURIComponent(r)
                      }
                      ,
                      e.set = function(t, r, n) {
                          return (n = e._getExtendedOptions(n)).expires = e._getExpiresDate(r === i ? -1 : n.expires),
                          e._document.cookie = e._generateCookieString(t, r, n),
                          e
                      }
                      ,
                      e.expire = function(t, r) {
                          return e.set(t, i, r)
                      }
                      ,
                      e._getExtendedOptions = function(t) {
                          return {
                              path: t && t.path || e.defaults.path,
                              domain: t && t.domain || e.defaults.domain,
                              expires: t && t.expires || e.defaults.expires,
                              secure: t && t.secure !== i ? t.secure : e.defaults.secure
                          }
                      }
                      ,
                      e._isValidDate = function(t) {
                          return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
                      }
                      ,
                      e._getExpiresDate = function(t, r) {
                          if (r = r || new Date,
                          "number" == typeof t ? t = t === 1 / 0 ? e._maxExpireDate : new Date(r.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)),
                          t && !e._isValidDate(t))
                              throw new Error("`expires` parameter cannot be converted to a valid Date instance");
                          return t
                      }
                      ,
                      e._generateCookieString = function(t, e, r) {
                          var n = (t = (t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent)).replace(/\(/g, "%28").replace(/\)/g, "%29")) + "=" + (e = (e + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent));
                          return n += (r = r || {}).path ? ";path=" + r.path : "",
                          n += r.domain ? ";domain=" + r.domain : "",
                          (n += r.expires ? ";expires=" + r.expires.toUTCString() : "") + (r.secure ? ";secure" : "")
                      }
                      ,
                      e._getCacheFromString = function(t) {
                          for (var r = {}, n = t ? t.split("; ") : [], o = 0; o < n.length; o++) {
                              var a = e._getKeyValuePairFromCookieString(n[o]);
                              r[e._cacheKeyPrefix + a.key] === i && (r[e._cacheKeyPrefix + a.key] = a.value)
                          }
                          return r
                      }
                      ,
                      e._getKeyValuePairFromCookieString = function(t) {
                          var e = t.indexOf("=");
                          e = e < 0 ? t.length : e;
                          var r, n = t.substr(0, e);
                          try {
                              r = decodeURIComponent(n)
                          } catch (t) {
                              console && "function" == typeof console.error && console.error('Could not decode cookie with key "' + n + '"', t)
                          }
                          return {
                              key: r,
                              value: t.substr(e + 1)
                          }
                      }
                      ,
                      e._renewCache = function() {
                          e._cache = e._getCacheFromString(e._document.cookie),
                          e._cachedDocumentCookie = e._document.cookie
                      }
                      ,
                      e._areEnabled = function() {
                          var t = "cookies.js"
                            , r = "1" === e.set(t, 1).get(t);
                          return e.expire(t),
                          r
                      }
                      ,
                      e.enabled = e._areEnabled(),
                      e
                  }
                    , s = o && "object" == typeof o.document ? a(o) : a;
                  (n = function() {
                      return s
                  }
                  .call(e, r, e, t)) === i || (t.exports = n)
              }("undefined" == typeof window ? this : window)
          },
          301: (t,e,r)=>{
              r(147),
              t.exports = self.fetch.bind(self)
          }
          ,
          573: (t,e,r)=>{
              t.exports = r(792)
          }
          ,
          792: t=>{
              var e;
              self,
              e = ()=>(()=>{
                  var t = {
                      31: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = function(t, e) {
                              if (t)
                                  for (var r in t)
                                      hasOwnProperty.call(t, r) && e(t[r], r)
                          }
                          ,
                          t.exports = e.default
                      }
                      ,
                      843: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.LS_META_TRACE_KEY = e.LS_META_TRACER_GUID_KEY = e.LS_META_TRACER_CREATE = e.LS_META_SP_START = e.LS_META_SP_FINISH = e.LS_META_SPAN_KEY = e.LS_META_PROPAGATION_KEY = e.LS_META_INJECT = e.LS_META_EXTRACT = e.LS_META_EVENT_KEY = e.LOG_WARN = e.LOG_STRING_TO_LEVEL = e.LOG_LEVEL_TO_STRING = e.LOG_INFO = e.LOG_FATAL = e.LOG_ERROR = e.LIGHTSTEP_APP_URL_PREFIX = e.JOIN_ID_PREFIX = e.FORMAT_B3 = e.CLOCK_STATE_REFRESH_INTERVAL_MS = void 0,
                          e.LOG_INFO = 0,
                          e.LOG_WARN = 1,
                          e.LOG_ERROR = 2,
                          e.LOG_FATAL = 3,
                          e.LOG_LEVEL_TO_STRING = {
                              LOG_INFO: "I",
                              LOG_WARN: "W",
                              LOG_ERROR: "E",
                              LOG_FATAL: "F"
                          },
                          e.LOG_STRING_TO_LEVEL = {
                              I: 0,
                              W: 1,
                              E: 2,
                              F: 3
                          },
                          e.CLOCK_STATE_REFRESH_INTERVAL_MS = 350,
                          e.LIGHTSTEP_APP_URL_PREFIX = "https://app.lightstep.com",
                          e.JOIN_ID_PREFIX = "join:",
                          e.LS_META_EVENT_KEY = "lightstep.meta_event",
                          e.LS_META_PROPAGATION_KEY = "lightstep.propagation_format",
                          e.LS_META_TRACE_KEY = "lightstep.trace_id",
                          e.LS_META_SPAN_KEY = "lightstep.span_id",
                          e.LS_META_TRACER_GUID_KEY = "lightstep.tracer_guid",
                          e.LS_META_EXTRACT = "lightstep.extract_span",
                          e.LS_META_INJECT = "lightstep.inject_span",
                          e.LS_META_SP_START = "lightstep.span_start",
                          e.LS_META_SP_FINISH = "lightstep.span_finish",
                          e.LS_META_TRACER_CREATE = "lightstep.tracer_create",
                          e.FORMAT_B3 = "format.b3"
                      }
                      ,
                      261: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n = r(295)
                            , o = function() {
                              function t(e) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._accessToken = e
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "getAccessToken",
                                  value: function() {
                                      return void 0 === this._accessToken || null === this._accessToken || 0 === this._accessToken.length ? "empty" : this._accessToken
                                  }
                              }, {
                                  key: "toThrift",
                                  value: function() {
                                      return new n.crouton_thrift.Auth({
                                          access_token: this._accessToken
                                      })
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = o,
                          t.exports = e.default
                      }
                      ,
                      69: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.toBoolean = function(t) {
                              return !!t
                          }
                          ,
                          e.toNumber = function(t) {
                              return Number(t)
                          }
                          ,
                          e.toString = function(t) {
                              return "" + t
                          }
                      }
                      ,
                      34: (t,e,r)=>{
                          "use strict";
                          var n, o = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, i = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this.options = {}
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "setOptions",
                                  value: function(t) {
                                      var e = this;
                                      (0,
                                      o.default)(t, (function(t, r) {
                                          e.options[r] = t
                                      }
                                      ))
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = new i
                      }
                      ,
                      618: (t,e,r)=>{
                          "use strict";
                          var n = r(295)
                            , o = r(843)
                            , i = r(69)
                            , a = function() {
                              function t(e) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._runtime = e,
                                  this._record = new n.crouton_thrift.LogRecord({
                                      timestamp_micros: e._platform.nowMicros(),
                                      runtime_guid: null,
                                      span_guid: null,
                                      stable_name: null,
                                      message: null,
                                      level: null,
                                      thread_id: null,
                                      filename: null,
                                      line_number: null,
                                      stack_frames: null,
                                      payload_json: null,
                                      error_flag: null
                                  })
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "record",
                                  value: function() {
                                      return this._record
                                  }
                              }, {
                                  key: "end",
                                  value: function() {
                                      this._runtime._addLogRecord(this._record)
                                  }
                              }, {
                                  key: "timestamp",
                                  value: function(t) {
                                      return this._record.timestamp_micros = i.toNumber(t),
                                      this
                                  }
                              }, {
                                  key: "message",
                                  value: function(t) {
                                      return this._record.message = i.toString(t),
                                      this
                                  }
                              }, {
                                  key: "level",
                                  value: function(t) {
                                      return this._record.level = o.LOG_LEVEL_TO_STRING[t] || null,
                                      t >= o.LOG_ERROR && this.error(!0),
                                      this
                                  }
                              }, {
                                  key: "span",
                                  value: function(t) {
                                      return void 0 !== t && (this._record.span_guid = i.toString(t)),
                                      this
                                  }
                              }, {
                                  key: "name",
                                  value: function(t) {
                                      return this._record.stable_name = i.toString(t),
                                      this
                                  }
                              }, {
                                  key: "error",
                                  value: function(t) {
                                      return this._record.error_flag = i.toBoolean(t),
                                      this
                                  }
                              }, {
                                  key: "payload",
                                  value: function(t) {
                                      return void 0 !== t && (this._record.payload_json = this._encodePayload(t)),
                                      this
                                  }
                              }, {
                                  key: "_encodePayload",
                                  value: function(t) {
                                      var e = null;
                                      try {
                                          e = JSON.stringify(t)
                                      } catch (t) {
                                          return
                                      }
                                      return e
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = a
                      }
                      ,
                      489: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n, o = r(295), i = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, a = function(t, e) {
                              if (t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = s(void 0);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var i in t)
                                  if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                                      var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }(r(69));
                          function s(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (s = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          var c = function() {
                              function t(e, r, n, o) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  o instanceof Error && (o = {
                                      stack: o.stack,
                                      message: o.message
                                  }),
                                  this._logFieldKeyHardLimit = e,
                                  this._logFieldValueHardLimit = r,
                                  this._timestampMicros = n,
                                  this._fields = o,
                                  this._keysOverLimit = 0,
                                  this._valuesOverLimit = 0
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "_clearOverLimits",
                                  value: function() {
                                      this._keysOverLimit = 0,
                                      this._valuesOverLimit = 0
                                  }
                              }, {
                                  key: "getNumKeysOverLimit",
                                  value: function() {
                                      return this._keysOverLimit
                                  }
                              }, {
                                  key: "getNumValuesOverLimit",
                                  value: function() {
                                      return this._valuesOverLimit
                                  }
                              }, {
                                  key: "toThrift",
                                  value: function() {
                                      var t = this;
                                      this._clearOverLimits();
                                      var e = [];
                                      return (0,
                                      i.default)(this._fields, (function(r, n) {
                                          if (n && r) {
                                              var i = t.getFieldKey(n)
                                                , a = t.getFieldValue(r);
                                              e.push(new o.crouton_thrift.KeyValue({
                                                  Key: i,
                                                  Value: a
                                              }))
                                          }
                                      }
                                      )),
                                      new o.crouton_thrift.LogRecord({
                                          timestamp_micros: this._timestampMicros,
                                          fields: e
                                      })
                                  }
                              }, {
                                  key: "getFieldKey",
                                  value: function(t) {
                                      var e = a.toString(t);
                                      return e.length > this._logFieldKeyHardLimit && (this._keysOverLimit += 1,
                                      e = "".concat(e.substr(0, this._logFieldKeyHardLimit), "...")),
                                      e
                                  }
                              }, {
                                  key: "getFieldValue",
                                  value: function(t) {
                                      var e = null;
                                      if (t instanceof Error)
                                          try {
                                              e = JSON.stringify(t, Object.getOwnPropertyNames(t))
                                          } catch (t) {
                                              e = "Could not encode value. Exception: ".concat(t)
                                          }
                                      else if (t instanceof Object)
                                          try {
                                              e = JSON.stringify(t, null, "  ")
                                          } catch (t) {
                                              e = "Could not encode value. Exception: ".concat(t)
                                          }
                                      else
                                          e = a.toString(t);
                                      return e.length > this._logFieldValueHardLimit && (this._valuesOverLimit += 1,
                                      e = "".concat(e.substr(0, this._logFieldValueHardLimit), "...")),
                                      e
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = c,
                          t.exports = e.default
                      }
                      ,
                      638: (t,e,r)=>{
                          "use strict";
                          t.exports = r(933).crouton_thrift
                      }
                      ,
                      933: t=>{
                          "use strict";
                          var e, r;
                          e = {},
                          void 0 === (r = {}) && (r = {}),
                          r.KeyValue = function(t) {
                              if (this.Key = null,
                              this.Value = null,
                              t) {
                                  if (void 0 === t.Key)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field Key is unset!");
                                  if (this.Key = t.Key,
                                  void 0 === t.Value)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field Value is unset!");
                                  this.Value = t.Value
                              }
                          }
                          ,
                          r.KeyValue.prototype = {},
                          r.KeyValue.prototype.read = !1,
                          r.KeyValue.prototype.write = !1,
                          r.NamedCounter = function(t) {
                              if (this.Name = null,
                              this.Value = null,
                              t) {
                                  if (void 0 === t.Name)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field Name is unset!");
                                  if (this.Name = t.Name,
                                  void 0 === t.Value)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field Value is unset!");
                                  this.Value = t.Value
                              }
                          }
                          ,
                          r.NamedCounter.prototype = {},
                          r.NamedCounter.prototype.read = !1,
                          r.NamedCounter.prototype.write = !1,
                          r.Runtime = function(t) {
                              this.guid = null,
                              this.start_micros = null,
                              this.group_name = null,
                              this.attrs = null,
                              t && (void 0 !== t.guid && (this.guid = t.guid),
                              void 0 !== t.start_micros && (this.start_micros = t.start_micros),
                              void 0 !== t.group_name && (this.group_name = t.group_name),
                              void 0 !== t.attrs && (this.attrs = t.attrs))
                          }
                          ,
                          r.Runtime.prototype = {},
                          r.Runtime.prototype.read = !1,
                          r.Runtime.prototype.write = !1,
                          r.LogRecord = function(t) {
                              this.timestamp_micros = null,
                              this.fields = null,
                              this.runtime_guid = null,
                              this.span_guid = null,
                              this.stable_name = null,
                              this.message = null,
                              this.level = null,
                              this.thread_id = null,
                              this.filename = null,
                              this.line_number = null,
                              this.stack_frames = null,
                              this.payload_json = null,
                              this.error_flag = null,
                              t && (void 0 !== t.timestamp_micros && (this.timestamp_micros = t.timestamp_micros),
                              void 0 !== t.fields && (this.fields = t.fields),
                              void 0 !== t.runtime_guid && (this.runtime_guid = t.runtime_guid),
                              void 0 !== t.span_guid && (this.span_guid = t.span_guid),
                              void 0 !== t.stable_name && (this.stable_name = t.stable_name),
                              void 0 !== t.message && (this.message = t.message),
                              void 0 !== t.level && (this.level = t.level),
                              void 0 !== t.thread_id && (this.thread_id = t.thread_id),
                              void 0 !== t.filename && (this.filename = t.filename),
                              void 0 !== t.line_number && (this.line_number = t.line_number),
                              void 0 !== t.stack_frames && (this.stack_frames = t.stack_frames),
                              void 0 !== t.payload_json && (this.payload_json = t.payload_json),
                              void 0 !== t.error_flag && (this.error_flag = t.error_flag))
                          }
                          ,
                          r.LogRecord.prototype = {},
                          r.LogRecord.prototype.read = !1,
                          r.LogRecord.prototype.write = !1,
                          r.TraceJoinId = function(t) {
                              if (this.TraceKey = null,
                              this.Value = null,
                              t) {
                                  if (void 0 === t.TraceKey)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field TraceKey is unset!");
                                  if (this.TraceKey = t.TraceKey,
                                  void 0 === t.Value)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field Value is unset!");
                                  this.Value = t.Value
                              }
                          }
                          ,
                          r.TraceJoinId.prototype = {},
                          r.TraceJoinId.prototype.read = !1,
                          r.TraceJoinId.prototype.write = !1,
                          r.SpanRecord = function(t) {
                              this.span_guid = null,
                              this.trace_guid = null,
                              this.runtime_guid = null,
                              this.span_name = null,
                              this.join_ids = null,
                              this.oldest_micros = null,
                              this.youngest_micros = null,
                              this.attributes = null,
                              this.error_flag = null,
                              this.log_records = null,
                              t && (void 0 !== t.span_guid && (this.span_guid = t.span_guid),
                              void 0 !== t.trace_guid && (this.trace_guid = t.trace_guid),
                              void 0 !== t.runtime_guid && (this.runtime_guid = t.runtime_guid),
                              void 0 !== t.span_name && (this.span_name = t.span_name),
                              void 0 !== t.join_ids && (this.join_ids = t.join_ids),
                              void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros),
                              void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros),
                              void 0 !== t.attributes && (this.attributes = t.attributes),
                              void 0 !== t.error_flag && (this.error_flag = t.error_flag),
                              void 0 !== t.log_records && (this.log_records = t.log_records))
                          }
                          ,
                          r.SpanRecord.prototype = {},
                          r.SpanRecord.prototype.read = !1,
                          r.SpanRecord.prototype.write = !1,
                          r.Auth = function(t) {
                              this.access_token = null,
                              t && void 0 !== t.access_token && (this.access_token = t.access_token)
                          }
                          ,
                          r.Auth.prototype = {},
                          r.Auth.prototype.read = !1,
                          r.Auth.prototype.write = !1,
                          r.Timing = function(t) {
                              this.receive_micros = null,
                              this.transmit_micros = null,
                              t && (void 0 !== t.receive_micros && (this.receive_micros = t.receive_micros),
                              void 0 !== t.transmit_micros && (this.transmit_micros = t.transmit_micros))
                          }
                          ,
                          r.Timing.prototype = {},
                          r.Timing.prototype.read = !1,
                          r.Timing.prototype.write = !1,
                          r.SampleCount = function(t) {
                              this.oldest_micros = null,
                              this.youngest_micros = null,
                              this.count = null,
                              t && (void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros),
                              void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros),
                              void 0 !== t.count && (this.count = t.count))
                          }
                          ,
                          r.SampleCount.prototype = {},
                          r.SampleCount.prototype.read = !1,
                          r.SampleCount.prototype.write = !1,
                          r.MetricsSample = function(t) {
                              if (this.name = null,
                              this.int64_value = null,
                              this.double_value = null,
                              t) {
                                  if (void 0 === t.name)
                                      throw new e.TProtocolException(e.TProtocolExceptionType.UNKNOWN,"Required field name is unset!");
                                  this.name = t.name,
                                  void 0 !== t.int64_value && (this.int64_value = t.int64_value),
                                  void 0 !== t.double_value && (this.double_value = t.double_value)
                              }
                          }
                          ,
                          r.MetricsSample.prototype = {},
                          r.MetricsSample.prototype.read = !1,
                          r.MetricsSample.prototype.write = !1,
                          r.Metrics = function(t) {
                              this.counts = null,
                              this.gauges = null,
                              t && (void 0 !== t.counts && (this.counts = t.counts),
                              void 0 !== t.gauges && (this.gauges = t.gauges))
                          }
                          ,
                          r.Metrics.prototype = {},
                          r.Metrics.prototype.read = !1,
                          r.Metrics.prototype.write = !1,
                          r.ReportRequest = function(t) {
                              this.runtime = null,
                              this.span_records = null,
                              this.log_records = null,
                              this.timestamp_offset_micros = null,
                              this.oldest_micros = null,
                              this.youngest_micros = null,
                              this.counters = null,
                              this.internal_logs = null,
                              this.internal_metrics = null,
                              t && (void 0 !== t.runtime && (this.runtime = t.runtime),
                              void 0 !== t.span_records && (this.span_records = t.span_records),
                              void 0 !== t.log_records && (this.log_records = t.log_records),
                              void 0 !== t.timestamp_offset_micros && (this.timestamp_offset_micros = t.timestamp_offset_micros),
                              void 0 !== t.oldest_micros && (this.oldest_micros = t.oldest_micros),
                              void 0 !== t.youngest_micros && (this.youngest_micros = t.youngest_micros),
                              void 0 !== t.counters && (this.counters = t.counters),
                              void 0 !== t.internal_logs && (this.internal_logs = t.internal_logs),
                              void 0 !== t.internal_metrics && (this.internal_metrics = t.internal_metrics))
                          }
                          ,
                          r.ReportRequest.prototype = {},
                          r.ReportRequest.prototype.read = !1,
                          r.ReportRequest.prototype.write = !1,
                          r.Command = function(t) {
                              this.disable = null,
                              t && void 0 !== t.disable && (this.disable = t.disable)
                          }
                          ,
                          r.Command.prototype = {},
                          r.Command.prototype.read = !1,
                          r.Command.prototype.write = !1,
                          r.ReportResponse = function(t) {
                              this.commands = null,
                              this.timing = null,
                              t && (void 0 !== t.commands && (this.commands = t.commands),
                              void 0 !== t.timing && (this.timing = t.timing))
                          }
                          ,
                          r.ReportResponse.prototype = {},
                          r.ReportResponse.prototype.read = !1,
                          r.ReportResponse.prototype.write = !1,
                          t.exports.crouton_thrift = r,
                          t.exports.Thrift = {}
                      }
                      ,
                      250: (t,e,r)=>{
                          "use strict";
                          var n = r(714)
                            , o = function() {
                              if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope)
                                  return null;
                              if (!n.isBrowser())
                                  return null;
                              var t = document.getElementsByTagName("SCRIPT");
                              return t.length > 0 ? t[t.length - 1] : null
                          }();
                          t.exports = {
                              parseScriptElementOptions: n.isBrowser() ? function(t, e) {
                                  if (o) {
                                      var r = o.dataset
                                        , n = r.access_token;
                                      "string" == typeof n && n.length > 0 && (t.access_token = n);
                                      var i = r.component_name;
                                      "string" == typeof i && i.length > 0 && (t.component_name = i);
                                      var a = r.collector_host;
                                      "string" == typeof a && a.length > 0 && (t.collector_host = a);
                                      var s = r.collector_port;
                                      s && (t.collector_port = parseInt(s, 10));
                                      var c = r.collector_path;
                                      "string" == typeof c && c.length > 0 && (t.collector_path = c);
                                      var u = r.collector_encryption;
                                      u && (t.collector_encryption = u);
                                      var l = r.enable;
                                      "string" == typeof l && ("true" === l ? t.enable = !0 : "false" === l && (t.enable = !1));
                                      var p = r.verbosity;
                                      "string" == typeof p && (t.verbosity = parseInt(p, 10));
                                      var f = r.init_global_tracer;
                                      "string" == typeof f && ("true" === f ? e.init_global_tracer = !0 : "false" === f && (e.init_global_tracer = !1)),
                                      "string" == typeof r.xhr_instrumentation && "true" === r.xhr_instrumentation && (t.xhr_instrumentation = !0),
                                      "string" == typeof r.instrument_page_load && "true" === r.instrument_page_load && (t.instrument_page_load = !0)
                                  }
                              }
                              : function(t, e) {}
                              ,
                              parseURLQueryOptions: n.isBrowser() ? function(t) {
                                  var e = function(t) {
                                      var e = {}
                                        , r = window.location.href.indexOf("?");
                                      if (r < 0)
                                          return e;
                                      var n = window.location.href.slice(r + 1);
                                      n.indexOf("#") >= 0 && (n = n.slice(0, n.indexOf("#")));
                                      for (var o = n.replace(/\+/, "%20").split("&"), i = 0; i < o.length; i++) {
                                          var a = o[i].split("=");
                                          e[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                                      }
                                      return e
                                  }();
                                  if (e.lightstep_verbosity)
                                      try {
                                          t.verbosity = parseInt(e.lightstep_verbosity, 10)
                                      } catch (t) {}
                                  e.lightstep_log_to_console && (t.log_to_console = !0)
                              }
                              : function(t) {
                                  return {}
                              }
                          }
                      }
                      ,
                      733: (t,e,r)=>{
                          "use strict";
                          function n(t, e) {
                              for (var r = 0; r < e.length; r++) {
                                  var n = e[r];
                                  n.enumerable = n.enumerable || !1,
                                  n.configurable = !0,
                                  "value"in n && (n.writable = !0),
                                  Object.defineProperty(t, n.key, n)
                              }
                          }
                          var o = r(250)
                            , i = r(714)
                            , a = "lightstep_session_id"
                            , s = 604800
                            , c = function() {
                              if (window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart) {
                                  var t = performance.timing.navigationStart;
                                  return function() {
                                      return Math.floor(1e3 * (t + performance.now()))
                                  }
                              }
                              return function() {
                                  return 1e3 * Date.now()
                              }
                          }()
                            , u = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t)
                              }
                              var e, u, l;
                              return e = t,
                              u = [{
                                  key: "name",
                                  value: function() {
                                      return "browser"
                                  }
                              }, {
                                  key: "nowMicros",
                                  value: function() {
                                      return c()
                                  }
                              }, {
                                  key: "runtimeGUID",
                                  value: function(t) {
                                      var e = encodeURIComponent("".concat("lightstep_guid", "/").concat(t))
                                        , r = i.cookie(e) || this._generateLongUUID();
                                      i.cookie(e, r, s, "/");
                                      var n = i.cookie(a) || this._generateLongUUID();
                                      return i.cookie(a, n, s, "/"),
                                      r
                                  }
                              }, {
                                  key: "generateUUID",
                                  value: function() {
                                      return this._generateLongUUID()
                                  }
                              }, {
                                  key: "_generateLongUUID",
                                  value: function() {
                                      var t = "00000000".concat(Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                                        , e = "00000000".concat(Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8);
                                      return "".concat(t).concat(e)
                                  }
                              }, {
                                  key: "onBeforeExit",
                                  value: function() {
                                      if (i.isBrowser()) {
                                          for (var t, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                                              r[n] = arguments[n];
                                          (t = window).addEventListener.apply(t, ["beforeunload"].concat(r))
                                      }
                                  }
                              }, {
                                  key: "plugins",
                                  value: function(t) {
                                      return [r(792), r(49), r(921)]
                                  }
                              }, {
                                  key: "options",
                                  value: function(t) {
                                      var e = {}
                                        , r = {};
                                      return o.parseScriptElementOptions(e, r),
                                      o.parseURLQueryOptions(e, r),
                                      e
                                  }
                              }, {
                                  key: "tracerTags",
                                  value: function() {
                                      return {
                                          "lightstep.tracer_platform": "browser"
                                      }
                                  }
                              }, {
                                  key: "fatal",
                                  value: function(t) {
                                      throw new Error(t)
                                  }
                              }, {
                                  key: "localStoreGet",
                                  value: function(t) {
                                      try {
                                          if (!window.sessionStorage)
                                              return null
                                      } catch (t) {
                                          return null
                                      }
                                      try {
                                          return JSON.parse(sessionStorage.getItem("lightstep/".concat(t)))
                                      } catch (t) {
                                          return null
                                      }
                                  }
                              }, {
                                  key: "localStoreSet",
                                  value: function(t, e) {
                                      try {
                                          if (!window.sessionStorage)
                                              return
                                      } catch (t) {
                                          return
                                      }
                                      try {
                                          sessionStorage.setItem("lightstep/".concat(t), JSON.stringify(e))
                                      } catch (t) {}
                                  }
                              }],
                              l = [{
                                  key: "initLibrary",
                                  value: function(e) {
                                      var r = {}
                                        , n = {};
                                      o.parseScriptElementOptions(r, n),
                                      n.init_global_tracer && t.initGlobalTracer(e, r)
                                  }
                              }, {
                                  key: "initGlobalTracer",
                                  value: function(t, e) {
                                      "object" == typeof window && "object" == typeof window.opentracing && opentracing.initGlobalTracer(new t.Tracer(e))
                                  }
                              }],
                              u && n(e.prototype, u),
                              l && n(e, l),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = u
                      }
                      ,
                      720: (t,e,r)=>{
                          "use strict";
                          t.exports = r(933).Thrift
                      }
                      ,
                      374: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var r = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._host = "",
                                  this._port = 0,
                                  this._path = "",
                                  this._encryption = ""
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "ensureConnection",
                                  value: function(t) {
                                      this._host = t.collector_host,
                                      this._port = t.collector_port,
                                      this._path = t.collector_path,
                                      this._encryption = t.collector_encryption
                                  }
                              }, {
                                  key: "report",
                                  value: function(t, e, r, n) {
                                      try {
                                          t ? this._reportAsyncScript(e, r, n) : this._reportAJAX(e, r, n)
                                      } catch (t) {
                                          return n(t, null)
                                      }
                                  }
                              }, {
                                  key: "_reportAJAX",
                                  value: function(t, e, r) {
                                      var n = JSON.stringify(e.toThrift())
                                        , o = "none" === this._encryption ? "http" : "https"
                                        , i = "".concat(o, "://").concat(this._host, ":").concat(this._port).concat(this._path, "/api/v0/reports")
                                        , a = new XMLHttpRequest;
                                      a.open("POST", i),
                                      a.setRequestHeader("LightStep-Access-Token", t.getAccessToken()),
                                      a.setRequestHeader("Content-Type", "application/json"),
                                      a.onreadystatechange = function() {
                                          if (4 === this.readyState) {
                                              var t = null
                                                , e = null;
                                              if (200 !== this.status)
                                                  t = new Error("status code = ".concat(this.status));
                                              else if (this.responseText)
                                                  try {
                                                      e = JSON.parse(this.responseText)
                                                  } catch (e) {
                                                      t = e
                                                  }
                                              else
                                                  t = new Error("unexpected empty response");
                                              return r(t, e)
                                          }
                                      }
                                      ,
                                      a.send(n)
                                  }
                              }, {
                                  key: "_reportAsyncScript",
                                  value: function(t, e, r) {
                                      var n = JSON.stringify(t.toThrift())
                                        , o = JSON.stringify(e.toThrift())
                                        , i = "none" === this._encryption ? "http" : "https"
                                        , a = "".concat(i, "://").concat(this._host, ":").concat(this._port).concat(this._path, "/_rpc/v1/reports/uri_encoded") + "?auth=".concat(encodeURIComponent(n)) + "&report=".concat(encodeURIComponent(o))
                                        , s = document.createElement("script");
                                      s.async = !0,
                                      s.defer = !0,
                                      s.src = a,
                                      s.type = "text/javascript";
                                      var c = document.getElementsByTagName("head")[0];
                                      return c && c.appendChild(s),
                                      r(null, null)
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = r,
                          t.exports = e.default
                      }
                      ,
                      714: t=>{
                          "use strict";
                          function e() {
                              return "undefined" != typeof document
                          }
                          t.exports = {
                              cookie: e() ? function(t, e, r, n, o, i) {
                                  if (arguments.length > 1) {
                                      var a = t + "=" + encodeURIComponent(e) + (r ? "; expires=" + new Date(+new Date + 1e3 * r).toUTCString() : "") + (n ? "; path=" + n : "") + (o ? "; domain=" + o : "") + (i ? "; secure" : "");
                                      return document.cookie = a,
                                      a
                                  }
                                  return decodeURIComponent((("; " + document.cookie).split("; " + t + "=")[1] || "").split(";")[0])
                              }
                              : function() {
                                  return null
                              }
                              ,
                              isBrowser: e
                          }
                      }
                      ,
                      938: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var r = function() {
                              function t(e, r) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._tracer = e,
                                  this._name = r
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "inject",
                                  value: function(t, e) {
                                      return this._tracer._error("Unsupported format: ".concat(this._name)),
                                      null
                                  }
                              }, {
                                  key: "extract",
                                  value: function(t) {
                                      this._tracer._error("Unsupported format: ".concat(this._name))
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = r,
                          t.exports = e.default
                      }
                      ,
                      255: (t,e,r)=>{
                          "use strict";
                          var n;
                          function o(t, e) {
                              return o = Object.setPrototypeOf || function(t, e) {
                                  return t.__proto__ = e,
                                  t
                              }
                              ,
                              o(t, e)
                          }
                          function i(t, e) {
                              if (e && ("object" == typeof e || "function" == typeof e))
                                  return e;
                              if (void 0 !== e)
                                  throw new TypeError("Derived constructors may only return object or undefined");
                              return function(t) {
                                  if (void 0 === t)
                                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                  return t
                              }(t)
                          }
                          function a(t) {
                              return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                  return t.__proto__ || Object.getPrototypeOf(t)
                              }
                              ,
                              a(t)
                          }
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var s = function(t) {
                              !function(t, e) {
                                  if ("function" != typeof e && null !== e)
                                      throw new TypeError("Super expression must either be null or a function");
                                  t.prototype = Object.create(e && e.prototype, {
                                      constructor: {
                                          value: t,
                                          writable: !0,
                                          configurable: !0
                                      }
                                  }),
                                  Object.defineProperty(t, "prototype", {
                                      writable: !1
                                  }),
                                  e && o(t, e)
                              }(u, t);
                              var e, r, n, s, c = (n = u,
                              s = function() {
                                  if ("undefined" == typeof Reflect || !Reflect.construct)
                                      return !1;
                                  if (Reflect.construct.sham)
                                      return !1;
                                  if ("function" == typeof Proxy)
                                      return !0;
                                  try {
                                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                      ))),
                                      !0
                                  } catch (t) {
                                      return !1
                                  }
                              }(),
                              function() {
                                  var t, e = a(n);
                                  if (s) {
                                      var r = a(this).constructor;
                                      t = Reflect.construct(e, arguments, r)
                                  } else
                                      t = e.apply(this, arguments);
                                  return i(this, t)
                              }
                              );
                              function u(t) {
                                  var e;
                                  return function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, u),
                                  (e = c.call(this, t))._carrierPrefix = "x-b3-",
                                  e
                              }
                              return e = u,
                              (r = [{
                                  key: "inject",
                                  value: function(t, e) {
                                      var r = this;
                                      if (e) {
                                          if ("object" == typeof e) {
                                              var n = t.traceGUID();
                                              return 32 === n.length && "0000000000000000" === n.substr(0, 16) && (n = n.substr(16)),
                                              e["".concat(this._carrierPrefix, "spanid")] = t._guid,
                                              e["".concat(this._carrierPrefix, "traceid")] = n,
                                              t._sampled ? e["".concat(this._carrierPrefix, "sampled")] = "1" : e["".concat(this._carrierPrefix, "sampled")] = "0",
                                              t.forEachBaggageItem((function(t, n) {
                                                  e["".concat(r._baggagePrefix).concat(t)] = n
                                              }
                                              )),
                                              e
                                          }
                                          this._tracer._error("Unexpected '".concat(typeof e, "' FORMAT_TEXT_MAP carrier in call to inject"))
                                      } else
                                          this._tracer._error("Unexpected null carrier in call to inject")
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              u
                          }(((n = r(683)) && n.__esModule ? n : {
                              default: n
                          }).default);
                          e.default = s,
                          t.exports = e.default
                      }
                      ,
                      976: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n = a(r(31))
                            , o = a(r(970))
                            , i = a(r(683));
                          function a(t) {
                              return t && t.__esModule ? t : {
                                  default: t
                              }
                          }
                          var s = function() {
                              function t(e) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._tracer = e,
                                  this._baggagePrefix = i.default,
                                  this._carrierPrefix = "x-datadog-"
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "inject",
                                  value: function(t, e) {
                                      var r = this;
                                      if (e) {
                                          if ("object" == typeof e)
                                              return e["".concat(this._carrierPrefix, "parent-id")] = parseInt(t._guid, 16).toString(),
                                              e["".concat(this._carrierPrefix, "trace-id")] = parseInt(t.traceGUID(), 16).toString(),
                                              t._sampled ? e["".concat(this._carrierPrefix, "sampling-priority")] = "1" : e["".concat(this._carrierPrefix, "sampling-priority")] = "0",
                                              t.forEachBaggageItem((function(t, n) {
                                                  e["".concat(r._baggagePrefix).concat(t)] = n
                                              }
                                              )),
                                              e;
                                          this._tracer._error("Unexpected '".concat(typeof e, "' FORMAT_TEXT_MAP carrier in call to inject"))
                                      } else
                                          this._tracer._error("Unexpected null carrier in call to inject")
                                  }
                              }, {
                                  key: "extract",
                                  value: function(t) {
                                      var e = this
                                        , r = 0
                                        , i = null
                                        , a = null
                                        , s = !0;
                                      if ((0,
                                      n.default)(t, (function(t, n) {
                                          if ((n = n.toLowerCase()).substr(0, e._carrierPrefix.length) === e._carrierPrefix)
                                              switch (n.substr(e._carrierPrefix.length)) {
                                              case "trace-id":
                                                  r++,
                                                  a = parseInt(t, 10).toString(16);
                                                  break;
                                              case "parent-id":
                                                  r++,
                                                  i = parseInt(t, 10).toString(16);
                                                  break;
                                              case "sampling-priority":
                                                  0 === t && (s = !1);
                                                  break;
                                              default:
                                                  e._tracer._error("Unrecognized carrier key '".concat(n, "' with recognized prefix. Ignoring."))
                                              }
                                      }
                                      )),
                                      0 === r)
                                          return null;
                                      if (r < 2)
                                          return this._tracer._error("Only found a partial SpanContext: ".concat(t)),
                                          null;
                                      var c = new o.default(i,a,s);
                                      return (0,
                                      n.default)(t, (function(t, r) {
                                          if ((r = r.toLowerCase()).substr(0, e._baggagePrefix.length) === e._baggagePrefix) {
                                              var n = r.substr(e._baggagePrefix.length);
                                              c.setBaggageItem(n, t)
                                          }
                                      }
                                      )),
                                      c
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = s,
                          t.exports = e.default
                      }
                      ,
                      683: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n = i(r(31))
                            , o = i(r(970));
                          function i(t) {
                              return t && t.__esModule ? t : {
                                  default: t
                              }
                          }
                          var a = function() {
                              function t(e) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._tracer = e,
                                  this._carrierPrefix = "ot-tracer-",
                                  this._baggagePrefix = "ot-baggage-"
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "inject",
                                  value: function(t, e) {
                                      var r = this;
                                      if (e) {
                                          if ("object" == typeof e)
                                              return e["".concat(this._carrierPrefix, "spanid")] = t._guid,
                                              e["".concat(this._carrierPrefix, "traceid")] = t._traceGUID,
                                              e["".concat(this._carrierPrefix, "sampled")] = "true",
                                              t.forEachBaggageItem((function(t, n) {
                                                  e["".concat(r._baggagePrefix).concat(t)] = n
                                              }
                                              )),
                                              e;
                                          this._tracer._error("Unexpected '".concat(typeof e, "' FORMAT_TEXT_MAP carrier in call to inject"))
                                      } else
                                          this._tracer._error("Unexpected null carrier in call to inject")
                                  }
                              }, {
                                  key: "extract",
                                  value: function(t) {
                                      var e = this
                                        , r = 0
                                        , i = null
                                        , a = null
                                        , s = !0;
                                      if ((0,
                                      n.default)(t, (function(t, n) {
                                          if ((n = n.toLowerCase()).substr(0, e._carrierPrefix.length) === e._carrierPrefix)
                                              switch (n.substr(e._carrierPrefix.length)) {
                                              case "traceid":
                                                  r++,
                                                  a = t;
                                                  break;
                                              case "spanid":
                                                  r++,
                                                  i = t;
                                                  break;
                                              case "sampled":
                                                  switch (t) {
                                                  case 0:
                                                  case "0":
                                                  case !1:
                                                  case "false":
                                                      s = !1;
                                                      break;
                                                  default:
                                                      s = !0
                                                  }
                                                  break;
                                              default:
                                                  e._tracer._error("Unrecognized carrier key '".concat(n, "' with recognized prefix. Ignoring."))
                                              }
                                      }
                                      )),
                                      0 === r)
                                          return null;
                                      if (r < 2)
                                          return this._tracer._error("Only found a partial SpanContext: ".concat(t)),
                                          null;
                                      var c = new o.default(i,a,s);
                                      return (0,
                                      n.default)(t, (function(t, r) {
                                          if ((r = r.toLowerCase()).substr(0, e._baggagePrefix.length) === e._baggagePrefix) {
                                              var n = r.substr(e._baggagePrefix.length);
                                              c.setBaggageItem(n, t)
                                          }
                                      }
                                      )),
                                      c
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = a,
                          t.exports = e.default
                      }
                      ,
                      676: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n, o = r(295), i = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, a = function(t, e) {
                              if (t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = s(void 0);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var i in t)
                                  if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                                      var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }(r(69));
                          function s(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (s = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          var c = function() {
                              function t(e, r, n, o, i, a, s) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._runtime = e,
                                  this._oldestMicros = r,
                                  this._youngestMicros = n,
                                  this._spanRecords = o,
                                  this._internalLogs = i,
                                  this._counters = a,
                                  this._timestampOffsetMicros = s
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "getSpanRecords",
                                  value: function() {
                                      return this._spanRecords
                                  }
                              }, {
                                  key: "getInternalLogs",
                                  value: function() {
                                      return this._internalLogs
                                  }
                              }, {
                                  key: "getCounters",
                                  value: function() {
                                      return this._counters
                                  }
                              }, {
                                  key: "toThrift",
                                  value: function() {
                                      var t = this;
                                      (0,
                                      i.default)(this._spanRecords, (function(e) {
                                          e.runtime_guid = t._runtimeGUID
                                      }
                                      ));
                                      var e = [];
                                      (0,
                                      i.default)(this._counters, (function(t, r) {
                                          0 !== t && e.push(new o.crouton_thrift.MetricsSample({
                                              name: a.toString(r),
                                              double_value: a.toNumber(t)
                                          }))
                                      }
                                      ));
                                      var r = [];
                                      return (0,
                                      i.default)(this._spanRecords, (function(t) {
                                          r.push(t._toThrift())
                                      }
                                      )),
                                      new o.crouton_thrift.ReportRequest({
                                          runtime: this._runtime.toThrift(),
                                          oldest_micros: this._oldestMicros,
                                          youngest_micros: this._youngestMicros,
                                          span_records: r,
                                          internal_logs: this._internalLogs,
                                          internal_metrics: new o.crouton_thrift.Metrics({
                                              counts: e
                                          }),
                                          timestamp_offset_micros: this._timestampOffsetMicros
                                      })
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = c,
                          t.exports = e.default
                      }
                      ,
                      102: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n, o = r(295), i = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, a = function(t, e) {
                              if (t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = s(void 0);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var i in t)
                                  if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                                      var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }(r(69));
                          function s(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (s = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          var c = function() {
                              function t(e, r, n, o) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._runtimeGUID = e,
                                  this._startMicros = r,
                                  this._componentName = n,
                                  this._attributes = o
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "toThrift",
                                  value: function() {
                                      var t = [];
                                      return (0,
                                      i.default)(this._attributes, (function(e, r) {
                                          t.push(new o.crouton_thrift.KeyValue({
                                              Key: a.toString(r),
                                              Value: a.toString(e)
                                          }))
                                      }
                                      )),
                                      new o.crouton_thrift.Runtime({
                                          guid: this._runtimeGUID,
                                          start_micros: this._startMicros,
                                          group_name: this._componentName,
                                          attrs: t
                                      })
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = c,
                          t.exports = e.default
                      }
                      ,
                      970: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n, o = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, i = function() {
                              function t(e, r, n) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._baggage = {},
                                  this._guid = e,
                                  this._sampled = !0,
                                  !1 === n && (this._sampled = n),
                                  this._upperTraceGUID = "0000000000000000",
                                  this._traceGUID = r,
                                  this._traceGUID && 32 === this._traceGUID.length && (this._upperTraceGUID = r.substr(0, 16),
                                  this._traceGUID = r.substr(16))
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "setBaggageItem",
                                  value: function(t, e) {
                                      this._baggage[t] = e
                                  }
                              }, {
                                  key: "getBaggageItem",
                                  value: function(t) {
                                      return this._baggage[t]
                                  }
                              }, {
                                  key: "toTraceId",
                                  value: function() {
                                      return this._traceGUID
                                  }
                              }, {
                                  key: "toSpanId",
                                  value: function() {
                                      return this._guid
                                  }
                              }, {
                                  key: "forEachBaggageItem",
                                  value: function(t) {
                                      (0,
                                      o.default)(this._baggage, (function(e, r) {
                                          t(r, e)
                                      }
                                      ))
                                  }
                              }, {
                                  key: "traceGUID",
                                  value: function() {
                                      return "".concat(this._upperTraceGUID).concat(this._traceGUID)
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          e.default = i,
                          t.exports = e.default
                      }
                      ,
                      405: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n = f(r(725))
                            , o = f(r(69))
                            , i = f(r(843))
                            , a = l(r(31))
                            , s = r(295)
                            , c = l(r(489))
                            , u = l(r(278));
                          function l(t) {
                              return t && t.__esModule ? t : {
                                  default: t
                              }
                          }
                          function p(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (p = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          function f(t, e) {
                              if (!e && t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = p(e);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var i in t)
                                  if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                                      var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }
                          function d(t, e, r) {
                              return e in t ? Object.defineProperty(t, e, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              }) : t[e] = r,
                              t
                          }
                          function h(t, e) {
                              return h = Object.setPrototypeOf || function(t, e) {
                                  return t.__proto__ = e,
                                  t
                              }
                              ,
                              h(t, e)
                          }
                          function _(t, e) {
                              if (e && ("object" == typeof e || "function" == typeof e))
                                  return e;
                              if (void 0 !== e)
                                  throw new TypeError("Derived constructors may only return object or undefined");
                              return function(t) {
                                  if (void 0 === t)
                                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                  return t
                              }(t)
                          }
                          function y(t) {
                              return y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                  return t.__proto__ || Object.getPrototypeOf(t)
                              }
                              ,
                              y(t)
                          }
                          var v = function(t) {
                              !function(t, e) {
                                  if ("function" != typeof e && null !== e)
                                      throw new TypeError("Super expression must either be null or a function");
                                  t.prototype = Object.create(e && e.prototype, {
                                      constructor: {
                                          value: t,
                                          writable: !0,
                                          configurable: !0
                                      }
                                  }),
                                  Object.defineProperty(t, "prototype", {
                                      writable: !1
                                  }),
                                  e && h(t, e)
                              }(f, t);
                              var e, r, n, l, p = (n = f,
                              l = function() {
                                  if ("undefined" == typeof Reflect || !Reflect.construct)
                                      return !1;
                                  if (Reflect.construct.sham)
                                      return !1;
                                  if ("function" == typeof Proxy)
                                      return !0;
                                  try {
                                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                      ))),
                                      !0
                                  } catch (t) {
                                      return !1
                                  }
                              }(),
                              function() {
                                  var t, e = y(n);
                                  if (l) {
                                      var r = y(this).constructor;
                                      t = Reflect.construct(e, arguments, r)
                                  } else
                                      t = e.apply(this, arguments);
                                  return _(this, t)
                              }
                              );
                              function f(t, e, r) {
                                  var n;
                                  return function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, f),
                                  n = p.call(this),
                                  console.assert("object" == typeof t, "Invalid runtime"),
                                  n._tracerImp = t,
                                  n._ctx = r,
                                  n._ended = !1,
                                  n._operationName = e,
                                  n._tags = {},
                                  n._beginMicros = t._platform.nowMicros(),
                                  n._endMicros = 0,
                                  n._errorFlag = !1,
                                  n._log_records = null,
                                  n
                              }
                              return e = f,
                              (r = [{
                                  key: "_tracer",
                                  value: function() {
                                      return this._tracerImp
                                  }
                              }, {
                                  key: "_context",
                                  value: function() {
                                      return this._ctx
                                  }
                              }, {
                                  key: "_setOperationName",
                                  value: function(t) {
                                      this._operationName = "".concat(t)
                                  }
                              }, {
                                  key: "_setBaggageItem",
                                  value: function(t, e) {
                                      this._ctx.setBaggageItem(t, e)
                                  }
                              }, {
                                  key: "_getBaggageItem",
                                  value: function(t) {
                                      return this._ctx.getBaggageItem(t)
                                  }
                              }, {
                                  key: "_addTags",
                                  value: function(t) {
                                      var e = this;
                                      (0,
                                      a.default)(t, (function(t, r) {
                                          e._tags[r] = t
                                      }
                                      ))
                                  }
                              }, {
                                  key: "_log",
                                  value: function(t, e) {
                                      var r = this;
                                      if ("object" == typeof t) {
                                          var n = e ? 1e3 * e : r._tracerImp._platform.nowMicros()
                                            , o = new c.default(r._tracerImp.getLogFieldKeyHardLimit(),r._tracerImp.getLogFieldValueHardLimit(),n,t);
                                          r._log_records = r._log_records || [],
                                          r._log_records.push(o),
                                          r._tracerImp.emit("log_added", o)
                                      } else
                                          r._tracerImp._error("Span.log() expects an object as its first argument")
                                  }
                              }, {
                                  key: "_finish",
                                  value: function(t) {
                                      return this.end(t)
                                  }
                              }, {
                                  key: "getOperationName",
                                  value: function() {
                                      return this._operationName
                                  }
                              }, {
                                  key: "guid",
                                  value: function() {
                                      return this._ctx._guid
                                  }
                              }, {
                                  key: "traceGUID",
                                  value: function() {
                                      return this._ctx._traceGUID
                                  }
                              }, {
                                  key: "parentGUID",
                                  value: function() {
                                      return this._tags.parent_span_guid
                                  }
                              }, {
                                  key: "setParentGUID",
                                  value: function(t) {
                                      return this._tags.parent_span_guid = o.toString(t),
                                      this
                                  }
                              }, {
                                  key: "beginMicros",
                                  value: function() {
                                      return this._beginMicros
                                  }
                              }, {
                                  key: "setBeginMicros",
                                  value: function(t) {
                                      return this._beginMicros = t,
                                      this
                                  }
                              }, {
                                  key: "endMicros",
                                  value: function() {
                                      return this._endMicros
                                  }
                              }, {
                                  key: "setEndMicros",
                                  value: function(t) {
                                      return this._endMicros = t,
                                      this
                                  }
                              }, {
                                  key: "isSampled",
                                  value: function() {
                                      return this._ctx._sampled
                                  }
                              }, {
                                  key: "generateTraceURL",
                                  value: function() {
                                      var t;
                                      t = this._beginMicros > 0 && this._endMicros > 0 ? Math.floor((this._beginMicros + this._endMicros) / 2) : this._tracerImp._platform.nowMicros();
                                      var e = i.LIGHTSTEP_APP_URL_PREFIX
                                        , r = encodeURIComponent(this._tracerImp.options().access_token)
                                        , n = encodeURIComponent(this.guid());
                                      return "".concat(e, "/").concat(r, "/trace?span_guid=").concat(n, "&at_micros=").concat(t)
                                  }
                              }, {
                                  key: "getTags",
                                  value: function() {
                                      return this._tags
                                  }
                              }, {
                                  key: "end",
                                  value: function(t) {
                                      var e;
                                      this._ended || (this._ended = !0,
                                      void 0 !== t && this.setEndMicros(Math.floor(1e3 * t)),
                                      0 === this._endMicros && this.setEndMicros(this._tracerImp._platform.nowMicros()),
                                      u.default.shouldSendMetaSpan(this._tracer().options(), this.getTags()) && this._tracerImp.startSpan(i.LS_META_SP_FINISH, {
                                          tags: (e = {},
                                          d(e, i.LS_META_EVENT_KEY, !0),
                                          d(e, i.LS_META_TRACE_KEY, this.traceGUID()),
                                          d(e, i.LS_META_SPAN_KEY, this.guid()),
                                          e)
                                      }).finish(),
                                      this.isSampled() && this._tracerImp._addSpanRecord(this))
                                  }
                              }, {
                                  key: "_toThrift",
                                  value: function() {
                                      var t = this
                                        , e = [];
                                      (0,
                                      a.default)(this._tags, (function(t, r) {
                                          e.push(new s.crouton_thrift.KeyValue({
                                              Key: o.toString(r),
                                              Value: o.toString(t)
                                          }))
                                      }
                                      ));
                                      var r = [];
                                      return (0,
                                      a.default)(this._log_records, (function(e) {
                                          var n = e.toThrift();
                                          t._tracerImp._counters["logs.keys.over_limit"] += e.getNumKeysOverLimit(),
                                          t._tracerImp._counters["logs.values.over_limit"] += e.getNumValuesOverLimit(),
                                          r.push(n)
                                      }
                                      )),
                                      new s.crouton_thrift.SpanRecord({
                                          span_guid: this.guid(),
                                          trace_guid: this.traceGUID(),
                                          runtime_guid: this._tracerImp.guid(),
                                          span_name: this._operationName,
                                          oldest_micros: this._beginMicros,
                                          youngest_micros: this._endMicros,
                                          attributes: e,
                                          error_flag: this._errorFlag,
                                          log_records: r
                                      })
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              f
                          }(n.Span);
                          e.default = v,
                          t.exports = e.default
                      }
                      ,
                      90: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n = _(r(729))
                            , o = function(t, e) {
                              if (t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = h(void 0);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var i in t)
                                  if ("default" !== i && Object.prototype.hasOwnProperty.call(t, i)) {
                                      var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                      a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }(r(725))
                            , i = _(r(970))
                            , a = _(r(405))
                            , s = _(r(31))
                            , c = r(295)
                            , u = _(r(261))
                            , l = _(r(102))
                            , p = _(r(676))
                            , f = _(r(938))
                            , d = _(r(683));
                          function h(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (h = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          function _(t) {
                              return t && t.__esModule ? t : {
                                  default: t
                              }
                          }
                          function y(t, e) {
                              var r = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(t);
                                  e && (n = n.filter((function(e) {
                                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                                  }
                                  ))),
                                  r.push.apply(r, n)
                              }
                              return r
                          }
                          function v(t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = null != arguments[e] ? arguments[e] : {};
                                  e % 2 ? y(Object(r), !0).forEach((function(e) {
                                      g(t, e, r[e])
                                  }
                                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                  }
                                  ))
                              }
                              return t
                          }
                          function g(t, e, r) {
                              return e in t ? Object.defineProperty(t, e, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              }) : t[e] = r,
                              t
                          }
                          function m(t, e) {
                              return m = Object.setPrototypeOf || function(t, e) {
                                  return t.__proto__ = e,
                                  t
                              }
                              ,
                              m(t, e)
                          }
                          function b(t, e) {
                              if (e && ("object" == typeof e || "function" == typeof e))
                                  return e;
                              if (void 0 !== e)
                                  throw new TypeError("Derived constructors may only return object or undefined");
                              return w(t)
                          }
                          function w(t) {
                              if (void 0 === t)
                                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              return t
                          }
                          function O(t) {
                              return O = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                  return t.__proto__ || Object.getPrototypeOf(t)
                              }
                              ,
                              O(t)
                          }
                          var T = r(344)
                            , S = r(618)
                            , E = r(69)
                            , k = r(843)
                            , P = r(34)
                            , x = r(147)
                            , I = r(278)
                            , R = null
                            , M = function(t) {
                              !function(t, e) {
                                  if ("function" != typeof e && null !== e)
                                      throw new TypeError("Super expression must either be null or a function");
                                  t.prototype = Object.create(e && e.prototype, {
                                      constructor: {
                                          value: t,
                                          writable: !0,
                                          configurable: !0
                                      }
                                  }),
                                  Object.defineProperty(t, "prototype", {
                                      writable: !1
                                  }),
                                  e && m(t, e)
                              }(j, t);
                              var e, h, _, y, M = (_ = j,
                              y = function() {
                                  if ("undefined" == typeof Reflect || !Reflect.construct)
                                      return !1;
                                  if (Reflect.construct.sham)
                                      return !1;
                                  if ("function" == typeof Proxy)
                                      return !0;
                                  try {
                                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                      ))),
                                      !0
                                  } catch (t) {
                                      return !1
                                  }
                              }(),
                              function() {
                                  var t, e = O(_);
                                  if (y) {
                                      var r = O(this).constructor;
                                      t = Reflect.construct(e, arguments, r)
                                  } else
                                      t = e.apply(this, arguments);
                                  return b(this, t)
                              }
                              );
                              function j(t) {
                                  var e;
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, j),
                                  (e = M.call(this))._delegateEventEmitterMethods(),
                                  t = t || {},
                                  R || (P.setOptions(t),
                                  R = w(e)),
                                  e._platform = new c.Platform(w(e)),
                                  e._runtimeGUID = t.guid || e.override_runtime_guid || null,
                                  e._plugins = {},
                                  e._options = {},
                                  e._optionDescs = [],
                                  e._makeOptionsTable(),
                                  e._opentracing = o,
                                  t.opentracing_module && (e._opentracing = t.opentracing_module);
                                  var n = e._platform.nowMicros();
                                  e._startMicros = n,
                                  e._auth = null,
                                  e._runtime = null;
                                  var i = {
                                      warn: function(t, r) {
                                          e._warn(t, r)
                                      },
                                      error: function(t, r) {
                                          e._error(t, r)
                                      }
                                  };
                                  return t && (e._transport = t.override_transport),
                                  e._propagators = {},
                                  e._propagators[e._opentracing.FORMAT_HTTP_HEADERS] = new d.default(w(e)),
                                  e._propagators[e._opentracing.FORMAT_TEXT_MAP] = new d.default(w(e)),
                                  e._propagators[e._opentracing.FORMAT_BINARY] = new f.default(w(e),e._opentracing.FORMAT_BINARY),
                                  t && t.propagators && (e._propagators = v(v({}, e._propagators), t.propagators)),
                                  e._reportingLoopActive = !1,
                                  e._first_report_has_run = !1,
                                  e._reportYoungestMicros = n,
                                  e._reportTimer = null,
                                  e._reportErrorStreak = 0,
                                  e._lastVisibleErrorMillis = 0,
                                  e._skippedVisibleErrors = 0,
                                  e._activeRootSpanSet = {},
                                  e._activeRootSpan = null,
                                  e._spanRecords = [],
                                  e._counters = {
                                      "internal.errors": 0,
                                      "internal.warnings": 0,
                                      "spans.dropped": 0,
                                      "logs.dropped": 0,
                                      "logs.keys.over_limit": 0,
                                      "logs.values.over_limit": 0,
                                      "reports.errors.send": 0
                                  },
                                  e._internalLogs = [],
                                  e._flushIsActive = !1,
                                  e.addPlugin(r(981)),
                                  e.addPlatformPlugins(t),
                                  e.setPlatformOptions(t),
                                  t && e.options(t),
                                  void 0 !== e._transport && null !== e._transport || (e._options.transport,
                                  e._transport = new c.ThriftTransport(i),
                                  e._info("Using thrift transport per user-defined option.")),
                                  e._useClockState = !e._options.disable_clock_skew_correction,
                                  e._clockState = new T({
                                      nowMicros: function() {
                                          return e._platform.nowMicros()
                                      },
                                      localStoreGet: function() {
                                          var t = "clock_state/".concat(e._options.collector_host);
                                          return e._platform.localStoreGet(t)
                                      },
                                      localStoreSet: function(t) {
                                          var r = "clock_state/".concat(e._options.collector_host);
                                          return e._platform.localStoreSet(r, t)
                                      }
                                  }),
                                  e._setupReportOnExit(),
                                  e._info("Tracer created with guid ".concat(e._runtimeGUID)),
                                  0 === e._options.access_token.length && e._warn("Access token not set -\n            this requires a satellite with access token checking disabled,\n            such as a developer satellite."),
                                  e.startPlugins(),
                                  e
                              }
                              return e = j,
                              h = [{
                                  key: "_delegateEventEmitterMethods",
                                  value: function() {
                                      var t = this;
                                      this._ee = new n.default,
                                      (0,
                                      s.default)(["addListener", "emit", "eventNames", "getMaxListeners", "listenerCount", "listeners", "on", "once", "prependListener", "prependOnceListener", "removeAllListeners", "removeListener", "setMaxListeners"], (function(e) {
                                          t[e] = function() {
                                              t._ee[e] && t._ee[e].apply(t._ee, arguments)
                                          }
                                      }
                                      ))
                                  }
                              }, {
                                  key: "_makeOptionsTable",
                                  value: function() {
                                      this.addOption("verbosity", {
                                          type: "int",
                                          min: 0,
                                          max: 9,
                                          defaultValue: 1
                                      }),
                                      this.addOption("access_token", {
                                          type: "string",
                                          defaultValue: ""
                                      }),
                                      this.addOption("component_name", {
                                          type: "string",
                                          defaultValue: ""
                                      }),
                                      this.addOption("collector_host", {
                                          type: "string",
                                          defaultValue: "collector.lightstep.com"
                                      }),
                                      this.addOption("collector_port", {
                                          type: "int",
                                          defaultValue: 443
                                      }),
                                      this.addOption("collector_path", {
                                          type: "string",
                                          defaultValue: ""
                                      }),
                                      this.addOption("collector_encryption", {
                                          type: "string",
                                          defaultValue: "tls"
                                      }),
                                      this.addOption("tags", {
                                          type: "any",
                                          defaultValue: {}
                                      }),
                                      this.addOption("max_reporting_interval_millis", {
                                          type: "int",
                                          defaultValue: 2500
                                      }),
                                      this.addOption("disable_clock_skew_correction", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      this.addOption("transport", {
                                          type: "string",
                                          defaultValue: "thrift"
                                      }),
                                      this.addOption("disabled", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      this.addOption("max_span_records", {
                                          type: "int",
                                          defaultValue: 4096
                                      }),
                                      this.addOption("default_span_tags", {
                                          type: "any",
                                          defaultValue: {}
                                      }),
                                      this.addOption("report_timeout_millis", {
                                          type: "int",
                                          defaultValue: 3e4
                                      }),
                                      this.addOption("gzip_json_requests", {
                                          type: "bool",
                                          defaultValue: !0
                                      }),
                                      this.addOption("disable_reporting_loop", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      this.addOption("disable_report_on_exit", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      this.addOption("delay_initial_report_millis", {
                                          type: "int",
                                          defaultValue: 1e3
                                      }),
                                      this.addOption("error_throttle_millis", {
                                          type: "int",
                                          defaultValue: 6e4
                                      }),
                                      this.addOption("logger", {
                                          type: "function",
                                          defaultValue: this._printToConsole.bind(this)
                                      }),
                                      this.addOption("clear_span_buffer_consecutive_errors", {
                                          type: "int",
                                          defaultValue: null
                                      }),
                                      this.addOption("certificate_verification", {
                                          type: "bool",
                                          defaultValue: !0
                                      }),
                                      this.addOption("override_transport", {
                                          type: "any",
                                          defaultValue: null
                                      }),
                                      this.addOption("silent", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      this.addOption("log_field_key_hard_limit", {
                                          type: "int",
                                          defaultValue: 256
                                      }),
                                      this.addOption("log_field_value_hard_limit", {
                                          type: "int",
                                          defaultValue: 1024
                                      }),
                                      this.addOption("disable_meta_event_reporting", {
                                          type: "bool",
                                          defaultValue: !1
                                      })
                                  }
                              }, {
                                  key: "_startSpan",
                                  value: function(t, e) {
                                      var r = this
                                        , n = null;
                                      if ((e = e || {}).references)
                                          for (var o = 0; o < e.references.length; o++) {
                                              var c = e.references[o]
                                                , u = c.type();
                                              if (u === this._opentracing.REFERENCE_CHILD_OF || u === this._opentracing.REFERENCE_FOLLOWS_FROM) {
                                                  var l = c.referencedContext();
                                                  if (!l) {
                                                      this._error("Span reference has an invalid context", l);
                                                      continue
                                                  }
                                                  n = l;
                                                  break
                                              }
                                          }
                                      var p, f = n ? n.traceGUID() : this.generateTraceGUIDForRootSpan(), d = !n || n._sampled, h = new i.default(this._platform.generateUUID(),f,d), _ = new a.default(this,t,h);
                                      return _.addTags(this._options.default_span_tags),
                                      (0,
                                      s.default)(e, (function(t, e) {
                                          switch (e) {
                                          case "references":
                                              break;
                                          case "startTime":
                                              _.setBeginMicros(Math.floor(1e3 * t));
                                              break;
                                          case "tags":
                                              _.addTags(t);
                                              break;
                                          default:
                                              r._warn("Ignoring unknown field '".concat(e, "'"))
                                          }
                                      }
                                      )),
                                      null !== n && (_.setParentGUID(n._guid),
                                      n.forEachBaggageItem((function(t, e) {
                                          return h.setBaggageItem(t, e)
                                      }
                                      ))),
                                      this.emit("start_span", _),
                                      I.shouldSendMetaSpan(this.options(), _.getTags()) && this.startSpan(k.LS_META_SP_START, {
                                          tags: (p = {},
                                          g(p, k.LS_META_EVENT_KEY, !0),
                                          g(p, k.LS_META_TRACE_KEY, _.traceGUID()),
                                          g(p, k.LS_META_SPAN_KEY, _.guid()),
                                          p)
                                      }).finish(),
                                      _
                                  }
                              }, {
                                  key: "_inject",
                                  value: function(t, e, r) {
                                      var n;
                                      switch (!0 === this.options().meta_event_reporting && this.startSpan(k.LS_META_INJECT, {
                                          tags: (n = {},
                                          g(n, k.LS_META_EVENT_KEY, !0),
                                          g(n, k.LS_META_TRACE_KEY, t._traceGUID),
                                          g(n, k.LS_META_SPAN_KEY, t._guid),
                                          g(n, k.LS_META_PROPAGATION_KEY, e),
                                          n)
                                      }).finish(),
                                      e) {
                                      case this._opentracing.FORMAT_HTTP_HEADERS:
                                          this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].inject(t, r);
                                          break;
                                      case this._opentracing.FORMAT_TEXT_MAP:
                                          this._propagators[this._opentracing.FORMAT_TEXT_MAP].inject(t, r);
                                          break;
                                      case this._opentracing.FORMAT_BINARY:
                                          this._propagators[this._opentracing.FORMAT_BINARY].inject(t, r);
                                          break;
                                      default:
                                          this._error("Unknown format: ".concat(e))
                                      }
                                  }
                              }, {
                                  key: "_extract",
                                  value: function(t, e) {
                                      var r, n = null;
                                      switch (t) {
                                      case this._opentracing.FORMAT_HTTP_HEADERS:
                                          n = this._propagators[this._opentracing.FORMAT_HTTP_HEADERS].extract(e);
                                          break;
                                      case this._opentracing.FORMAT_TEXT_MAP:
                                          n = this._propagators[this._opentracing.FORMAT_TEXT_MAP].extract(e);
                                          break;
                                      case this._opentracing.FORMAT_BINARY:
                                          n = this._propagators[this._opentracing.FORMAT_BINARY].extract(e);
                                          break;
                                      default:
                                          return this._error("Unsupported format: ".concat(t)),
                                          null
                                      }
                                      return !0 === this.options().meta_event_reporting && n && this.startSpan(k.LS_META_EXTRACT, {
                                          tags: (r = {},
                                          g(r, k.LS_META_EVENT_KEY, !0),
                                          g(r, k.LS_META_TRACE_KEY, n._traceGUID),
                                          g(r, k.LS_META_SPAN_KEY, n._guid),
                                          g(r, k.LS_META_PROPAGATION_KEY, t),
                                          r)
                                      }).finish(),
                                      n
                                  }
                              }, {
                                  key: "flush",
                                  value: function(t) {
                                      if (t || (t = function() {}
                                      ),
                                      this._options.disabled)
                                          return this._warn("Manual flush() called in disabled state."),
                                          t(null);
                                      this._flushReport(!0, !1, t)
                                  }
                              }, {
                                  key: "guid",
                                  value: function() {
                                      return this._runtimeGUID
                                  }
                              }, {
                                  key: "verbosity",
                                  value: function() {
                                      var t = this._options.verbosity;
                                      return void 0 === t ? 1 : t
                                  }
                              }, {
                                  key: "generateTraceGUIDForRootSpan",
                                  value: function() {
                                      var t = this._platform.generateUUID();
                                      return this._activeRootSpan && (t = this._activeRootSpan.traceGUID()),
                                      t
                                  }
                              }, {
                                  key: "setPlatformOptions",
                                  value: function(t) {
                                      var e = this._platform.options(this) || {};
                                      (0,
                                      s.default)(t, (function(t, r) {
                                          e[r] = t
                                      }
                                      )),
                                      this.options(e)
                                  }
                              }, {
                                  key: "addOption",
                                  value: function(t, e) {
                                      e.name = t,
                                      this._optionDescs.push(e),
                                      this._options[e.name] = e.defaultValue
                                  }
                              }, {
                                  key: "options",
                                  value: function(t) {
                                      var e = this;
                                      if (0 === arguments.length)
                                          return console.assert("object" == typeof this._options, "Internal error: _options field incorrect"),
                                          this._options;
                                      if ("object" != typeof t)
                                          throw new Error("options() must be called with an object: type was ".concat(typeof t));
                                      0 === t.collector_port && delete t.collector_port,
                                      void 0 !== t.collector_encryption && void 0 === t.collector_port && (t.collector_port = "none" !== t.collector_encryption ? 443 : 80),
                                      this.meta_event_reporting = !1;
                                      var r = {}
                                        , n = {};
                                      if ((0,
                                      s.default)(this._optionDescs, (function(o) {
                                          e._setOptionInternal(r, n, t, o)
                                      }
                                      )),
                                      Object.keys(t).forEach((function(o) {
                                          void 0 === r[o] && void 0 === n[o] && e._warn("Invalid option ".concat(o, " with value ").concat(t[o]))
                                      }
                                      )),
                                      this._initReportingDataIfNeeded(r),
                                      this._reportingLoopActive || this._startReportingLoop(),
                                      this.verbosity() >= 3) {
                                          var o = ""
                                            , i = 0;
                                          (0,
                                          s.default)(r, (function(t, e) {
                                              o += "\t".concat(JSON.stringify(e), ": ").concat(JSON.stringify(t.newValue), "\n"),
                                              i++
                                          }
                                          )),
                                          i > 0 && this._debug("Options modified:\n".concat(o))
                                      }
                                      this.emit("options", r, this._options, this)
                                  }
                              }, {
                                  key: "_setOptionInternal",
                                  value: function(t, e, r, n) {
                                      var o = n.name
                                        , i = r[o]
                                        , a = typeof i;
                                      if (void 0 !== i) {
                                          switch (n.type) {
                                          case "any":
                                              break;
                                          case "bool":
                                              if (!0 !== i && !1 !== i)
                                                  return void this._error("Invalid boolean option '".concat(o, "' '").concat(i, "'"));
                                              break;
                                          case "function":
                                              if ("function" != typeof i)
                                                  return void this._error("Invalid function option '".concat(o, "' '").concat(i, "'"));
                                              break;
                                          case "int":
                                              if ("number" !== a || Math.floor(i) !== i)
                                                  return void this._error("Invalid int option '".concat(o, "' '").concat(i, "'"));
                                              if (void 0 !== n.min && void 0 !== n.max && !(i >= n.min && i <= n.max))
                                                  return void this._error("Option '".concat(o, "' out of range '").concat(i, "' is not between ").concat(n.min, " and ").concat(n.max));
                                              break;
                                          case "string":
                                              switch (a) {
                                              case "string":
                                                  break;
                                              case "number":
                                                  i = E.toString(i);
                                                  break;
                                              default:
                                                  return void this._error("Invalid string option ".concat(o, " ").concat(i))
                                              }
                                              break;
                                          case "array":
                                              if ("[object Array]" !== Object.prototype.toString.call(i))
                                                  return void this._error("Invalid type for array option ".concat(o, ": found '").concat(a, "'"));
                                              break;
                                          default:
                                              return void this._error("Unknown option type '".concat(n.type, "'"))
                                          }
                                          var s = this._options[o];
                                          if (void 0 === s)
                                              throw new Error("Attempt to set unknown option ".concat(o));
                                          "object" === a || s !== i ? (t[o] = {
                                              oldValue: s,
                                              newValue: i
                                          },
                                          this._options[o] = i) : e[o] = !0
                                      }
                                  }
                              }, {
                                  key: "_initReportingDataIfNeeded",
                                  value: function(t) {
                                      var e = this;
                                      if (null === this._auth) {
                                          this._runtimeGUID = this._platform.runtimeGUID(this._options.component_name),
                                          this._auth = new u.default(this._options.access_token);
                                          var r = {};
                                          (0,
                                          s.default)(this._options.tags, (function(t, n) {
                                              "string" == typeof t ? r[n] = t : e._error("Tracer tag value is not a string: key=".concat(n))
                                          }
                                          )),
                                          r["lightstep.tracer_version"] = x.version;
                                          var n = this._platform.tracerTags();
                                          (0,
                                          s.default)(n, (function(t, e) {
                                              r[e] = t
                                          }
                                          )),
                                          this._runtime = new l.default(this._runtimeGUID,this._startMicros,this._options.component_name,r),
                                          this._info("Initializing reporting data", {
                                              component_name: this._options.component_name,
                                              access_token: this._auth.getAccessToken()
                                          }),
                                          this.emit("reporting_initialized")
                                      } else {
                                          if (!this._runtime)
                                              return this._error("Inconsistent state: auth initialized without runtime.");
                                          if (t.access_token)
                                              throw new Error("Cannot change access_token after it has been set.");
                                          if (t.component_name)
                                              throw new Error("Cannot change component_name after it has been set.");
                                          if (t.collector_host)
                                              throw new Error("Cannot change collector_host after the connection is established");
                                          if (t.collector_port)
                                              throw new Error("Cannot change collector_port after the connection is established");
                                          if (t.collector_path)
                                              throw new Error("Cannot change collector_path after the connection is established");
                                          if (t.collector_encryption)
                                              throw new Error("Cannot change collector_encryption after the connection is established")
                                      }
                                  }
                              }, {
                                  key: "getLogFieldKeyHardLimit",
                                  value: function() {
                                      return this._options.log_field_key_hard_limit
                                  }
                              }, {
                                  key: "getLogFieldValueHardLimit",
                                  value: function() {
                                      return this._options.log_field_value_hard_limit
                                  }
                              }, {
                                  key: "addPlatformPlugins",
                                  value: function(t) {
                                      var e = this
                                        , r = this._platform.plugins(t);
                                      (0,
                                      s.default)(r, (function(t) {
                                          e.addPlugin(t)
                                      }
                                      ))
                                  }
                              }, {
                                  key: "addPlugin",
                                  value: function(t) {
                                      var e = t.name();
                                      this._plugins[e] || (this._plugins[e] = t,
                                      t.addOptions(this))
                                  }
                              }, {
                                  key: "startPlugins",
                                  value: function() {
                                      var t = this;
                                      (0,
                                      s.default)(this._plugins, (function(e, r) {
                                          t._plugins[r].start(t)
                                      }
                                      ))
                                  }
                              }, {
                                  key: "addActiveRootSpan",
                                  value: function(t) {
                                      this._activeRootSpanSet[t._guid] = t,
                                      this._setActiveRootSpanToYoungest()
                                  }
                              }, {
                                  key: "removeActiveRootSpan",
                                  value: function(t) {
                                      delete this._activeRootSpanSet[t._guid],
                                      this._setActiveRootSpanToYoungest()
                                  }
                              }, {
                                  key: "_setActiveRootSpanToYoungest",
                                  value: function() {
                                      var t = this;
                                      this._activeRootSpan = null,
                                      (0,
                                      s.default)(this._activeRootSpanSet, (function(e) {
                                          (!t._activeRootSpan || e._beginMicros > t._activeRootSpan._beginMicros) && (t._activeRootSpan = e)
                                      }
                                      ))
                                  }
                              }, {
                                  key: "_objectToUint8Array",
                                  value: function(t) {
                                      var e;
                                      try {
                                          e = encodeURIComponent(JSON.stringify(t))
                                      } catch (t) {
                                          return this._error("Could not binary encode carrier data."),
                                          null
                                      }
                                      for (var r = new ArrayBuffer(e.length), n = new Uint8Array(r), o = 0; o < e.length; o++) {
                                          var i = e.charCodeAt(o);
                                          if (!(i >= 0 && i <= 255))
                                              return this._error("Unexpected character code"),
                                              null;
                                          n[o] = i
                                      }
                                      return n
                                  }
                              }, {
                                  key: "_uint8ArrayToObject",
                                  value: function(t) {
                                      if (!t)
                                          return this._error("Array is null"),
                                          null;
                                      for (var e = "", r = 0; r < t.length; r++)
                                          e += String.fromCharCode(t[r]);
                                      try {
                                          return JSON.parse(decodeURIComponent(e))
                                      } catch (t) {
                                          return this._error("Could not decode binary data."),
                                          null
                                      }
                                  }
                              }, {
                                  key: "log",
                                  value: function() {
                                      return new S(this)
                                  }
                              }, {
                                  key: "_clearBuffers",
                                  value: function() {
                                      this._spanRecords = [],
                                      this._internalLogs = [];
                                      var t = {};
                                      (0,
                                      s.default)(this._counters, (function(e, r) {
                                          t[r] = 0
                                      }
                                      )),
                                      this._counters = t
                                  }
                              }, {
                                  key: "_buffersAreEmpty",
                                  value: function() {
                                      if (this._spanRecords.length > 0)
                                          return !1;
                                      if (this._internalLogs.length > 0)
                                          return !1;
                                      var t = !0;
                                      return (0,
                                      s.default)(this._counters, (function(e) {
                                          e > 0 && (t = !1)
                                      }
                                      )),
                                      t
                                  }
                              }, {
                                  key: "_addSpanRecord",
                                  value: function(t) {
                                      this._internalAddSpanRecord(t),
                                      this.emit("span_added", t)
                                  }
                              }, {
                                  key: "_internalAddSpanRecord",
                                  value: function(t) {
                                      if (t)
                                          if (this._spanRecords.length >= this._options.max_span_records) {
                                              var e = Math.floor(this._spanRecords.length * Math.random());
                                              this._spanRecords[e] = t,
                                              this._counters["spans.dropped"]++
                                          } else
                                              this._spanRecords.push(t);
                                      else
                                          this._error("Attempt to add null record to buffer")
                                  }
                              }, {
                                  key: "_restoreRecords",
                                  value: function(t, e, r) {
                                      var n = this;
                                      (0,
                                      s.default)(t, (function(t) {
                                          n._internalAddSpanRecord(t)
                                      }
                                      ));
                                      var o = this._internalLogs;
                                      this._internalLogs = [];
                                      var i = e.concat(o);
                                      (0,
                                      s.default)(i, (function(t) {
                                          n._pushInternalLog(t)
                                      }
                                      )),
                                      (0,
                                      s.default)(r, (function(t, e) {
                                          e in n._counters ? n._counters[e] += t : n._error("Bad counter name: ".concat(e))
                                      }
                                      ))
                                  }
                              }, {
                                  key: "_clearSpanRecordsIfMaxErrors",
                                  value: function() {
                                      var t = this.options().clear_span_buffer_consecutive_errors;
                                      if (!(null === t || this._reportErrorStreak < t)) {
                                          var e = this._spanRecords.length;
                                          this._counters["spans.dropped"] += e,
                                          this._spanRecords = [],
                                          this._warn("Span buffer flushed, max consecutive errors reached", {
                                              max_consecutive_errors: t,
                                              spans_dropped: e
                                          })
                                      }
                                  }
                              }, {
                                  key: "_setupReportOnExit",
                                  value: function() {
                                      var t = this;
                                      if (this._options.disable_report_on_exit)
                                          this._debug("report-on-exit is disabled.");
                                      else {
                                          var e = 0;
                                          this._platform.onBeforeExit((function() {
                                              e++ > 0 || (t._info("Final flush before exit."),
                                              t._flushReport(!1, !0, (function(e) {
                                                  e && t._warn("Final report before exit failed", {
                                                      error: e,
                                                      unflushed_spans: t._spanRecords.length,
                                                      buffer_youngest_micros: t._reportYoungestMicros
                                                  })
                                              }
                                              )))
                                          }
                                          ))
                                      }
                                  }
                              }, {
                                  key: "_startReportingLoop",
                                  value: function() {
                                      var t = this;
                                      if (this._options.disabled)
                                          this._info("Not starting reporting loop: instrumentation is disabled.");
                                      else if (this._options.disable_reporting_loop)
                                          this._info("Not starting reporting loop: reporting loop is disabled.");
                                      else if (null !== this._auth)
                                          if (this._reportingLoopActive)
                                              this._info("Reporting loop already started!");
                                          else {
                                              this._info("Starting reporting loop:", this._runtime),
                                              this._reportingLoopActive = !0;
                                              var e = 0;
                                              this._platform.onBeforeExit((function() {
                                                  e++ > 0 || t._stopReportingLoop()
                                              }
                                              ));
                                              var r = function() {
                                                  t._enqueueNextReport((function(e) {
                                                      t._reportingLoopActive && r()
                                                  }
                                                  ))
                                              }
                                                , n = Math.floor(Math.random() * this._options.delay_initial_report_millis);
                                              I.detachedTimeout((function() {
                                                  r()
                                              }
                                              ), n)
                                          }
                                  }
                              }, {
                                  key: "_stopReportingLoop",
                                  value: function() {
                                      this._debug("Stopping reporting loop"),
                                      this._reportingLoopActive = !1,
                                      clearTimeout(this._reportTimer),
                                      this._reportTimer = null
                                  }
                              }, {
                                  key: "_enqueueNextReport",
                                  value: function(t) {
                                      var e = this;
                                      if (!this._reportTimer) {
                                          var r = this._options.max_reporting_interval_millis;
                                          0 === this._reportErrorStreak && this._useClockState && !this._clockState.isReady() && (r = Math.min(k.CLOCK_STATE_REFRESH_INTERVAL_MS, r));
                                          var n = (1 + Math.min(7, Math.max(0, this._reportErrorStreak))) * r
                                            , o = .5 * Math.random() - .25 + 1
                                            , i = Math.floor(Math.max(0, o * n));
                                          this._debug("Delaying next flush for ".concat(i, "ms")),
                                          this._reportTimer = I.detachedTimeout((function() {
                                              e._reportTimer = null,
                                              e._flushReport(!1, !1, t)
                                          }
                                          ), i)
                                      }
                                  }
                              }, {
                                  key: "_flushReport",
                                  value: function(t, e, r) {
                                      var n = this;
                                      r = r || function(t) {}
                                      ;
                                      var o = this._clockState.isReady()
                                        , i = this._clockState.offsetMicros();
                                      this._debug("time correction state", {
                                          offset_micros: i,
                                          active_samples: this._clockState.activeSampleCount(),
                                          ready: o
                                      });
                                      var a = this._spanRecords
                                        , s = this._counters
                                        , c = this._internalLogs;
                                      if (!this._useClockState || t || o || e) {
                                          if (this._buffersAreEmpty())
                                              return this._debug("Skipping empty report"),
                                              r(null);
                                          this._clearBuffers(),
                                          this._debug("Flushing report (".concat(a.length, " spans)"))
                                      } else
                                          this._debug("Flushing empty report to prime clock state"),
                                          a = [],
                                          s = {},
                                          c = [];
                                      this._transport.ensureConnection(this._options),
                                      console.assert(null !== this._runtimeGUID, "No runtime GUID for Tracer");
                                      var u = this._useClockState ? i : 0
                                        , l = this._platform.nowMicros()
                                        , f = new p.default(this._runtime,this._reportYoungestMicros,l,a,c,s,u);
                                      this.emit("prereport", f);
                                      var d, h = this._platform.nowMicros();
                                      this._options.meta_event_reporting && !this._first_report_has_run && (this._first_report_has_run = !0,
                                      this.startSpan(k.LS_META_TRACER_CREATE, {
                                          tags: (d = {},
                                          g(d, k.LS_META_EVENT_KEY, !0),
                                          g(d, k.LS_META_TRACER_GUID_KEY, this._runtimeGUID),
                                          d)
                                      }).finish()),
                                      this._transport.report(e, this._auth, f, (function(t, o) {
                                          var i, a = n._platform.nowMicros(), s = (l - f.oldest_micros) / 1e6;
                                          return t ? (n._reportErrorStreak++,
                                          i = t.message ? "".concat(t.message) : "".concat(t),
                                          n._warn("Error in report: ".concat(i), {
                                              last_report_seconds_ago: s
                                          }),
                                          n._restoreRecords(f.getSpanRecords(), f.getInternalLogs(), f.getCounters()),
                                          n._counters["reports.errors.send"]++,
                                          n._clearSpanRecordsIfMaxErrors(),
                                          n.emit("report_error", t, {
                                              error: t,
                                              streak: n._reportErrorStreak,
                                              detached: e
                                          })) : (n.verbosity() >= 4 && n._debug("Report flushed for last ".concat(s, " seconds"), {
                                              spans_reported: f.getSpanRecords().length
                                          }),
                                          n._reportErrorStreak = 0,
                                          n._reportYoungestMicros = l,
                                          o ? (o.timing && o.timing.receive_micros && o.timing.transmit_micros ? n._clockState.addSample(h, o.timing.receive_micros, o.timing.transmit_micros, a) : o.receiveTimestamp && o.transmitTimestamp ? n._clockState.addSample(h, 1e6 * o.receiveTimestamp.seconds + o.receiveTimestamp.nanos / 1e3, 1e6 * o.transmitTimestamp.seconds + o.transmitTimestamp.nanos / 1e3, a) : n._useClockState = !1,
                                          o.errors && o.errors.length > 0 ? n._warn("Errors in report", o.errors) : o.errorsList && o.errorsList.length > 0 && n._warn("Errors in report", o.errorsList),
                                          o.commandsList && o.commandsList.length > 0 && o.commandsList[0].devMode && !0 !== n.options().disable_meta_event_reporting && (n.options().meta_event_reporting = !0)) : n._useClockState = !1,
                                          n.emit("report", f, o)),
                                          r(t)
                                      }
                                      ))
                                  }
                              }, {
                                  key: "stats",
                                  value: function() {
                                      return {
                                          counters: this._counters
                                      }
                                  }
                              }, {
                                  key: "_debug",
                                  value: function(t, e) {
                                      this.verbosity() < 4 || this._options.logger("debug", t, e)
                                  }
                              }, {
                                  key: "_info",
                                  value: function(t, e) {
                                      this.verbosity() < 3 || this._options.logger("info", t, e)
                                  }
                              }, {
                                  key: "_warn",
                                  value: function(t, e) {
                                      this._counters["internal.warnings"]++,
                                      this.verbosity() < 3 || this._options.logger("warn", t, e)
                                  }
                              }, {
                                  key: "_error",
                                  value: function(t, e) {
                                      this._counters["internal.errors"]++;
                                      var r = this.log().level(k.LOG_ERROR).message(t).payload(e).record();
                                      this._pushInternalLog(r);
                                      var n = this.verbosity();
                                      if (0 !== n) {
                                          var o = Date.now();
                                          if (1 === n) {
                                              if (o < this._lastVisibleErrorMillis + this._options.error_throttle_millis)
                                                  return void this._skippedVisibleErrors++;
                                              if (this._skippedVisibleErrors > 0) {
                                                  var i = "".concat(this._skippedVisibleErrors, " errors masked since last logged error. Increase 'verbosity' option to see all errors.");
                                                  this._options.logger("error", i, e)
                                              }
                                          }
                                          this._options.logger("error", t, e),
                                          this._lastVisibleErrorMillis = o,
                                          this._skippedVisibleErrors = 0
                                      }
                                  }
                              }, {
                                  key: "_printToConsole",
                                  value: function(t, e, r) {
                                      var n = "log"
                                        , o = "[LightStep:INFO] ".concat(e);
                                      "debug" === t ? (n = "log",
                                      o = "[LightStep:DEBUG] ".concat(e)) : "info" === t ? (n = "log",
                                      o = "[LightStep:INFO] ".concat(e)) : "warn" === t ? (n = "warn",
                                      o = "[LightStep:WARN] ".concat(e)) : "error" === t && (n = "error",
                                      o = "[LightStep:ERROR] ".concat(e)),
                                      this._options.silent || (void 0 !== r ? console[n](o, r) : console[n](o))
                                  }
                              }, {
                                  key: "_pushInternalLog",
                                  value: function(t) {
                                      t && (this._internalLogs.length >= 20 ? (t.message = "MAX_INTERNAL_LOGS limit hit. Last error: ".concat(t.message),
                                      this._internalLogs[this._internalLogs.length - 1] = t) : this._internalLogs.push(t))
                                  }
                              }],
                              h && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, h),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              j
                          }(o.Tracer);
                          e.default = M,
                          t.exports = e.default
                      }
                      ,
                      344: (t,e,r)=>{
                          "use strict";
                          var n, o = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, i = function() {
                              function t(e) {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._nowMicros = e.nowMicros,
                                  this._localStoreGet = e.localStoreGet,
                                  this._localStoreSet = e.localStoreSet,
                                  this._samples = [],
                                  this._currentOffsetMicros = 0,
                                  this._currentOffsetAge = 8;
                                  var r = this._localStoreGet();
                                  r && r.timestamp_micros && r.timestamp_micros > this._nowMicros() - 36e8 && (this._samples = r.samples.slice(-8)),
                                  this.update()
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "addSample",
                                  value: function(t, e, r, n) {
                                      var o = Number.MAX_VALUE
                                        , i = 0;
                                      t > 0 && e > 0 && r > 0 && n > 0 && (o = n - t - (r - e),
                                      i = (e - t + (r - n)) / 2),
                                      8 === this._samples.length && this._samples.shift(),
                                      this._samples.push({
                                          delayMicros: o,
                                          offsetMicros: i
                                      }),
                                      this._currentOffsetAge++,
                                      this._localStoreSet({
                                          timestamp_micros: this._nowMicros(),
                                          samples: this._samples
                                      }),
                                      this.update()
                                  }
                              }, {
                                  key: "update",
                                  value: function() {
                                      var t = Number.MAX_VALUE
                                        , e = 0;
                                      if ((0,
                                      o.default)(this._samples, (function(r) {
                                          r.delayMicros < t && (t = r.delayMicros,
                                          e = r.offsetMicros)
                                      }
                                      )),
                                      e !== this._currentOffsetMicros) {
                                          var r = 0;
                                          (0,
                                          o.default)(this._samples, (function(t) {
                                              r += (e - t.offsetMicros) ** 2
                                          }
                                          )),
                                          r = Math.sqrt(r / this._samples.length),
                                          (this._currentOffsetAge > 7 || Math.abs(this._currentOffsetMicros - e) < 3 * r) && (this._currentOffsetMicros = e,
                                          this._currentOffsetAge = 0)
                                      }
                                  }
                              }, {
                                  key: "offsetMicros",
                                  value: function() {
                                      return Math.floor(this._currentOffsetMicros)
                                  }
                              }, {
                                  key: "isReady",
                                  value: function() {
                                      return this._samples.length > 3
                                  }
                              }, {
                                  key: "activeSampleCount",
                                  value: function() {
                                      return this._samples.length
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = i
                      }
                      ,
                      278: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = void 0;
                          var n = r(36)
                            , o = new (function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t)
                              }
                              var e, o;
                              return e = t,
                              (o = [{
                                  key: "detachedTimeout",
                                  value: function(t, e) {
                                      var r = setTimeout(t, e);
                                      return r.unref && r.unref(),
                                      r
                                  }
                              }, {
                                  key: "shouldSendMetaSpan",
                                  value: function(t, e) {
                                      return !0 === t.meta_event_reporting && !0 !== e["lightstep.meta_event"]
                                  }
                              }, {
                                  key: "hexToDec",
                                  value: function(t) {
                                      return "function" != typeof r.g.BigInt ? n.hexToDec(t) : r.g.BigInt("0x".concat(t)).toString(10)
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, o),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }());
                          e.default = o,
                          t.exports = e.default
                      }
                      ,
                      410: (t,e,r)=>{
                          "use strict";
                          var n = u(r(90))
                            , o = u(r(683))
                            , i = u(r(255))
                            , a = u(r(976))
                            , s = u(r(970))
                            , c = r(295);
                          function u(t) {
                              return t && t.__esModule ? t : {
                                  default: t
                              }
                          }
                          var l = {
                              Tracer: n.default,
                              LightStepPropagator: o.default,
                              B3Propagator: i.default,
                              DDPropagator: a.default,
                              SpanContext: s.default
                          };
                          c.Platform.initLibrary(l),
                          t.exports = l
                      }
                      ,
                      295: (t,e,r)=>{
                          "use strict";
                          t.exports = {
                              Platform: r(733),
                              ThriftTransport: r(374),
                              thrift: r(720),
                              crouton_thrift: r(638)
                          }
                      }
                      ,
                      921: (t,e,r)=>{
                          "use strict";
                          var n, o = (n = r(31)) && n.__esModule ? n : {
                              default: n
                          }, i = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._inited = !1,
                                  this._span = null
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "name",
                                  value: function() {
                                      return "instrument_page_load"
                                  }
                              }, {
                                  key: "addOptions",
                                  value: function(t) {
                                      t.addOption("instrument_page_load", {
                                          type: "bool",
                                          defaultValue: !1
                                      })
                                  }
                              }, {
                                  key: "start",
                                  value: function(t) {
                                      this._inited || (this._inited = !0,
                                      "object" == typeof window && "object" == typeof document && t.options().instrument_page_load && (this._ensureSpanStarted(t),
                                      document.addEventListener("readystatechange", this._handleReadyStateChange.bind(this))))
                                  }
                              }, {
                                  key: "stop",
                                  value: function() {}
                              }, {
                                  key: "_ensureSpanStarted",
                                  value: function(t) {
                                      this._span || (this._span = t.startSpan("document/load"),
                                      t.addActiveRootSpan(this._span))
                                  }
                              }, {
                                  key: "_handleReadyStateChange",
                                  value: function() {
                                      if (this._span) {
                                          var t, e = this._span, r = document.readyState;
                                          "complete" === r && (t = {},
                                          window.performance && performance.timing && (this._addTimingSpans(e, performance.timing),
                                          t["window.performance.timing"] = performance.timing)),
                                          e.logEvent("document.readystatechange ".concat(r), t),
                                          "complete" === r && (e.tracer() && e.tracer().removeActiveRootSpan(e.tracer()),
                                          e.finish())
                                      }
                                  }
                              }, {
                                  key: "_copyNavigatorProperties",
                                  value: function(t) {
                                      var e = {};
                                      for (var r in t)
                                          try {
                                              var n = t[r];
                                              switch (r) {
                                              case "plugins":
                                                  for (var o = [], i = 0; i < n.length; i++) {
                                                      var a = n.item(i);
                                                      o.push({
                                                          name: a.name,
                                                          description: a.description
                                                      })
                                                  }
                                                  e[r] = o;
                                                  break;
                                              case "mimeTypes":
                                                  for (var s = [], c = 0; c < n.length; c++) {
                                                      var u = n.item(c);
                                                      s.push({
                                                          type: u.type,
                                                          description: u.description,
                                                          suffixes: u.suffixes
                                                      })
                                                  }
                                                  e[r] = s;
                                                  break;
                                              default:
                                                  e[r] = n
                                              }
                                          } catch (t) {}
                                      return e
                                  }
                              }, {
                                  key: "_addTimingSpans",
                                  value: function(t, e) {
                                      var r = this;
                                      t && (t.setTag("user_agent", navigator.userAgent),
                                      (0,
                                      o.default)(e, (function(e, n) {
                                          var o;
                                          "number" == typeof e && 0 !== e && ("navigationStart" === n && "object" == typeof navigator && (o = {
                                              navigator: r._copyNavigatorProperties(navigator)
                                          }),
                                          t.log({
                                              message: "document ".concat(n),
                                              payload: o
                                          }, e))
                                      }
                                      )),
                                      t.setBeginMicros(1e3 * e.navigationStart),
                                      t.tracer().startSpan("document/time_to_first_byte", {
                                          childOf: t
                                      }).setBeginMicros(1e3 * e.requestStart).setEndMicros(1e3 * e.responseStart).finish(),
                                      t.tracer().startSpan("document/response_transfer", {
                                          childOf: t
                                      }).setBeginMicros(1e3 * e.responseStart).setEndMicros(1e3 * e.responseEnd).finish(),
                                      t.tracer().startSpan("document/dom_load", {
                                          childOf: t
                                      }).setBeginMicros(1e3 * e.domLoading).setEndMicros(1e3 * e.domInteractive).finish())
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = new i
                      }
                      ,
                      49: (t,e,r)=>{
                          "use strict";
                          var n, o = function(t, e) {
                              if (t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = i(void 0);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var a in t)
                                  if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                                      var s = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                                      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }(r(725));
                          function i(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (i = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          function a(t, e) {
                              return function(t) {
                                  if (Array.isArray(t))
                                      return t
                              }(t) || function(t, e) {
                                  var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                  if (null != r) {
                                      var n, o, i = [], a = !0, s = !1;
                                      try {
                                          for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value),
                                          !e || i.length !== e); a = !0)
                                              ;
                                      } catch (t) {
                                          s = !0,
                                          o = t
                                      } finally {
                                          try {
                                              a || null == r.return || r.return()
                                          } finally {
                                              if (s)
                                                  throw o
                                          }
                                      }
                                      return i
                                  }
                              }(t, e) || function(t, e) {
                                  if (t) {
                                      if ("string" == typeof t)
                                          return s(t, e);
                                      var r = Object.prototype.toString.call(t).slice(8, -1);
                                      return "Object" === r && t.constructor && (r = t.constructor.name),
                                      "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(t, e) : void 0
                                  }
                              }(t, e) || function() {
                                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                              }()
                          }
                          function s(t, e) {
                              (null == e || e > t.length) && (e = t.length);
                              for (var r = 0, n = new Array(e); r < e; r++)
                                  n[r] = t[r];
                              return n
                          }
                          function c(t) {
                              for (var e = {}, r = t.headers.entries(), n = 0; n < r.length; n++) {
                                  var o = a(r[n], 2)
                                    , i = o[0]
                                    , s = o[1];
                                  e[i] = s
                              }
                              return e
                          }
                          "object" == typeof window && void 0 !== window.fetch && (n = window.fetch);
                          var u = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._enabled = this._isValidContext(),
                                  this._proxyInited = !1,
                                  this._internalExclusions = [],
                                  this._tracer = null,
                                  this._handleOptions = this._handleOptions.bind(this)
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "name",
                                  value: function() {
                                      return "instrument_fetch"
                                  }
                              }, {
                                  key: "addOptions",
                                  value: function(t) {
                                      t.addOption("fetch_instrumentation", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      t.addOption("fetch_url_inclusion_patterns", {
                                          type: "array",
                                          defaultValue: [/.*/]
                                      }),
                                      t.addOption("fetch_url_exclusion_patterns", {
                                          type: "array",
                                          defaultValue: []
                                      }),
                                      t.addOption("fetch_url_header_inclusion_patterns", {
                                          type: "array",
                                          defaultValue: [/.*/]
                                      }),
                                      t.addOption("fetch_url_header_exclusion_patterns", {
                                          type: "array",
                                          defaultValue: []
                                      }),
                                      t.addOption("include_cookies", {
                                          type: "bool",
                                          defaultValue: !0
                                      })
                                  }
                              }, {
                                  key: "start",
                                  value: function(t) {
                                      if (this._enabled) {
                                          this._tracer = t;
                                          var e = t.options();
                                          this._addServiceHostToExclusions(e),
                                          this._handleOptions({}, e),
                                          t.on("options", this._handleOptions)
                                      }
                                  }
                              }, {
                                  key: "stop",
                                  value: function() {
                                      this._enabled && (window.fetch = n)
                                  }
                              }, {
                                  key: "_handleOptions",
                                  value: function(t, e) {
                                      t.collector_host && this._addServiceHostToExclusions(e),
                                      !this._proxyInited && e.fetch_instrumentation && (this._proxyInited = !0,
                                      window.fetch = this._instrumentFetch())
                                  }
                              }, {
                                  key: "_addServiceHostToExclusions",
                                  value: function(t) {
                                      if (0 !== t.collector_host.length) {
                                          var e = o(t.collector_host)
                                            , r = o(t.collector_port)
                                            , n = [new RegExp("^https?://".concat(e, ":").concat(r))];
                                          "80" === r ? n.push(new RegExp("^http://".concat(e))) : "443" === r && n.push(new RegExp("^https://".concat(e))),
                                          this._internalExclusions = n
                                      }
                                      function o(t) {
                                          return "".concat(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                                      }
                                  }
                              }, {
                                  key: "_isValidContext",
                                  value: function() {
                                      return "undefined" != typeof window && !!window.fetch
                                  }
                              }, {
                                  key: "_instrumentFetch",
                                  value: function() {
                                      var t = this
                                        , e = this._tracer;
                                      return function(r, i) {
                                          var a = new Request(r,i)
                                            , s = e.options();
                                          if (!t._shouldTrace(e, a.url))
                                              return n(a);
                                          var u = e.startSpan("fetch");
                                          e.addActiveRootSpan(u);
                                          var l = new URL(a.url)
                                            , p = {
                                              method: a.method,
                                              url: a.url,
                                              hash: l.hash,
                                              href: l.href,
                                              protocol: l.protocol,
                                              origin: l.origin,
                                              host: l.host,
                                              hostname: l.hostname,
                                              port: l.port,
                                              pathname: l.pathname,
                                              search: l.search
                                          };
                                          if (s.include_cookies && (p.cookies = function() {
                                              if ("undefined" == typeof document || !document.cookie)
                                                  return null;
                                              for (var t = document.cookie.split(";"), e = {}, r = 0, n = 0; n < t.length; n++) {
                                                  var o = t[n].split("=", 2);
                                                  if (2 === o.length) {
                                                      var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
                                                      e[i] = decodeURIComponent(o[1]);
                                                      try {
                                                          e[i] = JSON.parse(e[i])
                                                      } catch (t) {}
                                                      r++
                                                  }
                                              }
                                              return r > 0 ? e : null
                                          }()),
                                          t._shouldAddHeadersToRequest(e, a.url)) {
                                              var f = {};
                                              e.inject(u.context(), o.FORMAT_HTTP_HEADERS, f),
                                              Object.keys(f).forEach((function(t) {
                                                  a.headers.get(t) || a.headers.set(t, f[t])
                                              }
                                              ))
                                          }
                                          return u.log({
                                              event: "sending",
                                              method: a.method,
                                              url: a.url,
                                              openPayload: p
                                          }),
                                          u.addTags(p),
                                          n(a).then((function(t) {
                                              return t.ok || u.addTags({
                                                  error: !0
                                              }),
                                              u.log({
                                                  method: a.method,
                                                  headers: c(t),
                                                  status: t.status,
                                                  statusText: t.statusText,
                                                  responseType: t.type,
                                                  url: t.url
                                              }),
                                              e.removeActiveRootSpan(u),
                                              u.finish(),
                                              t
                                          }
                                          )).catch((function(t) {
                                              throw u.addTags({
                                                  error: !0
                                              }),
                                              e.removeActiveRootSpan(u),
                                              u.log({
                                                  event: "error",
                                                  error: t
                                              }),
                                              u.finish(),
                                              t
                                          }
                                          ))
                                      }
                                  }
                              }, {
                                  key: "_shouldTrace",
                                  value: function(t, e) {
                                      if (!t || !e)
                                          return !1;
                                      var r = t.options();
                                      return !(r.disabled || this._internalExclusions.some((function(t) {
                                          return t.test(e)
                                      }
                                      )) || r.fetch_url_exclusion_patterns.some((function(t) {
                                          return t.test(e)
                                      }
                                      )) || !r.fetch_url_inclusion_patterns.some((function(t) {
                                          return t.test(e)
                                      }
                                      )))
                                  }
                              }, {
                                  key: "_shouldAddHeadersToRequest",
                                  value: function(t, e) {
                                      if (!t || !e)
                                          return !1;
                                      var r = t.options();
                                      return !r.disabled && !r.fetch_url_header_exclusion_patterns.some((function(t) {
                                          return t.test(e)
                                      }
                                      )) && !!r.fetch_url_header_inclusion_patterns.some((function(t) {
                                          return t.test(e)
                                      }
                                      ))
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = new u
                      }
                      ,
                      792: (t,e,r)=>{
                          "use strict";
                          var n = function(t, e) {
                              if (t && t.__esModule)
                                  return t;
                              if (null === t || "object" != typeof t && "function" != typeof t)
                                  return {
                                      default: t
                                  };
                              var r = o(void 0);
                              if (r && r.has(t))
                                  return r.get(t);
                              var n = {}
                                , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                              for (var a in t)
                                  if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                                      var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                                      s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
                                  }
                              return n.default = t,
                              r && r.set(t, n),
                              n
                          }(r(725));
                          function o(t) {
                              if ("function" != typeof WeakMap)
                                  return null;
                              var e = new WeakMap
                                , r = new WeakMap;
                              return (o = function(t) {
                                  return t ? r : e
                              }
                              )(t)
                          }
                          function i(t, e) {
                              var r = Object.keys(t);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(t);
                                  e && (n = n.filter((function(e) {
                                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                                  }
                                  ))),
                                  r.push.apply(r, n)
                              }
                              return r
                          }
                          function a(t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = null != arguments[e] ? arguments[e] : {};
                                  e % 2 ? i(Object(r), !0).forEach((function(e) {
                                      s(t, e, r[e])
                                  }
                                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                  }
                                  ))
                              }
                              return t
                          }
                          function s(t, e, r) {
                              return e in t ? Object.defineProperty(t, e, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              }) : t[e] = r,
                              t
                          }
                          var c = {};
                          function u() {
                              if ("undefined" == typeof document || !document.cookie)
                                  return null;
                              for (var t = document.cookie.split(";"), e = {}, r = 0, n = 0; n < t.length; n++) {
                                  var o = t[n].split("=", 2);
                                  if (2 === o.length) {
                                      var i = o[0].replace(/^\s+/, "").replace(/\s+$/, "");
                                      e[i] = decodeURIComponent(o[1]);
                                      try {
                                          e[i] = JSON.parse(e[i])
                                      } catch (t) {}
                                      r++
                                  }
                              }
                              return r > 0 ? e : null
                          }
                          function l(t) {
                              for (var e = t.getAllResponseHeaders().replace(/\s+$/, "").split(/\n/), r = 0; r < e.length; r++)
                                  e[r] = e[r].replace(/\r/g, "").replace(/^\s+/, "").replace(/\s+$/, "");
                              return e
                          }
                          "object" == typeof window && void 0 !== window.XMLHttpRequest && (c = {
                              XMLHttpRequest,
                              open: XMLHttpRequest.prototype.open,
                              send: XMLHttpRequest.prototype.send,
                              setRequestHeader: XMLHttpRequest.prototype.setRequestHeader
                          });
                          var p = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._enabled = this._isValidContext(),
                                  this._proxyInited = !1,
                                  this._internalExclusions = [],
                                  this._tracer = null,
                                  this._handleOptions = this._handleOptions.bind(this)
                              }
                              var e, r;
                              return e = t,
                              r = [{
                                  key: "name",
                                  value: function() {
                                      return "instrument_xhr"
                                  }
                              }, {
                                  key: "addOptions",
                                  value: function(t) {
                                      t.addOption("xhr_instrumentation", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      t.addOption("xhr_url_inclusion_patterns", {
                                          type: "array",
                                          defaultValue: [/.*/]
                                      }),
                                      t.addOption("xhr_url_exclusion_patterns", {
                                          type: "array",
                                          defaultValue: []
                                      }),
                                      t.addOption("xhr_url_header_inclusion_patterns", {
                                          type: "array",
                                          defaultValue: [/.*/]
                                      }),
                                      t.addOption("xhr_url_header_exclusion_patterns", {
                                          type: "array",
                                          defaultValue: []
                                      }),
                                      t.addOption("include_cookies", {
                                          type: "bool",
                                          defaultValue: !0
                                      })
                                  }
                              }, {
                                  key: "start",
                                  value: function(t) {
                                      if (this._enabled) {
                                          this._tracer = t;
                                          var e = t.options();
                                          this._addServiceHostToExclusions(e),
                                          this._handleOptions({}, e),
                                          t.on("options", this._handleOptions)
                                      }
                                  }
                              }, {
                                  key: "stop",
                                  value: function() {
                                      if (this._enabled) {
                                          var t = c.XMLHttpRequest.prototype;
                                          t.open = c.open,
                                          t.send = c.send
                                      }
                                  }
                              }, {
                                  key: "_handleOptions",
                                  value: function(t, e) {
                                      if (t.collector_host && this._addServiceHostToExclusions(e),
                                      !this._proxyInited && e.xhr_instrumentation) {
                                          this._proxyInited = !0;
                                          var r = c.XMLHttpRequest.prototype;
                                          r.setRequestHeader = this._instrumentSetRequestHeader(),
                                          r.open = this._instrumentOpen(),
                                          r.send = this._instrumentSend()
                                      }
                                  }
                              }, {
                                  key: "_addServiceHostToExclusions",
                                  value: function(t) {
                                      if (0 !== t.collector_host.length) {
                                          var e = o(t.collector_host)
                                            , r = o(t.collector_port)
                                            , n = [new RegExp("^https?://".concat(e, ":").concat(r))];
                                          "80" === r ? n.push(new RegExp("^http://".concat(e))) : "443" === r && n.push(new RegExp("^https://".concat(e))),
                                          this._internalExclusions = n
                                      }
                                      function o(t) {
                                          return "".concat(t).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                                      }
                                  }
                              }, {
                                  key: "_isValidContext",
                                  value: function() {
                                      return "undefined" != typeof window && !!window.XMLHttpRequest && !!window.XMLHttpRequest.prototype
                                  }
                              }, {
                                  key: "_instrumentSetRequestHeader",
                                  value: function() {
                                      return function(t, e) {
                                          return this.__requestHeaders = this.__requestHeaders || {},
                                          this.__requestHeaders[t] = e,
                                          c.setRequestHeader.apply(this, arguments)
                                      }
                                  }
                              }, {
                                  key: "_instrumentOpen",
                                  value: function() {
                                      var t = this
                                        , e = this._tracer;
                                      return function(r, n, o, i, s) {
                                          if (!t._shouldTrace(e, this, n))
                                              return c.open.apply(this, arguments);
                                          var p = e.options()
                                            , f = e.startSpan("XMLHttpRequest");
                                          e.addActiveRootSpan(f),
                                          this.__tracer_span = f,
                                          this.__tracer_url = n;
                                          var d = {
                                              method: r,
                                              url: n,
                                              async: o,
                                              user: i
                                          };
                                          n && (d.url_pathname = n.split("?")[0]);
                                          var h = a({}, d);
                                          p.include_cookies && (h.cookies = u());
                                          var _ = void 0 === o || o;
                                          _ && this.addEventListener("readystatechange", (function() {
                                              if (0 === this.readyState)
                                                  f.log({
                                                      readyState: 0,
                                                      event: "unsent"
                                                  });
                                              else if (1 === this.readyState)
                                                  f.log({
                                                      readyState: 1,
                                                      event: "sending"
                                                  });
                                              else if (2 === this.readyState)
                                                  f.log({
                                                      readyState: 2,
                                                      event: "headers received",
                                                      method: r,
                                                      url: n,
                                                      openPayload: h,
                                                      headers: l(this)
                                                  }),
                                                  f.addTags(d);
                                              else if (3 === this.readyState)
                                                  f.log({
                                                      readyState: 3,
                                                      event: "loading"
                                                  });
                                              else if (4 === this.readyState) {
                                                  var t = this.responseType;
                                                  f.log({
                                                      readyState: 4,
                                                      url: n,
                                                      method: r,
                                                      headers: l(this),
                                                      status: this.status,
                                                      statusText: this.statusText,
                                                      responseType: t
                                                  }),
                                                  e.removeActiveRootSpan(f),
                                                  f.finish()
                                              } else
                                                  f.log({
                                                      readyState: this.readyState
                                                  })
                                          }
                                          ));
                                          var y = c.open.apply(this, arguments);
                                          return _ || (e.removeActiveRootSpan(f),
                                          f.finish()),
                                          y
                                      }
                                  }
                              }, {
                                  key: "_instrumentSend",
                                  value: function() {
                                      var t = this
                                        , e = this._tracer;
                                      return function() {
                                          var r = this;
                                          if (!t._shouldTrace(e, this, this.__tracer_url))
                                              return c.send.apply(this, arguments);
                                          var o = this.__tracer_span;
                                          if (!o)
                                              return c.send.apply(this, arguments);
                                          var i, a = Array.prototype.slice.call(arguments);
                                          if (1 === a.length) {
                                              a[0] && a[0].length && (i = a[0].length);
                                              try {
                                                  a = JSON.parse(a[0])
                                              } catch (t) {}
                                          }
                                          var s = void 0 === i ? "" : ", data length=".concat(i);
                                          if (o.log({
                                              event: "send",
                                              data_length: s
                                          }),
                                          t._shouldAddHeadersToRequest(e, this.__tracer_url)) {
                                              var u = {};
                                              e.inject(o.context(), n.FORMAT_HTTP_HEADERS, u);
                                              var l = Object.keys(u);
                                              l.forEach((function(t) {
                                                  c.setRequestHeader.call(r, t, u[t])
                                              }
                                              ))
                                          }
                                          return c.send.apply(this, arguments)
                                      }
                                  }
                              }, {
                                  key: "_shouldTrace",
                                  value: function(t, e, r) {
                                      if (!t || !r)
                                          return !1;
                                      var n = t.options();
                                      return !(n.disabled || this._internalExclusions.some((function(t) {
                                          return t.test(r)
                                      }
                                      )) || n.xhr_url_exclusion_patterns.some((function(t) {
                                          return t.test(r)
                                      }
                                      )) || !n.xhr_url_inclusion_patterns.some((function(t) {
                                          return t.test(r)
                                      }
                                      )))
                                  }
                              }, {
                                  key: "_shouldAddHeadersToRequest",
                                  value: function(t, e) {
                                      if (!t || !e)
                                          return !1;
                                      var r = t.options();
                                      return !r.disabled && !r.xhr_url_header_exclusion_patterns.some((function(t) {
                                          return t.test(e)
                                      }
                                      )) && !!r.xhr_url_header_inclusion_patterns.some((function(t) {
                                          return t.test(e)
                                      }
                                      ))
                                  }
                              }],
                              r && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = new p
                      }
                      ,
                      981: (t,e,r)=>{
                          "use strict";
                          var n = r(843)
                            , o = function() {
                              function t() {
                                  !function(t, e) {
                                      if (!(t instanceof e))
                                          throw new TypeError("Cannot call a class as a function")
                                  }(this, t),
                                  this._enabled = !1,
                                  this._tracer = null,
                                  this._optionsCb = this._handleOptions.bind(this),
                                  this._logAddedCb = this._handleLogAdded.bind(this)
                              }
                              var e, r;
                              return e = t,
                              (r = [{
                                  key: "name",
                                  value: function() {
                                      return "log_to_console"
                                  }
                              }, {
                                  key: "addOptions",
                                  value: function(t) {
                                      t.addOption("log_to_console", {
                                          type: "bool",
                                          defaultValue: !1
                                      }),
                                      t.on("options", this._optionsCb)
                                  }
                              }, {
                                  key: "start",
                                  value: function(t, e) {
                                      this._tracer = t
                                  }
                              }, {
                                  key: "stop",
                                  value: function() {
                                      this._tracer.removeListener("options", this._optionsCb)
                                  }
                              }, {
                                  key: "_handleOptions",
                                  value: function(t, e, r) {
                                      var n = e.log_to_console;
                                      this._enabled !== n && (this._enabled = n,
                                      this._enabled ? r.on("log_added", this._logAddedCb) : r.removeListener("log_added", this._logAddedCb))
                                  }
                              }, {
                                  key: "_handleLogAdded",
                                  value: function(t) {
                                      var e = n.LOG_STRING_TO_LEVEL[t.level]
                                        , r = t.message;
                                      if (r) {
                                          var o = t.payload_json;
                                          if (o)
                                              try {
                                                  o = JSON.parse(o)
                                              } catch (t) {}
                                          switch (e) {
                                          case n.LOG_ERROR:
                                          case n.LOG_FATAL:
                                              void 0 !== o ? console.error(r, o) : console.error(r);
                                              break;
                                          case n.LOG_WARN:
                                              void 0 !== o ? console.warn(r, o) : console.warn(r);
                                              break;
                                          case n.LOG_INFO:
                                          default:
                                              void 0 !== o ? console.log(r, o) : console.log(r)
                                          }
                                      }
                                  }
                              }]) && function(t, e) {
                                  for (var r = 0; r < e.length; r++) {
                                      var n = e[r];
                                      n.enumerable = n.enumerable || !1,
                                      n.configurable = !0,
                                      "value"in n && (n.writable = !0),
                                      Object.defineProperty(t, n.key, n)
                                  }
                              }(e.prototype, r),
                              Object.defineProperty(e, "prototype", {
                                  writable: !1
                              }),
                              t
                          }();
                          t.exports = new o
                      }
                      ,
                      729: t=>{
                          "use strict";
                          var e = Object.prototype.hasOwnProperty
                            , r = "~";
                          function n() {}
                          function o(t, e, r) {
                              this.fn = t,
                              this.context = e,
                              this.once = r || !1
                          }
                          function i(t, e, n, i, a) {
                              if ("function" != typeof n)
                                  throw new TypeError("The listener must be a function");
                              var s = new o(n,i || t,a)
                                , c = r ? r + e : e;
                              return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], s] : t._events[c].push(s) : (t._events[c] = s,
                              t._eventsCount++),
                              t
                          }
                          function a(t, e) {
                              0 == --t._eventsCount ? t._events = new n : delete t._events[e]
                          }
                          function s() {
                              this._events = new n,
                              this._eventsCount = 0
                          }
                          Object.create && (n.prototype = Object.create(null),
                          (new n).__proto__ || (r = !1)),
                          s.prototype.eventNames = function() {
                              var t, n, o = [];
                              if (0 === this._eventsCount)
                                  return o;
                              for (n in t = this._events)
                                  e.call(t, n) && o.push(r ? n.slice(1) : n);
                              return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(t)) : o
                          }
                          ,
                          s.prototype.listeners = function(t) {
                              var e = r ? r + t : t
                                , n = this._events[e];
                              if (!n)
                                  return [];
                              if (n.fn)
                                  return [n.fn];
                              for (var o = 0, i = n.length, a = new Array(i); o < i; o++)
                                  a[o] = n[o].fn;
                              return a
                          }
                          ,
                          s.prototype.listenerCount = function(t) {
                              var e = r ? r + t : t
                                , n = this._events[e];
                              return n ? n.fn ? 1 : n.length : 0
                          }
                          ,
                          s.prototype.emit = function(t, e, n, o, i, a) {
                              var s = r ? r + t : t;
                              if (!this._events[s])
                                  return !1;
                              var c, u, l = this._events[s], p = arguments.length;
                              if (l.fn) {
                                  switch (l.once && this.removeListener(t, l.fn, void 0, !0),
                                  p) {
                                  case 1:
                                      return l.fn.call(l.context),
                                      !0;
                                  case 2:
                                      return l.fn.call(l.context, e),
                                      !0;
                                  case 3:
                                      return l.fn.call(l.context, e, n),
                                      !0;
                                  case 4:
                                      return l.fn.call(l.context, e, n, o),
                                      !0;
                                  case 5:
                                      return l.fn.call(l.context, e, n, o, i),
                                      !0;
                                  case 6:
                                      return l.fn.call(l.context, e, n, o, i, a),
                                      !0
                                  }
                                  for (u = 1,
                                  c = new Array(p - 1); u < p; u++)
                                      c[u - 1] = arguments[u];
                                  l.fn.apply(l.context, c)
                              } else {
                                  var f, d = l.length;
                                  for (u = 0; u < d; u++)
                                      switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0),
                                      p) {
                                      case 1:
                                          l[u].fn.call(l[u].context);
                                          break;
                                      case 2:
                                          l[u].fn.call(l[u].context, e);
                                          break;
                                      case 3:
                                          l[u].fn.call(l[u].context, e, n);
                                          break;
                                      case 4:
                                          l[u].fn.call(l[u].context, e, n, o);
                                          break;
                                      default:
                                          if (!c)
                                              for (f = 1,
                                              c = new Array(p - 1); f < p; f++)
                                                  c[f - 1] = arguments[f];
                                          l[u].fn.apply(l[u].context, c)
                                      }
                              }
                              return !0
                          }
                          ,
                          s.prototype.on = function(t, e, r) {
                              return i(this, t, e, r, !1)
                          }
                          ,
                          s.prototype.once = function(t, e, r) {
                              return i(this, t, e, r, !0)
                          }
                          ,
                          s.prototype.removeListener = function(t, e, n, o) {
                              var i = r ? r + t : t;
                              if (!this._events[i])
                                  return this;
                              if (!e)
                                  return a(this, i),
                                  this;
                              var s = this._events[i];
                              if (s.fn)
                                  s.fn !== e || o && !s.once || n && s.context !== n || a(this, i);
                              else {
                                  for (var c = 0, u = [], l = s.length; c < l; c++)
                                      (s[c].fn !== e || o && !s[c].once || n && s[c].context !== n) && u.push(s[c]);
                                  u.length ? this._events[i] = 1 === u.length ? u[0] : u : a(this, i)
                              }
                              return this
                          }
                          ,
                          s.prototype.removeAllListeners = function(t) {
                              var e;
                              return t ? (e = r ? r + t : t,
                              this._events[e] && a(this, e)) : (this._events = new n,
                              this._eventsCount = 0),
                              this
                          }
                          ,
                          s.prototype.off = s.prototype.removeListener,
                          s.prototype.addListener = s.prototype.on,
                          s.prefixed = r,
                          s.EventEmitter = s,
                          t.exports = s
                      }
                      ,
                      36: t=>{
                          function e(t, e, r) {
                              for (var n = [], o = Math.max(t.length, e.length), i = 0, a = 0; a < o || i; ) {
                                  var s = i + (a < t.length ? t[a] : 0) + (a < e.length ? e[a] : 0);
                                  n.push(s % r),
                                  i = Math.floor(s / r),
                                  a++
                              }
                              return n
                          }
                          function r(t, r, n) {
                              if (t < 0)
                                  return null;
                              if (0 == t)
                                  return [];
                              for (var o = [], i = r; 1 & t && (o = e(o, i, n)),
                              0 != (t >>= 1); )
                                  i = e(i, i, n);
                              return o
                          }
                          function n(t, n, o) {
                              var i = function(t, e) {
                                  for (var r = t.split(""), n = [], o = r.length - 1; o >= 0; o--) {
                                      var i = parseInt(r[o], e);
                                      if (isNaN(i))
                                          return null;
                                      n.push(i)
                                  }
                                  return n
                              }(t, n);
                              if (null === i)
                                  return null;
                              for (var a = [], s = [1], c = 0; c < i.length; c++)
                                  i[c] && (a = e(a, r(i[c], s, o), o)),
                                  s = r(n, s, o);
                              var u = "";
                              for (c = a.length - 1; c >= 0; c--)
                                  u += a[c].toString(o);
                              return "" === u && (u = "0"),
                              u
                          }
                          t.exports = {
                              hexToDec: function(t) {
                                  return "0x" === t.substring(0, 2) && (t = t.substring(2)),
                                  n(t = t.toLowerCase(), 16, 10)
                              },
                              decToHex: function(t, e) {
                                  var r = e && !1 === e.prefix
                                    , o = n(t, 10, 16);
                                  return o ? r ? o : "0x" + o : null
                              }
                          }
                      }
                      ,
                      188: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.default = function(t) {
                              this.buffer = t
                          }
                      }
                      ,
                      202: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.FORMAT_BINARY = "binary",
                          e.FORMAT_TEXT_MAP = "text_map",
                          e.FORMAT_HTTP_HEADERS = "http_headers",
                          e.REFERENCE_CHILD_OF = "child_of",
                          e.REFERENCE_FOLLOWS_FROM = "follows_from"
                      }
                      ,
                      546: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          }),
                          e.SPAN_KIND = "span.kind",
                          e.SPAN_KIND_RPC_CLIENT = "client",
                          e.SPAN_KIND_RPC_SERVER = "server",
                          e.SPAN_KIND_MESSAGING_PRODUCER = "producer",
                          e.SPAN_KIND_MESSAGING_CONSUMER = "consumer",
                          e.ERROR = "error",
                          e.COMPONENT = "component",
                          e.SAMPLING_PRIORITY = "sampling.priority",
                          e.PEER_SERVICE = "peer.service",
                          e.PEER_HOSTNAME = "peer.hostname",
                          e.PEER_ADDRESS = "peer.address",
                          e.PEER_HOST_IPV4 = "peer.ipv4",
                          e.PEER_HOST_IPV6 = "peer.ipv6",
                          e.PEER_PORT = "peer.port",
                          e.HTTP_URL = "http.url",
                          e.HTTP_METHOD = "http.method",
                          e.HTTP_STATUS_CODE = "http.status_code",
                          e.MESSAGE_BUS_DESTINATION = "message_bus.destination",
                          e.DB_INSTANCE = "db.instance",
                          e.DB_STATEMENT = "db.statement",
                          e.DB_TYPE = "db.type",
                          e.DB_USER = "db.user"
                      }
                      ,
                      929: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var n = r(202)
                            , o = r(963)
                            , i = r(81);
                          e.childOf = function(t) {
                              return t instanceof i.default && (t = t.context()),
                              new o.default(n.REFERENCE_CHILD_OF,t)
                          }
                          ,
                          e.followsFrom = function(t) {
                              return t instanceof i.default && (t = t.context()),
                              new o.default(n.REFERENCE_FOLLOWS_FROM,t)
                          }
                      }
                      ,
                      32: function(t, e, r) {
                          "use strict";
                          var n, o = this && this.__extends || (n = function(t, e) {
                              return n = Object.setPrototypeOf || {
                                  __proto__: []
                              }instanceof Array && function(t, e) {
                                  t.__proto__ = e
                              }
                              || function(t, e) {
                                  for (var r in e)
                                      e.hasOwnProperty(r) && (t[r] = e[r])
                              }
                              ,
                              n(t, e)
                          }
                          ,
                          function(t, e) {
                              function r() {
                                  this.constructor = t
                              }
                              n(t, e),
                              t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                              new r)
                          }
                          );
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var i = r(266)
                            , a = new i.default
                            , s = null
                            , c = function(t) {
                              function e() {
                                  return null !== t && t.apply(this, arguments) || this
                              }
                              return o(e, t),
                              e.prototype.startSpan = function() {
                                  var t = s || a;
                                  return t.startSpan.apply(t, arguments)
                              }
                              ,
                              e.prototype.inject = function() {
                                  var t = s || a;
                                  return t.inject.apply(t, arguments)
                              }
                              ,
                              e.prototype.extract = function() {
                                  var t = s || a;
                                  return t.extract.apply(t, arguments)
                              }
                              ,
                              e
                          }(i.default)
                            , u = new c;
                          e.initGlobalTracer = function(t) {
                              s = t
                          }
                          ,
                          e.globalTracer = function() {
                              return u
                          }
                      },
                      725: (t,e,r)=>{
                          "use strict";
                          function n(t) {
                              for (var r in t)
                                  e.hasOwnProperty(r) || (e[r] = t[r])
                          }
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var o = r(188);
                          e.BinaryCarrier = o.default;
                          var i = r(546);
                          e.Tags = i;
                          var a = r(980)
                            , s = r(963);
                          e.Reference = s.default;
                          var c = r(81);
                          e.Span = c.default;
                          var u = r(402);
                          e.SpanContext = u.default;
                          var l = r(266);
                          e.Tracer = l.Tracer;
                          var p = r(292);
                          e.MockTracer = p.MockTracer,
                          n(r(32)),
                          n(r(202)),
                          n(r(929)),
                          a.initialize()
                      }
                      ,
                      292: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var n = r(2);
                          e.MockContext = n.default;
                          var o = r(857);
                          e.MockSpan = o.default;
                          var i = r(817);
                          e.MockTracer = i.default
                      }
                      ,
                      2: function(t, e, r) {
                          "use strict";
                          var n, o = this && this.__extends || (n = function(t, e) {
                              return n = Object.setPrototypeOf || {
                                  __proto__: []
                              }instanceof Array && function(t, e) {
                                  t.__proto__ = e
                              }
                              || function(t, e) {
                                  for (var r in e)
                                      e.hasOwnProperty(r) && (t[r] = e[r])
                              }
                              ,
                              n(t, e)
                          }
                          ,
                          function(t, e) {
                              function r() {
                                  this.constructor = t
                              }
                              n(t, e),
                              t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                              new r)
                          }
                          );
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var i = function(t) {
                              function e(e) {
                                  var r = t.call(this) || this;
                                  return r._span = e,
                                  r
                              }
                              return o(e, t),
                              e.prototype.span = function() {
                                  return this._span
                              }
                              ,
                              e
                          }(r(402).SpanContext);
                          e.MockContext = i,
                          e.default = i
                      },
                      901: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var r = function() {
                              function t(t) {
                                  var e = this;
                                  this.spans = t,
                                  this.spansByUUID = {},
                                  this.spansByTag = {},
                                  this.debugSpans = [],
                                  this.unfinishedSpans = [],
                                  t.forEach((function(t) {
                                      0 === t._finishMs && e.unfinishedSpans.push(t),
                                      e.spansByUUID[t.uuid()] = t,
                                      e.debugSpans.push(t.debug());
                                      var r = t.tags();
                                      Object.keys(r).forEach((function(n) {
                                          var o = r[n];
                                          e.spansByTag[n] = e.spansByTag[n] || {},
                                          e.spansByTag[n][o] = e.spansByTag[n][o] || [],
                                          e.spansByTag[n][o].push(t)
                                      }
                                      ))
                                  }
                                  ))
                              }
                              return t.prototype.firstSpanWithTagValue = function(t, e) {
                                  var r = this.spansByTag[t];
                                  if (!r)
                                      return null;
                                  var n = r[e];
                                  return n ? n[0] : null
                              }
                              ,
                              t
                          }();
                          e.MockReport = r,
                          e.default = r
                      }
                      ,
                      857: function(t, e, r) {
                          "use strict";
                          var n, o = this && this.__extends || (n = function(t, e) {
                              return n = Object.setPrototypeOf || {
                                  __proto__: []
                              }instanceof Array && function(t, e) {
                                  t.__proto__ = e
                              }
                              || function(t, e) {
                                  for (var r in e)
                                      e.hasOwnProperty(r) && (t[r] = e[r])
                              }
                              ,
                              n(t, e)
                          }
                          ,
                          function(t, e) {
                              function r() {
                                  this.constructor = t
                              }
                              n(t, e),
                              t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                              new r)
                          }
                          );
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var i = r(725)
                            , a = r(2)
                            , s = function(t) {
                              function e(e) {
                                  var r = t.call(this) || this;
                                  return r._mockTracer = e,
                                  r._uuid = r._generateUUID(),
                                  r._startMs = Date.now(),
                                  r._finishMs = 0,
                                  r._operationName = "",
                                  r._tags = {},
                                  r._logs = [],
                                  r
                              }
                              return o(e, t),
                              e.prototype._context = function() {
                                  return new a.default(this)
                              }
                              ,
                              e.prototype._setOperationName = function(t) {
                                  this._operationName = t
                              }
                              ,
                              e.prototype._addTags = function(t) {
                                  for (var e = 0, r = Object.keys(t); e < r.length; e++) {
                                      var n = r[e];
                                      this._tags[n] = t[n]
                                  }
                              }
                              ,
                              e.prototype._log = function(t, e) {
                                  this._logs.push({
                                      fields: t,
                                      timestamp: e
                                  })
                              }
                              ,
                              e.prototype._finish = function(t) {
                                  this._finishMs = t || Date.now()
                              }
                              ,
                              e.prototype.uuid = function() {
                                  return this._uuid
                              }
                              ,
                              e.prototype.operationName = function() {
                                  return this._operationName
                              }
                              ,
                              e.prototype.durationMs = function() {
                                  return this._finishMs - this._startMs
                              }
                              ,
                              e.prototype.tags = function() {
                                  return this._tags
                              }
                              ,
                              e.prototype.tracer = function() {
                                  return this._mockTracer
                              }
                              ,
                              e.prototype._generateUUID = function() {
                                  return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                              }
                              ,
                              e.prototype.addReference = function(t) {}
                              ,
                              e.prototype.debug = function() {
                                  var t = {
                                      uuid: this._uuid,
                                      operation: this._operationName,
                                      millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                                  };
                                  return Object.keys(this._tags).length && (t.tags = this._tags),
                                  t
                              }
                              ,
                              e
                          }(i.Span);
                          e.MockSpan = s,
                          e.default = s
                      },
                      817: function(t, e, r) {
                          "use strict";
                          var n, o = this && this.__extends || (n = function(t, e) {
                              return n = Object.setPrototypeOf || {
                                  __proto__: []
                              }instanceof Array && function(t, e) {
                                  t.__proto__ = e
                              }
                              || function(t, e) {
                                  for (var r in e)
                                      e.hasOwnProperty(r) && (t[r] = e[r])
                              }
                              ,
                              n(t, e)
                          }
                          ,
                          function(t, e) {
                              function r() {
                                  this.constructor = t
                              }
                              n(t, e),
                              t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                              new r)
                          }
                          );
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var i = r(725)
                            , a = r(901)
                            , s = r(857)
                            , c = function(t) {
                              function e() {
                                  var e = t.call(this) || this;
                                  return e._spans = [],
                                  e
                              }
                              return o(e, t),
                              e.prototype._startSpan = function(t, e) {
                                  var r = this._allocSpan();
                                  if (r.setOperationName(t),
                                  this._spans.push(r),
                                  e.references)
                                      for (var n = 0, o = e.references; n < o.length; n++) {
                                          var i = o[n];
                                          r.addReference(i)
                                      }
                                  return r._startStack = (new Error).stack,
                                  r
                              }
                              ,
                              e.prototype._inject = function(t, e, r) {
                                  throw new Error("NOT YET IMPLEMENTED")
                              }
                              ,
                              e.prototype._extract = function(t, e) {
                                  throw new Error("NOT YET IMPLEMENTED")
                              }
                              ,
                              e.prototype._allocSpan = function() {
                                  return new s.default(this)
                              }
                              ,
                              e.prototype.clear = function() {
                                  this._spans = []
                              }
                              ,
                              e.prototype.report = function() {
                                  return new a.default(this._spans)
                              }
                              ,
                              e
                          }(i.Tracer);
                          e.MockTracer = c,
                          e.default = c
                      },
                      980: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var n = r(81)
                            , o = r(402)
                            , i = r(266);
                          e.tracer = null,
                          e.spanContext = null,
                          e.span = null,
                          e.initialize = function() {
                              e.tracer = new i.default,
                              e.span = new n.default,
                              e.spanContext = new o.default
                          }
                      }
                      ,
                      963: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var n = r(81)
                            , o = function() {
                              function t(t, e) {
                                  this._type = t,
                                  this._referencedContext = e instanceof n.default ? e.context() : e
                              }
                              return t.prototype.type = function() {
                                  return this._type
                              }
                              ,
                              t.prototype.referencedContext = function() {
                                  return this._referencedContext
                              }
                              ,
                              t
                          }();
                          e.default = o
                      }
                      ,
                      81: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var n = r(980)
                            , o = function() {
                              function t() {}
                              return t.prototype.context = function() {
                                  return this._context()
                              }
                              ,
                              t.prototype.tracer = function() {
                                  return this._tracer()
                              }
                              ,
                              t.prototype.setOperationName = function(t) {
                                  return this._setOperationName(t),
                                  this
                              }
                              ,
                              t.prototype.setBaggageItem = function(t, e) {
                                  return this._setBaggageItem(t, e),
                                  this
                              }
                              ,
                              t.prototype.getBaggageItem = function(t) {
                                  return this._getBaggageItem(t)
                              }
                              ,
                              t.prototype.setTag = function(t, e) {
                                  var r;
                                  return this._addTags(((r = {})[t] = e,
                                  r)),
                                  this
                              }
                              ,
                              t.prototype.addTags = function(t) {
                                  return this._addTags(t),
                                  this
                              }
                              ,
                              t.prototype.log = function(t, e) {
                                  return this._log(t, e),
                                  this
                              }
                              ,
                              t.prototype.logEvent = function(t, e) {
                                  return this._log({
                                      event: t,
                                      payload: e
                                  })
                              }
                              ,
                              t.prototype.finish = function(t) {
                                  this._finish(t)
                              }
                              ,
                              t.prototype._context = function() {
                                  return n.spanContext
                              }
                              ,
                              t.prototype._tracer = function() {
                                  return n.tracer
                              }
                              ,
                              t.prototype._setOperationName = function(t) {}
                              ,
                              t.prototype._setBaggageItem = function(t, e) {}
                              ,
                              t.prototype._getBaggageItem = function(t) {}
                              ,
                              t.prototype._addTags = function(t) {}
                              ,
                              t.prototype._log = function(t, e) {}
                              ,
                              t.prototype._finish = function(t) {}
                              ,
                              t
                          }();
                          e.Span = o,
                          e.default = o
                      }
                      ,
                      402: (t,e)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var r = function() {
                              function t() {}
                              return t.prototype.toTraceId = function() {
                                  return ""
                              }
                              ,
                              t.prototype.toSpanId = function() {
                                  return ""
                              }
                              ,
                              t
                          }();
                          e.SpanContext = r,
                          e.default = r
                      }
                      ,
                      266: (t,e,r)=>{
                          "use strict";
                          Object.defineProperty(e, "__esModule", {
                              value: !0
                          });
                          var n = r(929)
                            , o = r(980)
                            , i = r(81)
                            , a = function() {
                              function t() {}
                              return t.prototype.startSpan = function(t, e) {
                                  if (void 0 === e && (e = {}),
                                  e.childOf) {
                                      var r = n.childOf(e.childOf);
                                      e.references ? e.references.push(r) : e.references = [r],
                                      delete e.childOf
                                  }
                                  return this._startSpan(t, e)
                              }
                              ,
                              t.prototype.inject = function(t, e, r) {
                                  return t instanceof i.default && (t = t.context()),
                                  this._inject(t, e, r)
                              }
                              ,
                              t.prototype.extract = function(t, e) {
                                  return this._extract(t, e)
                              }
                              ,
                              t.prototype._startSpan = function(t, e) {
                                  return o.span
                              }
                              ,
                              t.prototype._inject = function(t, e, r) {}
                              ,
                              t.prototype._extract = function(t, e) {
                                  return o.spanContext
                              }
                              ,
                              t
                          }();
                          e.Tracer = a,
                          e.default = a
                      }
                      ,
                      147: t=>{
                          "use strict";
                          t.exports = JSON.parse('{"name":"lightstep-tracer","version":"0.34.0-no-protobuf","main":"index.js","types":"index.d.ts","browser":"browser.js","engines":{"node":">=12.0.0"},"scripts":{"release":"./scripts/release.sh","release:prepare":"./scripts/release-prepare.sh","test":"rm -f test/results/*.json && node node_modules/mocha/bin/mocha -c test/unittest_node.js","version":"make build && git add -A dist"},"license":"MIT","repository":{"type":"git","url":"http://github.com/lightstep/lightstep-tracer-javascript.git"},"dependencies":{"async":"^3.2.3","eventemitter3":"4.0.7","hex2dec":"1.1.2","opentracing":"^0.14.7","source-map-support":"0.5.21","thrift":"^0.16.0"},"devDependencies":{"@babel/cli":"^7.17.10","@babel/core":"^7.17.10","@babel/plugin-proposal-object-rest-spread":"^7.17.3","@babel/plugin-syntax-object-rest-spread":"^7.8.3","@babel/plugin-transform-arrow-functions":"^7.16.7","@babel/plugin-transform-block-scoped-functions":"^7.16.7","@babel/plugin-transform-block-scoping":"^7.16.7","@babel/plugin-transform-classes":"^7.16.7","@babel/plugin-transform-computed-properties":"^7.16.7","@babel/plugin-transform-destructuring":"^7.17.7","@babel/plugin-transform-duplicate-keys":"^7.16.7","@babel/plugin-transform-literals":"^7.16.7","@babel/plugin-transform-modules-commonjs":"^7.17.9","@babel/plugin-transform-object-super":"^7.16.7","@babel/plugin-transform-parameters":"^7.16.7","@babel/plugin-transform-spread":"^7.16.7","@babel/plugin-transform-sticky-regex":"^7.16.7","@babel/plugin-transform-template-literals":"^7.16.7","@babel/plugin-transform-unicode-regex":"^7.16.7","@babel/preset-env":"^7.17.10","babel-loader":"^8.2.5","babel-plugin-add-module-exports":"^1.0.4","chai":"4.3.6","clone":"2.1.2","colors":"1.4.0","core-js":"^3.22.4","eslint":"^8.14.0","eslint-config-airbnb":"^19.0.4","eslint-plugin-import":"^2.26.0","eslint-plugin-jsx-a11y":"^6.5.1","eslint-plugin-react":"^7.29.4","express":"^4.18.1","fetch-mock":"^9.11.0","mocha":"^10.0.0","nyc":"^15.1.0","package-json":"^7.0.0","regenerator-runtime":"^0.13.9","shelljs":"^0.8.5","sinon":"^13.0.2","sprintf-js":"1.1.2","underscore":"1.13.3","watch-trigger":"0.0.10","webpack":"^5.72.0","webpack-cli":"^4.9.2"}}')
                      }
                  }
                    , e = {};
                  function r(n) {
                      var o = e[n];
                      if (void 0 !== o)
                          return o.exports;
                      var i = e[n] = {
                          exports: {}
                      };
                      return t[n].call(i.exports, i, i.exports, r),
                      i.exports
                  }
                  return r.g = function() {
                      if ("object" == typeof globalThis)
                          return globalThis;
                      try {
                          return this || new Function("return this")()
                      } catch (t) {
                          if ("object" == typeof window)
                              return window
                      }
                  }(),
                  r(410)
              }
              )(),
              t.exports = e()
          }
          ,
          188: (t,e)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              e.default = function(t) {
                  this.buffer = t
              }
          }
          ,
          202: (t,e)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              }),
              e.FORMAT_BINARY = "binary",
              e.FORMAT_TEXT_MAP = "text_map",
              e.FORMAT_HTTP_HEADERS = "http_headers",
              e.REFERENCE_CHILD_OF = "child_of",
              e.REFERENCE_FOLLOWS_FROM = "follows_from"
          }
          ,
          546: (t,e)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              }),
              e.SPAN_KIND = "span.kind",
              e.SPAN_KIND_RPC_CLIENT = "client",
              e.SPAN_KIND_RPC_SERVER = "server",
              e.SPAN_KIND_MESSAGING_PRODUCER = "producer",
              e.SPAN_KIND_MESSAGING_CONSUMER = "consumer",
              e.ERROR = "error",
              e.COMPONENT = "component",
              e.SAMPLING_PRIORITY = "sampling.priority",
              e.PEER_SERVICE = "peer.service",
              e.PEER_HOSTNAME = "peer.hostname",
              e.PEER_ADDRESS = "peer.address",
              e.PEER_HOST_IPV4 = "peer.ipv4",
              e.PEER_HOST_IPV6 = "peer.ipv6",
              e.PEER_PORT = "peer.port",
              e.HTTP_URL = "http.url",
              e.HTTP_METHOD = "http.method",
              e.HTTP_STATUS_CODE = "http.status_code",
              e.MESSAGE_BUS_DESTINATION = "message_bus.destination",
              e.DB_INSTANCE = "db.instance",
              e.DB_STATEMENT = "db.statement",
              e.DB_TYPE = "db.type",
              e.DB_USER = "db.user"
          }
          ,
          929: (t,e,r)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var n = r(202)
                , o = r(963)
                , i = r(81);
              e.childOf = function(t) {
                  return t instanceof i.default && (t = t.context()),
                  new o.default(n.REFERENCE_CHILD_OF,t)
              }
              ,
              e.followsFrom = function(t) {
                  return t instanceof i.default && (t = t.context()),
                  new o.default(n.REFERENCE_FOLLOWS_FROM,t)
              }
          }
          ,
          32: function(t, e, r) {
              "use strict";
              var n, o = this && this.__extends || (n = function(t, e) {
                  return n = Object.setPrototypeOf || {
                      __proto__: []
                  }instanceof Array && function(t, e) {
                      t.__proto__ = e
                  }
                  || function(t, e) {
                      for (var r in e)
                          e.hasOwnProperty(r) && (t[r] = e[r])
                  }
                  ,
                  n(t, e)
              }
              ,
              function(t, e) {
                  function r() {
                      this.constructor = t
                  }
                  n(t, e),
                  t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                  new r)
              }
              );
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var i = r(266)
                , a = new i.default
                , s = null
                , c = function(t) {
                  function e() {
                      return null !== t && t.apply(this, arguments) || this
                  }
                  return o(e, t),
                  e.prototype.startSpan = function() {
                      var t = s || a;
                      return t.startSpan.apply(t, arguments)
                  }
                  ,
                  e.prototype.inject = function() {
                      var t = s || a;
                      return t.inject.apply(t, arguments)
                  }
                  ,
                  e.prototype.extract = function() {
                      var t = s || a;
                      return t.extract.apply(t, arguments)
                  }
                  ,
                  e
              }(i.default)
                , u = new c;
              e.initGlobalTracer = function(t) {
                  s = t
              }
              ,
              e.globalTracer = function() {
                  return u
              }
          },
          725: (t,e,r)=>{
              "use strict";
              function n(t) {
                  for (var r in t)
                      e.hasOwnProperty(r) || (e[r] = t[r])
              }
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var o = r(188);
              e.BinaryCarrier = o.default;
              var i = r(546);
              e.Tags = i;
              var a = r(980)
                , s = r(963);
              e.Reference = s.default;
              var c = r(81);
              e.Span = c.default;
              var u = r(402);
              e.SpanContext = u.default;
              var l = r(266);
              e.Tracer = l.Tracer;
              var p = r(292);
              e.MockTracer = p.MockTracer,
              n(r(32)),
              n(r(202)),
              n(r(929)),
              a.initialize()
          }
          ,
          292: (t,e,r)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var n = r(2);
              e.MockContext = n.default;
              var o = r(857);
              e.MockSpan = o.default;
              var i = r(817);
              e.MockTracer = i.default
          }
          ,
          2: function(t, e, r) {
              "use strict";
              var n, o = this && this.__extends || (n = function(t, e) {
                  return n = Object.setPrototypeOf || {
                      __proto__: []
                  }instanceof Array && function(t, e) {
                      t.__proto__ = e
                  }
                  || function(t, e) {
                      for (var r in e)
                          e.hasOwnProperty(r) && (t[r] = e[r])
                  }
                  ,
                  n(t, e)
              }
              ,
              function(t, e) {
                  function r() {
                      this.constructor = t
                  }
                  n(t, e),
                  t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                  new r)
              }
              );
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var i = function(t) {
                  function e(e) {
                      var r = t.call(this) || this;
                      return r._span = e,
                      r
                  }
                  return o(e, t),
                  e.prototype.span = function() {
                      return this._span
                  }
                  ,
                  e
              }(r(402).SpanContext);
              e.MockContext = i,
              e.default = i
          },
          901: (t,e)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var r = function() {
                  function t(t) {
                      var e = this;
                      this.spans = t,
                      this.spansByUUID = {},
                      this.spansByTag = {},
                      this.debugSpans = [],
                      this.unfinishedSpans = [],
                      t.forEach((function(t) {
                          0 === t._finishMs && e.unfinishedSpans.push(t),
                          e.spansByUUID[t.uuid()] = t,
                          e.debugSpans.push(t.debug());
                          var r = t.tags();
                          Object.keys(r).forEach((function(n) {
                              var o = r[n];
                              e.spansByTag[n] = e.spansByTag[n] || {},
                              e.spansByTag[n][o] = e.spansByTag[n][o] || [],
                              e.spansByTag[n][o].push(t)
                          }
                          ))
                      }
                      ))
                  }
                  return t.prototype.firstSpanWithTagValue = function(t, e) {
                      var r = this.spansByTag[t];
                      if (!r)
                          return null;
                      var n = r[e];
                      return n ? n[0] : null
                  }
                  ,
                  t
              }();
              e.MockReport = r,
              e.default = r
          }
          ,
          857: function(t, e, r) {
              "use strict";
              var n, o = this && this.__extends || (n = function(t, e) {
                  return n = Object.setPrototypeOf || {
                      __proto__: []
                  }instanceof Array && function(t, e) {
                      t.__proto__ = e
                  }
                  || function(t, e) {
                      for (var r in e)
                          e.hasOwnProperty(r) && (t[r] = e[r])
                  }
                  ,
                  n(t, e)
              }
              ,
              function(t, e) {
                  function r() {
                      this.constructor = t
                  }
                  n(t, e),
                  t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                  new r)
              }
              );
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var i = r(725)
                , a = r(2)
                , s = function(t) {
                  function e(e) {
                      var r = t.call(this) || this;
                      return r._mockTracer = e,
                      r._uuid = r._generateUUID(),
                      r._startMs = Date.now(),
                      r._finishMs = 0,
                      r._operationName = "",
                      r._tags = {},
                      r._logs = [],
                      r
                  }
                  return o(e, t),
                  e.prototype._context = function() {
                      return new a.default(this)
                  }
                  ,
                  e.prototype._setOperationName = function(t) {
                      this._operationName = t
                  }
                  ,
                  e.prototype._addTags = function(t) {
                      for (var e = 0, r = Object.keys(t); e < r.length; e++) {
                          var n = r[e];
                          this._tags[n] = t[n]
                      }
                  }
                  ,
                  e.prototype._log = function(t, e) {
                      this._logs.push({
                          fields: t,
                          timestamp: e
                      })
                  }
                  ,
                  e.prototype._finish = function(t) {
                      this._finishMs = t || Date.now()
                  }
                  ,
                  e.prototype.uuid = function() {
                      return this._uuid
                  }
                  ,
                  e.prototype.operationName = function() {
                      return this._operationName
                  }
                  ,
                  e.prototype.durationMs = function() {
                      return this._finishMs - this._startMs
                  }
                  ,
                  e.prototype.tags = function() {
                      return this._tags
                  }
                  ,
                  e.prototype.tracer = function() {
                      return this._mockTracer
                  }
                  ,
                  e.prototype._generateUUID = function() {
                      return "" + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8) + ("00000000" + Math.abs(4294967295 * Math.random() | 0).toString(16)).substr(-8)
                  }
                  ,
                  e.prototype.addReference = function(t) {}
                  ,
                  e.prototype.debug = function() {
                      var t = {
                          uuid: this._uuid,
                          operation: this._operationName,
                          millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
                      };
                      return Object.keys(this._tags).length && (t.tags = this._tags),
                      t
                  }
                  ,
                  e
              }(i.Span);
              e.MockSpan = s,
              e.default = s
          },
          817: function(t, e, r) {
              "use strict";
              var n, o = this && this.__extends || (n = function(t, e) {
                  return n = Object.setPrototypeOf || {
                      __proto__: []
                  }instanceof Array && function(t, e) {
                      t.__proto__ = e
                  }
                  || function(t, e) {
                      for (var r in e)
                          e.hasOwnProperty(r) && (t[r] = e[r])
                  }
                  ,
                  n(t, e)
              }
              ,
              function(t, e) {
                  function r() {
                      this.constructor = t
                  }
                  n(t, e),
                  t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                  new r)
              }
              );
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var i = r(725)
                , a = r(901)
                , s = r(857)
                , c = function(t) {
                  function e() {
                      var e = t.call(this) || this;
                      return e._spans = [],
                      e
                  }
                  return o(e, t),
                  e.prototype._startSpan = function(t, e) {
                      var r = this._allocSpan();
                      if (r.setOperationName(t),
                      this._spans.push(r),
                      e.references)
                          for (var n = 0, o = e.references; n < o.length; n++) {
                              var i = o[n];
                              r.addReference(i)
                          }
                      return r._startStack = (new Error).stack,
                      r
                  }
                  ,
                  e.prototype._inject = function(t, e, r) {
                      throw new Error("NOT YET IMPLEMENTED")
                  }
                  ,
                  e.prototype._extract = function(t, e) {
                      throw new Error("NOT YET IMPLEMENTED")
                  }
                  ,
                  e.prototype._allocSpan = function() {
                      return new s.default(this)
                  }
                  ,
                  e.prototype.clear = function() {
                      this._spans = []
                  }
                  ,
                  e.prototype.report = function() {
                      return new a.default(this._spans)
                  }
                  ,
                  e
              }(i.Tracer);
              e.MockTracer = c,
              e.default = c
          },
          980: (t,e,r)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var n = r(81)
                , o = r(402)
                , i = r(266);
              e.tracer = null,
              e.spanContext = null,
              e.span = null,
              e.initialize = function() {
                  e.tracer = new i.default,
                  e.span = new n.default,
                  e.spanContext = new o.default
              }
          }
          ,
          963: (t,e,r)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var n = r(81)
                , o = function() {
                  function t(t, e) {
                      this._type = t,
                      this._referencedContext = e instanceof n.default ? e.context() : e
                  }
                  return t.prototype.type = function() {
                      return this._type
                  }
                  ,
                  t.prototype.referencedContext = function() {
                      return this._referencedContext
                  }
                  ,
                  t
              }();
              e.default = o
          }
          ,
          81: (t,e,r)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var n = r(980)
                , o = function() {
                  function t() {}
                  return t.prototype.context = function() {
                      return this._context()
                  }
                  ,
                  t.prototype.tracer = function() {
                      return this._tracer()
                  }
                  ,
                  t.prototype.setOperationName = function(t) {
                      return this._setOperationName(t),
                      this
                  }
                  ,
                  t.prototype.setBaggageItem = function(t, e) {
                      return this._setBaggageItem(t, e),
                      this
                  }
                  ,
                  t.prototype.getBaggageItem = function(t) {
                      return this._getBaggageItem(t)
                  }
                  ,
                  t.prototype.setTag = function(t, e) {
                      var r;
                      return this._addTags(((r = {})[t] = e,
                      r)),
                      this
                  }
                  ,
                  t.prototype.addTags = function(t) {
                      return this._addTags(t),
                      this
                  }
                  ,
                  t.prototype.log = function(t, e) {
                      return this._log(t, e),
                      this
                  }
                  ,
                  t.prototype.logEvent = function(t, e) {
                      return this._log({
                          event: t,
                          payload: e
                      })
                  }
                  ,
                  t.prototype.finish = function(t) {
                      this._finish(t)
                  }
                  ,
                  t.prototype._context = function() {
                      return n.spanContext
                  }
                  ,
                  t.prototype._tracer = function() {
                      return n.tracer
                  }
                  ,
                  t.prototype._setOperationName = function(t) {}
                  ,
                  t.prototype._setBaggageItem = function(t, e) {}
                  ,
                  t.prototype._getBaggageItem = function(t) {}
                  ,
                  t.prototype._addTags = function(t) {}
                  ,
                  t.prototype._log = function(t, e) {}
                  ,
                  t.prototype._finish = function(t) {}
                  ,
                  t
              }();
              e.Span = o,
              e.default = o
          }
          ,
          402: (t,e)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var r = function() {
                  function t() {}
                  return t.prototype.toTraceId = function() {
                      return ""
                  }
                  ,
                  t.prototype.toSpanId = function() {
                      return ""
                  }
                  ,
                  t
              }();
              e.SpanContext = r,
              e.default = r
          }
          ,
          266: (t,e,r)=>{
              "use strict";
              Object.defineProperty(e, "__esModule", {
                  value: !0
              });
              var n = r(929)
                , o = r(980)
                , i = r(81)
                , a = function() {
                  function t() {}
                  return t.prototype.startSpan = function(t, e) {
                      if (void 0 === e && (e = {}),
                      e.childOf) {
                          var r = n.childOf(e.childOf);
                          e.references ? e.references.push(r) : e.references = [r],
                          delete e.childOf
                      }
                      return this._startSpan(t, e)
                  }
                  ,
                  t.prototype.inject = function(t, e, r) {
                      return t instanceof i.default && (t = t.context()),
                      this._inject(t, e, r)
                  }
                  ,
                  t.prototype.extract = function(t, e) {
                      return this._extract(t, e)
                  }
                  ,
                  t.prototype._startSpan = function(t, e) {
                      return o.span
                  }
                  ,
                  t.prototype._inject = function(t, e, r) {}
                  ,
                  t.prototype._extract = function(t, e) {
                      return o.spanContext
                  }
                  ,
                  t
              }();
              e.Tracer = a,
              e.default = a
          }
          ,
          666: t=>{
              var e = function(t) {
                  "use strict";
                  var e, r = Object.prototype, n = r.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
                  function c(t, e, r) {
                      return Object.defineProperty(t, e, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                      }),
                      t[e]
                  }
                  try {
                      c({}, "")
                  } catch (t) {
                      c = function(t, e, r) {
                          return t[e] = r
                      }
                  }
                  function u(t, e, r, n) {
                      var o = e && e.prototype instanceof y ? e : y
                        , i = Object.create(o.prototype)
                        , a = new x(n || []);
                      return i._invoke = function(t, e, r) {
                          var n = p;
                          return function(o, i) {
                              if (n === d)
                                  throw new Error("Generator is already running");
                              if (n === h) {
                                  if ("throw" === o)
                                      throw i;
                                  return R()
                              }
                              for (r.method = o,
                              r.arg = i; ; ) {
                                  var a = r.delegate;
                                  if (a) {
                                      var s = E(a, r);
                                      if (s) {
                                          if (s === _)
                                              continue;
                                          return s
                                      }
                                  }
                                  if ("next" === r.method)
                                      r.sent = r._sent = r.arg;
                                  else if ("throw" === r.method) {
                                      if (n === p)
                                          throw n = h,
                                          r.arg;
                                      r.dispatchException(r.arg)
                                  } else
                                      "return" === r.method && r.abrupt("return", r.arg);
                                  n = d;
                                  var c = l(t, e, r);
                                  if ("normal" === c.type) {
                                      if (n = r.done ? h : f,
                                      c.arg === _)
                                          continue;
                                      return {
                                          value: c.arg,
                                          done: r.done
                                      }
                                  }
                                  "throw" === c.type && (n = h,
                                  r.method = "throw",
                                  r.arg = c.arg)
                              }
                          }
                      }(t, r, a),
                      i
                  }
                  function l(t, e, r) {
                      try {
                          return {
                              type: "normal",
                              arg: t.call(e, r)
                          }
                      } catch (t) {
                          return {
                              type: "throw",
                              arg: t
                          }
                      }
                  }
                  t.wrap = u;
                  var p = "suspendedStart"
                    , f = "suspendedYield"
                    , d = "executing"
                    , h = "completed"
                    , _ = {};
                  function y() {}
                  function v() {}
                  function g() {}
                  var m = {};
                  c(m, i, (function() {
                      return this
                  }
                  ));
                  var b = Object.getPrototypeOf
                    , w = b && b(b(I([])));
                  w && w !== r && n.call(w, i) && (m = w);
                  var O = g.prototype = y.prototype = Object.create(m);
                  function T(t) {
                      ["next", "throw", "return"].forEach((function(e) {
                          c(t, e, (function(t) {
                              return this._invoke(e, t)
                          }
                          ))
                      }
                      ))
                  }
                  function S(t, e) {
                      function r(o, i, a, s) {
                          var c = l(t[o], t, i);
                          if ("throw" !== c.type) {
                              var u = c.arg
                                , p = u.value;
                              return p && "object" == typeof p && n.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                  r("next", t, a, s)
                              }
                              ), (function(t) {
                                  r("throw", t, a, s)
                              }
                              )) : e.resolve(p).then((function(t) {
                                  u.value = t,
                                  a(u)
                              }
                              ), (function(t) {
                                  return r("throw", t, a, s)
                              }
                              ))
                          }
                          s(c.arg)
                      }
                      var o;
                      this._invoke = function(t, n) {
                          function i() {
                              return new e((function(e, o) {
                                  r(t, n, e, o)
                              }
                              ))
                          }
                          return o = o ? o.then(i, i) : i()
                      }
                  }
                  function E(t, r) {
                      var n = t.iterator[r.method];
                      if (n === e) {
                          if (r.delegate = null,
                          "throw" === r.method) {
                              if (t.iterator.return && (r.method = "return",
                              r.arg = e,
                              E(t, r),
                              "throw" === r.method))
                                  return _;
                              r.method = "throw",
                              r.arg = new TypeError("The iterator does not provide a 'throw' method")
                          }
                          return _
                      }
                      var o = l(n, t.iterator, r.arg);
                      if ("throw" === o.type)
                          return r.method = "throw",
                          r.arg = o.arg,
                          r.delegate = null,
                          _;
                      var i = o.arg;
                      return i ? i.done ? (r[t.resultName] = i.value,
                      r.next = t.nextLoc,
                      "return" !== r.method && (r.method = "next",
                      r.arg = e),
                      r.delegate = null,
                      _) : i : (r.method = "throw",
                      r.arg = new TypeError("iterator result is not an object"),
                      r.delegate = null,
                      _)
                  }
                  function k(t) {
                      var e = {
                          tryLoc: t[0]
                      };
                      1 in t && (e.catchLoc = t[1]),
                      2 in t && (e.finallyLoc = t[2],
                      e.afterLoc = t[3]),
                      this.tryEntries.push(e)
                  }
                  function P(t) {
                      var e = t.completion || {};
                      e.type = "normal",
                      delete e.arg,
                      t.completion = e
                  }
                  function x(t) {
                      this.tryEntries = [{
                          tryLoc: "root"
                      }],
                      t.forEach(k, this),
                      this.reset(!0)
                  }
                  function I(t) {
                      if (t) {
                          var r = t[i];
                          if (r)
                              return r.call(t);
                          if ("function" == typeof t.next)
                              return t;
                          if (!isNaN(t.length)) {
                              var o = -1
                                , a = function r() {
                                  for (; ++o < t.length; )
                                      if (n.call(t, o))
                                          return r.value = t[o],
                                          r.done = !1,
                                          r;
                                  return r.value = e,
                                  r.done = !0,
                                  r
                              };
                              return a.next = a
                          }
                      }
                      return {
                          next: R
                      }
                  }
                  function R() {
                      return {
                          value: e,
                          done: !0
                      }
                  }
                  return v.prototype = g,
                  c(O, "constructor", g),
                  c(g, "constructor", v),
                  v.displayName = c(g, s, "GeneratorFunction"),
                  t.isGeneratorFunction = function(t) {
                      var e = "function" == typeof t && t.constructor;
                      return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name))
                  }
                  ,
                  t.mark = function(t) {
                      return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g,
                      c(t, s, "GeneratorFunction")),
                      t.prototype = Object.create(O),
                      t
                  }
                  ,
                  t.awrap = function(t) {
                      return {
                          __await: t
                      }
                  }
                  ,
                  T(S.prototype),
                  c(S.prototype, a, (function() {
                      return this
                  }
                  )),
                  t.AsyncIterator = S,
                  t.async = function(e, r, n, o, i) {
                      void 0 === i && (i = Promise);
                      var a = new S(u(e, r, n, o),i);
                      return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                          return t.done ? t.value : a.next()
                      }
                      ))
                  }
                  ,
                  T(O),
                  c(O, s, "Generator"),
                  c(O, i, (function() {
                      return this
                  }
                  )),
                  c(O, "toString", (function() {
                      return "[object Generator]"
                  }
                  )),
                  t.keys = function(t) {
                      var e = [];
                      for (var r in t)
                          e.push(r);
                      return e.reverse(),
                      function r() {
                          for (; e.length; ) {
                              var n = e.pop();
                              if (n in t)
                                  return r.value = n,
                                  r.done = !1,
                                  r
                          }
                          return r.done = !0,
                          r
                      }
                  }
                  ,
                  t.values = I,
                  x.prototype = {
                      constructor: x,
                      reset: function(t) {
                          if (this.prev = 0,
                          this.next = 0,
                          this.sent = this._sent = e,
                          this.done = !1,
                          this.delegate = null,
                          this.method = "next",
                          this.arg = e,
                          this.tryEntries.forEach(P),
                          !t)
                              for (var r in this)
                                  "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                      },
                      stop: function() {
                          this.done = !0;
                          var t = this.tryEntries[0].completion;
                          if ("throw" === t.type)
                              throw t.arg;
                          return this.rval
                      },
                      dispatchException: function(t) {
                          if (this.done)
                              throw t;
                          var r = this;
                          function o(n, o) {
                              return s.type = "throw",
                              s.arg = t,
                              r.next = n,
                              o && (r.method = "next",
                              r.arg = e),
                              !!o
                          }
                          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                              var a = this.tryEntries[i]
                                , s = a.completion;
                              if ("root" === a.tryLoc)
                                  return o("end");
                              if (a.tryLoc <= this.prev) {
                                  var c = n.call(a, "catchLoc")
                                    , u = n.call(a, "finallyLoc");
                                  if (c && u) {
                                      if (this.prev < a.catchLoc)
                                          return o(a.catchLoc, !0);
                                      if (this.prev < a.finallyLoc)
                                          return o(a.finallyLoc)
                                  } else if (c) {
                                      if (this.prev < a.catchLoc)
                                          return o(a.catchLoc, !0)
                                  } else {
                                      if (!u)
                                          throw new Error("try statement without catch or finally");
                                      if (this.prev < a.finallyLoc)
                                          return o(a.finallyLoc)
                                  }
                              }
                          }
                      },
                      abrupt: function(t, e) {
                          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                              var o = this.tryEntries[r];
                              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                  var i = o;
                                  break
                              }
                          }
                          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                          var a = i ? i.completion : {};
                          return a.type = t,
                          a.arg = e,
                          i ? (this.method = "next",
                          this.next = i.finallyLoc,
                          _) : this.complete(a)
                      },
                      complete: function(t, e) {
                          if ("throw" === t.type)
                              throw t.arg;
                          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                          this.method = "return",
                          this.next = "end") : "normal" === t.type && e && (this.next = e),
                          _
                      },
                      finish: function(t) {
                          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                              var r = this.tryEntries[e];
                              if (r.finallyLoc === t)
                                  return this.complete(r.completion, r.afterLoc),
                                  P(r),
                                  _
                          }
                      },
                      catch: function(t) {
                          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                              var r = this.tryEntries[e];
                              if (r.tryLoc === t) {
                                  var n = r.completion;
                                  if ("throw" === n.type) {
                                      var o = n.arg;
                                      P(r)
                                  }
                                  return o
                              }
                          }
                          throw new Error("illegal catch attempt")
                      },
                      delegateYield: function(t, r, n) {
                          return this.delegate = {
                              iterator: I(t),
                              resultName: r,
                              nextLoc: n
                          },
                          "next" === this.method && (this.arg = e),
                          _
                      }
                  },
                  t
              }(t.exports);
              try {
                  regeneratorRuntime = e
              } catch (t) {
                  "object" == typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
              }
          }
          ,
          147: (t,e,r)=>{
              "use strict";
              r.r(e),
              r.d(e, {
                  DOMException: ()=>E,
                  Headers: ()=>h,
                  Request: ()=>w,
                  Response: ()=>T,
                  fetch: ()=>k
              });
              var n = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n && n
                , o = "URLSearchParams"in n
                , i = "Symbol"in n && "iterator"in Symbol
                , a = "FileReader"in n && "Blob"in n && function() {
                  try {
                      return new Blob,
                      !0
                  } catch (t) {
                      return !1
                  }
              }()
                , s = "FormData"in n
                , c = "ArrayBuffer"in n;
              if (c)
                  var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                    , l = ArrayBuffer.isView || function(t) {
                      return t && u.indexOf(Object.prototype.toString.call(t)) > -1
                  }
                  ;
              function p(t) {
                  if ("string" != typeof t && (t = String(t)),
                  /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
                      throw new TypeError('Invalid character in header field name: "' + t + '"');
                  return t.toLowerCase()
              }
              function f(t) {
                  return "string" != typeof t && (t = String(t)),
                  t
              }
              function d(t) {
                  var e = {
                      next: function() {
                          var e = t.shift();
                          return {
                              done: void 0 === e,
                              value: e
                          }
                      }
                  };
                  return i && (e[Symbol.iterator] = function() {
                      return e
                  }
                  ),
                  e
              }
              function h(t) {
                  this.map = {},
                  t instanceof h ? t.forEach((function(t, e) {
                      this.append(e, t)
                  }
                  ), this) : Array.isArray(t) ? t.forEach((function(t) {
                      this.append(t[0], t[1])
                  }
                  ), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                      this.append(e, t[e])
                  }
                  ), this)
              }
              function _(t) {
                  if (t.bodyUsed)
                      return Promise.reject(new TypeError("Already read"));
                  t.bodyUsed = !0
              }
              function y(t) {
                  return new Promise((function(e, r) {
                      t.onload = function() {
                          e(t.result)
                      }
                      ,
                      t.onerror = function() {
                          r(t.error)
                      }
                  }
                  ))
              }
              function v(t) {
                  var e = new FileReader
                    , r = y(e);
                  return e.readAsArrayBuffer(t),
                  r
              }
              function g(t) {
                  if (t.slice)
                      return t.slice(0);
                  var e = new Uint8Array(t.byteLength);
                  return e.set(new Uint8Array(t)),
                  e.buffer
              }
              function m() {
                  return this.bodyUsed = !1,
                  this._initBody = function(t) {
                      var e;
                      this.bodyUsed = this.bodyUsed,
                      this._bodyInit = t,
                      t ? "string" == typeof t ? this._bodyText = t : a && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : o && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : c && a && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = g(t.buffer),
                      this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(t) || l(t)) ? this._bodyArrayBuffer = g(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                      this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                  }
                  ,
                  a && (this.blob = function() {
                      var t = _(this);
                      if (t)
                          return t;
                      if (this._bodyBlob)
                          return Promise.resolve(this._bodyBlob);
                      if (this._bodyArrayBuffer)
                          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                      if (this._bodyFormData)
                          throw new Error("could not read FormData body as blob");
                      return Promise.resolve(new Blob([this._bodyText]))
                  }
                  ,
                  this.arrayBuffer = function() {
                      return this._bodyArrayBuffer ? _(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(v)
                  }
                  ),
                  this.text = function() {
                      var t, e, r, n = _(this);
                      if (n)
                          return n;
                      if (this._bodyBlob)
                          return t = this._bodyBlob,
                          r = y(e = new FileReader),
                          e.readAsText(t),
                          r;
                      if (this._bodyArrayBuffer)
                          return Promise.resolve(function(t) {
                              for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)
                                  r[n] = String.fromCharCode(e[n]);
                              return r.join("")
                          }(this._bodyArrayBuffer));
                      if (this._bodyFormData)
                          throw new Error("could not read FormData body as text");
                      return Promise.resolve(this._bodyText)
                  }
                  ,
                  s && (this.formData = function() {
                      return this.text().then(O)
                  }
                  ),
                  this.json = function() {
                      return this.text().then(JSON.parse)
                  }
                  ,
                  this
              }
              h.prototype.append = function(t, e) {
                  t = p(t),
                  e = f(e);
                  var r = this.map[t];
                  this.map[t] = r ? r + ", " + e : e
              }
              ,
              h.prototype.delete = function(t) {
                  delete this.map[p(t)]
              }
              ,
              h.prototype.get = function(t) {
                  return t = p(t),
                  this.has(t) ? this.map[t] : null
              }
              ,
              h.prototype.has = function(t) {
                  return this.map.hasOwnProperty(p(t))
              }
              ,
              h.prototype.set = function(t, e) {
                  this.map[p(t)] = f(e)
              }
              ,
              h.prototype.forEach = function(t, e) {
                  for (var r in this.map)
                      this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
              }
              ,
              h.prototype.keys = function() {
                  var t = [];
                  return this.forEach((function(e, r) {
                      t.push(r)
                  }
                  )),
                  d(t)
              }
              ,
              h.prototype.values = function() {
                  var t = [];
                  return this.forEach((function(e) {
                      t.push(e)
                  }
                  )),
                  d(t)
              }
              ,
              h.prototype.entries = function() {
                  var t = [];
                  return this.forEach((function(e, r) {
                      t.push([r, e])
                  }
                  )),
                  d(t)
              }
              ,
              i && (h.prototype[Symbol.iterator] = h.prototype.entries);
              var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
              function w(t, e) {
                  if (!(this instanceof w))
                      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                  var r, n, o = (e = e || {}).body;
                  if (t instanceof w) {
                      if (t.bodyUsed)
                          throw new TypeError("Already read");
                      this.url = t.url,
                      this.credentials = t.credentials,
                      e.headers || (this.headers = new h(t.headers)),
                      this.method = t.method,
                      this.mode = t.mode,
                      this.signal = t.signal,
                      o || null == t._bodyInit || (o = t._bodyInit,
                      t.bodyUsed = !0)
                  } else
                      this.url = String(t);
                  if (this.credentials = e.credentials || this.credentials || "same-origin",
                  !e.headers && this.headers || (this.headers = new h(e.headers)),
                  this.method = (n = (r = e.method || this.method || "GET").toUpperCase(),
                  b.indexOf(n) > -1 ? n : r),
                  this.mode = e.mode || this.mode || null,
                  this.signal = e.signal || this.signal,
                  this.referrer = null,
                  ("GET" === this.method || "HEAD" === this.method) && o)
                      throw new TypeError("Body not allowed for GET or HEAD requests");
                  if (this._initBody(o),
                  !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                      var i = /([?&])_=[^&]*/;
                      i.test(this.url) ? this.url = this.url.replace(i, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                  }
              }
              function O(t) {
                  var e = new FormData;
                  return t.trim().split("&").forEach((function(t) {
                      if (t) {
                          var r = t.split("=")
                            , n = r.shift().replace(/\+/g, " ")
                            , o = r.join("=").replace(/\+/g, " ");
                          e.append(decodeURIComponent(n), decodeURIComponent(o))
                      }
                  }
                  )),
                  e
              }
              function T(t, e) {
                  if (!(this instanceof T))
                      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                  e || (e = {}),
                  this.type = "default",
                  this.status = void 0 === e.status ? 200 : e.status,
                  this.ok = this.status >= 200 && this.status < 300,
                  this.statusText = void 0 === e.statusText ? "" : "" + e.statusText,
                  this.headers = new h(e.headers),
                  this.url = e.url || "",
                  this._initBody(t)
              }
              w.prototype.clone = function() {
                  return new w(this,{
                      body: this._bodyInit
                  })
              }
              ,
              m.call(w.prototype),
              m.call(T.prototype),
              T.prototype.clone = function() {
                  return new T(this._bodyInit,{
                      status: this.status,
                      statusText: this.statusText,
                      headers: new h(this.headers),
                      url: this.url
                  })
              }
              ,
              T.error = function() {
                  var t = new T(null,{
                      status: 0,
                      statusText: ""
                  });
                  return t.type = "error",
                  t
              }
              ;
              var S = [301, 302, 303, 307, 308];
              T.redirect = function(t, e) {
                  if (-1 === S.indexOf(e))
                      throw new RangeError("Invalid status code");
                  return new T(null,{
                      status: e,
                      headers: {
                          location: t
                      }
                  })
              }
              ;
              var E = n.DOMException;
              try {
                  new E
              } catch (t) {
                  (E = function(t, e) {
                      this.message = t,
                      this.name = e;
                      var r = Error(t);
                      this.stack = r.stack
                  }
                  ).prototype = Object.create(Error.prototype),
                  E.prototype.constructor = E
              }
              function k(t, e) {
                  return new Promise((function(r, o) {
                      var i = new w(t,e);
                      if (i.signal && i.signal.aborted)
                          return o(new E("Aborted","AbortError"));
                      var s = new XMLHttpRequest;
                      function u() {
                          s.abort()
                      }
                      s.onload = function() {
                          var t, e, n = {
                              status: s.status,
                              statusText: s.statusText,
                              headers: (t = s.getAllResponseHeaders() || "",
                              e = new h,
                              t.replace(/\r?\n[\t ]+/g, " ").split("\r").map((function(t) {
                                  return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                              }
                              )).forEach((function(t) {
                                  var r = t.split(":")
                                    , n = r.shift().trim();
                                  if (n) {
                                      var o = r.join(":").trim();
                                      e.append(n, o)
                                  }
                              }
                              )),
                              e)
                          };
                          n.url = "responseURL"in s ? s.responseURL : n.headers.get("X-Request-URL");
                          var o = "response"in s ? s.response : s.responseText;
                          setTimeout((function() {
                              r(new T(o,n))
                          }
                          ), 0)
                      }
                      ,
                      s.onerror = function() {
                          setTimeout((function() {
                              o(new TypeError("Network request failed"))
                          }
                          ), 0)
                      }
                      ,
                      s.ontimeout = function() {
                          setTimeout((function() {
                              o(new TypeError("Network request failed"))
                          }
                          ), 0)
                      }
                      ,
                      s.onabort = function() {
                          setTimeout((function() {
                              o(new E("Aborted","AbortError"))
                          }
                          ), 0)
                      }
                      ,
                      s.open(i.method, function(t) {
                          try {
                              return "" === t && n.location.href ? n.location.href : t
                          } catch (e) {
                              return t
                          }
                      }(i.url), !0),
                      "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1),
                      "responseType"in s && (a ? s.responseType = "blob" : c && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")),
                      !e || "object" != typeof e.headers || e.headers instanceof h ? i.headers.forEach((function(t, e) {
                          s.setRequestHeader(e, t)
                      }
                      )) : Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                          s.setRequestHeader(t, f(e.headers[t]))
                      }
                      )),
                      i.signal && (i.signal.addEventListener("abort", u),
                      s.onreadystatechange = function() {
                          4 === s.readyState && i.signal.removeEventListener("abort", u)
                      }
                      ),
                      s.send(void 0 === i._bodyInit ? null : i._bodyInit)
                  }
                  ))
              }
              k.polyfill = !0,
              n.fetch || (n.fetch = k,
              n.Headers = h,
              n.Request = w,
              n.Response = T)
          }
      }
        , e = {};
      function r(n) {
          var o = e[n];
          if (void 0 !== o)
              return o.exports;
          var i = e[n] = {
              exports: {}
          };
          return t[n].call(i.exports, i, i.exports, r),
          i.exports
      }
      r.n = t=>{
          var e = t && t.__esModule ? ()=>t.default : ()=>t;
          return r.d(e, {
              a: e
          }),
          e
      }
      ,
      r.d = (t,e)=>{
          for (var n in e)
              r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: e[n]
              })
      }
      ,
      r.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
      r.r = t=>{
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
          }),
          Object.defineProperty(t, "__esModule", {
              value: !0
          })
      }
      ;
      var n = {};
      return (()=>{
          "use strict";
          let t;
          r.r(n),
          r.d(n, {
              default: ()=>ee
          }),
          r(666);
          const e = new Uint8Array(16);
          function o() {
              if (!t && (t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
              !t))
                  throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
              return t(e)
          }
          const i = [];
          for (let t = 0; t < 256; ++t)
              i.push((t + 256).toString(16).slice(1));
          let a, s, c = 0, u = 0;
          const l = function(t, e, r) {
              let n = e && r || 0;
              const l = e || new Array(16);
              let p = (t = t || {}).node || a
                , f = void 0 !== t.clockseq ? t.clockseq : s;
              if (null == p || null == f) {
                  const e = t.random || (t.rng || o)();
                  null == p && (p = a = [1 | e[0], e[1], e[2], e[3], e[4], e[5]]),
                  null == f && (f = s = 16383 & (e[6] << 8 | e[7]))
              }
              let d = void 0 !== t.msecs ? t.msecs : Date.now()
                , h = void 0 !== t.nsecs ? t.nsecs : u + 1;
              const _ = d - c + (h - u) / 1e4;
              if (_ < 0 && void 0 === t.clockseq && (f = f + 1 & 16383),
              (_ < 0 || d > c) && void 0 === t.nsecs && (h = 0),
              h >= 1e4)
                  throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
              c = d,
              u = h,
              s = f,
              d += 122192928e5;
              const y = (1e4 * (268435455 & d) + h) % 4294967296;
              l[n++] = y >>> 24 & 255,
              l[n++] = y >>> 16 & 255,
              l[n++] = y >>> 8 & 255,
              l[n++] = 255 & y;
              const v = d / 4294967296 * 1e4 & 268435455;
              l[n++] = v >>> 8 & 255,
              l[n++] = 255 & v,
              l[n++] = v >>> 24 & 15 | 16,
              l[n++] = v >>> 16 & 255,
              l[n++] = f >>> 8 | 128,
              l[n++] = 255 & f;
              for (let t = 0; t < 6; ++t)
                  l[n + t] = p[t];
              return e || function(t, e=0) {
                  return (i[t[e + 0]] + i[t[e + 1]] + i[t[e + 2]] + i[t[e + 3]] + "-" + i[t[e + 4]] + i[t[e + 5]] + "-" + i[t[e + 6]] + i[t[e + 7]] + "-" + i[t[e + 8]] + i[t[e + 9]] + "-" + i[t[e + 10]] + i[t[e + 11]] + i[t[e + 12]] + i[t[e + 13]] + i[t[e + 14]] + i[t[e + 15]]).toLowerCase()
              }(l)
          };
          var p, f = r(360), d = r.n(f), h = r(301), _ = r.n(h), y = "region", v = "reserve", g = "getReserveStatus", m = "rules";
          function b(t, e, r) {
              return e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = r,
              t
          }
          var w = "reserveComplete"
            , O = (b(p = {}, v, "reserveMutation"),
          b(p, g, g),
          p)
            , T = "TM_US"
            , S = "TM_UK"
            , E = "TM_IE"
            , k = "TM_MX"
            , P = {
              TM_US: {
                  checkoutBaseUrl: "https://checkout.ticketmaster.com",
                  cookieDomain: "ticketmaster.com",
                  domain: T,
                  loginPageEnabled: "false",
                  loginPageBaseUrl: "https://identity.ticketmaster.com"
              },
              LN_US: {
                  checkoutBaseUrl: "https://checkout.livenation.com",
                  cookieDomain: "livenation.com",
                  domain: "LN_US",
                  loginPageEnabled: "true",
                  loginPageBaseUrl: "https://identity.livenation.com"
              },
              TM_CA: {
                  checkoutBaseUrl: "https://checkout.ticketmaster.ca",
                  cookieDomain: "ticketmaster.ca",
                  domain: "TM_CA",
                  loginPageEnabled: "true",
                  loginPageBaseUrl: "https://identity.ticketmaster.ca"
              },
              TM_UK: {
                  checkoutBaseUrl: "https://checkout.ticketmaster.co.uk",
                  cookieDomain: "ticketmaster.co.uk",
                  domain: S,
                  loginPageEnabled: "true",
                  loginPageBaseUrl: "https://identity.ticketmaster.co.uk"
              },
              TM_IE: {
                  checkoutBaseUrl: "https://checkout.ticketmaster.ie",
                  cookieDomain: "ticketmaster.ie",
                  domain: E,
                  loginPageEnabled: "true",
                  loginPageBaseUrl: "https://identity.ticketmaster.ie"
              },
              TM_MX: {
                  checkoutBaseUrl: "https://checkout.ticketmaster.com.mx",
                  cookieDomain: "ticketmaster.com.mx",
                  domain: k,
                  loginPageEnabled: "true",
                  loginPageBaseUrl: "https://identity.ticketmaster.com.mx"
              },
              default: {
                  checkoutBaseUrl: "https://checkout.ticketmaster.com",
                  cookieDomain: "ticketmaster.com",
                  domain: T,
                  loginPageEnabled: "false",
                  loginPageBaseUrl: "https://identity.ticketmaster.com"
              }
          };
          function x(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e && (n = n.filter((function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }
                  ))),
                  r.push.apply(r, n)
              }
              return r
          }
          function I(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? x(Object(r), !0).forEach((function(e) {
                      R(t, e, r[e])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                  }
                  ))
              }
              return t
          }
          function R(t, e, r) {
              return e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = r,
              t
          }
          var M = function(t) {
              return JSON.parse(JSON.stringify(t))
          }
            , j = function() {
              var t, e, r = null;
              if (null !== (t = window) && void 0 !== t && null !== (e = t.location) && void 0 !== e && e.hostname) {
                  var n = window.location
                    , o = n.hostname
                    , i = n.search;
                  /\.nonprod\x2Dtmaws\.io$/.test(o) ? (/domain_name=TM_CA/.test(i) && (r = P.TM_CA),
                  /iccp\x2Dtmuk\./.test(o) && (r = P.TM_UK),
                  /iccp\x2Dtmie\./.test(o) && (r = P.TM_IE),
                  /iccp\x2Dtmmx\./.test(o) && (r = P.TM_MX),
                  (/domain_name=LN_US/.test(i) || /iccp\x2Dlnus\./.test(o)) && (r = P.LN_US)) : /lnus\.preprod\.ticketmaster\.net$/.test(o) || /\.livenation\.com$/.test(o) ? r = P.LN_US : /tmca\.preprod\.ticketmaster\.net$/.test(o) || /\.ticketmaster\.ca$/.test(o) ? r = P.TM_CA : /tmus\.preprod\.ticketmaster\.net$/.test(o) || /\.ticketmaster\.com$/.test(o) ? r = P.TM_US : /\.ticketmaster\.co\.uk$/.test(o) ? r = P.TM_UK : /\.ticketmaster\.ie$/.test(o) ? r = P.TM_IE : /\.ticketmaster\.com(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])mx$/.test(o) && (r = P.TM_MX)
              }
              return r || P.default
          }
            , A = function() {
              return j().checkoutBaseUrl
          }
            , L = function(t) {
              return t.map((function(t) {
                  return I(I({}, t), {}, {
                      ticketTypes: t.ticketTypes.map((function(t) {
                          var e = t.priceDetails;
                          if (e) {
                              var r = e.distanceCharges
                                , n = e.serviceCharges;
                              return I(I({}, t), {}, {
                                  priceDetails: M(I(I({}, e), {}, {
                                      distanceCharges: void 0,
                                      serviceCharges: r ? {
                                          currencyCode: n.currencyCode,
                                          subCurrencyValue: n.subCurrencyValue + r.subCurrencyValue
                                      } : n
                                  }))
                              })
                          }
                          return t
                      }
                      ))
                  })
              }
              ))
          }
            , N = function() {
              var t = new URLSearchParams(window.location.search);
              return "true" === t.get("f_app") || "true" === t.get("f_appview")
          };
          function C(t, e) {
              for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n)
              }
          }
          function D(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e && (n = n.filter((function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }
                  ))),
                  r.push.apply(r, n)
              }
              return r
          }
          function U(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? D(Object(r), !0).forEach((function(e) {
                      F(t, e, r[e])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                  }
                  ))
              }
              return t
          }
          function F(t, e, r) {
              return e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = r,
              t
          }
          function B(t) {
              return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              ,
              B(t)
          }
          var q = "".concat(A(), "/api/log")
            , V = function(t) {
              var e = t.correlationId
                , r = t.requestId
                , n = t.requestorId
                , o = {
                  accessToken: d().get("SOTC"),
                  bid: d().get("BID"),
                  domain: A(),
                  logSource: "sdk",
                  sid: d().get("SID")
              };
              return r && (o.requestId = r),
              e && (o.correlationId = e),
              n && (o.requestorId = n),
              o
          }
            , G = function(t) {
              var e = t.correlationId
                , r = t.data
                , n = t.logLevel
                , o = t.requestId
                , i = t.requestorId
                , a = t.source
                , s = {
                  content: r && "object" === B(r) ? U(U({}, r), {}, {
                      source: a
                  }) : {
                      message: r,
                      source: a
                  },
                  level: n,
                  meta: V({
                      correlationId: e,
                      requestId: o,
                      requestorId: i
                  })
              };
              _()(q, {
                  body: JSON.stringify(s),
                  credentials: "include",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  method: "POST",
                  mode: "cors"
              }).catch((function() {}
              ))
          }
            , H = function() {
              function t(e) {
                  if (function(t, e) {
                      if (!(t instanceof e))
                          throw new TypeError("Cannot call a class as a function")
                  }(this, t),
                  !e)
                      throw new Error("Log file source is required.");
                  this.source = e
              }
              var e, r;
              return e = t,
              (r = [{
                  key: "error",
                  value: function(t) {
                      var e = t.correlationId
                        , r = t.data
                        , n = t.requestId
                        , o = t.requestorId;
                      G({
                          correlationId: e,
                          data: r,
                          logLevel: "error",
                          requestId: n,
                          requestorId: o,
                          source: this.source
                      })
                  }
              }, {
                  key: "warn",
                  value: function(t) {
                      G({
                          data: t,
                          logLevel: "warn",
                          source: this.source
                      })
                  }
              }, {
                  key: "info",
                  value: function(t) {
                      G({
                          data: t,
                          logLevel: "info",
                          source: this.source
                      })
                  }
              }, {
                  key: "debug",
                  value: function(t) {
                      G({
                          data: t,
                          logLevel: "debug",
                          source: this.source
                      })
                  }
              }]) && C(e.prototype, r),
              Object.defineProperty(e, "prototype", {
                  writable: !1
              }),
              t
          }()
            , K = r(725)
            , Y = r(573)
            , X = new (r.n(Y)().Tracer)({
              access_token: "5cd739c62dbe0d16fba5818aaeeb6fa3",
              component_name: "co2.sdk",
              collector_encryption: "tls",
              collector_host: "ls.collector.pub-tmaws.io",
              collector_port: 443,
              tags: {
                  "tm.product_code": "prd1908"
              }
          });
          (0,
          K.initGlobalTracer)(X);
          const W = (0,
          K.globalTracer)();
          function J(t, e) {
              for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n)
              }
          }
          const $ = function() {
              function t(e, r) {
                  !function(t, e) {
                      if (!(t instanceof e))
                          throw new TypeError("Cannot call a class as a function")
                  }(this, t),
                  e && (this.parentSpan = W.extract(K.FORMAT_HTTP_HEADERS, e)),
                  this.additionalTags = r || {}
              }
              var e, r;
              return e = t,
              (r = [{
                  key: "startSpan",
                  value: function(t) {
                      var e = {}
                        , r = this.additionalTags;
                      this.parentSpan && (e.childOf = this.parentSpan);
                      var n = W.startSpan(t, e);
                      n.log({
                          request_received: Date.now()
                      }),
                      n.setTag("span.kind", "client"),
                      n.setTag("git.commit_id", "3de1458adddaed327c79b3b9f0c7a4209c1d0ce7"),
                      Object.keys(r).length && Object.keys(r).forEach((function(t) {
                          n.setTag(t, r[t])
                      }
                      )),
                      this.span = n
                  }
              }, {
                  key: "finishSpan",
                  value: function() {
                      if (!this.span)
                          throw new Error("Can't finish a span that was never started.");
                      this.span.log({
                          request_finished: Date.now()
                      }),
                      this.span.finish()
                  }
              }, {
                  key: "getSpanHeaders",
                  value: function() {
                      if (!this.span)
                          throw new Error("Can't get headers of span that was never started.");
                      var t = {};
                      return this.span.tracer().inject(this.span, K.FORMAT_HTTP_HEADERS, t),
                      t
                  }
              }, {
                  key: "logError",
                  value: function(t) {
                      if (!this.span)
                          throw new Error("Can't log for span that was never started.");
                      this.span.setTag("error", !0),
                      this.span.log({
                          error: !0,
                          message: t
                      })
                  }
              }]) && J(e.prototype, r),
              Object.defineProperty(e, "prototype", {
                  writable: !1
              }),
              t
          }();
          function z(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var r = 0, n = new Array(e); r < e; r++)
                  n[r] = t[r];
              return n
          }
          function Q(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e && (n = n.filter((function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }
                  ))),
                  r.push.apply(r, n)
              }
              return r
          }
          function Z(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? Q(Object(r), !0).forEach((function(e) {
                      tt(t, e, r[e])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                  }
                  ))
              }
              return t
          }
          function tt(t, e, r) {
              return e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = r,
              t
          }
          var et = new H("src/request.js")
            , rt = "MISSING_ENV_VAR".API_KEY
            , nt = function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = arguments.length > 1 ? arguments[1] : void 0
                , r = arguments.length > 2 ? arguments[2] : void 0;
              return M(Z({
                  "Content-Type": "application/json",
                  "TMPS-Correlation-Id": l(),
                  "TMPS-Monetate-Id": d().get("mt.v"),
                  "TMPS-Session-Id": d().get("SID"),
                  "X-API-Key": rt,
                  "x-cmd": r,
                  "x-eid": e,
                  "X-Environment-Tag": "MISSING_ENV_VAR".ENVIRONMENT_TAG,
                  "X-TM-BID": d().get("BID")
              }, t))
          }
            , ot = function(t) {
              var e = t.channelId
                , r = t.correlationId
                , n = t.isLightstepEnabled
                , o = void 0 === n || n
                , i = t.requestName
                , a = t.response
                , s = t.span
                , c = t.url
                , u = a.status
                , l = a.statusText
                , p = {
                  requestName: i,
                  correlationId: r,
                  status: u,
                  statusText: l,
                  url: c,
                  channelId: e
              };
              if (u < 200 || u >= 400)
                  throw o && s && (s.logError(l),
                  s.finishSpan()),
                  new Error("".concat(l, " (").concat(u, ")"));
              return et.info(p),
              a.json()
          }
            , it = function(t) {
              var e = t.correlationId
                , r = t.err
                , n = t.isLightstepEnabled
                , o = void 0 === n || n
                , i = t.requestName
                , a = t.span
                , s = t.url
                , c = {
                  message: r.message,
                  requestName: i,
                  url: s
              };
              throw o && a && (a.logError(r.message),
              a.finishSpan()),
              et.error({
                  correlationId: e,
                  data: c
              }),
              r
          }
            , at = function(t) {
              var e = t.additionalHeaders
                , r = void 0 === e ? {} : e
                , n = t.eventId
                , o = t.parentSpanHeaders
                , i = void 0 === o ? {} : o
                , a = t.requestId
                , s = t.requestInput
                , c = t.requestName
                , u = new $(i,M({
                  "tm.correlation_id": l(),
                  "tm.request_id": a
              }));
              u.startSpan(O[c]);
              var p = u.getSpanHeaders()
                , f = nt(Z(Z({}, r), p), n, c)
                , d = f["TMPS-Correlation-Id"]
                , h = "".concat(A(), "/graphql");
              return _()(h, Z({
                  body: JSON.stringify(s),
                  headers: f
              }, {
                  credentials: "include",
                  method: "POST"
              })).then((function(t) {
                  var e, r, n;
                  return ot({
                      channelId: null === (e = s.variables) || void 0 === e || null === (r = e.reserveInput) || void 0 === r || null === (n = r.requestContext) || void 0 === n ? void 0 : n.channel,
                      correlationId: d,
                      requestName: c,
                      response: t,
                      span: u,
                      url: h
                  })
              }
              )).then((function(t) {
                  var e, r, n = t.errors, o = (e = n = void 0 === n ? [{}] : n,
                  r = 1,
                  function(t) {
                      if (Array.isArray(t))
                          return t
                  }(e) || function(t, e) {
                      var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                      if (null != r) {
                          var n, o, i = [], a = !0, s = !1;
                          try {
                              for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value),
                              !e || i.length !== e); a = !0)
                                  ;
                          } catch (t) {
                              s = !0,
                              o = t
                          } finally {
                              try {
                                  a || null == r.return || r.return()
                              } finally {
                                  if (s)
                                      throw o
                              }
                          }
                          return i
                      }
                  }(e, r) || function(t, e) {
                      if (t) {
                          if ("string" == typeof t)
                              return z(t, e);
                          var r = Object.prototype.toString.call(t).slice(8, -1);
                          return "Object" === r && t.constructor && (r = t.constructor.name),
                          "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? z(t, e) : void 0
                      }
                  }(e, r) || function() {
                      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                  }())[0].message;
                  if (o)
                      throw u.logError(o),
                      u.finishSpan(),
                      new Error(o);
                  return u.finishSpan(),
                  t
              }
              )).catch((function(t) {
                  return it({
                      correlationId: d,
                      err: t,
                      requestName: c,
                      span: u,
                      url: h
                  })
              }
              ))
          }
            , st = "Event ID required"
            , ct = "SUCCESS"
            , ut = "RESERVE_START"
            , lt = function(t, e) {
              var r = j().cookieDomain;
              d().set(t, e, {
                  domain: r,
                  expires: new Date(Date.now() + 864e5),
                  path: "/"
              })
          }
            , pt = function(t) {
              return d().get(t)
          };
          function ft(t, e) {
              var r = Object.keys(t);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e && (n = n.filter((function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }
                  ))),
                  r.push.apply(r, n)
              }
              return r
          }
          function dt(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {};
                  e % 2 ? ft(Object(r), !0).forEach((function(e) {
                      ht(t, e, r[e])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ft(Object(r)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                  }
                  ))
              }
              return t
          }
          function ht(t, e, r) {
              return e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[e] = r,
              t
          }
          var _t = new H("src/api.js")
            , yt = Math.floor(360)
            , vt = function(t, e) {
              return t && e && [ct, "IN", "IP"].includes(e.toUpperCase())
          }
            , gt = function(t) {
              var e = t.data
                , r = (e = void 0 === e ? {} : e).reserve
                , n = r.errors
                , o = void 0 === n ? [] : n
                , i = r.requestId
                , a = r.status
                , s = window.sessionStorage.getItem(ut);
              lt(i, JSON.stringify({
                  RESERVE_START: s
              })),
              window.sessionStorage.removeItem(ut);
              var c = "";
              if (o && o.length) {
                  var u = o[0]
                    , l = u.code
                    , p = u.message;
                  return c = "".concat(p, " (").concat(l, ")"),
                  _t.error({
                      data: c,
                      requestId: i
                  }),
                  dt(dt({}, r), {}, {
                      error: u
                  })
              }
              return vt(i, a) ? r : (c = "Reserve failure",
              _t.error({
                  data: c,
                  requestId: i
              }),
              dt(dt({}, r), {}, {
                  error: {
                      message: c
                  }
              }))
          }
            , mt = function(t) {
              return function(t) {
                  var e = "".concat(A(), "/api/rules?eventId=").concat(t)
                    , r = nt({}, t, m)["TMPS-Correlation-Id"];
                  return _()(e, {
                      credentials: "include"
                  }).then((function(t) {
                      return ot({
                          requestName: m,
                          response: t,
                          url: e
                      })
                  }
                  )).catch((function(t) {
                      return it({
                          correlationId: r,
                          err: t,
                          requestName: m,
                          url: e
                      })
                  }
                  ))
              }(t)
          }
            , bt = function(t) {
              var e = t.eventId
                , r = t.parentSpanHeaders
                , n = t.region
                , o = t.reserveInput
                , i = t.smartQueueToken
                , a = t.spanHeaders
                , s = t.toolspreview;
              return window.sessionStorage.setItem(ut, Date.now()),
              function(t) {
                  var e = t.eventId
                    , r = t.parentSpanHeaders
                    , n = t.toolspreview
                    , o = {
                      query: "\n  mutation reserve($reserveInput:ReserveInput!) {\n    reserve(reserveInput:$reserveInput) {\n      errors {\n        code\n        data {\n          key\n          value\n        }\n        message\n      }\n      requestId\n      status\n    }\n  }\n",
                      variables: {
                          reserveInput: t.reserveInput
                      }
                  }
                    , i = {
                      "X-Region": t.region,
                      "X-TMPS-SmartQueue-Token": t.smartQueueToken
                  };
                  return n && (i["X-Toolspreview"] = n),
                  at({
                      additionalHeaders: i,
                      eventId: e,
                      parentSpanHeaders: r,
                      requestInput: o,
                      requestName: v
                  })
              }({
                  eventId: e,
                  parentSpanHeaders: r,
                  region: n,
                  reserveInput: o,
                  smartQueueToken: i,
                  spanHeaders: a,
                  toolspreview: s
              }).then(gt)
          }
            , wt = function t(e) {
              var r = e.count
                , n = void 0 === r ? 1 : r
                , o = e.eventId
                , i = e.parentSpanHeaders
                , a = e.requestId;
              return function(t) {
                  var e = t.requestId;
                  return at({
                      eventId: t.eventId,
                      parentSpanHeaders: t.parentSpanHeaders,
                      requestId: e,
                      requestInput: {
                          query: "\n  query getReserveStatus($requestId: String!) {\n    getReserveStatus(requestId: $requestId) {\n      accessTokenValid\n      errors {\n        code\n        data {\n          key\n          value\n        }\n        message\n      }\n      requestId\n      requestorId\n      requiresSessionInvalidation\n      status\n      ticketOrderItems {\n        expirationTime\n        ticketTypes {\n          priceDetails {\n            serviceCharges {\n              currencyCode\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n",
                          variables: {
                              requestId: e
                          }
                      },
                      requestName: g
                  })
              }({
                  eventId: o,
                  parentSpanHeaders: i,
                  requestId: a
              }).then((function(e) {
                  var r = e.data
                    , s = (void 0 === r ? {} : r).getReserveStatus
                    , c = void 0 === s ? {} : s
                    , u = c.status
                    , l = c.errors
                    , p = void 0 === l ? [] : l;
                  if (n < yt && "PROCESSING" === u)
                      return function(t) {
                          var e = this;
                          return new Promise((function(t) {
                              setTimeout(t.bind(e), 5e3)
                          }
                          ))
                      }().then((function() {
                          return t({
                              count: n + 1,
                              eventId: o,
                              parentSpanHeaders: i,
                              requestId: a
                          })
                      }
                      ));
                  if (vt(a, u))
                      return Promise.resolve(c);
                  var f = n >= yt ? "Max polling retries reached." : p[0];
                  return Promise.reject(f)
              }
              ))
          }
            , Ot = function(t) {
              var e = t.onSubscribe
                , r = t.region
                , n = t.requestorId;
              return new Promise((function(t, o) {
                  var i = "west" === r ? "da2-pbjuejzc5rac3fspc2ozvtouxy" : "da2-esrv7m4ch5cmhk4tftair7zi74"
                    , a = "west" === r ? "ciziftt2drddxnqhvcpaffgv5y.appsync-api.us-west-2.amazonaws.com" : "o26jo4blcnf65jyg3hzjxarpwy.appsync-api.us-east-1.amazonaws.com"
                    , s = null
                    , c = !1
                    , u = !1
                    , l = !1
                    , p = function r(i) {
                      i && i.message && _t.error({
                          data: i.message,
                          requestorId: n
                      }),
                      s && s.close && s.close(),
                      l ? l && u && !c ? t({
                          pollingRequired: !0
                      }) : o(i) : (l = !0,
                      e().then((function() {
                          u = !0,
                          t({
                              pollingRequired: !0
                          })
                      }
                      )).catch((function(t) {
                          r(t)
                      }
                      )))
                  };
                  try {
                      s = function(t) {
                          var e = t.apiKey
                            , r = t.host
                            , n = btoa(JSON.stringify({
                              host: r,
                              "x-api-key": e
                          }))
                            , o = r.replace("api", "realtime-api")
                            , i = "wss://".concat(o, "/graphql?header=").concat(n, "&payload=e30=");
                          return new WebSocket(i,"graphql-ws", { agent: proxyAgent });
                      }({
                          apiKey: i,
                          host: a
                      }),
                      setTimeout((function() {
                          p(new Error("Reserve complete web socket timeout exceeded."))
                      }
                      ), 3e4),
                      s.onerror = function() {
                          p(new Error("Reserve complete websocket error"))
                      }
                      ,
                      s.onmessage = function(r) {
                          var f = JSON.parse(r.data);
                          if ("connection_ack" === f.type && s.send(JSON.stringify({
                              id: n,
                              payload: {
                                  data: JSON.stringify({
                                      query: "\n  subscription reserveComplete($requestorId:String!) {\n    reserveComplete(requestorId: $requestorId) {\n      accessTokenValid\n      errors {\n        code\n        data {\n          key\n          value\n        }\n        message\n      }\n      requestId\n      requestorId\n      requiresSessionInvalidation\n      status\n      ticketOrderItems {\n        expirationTime\n        ticketTypes {\n          priceDetails {\n            serviceCharges {\n              currencyCode\n              value\n            }\n          }\n        }\n      }\n    }\n  }\n",
                                      variables: {
                                          requestorId: n
                                      }
                                  }),
                                  extensions: {
                                      authorization: {
                                          host: a,
                                          "x-api-key": i
                                      }
                                  }
                              },
                              type: "start"
                          })),
                          "start_ack" === f.type && (l = !0,
                          e().then((function() {
                              u = !0
                          }
                          )).catch((function(t) {
                              p(t)
                          }
                          ))),
                          "data" === f.type) {
                              var d = f.payload
                                , h = (d = void 0 === d ? {} : d).data.reserveComplete
                                , _ = void 0 === h ? {} : h
                                , y = _.errors
                                , v = void 0 === y ? [] : y
                                , g = _.requestId
                                , m = _.status;
                              c = !0,
                              s.close(),
                              vt(g, m) ? t(_) : o(v[0])
                          }
                          "error" === f.type && p(new Error("Reserve complete websocket message error"))
                      }
                      ,
                      s.onopen = function() {
                          return s.send(JSON.stringify({
                              type: "connection_init"
                          }))
                      }
                  } catch (t) {
                      p(t)
                  }
              }
              ))
          }
            , Tt = 10
            , St = "desktop"
            , Et = "mobile"
            , kt = "tablet"
            , Pt = "ln5.iphone"
            , xt = "CO2"
            , It = "RCO"
            , Rt = "*"
            , Mt = function(t) {
              var e = t.requestId
                , r = JSON.parse(pt(e) || "{}")
                , n = r.RESERVE_START;
              if (n) {
                  var o = Date.now()
                    , i = Math.abs(o - n);
                  r.RESERVE_REQUEST_TOTAL_TIME = i,
                  lt(e, JSON.stringify(r))
              }
          };
          function jt(t, e) {
              var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
              if (!r) {
                  if (Array.isArray(t) || (r = Ct(t)) || e && t && "number" == typeof t.length) {
                      r && (t = r);
                      var n = 0
                        , o = function() {};
                      return {
                          s: o,
                          n: function() {
                              return n >= t.length ? {
                                  done: !0
                              } : {
                                  done: !1,
                                  value: t[n++]
                              }
                          },
                          e: function(t) {
                              throw t
                          },
                          f: o
                      }
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }
              var i, a = !0, s = !1;
              return {
                  s: function() {
                      r = r.call(t)
                  },
                  n: function() {
                      var t = r.next();
                      return a = t.done,
                      t
                  },
                  e: function(t) {
                      s = !0,
                      i = t
                  },
                  f: function() {
                      try {
                          a || null == r.return || r.return()
                      } finally {
                          if (s)
                              throw i
                      }
                  }
              }
          }
          function At(t) {
              return function(t) {
                  if (Array.isArray(t))
                      return Dt(t)
              }(t) || function(t) {
                  if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                      return Array.from(t)
              }(t) || Ct(t) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }
          function Lt(t) {
              return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              ,
              Lt(t)
          }
          function Nt(t, e) {
              return function(t) {
                  if (Array.isArray(t))
                      return t
              }(t) || function(t, e) {
                  var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                  if (null != r) {
                      var n, o, i = [], a = !0, s = !1;
                      try {
                          for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value),
                          !e || i.length !== e); a = !0)
                              ;
                      } catch (t) {
                          s = !0,
                          o = t
                      } finally {
                          try {
                              a || null == r.return || r.return()
                          } finally {
                              if (s)
                                  throw o
                          }
                      }
                      return i
                  }
              }(t, e) || Ct(t, e) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
              }()
          }
          function Ct(t, e) {
              if (t) {
                  if ("string" == typeof t)
                      return Dt(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  return "Object" === r && t.constructor && (r = t.constructor.name),
                  "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Dt(t, e) : void 0
              }
          }
          function Dt(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var r = 0, n = new Array(e); r < e; r++)
                  n[r] = t[r];
              return n
          }
          var Ut = function(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return t && e.eventId && (e.eventId === Rt || e.eventId === t)
          }
            , Ft = function(t) {
              var e = t.inventoryDetail
                , r = (e = void 0 === e ? {} : e).type
                , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , o = n.inventoryType;
              return o && (o === Rt || r && o.split(",").includes(r))
          }
            , Bt = function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = Nt(t.ticketTypes, 1)
                , r = e[0].id
                , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , o = n.ticketType;
              return o && (o === Rt || r && o.split(",").includes(r))
          }
            , qt = function(t) {
              if (!["number", "string"].includes(Lt(t)))
                  return !1;
              var e = t.toString().match(/^[0-9]*$/g);
              return !!e && !!e.length && parseInt(t, Tt) >= 0 && parseInt(t, Tt) <= 100
          }
            , Vt = function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , e = t.eventId
                , r = t.tickets
                , n = void 0 === r ? [] : r
                , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                , i = [];
              if (!(e && o && o.length && n && n.length))
                  return i;
              var a, s = At(o).sort((function(t, e) {
                  var r = 0;
                  return parseInt(t.priority, Tt) > parseInt(e.priority, Tt) ? r = 1 : parseInt(t.priority, Tt) < parseInt(e.priority, Tt) && (r = -1),
                  r
              }
              )), c = jt(n);
              try {
                  for (c.s(); !(a = c.n()).done; ) {
                      var u, l = a.value, p = jt(s);
                      try {
                          for (p.s(); !(u = p.n()).done; ) {
                              var f = u.value;
                              if (Ut(e, f) && Ft(l, f) && Bt(l, f)) {
                                  i.push(f);
                                  break
                              }
                          }
                      } catch (t) {
                          p.e(t)
                      } finally {
                          p.f()
                      }
                  }
              } catch (t) {
                  c.e(t)
              } finally {
                  c.f()
              }
              return i
          }
            , Gt = function(t) {
              var e, r = null;
              if (!t || !t.length)
                  return r;
              var n, o = jt(t);
              try {
                  for (o.s(); !(n = o.n()).done; ) {
                      var i = n.value;
                      if (i && i.system) {
                          if ((r = i.system) !== xt && (!qt(i.percentage) || 100 === parseInt(i.percentage, Tt)))
                              return r;
                          qt(i.percentage) && (!e || parseInt(i.percentage, Tt) <= e.percentage) && (e = i)
                      }
                  }
              } catch (t) {
                  o.e(t)
              } finally {
                  o.f()
              }
              if (void 0 !== e) {
                  var a = Math.floor(100 * Math.random()) + 1
                    , s = e
                    , c = s.percentage
                    , u = s.system;
                  return a <= c ? u : u === xt ? It : xt
              }
              return r
          }
            , Ht = function(t) {
              return t === xt
          };
          function Kt(t) {
              var e = t.clubSiteId
                , r = t.deviceType
                , n = t.host
                , o = t.isAppview
                , i = t.isResale
                , a = t.isThirdParty
                , s = function(t, e, r) {
                  var n = /\.nonprod\x2Dtmaws\.io$/.test(t)
                    , o = /\.preprod(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])ticketmaster(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])net$/.test(t)
                    , i = "ticketmaster.ca"
                    , a = "ticketmaster.us"
                    , s = "livenation.us";
                  return /domain_name=TM_CA/.test(r) && (n || o) ? i : /domain_name=LN_US/.test(r) && n ? s : /\.ticketmaster\.co\.uk/.test(t) || /iccp\x2Dtmuk\./.test(t) && n ? "ticketmaster.co.uk" : /\.ticketmaster\.com\.mx/.test(t) || /iccp\x2Dtmmx\./.test(t) && n ? "ticketmaster.com.mx" : /\.ticketmaster\.ie/.test(t) || /iccp\x2Dtmie\./.test(t) && n ? "ticketmaster.ie" : {
                      "www.ticketmaster.com": Yt(e) || a,
                      "www.ticketmaster.ca": Yt(e, !0) || i,
                      "concerts.livenation.com": Yt(e) || s,
                      "www.tmus.preprod.ticketmaster.net": Yt(e) || a,
                      "www.tmca.preprod.ticketmaster.net": Yt(e) || i,
                      "concerts.lnus.preprod.ticketmaster.net": Yt(e) || s
                  }[t] || a
              }(n, e, t.search)
                , c = function(t) {
                  var e = t.clubSiteId
                    , r = t.deviceType
                    , n = t.isAppview
                    , o = t.isLiveNation
                    , i = t.isResale
                    , a = t.isThirdParty
                    , s = !!window.webkit
                    , c = !!window.android
                    , u = r === kt
                    , l = {
                      desktop: St,
                      mobile: Et,
                      tablet: kt
                  }
                    , p = l[r];
                  return i || a || (u && e && (p = l.mobile),
                  n && (s ? p = o ? Pt : "webviewiphone" : c ? p = o ? "ln5.android" : "webviewandroid" : u && (p = o ? Pt : "webviewtablet"))),
                  p
              }({
                  clubSiteId: e,
                  deviceType: r,
                  isAppview: o,
                  isLiveNation: /livenation/.test(s),
                  isResale: i,
                  isThirdParty: a
              })
                , u = r === Et
                , l = r === kt
                , p = r === St;
              if (/ticketmaster(?:\.co\.uk|\.ie|\.com\.mx)/.test(s)) {
                  if (u || o) {
                      var f = /ticketmaster\.co\.uk/.test(s);
                      return "mobile.".concat(f ? "ticketmaster.uk" : s)
                  }
                  return "www.".concat(s)
              }
              var d = function(t) {
                  var e = t.clubSiteId
                    , r = t.deviceType
                    , n = t.isAppview
                    , o = !!window.webkit
                    , i = !!window.android
                    , a = "browser";
                  return n && !e ? r === kt ? a = "web.view" : o ? a = "web.view.iphone" : i && (a = "web.view.android") : o ? a = "ios" : i && (a = "android"),
                  a
              }({
                  clubSiteId: e,
                  deviceType: r,
                  isAppview: o
              });
              return i || a ? "internal.".concat(o || u || l ? "mcommerce" : "ecommerce", ".consumer.").concat(c, ".").concat(o ? "app" : "web", ".").concat(d, ".").concat(s) : e && p && !o ? "www.".concat(e, "tm.com") : "".concat(c, ".").concat(s)
          }
          function Yt(t, e) {
              return t ? "".concat(t, "tm.").concat(e ? "ca" : "us") : null
          }
          function Xt(t) {
              return Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                  return typeof t
              }
              : function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
              }
              ,
              Xt(t)
          }
          function Wt() {
              Wt = function() {
                  return t
              }
              ;
              var t = {}
                , e = Object.prototype
                , r = e.hasOwnProperty
                , n = "function" == typeof Symbol ? Symbol : {}
                , o = n.iterator || "@@iterator"
                , i = n.asyncIterator || "@@asyncIterator"
                , a = n.toStringTag || "@@toStringTag";
              function s(t, e, r) {
                  return Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  }),
                  t[e]
              }
              try {
                  s({}, "")
              } catch (t) {
                  s = function(t, e, r) {
                      return t[e] = r
                  }
              }
              function c(t, e, r, n) {
                  var o = e && e.prototype instanceof p ? e : p
                    , i = Object.create(o.prototype)
                    , a = new T(n || []);
                  return i._invoke = function(t, e, r) {
                      var n = "suspendedStart";
                      return function(o, i) {
                          if ("executing" === n)
                              throw new Error("Generator is already running");
                          if ("completed" === n) {
                              if ("throw" === o)
                                  throw i;
                              return {
                                  value: void 0,
                                  done: !0
                              }
                          }
                          for (r.method = o,
                          r.arg = i; ; ) {
                              var a = r.delegate;
                              if (a) {
                                  var s = b(a, r);
                                  if (s) {
                                      if (s === l)
                                          continue;
                                      return s
                                  }
                              }
                              if ("next" === r.method)
                                  r.sent = r._sent = r.arg;
                              else if ("throw" === r.method) {
                                  if ("suspendedStart" === n)
                                      throw n = "completed",
                                      r.arg;
                                  r.dispatchException(r.arg)
                              } else
                                  "return" === r.method && r.abrupt("return", r.arg);
                              n = "executing";
                              var c = u(t, e, r);
                              if ("normal" === c.type) {
                                  if (n = r.done ? "completed" : "suspendedYield",
                                  c.arg === l)
                                      continue;
                                  return {
                                      value: c.arg,
                                      done: r.done
                                  }
                              }
                              "throw" === c.type && (n = "completed",
                              r.method = "throw",
                              r.arg = c.arg)
                          }
                      }
                  }(t, r, a),
                  i
              }
              function u(t, e, r) {
                  try {
                      return {
                          type: "normal",
                          arg: t.call(e, r)
                      }
                  } catch (t) {
                      return {
                          type: "throw",
                          arg: t
                      }
                  }
              }
              t.wrap = c;
              var l = {};
              function p() {}
              function f() {}
              function d() {}
              var h = {};
              s(h, o, (function() {
                  return this
              }
              ));
              var _ = Object.getPrototypeOf
                , y = _ && _(_(S([])));
              y && y !== e && r.call(y, o) && (h = y);
              var v = d.prototype = p.prototype = Object.create(h);
              function g(t) {
                  ["next", "throw", "return"].forEach((function(e) {
                      s(t, e, (function(t) {
                          return this._invoke(e, t)
                      }
                      ))
                  }
                  ))
              }
              function m(t, e) {
                  function n(o, i, a, s) {
                      var c = u(t[o], t, i);
                      if ("throw" !== c.type) {
                          var l = c.arg
                            , p = l.value;
                          return p && "object" == Xt(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                              n("next", t, a, s)
                          }
                          ), (function(t) {
                              n("throw", t, a, s)
                          }
                          )) : e.resolve(p).then((function(t) {
                              l.value = t,
                              a(l)
                          }
                          ), (function(t) {
                              return n("throw", t, a, s)
                          }
                          ))
                      }
                      s(c.arg)
                  }
                  var o;
                  this._invoke = function(t, r) {
                      function i() {
                          return new e((function(e, o) {
                              n(t, r, e, o)
                          }
                          ))
                      }
                      return o = o ? o.then(i, i) : i()
                  }
              }
              function b(t, e) {
                  var r = t.iterator[e.method];
                  if (void 0 === r) {
                      if (e.delegate = null,
                      "throw" === e.method) {
                          if (t.iterator.return && (e.method = "return",
                          e.arg = void 0,
                          b(t, e),
                          "throw" === e.method))
                              return l;
                          e.method = "throw",
                          e.arg = new TypeError("The iterator does not provide a 'throw' method")
                      }
                      return l
                  }
                  var n = u(r, t.iterator, e.arg);
                  if ("throw" === n.type)
                      return e.method = "throw",
                      e.arg = n.arg,
                      e.delegate = null,
                      l;
                  var o = n.arg;
                  return o ? o.done ? (e[t.resultName] = o.value,
                  e.next = t.nextLoc,
                  "return" !== e.method && (e.method = "next",
                  e.arg = void 0),
                  e.delegate = null,
                  l) : o : (e.method = "throw",
                  e.arg = new TypeError("iterator result is not an object"),
                  e.delegate = null,
                  l)
              }
              function w(t) {
                  var e = {
                      tryLoc: t[0]
                  };
                  1 in t && (e.catchLoc = t[1]),
                  2 in t && (e.finallyLoc = t[2],
                  e.afterLoc = t[3]),
                  this.tryEntries.push(e)
              }
              function O(t) {
                  var e = t.completion || {};
                  e.type = "normal",
                  delete e.arg,
                  t.completion = e
              }
              function T(t) {
                  this.tryEntries = [{
                      tryLoc: "root"
                  }],
                  t.forEach(w, this),
                  this.reset(!0)
              }
              function S(t) {
                  if (t) {
                      var e = t[o];
                      if (e)
                          return e.call(t);
                      if ("function" == typeof t.next)
                          return t;
                      if (!isNaN(t.length)) {
                          var n = -1
                            , i = function e() {
                              for (; ++n < t.length; )
                                  if (r.call(t, n))
                                      return e.value = t[n],
                                      e.done = !1,
                                      e;
                              return e.value = void 0,
                              e.done = !0,
                              e
                          };
                          return i.next = i
                      }
                  }
                  return {
                      next: E
                  }
              }
              function E() {
                  return {
                      value: void 0,
                      done: !0
                  }
              }
              return f.prototype = d,
              s(v, "constructor", d),
              s(d, "constructor", f),
              f.displayName = s(d, a, "GeneratorFunction"),
              t.isGeneratorFunction = function(t) {
                  var e = "function" == typeof t && t.constructor;
                  return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
              }
              ,
              t.mark = function(t) {
                  return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                  s(t, a, "GeneratorFunction")),
                  t.prototype = Object.create(v),
                  t
              }
              ,
              t.awrap = function(t) {
                  return {
                      __await: t
                  }
              }
              ,
              g(m.prototype),
              s(m.prototype, i, (function() {
                  return this
              }
              )),
              t.AsyncIterator = m,
              t.async = function(e, r, n, o, i) {
                  void 0 === i && (i = Promise);
                  var a = new m(c(e, r, n, o),i);
                  return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                      return t.done ? t.value : a.next()
                  }
                  ))
              }
              ,
              g(v),
              s(v, a, "Generator"),
              s(v, o, (function() {
                  return this
              }
              )),
              s(v, "toString", (function() {
                  return "[object Generator]"
              }
              )),
              t.keys = function(t) {
                  var e = [];
                  for (var r in t)
                      e.push(r);
                  return e.reverse(),
                  function r() {
                      for (; e.length; ) {
                          var n = e.pop();
                          if (n in t)
                              return r.value = n,
                              r.done = !1,
                              r
                      }
                      return r.done = !0,
                      r
                  }
              }
              ,
              t.values = S,
              T.prototype = {
                  constructor: T,
                  reset: function(t) {
                      if (this.prev = 0,
                      this.next = 0,
                      this.sent = this._sent = void 0,
                      this.done = !1,
                      this.delegate = null,
                      this.method = "next",
                      this.arg = void 0,
                      this.tryEntries.forEach(O),
                      !t)
                          for (var e in this)
                              "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                  },
                  stop: function() {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ("throw" === t.type)
                          throw t.arg;
                      return this.rval
                  },
                  dispatchException: function(t) {
                      if (this.done)
                          throw t;
                      var e = this;
                      function n(r, n) {
                          return a.type = "throw",
                          a.arg = t,
                          e.next = r,
                          n && (e.method = "next",
                          e.arg = void 0),
                          !!n
                      }
                      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                          var i = this.tryEntries[o]
                            , a = i.completion;
                          if ("root" === i.tryLoc)
                              return n("end");
                          if (i.tryLoc <= this.prev) {
                              var s = r.call(i, "catchLoc")
                                , c = r.call(i, "finallyLoc");
                              if (s && c) {
                                  if (this.prev < i.catchLoc)
                                      return n(i.catchLoc, !0);
                                  if (this.prev < i.finallyLoc)
                                      return n(i.finallyLoc)
                              } else if (s) {
                                  if (this.prev < i.catchLoc)
                                      return n(i.catchLoc, !0)
                              } else {
                                  if (!c)
                                      throw new Error("try statement without catch or finally");
                                  if (this.prev < i.finallyLoc)
                                      return n(i.finallyLoc)
                              }
                          }
                      }
                  },
                  abrupt: function(t, e) {
                      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                          var o = this.tryEntries[n];
                          if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                              var i = o;
                              break
                          }
                      }
                      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                      var a = i ? i.completion : {};
                      return a.type = t,
                      a.arg = e,
                      i ? (this.method = "next",
                      this.next = i.finallyLoc,
                      l) : this.complete(a)
                  },
                  complete: function(t, e) {
                      if ("throw" === t.type)
                          throw t.arg;
                      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                      this.method = "return",
                      this.next = "end") : "normal" === t.type && e && (this.next = e),
                      l
                  },
                  finish: function(t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (r.finallyLoc === t)
                              return this.complete(r.completion, r.afterLoc),
                              O(r),
                              l
                      }
                  },
                  catch: function(t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                          var r = this.tryEntries[e];
                          if (r.tryLoc === t) {
                              var n = r.completion;
                              if ("throw" === n.type) {
                                  var o = n.arg;
                                  O(r)
                              }
                              return o
                          }
                      }
                      throw new Error("illegal catch attempt")
                  },
                  delegateYield: function(t, e, r) {
                      return this.delegate = {
                          iterator: S(t),
                          resultName: e,
                          nextLoc: r
                      },
                      "next" === this.method && (this.arg = void 0),
                      l
                  }
              },
              t
          }
          function Jt(t, e, r, n, o, i, a) {
              try {
                  var s = t[i](a)
                    , c = s.value
              } catch (t) {
                  return void r(t)
              }
              s.done ? e(c) : Promise.resolve(c).then(n, o)
          }
          function $t(t, e) {
              for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
                  "value"in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n)
              }
          }
          var zt = new H("src/sdk.js");
          const Qt = function() {
              function t(e) {
                  var r = e.eventId
                    , n = e.region
                    , o = void 0 === n ? "east" : n
                    , i = e.smartQueueToken;
                  !function(t, e) {
                      if (!(t instanceof e))
                          throw new TypeError("Cannot call a class as a function")
                  }(this, t),
                  this.accessTokenValid = !1,
                  this.eventId = r,
                  this.region = o,
                  this.remainingTimestamp = 1 / 0,
                  this.requiresSessionInvalidation = !1,
                  this.requestId = null,
                  this.smartQueueToken = i
              }
              var e, r, n, o;
              return e = t,
              r = [{
                  key: "loadCheckout",
                  value: function(t) {
                      var e = this
                        , r = t.appview
                        , n = t.appviewLN
                        , o = t.appviewVersion
                        , i = t.channel
                        , a = t.edp
                        , s = void 0 === a ? window.location.href : a
                        , c = t.layout
                        , u = t.source
                        , l = t.target
                        , p = void 0 === l ? window : l
                        , f = {
                          ccp_src: u,
                          ccp_channel: i,
                          edp: encodeURIComponent(s),
                          f_appview: r,
                          f_appview_ln: n,
                          f_appview_version: o,
                          f_layout: c
                      }
                        , d = function() {
                          var t, e;
                          if (null !== (t = window) && void 0 !== t && null !== (e = t.location) && void 0 !== e && e.hostname) {
                              var r = window.location.hostname
                                , n = new URLSearchParams(window.location.search).get("co");
                              if ((/\.nonprod\x2Dtmaws\.io$/.test(r) || /dev\.ticketmaster\.(?:co\.uk|com\.mx|ie)/.test(r)) && n && /^[\x2D0-9A-Z_a-z]+$/.test(n))
                                  return "https://".concat(n, ".checkout.").concat(function() {
                                      switch (j().domain) {
                                      case S:
                                          return "tmuk.";
                                      case E:
                                          return "tmie.";
                                      case k:
                                          return "tmmx.";
                                      default:
                                          return ""
                                      }
                                  }(), "nonprod-tmaws.io")
                          }
                          return null
                      }() || A()
                        , h = "".concat(d).concat(function(t) {
                          var r = "";
                          return Object.entries(M(t)).forEach((function(t) {
                              var e = r.length ? "&" : "?";
                              r += "".concat(e).concat(t[0], "=").concat(t[1])
                          }
                          )),
                          "/".concat(e.requestId).concat(r)
                      }(f));
                      if (N() || "true" !== j().loginPageEnabled || this.accessTokenValid) {
                          var _ = function() {
                              try {
                                  p.location.assign(h)
                              } catch (t) {
                                  window.location.assign(h)
                              }
                          };
                          this.requiresSessionInvalidation ? window.TMAuthAdaptor && window.TMAuthAdaptor.signOut().then((function() {
                              return _()
                          }
                          )) : _()
                      } else {
                          var y = pt("LANGUAGE")
                            , v = "".concat(j().loginPageBaseUrl, "/sign-in?").concat(y ? "lang=".concat(y, "&") : "", "integratorId=").concat("prd1908.CCPCheckout", "&placementId=").concat("checkout.v2", "&showHeader=").concat(!0, "&headerTitle=").concat("Checkout", "&hideLeftPanel=").concat(!0, "&redirectUri=").concat(window.encodeURIComponent(h));
                          if (this.remainingTimestamp !== 1 / 0 && !isNaN(this.remainingTimestamp)) {
                              var g = parseInt((this.remainingTimestamp - Date.now()) / 1e3, Tt)
                                , m = window.btoa(JSON.stringify({
                                  artistName: "",
                                  remainingTime: g,
                                  timesOutRedirectURL: s
                              }));
                              v += "&timerData=".concat(m)
                          }
                          window.location.assign(v)
                      }
                  }
              }, {
                  key: "checkout",
                  value: (n = Wt().mark((function t() {
                      var e, r, n, o, i, a, s, c, u, p, f, d, h, _, y, v, g, m, b, O, T, S, E, k, P, x, I, R, j, A, C, D, U, F, B, q, V, G, H, K = this, Y = arguments;
                      return Wt().wrap((function(t) {
                          for (; ; )
                              switch (t.prev = t.next) {
                              case 0:
                                  return e = Y.length > 0 && void 0 !== Y[0] ? Y[0] : {},
                                  r = e.clubSiteId,
                                  n = e.eventId,
                                  o = e.jwtToken,
                                  i = e.requestorId,
                                  a = void 0 === i ? l() : i,
                                  s = e.requestContext,
                                  c = e.tickets,
                                  u = e.upsells,
                                  p = Y.length > 1 && void 0 !== Y[1] ? Y[1] : {},
                                  f = p.appview,
                                  d = p.appviewLN,
                                  h = p.appviewVersion,
                                  _ = p.channel,
                                  y = p.edp,
                                  v = void 0 === y ? window.location.href : y,
                                  g = p.layout,
                                  m = p.redirect,
                                  b = void 0 === m || m,
                                  O = p.source,
                                  T = p.target,
                                  S = void 0 === T ? window : T,
                                  E = p.toolspreview,
                                  k = void 0 === E ? !!window.location.pathname && window.location.pathname.includes("toolspreview") : E,
                                  x = (P = s || {}).channel,
                                  I = P.locale,
                                  R = window.location,
                                  j = R.host,
                                  A = R.search,
                                  C = N(),
                                  D = window.matchMedia("(max-width: ".concat(1023, "px)")),
                                  U = null != D && D.matches ? Et : St,
                                  F = Kt({
                                      clubSiteId: r,
                                      deviceType: U,
                                      host: j,
                                      isAppview: C,
                                      isResale: !1,
                                      isThirdParty: !1,
                                      search: A
                                  }),
                                  B = M({
                                      clubSiteId: r,
                                      eventId: n,
                                      jwtToken: o,
                                      requestorId: a,
                                      requestContext: {
                                          channel: x || F,
                                          locale: I || null
                                      },
                                      tickets: L(c),
                                      upsells: u
                                  }),
                                  q = new URLSearchParams(window.location.search),
                                  V = this.region,
                                  G = this.smartQueueToken,
                                  H = [],
                                  t.prev = 12,
                                  t.next = 15,
                                  mt(n);
                              case 15:
                                  H = t.sent,
                                  t.next = 21;
                                  break;
                              case 18:
                                  return t.prev = 18,
                                  t.t0 = t.catch(12),
                                  t.abrupt("return", Promise.reject(t.t0));
                              case 21:
                                  return t.abrupt("return", new Promise((function(t, e) {
                                      var r, n = q.get("force_checkout");
                                      r = [It, xt].includes(n) ? n : Gt(Vt(B, H));
                                      var o = new $(null);
                                      o.startSpan(w);
                                      var i = o.getSpanHeaders()
                                        , s = function(e) {
                                          var n = e.requestId
                                            , i = e.ticketOrderItems
                                            , a = void 0 === i ? [] : i;
                                          n && (K.requestId = n),
                                          o.finishSpan(),
                                          X.flush(),
                                          K.accessTokenValid = !!e.accessTokenValid,
                                          K.requiresSessionInvalidation = !!e.requiresSessionInvalidation,
                                          a && a.length && a.forEach((function(t) {
                                              var e = t.expirationTime;
                                              e && (K.remainingTimestamp = Math.min(1e3 * e, K.remainingTimestamp))
                                          }
                                          )),
                                          !0 === b && (Mt({
                                              requestId: K.requestId
                                          }),
                                          K.loadCheckout({
                                              appview: f,
                                              appviewLN: d,
                                              appviewVersion: h,
                                              channel: _,
                                              edp: v,
                                              layout: g,
                                              source: O,
                                              target: S
                                          })),
                                          t({
                                              response: e,
                                              system: r
                                          })
                                      };
                                      Ht(r) ? Ot({
                                          onSubscribe: function() {
                                              return bt({
                                                  eventId: K.eventId,
                                                  parentSpanHeaders: i,
                                                  region: V,
                                                  reserveInput: B,
                                                  smartQueueToken: G,
                                                  toolspreview: k
                                              }).then((function(t) {
                                                  var r = t.error
                                                    , n = t.requestId;
                                                  r && e(r),
                                                  K.requestId = n
                                              }
                                              ))
                                          },
                                          region: V,
                                          requestorId: a
                                      }).then((function(t) {
                                          var r = t.pollingRequired;
                                          void 0 !== r && r ? wt({
                                              eventId: K.eventId,
                                              parentSpanHeaders: i,
                                              requestId: K.requestId
                                          }).then((function(t) {
                                              s(t)
                                          }
                                          )).catch((function(t) {
                                              zt.error({
                                                  data: t.message,
                                                  requestId: K.requestId
                                              }),
                                              e(t)
                                          }
                                          )) : s(t)
                                      }
                                      )).catch((function(t) {
                                          zt.error({
                                              data: t.message,
                                              requestId: K.requestId
                                          }),
                                          o.logError(t.message),
                                          o.finishSpan(),
                                          e(t)
                                      }
                                      )) : t({
                                          system: r
                                      })
                                  }
                                  )));
                              case 22:
                              case "end":
                                  return t.stop()
                              }
                      }
                      ), t, this, [[12, 18]])
                  }
                  )),
                  o = function() {
                      var t = this
                        , e = arguments;
                      return new Promise((function(r, o) {
                          var i = n.apply(t, e);
                          function a(t) {
                              Jt(i, r, o, a, s, "next", t)
                          }
                          function s(t) {
                              Jt(i, r, o, a, s, "throw", t)
                          }
                          a(void 0)
                      }
                      ))
                  }
                  ,
                  function() {
                      return o.apply(this, arguments)
                  }
                  )
              }],
              r && $t(e.prototype, r),
              Object.defineProperty(e, "prototype", {
                  writable: !1
              }),
              t
          }();
          var Zt = new H("src/index.js")
            , te = {
              build: "".concat("v1-92-0-3de1458a-b5738056"),
              init: function(t) {
                  var e = t.eventId
                    , r = t.smartQueueToken;
                  return new Promise((function(t, n) {
                      return e ? function(t) {
                          return function(t) {
                              var e = "".concat(A(), "/region")
                                , r = nt({}, t, y)["TMPS-Correlation-Id"];
                              return _()(e, {
                                  credentials: "include"
                              }).then((function(t) {
                                  return ot({
                                      requestName: y,
                                      response: t,
                                      url: e
                                  })
                              }
                              )).catch((function(t) {
                                  return it({
                                      correlationId: r,
                                      err: t,
                                      requestName: y,
                                      url: e
                                  })
                              }
                              ))
                          }(t)
                      }(e).then((function(n) {
                          var o = n.region;
                          return t(new Qt({
                              eventId: e,
                              region: o,
                              smartQueueToken: r
                          }))
                      }
                      )).catch(n) : (Zt.warn(st),
                      n(new Error(st)))
                  }
                  ))
              }
          };
          window.CheckoutSDK = te;
          const ee = te
      }
      )(),
      n
  }
  )()));
};

module.exports = initSdk;
