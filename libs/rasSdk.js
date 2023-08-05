const fs = require('fs');

// /* for debugging
const nativeFetch = fetch;
fetch = (...args) => {
  console.log('fetchGlobal', args);
  return nativeFetch(...args);
};
// */

let globalT;

const initRasSDK = (settings, {
  // fetch,
  window,
  document,
  // proxyAgent,
  CustomWebSocket,
}) => {
  global.WebSocket = window.WebSocket = window.MozWebSocket = CustomWebSocket;
 
  /*! For license information please see ras-sdk-v0.js.LICENSE.txt */
  return (function (t, e) {
    const RASSDK = e();
    'object' == typeof exports && 'object' == typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
        ? define([], e)
        : 'object' == typeof exports
          ? (exports.RASSDK = e())
          : (exports.RASSDK = e());

    return RASSDK;
  })(this, () =>
    (() => {
      var t = {
        113: (t, e) => {
          'use strict';
          var r, n, i, o, s, a;
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (r = e.com || (e.com = {})),
            (n = r.ticketmaster || (r.ticketmaster = {})),
            (i = n.supermap || (n.supermap = {})),
            (o = i.avsc || (i.avsc = {})),
            (s = o.v1 || (o.v1 = {})),
            (a = (function () {
              function t() {
                (this.bb = null), (this.bb_pos = 0);
              }

              return (
                (t.prototype.__init = function (t, e) {
                  return (this.bb_pos = t), (this.bb = e), this;
                }),
                (t.getRootAsAttributes = function (e, r) {
                  return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                }),
                (t.prototype.manifestTimestamp = function () {
                  var t = this.bb.__offset(this.bb_pos, 4);
                  return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                }),
                (t.prototype.manifestVersion = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 6);
                  return e ? this.bb.__string(this.bb_pos + e, t) : null;
                }),
                (t.prototype.areaAttributes = function (t, e) {
                  var n = this.bb.__offset(this.bb_pos, 8);
                  return n
                    ? (e || new r.ticketmaster.supermap.avsc.v1.AreaAttribute()).__init(
                      this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t),
                      this.bb,
                    )
                    : null;
                }),
                (t.prototype.areaAttributesLength = function () {
                  var t = this.bb.__offset(this.bb_pos, 8);
                  return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                }),
                (t.prototype.seatCategories = function (t, e) {
                  var n = this.bb.__offset(this.bb_pos, 10);
                  return n
                    ? (e || new r.ticketmaster.supermap.avsc.v1.AttributeCategory()).__init(
                      this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t),
                      this.bb,
                    )
                    : null;
                }),
                (t.prototype.seatCategoriesLength = function () {
                  var t = this.bb.__offset(this.bb_pos, 10);
                  return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                }),
                (t.startAttributes = function (t) {
                  t.startObject(4);
                }),
                (t.addManifestTimestamp = function (t, e) {
                  t.addFieldInt64(0, e, t.createLong(0, 0));
                }),
                (t.addManifestVersion = function (t, e) {
                  t.addFieldOffset(1, e, 0);
                }),
                (t.addAreaAttributes = function (t, e) {
                  t.addFieldOffset(2, e, 0);
                }),
                (t.createAreaAttributesVector = function (t, e) {
                  t.startVector(4, e.length, 4);
                  for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                  return t.endVector();
                }),
                (t.startAreaAttributesVector = function (t, e) {
                  t.startVector(4, e, 4);
                }),
                (t.addSeatCategories = function (t, e) {
                  t.addFieldOffset(3, e, 0);
                }),
                (t.createSeatCategoriesVector = function (t, e) {
                  t.startVector(4, e.length, 4);
                  for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                  return t.endVector();
                }),
                (t.startSeatCategoriesVector = function (t, e) {
                  t.startVector(4, e, 4);
                }),
                (t.endAttributes = function (t) {
                  var e = t.endObject();
                  return t.requiredField(e, 6), t.requiredField(e, 8), t.requiredField(e, 10), e;
                }),
                (t.finishAttributesBuffer = function (t, e) {
                  t.finish(e);
                }),
                (t.createAttributes = function (e, r, n, i, o) {
                  return (
                    t.startAttributes(e),
                    t.addManifestTimestamp(e, r),
                    t.addManifestVersion(e, n),
                    t.addAreaAttributes(e, i),
                    t.addSeatCategories(e, o),
                    t.endAttributes(e)
                  );
                }),
                t
              );
            })()),
            (s.Attributes = a),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsAreaAttribute = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.attribute = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 4);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.Attribute()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.groupId = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.description = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 8);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.startAreaAttribute = function (t) {
                            t.startObject(3);
                          }),
                          (e.addAttribute = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.addGroupId = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (e.addDescription = function (t, e) {
                            t.addFieldOffset(2, e, 0);
                          }),
                          (e.endAreaAttribute = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 8), e;
                          }),
                          (e.createAreaAttribute = function (t, r, n, i) {
                            return (
                              e.startAreaAttribute(t),
                              e.addAttribute(t, r),
                              e.addGroupId(t, n),
                              e.addDescription(t, i),
                              e.endAreaAttribute(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.AreaAttribute = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsAttribute = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.name = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.positions = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
                          }),
                          (t.prototype.positionsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.positionsArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t
                              ? new Uint8Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.restricted = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (t.startAttribute = function (t) {
                            t.startObject(3);
                          }),
                          (t.addName = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (t.addPositions = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.createPositionsVector = function (t, e) {
                            t.startVector(1, e.length, 1);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt8(e[r]);
                            return t.endVector();
                          }),
                          (t.startPositionsVector = function (t, e) {
                            t.startVector(1, e, 1);
                          }),
                          (t.addRestricted = function (t, e) {
                            t.addFieldInt8(2, +e, 0);
                          }),
                          (t.endAttribute = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 6), e;
                          }),
                          (t.createAttribute = function (e, r, n, i) {
                            return (
                              t.startAttribute(e),
                              t.addName(e, r),
                              t.addPositions(e, n),
                              t.addRestricted(e, i),
                              t.endAttribute(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.Attribute = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsAttributeCategory = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.name = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.attributes = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 6);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.Attribute()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.attributesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startAttributeCategory = function (t) {
                            t.startObject(2);
                          }),
                          (e.addName = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.addAttributes = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (e.createAttributesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startAttributesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endAttributeCategory = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 6), e;
                          }),
                          (e.createAttributeCategory = function (t, r, n) {
                            return (
                              e.startAttributeCategory(t),
                              e.addName(t, r),
                              e.addAttributes(t, n),
                              e.endAttributeCategory(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.AttributeCategory = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {}));
        },
        588: (t, e) => {
          'use strict';
          var r, n, i, o, s, a;
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (r = e.com || (e.com = {})),
            (n = r.ticketmaster || (r.ticketmaster = {})),
            (i = n.supermap || (n.supermap = {})),
            (o = i.avsc || (i.avsc = {})),
            (s = o.v1 || (o.v1 = {})),
            (a = (function () {
              function t() {
                (this.bb = null), (this.bb_pos = 0);
              }

              return (
                (t.prototype.__init = function (t, e) {
                  return (this.bb_pos = t), (this.bb = e), this;
                }),
                (t.getRootAsAvailability = function (e, r) {
                  return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                }),
                (t.prototype.numSeats = function () {
                  var t = this.bb.__offset(this.bb_pos, 4);
                  return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                }),
                (t.prototype.numGASeats = function () {
                  var t = this.bb.__offset(this.bb_pos, 6);
                  return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                }),
                (t.prototype.manifestTimestamp = function () {
                  var t = this.bb.__offset(this.bb_pos, 8);
                  return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                }),
                (t.prototype.pricingTimestamp = function () {
                  var t = this.bb.__offset(this.bb_pos, 10);
                  return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                }),
                (t.prototype.processedTimestamp = function () {
                  var t = this.bb.__offset(this.bb_pos, 12);
                  return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                }),
                (t.prototype.revision = function () {
                  var t = this.bb.__offset(this.bb_pos, 14);
                  return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                }),
                (t.prototype.eventId = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 16);
                  return e ? this.bb.__string(this.bb_pos + e, t) : null;
                }),
                (t.prototype.version = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 18);
                  return e ? this.bb.__string(this.bb_pos + e, t) : null;
                }),
                (t.prototype.manifestVersion = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 20);
                  return e ? this.bb.__string(this.bb_pos + e, t) : null;
                }),
                (t.prototype.pricingVersion = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 22);
                  return e ? this.bb.__string(this.bb_pos + e, t) : null;
                }),
                (t.prototype.statuses = function (t, e) {
                  var n = this.bb.__offset(this.bb_pos, 24);
                  return n
                    ? (e || new r.ticketmaster.supermap.avsc.v1.StringRoaringBitmapPair()).__init(
                      this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t),
                      this.bb,
                    )
                    : null;
                }),
                (t.prototype.statusesLength = function () {
                  var t = this.bb.__offset(this.bb_pos, 24);
                  return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                }),
                (t.prototype.sections = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 26);
                  return e
                    ? (t || new r.ticketmaster.supermap.avsc.v1.SectionCounts()).__init(
                      this.bb.__indirect(this.bb_pos + e),
                      this.bb,
                    )
                    : null;
                }),
                (t.startAvailability = function (t) {
                  t.startObject(12);
                }),
                (t.addNumSeats = function (t, e) {
                  t.addFieldInt32(0, e, 0);
                }),
                (t.addNumGASeats = function (t, e) {
                  t.addFieldInt32(1, e, 0);
                }),
                (t.addManifestTimestamp = function (t, e) {
                  t.addFieldInt64(2, e, t.createLong(0, 0));
                }),
                (t.addPricingTimestamp = function (t, e) {
                  t.addFieldInt64(3, e, t.createLong(0, 0));
                }),
                (t.addProcessedTimestamp = function (t, e) {
                  t.addFieldInt64(4, e, t.createLong(0, 0));
                }),
                (t.addRevision = function (t, e) {
                  t.addFieldInt64(5, e, t.createLong(0, 0));
                }),
                (t.addEventId = function (t, e) {
                  t.addFieldOffset(6, e, 0);
                }),
                (t.addVersion = function (t, e) {
                  t.addFieldOffset(7, e, 0);
                }),
                (t.addManifestVersion = function (t, e) {
                  t.addFieldOffset(8, e, 0);
                }),
                (t.addPricingVersion = function (t, e) {
                  t.addFieldOffset(9, e, 0);
                }),
                (t.addStatuses = function (t, e) {
                  t.addFieldOffset(10, e, 0);
                }),
                (t.createStatusesVector = function (t, e) {
                  t.startVector(4, e.length, 4);
                  for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                  return t.endVector();
                }),
                (t.startStatusesVector = function (t, e) {
                  t.startVector(4, e, 4);
                }),
                (t.addSections = function (t, e) {
                  t.addFieldOffset(11, e, 0);
                }),
                (t.endAvailability = function (t) {
                  var e = t.endObject();
                  return (
                    t.requiredField(e, 16),
                    t.requiredField(e, 18),
                    t.requiredField(e, 20),
                    t.requiredField(e, 22),
                    t.requiredField(e, 24),
                    t.requiredField(e, 26),
                    e
                  );
                }),
                (t.finishAvailabilityBuffer = function (t, e) {
                  t.finish(e);
                }),
                (t.createAvailability = function (e, r, n, i, o, s, a, u, c, f, l, p, h) {
                  return (
                    t.startAvailability(e),
                    t.addNumSeats(e, r),
                    t.addNumGASeats(e, n),
                    t.addManifestTimestamp(e, i),
                    t.addPricingTimestamp(e, o),
                    t.addProcessedTimestamp(e, s),
                    t.addRevision(e, a),
                    t.addEventId(e, u),
                    t.addVersion(e, c),
                    t.addManifestVersion(e, f),
                    t.addPricingVersion(e, l),
                    t.addStatuses(e, p),
                    t.addSections(e, h),
                    t.endAvailability(e)
                  );
                }),
                t
              );
            })()),
            (s.Availability = a),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsStringRoaringBitmapPair = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.id = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.roaringBitmap = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
                          }),
                          (t.prototype.roaringBitmapLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.roaringBitmapArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t
                              ? new Uint8Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.startStringRoaringBitmapPair = function (t) {
                            t.startObject(2);
                          }),
                          (t.addId = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (t.addRoaringBitmap = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.createRoaringBitmapVector = function (t, e) {
                            t.startVector(1, e.length, 1);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt8(e[r]);
                            return t.endVector();
                          }),
                          (t.startRoaringBitmapVector = function (t, e) {
                            t.startVector(1, e, 1);
                          }),
                          (t.endStringRoaringBitmapPair = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 6), e;
                          }),
                          (t.createStringRoaringBitmapPair = function (e, r, n) {
                            return (
                              t.startStringRoaringBitmapPair(e),
                              t.addId(e, r),
                              t.addRoaringBitmap(e, n),
                              t.endStringRoaringBitmapPair(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.StringRoaringBitmapPair = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsSectionCounts = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.numSections = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.numGASections = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.statusCounts = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 8);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.StatusCounts()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.statusCountsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.priceKeyCounts = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 10);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.PriceKeyCounts()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.priceKeyCountsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.groupCounts = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 12);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.GroupCounts()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.groupCountsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 12);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startSectionCounts = function (t) {
                            t.startObject(5);
                          }),
                          (e.addNumSections = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (e.addNumGASections = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (e.addStatusCounts = function (t, e) {
                            t.addFieldOffset(2, e, 0);
                          }),
                          (e.createStatusCountsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startStatusCountsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addPriceKeyCounts = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (e.createPriceKeyCountsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startPriceKeyCountsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addGroupCounts = function (t, e) {
                            t.addFieldOffset(4, e, 0);
                          }),
                          (e.createGroupCountsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startGroupCountsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endSectionCounts = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 8), t.requiredField(e, 10), t.requiredField(e, 12), e;
                          }),
                          (e.createSectionCounts = function (t, r, n, i, o, s) {
                            return (
                              e.startSectionCounts(t),
                              e.addNumSections(t, r),
                              e.addNumGASections(t, n),
                              e.addStatusCounts(t, i),
                              e.addPriceKeyCounts(t, o),
                              e.addGroupCounts(t, s),
                              e.endSectionCounts(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.SectionCounts = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsStatusCounts = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.items = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 4);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.StatusCount()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.itemsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startStatusCounts = function (t) {
                            t.startObject(1);
                          }),
                          (e.addItems = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.createItemsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startItemsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endStatusCounts = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), e;
                          }),
                          (e.createStatusCounts = function (t, r) {
                            return e.startStatusCounts(t), e.addItems(t, r), e.endStatusCounts(t);
                          }),
                          e
                        );
                      })();
                      e.StatusCounts = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsStatusCount = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.status = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.value = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.startStatusCount = function (t) {
                            t.startObject(2);
                          }),
                          (t.addStatus = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (t.addValue = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (t.endStatusCount = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), e;
                          }),
                          (t.createStatusCount = function (e, r, n) {
                            return t.startStatusCount(e), t.addStatus(e, r), t.addValue(e, n), t.endStatusCount(e);
                          }),
                          t
                        );
                      })();
                      t.StatusCount = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsCount = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.id = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.value = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.startCount = function (t) {
                            t.startObject(2);
                          }),
                          (t.addId = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (t.addValue = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (t.endCount = function (t) {
                            return t.endObject();
                          }),
                          (t.createCount = function (e, r, n) {
                            return t.startCount(e), t.addId(e, r), t.addValue(e, n), t.endCount(e);
                          }),
                          t
                        );
                      })();
                      t.Count = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsPriceKeyCounts = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.items = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 4);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.StatusCountsByPriceKey()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.itemsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startPriceKeyCounts = function (t) {
                            t.startObject(1);
                          }),
                          (e.addItems = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.createItemsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startItemsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endPriceKeyCounts = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), e;
                          }),
                          (e.createPriceKeyCounts = function (t, r) {
                            return e.startPriceKeyCounts(t), e.addItems(t, r), e.endPriceKeyCounts(t);
                          }),
                          e
                        );
                      })();
                      e.PriceKeyCounts = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsGroupCounts = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.items = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 4);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.StatusCountsByGroup()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.itemsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startGroupCounts = function (t) {
                            t.startObject(1);
                          }),
                          (e.addItems = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.createItemsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startItemsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endGroupCounts = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), e;
                          }),
                          (e.createGroupCounts = function (t, r) {
                            return e.startGroupCounts(t), e.addItems(t, r), e.endGroupCounts(t);
                          }),
                          e
                        );
                      })();
                      e.GroupCounts = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsStatusCountsByPriceKey = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.status = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.counts = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 6);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.Count()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.countsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startStatusCountsByPriceKey = function (t) {
                            t.startObject(2);
                          }),
                          (e.addStatus = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.addCounts = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (e.createCountsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startCountsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endStatusCountsByPriceKey = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 6), e;
                          }),
                          (e.createStatusCountsByPriceKey = function (t, r, n) {
                            return (
                              e.startStatusCountsByPriceKey(t),
                              e.addStatus(t, r),
                              e.addCounts(t, n),
                              e.endStatusCountsByPriceKey(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.StatusCountsByPriceKey = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsStatusCountsByGroup = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.status = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.counts = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 6);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.Count()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.countsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startStatusCountsByGroup = function (t) {
                            t.startObject(2);
                          }),
                          (e.addStatus = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (e.addCounts = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (e.createCountsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startCountsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endStatusCountsByGroup = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 6), e;
                          }),
                          (e.createStatusCountsByGroup = function (t, r, n) {
                            return (
                              e.startStatusCountsByGroup(t),
                              e.addStatus(t, r),
                              e.addCounts(t, n),
                              e.endStatusCountsByGroup(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.StatusCountsByGroup = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {}));
        },
        984: (t, e) => {
          'use strict';
          var r, n, i, o, s, a;
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (r = e.com || (e.com = {})),
            (n = r.ticketmaster || (r.ticketmaster = {})),
            (i = n.supermap || (n.supermap = {})),
            (o = i.avsc || (i.avsc = {})),
            (s = o.v1 || (o.v1 = {})),
            (a = (function () {
              function t() {
                (this.bb = null), (this.bb_pos = 0);
              }

              return (
                (t.prototype.__init = function (t, e) {
                  return (this.bb_pos = t), (this.bb = e), this;
                }),
                (t.getRootAsEvent = function (e, r) {
                  return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                }),
                (t.prototype.pricing = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 4);
                  return e
                    ? (t || new r.ticketmaster.supermap.avsc.v1.Pricing()).__init(
                      this.bb.__indirect(this.bb_pos + e),
                      this.bb,
                    )
                    : null;
                }),
                (t.prototype.seats = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 6);
                  return e
                    ? (t || new r.ticketmaster.supermap.avsc.v1.Seats()).__init(
                      this.bb.__indirect(this.bb_pos + e),
                      this.bb,
                    )
                    : null;
                }),
                (t.prototype.sections = function (t) {
                  var e = this.bb.__offset(this.bb_pos, 8);
                  return e
                    ? (t || new r.ticketmaster.supermap.avsc.v1.Sections()).__init(
                      this.bb.__indirect(this.bb_pos + e),
                      this.bb,
                    )
                    : null;
                }),
                (t.startEvent = function (t) {
                  t.startObject(3);
                }),
                (t.addPricing = function (t, e) {
                  t.addFieldOffset(0, e, 0);
                }),
                (t.addSeats = function (t, e) {
                  t.addFieldOffset(1, e, 0);
                }),
                (t.addSections = function (t, e) {
                  t.addFieldOffset(2, e, 0);
                }),
                (t.endEvent = function (t) {
                  var e = t.endObject();
                  return t.requiredField(e, 4), t.requiredField(e, 6), t.requiredField(e, 8), e;
                }),
                (t.finishEventBuffer = function (t, e) {
                  t.finish(e);
                }),
                (t.createEvent = function (e, r, n, i) {
                  return t.startEvent(e), t.addPricing(e, r), t.addSeats(e, n), t.addSections(e, i), t.endEvent(e);
                }),
                t
              );
            })()),
            (s.Event = a),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsPricing = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.displayPriceIncludesFacilityFee = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (e.prototype.displayPriceIncludesServiceFeesAndTaxes = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (e.prototype.ticketLimit = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 50;
                          }),
                          (e.prototype.timestamp = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                          }),
                          (e.prototype.revision = function () {
                            var t = this.bb.__offset(this.bb_pos, 12);
                            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                          }),
                          (e.prototype.pricingVersion = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 14);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.currency = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 16);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.groups = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 18);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.Group()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.groupsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 18);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.offers = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 20);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.Offer()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.offersLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 20);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.priceKeys = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 22);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.PriceKeys()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.prices = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 24);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.Prices()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.startPricing = function (t) {
                            t.startObject(11);
                          }),
                          (e.addDisplayPriceIncludesFacilityFee = function (t, e) {
                            t.addFieldInt8(0, +e, 0);
                          }),
                          (e.addDisplayPriceIncludesServiceFeesAndTaxes = function (t, e) {
                            t.addFieldInt8(1, +e, 0);
                          }),
                          (e.addTicketLimit = function (t, e) {
                            t.addFieldInt32(2, e, 50);
                          }),
                          (e.addTimestamp = function (t, e) {
                            t.addFieldInt64(3, e, t.createLong(0, 0));
                          }),
                          (e.addRevision = function (t, e) {
                            t.addFieldInt64(4, e, t.createLong(0, 0));
                          }),
                          (e.addPricingVersion = function (t, e) {
                            t.addFieldOffset(5, e, 0);
                          }),
                          (e.addCurrency = function (t, e) {
                            t.addFieldOffset(6, e, 0);
                          }),
                          (e.addGroups = function (t, e) {
                            t.addFieldOffset(7, e, 0);
                          }),
                          (e.createGroupsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startGroupsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addOffers = function (t, e) {
                            t.addFieldOffset(8, e, 0);
                          }),
                          (e.createOffersVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startOffersVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addPriceKeys = function (t, e) {
                            t.addFieldOffset(9, e, 0);
                          }),
                          (e.addPrices = function (t, e) {
                            t.addFieldOffset(10, e, 0);
                          }),
                          (e.endPricing = function (t) {
                            var e = t.endObject();
                            return (
                              t.requiredField(e, 14),
                              t.requiredField(e, 16),
                              t.requiredField(e, 18),
                              t.requiredField(e, 20),
                              e
                            );
                          }),
                          (e.createPricing = function (t, r, n, i, o, s, a, u, c, f, l, p) {
                            return (
                              e.startPricing(t),
                              e.addDisplayPriceIncludesFacilityFee(t, r),
                              e.addDisplayPriceIncludesServiceFeesAndTaxes(t, n),
                              e.addTicketLimit(t, i),
                              e.addTimestamp(t, o),
                              e.addRevision(t, s),
                              e.addPricingVersion(t, a),
                              e.addCurrency(t, u),
                              e.addGroups(t, c),
                              e.addOffers(t, f),
                              e.addPriceKeys(t, l),
                              e.addPrices(t, p),
                              e.endPricing(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.Pricing = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsGroup = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.levelId = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.minRank = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.key = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.id = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 10);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.learnMoreInformationTitle = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 12);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.learnMoreInformationInstructionalText = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 14);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.startGroup = function (t) {
                            t.startObject(6);
                          }),
                          (t.addLevelId = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (t.addMinRank = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (t.addKey = function (t, e) {
                            t.addFieldInt32(2, e, 0);
                          }),
                          (t.addId = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (t.addLearnMoreInformationTitle = function (t, e) {
                            t.addFieldOffset(4, e, 0);
                          }),
                          (t.addLearnMoreInformationInstructionalText = function (t, e) {
                            t.addFieldOffset(5, e, 0);
                          }),
                          (t.endGroup = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 10), e;
                          }),
                          (t.createGroup = function (e, r, n, i, o, s, a) {
                            return (
                              t.startGroup(e),
                              t.addLevelId(e, r),
                              t.addMinRank(e, n),
                              t.addKey(e, i),
                              t.addId(e, o),
                              t.addLearnMoreInformationTitle(e, s),
                              t.addLearnMoreInformationInstructionalText(e, a),
                              t.endGroup(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.Group = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsGroupRef = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.groupIdx = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.startGroupRef = function (t) {
                            t.startObject(1);
                          }),
                          (t.addGroupIdx = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (t.endGroupRef = function (t) {
                            return t.endObject();
                          }),
                          (t.createGroupRef = function (e, r) {
                            return t.startGroupRef(e), t.addGroupIdx(e, r), t.endGroupRef(e);
                          }),
                          t
                        );
                      })();
                      t.GroupRef = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsOffer = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.isVariablePrice = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (e.prototype.passwordProtected = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (e.prototype.rank = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.key = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.id = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 12);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.name = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 14);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.description = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 16);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.infoText = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 18);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.infoUrl = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 20);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.linkText = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 22);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.cardTypes = function (t, e) {
                            var r = this.bb.__offset(this.bb_pos, 24);
                            return r ? this.bb.__string(this.bb.__vector(this.bb_pos + r) + 4 * t, e) : null;
                          }),
                          (e.prototype.cardTypesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 24);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.groupRef = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 26);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.GroupRef()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.limit = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 28);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.Limit()).__init(this.bb_pos + r, this.bb)
                              : null;
                          }),
                          (e.prototype.learnMoreInformation = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 30);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.LearnMoreInformation()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.enablement = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 32);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.Enablement()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.isSeatLevelPricing = function () {
                            var t = this.bb.__offset(this.bb_pos, 34);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (e.prototype.discountNumber = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 36);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.startOffer = function (t) {
                            t.startObject(17);
                          }),
                          (e.addIsVariablePrice = function (t, e) {
                            t.addFieldInt8(0, +e, 0);
                          }),
                          (e.addPasswordProtected = function (t, e) {
                            t.addFieldInt8(1, +e, 0);
                          }),
                          (e.addRank = function (t, e) {
                            t.addFieldInt32(2, e, 0);
                          }),
                          (e.addKey = function (t, e) {
                            t.addFieldInt32(3, e, 0);
                          }),
                          (e.addId = function (t, e) {
                            t.addFieldOffset(4, e, 0);
                          }),
                          (e.addName = function (t, e) {
                            t.addFieldOffset(5, e, 0);
                          }),
                          (e.addDescription = function (t, e) {
                            t.addFieldOffset(6, e, 0);
                          }),
                          (e.addInfoText = function (t, e) {
                            t.addFieldOffset(7, e, 0);
                          }),
                          (e.addInfoUrl = function (t, e) {
                            t.addFieldOffset(8, e, 0);
                          }),
                          (e.addLinkText = function (t, e) {
                            t.addFieldOffset(9, e, 0);
                          }),
                          (e.addCardTypes = function (t, e) {
                            t.addFieldOffset(10, e, 0);
                          }),
                          (e.createCardTypesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startCardTypesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addGroupRef = function (t, e) {
                            t.addFieldOffset(11, e, 0);
                          }),
                          (e.addLimit = function (t, e) {
                            t.addFieldStruct(12, e, 0);
                          }),
                          (e.addLearnMoreInformation = function (t, e) {
                            t.addFieldOffset(13, e, 0);
                          }),
                          (e.addEnablement = function (t, e) {
                            t.addFieldOffset(14, e, 0);
                          }),
                          (e.addIsSeatLevelPricing = function (t, e) {
                            t.addFieldInt8(15, +e, 0);
                          }),
                          (e.addDiscountNumber = function (t, e) {
                            t.addFieldOffset(16, e, 0);
                          }),
                          (e.endOffer = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 12), t.requiredField(e, 14), t.requiredField(e, 28), e;
                          }),
                          (e.createOffer = function (t, r, n, i, o, s, a, u, c, f, l, p, h, d, b, y, v, _) {
                            return (
                              e.startOffer(t),
                              e.addIsVariablePrice(t, r),
                              e.addPasswordProtected(t, n),
                              e.addRank(t, i),
                              e.addKey(t, o),
                              e.addId(t, s),
                              e.addName(t, a),
                              e.addDescription(t, u),
                              e.addInfoText(t, c),
                              e.addInfoUrl(t, f),
                              e.addLinkText(t, l),
                              e.addCardTypes(t, p),
                              e.addGroupRef(t, h),
                              e.addLimit(t, d),
                              e.addLearnMoreInformation(t, b),
                              e.addEnablement(t, y),
                              e.addIsSeatLevelPricing(t, v),
                              e.addDiscountNumber(t, _),
                              e.endOffer(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.Offer = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.prototype.exact = function () {
                            return this.bb.readInt32(this.bb_pos);
                          }),
                          (t.prototype.min = function () {
                            return this.bb.readInt32(this.bb_pos + 4);
                          }),
                          (t.prototype.max = function () {
                            return this.bb.readInt32(this.bb_pos + 8);
                          }),
                          (t.prototype.multiples = function () {
                            return this.bb.readInt32(this.bb_pos + 12);
                          }),
                          (t.createLimit = function (t, e, r, n, i) {
                            return (
                              t.prep(4, 16),
                              t.writeInt32(i),
                              t.writeInt32(n),
                              t.writeInt32(r),
                              t.writeInt32(e),
                              t.offset()
                            );
                          }),
                          t
                        );
                      })();
                      t.Limit = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsLearnMoreInformation = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.title = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.instructionalText = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.externalLinkLabel = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 8);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.prototype.externalLinkUrl = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 10);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (t.startLearnMoreInformation = function (t) {
                            t.startObject(4);
                          }),
                          (t.addTitle = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (t.addInstructionalText = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.addExternalLinkLabel = function (t, e) {
                            t.addFieldOffset(2, e, 0);
                          }),
                          (t.addExternalLinkUrl = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (t.endLearnMoreInformation = function (t) {
                            return t.endObject();
                          }),
                          (t.createLearnMoreInformation = function (e, r, n, i, o) {
                            return (
                              t.startLearnMoreInformation(e),
                              t.addTitle(e, r),
                              t.addInstructionalText(e, n),
                              t.addExternalLinkLabel(e, i),
                              t.addExternalLinkUrl(e, o),
                              t.endLearnMoreInformation(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.LearnMoreInformation = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsEnablement = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.active = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (t.prototype.qaEnabled = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return !!t && !!this.bb.readInt8(this.bb_pos + t);
                          }),
                          (t.startEnablement = function (t) {
                            t.startObject(2);
                          }),
                          (t.addActive = function (t, e) {
                            t.addFieldInt8(0, +e, 0);
                          }),
                          (t.addQaEnabled = function (t, e) {
                            t.addFieldInt8(1, +e, 0);
                          }),
                          (t.endEnablement = function (t) {
                            return t.endObject();
                          }),
                          (t.createEnablement = function (e, r, n) {
                            return t.startEnablement(e), t.addActive(e, r), t.addQaEnabled(e, n), t.endEnablement(e);
                          }),
                          t
                        );
                      })();
                      t.Enablement = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsPriceKeys = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.numPriceKeys = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.offerIdxs = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.offerIdxsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.offerIdxsArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.priceIds = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 8);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.priceIdsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.priceIdsArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.rawXPs = function (t, e) {
                            var r = this.bb.__offset(this.bb_pos, 10);
                            return r ? this.bb.__string(this.bb.__vector(this.bb_pos + r) + 4 * t, e) : null;
                          }),
                          (t.prototype.rawXPsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.numSeatLevelPriceKeys = function () {
                            var t = this.bb.__offset(this.bb_pos, 12);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.startPriceKeys = function (t) {
                            t.startObject(5);
                          }),
                          (t.addNumPriceKeys = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (t.addOfferIdxs = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.createOfferIdxsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startOfferIdxsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addPriceIds = function (t, e) {
                            t.addFieldOffset(2, e, 0);
                          }),
                          (t.createPriceIdsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startPriceIdsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addRawXPs = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (t.createRawXPsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (t.startRawXPsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addNumSeatLevelPriceKeys = function (t, e) {
                            t.addFieldInt32(4, e, 0);
                          }),
                          (t.endPriceKeys = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 6), t.requiredField(e, 8), t.requiredField(e, 10), e;
                          }),
                          (t.createPriceKeys = function (e, r, n, i, o, s) {
                            return (
                              t.startPriceKeys(e),
                              t.addNumPriceKeys(e, r),
                              t.addOfferIdxs(e, n),
                              t.addPriceIds(e, i),
                              t.addRawXPs(e, o),
                              t.addNumSeatLevelPriceKeys(e, s),
                              t.endPriceKeys(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.PriceKeys = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsPrices = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.numPrices = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.displayPrices = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.displayPricesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.displayPricesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.faceValues = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 8);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.faceValuesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.faceValuesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.facilityFees = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 10);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.facilityFeesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.facilityFeesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.serviceCharges = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 12);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.serviceChargesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 12);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.serviceChargesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 12);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.distanceCharges = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 14);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.distanceChargesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 14);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.distanceChargesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 14);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.faceValueTaxes = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 16);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.faceValueTaxesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 16);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.faceValueTaxesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 16);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.serviceChargeTaxes = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 18);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.serviceChargeTaxesLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 18);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.serviceChargeTaxesArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 18);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.serviceChargeTaxes2 = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 20);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.serviceChargeTaxes2Length = function () {
                            var t = this.bb.__offset(this.bb_pos, 20);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.serviceChargeTaxes2Array = function () {
                            var t = this.bb.__offset(this.bb_pos, 20);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.numSeatLevelPrices = function () {
                            var t = this.bb.__offset(this.bb_pos, 22);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.startPrices = function (t) {
                            t.startObject(10);
                          }),
                          (t.addNumPrices = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (t.addDisplayPrices = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.createDisplayPricesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startDisplayPricesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addFaceValues = function (t, e) {
                            t.addFieldOffset(2, e, 0);
                          }),
                          (t.createFaceValuesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startFaceValuesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addFacilityFees = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (t.createFacilityFeesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startFacilityFeesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addServiceCharges = function (t, e) {
                            t.addFieldOffset(4, e, 0);
                          }),
                          (t.createServiceChargesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startServiceChargesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addDistanceCharges = function (t, e) {
                            t.addFieldOffset(5, e, 0);
                          }),
                          (t.createDistanceChargesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startDistanceChargesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addFaceValueTaxes = function (t, e) {
                            t.addFieldOffset(6, e, 0);
                          }),
                          (t.createFaceValueTaxesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startFaceValueTaxesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addServiceChargeTaxes = function (t, e) {
                            t.addFieldOffset(7, e, 0);
                          }),
                          (t.createServiceChargeTaxesVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startServiceChargeTaxesVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addServiceChargeTaxes2 = function (t, e) {
                            t.addFieldOffset(8, e, 0);
                          }),
                          (t.createServiceChargeTaxes2Vector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startServiceChargeTaxes2Vector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.addNumSeatLevelPrices = function (t, e) {
                            t.addFieldInt32(9, e, 0);
                          }),
                          (t.endPrices = function (t) {
                            var e = t.endObject();
                            return (
                              t.requiredField(e, 6),
                              t.requiredField(e, 8),
                              t.requiredField(e, 10),
                              t.requiredField(e, 12),
                              t.requiredField(e, 14),
                              t.requiredField(e, 16),
                              t.requiredField(e, 18),
                              t.requiredField(e, 20),
                              e
                            );
                          }),
                          (t.createPrices = function (e, r, n, i, o, s, a, u, c, f, l) {
                            return (
                              t.startPrices(e),
                              t.addNumPrices(e, r),
                              t.addDisplayPrices(e, n),
                              t.addFaceValues(e, i),
                              t.addFacilityFees(e, o),
                              t.addServiceCharges(e, s),
                              t.addDistanceCharges(e, a),
                              t.addFaceValueTaxes(e, u),
                              t.addServiceChargeTaxes(e, c),
                              t.addServiceChargeTaxes2(e, f),
                              t.addNumSeatLevelPrices(e, l),
                              t.endPrices(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.Prices = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsSeats = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.numSeats = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.numGASeats = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.manifestTimestamp = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
                          }),
                          (e.prototype.manifestVersion = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 10);
                            return e ? this.bb.__string(this.bb_pos + e, t) : null;
                          }),
                          (e.prototype.priceKeySets = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 12);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.IntRoaringBitmapPair()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.priceKeySetsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 12);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.groupSets = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 14);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.IntRoaringBitmapPair()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.groupSetsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 14);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.seatLevelPriceKeySet = function (e) {
                            var r = this.bb.__offset(this.bb_pos, 16);
                            return r
                              ? (e || new t.ticketmaster.supermap.avsc.v1.SeatLevelPriceKeySet()).__init(
                                this.bb.__indirect(this.bb_pos + r),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.startSeats = function (t) {
                            t.startObject(7);
                          }),
                          (e.addNumSeats = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (e.addNumGASeats = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (e.addManifestTimestamp = function (t, e) {
                            t.addFieldInt64(2, e, t.createLong(0, 0));
                          }),
                          (e.addManifestVersion = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (e.addPriceKeySets = function (t, e) {
                            t.addFieldOffset(4, e, 0);
                          }),
                          (e.createPriceKeySetsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startPriceKeySetsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addGroupSets = function (t, e) {
                            t.addFieldOffset(5, e, 0);
                          }),
                          (e.createGroupSetsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startGroupSetsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addSeatLevelPriceKeySet = function (t, e) {
                            t.addFieldOffset(6, e, 0);
                          }),
                          (e.endSeats = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 10), t.requiredField(e, 12), t.requiredField(e, 14), e;
                          }),
                          (e.createSeats = function (t, r, n, i, o, s, a, u) {
                            return (
                              e.startSeats(t),
                              e.addNumSeats(t, r),
                              e.addNumGASeats(t, n),
                              e.addManifestTimestamp(t, i),
                              e.addManifestVersion(t, o),
                              e.addPriceKeySets(t, s),
                              e.addGroupSets(t, a),
                              e.addSeatLevelPriceKeySet(t, u),
                              e.endSeats(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.Seats = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsSeatLevelPriceKeySet = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.roaringBitmap = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 4);
                            return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
                          }),
                          (t.prototype.roaringBitmapLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.roaringBitmapArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t
                              ? new Uint8Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.prototype.keys = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0;
                          }),
                          (t.prototype.keysLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.keysArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t
                              ? new Int32Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.startSeatLevelPriceKeySet = function (t) {
                            t.startObject(2);
                          }),
                          (t.addRoaringBitmap = function (t, e) {
                            t.addFieldOffset(0, e, 0);
                          }),
                          (t.createRoaringBitmapVector = function (t, e) {
                            t.startVector(1, e.length, 1);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt8(e[r]);
                            return t.endVector();
                          }),
                          (t.startRoaringBitmapVector = function (t, e) {
                            t.startVector(1, e, 1);
                          }),
                          (t.addKeys = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.createKeysVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt32(e[r]);
                            return t.endVector();
                          }),
                          (t.startKeysVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (t.endSeatLevelPriceKeySet = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 4), t.requiredField(e, 6), e;
                          }),
                          (t.createSeatLevelPriceKeySet = function (e, r, n) {
                            return (
                              t.startSeatLevelPriceKeySet(e),
                              t.addRoaringBitmap(e, r),
                              t.addKeys(e, n),
                              t.endSeatLevelPriceKeySet(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.SeatLevelPriceKeySet = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (e) {
                !(function (e) {
                  !(function (e) {
                    !(function (e) {
                      var r = (function () {
                        function e() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (e.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (e.getRootAsSections = function (t, r) {
                            return (r || new e()).__init(t.readInt32(t.position()) + t.position(), t);
                          }),
                          (e.prototype.numSections = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.numGASections = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.priceKeySets = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 8);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.IntRoaringBitmapPair()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.priceKeySetsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 8);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.prototype.groupSets = function (e, r) {
                            var n = this.bb.__offset(this.bb_pos, 10);
                            return n
                              ? (r || new t.ticketmaster.supermap.avsc.v1.IntRoaringBitmapPair()).__init(
                                this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * e),
                                this.bb,
                              )
                              : null;
                          }),
                          (e.prototype.groupSetsLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 10);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (e.startSections = function (t) {
                            t.startObject(4);
                          }),
                          (e.addNumSections = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (e.addNumGASections = function (t, e) {
                            t.addFieldInt32(1, e, 0);
                          }),
                          (e.addPriceKeySets = function (t, e) {
                            t.addFieldOffset(2, e, 0);
                          }),
                          (e.createPriceKeySetsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startPriceKeySetsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.addGroupSets = function (t, e) {
                            t.addFieldOffset(3, e, 0);
                          }),
                          (e.createGroupSetsVector = function (t, e) {
                            t.startVector(4, e.length, 4);
                            for (var r = e.length - 1; r >= 0; r--) t.addOffset(e[r]);
                            return t.endVector();
                          }),
                          (e.startGroupSetsVector = function (t, e) {
                            t.startVector(4, e, 4);
                          }),
                          (e.endSections = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 8), t.requiredField(e, 10), e;
                          }),
                          (e.createSections = function (t, r, n, i, o) {
                            return (
                              e.startSections(t),
                              e.addNumSections(t, r),
                              e.addNumGASections(t, n),
                              e.addPriceKeySets(t, i),
                              e.addGroupSets(t, o),
                              e.endSections(t)
                            );
                          }),
                          e
                        );
                      })();
                      e.Sections = r;
                    })(e.v1 || (e.v1 = {}));
                  })(e.avsc || (e.avsc = {}));
                })(e.supermap || (e.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {})),
            (function (t) {
              !(function (t) {
                !(function (t) {
                  !(function (t) {
                    !(function (t) {
                      var e = (function () {
                        function t() {
                          (this.bb = null), (this.bb_pos = 0);
                        }

                        return (
                          (t.prototype.__init = function (t, e) {
                            return (this.bb_pos = t), (this.bb = e), this;
                          }),
                          (t.getRootAsIntRoaringBitmapPair = function (e, r) {
                            return (r || new t()).__init(e.readInt32(e.position()) + e.position(), e);
                          }),
                          (t.prototype.id = function () {
                            var t = this.bb.__offset(this.bb_pos, 4);
                            return t ? this.bb.readInt32(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.roaringBitmap = function (t) {
                            var e = this.bb.__offset(this.bb_pos, 6);
                            return e ? this.bb.readUint8(this.bb.__vector(this.bb_pos + e) + t) : 0;
                          }),
                          (t.prototype.roaringBitmapLength = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
                          }),
                          (t.prototype.roaringBitmapArray = function () {
                            var t = this.bb.__offset(this.bb_pos, 6);
                            return t
                              ? new Uint8Array(
                                this.bb.bytes().buffer,
                                this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t),
                                this.bb.__vector_len(this.bb_pos + t),
                              )
                              : null;
                          }),
                          (t.startIntRoaringBitmapPair = function (t) {
                            t.startObject(2);
                          }),
                          (t.addId = function (t, e) {
                            t.addFieldInt32(0, e, 0);
                          }),
                          (t.addRoaringBitmap = function (t, e) {
                            t.addFieldOffset(1, e, 0);
                          }),
                          (t.createRoaringBitmapVector = function (t, e) {
                            t.startVector(1, e.length, 1);
                            for (var r = e.length - 1; r >= 0; r--) t.addInt8(e[r]);
                            return t.endVector();
                          }),
                          (t.startRoaringBitmapVector = function (t, e) {
                            t.startVector(1, e, 1);
                          }),
                          (t.endIntRoaringBitmapPair = function (t) {
                            var e = t.endObject();
                            return t.requiredField(e, 6), e;
                          }),
                          (t.createIntRoaringBitmapPair = function (e, r, n) {
                            return (
                              t.startIntRoaringBitmapPair(e),
                              t.addId(e, r),
                              t.addRoaringBitmap(e, n),
                              t.endIntRoaringBitmapPair(e)
                            );
                          }),
                          t
                        );
                      })();
                      t.IntRoaringBitmapPair = e;
                    })(t.v1 || (t.v1 = {}));
                  })(t.avsc || (t.avsc = {}));
                })(t.supermap || (t.supermap = {}));
              })(t.ticketmaster || (t.ticketmaster = {}));
            })(e.com || (e.com = {}));
        },
        80: (t, e, r) => {
          'use strict';
          r(984).com;
          var n = r(588);
          (e.a8 = n.com), r(113).com;
          var i = r(686);
          e.qm = i.flatbuffers;
        },
        52: t => {
          var e,
            r =
              ((e = 'undefined' != typeof document && document.currentScript ? document.currentScript.src : void 0),
                function (t) {
                  var r, n, i;
                  (t = t || {}),
                    r || (r = void 0 !== t ? t : {}),
                    (r.ready = new Promise(function (t, e) {
                      (n = t), (i = e);
                    }));
                  var o,
                    s,
                    a,
                    u = {};
                  for (o in r) r.hasOwnProperty(o) && (u[o] = r[o]);
                  (s = 'object' == typeof window), (a = 'function' == typeof importScripts);
                  var c,
                    f = '';
                  (s || a) &&
                    (a ? (f = self.location.href) : document.currentScript && (f = document.currentScript.src),
                      e && (f = e),
                      (f = 0 !== f.indexOf('blob:') ? f.substr(0, f.lastIndexOf('/') + 1) : ''),
                      a &&
                      (c = function (t) {
                        var e = new XMLHttpRequest();
                        return (
                          e.open('GET', t, !1), (e.responseType = 'arraybuffer'), e.send(null), new Uint8Array(e.response)
                        );
                      }));
                  var l = r.printErr || console.warn.bind(console);
                  for (o in u) u.hasOwnProperty(o) && (r[o] = u[o]);
                  u = null;
                  var p,
                    h = {
                      'f64-rem': function (t, e) {
                        return t % e;
                      },
                      debugger: function () { },
                    },
                    d = 0;
                  r.wasmBinary && (p = r.wasmBinary),
                    r.noExitRuntime && r.noExitRuntime,
                    'object' != typeof WebAssembly && B('no native wasm support detected');
                  var b,
                    y,
                    v,
                    _,
                    m = new WebAssembly.Table({
                      initial: 0,
                      maximum: 0,
                      element: 'anyfunc',
                    }),
                    g = !1,
                    w = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;

                  function I(t) {
                    if (t) {
                      for (var e = v, r = t + NaN, n = t; e[n] && !(n >= r);) ++n;
                      if (16 < n - t && e.subarray && w) t = w.decode(e.subarray(t, n));
                      else {
                        for (r = ''; t < n;) {
                          var i = e[t++];
                          if (128 & i) {
                            var o = 63 & e[t++];
                            if (192 == (224 & i)) r += String.fromCharCode(((31 & i) << 6) | o);
                            else {
                              var s = 63 & e[t++];
                              65536 >
                                (i =
                                  224 == (240 & i)
                                    ? ((15 & i) << 12) | (o << 6) | s
                                    : ((7 & i) << 18) | (o << 12) | (s << 6) | (63 & e[t++]))
                                ? (r += String.fromCharCode(i))
                                : ((i -= 65536), (r += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i))));
                            }
                          } else r += String.fromCharCode(i);
                        }
                        t = r;
                      }
                    } else t = '';
                    return t;
                  }

                  function S(t) {
                    (y = t),
                      (r.HEAP8 = new Int8Array(t)),
                      (r.HEAP16 = new Int16Array(t)),
                      (r.HEAP32 = _ = new Int32Array(t)),
                      (r.HEAPU8 = v = new Uint8Array(t)),
                      (r.HEAPU16 = new Uint16Array(t)),
                      (r.HEAPU32 = new Uint32Array(t)),
                      (r.HEAPF32 = new Float32Array(t)),
                      (r.HEAPF64 = new Float64Array(t));
                  }

                  var E = r.INITIAL_MEMORY || 16777216;

                  function O(t) {
                    for (; 0 < t.length;) {
                      var e = t.shift();
                      if ('function' == typeof e) e(r);
                      else {
                        var n = e.V;
                        'number' == typeof n
                          ? void 0 === e.U
                            ? r.dynCall_v(n)
                            : r.dynCall_vi(n, e.U)
                          : n(void 0 === e.U ? null : e.U);
                      }
                    }
                  }

                  (b = globalT = r.wasmMemory
                    ? r.wasmMemory
                    : new WebAssembly.Memory({
                      initial: E / 65536,
                      maximum: 32768,
                    })) && (y = b.buffer),
                    (E = y.byteLength),
                    S(y),
                    (_[1e3] = 5247088);
                  var T = [],
                    k = [],
                    A = [],
                    R = [];

                  function F() {
                    var t = r.preRun.shift();
                    T.unshift(t);
                  }

                  var x = Math.clz32,
                    P = 0,
                    C = null,
                    V = null;

                  function B(t) {
                    throw (
                      (r.onAbort && r.onAbort(t),
                        l(t),
                        (g = !0),
                        (t = new WebAssembly.RuntimeError('abort(' + t + '). Build with -s ASSERTIONS=1 for more info.')),
                        i(t),
                        t)
                    );
                  }

                  function N() {
                    var t = L;
                    return String.prototype.startsWith
                      ? t.startsWith('data:application/octet-stream;base64,')
                      : 0 === t.indexOf('data:application/octet-stream;base64,');
                  }

                  (r.preloadedImages = {}), (r.preloadedAudios = {});
                  var L = 'roaring-wasm-module.wasm';
                  if (!N()) {
                    var j = L;
                    L = r.locateFile ? r.locateFile(j, f) : f + j;
                  }

                  function M() {
                    try {
                      if (p) return new Uint8Array(p);
                      if (c) return c(L);
                      throw 'both async and sync fetching of the wasm failed';
                    } catch (t) {
                      B(t);
                    }
                  }

                  function Q() {
                    return v.length;
                  }

                  function q(t) {
                    return 0 | ((t |= 0) ? (31 - (0 | x(t ^ (t - 1)))) | 0 : 32);
                  }

                  r.asm = function () {
                    function t(t) {
                      (r.asm = t.exports),
                        P--,
                        r.monitorRunDependencies && r.monitorRunDependencies(P),
                        0 == P && (null !== C && (clearInterval(C), (C = null)), V && ((t = V), (V = null), t()));
                    }

                    function e(e) {
                      t(e.instance);
                    }

                    function n(t) {
                      return (
                        p || (!s && !a) || 'function' != typeof fetch
                          ? new Promise(function (t) {
                            t(M());
                          })
                          : fetch(L, {
                            credentials: 'same-origin',
                          })
                            .then(function (t) {
                              if (!t.ok) throw "failed to load wasm binary file at '" + L + "'";
                              return t.arrayBuffer();
                            })
                            .catch(function () {
                              return M();
                            })
                      )
                        .then(function (t) {
                          return WebAssembly.instantiate(t, i);
                        })
                        .then(t, function (t) {
                          l('failed to asynchronously prepare wasm: ' + t), B(t);
                        });
                    }

                    var i = {
                      env: U,
                      wasi_snapshot_preview1: U,
                      global: {
                        NaN: NaN,
                        Infinity: 1 / 0,
                      },
                      'global.Math': Math,
                      asm2wasm: h,
                    };
                    if ((P++, r.monitorRunDependencies && r.monitorRunDependencies(P), r.instantiateWasm))
                      try {
                        return r.instantiateWasm(i, t);
                      } catch (t) {
                        return l('Module.instantiateWasm callback failed with error: ' + t), !1;
                      }
                    return (
                      (function () {
                        if (
                          p ||
                          'function' != typeof WebAssembly.instantiateStreaming ||
                          N() ||
                          'function' != typeof fetch
                        )
                          return n(e);
                        fetch(L, {
                          credentials: 'same-origin',
                        }).then(function (t) {
                          return WebAssembly.instantiateStreaming(t, i).then(e, function (t) {
                            return (
                              l('wasm streaming compile failed: ' + t),
                              l('falling back to ArrayBuffer instantiation'),
                              n(e)
                            );
                          });
                        });
                      })(),
                      {}
                    );
                  };
                  var D,
                    U = {
                      b: function (t, e, r, n) {
                        B(
                          'Assertion failed: ' +
                          I(t) +
                          ', at: ' +
                          [e ? I(e) : 'unknown filename', r, n ? I(n) : 'unknown function'],
                        );
                      },
                      __memory_base: 1024,
                      __table_base: 0,
                      f: Q,
                      g: function (t, e, r) {
                        v.copyWithin(t, e, e + r);
                      },
                      e: function (t) {
                        t >>>= 0;
                        var e = Q();
                        if (2147483648 < t) return !1;
                        for (var r = 1; 4 >= r; r *= 2) {
                          var n = e * (1 + 0.2 / r);
                          (n = Math.min(n, t + 100663296)),
                            0 < (n = Math.max(16777216, t, n)) % 65536 && (n += 65536 - (n % 65536));
                          t: {
                            try {
                              b.grow((Math.min(2147483648, n) - y.byteLength + 65535) >>> 16), S(b.buffer);
                              var i = 1;
                              break t;
                            } catch (t) { }
                            i = void 0;
                          }
                          if (i) return !0;
                        }
                        return !1;
                      },
                      d: function (t, e) {
                        return 32 == (t = q(t)) && (t += q(e)), (d = 0), 0 | t;
                      },
                      a: function () {
                        return d;
                      },
                      memory: b,
                      c: function (t) {
                        d = t;
                      },
                      table: m,
                    };

                  function G() {
                    function t() {
                      if (!D && ((D = !0), (r.calledRun = !0), !g)) {
                        if ((O(k), O(A), n(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), r.postRun))
                          for ('function' == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) {
                            var t = r.postRun.shift();
                            R.unshift(t);
                          }
                        O(R);
                      }
                    }

                    if (!(0 < P)) {
                      if (r.preRun) for ('function' == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) F();
                      O(T),
                        0 < P ||
                        (r.setStatus
                          ? (r.setStatus('Running...'),
                            setTimeout(function () {
                              setTimeout(function () {
                                r.setStatus('');
                              }, 1),
                                t();
                            }, 1))
                          : t());
                    }
                  }

                  if (
                    (r.asm({}, U, y),
                      (r._free = function () {
                        return (r._free = r.asm.h).apply(null, arguments); // 5(5247168):undefined
                      }),
                      (r._get_sizeof_roaring_bitmap_t = function () {
                        return (r._get_sizeof_roaring_bitmap_t = r.asm.i).apply(null, arguments); // 1(0):24
                      }),
                      (r._malloc = function () {
                        return (r._malloc = r.asm.j).apply(null, arguments); // 3(131):5247168
                      }),
                      (r._roaring_bitmap_add = function () {
                        return (r._roaring_bitmap_add = r.asm.k).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_add_checked_js = function () {
                        return (r._roaring_bitmap_add_checked_js = r.asm.l).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_add_many = function () {
                        return (r._roaring_bitmap_add_many = r.asm.m).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_and_cardinality = function () {
                        return (r._roaring_bitmap_and_cardinality = r.asm.n).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_and_inplace = function () {
                        return (r._roaring_bitmap_and_inplace = r.asm.o).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_andnot_cardinality = function () {
                        return (r._roaring_bitmap_andnot_cardinality = r.asm.p).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_andnot_inplace = function () {
                        return (r._roaring_bitmap_andnot_inplace = r.asm.q).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_contains = function () {
                        return (r._roaring_bitmap_contains = r.asm.r).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_create_js = function () {
                        return (r._roaring_bitmap_create_js = r.asm.s).apply(null, arguments); // 2(0):5247096
                      }),
                      (r._roaring_bitmap_equals = function () {
                        return (r._roaring_bitmap_equals = r.asm.t).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_flip_inplace = function () {
                        return (r._roaring_bitmap_flip_inplace = r.asm.u).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_free = function () {
                        return (r._roaring_bitmap_free = r.asm.v).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_get_cardinality = function () {
                        return (r._roaring_bitmap_get_cardinality = r.asm.w).apply(null, arguments); // 6(5247096):202
                      }),
                      (r._roaring_bitmap_intersect = function () {
                        return (r._roaring_bitmap_intersect = r.asm.x).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_is_empty = function () {
                        return (r._roaring_bitmap_is_empty = r.asm.y).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_is_strict_subset = function () {
                        return (r._roaring_bitmap_is_strict_subset = r.asm.z).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_is_subset = function () {
                        return (r._roaring_bitmap_is_subset = r.asm.A).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_jaccard_index = function () {
                        return (r._roaring_bitmap_jaccard_index = r.asm.B).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_maximum = function () {
                        return (r._roaring_bitmap_maximum = r.asm.C).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_minimum = function () {
                        return (r._roaring_bitmap_minimum = r.asm.D).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_native_deserialize_js = function () {
                        return (r._roaring_bitmap_native_deserialize_js = r.asm.E).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_native_serialize_js = function () {
                        return (r._roaring_bitmap_native_serialize_js = r.asm.F).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_native_size_in_bytes_js = function () {
                        return (r._roaring_bitmap_native_size_in_bytes_js = r.asm.G).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_optimize_js = function () {
                        return (r._roaring_bitmap_optimize_js = r.asm.H).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_or_cardinality = function () {
                        return (r._roaring_bitmap_or_cardinality = r.asm.I).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_or_inplace = function () {
                        return (r._roaring_bitmap_or_inplace = r.asm.J).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_portable_deserialize_js = function () {
                        return (r._roaring_bitmap_portable_deserialize_js = r.asm.K).apply(null, arguments); // 4(5247096, 5247168, 131):0
                      }),
                      (r._roaring_bitmap_portable_serialize_js = function () {
                        return (r._roaring_bitmap_portable_serialize_js = r.asm.L).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_portable_size_in_bytes = function () {
                        return (r._roaring_bitmap_portable_size_in_bytes = r.asm.M).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_rank = function () {
                        return (r._roaring_bitmap_rank = r.asm.N).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_remove = function () {
                        return (r._roaring_bitmap_remove = r.asm.O).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_remove_checked_js = function () {
                        return (r._roaring_bitmap_remove_checked_js = r.asm.P).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_select_js = function () {
                        return (r._roaring_bitmap_select_js = r.asm.Q).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_to_uint32_array = function () {
                        return (r._roaring_bitmap_to_uint32_array = r.asm.R).apply(null, arguments); // 7(5247096, 5247464):undefined
                      }),
                      (r._roaring_bitmap_xor_cardinality = function () {
                        return (r._roaring_bitmap_xor_cardinality = r.asm.S).apply(null, arguments);
                      }),
                      (r._roaring_bitmap_xor_inplace = function () {
                        return (r._roaring_bitmap_xor_inplace = r.asm.T).apply(null, arguments);
                      }),
                      (V = function t() {
                        D || G(), D || (V = t);
                      }),
                      (r.run = G),
                      r.preInit)
                  )
                    for ('function' == typeof r.preInit && (r.preInit = [r.preInit]); 0 < r.preInit.length;)
                      r.preInit.pop()();
                  return G(), t.ready;
                });
          t.exports = r;
        },
        10: t => {
          function e(t) {
            (t = t || {}),
              (this.ms = t.min || 100),
              (this.max = t.max || 1e4),
              (this.factor = t.factor || 2),
              (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
              (this.attempts = 0);
          }

          (t.exports = e),
            (e.prototype.duration = function () {
              var t = this.ms * Math.pow(this.factor, this.attempts++);
              if (this.jitter) {
                var e = Math.random(),
                  r = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - r : t + r;
              }
              return 0 | Math.min(t, this.max);
            }),
            (e.prototype.reset = function () {
              this.attempts = 0;
            }),
            (e.prototype.setMin = function (t) {
              this.ms = t;
            }),
            (e.prototype.setMax = function (t) {
              this.max = t;
            }),
            (e.prototype.setJitter = function (t) {
              this.jitter = t;
            });
        },
        742: (t, e) => {
          'use strict';
          (e.byteLength = function (t) {
            var e = u(t),
              r = e[0],
              n = e[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (e.toByteArray = function (t) {
              var e,
                r,
                o = u(t),
                s = o[0],
                a = o[1],
                c = new i(
                  (function (t, e, r) {
                    return (3 * (e + r)) / 4 - r;
                  })(0, s, a),
                ),
                f = 0,
                l = a > 0 ? s - 4 : s;
              for (r = 0; r < l; r += 4)
                (e =
                  (n[t.charCodeAt(r)] << 18) |
                  (n[t.charCodeAt(r + 1)] << 12) |
                  (n[t.charCodeAt(r + 2)] << 6) |
                  n[t.charCodeAt(r + 3)]),
                  (c[f++] = (e >> 16) & 255),
                  (c[f++] = (e >> 8) & 255),
                  (c[f++] = 255 & e);
              return (
                2 === a && ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (c[f++] = 255 & e)),
                1 === a &&
                ((e = (n[t.charCodeAt(r)] << 10) | (n[t.charCodeAt(r + 1)] << 4) | (n[t.charCodeAt(r + 2)] >> 2)),
                  (c[f++] = (e >> 8) & 255),
                  (c[f++] = 255 & e)),
                c
              );
            }),
            (e.fromByteArray = function (t) {
              for (var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, u = n - i; a < u; a += s)
                o.push(c(t, a, a + s > u ? u : a + s));
              return (
                1 === i
                  ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + '=='))
                  : 2 === i &&
                  ((e = (t[n - 2] << 8) + t[n - 1]), o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + '=')),
                o.join('')
              );
            });
          for (
            var r = [],
            n = [],
            i = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
            o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            s = 0,
            a = o.length;
            s < a;
            ++s
          )
            (r[s] = o[s]), (n[o.charCodeAt(s)] = s);

          function u(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
            var r = t.indexOf('=');
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
          }

          function c(t, e, n) {
            for (var i, o, s = [], a = e; a < n; a += 3)
              (i = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])),
                s.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
            return s.join('');
          }

          (n['-'.charCodeAt(0)] = 62), (n['_'.charCodeAt(0)] = 63);
        },
        764: (t, e, r) => {
          'use strict';
          const n = r(742),
            i = r(645),
            o =
              'function' == typeof Symbol && 'function' == typeof Symbol.for
                ? Symbol.for('nodejs.util.inspect.custom')
                : null;
          (e.lW = u), (e.h2 = 50);
          const s = 2147483647;

          function a(t) {
            if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
            const e = new Uint8Array(t);
            return Object.setPrototypeOf(e, u.prototype), e;
          }

          function u(t, e, r) {
            if ('number' == typeof t) {
              if ('string' == typeof e)
                throw new TypeError('The "string" argument must be of type string. Received type number');
              return l(t);
            }
            return c(t, e, r);
          }

          function c(t, e, r) {
            if ('string' == typeof t)
              return (function (t, e) {
                if ((('string' == typeof e && '' !== e) || (e = 'utf8'), !u.isEncoding(e)))
                  throw new TypeError('Unknown encoding: ' + e);
                const r = 0 | b(t, e);
                let n = a(r);
                const i = n.write(t, e);
                return i !== r && (n = n.slice(0, i)), n;
              })(t, e);
            if (ArrayBuffer.isView(t))
              return (function (t) {
                if (H(t, Uint8Array)) {
                  const e = new Uint8Array(t);
                  return h(e.buffer, e.byteOffset, e.byteLength);
                }
                return p(t);
              })(t);
            if (null == t)
              throw new TypeError(
                'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
                typeof t,
              );
            if (H(t, ArrayBuffer) || (t && H(t.buffer, ArrayBuffer))) return h(t, e, r);
            if (
              'undefined' != typeof SharedArrayBuffer &&
              (H(t, SharedArrayBuffer) || (t && H(t.buffer, SharedArrayBuffer)))
            )
              return h(t, e, r);
            if ('number' == typeof t)
              throw new TypeError('The "value" argument must not be of type number. Received type number');
            const n = t.valueOf && t.valueOf();
            if (null != n && n !== t) return u.from(n, e, r);
            const i = (function (t) {
              if (u.isBuffer(t)) {
                const e = 0 | d(t.length),
                  r = a(e);
                return 0 === r.length || t.copy(r, 0, 0, e), r;
              }
              return void 0 !== t.length
                ? 'number' != typeof t.length || Y(t.length)
                  ? a(0)
                  : p(t)
                : 'Buffer' === t.type && Array.isArray(t.data)
                  ? p(t.data)
                  : void 0;
            })(t);
            if (i) return i;
            if (
              'undefined' != typeof Symbol &&
              null != Symbol.toPrimitive &&
              'function' == typeof t[Symbol.toPrimitive]
            )
              return u.from(t[Symbol.toPrimitive]('string'), e, r);
            throw new TypeError(
              'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof t,
            );
          }

          function f(t) {
            if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
            if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
          }

          function l(t) {
            return f(t), a(t < 0 ? 0 : 0 | d(t));
          }

          function p(t) {
            const e = t.length < 0 ? 0 : 0 | d(t.length),
              r = a(e);
            for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
            return r;
          }

          function h(t, e, r) {
            if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
            if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return (
              (n =
                void 0 === e && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                    ? new Uint8Array(t, e)
                    : new Uint8Array(t, e, r)),
              Object.setPrototypeOf(n, u.prototype),
              n
            );
          }

          function d(t) {
            if (t >= s)
              throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' + s.toString(16) + ' bytes',
              );
            return 0 | t;
          }

          function b(t, e) {
            if (u.isBuffer(t)) return t.length;
            if (ArrayBuffer.isView(t) || H(t, ArrayBuffer)) return t.byteLength;
            if ('string' != typeof t)
              throw new TypeError(
                'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t,
              );
            const r = t.length,
              n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            let i = !1;
            for (; ;)
              switch (e) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                  return r;
                case 'utf8':
                case 'utf-8':
                  return K(t).length;
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 2 * r;
                case 'hex':
                  return r >>> 1;
                case 'base64':
                  return $(t).length;
                default:
                  if (i) return n ? -1 : K(t).length;
                  (e = ('' + e).toLowerCase()), (i = !0);
              }
          }

          function y(t, e, r) {
            let n = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
            if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return '';
            if ((r >>>= 0) <= (e >>>= 0)) return '';
            for (t || (t = 'utf8'); ;)
              switch (t) {
                case 'hex':
                  return F(this, e, r);
                case 'utf8':
                case 'utf-8':
                  return T(this, e, r);
                case 'ascii':
                  return A(this, e, r);
                case 'latin1':
                case 'binary':
                  return R(this, e, r);
                case 'base64':
                  return O(this, e, r);
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return x(this, e, r);
                default:
                  if (n) throw new TypeError('Unknown encoding: ' + t);
                  (t = (t + '').toLowerCase()), (n = !0);
              }
          }

          function v(t, e, r) {
            const n = t[e];
            (t[e] = t[r]), (t[r] = n);
          }

          function _(t, e, r, n, i) {
            if (0 === t.length) return -1;
            if (
              ('string' == typeof r
                ? ((n = r), (r = 0))
                : r > 2147483647
                  ? (r = 2147483647)
                  : r < -2147483648 && (r = -2147483648),
                Y((r = +r)) && (r = i ? 0 : t.length - 1),
                r < 0 && (r = t.length + r),
                r >= t.length)
            ) {
              if (i) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!i) return -1;
              r = 0;
            }
            if (('string' == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
              return 0 === e.length ? -1 : m(t, e, r, n, i);
            if ('number' == typeof e)
              return (
                (e &= 255),
                'function' == typeof Uint8Array.prototype.indexOf
                  ? i
                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                    : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                  : m(t, [e], r, n, i)
              );
            throw new TypeError('val must be string, number or Buffer');
          }

          function m(t, e, r, n, i) {
            let o,
              s = 1,
              a = t.length,
              u = e.length;
            if (
              void 0 !== n &&
              ('ucs2' === (n = String(n).toLowerCase()) || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              (s = 2), (a /= 2), (u /= 2), (r /= 2);
            }

            function c(t, e) {
              return 1 === s ? t[e] : t.readUInt16BE(e * s);
            }

            if (i) {
              let n = -1;
              for (o = r; o < a; o++)
                if (c(t, o) === c(e, -1 === n ? 0 : o - n)) {
                  if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
                } else -1 !== n && (o -= o - n), (n = -1);
            } else
              for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                let r = !0;
                for (let n = 0; n < u; n++)
                  if (c(t, o + n) !== c(e, n)) {
                    r = !1;
                    break;
                  }
                if (r) return o;
              }
            return -1;
          }

          function g(t, e, r, n) {
            r = Number(r) || 0;
            const i = t.length - r;
            n ? (n = Number(n)) > i && (n = i) : (n = i);
            const o = e.length;
            let s;
            for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
              const n = parseInt(e.substr(2 * s, 2), 16);
              if (Y(n)) return s;
              t[r + s] = n;
            }
            return s;
          }

          function w(t, e, r, n) {
            return W(K(e, t.length - r), t, r, n);
          }

          function I(t, e, r, n) {
            return W(
              (function (t) {
                const e = [];
                for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e;
              })(e),
              t,
              r,
              n,
            );
          }

          function S(t, e, r, n) {
            return W($(e), t, r, n);
          }

          function E(t, e, r, n) {
            return W(
              (function (t, e) {
                let r, n, i;
                const o = [];
                for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
                  (r = t.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
                return o;
              })(e, t.length - r),
              t,
              r,
              n,
            );
          }

          function O(t, e, r) {
            return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
          }

          function T(t, e, r) {
            r = Math.min(t.length, r);
            const n = [];
            let i = e;
            for (; i < r;) {
              const e = t[i];
              let o = null,
                s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
              if (i + s <= r) {
                let r, n, a, u;
                switch (s) {
                  case 1:
                    e < 128 && (o = e);
                    break;
                  case 2:
                    (r = t[i + 1]), 128 == (192 & r) && ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (o = u));
                    break;
                  case 3:
                    (r = t[i + 1]),
                      (n = t[i + 2]),
                      128 == (192 & r) &&
                      128 == (192 & n) &&
                      ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                        u > 2047 && (u < 55296 || u > 57343) && (o = u));
                    break;
                  case 4:
                    (r = t[i + 1]),
                      (n = t[i + 2]),
                      (a = t[i + 3]),
                      128 == (192 & r) &&
                      128 == (192 & n) &&
                      128 == (192 & a) &&
                      ((u = ((15 & e) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & a)),
                        u > 65535 && u < 1114112 && (o = u));
                }
              }
              null === o
                ? ((o = 65533), (s = 1))
                : o > 65535 && ((o -= 65536), n.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))),
                n.push(o),
                (i += s);
            }
            return (function (t) {
              const e = t.length;
              if (e <= k) return String.fromCharCode.apply(String, t);
              let r = '',
                n = 0;
              for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, (n += k)));
              return r;
            })(n);
          }

          (u.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const t = new Uint8Array(1),
                e = {
                  foo: function () {
                    return 42;
                  },
                };
              return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
            } catch (t) {
              return !1;
            }
          })()),
            u.TYPED_ARRAY_SUPPORT ||
            'undefined' == typeof console ||
            'function' != typeof console.error ||
            console.error(
              'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
            ),
            Object.defineProperty(u.prototype, 'parent', {
              enumerable: !0,
              get: function () {
                if (u.isBuffer(this)) return this.buffer;
              },
            }),
            Object.defineProperty(u.prototype, 'offset', {
              enumerable: !0,
              get: function () {
                if (u.isBuffer(this)) return this.byteOffset;
              },
            }),
            (u.poolSize = 8192),
            (u.from = function (t, e, r) {
              return c(t, e, r);
            }),
            Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(u, Uint8Array),
            (u.alloc = function (t, e, r) {
              return (function (t, e, r) {
                return (
                  f(t), t <= 0 ? a(t) : void 0 !== e ? ('string' == typeof r ? a(t).fill(e, r) : a(t).fill(e)) : a(t)
                );
              })(t, e, r);
            }),
            (u.allocUnsafe = function (t) {
              return l(t);
            }),
            (u.allocUnsafeSlow = function (t) {
              return l(t);
            }),
            (u.isBuffer = function (t) {
              return null != t && !0 === t._isBuffer && t !== u.prototype;
            }),
            (u.compare = function (t, e) {
              if (
                (H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
                  H(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
                  !u.isBuffer(t) || !u.isBuffer(e))
              )
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (t === e) return 0;
              let r = t.length,
                n = e.length;
              for (let i = 0, o = Math.min(r, n); i < o; ++i)
                if (t[i] !== e[i]) {
                  (r = t[i]), (n = e[i]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (u.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return !0;
                default:
                  return !1;
              }
            }),
            (u.concat = function (t, e) {
              if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === t.length) return u.alloc(0);
              let r;
              if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
              const n = u.allocUnsafe(e);
              let i = 0;
              for (r = 0; r < t.length; ++r) {
                let e = t[r];
                if (H(e, Uint8Array))
                  i + e.length > n.length
                    ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, i))
                    : Uint8Array.prototype.set.call(n, e, i);
                else {
                  if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                  e.copy(n, i);
                }
                i += e.length;
              }
              return n;
            }),
            (u.byteLength = b),
            (u.prototype._isBuffer = !0),
            (u.prototype.swap16 = function () {
              const t = this.length;
              if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
              for (let e = 0; e < t; e += 2) v(this, e, e + 1);
              return this;
            }),
            (u.prototype.swap32 = function () {
              const t = this.length;
              if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
              for (let e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
              return this;
            }),
            (u.prototype.swap64 = function () {
              const t = this.length;
              if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
              for (let e = 0; e < t; e += 8)
                v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
              return this;
            }),
            (u.prototype.toString = function () {
              const t = this.length;
              return 0 === t ? '' : 0 === arguments.length ? T(this, 0, t) : y.apply(this, arguments);
            }),
            (u.prototype.toLocaleString = u.prototype.toString),
            (u.prototype.equals = function (t) {
              if (!u.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
              return this === t || 0 === u.compare(this, t);
            }),
            (u.prototype.inspect = function () {
              let t = '';
              const r = e.h2;
              return (
                (t = this.toString('hex', 0, r)
                  .replace(/(.{2})/g, '$1 ')
                  .trim()),
                this.length > r && (t += ' ... '),
                '<Buffer ' + t + '>'
              );
            }),
            o && (u.prototype[o] = u.prototype.inspect),
            (u.prototype.compare = function (t, e, r, n, i) {
              if ((H(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)))
                throw new TypeError(
                  'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t,
                );
              if (
                (void 0 === e && (e = 0),
                  void 0 === r && (r = t ? t.length : 0),
                  void 0 === n && (n = 0),
                  void 0 === i && (i = this.length),
                  e < 0 || r > t.length || n < 0 || i > this.length)
              )
                throw new RangeError('out of range index');
              if (n >= i && e >= r) return 0;
              if (n >= i) return -1;
              if (e >= r) return 1;
              if (this === t) return 0;
              let o = (i >>>= 0) - (n >>>= 0),
                s = (r >>>= 0) - (e >>>= 0);
              const a = Math.min(o, s),
                c = this.slice(n, i),
                f = t.slice(e, r);
              for (let t = 0; t < a; ++t)
                if (c[t] !== f[t]) {
                  (o = c[t]), (s = f[t]);
                  break;
                }
              return o < s ? -1 : s < o ? 1 : 0;
            }),
            (u.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (u.prototype.indexOf = function (t, e, r) {
              return _(this, t, e, r, !0);
            }),
            (u.prototype.lastIndexOf = function (t, e, r) {
              return _(this, t, e, r, !1);
            }),
            (u.prototype.write = function (t, e, r, n) {
              if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0);
              else if (void 0 === r && 'string' == typeof e) (n = e), (r = this.length), (e = 0);
              else {
                if (!isFinite(e))
                  throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0));
              }
              const i = this.length - e;
              if (((void 0 === r || r > i) && (r = i), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
                throw new RangeError('Attempt to write outside buffer bounds');
              n || (n = 'utf8');
              let o = !1;
              for (; ;)
                switch (n) {
                  case 'hex':
                    return g(this, t, e, r);
                  case 'utf8':
                  case 'utf-8':
                    return w(this, t, e, r);
                  case 'ascii':
                  case 'latin1':
                  case 'binary':
                    return I(this, t, e, r);
                  case 'base64':
                    return S(this, t, e, r);
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return E(this, t, e, r);
                  default:
                    if (o) throw new TypeError('Unknown encoding: ' + n);
                    (n = ('' + n).toLowerCase()), (o = !0);
                }
            }),
            (u.prototype.toJSON = function () {
              return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            });
          const k = 4096;

          function A(t, e, r) {
            let n = '';
            r = Math.min(t.length, r);
            for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
            return n;
          }

          function R(t, e, r) {
            let n = '';
            r = Math.min(t.length, r);
            for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
            return n;
          }

          function F(t, e, r) {
            const n = t.length;
            (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
            let i = '';
            for (let n = e; n < r; ++n) i += J[t[n]];
            return i;
          }

          function x(t, e, r) {
            const n = t.slice(e, r);
            let i = '';
            for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
            return i;
          }

          function P(t, e, r) {
            if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
            if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
          }

          function C(t, e, r, n, i, o) {
            if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
            if (r + n > t.length) throw new RangeError('Index out of range');
          }

          function V(t, e, r, n, i) {
            D(e, n, i, t, r, 7);
            let o = Number(e & BigInt(4294967295));
            (t[r++] = o), (o >>= 8), (t[r++] = o), (o >>= 8), (t[r++] = o), (o >>= 8), (t[r++] = o);
            let s = Number((e >> BigInt(32)) & BigInt(4294967295));
            return (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), r;
          }

          function B(t, e, r, n, i) {
            D(e, n, i, t, r, 7);
            let o = Number(e & BigInt(4294967295));
            (t[r + 7] = o), (o >>= 8), (t[r + 6] = o), (o >>= 8), (t[r + 5] = o), (o >>= 8), (t[r + 4] = o);
            let s = Number((e >> BigInt(32)) & BigInt(4294967295));
            return (t[r + 3] = s), (s >>= 8), (t[r + 2] = s), (s >>= 8), (t[r + 1] = s), (s >>= 8), (t[r] = s), r + 8;
          }

          function N(t, e, r, n, i, o) {
            if (r + n > t.length) throw new RangeError('Index out of range');
            if (r < 0) throw new RangeError('Index out of range');
          }

          function L(t, e, r, n, o) {
            return (e = +e), (r >>>= 0), o || N(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
          }

          function j(t, e, r, n, o) {
            return (e = +e), (r >>>= 0), o || N(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
          }

          (u.prototype.slice = function (t, e) {
            const r = this.length;
            (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
              (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
              e < t && (e = t);
            const n = this.subarray(t, e);
            return Object.setPrototypeOf(n, u.prototype), n;
          }),
            (u.prototype.readUintLE = u.prototype.readUIntLE =
              function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
                let n = this[t],
                  i = 1,
                  o = 0;
                for (; ++o < e && (i *= 256);) n += this[t + o] * i;
                return n;
              }),
            (u.prototype.readUintBE = u.prototype.readUIntBE =
              function (t, e, r) {
                (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
                let n = this[t + --e],
                  i = 1;
                for (; e > 0 && (i *= 256);) n += this[t + --e] * i;
                return n;
              }),
            (u.prototype.readUint8 = u.prototype.readUInt8 =
              function (t, e) {
                return (t >>>= 0), e || P(t, 1, this.length), this[t];
              }),
            (u.prototype.readUint16LE = u.prototype.readUInt16LE =
              function (t, e) {
                return (t >>>= 0), e || P(t, 2, this.length), this[t] | (this[t + 1] << 8);
              }),
            (u.prototype.readUint16BE = u.prototype.readUInt16BE =
              function (t, e) {
                return (t >>>= 0), e || P(t, 2, this.length), (this[t] << 8) | this[t + 1];
              }),
            (u.prototype.readUint32LE = u.prototype.readUInt32LE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || P(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
                );
              }),
            (u.prototype.readUint32BE = u.prototype.readUInt32BE =
              function (t, e) {
                return (
                  (t >>>= 0),
                  e || P(t, 4, this.length),
                  16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
            (u.prototype.readBigUInt64LE = Z(function (t) {
              U((t >>>= 0), 'offset');
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
              return BigInt(n) + (BigInt(i) << BigInt(32));
            })),
            (u.prototype.readBigUInt64BE = Z(function (t) {
              U((t >>>= 0), 'offset');
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
              return (BigInt(n) << BigInt(32)) + BigInt(i);
            })),
            (u.prototype.readIntLE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
              let n = this[t],
                i = 1,
                o = 0;
              for (; ++o < e && (i *= 256);) n += this[t + o] * i;
              return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
            }),
            (u.prototype.readIntBE = function (t, e, r) {
              (t >>>= 0), (e >>>= 0), r || P(t, e, this.length);
              let n = e,
                i = 1,
                o = this[t + --n];
              for (; n > 0 && (i *= 256);) o += this[t + --n] * i;
              return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
            }),
            (u.prototype.readInt8 = function (t, e) {
              return (t >>>= 0), e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }),
            (u.prototype.readInt16LE = function (t, e) {
              (t >>>= 0), e || P(t, 2, this.length);
              const r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (u.prototype.readInt16BE = function (t, e) {
              (t >>>= 0), e || P(t, 2, this.length);
              const r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (u.prototype.readInt32LE = function (t, e) {
              return (
                (t >>>= 0),
                e || P(t, 4, this.length),
                this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
              );
            }),
            (u.prototype.readInt32BE = function (t, e) {
              return (
                (t >>>= 0),
                e || P(t, 4, this.length),
                (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
              );
            }),
            (u.prototype.readBigInt64LE = Z(function (t) {
              U((t >>>= 0), 'offset');
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
              return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
            })),
            (u.prototype.readBigInt64BE = Z(function (t) {
              U((t >>>= 0), 'offset');
              const e = this[t],
                r = this[t + 7];
              (void 0 !== e && void 0 !== r) || G(t, this.length - 8);
              const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
              return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r);
            })),
            (u.prototype.readFloatLE = function (t, e) {
              return (t >>>= 0), e || P(t, 4, this.length), i.read(this, t, !0, 23, 4);
            }),
            (u.prototype.readFloatBE = function (t, e) {
              return (t >>>= 0), e || P(t, 4, this.length), i.read(this, t, !1, 23, 4);
            }),
            (u.prototype.readDoubleLE = function (t, e) {
              return (t >>>= 0), e || P(t, 8, this.length), i.read(this, t, !0, 52, 8);
            }),
            (u.prototype.readDoubleBE = function (t, e) {
              return (t >>>= 0), e || P(t, 8, this.length), i.read(this, t, !1, 52, 8);
            }),
            (u.prototype.writeUintLE = u.prototype.writeUIntLE =
              function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = 1,
                  o = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = (t / i) & 255;
                return e + r;
              }),
            (u.prototype.writeUintBE = u.prototype.writeUIntBE =
              function (t, e, r, n) {
                (t = +t), (e >>>= 0), (r >>>= 0), n || C(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                let i = r - 1,
                  o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = (t / o) & 255;
                return e + r;
              }),
            (u.prototype.writeUint8 = u.prototype.writeUInt8 =
              function (t, e, r) {
                return (t = +t), (e >>>= 0), r || C(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
              }),
            (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
            (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
            (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
            (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
              function (t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || C(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
            (u.prototype.writeBigUInt64LE = Z(function (t, e = 0) {
              return V(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
            })),
            (u.prototype.writeBigUInt64BE = Z(function (t, e = 0) {
              return B(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
            })),
            (u.prototype.writeIntLE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                C(this, t, e, r, n - 1, -n);
              }
              let i = 0,
                o = 1,
                s = 0;
              for (this[e] = 255 & t; ++i < r && (o *= 256);)
                t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), (this[e + i] = (((t / o) >> 0) - s) & 255);
              return e + r;
            }),
            (u.prototype.writeIntBE = function (t, e, r, n) {
              if (((t = +t), (e >>>= 0), !n)) {
                const n = Math.pow(2, 8 * r - 1);
                C(this, t, e, r, n - 1, -n);
              }
              let i = r - 1,
                o = 1,
                s = 0;
              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);)
                t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), (this[e + i] = (((t / o) >> 0) - s) & 255);
              return e + r;
            }),
            (u.prototype.writeInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || C(this, t, e, 1, 127, -128),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (u.prototype.writeInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || C(this, t, e, 2, 32767, -32768),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
            (u.prototype.writeInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || C(this, t, e, 2, 32767, -32768),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
            (u.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || C(this, t, e, 4, 2147483647, -2147483648),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24),
                e + 4
              );
            }),
            (u.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e >>>= 0),
                r || C(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
            (u.prototype.writeBigInt64LE = Z(function (t, e = 0) {
              return V(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
            })),
            (u.prototype.writeBigInt64BE = Z(function (t, e = 0) {
              return B(this, t, e, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
            })),
            (u.prototype.writeFloatLE = function (t, e, r) {
              return L(this, t, e, !0, r);
            }),
            (u.prototype.writeFloatBE = function (t, e, r) {
              return L(this, t, e, !1, r);
            }),
            (u.prototype.writeDoubleLE = function (t, e, r) {
              return j(this, t, e, !0, r);
            }),
            (u.prototype.writeDoubleBE = function (t, e, r) {
              return j(this, t, e, !1, r);
            }),
            (u.prototype.copy = function (t, e, r, n) {
              if (!u.isBuffer(t)) throw new TypeError('argument should be a Buffer');
              if (
                (r || (r = 0),
                  n || 0 === n || (n = this.length),
                  e >= t.length && (e = t.length),
                  e || (e = 0),
                  n > 0 && n < r && (n = r),
                  n === r)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError('targetStart out of bounds');
              if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
              if (n < 0) throw new RangeError('sourceEnd out of bounds');
              n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
              const i = n - r;
              return (
                this === t && 'function' == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(e, r, n)
                  : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
                i
              );
            }),
            (u.prototype.fill = function (t, e, r, n) {
              if ('string' == typeof t) {
                if (
                  ('string' == typeof e
                    ? ((n = e), (e = 0), (r = this.length))
                    : 'string' == typeof r && ((n = r), (r = this.length)),
                    void 0 !== n && 'string' != typeof n)
                )
                  throw new TypeError('encoding must be a string');
                if ('string' == typeof n && !u.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n);
                if (1 === t.length) {
                  const e = t.charCodeAt(0);
                  (('utf8' === n && e < 128) || 'latin1' === n) && (t = e);
                }
              } else 'number' == typeof t ? (t &= 255) : 'boolean' == typeof t && (t = Number(t));
              if (e < 0 || this.length < e || this.length < r) throw new RangeError('Out of range index');
              if (r <= e) return this;
              let i;
              if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), 'number' == typeof t))
                for (i = e; i < r; ++i) this[i] = t;
              else {
                const o = u.isBuffer(t) ? t : u.from(t, n),
                  s = o.length;
                if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
              }
              return this;
            });
          const M = {};

          function Q(t, e, r) {
            M[t] = class extends r {
              constructor() {
                super(),
                  Object.defineProperty(this, 'message', {
                    value: e.apply(this, arguments),
                    writable: !0,
                    configurable: !0,
                  }),
                  (this.name = `${this.name} [${t}]`),
                  this.stack,
                  delete this.name;
              }

              get code() {
                return t;
              }

              set code(t) {
                Object.defineProperty(this, 'code', {
                  configurable: !0,
                  enumerable: !0,
                  value: t,
                  writable: !0,
                });
              }

              toString() {
                return `${this.name} [${t}]: ${this.message}`;
              }
            };
          }

          function q(t) {
            let e = '',
              r = t.length;
            const n = '-' === t[0] ? 1 : 0;
            for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
            return `${t.slice(0, r)}${e}`;
          }

          function D(t, e, r, n, i, o) {
            if (t > r || t < e) {
              const n = 'bigint' == typeof e ? 'n' : '';
              let i;
              throw (
                ((i =
                  o > 3
                    ? 0 === e || e === BigInt(0)
                      ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
                      : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}`
                    : `>= ${e}${n} and <= ${r}${n}`),
                  new M.ERR_OUT_OF_RANGE('value', i, t))
              );
            }
            !(function (t, e, r) {
              U(e, 'offset'), (void 0 !== t[e] && void 0 !== t[e + r]) || G(e, t.length - (r + 1));
            })(n, i, o);
          }

          function U(t, e) {
            if ('number' != typeof t) throw new M.ERR_INVALID_ARG_TYPE(e, 'number', t);
          }

          function G(t, e, r) {
            if (Math.floor(t) !== t) throw (U(t, r), new M.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', t));
            if (e < 0) throw new M.ERR_BUFFER_OUT_OF_BOUNDS();
            throw new M.ERR_OUT_OF_RANGE(r || 'offset', `>= ${r ? 1 : 0} and <= ${e}`, t);
          }

          Q(
            'ERR_BUFFER_OUT_OF_BOUNDS',
            function (t) {
              return t ? `${t} is outside of buffer bounds` : 'Attempt to access memory outside buffer bounds';
            },
            RangeError,
          ),
            Q(
              'ERR_INVALID_ARG_TYPE',
              function (t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`;
              },
              TypeError,
            ),
            Q(
              'ERR_OUT_OF_RANGE',
              function (t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                  i = r;
                return (
                  Number.isInteger(r) && Math.abs(r) > 2 ** 32
                    ? (i = q(String(r)))
                    : 'bigint' == typeof r &&
                    ((i = String(r)),
                      (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = q(i)),
                      (i += 'n')),
                  (n += ` It must be ${e}. Received ${i}`),
                  n
                );
              },
              RangeError,
            );
          const z = /[^+/0-9A-Za-z-_]/g;

          function K(t, e) {
            let r;
            e = e || 1 / 0;
            const n = t.length;
            let i = null;
            const o = [];
            for (let s = 0; s < n; ++s) {
              if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
                if (!i) {
                  if (r > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === n) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                  continue;
                }
                r = 65536 + (((i - 55296) << 10) | (r - 56320));
              } else i && (e -= 3) > -1 && o.push(239, 191, 189);
              if (((i = null), r < 128)) {
                if ((e -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error('Invalid code point');
                if ((e -= 4) < 0) break;
                o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
              }
            }
            return o;
          }

          function $(t) {
            return n.toByteArray(
              (function (t) {
                if ((t = (t = t.split('=')[0]).trim().replace(z, '')).length < 2) return '';
                for (; t.length % 4 != 0;) t += '=';
                return t;
              })(t),
            );
          }

          function W(t, e, r, n) {
            let i;
            for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
            return i;
          }

          function H(t, e) {
            return (
              t instanceof e ||
              (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name)
            );
          }

          function Y(t) {
            return t != t;
          }

          const J = (function () {
            const t = '0123456789abcdef',
              e = new Array(256);
            for (let r = 0; r < 16; ++r) {
              const n = 16 * r;
              for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
            }
            return e;
          })();

          function Z(t) {
            return 'undefined' == typeof BigInt ? X : t;
          }

          function X() {
            throw new Error('BigInt not supported');
          }
        },
        729: t => {
          'use strict';
          var e = Object.prototype.hasOwnProperty,
            r = '~';

          function n() { }

          function i(t, e, r) {
            (this.fn = t), (this.context = e), (this.once = r || !1);
          }

          function o(t, e, n, o, s) {
            if ('function' != typeof n) throw new TypeError('The listener must be a function');
            var a = new i(n, o || t, s),
              u = r ? r + e : e;
            return (
              t._events[u]
                ? t._events[u].fn
                  ? (t._events[u] = [t._events[u], a])
                  : t._events[u].push(a)
                : ((t._events[u] = a), t._eventsCount++),
              t
            );
          }

          function s(t, e) {
            0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
          }

          function a() {
            (this._events = new n()), (this._eventsCount = 0);
          }

          Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
            (a.prototype.eventNames = function () {
              var t,
                n,
                i = [];
              if (0 === this._eventsCount) return i;
              for (n in (t = this._events)) e.call(t, n) && i.push(r ? n.slice(1) : n);
              return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
            }),
            (a.prototype.listeners = function (t) {
              var e = r ? r + t : t,
                n = this._events[e];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
              return s;
            }),
            (a.prototype.listenerCount = function (t) {
              var e = r ? r + t : t,
                n = this._events[e];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (a.prototype.emit = function (t, e, n, i, o, s) {
              var a = r ? r + t : t;
              if (!this._events[a]) return !1;
              var u,
                c,
                f = this._events[a],
                l = arguments.length;
              if (f.fn) {
                switch ((f.once && this.removeListener(t, f.fn, void 0, !0), l)) {
                  case 1:
                    return f.fn.call(f.context), !0;
                  case 2:
                    return f.fn.call(f.context, e), !0;
                  case 3:
                    return f.fn.call(f.context, e, n), !0;
                  case 4:
                    return f.fn.call(f.context, e, n, i), !0;
                  case 5:
                    return f.fn.call(f.context, e, n, i, o), !0;
                  case 6:
                    return f.fn.call(f.context, e, n, i, o, s), !0;
                }
                for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
                f.fn.apply(f.context, u);
              } else {
                var p,
                  h = f.length;
                for (c = 0; c < h; c++)
                  switch ((f[c].once && this.removeListener(t, f[c].fn, void 0, !0), l)) {
                    case 1:
                      f[c].fn.call(f[c].context);
                      break;
                    case 2:
                      f[c].fn.call(f[c].context, e);
                      break;
                    case 3:
                      f[c].fn.call(f[c].context, e, n);
                      break;
                    case 4:
                      f[c].fn.call(f[c].context, e, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = new Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      f[c].fn.apply(f[c].context, u);
                  }
              }
              return !0;
            }),
            (a.prototype.on = function (t, e, r) {
              return o(this, t, e, r, !1);
            }),
            (a.prototype.once = function (t, e, r) {
              return o(this, t, e, r, !0);
            }),
            (a.prototype.removeListener = function (t, e, n, i) {
              var o = r ? r + t : t;
              if (!this._events[o]) return this;
              if (!e) return s(this, o), this;
              var a = this._events[o];
              if (a.fn) a.fn !== e || (i && !a.once) || (n && a.context !== n) || s(this, o);
              else {
                for (var u = 0, c = [], f = a.length; u < f; u++)
                  (a[u].fn !== e || (i && !a[u].once) || (n && a[u].context !== n)) && c.push(a[u]);
                c.length ? (this._events[o] = 1 === c.length ? c[0] : c) : s(this, o);
              }
              return this;
            }),
            (a.prototype.removeAllListeners = function (t) {
              var e;
              return (
                t
                  ? ((e = r ? r + t : t), this._events[e] && s(this, e))
                  : ((this._events = new n()), (this._eventsCount = 0)),
                this
              );
            }),
            (a.prototype.off = a.prototype.removeListener),
            (a.prototype.addListener = a.prototype.on),
            (a.prefixed = r),
            (a.EventEmitter = a),
            (t.exports = a);
        },
        35: t => {
          'use strict';
          t.exports = function (t, e) {
            e || (e = {}),
              'function' == typeof e &&
              (e = {
                cmp: e,
              });
            var r,
              n = 'boolean' == typeof e.cycles && e.cycles,
              i =
                e.cmp &&
                ((r = e.cmp),
                  function (t) {
                    return function (e, n) {
                      var i = {
                        key: e,
                        value: t[e],
                      },
                        o = {
                          key: n,
                          value: t[n],
                        };
                      return r(i, o);
                    };
                  }),
              o = [];
            return (function t(e) {
              if ((e && e.toJSON && 'function' == typeof e.toJSON && (e = e.toJSON()), void 0 !== e)) {
                if ('number' == typeof e) return isFinite(e) ? '' + e : 'null';
                if ('object' != typeof e) return JSON.stringify(e);
                var r, s;
                if (Array.isArray(e)) {
                  for (s = '[', r = 0; r < e.length; r++) r && (s += ','), (s += t(e[r]) || 'null');
                  return s + ']';
                }
                if (null === e) return 'null';
                if (-1 !== o.indexOf(e)) {
                  if (n) return JSON.stringify('__cycle__');
                  throw new TypeError('Converting circular structure to JSON');
                }
                var a = o.push(e) - 1,
                  u = Object.keys(e).sort(i && i(e));
                for (s = '', r = 0; r < u.length; r++) {
                  var c = u[r],
                    f = t(e[c]);
                  f && (s && (s += ','), (s += JSON.stringify(c) + ':' + f));
                }
                return o.splice(a, 1), '{' + s + '}';
              }
            })(t);
          };
        },
        311: t => {
          var e = {
            kind: 'Document',
            definitions: [
              {
                kind: 'OperationDefinition',
                operation: 'subscription',
                name: {
                  kind: 'Name',
                  value: 'AvailabilityChanged',
                },
                variableDefinitions: [
                  {
                    kind: 'VariableDefinition',
                    variable: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'eventId',
                      },
                    },
                    type: {
                      kind: 'NonNullType',
                      type: {
                        kind: 'NamedType',
                        name: {
                          kind: 'Name',
                          value: 'String',
                        },
                      },
                    },
                    directives: [],
                  },
                  {
                    kind: 'VariableDefinition',
                    variable: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'unlockToken',
                      },
                    },
                    type: {
                      kind: 'NamedType',
                      name: {
                        kind: 'Name',
                        value: 'String',
                      },
                    },
                    directives: [],
                  },
                  {
                    kind: 'VariableDefinition',
                    variable: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'lastReceivedVersion',
                      },
                    },
                    type: {
                      kind: 'NamedType',
                      name: {
                        kind: 'Name',
                        value: 'String',
                      },
                    },
                    directives: [],
                  },
                  {
                    kind: 'VariableDefinition',
                    variable: {
                      kind: 'Variable',
                      name: {
                        kind: 'Name',
                        value: 'displayId',
                      },
                    },
                    type: {
                      kind: 'NamedType',
                      name: {
                        kind: 'Name',
                        value: 'String',
                      },
                    },
                    directives: [],
                  },
                ],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'availability',
                      },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: {
                            kind: 'Name',
                            value: 'eventId',
                          },
                          value: {
                            kind: 'Variable',
                            name: {
                              kind: 'Name',
                              value: 'eventId',
                            },
                          },
                        },
                        {
                          kind: 'Argument',
                          name: {
                            kind: 'Name',
                            value: 'unlockToken',
                          },
                          value: {
                            kind: 'Variable',
                            name: {
                              kind: 'Name',
                              value: 'unlockToken',
                            },
                          },
                        },
                        {
                          kind: 'Argument',
                          name: {
                            kind: 'Name',
                            value: 'lastReceivedVersion',
                          },
                          value: {
                            kind: 'Variable',
                            name: {
                              kind: 'Name',
                              value: 'lastReceivedVersion',
                            },
                          },
                        },
                        {
                          kind: 'Argument',
                          name: {
                            kind: 'Name',
                            value: 'displayId',
                          },
                          value: {
                            kind: 'Variable',
                            name: {
                              kind: 'Name',
                              value: 'displayId',
                            },
                          },
                        },
                      ],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'buffer',
                            },
                            arguments: [],
                            directives: [],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            loc: {
              start: 0,
              end: 313,
            },
          };

          function r(t, e) {
            if ('FragmentSpread' === t.kind) e.add(t.name.value);
            else if ('VariableDefinition' === t.kind) {
              var n = t.type;
              'NamedType' === n.kind && e.add(n.name.value);
            }
            t.selectionSet &&
              t.selectionSet.selections.forEach(function (t) {
                r(t, e);
              }),
              t.variableDefinitions &&
              t.variableDefinitions.forEach(function (t) {
                r(t, e);
              }),
              t.definitions &&
              t.definitions.forEach(function (t) {
                r(t, e);
              });
          }

          e.loc.source = {
            body: 'subscription AvailabilityChanged($eventId: String!,$unlockToken: String,\n    $lastReceivedVersion: String,$displayId:String) {\n    availability(\n        eventId: $eventId,\n        unlockToken: $unlockToken,\n        lastReceivedVersion: $lastReceivedVersion,\n        displayId: $displayId) {\n        buffer\n    }\n}',
            name: 'GraphQL request',
            locationOffset: {
              line: 1,
              column: 1,
            },
          };
          var n = {};

          function i(t, e) {
            for (var r = 0; r < t.definitions.length; r++) {
              var n = t.definitions[r];
              if (n.name && n.name.value == e) return n;
            }
          }

          e.definitions.forEach(function (t) {
            if (t.name) {
              var e = new Set();
              r(t, e), (n[t.name.value] = e);
            }
          }),
            (t.exports = e),
            (t.exports.AvailabilityChanged = (function (t, e) {
              var r = {
                kind: t.kind,
                definitions: [i(t, e)],
              };
              t.hasOwnProperty('loc') && (r.loc = t.loc);
              var o = n[e] || new Set(),
                s = new Set(),
                a = new Set();
              for (
                o.forEach(function (t) {
                  a.add(t);
                });
                a.size > 0;

              ) {
                var u = a;
                (a = new Set()),
                  u.forEach(function (t) {
                    s.has(t) ||
                      (s.add(t),
                        (n[t] || new Set()).forEach(function (t) {
                          a.add(t);
                        }));
                  });
              }
              return (
                s.forEach(function (e) {
                  var n = i(t, e);
                  n && r.definitions.push(n);
                }),
                r
              );
            })(e, 'AvailabilityChanged'));
        },
        972: (t, e, r) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.default = function (t) {
              var e = t.prototype.toJSON;
              'function' == typeof e || (0, n.default)(0),
                (t.prototype.inspect = e),
                i.default && (t.prototype[i.default] = e);
            });
          var n = o(r(706)),
            i = o(r(554));

          function o(t) {
            return t && t.__esModule
              ? t
              : {
                default: t,
              };
          }
        },
        2: (t, e, r) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.default = function (t) {
              return s(t, []);
            });
          var n,
            i =
              (n = r(554)) && n.__esModule
                ? n
                : {
                  default: n,
                };

          function o(t) {
            return (
              (o =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (t) {
                    return typeof t;
                  }
                  : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
              o(t)
            );
          }

          function s(t, e) {
            switch (o(t)) {
              case 'string':
                return JSON.stringify(t);
              case 'function':
                return t.name ? '[function '.concat(t.name, ']') : '[function]';
              case 'object':
                return null === t
                  ? 'null'
                  : (function (t, e) {
                    if (-1 !== e.indexOf(t)) return '[Circular]';
                    var r = [].concat(e, [t]),
                      n = (function (t) {
                        var e = t[String(i.default)];
                        return 'function' == typeof e ? e : 'function' == typeof t.inspect ? t.inspect : void 0;
                      })(t);
                    if (void 0 !== n) {
                      var o = n.call(t);
                      if (o !== t) return 'string' == typeof o ? o : s(o, r);
                    } else if (Array.isArray(t))
                      return (function (t, e) {
                        if (0 === t.length) return '[]';
                        if (e.length > 2) return '[Array]';
                        for (var r = Math.min(10, t.length), n = t.length - r, i = [], o = 0; o < r; ++o)
                          i.push(s(t[o], e));
                        return (
                          1 === n ? i.push('... 1 more item') : n > 1 && i.push('... '.concat(n, ' more items')),
                          '[' + i.join(', ') + ']'
                        );
                      })(t, r);
                    return (function (t, e) {
                      var r = Object.keys(t);
                      return 0 === r.length
                        ? '{}'
                        : e.length > 2
                          ? '[' +
                          (function (t) {
                            var e = Object.prototype.toString
                              .call(t)
                              .replace(/^\[object /, '')
                              .replace(/]$/, '');
                            if ('Object' === e && 'function' == typeof t.constructor) {
                              var r = t.constructor.name;
                              if ('string' == typeof r && '' !== r) return r;
                            }
                            return e;
                          })(t) +
                          ']'
                          : '{ ' +
                          r
                            .map(function (r) {
                              return r + ': ' + s(t[r], e);
                            })
                            .join(', ') +
                          ' }';
                    })(t, r);
                  })(t, e);
              default:
                return String(t);
            }
          }
        },
        706: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.default = function (t, e) {
              if (!Boolean(t)) throw new Error(null != e ? e : 'Unexpected invariant triggered.');
            });
        },
        554: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.default = void 0);
          var r =
            'function' == typeof Symbol && 'function' == typeof Symbol.for
              ? Symbol.for('nodejs.util.inspect.custom')
              : void 0;
          e.default = r;
        },
        807: (t, e, r) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.isNode = function (t) {
              return null != t && 'string' == typeof t.kind;
            }),
            (e.Token = e.Location = void 0);
          var n,
            i =
              (n = r(972)) && n.__esModule
                ? n
                : {
                  default: n,
                },
            o = (function () {
              function t(t, e, r) {
                (this.start = t.start),
                  (this.end = e.end),
                  (this.startToken = t),
                  (this.endToken = e),
                  (this.source = r);
              }

              return (
                (t.prototype.toJSON = function () {
                  return {
                    start: this.start,
                    end: this.end,
                  };
                }),
                t
              );
            })();
          (e.Location = o), (0, i.default)(o);
          var s = (function () {
            function t(t, e, r, n, i, o, s) {
              (this.kind = t),
                (this.start = e),
                (this.end = r),
                (this.line = n),
                (this.column = i),
                (this.value = s),
                (this.prev = o),
                (this.next = null);
            }

            return (
              (t.prototype.toJSON = function () {
                return {
                  kind: this.kind,
                  value: this.value,
                  line: this.line,
                  column: this.column,
                };
              }),
              t
            );
          })();
          (e.Token = s), (0, i.default)(s);
        },
        849: (t, e) => {
          'use strict';

          function r(t) {
            for (var e = 0; e < t.length; ++e) if (' ' !== t[e] && '\t' !== t[e]) return !1;
            return !0;
          }

          function n(t) {
            for (var e, r = !0, n = !0, i = 0, o = null, s = 0; s < t.length; ++s)
              switch (t.charCodeAt(s)) {
                case 13:
                  10 === t.charCodeAt(s + 1) && ++s;
                case 10:
                  (r = !1), (n = !0), (i = 0);
                  break;
                case 9:
                case 32:
                  ++i;
                  break;
                default:
                  n && !r && (null === o || i < o) && (o = i), (n = !1);
              }
            return null !== (e = o) && void 0 !== e ? e : 0;
          }

          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.dedentBlockStringValue = function (t) {
              var e = t.split(/\r\n|[\n\r]/g),
                i = n(t);
              if (0 !== i) for (var o = 1; o < e.length; o++) e[o] = e[o].slice(i);
              for (var s = 0; s < e.length && r(e[s]);) ++s;
              for (var a = e.length; a > s && r(e[a - 1]);) --a;
              return e.slice(s, a).join('\n');
            }),
            (e.getBlockStringIndentation = n),
            (e.printBlockString = function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = -1 === t.indexOf('\n'),
                i = ' ' === t[0] || '\t' === t[0],
                o = '"' === t[t.length - 1],
                s = '\\' === t[t.length - 1],
                a = !n || o || s || r,
                u = '';
              return (
                !a || (n && i) || (u += '\n' + e),
                (u += e ? t.replace(/\n/g, '\n' + e) : t),
                a && (u += '\n'),
                '"""' + u.replace(/"""/g, '\\"""') + '"""'
              );
            });
        },
        828: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.Kind = void 0);
          var r = Object.freeze({
            NAME: 'Name',
            DOCUMENT: 'Document',
            OPERATION_DEFINITION: 'OperationDefinition',
            VARIABLE_DEFINITION: 'VariableDefinition',
            SELECTION_SET: 'SelectionSet',
            FIELD: 'Field',
            ARGUMENT: 'Argument',
            FRAGMENT_SPREAD: 'FragmentSpread',
            INLINE_FRAGMENT: 'InlineFragment',
            FRAGMENT_DEFINITION: 'FragmentDefinition',
            VARIABLE: 'Variable',
            INT: 'IntValue',
            FLOAT: 'FloatValue',
            STRING: 'StringValue',
            BOOLEAN: 'BooleanValue',
            NULL: 'NullValue',
            ENUM: 'EnumValue',
            LIST: 'ListValue',
            OBJECT: 'ObjectValue',
            OBJECT_FIELD: 'ObjectField',
            DIRECTIVE: 'Directive',
            NAMED_TYPE: 'NamedType',
            LIST_TYPE: 'ListType',
            NON_NULL_TYPE: 'NonNullType',
            SCHEMA_DEFINITION: 'SchemaDefinition',
            OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
            SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
            OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
            FIELD_DEFINITION: 'FieldDefinition',
            INPUT_VALUE_DEFINITION: 'InputValueDefinition',
            INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
            UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
            ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
            ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
            INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
            DIRECTIVE_DEFINITION: 'DirectiveDefinition',
            SCHEMA_EXTENSION: 'SchemaExtension',
            SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
            OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
            INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
            UNION_TYPE_EXTENSION: 'UnionTypeExtension',
            ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
            INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',
          });
          e.Kind = r;
        },
        33: (t, e, r) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.print = function (t) {
              return (0, n.visit)(t, {
                leave: o,
              });
            });
          var n = r(285),
            i = r(849),
            o = {
              Name: function (t) {
                return t.value;
              },
              Variable: function (t) {
                return '$' + t.name;
              },
              Document: function (t) {
                return a(t.definitions, '\n\n') + '\n';
              },
              OperationDefinition: function (t) {
                var e = t.operation,
                  r = t.name,
                  n = c('(', a(t.variableDefinitions, ', '), ')'),
                  i = a(t.directives, ' '),
                  o = t.selectionSet;
                return r || i || n || 'query' !== e ? a([e, a([r, n]), i, o], ' ') : o;
              },
              VariableDefinition: function (t) {
                var e = t.variable,
                  r = t.type,
                  n = t.defaultValue,
                  i = t.directives;
                return e + ': ' + r + c(' = ', n) + c(' ', a(i, ' '));
              },
              SelectionSet: function (t) {
                return u(t.selections);
              },
              Field: function (t) {
                var e = t.alias,
                  r = t.name,
                  n = t.arguments,
                  i = t.directives,
                  o = t.selectionSet,
                  s = c('', e, ': ') + r,
                  u = s + c('(', a(n, ', '), ')');
                return u.length > 80 && (u = s + c('(\n', f(a(n, '\n')), '\n)')), a([u, a(i, ' '), o], ' ');
              },
              Argument: function (t) {
                return t.name + ': ' + t.value;
              },
              FragmentSpread: function (t) {
                return '...' + t.name + c(' ', a(t.directives, ' '));
              },
              InlineFragment: function (t) {
                var e = t.typeCondition,
                  r = t.directives,
                  n = t.selectionSet;
                return a(['...', c('on ', e), a(r, ' '), n], ' ');
              },
              FragmentDefinition: function (t) {
                var e = t.name,
                  r = t.typeCondition,
                  n = t.variableDefinitions,
                  i = t.directives,
                  o = t.selectionSet;
                return (
                  'fragment '.concat(e).concat(c('(', a(n, ', '), ')'), ' ') +
                  'on '.concat(r, ' ').concat(c('', a(i, ' '), ' ')) +
                  o
                );
              },
              IntValue: function (t) {
                return t.value;
              },
              FloatValue: function (t) {
                return t.value;
              },
              StringValue: function (t, e) {
                var r = t.value;
                return t.block ? (0, i.printBlockString)(r, 'description' === e ? '' : '  ') : JSON.stringify(r);
              },
              BooleanValue: function (t) {
                return t.value ? 'true' : 'false';
              },
              NullValue: function () {
                return 'null';
              },
              EnumValue: function (t) {
                return t.value;
              },
              ListValue: function (t) {
                return '[' + a(t.values, ', ') + ']';
              },
              ObjectValue: function (t) {
                return '{' + a(t.fields, ', ') + '}';
              },
              ObjectField: function (t) {
                return t.name + ': ' + t.value;
              },
              Directive: function (t) {
                return '@' + t.name + c('(', a(t.arguments, ', '), ')');
              },
              NamedType: function (t) {
                return t.name;
              },
              ListType: function (t) {
                return '[' + t.type + ']';
              },
              NonNullType: function (t) {
                return t.type + '!';
              },
              SchemaDefinition: s(function (t) {
                var e = t.directives,
                  r = t.operationTypes;
                return a(['schema', a(e, ' '), u(r)], ' ');
              }),
              OperationTypeDefinition: function (t) {
                return t.operation + ': ' + t.type;
              },
              ScalarTypeDefinition: s(function (t) {
                return a(['scalar', t.name, a(t.directives, ' ')], ' ');
              }),
              ObjectTypeDefinition: s(function (t) {
                var e = t.name,
                  r = t.interfaces,
                  n = t.directives,
                  i = t.fields;
                return a(['type', e, c('implements ', a(r, ' & ')), a(n, ' '), u(i)], ' ');
              }),
              FieldDefinition: s(function (t) {
                var e = t.name,
                  r = t.arguments,
                  n = t.type,
                  i = t.directives;
                return (
                  e + (p(r) ? c('(\n', f(a(r, '\n')), '\n)') : c('(', a(r, ', '), ')')) + ': ' + n + c(' ', a(i, ' '))
                );
              }),
              InputValueDefinition: s(function (t) {
                var e = t.name,
                  r = t.type,
                  n = t.defaultValue,
                  i = t.directives;
                return a([e + ': ' + r, c('= ', n), a(i, ' ')], ' ');
              }),
              InterfaceTypeDefinition: s(function (t) {
                var e = t.name,
                  r = t.interfaces,
                  n = t.directives,
                  i = t.fields;
                return a(['interface', e, c('implements ', a(r, ' & ')), a(n, ' '), u(i)], ' ');
              }),
              UnionTypeDefinition: s(function (t) {
                var e = t.name,
                  r = t.directives,
                  n = t.types;
                return a(['union', e, a(r, ' '), n && 0 !== n.length ? '= ' + a(n, ' | ') : ''], ' ');
              }),
              EnumTypeDefinition: s(function (t) {
                var e = t.name,
                  r = t.directives,
                  n = t.values;
                return a(['enum', e, a(r, ' '), u(n)], ' ');
              }),
              EnumValueDefinition: s(function (t) {
                return a([t.name, a(t.directives, ' ')], ' ');
              }),
              InputObjectTypeDefinition: s(function (t) {
                var e = t.name,
                  r = t.directives,
                  n = t.fields;
                return a(['input', e, a(r, ' '), u(n)], ' ');
              }),
              DirectiveDefinition: s(function (t) {
                var e = t.name,
                  r = t.arguments,
                  n = t.repeatable,
                  i = t.locations;
                return (
                  'directive @' +
                  e +
                  (p(r) ? c('(\n', f(a(r, '\n')), '\n)') : c('(', a(r, ', '), ')')) +
                  (n ? ' repeatable' : '') +
                  ' on ' +
                  a(i, ' | ')
                );
              }),
              SchemaExtension: function (t) {
                var e = t.directives,
                  r = t.operationTypes;
                return a(['extend schema', a(e, ' '), u(r)], ' ');
              },
              ScalarTypeExtension: function (t) {
                return a(['extend scalar', t.name, a(t.directives, ' ')], ' ');
              },
              ObjectTypeExtension: function (t) {
                var e = t.name,
                  r = t.interfaces,
                  n = t.directives,
                  i = t.fields;
                return a(['extend type', e, c('implements ', a(r, ' & ')), a(n, ' '), u(i)], ' ');
              },
              InterfaceTypeExtension: function (t) {
                var e = t.name,
                  r = t.interfaces,
                  n = t.directives,
                  i = t.fields;
                return a(['extend interface', e, c('implements ', a(r, ' & ')), a(n, ' '), u(i)], ' ');
              },
              UnionTypeExtension: function (t) {
                var e = t.name,
                  r = t.directives,
                  n = t.types;
                return a(['extend union', e, a(r, ' '), n && 0 !== n.length ? '= ' + a(n, ' | ') : ''], ' ');
              },
              EnumTypeExtension: function (t) {
                var e = t.name,
                  r = t.directives,
                  n = t.values;
                return a(['extend enum', e, a(r, ' '), u(n)], ' ');
              },
              InputObjectTypeExtension: function (t) {
                var e = t.name,
                  r = t.directives,
                  n = t.fields;
                return a(['extend input', e, a(r, ' '), u(n)], ' ');
              },
            };

          function s(t) {
            return function (e) {
              return a([e.description, t(e)], '\n');
            };
          }

          function a(t) {
            var e,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
            return null !==
              (e =
                null == t
                  ? void 0
                  : t
                    .filter(function (t) {
                      return t;
                    })
                    .join(r)) && void 0 !== e
              ? e
              : '';
          }

          function u(t) {
            return c('{\n', f(a(t, '\n')), '\n}');
          }

          function c(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
            return null != e && '' !== e ? t + e + r : '';
          }

          function f(t) {
            return c('  ', t.replace(/\n/g, '\n  '));
          }

          function l(t) {
            return -1 !== t.indexOf('\n');
          }

          function p(t) {
            return null != t && t.some(l);
          }
        },
        285: (t, e, r) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.visit = function (t, e) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
                n = void 0,
                c = Array.isArray(t),
                f = [t],
                l = -1,
                p = [],
                h = void 0,
                d = void 0,
                b = void 0,
                y = [],
                v = [],
                _ = t;
              do {
                var m = ++l === f.length,
                  g = m && 0 !== p.length;
                if (m) {
                  if (((d = 0 === v.length ? void 0 : y[y.length - 1]), (h = b), (b = v.pop()), g)) {
                    if (c) h = h.slice();
                    else {
                      for (var w = {}, I = 0, S = Object.keys(h); I < S.length; I++) {
                        var E = S[I];
                        w[E] = h[E];
                      }
                      h = w;
                    }
                    for (var O = 0, T = 0; T < p.length; T++) {
                      var k = p[T][0],
                        A = p[T][1];
                      c && (k -= O), c && null === A ? (h.splice(k, 1), O++) : (h[k] = A);
                    }
                  }
                  (l = n.index), (f = n.keys), (p = n.edits), (c = n.inArray), (n = n.prev);
                } else {
                  if (((d = b ? (c ? l : f[l]) : void 0), null == (h = b ? b[d] : _))) continue;
                  b && y.push(d);
                }
                var R,
                  F = void 0;
                if (!Array.isArray(h)) {
                  if (!(0, o.isNode)(h)) throw new Error('Invalid AST Node: '.concat((0, i.default)(h), '.'));
                  var x = u(e, h.kind, m);
                  if (x) {
                    if ((F = x.call(e, h, d, b, y, v)) === a) break;
                    if (!1 === F) {
                      if (!m) {
                        y.pop();
                        continue;
                      }
                    } else if (void 0 !== F && (p.push([d, F]), !m)) {
                      if (!(0, o.isNode)(F)) {
                        y.pop();
                        continue;
                      }
                      h = F;
                    }
                  }
                }
                void 0 === F && g && p.push([d, h]),
                  m
                    ? y.pop()
                    : ((n = {
                      inArray: c,
                      index: l,
                      keys: f,
                      edits: p,
                      prev: n,
                    }),
                      (f = (c = Array.isArray(h)) ? h : null !== (R = r[h.kind]) && void 0 !== R ? R : []),
                      (l = -1),
                      (p = []),
                      b && v.push(b),
                      (b = h));
              } while (void 0 !== n);
              return 0 !== p.length && (_ = p[p.length - 1][1]), _;
            }),
            (e.visitInParallel = function (t) {
              var e = new Array(t.length);
              return {
                enter: function (r) {
                  for (var n = 0; n < t.length; n++)
                    if (null == e[n]) {
                      var i = u(t[n], r.kind, !1);
                      if (i) {
                        var o = i.apply(t[n], arguments);
                        if (!1 === o) e[n] = r;
                        else if (o === a) e[n] = a;
                        else if (void 0 !== o) return o;
                      }
                    }
                },
                leave: function (r) {
                  for (var n = 0; n < t.length; n++)
                    if (null == e[n]) {
                      var i = u(t[n], r.kind, !0);
                      if (i) {
                        var o = i.apply(t[n], arguments);
                        if (o === a) e[n] = a;
                        else if (void 0 !== o && !1 !== o) return o;
                      }
                    } else e[n] === r && (e[n] = null);
                },
              };
            }),
            (e.getVisitFn = u),
            (e.BREAK = e.QueryDocumentKeys = void 0);
          var n,
            i =
              (n = r(2)) && n.__esModule
                ? n
                : {
                  default: n,
                },
            o = r(807),
            s = {
              Name: [],
              Document: ['definitions'],
              OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
              VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
              Variable: ['name'],
              SelectionSet: ['selections'],
              Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
              Argument: ['name', 'value'],
              FragmentSpread: ['name', 'directives'],
              InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
              FragmentDefinition: ['name', 'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
              IntValue: [],
              FloatValue: [],
              StringValue: [],
              BooleanValue: [],
              NullValue: [],
              EnumValue: [],
              ListValue: ['values'],
              ObjectValue: ['fields'],
              ObjectField: ['name', 'value'],
              Directive: ['name', 'arguments'],
              NamedType: ['name'],
              ListType: ['type'],
              NonNullType: ['type'],
              SchemaDefinition: ['description', 'directives', 'operationTypes'],
              OperationTypeDefinition: ['type'],
              ScalarTypeDefinition: ['description', 'name', 'directives'],
              ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
              FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
              InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
              InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
              UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
              EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
              EnumValueDefinition: ['description', 'name', 'directives'],
              InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
              DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
              SchemaExtension: ['directives', 'operationTypes'],
              ScalarTypeExtension: ['name', 'directives'],
              ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
              InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
              UnionTypeExtension: ['name', 'directives', 'types'],
              EnumTypeExtension: ['name', 'directives', 'values'],
              InputObjectTypeExtension: ['name', 'directives', 'fields'],
            };
          e.QueryDocumentKeys = s;
          var a = Object.freeze({});

          function u(t, e, r) {
            var n = t[e];
            if (n) {
              if (!r && 'function' == typeof n) return n;
              var i = r ? n.leave : n.enter;
              if ('function' == typeof i) return i;
            } else {
              var o = r ? t.leave : t.enter;
              if (o) {
                if ('function' == typeof o) return o;
                var s = o[e];
                if ('function' == typeof s) return s;
              }
            }
          }

          e.BREAK = a;
        },
        535: (t, e, r) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.getOperationAST = function (t, e) {
              for (var r = null, i = 0, o = t.definitions; i < o.length; i++) {
                var s,
                  a = o[i];
                if (a.kind === n.Kind.OPERATION_DEFINITION)
                  if (null == e) {
                    if (r) return null;
                    r = a;
                  } else if ((null === (s = a.name) || void 0 === s ? void 0 : s.value) === e) return a;
              }
              return r;
            });
          var n = r(828);
        },
        645: (t, e) => {
          (e.read = function (t, e, r, n, i) {
            var o,
              s,
              a = 8 * i - n - 1,
              u = (1 << a) - 1,
              c = u >> 1,
              f = -7,
              l = r ? i - 1 : 0,
              p = r ? -1 : 1,
              h = t[e + l];
            for (l += p, o = h & ((1 << -f) - 1), h >>= -f, f += a; f > 0; o = 256 * o + t[e + l], l += p, f -= 8);
            for (s = o & ((1 << -f) - 1), o >>= -f, f += n; f > 0; s = 256 * s + t[e + l], l += p, f -= 8);
            if (0 === o) o = 1 - c;
            else {
              if (o === u) return s ? NaN : (1 / 0) * (h ? -1 : 1);
              (s += Math.pow(2, n)), (o -= c);
            }
            return (h ? -1 : 1) * s * Math.pow(2, o - n);
          }),
            (e.write = function (t, e, r, n, i, o) {
              var s,
                a,
                u,
                c = 8 * o - i - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = n ? 0 : o - 1,
                d = n ? 1 : -1,
                b = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = f))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                    (e += s + l >= 1 ? p / u : p * Math.pow(2, 1 - l)) * u >= 2 && (s++, (u /= 2)),
                    s + l >= f
                      ? ((a = 0), (s = f))
                      : s + l >= 1
                        ? ((a = (e * u - 1) * Math.pow(2, i)), (s += l))
                        : ((a = e * Math.pow(2, l - 1) * Math.pow(2, i)), (s = 0)));
                i >= 8;
                t[r + h] = 255 & a, h += d, a /= 256, i -= 8
              );
              for (s = (s << i) | a, c += i; c > 0; t[r + h] = 255 & s, h += d, s /= 256, c -= 8);
              t[r + h - d] |= 128 * b;
            });
        },
        313: function (t, e, r) {
          'use strict';
          var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                      for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t;
                  }),
                n.apply(this, arguments)
              );
            },
            i =
              (this && this.__awaiter) ||
              function (t, e, r, n) {
                return new (r || (r = Promise))(function (i, o) {
                  function s(t) {
                    try {
                      u(n.next(t));
                    } catch (t) {
                      o(t);
                    }
                  }

                  function a(t) {
                    try {
                      u(n.throw(t));
                    } catch (t) {
                      o(t);
                    }
                  }

                  function u(t) {
                    var e;
                    t.done
                      ? i(t.value)
                      : ((e = t.value),
                        e instanceof r
                          ? e
                          : new r(function (t) {
                            t(e);
                          })).then(s, a);
                  }

                  u((n = n.apply(t, e || [])).next());
                });
              },
            o =
              (this && this.__generator) ||
              function (t, e) {
                var r,
                  n,
                  i,
                  o,
                  s = {
                    label: 0,
                    sent: function () {
                      if (1 & i[0]) throw i[1];
                      return i[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2),
                  }),
                  'function' == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                  o
                );

                function a(o) {
                  return function (a) {
                    return (function (o) {
                      if (r) throw new TypeError('Generator is already executing.');
                      for (; s;)
                        try {
                          if (
                            ((r = 1),
                              n &&
                              (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                              !(i = i.call(n, o[1])).done)
                          )
                            return i;
                          switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                            case 0:
                            case 1:
                              i = o;
                              break;
                            case 4:
                              return (
                                s.label++,
                                {
                                  value: o[1],
                                  done: !1,
                                }
                              );
                            case 5:
                              s.label++, (n = o[1]), (o = [0]);
                              continue;
                            case 7:
                              (o = s.ops.pop()), s.trys.pop();
                              continue;
                            default:
                              if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                                s = 0;
                                continue;
                              }
                              if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                s.label = o[1];
                                break;
                              }
                              if (6 === o[0] && s.label < i[1]) {
                                (s.label = i[1]), (i = o);
                                break;
                              }
                              if (i && s.label < i[2]) {
                                (s.label = i[2]), s.ops.push(o);
                                break;
                              }
                              i[2] && s.ops.pop(), s.trys.pop();
                              continue;
                          }
                          o = e.call(t, s);
                        } catch (t) {
                          (o = [6, t]), (n = 0);
                        } finally {
                          r = i = 0;
                        }
                      if (5 & o[0]) throw o[1];
                      return {
                        value: o[0] ? o[1] : void 0,
                        done: !0,
                      };
                    })([o, a]);
                  };
                }
              },
            s =
              (this && this.__spreadArrays) ||
              function () {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var n = Array(t),
                  i = 0;
                for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
                return n;
              };
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.SubscriptionClient = void 0);

          var a = void 0 !== r.g ? r.g : 'undefined' != typeof window ? window : {},
            u = a.WebSocket || a.MozWebSocket,
            c = r(10),
            f = r(729),
            l = r(277),
            p = r(905),
            h = r(33),
            d = r(535),
            b = r(121),
            y = r(892),
            v = r(639),
            _ = r(957),
            m = (function () {
              function t(t, e, r, n) {
                var i = e || {},
                  o = i.connectionCallback,
                  s = void 0 === o ? void 0 : o,
                  a = i.connectionParams,
                  l = void 0 === a ? {} : a,
                  p = i.minTimeout,
                  h = void 0 === p ? v.MIN_WS_TIMEOUT : p,
                  d = i.timeout,
                  b = void 0 === d ? v.WS_TIMEOUT : d,
                  _ = i.reconnect,
                  m = void 0 !== _ && _,
                  g = i.reconnectionAttempts,
                  w = void 0 === g ? 1 / 0 : g,
                  I = i.lazy,
                  S = void 0 !== I && I,
                  E = i.inactivityTimeout,
                  O = void 0 === E ? 0 : E,
                  T = i.wsOptionArguments,
                  k = void 0 === T ? [] : T;

                if (((this.wsImpl = r || u), !this.wsImpl))
                  throw new Error('Unable to find native implementation, or alternative implementation for WebSocket!');
                (this.wsProtocols = n || y.GRAPHQL_WS),
                  (this.connectionCallback = s),
                  (this.url = t),
                  (this.operations = {}),
                  (this.nextOperationId = 0),
                  (this.minWsTimeout = h),
                  (this.wsTimeout = b),
                  (this.unsentMessagesQueue = []),
                  (this.reconnect = m),
                  (this.reconnecting = !1),
                  (this.reconnectionAttempts = w),
                  (this.lazy = !!S),
                  (this.inactivityTimeout = O),
                  (this.closedByUser = !1),
                  (this.backoff = new c({
                    jitter: 0.5,
                  })),
                  (this.eventEmitter = new f.EventEmitter()),
                  (this.middlewares = []),
                  (this.client = null),
                  (this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator()),
                  (this.connectionParams = this.getConnectionParams(l)),
                  (this.wsOptionArguments = k),
                  this.lazy || this.connect();
              }

              return (
                Object.defineProperty(t.prototype, 'status', {
                  get: function () {
                    return null === this.client ? this.wsImpl.CLOSED : this.client.readyState;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (t.prototype.close = function (t, e) {
                  void 0 === t && (t = !0),
                    void 0 === e && (e = !0),
                    this.clearInactivityTimeout(),
                    null !== this.client &&
                    ((this.closedByUser = e),
                      t &&
                      (this.clearCheckConnectionInterval(),
                        this.clearMaxConnectTimeout(),
                        this.clearTryReconnectTimeout(),
                        this.unsubscribeAll(),
                        this.sendMessage(void 0, _.default.GQL_CONNECTION_TERMINATE, null)),
                      this.client.close(),
                      (this.client.onopen = null),
                      (this.client.onclose = null),
                      (this.client.onerror = null),
                      (this.client.onmessage = null),
                      (this.client = null),
                      this.eventEmitter.emit('disconnected'),
                      t || this.tryReconnect());
                }),
                (t.prototype.request = function (t) {
                  var e,
                    r,
                    n = this.getObserver.bind(this),
                    i = this.executeOperation.bind(this),
                    o = this.unsubscribe.bind(this);
                  return (
                    this.clearInactivityTimeout(),
                    ((e = {})[b.default] = function () {
                      return this;
                    }),
                    (e.subscribe = function (e, s, a) {
                      var u = n(e, s, a);
                      return (
                        (r = i(t, function (t, e) {
                          null === t && null === e
                            ? u.complete && u.complete()
                            : t
                              ? u.error && u.error(t[0])
                              : u.next && u.next(e);
                        })),
                        {
                          unsubscribe: function () {
                            r && (o(r), (r = null));
                          },
                        }
                      );
                    }),
                    e
                  );
                }),
                (t.prototype.on = function (t, e, r) {
                  var n = this.eventEmitter.on(t, e, r);
                  return function () {
                    n.off(t, e, r);
                  };
                }),
                (t.prototype.onConnected = function (t, e) {
                  return this.on('connected', t, e);
                }),
                (t.prototype.onConnecting = function (t, e) {
                  return this.on('connecting', t, e);
                }),
                (t.prototype.onDisconnected = function (t, e) {
                  return this.on('disconnected', t, e);
                }),
                (t.prototype.onReconnected = function (t, e) {
                  return this.on('reconnected', t, e);
                }),
                (t.prototype.onReconnecting = function (t, e) {
                  return this.on('reconnecting', t, e);
                }),
                (t.prototype.onError = function (t, e) {
                  return this.on('error', t, e);
                }),
                (t.prototype.unsubscribeAll = function () {
                  var t = this;
                  Object.keys(this.operations).forEach(function (e) {
                    t.unsubscribe(e);
                  });
                }),
                (t.prototype.applyMiddlewares = function (t) {
                  var e = this;
                  return new Promise(function (r, n) {
                    var i, o, a;
                    (i = s(e.middlewares)),
                      (o = e),
                      (a = function (e) {
                        if (e) n(e);
                        else if (i.length > 0) {
                          var s = i.shift();
                          s && s.applyMiddleware.apply(o, [t, a]);
                        } else r(t);
                      })();
                  });
                }),
                (t.prototype.use = function (t) {
                  var e = this;
                  return (
                    t.map(function (t) {
                      if ('function' != typeof t.applyMiddleware)
                        throw new Error('Middleware must implement the applyMiddleware function.');
                      e.middlewares.push(t);
                    }),
                    this
                  );
                }),
                (t.prototype.getConnectionParams = function (t) {
                  return function () {
                    return new Promise(function (e, r) {
                      if ('function' == typeof t)
                        try {
                          return e(t.call(null));
                        } catch (t) {
                          return r(t);
                        }
                      e(t);
                    });
                  };
                }),
                (t.prototype.executeOperation = function (t, e) {
                  var r = this;
                  null === this.client && this.connect();
                  var n = this.generateOperationId();
                  return (
                    (this.operations[n] = {
                      options: t,
                      handler: e,
                    }),
                    this.applyMiddlewares(t)
                      .then(function (t) {
                        r.checkOperationOptions(t, e),
                          r.operations[n] &&
                          ((r.operations[n] = {
                            options: t,
                            handler: e,
                          }),
                            r.sendMessage(n, _.default.GQL_START, t));
                      })
                      .catch(function (t) {
                        r.unsubscribe(n), e(r.formatErrors(t));
                      }),
                    n
                  );
                }),
                (t.prototype.getObserver = function (t, e, r) {
                  return 'function' == typeof t
                    ? {
                      next: function (e) {
                        return t(e);
                      },
                      error: function (t) {
                        return e && e(t);
                      },
                      complete: function () {
                        return r && r();
                      },
                    }
                    : t;
                }),
                (t.prototype.createMaxConnectTimeGenerator = function () {
                  var t = this.minWsTimeout,
                    e = this.wsTimeout;
                  return new c({
                    min: t,
                    max: e,
                    factor: 1.2,
                  });
                }),
                (t.prototype.clearCheckConnectionInterval = function () {
                  this.checkConnectionIntervalId &&
                    (clearInterval(this.checkConnectionIntervalId), (this.checkConnectionIntervalId = null));
                }),
                (t.prototype.clearMaxConnectTimeout = function () {
                  this.maxConnectTimeoutId &&
                    (clearTimeout(this.maxConnectTimeoutId), (this.maxConnectTimeoutId = null));
                }),
                (t.prototype.clearTryReconnectTimeout = function () {
                  this.tryReconnectTimeoutId &&
                    (clearTimeout(this.tryReconnectTimeoutId), (this.tryReconnectTimeoutId = null));
                }),
                (t.prototype.clearInactivityTimeout = function () {
                  this.inactivityTimeoutId &&
                    (clearTimeout(this.inactivityTimeoutId), (this.inactivityTimeoutId = null));
                }),
                (t.prototype.setInactivityTimeout = function () {
                  var t = this;
                  this.inactivityTimeout > 0 &&
                    0 === Object.keys(this.operations).length &&
                    (this.inactivityTimeoutId = setTimeout(function () {
                      0 === Object.keys(t.operations).length && t.close();
                    }, this.inactivityTimeout));
                }),
                (t.prototype.checkOperationOptions = function (t, e) {
                  var r = t.query,
                    n = t.variables,
                    i = t.operationName;
                  if (!r) throw new Error('Must provide a query.');
                  if (!e) throw new Error('Must provide an handler.');
                  if ((!l.default(r) && !d.getOperationAST(r, i)) || (i && !l.default(i)) || (n && !p.default(n)))
                    throw new Error(
                      'Incorrect option types. query must be a string or a document,`operationName` must be a string, and `variables` must be an object.',
                    );
                }),
                (t.prototype.buildMessage = function (t, e, r) {
                  return {
                    id: t,
                    type: e,
                    payload:
                      r && r.query
                        ? n(n({}, r), {
                          query: 'string' == typeof r.query ? r.query : h.print(r.query),
                        })
                        : r,
                  };
                }),
                (t.prototype.formatErrors = function (t) {
                  return Array.isArray(t)
                    ? t
                    : t && t.errors
                      ? this.formatErrors(t.errors)
                      : t && t.message
                        ? [t]
                        : [
                          {
                            name: 'FormatedError',
                            message: 'Unknown error',
                            originalError: t,
                          },
                        ];
                }),
                (t.prototype.sendMessage = function (t, e, r) {
                  this.sendMessageRaw(this.buildMessage(t, e, r));
                }),
                (t.prototype.sendMessageRaw = function (t) {
                  switch (this.status) {
                    case this.wsImpl.OPEN:
                      var e = JSON.stringify(t);
                      try {
                        JSON.parse(e);
                      } catch (e) {
                        this.eventEmitter.emit('error', new Error('Message must be JSON-serializable. Got: ' + t));
                      }
                      this.client.send(e);
                      break;
                    case this.wsImpl.CONNECTING:
                      this.unsentMessagesQueue.push(t);
                      break;
                    default:
                      this.reconnecting ||
                        this.eventEmitter.emit(
                          'error',
                          new Error(
                            'A message was not sent because socket is not connected, is closing or is already closed. Message was: ' +
                            JSON.stringify(t),
                          ),
                        );
                  }
                }),
                (t.prototype.generateOperationId = function () {
                  return String(++this.nextOperationId);
                }),
                (t.prototype.tryReconnect = function () {
                  var t = this;
                  if (this.reconnect && !(this.backoff.attempts >= this.reconnectionAttempts)) {
                    this.reconnecting ||
                      (Object.keys(this.operations).forEach(function (e) {
                        t.unsentMessagesQueue.push(t.buildMessage(e, _.default.GQL_START, t.operations[e].options));
                      }),
                        (this.reconnecting = !0)),
                      this.clearTryReconnectTimeout();
                    var e = this.backoff.duration();
                    this.tryReconnectTimeoutId = setTimeout(function () {
                      t.connect();
                    }, e);
                  }
                }),
                (t.prototype.flushUnsentMessagesQueue = function () {
                  var t = this;
                  this.unsentMessagesQueue.forEach(function (e) {
                    t.sendMessageRaw(e);
                  }),
                    (this.unsentMessagesQueue = []);
                }),
                (t.prototype.checkConnection = function () {
                  this.wasKeepAliveReceived
                    ? (this.wasKeepAliveReceived = !1)
                    : this.reconnecting || this.close(!1, !0);
                }),
                (t.prototype.checkMaxConnectTimeout = function () {
                  var t = this;
                  this.clearMaxConnectTimeout(),
                    (this.maxConnectTimeoutId = setTimeout(function () {
                      t.status !== t.wsImpl.OPEN && ((t.reconnecting = !0), t.close(!1, !0));
                    }, this.maxConnectTimeGenerator.duration()));
                }),
                (t.prototype.connect = function () {
                  var t,
                    e = this;
                  (this.client = new ((t = this.wsImpl).bind.apply(
                    t,
                    s([void 0, this.url, this.wsProtocols], this.wsOptionArguments),
                  ))()),
                    this.checkMaxConnectTimeout(),
                    (this.client.onopen = function () {
                      return i(e, void 0, void 0, function () {
                        var t, e;
                        return o(this, function (r) {
                          switch (r.label) {
                            case 0:
                              if (this.status !== this.wsImpl.OPEN) return [3, 4];
                              this.clearMaxConnectTimeout(),
                                (this.closedByUser = !1),
                                this.eventEmitter.emit(this.reconnecting ? 'reconnecting' : 'connecting'),
                                (r.label = 1);
                            case 1:
                              return r.trys.push([1, 3, , 4]), [4, this.connectionParams()];
                            case 2:
                              return (
                                (t = r.sent()),
                                this.sendMessage(void 0, _.default.GQL_CONNECTION_INIT, t),
                                this.flushUnsentMessagesQueue(),
                                [3, 4]
                              );
                            case 3:
                              return (
                                (e = r.sent()),
                                this.sendMessage(void 0, _.default.GQL_CONNECTION_ERROR, e),
                                this.flushUnsentMessagesQueue(),
                                [3, 4]
                              );
                            case 4:
                              return [2];
                          }
                        });
                      });
                    }),
                    (this.client.onclose = function () {
                      e.closedByUser || e.close(!1, !1);
                    }),
                    (this.client.onerror = function (t) {
                      e.eventEmitter.emit('error', t);
                    }),
                    (this.client.onmessage = function (t) {
                      var r = t.data;
                      e.processReceivedData(r);
                    });
                }),
                (t.prototype.processReceivedData = function (t) {
                  var e, r;
                  try {
                    r = (e = JSON.parse(t)).id;
                  } catch (e) {
                    throw new Error('Message must be JSON-parseable. Got: ' + t);
                  }
                  if (
                    -1 === [_.default.GQL_DATA, _.default.GQL_COMPLETE, _.default.GQL_ERROR].indexOf(e.type) ||
                    this.operations[r]
                  )
                    switch (e.type) {
                      case _.default.GQL_CONNECTION_ERROR:
                        this.connectionCallback && this.connectionCallback(e.payload);
                        break;
                      case _.default.GQL_CONNECTION_ACK:
                        this.eventEmitter.emit(this.reconnecting ? 'reconnected' : 'connected', e.payload),
                          (this.reconnecting = !1),
                          this.backoff.reset(),
                          this.maxConnectTimeGenerator.reset(),
                          this.connectionCallback && this.connectionCallback();
                        break;
                      case _.default.GQL_COMPLETE:
                        var i = this.operations[r].handler;
                        delete this.operations[r], i.call(this, null, null);
                        break;
                      case _.default.GQL_ERROR:
                        this.operations[r].handler(this.formatErrors(e.payload), null), delete this.operations[r];
                        break;
                      case _.default.GQL_DATA:
                        var o = e.payload.errors
                          ? n(n({}, e.payload), {
                            errors: this.formatErrors(e.payload.errors),
                          })
                          : e.payload;
                        this.operations[r].handler(null, o);
                        break;
                      case _.default.GQL_CONNECTION_KEEP_ALIVE:
                        var s = void 0 === this.wasKeepAliveReceived;
                        (this.wasKeepAliveReceived = !0),
                          s && this.checkConnection(),
                          this.checkConnectionIntervalId &&
                          (clearInterval(this.checkConnectionIntervalId), this.checkConnection()),
                          (this.checkConnectionIntervalId = setInterval(
                            this.checkConnection.bind(this),
                            this.wsTimeout,
                          ));
                        break;
                      default:
                        throw new Error('Invalid message type!');
                    }
                  else this.unsubscribe(r);
                }),
                (t.prototype.unsubscribe = function (t) {
                  this.operations[t] &&
                    (delete this.operations[t],
                      this.setInactivityTimeout(),
                      this.sendMessage(t, _.default.GQL_STOP, void 0));
                }),
                t
              );
            })();
          e.SubscriptionClient = m;
        },
        639: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.WS_TIMEOUT = e.MIN_WS_TIMEOUT = void 0),
            (e.MIN_WS_TIMEOUT = 1e3),
            (e.WS_TIMEOUT = 3e4);
        },
        957: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          });
          var r = (function () {
            function t() {
              throw new Error('Static Class');
            }

            return (
              (t.GQL_CONNECTION_INIT = 'connection_init'),
              (t.GQL_CONNECTION_ACK = 'connection_ack'),
              (t.GQL_CONNECTION_ERROR = 'connection_error'),
              (t.GQL_CONNECTION_KEEP_ALIVE = 'ka'),
              (t.GQL_CONNECTION_TERMINATE = 'connection_terminate'),
              (t.GQL_START = 'start'),
              (t.GQL_DATA = 'data'),
              (t.GQL_ERROR = 'error'),
              (t.GQL_COMPLETE = 'complete'),
              (t.GQL_STOP = 'stop'),
              (t.SUBSCRIPTION_START = 'subscription_start'),
              (t.SUBSCRIPTION_DATA = 'subscription_data'),
              (t.SUBSCRIPTION_SUCCESS = 'subscription_success'),
              (t.SUBSCRIPTION_FAIL = 'subscription_fail'),
              (t.SUBSCRIPTION_END = 'subscription_end'),
              (t.INIT = 'init'),
              (t.INIT_SUCCESS = 'init_success'),
              (t.INIT_FAIL = 'init_fail'),
              (t.KEEP_ALIVE = 'keepalive'),
              t
            );
          })();
          e.default = r;
        },
        892: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.GRAPHQL_SUBSCRIPTIONS = e.GRAPHQL_WS = void 0),
            (e.GRAPHQL_WS = 'graphql-ws'),
            (e.GRAPHQL_SUBSCRIPTIONS = 'graphql-subscriptions');
        },
        905: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.default = function (t) {
              return null !== t && 'object' == typeof t;
            });
        },
        277: (t, e) => {
          'use strict';
          Object.defineProperty(e, '__esModule', {
            value: !0,
          }),
            (e.default = function (t) {
              return 'string' == typeof t;
            });
        },
        121: (t, e, r) => {
          'use strict';
          r.r(e),
            r.d(e, {
              default: () => n,
            }),
            (t = r.hmd(t));
          const n = (function (t) {
            var e,
              r = t.Symbol;
            return (
              'function' == typeof r
                ? r.observable
                  ? (e = r.observable)
                  : ((e = r('observable')), (r.observable = e))
                : (e = '@@observable'),
              e
            );
          })('undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== r.g ? r.g : t);
        },
        329: (t, e, r) => {
          t.exports = r(516).Observable;
        },
        516: (t, e) => {
          'use strict';

          function r(t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          }

          function n(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }

          function i(t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t;
          }

          e.Observable = void 0;
          var o = function () {
            return 'function' == typeof Symbol;
          },
            s = function (t) {
              return o() && Boolean(Symbol[t]);
            },
            a = function (t) {
              return s(t) ? Symbol[t] : '@@' + t;
            };
          o() && !s('observable') && (Symbol.observable = Symbol('observable'));
          var u = a('iterator'),
            c = a('observable'),
            f = a('species');

          function l(t, e) {
            var r = t[e];
            if (null != r) {
              if ('function' != typeof r) throw new TypeError(r + ' is not a function');
              return r;
            }
          }

          function p(t) {
            var e = t.constructor;
            return void 0 !== e && null === (e = e[f]) && (e = void 0), void 0 !== e ? e : I;
          }

          function h(t) {
            return t instanceof I;
          }

          function d(t) {
            d.log
              ? d.log(t)
              : setTimeout(function () {
                throw t;
              });
          }

          function b(t) {
            Promise.resolve().then(function () {
              try {
                t();
              } catch (t) {
                d(t);
              }
            });
          }

          function y(t) {
            var e = t._cleanup;
            if (void 0 !== e && ((t._cleanup = void 0), e))
              try {
                if ('function' == typeof e) e();
                else {
                  var r = l(e, 'unsubscribe');
                  r && r.call(e);
                }
              } catch (t) {
                d(t);
              }
          }

          function v(t) {
            (t._observer = void 0), (t._queue = void 0), (t._state = 'closed');
          }

          function _(t, e, r) {
            t._state = 'running';
            var n = t._observer;
            try {
              var i = l(n, e);
              switch (e) {
                case 'next':
                  i && i.call(n, r);
                  break;
                case 'error':
                  if ((v(t), !i)) throw r;
                  i.call(n, r);
                  break;
                case 'complete':
                  v(t), i && i.call(n);
              }
            } catch (t) {
              d(t);
            }
            'closed' === t._state ? y(t) : 'running' === t._state && (t._state = 'ready');
          }

          function m(t, e, r) {
            if ('closed' !== t._state) {
              if ('buffering' !== t._state)
                return 'ready' !== t._state
                  ? ((t._state = 'buffering'),
                    (t._queue = [
                      {
                        type: e,
                        value: r,
                      },
                    ]),
                    void b(function () {
                      return (function (t) {
                        var e = t._queue;
                        if (e) {
                          (t._queue = void 0), (t._state = 'ready');
                          for (var r = 0; r < e.length && (_(t, e[r].type, e[r].value), 'closed' !== t._state); ++r);
                        }
                      })(t);
                    }))
                  : void _(t, e, r);
              t._queue.push({
                type: e,
                value: r,
              });
            }
          }

          var g = (function () {
            function t(e, n) {
              r(this, t),
                (this._cleanup = void 0),
                (this._observer = e),
                (this._queue = void 0),
                (this._state = 'initializing');
              var i = new w(this);
              try {
                this._cleanup = n.call(void 0, i);
              } catch (t) {
                i.error(t);
              }
              'initializing' === this._state && (this._state = 'ready');
            }

            return (
              i(t, [
                {
                  key: 'unsubscribe',
                  value: function () {
                    'closed' !== this._state && (v(this), y(this));
                  },
                },
                {
                  key: 'closed',
                  get: function () {
                    return 'closed' === this._state;
                  },
                },
              ]),
              t
            );
          })(),
            w = (function () {
              function t(e) {
                r(this, t), (this._subscription = e);
              }

              return (
                i(t, [
                  {
                    key: 'next',
                    value: function (t) {
                      m(this._subscription, 'next', t);
                    },
                  },
                  {
                    key: 'error',
                    value: function (t) {
                      m(this._subscription, 'error', t);
                    },
                  },
                  {
                    key: 'complete',
                    value: function () {
                      m(this._subscription, 'complete');
                    },
                  },
                  {
                    key: 'closed',
                    get: function () {
                      return 'closed' === this._subscription._state;
                    },
                  },
                ]),
                t
              );
            })(),
            I = (function () {
              function t(e) {
                if ((r(this, t), !(this instanceof t)))
                  throw new TypeError('Observable cannot be called as a function');
                if ('function' != typeof e) throw new TypeError('Observable initializer must be a function');
                this._subscriber = e;
              }

              return (
                i(
                  t,
                  [
                    {
                      key: 'subscribe',
                      value: function (t) {
                        return (
                          ('object' == typeof t && null !== t) ||
                          (t = {
                            next: t,
                            error: arguments[1],
                            complete: arguments[2],
                          }),
                          new g(t, this._subscriber)
                        );
                      },
                    },
                    {
                      key: 'forEach',
                      value: function (t) {
                        var e = this;
                        return new Promise(function (r, n) {
                          if ('function' == typeof t)
                            var i = e.subscribe({
                              next: function (e) {
                                try {
                                  t(e, o);
                                } catch (t) {
                                  n(t), i.unsubscribe();
                                }
                              },
                              error: n,
                              complete: r,
                            });
                          else n(new TypeError(t + ' is not a function'));

                          function o() {
                            i.unsubscribe(), r();
                          }
                        });
                      },
                    },
                    {
                      key: 'map',
                      value: function (t) {
                        var e = this;
                        if ('function' != typeof t) throw new TypeError(t + ' is not a function');
                        return new (p(this))(function (r) {
                          return e.subscribe({
                            next: function (e) {
                              try {
                                e = t(e);
                              } catch (t) {
                                return r.error(t);
                              }
                              r.next(e);
                            },
                            error: function (t) {
                              r.error(t);
                            },
                            complete: function () {
                              r.complete();
                            },
                          });
                        });
                      },
                    },
                    {
                      key: 'filter',
                      value: function (t) {
                        var e = this;
                        if ('function' != typeof t) throw new TypeError(t + ' is not a function');
                        return new (p(this))(function (r) {
                          return e.subscribe({
                            next: function (e) {
                              try {
                                if (!t(e)) return;
                              } catch (t) {
                                return r.error(t);
                              }
                              r.next(e);
                            },
                            error: function (t) {
                              r.error(t);
                            },
                            complete: function () {
                              r.complete();
                            },
                          });
                        });
                      },
                    },
                    {
                      key: 'reduce',
                      value: function (t) {
                        var e = this;
                        if ('function' != typeof t) throw new TypeError(t + ' is not a function');
                        var r = p(this),
                          n = arguments.length > 1,
                          i = !1,
                          o = arguments[1],
                          s = o;
                        return new r(function (r) {
                          return e.subscribe({
                            next: function (e) {
                              var o = !i;
                              if (((i = !0), !o || n))
                                try {
                                  s = t(s, e);
                                } catch (t) {
                                  return r.error(t);
                                }
                              else s = e;
                            },
                            error: function (t) {
                              r.error(t);
                            },
                            complete: function () {
                              if (!i && !n) return r.error(new TypeError('Cannot reduce an empty sequence'));
                              r.next(s), r.complete();
                            },
                          });
                        });
                      },
                    },
                    {
                      key: 'concat',
                      value: function () {
                        for (var t = this, e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                          r[n] = arguments[n];
                        var i = p(this);
                        return new i(function (e) {
                          var n,
                            o = 0;
                          return (
                            (function t(s) {
                              n = s.subscribe({
                                next: function (t) {
                                  e.next(t);
                                },
                                error: function (t) {
                                  e.error(t);
                                },
                                complete: function () {
                                  o === r.length ? ((n = void 0), e.complete()) : t(i.from(r[o++]));
                                },
                              });
                            })(t),
                            function () {
                              n && (n.unsubscribe(), (n = void 0));
                            }
                          );
                        });
                      },
                    },
                    {
                      key: 'flatMap',
                      value: function (t) {
                        var e = this;
                        if ('function' != typeof t) throw new TypeError(t + ' is not a function');
                        var r = p(this);
                        return new r(function (n) {
                          var i = [],
                            o = e.subscribe({
                              next: function (e) {
                                if (t)
                                  try {
                                    e = t(e);
                                  } catch (t) {
                                    return n.error(t);
                                  }
                                var o = r.from(e).subscribe({
                                  next: function (t) {
                                    n.next(t);
                                  },
                                  error: function (t) {
                                    n.error(t);
                                  },
                                  complete: function () {
                                    var t = i.indexOf(o);
                                    t >= 0 && i.splice(t, 1), s();
                                  },
                                });
                                i.push(o);
                              },
                              error: function (t) {
                                n.error(t);
                              },
                              complete: function () {
                                s();
                              },
                            });

                          function s() {
                            o.closed && 0 === i.length && n.complete();
                          }

                          return function () {
                            i.forEach(function (t) {
                              return t.unsubscribe();
                            }),
                              o.unsubscribe();
                          };
                        });
                      },
                    },
                    {
                      key: c,
                      value: function () {
                        return this;
                      },
                    },
                  ],
                  [
                    {
                      key: 'from',
                      value: function (e) {
                        var r = 'function' == typeof this ? this : t;
                        if (null == e) throw new TypeError(e + ' is not an object');
                        var n = l(e, c);
                        if (n) {
                          var i = n.call(e);
                          if (Object(i) !== i) throw new TypeError(i + ' is not an object');
                          return h(i) && i.constructor === r
                            ? i
                            : new r(function (t) {
                              return i.subscribe(t);
                            });
                        }
                        if (s('iterator') && (n = l(e, u)))
                          return new r(function (t) {
                            b(function () {
                              if (!t.closed) {
                                var r = !0,
                                  i = !1,
                                  o = void 0;
                                try {
                                  for (var s, a = n.call(e)[Symbol.iterator](); !(r = (s = a.next()).done); r = !0) {
                                    var u = s.value;
                                    if ((t.next(u), t.closed)) return;
                                  }
                                } catch (t) {
                                  (i = !0), (o = t);
                                } finally {
                                  try {
                                    r || null == a.return || a.return();
                                  } finally {
                                    if (i) throw o;
                                  }
                                }
                                t.complete();
                              }
                            });
                          });
                        if (Array.isArray(e))
                          return new r(function (t) {
                            b(function () {
                              if (!t.closed) {
                                for (var r = 0; r < e.length; ++r) if ((t.next(e[r]), t.closed)) return;
                                t.complete();
                              }
                            });
                          });
                        throw new TypeError(e + ' is not observable');
                      },
                    },
                    {
                      key: 'of',
                      value: function () {
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        var i = 'function' == typeof this ? this : t;
                        return new i(function (t) {
                          b(function () {
                            if (!t.closed) {
                              for (var e = 0; e < r.length; ++e) if ((t.next(r[e]), t.closed)) return;
                              t.complete();
                            }
                          });
                        });
                      },
                    },
                    {
                      key: f,
                      get: function () {
                        return this;
                      },
                    },
                  ],
                ),
                t
              );
            })();
          (e.Observable = I),
            o() &&
            Object.defineProperty(I, Symbol('extensions'), {
              value: {
                symbol: c,
                hostReportError: d,
              },
              configurable: !0,
            });
        },
        686: (t, e, r) => {
          'use strict';
          r.r(e),
            r.d(e, {
              flatbuffers: () => n,
            });
          var n = {};
          n.Offset,
            n.Table,
            (n.SIZEOF_SHORT = 2),
            (n.SIZEOF_INT = 4),
            (n.FILE_IDENTIFIER_LENGTH = 4),
            (n.SIZE_PREFIX_LENGTH = 4),
            (n.Encoding = {
              UTF8_BYTES: 1,
              UTF16_STRING: 2,
            }),
            (n.int32 = new Int32Array(2)),
            (n.float32 = new Float32Array(n.int32.buffer)),
            (n.float64 = new Float64Array(n.int32.buffer)),
            (n.isLittleEndian = 1 === new Uint16Array(new Uint8Array([1, 0]).buffer)[0]),
            (n.Long = function (t, e) {
              (this.low = 0 | t), (this.high = 0 | e);
            }),
            (n.Long.create = function (t, e) {
              return 0 == t && 0 == e ? n.Long.ZERO : new n.Long(t, e);
            }),
            (n.Long.prototype.toFloat64 = function () {
              return (this.low >>> 0) + 4294967296 * this.high;
            }),
            (n.Long.prototype.equals = function (t) {
              return this.low == t.low && this.high == t.high;
            }),
            (n.Long.ZERO = new n.Long(0, 0)),
            (n.Builder = function (t) {
              if (t) e = t;
              else var e = 1024;
              (this.bb = n.ByteBuffer.allocate(e)),
                (this.space = e),
                (this.minalign = 1),
                (this.vtable = null),
                (this.vtable_in_use = 0),
                (this.isNested = !1),
                (this.object_start = 0),
                (this.vtables = []),
                (this.vector_num_elems = 0),
                (this.force_defaults = !1);
            }),
            (n.Builder.prototype.clear = function () {
              this.bb.clear(),
                (this.space = this.bb.capacity()),
                (this.minalign = 1),
                (this.vtable = null),
                (this.vtable_in_use = 0),
                (this.isNested = !1),
                (this.object_start = 0),
                (this.vtables = []),
                (this.vector_num_elems = 0),
                (this.force_defaults = !1);
            }),
            (n.Builder.prototype.forceDefaults = function (t) {
              this.force_defaults = t;
            }),
            (n.Builder.prototype.dataBuffer = function () {
              return this.bb;
            }),
            (n.Builder.prototype.asUint8Array = function () {
              return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
            }),
            (n.Builder.prototype.prep = function (t, e) {
              t > this.minalign && (this.minalign = t);
              for (var r = (1 + ~(this.bb.capacity() - this.space + e)) & (t - 1); this.space < r + t + e;) {
                var i = this.bb.capacity();
                (this.bb = n.Builder.growByteBuffer(this.bb)), (this.space += this.bb.capacity() - i);
              }
              this.pad(r);
            }),
            (n.Builder.prototype.pad = function (t) {
              for (var e = 0; e < t; e++) this.bb.writeInt8(--this.space, 0);
            }),
            (n.Builder.prototype.writeInt8 = function (t) {
              this.bb.writeInt8((this.space -= 1), t);
            }),
            (n.Builder.prototype.writeInt16 = function (t) {
              this.bb.writeInt16((this.space -= 2), t);
            }),
            (n.Builder.prototype.writeInt32 = function (t) {
              this.bb.writeInt32((this.space -= 4), t);
            }),
            (n.Builder.prototype.writeInt64 = function (t) {
              this.bb.writeInt64((this.space -= 8), t);
            }),
            (n.Builder.prototype.writeFloat32 = function (t) {
              this.bb.writeFloat32((this.space -= 4), t);
            }),
            (n.Builder.prototype.writeFloat64 = function (t) {
              this.bb.writeFloat64((this.space -= 8), t);
            }),
            (n.Builder.prototype.addInt8 = function (t) {
              this.prep(1, 0), this.writeInt8(t);
            }),
            (n.Builder.prototype.addInt16 = function (t) {
              this.prep(2, 0), this.writeInt16(t);
            }),
            (n.Builder.prototype.addInt32 = function (t) {
              this.prep(4, 0), this.writeInt32(t);
            }),
            (n.Builder.prototype.addInt64 = function (t) {
              this.prep(8, 0), this.writeInt64(t);
            }),
            (n.Builder.prototype.addFloat32 = function (t) {
              this.prep(4, 0), this.writeFloat32(t);
            }),
            (n.Builder.prototype.addFloat64 = function (t) {
              this.prep(8, 0), this.writeFloat64(t);
            }),
            (n.Builder.prototype.addFieldInt8 = function (t, e, r) {
              (this.force_defaults || e != r) && (this.addInt8(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldInt16 = function (t, e, r) {
              (this.force_defaults || e != r) && (this.addInt16(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldInt32 = function (t, e, r) {
              (this.force_defaults || e != r) && (this.addInt32(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldInt64 = function (t, e, r) {
              (!this.force_defaults && e.equals(r)) || (this.addInt64(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldFloat32 = function (t, e, r) {
              (this.force_defaults || e != r) && (this.addFloat32(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldFloat64 = function (t, e, r) {
              (this.force_defaults || e != r) && (this.addFloat64(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldOffset = function (t, e, r) {
              (this.force_defaults || e != r) && (this.addOffset(e), this.slot(t));
            }),
            (n.Builder.prototype.addFieldStruct = function (t, e, r) {
              e != r && (this.nested(e), this.slot(t));
            }),
            (n.Builder.prototype.nested = function (t) {
              if (t != this.offset()) throw new Error('FlatBuffers: struct must be serialized inline.');
            }),
            (n.Builder.prototype.notNested = function () {
              if (this.isNested) throw new Error('FlatBuffers: object serialization must not be nested.');
            }),
            (n.Builder.prototype.slot = function (t) {
              this.vtable[t] = this.offset();
            }),
            (n.Builder.prototype.offset = function () {
              return this.bb.capacity() - this.space;
            }),
            (n.Builder.growByteBuffer = function (t) {
              var e = t.capacity();
              if (3221225472 & e) throw new Error('FlatBuffers: cannot grow buffer beyond 2 gigabytes.');
              var r = e << 1,
                i = n.ByteBuffer.allocate(r);
              return i.setPosition(r - e), i.bytes().set(t.bytes(), r - e), i;
            }),
            (n.Builder.prototype.addOffset = function (t) {
              this.prep(n.SIZEOF_INT, 0), this.writeInt32(this.offset() - t + n.SIZEOF_INT);
            }),
            (n.Builder.prototype.startObject = function (t) {
              this.notNested(), null == this.vtable && (this.vtable = []), (this.vtable_in_use = t);
              for (var e = 0; e < t; e++) this.vtable[e] = 0;
              (this.isNested = !0), (this.object_start = this.offset());
            }),
            (n.Builder.prototype.endObject = function () {
              if (null == this.vtable || !this.isNested)
                throw new Error('FlatBuffers: endObject called without startObject');
              this.addInt32(0);
              for (var t = this.offset(), e = this.vtable_in_use - 1; e >= 0 && 0 == this.vtable[e]; e--);
              for (var r = e + 1; e >= 0; e--) this.addInt16(0 != this.vtable[e] ? t - this.vtable[e] : 0);
              this.addInt16(t - this.object_start);
              var i = (r + 2) * n.SIZEOF_SHORT;
              this.addInt16(i);
              var o = 0,
                s = this.space;
              t: for (e = 0; e < this.vtables.length; e++) {
                var a = this.bb.capacity() - this.vtables[e];
                if (i == this.bb.readInt16(a)) {
                  for (var u = n.SIZEOF_SHORT; u < i; u += n.SIZEOF_SHORT)
                    if (this.bb.readInt16(s + u) != this.bb.readInt16(a + u)) continue t;
                  o = this.vtables[e];
                  break;
                }
              }
              return (
                o
                  ? ((this.space = this.bb.capacity() - t), this.bb.writeInt32(this.space, o - t))
                  : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)),
                (this.isNested = !1),
                t
              );
            }),
            (n.Builder.prototype.finish = function (t, e, r) {
              var i = r ? n.SIZE_PREFIX_LENGTH : 0;
              if (e) {
                var o = e;
                if (
                  (this.prep(this.minalign, n.SIZEOF_INT + n.FILE_IDENTIFIER_LENGTH + i),
                    o.length != n.FILE_IDENTIFIER_LENGTH)
                )
                  throw new Error('FlatBuffers: file identifier must be length ' + n.FILE_IDENTIFIER_LENGTH);
                for (var s = n.FILE_IDENTIFIER_LENGTH - 1; s >= 0; s--) this.writeInt8(o.charCodeAt(s));
              }
              this.prep(this.minalign, n.SIZEOF_INT + i),
                this.addOffset(t),
                i && this.addInt32(this.bb.capacity() - this.space),
                this.bb.setPosition(this.space);
            }),
            (n.Builder.prototype.finishSizePrefixed = function (t, e) {
              this.finish(t, e, !0);
            }),
            (n.Builder.prototype.requiredField = function (t, e) {
              var r = this.bb.capacity() - t,
                n = r - this.bb.readInt32(r);
              if (0 == this.bb.readInt16(n + e)) throw new Error('FlatBuffers: field ' + e + ' must be set');
            }),
            (n.Builder.prototype.startVector = function (t, e, r) {
              this.notNested(), (this.vector_num_elems = e), this.prep(n.SIZEOF_INT, t * e), this.prep(r, t * e);
            }),
            (n.Builder.prototype.endVector = function () {
              return this.writeInt32(this.vector_num_elems), this.offset();
            }),
            (n.Builder.prototype.createString = function (t) {
              if (t instanceof Uint8Array) var e = t;
              else {
                e = [];
                for (var r = 0; r < t.length;) {
                  var n,
                    i = t.charCodeAt(r++);
                  (n = i < 55296 || i >= 56320 ? i : (i << 10) + t.charCodeAt(r++) + -56613888) < 128
                    ? e.push(n)
                    : (n < 2048
                      ? e.push(((n >> 6) & 31) | 192)
                      : (n < 65536
                        ? e.push(((n >> 12) & 15) | 224)
                        : e.push(((n >> 18) & 7) | 240, ((n >> 12) & 63) | 128),
                        e.push(((n >> 6) & 63) | 128)),
                      e.push((63 & n) | 128));
                }
              }
              this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition((this.space -= e.length)), (r = 0);
              for (var o = this.space, s = this.bb.bytes(); r < e.length; r++) s[o++] = e[r];
              return this.endVector();
            }),
            (n.Builder.prototype.createLong = function (t, e) {
              return n.Long.create(t, e);
            }),
            (n.ByteBuffer = function (t) {
              (this.bytes_ = t), (this.position_ = 0);
            }),
            (n.ByteBuffer.allocate = function (t) {
              return new n.ByteBuffer(new Uint8Array(t));
            }),
            (n.ByteBuffer.prototype.clear = function () {
              this.position_ = 0;
            }),
            (n.ByteBuffer.prototype.bytes = function () {
              return this.bytes_;
            }),
            (n.ByteBuffer.prototype.position = function () {
              return this.position_;
            }),
            (n.ByteBuffer.prototype.setPosition = function (t) {
              this.position_ = t;
            }),
            (n.ByteBuffer.prototype.capacity = function () {
              return this.bytes_.length;
            }),
            (n.ByteBuffer.prototype.readInt8 = function (t) {
              return (this.readUint8(t) << 24) >> 24;
            }),
            (n.ByteBuffer.prototype.readUint8 = function (t) {
              return this.bytes_[t];
            }),
            (n.ByteBuffer.prototype.readInt16 = function (t) {
              return (this.readUint16(t) << 16) >> 16;
            }),
            (n.ByteBuffer.prototype.readUint16 = function (t) {
              return this.bytes_[t] | (this.bytes_[t + 1] << 8);
            }),
            (n.ByteBuffer.prototype.readInt32 = function (t) {
              return (
                this.bytes_[t] | (this.bytes_[t + 1] << 8) | (this.bytes_[t + 2] << 16) | (this.bytes_[t + 3] << 24)
              );
            }),
            (n.ByteBuffer.prototype.readUint32 = function (t) {
              return this.readInt32(t) >>> 0;
            }),
            (n.ByteBuffer.prototype.readInt64 = function (t) {
              return new n.Long(this.readInt32(t), this.readInt32(t + 4));
            }),
            (n.ByteBuffer.prototype.readUint64 = function (t) {
              return new n.Long(this.readUint32(t), this.readUint32(t + 4));
            }),
            (n.ByteBuffer.prototype.readFloat32 = function (t) {
              return (n.int32[0] = this.readInt32(t)), n.float32[0];
            }),
            (n.ByteBuffer.prototype.readFloat64 = function (t) {
              return (
                (n.int32[n.isLittleEndian ? 0 : 1] = this.readInt32(t)),
                (n.int32[n.isLittleEndian ? 1 : 0] = this.readInt32(t + 4)),
                n.float64[0]
              );
            }),
            (n.ByteBuffer.prototype.writeInt8 = function (t, e) {
              this.bytes_[t] = e;
            }),
            (n.ByteBuffer.prototype.writeUint8 = function (t, e) {
              this.bytes_[t] = e;
            }),
            (n.ByteBuffer.prototype.writeInt16 = function (t, e) {
              (this.bytes_[t] = e), (this.bytes_[t + 1] = e >> 8);
            }),
            (n.ByteBuffer.prototype.writeUint16 = function (t, e) {
              (this.bytes_[t] = e), (this.bytes_[t + 1] = e >> 8);
            }),
            (n.ByteBuffer.prototype.writeInt32 = function (t, e) {
              (this.bytes_[t] = e),
                (this.bytes_[t + 1] = e >> 8),
                (this.bytes_[t + 2] = e >> 16),
                (this.bytes_[t + 3] = e >> 24);
            }),
            (n.ByteBuffer.prototype.writeUint32 = function (t, e) {
              (this.bytes_[t] = e),
                (this.bytes_[t + 1] = e >> 8),
                (this.bytes_[t + 2] = e >> 16),
                (this.bytes_[t + 3] = e >> 24);
            }),
            (n.ByteBuffer.prototype.writeInt64 = function (t, e) {
              this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high);
            }),
            (n.ByteBuffer.prototype.writeUint64 = function (t, e) {
              this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high);
            }),
            (n.ByteBuffer.prototype.writeFloat32 = function (t, e) {
              (n.float32[0] = e), this.writeInt32(t, n.int32[0]);
            }),
            (n.ByteBuffer.prototype.writeFloat64 = function (t, e) {
              (n.float64[0] = e),
                this.writeInt32(t, n.int32[n.isLittleEndian ? 0 : 1]),
                this.writeInt32(t + 4, n.int32[n.isLittleEndian ? 1 : 0]);
            }),
            (n.ByteBuffer.prototype.getBufferIdentifier = function () {
              if (this.bytes_.length < this.position_ + n.SIZEOF_INT + n.FILE_IDENTIFIER_LENGTH)
                throw new Error('FlatBuffers: ByteBuffer is too short to contain an identifier.');
              for (var t = '', e = 0; e < n.FILE_IDENTIFIER_LENGTH; e++)
                t += String.fromCharCode(this.readInt8(this.position_ + n.SIZEOF_INT + e));
              return t;
            }),
            (n.ByteBuffer.prototype.__offset = function (t, e) {
              var r = t - this.readInt32(t);
              return e < this.readInt16(r) ? this.readInt16(r + e) : 0;
            }),
            (n.ByteBuffer.prototype.__union = function (t, e) {
              return (t.bb_pos = e + this.readInt32(e)), (t.bb = this), t;
            }),
            (n.ByteBuffer.prototype.__string = function (t, e) {
              t += this.readInt32(t);
              var r = this.readInt32(t),
                i = '',
                o = 0;
              if (((t += n.SIZEOF_INT), e === n.Encoding.UTF8_BYTES)) return this.bytes_.subarray(t, t + r);
              for (; o < r;) {
                var s,
                  a = this.readUint8(t + o++);
                if (a < 192) s = a;
                else {
                  var u = this.readUint8(t + o++);
                  if (a < 224) s = ((31 & a) << 6) | (63 & u);
                  else {
                    var c = this.readUint8(t + o++);
                    s =
                      a < 240
                        ? ((15 & a) << 12) | ((63 & u) << 6) | (63 & c)
                        : ((7 & a) << 18) | ((63 & u) << 12) | ((63 & c) << 6) | (63 & this.readUint8(t + o++));
                  }
                }
                s < 65536
                  ? (i += String.fromCharCode(s))
                  : ((s -= 65536), (i += String.fromCharCode(55296 + (s >> 10), 56320 + (1023 & s))));
              }
              return i;
            }),
            (n.ByteBuffer.prototype.__indirect = function (t) {
              return t + this.readInt32(t);
            }),
            (n.ByteBuffer.prototype.__vector = function (t) {
              return t + this.readInt32(t) + n.SIZEOF_INT;
            }),
            (n.ByteBuffer.prototype.__vector_len = function (t) {
              return this.readInt32(t + this.readInt32(t));
            }),
            (n.ByteBuffer.prototype.__has_identifier = function (t) {
              if (t.length != n.FILE_IDENTIFIER_LENGTH)
                throw new Error('FlatBuffers: file identifier must be length ' + n.FILE_IDENTIFIER_LENGTH);
              for (var e = 0; e < n.FILE_IDENTIFIER_LENGTH; e++)
                if (t.charCodeAt(e) != this.readInt8(this.position_ + n.SIZEOF_INT + e)) return !1;
              return !0;
            }),
            (n.ByteBuffer.prototype.createLong = function (t, e) {
              return n.Long.create(t, e);
            });
        },
      },
        e = {};

      function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = (e[n] = {
          id: n,
          loaded: !1,
          exports: {},
        });
        return t[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
      }

      (r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return (
          r.d(e, {
            a: e,
          }),
          e
        );
      }),
        (r.d = (t, e) => {
          for (var n in e)
            r.o(e, n) &&
              !r.o(t, n) &&
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n],
              });
        }),
        (r.g = (function () {
          if ('object' == typeof globalThis) return globalThis;
          try {
            return this || new Function('return this')();
          } catch (t) {
            if ('object' == typeof window) return window;
          }
        })()),
        (r.hmd = t => (
          (t = Object.create(t)).children || (t.children = []),
          Object.defineProperty(t, 'exports', {
            enumerable: !0,
            set: () => {
              throw new Error(
                'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + t.id,
              );
            },
          }),
          t
        )),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = t => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, {
              value: 'Module',
            }),
            Object.defineProperty(t, '__esModule', {
              value: !0,
            });
        }),
        (r.p = 'https://pubapi.ticketmaster.com/sdk/');
      var n = {};
      return (
        (() => {
          'use strict';

          r.d(n, {
            default: () => fi,
          });
          const t = 'MANIFEST_HTTP_ERROR',
            e = 'VERSION_MISMATCH',
            i = 'MANIFEST_REST_TIMEOUT_EXCEEDED';
          new Error(i);

          class o extends Error {
            constructor(t, e) {
              super(t), (this.stack = e), (this.name = 'RASError'), Object.setPrototypeOf(this, o.prototype);
            }
          }

          var s = function (t, e) {
            return (
              (s =
                Object.setPrototypeOf ||
                ({
                  __proto__: [],
                } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                }),
              s(t, e)
            );
          };

          function a(t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');

            function r() {
              this.constructor = t;
            }

            s(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
          }

          function u(t, e) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: a(0),
                throw: a(1),
                return: a(2),
              }),
              'function' == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
              o
            );

            function a(o) {
              return function (a) {
                return (function (o) {
                  if (r) throw new TypeError('Generator is already executing.');
                  for (; s;)
                    try {
                      if (
                        ((r = 1),
                          n &&
                          (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return (
                            s.label++,
                            {
                              value: o[1],
                              done: !1,
                            }
                          );
                        case 5:
                          s.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                            s = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = e.call(t, s);
                    } catch (t) {
                      (o = [6, t]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0,
                  };
                })([o, a]);
              };
            }
          }

          function c(t) {
            var e = 'function' == typeof Symbol && Symbol.iterator,
              r = e && t[e],
              n = 0;
            if (r) return r.call(t);
            if (t && 'number' == typeof t.length)
              return {
                next: function () {
                  return (
                    t && n >= t.length && (t = void 0),
                    {
                      value: t && t[n++],
                      done: !t,
                    }
                  );
                },
              };
            throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
          }

          function f(t, e) {
            var r = 'function' == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
              i,
              o = r.call(t),
              s = [];
            try {
              for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;) s.push(n.value);
            } catch (t) {
              i = {
                error: t,
              };
            } finally {
              try {
                n && !n.done && (r = o.return) && r.call(o);
              } finally {
                if (i) throw i.error;
              }
            }
            return s;
          }

          function l(t, e, r) {
            if (r || 2 === arguments.length)
              for (var n, i = 0, o = e.length; i < o; i++)
                (!n && i in e) || (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
          }

          function p(t) {
            return this instanceof p ? ((this.v = t), this) : new p(t);
          }

          function h(t, e, r) {
            if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
            var n,
              i = r.apply(t, e || []),
              o = [];
            return (
              (n = {}),
              s('next'),
              s('throw'),
              s('return'),
              (n[Symbol.asyncIterator] = function () {
                return this;
              }),
              n
            );

            function s(t) {
              i[t] &&
                (n[t] = function (e) {
                  return new Promise(function (r, n) {
                    o.push([t, e, r, n]) > 1 || a(t, e);
                  });
                });
            }

            function a(t, e) {
              try {
                (r = i[t](e)).value instanceof p ? Promise.resolve(r.value.v).then(u, c) : f(o[0][2], r);
              } catch (t) {
                f(o[0][3], t);
              }
              var r;
            }

            function u(t) {
              a('next', t);
            }

            function c(t) {
              a('throw', t);
            }

            function f(t, e) {
              t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
            }
          }

          function d(t) {
            return 'function' == typeof t;
          }

          function b(t) {
            var e = t(function (t) {
              Error.call(t), (t.stack = new Error().stack);
            });
            return (e.prototype = Object.create(Error.prototype)), (e.prototype.constructor = e), e;
          }

          Object.create, Object.create;
          var y = b(function (t) {
            return function (e) {
              t(this),
                (this.message = e
                  ? e.length +
                  ' errors occurred during unsubscription:\n' +
                  e
                    .map(function (t, e) {
                      return e + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                  : ''),
                (this.name = 'UnsubscriptionError'),
                (this.errors = e);
            };
          });

          function v(t, e) {
            if (t) {
              var r = t.indexOf(e);
              0 <= r && t.splice(r, 1);
            }
          }

          var _ = (function () {
            function t(t) {
              (this.initialTeardown = t), (this.closed = !1), (this._parentage = null), (this._finalizers = null);
            }

            return (
              (t.prototype.unsubscribe = function () {
                var t, e, r, n, i;
                if (!this.closed) {
                  this.closed = !0;
                  var o = this._parentage;
                  if (o)
                    if (((this._parentage = null), Array.isArray(o)))
                      try {
                        for (var s = c(o), a = s.next(); !a.done; a = s.next()) a.value.remove(this);
                      } catch (e) {
                        t = {
                          error: e,
                        };
                      } finally {
                        try {
                          a && !a.done && (e = s.return) && e.call(s);
                        } finally {
                          if (t) throw t.error;
                        }
                      }
                    else o.remove(this);
                  var u = this.initialTeardown;
                  if (d(u))
                    try {
                      u();
                    } catch (t) {
                      i = t instanceof y ? t.errors : [t];
                    }
                  var p = this._finalizers;
                  if (p) {
                    this._finalizers = null;
                    try {
                      for (var h = c(p), b = h.next(); !b.done; b = h.next()) {
                        var v = b.value;
                        try {
                          w(v);
                        } catch (t) {
                          (i = null != i ? i : []), t instanceof y ? (i = l(l([], f(i)), f(t.errors))) : i.push(t);
                        }
                      }
                    } catch (t) {
                      r = {
                        error: t,
                      };
                    } finally {
                      try {
                        b && !b.done && (n = h.return) && n.call(h);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                  }
                  if (i) throw new y(i);
                }
              }),
              (t.prototype.add = function (e) {
                var r;
                if (e && e !== this)
                  if (this.closed) w(e);
                  else {
                    if (e instanceof t) {
                      if (e.closed || e._hasParent(this)) return;
                      e._addParent(this);
                    }
                    (this._finalizers = null !== (r = this._finalizers) && void 0 !== r ? r : []).push(e);
                  }
              }),
              (t.prototype._hasParent = function (t) {
                var e = this._parentage;
                return e === t || (Array.isArray(e) && e.includes(t));
              }),
              (t.prototype._addParent = function (t) {
                var e = this._parentage;
                this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
              }),
              (t.prototype._removeParent = function (t) {
                var e = this._parentage;
                e === t ? (this._parentage = null) : Array.isArray(e) && v(e, t);
              }),
              (t.prototype.remove = function (e) {
                var r = this._finalizers;
                r && v(r, e), e instanceof t && e._removeParent(this);
              }),
              (t.EMPTY = (((e = new t()).closed = !0), e)),
              t
            );
            var e;
          })(),
            m = _.EMPTY;

          function g(t) {
            return t instanceof _ || (t && 'closed' in t && d(t.remove) && d(t.add) && d(t.unsubscribe));
          }

          function w(t) {
            d(t) ? t() : t.unsubscribe();
          }

          var I = null,
            S = null,
            E = void 0,
            O = !1,
            T = !1,
            k = {
              setTimeout: function (t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = k.delegate;
                return (null == i ? void 0 : i.setTimeout)
                  ? i.setTimeout.apply(i, l([t, e], f(r)))
                  : setTimeout.apply(void 0, l([t, e], f(r)));
              },
              clearTimeout: function (t) {
                var e = k.delegate;
                return ((null == e ? void 0 : e.clearTimeout) || clearTimeout)(t);
              },
              delegate: void 0,
            };

          function A(t) {
            k.setTimeout(function () {
              if (!I) throw t;
              I(t);
            });
          }

          function R() { }

          var F = x('C', void 0, void 0);

          function x(t, e, r) {
            return {
              kind: t,
              value: e,
              error: r,
            };
          }

          var P = null;

          function C(t) {
            if (O) {
              var e = !P;
              if (
                (e &&
                  (P = {
                    errorThrown: !1,
                    error: null,
                  }),
                  t(),
                  e)
              ) {
                var r = P,
                  n = r.errorThrown,
                  i = r.error;
                if (((P = null), n)) throw i;
              }
            } else t();
          }

          var V = (function (t) {
            function e(e) {
              var r = t.call(this) || this;
              return (r.isStopped = !1), e ? ((r.destination = e), g(e) && e.add(r)) : (r.destination = q), r;
            }

            return (
              a(e, t),
              (e.create = function (t, e, r) {
                return new j(t, e, r);
              }),
              (e.prototype.next = function (t) {
                this.isStopped
                  ? Q(
                    (function (t) {
                      return x('N', t, void 0);
                    })(t),
                    this,
                  )
                  : this._next(t);
              }),
              (e.prototype.error = function (t) {
                this.isStopped ? Q(x('E', void 0, t), this) : ((this.isStopped = !0), this._error(t));
              }),
              (e.prototype.complete = function () {
                this.isStopped ? Q(F, this) : ((this.isStopped = !0), this._complete());
              }),
              (e.prototype.unsubscribe = function () {
                this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this), (this.destination = null));
              }),
              (e.prototype._next = function (t) {
                this.destination.next(t);
              }),
              (e.prototype._error = function (t) {
                try {
                  this.destination.error(t);
                } finally {
                  this.unsubscribe();
                }
              }),
              (e.prototype._complete = function () {
                try {
                  this.destination.complete();
                } finally {
                  this.unsubscribe();
                }
              }),
              e
            );
          })(_),
            B = Function.prototype.bind;

          function N(t, e) {
            return B.call(t, e);
          }

          var L = (function () {
            function t(t) {
              this.partialObserver = t;
            }

            return (
              (t.prototype.next = function (t) {
                var e = this.partialObserver;
                if (e.next)
                  try {
                    e.next(t);
                  } catch (t) {
                    M(t);
                  }
              }),
              (t.prototype.error = function (t) {
                var e = this.partialObserver;
                if (e.error)
                  try {
                    e.error(t);
                  } catch (t) {
                    M(t);
                  }
                else M(t);
              }),
              (t.prototype.complete = function () {
                var t = this.partialObserver;
                if (t.complete)
                  try {
                    t.complete();
                  } catch (t) {
                    M(t);
                  }
              }),
              t
            );
          })(),
            j = (function (t) {
              function e(e, r, n) {
                var i,
                  o,
                  s = t.call(this) || this;
                return (
                  d(e) || !e
                    ? (i = {
                      next: null != e ? e : void 0,
                      error: null != r ? r : void 0,
                      complete: null != n ? n : void 0,
                    })
                    : s && T
                      ? (((o = Object.create(e)).unsubscribe = function () {
                        return s.unsubscribe();
                      }),
                        (i = {
                          next: e.next && N(e.next, o),
                          error: e.error && N(e.error, o),
                          complete: e.complete && N(e.complete, o),
                        }))
                      : (i = e),
                  (s.destination = new L(i)),
                  s
                );
              }

              return a(e, t), e;
            })(V);

          function M(t) {
            var e;
            O ? ((e = t), O && P && ((P.errorThrown = !0), (P.error = e))) : A(t);
          }

          function Q(t, e) {
            var r = S;
            r &&
              k.setTimeout(function () {
                return r(t, e);
              });
          }

          var q = {
            closed: !0,
            next: R,
            error: function (t) {
              throw t;
            },
            complete: R,
          },
            D = ('function' == typeof Symbol && Symbol.observable) || '@@observable';

          function U(t) {
            return t;
          }

          function G(t) {
            return 0 === t.length
              ? U
              : 1 === t.length
                ? t[0]
                : function (e) {
                  return t.reduce(function (t, e) {
                    return e(t);
                  }, e);
                };
          }

          var z = (function () {
            function t(t) {
              t && (this._subscribe = t);
            }

            return (
              (t.prototype.lift = function (e) {
                var r = new t();
                return (r.source = this), (r.operator = e), r;
              }),
              (t.prototype.subscribe = function (t, e, r) {
                var n,
                  i = this,
                  o =
                    ((n = t) && n instanceof V) ||
                      ((function (t) {
                        return t && d(t.next) && d(t.error) && d(t.complete);
                      })(n) &&
                        g(n))
                      ? t
                      : new j(t, e, r);
                return (
                  C(function () {
                    var t = i,
                      e = t.operator,
                      r = t.source;
                    o.add(e ? e.call(o, r) : r ? i._subscribe(o) : i._trySubscribe(o));
                  }),
                  o
                );
              }),
              (t.prototype._trySubscribe = function (t) {
                try {
                  return this._subscribe(t);
                } catch (e) {
                  t.error(e);
                }
              }),
              (t.prototype.forEach = function (t, e) {
                var r = this;
                return new (e = K(e))(function (e, n) {
                  var i = new j({
                    next: function (e) {
                      try {
                        t(e);
                      } catch (t) {
                        n(t), i.unsubscribe();
                      }
                    },
                    error: n,
                    complete: e,
                  });
                  r.subscribe(i);
                });
              }),
              (t.prototype._subscribe = function (t) {
                var e;
                return null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t);
              }),
              (t.prototype[D] = function () {
                return this;
              }),
              (t.prototype.pipe = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return G(t)(this);
              }),
              (t.prototype.toPromise = function (t) {
                var e = this;
                return new (t = K(t))(function (t, r) {
                  var n;
                  e.subscribe(
                    function (t) {
                      return (n = t);
                    },
                    function (t) {
                      return r(t);
                    },
                    function () {
                      return t(n);
                    },
                  );
                });
              }),
              (t.create = function (e) {
                return new t(e);
              }),
              t
            );
          })();

          function K(t) {
            var e;
            return null !== (e = null != t ? t : E) && void 0 !== e ? e : Promise;
          }

          function $(t) {
            return function (e) {
              if (
                (function (t) {
                  return d(null == t ? void 0 : t.lift);
                })(e)
              )
                return e.lift(function (e) {
                  try {
                    return t(e, this);
                  } catch (t) {
                    this.error(t);
                  }
                });
              throw new TypeError('Unable to lift unknown Observable type');
            };
          }

          function W(t) {
            return $(function (e, r) {
              try {
                e.subscribe(r);
              } finally {
                r.add(t);
              }
            });
          }

          function H(t, e, r, n, i) {
            return new Y(t, e, r, n, i);
          }

          var Y = (function (t) {
            function e(e, r, n, i, o, s) {
              var a = t.call(this, e) || this;
              return (
                (a.onFinalize = o),
                (a.shouldUnsubscribe = s),
                (a._next = r
                  ? function (t) {
                    try {
                      r(t);
                    } catch (t) {
                      e.error(t);
                    }
                  }
                  : t.prototype._next),
                (a._error = i
                  ? function (t) {
                    try {
                      i(t);
                    } catch (t) {
                      e.error(t);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                  : t.prototype._error),
                (a._complete = n
                  ? function () {
                    try {
                      n();
                    } catch (t) {
                      e.error(t);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                  : t.prototype._complete),
                a
              );
            }

            return (
              a(e, t),
              (e.prototype.unsubscribe = function () {
                var e;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                  var r = this.closed;
                  t.prototype.unsubscribe.call(this),
                    !r && (null === (e = this.onFinalize) || void 0 === e || e.call(this));
                }
              }),
              e
            );
          })(V);

          function J(t, e, r) {
            var n =
              d(t) || e || r
                ? {
                  next: t,
                  error: e,
                  complete: r,
                }
                : t;
            return n
              ? $(function (t, e) {
                var r;
                null === (r = n.subscribe) || void 0 === r || r.call(n);
                var i = !0;
                t.subscribe(
                  H(
                    e,
                    function (t) {
                      var r;
                      null === (r = n.next) || void 0 === r || r.call(n, t), e.next(t);
                    },
                    function () {
                      var t;
                      (i = !1), null === (t = n.complete) || void 0 === t || t.call(n), e.complete();
                    },
                    function (t) {
                      var r;
                      (i = !1), null === (r = n.error) || void 0 === r || r.call(n, t), e.error(t);
                    },
                    function () {
                      var t, e;
                      i && (null === (t = n.unsubscribe) || void 0 === t || t.call(n)),
                        null === (e = n.finalize) || void 0 === e || e.call(n);
                    },
                  ),
                );
              })
              : U;
          }

          function Z(t, e) {
            return $(function (r, n) {
              var i = 0;
              r.subscribe(
                H(n, function (r) {
                  n.next(t.call(e, r, i++));
                }),
              );
            });
          }

          var X = function (t) {
            return t && 'number' == typeof t.length && 'function' != typeof t;
          };

          function tt(t) {
            return d(null == t ? void 0 : t.then);
          }

          function et(t) {
            return d(t[D]);
          }

          function rt(t) {
            return Symbol.asyncIterator && d(null == t ? void 0 : t[Symbol.asyncIterator]);
          }

          function nt(t) {
            return new TypeError(
              'You provided ' +
              (null !== t && 'object' == typeof t ? 'an invalid object' : "'" + t + "'") +
              ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.',
            );
          }

          var it = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';

          function ot(t) {
            return d(null == t ? void 0 : t[it]);
          }

          function st(t) {
            return h(this, arguments, function () {
              var e, r, n;
              return u(this, function (i) {
                switch (i.label) {
                  case 0:
                    (e = t.getReader()), (i.label = 1);
                  case 1:
                    i.trys.push([1, , 9, 10]), (i.label = 2);
                  case 2:
                    return [4, p(e.read())];
                  case 3:
                    return (r = i.sent()), (n = r.value), r.done ? [4, p(void 0)] : [3, 5];
                  case 4:
                    return [2, i.sent()];
                  case 5:
                    return [4, p(n)];
                  case 6:
                    return [4, i.sent()];
                  case 7:
                    return i.sent(), [3, 2];
                  case 8:
                    return [3, 10];
                  case 9:
                    return e.releaseLock(), [7];
                  case 10:
                    return [2];
                }
              });
            });
          }

          function at(t) {
            return d(null == t ? void 0 : t.getReader);
          }

          function ut(t) {
            if (t instanceof z) return t;
            if (null != t) {
              if (et(t))
                return (
                  (i = t),
                  new z(function (t) {
                    var e = i[D]();
                    if (d(e.subscribe)) return e.subscribe(t);
                    throw new TypeError('Provided object does not correctly implement Symbol.observable');
                  })
                );
              if (X(t))
                return (
                  (n = t),
                  new z(function (t) {
                    for (var e = 0; e < n.length && !t.closed; e++) t.next(n[e]);
                    t.complete();
                  })
                );
              if (tt(t))
                return (
                  (r = t),
                  new z(function (t) {
                    r.then(
                      function (e) {
                        t.closed || (t.next(e), t.complete());
                      },
                      function (e) {
                        return t.error(e);
                      },
                    ).then(null, A);
                  })
                );
              if (rt(t)) return ct(t);
              if (ot(t))
                return (
                  (e = t),
                  new z(function (t) {
                    var r, n;
                    try {
                      for (var i = c(e), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        if ((t.next(s), t.closed)) return;
                      }
                    } catch (t) {
                      r = {
                        error: t,
                      };
                    } finally {
                      try {
                        o && !o.done && (n = i.return) && n.call(i);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
                    t.complete();
                  })
                );
              if (at(t)) return ct(st(t));
            }
            var e, r, n, i;
            throw nt(t);
          }

          function ct(t) {
            return new z(function (e) {
              (function (t, e) {
                var r, n, i, o, s, a, f, l;
                return (
                  (s = this),
                  (a = void 0),
                  (l = function () {
                    var s, a;
                    return u(this, function (u) {
                      switch (u.label) {
                        case 0:
                          u.trys.push([0, 5, 6, 11]),
                            (r = (function (t) {
                              if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
                              var e,
                                r = t[Symbol.asyncIterator];
                              return r
                                ? r.call(t)
                                : ((t = c(t)),
                                  (e = {}),
                                  n('next'),
                                  n('throw'),
                                  n('return'),
                                  (e[Symbol.asyncIterator] = function () {
                                    return this;
                                  }),
                                  e);

                              function n(r) {
                                e[r] =
                                  t[r] &&
                                  function (e) {
                                    return new Promise(function (n, i) {
                                      !(function (t, e, r, n) {
                                        Promise.resolve(n).then(function (e) {
                                          t({
                                            value: e,
                                            done: r,
                                          });
                                        }, e);
                                      })(n, i, (e = t[r](e)).done, e.value);
                                    });
                                  };
                              }
                            })(t)),
                            (u.label = 1);
                        case 1:
                          return [4, r.next()];
                        case 2:
                          if ((n = u.sent()).done) return [3, 4];
                          if (((s = n.value), e.next(s), e.closed)) return [2];
                          u.label = 3;
                        case 3:
                          return [3, 1];
                        case 4:
                          return [3, 11];
                        case 5:
                          return (
                            (a = u.sent()),
                            (i = {
                              error: a,
                            }),
                            [3, 11]
                          );
                        case 6:
                          return u.trys.push([6, , 9, 10]), n && !n.done && (o = r.return) ? [4, o.call(r)] : [3, 8];
                        case 7:
                          u.sent(), (u.label = 8);
                        case 8:
                          return [3, 10];
                        case 9:
                          if (i) throw i.error;
                          return [7];
                        case 10:
                          return [7];
                        case 11:
                          return e.complete(), [2];
                      }
                    });
                  }),
                  new ((f = void 0) || (f = Promise))(function (t, e) {
                    function r(t) {
                      try {
                        i(l.next(t));
                      } catch (t) {
                        e(t);
                      }
                    }

                    function n(t) {
                      try {
                        i(l.throw(t));
                      } catch (t) {
                        e(t);
                      }
                    }

                    function i(e) {
                      var i;
                      e.done
                        ? t(e.value)
                        : ((i = e.value),
                          i instanceof f
                            ? i
                            : new f(function (t) {
                              t(i);
                            })).then(r, n);
                    }

                    i((l = l.apply(s, a || [])).next());
                  })
                );
              })(t, e).catch(function (t) {
                return e.error(t);
              });
            });
          }

          function ft(t, e, r, n, i) {
            void 0 === n && (n = 0), void 0 === i && (i = !1);
            var o = e.schedule(function () {
              r(), i ? t.add(this.schedule(null, n)) : this.unsubscribe();
            }, n);
            if ((t.add(o), !i)) return o;
          }

          function lt(t, e) {
            return (
              void 0 === e && (e = 0),
              $(function (r, n) {
                r.subscribe(
                  H(
                    n,
                    function (r) {
                      return ft(
                        n,
                        t,
                        function () {
                          return n.next(r);
                        },
                        e,
                      );
                    },
                    function () {
                      return ft(
                        n,
                        t,
                        function () {
                          return n.complete();
                        },
                        e,
                      );
                    },
                    function (r) {
                      return ft(
                        n,
                        t,
                        function () {
                          return n.error(r);
                        },
                        e,
                      );
                    },
                  ),
                );
              })
            );
          }

          function pt(t, e) {
            return (
              void 0 === e && (e = 0),
              $(function (r, n) {
                n.add(
                  t.schedule(function () {
                    return r.subscribe(n);
                  }, e),
                );
              })
            );
          }

          function ht(t, e) {
            if (!t) throw new Error('Iterable cannot be null');
            return new z(function (r) {
              ft(r, e, function () {
                var n = t[Symbol.asyncIterator]();
                ft(
                  r,
                  e,
                  function () {
                    n.next().then(function (t) {
                      t.done ? r.complete() : r.next(t.value);
                    });
                  },
                  0,
                  !0,
                );
              });
            });
          }

          function dt(t, e) {
            return e
              ? (function (t, e) {
                if (null != t) {
                  if (et(t))
                    return (function (t, e) {
                      return ut(t).pipe(pt(e), lt(e));
                    })(t, e);
                  if (X(t))
                    return (function (t, e) {
                      return new z(function (r) {
                        var n = 0;
                        return e.schedule(function () {
                          n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
                        });
                      });
                    })(t, e);
                  if (tt(t))
                    return (function (t, e) {
                      return ut(t).pipe(pt(e), lt(e));
                    })(t, e);
                  if (rt(t)) return ht(t, e);
                  if (ot(t))
                    return (function (t, e) {
                      return new z(function (r) {
                        var n;
                        return (
                          ft(r, e, function () {
                            (n = t[it]()),
                              ft(
                                r,
                                e,
                                function () {
                                  var t, e, i;
                                  try {
                                    (e = (t = n.next()).value), (i = t.done);
                                  } catch (t) {
                                    return void r.error(t);
                                  }
                                  i ? r.complete() : r.next(e);
                                },
                                0,
                                !0,
                              );
                          }),
                          function () {
                            return d(null == n ? void 0 : n.return) && n.return();
                          }
                        );
                      });
                    })(t, e);
                  if (at(t))
                    return (function (t, e) {
                      return ht(st(t), e);
                    })(t, e);
                }
                throw nt(t);
              })(t, e)
              : ut(t);
          }

          var bt = new z(function (t) {
            return t.complete();
          });

          function yt(t) {
            return t <= 0
              ? function () {
                return bt;
              }
              : $(function (e, r) {
                var n = 0;
                e.subscribe(
                  H(r, function (e) {
                    ++n <= t && (r.next(e), t <= n && r.complete());
                  }),
                );
              });
          }

          var vt = b(function (t) {
            return function () {
              t(this), (this.name = 'ObjectUnsubscribedError'), (this.message = 'object unsubscribed');
            };
          }),
            _t = (function (t) {
              function e() {
                var e = t.call(this) || this;
                return (
                  (e.closed = !1),
                  (e.currentObservers = null),
                  (e.observers = []),
                  (e.isStopped = !1),
                  (e.hasError = !1),
                  (e.thrownError = null),
                  e
                );
              }

              return (
                a(e, t),
                (e.prototype.lift = function (t) {
                  var e = new mt(this, this);
                  return (e.operator = t), e;
                }),
                (e.prototype._throwIfClosed = function () {
                  if (this.closed) throw new vt();
                }),
                (e.prototype.next = function (t) {
                  var e = this;
                  C(function () {
                    var r, n;
                    if ((e._throwIfClosed(), !e.isStopped)) {
                      e.currentObservers || (e.currentObservers = Array.from(e.observers));
                      try {
                        for (var i = c(e.currentObservers), o = i.next(); !o.done; o = i.next()) o.value.next(t);
                      } catch (t) {
                        r = {
                          error: t,
                        };
                      } finally {
                        try {
                          o && !o.done && (n = i.return) && n.call(i);
                        } finally {
                          if (r) throw r.error;
                        }
                      }
                    }
                  });
                }),
                (e.prototype.error = function (t) {
                  var e = this;
                  C(function () {
                    if ((e._throwIfClosed(), !e.isStopped)) {
                      (e.hasError = e.isStopped = !0), (e.thrownError = t);
                      for (var r = e.observers; r.length;) r.shift().error(t);
                    }
                  });
                }),
                (e.prototype.complete = function () {
                  var t = this;
                  C(function () {
                    if ((t._throwIfClosed(), !t.isStopped)) {
                      t.isStopped = !0;
                      for (var e = t.observers; e.length;) e.shift().complete();
                    }
                  });
                }),
                (e.prototype.unsubscribe = function () {
                  (this.isStopped = this.closed = !0), (this.observers = this.currentObservers = null);
                }),
                Object.defineProperty(e.prototype, 'observed', {
                  get: function () {
                    var t;
                    return (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0;
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype._trySubscribe = function (e) {
                  return this._throwIfClosed(), t.prototype._trySubscribe.call(this, e);
                }),
                (e.prototype._subscribe = function (t) {
                  return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
                }),
                (e.prototype._innerSubscribe = function (t) {
                  var e = this,
                    r = this,
                    n = r.hasError,
                    i = r.isStopped,
                    o = r.observers;
                  return n || i
                    ? m
                    : ((this.currentObservers = null),
                      o.push(t),
                      new _(function () {
                        (e.currentObservers = null), v(o, t);
                      }));
                }),
                (e.prototype._checkFinalizedStatuses = function (t) {
                  var e = this,
                    r = e.hasError,
                    n = e.thrownError,
                    i = e.isStopped;
                  r ? t.error(n) : i && t.complete();
                }),
                (e.prototype.asObservable = function () {
                  var t = new z();
                  return (t.source = this), t;
                }),
                (e.create = function (t, e) {
                  return new mt(t, e);
                }),
                e
              );
            })(z),
            mt = (function (t) {
              function e(e, r) {
                var n = t.call(this) || this;
                return (n.destination = e), (n.source = r), n;
              }

              return (
                a(e, t),
                (e.prototype.next = function (t) {
                  var e, r;
                  null === (r = null === (e = this.destination) || void 0 === e ? void 0 : e.next) ||
                    void 0 === r ||
                    r.call(e, t);
                }),
                (e.prototype.error = function (t) {
                  var e, r;
                  null === (r = null === (e = this.destination) || void 0 === e ? void 0 : e.error) ||
                    void 0 === r ||
                    r.call(e, t);
                }),
                (e.prototype.complete = function () {
                  var t, e;
                  null === (e = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) ||
                    void 0 === e ||
                    e.call(t);
                }),
                (e.prototype._subscribe = function (t) {
                  var e, r;
                  return null !== (r = null === (e = this.source) || void 0 === e ? void 0 : e.subscribe(t)) &&
                    void 0 !== r
                    ? r
                    : m;
                }),
                e
              );
            })(_t);

          function gt(t, e) {
            for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
            return !0 === e
              ? (t(), null)
              : !1 === e
                ? null
                : e
                  .apply(void 0, l([], f(r)))
                  .pipe(yt(1))
                  .subscribe(function () {
                    return t();
                  });
          }

          function wt(t, e) {
            var r = d(t)
              ? t
              : function () {
                return t;
              },
              n = function (t) {
                return t.error(r());
              };
            return new z(
              e
                ? function (t) {
                  return e.schedule(n, 0, t);
                }
                : n,
            );
          }

          function It(t) {
            return t && d(t.schedule);
          }

          function St(t) {
            return t[t.length - 1];
          }

          function Et(t) {
            return It(St(t)) ? t.pop() : void 0;
          }

          function Ot(t, e) {
            return 'number' == typeof St(t) ? t.pop() : e;
          }

          function Tt() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = Et(t);
            return dt(t, r);
          }

          var kt = Array.isArray;

          function At(t) {
            return 1 === t.length && kt(t[0]) ? t[0] : t;
          }

          function Rt(t, e, r) {
            return (
              void 0 === r && (r = 1 / 0),
              d(e)
                ? Rt(function (r, n) {
                  return Z(function (t, i) {
                    return e(r, t, n, i);
                  })(ut(t(r, n)));
                }, r)
                : ('number' == typeof e && (r = e),
                  $(function (e, n) {
                    return (function (t, e, r, n, i, o, s, a) {
                      var u = [],
                        c = 0,
                        f = 0,
                        l = !1,
                        p = function () {
                          !l || u.length || c || e.complete();
                        },
                        h = function (t) {
                          return c < n ? d(t) : u.push(t);
                        },
                        d = function (t) {
                          c++;
                          var i = !1;
                          ut(r(t, f++)).subscribe(
                            H(
                              e,
                              function (t) {
                                e.next(t);
                              },
                              function () {
                                i = !0;
                              },
                              void 0,
                              function () {
                                if (i)
                                  try {
                                    c--;
                                    for (; u.length && c < n;) (t = void 0), (t = u.shift()), d(t);
                                    p();
                                  } catch (t) {
                                    e.error(t);
                                  }
                                var t;
                              },
                            ),
                          );
                        };
                      return (
                        t.subscribe(
                          H(e, h, function () {
                            (l = !0), p();
                          }),
                        ),
                        function () { }
                      );
                    })(e, n, t, r);
                  }))
            );
          }

          function Ft(t) {
            return void 0 === t && (t = 1 / 0), Rt(U, t);
          }

          function xt() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var r = Et(t),
              n = Ot(t, 1 / 0);
            return (
              (t = At(t)),
              $(function (e, i) {
                Ft(n)(dt(l([e], f(t)), r)).subscribe(i);
              })
            );
          }

          function Pt(t) {
            return $(function (e, r) {
              var n,
                i = null,
                o = !1;
              (i = e.subscribe(
                H(r, void 0, void 0, function (s) {
                  (n = ut(t(s, Pt(t)(e)))), i ? (i.unsubscribe(), (i = null), n.subscribe(r)) : (o = !0);
                }),
              )),
                o && (i.unsubscribe(), (i = null), n.subscribe(r));
            });
          }

          var Ct = r(52),
            Vt = r.n(Ct);
          const Bt = r.p + 'static/wasm/roar-0.8.1.wasm';

          class Nt {
            constructor() {
              (this.noExitRuntime = !0),
                (this.wasmMemory = new WebAssembly.Memory({
                  initial: 256,
                  maximum: 256,
                }));
            }

            locateFile(t) {
              return t.match('roaring-wasm-module.wasm') ? Bt : t;
            }
          }

          var Lt = function (t) {
            Vt()(new Nt())
              .then(e => {
                (e.roaring_bitmap_temp_offset = e._get_sizeof_roaring_bitmap_t()),
                  (function (t, e) {
                    const {
                      _roaring_bitmap_create_js: r,
                      _roaring_bitmap_free: n,
                      _roaring_bitmap_get_cardinality: i,
                      _roaring_bitmap_is_empty: o,
                      _roaring_bitmap_add: s,
                      _roaring_bitmap_add_many: a,
                      _roaring_bitmap_remove: u,
                      _roaring_bitmap_maximum: c,
                      _roaring_bitmap_minimum: f,
                      _roaring_bitmap_contains: l,
                      _roaring_bitmap_is_subset: p,
                      _roaring_bitmap_is_strict_subset: h,
                      _roaring_bitmap_to_uint32_array: d,
                      _roaring_bitmap_equals: b,
                      _roaring_bitmap_flip_inplace: y,
                      _roaring_bitmap_optimize_js: v,
                      _roaring_bitmap_select_js: _,
                      _roaring_bitmap_and_cardinality: m,
                      _roaring_bitmap_or_cardinality: g,
                      _roaring_bitmap_andnot_cardinality: w,
                      _roaring_bitmap_xor_cardinality: I,
                      _roaring_bitmap_rank: S,
                      _roaring_bitmap_and_inplace: E,
                      _roaring_bitmap_or_inplace: O,
                      _roaring_bitmap_xor_inplace: T,
                      _roaring_bitmap_andnot_inplace: k,
                      _roaring_bitmap_intersect: A,
                      _roaring_bitmap_jaccard_index: R,
                      _roaring_bitmap_add_checked_js: F,
                      _roaring_bitmap_remove_checked_js: x,
                      _roaring_bitmap_portable_size_in_bytes: P,
                      _roaring_bitmap_portable_serialize_js: C,
                      _roaring_bitmap_portable_deserialize_js: V,
                      _roaring_bitmap_native_size_in_bytes_js: B,
                      _roaring_bitmap_native_deserialize_js: N,
                      _roaring_bitmap_native_serialize_js: L,
                    } = t;

                    class j {
                      constructor(t) {
                        if (((this._ptr = 0), t))
                          try {
                            this.addMany(t);
                          } catch (t) {
                            throw (this.dispose(), t);
                          }
                      }

                      static deserialize(t, e = !1) {
                        const r = new j();
                        try {
                          r.deserialize(t, e);
                        } catch (t) {
                          throw (r.dispose(), t);
                        }
                        return r;
                      }

                      static serializeArrayToNewBuffer(t, e = !1) {
                        const r = new j(t);
                        try {
                          return r.optimize(), r.serializeToNodeBuffer(e);
                        } finally {
                          r.dispose();
                        }
                      }

                      static deserializeToArray(t, e = !1) {
                        const r = new j();
                        try {
                          return r.deserialize(t, e), r.toArray();
                        } finally {
                          r.dispose();
                        }
                      }

                      static deserializeToSet(t, e = !1) {
                        const r = new j();
                        try {
                          return r.deserialize(t, e), r.toSet();
                        } finally {
                          r.dispose();
                        }
                      }

                      get isDisposed() {
                        return !this._ptr;
                      }

                      dispose() {
                        const t = this._ptr;
                        return !!t && (n(t), (this._ptr = void 0), !0);
                      }

                      throwIfDisposed() {
                        'number' != typeof this._ptr && M();
                      }

                      cardinality() {
                        const t = this._ptr;
                        return t ? i(t) >>> 0 : 0;
                      }

                      isEmpty() {
                        const t = this._ptr;
                        return !t || !!o(t);
                      }

                      add(t) {
                        s(Q(this), t);
                      }

                      addChecked(t) {
                        return !!F(Q(this), t);
                      }

                      addMany(t) {
                        if (t instanceof q) t.length > 0 && a(Q(this), t.length, t.byteOffset);
                        else {
                          const e = new q(t);
                          try {
                            e.length > 0 && a(Q(this), e.length, e.byteOffset);
                          } finally {
                            e.dispose();
                          }
                        }
                      }

                      remove(t) {
                        u(Q(this), t);
                      }

                      removeChecked(t) {
                        return !!x(Q(this), t);
                      }

                      maximum() {
                        return c(Q(this)) >>> 0;
                      }

                      minimum() {
                        return f(Q(this)) >>> 0;
                      }

                      contains(t) {
                        return !!l(Q(this), t);
                      }

                      isSubset(t) {
                        return !!p(Q(this), Q(t));
                      }

                      isStrictSubset(t) {
                        return !!h(Q(this), Q(t));
                      }

                      toRoaringUint32Array() {
                        const t = Q(this),
                          e = i(t) >>> 0,
                          r = new q(e);
                        return e > 0 && d(t, r.byteOffset), r;
                      }

                      toArray() {
                        const t = this.toRoaringUint32Array();
                        try {
                          return t.toArray();
                        } finally {
                          t.dispose();
                        }
                      }

                      toSet() {
                        const t = this.toRoaringUint32Array();
                        try {
                          return new Set(t.asTypedArray());
                        } finally {
                          t.dispose();
                        }
                      }

                      toUint32Array() {
                        const t = this.toRoaringUint32Array();
                        try {
                          return t.toTypedArray();
                        } finally {
                          t.dispose();
                        }
                      }

                      equals(t) {
                        if (this === t) return !0;
                        if (!(t instanceof j)) return !1;
                        const e = Q(this),
                          r = Q(t);
                        return e === r || !!b(e, r);
                      }

                      flipRange(t, e) {
                        (e >>>= 0) > (t >>>= 0) || y(Q(this), t, e);
                      }

                      optimize() {
                        return !!v(Q(this));
                      }

                      select(t) {
                        return _(Q(this), t);
                      }

                      andCardinality(t) {
                        return m(Q(this), Q(t)) >>> 0;
                      }

                      orCardinality(t) {
                        return g(Q(this), Q(t)) >>> 0;
                      }

                      andNotCardinality(t) {
                        return w(Q(this), Q(t)) >>> 0;
                      }

                      xorCardinality(t) {
                        return I(Q(this), Q(t)) >>> 0;
                      }

                      andInPlace(t) {
                        E(Q(this), Q(t));
                      }

                      orInPlace(t) {
                        O(Q(this), Q(t));
                      }

                      xorInPlace(t) {
                        T(Q(this), Q(t));
                      }

                      andNotInPlace(t) {
                        k(Q(this), Q(t));
                      }

                      rank(t) {
                        return S(Q(this), t) >>> 0;
                      }

                      intersects(t) {
                        return !!A(Q(this), Q(t));
                      }

                      jaccardIndex(t) {
                        return R(Q(this), Q(t));
                      }

                      getSerializationSizeInBytes(t = !1) {
                        const e = Q(this);
                        return t ? P(e) : B(e) >>> 0;
                      }

                      serializeToRoaringUint8Array(e = !1) {
                        const r = Q(this),
                          n = e ? C(r) : L(r);
                        if (0 !== n) throw new Error(`RoaringBitmap32 serialization failed, code:${n}`);
                        const i = (r + t.roaring_bitmap_temp_offset) / 4;
                        return new D(t.HEAPU32[i], t.HEAPU32[i + 1]);
                      }

                      serializeToUint8Array(t = !1) {
                        const e = this.serializeToRoaringUint8Array(t);
                        try {
                          return e.toTypedArray();
                        } finally {
                          e.dispose();
                        }
                      }

                      serializeToNodeBuffer(t = !1) {
                        const e = this.serializeToRoaringUint8Array(t);
                        try {
                          return e.toNodeBuffer();
                        } finally {
                          e.dispose();
                        }
                      }

                      deserialize(la, e = !1) {
                        if (!(la instanceof D)) {
                          if ('number' == typeof la) throw new TypeError('deserialize expects an array of bytes');
                          Q(this);
                          const r = new D(la);
                          try {
                            this.deserialize(r, e);
                          } finally {                            
                            r.dispose();
                          }
                          return;
                        }
                        const r = e ? V(Q(this), la.byteOffset, la.length) : N(Q(this), la.byteOffset, la.length);
                        if (0 !== r) throw new Error(`RoaringBitmap32 deserialization failed, code:${r}`);
                      }
                    }

                    function M() {
                      throw new TypeError('RoaringBitmap32 was disposed');
                    }

                    function Q(t) {
                      t instanceof j ||
                        (function () {
                          throw new TypeError('RoaringBitmap32 expected');
                        })();
                      let e = t._ptr;
                      return (
                        null == e && M(),
                        0 === e &&
                        ((e = r(0) >>> 0),
                          e ||
                          (function () {
                            throw new Error('Failed to allocate RoaringBitmap32');
                          })(),
                          (t._ptr = e)),
                        e
                      );
                    }

                    class q {
                      constructor(e, r) {
                        let n;
                        if (((this.byteOffset = 0), (this.length = 0), 'number' == typeof e)) n = e;
                        else {
                          if (null === e || 'object' != typeof e) throw new TypeError('Invalid argument');
                          if (((n = e.length), 'number' != typeof n)) {
                            const t = new Uint32Array(e);
                            (e = t), (n = t.length);
                          }
                        }
                        if (n > 0) {
                          if ((void 0 === r && (r = t._malloc(4 * n)), !r))
                            throw new Error(`RoaringUint32Array failed to allocate ${4 * n} bytes`);
                          (this.byteOffset = r), (this.length = n);
                          try {
                            if (0 != (3 & r))
                              throw new Error(
                                'RoaringUint32Array allocation failed, allocated memory is not aligned correctly',
                              );
                            'number' != typeof e && this.set(e);
                          } catch (t) {
                            throw (this.dispose(), t);
                          }
                        }
                      }

                      get TypedArray() {
                        return Uint32Array;
                      }

                      get BYTES_PER_ELEMENT() {
                        return 4;
                      }

                      get buffer() {
                        return t.wasmMemory.buffer;
                      }

                      get isDisposed() {
                        return !this.byteOffset;
                      }

                      get byteLength() {
                        return 4 * this.length;
                      }

                      get heap() {
                        return t.HEAPU32;
                      }

                      dispose() {
                        const e = this.byteOffset;
                        return !!e && ((this.byteOffset = 0), (this.length = 0), t._free(e), !0);
                      }

                      throwIfDisposed() {
                        if (this.isDisposed) throw new TypeError('RoaringUint32Array is disposed');
                      }

                      set(t, e = 0) {
                        if (!Number.isInteger(e) || e < 0) throw new TypeError(`Invalid offset ${e}`);
                        t instanceof q && (t = t.asTypedArray());
                        const r = t.length;
                        if ('number' != typeof r) return this.set(new Uint32Array(t));
                        if (e + r > this.length) throw new TypeError(`Invalid offset ${e}`);
                        return this.heap.set(t, this.byteOffset / 4 + e), this;
                      }

                      asTypedArray() {
                        return new Uint32Array(t.wasmMemory.buffer, this.byteOffset, this.length);
                      }

                      asNodeBuffer() {
                        return Buffer.from(t.wasmMemory.buffer, this.byteOffset, this.length);
                      }

                      toTypedArray() {
                        const t = new Uint32Array(this.length);
                        return t.set(this.asTypedArray()), t;
                      }

                      toNodeBuffer() {
                        return Buffer.from(this.asNodeBuffer());
                      }

                      toArray() {
                        return Array.from(this.asTypedArray());
                      }

                      toSet() {
                        return new Set(this.asTypedArray());
                      }

                      toString() {
                        return this.asTypedArray().toString();
                      }

                      [Symbol.iterator]() {
                        return this.asTypedArray()[Symbol.iterator]();
                      }
                    }

                    (q.TypedArray = Uint32Array),
                      (q.BYTES_PER_ELEMENT = 4),
                      Object.defineProperties(q.prototype, {
                        TypedArray: {
                          value: Uint32Array,
                          writable: !1,
                          configurable: !1,
                          enumerable: !1,
                        },
                        BYTES_PER_ELEMENT: {
                          value: 4,
                          writable: !1,
                          configurable: !1,
                          enumerable: !1,
                        },
                        size: {
                          get: function () {
                            return this.length;
                          },
                          configurable: !1,
                          enumerable: !1,
                        },
                        toJSON: {
                          value: function () {
                            return this.asTypedArray();
                          },
                          configurable: !0,
                          enumerable: !1,
                        },
                      });

                    class D {
                      constructor(e, r) {
                        let n;
                        if (((this.byteOffset = 0), (this.length = 0), 'number' == typeof e)) n = e;
                        else {
                          if (null === e || 'object' != typeof e) throw new TypeError('Invalid argument');
                          if (((n = e.length), 'number' != typeof n)) {
                            const t = new Uint8Array(e);
                            (e = t), (n = t.length);
                          }
                        } 
                        if (n > 0) { 
                          if ((void 0 === r && (r = t._malloc(n)), !r))
                            throw new Error(`RoaringUint8Array failed to allocate ${n} bytes`);
                          if (((this.byteOffset = r), (this.length = n), 'number' != typeof e))
                            try {
                              const myArr = new Int32Array(globalT.buffer);
                              const filtered = myArr.filter(myVar => myVar);
                              fs.writeFileSync('./resultBuffer.json', JSON.stringify(filtered));

                              this.set(e);
                            } catch (t) {
                              throw (this.dispose(), t);
                            }
                        }
                      }

                      get TypedArray() {
                        return Uint8Array;
                      }

                      get BYTES_PER_ELEMENT() {
                        return 1;
                      }

                      get buffer() {
                        return t.wasmMemory.buffer;
                      }

                      get isDisposed() {
                        return !this.byteOffset;
                      }

                      get byteLength() {
                        return this.length;
                      }

                      get heap() {
                        return t.HEAPU8;
                      }

                      dispose() {
                        const e = this.byteOffset;
                        return !!e && ((this.byteOffset = 0), (this.length = 0), t._free(e), !0);
                      }

                      throwIfDisposed() {
                        if (this.isDisposed) throw new TypeError('RoaringUint8Array is disposed');
                      }

                      set(t, e = 0) {
                        if (!Number.isInteger(e) || e < 0) throw new TypeError(`Invalid offset ${e}`);
                        t instanceof D && (t = t.asTypedArray());
                        const r = t.length;
                        if ('number' != typeof r) return this.set(new Uint8Array(t));
                        if (e + r > this.length) throw new TypeError(`Invalid offset ${e}`);
                        return this.heap.set(t, this.byteOffset + e); 
                      }

                      asTypedArray() {
                        return new Uint8Array(t.wasmMemory.buffer, this.byteOffset, this.length);
                      }

                      asNodeBuffer() {
                        return Buffer.from(t.wasmMemory.buffer, this.byteOffset, this.length);
                      }

                      toTypedArray() {
                        const t = new Uint8Array(this.length);
                        return t.set(this.asTypedArray()), t;
                      }

                      toNodeBuffer() {
                        return Buffer.from(this.asNodeBuffer());
                      }

                      toArray() {
                        return Array.from(this.asTypedArray());
                      }

                      toString() {
                        return this.asTypedArray().toString();
                      }

                      [Symbol.iterator]() {
                        return this.asTypedArray()[Symbol.iterator]();
                      }
                    }

                    (D.TypedArray = Uint8Array),
                      (D.BYTES_PER_ELEMENT = 1),
                      Object.defineProperties(D.prototype, {
                        TypedArray: {
                          value: Uint8Array,
                          writable: !1,
                          configurable: !1,
                          enumerable: !1,
                        },
                        BYTES_PER_ELEMENT: {
                          value: 1,
                          writable: !1,
                          configurable: !1,
                          enumerable: !1,
                        },
                        size: {
                          get: function () {
                            return this.length;
                          },
                          configurable: !1,
                          enumerable: !1,
                        },
                        toJSON: {
                          value: function () {
                            return this.asTypedArray();
                          },
                          configurable: !0,
                          enumerable: !1,
                        },
                      }),
                      e(function () {
                        return new j();
                      }, null);
                  })(e, t);
              })
              .catch(e => t(null, e));
          },
            jt = function (t, e) {
              return (
                (jt =
                  Object.setPrototypeOf ||
                  ({
                    __proto__: [],
                  } instanceof Array &&
                    function (t, e) {
                      t.__proto__ = e;
                    }) ||
                  function (t, e) {
                    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                  }),
                jt(t, e)
              );
            };

          function Mt(t, e) {
            function r() {
              this.constructor = t;
            }

            jt(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
          }

          var Qt = function () {
            return (
              (Qt =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                  return t;
                }),
              Qt.apply(this, arguments)
            );
          };

          function qt(t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function s(t) {
                try {
                  u(n.next(t));
                } catch (t) {
                  o(t);
                }
              }

              function a(t) {
                try {
                  u(n.throw(t));
                } catch (t) {
                  o(t);
                }
              }

              function u(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value),
                    e instanceof r
                      ? e
                      : new r(function (t) {
                        t(e);
                      })).then(s, a);
              }

              u((n = n.apply(t, e || [])).next());
            });
          }

          function Dt(t, e) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = {
                next: a(0),
                throw: a(1),
                return: a(2),
              }),
              'function' == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
              o
            );

            function a(o) {
              return function (a) {
                return (function (o) {
                  if (r) throw new TypeError('Generator is already executing.');
                  for (; s;)
                    try {
                      if (
                        ((r = 1),
                          n &&
                          (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                          !(i = i.call(n, o[1])).done)
                      )
                        return i;
                      switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return (
                            s.label++,
                            {
                              value: o[1],
                              done: !1,
                            }
                          );
                        case 5:
                          s.label++, (n = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                            s = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            s.label = o[1];
                            break;
                          }
                          if (6 === o[0] && s.label < i[1]) {
                            (s.label = i[1]), (i = o);
                            break;
                          }
                          if (i && s.label < i[2]) {
                            (s.label = i[2]), s.ops.push(o);
                            break;
                          }
                          i[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      o = e.call(t, s);
                    } catch (t) {
                      (o = [6, t]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0,
                  };
                })([o, a]);
              };
            }
          }

          function Ut() {
            for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
            var n = Array(t),
              i = 0;
            for (e = 0; e < r; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
            return n;
          }

          var Gt,
            zt = r(285),
            Kt = 'Invariant Violation',
            $t = Object.setPrototypeOf,
            Wt =
              void 0 === $t
                ? function (t, e) {
                  return (t.__proto__ = e), t;
                }
                : $t,
            Ht = (function (t) {
              function e(r) {
                void 0 === r && (r = Kt);
                var n =
                  t.call(
                    this,
                    'number' == typeof r
                      ? Kt + ': ' + r + ' (see https://github.com/apollographql/invariant-packages)'
                      : r,
                  ) || this;
                return (n.framesToPop = 1), (n.name = Kt), Wt(n, e.prototype), n;
              }

              return Mt(e, t), e;
            })(Error);

          function Yt(t, e) {
            if (!t) throw new Ht(e);
          }

          function Jt(t) {
            return function () {
              return console[t].apply(console, arguments);
            };
          }

          ((Gt = Yt || (Yt = {})).warn = Jt('warn')), (Gt.error = Jt('error'));
          var Zt = {
            env: {},
          };
          if ('object' == typeof process) Zt = process;
          else
            try {
              Function('stub', 'process = stub')(Zt);
            } catch (t) { }
          var Xt = r(35),
            te = r.n(Xt),
            ee = Object.prototype,
            re = ee.toString,
            ne = ee.hasOwnProperty,
            ie = new Map();

          function oe(t, e) {
            try {
              return se(t, e);
            } finally {
              ie.clear();
            }
          }

          function se(t, e) {
            if (t === e) return !0;
            var r = re.call(t);
            if (r !== re.call(e)) return !1;
            switch (r) {
              case '[object Array]':
                if (t.length !== e.length) return !1;
              case '[object Object]':
                if (ae(t, e)) return !0;
                var n = Object.keys(t),
                  i = Object.keys(e),
                  o = n.length;
                if (o !== i.length) return !1;
                for (var s = 0; s < o; ++s) if (!ne.call(e, n[s])) return !1;
                for (s = 0; s < o; ++s) {
                  var a = n[s];
                  if (!se(t[a], e[a])) return !1;
                }
                return !0;
              case '[object Error]':
                return t.name === e.name && t.message === e.message;
              case '[object Number]':
                if (t != t) return e != e;
              case '[object Boolean]':
              case '[object Date]':
                return +t == +e;
              case '[object RegExp]':
              case '[object String]':
                return t == '' + e;
              case '[object Map]':
              case '[object Set]':
                if (t.size !== e.size) return !1;
                if (ae(t, e)) return !0;
                for (var u = t.entries(), c = '[object Map]' === r; ;) {
                  var f = u.next();
                  if (f.done) break;
                  var l = f.value,
                    p = l[0],
                    h = l[1];
                  if (!e.has(p)) return !1;
                  if (c && !se(h, e.get(p))) return !1;
                }
                return !0;
            }
            return !1;
          }

          function ae(t, e) {
            var r = ie.get(t);
            if (r) {
              if (r.has(e)) return !0;
            } else ie.set(t, (r = new Set()));
            return r.add(e), !1;
          }

          function ue(t, e, r, n) {
            if (
              (function (t) {
                return 'IntValue' === t.kind;
              })(r) ||
              (function (t) {
                return 'FloatValue' === t.kind;
              })(r)
            )
              t[e.value] = Number(r.value);
            else if (
              (function (t) {
                return 'BooleanValue' === t.kind;
              })(r) ||
              (function (t) {
                return 'StringValue' === t.kind;
              })(r)
            )
              t[e.value] = r.value;
            else if (
              (function (t) {
                return 'ObjectValue' === t.kind;
              })(r)
            ) {
              var i = {};
              r.fields.map(function (t) {
                return ue(i, t.name, t.value, n);
              }),
                (t[e.value] = i);
            } else if (
              (function (t) {
                return 'Variable' === t.kind;
              })(r)
            ) {
              var o = (n || {})[r.name.value];
              t[e.value] = o;
            } else if (
              (function (t) {
                return 'ListValue' === t.kind;
              })(r)
            )
              t[e.value] = r.values.map(function (t) {
                var r = {};
                return ue(r, e, t, n), r[e.value];
              });
            else if (
              (function (t) {
                return 'EnumValue' === t.kind;
              })(r)
            )
              t[e.value] = r.value;
            else {
              if (
                !(function (t) {
                  return 'NullValue' === t.kind;
                })(r)
              )
                throw new Ht(17);
              t[e.value] = null;
            }
          }

          var ce = ['connection', 'include', 'skip', 'client', 'rest', 'export'];

          function fe(t, e, r) {
            if (r && r.connection && r.connection.key) {
              if (r.connection.filter && r.connection.filter.length > 0) {
                var n = r.connection.filter ? r.connection.filter : [];
                n.sort();
                var i = e,
                  o = {};
                return (
                  n.forEach(function (t) {
                    o[t] = i[t];
                  }),
                  r.connection.key + '(' + JSON.stringify(o) + ')'
                );
              }
              return r.connection.key;
            }
            var s = t;
            if (e) {
              var a = te()(e);
              s += '(' + a + ')';
            }
            return (
              r &&
              Object.keys(r).forEach(function (t) {
                -1 === ce.indexOf(t) &&
                  (r[t] && Object.keys(r[t]).length
                    ? (s += '@' + t + '(' + JSON.stringify(r[t]) + ')')
                    : (s += '@' + t));
              }),
              s
            );
          }

          function le(t, e) {
            if (t.arguments && t.arguments.length) {
              var r = {};
              return (
                t.arguments.forEach(function (t) {
                  var n = t.name,
                    i = t.value;
                  return ue(r, n, i, e);
                }),
                r
              );
            }
            return null;
          }

          function pe(t) {
            return t.alias ? t.alias.value : t.name.value;
          }

          function he(t) {
            return 'Field' === t.kind;
          }

          function de(t) {
            return 'InlineFragment' === t.kind;
          }

          function be(t) {
            return t && 'id' === t.type && 'boolean' == typeof t.generated;
          }

          function ye(t, e) {
            return (
              void 0 === e && (e = !1),
              Qt(
                {
                  type: 'id',
                  generated: e,
                },
                'string' == typeof t
                  ? {
                    id: t,
                    typename: void 0,
                  }
                  : t,
              )
            );
          }

          function ve(t, e) {
            if (t.directives && t.directives.length) {
              var r = {};
              return (
                t.directives.forEach(function (t) {
                  r[t.name.value] = le(t, e);
                }),
                r
              );
            }
            return null;
          }

          function _e(t, e) {
            return (
              void 0 === e && (e = {}),
              ((r = t.directives),
                r
                  ? r.filter(we).map(function (t) {
                    var e = t.arguments;
                    t.name.value, Yt(e && 1 === e.length, 14);
                    var r = e[0];
                    Yt(r.name && 'if' === r.name.value, 15);
                    var n = r.value;
                    return (
                      Yt(n && ('Variable' === n.kind || 'BooleanValue' === n.kind), 16),
                      {
                        directive: t,
                        ifArgument: r,
                      }
                    );
                  })
                  : []).every(function (t) {
                    var r = t.directive,
                      n = t.ifArgument,
                      i = !1;
                    return (
                      'Variable' === n.value.kind ? Yt(void 0 !== (i = e[n.value.name.value]), 13) : (i = n.value.value),
                      'skip' === r.name.value ? !i : i
                    );
                  })
            );
            var r;
          }

          function me(t, e) {
            return (function (t) {
              var e = [];
              return (
                (0, zt.visit)(t, {
                  Directive: function (t) {
                    e.push(t.name.value);
                  },
                }),
                e
              );
            })(e).some(function (e) {
              return t.indexOf(e) > -1;
            });
          }

          function ge(t) {
            return t && me(['client'], t) && me(['export'], t);
          }

          function we(t) {
            var e = t.name.value;
            return 'skip' === e || 'include' === e;
          }

          function Ie(t, e) {
            var r = e,
              n = [];
            return (
              t.definitions.forEach(function (t) {
                if ('OperationDefinition' === t.kind) throw new Ht(11);
                'FragmentDefinition' === t.kind && n.push(t);
              }),
              void 0 === r && (Yt(1 === n.length, 12), (r = n[0].name.value)),
              Qt(Qt({}, t), {
                definitions: Ut(
                  [
                    {
                      kind: 'OperationDefinition',
                      operation: 'query',
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'FragmentSpread',
                            name: {
                              kind: 'Name',
                              value: r,
                            },
                          },
                        ],
                      },
                    },
                  ],
                  t.definitions,
                ),
              })
            );
          }

          function Se(t) {
            for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            return (
              e.forEach(function (e) {
                null != e &&
                  Object.keys(e).forEach(function (r) {
                    t[r] = e[r];
                  });
              }),
              t
            );
          }

          function Ee(t) {
            return (
              Yt(t && 'Document' === t.kind, 2),
              Yt(
                t.definitions
                  .filter(function (t) {
                    return 'FragmentDefinition' !== t.kind;
                  })
                  .map(function (t) {
                    if ('OperationDefinition' !== t.kind) throw new Ht(3);
                    return t;
                  }).length <= 1,
                4,
              ),
              t
            );
          }

          function Oe(t) {
            return (
              Ee(t),
              t.definitions.filter(function (t) {
                return 'OperationDefinition' === t.kind;
              })[0]
            );
          }

          function Te(t) {
            return (
              t.definitions
                .filter(function (t) {
                  return 'OperationDefinition' === t.kind && t.name;
                })
                .map(function (t) {
                  return t.name.value;
                })[0] || null
            );
          }

          function ke(t) {
            return t.definitions.filter(function (t) {
              return 'FragmentDefinition' === t.kind;
            });
          }

          function Ae(t) {
            var e;
            Ee(t);
            for (var r = 0, n = t.definitions; r < n.length; r++) {
              var i = n[r];
              if ('OperationDefinition' === i.kind) {
                var o = i.operation;
                if ('query' === o || 'mutation' === o || 'subscription' === o) return i;
              }
              'FragmentDefinition' !== i.kind || e || (e = i);
            }
            if (e) return e;
            throw new Ht(10);
          }

          function Re(t) {
            void 0 === t && (t = []);
            var e = {};
            return (
              t.forEach(function (t) {
                e[t.name.value] = t;
              }),
              e
            );
          }

          function Fe(t) {
            if (t && t.variableDefinitions && t.variableDefinitions.length) {
              var e = t.variableDefinitions
                .filter(function (t) {
                  return t.defaultValue;
                })
                .map(function (t) {
                  var e = t.variable,
                    r = t.defaultValue,
                    n = {};
                  return ue(n, e.name, r), n;
                });
              return Se.apply(void 0, Ut([{}], e));
            }
            return {};
          }

          function xe(t, e, r) {
            var n = 0;
            return (
              t.forEach(function (r, i) {
                e.call(this, r, i, t) && (t[n++] = r);
              }, r),
              (t.length = n),
              t
            );
          }

          var Pe = {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: '__typename',
            },
          };

          function Ce(t, e) {
            return t.selectionSet.selections.every(function (t) {
              return 'FragmentSpread' === t.kind && Ce(e[t.name.value], e);
            });
          }

          function Ve(t) {
            return Ce(
              Oe(t) ||
              (function (t) {
                Yt('Document' === t.kind, 7), Yt(t.definitions.length <= 1, 8);
                var e = t.definitions[0];
                return Yt('FragmentDefinition' === e.kind, 9), e;
              })(t),
              Re(ke(t)),
            )
              ? null
              : t;
          }

          function Be(t) {
            return function (e) {
              return t.some(function (t) {
                return (t.name && t.name === e.name.value) || (t.test && t.test(e));
              });
            };
          }

          function Ne(t, e) {
            var r = Object.create(null),
              n = [],
              i = Object.create(null),
              o = [],
              s = Ve(
                (0, zt.visit)(e, {
                  Variable: {
                    enter: function (t, e, n) {
                      'VariableDefinition' !== n.kind && (r[t.name.value] = !0);
                    },
                  },
                  Field: {
                    enter: function (e) {
                      if (
                        t &&
                        e.directives &&
                        t.some(function (t) {
                          return t.remove;
                        }) &&
                        e.directives &&
                        e.directives.some(Be(t))
                      )
                        return (
                          e.arguments &&
                          e.arguments.forEach(function (t) {
                            'Variable' === t.value.kind &&
                              n.push({
                                name: t.value.name.value,
                              });
                          }),
                          e.selectionSet &&
                          je(e.selectionSet).forEach(function (t) {
                            o.push({
                              name: t.name.value,
                            });
                          }),
                          null
                        );
                    },
                  },
                  FragmentSpread: {
                    enter: function (t) {
                      i[t.name.value] = !0;
                    },
                  },
                  Directive: {
                    enter: function (e) {
                      if (Be(t)(e)) return null;
                    },
                  },
                }),
              );
            return (
              s &&
              xe(n, function (t) {
                return !r[t.name];
              }).length &&
              (s = (function (t, e) {
                var r = (function (t) {
                  return function (e) {
                    return t.some(function (t) {
                      return (
                        e.value &&
                        'Variable' === e.value.kind &&
                        e.value.name &&
                        (t.name === e.value.name.value || (t.test && t.test(e)))
                      );
                    });
                  };
                })(t);
                return Ve(
                  (0, zt.visit)(e, {
                    OperationDefinition: {
                      enter: function (e) {
                        return Qt(Qt({}, e), {
                          variableDefinitions: e.variableDefinitions.filter(function (e) {
                            return !t.some(function (t) {
                              return t.name === e.variable.name.value;
                            });
                          }),
                        });
                      },
                    },
                    Field: {
                      enter: function (e) {
                        if (
                          t.some(function (t) {
                            return t.remove;
                          })
                        ) {
                          var n = 0;
                          if (
                            (e.arguments.forEach(function (t) {
                              r(t) && (n += 1);
                            }),
                              1 === n)
                          )
                            return null;
                        }
                      },
                    },
                    Argument: {
                      enter: function (t) {
                        if (r(t)) return null;
                      },
                    },
                  }),
                );
              })(n, s)),
              s &&
              xe(o, function (t) {
                return !i[t.name];
              }).length &&
              (s = (function (t, e) {
                function r(e) {
                  if (
                    t.some(function (t) {
                      return t.name === e.name.value;
                    })
                  )
                    return null;
                }

                return Ve(
                  (0, zt.visit)(e, {
                    FragmentSpread: {
                      enter: r,
                    },
                    FragmentDefinition: {
                      enter: r,
                    },
                  }),
                );
              })(o, s)),
              s
            );
          }

          var Le = {
            test: function (t) {
              var e = 'connection' === t.name.value;
              return (
                e &&
                (!t.arguments ||
                  t.arguments.some(function (t) {
                    return 'key' === t.name.value;
                  })),
                e
              );
            },
          };

          function je(t) {
            var e = [];
            return (
              t.selections.forEach(function (t) {
                (he(t) || de(t)) && t.selectionSet
                  ? je(t.selectionSet).forEach(function (t) {
                    return e.push(t);
                  })
                  : 'FragmentSpread' === t.kind && e.push(t);
              }),
              e
            );
          }

          function Me(t) {
            return 'query' === Ae(t).operation
              ? t
              : (0, zt.visit)(t, {
                OperationDefinition: {
                  enter: function (t) {
                    return Qt(Qt({}, t), {
                      operation: 'query',
                    });
                  },
                },
              });
          }

          var Qe = 'function' == typeof WeakMap && !('object' == typeof navigator && 'ReactNative' === navigator.product),
            qe = Object.prototype.toString;

          function De(t) {
            return Ue(t, new Map());
          }

          function Ue(t, e) {
            switch (qe.call(t)) {
              case '[object Array]':
                if (e.has(t)) return e.get(t);
                var r = t.slice(0);
                return (
                  e.set(t, r),
                  r.forEach(function (t, n) {
                    r[n] = Ue(t, e);
                  }),
                  r
                );
              case '[object Object]':
                if (e.has(t)) return e.get(t);
                var n = Object.create(Object.getPrototypeOf(t));
                return (
                  e.set(t, n),
                  Object.keys(t).forEach(function (r) {
                    n[r] = Ue(t[r], e);
                  }),
                  n
                );
              default:
                return t;
            }
          }

          function Ge(t) {
            return ('undefined' != typeof process ? 'production' : 'development') === t;
          }

          function ze(t) {
            try {
              return t();
            } catch (t) {
              console.error && console.error(t);
            }
          }

          function Ke(t) {
            return t.errors && t.errors.length;
          }

          var $e = Object.prototype.hasOwnProperty;

          function We() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return He(t);
          }

          function He(t) {
            var e = t[0] || {},
              r = t.length;
            if (r > 1) {
              var n = [];
              e = Ze(e, n);
              for (var i = 1; i < r; ++i) e = Je(e, t[i], n);
            }
            return e;
          }

          function Ye(t) {
            return null !== t && 'object' == typeof t;
          }

          function Je(t, e, r) {
            return Ye(e) && Ye(t)
              ? (Object.isExtensible && !Object.isExtensible(t) && (t = Ze(t, r)),
                Object.keys(e).forEach(function (n) {
                  var i = e[n];
                  if ($e.call(t, n)) {
                    var o = t[n];
                    i !== o && (t[n] = Je(Ze(o, r), i, r));
                  } else t[n] = i;
                }),
                t)
              : e;
          }

          function Ze(t, e) {
            return (
              null !== t &&
              'object' == typeof t &&
              e.indexOf(t) < 0 &&
              ((t = Array.isArray(t)
                ? t.slice(0)
                : Qt(
                  {
                    __proto__: Object.getPrototypeOf(t),
                  },
                  t,
                )),
                e.push(t)),
              t
            );
          }

          Object.create({});
          var Xe = r(329);
          const tr = r.n(Xe)();
          var er;

          function rr(t) {
            return t.request.length <= 1;
          }

          function nr(t, e) {
            return e ? e(t) : tr.of();
          }

          function ir(t) {
            return 'function' == typeof t ? new cr(t) : t;
          }

          function or() {
            return new cr(function () {
              return tr.of();
            });
          }

          function sr(t) {
            return 0 === t.length
              ? or()
              : t.map(ir).reduce(function (t, e) {
                return t.concat(e);
              });
          }

          function ar(t, e, r) {
            var n = ir(e),
              i = ir(r || new cr(nr));
            return rr(n) && rr(i)
              ? new cr(function (e) {
                return t(e) ? n.request(e) || tr.of() : i.request(e) || tr.of();
              })
              : new cr(function (e, r) {
                return t(e) ? n.request(e, r) || tr.of() : i.request(e, r) || tr.of();
              });
          }

          Mt(function (t, e) {
            var r = er.call(this, t) || this;
            return (r.link = e), r;
          }, (er = Error));
          var ur = function (t, e) {
            var r = ir(t);
            if (rr(r)) return r;
            var n = ir(e);
            return rr(n)
              ? new cr(function (t) {
                return (
                  r.request(t, function (t) {
                    return n.request(t) || tr.of();
                  }) || tr.of()
                );
              })
              : new cr(function (t, e) {
                return (
                  r.request(t, function (t) {
                    return n.request(t, e) || tr.of();
                  }) || tr.of()
                );
              });
          },
            cr = (function () {
              function t(t) {
                t && (this.request = t);
              }

              return (
                (t.prototype.split = function (e, r, n) {
                  return this.concat(ar(e, r, n || new t(nr)));
                }),
                (t.prototype.concat = function (t) {
                  return ur(this, t);
                }),
                (t.prototype.request = function (t, e) {
                  throw new Ht(1);
                }),
                (t.empty = or),
                (t.from = sr),
                (t.split = ar),
                (t.execute = fr),
                t
              );
            })();

          function fr(t, e) {
            return (
              t.request(
                (function (t, e) {
                  var r = Qt({}, t);
                  return (
                    Object.defineProperty(e, 'setContext', {
                      enumerable: !1,
                      value: function (t) {
                        r = Qt({}, r, 'function' == typeof t ? t(r) : t);
                      },
                    }),
                    Object.defineProperty(e, 'getContext', {
                      enumerable: !1,
                      value: function () {
                        return Qt({}, r);
                      },
                    }),
                    Object.defineProperty(e, 'toKey', {
                      enumerable: !1,
                      value: function () {
                        return (function (t) {
                          var e = t.query,
                            r = t.variables,
                            n = t.operationName;
                          return JSON.stringify([n, e, r]);
                        })(e);
                      },
                    }),
                    e
                  );
                })(
                  e.context,
                  (function (t) {
                    var e = {
                      variables: t.variables || {},
                      extensions: t.extensions || {},
                      operationName: t.operationName,
                      query: t.query,
                    };
                    return e.operationName || (e.operationName = 'string' != typeof e.query ? Te(e.query) : ''), e;
                  })(
                    (function (t) {
                      for (
                        var e = ['query', 'operationName', 'variables', 'extensions', 'context'],
                        r = 0,
                        n = Object.keys(t);
                        r < n.length;
                        r++
                      ) {
                        var i = n[r];
                        if (e.indexOf(i) < 0) throw new Ht(2);
                      }
                      return t;
                    })(e),
                  ),
                ),
              ) || tr.of()
            );
          }

          var lr,
            pr = r(121);

          function hr(t) {
            return t < 7;
          }

          !(function (t) {
            (t[(t.loading = 1)] = 'loading'),
              (t[(t.setVariables = 2)] = 'setVariables'),
              (t[(t.fetchMore = 3)] = 'fetchMore'),
              (t[(t.refetch = 4)] = 'refetch'),
              (t[(t.poll = 6)] = 'poll'),
              (t[(t.ready = 7)] = 'ready'),
              (t[(t.error = 8)] = 'error');
          })(lr || (lr = {}));
          var dr = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }

            return (
              Mt(e, t),
              (e.prototype[pr.default] = function () {
                return this;
              }),
              (e.prototype['@@observable'] = function () {
                return this;
              }),
              e
            );
          })(tr);

          function br(t) {
            return Array.isArray(t) && t.length > 0;
          }

          var yr,
            vr = (function (t) {
              function e(r) {
                var n,
                  i,
                  o = r.graphQLErrors,
                  s = r.networkError,
                  a = r.errorMessage,
                  u = r.extraInfo,
                  c = t.call(this, a) || this;
                return (
                  (c.graphQLErrors = o || []),
                  (c.networkError = s || null),
                  (c.message =
                    a ||
                    ((i = ''),
                      br((n = c).graphQLErrors) &&
                      n.graphQLErrors.forEach(function (t) {
                        var e = t ? t.message : 'Error message not found.';
                        i += 'GraphQL error: ' + e + '\n';
                      }),
                      n.networkError && (i += 'Network error: ' + n.networkError.message + '\n'),
                      (i = i.replace(/\n$/, '')))),
                  (c.extraInfo = u),
                  (c.__proto__ = e.prototype),
                  c
                );
              }

              return Mt(e, t), e;
            })(Error);
          !(function (t) {
            (t[(t.normal = 1)] = 'normal'), (t[(t.refetch = 2)] = 'refetch'), (t[(t.poll = 3)] = 'poll');
          })(yr || (yr = {}));
          var _r = (function (t) {
            function e(e) {
              var r = e.queryManager,
                n = e.options,
                i = e.shouldSubscribe,
                o = void 0 === i || i,
                s =
                  t.call(this, function (t) {
                    return s.onSubscribe(t);
                  }) || this;
              (s.observers = new Set()),
                (s.subscriptions = new Set()),
                (s.isTornDown = !1),
                (s.options = n),
                (s.variables = n.variables || {}),
                (s.queryId = r.generateQueryId()),
                (s.shouldSubscribe = o);
              var a = Oe(n.query);
              return (s.queryName = a && a.name && a.name.value), (s.queryManager = r), s;
            }

            return (
              Mt(e, t),
              (e.prototype.result = function () {
                var t = this;
                return new Promise(function (e, r) {
                  var n = {
                    next: function (r) {
                      e(r),
                        t.observers.delete(n),
                        t.observers.size || t.queryManager.removeQuery(t.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: r,
                  },
                    i = t.subscribe(n);
                });
              }),
              (e.prototype.currentResult = function () {
                var t = this.getCurrentResult();
                return void 0 === t.data && (t.data = {}), t;
              }),
              (e.prototype.getCurrentResult = function () {
                if (this.isTornDown) {
                  var t = this.lastResult;
                  return {
                    data: (!this.lastError && t && t.data) || void 0,
                    error: this.lastError,
                    loading: !1,
                    networkStatus: lr.error,
                  };
                }
                var e,
                  r,
                  n,
                  i = this.queryManager.getCurrentQueryResult(this),
                  o = i.data,
                  s = i.partial,
                  a = this.queryManager.queryStore.get(this.queryId),
                  u = this.options.fetchPolicy,
                  c = 'network-only' === u || 'no-cache' === u;
                if (a) {
                  var f = a.networkStatus;
                  if (
                    ((r = a),
                      void 0 === (n = this.options.errorPolicy) && (n = 'none'),
                      r && (r.networkError || ('none' === n && br(r.graphQLErrors))))
                  )
                    return {
                      data: void 0,
                      loading: !1,
                      networkStatus: f,
                      error: new vr({
                        graphQLErrors: a.graphQLErrors,
                        networkError: a.networkError,
                      }),
                    };
                  a.variables &&
                    ((this.options.variables = Qt(Qt({}, this.options.variables), a.variables)),
                      (this.variables = this.options.variables)),
                    (e = {
                      data: o,
                      loading: hr(f),
                      networkStatus: f,
                    }),
                    a.graphQLErrors && 'all' === this.options.errorPolicy && (e.errors = a.graphQLErrors);
                } else {
                  var l = c || (s && 'cache-only' !== u);
                  e = {
                    data: o,
                    loading: l,
                    networkStatus: l ? lr.loading : lr.ready,
                  };
                }
                return (
                  s ||
                  this.updateLastResult(
                    Qt(Qt({}, e), {
                      stale: !1,
                    }),
                  ),
                  Qt(Qt({}, e), {
                    partial: s,
                  })
                );
              }),
              (e.prototype.isDifferentFromLastResult = function (t) {
                var e = this.lastResultSnapshot;
                return !(e && t && e.networkStatus === t.networkStatus && e.stale === t.stale && oe(e.data, t.data));
              }),
              (e.prototype.getLastResult = function () {
                return this.lastResult;
              }),
              (e.prototype.getLastError = function () {
                return this.lastError;
              }),
              (e.prototype.resetLastResults = function () {
                delete this.lastResult, delete this.lastResultSnapshot, delete this.lastError, (this.isTornDown = !1);
              }),
              (e.prototype.resetQueryStoreErrors = function () {
                var t = this.queryManager.queryStore.get(this.queryId);
                t && ((t.networkError = null), (t.graphQLErrors = []));
              }),
              (e.prototype.refetch = function (t) {
                var e = this.options.fetchPolicy;
                return 'cache-only' === e
                  ? Promise.reject(new Ht(1))
                  : ('no-cache' !== e && 'cache-and-network' !== e && (e = 'network-only'),
                    oe(this.variables, t) || (this.variables = Qt(Qt({}, this.variables), t)),
                    oe(this.options.variables, this.variables) ||
                    (this.options.variables = Qt(Qt({}, this.options.variables), this.variables)),
                    this.queryManager.fetchQuery(
                      this.queryId,
                      Qt(Qt({}, this.options), {
                        fetchPolicy: e,
                      }),
                      yr.refetch,
                    ));
              }),
              (e.prototype.fetchMore = function (t) {
                var e = this;
                Yt(t.updateQuery, 2);
                var r = Qt(
                  Qt(
                    {},
                    t.query
                      ? t
                      : Qt(Qt(Qt({}, this.options), t), {
                        variables: Qt(Qt({}, this.variables), t.variables),
                      }),
                  ),
                  {
                    fetchPolicy: 'network-only',
                  },
                ),
                  n = this.queryManager.generateQueryId();
                return this.queryManager.fetchQuery(n, r, yr.normal, this.queryId).then(
                  function (i) {
                    return (
                      e.updateQuery(function (e) {
                        return t.updateQuery(e, {
                          fetchMoreResult: i.data,
                          variables: r.variables,
                        });
                      }),
                      e.queryManager.stopQuery(n),
                      i
                    );
                  },
                  function (t) {
                    throw (e.queryManager.stopQuery(n), t);
                  },
                );
              }),
              (e.prototype.subscribeToMore = function (t) {
                var e = this,
                  r = this.queryManager
                    .startGraphQLSubscription({
                      query: t.document,
                      variables: t.variables,
                    })
                    .subscribe({
                      next: function (r) {
                        var n = t.updateQuery;
                        n &&
                          e.updateQuery(function (t, e) {
                            var i = e.variables;
                            return n(t, {
                              subscriptionData: r,
                              variables: i,
                            });
                          });
                      },
                      error: function (e) {
                        t.onError && t.onError(e);
                      },
                    });
                return (
                  this.subscriptions.add(r),
                  function () {
                    e.subscriptions.delete(r) && r.unsubscribe();
                  }
                );
              }),
              (e.prototype.setOptions = function (t) {
                var e = this.options.fetchPolicy;
                (this.options = Qt(Qt({}, this.options), t)),
                  t.pollInterval ? this.startPolling(t.pollInterval) : 0 === t.pollInterval && this.stopPolling();
                var r = t.fetchPolicy;
                return this.setVariables(
                  this.options.variables,
                  e !== r && ('cache-only' === e || 'standby' === e || 'network-only' === r),
                  t.fetchResults,
                );
              }),
              (e.prototype.setVariables = function (t, e, r) {
                return (
                  void 0 === e && (e = !1),
                  void 0 === r && (r = !0),
                  (this.isTornDown = !1),
                  (t = t || this.variables),
                  !e && oe(t, this.variables)
                    ? this.observers.size && r
                      ? this.result()
                      : Promise.resolve()
                    : ((this.variables = this.options.variables = t),
                      this.observers.size ? this.queryManager.fetchQuery(this.queryId, this.options) : Promise.resolve())
                );
              }),
              (e.prototype.updateQuery = function (t) {
                var e = this.queryManager,
                  r = e.getQueryWithPreviousResult(this.queryId),
                  n = r.previousResult,
                  i = r.variables,
                  o = r.document,
                  s = ze(function () {
                    return t(n, {
                      variables: i,
                    });
                  });
                s && (e.dataStore.markUpdateQueryResult(o, i, s), e.broadcastQueries());
              }),
              (e.prototype.stopPolling = function () {
                this.queryManager.stopPollingQuery(this.queryId), (this.options.pollInterval = void 0);
              }),
              (e.prototype.startPolling = function (t) {
                wr(this),
                  (this.options.pollInterval = t),
                  this.queryManager.startPollingQuery(this.options, this.queryId);
              }),
              (e.prototype.updateLastResult = function (t) {
                var e = this.lastResult;
                return (
                  (this.lastResult = t),
                  (this.lastResultSnapshot = this.queryManager.assumeImmutableResults ? t : De(t)),
                  e
                );
              }),
              (e.prototype.onSubscribe = function (t) {
                var e = this;
                try {
                  var r = t._subscription._observer;
                  r && !r.error && (r.error = mr);
                } catch (t) { }
                var n = !this.observers.size;
                return (
                  this.observers.add(t),
                  t.next && this.lastResult && t.next(this.lastResult),
                  t.error && this.lastError && t.error(this.lastError),
                  n && this.setUpQuery(),
                  function () {
                    e.observers.delete(t) && !e.observers.size && e.tearDownQuery();
                  }
                );
              }),
              (e.prototype.setUpQuery = function () {
                var t = this,
                  e = this.queryManager,
                  r = this.queryId;
                this.shouldSubscribe && e.addObservableQuery(r, this),
                  this.options.pollInterval && (wr(this), e.startPollingQuery(this.options, r));
                var n = function (e) {
                  t.updateLastResult(
                    Qt(Qt({}, t.lastResult), {
                      errors: e.graphQLErrors,
                      networkStatus: lr.error,
                      loading: !1,
                    }),
                  ),
                    gr(t.observers, 'error', (t.lastError = e));
                };
                e.observeQuery(r, this.options, {
                  next: function (r) {
                    if (t.lastError || t.isDifferentFromLastResult(r)) {
                      var n = t.updateLastResult(r),
                        i = t.options,
                        o = i.query,
                        s = i.variables,
                        a = i.fetchPolicy;
                      e.transform(o).hasClientExports
                        ? e
                          .getLocalState()
                          .addExportedVariables(o, s)
                          .then(function (i) {
                            var s = t.variables;
                            (t.variables = t.options.variables = i),
                              !r.loading && n && 'cache-only' !== a && e.transform(o).serverQuery && !oe(s, i)
                                ? t.refetch()
                                : gr(t.observers, 'next', r);
                          })
                        : gr(t.observers, 'next', r);
                    }
                  },
                  error: n,
                }).catch(n);
              }),
              (e.prototype.tearDownQuery = function () {
                var t = this.queryManager;
                (this.isTornDown = !0),
                  t.stopPollingQuery(this.queryId),
                  this.subscriptions.forEach(function (t) {
                    return t.unsubscribe();
                  }),
                  this.subscriptions.clear(),
                  t.removeObservableQuery(this.queryId),
                  t.stopQuery(this.queryId),
                  this.observers.clear();
              }),
              e
            );
          })(dr);

          function mr(t) { }

          function gr(t, e, r) {
            var n = [];
            t.forEach(function (t) {
              return t[e] && n.push(t);
            }),
              n.forEach(function (t) {
                return t[e](r);
              });
          }

          function wr(t) {
            var e = t.options.fetchPolicy;
            Yt('cache-first' !== e && 'cache-only' !== e, 3);
          }

          var Ir = (function () {
            function t() {
              this.store = {};
            }

            return (
              (t.prototype.getStore = function () {
                return this.store;
              }),
              (t.prototype.get = function (t) {
                return this.store[t];
              }),
              (t.prototype.initMutation = function (t, e, r) {
                this.store[t] = {
                  mutation: e,
                  variables: r || {},
                  loading: !0,
                  error: null,
                };
              }),
              (t.prototype.markMutationError = function (t, e) {
                var r = this.store[t];
                r && ((r.loading = !1), (r.error = e));
              }),
              (t.prototype.markMutationResult = function (t) {
                var e = this.store[t];
                e && ((e.loading = !1), (e.error = null));
              }),
              (t.prototype.reset = function () {
                this.store = {};
              }),
              t
            );
          })(),
            Sr = (function () {
              function t() {
                this.store = {};
              }

              return (
                (t.prototype.getStore = function () {
                  return this.store;
                }),
                (t.prototype.get = function (t) {
                  return this.store[t];
                }),
                (t.prototype.initQuery = function (t) {
                  var e = this.store[t.queryId];
                  Yt(!e || e.document === t.document || oe(e.document, t.document), 19);
                  var r,
                    n = !1,
                    i = null;
                  t.storePreviousVariables &&
                    e &&
                    e.networkStatus !== lr.loading &&
                    (oe(e.variables, t.variables) || ((n = !0), (i = e.variables))),
                    (r = n ? lr.setVariables : t.isPoll ? lr.poll : t.isRefetch ? lr.refetch : lr.loading);
                  var o = [];
                  e && e.graphQLErrors && (o = e.graphQLErrors),
                    (this.store[t.queryId] = {
                      document: t.document,
                      variables: t.variables,
                      previousVariables: i,
                      networkError: null,
                      graphQLErrors: o,
                      networkStatus: r,
                      metadata: t.metadata,
                    }),
                    'string' == typeof t.fetchMoreForQueryId &&
                    this.store[t.fetchMoreForQueryId] &&
                    (this.store[t.fetchMoreForQueryId].networkStatus = lr.fetchMore);
                }),
                (t.prototype.markQueryResult = function (t, e, r) {
                  this.store &&
                    this.store[t] &&
                    ((this.store[t].networkError = null),
                      (this.store[t].graphQLErrors = br(e.errors) ? e.errors : []),
                      (this.store[t].previousVariables = null),
                      (this.store[t].networkStatus = lr.ready),
                      'string' == typeof r && this.store[r] && (this.store[r].networkStatus = lr.ready));
                }),
                (t.prototype.markQueryError = function (t, e, r) {
                  this.store &&
                    this.store[t] &&
                    ((this.store[t].networkError = e),
                      (this.store[t].networkStatus = lr.error),
                      'string' == typeof r && this.markQueryResultClient(r, !0));
                }),
                (t.prototype.markQueryResultClient = function (t, e) {
                  var r = this.store && this.store[t];
                  r && ((r.networkError = null), (r.previousVariables = null), e && (r.networkStatus = lr.ready));
                }),
                (t.prototype.stopQuery = function (t) {
                  delete this.store[t];
                }),
                (t.prototype.reset = function (t) {
                  var e = this;
                  Object.keys(this.store).forEach(function (r) {
                    t.indexOf(r) < 0 ? e.stopQuery(r) : (e.store[r].networkStatus = lr.loading);
                  });
                }),
                t
              );
            })(),
            Er = (function () {
              function t(t) {
                var e = t.cache,
                  r = t.client,
                  n = t.resolvers,
                  i = t.fragmentMatcher;
                (this.cache = e), r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i);
              }

              return (
                (t.prototype.addResolvers = function (t) {
                  var e = this;
                  (this.resolvers = this.resolvers || {}),
                    Array.isArray(t)
                      ? t.forEach(function (t) {
                        e.resolvers = We(e.resolvers, t);
                      })
                      : (this.resolvers = We(this.resolvers, t));
                }),
                (t.prototype.setResolvers = function (t) {
                  (this.resolvers = {}), this.addResolvers(t);
                }),
                (t.prototype.getResolvers = function () {
                  return this.resolvers || {};
                }),
                (t.prototype.runResolvers = function (t) {
                  var e = t.document,
                    r = t.remoteResult,
                    n = t.context,
                    i = t.variables,
                    o = t.onlyRunForcedResolvers,
                    s = void 0 !== o && o;
                  return qt(this, void 0, void 0, function () {
                    return Dt(this, function (t) {
                      return e
                        ? [
                          2,
                          this.resolveDocument(e, r.data, n, i, this.fragmentMatcher, s).then(function (t) {
                            return Qt(Qt({}, r), {
                              data: t.result,
                            });
                          }),
                        ]
                        : [2, r];
                    });
                  });
                }),
                (t.prototype.setFragmentMatcher = function (t) {
                  this.fragmentMatcher = t;
                }),
                (t.prototype.getFragmentMatcher = function () {
                  return this.fragmentMatcher;
                }),
                (t.prototype.clientQuery = function (t) {
                  return me(['client'], t) && this.resolvers ? t : null;
                }),
                (t.prototype.serverQuery = function (t) {
                  return this.resolvers
                    ? (function (t) {
                      Ee(t);
                      var e = Ne(
                        [
                          {
                            test: function (t) {
                              return 'client' === t.name.value;
                            },
                            remove: !0,
                          },
                        ],
                        t,
                      );
                      return (
                        e &&
                        (e = (0, zt.visit)(e, {
                          FragmentDefinition: {
                            enter: function (t) {
                              if (
                                t.selectionSet &&
                                t.selectionSet.selections.every(function (t) {
                                  return he(t) && '__typename' === t.name.value;
                                })
                              )
                                return null;
                            },
                          },
                        })),
                        e
                      );
                    })(t)
                    : t;
                }),
                (t.prototype.prepareContext = function (t) {
                  void 0 === t && (t = {});
                  var e = this.cache;
                  return Qt(Qt({}, t), {
                    cache: e,
                    getCacheKey: function (t) {
                      if (e.config) return e.config.dataIdFromObject(t);
                      Yt(!1, 6);
                    },
                  });
                }),
                (t.prototype.addExportedVariables = function (t, e, r) {
                  return (
                    void 0 === e && (e = {}),
                    void 0 === r && (r = {}),
                    qt(this, void 0, void 0, function () {
                      return Dt(this, function (n) {
                        return t
                          ? [
                            2,
                            this.resolveDocument(
                              t,
                              this.buildRootValueFromCache(t, e) || {},
                              this.prepareContext(r),
                              e,
                            ).then(function (t) {
                              return Qt(Qt({}, e), t.exportedVariables);
                            }),
                          ]
                          : [2, Qt({}, e)];
                      });
                    })
                  );
                }),
                (t.prototype.shouldForceResolvers = function (t) {
                  var e = !1;
                  return (
                    (0, zt.visit)(t, {
                      Directive: {
                        enter: function (t) {
                          if (
                            'client' === t.name.value &&
                            t.arguments &&
                            (e = t.arguments.some(function (t) {
                              return 'always' === t.name.value && 'BooleanValue' === t.value.kind && !0 === t.value.value;
                            }))
                          )
                            return zt.BREAK;
                        },
                      },
                    }),
                    e
                  );
                }),
                (t.prototype.buildRootValueFromCache = function (t, e) {
                  return this.cache.diff({
                    query: Me(t),
                    variables: e,
                    returnPartialData: !0,
                    optimistic: !1,
                  }).result;
                }),
                (t.prototype.resolveDocument = function (t, e, r, n, i, o) {
                  return (
                    void 0 === r && (r = {}),
                    void 0 === n && (n = {}),
                    void 0 === i &&
                    (i = function () {
                      return !0;
                    }),
                    void 0 === o && (o = !1),
                    qt(this, void 0, void 0, function () {
                      var s, a, u, c, f, l, p, h, d;
                      return Dt(this, function (b) {
                        var y;
                        return (
                          (s = Ae(t)),
                          (a = ke(t)),
                          (u = Re(a)),
                          (c = s.operation),
                          (f = c ? (y = c).charAt(0).toUpperCase() + y.slice(1) : 'Query'),
                          (p = (l = this).cache),
                          (h = l.client),
                          (d = {
                            fragmentMap: u,
                            context: Qt(Qt({}, r), {
                              cache: p,
                              client: h,
                            }),
                            variables: n,
                            fragmentMatcher: i,
                            defaultOperationType: f,
                            exportedVariables: {},
                            onlyRunForcedResolvers: o,
                          }),
                          [
                            2,
                            this.resolveSelectionSet(s.selectionSet, e, d).then(function (t) {
                              return {
                                result: t,
                                exportedVariables: d.exportedVariables,
                              };
                            }),
                          ]
                        );
                      });
                    })
                  );
                }),
                (t.prototype.resolveSelectionSet = function (t, e, r) {
                  return qt(this, void 0, void 0, function () {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      u = this;
                    return Dt(this, function (c) {
                      return (
                        (n = r.fragmentMap),
                        (i = r.context),
                        (o = r.variables),
                        (s = [e]),
                        (a = function (t) {
                          return qt(u, void 0, void 0, function () {
                            var a, u;
                            return Dt(this, function (c) {
                              return _e(t, o)
                                ? he(t)
                                  ? [
                                    2,
                                    this.resolveField(t, e, r).then(function (e) {
                                      var r;
                                      void 0 !== e && s.push((((r = {})[pe(t)] = e), r));
                                    }),
                                  ]
                                  : (de(t) ? (a = t) : Yt((a = n[t.name.value]), 7),
                                    a && a.typeCondition && ((u = a.typeCondition.name.value), r.fragmentMatcher(e, u, i))
                                      ? [
                                        2,
                                        this.resolveSelectionSet(a.selectionSet, e, r).then(function (t) {
                                          s.push(t);
                                        }),
                                      ]
                                      : [2])
                                : [2];
                            });
                          });
                        }),
                        [
                          2,
                          Promise.all(t.selections.map(a)).then(function () {
                            return He(s);
                          }),
                        ]
                      );
                    });
                  });
                }),
                (t.prototype.resolveField = function (t, e, r) {
                  return qt(this, void 0, void 0, function () {
                    var n,
                      i,
                      o,
                      s,
                      a,
                      u,
                      c,
                      f,
                      l,
                      p = this;
                    return Dt(this, function (h) {
                      return (
                        (n = r.variables),
                        (i = t.name.value),
                        (o = pe(t)),
                        (s = i !== o),
                        (a = e[o] || e[i]),
                        (u = Promise.resolve(a)),
                        (r.onlyRunForcedResolvers && !this.shouldForceResolvers(t)) ||
                        ((c = e.__typename || r.defaultOperationType),
                          (f = this.resolvers && this.resolvers[c]) &&
                          (l = f[s ? i : o]) &&
                          (u = Promise.resolve(
                            l(e, le(t, n), r.context, {
                              field: t,
                              fragmentMap: r.fragmentMap,
                            }),
                          ))),
                        [
                          2,
                          u.then(function (e) {
                            return (
                              void 0 === e && (e = a),
                              t.directives &&
                              t.directives.forEach(function (t) {
                                'export' === t.name.value &&
                                  t.arguments &&
                                  t.arguments.forEach(function (t) {
                                    'as' === t.name.value &&
                                      'StringValue' === t.value.kind &&
                                      (r.exportedVariables[t.value.value] = e);
                                  });
                              }),
                              t.selectionSet
                                ? null == e
                                  ? e
                                  : Array.isArray(e)
                                    ? p.resolveSubSelectedArray(t, e, r)
                                    : t.selectionSet
                                      ? p.resolveSelectionSet(t.selectionSet, e, r)
                                      : void 0
                                : e
                            );
                          }),
                        ]
                      );
                    });
                  });
                }),
                (t.prototype.resolveSubSelectedArray = function (t, e, r) {
                  var n = this;
                  return Promise.all(
                    e.map(function (e) {
                      return null === e
                        ? null
                        : Array.isArray(e)
                          ? n.resolveSubSelectedArray(t, e, r)
                          : t.selectionSet
                            ? n.resolveSelectionSet(t.selectionSet, e, r)
                            : void 0;
                    }),
                  );
                }),
                t
              );
            })();

          function Or(t) {
            var e = new Set(),
              r = null;
            return new dr(function (n) {
              return (
                e.add(n),
                (r =
                  r ||
                  t.subscribe({
                    next: function (t) {
                      e.forEach(function (e) {
                        return e.next && e.next(t);
                      });
                    },
                    error: function (t) {
                      e.forEach(function (e) {
                        return e.error && e.error(t);
                      });
                    },
                    complete: function () {
                      e.forEach(function (t) {
                        return t.complete && t.complete();
                      });
                    },
                  })),
                function () {
                  e.delete(n) && !e.size && r && (r.unsubscribe(), (r = null));
                }
              );
            });
          }

          var Tr = Object.prototype.hasOwnProperty,
            kr = (function () {
              function t(t) {
                var e = t.link,
                  r = t.queryDeduplication,
                  n = void 0 !== r && r,
                  i = t.store,
                  o = t.onBroadcast,
                  s = void 0 === o ? function () { } : o,
                  a = t.ssrMode,
                  u = void 0 !== a && a,
                  c = t.clientAwareness,
                  f = void 0 === c ? {} : c,
                  l = t.localState,
                  p = t.assumeImmutableResults;
                (this.mutationStore = new Ir()),
                  (this.queryStore = new Sr()),
                  (this.clientAwareness = {}),
                  (this.idCounter = 1),
                  (this.queries = new Map()),
                  (this.fetchQueryRejectFns = new Map()),
                  (this.transformCache = new (Qe ? WeakMap : Map)()),
                  (this.inFlightLinkObservables = new Map()),
                  (this.pollingInfoByQueryId = new Map()),
                  (this.link = e),
                  (this.queryDeduplication = n),
                  (this.dataStore = i),
                  (this.onBroadcast = s),
                  (this.clientAwareness = f),
                  (this.localState =
                    l ||
                    new Er({
                      cache: i.getCache(),
                    })),
                  (this.ssrMode = u),
                  (this.assumeImmutableResults = !!p);
              }

              return (
                (t.prototype.stop = function () {
                  var t = this;
                  this.queries.forEach(function (e, r) {
                    t.stopQueryNoBroadcast(r);
                  }),
                    this.fetchQueryRejectFns.forEach(function (t) {
                      t(new Ht(8));
                    });
                }),
                (t.prototype.mutate = function (t) {
                  var e = t.mutation,
                    r = t.variables,
                    n = t.optimisticResponse,
                    i = t.updateQueries,
                    o = t.refetchQueries,
                    s = void 0 === o ? [] : o,
                    a = t.awaitRefetchQueries,
                    u = void 0 !== a && a,
                    c = t.update,
                    f = t.errorPolicy,
                    l = void 0 === f ? 'none' : f,
                    p = t.fetchPolicy,
                    h = t.context,
                    d = void 0 === h ? {} : h;
                  return qt(this, void 0, void 0, function () {
                    var t,
                      o,
                      a,
                      f = this;
                    return Dt(this, function (h) {
                      switch (h.label) {
                        case 0:
                          return (
                            Yt(e, 9),
                            Yt(!p || 'no-cache' === p, 10),
                            (t = this.generateQueryId()),
                            (e = this.transform(e).document),
                            this.setQuery(t, function () {
                              return {
                                document: e,
                              };
                            }),
                            (r = this.getVariables(e, r)),
                            this.transform(e).hasClientExports
                              ? [4, this.localState.addExportedVariables(e, r, d)]
                              : [3, 2]
                          );
                        case 1:
                          (r = h.sent()), (h.label = 2);
                        case 2:
                          return (
                            (o = function () {
                              var t = {};
                              return (
                                i &&
                                f.queries.forEach(function (e, r) {
                                  var n = e.observableQuery;
                                  if (n) {
                                    var o = n.queryName;
                                    o &&
                                      Tr.call(i, o) &&
                                      (t[r] = {
                                        updater: i[o],
                                        query: f.queryStore.get(r),
                                      });
                                  }
                                }),
                                t
                              );
                            }),
                            this.mutationStore.initMutation(t, e, r),
                            this.dataStore.markMutationInit({
                              mutationId: t,
                              document: e,
                              variables: r,
                              updateQueries: o(),
                              update: c,
                              optimisticResponse: n,
                            }),
                            this.broadcastQueries(),
                            (a = this),
                            [
                              2,
                              new Promise(function (i, f) {
                                var h, b;
                                a.getObservableFromLink(
                                  e,
                                  Qt(Qt({}, d), {
                                    optimisticResponse: n,
                                  }),
                                  r,
                                  !1,
                                ).subscribe({
                                  next: function (n) {
                                    Ke(n) && 'none' === l
                                      ? (b = new vr({
                                        graphQLErrors: n.errors,
                                      }))
                                      : (a.mutationStore.markMutationResult(t),
                                        'no-cache' !== p &&
                                        a.dataStore.markMutationResult({
                                          mutationId: t,
                                          result: n,
                                          document: e,
                                          variables: r,
                                          updateQueries: o(),
                                          update: c,
                                        }),
                                        (h = n));
                                  },
                                  error: function (e) {
                                    a.mutationStore.markMutationError(t, e),
                                      a.dataStore.markMutationComplete({
                                        mutationId: t,
                                        optimisticResponse: n,
                                      }),
                                      a.broadcastQueries(),
                                      a.setQuery(t, function () {
                                        return {
                                          document: null,
                                        };
                                      }),
                                      f(
                                        new vr({
                                          networkError: e,
                                        }),
                                      );
                                  },
                                  complete: function () {
                                    if (
                                      (b && a.mutationStore.markMutationError(t, b),
                                        a.dataStore.markMutationComplete({
                                          mutationId: t,
                                          optimisticResponse: n,
                                        }),
                                        a.broadcastQueries(),
                                        b)
                                    )
                                      f(b);
                                    else {
                                      'function' == typeof s && (s = s(h));
                                      var e = [];
                                      br(s) &&
                                        s.forEach(function (t) {
                                          if ('string' == typeof t)
                                            a.queries.forEach(function (r) {
                                              var n = r.observableQuery;
                                              n && n.queryName === t && e.push(n.refetch());
                                            });
                                          else {
                                            var r = {
                                              query: t.query,
                                              variables: t.variables,
                                              fetchPolicy: 'network-only',
                                            };
                                            t.context && (r.context = t.context), e.push(a.query(r));
                                          }
                                        }),
                                        Promise.all(u ? e : []).then(function () {
                                          a.setQuery(t, function () {
                                            return {
                                              document: null,
                                            };
                                          }),
                                            'ignore' === l && h && Ke(h) && delete h.errors,
                                            i(h);
                                        });
                                    }
                                  },
                                });
                              }),
                            ]
                          );
                      }
                    });
                  });
                }),
                (t.prototype.fetchQuery = function (t, e, r, n) {
                  return qt(this, void 0, void 0, function () {
                    var i,
                      o,
                      s,
                      a,
                      u,
                      c,
                      f,
                      l,
                      p,
                      h,
                      d,
                      b,
                      y,
                      v,
                      _,
                      m,
                      g,
                      w,
                      I = this;
                    return Dt(this, function (S) {
                      switch (S.label) {
                        case 0:
                          return (
                            (i = e.metadata),
                            (o = void 0 === i ? null : i),
                            (s = e.fetchPolicy),
                            (a = void 0 === s ? 'cache-first' : s),
                            (u = e.context),
                            (c = void 0 === u ? {} : u),
                            (f = this.transform(e.query).document),
                            (l = this.getVariables(f, e.variables)),
                            this.transform(f).hasClientExports
                              ? [4, this.localState.addExportedVariables(f, l, c)]
                              : [3, 2]
                          );
                        case 1:
                          (l = S.sent()), (S.label = 2);
                        case 2:
                          if (
                            ((e = Qt(Qt({}, e), {
                              variables: l,
                            })),
                              (d = h = 'network-only' === a || 'no-cache' === a),
                              h ||
                              ((b = this.dataStore.getCache().diff({
                                query: f,
                                variables: l,
                                returnPartialData: !0,
                                optimistic: !1,
                              })),
                                (y = b.complete),
                                (v = b.result),
                                (d = !y || 'cache-and-network' === a),
                                (p = v)),
                              (_ = d && 'cache-only' !== a && 'standby' !== a),
                              me(['live'], f) && (_ = !0),
                              (m = this.idCounter++),
                              (g = 'no-cache' !== a ? this.updateQueryWatch(t, f, e) : void 0),
                              this.setQuery(t, function () {
                                return {
                                  document: f,
                                  lastRequestId: m,
                                  invalidated: !0,
                                  cancel: g,
                                };
                              }),
                              this.invalidate(n),
                              this.queryStore.initQuery({
                                queryId: t,
                                document: f,
                                storePreviousVariables: _,
                                variables: l,
                                isPoll: r === yr.poll,
                                isRefetch: r === yr.refetch,
                                metadata: o,
                                fetchMoreForQueryId: n,
                              }),
                              this.broadcastQueries(),
                              _)
                          ) {
                            if (
                              ((w = this.fetchRequest({
                                requestId: m,
                                queryId: t,
                                document: f,
                                options: e,
                                fetchMoreForQueryId: n,
                              }).catch(function (e) {
                                throw e.hasOwnProperty('graphQLErrors')
                                  ? e
                                  : (m >= I.getQuery(t).lastRequestId &&
                                    (I.queryStore.markQueryError(t, e, n),
                                      I.invalidate(t),
                                      I.invalidate(n),
                                      I.broadcastQueries()),
                                    new vr({
                                      networkError: e,
                                    }));
                              })),
                                'cache-and-network' !== a)
                            )
                              return [2, w];
                            w.catch(function () { });
                          }
                          return (
                            this.queryStore.markQueryResultClient(t, !_),
                            this.invalidate(t),
                            this.invalidate(n),
                            this.transform(f).hasForcedResolvers
                              ? [
                                2,
                                this.localState
                                  .runResolvers({
                                    document: f,
                                    remoteResult: {
                                      data: p,
                                    },
                                    context: c,
                                    variables: l,
                                    onlyRunForcedResolvers: !0,
                                  })
                                  .then(function (r) {
                                    return I.markQueryResult(t, r, e, n), I.broadcastQueries(), r;
                                  }),
                              ]
                              : (this.broadcastQueries(),
                                [
                                  2,
                                  {
                                    data: p,
                                  },
                                ])
                          );
                      }
                    });
                  });
                }),
                (t.prototype.markQueryResult = function (t, e, r, n) {
                  var i = r.fetchPolicy,
                    o = r.variables,
                    s = r.errorPolicy;
                  'no-cache' === i
                    ? this.setQuery(t, function () {
                      return {
                        newData: {
                          result: e.data,
                          complete: !0,
                        },
                      };
                    })
                    : this.dataStore.markQueryResult(e, this.getQuery(t).document, o, n, 'ignore' === s || 'all' === s);
                }),
                (t.prototype.queryListenerForObserver = function (t, e, r) {
                  var n = this;

                  function i(t, e) {
                    if (r[t])
                      try {
                        r[t](e);
                      } catch (t) { }
                  }

                  return function (r, o) {
                    if ((n.invalidate(t, !1), r)) {
                      var s = n.getQuery(t),
                        a = s.observableQuery,
                        u = s.document,
                        c = a ? a.options.fetchPolicy : e.fetchPolicy;
                      if ('standby' !== c) {
                        var f = hr(r.networkStatus),
                          l = a && a.getLastResult(),
                          p = !(!l || l.networkStatus === r.networkStatus),
                          h =
                            e.returnPartialData ||
                            (!o && r.previousVariables) ||
                            (p && e.notifyOnNetworkStatusChange) ||
                            'cache-only' === c ||
                            'cache-and-network' === c;
                        if (!f || h) {
                          var d = br(r.graphQLErrors),
                            b = (a && a.options.errorPolicy) || e.errorPolicy || 'none';
                          if (('none' === b && d) || r.networkError)
                            return i(
                              'error',
                              new vr({
                                graphQLErrors: r.graphQLErrors,
                                networkError: r.networkError,
                              }),
                            );
                          try {
                            var y = void 0,
                              v = void 0;
                            if (o)
                              'no-cache' !== c &&
                                'network-only' !== c &&
                                n.setQuery(t, function () {
                                  return {
                                    newData: null,
                                  };
                                }),
                                (y = o.result),
                                (v = !o.complete);
                            else {
                              var _ = a && a.getLastError(),
                                m = 'none' !== b && (_ && _.graphQLErrors) !== r.graphQLErrors;
                              if (l && l.data && !m) (y = l.data), (v = !1);
                              else {
                                var g = n.dataStore.getCache().diff({
                                  query: u,
                                  variables: r.previousVariables || r.variables,
                                  returnPartialData: !0,
                                  optimistic: !0,
                                });
                                (y = g.result), (v = !g.complete);
                              }
                            }
                            var w = v && !(e.returnPartialData || 'cache-only' === c),
                              I = {
                                data: w ? l && l.data : y,
                                loading: f,
                                networkStatus: r.networkStatus,
                                stale: w,
                              };
                            'all' === b && d && (I.errors = r.graphQLErrors), i('next', I);
                          } catch (t) {
                            i(
                              'error',
                              new vr({
                                networkError: t,
                              }),
                            );
                          }
                        }
                      }
                    }
                  };
                }),
                (t.prototype.transform = function (t) {
                  var e,
                    r = this.transformCache;
                  if (!r.has(t)) {
                    var n = this.dataStore.getCache(),
                      i = n.transformDocument(t),
                      o = ((e = n.transformForLink(i)), Ne([Le], Ee(e))),
                      s = this.localState.clientQuery(i),
                      a = this.localState.serverQuery(o),
                      u = {
                        document: i,
                        hasClientExports: ge(i),
                        hasForcedResolvers: this.localState.shouldForceResolvers(i),
                        clientQuery: s,
                        serverQuery: a,
                        defaultVars: Fe(Oe(i)),
                      },
                      c = function (t) {
                        t && !r.has(t) && r.set(t, u);
                      };
                    c(t), c(i), c(s), c(a);
                  }
                  return r.get(t);
                }),
                (t.prototype.getVariables = function (t, e) {
                  return Qt(Qt({}, this.transform(t).defaultVars), e);
                }),
                (t.prototype.watchQuery = function (t, e) {
                  void 0 === e && (e = !0),
                    Yt('standby' !== t.fetchPolicy, 11),
                    (t.variables = this.getVariables(t.query, t.variables)),
                    void 0 === t.notifyOnNetworkStatusChange && (t.notifyOnNetworkStatusChange = !1);
                  var r = Qt({}, t);
                  return new _r({
                    queryManager: this,
                    options: r,
                    shouldSubscribe: e,
                  });
                }),
                (t.prototype.query = function (t) {
                  var e = this;
                  return (
                    Yt(t.query, 12),
                    Yt('Document' === t.query.kind, 13),
                    Yt(!t.returnPartialData, 14),
                    Yt(!t.pollInterval, 15),
                    new Promise(function (r, n) {
                      var i = e.watchQuery(t, !1);
                      e.fetchQueryRejectFns.set('query:' + i.queryId, n),
                        i
                          .result()
                          .then(r, n)
                          .then(function () {
                            return e.fetchQueryRejectFns.delete('query:' + i.queryId);
                          });
                    })
                  );
                }),
                (t.prototype.generateQueryId = function () {
                  return String(this.idCounter++);
                }),
                (t.prototype.stopQueryInStore = function (t) {
                  this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
                }),
                (t.prototype.stopQueryInStoreNoBroadcast = function (t) {
                  this.stopPollingQuery(t), this.queryStore.stopQuery(t), this.invalidate(t);
                }),
                (t.prototype.addQueryListener = function (t, e) {
                  this.setQuery(t, function (t) {
                    return (
                      t.listeners.add(e),
                      {
                        invalidated: !1,
                      }
                    );
                  });
                }),
                (t.prototype.updateQueryWatch = function (t, e, r) {
                  var n = this,
                    i = this.getQuery(t).cancel;
                  return (
                    i && i(),
                    this.dataStore.getCache().watch({
                      query: e,
                      variables: r.variables,
                      optimistic: !0,
                      previousResult: function () {
                        var e = null,
                          r = n.getQuery(t).observableQuery;
                        if (r) {
                          var i = r.getLastResult();
                          i && (e = i.data);
                        }
                        return e;
                      },
                      callback: function (e) {
                        n.setQuery(t, function () {
                          return {
                            invalidated: !0,
                            newData: e,
                          };
                        });
                      },
                    })
                  );
                }),
                (t.prototype.addObservableQuery = function (t, e) {
                  this.setQuery(t, function () {
                    return {
                      observableQuery: e,
                    };
                  });
                }),
                (t.prototype.removeObservableQuery = function (t) {
                  var e = this.getQuery(t).cancel;
                  this.setQuery(t, function () {
                    return {
                      observableQuery: null,
                    };
                  }),
                    e && e();
                }),
                (t.prototype.clearStore = function () {
                  this.fetchQueryRejectFns.forEach(function (t) {
                    t(new Ht(16));
                  });
                  var t = [];
                  return (
                    this.queries.forEach(function (e, r) {
                      e.observableQuery && t.push(r);
                    }),
                    this.queryStore.reset(t),
                    this.mutationStore.reset(),
                    this.dataStore.reset()
                  );
                }),
                (t.prototype.resetStore = function () {
                  var t = this;
                  return this.clearStore().then(function () {
                    return t.reFetchObservableQueries();
                  });
                }),
                (t.prototype.reFetchObservableQueries = function (t) {
                  var e = this;
                  void 0 === t && (t = !1);
                  var r = [];
                  return (
                    this.queries.forEach(function (n, i) {
                      var o = n.observableQuery;
                      if (o) {
                        var s = o.options.fetchPolicy;
                        o.resetLastResults(),
                          'cache-only' === s || (!t && 'standby' === s) || r.push(o.refetch()),
                          e.setQuery(i, function () {
                            return {
                              newData: null,
                            };
                          }),
                          e.invalidate(i);
                      }
                    }),
                    this.broadcastQueries(),
                    Promise.all(r)
                  );
                }),
                (t.prototype.observeQuery = function (t, e, r) {
                  return this.addQueryListener(t, this.queryListenerForObserver(t, e, r)), this.fetchQuery(t, e);
                }),
                (t.prototype.startQuery = function (t, e, r) {
                  return this.addQueryListener(t, r), this.fetchQuery(t, e).catch(function () { }), t;
                }),
                (t.prototype.startGraphQLSubscription = function (t) {
                  var e = this,
                    r = t.query,
                    n = t.fetchPolicy,
                    i = t.variables;
                  (r = this.transform(r).document), (i = this.getVariables(r, i));
                  var o = function (t) {
                    return e.getObservableFromLink(r, {}, t, !1).map(function (i) {
                      if (
                        ((n && 'no-cache' === n) || (e.dataStore.markSubscriptionResult(i, r, t), e.broadcastQueries()),
                          Ke(i))
                      )
                        throw new vr({
                          graphQLErrors: i.errors,
                        });
                      return i;
                    });
                  };
                  if (this.transform(r).hasClientExports) {
                    var s = this.localState.addExportedVariables(r, i).then(o);
                    return new dr(function (t) {
                      var e = null;
                      return (
                        s.then(function (r) {
                          return (e = r.subscribe(t));
                        }, t.error),
                        function () {
                          return e && e.unsubscribe();
                        }
                      );
                    });
                  }
                  return o(i);
                }),
                (t.prototype.stopQuery = function (t) {
                  this.stopQueryNoBroadcast(t), this.broadcastQueries();
                }),
                (t.prototype.stopQueryNoBroadcast = function (t) {
                  this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
                }),
                (t.prototype.removeQuery = function (t) {
                  this.fetchQueryRejectFns.delete('query:' + t),
                    this.fetchQueryRejectFns.delete('fetchRequest:' + t),
                    this.getQuery(t).subscriptions.forEach(function (t) {
                      return t.unsubscribe();
                    }),
                    this.queries.delete(t);
                }),
                (t.prototype.getCurrentQueryResult = function (t, e) {
                  void 0 === e && (e = !0);
                  var r = t.options,
                    n = r.variables,
                    i = r.query,
                    o = r.fetchPolicy,
                    s = r.returnPartialData,
                    a = t.getLastResult(),
                    u = this.getQuery(t.queryId).newData;
                  if (u && u.complete)
                    return {
                      data: u.result,
                      partial: !1,
                    };
                  if ('no-cache' === o || 'network-only' === o)
                    return {
                      data: void 0,
                      partial: !1,
                    };
                  var c = this.dataStore.getCache().diff({
                    query: i,
                    variables: n,
                    previousResult: a ? a.data : void 0,
                    returnPartialData: !0,
                    optimistic: e,
                  }),
                    f = c.result,
                    l = c.complete;
                  return {
                    data: l || s ? f : void 0,
                    partial: !l,
                  };
                }),
                (t.prototype.getQueryWithPreviousResult = function (t) {
                  var e;
                  if ('string' == typeof t) {
                    var r = this.getQuery(t).observableQuery;
                    Yt(r, 17), (e = r);
                  } else e = t;
                  var n = e.options,
                    i = n.variables,
                    o = n.query;
                  return {
                    previousResult: this.getCurrentQueryResult(e, !1).data,
                    variables: i,
                    document: o,
                  };
                }),
                (t.prototype.broadcastQueries = function () {
                  var t = this;
                  this.onBroadcast(),
                    this.queries.forEach(function (e, r) {
                      e.invalidated &&
                        e.listeners.forEach(function (n) {
                          n && n(t.queryStore.get(r), e.newData);
                        });
                    });
                }),
                (t.prototype.getLocalState = function () {
                  return this.localState;
                }),
                (t.prototype.getObservableFromLink = function (t, e, r, n) {
                  var i,
                    o = this;
                  void 0 === n && (n = this.queryDeduplication);
                  var s = this.transform(t).serverQuery;
                  if (s) {
                    var a = this.inFlightLinkObservables,
                      u = this.link,
                      c = {
                        query: s,
                        variables: r,
                        operationName: Te(s) || void 0,
                        context: this.prepareContext(
                          Qt(Qt({}, e), {
                            forceFetch: !n,
                          }),
                        ),
                      };
                    if (((e = c.context), n)) {
                      var f = a.get(s) || new Map();
                      a.set(s, f);
                      var l = JSON.stringify(r);
                      if (!(i = f.get(l))) {
                        f.set(l, (i = Or(fr(u, c))));
                        var p = function () {
                          f.delete(l), f.size || a.delete(s), h.unsubscribe();
                        },
                          h = i.subscribe({
                            next: p,
                            error: p,
                            complete: p,
                          });
                      }
                    } else i = Or(fr(u, c));
                  } else
                    (i = dr.of({
                      data: {},
                    })),
                      (e = this.prepareContext(e));
                  var d = this.transform(t).clientQuery;
                  return (
                    d &&
                    (i = (function (t, n) {
                      return new dr(function (n) {
                        var i = n.next,
                          s = n.error,
                          a = n.complete,
                          u = 0,
                          c = !1,
                          f = {
                            next: function (t) {
                              ++u,
                                new Promise(function (n) {
                                  var i;
                                  n(
                                    ((i = t),
                                      o.localState.runResolvers({
                                        document: d,
                                        remoteResult: i,
                                        context: e,
                                        variables: r,
                                      })),
                                  );
                                }).then(
                                  function (t) {
                                    --u, i && i.call(n, t), c && f.complete();
                                  },
                                  function (t) {
                                    --u, s && s.call(n, t);
                                  },
                                );
                            },
                            error: function (t) {
                              s && s.call(n, t);
                            },
                            complete: function () {
                              (c = !0), u || (a && a.call(n));
                            },
                          },
                          l = t.subscribe(f);
                        return function () {
                          return l.unsubscribe();
                        };
                      });
                    })(i)),
                    i
                  );
                }),
                (t.prototype.fetchRequest = function (t) {
                  var e,
                    r,
                    n = this,
                    i = t.requestId,
                    o = t.queryId,
                    s = t.document,
                    a = t.options,
                    u = t.fetchMoreForQueryId,
                    c = a.variables,
                    f = a.errorPolicy,
                    l = void 0 === f ? 'none' : f,
                    p = a.fetchPolicy;
                  return new Promise(function (t, f) {
                    var h = n.getObservableFromLink(s, a.context, c),
                      d = 'fetchRequest:' + o;
                    n.fetchQueryRejectFns.set(d, f);
                    var b = function () {
                      n.fetchQueryRejectFns.delete(d),
                        n.setQuery(o, function (t) {
                          t.subscriptions.delete(y);
                        });
                    },
                      y = h
                        .map(function (t) {
                          if (
                            (i >= n.getQuery(o).lastRequestId &&
                              (n.markQueryResult(o, t, a, u),
                                n.queryStore.markQueryResult(o, t, u),
                                n.invalidate(o),
                                n.invalidate(u),
                                n.broadcastQueries()),
                              'none' === l && br(t.errors))
                          )
                            return f(
                              new vr({
                                graphQLErrors: t.errors,
                              }),
                            );
                          if (('all' === l && (r = t.errors), u || 'no-cache' === p)) e = t.data;
                          else {
                            var h = n.dataStore.getCache().diff({
                              variables: c,
                              query: s,
                              optimistic: !1,
                              returnPartialData: !0,
                            }),
                              d = h.result;
                            (h.complete || a.returnPartialData) && (e = d);
                          }
                        })
                        .subscribe({
                          error: function (t) {
                            b(), f(t);
                          },
                          complete: function () {
                            b(),
                              t({
                                data: e,
                                errors: r,
                                loading: !1,
                                networkStatus: lr.ready,
                                stale: !1,
                              });
                          },
                        });
                    n.setQuery(o, function (t) {
                      t.subscriptions.add(y);
                    });
                  });
                }),
                (t.prototype.getQuery = function (t) {
                  return (
                    this.queries.get(t) || {
                      listeners: new Set(),
                      invalidated: !1,
                      document: null,
                      newData: null,
                      lastRequestId: 1,
                      observableQuery: null,
                      subscriptions: new Set(),
                    }
                  );
                }),
                (t.prototype.setQuery = function (t, e) {
                  var r = this.getQuery(t),
                    n = Qt(Qt({}, r), e(r));
                  this.queries.set(t, n);
                }),
                (t.prototype.invalidate = function (t, e) {
                  void 0 === e && (e = !0),
                    t &&
                    this.setQuery(t, function () {
                      return {
                        invalidated: e,
                      };
                    });
                }),
                (t.prototype.prepareContext = function (t) {
                  void 0 === t && (t = {});
                  var e = this.localState.prepareContext(t);
                  return Qt(Qt({}, e), {
                    clientAwareness: this.clientAwareness,
                  });
                }),
                (t.prototype.checkInFlight = function (t) {
                  var e = this.queryStore.get(t);
                  return e && e.networkStatus !== lr.ready && e.networkStatus !== lr.error;
                }),
                (t.prototype.startPollingQuery = function (t, e, r) {
                  var n = this,
                    i = t.pollInterval;
                  if ((Yt(i, 18), !this.ssrMode)) {
                    var o = this.pollingInfoByQueryId.get(e);
                    o || this.pollingInfoByQueryId.set(e, (o = {})),
                      (o.interval = i),
                      (o.options = Qt(Qt({}, t), {
                        fetchPolicy: 'network-only',
                      }));
                    var s = function () {
                      var t = n.pollingInfoByQueryId.get(e);
                      t && (n.checkInFlight(e) ? a() : n.fetchQuery(e, t.options, yr.poll).then(a, a));
                    },
                      a = function () {
                        var t = n.pollingInfoByQueryId.get(e);
                        t && (clearTimeout(t.timeout), (t.timeout = setTimeout(s, t.interval)));
                      };
                    r && this.addQueryListener(e, r), a();
                  }
                  return e;
                }),
                (t.prototype.stopPollingQuery = function (t) {
                  this.pollingInfoByQueryId.delete(t);
                }),
                t
              );
            })(),
            Ar = (function () {
              function t(t) {
                this.cache = t;
              }

              return (
                (t.prototype.getCache = function () {
                  return this.cache;
                }),
                (t.prototype.markQueryResult = function (t, e, r, n, i) {
                  void 0 === i && (i = !1);
                  var o = !Ke(t);
                  i && Ke(t) && t.data && (o = !0),
                    !n &&
                    o &&
                    this.cache.write({
                      result: t.data,
                      dataId: 'ROOT_QUERY',
                      query: e,
                      variables: r,
                    });
                }),
                (t.prototype.markSubscriptionResult = function (t, e, r) {
                  Ke(t) ||
                    this.cache.write({
                      result: t.data,
                      dataId: 'ROOT_SUBSCRIPTION',
                      query: e,
                      variables: r,
                    });
                }),
                (t.prototype.markMutationInit = function (t) {
                  var e,
                    r = this;
                  t.optimisticResponse &&
                    ((e =
                      'function' == typeof t.optimisticResponse
                        ? t.optimisticResponse(t.variables)
                        : t.optimisticResponse),
                      this.cache.recordOptimisticTransaction(function (n) {
                        var i = r.cache;
                        r.cache = n;
                        try {
                          r.markMutationResult({
                            mutationId: t.mutationId,
                            result: {
                              data: e,
                            },
                            document: t.document,
                            variables: t.variables,
                            updateQueries: t.updateQueries,
                            update: t.update,
                          });
                        } finally {
                          r.cache = i;
                        }
                      }, t.mutationId));
                }),
                (t.prototype.markMutationResult = function (t) {
                  var e = this;
                  if (!Ke(t.result)) {
                    var r = [
                      {
                        result: t.result.data,
                        dataId: 'ROOT_MUTATION',
                        query: t.document,
                        variables: t.variables,
                      },
                    ],
                      n = t.updateQueries;
                    n &&
                      Object.keys(n).forEach(function (i) {
                        var o = n[i],
                          s = o.query,
                          a = o.updater,
                          u = e.cache.diff({
                            query: s.document,
                            variables: s.variables,
                            returnPartialData: !0,
                            optimistic: !1,
                          }),
                          c = u.result;
                        if (u.complete) {
                          var f = ze(function () {
                            return a(c, {
                              mutationResult: t.result,
                              queryName: Te(s.document) || void 0,
                              queryVariables: s.variables,
                            });
                          });
                          f &&
                            r.push({
                              result: f,
                              dataId: 'ROOT_QUERY',
                              query: s.document,
                              variables: s.variables,
                            });
                        }
                      }),
                      this.cache.performTransaction(function (e) {
                        r.forEach(function (t) {
                          return e.write(t);
                        });
                        var n = t.update;
                        n &&
                          ze(function () {
                            return n(e, t.result);
                          });
                      });
                  }
                }),
                (t.prototype.markMutationComplete = function (t) {
                  var e = t.mutationId;
                  t.optimisticResponse && this.cache.removeOptimistic(e);
                }),
                (t.prototype.markUpdateQueryResult = function (t, e, r) {
                  this.cache.write({
                    result: r,
                    dataId: 'ROOT_QUERY',
                    variables: e,
                    query: t,
                  });
                }),
                (t.prototype.reset = function () {
                  return this.cache.reset();
                }),
                t
              );
            })(),
            Rr = (function () {
              function t(t) {
                var e = this;
                (this.defaultOptions = {}), (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
                var r = t.cache,
                  n = t.ssrMode,
                  i = void 0 !== n && n,
                  o = t.ssrForceFetchDelay,
                  s = void 0 === o ? 0 : o,
                  a = t.connectToDevTools,
                  u = t.queryDeduplication,
                  c = void 0 === u || u,
                  f = t.defaultOptions,
                  l = t.assumeImmutableResults,
                  p = void 0 !== l && l,
                  h = t.resolvers,
                  d = t.typeDefs,
                  b = t.fragmentMatcher,
                  y = t.name,
                  v = t.version,
                  _ = t.link;
                if ((!_ && h && (_ = cr.empty()), !_ || !r)) throw new Ht(4);
                (this.link = _),
                  (this.cache = r),
                  (this.store = new Ar(r)),
                  (this.disableNetworkFetches = i || s > 0),
                  (this.queryDeduplication = c),
                  (this.defaultOptions = f || {}),
                  (this.typeDefs = d),
                  s &&
                  setTimeout(function () {
                    return (e.disableNetworkFetches = !1);
                  }, s),
                  (this.watchQuery = this.watchQuery.bind(this)),
                  (this.query = this.query.bind(this)),
                  (this.mutate = this.mutate.bind(this)),
                  (this.resetStore = this.resetStore.bind(this)),
                  (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this)),
                  void 0 !== a && a && 'undefined' != typeof window && (window.__APOLLO_CLIENT__ = this),
                  (this.version = '2.6.10'),
                  (this.localState = new Er({
                    cache: r,
                    client: this,
                    resolvers: h,
                    fragmentMatcher: b,
                  })),
                  (this.queryManager = new kr({
                    link: this.link,
                    store: this.store,
                    queryDeduplication: c,
                    ssrMode: i,
                    clientAwareness: {
                      name: y,
                      version: v,
                    },
                    localState: this.localState,
                    assumeImmutableResults: p,
                    onBroadcast: function () {
                      e.devToolsHookCb &&
                        e.devToolsHookCb({
                          action: {},
                          state: {
                            queries: e.queryManager.queryStore.getStore(),
                            mutations: e.queryManager.mutationStore.getStore(),
                          },
                          dataWithOptimisticResults: e.cache.extract(!0),
                        });
                    },
                  }));
              }

              return (
                (t.prototype.stop = function () {
                  this.queryManager.stop();
                }),
                (t.prototype.watchQuery = function (t) {
                  return (
                    this.defaultOptions.watchQuery && (t = Qt(Qt({}, this.defaultOptions.watchQuery), t)),
                    !this.disableNetworkFetches ||
                    ('network-only' !== t.fetchPolicy && 'cache-and-network' !== t.fetchPolicy) ||
                    (t = Qt(Qt({}, t), {
                      fetchPolicy: 'cache-first',
                    })),
                    this.queryManager.watchQuery(t)
                  );
                }),
                (t.prototype.query = function (t) {
                  return (
                    this.defaultOptions.query && (t = Qt(Qt({}, this.defaultOptions.query), t)),
                    Yt('cache-and-network' !== t.fetchPolicy, 5),
                    this.disableNetworkFetches &&
                    'network-only' === t.fetchPolicy &&
                    (t = Qt(Qt({}, t), {
                      fetchPolicy: 'cache-first',
                    })),
                    this.queryManager.query(t)
                  );
                }),
                (t.prototype.mutate = function (t) {
                  return (
                    this.defaultOptions.mutate && (t = Qt(Qt({}, this.defaultOptions.mutate), t)),
                    this.queryManager.mutate(t)
                  );
                }),
                (t.prototype.subscribe = function (t) {
                  return this.queryManager.startGraphQLSubscription(t);
                }),
                (t.prototype.readQuery = function (t, e) {
                  return void 0 === e && (e = !1), this.cache.readQuery(t, e);
                }),
                (t.prototype.readFragment = function (t, e) {
                  return void 0 === e && (e = !1), this.cache.readFragment(t, e);
                }),
                (t.prototype.writeQuery = function (t) {
                  var e = this.cache.writeQuery(t);
                  return this.queryManager.broadcastQueries(), e;
                }),
                (t.prototype.writeFragment = function (t) {
                  var e = this.cache.writeFragment(t);
                  return this.queryManager.broadcastQueries(), e;
                }),
                (t.prototype.writeData = function (t) {
                  var e = this.cache.writeData(t);
                  return this.queryManager.broadcastQueries(), e;
                }),
                (t.prototype.__actionHookForDevTools = function (t) {
                  this.devToolsHookCb = t;
                }),
                (t.prototype.__requestRaw = function (t) {
                  return fr(this.link, t);
                }),
                (t.prototype.initQueryManager = function () {
                  return this.queryManager;
                }),
                (t.prototype.resetStore = function () {
                  var t = this;
                  return Promise.resolve()
                    .then(function () {
                      return t.queryManager.clearStore();
                    })
                    .then(function () {
                      return Promise.all(
                        t.resetStoreCallbacks.map(function (t) {
                          return t();
                        }),
                      );
                    })
                    .then(function () {
                      return t.reFetchObservableQueries();
                    });
                }),
                (t.prototype.clearStore = function () {
                  var t = this;
                  return Promise.resolve()
                    .then(function () {
                      return t.queryManager.clearStore();
                    })
                    .then(function () {
                      return Promise.all(
                        t.clearStoreCallbacks.map(function (t) {
                          return t();
                        }),
                      );
                    });
                }),
                (t.prototype.onResetStore = function (t) {
                  var e = this;
                  return (
                    this.resetStoreCallbacks.push(t),
                    function () {
                      e.resetStoreCallbacks = e.resetStoreCallbacks.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                }),
                (t.prototype.onClearStore = function (t) {
                  var e = this;
                  return (
                    this.clearStoreCallbacks.push(t),
                    function () {
                      e.clearStoreCallbacks = e.clearStoreCallbacks.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                }),
                (t.prototype.reFetchObservableQueries = function (t) {
                  return this.queryManager.reFetchObservableQueries(t);
                }),
                (t.prototype.extract = function (t) {
                  return this.cache.extract(t);
                }),
                (t.prototype.restore = function (t) {
                  return this.cache.restore(t);
                }),
                (t.prototype.addResolvers = function (t) {
                  this.localState.addResolvers(t);
                }),
                (t.prototype.setResolvers = function (t) {
                  this.localState.setResolvers(t);
                }),
                (t.prototype.getResolvers = function () {
                  return this.localState.getResolvers();
                }),
                (t.prototype.setLocalStateFragmentMatcher = function (t) {
                  this.localState.setFragmentMatcher(t);
                }),
                t
              );
            })();

          function Fr(t) {
            return {
              kind: 'Document',
              definitions: [
                {
                  kind: 'OperationDefinition',
                  operation: 'query',
                  name: {
                    kind: 'Name',
                    value: 'GeneratedClientQuery',
                  },
                  selectionSet: xr(t),
                },
              ],
            };
          }

          function xr(t) {
            if ('number' == typeof t || 'boolean' == typeof t || 'string' == typeof t || null == t) return null;
            if (Array.isArray(t)) return xr(t[0]);
            var e = [];
            return (
              Object.keys(t).forEach(function (r) {
                var n = {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: r,
                  },
                  selectionSet: xr(t[r]) || void 0,
                };
                e.push(n);
              }),
              {
                kind: 'SelectionSet',
                selections: e,
              }
            );
          }

          var Pr,
            Cr = {
              kind: 'Document',
              definitions: [
                {
                  kind: 'OperationDefinition',
                  operation: 'query',
                  name: null,
                  variableDefinitions: null,
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: null,
                        name: {
                          kind: 'Name',
                          value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null,
                      },
                    ],
                  },
                },
              ],
            },
            Vr = (function () {
              function t() { }

              return (
                (t.prototype.transformDocument = function (t) {
                  return t;
                }),
                (t.prototype.transformForLink = function (t) {
                  return t;
                }),
                (t.prototype.readQuery = function (t, e) {
                  return (
                    void 0 === e && (e = !1),
                    this.read({
                      query: t.query,
                      variables: t.variables,
                      optimistic: e,
                    })
                  );
                }),
                (t.prototype.readFragment = function (t, e) {
                  return (
                    void 0 === e && (e = !1),
                    this.read({
                      query: Ie(t.fragment, t.fragmentName),
                      variables: t.variables,
                      rootId: t.id,
                      optimistic: e,
                    })
                  );
                }),
                (t.prototype.writeQuery = function (t) {
                  this.write({
                    dataId: 'ROOT_QUERY',
                    result: t.data,
                    query: t.query,
                    variables: t.variables,
                  });
                }),
                (t.prototype.writeFragment = function (t) {
                  this.write({
                    dataId: t.id,
                    result: t.data,
                    variables: t.variables,
                    query: Ie(t.fragment, t.fragmentName),
                  });
                }),
                (t.prototype.writeData = function (t) {
                  var e,
                    r,
                    n = t.id,
                    i = t.data;
                  if (void 0 !== n) {
                    var o = null;
                    try {
                      o = this.read({
                        rootId: n,
                        optimistic: !1,
                        query: Cr,
                      });
                    } catch (t) { }
                    var s = (o && o.__typename) || '__ClientData',
                      a = Object.assign(
                        {
                          __typename: s,
                        },
                        i,
                      );
                    this.writeFragment({
                      id: n,
                      fragment:
                        ((e = a),
                          (r = s),
                        {
                          kind: 'Document',
                          definitions: [
                            {
                              kind: 'FragmentDefinition',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: r || '__FakeType',
                                },
                              },
                              name: {
                                kind: 'Name',
                                value: 'GeneratedClientQuery',
                              },
                              selectionSet: xr(e),
                            },
                          ],
                        }),
                      data: a,
                    });
                  } else
                    this.writeQuery({
                      query: Fr(i),
                      data: i,
                    });
                }),
                t
              );
            })();
          Pr || (Pr = {});
          var Br = null,
            Nr = {},
            Lr = 1,
            jr = '@wry/context:Slot',
            Mr = Array,
            Qr =
              Mr[jr] ||
              (function () {
                var t = (function () {
                  function t() {
                    this.id = ['slot', Lr++, Date.now(), Math.random().toString(36).slice(2)].join(':');
                  }

                  return (
                    (t.prototype.hasValue = function () {
                      for (var t = Br; t; t = t.parent)
                        if (this.id in t.slots) {
                          var e = t.slots[this.id];
                          if (e === Nr) break;
                          return t !== Br && (Br.slots[this.id] = e), !0;
                        }
                      return Br && (Br.slots[this.id] = Nr), !1;
                    }),
                    (t.prototype.getValue = function () {
                      if (this.hasValue()) return Br.slots[this.id];
                    }),
                    (t.prototype.withValue = function (t, e, r, n) {
                      var i,
                        o =
                          (((i = {
                            __proto__: null,
                          })[this.id] = t),
                            i),
                        s = Br;
                      Br = {
                        parent: s,
                        slots: o,
                      };
                      try {
                        return e.apply(n, r);
                      } finally {
                        Br = s;
                      }
                    }),
                    (t.bind = function (t) {
                      var e = Br;
                      return function () {
                        var r = Br;
                        try {
                          return (Br = e), t.apply(this, arguments);
                        } finally {
                          Br = r;
                        }
                      };
                    }),
                    (t.noContext = function (t, e, r) {
                      if (!Br) return t.apply(r, e);
                      var n = Br;
                      try {
                        return (Br = null), t.apply(r, e);
                      } finally {
                        Br = n;
                      }
                    }),
                    t
                  );
                })();
                try {
                  Object.defineProperty(Mr, jr, {
                    value: (Mr[jr] = t),
                    enumerable: !1,
                    writable: !1,
                    configurable: !1,
                  });
                } finally {
                  return t;
                }
              })();

          function qr() { }

          Qr.bind, Qr.noContext;
          var Dr = (function () {
            function t(t, e) {
              void 0 === t && (t = 1 / 0),
                void 0 === e && (e = qr),
                (this.max = t),
                (this.dispose = e),
                (this.map = new Map()),
                (this.newest = null),
                (this.oldest = null);
            }

            return (
              (t.prototype.has = function (t) {
                return this.map.has(t);
              }),
              (t.prototype.get = function (t) {
                var e = this.getEntry(t);
                return e && e.value;
              }),
              (t.prototype.getEntry = function (t) {
                var e = this.map.get(t);
                if (e && e !== this.newest) {
                  var r = e.older,
                    n = e.newer;
                  n && (n.older = r),
                    r && (r.newer = n),
                    (e.older = this.newest),
                    (e.older.newer = e),
                    (e.newer = null),
                    (this.newest = e),
                    e === this.oldest && (this.oldest = n);
                }
                return e;
              }),
              (t.prototype.set = function (t, e) {
                var r = this.getEntry(t);
                return r
                  ? (r.value = e)
                  : ((r = {
                    key: t,
                    value: e,
                    newer: null,
                    older: this.newest,
                  }),
                    this.newest && (this.newest.newer = r),
                    (this.newest = r),
                    (this.oldest = this.oldest || r),
                    this.map.set(t, r),
                    r.value);
              }),
              (t.prototype.clean = function () {
                for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key);
              }),
              (t.prototype.delete = function (t) {
                var e = this.map.get(t);
                return (
                  !!e &&
                  (e === this.newest && (this.newest = e.older),
                    e === this.oldest && (this.oldest = e.newer),
                    e.newer && (e.newer.older = e.older),
                    e.older && (e.older.newer = e.newer),
                    this.map.delete(t),
                    this.dispose(e.value, t),
                    !0)
                );
              }),
              t
            );
          })(),
            Ur = new Qr(),
            Gr = [],
            zr = [];

          function Kr(t, e) {
            if (!t) throw new Error(e || 'assertion failure');
          }

          function $r(t) {
            switch (t.length) {
              case 0:
                throw new Error('unknown value');
              case 1:
                return t[0];
              case 2:
                throw t[1];
            }
          }

          var Wr = (function () {
            function t(e, r) {
              (this.fn = e),
                (this.args = r),
                (this.parents = new Set()),
                (this.childValues = new Map()),
                (this.dirtyChildren = null),
                (this.dirty = !0),
                (this.recomputing = !1),
                (this.value = []),
                ++t.count;
            }

            return (
              (t.prototype.recompute = function () {
                if (
                  (Kr(!this.recomputing, 'already recomputing'),
                    (function (t) {
                      var e = Ur.getValue();
                      if (e)
                        return (
                          t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), Yr(t) ? Xr(e, t) : tn(e, t), e
                        );
                    })(this) || !rn(this))
                )
                  return Yr(this)
                    ? ((e = nn((t = this))),
                      Ur.withValue(t, Hr, [t]),
                      (function (t) {
                        if ('function' == typeof t.subscribe)
                          try {
                            sn(t), (t.unsubscribe = t.subscribe.apply(null, t.args));
                          } catch (e) {
                            return t.setDirty(), !1;
                          }
                        return !0;
                      })(t) &&
                      (function (t) {
                        (t.dirty = !1), Yr(t) || Zr(t);
                      })(t),
                      e.forEach(rn),
                      $r(t.value))
                    : $r(this.value);
                var t, e;
              }),
              (t.prototype.setDirty = function () {
                this.dirty || ((this.dirty = !0), (this.value.length = 0), Jr(this), sn(this));
              }),
              (t.prototype.dispose = function () {
                var t = this;
                nn(this).forEach(rn),
                  sn(this),
                  this.parents.forEach(function (e) {
                    e.setDirty(), on(e, t);
                  });
              }),
              (t.count = 0),
              t
            );
          })();

          function Hr(t) {
            (t.recomputing = !0), (t.value.length = 0);
            try {
              t.value[0] = t.fn.apply(null, t.args);
            } catch (e) {
              t.value[1] = e;
            }
            t.recomputing = !1;
          }

          function Yr(t) {
            return t.dirty || !(!t.dirtyChildren || !t.dirtyChildren.size);
          }

          function Jr(t) {
            t.parents.forEach(function (e) {
              return Xr(e, t);
            });
          }

          function Zr(t) {
            t.parents.forEach(function (e) {
              return tn(e, t);
            });
          }

          function Xr(t, e) {
            if ((Kr(t.childValues.has(e)), Kr(Yr(e)), t.dirtyChildren)) {
              if (t.dirtyChildren.has(e)) return;
            } else t.dirtyChildren = zr.pop() || new Set();
            t.dirtyChildren.add(e), Jr(t);
          }

          function tn(t, e) {
            Kr(t.childValues.has(e)), Kr(!Yr(e));
            var r,
              n,
              i,
              o = t.childValues.get(e);
            0 === o.length
              ? t.childValues.set(e, e.value.slice(0))
              : ((r = o), (n = e.value), ((i = r.length) > 0 && i === n.length && r[i - 1] === n[i - 1]) || t.setDirty()),
              en(t, e),
              Yr(t) || Zr(t);
          }

          function en(t, e) {
            var r = t.dirtyChildren;
            r && (r.delete(e), 0 === r.size && (zr.length < 100 && zr.push(r), (t.dirtyChildren = null)));
          }

          function rn(t) {
            return 0 === t.parents.size && 'function' == typeof t.reportOrphan && !0 === t.reportOrphan();
          }

          function nn(t) {
            var e = Gr;
            return (
              t.childValues.size > 0 &&
              ((e = []),
                t.childValues.forEach(function (r, n) {
                  on(t, n), e.push(n);
                })),
              Kr(null === t.dirtyChildren),
              e
            );
          }

          function on(t, e) {
            e.parents.delete(t), t.childValues.delete(e), en(t, e);
          }

          function sn(t) {
            var e = t.unsubscribe;
            'function' == typeof e && ((t.unsubscribe = void 0), e());
          }

          var an = (function () {
            function t(t) {
              this.weakness = t;
            }

            return (
              (t.prototype.lookup = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return this.lookupArray(t);
              }),
              (t.prototype.lookupArray = function (t) {
                var e = this;
                return (
                  t.forEach(function (t) {
                    return (e = e.getChildTrie(t));
                  }),
                  e.data || (e.data = Object.create(null))
                );
              }),
              (t.prototype.getChildTrie = function (e) {
                var r =
                  this.weakness &&
                    (function (t) {
                      switch (typeof t) {
                        case 'object':
                          if (null === t) break;
                        case 'function':
                          return !0;
                      }
                      return !1;
                    })(e)
                    ? this.weak || (this.weak = new WeakMap())
                    : this.strong || (this.strong = new Map()),
                  n = r.get(e);
                return n || r.set(e, (n = new t(this.weakness))), n;
              }),
              t
            );
          })(),
            un = new an('function' == typeof WeakMap);

          function cn() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return un.lookupArray(t);
          }

          var fn = new Set();

          function ln(t, e) {
            void 0 === e && (e = Object.create(null));
            var r = new Dr(e.max || Math.pow(2, 16), function (t) {
              return t.dispose();
            }),
              n = !!e.disposable,
              i = e.makeCacheKey || cn;

            function o() {
              if (!n || Ur.hasValue()) {
                var o = i.apply(null, arguments);
                if (void 0 === o) return t.apply(null, arguments);
                var s = Array.prototype.slice.call(arguments),
                  a = r.get(o);
                a
                  ? (a.args = s)
                  : ((a = new Wr(t, s)),
                    r.set(o, a),
                    (a.subscribe = e.subscribe),
                    n &&
                    (a.reportOrphan = function () {
                      return r.delete(o);
                    }));
                var u = a.recompute();
                return (
                  r.set(o, a),
                  fn.add(r),
                  Ur.hasValue() ||
                  (fn.forEach(function (t) {
                    return t.clean();
                  }),
                    fn.clear()),
                  n ? void 0 : u
                );
              }
            }

            return (
              (o.dirty = function () {
                var t = i.apply(null, arguments),
                  e = void 0 !== t && r.get(t);
                e && e.setDirty();
              }),
              o
            );
          }

          var pn = !1;

          function hn() {
            var t = !pn;
            return !0 === Ge('test') || (pn = !0), t;
          }

          var dn = (function () {
            function t() { }

            return (
              (t.prototype.ensureReady = function () {
                return Promise.resolve();
              }),
              (t.prototype.canBypassInit = function () {
                return !0;
              }),
              (t.prototype.match = function (t, e, r) {
                var n = r.store.get(t.id),
                  i = 'ROOT_QUERY' === t.id;
                if (!n) return i;
                var o = n.__typename,
                  s = void 0 === o ? i && 'Query' : o;
                return (s && s === e) || (hn(), 'heuristic');
              }),
              t
            );
          })(),
            bn =
              ((function () {
                function t(t) {
                  t && t.introspectionQueryResultData
                    ? ((this.possibleTypesMap = this.parseIntrospectionResult(t.introspectionQueryResultData)),
                      (this.isReady = !0))
                    : (this.isReady = !1),
                    (this.match = this.match.bind(this));
                }

                (t.prototype.match = function (t, e, r) {
                  Yt(this.isReady, 1);
                  var n = r.store.get(t.id),
                    i = 'ROOT_QUERY' === t.id;
                  if (!n) return i;
                  var o = n.__typename,
                    s = void 0 === o ? i && 'Query' : o;
                  if ((Yt(s, 2), s === e)) return !0;
                  var a = this.possibleTypesMap[e];
                  return !!(s && a && a.indexOf(s) > -1);
                }),
                  (t.prototype.parseIntrospectionResult = function (t) {
                    var e = {};
                    return (
                      t.__schema.types.forEach(function (t) {
                        ('UNION' !== t.kind && 'INTERFACE' !== t.kind) ||
                          (e[t.name] = t.possibleTypes.map(function (t) {
                            return t.name;
                          }));
                      }),
                      e
                    );
                  });
              })(),
                Object.prototype.hasOwnProperty),
            yn = (function () {
              function t(t) {
                var e = this;
                void 0 === t && (t = Object.create(null)),
                  (this.data = t),
                  (this.depend = ln(
                    function (t) {
                      return e.data[t];
                    },
                    {
                      disposable: !0,
                      makeCacheKey: function (t) {
                        return t;
                      },
                    },
                  ));
              }

              return (
                (t.prototype.toObject = function () {
                  return this.data;
                }),
                (t.prototype.get = function (t) {
                  return this.depend(t), this.data[t];
                }),
                (t.prototype.set = function (t, e) {
                  e !== this.data[t] && ((this.data[t] = e), this.depend.dirty(t));
                }),
                (t.prototype.delete = function (t) {
                  bn.call(this.data, t) && (delete this.data[t], this.depend.dirty(t));
                }),
                (t.prototype.clear = function () {
                  this.replace(null);
                }),
                (t.prototype.replace = function (t) {
                  var e = this;
                  t
                    ? (Object.keys(t).forEach(function (r) {
                      e.set(r, t[r]);
                    }),
                      Object.keys(this.data).forEach(function (r) {
                        bn.call(t, r) || e.delete(r);
                      }))
                    : Object.keys(this.data).forEach(function (t) {
                      e.delete(t);
                    });
                }),
                t
              );
            })();

          function vn(t) {
            return new yn(t);
          }

          var _n = (function () {
            function t(t) {
              var e = this,
                r = void 0 === t ? {} : t,
                n = r.cacheKeyRoot,
                i = void 0 === n ? new an(Qe) : n,
                o = r.freezeResults,
                s = void 0 !== o && o,
                a = this,
                u = a.executeStoreQuery,
                c = a.executeSelectionSet,
                f = a.executeSubSelectedArray;
              (this.freezeResults = s),
                (this.executeStoreQuery = ln(
                  function (t) {
                    return u.call(e, t);
                  },
                  {
                    makeCacheKey: function (t) {
                      var e = t.query,
                        r = t.rootValue,
                        n = t.contextValue,
                        o = t.variableValues,
                        s = t.fragmentMatcher;
                      if (n.store instanceof yn) return i.lookup(n.store, e, s, JSON.stringify(o), r.id);
                    },
                  },
                )),
                (this.executeSelectionSet = ln(
                  function (t) {
                    return c.call(e, t);
                  },
                  {
                    makeCacheKey: function (t) {
                      var e = t.selectionSet,
                        r = t.rootValue,
                        n = t.execContext;
                      if (n.contextValue.store instanceof yn)
                        return i.lookup(
                          n.contextValue.store,
                          e,
                          n.fragmentMatcher,
                          JSON.stringify(n.variableValues),
                          r.id,
                        );
                    },
                  },
                )),
                (this.executeSubSelectedArray = ln(
                  function (t) {
                    return f.call(e, t);
                  },
                  {
                    makeCacheKey: function (t) {
                      var e = t.field,
                        r = t.array,
                        n = t.execContext;
                      if (n.contextValue.store instanceof yn)
                        return i.lookup(n.contextValue.store, e, r, JSON.stringify(n.variableValues));
                    },
                  },
                ));
            }

            return (
              (t.prototype.readQueryFromStore = function (t) {
                return this.diffQueryAgainstStore(
                  Qt(Qt({}, t), {
                    returnPartialData: !1,
                  }),
                ).result;
              }),
              (t.prototype.diffQueryAgainstStore = function (t) {
                var e,
                  r = t.store,
                  n = t.query,
                  i = t.variables,
                  o = t.previousResult,
                  s = t.returnPartialData,
                  a = void 0 === s || s,
                  u = t.rootId,
                  c = void 0 === u ? 'ROOT_QUERY' : u,
                  f = t.fragmentMatcherFunction,
                  l = t.config;
                i = Se({}, Fe((Yt((e = Oe(n)) && 'query' === e.operation, 6), e)), i);
                var p = {
                  store: r,
                  dataIdFromObject: l && l.dataIdFromObject,
                  cacheRedirects: (l && l.cacheRedirects) || {},
                },
                  h = this.executeStoreQuery({
                    query: n,
                    rootValue: {
                      type: 'id',
                      id: c,
                      generated: !0,
                      typename: 'Query',
                    },
                    contextValue: p,
                    variableValues: i,
                    fragmentMatcher: f,
                  }),
                  d = h.missing && h.missing.length > 0;
                return (
                  d &&
                  !a &&
                  h.missing.forEach(function (t) {
                    if (!t.tolerable) throw new Ht(8);
                  }),
                  o && oe(o, h.result) && (h.result = o),
                  {
                    result: h.result,
                    complete: !d,
                  }
                );
              }),
              (t.prototype.executeStoreQuery = function (t) {
                var e = t.query,
                  r = t.rootValue,
                  n = t.contextValue,
                  i = t.variableValues,
                  o = t.fragmentMatcher,
                  s = void 0 === o ? gn : o,
                  a = Ae(e),
                  u = {
                    query: e,
                    fragmentMap: Re(ke(e)),
                    contextValue: n,
                    variableValues: i,
                    fragmentMatcher: s,
                  };
                return this.executeSelectionSet({
                  selectionSet: a.selectionSet,
                  rootValue: r,
                  execContext: u,
                });
              }),
              (t.prototype.executeSelectionSet = function (t) {
                var e = this,
                  r = t.selectionSet,
                  n = t.rootValue,
                  i = t.execContext,
                  o = i.fragmentMap,
                  s = i.contextValue,
                  a = i.variableValues,
                  u = {
                    result: null,
                  },
                  c = [],
                  f = s.store.get(n.id),
                  l = (f && f.__typename) || ('ROOT_QUERY' === n.id && 'Query') || void 0;

                function p(t) {
                  var e;
                  return t.missing && ((u.missing = u.missing || []), (e = u.missing).push.apply(e, t.missing)), t.result;
                }

                return (
                  r.selections.forEach(function (t) {
                    var r;
                    if (_e(t, a))
                      if (he(t)) {
                        var u = p(e.executeField(f, l, t, i));
                        void 0 !== u && c.push((((r = {})[pe(t)] = u), r));
                      } else {
                        var h = void 0;
                        if (de(t)) h = t;
                        else if (!(h = o[t.name.value])) throw new Ht(9);
                        var d = h.typeCondition && h.typeCondition.name.value,
                          b = !d || i.fragmentMatcher(n, d, s);
                        if (b) {
                          var y = e.executeSelectionSet({
                            selectionSet: h.selectionSet,
                            rootValue: n,
                            execContext: i,
                          });
                          'heuristic' === b &&
                            y.missing &&
                            (y = Qt(Qt({}, y), {
                              missing: y.missing.map(function (t) {
                                return Qt(Qt({}, t), {
                                  tolerable: !0,
                                });
                              }),
                            })),
                            c.push(p(y));
                        }
                      }
                  }),
                  (u.result = He(c)),
                  this.freezeResults,
                  u
                );
              }),
              (t.prototype.executeField = function (t, e, r, n) {
                var i = n.variableValues,
                  o = n.contextValue,
                  s = (function (t, e, r, n, i, o) {
                    var s = o.directives,
                      a = r;
                    (n || s) && (a = fe(a, n, s));
                    var u,
                      c = void 0;
                    if (t && void 0 === (c = t[a]) && i.cacheRedirects && 'string' == typeof e) {
                      var f = i.cacheRedirects[e];
                      if (f) {
                        var l = f[r];
                        l &&
                          (c = l(t, n, {
                            getCacheKey: function (t) {
                              var e = i.dataIdFromObject(t);
                              return (
                                e &&
                                ye({
                                  id: e,
                                  typename: t.__typename,
                                })
                              );
                            },
                          }));
                      }
                    }
                    return void 0 === c
                      ? {
                        result: c,
                        missing: [
                          {
                            object: t,
                            fieldName: a,
                            tolerable: !1,
                          },
                        ],
                      }
                      : (null != (u = c) && 'object' == typeof u && 'json' === u.type && (c = c.json),
                      {
                        result: c,
                      });
                  })(t, e, r.name.value, le(r, i), o, {
                    resultKey: pe(r),
                    directives: ve(r, i),
                  });
                return Array.isArray(s.result)
                  ? this.combineExecResults(
                    s,
                    this.executeSubSelectedArray({
                      field: r,
                      array: s.result,
                      execContext: n,
                    }),
                  )
                  : r.selectionSet
                    ? null == s.result
                      ? s
                      : this.combineExecResults(
                        s,
                        this.executeSelectionSet({
                          selectionSet: r.selectionSet,
                          rootValue: s.result,
                          execContext: n,
                        }),
                      )
                    : (mn(r, s.result), this.freezeResults, s);
              }),
              (t.prototype.combineExecResults = function () {
                for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return (
                  e.forEach(function (e) {
                    e.missing && (t = t || []).push.apply(t, e.missing);
                  }),
                  {
                    result: e.pop().result,
                    missing: t,
                  }
                );
              }),
              (t.prototype.executeSubSelectedArray = function (t) {
                var e,
                  r = this,
                  n = t.field,
                  i = t.array,
                  o = t.execContext;

                function s(t) {
                  return t.missing && (e = e || []).push.apply(e, t.missing), t.result;
                }

                return (
                  (i = i.map(function (t) {
                    return null === t
                      ? null
                      : Array.isArray(t)
                        ? s(
                          r.executeSubSelectedArray({
                            field: n,
                            array: t,
                            execContext: o,
                          }),
                        )
                        : n.selectionSet
                          ? s(
                            r.executeSelectionSet({
                              selectionSet: n.selectionSet,
                              rootValue: t,
                              execContext: o,
                            }),
                          )
                          : (mn(n, t), t);
                  })),
                  this.freezeResults,
                  {
                    result: i,
                    missing: e,
                  }
                );
              }),
              t
            );
          })();

          function mn(t, e) {
            if (!t.selectionSet && be(e)) throw new Ht(10);
          }

          function gn() {
            return !0;
          }

          var wn = (function () {
            function t(t) {
              void 0 === t && (t = Object.create(null)), (this.data = t);
            }

            return (
              (t.prototype.toObject = function () {
                return this.data;
              }),
              (t.prototype.get = function (t) {
                return this.data[t];
              }),
              (t.prototype.set = function (t, e) {
                this.data[t] = e;
              }),
              (t.prototype.delete = function (t) {
                this.data[t] = void 0;
              }),
              (t.prototype.clear = function () {
                this.data = Object.create(null);
              }),
              (t.prototype.replace = function (t) {
                this.data = t || Object.create(null);
              }),
              t
            );
          })(),
            In = (function (t) {
              function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.type = 'WriteError'), e;
              }

              return Mt(e, t), e;
            })(Error),
            Sn = (function () {
              function t() { }

              return (
                (t.prototype.writeQueryToStore = function (t) {
                  var e = t.query,
                    r = t.result,
                    n = t.store,
                    i = void 0 === n ? vn() : n,
                    o = t.variables,
                    s = t.dataIdFromObject,
                    a = t.fragmentMatcherFunction;
                  return this.writeResultToStore({
                    dataId: 'ROOT_QUERY',
                    result: r,
                    document: e,
                    store: i,
                    variables: o,
                    dataIdFromObject: s,
                    fragmentMatcherFunction: a,
                  });
                }),
                (t.prototype.writeResultToStore = function (t) {
                  var e = t.dataId,
                    r = t.result,
                    n = t.document,
                    i = t.store,
                    o = void 0 === i ? vn() : i,
                    s = t.variables,
                    a = t.dataIdFromObject,
                    u = t.fragmentMatcherFunction,
                    c = Oe(n);
                  try {
                    return this.writeSelectionSetToStore({
                      result: r,
                      dataId: e,
                      selectionSet: c.selectionSet,
                      context: {
                        store: o,
                        processedData: {},
                        variables: Se({}, Fe(c), s),
                        dataIdFromObject: a,
                        fragmentMap: Re(ke(n)),
                        fragmentMatcherFunction: u,
                      },
                    });
                  } catch (t) {
                    throw (function (t, e) {
                      var r = new In('Error writing result to store for query:\n ' + JSON.stringify(e));
                      return (r.message += '\n' + t.message), (r.stack = t.stack), r;
                    })(t, n);
                  }
                }),
                (t.prototype.writeSelectionSetToStore = function (t) {
                  var e = this,
                    r = t.result,
                    n = t.dataId,
                    i = t.selectionSet,
                    o = t.context,
                    s = o.variables,
                    a = o.store,
                    u = o.fragmentMap;
                  return (
                    i.selections.forEach(function (t) {
                      var i;
                      if (_e(t, s))
                        if (he(t)) {
                          var a = pe(t),
                            c = r[a];
                          if (void 0 !== c)
                            e.writeFieldToStore({
                              dataId: n,
                              value: c,
                              field: t,
                              context: o,
                            });
                          else {
                            var f = !1,
                              l = !1;
                            t.directives &&
                              t.directives.length &&
                              ((f = t.directives.some(function (t) {
                                return t.name && 'defer' === t.name.value;
                              })),
                                (l = t.directives.some(function (t) {
                                  return t.name && 'client' === t.name.value;
                                }))),
                              !f && !l && o.fragmentMatcherFunction;
                          }
                        } else {
                          var p = void 0;
                          de(t) ? (p = t) : Yt((p = (u || {})[t.name.value]), 3);
                          var h = !0;
                          if (o.fragmentMatcherFunction && p.typeCondition) {
                            var d = n || 'self',
                              b = ye({
                                id: d,
                                typename: void 0,
                              }),
                              y = {
                                store: new wn(((i = {}), (i[d] = r), i)),
                                cacheRedirects: {},
                              },
                              v = o.fragmentMatcherFunction(b, p.typeCondition.name.value, y);
                            Ge('production'), (h = !!v);
                          }
                          h &&
                            e.writeSelectionSetToStore({
                              result: r,
                              selectionSet: p.selectionSet,
                              dataId: n,
                              context: o,
                            });
                        }
                    }),
                    a
                  );
                }),
                (t.prototype.writeFieldToStore = function (t) {
                  var e,
                    r,
                    n,
                    i = t.field,
                    o = t.value,
                    s = t.dataId,
                    a = t.context,
                    u = a.variables,
                    c = a.dataIdFromObject,
                    f = a.store,
                    l = (function (t, e) {
                      var r = null;
                      t.directives &&
                        ((r = {}),
                          t.directives.forEach(function (t) {
                            (r[t.name.value] = {}),
                              t.arguments &&
                              t.arguments.forEach(function (n) {
                                var i = n.name,
                                  o = n.value;
                                return ue(r[t.name.value], i, o, e);
                              });
                          }));
                      var n = null;
                      return (
                        t.arguments &&
                        t.arguments.length &&
                        ((n = {}),
                          t.arguments.forEach(function (t) {
                            var r = t.name,
                              i = t.value;
                            return ue(n, r, i, e);
                          })),
                        fe(t.name.value, n, r)
                      );
                    })(i, u);
                  if (i.selectionSet && null !== o)
                    if (Array.isArray(o)) {
                      var p = s + '.' + l;
                      r = this.processArrayValue(o, p, i.selectionSet, a);
                    } else {
                      var h = s + '.' + l,
                        d = !0;
                      if ((En(h) || (h = '$' + h), c)) {
                        var b = c(o);
                        Yt(!b || !En(b), 4), (b || ('number' == typeof b && 0 === b)) && ((h = b), (d = !1));
                      }
                      Tn(h, i, a.processedData) ||
                        this.writeSelectionSetToStore({
                          dataId: h,
                          result: o,
                          selectionSet: i.selectionSet,
                          context: a,
                        });
                      var y = o.__typename;
                      r = ye(
                        {
                          id: h,
                          typename: y,
                        },
                        d,
                      );
                      var v = (n = f.get(s)) && n[l];
                      if (v !== r && be(v)) {
                        var _ = void 0 !== v.typename,
                          m = void 0 !== y,
                          g = _ && m && v.typename !== y;
                        Yt(!d || v.generated || g, 5),
                          Yt(!_ || m, 6),
                          v.generated && (g ? d || f.delete(v.id) : On(v.id, r.id, f));
                      }
                    }
                  else
                    r =
                      null != o && 'object' == typeof o
                        ? {
                          type: 'json',
                          json: o,
                        }
                        : o;
                  ((n = f.get(s)) && oe(r, n[l])) || f.set(s, Qt(Qt({}, n), (((e = {})[l] = r), e)));
                }),
                (t.prototype.processArrayValue = function (t, e, r, n) {
                  var i = this;
                  return t.map(function (t, o) {
                    if (null === t) return null;
                    var s = e + '.' + o;
                    if (Array.isArray(t)) return i.processArrayValue(t, s, r, n);
                    var a = !0;
                    if (n.dataIdFromObject) {
                      var u = n.dataIdFromObject(t);
                      u && ((s = u), (a = !1));
                    }
                    return (
                      Tn(s, r, n.processedData) ||
                      i.writeSelectionSetToStore({
                        dataId: s,
                        result: t,
                        selectionSet: r,
                        context: n,
                      }),
                      ye(
                        {
                          id: s,
                          typename: t.__typename,
                        },
                        a,
                      )
                    );
                  });
                }),
                t
              );
            })();

          function En(t) {
            return '$' === t[0];
          }

          function On(t, e, r) {
            if (t === e) return !1;
            var n = r.get(t),
              i = r.get(e),
              o = !1;
            Object.keys(n).forEach(function (t) {
              var e = n[t],
                s = i[t];
              be(e) && En(e.id) && be(s) && !oe(e, s) && On(e.id, s.id, r) && (o = !0);
            }),
              r.delete(t);
            var s = Qt(Qt({}, n), i);
            return oe(s, i) ? o : (r.set(e, s), !0);
          }

          function Tn(t, e, r) {
            if (!r) return !1;
            if (r[t]) {
              if (r[t].indexOf(e) >= 0) return !0;
              r[t].push(e);
            } else r[t] = [e];
            return !1;
          }

          var kn = {
            fragmentMatcher: new dn(),
            dataIdFromObject: function (t) {
              if (t.__typename) {
                if (void 0 !== t.id) return t.__typename + ':' + t.id;
                if (void 0 !== t._id) return t.__typename + ':' + t._id;
              }
              return null;
            },
            addTypename: !0,
            resultCaching: !0,
            freezeResults: !1,
          },
            An = Object.prototype.hasOwnProperty,
            Rn = (function (t) {
              function e(e, r, n) {
                var i = t.call(this, Object.create(null)) || this;
                return (i.optimisticId = e), (i.parent = r), (i.transaction = n), i;
              }

              return (
                Mt(e, t),
                (e.prototype.toObject = function () {
                  return Qt(Qt({}, this.parent.toObject()), this.data);
                }),
                (e.prototype.get = function (t) {
                  return An.call(this.data, t) ? this.data[t] : this.parent.get(t);
                }),
                e
              );
            })(wn),
            Fn = (function (t) {
              function e(e) {
                void 0 === e && (e = {});
                var r = t.call(this) || this;
                (r.watches = new Set()),
                  (r.typenameDocumentCache = new Map()),
                  (r.cacheKeyRoot = new an(Qe)),
                  (r.silenceBroadcast = !1),
                  (r.config = Qt(Qt({}, kn), e)),
                  r.config.customResolvers && (r.config.cacheRedirects = r.config.customResolvers),
                  r.config.cacheResolvers && (r.config.cacheRedirects = r.config.cacheResolvers),
                  (r.addTypename = !!r.config.addTypename),
                  (r.data = r.config.resultCaching ? new yn() : new wn()),
                  (r.optimisticData = r.data),
                  (r.storeWriter = new Sn()),
                  (r.storeReader = new _n({
                    cacheKeyRoot: r.cacheKeyRoot,
                    freezeResults: e.freezeResults,
                  }));
                var n = r,
                  i = n.maybeBroadcastWatch;
                return (
                  (r.maybeBroadcastWatch = ln(
                    function (t) {
                      return i.call(r, t);
                    },
                    {
                      makeCacheKey: function (t) {
                        if (!t.optimistic && !t.previousResult)
                          return n.data instanceof yn
                            ? n.cacheKeyRoot.lookup(t.query, JSON.stringify(t.variables))
                            : void 0;
                      },
                    },
                  )),
                  r
                );
              }

              return (
                Mt(e, t),
                (e.prototype.restore = function (t) {
                  return t && this.data.replace(t), this;
                }),
                (e.prototype.extract = function (t) {
                  return void 0 === t && (t = !1), (t ? this.optimisticData : this.data).toObject();
                }),
                (e.prototype.read = function (t) {
                  if ('string' == typeof t.rootId && void 0 === this.data.get(t.rootId)) return null;
                  var e = this.config.fragmentMatcher,
                    r = e && e.match;
                  return (
                    this.storeReader.readQueryFromStore({
                      store: t.optimistic ? this.optimisticData : this.data,
                      query: this.transformDocument(t.query),
                      variables: t.variables,
                      rootId: t.rootId,
                      fragmentMatcherFunction: r,
                      previousResult: t.previousResult,
                      config: this.config,
                    }) || null
                  );
                }),
                (e.prototype.write = function (t) {
                  var e = this.config.fragmentMatcher,
                    r = e && e.match;
                  this.storeWriter.writeResultToStore({
                    dataId: t.dataId,
                    result: t.result,
                    variables: t.variables,
                    document: this.transformDocument(t.query),
                    store: this.data,
                    dataIdFromObject: this.config.dataIdFromObject,
                    fragmentMatcherFunction: r,
                  }),
                    this.broadcastWatches();
                }),
                (e.prototype.diff = function (t) {
                  var e = this.config.fragmentMatcher,
                    r = e && e.match;
                  return this.storeReader.diffQueryAgainstStore({
                    store: t.optimistic ? this.optimisticData : this.data,
                    query: this.transformDocument(t.query),
                    variables: t.variables,
                    returnPartialData: t.returnPartialData,
                    previousResult: t.previousResult,
                    fragmentMatcherFunction: r,
                    config: this.config,
                  });
                }),
                (e.prototype.watch = function (t) {
                  var e = this;
                  return (
                    this.watches.add(t),
                    function () {
                      e.watches.delete(t);
                    }
                  );
                }),
                (e.prototype.evict = function (t) {
                  throw new Ht(7);
                }),
                (e.prototype.reset = function () {
                  return this.data.clear(), this.broadcastWatches(), Promise.resolve();
                }),
                (e.prototype.removeOptimistic = function (t) {
                  for (var e = [], r = 0, n = this.optimisticData; n instanceof Rn;)
                    n.optimisticId === t ? ++r : e.push(n), (n = n.parent);
                  if (r > 0) {
                    for (this.optimisticData = n; e.length > 0;) {
                      var i = e.pop();
                      this.performTransaction(i.transaction, i.optimisticId);
                    }
                    this.broadcastWatches();
                  }
                }),
                (e.prototype.performTransaction = function (t, e) {
                  var r = this.data,
                    n = this.silenceBroadcast;
                  (this.silenceBroadcast = !0),
                    'string' == typeof e && (this.data = this.optimisticData = new Rn(e, this.optimisticData, t));
                  try {
                    t(this);
                  } finally {
                    (this.silenceBroadcast = n), (this.data = r);
                  }
                  this.broadcastWatches();
                }),
                (e.prototype.recordOptimisticTransaction = function (t, e) {
                  return this.performTransaction(t, e);
                }),
                (e.prototype.transformDocument = function (t) {
                  if (this.addTypename) {
                    var e = this.typenameDocumentCache.get(t);
                    return (
                      e ||
                      ((r = t),
                        (e = (0, zt.visit)(Ee(r), {
                          SelectionSet: {
                            enter: function (t, e, r) {
                              if (!r || 'OperationDefinition' !== r.kind) {
                                var n = t.selections;
                                if (
                                  n &&
                                  !n.some(function (t) {
                                    return (
                                      he(t) && ('__typename' === t.name.value || 0 === t.name.value.lastIndexOf('__', 0))
                                    );
                                  })
                                ) {
                                  var i = r;
                                  if (
                                    !(
                                      he(i) &&
                                      i.directives &&
                                      i.directives.some(function (t) {
                                        return 'export' === t.name.value;
                                      })
                                    )
                                  )
                                    return Qt(Qt({}, t), {
                                      selections: Ut(n, [Pe]),
                                    });
                                }
                              }
                            },
                          },
                        })),
                        this.typenameDocumentCache.set(t, e),
                        this.typenameDocumentCache.set(e, e)),
                      e
                    );
                  }
                  var r;
                  return t;
                }),
                (e.prototype.broadcastWatches = function () {
                  var t = this;
                  this.silenceBroadcast ||
                    this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch(e);
                    });
                }),
                (e.prototype.maybeBroadcastWatch = function (t) {
                  t.callback(
                    this.diff({
                      query: t.query,
                      variables: t.variables,
                      previousResult: t.previousResult && t.previousResult(),
                      optimistic: t.optimistic,
                    }),
                  );
                }),
                e
              );
            })(Vr),
            xn = r(311),
            Pn = r.n(xn),
            Cn = r(313);
          const Vn = (t, e) => {
            const r = (t => {
              const {
                apiKey: e,
                app: r,
                graphqlEndpoint: n,
                sessionId: i,
                timeout: o,
                toolsPreviewToken: s,
                webSocket: a,
              } = t,
                u = (t => {
                  const e = Object.entries(t).reduce(
                    (t, [e, r]) =>
                      null != r
                        ? Object.assign(Object.assign({}, t), {
                          [e]: r,
                        })
                        : t,
                    {},
                  );
                  return new URLSearchParams(e).toString();
                })({
                  app: r,
                  sessionId: i,
                  apiKey: e,
                  toolsp_token: s,
                });
              return new Cn.SubscriptionClient(
                `${n}/avpp/v2/graphql?${u}`,
                {
                  lazy: !0,
                  reconnectionAttempts: 25,
                  reconnect: !0,
                  timeout: o,
                  minTimeout: 1e4,
                  inactivityTimeout: 3e4,
                },
                a,
              );
            })(t);
            r.onReconnected(e),
              r.onDisconnected(() => r.unsubscribeAll()),
              r.onReconnecting(
                () => (r.unsentMessagesQueue = r.unsentMessagesQueue.filter(({ type: t }) => 'start' !== t)),
              );
            const n = new Fn();
            return {
              getClient: () =>
                (({ cache: t, link: e }) =>
                  new Rr({
                    cache: t,
                    link: e,
                  }))({
                    cache: n,
                    link: r,
                  }),
              stop: () => r.close(!0, !0),
            };
          },
            Bn = ({ eventId: t, eventParams: e = {}, lastReceivedVersion: r, client: n }) => {
              const { displayId: i, unlockToken: s } = e,
                a = n.subscribe({
                  query: Pn(),
                  variables: {
                    eventId: t,
                    unlockToken: s,
                    displayId: i,
                    lastReceivedVersion: r,
                  },
                });
              return new z(t =>
                a.subscribe({
                  next: ({ data: e }) => t.next(e),
                  error: e => t.error(new o('AVPP_ERROR', e.message)),
                  complete: () => t.complete(),
                }),
              );
            },
            Nn = (t, e) => {
              const { id: r, sectionName: n } = e;
              return t[n] || (t[n] = []), t[n].push(r), t;
            };
          function Ln(t) {
            return Array.from(
              {
                length: t,
              },
              (t, e) => e,
            );
          }

          function jn(t) {
            return t.numSeats() - t.numGASeats();
          }

          var Mn = b(function (t) {
            return function () {
              t(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
            };
          }),
            Qn = r(80),
            qn = r(764),
            Dn = (function (t) {
              function e(e, r) {
                return t.call(this) || this;
              }

              return (
                a(e, t),
                (e.prototype.schedule = function (t, e) {
                  return void 0 === e && (e = 0), this;
                }),
                e
              );
            })(_),
            Un = {
              setInterval: function (t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                var i = Un.delegate;
                return (null == i ? void 0 : i.setInterval)
                  ? i.setInterval.apply(i, l([t, e], f(r)))
                  : setInterval.apply(void 0, l([t, e], f(r)));
              },
              clearInterval: function (t) {
                var e = Un.delegate;
                return ((null == e ? void 0 : e.clearInterval) || clearInterval)(t);
              },
              delegate: void 0,
            },
            Gn = (function (t) {
              function e(e, r) {
                var n = t.call(this, e, r) || this;
                return (n.scheduler = e), (n.work = r), (n.pending = !1), n;
              }

              return (
                a(e, t),
                (e.prototype.schedule = function (t, e) {
                  if ((void 0 === e && (e = 0), this.closed)) return this;
                  this.state = t;
                  var r = this.id,
                    n = this.scheduler;
                  return (
                    null != r && (this.id = this.recycleAsyncId(n, r, e)),
                    (this.pending = !0),
                    (this.delay = e),
                    (this.id = this.id || this.requestAsyncId(n, this.id, e)),
                    this
                  );
                }),
                (e.prototype.requestAsyncId = function (t, e, r) {
                  return void 0 === r && (r = 0), Un.setInterval(t.flush.bind(t, this), r);
                }),
                (e.prototype.recycleAsyncId = function (t, e, r) {
                  if ((void 0 === r && (r = 0), null != r && this.delay === r && !1 === this.pending)) return e;
                  Un.clearInterval(e);
                }),
                (e.prototype.execute = function (t, e) {
                  if (this.closed) return new Error('executing a cancelled action');
                  this.pending = !1;
                  var r = this._execute(t, e);
                  if (r) return r;
                  !1 === this.pending &&
                    null != this.id &&
                    (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
                }),
                (e.prototype._execute = function (t, e) {
                  var r,
                    n = !1;
                  try {
                    this.work(t);
                  } catch (t) {
                    (n = !0), (r = t || new Error('Scheduled action threw falsy error'));
                  }
                  if (n) return this.unsubscribe(), r;
                }),
                (e.prototype.unsubscribe = function () {
                  if (!this.closed) {
                    var e = this.id,
                      r = this.scheduler,
                      n = r.actions;
                    (this.work = this.state = this.scheduler = null),
                      (this.pending = !1),
                      v(n, this),
                      null != e && (this.id = this.recycleAsyncId(r, e, null)),
                      (this.delay = null),
                      t.prototype.unsubscribe.call(this);
                  }
                }),
                e
              );
            })(Dn),
            zn = {
              now: function () {
                return (zn.delegate || Date).now();
              },
              delegate: void 0,
            },
            Kn = (function () {
              function t(e, r) {
                void 0 === r && (r = t.now), (this.schedulerActionCtor = e), (this.now = r);
              }

              return (
                (t.prototype.schedule = function (t, e, r) {
                  return void 0 === e && (e = 0), new this.schedulerActionCtor(this, t).schedule(r, e);
                }),
                (t.now = zn.now),
                t
              );
            })(),
            $n = new ((function (t) {
              function e(e, r) {
                void 0 === r && (r = Kn.now);
                var n = t.call(this, e, r) || this;
                return (n.actions = []), (n._active = !1), (n._scheduled = void 0), n;
              }

              return (
                a(e, t),
                (e.prototype.flush = function (t) {
                  var e = this.actions;
                  if (this._active) e.push(t);
                  else {
                    var r;
                    this._active = !0;
                    do {
                      if ((r = t.execute(t.state, t.delay))) break;
                    } while ((t = e.shift()));
                    if (((this._active = !1), r)) {
                      for (; (t = e.shift());) t.unsubscribe();
                      throw r;
                    }
                  }
                }),
                e
              );
            })(Kn))(Gn),
            Wn = $n;

          function Hn() {
            return Ft(1);
          }

          function Yn(t, e) {
            return e
              ? function (r) {
                return (function () {
                  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                  return Hn()(dt(t, Et(t)));
                })(
                  e.pipe(
                    yt(1),
                    $(function (t, e) {
                      t.subscribe(H(e, R));
                    }),
                  ),
                  r.pipe(Yn(t)),
                );
              }
              : Rt(function (e, r) {
                return t(e, r).pipe(
                  yt(1),
                  (function (t) {
                    return Z(function () {
                      return t;
                    });
                  })(e),
                );
              });
          }

          function Jn(t) {
            return t instanceof Date && !isNaN(t);
          }

          function Zn(t, e) {
            void 0 === e && (e = $n);
            var r = (function (t, e, r) {
              void 0 === t && (t = 0), void 0 === r && (r = Wn);
              var n = -1;
              return (
                null != e && (It(e) ? (r = e) : (n = e)),
                new z(function (e) {
                  var i = Jn(t) ? +t - r.now() : t;
                  i < 0 && (i = 0);
                  var o = 0;
                  return r.schedule(function () {
                    e.closed || (e.next(o++), 0 <= n ? this.schedule(void 0, n) : e.complete());
                  }, i);
                })
              );
            })(t, e);
            return Yn(function () {
              return r;
            });
          }

          var Xn = b(function (t) {
            return function (e) {
              void 0 === e && (e = null),
                t(this),
                (this.message = 'Timeout has occurred'),
                (this.name = 'TimeoutError'),
                (this.info = e);
            };
          });

          function ti(t) {
            throw new Xn(t);
          }

          const ei = (e, n) => {
            return (
              (i = void 0),
              (s = void 0),
              (u = function* () {
                const i = fetch, 
                  s = `${e.manifestUrl}/sdk/static/manifest/v1/${e.eventId}`;
                try {
                  const r = new Date().getTime(),
                    a = yield i(s);
                  if (200 !== a.status) throw new o(`${t}`, `status=${a.status}`);
                  n.put('manf.fetchTime', new Date().getTime() - r);
                  const u = yield a.json(),
                    { eventId: c } = e,
                    f = {
                      eventId: c,
                      version: ri(u.updateHash, 'updateHash'),
                      placeIds: u.placeIds || [],
                      sections: ri(u.manifestSections, 'manifestSections'),
                    };
                  return n.put('manf.numSeats', f.placeIds.length), n.put('manf.numSections', f.sections.length), f;
                } catch (e) {
                  if (!(e instanceof o)) throw new o(t, e.message);
                  throw e;
                }
              }),
              new ((a = void 0) || (a = Promise))(function (t, e) {
                function r(t) {
                  try {
                    o(u.next(t));
                  } catch (t) {
                    e(t);
                  }
                }

                function n(t) {
                  try {
                    o(u.throw(t));
                  } catch (t) {
                    e(t);
                  }
                }

                function o(e) {
                  var i;
                  e.done
                    ? t(e.value)
                    : ((i = e.value),
                      i instanceof a
                        ? i
                        : new a(function (t) {
                          t(i);
                        })).then(r, n);
                }

                o((u = u.apply(i, s || [])).next());
              })
            );
            var i, s, a, u;
          };
          function ri(t, e) {
            if (!t) throw new o('MANIFEST_PARSER_ERROR_MALFORMED_RESP', `Manifest response has ${e} null`);
            return t;
          }

          const ni = (t, e) => ii(t, e),
            ii = (t, e) => {
              try {
                if (1 === t.statusesLength()) {
                  const r = 0;

                  const statuses = t.statuses(r);
                  const bitmapArray = statuses.roaringBitmapArray();

                  e.deserialize(bitmapArray, !0);
                  const n = e.toUint32Array();
                  return Array.from(n.values());
                }
                return [];
              } catch (t) {
                throw new o('ROARING_BITMAP_DESERIALIZE_ERROR', t.message);
              }
            },
            oi = (r, n, s, a = 0) => {
              return (
                (u = void 0),
                (c = void 0),
                (l = function* () {
                  const { backOffMillis: u } = r;
                  try {
                    const f = yield ((c = ((e, r, n = 0) => {
                      return Tt(1).pipe(
                        Zn(n),
                        ((s = () => {
                          return ((n = () => ei(e, r)),
                            new z(function (t) {
                              ut(n()).subscribe(t);
                            })).pipe(
                              (function (t, e) {
                                var r = Jn(t)
                                  ? {
                                    first: t,
                                  }
                                  : 'number' == typeof t
                                    ? {
                                      each: t,
                                    }
                                    : t,
                                  n = r.first,
                                  i = r.each,
                                  o = r.with,
                                  s = void 0 === o ? ti : o,
                                  a = r.scheduler,
                                  u = void 0 === a ? $n : a,
                                  c = r.meta,
                                  f = void 0 === c ? null : c;
                                if (null == n && null == i) throw new TypeError('No timeout provided.');
                                return $(function (t, e) {
                                  var r,
                                    o,
                                    a = null,
                                    c = 0,
                                    l = function (t) {
                                      o = ft(
                                        e,
                                        u,
                                        function () {
                                          try {
                                            r.unsubscribe(),
                                              ut(
                                                s({
                                                  meta: f,
                                                  lastValue: a,
                                                  seen: c,
                                                }),
                                              ).subscribe(e);
                                          } catch (t) {
                                            e.error(t);
                                          }
                                        },
                                        t,
                                      );
                                    };
                                  (r = t.subscribe(
                                    H(
                                      e,
                                      function (t) {
                                        null == o || o.unsubscribe(), c++, e.next((a = t)), i > 0 && l(i);
                                      },
                                      void 0,
                                      void 0,
                                      function () {
                                        (null == o ? void 0 : o.closed) || null == o || o.unsubscribe(), (a = null);
                                      },
                                    ),
                                  )),
                                    !c && l(null != n ? ('number' == typeof n ? n : +n - u.now()) : i);
                                });
                              })({
                                each: e.timeout,
                                with: () => wt(() => new o(t, i)),
                              }),
                            );
                          var n;
                        }),
                          $(function (t, e) {
                            var r = null,
                              n = !1,
                              i = function () {
                                return n && !r && e.complete();
                              };
                            t.subscribe(
                              H(
                                e,
                                function (t) {
                                  null == r || r.unsubscribe(),
                                    ut(s()).subscribe(
                                      (r = H(
                                        e,
                                        function (t) {
                                          return e.next(t);
                                        },
                                        function () {
                                          (r = null), i();
                                        },
                                      )),
                                    );
                                },
                                function () {
                                  (n = !0), i();
                                },
                              ),
                            );
                          })),
                      );
                      var s;
                    })(r, s, u * a)),
                      new Promise(function (t, e) {
                        var r = new j({
                          next: function (e) {
                            t(e), r.unsubscribe();
                          },
                          error: e,
                          complete: function () {
                            e(new Mn());
                          },
                        });
                        c.subscribe(r);
                      }));
                    if (n !== f.version) throw new o(e, `MANIFEST_VERSION=${f.version},AVPP_VERSION=${n}`);
                    return f;
                  } catch (t) {
                    if (a < r.retry) return oi(r, n, s, a + 1);
                    if (!(t instanceof o)) throw new o('MANIFEST_PARSER_ERROR', t.message);
                    throw t;
                  }
                  var c;
                }),
                new ((f = void 0) || (f = Promise))(function (t, e) {
                  function r(t) {
                    try {
                      i(l.next(t));
                    } catch (t) {
                      e(t);
                    }
                  }

                  function n(t) {
                    try {
                      i(l.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  }

                  function i(e) {
                    var i;
                    e.done
                      ? t(e.value)
                      : ((i = e.value),
                        i instanceof f
                          ? i
                          : new f(function (t) {
                            t(i);
                          })).then(r, n);
                  }

                  i((l = l.apply(u, c || [])).next());
                })
              );
              var u, c, f, l;
            };
          const si = 'RAS_LOAD_ERROR',
            ai = (t, e, r, n, i, o = fetch) => {
              const s = () => ({
                app: t,
                eventId: e,
                sdkVersion: n,
              });
              let a = s();
              const u = (t, e) => {
                return (
                  (r = void 0),
                  (n = void 0),
                  (a = function* () {
                    var r;
                    i
                      ? o(
                        'https://www.ticketmaster.com/edp/v1/log' +
                        ((r = Object.assign(
                          {
                            type: t,
                          },
                          e,
                        )),
                          Object.entries(r || {}).reduce(
                            (t, [e, r], n) => (0 === n ? `?${e}=${r}` : `${t}&${e}=${r}`),
                            '',
                          )),
                      )
                        .then()
                        .catch(() => { })
                      : console.log(
                        Object.assign(
                          {
                            type: t,
                          },
                          e,
                        ),
                      );
                  }),
                  new ((s = void 0) || (s = Promise))(function (t, e) {
                    function i(t) {
                      try {
                        u(a.next(t));
                      } catch (t) {
                        e(t);
                      }
                    }

                    function o(t) {
                      try {
                        u(a.throw(t));
                      } catch (t) {
                        e(t);
                      }
                    }

                    function u(e) {
                      var r;
                      e.done
                        ? t(e.value)
                        : ((r = e.value),
                          r instanceof s
                            ? r
                            : new s(function (t) {
                              t(r);
                            })).then(i, o);
                    }

                    u((a = a.apply(r, n || [])).next());
                  })
                );
                var r, n, s, a;
              },
                c = () => {
                  a = s();
                },
                f = (t, e) => {
                  a[t] = e;
                };
              return {
                clear: c,
                error: (t, e) => {
                  c(),
                    f('error', (null == e ? void 0 : e.message) || 'UNKNOWN'),
                    f('reason', (null == e ? void 0 : e.stack) || 'UNKNOWN'),
                    u(t, a);
                },
                getContext: () => a,
                log: u,
                put: f,
              };
            };
          var ui = function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function s(t) {
                try {
                  u(n.next(t));
                } catch (t) {
                  o(t);
                }
              }

              function a(t) {
                try {
                  u(n.throw(t));
                } catch (t) {
                  o(t);
                }
              }

              function u(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value),
                    e instanceof r
                      ? e
                      : new r(function (t) {
                        t(e);
                      })).then(s, a);
              }

              u((n = n.apply(t, e || [])).next());
            });
          };

          const ci = '0.8.1-Thu Sep 22 2022',
            fi = ({
              manifestURL: t,
              avscURL: r,
              avppURL: n,
              apiKey: i,
              app: s,
              sessionId: a,
              avppTimeout: u = 4e4,
              manfRestCallRetry: c = 3,
              avscRestCallRetry: p = 3,
              remoteLogging: h = !1,
              restTimeout: d = 1e4,
              roaringWasm: b,
              webSocket: y,
              fetch: v,
              toolsPreviewToken: _,
            }) =>
              ui(void 0, void 0, void 0, function* () {
                let r;
                if (b) r = b;
                else
                  try {
                    r = yield ((p = void 0),
                      (m = void 0),
                      (g = void 0),
                      (w = function* () {
                        return new Promise((t, e) => {
                          Lt((r, n) => {
                            n ? e(n) : t(r());
                          });
                        });
                      }),
                      new (g || (g = Promise))(function (t, e) {
                        function r(t) {
                          try {
                            i(w.next(t));
                          } catch (t) {
                            e(t);
                          }
                        }

                        function n(t) {
                          try {
                            i(w.throw(t));
                          } catch (t) {
                            e(t);
                          }
                        }

                        function i(e) {
                          var i;
                          e.done
                            ? t(e.value)
                            : ((i = e.value),
                              i instanceof g
                                ? i
                                : new g(function (t) {
                                  t(i);
                                })).then(r, n);
                        }

                        i((w = w.apply(p, m || [])).next());
                      }));
                  } catch (t) {
                    throw (ai(s, 'N/A', 0, ci, h, v).error(si, t), t);
                  }
                var p, m, g, w;
                if (!r || !r.deserialize) throw new Error('Wasm failed to initialize');
                const I = (t => {
                  const e = (() => {
                    const t = {};
                    return {
                      getEntries: () => Object.entries(t),
                      clearFromStore: e => delete t[e],
                      getState: e => t[e] || {},
                      setState: (
                        e,
                        { eventParams: r, lastReceivedVersion: n, subscriber: i, subscription: o, eventId: s },
                      ) => {
                        t[e] = {
                          eventId: s,
                          eventParams: r,
                          lastReceivedVersion: n,
                          subscriber: i,
                          subscription: o,
                        };
                      },
                    };
                  })(),
                    r = Vn(t, () => {
                      e.getEntries().forEach(
                        ([t, { eventParams: r, lastReceivedVersion: i, subscriber: o, eventId: s }]) => {
                          const a = Bn({
                            eventId: s,
                            eventParams: r,
                            lastReceivedVersion: i,
                            client: n,
                          });
                          e.setState(t, {
                            eventId: s,
                            eventParams: r,
                            lastReceivedVersion: i,
                            subscriber: o,
                            subscription: a.subscribe({
                              next: t => {
                                o.next(t);
                              },
                              error: t => o.error(t),
                            }),
                          });
                        },
                      );
                    }),
                    n = r.getClient();
                  return {
                    getStore: () => e,
                    getRealtimeUpdates: (t, e) =>
                      Bn({
                        eventId: t,
                        eventParams: e,
                        lastReceivedVersion: null,
                        client: n,
                      }),
                    setSubscriptionData: (
                      t,
                      { subscription: r, subscriber: n, lastReceivedVersion: i, eventParams: o, eventId: s },
                    ) => {
                      const {
                        subscription: a,
                        subscriber: u,
                        lastReceivedVersion: c,
                        eventParams: f,
                        eventId: l,
                      } = e.getState(t);
                      e.setState(t, {
                        eventId: l || s,
                        subscription: r || a,
                        subscriber: n || u,
                        lastReceivedVersion: i || c,
                        eventParams: o || f,
                      });
                    },
                    closeIfStoreEmpty: () => {
                      e.getEntries().length || r.stop();
                    },
                    stopSubscription: t => {
                      const r = e.getState(t);
                      if (r) {
                        const { subscription: { closed: n = {} } = {} } = r;
                        n || r.subscription.unsubscribe(), e.clearFromStore(t);
                      }
                    },
                  };
                })({
                  graphqlEndpoint: n,
                  timeout: u,
                  apiKey: i,
                  app: s,
                  sessionId: a,
                  webSocket: y,
                  toolsPreviewToken: _,
                }),
                  S = {
                    manifestUrl: t,
                    retry: c,
                    timeout: d,
                    backOffMillis: 500,
                    fetch: v,
                  },
                  E = {},
                  O = (() => {
                    const t = {};
                    return {
                      getEntries: () => Object.entries(t),
                      clear: e => delete t[e],
                      get: e => t[e],
                      set: (
                        e,
                        {
                          eventParams: r,
                          latestEventAvailability: n,
                          logValues: i,
                          eventId: o,
                          subscription: s,
                          observable: a,
                        },
                      ) => {
                        t[e] = {
                          eventId: o,
                          eventParams: r,
                          latestEventAvailability: n,
                          logValues: i,
                          subscription: s,
                          observable: a,
                        };
                      },
                    };
                  })(),
                  T = (t, e, n, i) => {
                    const o = new z(r => {
                      const o = I.getRealtimeUpdates(t, i);
                      let s = new Date().getTime();
                      const a = o.subscribe({
                        next: t => {
                          try {
                            s && n.put('avpp.fetchTime', new Date().getTime() - s), (s = void 0), r.next(t);
                          } catch (t) {
                            r.error(t);
                          }
                        },
                        error: t => r.error(t),
                      });
                      I.setSubscriptionData(e, {
                        eventId: t,
                        subscription: a,
                        subscriber: r,
                        eventParams: i,
                      });
                    }).pipe(
                      W(() => {
                        I.stopSubscription(e), I.closeIfStoreEmpty(), O.clear(e);
                      }),
                    );
                    return new z(i => {
                      const s = o.subscribe({
                        next: o =>
                          ui(void 0, void 0, void 0, function* () {
                            try {
                              const u =
                                ((a = o.availability.buffer),
                                  (s = Uint8Array.from(qn.lW.from(a, 'base64'))),
                                  Qn.a8.ticketmaster.supermap.avsc.v1.Availability.getRootAsAvailability(
                                    new Qn.qm.ByteBuffer(s),
                                  ));
                              n.put('avpp.numGASeats', u.numGASeats()),
                                n.put('avpp.numSeats', u.numSeats() - u.numGASeats()),
                                I.setSubscriptionData(e, {
                                  eventId: t,
                                  lastReceivedVersion: u.version(),
                                }),
                                yield (e =>
                                  ui(void 0, void 0, void 0, function* () {
                                    const { manifest: r } = E[t] || {},
                                      { version: i } = r || {};
                                    if (i !== e.manifestVersion()) {
                                      const r = yield oi(
                                        Object.assign(Object.assign({}, S), {
                                          eventId: t,
                                        }),
                                        e.manifestVersion(),
                                        n,
                                      );
                                      E[t] = {
                                        manifest: pi(r, e),
                                      };
                                    }
                                  }))(u);
                              const c = new Date().getTime(),
                                { openIndices: f, availability: l } = ((t, e) => ({
                                  availability: t,
                                  openIndices: ni(t, e),
                                }))(u, r);

                              n.put('avpp.parseTime', new Date().getTime() - c),
                                i.next({
                                  manifest: E[t] ? E[t].manifest : null,
                                  openIndices: f,
                                  availability: l,
                                });
                            } catch (t) {
                              i.error(t);
                            }
                            var s, a;
                          }),
                        error: t => i.error(t),
                        complete: () => i.complete(),
                      });
                      O.set(
                        e,
                        Object.assign(Object.assign({}, O.get(e)), {
                          subscription: s,
                        }),
                      );
                    });
                  },
                  k = (t, r, n, i) => {
                    try {
                      const s = T(t, r, n, i).pipe(
                        J(({ availability: t, openIndices: e }) => { 
                          const r = null == t ? void 0 : t.sections();
                          n.put('avpp.numSections', r.numSections()),
                            n.put('avpp.numGASections', r.numGASections()),
                            n.put('avpp.numAvailableSeats', e.length);
                        }),
                        Z(t => {
                          const n = (t => {
                            const { availability: r, openIndices: n, manifest: i } = t,
                              s = i
                                ? (t => {
                                  try {
                                    const e = t.sections.filter(t => !t.isGA);
                                    if (0 === e.length) return [];
                                    let r = 0,
                                      n = e[0].numSeats;
                                    return Array.from(
                                      {
                                        length: t.placeIds.length,
                                      },
                                      (t, i) => (0 !== i && i === n && (n += e[++r].numSeats), e[r].name),
                                    );
                                  } catch (t) {
                                    throw new o('EVENT_AVAILABILITY_SECTION_PARSE_FAILURE', t.message);
                                  }
                                })(i)
                                : [],
                              a = new Set(n);
                            return {
                              getUnavailablePlaceIdsBySection: () =>
                                Ln(jn(r))
                                  .filter((t, e) => !a.has(e))
                                  .map(t => ({
                                    sectionName: s[t],
                                    id: i.placeIds[t],
                                  }))
                                  .reduce(Nn, {}),
                              getUnavailablePlaceIds: () =>
                                Ln(jn(r))
                                  .filter((t, e) => !a.has(e))
                                  .map(t => i.placeIds[t]),
                              getAvailablePlaceIdsBySection: () =>
                                n
                                  .map(t =>
                                    ((t, { placeIds: e }, r) => ({
                                      id: e[t],
                                      sectionName: r[t],
                                    }))(t, i, s),
                                  )
                                  .reduce(Nn, {}),
                              getAvailablePlaceIds: () => n.map(t => ((t, { placeIds: e }) => e[t])(t, i)),
                              isPlaceAvailable: t => i.placeIds.some((e, r) => t === e && a.has(r)),
                              getManifestVersion: () => {
                                if (r.manifestVersion() === i.version) return i.version;
                                throw new o(e, `Manifest Version ${i.version}, AVPP version ${r.manifestVersion()}`);
                              },
                            };
                          })(t);
                          return (
                            O.set(
                              r,
                              Object.assign(Object.assign({}, O.get(r)), {
                                latestEventAvailability: n,
                              }),
                            ),
                            n
                          );
                        }),
                        (function (t) {
                          void 0 === t && (t = {});
                          var e = t.connector,
                            r =
                              void 0 === e
                                ? function () {
                                  return new _t();
                                }
                                : e,
                            n = t.resetOnError,
                            i = void 0 === n || n,
                            o = t.resetOnComplete,
                            s = void 0 === o || o,
                            a = t.resetOnRefCountZero,
                            u = void 0 === a || a;
                          return function (t) {
                            var e = null,
                              n = null,
                              o = null,
                              a = 0,
                              c = !1,
                              f = !1,
                              l = function () {
                                null == n || n.unsubscribe(), (n = null);
                              },
                              p = function () {
                                l(), (e = o = null), (c = f = !1);
                              },
                              h = function () {
                                var t = e;
                                p(), null == t || t.unsubscribe();
                              };
                            return $(function (t, d) {
                              a++, f || c || l();
                              var b = (o = null != o ? o : r());
                              d.add(function () {
                                0 != --a || f || c || (n = gt(h, u));
                              }),
                                b.subscribe(d),
                                e ||
                                ((e = new j({
                                  next: function (t) {
                                    return b.next(t);
                                  },
                                  error: function (t) {
                                    (f = !0), l(), (n = gt(p, i, t)), b.error(t);
                                  },
                                  complete: function () {
                                    (c = !0), l(), (n = gt(p, s)), b.complete();
                                  },
                                })),
                                  dt(t).subscribe(e));
                            })(t);
                          };
                        })(),
                      );
                      return (
                        O.set(
                          r,
                          Object.assign(Object.assign({}, O.get(r)), {
                            eventParams: i,
                            observable: s,
                            subscription: null,
                          }),
                        ),
                        s.pipe(
                          W(() => {
                            O.get(r).subscription.unsubscribe();
                          }),
                        )
                      );
                    } catch (t) {
                      return wt(() => t);
                    }
                  };
                return Promise.resolve({
                  getBuildVersion: () => ci,
                  observeEventAvailability: (t, e) => {
                    const r = li(t, e),
                      n = ai(s, t, 0, ci, h, v);
                    let i = !0;
                    return ((t, e, r, n) => {
                      const i = O.get(r);
                      if (i) {
                        const { observable: t, latestEventAvailability: e } = i;
                        return Tt(e).pipe(
                          (function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return xt.apply(void 0, l([], f(t)));
                          })(t),
                        );
                      }
                      return k(t, r, n, e);
                    })(t, e, r, n).pipe(
                      Pt(t => (n.error(si, t), wt(() => t))),
                      J(() => {
                        i && n.log('RAS_LOAD_EVENT', n.getContext()), (i = !1);
                      }),
                    );
                  },
                });
              }),
            li = (t, e = {}) => (Object.keys(e).length ? `${t}_${JSON.stringify(e)}` : `${t}`),
            pi = (t, e) => {
              const r = e.numSeats() - e.numGASeats(),
                n = t.placeIds;
              let i = 0;
              const s = t.sections.map(t =>
                i < r
                  ? ((i += t.numSeats), t)
                  : Object.assign(Object.assign({}, t), {
                    isGA: !0,
                  }),
              );
              if (i !== r || r !== n.length)
                throw new o(
                  'NON_GA_SEATS_MISMATCH',
                  `MANIFEST_totalNonGASeatsFromSections=${i},\n       MANIFEST_totalNonGASeatsFromPlaceIds=${n.length},\n       AVPP_totalNonGASeats=${r}`,
                );
              return Object.assign(Object.assign({}, t), {
                placeIds: n,
                sections: s,
              });
            };
        })(),
        n.default
      );
    }),
  )()(settings);
};

module.exports = initRasSDK;