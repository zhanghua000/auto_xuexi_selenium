!function (t, e) {
    "object" == typeof exports &&
        "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) :
            "object" == typeof exports ? exports.Hls = e() : t.Hls = e()
}(this, function () {
    return function (t) {
        function e(i) {
            if (r[i]) return r[i].exports;
            var n = r[i] = { i: i, l: !1, exports: {} };
            return t[i].call(n.exports, n, n.exports, e), n.l = !0, n.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function (t, r, i) {
            e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: i })
        }, e.n = function (t) {
            var r = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/dist/", e(e.s = 27)
    }([function (t, e, r) {
        "use strict";
        function i() {
        } function n(t, e) {
            return e = "[" + t + "] > " + e
        } function a(t) {
            var e = self.console[t];
            return e ? function () {
                for (var r = arguments.length, i = Array(r), a = 0; a < r; a++)
                    i[a] = arguments[a];
                i[0] && (i[0] = n(t, i[0])), e.apply(self.console, i)
            } : i
        } function o(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                r[i - 1] = arguments[i];
            r.forEach(function (e) { u[e] = t[e] ? t[e].bind(t) : a(e) })
        } r.d(e, "a", function () {
            return d
        }), r.d(e, "b", function () {
            return c
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
            l = { trace: i, debug: i, log: i, warn: i, info: i, error: i },
            u = l,
            d = function (t) {
                if (!0 === t || "object" === (void 0 === t ? "undefined" : s(t))) {
                    o(t, "debug", "log", "info", "warn", "error");
                    try { u.log() }
                    catch (t) { u = l }
                }
                else u = l
            },
            c = u
    },
    function (t, e, r) {
        "use strict";
        var i = {
            MEDIA_ATTACHING: "hlsMediaAttaching",
            MEDIA_ATTACHED: "hlsMediaAttached",
            MEDIA_DETACHING: "hlsMediaDetaching",
            MEDIA_DETACHED: "hlsMediaDetached",
            BUFFER_RESET: "hlsBufferReset",
            BUFFER_CODECS: "hlsBufferCodecs",
            BUFFER_CREATED: "hlsBufferCreated",
            BUFFER_APPENDING: "hlsBufferAppending",
            BUFFER_APPENDED: "hlsBufferAppended",
            BUFFER_EOS: "hlsBufferEos",
            BUFFER_FLUSHING: "hlsBufferFlushing",
            BUFFER_FLUSHED: "hlsBufferFlushed",
            MANIFEST_LOADING: "hlsManifestLoading",
            MANIFEST_LOADED: "hlsManifestLoaded",
            MANIFEST_PARSED: "hlsManifestParsed",
            LEVEL_SWITCHING: "hlsLevelSwitching",
            LEVEL_SWITCHED: "hlsLevelSwitched",
            LEVEL_LOADING: "hlsLevelLoading",
            LEVEL_LOADED: "hlsLevelLoaded",
            LEVEL_UPDATED: "hlsLevelUpdated",
            LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
            AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
            AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
            AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
            AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
            AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
            SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
            SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
            SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
            SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
            SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
            INIT_PTS_FOUND: "hlsInitPtsFound",
            FRAG_LOADING: "hlsFragLoading",
            FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
            FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
            FRAG_LOADED: "hlsFragLoaded",
            FRAG_DECRYPTED: "hlsFragDecrypted",
            FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
            FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
            FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
            FRAG_PARSING_DATA: "hlsFragParsingData",
            FRAG_PARSED: "hlsFragParsed",
            FRAG_BUFFERED: "hlsFragBuffered",
            FRAG_CHANGED: "hlsFragChanged",
            FPS_DROP: "hlsFpsDrop",
            FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
            ERROR: "hlsError",
            DESTROYING: "hlsDestroying",
            KEY_LOADING: "hlsKeyLoading",
            KEY_LOADED: "hlsKeyLoaded",
            STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
        };
        e.a = i
    },
    function (t, e, r) {
        "use strict";
        r.d(e, "b", function () { return i }),
            r.d(e, "a", function () { return n });
        var i = {
            NETWORK_ERROR: "networkError",
            MEDIA_ERROR: "mediaError",
            KEY_SYSTEM_ERROR: "keySystemError",
            MUX_ERROR: "muxError",
            OTHER_ERROR: "otherError"
        }, n = {
            KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
            KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
            KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
            KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
            MANIFEST_LOAD_ERROR: "manifestLoadError",
            MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
            MANIFEST_PARSING_ERROR: "manifestParsingError",
            MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
            LEVEL_LOAD_ERROR: "levelLoadError",
            LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
            LEVEL_SWITCH_ERROR: "levelSwitchError",
            AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
            AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
            FRAG_LOAD_ERROR: "fragLoadError",
            FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
            FRAG_DECRYPT_ERROR: "fragDecryptError",
            FRAG_PARSING_ERROR: "fragParsingError",
            REMUX_ALLOC_ERROR: "remuxAllocError",
            KEY_LOAD_ERROR: "keyLoadError",
            KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
            BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
            BUFFER_APPEND_ERROR: "bufferAppendError",
            BUFFER_APPENDING_ERROR: "bufferAppendingError",
            BUFFER_STALLED_ERROR: "bufferStalledError",
            BUFFER_FULL_ERROR: "bufferFullError",
            BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
            BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
            INTERNAL_EXCEPTION: "internalException"
        }
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw
            new TypeError(
                "Cannot call a class as a function"
            )
        }
        var n = r(0),
            a = r(2),
            o = r(1),
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            l = new Set(
                [
                    "hlsEventGeneric",
                    "hlsHandlerDestroying",
                    "hlsHandlerDestroyed"
                ]
            ),
            u = function () {
                function t(e) {
                    i(this, t),
                        this.hls = e,
                        this.onEvent = this.onEvent.bind(this);
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                        n[a - 1] = arguments[a];
                    this.handledEvents = n,
                        this.useGenericHandler = !0,
                        this.registerListeners()
                }
                return t.prototype.destroy = function () {
                    this.onHandlerDestroying(),
                        this.unregisterListeners(),
                        this.onHandlerDestroyed()
                },
                    t.prototype.onHandlerDestroying = function () { },
                    t.prototype.onHandlerDestroyed = function () { },
                    t.prototype.isEventHandler = function () {
                        return "object" === s(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                    },
                    t.prototype.registerListeners = function () {
                        this.isEventHandler() && this.handledEvents.forEach(function (t) {
                            if (l.has(t))
                                throw new Error(
                                    "Forbidden event-name: " + t
                                );
                            this.hls.on(t, this.onEvent)
                        },
                            this)
                    },
                    t.prototype.unregisterListeners = function () {
                        this.isEventHandler() && this.handledEvents.forEach(function (t) {
                            this.hls.off(t, this.onEvent)
                        },
                            this)
                    },
                    t.prototype.onEvent = function (t, e) {
                        this.onEventGeneric(t, e)
                    },
                    t.prototype.onEventGeneric = function (t, e) {
                        var r = function (t, e) {
                            var r = "on" + t.replace("hls", "");
                            if ("function" != typeof this[r])
                                throw new Error(
                                    "Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")"
                                );
                            return this[r].bind(this, e)
                        };
                        try {
                            r.call(this, t, e).call()
                        }
                        catch (e) {
                            n.b.error(
                                "An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e
                            ),
                                this.hls.trigger(
                                    o.a.ERROR, { type: a.b.OTHER_ERROR, details: a.a.INTERNAL_EXCEPTION, fatal: !1, event: t, err: e }
                                )
                        }
                    }, t
            }();
        e.a = u
    }, function (t, e, r) {
        !function (e) {
            var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                i = /^([^\/;?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g,
                a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                o = {
                    buildAbsoluteURL: function (t, e, r) {
                        if (r = r || {}, t = t.trim(),
                            !(e = e.trim())) {
                            if (!r.alwaysNormalize)
                                return t;
                            var n = this.parseURL(t);
                            if (!s)
                                throw new Error(
                                    "Error trying to parse base URL."
                                );
                            return n.path = o.normalizePath(n.path),
                                o.buildURLFromParts(n)
                        }
                        var a = this.parseURL(e);
                        if (!a)
                            throw new Error(
                                "Error trying to parse relative URL."
                            );
                        if (a.scheme)
                            return r.alwaysNormalize ? (a.path = o.normalizePath(a.path),
                                o.buildURLFromParts(a)
                            ) : e;
                        var s = this.parseURL(t);
                        if (!s)
                            throw new Error(
                                "Error trying to parse base URL."
                            );
                        if (!s.netLoc && s.path && "/" !== s.path[0]) {
                            var l = i.exec(s.path);
                            s.netLoc = l[1],
                                s.path = l[2]
                        } s.netLoc && !s.path && (s.path = "/");
                        var u = {
                            scheme: s.scheme,
                            netLoc: a.netLoc,
                            path: null,
                            params: a.params,
                            query: a.query,
                            fragment: a.fragment
                        };
                        if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0]))
                            if (a.path) {
                                var d = s.path, c = d.substring(0, d.lastIndexOf("/") + 1) + a.path;
                                u.path = o.normalizePath(c)
                            }
                            else
                                u.path = s.path, a.params || (u.params = s.params, a.query || (u.query = s.query));
                        return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(u)
                    }, parseURL: function (t) {
                        var e = r.exec(t);
                        return e ? {
                            scheme: e[1] || "",
                            netLoc: e[2] || "",
                            path: e[3] || "",
                            params: e[4] || "",
                            query: e[5] || "",
                            fragment: e[6] || ""
                        } : null
                    },
                    normalizePath: function (t) {
                        for (t = t.split("").reverse().join("").replace(n, "");
                            t.length !== (t = t.replace(a, "")).length;);
                        return t.split("").reverse().join("")
                    },
                    buildURLFromParts: function (t) {
                        return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                    }
                };
            t.exports = o
        }()
    }, function (t, e, r) {
        "use strict";
        var i = {
            search: function (t, e) {
                for (var r = 0, i = t.length - 1, n = null, a = null; r <= i;) {
                    n = (r + i) / 2 | 0, a = t[n];
                    var o = e(a);
                    if (o > 0)
                        r = n + 1;
                    else {
                        if (!(o < 0))
                            return a; i = n - 1
                    }
                }
                return null
            }
        };
        e.a = i
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        r.d(e, "b", function () {
            return a
        });
        var n = function () {
            function t() {
                i(this, t)
            }
            return t.isHeader = function (t, e) {
                return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
            }, t.isFooter = function (t, e) {
                return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
            },
                t.getID3Data = function (e, r) {
                    for (var i = r, n = 0; t.isHeader(e, r);) {
                        n += 10; n += t._readSize(e, r + 6), t.isFooter(e, r + 10) && (n += 10), r += n
                    }
                    if (n > 0)
                        return e.subarray(i, i + n)
                },
                t._readSize = function (t, e) {
                    var r = 0;
                    return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, r |= (127 & t[e + 2]) << 7, r |= 127 & t[e + 3]
                },
                t.getTimeStamp = function (e) {
                    for (var r = t.getID3Frames(e), i = 0; i < r.length; i++) {
                        var n = r[i];
                        if (t.isTimeStampFrame(n))
                            return t._readTimeStamp(n)
                    }
                }, t.isTimeStampFrame = function (t) {
                    return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                }, t._getFrameData = function (e) {
                    var r = String.fromCharCode(e[0], e[1], e[2], e[3]), i = t._readSize(e, 4);
                    return { type: r, size: i, data: e.subarray(10, 10 + i) }
                }, t.getID3Frames = function (e) {
                    for (var r = 0, i = []; t.isHeader(e, r);) {
                        var n = t._readSize(e, r + 6); r += 10; for (var a = r + n; r + 8 < a;) {
                            var o = t._getFrameData(e.subarray(r)), s = t._decodeFrame(o);
                            s && i.push(s), r += o.size + 10
                        }
                        t.isFooter(e, r) && (r += 10)
                    }
                    return i
                },
                t._decodeFrame = function (e) {
                    return "PRIV" === e.type ? t._decodePrivFrame(e) : "T" === e.type[0] ? t._decodeTextFrame(e) : "W" === e.type[0] ? t._decodeURLFrame(e) : void 0
                }, t._readTimeStamp = function (t) {
                    if (8 === t.data.byteLength) {
                        var e = new Uint8Array(t.data), r = 1 & e[3], i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                        return i /= 45, r && (i += 47721858.84), Math.round(i)
                    }
                },
                t._decodePrivFrame = function (e) {
                    if (!(e.size < 2)) {
                        var r = t._utf8ArrayToStr(e.data, !0), i = new Uint8Array(e.data.subarray(r.length + 1));
                        return { key: e.type, info: r, data: i.buffer }
                    }
                },
                t._decodeTextFrame = function (e) {
                    if (!(e.size < 2)) {
                        if ("TXXX" === e.type) {
                            var r = 1, i = t._utf8ArrayToStr(e.data.subarray(r));
                            r += i.length + 1;
                            var n = t._utf8ArrayToStr(e.data.subarray(r));
                            return { key: e.type, info: i, data: n }
                        }
                        var a = t._utf8ArrayToStr(e.data.subarray(1));
                        return { key: e.type, data: a }
                    }
                },
                t._decodeURLFrame = function (e) {
                    if ("WXXX" === e.type) {
                        if (e.size < 2)
                            return;
                        var r = 1, i = t._utf8ArrayToStr(e.data.subarray(r));
                        r += i.length + 1;
                        var n = t._utf8ArrayToStr(e.data.subarray(r));
                        return { key: e.type, info: i, data: n }
                    }
                    var a = t._utf8ArrayToStr(e.data);
                    return { key: e.type, data: a }
                },
                t._utf8ArrayToStr = function (t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = t.length, i = void 0, n = void 0, a = void 0, o = "", s = 0; s < r;) {
                        if (0 === (i = t[s++]) && e)
                            return o;
                        if (0 !== i && 3 !== i)
                            switch (i >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7: o += String.fromCharCode(i);
                                    break;
                                case 12:
                                case 13: n = t[s++], o += String.fromCharCode((31 & i) << 6 | 63 & n);
                                    break;
                                case 14: n = t[s++], a = t[s++], o += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | (63 & a) << 0)
                            }
                    }
                    return o
                }, t
        }(),
            a = n._utf8ArrayToStr; e.a = n
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var n = r(4), a = r.n(n), o = r(16), s = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            } return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), l = function () {
            function t() {
                var e; i(this, t), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this._elementaryStreams = (e = {}, e[t.ElementaryStreamTypes.AUDIO] = !1, e[t.ElementaryStreamTypes.VIDEO] = !1, e)
            }
            return t.prototype.addElementaryStream = function (t) {
                this._elementaryStreams[t] = !0
            }, t.prototype.hasElementaryStream = function (t) {
                return !0 === this._elementaryStreams[t]
            }, t.prototype.createInitializationVector = function (t) {
                for (var e = new Uint8Array(16), r = 12; r < 16; r++)e[r] = t >> 8 * (15 - r) & 255;
                return e
            }, t.prototype.fragmentDecryptdataFromLevelkey = function (t, e) {
                var r = t;
                return t && t.method && t.uri && !t.iv && (r = new o.a, r.method = t.method, r.baseuri = t.baseuri, r.reluri = t.reluri, r.iv = this.createInitializationVector(e)), r
            }, s(t, [{
                key: "url",
                get: function () {
                    return !this._url && this.relurl && (this._url = a.a.buildAbsoluteURL(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url
                }, set: function (t) {
                    this._url = t
                }
            }, {
                key: "programDateTime",
                get: function () {
                    return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime
                }
            }, {
                key: "byteRange",
                get: function () {
                    if (!this._byteRange && !this.rawByteRange)
                        return [];
                    if (this._byteRange)
                        return this._byteRange;
                    var t = [];
                    if (this.rawByteRange) {
                        var e = this.rawByteRange.split("@", 2);
                        if (1 === e.length) {
                            var r = this.lastByteRangeEndOffset;
                            t[0] = r || 0
                        }
                        else
                            t[0] = parseInt(e[1]);
                        t[1] = parseInt(e[0]) + t[0],
                            this._byteRange = t
                    }
                    return t
                }
            }, {
                key: "byteRangeStartOffset",
                get: function () {
                    return this.byteRange[0]
                }
            }, {
                key: "byteRangeEndOffset",
                get: function () {
                    return this.byteRange[1]
                }
            }, {
                key: "decryptdata",
                get: function () {
                    return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
                }
            }, {
                key: "encrypted",
                get: function () {
                    return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                }
            }
            ], [
                {
                    key: "ElementaryStreamTypes",
                    get: function () {
                        return { AUDIO: "audio", VIDEO: "video" }
                    }
                }
            ]), t
        }();
        e.a = l
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        } function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        } r.d(e, "a", function () {
            return l
        })
            ,
            r.d(e, "b", function () {
                return u
            });
        var o = r(3), s = r(1), l = {
            NOT_LOADED: "NOT_LOADED",
            APPENDING: "APPENDING",
            PARTIAL: "PARTIAL",
            OK: "OK"
        }, u = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, s.a.BUFFER_APPENDED, s.a.FRAG_BUFFERED, s.a.FRAG_LOADED));
                return a.bufferPadding = .2, a.fragments = Object.create(null), a.timeRanges = Object.create(null), a.config = r.config, a
            }
            return a(e, t), e.prototype.destroy = function () {
                this.fragments = null, this.timeRanges = null, this.config = null, o.a.prototype.destroy.call(this), t.prototype.destroy.call(this)
            }, e.prototype.getBufferedFrag = function (t, e) {
                var r = this.fragments, i = Object.keys(r).filter(function (i) {
                    var n = r[i];
                    if (n.body.type !== e)
                        return !1;
                    if (!n.buffered)
                        return !1;
                    var a = n.body;
                    return a.startPTS <= t && t <= a.endPTS
                });
                if (0 === i.length)
                    return null;
                var n = i.pop();
                return r[n].body
            }, e.prototype.detectEvictedFragments = function (t, e) {
                var r = this, i = void 0, n = void 0;
                Object.keys(this.fragments).forEach(function (a) {
                    var o = r.fragments[a];
                    if (!0 === o.buffered) {
                        var s = o.range[t];
                        if (s) {
                            i = s.time;
                            for (var l = 0; l < i.length; l++)
                                if (n = i[l], !1 === r.isTimeBuffered(n.startPTS, n.endPTS, e)) {
                                    r.removeFragment(o.body);
                                    break
                                }
                        }
                    }
                }
                )
            }, e.prototype.detectPartialFragments = function (t) {
                var e = this, r = this.getFragmentKey(t), i = this.fragments[r];
                i && (i.buffered = !0, Object.keys(this.timeRanges).forEach(function (r) {
                    if (!0 === t.hasElementaryStream(r)) {
                        var n = e.timeRanges[r];
                        i.range[r] = e.getBufferedTimes(t.startPTS, t.endPTS, n)
                    }
                }))
            }, e.prototype.getBufferedTimes = function (t, e, r) {
                for (var i = [], n = void 0, a = void 0, o = !1, s = 0; s < r.length; s++) {
                    if (n = r.start(s) - this.bufferPadding, a = r.end(s) + this.bufferPadding, t >= n && e <= a) {
                        i.push({
                            startPTS: Math.max(t, r.start(s)),
                            endPTS: Math.min(e, r.end(s))
                        });
                        break
                    }
                    if (t < a && e > n)
                        i.push({
                            startPTS: Math.max(t, r.start(s)),
                            endPTS: Math.min(e, r.end(s))
                        }), o = !0;
                    else if (e <= n)
                        break
                }
                return { time: i, partial: o }
            }, e.prototype.getFragmentKey = function (t) {
                return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
            }, e.prototype.getPartialFragment = function (t) {
                var e = this, r = void 0, i = void 0, n = void 0, a = null, o = 0;
                return Object.keys(this.fragments).forEach(function (s) {
                    var l = e.fragments[s];
                    e.isPartial(l) && (i = l.body.startPTS - e.bufferPadding, n = l.body.endPTS + e.bufferPadding, t >= i && t <= n && (r = Math.min(t - i, n - t), o <= r && (a = l.body, o = r)))
                }), a
            }, e.prototype.getState = function (t) {
                var e = this.getFragmentKey(t), r = this.fragments[e], i = l.NOT_LOADED;
                return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? l.PARTIAL : l.OK : l.APPENDING), i
            }, e.prototype.isPartial = function (t) {
                return !0 === t.buffered && (void 0 !== t.range.video && !0 === t.range.video.partial || void 0 !== t.range.audio && !0 === t.range.audio.partial)
            }, e.prototype.isTimeBuffered = function (t, e, r) {
                for (var i = void 0, n = void 0, a = 0; a < r.length; a++) {
                    if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, t >= i && e <= n)
                        return !0;
                    if (e <= i)
                        return !1
                }
                return !1
            }, e.prototype.onFragLoaded = function (t) {
                var e = t.frag; if (!isNaN(e.sn) && !e.bitrateTest) { var r = this.getFragmentKey(e), i = { body: e, range: Object.create(null), buffered: !1 }; this.fragments[r] = i }
            }, e.prototype.onBufferAppended = function (t) {
                var e = this;
                this.timeRanges = t.timeRanges, Object.keys(this.timeRanges).forEach(function (t) {
                    var r = e.timeRanges[t];
                    e.detectEvictedFragments(t, r)
                })
            }, e.prototype.onFragBuffered = function (t) {
                this.detectPartialFragments(t.frag)
            }, e.prototype.hasFragment = function (t) {
                var e = this.getFragmentKey(t);
                return void 0 !== this.fragments[e]
            }, e.prototype.removeFragment = function (t) {
                var e = this.getFragmentKey(t);
                delete this.fragments[e]
            }, e.prototype.removeAllFragments = function () {
                this.fragments = Object.create(null)
            }, e
        }(o.a)
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        } r.d(e, "a", function () {
            return n
        }); var n = function () {
            function t() {
                i(this, t)
            } return t.isBuffered = function (t, e) {
                try {
                    if (t) for (var r = t.buffered, i = 0; i < r.length; i++)
                        if (e >= r.start(i) && e <= r.end(i))
                            return !0
                } catch (t) {

                }
                return !1
            }, t.bufferInfo = function (t, e, r) {
                try {
                    if (t) {
                        var i = t.buffered, n = [], a = void 0; for (a = 0; a < i.length; a++)
                            n.push({ start: i.start(a), end: i.end(a) });
                        return this.bufferedInfo(n, e, r)
                    }
                } catch (t) { }
                return { len: 0, start: e, end: e, nextStart: void 0 }
            }, t.bufferedInfo = function (t, e, r) {
                var i = [], n = void 0, a = void 0, o = void 0, s = void 0, l = void 0;
                for (t.sort(function (t, e) {
                    var r = t.start - e.start;
                    return r || e.end - t.end
                }),
                    l = 0; l < t.length; l++) {
                    var u = i.length;
                    if (u) {
                        var d = i[u - 1].end;
                        t[l].start - d < r ? t[l].end > d && (i[u - 1].end = t[l].end) : i.push(t[l])
                    }
                    else
                        i.push(t[l])
                } for (l = 0, n = 0, a = o = e; l < i.length; l++) {
                    var c = i[l].start, h = i[l].end;
                    if (e + r >= c && e < h) a = c, o = h, n = o - e; else if (e + r < c) {
                        s = c; break
                    }
                }
                return { len: n, start: a, end: o, nextStart: s }
            }, t
        }()
    }, function (t, e) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        } function i(t) {
            return "function" == typeof t
        } function n(t) {
            return "number" == typeof t
        } function a(t) {
            return "object" == typeof t && null !== t
        } function o(t) {
            return void 0 === t
        }
        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (t) {
            if (!n(t) || t < 0 || isNaN(t))
                throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, r.prototype.emit = function (t) {
            var e, r, n, s, l, u;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1]) instanceof Error)
                    throw e;
                var d = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw d.context = e, d
            } if (r = this._events[t], o(r))
                return !1;
            if (i(r))
                switch (arguments.length) {
                    case 1: r.call(this); break;
                    case 2: r.call(this, arguments[1]);
                        break;
                    case 3: r.call(this, arguments[1], arguments[2]);
                        break;
                    default: s = Array.prototype.slice.call(arguments, 1), r.apply(this, s)
                }
            else if (a(r))
                for (s = Array.prototype.slice.call(arguments, 1), u = r.slice(), n = u.length, l = 0; l < n; l++)
                    u[l].apply(this, s);
            return !0
        }, r.prototype.addListener = function (t, e) {
            var n;
            if (!i(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e), this._events[t] ? a(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, a(this._events[t]) && !this._events[t].warned && (n = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[t].length > n && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (t, e) {
            function r() {
                this.removeListener(t, r), n || (n = !0, e.apply(this, arguments))
            } if (!i(e))
                throw TypeError("listener must be a function");
            var n = !1;
            return r.listener = e, this.on(t, r), this
        }, r.prototype.removeListener = function (t, e) {
            var r, n, o, s;
            if (!i(e))
                throw TypeError("listener must be a function");
            if (!this._events || !this._events[t])
                return this;
            if (r = this._events[t], o = r.length, n = -1, r === e || i(r.listener) && r.listener === e)
                delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
            else if (a(r)) {
                for (s = o; s-- > 0;)
                    if (r[s] === e || r[s].listener && r[s].listener === e) {
                        n = s; break
                    }
                if (n < 0)
                    return this;
                1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, r.prototype.removeAllListeners = function (t) {
            var e, r;
            if (!this._events)
                return this;
            if (!this._events.removeListener)
                return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events)
                    "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r = this._events[t], i(r))
                this.removeListener(t, r);
            else if (r)
                for (; r.length;)
                    this.removeListener(t, r[r.length - 1]);
            return delete this._events[t], this
        }, r.prototype.listeners = function (t) {
            return this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, r.prototype.listenerCount = function (t) {
            if (this._events) {
                var e = this._events[t];
                if (i(e)) return 1;
                if (e) return e.length
            }
            return 0
        }, r.listenerCount = function (t, e) {
            return t.listenerCount(e)
        }
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } var n = r(34), a = r(35), o = r(36), s = r(2), l = r(0), u = function () {
            function t(e, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = n.removePKCS7Padding, o = void 0 === a || a;
                if (i(this, t), this.logEnabled = !0, this.observer = e, this.config = r, this.removePKCS7Padding = o, o)
                    try {
                        var s = crypto || self.crypto;
                        this.subtle = s.subtle || s.webkitSubtle
                    }
                    catch (t) { }
                this.disableWebCrypto = !this.subtle
            } return t.prototype.isSync = function () {
                return this.disableWebCrypto && this.config.enableSoftwareAES
            }, t.prototype.decrypt = function (t, e, r, i) {
                var s = this;
                if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                    this.logEnabled && (l.b.log("JS AES decrypt"), this.logEnabled = !1);
                    var u = this.decryptor;
                    u || (this.decryptor = u = new o.a), u.expandKey(e), i(u.decrypt(t, 0, r, this.removePKCS7Padding))
                } else {
                    this.logEnabled && (l.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                    var d = this.subtle;
                    this.key !== e && (this.key = e, this.fastAesKey = new a.a(d, e)), this.fastAesKey.expandKey().then(function (a) {
                        new n.a(d, r).decrypt(t, a).catch(function (n) {
                            s.onWebCryptoError(n, t, e, r, i)
                        }).then(function (t) { i(t) })
                    }).catch(function (n) {
                        s.onWebCryptoError(n, t, e, r, i)
                    })
                }
            }, t.prototype.onWebCryptoError = function (t, e, r, i, n) {
                this.config.enableSoftwareAES ? (l.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, r, i, n)) : (l.b.error("decrypting error : " + t.message), this.observer.trigger(Event.ERROR, { type: s.b.MEDIA_ERROR, details: s.a.FRAG_DECRYPT_ERROR, fatal: !0, reason: t.message }))
            }, t.prototype.destroy = function () {
                var t = this.decryptor;
                t && (t.destroy(), this.decryptor = void 0)
            }, t
        }();
        e.a = u
    }, function (t, e, r) {
        "use strict";
        function i() {
            if ("undefined" != typeof window)
                return window.MediaSource || window.WebKitMediaSource
        } e.a = i
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        } function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        } var o = r(3), s = function (t) {
            function e(r) {
                i(this, e);
                for (var a = arguments.length, o = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                    o[s - 1] = arguments[s];
                var l = n(this, t.call.apply(t, [this, r].concat(o)));
                return l._tickInterval = null, l._tickTimer = null, l._tickCallCount = 0, l._boundTick = l.tick.bind(l), l
            }
            return a(e, t), e.prototype.onHandlerDestroying = function () {
                this.clearNextTick(), this.clearInterval()
            }, e.prototype.hasInterval = function () {
                return !!this._tickInterval
            }, e.prototype.hasNextTick = function () {
                return !!this._tickTimer
            }, e.prototype.setInterval = function (t) {
                function e(e) {
                    return t.apply(this, arguments)
                } return e.toString = function () {
                    return t.toString()
                }, e
            }(function (t) {
                return !this._tickInterval && (this._tickInterval = setInterval(this._boundTick, t), !0)
            }), e.prototype.clearInterval = function (t) {
                function e() {
                    return t.apply(this, arguments)
                } return e.toString = function () {
                    return t.toString()
                }, e
            }(function () {
                return !!this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
            }), e.prototype.clearNextTick = function () {
                return !!this._tickTimer && (clearTimeout(this._tickTimer), this._tickTimer = null, !0)
            }, e.prototype.tick = function () {
                1 === ++this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
            }, e.prototype.doTick = function () { }, e
        }(o.a);
        e.a = s
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        } function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        } var o = r(1), s = r(3), l = r(2), u = r(0), d = r(15), c = r(28), h = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            } return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), f = {
            MANIFEST: "manifest",
            LEVEL: "level",
            AUDIO_TRACK: "audioTrack",
            SUBTITLE_TRACK: "subtitleTrack"
        }, p = {
            MAIN: "main",
            AUDIO: "audio",
            SUBTITLE: "subtitle"
        }, v = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.MANIFEST_LOADING, o.a.LEVEL_LOADING, o.a.AUDIO_TRACK_LOADING, o.a.SUBTITLE_TRACK_LOADING));
                return a.loaders = {}, a
            } return a(e, t), e.canHaveQualityLevels = function (t) {
                return t !== f.AUDIO_TRACK && t !== f.SUBTITLE_TRACK
            }, e.mapContextToLevelType = function (t) {
                switch (t.type) {
                    case f.AUDIO_TRACK: return p.AUDIO;
                    case f.SUBTITLE_TRACK: return p.SUBTITLE;
                    default: return p.MAIN
                }
            }, e.getResponseUrl = function (t, e) {
                var r = t.url; return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
            }, e.prototype.createInternalLoader = function (t) {
                var e = this.hls.config, r = e.pLoader, i = e.loader, n = r || i, a = new n(e);
                return t.loader = a, this.loaders[t.type] = a, a
            }, e.prototype.getInternalLoader = function (t) {
                return this.loaders[t.type]
            }, e.prototype.resetInternalLoader = function (t) {
                this.loaders[t] && delete this.loaders[t]
            }, e.prototype.destroyInternalLoaders = function () {
                for (var t in this.loaders) {
                    var e = this.loaders[t];
                    e && e.destroy(), this.resetInternalLoader(t)
                }
            }, e.prototype.destroy = function () {
                this.destroyInternalLoaders(), t.prototype.destroy.call(this)
            }, e.prototype.onManifestLoading = function (t) {
                this.load(t.url, { type: f.MANIFEST })
            }, e.prototype.onLevelLoading = function (t) {
                this.load(t.url, { type: f.LEVEL, level: t.level, id: t.id })
            }, e.prototype.onAudioTrackLoading = function (t) {
                this.load(t.url, { type: f.AUDIO_TRACK, id: t.id })
            }, e.prototype.onSubtitleTrackLoading = function (t) {
                this.load(t.url, { type: f.SUBTITLE_TRACK, id: t.id })
            }, e.prototype.load = function (t, e) {
                var r = this.hls.config, i = this.getInternalLoader(e);
                if (i) {
                    var n = i.context; if (n && n.url === t)
                        return u.b.trace("playlist request ongoing"), !1;
                    u.b.warn("aborting previous loader for type: " + e.type), i.abort()
                } var a = void 0, o = void 0, s = void 0, l = void 0; 
                switch (e.type) {
                    case f.MANIFEST: a = r.manifestLoadingMaxRetry, o = r.manifestLoadingTimeOut, s = r.manifestLoadingRetryDelay, l = r.manifestLoadingMaxRetryTimeout;
                        break;
                    case f.LEVEL: a = 0, o = r.levelLoadingTimeOut;
                        break;
                    default: a = r.levelLoadingMaxRetry, o = r.levelLoadingTimeOut, s = r.levelLoadingRetryDelay, l = r.levelLoadingMaxRetryTimeout, u.b.log("Playlist loader for " + e.type + " " + (e.level || e.id))
                }i = this.createInternalLoader(e), e.url = t, e.responseType = e.responseType || "";
                var d = void 0, c = void 0;
                return d = { timeout: o, maxRetry: a, retryDelay: s, maxRetryDelay: l }, c = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) }, i.load(e, d, c), !0
            }, e.prototype.loadsuccess = function (t, e, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (r.isSidxRequest)
                    return this._handleSidxRequest(t, r), void this._handlePlaylistLoaded(t, e, r, i); this.resetInternalLoader(r.type);
                var n = t.data;
                if (e.tload = performance.now(), 0 !== n.indexOf("#EXTM3U"))
                    return void this._handleManifestParsingError(t, r, "no EXTM3U delimiter", i);
                n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(t, e, r, i) : this._handleMasterPlaylist(t, e, r, i)
            }, e.prototype.loaderror = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; this._handleNetworkError(e, r)
            }, e.prototype.loadtimeout = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; this._handleNetworkError(e, r, !0)
            }, e.prototype._handleMasterPlaylist = function (t, r, i, n) {
                var a = this.hls, s = t.data, l = e.getResponseUrl(t, i), d = c.a.parseMasterPlaylist(s, l);
                if (!d.length)
                    return void this._handleManifestParsingError(t, i, "no level found in manifest", n);
                var h = d.map(function (t) {
                    return { id: t.attrs.AUDIO, codec: t.audioCodec }
                }), f = c.a.parseMasterPlaylistMedia(s, l, "AUDIO", h), p = c.a.parseMasterPlaylistMedia(s, l, "SUBTITLES"); 
                if (f.length) {
                    var v = !1; f.forEach(function (t) {
                        t.url || (v = !0)
                    }), !1 === v && d[0].audioCodec && !d[0].attrs.AUDIO && (u.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), f.unshift({ type: "main", name: "main" }))
                } a.trigger(o.a.MANIFEST_LOADED, { levels: d, audioTracks: f, subtitles: p, url: l, stats: r, networkDetails: n })
            }, e.prototype._handleTrackOrLevelPlaylist = function (t, r, i, n) {
                var a = this.hls, s = i.id, l = i.level, u = i.type, d = e.getResponseUrl(t, i), h = isNaN(s) ? 0 : s, p = isNaN(l) ? h : l, v = e.mapContextToLevelType(i), g = c.a.parseLevelPlaylist(t.data, d, p, v, h);
                if (g.tload = r.tload, u === f.MANIFEST) {
                    var y = { url: d, details: g };
                    a.trigger(o.a.MANIFEST_LOADED, {
                        levels: [y],
                        audioTracks: [],
                        url: d,
                        stats: r,
                        networkDetails: n
                    })
                } if (r.tparsed = performance.now(), g.needSidxRanges) {
                    var m = g.initSegment.url;
                    return void this.load(m, {
                        isSidxRequest: !0, type: u, level: l, levelDetails: g, id: s, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer"
                    })
                } i.levelDetails = g, this._handlePlaylistLoaded(t, r, i, n)
            }, e.prototype._handleSidxRequest = function (t, e) {
                var r = d.a.parseSegmentIndex(new Uint8Array(t.data));
                r.references.forEach(function (t, r) { var i = t.info, n = e.levelDetails.fragments[r]; 0 === n.byteRange.length && (n.rawByteRange = String(1 + i.end - i.start) + "@" + String(i.start)) }), e.levelDetails.initSegment.rawByteRange = String(r.moovEndOffset) + "@0"
            }, e.prototype._handleManifestParsingError = function (t, e, r, i) {
                this.hls.trigger(o.a.ERROR, { type: l.b.NETWORK_ERROR, details: l.a.MANIFEST_PARSING_ERROR, fatal: !0, url: t.url, reason: r, networkDetails: i })
            }, e.prototype._handleNetworkError = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = void 0, n = void 0, a = this.getInternalLoader(t); switch (t.type) {
                    case f.MANIFEST: i = r ? l.a.MANIFEST_LOAD_TIMEOUT : l.a.MANIFEST_LOAD_ERROR, n = !0; break;
                    case f.LEVEL: i = r ? l.a.LEVEL_LOAD_TIMEOUT : l.a.LEVEL_LOAD_ERROR, n = !1; break;
                    case f.AUDIO_TRACK: i = r ? l.a.AUDIO_TRACK_LOAD_TIMEOUT : l.a.AUDIO_TRACK_LOAD_ERROR, n = !1; break;
                    default: n = !1
                }a && (a.abort(), this.resetInternalLoader(t.type)), this.hls.trigger(o.a.ERROR, {
                    type: l.b.NETWORK_ERROR,
                    details: i,
                    fatal: n,
                    url: a.url,
                    loader: a, context:
                        t, networkDetails: e
                })
            }, e.prototype._handlePlaylistLoaded = function (t, r, i, n) {
                var a = i.type, s = i.level, l = i.id, u = i.levelDetails;
                if (!u.targetduration)
                    return void this._handleManifestParsingError(t, i, "invalid target duration", n);
                if (e.canHaveQualityLevels(i.type))
                    this.hls.trigger(o.a.LEVEL_LOADED, { details: u, level: s || 0, id: l || 0, stats: r, networkDetails: n });
                else switch (a) {
                    case f.AUDIO_TRACK: this.hls.trigger(o.a.AUDIO_TRACK_LOADED, { details: u, id: l, stats: r, networkDetails: n }); break;
                    case f.SUBTITLE_TRACK: this.hls.trigger(o.a.SUBTITLE_TRACK_LOADED, { details: u, id: l, stats: r, networkDetails: n })
                }
            }, h(e, null, [
                {
                    key: "ContextType",
                    get: function () { return f }
                },
                {
                    key: "LevelType",
                    get: function () { return p }
                }
            ]), e
        }(s.a);
        e.a = v
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(0), a = r(1), o = Math.pow(2, 32) - 1, s = function () {
            function t(e, r) {
                i(this, t), this.observer = e, this.remuxer = r
            }
            return t.prototype.resetTimeStamp = function (t) {
                this.initPTS = t
            }, t.prototype.resetInitSegment = function (e, r, i, n) {
                if (e && e.byteLength) {
                    var o = this.initData = t.parseInitSegment(e);
                    null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e");
                    var s = {};
                    o.audio && o.video ? s.audiovideo = {
                        container: "video/mp4",
                        codec: r + "," + i,
                        initSegment: n ? e : null
                    } : (o.audio && (s.audio = {
                        container: "audio/mp4",
                        codec: r,
                        initSegment: n ? e : null
                    }), o.video && (s.video = {
                        container: "video/mp4",
                        codec: i,
                        initSegment: n ? e : null
                    })), this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, { tracks: s })
                } else r && (this.audioCodec = r), i && (this.videoCodec = i)
            }, t.probe = function (e) {
                return t.findBox({
                    data: e,
                    start: 0,
                    end: Math.min(e.length, 16384)
                }, ["moof"]).length > 0
            }, t.bin2str = function (t) {
                return String.fromCharCode.apply(null, t)
            }, t.readUint16 = function (t, e) {
                t.data && (e += t.start, t = t.data);
                var r = t[e] << 8 | t[e + 1];
                return r < 0 ? 65536 + r : r
            }, t.readUint32 = function (t, e) {
                t.data && (e += t.start, t = t.data);
                var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
                return r < 0 ? 4294967296 + r : r
            }, t.writeUint32 = function (t, e, r) {
                t.data && (e += t.start, t = t.data), t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
            }, t.findBox = function (e, r) {
                var i = [], n = void 0, a = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0;
                if (e.data ? (u = e.start, s = e.end, e = e.data) : (u = 0, s = e.byteLength), !r.length)
                    return null;
                for (n = u; n < s;)
                    a = t.readUint32(e, n), o = t.bin2str(e.subarray(n + 4, n + 8)), d = a > 1 ? n + a : s, o === r[0] && (1 === r.length ? i.push({ data: e, start: n + 8, end: d }) : (l = t.findBox({ data: e, start: n + 8, end: d }, r.slice(1)), l.length && (i = i.concat(l)))), n = d;
                return i
            }, t.parseSegmentIndex = function (e) {
                var r = t.findBox(e, ["moov"])[0], i = r ? r.end : null, n = 0, a = t.findBox(e, ["sidx"]), o = void 0;
                if (!a || !a[0])
                    return null;
                o = [], a = a[0];
                var s = a.data[0];
                n = 0 === s ? 8 : 16;
                var l = t.readUint32(a, n);
                n += 4;
                n += 0 === s ? 8 : 16, n += 2;
                var u = a.end + 0, d = t.readUint16(a, n);
                n += 2;
                for (var c = 0; c < d; c++) {
                    var h = n, f = t.readUint32(a, h);
                    h += 4;
                    var p = 2147483647 & f;
                    if (1 === (2147483648 & f) >>> 31)
                        return void
                            console.warn("SIDX has hierarchical references (not supported)");
                    var v = t.readUint32(a, h);
                    h += 4, o.push({ referenceSize: p, subsegmentDuration: v, info: { duration: v / l, start: u, end: u + p - 1 } }), u += p, h += 4, n = h
                }
                return { earliestPresentationTime: 0, timescale: l, version: s, referencesCount: d, references: o, moovEndOffset: i }
            }, t.parseInitSegment = function (e) {
                var r = [];
                return t.findBox(e, ["moov", "trak"]).forEach(function (e) {
                    var i = t.findBox(e, ["tkhd"])[0];
                    if (i) {
                        var a = i.data[i.start], o = 0 === a ? 12 : 20, s = t.readUint32(i, o), l = t.findBox(e, ["mdia", "mdhd"])[0];
                        if (l) {
                            a = l.data[l.start], o = 0 === a ? 12 : 20;
                            var u = t.readUint32(l, o), d = t.findBox(e, ["mdia", "hdlr"])[0];
                            if (d) {
                                var c = t.bin2str(d.data.subarray(d.start + 8, d.start + 12)), h = { soun: "audio", vide: "video" }[c];
                                if (h) {
                                    var f = t.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
                                    if (f.length) {
                                        f = f[0];
                                        var p = t.bin2str(f.data.subarray(f.start + 12, f.start + 16));
                                        n.b.log("MP4Demuxer:" + h + ":" + p + " found")
                                    }
                                    r[s] = { timescale: u, type: h }, r[h] = { timescale: u, id: s }
                                }
                            }
                        }
                    }
                }), r
            }, t.getStartDTS = function (e, r) {
                var i = void 0, n = void 0, a = void 0;
                return i = t.findBox(r, ["moof", "traf"]), n = [].concat.apply([], i.map(function (r) {
                    return t.findBox(r, ["tfhd"]).map(function (i) {
                        var n = void 0, a = void 0;
                        return n = t.readUint32(i, 4), a = e[n].timescale || 9e4, t.findBox(r, ["tfdt"]).map(function (e) {
                            var r = void 0, i = void 0;
                            return r = e.data[e.start], i = t.readUint32(e, 4), 1 === r && (i *= Math.pow(2, 32), i += t.readUint32(e, 8)), i
                        })[0] / a
                    })
                })), a = Math.min.apply(null, n), isFinite(a) ? a : 0
            }, t.offsetStartDTS = function (e, r, i) {
                t.findBox(r, ["moof", "traf"]).map(function (r) {
                    return t.findBox(r, ["tfhd"]).map(function (n) {
                        var a = t.readUint32(n, 4), s = e[a].timescale || 9e4; t.findBox(r, ["tfdt"]).map(function (e) {
                            var r = e.data[e.start], n = t.readUint32(e, 4);
                            if (0 === r) t.writeUint32(e, 4, n - i * s);
                            else {
                                n *= Math.pow(2, 32), n += t.readUint32(e, 8), n -= i * s, n = Math.max(n, 0);
                                var a = Math.floor(n / (o + 1)), l = Math.floor(n % (o + 1));
                                t.writeUint32(e, 4, a), t.writeUint32(e, 8, l)
                            }
                        })
                    })
                })
            }, t.prototype.append = function (e, r, i, n) {
                var o = this.initData; o || (this.resetInitSegment(e, this.audioCodec, this.videoCodec, !1), o = this.initData); var s = void 0, l = this.initPTS;
                if (void 0 === l) {
                    var u = t.getStartDTS(o, e);
                    this.initPTS = l = u - r, this.observer.trigger(a.a.INIT_PTS_FOUND, { initPTS: l })
                } t.offsetStartDTS(o, e, l), s = t.getStartDTS(o, e), this.remuxer.remux(o.audio, o.video, null, null, s, i, n, e)
            }, t.prototype.destroy = function () { }, t
        }(); e.a = s
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } var n = r(4), a = r.n(n), o = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            } return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), s = function () {
            function t() {
                i(this, t), this.method = null, this.key = null, this.iv = null, this._uri = null
            } return o(t, [{
                key: "uri",
                get: function () {
                    return !this._uri && this.reluri && (this._uri = a.a.buildAbsoluteURL(this.baseuri, this.reluri, { alwaysNormalize: !0 })), this._uri
                }
            }
            ]), t
        }(); e.a = s
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            var r = a[e];
            return !!r && !0 === r[t.slice(0, 4)]
        } function n(t, e) {
            return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
        } r.d(e, "b", function () { return i }), r.d(e, "a", function () { return n }); var a = {
            audio: { a3ds: !0, "ac-3": !0, "ac-4": !0, alac: !0, alaw: !0, dra1: !0, "dts+": !0, "dts-": !0, dtsc: !0, dtse: !0, dtsh: !0, "ec-3": !0, enca: !0, g719: !0, g726: !0, m4ae: !0, mha1: !0, mha2: !0, mhm1: !0, mhm2: !0, mlpa: !0, mp4a: !0, "raw ": !0, Opus: !0, samr: !0, sawb: !0, sawp: !0, sevc: !0, sqcp: !0, ssmv: !0, twos: !0, ulaw: !0 },
            video: { avc1: !0, avc2: !0, avc3: !0, avc4: !0, avcp: !0, drac: !0, dvav: !0, dvhe: !0, encv: !0, hev1: !0, hvc1: !0, mjp2: !0, mp4v: !0, mvc1: !0, mvc2: !0, mvc3: !0, mvc4: !0, resv: !0, rv60: !0, s263: !0, svc1: !0, svc2: !0, "vc-1": !0, vp08: !0, vp09: !0 }
        }
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } var n = r(10), a = r.n(n), o = r(33), s = r.n(o), l = r(1), u = r(19), d = r(0), c = r(2), h = r(12), f = Object(h.a)(), p = function () {
            function t(e, r) {
                i(this, t), this.hls = e, this.id = r; var n = this.observer = new a.a, o = e.config; n.trigger = function (t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i]; n.emit.apply(n, [t, t].concat(r))
                }, n.off = function (t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1;
                        i < e; i++)r[i - 1] = arguments[i];
                    n.removeListener.apply(n, [t].concat(r))
                };
                var h = function (t, r) {
                    r = r || {}, r.frag = this.frag, r.id = this.id, e.trigger(t, r)
                }.bind(this);
                n.on(l.a.FRAG_DECRYPTED, h), n.on(l.a.FRAG_PARSING_INIT_SEGMENT, h), n.on(l.a.FRAG_PARSING_DATA, h), n.on(l.a.FRAG_PARSED, h), n.on(l.a.ERROR, h), n.on(l.a.FRAG_PARSING_METADATA, h), n.on(l.a.FRAG_PARSING_USERDATA, h), n.on(l.a.INIT_PTS_FOUND, h); var p = {
                    mp4: f.isTypeSupported("video/mp4"),
                    mpeg: f.isTypeSupported("audio/mpeg"),
                    mp3: f.isTypeSupported('audio/mp4; codecs="mp3"')
                }, v = navigator.vendor;
                if (o.enableWorker && "undefined" != typeof Worker) {
                    d.b.log("demuxing in webworker");
                    var g = void 0;
                    try {
                        g = this.w = s()(47), this.onwmsg = this.onWorkerMessage.bind(this), g.addEventListener("message", this.onwmsg), g.onerror = function (t) {
                            e.trigger(l.a.ERROR, {
                                type: c.b.OTHER_ERROR, details: c.a.INTERNAL_EXCEPTION, fatal: !0, event: "demuxerWorker", err: { message: t.message + " (" + t.filename + ":" + t.lineno + ")" }
                            })
                        }, g.postMessage({ cmd: "init", typeSupported: p, vendor: v, id: r, config: JSON.stringify(o) })
                    } catch (t) {
                        d.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), g && URL.revokeObjectURL(g.objectURL), this.demuxer = new u.a(n, p, o, v), this.w = void 0
                    }
                } else this.demuxer = new u.a(n, p, o, v)
            } return t.prototype.destroy = function () {
                var t = this.w;
                if (t)
                    t.removeEventListener("message", this.onwmsg), t.terminate(), this.w = null;
                else {
                    var e = this.demuxer; e && (e.destroy(), this.demuxer = null)
                }
                var r = this.observer;
                r && (r.removeAllListeners(), this.observer = null)
            }, t.prototype.push = function (t, e, r, i, n, a, o, s) {
                var l = this.w, u = isNaN(n.startDTS) ? n.start : n.startDTS, c = n.decryptdata, h = this.frag, f = !(h && n.cc === h.cc), p = !(h && n.level === h.level), v = h && n.sn === h.sn + 1, g = !p && v;
                if (f && d.b.log(this.id + ":discontinuity detected"), p && d.b.log(this.id + ":switch detected"), this.frag = n, l) l.postMessage({ cmd: "demux", data: t, decryptdata: c, initSegment: e, audioCodec: r, videoCodec: i, timeOffset: u, discontinuity: f, trackSwitch: p, contiguous: g, duration: a, accurateTimeOffset: o, defaultInitPTS: s }, t instanceof ArrayBuffer ? [t] : []);
                else { var y = this.demuxer; y && y.push(t, c, e, r, i, u, f, p, g, a, o, s) }
            }, t.prototype.onWorkerMessage = function (t) {
                var e = t.data, r = this.hls; switch (e.event) {
                    case "init": URL.revokeObjectURL(this.w.objectURL); break;
                    case l.a.FRAG_PARSING_DATA: e.data.data1 = new Uint8Array(e.data1), e.data2 && (e.data.data2 = new Uint8Array(e.data2));
                    default: e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                }
            }, t
        }();
        e.a = p
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(1), a = r(2), o = r(11), s = r(37), l = r(15), u = r(38), d = r(42), c = r(43), h = r(46), f = function () {
            function t(e, r, n, a) {
                i(this, t), this.observer = e, this.typeSupported = r, this.config = n, this.vendor = a
            } return t.prototype.destroy = function () {
                var t = this.demuxer; t && t.destroy()
            }, t.prototype.push = function (t, e, r, i, a, s, l, u, d, c, h, f) {
                if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
                    var p = this.decrypter; null == p && (p = this.decrypter = new o.a(this.observer, this.config));
                    var v = this, g = void 0;
                    try { g = performance.now() }
                    catch (t) {
                        g = Date.now()
                    } p.decrypt(t, e.key.buffer, e.iv.buffer, function (t) {
                        var o = void 0;
                        try { o = performance.now() }
                        catch (t) {
                            o = Date.now()
                        } v.observer.trigger(n.a.FRAG_DECRYPTED, { stats: { tstart: g, tdecrypt: o } }), v.pushDecrypted(new Uint8Array(t), e, new Uint8Array(r), i, a, s, l, u, d, c, h, f)
                    })
                } else this.pushDecrypted(new Uint8Array(t), e, new Uint8Array(r), i, a, s, l, u, d, c, h, f)
            }, t.prototype.pushDecrypted = function (t, e, r, i, o, f, p, v, g, y, m, b) { var E = this.demuxer; if (!E || (p || v) && !this.probe(t)) { for (var T = this.observer, S = this.typeSupported, _ = this.config, A = [{ demux: u.a, remux: c.a }, { demux: l.a, remux: h.a }, { demux: s.a, remux: c.a }, { demux: d.a, remux: c.a }], R = 0, w = A.length; R < w; R++) { var L = A[R], D = L.demux.probe; if (D(t)) { var I = this.remuxer = new L.remux(T, _, S, this.vendor); E = new L.demux(T, I, _, S), this.probe = D; break } } if (!E) return void T.trigger(n.a.ERROR, { type: a.b.MEDIA_ERROR, details: a.a.FRAG_PARSING_ERROR, fatal: !0, reason: "no demux matching with content found" }); this.demuxer = E } var k = this.remuxer; (p || v) && (E.resetInitSegment(r, i, o, y), k.resetInitSegment()), p && (E.resetTimeStamp(b), k.resetTimeStamp(b)), "function" == typeof E.setDecryptData && E.setDecryptData(e), E.append(t, f, g, m) }, t
        }(); e.a = f
    }, function (t, e, r) {
        "use strict";
        function i(t, e, r, i) {
            var n = void 0, a = void 0, o = void 0, s = void 0, l = void 0, u = navigator.userAgent.toLowerCase(), d = i, c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            return n = 1 + ((192 & e[r + 2]) >>> 6), (a = (60 & e[r + 2]) >>> 2) > c.length - 1 ? void t.trigger(Event.ERROR, { type: p.b.MEDIA_ERROR, details: p.a.FRAG_PARSING_ERROR, fatal: !0, reason: "invalid ADTS sampling index:" + a }) : (s = (1 & e[r + 2]) << 2, s |= (192 & e[r + 3]) >>> 6, f.b.log("manifest codec:" + i + ",ADTS data:type:" + n + ",sampleingIndex:" + a + "[" + c[a] + "Hz],channelConfig:" + s), /firefox/i.test(u) ? a >= 6 ? (n = 5, l = new Array(4), o = a - 3) : (n = 2, l = new Array(2), o = a) : -1 !== u.indexOf("android") ? (n = 2, l = new Array(2), o = a) : (n = 5, l = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && a >= 6 ? o = a - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (a >= 6 && 1 === s || /vivaldi/i.test(u)) || !i && 1 === s) && (n = 2, l = new Array(2)), o = a)), l[0] = n << 3, l[0] |= (14 & a) >> 1, l[1] |= (1 & a) << 7, l[1] |= s << 3, 5 === n && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0), { config: l, samplerate: c[a], channelCount: s, codec: "mp4a.40." + n, manifestCodec: d })
        }
        function n(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }
        function a(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }
        function o(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }
        function s(t, e) {
            return !!(e + 1 < t.length && n(t, e))
        }
        function l(t, e) {
            if (e + 1 < t.length && n(t, e)) {
                var r = a(t, e), i = r;
                e + 5 < t.length && (i = o(t, e));
                var s = e + i;
                if (s === t.length || s + 1 < t.length && n(t, s)) return !0
            }
            return !1
        }
        function u(t, e, r, n, a) {
            if (!t.samplerate) {
                var o = i(e, r, n, a);
                t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, f.b.log("parsed codec:" + t.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
            }
        }
        function d(t) {
            return 9216e4 / t
        }
        function c(t, e, r, i, n) {
            var s = void 0, l = void 0, u = void 0, d = t.length;
            if (s = a(t, e), l = o(t, e), (l -= s) > 0 && e + s + l <= d) return u = r + i * n, { headerLength: s, frameLength: l, stamp: u }
        }
        function h(t, e, r, i, n) {
            var a = d(t.samplerate), o = c(e, r, i, n, a);
            if (o) {
                var s = o.stamp, l = o.headerLength, u = o.frameLength, h = { unit: e.subarray(r + l, r + l + u), pts: s, dts: s };
                return t.samples.push(h), t.len += u, { sample: h, length: u + l }
            }
        } e.d = s, e.e = l, e.c = u, e.b = d, e.a = h; var f = r(0), p = r(2)
    },
    function (t, e, r) {
        "use strict";
        var i = {
            BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
            BytesInSlot: [0, 1, 1, 4],
            appendFrame: function (t, e, r, i, n) {
                if (!(r + 24 > e.length)) {
                    var a = this.parseHeader(e, r);
                    if (a && r + a.frameLength <= e.length) {
                        var o = 9e4 * a.samplesPerFrame / a.sampleRate, s = i + n * o, l = { unit: e.subarray(r, r + a.frameLength), pts: s, dts: s };
                        return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(l), t.len += a.frameLength, { sample: l, length: a.frameLength }
                    }
                }
            },
            parseHeader: function (t, e) {
                var r = t[e + 1] >> 3 & 3, n = t[e + 1] >> 1 & 3, a = t[e + 2] >> 4 & 15, o = t[e + 2] >> 2 & 3, s = t[e + 2] >> 1 & 1;
                if (1 !== r && 0 !== a && 15 !== a && 3 !== o) {
                    var l = 3 === r ? 3 - n : 3 === n ? 3 : 4, u = 1e3 * i.BitratesMap[14 * l + a - 1], d = 3 === r ? 0 : 2 === r ? 1 : 2, c = i.SamplingRateMap[3 * d + o], h = t[e + 3] >> 6 == 3 ? 1 : 2, f = i.SamplesCoefficients[r][n], p = i.BytesInSlot[n], v = 8 * f * p;
                    return { sampleRate: c, channelCount: h, frameLength: parseInt(f * u / c + s, 10) * p, samplesPerFrame: v }
                }
            },
            isHeaderPattern: function (t, e) {
                return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
            },
            isHeader: function (t, e) {
                return !!(e + 1 < t.length && this.isHeaderPattern(t, e))
            },
            probe: function (t, e) {
                if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
                    var r = this.parseHeader(t, e), i = 4;
                    r && r.frameLength && (i = r.frameLength);
                    var n = e + i;
                    if (n === t.length || n + 1 < t.length && this.isHeaderPattern(t, n)) return !0
                }
                return !1
            }
        };
        e.a = i
    }, function (t, e, r) {
        "use strict";
        function i(t, e, r) {
            var i = t[e], n = t[r], a = n.startPTS; isNaN(a) ? n.start = r > e ? i.start + i.duration : Math.max(i.start - n.duration, 0) : r > e ? (i.duration = a - i.start, i.duration < 0 && o.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (n.duration = i.start - a, n.duration < 0 && o.b.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!"))
        }
        function n(t, e, r, n, a, o) {
            var s = r;
            if (!isNaN(e.startPTS)) {
                var l = Math.abs(e.startPTS - r);
                isNaN(e.deltaPTS) ? e.deltaPTS = l : e.deltaPTS = Math.max(l, e.deltaPTS), s = Math.max(r, e.startPTS), r = Math.min(r, e.startPTS), n = Math.max(n, e.endPTS), a = Math.min(a, e.startDTS), o = Math.max(o, e.endDTS)
            }
            var u = r - e.start;
            e.start = e.startPTS = r, e.maxStartPTS = s, e.endPTS = n, e.startDTS = a, e.endDTS = o, e.duration = n - r; var d = e.sn;
            if (!t || d < t.startSN || d > t.endSN) return 0;
            var c = void 0, h = void 0, f = void 0;
            for (c = d - t.startSN, h = t.fragments, h[c] = e, f = c; f > 0; f--)i(h, f, f - 1);
            for (f = c; f < h.length - 1; f++)i(h, f, f + 1);
            return t.PTSKnown = !0, u
        }
        function a(t, e) {
            var r = Math.max(t.startSN, e.startSN) - e.startSN, i = Math.min(t.endSN, e.endSN) - e.startSN, a = e.startSN - t.startSN, s = t.fragments, l = e.fragments, u = 0, d = void 0;
            if (e.initSegment && t.initSegment && (e.initSegment = t.initSegment), i < r) return void (e.PTSKnown = !1);
            for (var c = r; c <= i; c++) {
                var h = s[a + c], f = l[c];
                f && h && (u = h.cc - f.cc, isNaN(h.startPTS) || (f.start = f.startPTS = h.startPTS, f.endPTS = h.endPTS, f.duration = h.duration, f.backtracked = h.backtracked, f.dropped = h.dropped, d = f))
            }
            if (u) for (o.b.log("discontinuity sliding from playlist, take drift into account"), c = 0; c < l.length; c++)l[c].cc += u;
            if (d) n(e, d, d.startPTS, d.endPTS, d.startDTS, d.endDTS);
            else if (a >= 0 && a < s.length) {
                var p = s[a].start;
                for (c = 0; c < l.length; c++)l[c].start += p
            }
            e.PTSKnown = t.PTSKnown
        }
        e.b = n, e.a = a;
        var o = r(0)
    },
    function (t, e, r) {
        "use strict";
        var i = {
            toString: function (t) {
                for (var e = "", r = t.length, i = 0; i < r; i++)
                    e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
                return e
            }
        }; e.a = i
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            for (var r = null, i = 0; i < t.length; i += 1) {
                var n = t[i];
                if (n && n.cc === e) {
                    r = n;
                    break
                }
            } return r
        } function n(t, e) {
            return u.a.search(t, function (t) {
                return t.cc < e ? 1 : t.cc > e ? -1 : 0
            })
        } function a(t, e, r) {
            var i = !1;
            return e && e.details && r && (r.endCC > r.startCC || t && t.cc < r.startCC) && (i = !0), i
        } function o(t, e) {
            var r = t.fragments, n = e.fragments;
            if (!n.length || !r.length)
                return void d.b.log("No fragments to align");
            var a = i(r, n[0].cc);
            return !a || a && !a.startPTS ? void d.b.log("No frag in previous level to align on") : a
        } function s(t, e) {
            e.fragments.forEach(function (e) {
                if (e) {
                    var r = e.start + t;
                    e.start = e.startPTS = r, e.endPTS = r + e.duration
                }
            }), e.PTSKnown = !0
        } function l(t, e, r) {
            if (a(t, e, r)) {
                var i = o(e.details, r);
                i && (d.b.log("Adjusting PTS using last level due to CC increase within current level"), s(i.start, r))
            } if (!1 === r.PTSKnown && e && e.details && e.details.fragments && e.details.fragments.length) {
                var n = e.details.programDateTime, l = r.programDateTime, u = (l - n) / 1e3 + e.details.fragments[0].start; isNaN(u) || (d.b.log("adjusting PTS using programDateTime delta, sliding:" + u.toFixed(3)), s(u, r))
            }
        } e.b = n, e.a = l;
        var u = r(5), d = r(0)
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            var r = null;
            try {
                r = new window.Event("addtrack")
            } catch (t) {
                r = document.createEvent("Event"), r.initEvent("addtrack", !1, !1)
            } r.track = t, e.dispatchEvent(r)
        } function n(t) {
            if (t && t.cues)
                for (; t.cues.length > 0;)
                    t.removeCue(t.cues[0])
        } e.b = i, e.a = n
    }, function (t, e, r) {
        "use strict";
        function i() {
            this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new d, this.regionList = []
        } function n(t) {
            function e(t, e, r, i) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | i) / 1e3
            } var r = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
        } function a() {
            this.values = Object.create(null)
        } function o(t, e, r, i) {
            var n = i ? t.split(i) : [t];
            for (var a in n)
                if ("string" == typeof n[a]) {
                    var o = n[a].split(r);
                    if (2 === o.length) {
                        var s = o[0], l = o[1];
                        e(s, l)
                    }
                }
        } function s(t, e, r) {
            function i() {
                var e = n(t);
                if (null === e) throw new Error("Malformed timestamp: " + l);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            } function s() {
                t = t.replace(/^\s+/, "")
            } var l = t;
            if (s(), e.startTime = i(), s(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + l);
            t = t.substr(3), s(), e.endTime = i(), s(), function (t, e) {
                var i = new a;
                o(t, function (t, e) {
                    switch (t) {
                        case "region":
                            for (var n = r.length - 1; n >= 0; n--)
                                if (r[n].id === e) {
                                    i.set(t, r[n].region);
                                    break
                                } break;
                        case "vertical": i.alt(t, e, ["rl", "lr"]); break;
                        case "line": var a = e.split(","), o = a[0];
                            i.integer(t, o), i.percent(t, o) && i.set("snapToLines", !1), i.alt(t, o, ["auto"]), 2 === a.length && i.alt("lineAlign", a[1], ["start", h, "end"]); break;
                        case "position": a = e.split(","), i.percent(t, a[0]), 2 === a.length && i.alt("positionAlign", a[1], ["start", h, "end", "line-left", "line-right", "auto"]); break;
                        case "size": i.percent(t, e); break;
                        case "align": i.alt(t, e, ["start", h, "end", "left", "right"])
                    }
                }, /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", "");
                var n = i.get("line", "auto");
                "auto" === n && -1 === c.line && (n = -1), e.line = n, e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", h);
                var s = i.get("position", "auto");
                "auto" === s && 50 === c.position && (s = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = s
            }(t, e)
        } function l(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        } r.d(e, "b", function () {
            return l
        }); var u = r(63), d = function () {
            return {
                decode: function (t) {
                    if (!t) return "";
                    if ("string" != typeof t) throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(t))
                }
            }
        }; a.prototype = {
            set: function (t, e) { this.get(t) || "" === e || (this.values[t] = e) }, get: function (t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            }, has: function (t) {
                return t in this.values
            }, alt: function (t, e, r) {
                for (var i = 0; i < r.length; ++i)
                    if (e === r[i]) {
                        this.set(t, e); break
                    }
            }, integer: function (t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            }, percent: function (t, e) {
                return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
            }
        }; var c = new u.a(0, 0, 0), h = "middle" === c.align ? "middle" : "center"; i.prototype = {
            parse: function (t) {
                function e() {
                    var t = r.buffer, e = 0;
                    for (t = l(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];)
                        ++e;
                    var i = t.substr(0, e);
                    return "\r" === t[e] && ++e, "\n" === t[e] && ++e, r.buffer = t.substr(e), i
                } var r = this;
                t && (r.buffer += r.decoder.decode(t, { stream: !0 }));
                try {
                    var i = void 0;
                    if ("INITIAL" === r.state) {
                        if (!/\r\n|\n/.test(r.buffer))
                            return this; i = e();
                        var n = i.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!n || !n[0]) throw new Error("Malformed WebVTT signature.");
                        r.state = "HEADER"
                    } for (var a = !1; r.buffer;) {
                        if (!/\r\n|\n/.test(r.buffer)) return this;
                        switch (a ? a = !1 : i = e(), r.state) {
                            case "HEADER": /:/.test(i) ? function (t) {
                                o(t, function (t, e) {
                                    switch (t) {
                                        case "Region": console.log("parse region", e)
                                    }
                                }, /:/)
                            }(i) : i || (r.state = "ID");
                                continue;
                            case "NOTE": i || (r.state = "ID"); continue;
                            case "ID": if (/^NOTE($|[ \t])/.test(i)) {
                                r.state = "NOTE"; break
                            } if (!i) continue;
                                if (r.cue = new u.a(0, 0, ""), r.state = "CUE", -1 === i.indexOf("--\x3e")) {
                                    r.cue.id = i;
                                    continue
                                } case "CUE": try {
                                    s(i, r.cue, r.regionList)
                                } catch (t) {
                                    r.cue = null, r.state = "BADCUE"; continue
                                } r.state = "CUETEXT"; continue;
                            case "CUETEXT": var d = -1 !== i.indexOf("--\x3e");
                                if (!i || d && (a = !0)) {
                                    r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID"; continue
                                } r.cue.text && (r.cue.text += "\n"), r.cue.text += i; continue;
                            case "BADCUE": i || (r.state = "ID"); continue
                        }
                    }
                } catch (t) {
                    "CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE"
                } return this
            }, flush: function () {
                var t = this; try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Error("Malformed WebVTT signature.")
                } catch (t) {
                    throw t
                } return t.onflush && t.onflush(), this
            }
        }, e.a = i
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } Object.defineProperty(e, "__esModule", { value: !0 });
        var n = r(4), a = r.n(n), o = r(2), s = r(14), l = r(30), u = r(31), d = r(8), c = r(32), h = r(49), f = r(50), p = r(51), v = r(0), g = r(52), y = r(1), m = r(10), b = r.n(m), E = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            } return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }();
        r(72);
        var T = function () {
            function t() {
                var e = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i(this, t);
                var n = t.DefaultConfig;
                if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                for (var a in n) a in r || (r[a] = n[a]);
                if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                Object(v.a)(r.debug), this.config = r, this._autoLevelCapping = -1;
                var o = this.observer = new b.a; o.trigger = function (t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i]; o.emit.apply(o, [t, t].concat(r))
                }, o.off = function (t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                        r[i - 1] = arguments[i]; o.removeListener.apply(o, [t].concat(r))
                }, this.on = o.on.bind(o), this.off = o.off.bind(o), this.trigger = o.trigger.bind(o);
                var p = this.abrController = new r.abrController(this), g = new r.bufferController(this), y = new r.capLevelController(this), m = new r.fpsController(this), E = new s.a(this), T = new l.a(this), S = new u.a(this), _ = new f.a(this), A = this.levelController = new h.a(this), R = new d.b(this), w = this.streamController = new c.a(this, R), L = [A, w], D = r.audioStreamController;
                D && L.push(new D(this, R)), this.networkControllers = L;
                var I = [E, T, S, p, g, y, m, _, R];
                if (D = r.audioTrackController) {
                    var k = new D(this);
                    this.audioTrackController = k, I.push(k)
                } if (D = r.subtitleTrackController) {
                    var O = new D(this);
                    this.subtitleTrackController = O, I.push(O)
                } if (D = r.emeController) {
                    var C = new D(this);
                    this.emeController = C, I.push(C)
                } [r.subtitleStreamController, r.timelineController].forEach(function (t) {
                    t && I.push(new t(e))
                }), this.coreComponents = I
            } return t.isSupported = function () {
                return Object(p.a)()
            }, E(t, null, [{
                key: "version",
                get: function () {
                    return "9.0.0"
                }
            }, {
                key: "Events",
                get: function () { return y.a }
            }, {
                key: "ErrorTypes", get: function () { return o.b }
            }, {
                key: "ErrorDetails", get: function () { return o.a }
            }, {
                key: "DefaultConfig", get: function () {
                    return t.defaultConfig ? t.defaultConfig : g.a
                }, set: function (e) {
                    t.defaultConfig = e
                }
            }]), t.prototype.destroy = function () {
                v.b.log("destroy"), this.trigger(y.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function (t) {
                    t.destroy()
                }), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1
            }, t.prototype.attachMedia = function (t) {
                v.b.log("attachMedia"), this.media = t, this.trigger(y.a.MEDIA_ATTACHING, { media: t })
            }, t.prototype.detachMedia = function () {
                v.b.log("detachMedia"), this.trigger(y.a.MEDIA_DETACHING), this.media = null
            }, t.prototype.loadSource = function (t) {
                t = a.a.buildAbsoluteURL(window.location.href, t, {
                    alwaysNormalize: !0
                }), v.b.log("loadSource:" + t), this.url = t, this.trigger(y.a.MANIFEST_LOADING, { url: t })
            }, t.prototype.startLoad = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1; v.b.log("startLoad(" + t + ")"), this.networkControllers.forEach(function (e) {
                    e.startLoad(t)
                })
            }, t.prototype.stopLoad = function () {
                v.b.log("stopLoad"), this.networkControllers.forEach(function (t) {
                    t.stopLoad()
                })
            }, t.prototype.swapAudioCodec = function () {
                v.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
            }, t.prototype.recoverMediaError = function () {
                v.b.log("recoverMediaError");
                var t = this.media;
                this.detachMedia(), this.attachMedia(t)
            }, E(t, [{
                key: "levels",
                get: function () { return this.levelController.levels }
            }, {
                key: "currentLevel",
                get: function () { return this.streamController.currentLevel },
                set: function (t) { v.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch() }
            }, {
                key: "nextLevel",
                get: function () { return this.streamController.nextLevel },
                set: function (t) { v.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch() }
            }, {
                key: "loadLevel",
                get: function () { return this.levelController.level },
                set: function (t) { v.b.log("set loadLevel:" + t), this.levelController.manualLevel = t }
            }, {
                key: "nextLoadLevel",
                get: function () { return this.levelController.nextLoadLevel },
                set: function (t) { this.levelController.nextLoadLevel = t }
            }, {
                key: "firstLevel",
                get: function () { return Math.max(this.levelController.firstLevel, this.minAutoLevel) },
                set: function (t) { v.b.log("set firstLevel:" + t), this.levelController.firstLevel = t }
            }, {
                key: "startLevel",
                get: function () { return this.levelController.startLevel },
                set: function (t) {
                    v.b.log("set startLevel:" + t);
                    var e = this; -1 !== t && (t = Math.max(t, e.minAutoLevel)), e.levelController.startLevel = t
                }
            }, {
                key: "autoLevelCapping",
                get: function () { return this._autoLevelCapping },
                set: function (t) { v.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t }
            }, {
                key: "autoLevelEnabled",
                get: function () { return -1 === this.levelController.manualLevel }
            }, {
                key: "manualLevel",
                get: function () { return this.levelController.manualLevel }
            }, {
                key: "minAutoLevel",
                get: function () {
                    for (var t = this, e = t.levels, r = t.config.minAutoBitrate, i = e ? e.length : 0, n = 0; n < i; n++) {
                        if ((e[n].realBitrate ? Math.max(e[n].realBitrate, e[n].bitrate) : e[n].bitrate) > r) return n
                    } return 0
                }
            }, {
                key: "maxAutoLevel",
                get: function () { var t = this, e = t.levels, r = t.autoLevelCapping; return -1 === r && e && e.length ? e.length - 1 : r }
            }, {
                key: "nextAutoLevel",
                get: function () { var t = this; return Math.min(Math.max(t.abrController.nextAutoLevel, t.minAutoLevel), t.maxAutoLevel) },
                set: function (t) { var e = this; e.abrController.nextAutoLevel = Math.max(e.minAutoLevel, t) }
            }, {
                key: "audioTracks",
                get: function () { var t = this.audioTrackController; return t ? t.audioTracks : [] }
            }, {
                key: "audioTrack", get: function () { var t = this.audioTrackController; return t ? t.audioTrack : -1 },
                set: function (t) { var e = this.audioTrackController; e && (e.audioTrack = t) }
            }, {
                key: "liveSyncPosition",
                get: function () { return this.streamController.liveSyncPosition }
            }, {
                key: "subtitleTracks",
                get: function () { var t = this.subtitleTrackController; return t ? t.subtitleTracks : [] }
            }, {
                key: "subtitleTrack",
                get: function () { var t = this.subtitleTrackController; return t ? t.subtitleTrack : -1 },
                set: function (t) { var e = this.subtitleTrackController; e && (e.subtitleTrack = t) }
            }, {
                key: "subtitleDisplay",
                get: function () { var t = this.subtitleTrackController; return !!t && t.subtitleDisplay },
                set: function (t) { var e = this.subtitleTrackController; e && (e.subtitleDisplay = t) }
            }]), t
        }();
        e.default = T
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(4), a = r.n(n), o = r(7), s = r(16), l = r(29), u = r(0), d = r(17),
            c = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
            h = /#EXT-X-MEDIA:(.*)/g,
            f = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            p = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            v = /\.(mp4|m4s|m4v|m4a)$/i,
            g = function () {
                function t() {
                    i(this, t)
                } return t.findGroup = function (t, e) {
                    if (!t) return null;
                    for (var r = null, i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.id === e && (r = n)
                    } return r
                }, t.convertAVC1ToAVCOTI = function (t) {
                    var e = void 0, r = t.split("."); return r.length > 2 ? (e = r.shift() + ".", e += parseInt(r.shift()).toString(16), e += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : e = t, e
                }, t.resolve = function (t, e) {
                    return a.a.buildAbsoluteURL(e, t, {
                        alwaysNormalize: !0
                    })
                }, t.parseMasterPlaylist = function (e, r) {
                    var i = [], n = void 0;
                    for (c.lastIndex = 0; null != (n = c.exec(e));) {
                        var a = {}, o = a.attrs = new l.a(n[1]);
                        a.url = t.resolve(n[2], r);
                        var s = o.decimalResolution("RESOLUTION");
                        s && (a.width = s.width, a.height = s.height), a.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), a.name = o.NAME, function (t, e) {
                            ["video", "audio"].forEach(function (r) {
                                var i = t.filter(function (t) {
                                    return Object(d.b)(t, r)
                                });
                                if (i.length) {
                                    var n = i.filter(function (t) {
                                        return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                    });
                                    e[r + "Codec"] = n.length > 0 ? n[0] : i[0], t = t.filter(function (t) {
                                        return -1 === i.indexOf(t)
                                    })
                                }
                            }), e.unknownCodecs = t
                        }([].concat((o.CODECS || "").split(/[ ,]+/)), a), a.videoCodec && -1 !== a.videoCodec.indexOf("avc1") && (a.videoCodec = t.convertAVC1ToAVCOTI(a.videoCodec)), i.push(a)
                    } return i
                }, t.parseMasterPlaylistMedia = function (e, r, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], a = void 0, o = [], s = 0;
                    for (h.lastIndex = 0; null !== (a = h.exec(e));) {
                        var u = {}, d = new l.a(a[1]);
                        if (d.TYPE === i) {
                            if (u.groupId = d["GROUP-ID"], u.name = d.NAME, u.type = i, u.default = "YES" === d.DEFAULT, u.autoselect = "YES" === d.AUTOSELECT, u.forced = "YES" === d.FORCED, d.URI && (u.url = t.resolve(d.URI, r)), u.lang = d.LANGUAGE, u.name || (u.name = u.lang), n.length) {
                                var c = t.findGroup(n, u.groupId); u.audioCodec = c ? c.codec : n[0].codec
                            } u.id = s++, o.push(u)
                        }
                    } return o
                }, t.parseLevelPlaylist = function (t, e, r, i, n) {
                    var a = 0, d = 0, c = {
                        type: null, version: null, url: e, fragments: [], live: !0, startSN: 0
                    }, h = new s.a, g = 0, y = null, m = new o.a, b = void 0, E = void 0;
                    for (f.lastIndex = 0; null !== (b = f.exec(t));) {
                        var T = b[1];
                        if (T) {
                            m.duration = parseFloat(T);
                            var S = (" " + b[2]).slice(1);
                            m.title = S || null, m.tagList.push(S ? ["INF", T, S] : ["INF", T])
                        } else if (b[3]) {
                            if (!isNaN(m.duration)) {
                                var _ = a++; m.type = i, m.start = d, m.levelkey = h, m.sn = _, m.level = r, m.cc = g, m.urlId = n, m.baseurl = e, m.relurl = (" " + b[3]).slice(1), c.programDateTime && (y ? m.rawProgramDateTime ? m.pdt = Date.parse(m.rawProgramDateTime) : m.pdt = y.pdt + 1e3 * y.duration : m.pdt = Date.parse(c.programDateTime), m.endPdt = m.pdt + 1e3 * m.duration), c.fragments.push(m), y = m, d += m.duration, m = new o.a
                            }
                        } else if (b[4]) {
                            if (m.rawByteRange = (" " + b[4]).slice(1), y) {
                                var A = y.byteRangeEndOffset; A && (m.lastByteRangeEndOffset = A)
                            }
                        } else if (b[5])
                            m.rawProgramDateTime = (" " + b[5]).slice(1), m.tagList.push(["PROGRAM-DATE-TIME", m.rawProgramDateTime]), void 0 === c.programDateTime && (c.programDateTime = new Date(new Date(Date.parse(b[5])) - 1e3 * d));
                        else {
                            for (b = b[0].match(p), E = 1; E < b.length && void 0 === b[E]; E++);
                            var R = (" " + b[E + 1]).slice(1), w = (" " + b[E + 2]).slice(1);
                            switch (b[E]) {
                                case "#": m.tagList.push(w ? [R, w] : [R]); break;
                                case "PLAYLIST-TYPE": c.type = R.toUpperCase(); break;
                                case "MEDIA-SEQUENCE": a = c.startSN = parseInt(R); break;
                                case "TARGETDURATION": c.targetduration = parseFloat(R); break;
                                case "VERSION": c.version = parseInt(R); break;
                                case "EXTM3U": break;
                                case "ENDLIST": c.live = !1; break;
                                case "DIS": g++, m.tagList.push(["DIS"]); break;
                                case "DISCONTINUITY-SEQ": g = parseInt(R); break;
                                case "KEY": var L = R, D = new l.a(L), I = D.enumeratedString("METHOD"), k = D.URI, O = D.hexadecimalInteger("IV"); I && (h = new s.a, k && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(I) >= 0 && (h.method = I, h.baseuri = e, h.reluri = k, h.key = null, h.iv = O)); break;
                                case "START": var C = R, P = new l.a(C), x = P.decimalFloatingPoint("TIME-OFFSET"); isNaN(x) || (c.startTimeOffset = x); break;
                                case "MAP": var F = new l.a(R); m.relurl = F.URI, m.rawByteRange = F.BYTERANGE, m.baseurl = e, m.level = r, m.type = i, m.sn = "initSegment", c.initSegment = m, m = new o.a; break;
                                default: u.b.warn("line parsed but not handled: " + b)
                            }
                        }
                    } return m = y, m && !m.relurl && (c.fragments.pop(), d -= m.duration), c.totalduration = d, c.averagetargetduration = d / c.fragments.length, c.endSN = a - 1, c.startCC = c.fragments[0] ? c.fragments[0].cc : 0, c.endCC = g, !c.initSegment && c.fragments.length && c.fragments.every(function (t) {
                        return v.test(t.relurl)
                    }) && (u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), m = new o.a, m.relurl = c.fragments[0].relurl, m.baseurl = e, m.level = r, m.type = i, m.sn = "initSegment", c.initSegment = m, c.needSidxRanges = !0), c
                }, t
            }(); e.a = g
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } var n = /^(\d+)x(\d+)$/, a = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, o = function () {
            function t(e) {
                i(this, t), "string" == typeof e && (e = t.parseAttrList(e));
                for (var r in e) e.hasOwnProperty(r) && (this[r] = e[r])
            } return t.prototype.decimalInteger = function (t) {
                var e = parseInt(this[t], 10);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
            }, t.prototype.hexadecimalInteger = function (t) {
                if (this[t]) {
                    var e = (this[t] || "0x").slice(2);
                    e = (1 & e.length ? "0" : "") + e;
                    for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++)
                        r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                    return r
                } return null
            }, t.prototype.hexadecimalIntegerAsNumber = function (t) {
                var e = parseInt(this[t], 16);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
            }, t.prototype.decimalFloatingPoint = function (t) {
                return parseFloat(this[t])
            }, t.prototype.enumeratedString = function (t) {
                return this[t]
            }, t.prototype.decimalResolution = function (t) {
                var e = n.exec(this[t]);
                if (null !== e) return { width: parseInt(e[1], 10), height: parseInt(e[2], 10) }
            }, t.parseAttrList = function (t) {
                var e = void 0, r = {};
                for (a.lastIndex = 0; null !== (e = a.exec(t));) {
                    var i = e[2]; 0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1]] = i
                } return r
            }, t
        }(); e.a = o
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        } function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        } var o = r(1), s = r(3), l = r(2), u = r(0), d = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.FRAG_LOADING));
                return a.loaders = {}, a
            }
            return a(e, t), e.prototype.destroy = function () {
                var e = this.loaders;
                for (var r in e) {
                    var i = e[r];
                    i && i.destroy()
                } this.loaders = {}, t.prototype.destroy.call(this)
            }, e.prototype.onFragLoading = function (t) {
                var e = t.frag, r = e.type, i = this.loaders, n = this.hls.config, a = n.fLoader, o = n.loader;
                e.loaded = 0;
                var s = i[r];
                s && (u.b.warn("abort previous fragment loader for type: " + r), s.abort()), s = i[r] = e.loader = n.fLoader ? new a(n) : new o(n);
                var l = void 0, d = void 0, c = void 0;
                l = { url: e.url, frag: e, responseType: "arraybuffer", progressData: !1 };
                var h = e.byteRangeStartOffset, f = e.byteRangeEndOffset;
                isNaN(h) || isNaN(f) || (l.rangeStart = h, l.rangeEnd = f), d = {
                    timeout: n.fragLoadingTimeOut,
                    maxRetry: 0,
                    retryDelay: 0,
                    maxRetryDelay: n.fragLoadingMaxRetryTimeout
                }, c = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this),
                    onProgress: this.loadprogress.bind(this)
                }, s.load(l, d, c)
            }, e.prototype.loadsuccess = function (t, e, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, n = t.data, a = r.frag;
                a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(o.a.FRAG_LOADED, {
                    payload: n,
                    frag: a,
                    stats: e,
                    networkDetails: i
                })
            }, e.prototype.loaderror = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = e.loader;
                i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(o.a.ERROR, {
                    type: l.b.NETWORK_ERROR,
                    details: l.a.FRAG_LOAD_ERROR,
                    fatal: !1,
                    frag: e.frag,
                    response: t,
                    networkDetails: r
                })
            }, e.prototype.loadtimeout = function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = e.loader;
                i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(o.a.ERROR, {
                    type: l.b.NETWORK_ERROR,
                    details: l.a.FRAG_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: e.frag,
                    networkDetails: r
                })
            }, e.prototype.loadprogress = function (t, e, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, n = e.frag;
                n.loaded = t.loaded, this.hls.trigger(o.a.FRAG_LOAD_PROGRESS, {
                    frag: n,
                    stats: t,
                    networkDetails: i
                })
            }, e
        }(s.a); e.a = d
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        } function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(2), u = r(0), d = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.KEY_LOADING));
                return a.loaders = {}, a.decryptkey = null, a.decrypturl = null, a
            }
            return a(e, t), e.prototype.destroy = function () {
                for (var t in this.loaders) {
                    var e = this.loaders[t];
                    e && e.destroy()
                } this.loaders = {}, s.a.prototype.destroy.call(this)
            }, e.prototype.onKeyLoading = function (t) {
                var e = t.frag, r = e.type, i = this.loaders[r], n = e.decryptdata, a = n.uri;
                if (a !== this.decrypturl || null === this.decryptkey) {
                    var s = this.hls.config;
                    i && (u.b.warn("abort previous key loader for type:" + r), i.abort()), e.loader = this.loaders[r] = new s.loader(s), this.decrypturl = a, this.decryptkey = null;
                    var l = void 0, d = void 0, c = void 0;
                    l = {
                        url: a,
                        frag: e,
                        responseType: "arraybuffer"
                    },
                        d = {
                            timeout: s.fragLoadingTimeOut,
                            maxRetry: s.fragLoadingMaxRetry,
                            retryDelay: s.fragLoadingRetryDelay,
                            maxRetryDelay: s.fragLoadingMaxRetryTimeout
                        },
                        c = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        }, e.loader.load(l, d, c)
                } else this.decryptkey && (n.key = this.decryptkey, this.hls.trigger(o.a.KEY_LOADED, { frag: e }))
            }, e.prototype.loadsuccess = function (t, e, r) {
                var i = r.frag;
                this.decryptkey = i.decryptdata.key = new Uint8Array(t.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(o.a.KEY_LOADED, { frag: i })
            }, e.prototype.loaderror = function (t, e) {
                var r = e.frag, i = r.loader;
                i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(o.a.ERROR, {
                    type: l.b.NETWORK_ERROR, details: l.a.KEY_LOAD_ERROR, fatal: !1, frag: r, response: t
                })
            }, e.prototype.loadtimeout = function (t, e) {
                var r = e.frag, i = r.loader; i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(o.a.ERROR, {
                    type: l.b.NETWORK_ERROR,
                    details: l.a.KEY_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: r
                })
            }, e
        }(s.a);
        e.a = d
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        } function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t, enumerable: !1, writable: !0, configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        } var o = r(5), s = r(9), l = r(18), u = r(1), d = r(8), c = r(7), h = r(14), f = r(22), p = r(23), v = r(2), g = r(0), y = r(24), m = r(13), b = r(48), E = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), T = {
            STOPPED: "STOPPED",
            IDLE: "IDLE",
            KEY_LOADING: "KEY_LOADING",
            FRAG_LOADING: "FRAG_LOADING",
            FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
            WAITING_LEVEL: "WAITING_LEVEL",
            PARSING: "PARSING",
            PARSED: "PARSED",
            BUFFER_FLUSHING: "BUFFER_FLUSHING",
            ENDED: "ENDED",
            ERROR: "ERROR"
        },
            S = function (t) {
                function e(r, a) {
                    i(this, e);
                    var o = n(this, t.call(this, r, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.MANIFEST_LOADING, u.a.MANIFEST_PARSED, u.a.LEVEL_LOADED, u.a.KEY_LOADED, u.a.FRAG_LOADED, u.a.FRAG_LOAD_EMERGENCY_ABORTED, u.a.FRAG_PARSING_INIT_SEGMENT, u.a.FRAG_PARSING_DATA, u.a.FRAG_PARSED, u.a.ERROR, u.a.AUDIO_TRACK_SWITCHING, u.a.AUDIO_TRACK_SWITCHED, u.a.BUFFER_CREATED, u.a.BUFFER_APPENDED, u.a.BUFFER_FLUSHED));
                    return o.fragmentTracker = a, o.config = r.config, o.audioCodecSwap = !1, o._state = T.STOPPED, o.stallReported = !1, o
                }
                return a(e, t), e.prototype.onHandlerDestroying = function () {
                    this.stopLoad()
                }, e.prototype.onHandlerDestroyed = function () {
                    this.state = T.STOPPED, this.fragmentTracker = null
                }, e.prototype.startLoad = function (t) {
                    if (this.levels) {
                        var e = this.lastCurrentTime, r = this.hls;
                        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                            var i = r.startLevel;
                            -1 === i && (i = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                        } e > 0 && -1 === t && (g.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = T.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                    } else this.forceStartLoad = !0, this.state = T.STOPPED
                }, e.prototype.stopLoad = function () {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.clearInterval(), this.state = T.STOPPED, this.forceStartLoad = !1
                }, e.prototype.doTick = function () {
                    switch (this.state) {
                        case T.BUFFER_FLUSHING: this.fragLoadError = 0; break;
                        case T.IDLE: this._doTickIdle(); break;
                        case T.WAITING_LEVEL: var t = this.levels[this.level]; t && t.details && (this.state = T.IDLE); break;
                        case T.FRAG_LOADING_WAITING_RETRY: var e = performance.now(), r = this.retryDate; (!r || e >= r || this.media && this.media.seeking) && (g.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = T.IDLE); break;
                        case T.ERROR:
                        case T.STOPPED:
                        case T.FRAG_LOADING:
                        case T.PARSING:
                        case T.PARSED:
                        case T.ENDED:
                    }this._checkBuffer(), this._checkFragmentChanged()
                }, e.prototype._doTickIdle = function () {
                    var t = this.hls, e = t.config, r = this.media;
                    if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && e.startFragPrefetch)) {
                        var i = void 0;
                        i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition; var n = t.nextLoadLevel, a = this.levels[n];
                        if (a) {
                            var o = a.bitrate, l = void 0;
                            l = o ? Math.max(8 * e.maxBufferSize / o, e.maxBufferLength) : e.maxBufferLength, l = Math.min(l, e.maxMaxBufferLength);
                            var d = s.a.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, e.maxBufferHole), c = d.len;
                            if (!(c >= l)) {
                                g.b.trace("buffer length of " + c.toFixed(3) + " is below max of " + l.toFixed(3) + ". checking for more payload ..."), this.level = t.nextLoadLevel = n;
                                var h = a.details;
                                if (void 0 === h || !0 === h.live && this.levelLastLoaded !== n) return void (this.state = T.WAITING_LEVEL);
                                var f = this.fragPrevious;
                                if (!h.live && f && !f.backtracked && f.sn === h.endSN && !d.nextStart) {
                                    if (Math.min(r.duration, f.start + f.duration) - Math.max(d.end, f.start) <= Math.max(.2, f.duration)) {
                                        var p = {};
                                        return this.altAudio && (p.type = "video"), this.hls.trigger(u.a.BUFFER_EOS, p), void (this.state = T.ENDED)
                                    }
                                } this._fetchPayloadOrEos(i, d, h)
                            }
                        }
                    }
                }, e.prototype._fetchPayloadOrEos = function (t, e, r) {
                    var i = this.fragPrevious, n = this.level, a = r.fragments, o = a.length;
                    if (0 !== o) {
                        var s = a[0].start, l = a[o - 1].start + a[o - 1].duration, u = e.end, d = void 0;
                        if (r.initSegment && !r.initSegment.data) d = r.initSegment;
                        else if (r.live) {
                            var c = this.config.initialLiveManifestSize; if (o < c) return void g.b.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + c);
                            if (null === (d = this._ensureFragmentAtLivePoint(r, u, s, l, i, a, o))) return
                        } else u < s && (d = a[0]);
                        d || (d = this._findFragment(s, i, o, a, u, l, r)), d && (d.encrypted ? (g.b.log("Loading key for " + d.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + n), this._loadKey(d)) : (g.b.log("Loading " + d.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + n + ", currentTime:" + t.toFixed(3) + ",bufferEnd:" + u.toFixed(3)), this._loadFragment(d)))
                    }
                }, e.prototype._ensureFragmentAtLivePoint = function (t, e, r, i, n, a, s) {
                    var l = this.hls.config, u = this.media, d = void 0, c = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * t.targetduration;
                    if (e < Math.max(r - l.maxFragLookUpTolerance, i - c)) {
                        var h = this.liveSyncPosition = this.computeLivePosition(r, t);
                        g.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), e = h, u && u.readyState && u.duration > h && (u.currentTime = h), this.nextLoadPosition = h
                    } if (t.PTSKnown && e > i && u && u.readyState) return null;
                    if (this.startFragRequested && !t.PTSKnown) {
                        if (n)
                            if (t.programDateTime) d = Object(b.b)(a, n.endPdt + 1);
                            else {
                                var f = n.sn + 1;
                                if (f >= t.startSN && f <= t.endSN) {
                                    var p = a[f - t.startSN];
                                    n.cc === p.cc && (d = p, g.b.log("live playlist, switching playlist, load frag with next SN: " + d.sn))
                                } d || (d = o.a.search(a, function (t) {
                                    return n.cc - t.cc
                                })) && g.b.log("live playlist, switching playlist, load frag with same CC: " + d.sn)
                            } d || (d = a[Math.min(s - 1, Math.round(s / 2))], g.b.log("live playlist, switching playlist, unknown, load middle frag : " + d.sn))
                    }
                    return d
                }, e.prototype._findFragment = function (t, e, r, i, n, a, o) {
                    var s = this.hls.config, l = void 0, u = void 0;
                    if (n < a ? o.programDateTime ? (u = Object(b.b)(i, Object(b.a)(t, n, o))) && !Object(b.d)(n, s.maxFragLookUpTolerance, u) || (g.b.warn("Frag found by PDT search did not fit within tolerance; falling back to finding by SN"), u = function () {
                        return Object(b.c)(e, i, n, a, s.maxFragLookUpTolerance)
                    }()) : u = Object(b.c)(e, i, n, a, s.maxFragLookUpTolerance) : u = i[r - 1], u) {
                        l = u;
                        var d = l.sn - o.startSN, c = e && l.level === e.level, h = i[d - 1], f = i[d + 1];
                        if (e && l.sn === e.sn)
                            if (c && !l.backtracked)
                                if (l.sn < o.endSN) {
                                    var p = e.deltaPTS;
                                    p && p > s.maxBufferHole && e.dropped && d ? (l = h, g.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (l = f, g.b.log("SN just loaded, load next one: " + l.sn))
                                } else l = null;
                            else l.backtracked && (f && f.backtracked ? (g.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + l.sn + ". Loading fragment " + f.sn), l = f) : (g.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), l.dropped = 0, h ? (l = h, l.backtracked = !0) : d && (l = null)))
                    }
                    return l
                }, e.prototype._loadKey = function (t) {
                    this.state = T.KEY_LOADING, this.hls.trigger(u.a.KEY_LOADING, { frag: t })
                }, e.prototype._loadFragment = function (t) {
                    var e = this.fragmentTracker.getState(t);
                    this.fragCurrent = t, this.startFragRequested = !0, isNaN(t.sn) || t.bitrateTest || (this.nextLoadPosition = t.start + t.duration), t.backtracked || e === d.a.NOT_LOADED || e === d.a.PARTIAL ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(u.a.FRAG_LOADING, { frag: t }), this.demuxer || (this.demuxer = new l.a(this.hls, "main")), this.state = T.FRAG_LOADING) : e === d.a.APPENDING && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
                }, e.prototype.getBufferedFrag = function (t) {
                    return this.fragmentTracker.getBufferedFrag(t, h.a.LevelType.MAIN)
                }, e.prototype.followingBufferedFrag = function (t) {
                    return t ? this.getBufferedFrag(t.endPTS + .5) : null
                }, e.prototype._checkFragmentChanged = function () {
                    var t = void 0, e = void 0, r = this.media;
                    if (r && r.readyState && !1 === r.seeking && (e = r.currentTime, e > this.lastCurrentTime && (this.lastCurrentTime = e), s.a.isBuffered(r, e) ? t = this.getBufferedFrag(e) : s.a.isBuffered(r, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
                        var i = t;
                        if (i !== this.fragPlaying) {
                            this.hls.trigger(u.a.FRAG_CHANGED, { frag: i });
                            var n = i.level;
                            this.fragPlaying && this.fragPlaying.level === n || this.hls.trigger(u.a.LEVEL_SWITCHED, { level: n }), this.fragPlaying = i
                        }
                    }
                }, e.prototype.immediateLevelSwitch = function () {
                    if (g.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
                        this.immediateSwitch = !0;
                        var t = this.media, e = void 0;
                        t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                    }
                    var r = this.fragCurrent; r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                }, e.prototype.immediateLevelSwitchEnd = function () {
                    var t = this.media;
                    t && t.buffered.length && (this.immediateSwitch = !1, s.a.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
                }, e.prototype.nextLevelSwitch = function () {
                    var t = this.media;
                    if (t && t.readyState) {
                        var e = void 0, r = void 0, i = void 0;
                        if (r = this.getBufferedFrag(t.currentTime), r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), t.paused) e = 0;
                        else {
                            var n = this.hls.nextLoadLevel, a = this.levels[n], o = this.fragLastKbps; e = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
                        } if ((i = this.getBufferedFrag(t.currentTime + e)) && (i = this.followingBufferedFrag(i))) {
                            var s = this.fragCurrent;
                            s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
                        }
                    }
                }, e.prototype.flushMainBuffer = function (t, e) {
                    this.state = T.BUFFER_FLUSHING; var r = { startOffset: t, endOffset: e };
                    this.altAudio && (r.type = "video"), this.hls.trigger(u.a.BUFFER_FLUSHING, r)
                }, e.prototype.onMediaAttached = function (t) {
                    var e = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended); var r = this.config; this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition)
                }, e.prototype.onMediaDetaching = function () {
                    var t = this.media; t && t.ended && (g.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                    var e = this.levels; e && e.forEach(function (t) {
                        t.details && t.details.fragments.forEach(function (t) {
                            t.backtracked = void 0
                        })
                    }), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                }, e.prototype.onMediaSeeking = function () {
                    var t = this.media, e = t ? t.currentTime : void 0, r = this.config; isNaN(e) || g.b.log("media seeking to " + e.toFixed(3));
                    var i = this.mediaBuffer ? this.mediaBuffer : t, n = s.a.bufferInfo(i, e, this.config.maxBufferHole);
                    if (this.state === T.FRAG_LOADING) {
                        var a = this.fragCurrent;
                        if (0 === n.len && a) {
                            var o = r.maxFragLookUpTolerance, l = a.start - o, u = a.start + a.duration + o; e < l || e > u ? (a.loader && (g.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = T.IDLE) : g.b.log("seeking outside of buffer but within currently loaded fragment range")
                        }
                    } else this.state === T.ENDED && (0 === n.len && (this.fragPrevious = 0), this.state = T.IDLE);
                    t && (this.lastCurrentTime = e), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = e), this.tick()
                }, e.prototype.onMediaSeeked = function () {
                    var t = this.media, e = t ? t.currentTime : void 0;
                    isNaN(e) || g.b.log("media seeked to " + e.toFixed(3)), this.tick()
                }, e.prototype.onMediaEnded = function () {
                    g.b.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onManifestLoading = function () {
                    g.b.log("trigger BUFFER_RESET"), this.hls.trigger(u.a.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onManifestParsed = function (t) {
                    var e = !1, r = !1, i = void 0; t.levels.forEach(function (t) {
                        (i = t.audioCodec) && (-1 !== i.indexOf("mp4a.40.2") && (e = !0), -1 !== i.indexOf("mp4a.40.5") && (r = !0))
                    }), this.audioCodecSwitch = e && r, this.audioCodecSwitch && g.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
                    var n = this.config; (n.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(n.startPosition)
                }, e.prototype.onLevelLoaded = function (t) {
                    var e = t.details, r = t.level, i = this.levels[this.levelLastLoaded], n = this.levels[r], a = e.totalduration, o = 0;
                    if (g.b.log("level " + r + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a), e.live) {
                        var s = n.details;
                        s && e.fragments.length > 0 ? (f.a(s, e), o = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), e.PTSKnown && !isNaN(o) ? g.b.log("live playlist sliding:" + o.toFixed(3)) : (g.b.log("live playlist - outdated PTS, unknown sliding"), Object(y.a)(this.fragPrevious, i, e))) : (g.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, Object(y.a)(this.fragPrevious, i, e))
                    }
                    else e.PTSKnown = !1;
                    if (n.details = e, this.levelLastLoaded = r, this.hls.trigger(u.a.LEVEL_UPDATED, { details: e, level: r }), !1 === this.startFragRequested) {
                        if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                            var l = e.startTimeOffset; isNaN(l) ? e.live ? (this.startPosition = this.computeLivePosition(o, e), g.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (l < 0 && (g.b.log("negative start time offset " + l + ", count from end of last fragment"), l = o + a + l), g.b.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l), this.lastCurrentTime = this.startPosition
                        } this.nextLoadPosition = this.startPosition
                    } this.state === T.WAITING_LEVEL && (this.state = T.IDLE), this.tick()
                }, e.prototype.onKeyLoaded = function () {
                    this.state === T.KEY_LOADING && (this.state = T.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function (t) {
                    var e = this.fragCurrent, r = t.frag;
                    if (this.state === T.FRAG_LOADING && e && "main" === r.type && r.level === e.level && r.sn === e.sn) {
                        var i = t.stats, n = this.levels[e.level], a = n.details;
                        if (g.b.log("Loaded  " + e.sn + " of [" + a.startSN + " ," + a.endSN + "],level " + e.level), this.bitrateTest = !1, this.stats = i, !0 === r.bitrateTest && this.hls.nextLoadLevel)
                            this.state = T.IDLE, this.startFragRequested = !1, i.tparsed = i.tbuffered = performance.now(), this.hls.trigger(u.a.FRAG_BUFFERED, { stats: i, frag: e, id: "main" }), this.tick();
                        else if ("initSegment" === r.sn)
                            this.state = T.IDLE, i.tparsed = i.tbuffered = performance.now(), a.initSegment.data = t.payload, this.hls.trigger(u.a.FRAG_BUFFERED, { stats: i, frag: e, id: "main" }), this.tick();
                        else {
                            this.state = T.PARSING;
                            var o = a.totalduration, s = e.level, d = e.sn, c = this.config.defaultAudioCodec || n.audioCodec; this.audioCodecSwap && (g.b.log("swapping playlist audio codec"), void 0 === c && (c = this.lastAudioCodec), c && (c = -1 !== c.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, g.b.log("Parsing " + d + " of [" + a.startSN + " ," + a.endSN + "],level " + s + ", cc " + e.cc);
                            var h = this.demuxer;
                            h || (h = this.demuxer = new l.a(this.hls, "main"));
                            var f = this.media, p = f && f.seeking, v = !p && (a.PTSKnown || !a.live), y = a.initSegment ? a.initSegment.data : [];
                            h.push(t.payload, y, c, n.videoCodec, e, o, v, void 0)
                        }
                    } this.fragLoadError = 0
                }, e.prototype.onFragParsingInitSegment = function (t) {
                    var e = this.fragCurrent, r = t.frag;
                    if (e && "main" === t.id && r.sn === e.sn && r.level === e.level && this.state === T.PARSING) {
                        var i = t.tracks, n = void 0, a = void 0;
                        if (i.audio && this.altAudio && delete i.audio, a = i.audio) {
                            var o = this.levels[this.level].audioCodec, s = navigator.userAgent.toLowerCase();
                            o && this.audioCodecSwap && (g.b.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== a.container && (o = "mp4a.40.2", g.b.log("Android: force audio codec to " + o)), a.levelCodec = o, a.id = t.id
                        } a = i.video, a && (a.levelCodec = this.levels[this.level].videoCodec, a.id = t.id), this.hls.trigger(u.a.BUFFER_CODECS, i);
                        for (n in i) {
                            a = i[n], g.b.log("main track:" + n + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                            var l = a.initSegment;
                            l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(u.a.BUFFER_APPENDING, { type: n, data: l, parent: "main", content: "initSegment" }))
                        } this.tick()
                    }
                }, e.prototype.onFragParsingData = function (t) {
                    var e = this, r = this.fragCurrent, i = t.frag;
                    if (r && "main" === t.id && i.sn === r.sn && i.level === r.level && ("audio" !== t.type || !this.altAudio) && this.state === T.PARSING) {
                        var n = this.levels[this.level], a = r;
                        if (isNaN(t.endPTS) && (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), !0 === t.hasAudio && a.addElementaryStream(c.a.ElementaryStreamTypes.AUDIO), !0 === t.hasVideo && a.addElementaryStream(c.a.ElementaryStreamTypes.VIDEO), g.b.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
                            if (a.dropped = t.dropped, a.dropped)
                                if (a.backtracked)
                                    g.b.warn("Already backtracked on this fragment, appending with the gap", a.sn);
                                else {
                                    var o = n.details;
                                    if (!o || a.sn !== o.startSN)
                                        return g.b.warn("missing video frame(s), backtracking fragment", a.sn), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = T.IDLE, this.fragPrevious = a, void this.tick();
                                    g.b.warn("missing video frame(s) on first frag, appending with gap", a.sn)
                                }
                            else a.backtracked = !1;
                        var s = f.b(n.details, a, t.startPTS, t.endPTS, t.startDTS, t.endDTS), l = this.hls;
                        l.trigger(u.a.LEVEL_PTS_UPDATED, { details: n.details, level: this.level, drift: s, type: t.type, start: t.startPTS, end: t.endPTS }), [t.data1, t.data2].forEach(function (r) {
                            r && r.length && e.state === T.PARSING && (e.appended = !0, e.pendingBuffering = !0, l.trigger(u.a.BUFFER_APPENDING, { type: t.type, data: r, parent: "main", content: "data" }))
                        }), this.tick()
                    }
                }, e.prototype.onFragParsed = function (t) {
                    var e = this.fragCurrent, r = t.frag;
                    e && "main" === t.id && r.sn === e.sn && r.level === e.level && this.state === T.PARSING && (this.stats.tparsed = performance.now(), this.state = T.PARSED, this._checkAppendedParsed())
                }, e.prototype.onAudioTrackSwitching = function (t) {
                    var e = !!t.url, r = t.id;
                    if (!e) {
                        if (this.mediaBuffer !== this.media) {
                            g.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                            var i = this.fragCurrent;
                            i.loader && (g.b.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = T.IDLE
                        } var n = this.hls; n.trigger(u.a.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), n.trigger(u.a.AUDIO_TRACK_SWITCHED, { id: r }), this.altAudio = !1
                    }
                }, e.prototype.onAudioTrackSwitched = function (t) {
                    var e = t.id, r = !!this.hls.audioTracks[e].url;
                    if (r) {
                        var i = this.videoBuffer;
                        i && this.mediaBuffer !== i && (g.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
                    } this.altAudio = r, this.tick()
                }, e.prototype.onBufferCreated = function (t) {
                    var e = t.tracks, r = void 0, i = void 0, n = !1;
                    for (var a in e) {
                        var o = e[a]; "main" === o.id ? (i = a, r = o, "video" === a && (this.videoBuffer = e[a].buffer)) : n = !0
                    } n && r ? (g.b.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                }, e.prototype.onBufferAppended = function (t) {
                    if ("main" === t.parent) {
                        var e = this.state; e !== T.PARSING && e !== T.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                    }
                }, e.prototype._checkAppendedParsed = function () {
                    if (!(this.state !== T.PARSED || this.appended && this.pendingBuffering)) {
                        var t = this.fragCurrent;
                        if (t) {
                            var e = this.mediaBuffer ? this.mediaBuffer : this.media; g.b.log("main buffered : " + p.a.toString(e.buffered)), this.fragPrevious = t;
                            var r = this.stats;
                            r.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(u.a.FRAG_BUFFERED, { stats: r, frag: t, id: "main" }), this.state = T.IDLE
                        } this.tick()
                    }
                }, e.prototype.onError = function (t) {
                    var e = t.frag || this.fragCurrent;
                    if (!e || "main" === e.type) {
                        var r = !!this.media && s.a.isBuffered(this.media, this.media.currentTime) && s.a.isBuffered(this.media, this.media.currentTime + .5);
                        switch (t.details) {
                            case v.a.FRAG_LOAD_ERROR:
                            case v.a.FRAG_LOAD_TIMEOUT:
                            case v.a.KEY_LOAD_ERROR:
                            case v.a.KEY_LOAD_TIMEOUT:
                                if (!t.fatal)
                                    if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                        var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                        g.b.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = T.FRAG_LOADING_WAITING_RETRY
                                    }
                                    else g.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = T.ERROR; break;

                            case v.a.LEVEL_LOAD_ERROR:
                            case v.a.LEVEL_LOAD_TIMEOUT: this.state !== T.ERROR && (t.fatal ? (this.state = T.ERROR, g.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== T.WAITING_LEVEL || (this.state = T.IDLE)); break;
                            case v.a.BUFFER_FULL_ERROR: "main" !== t.parent || this.state !== T.PARSING && this.state !== T.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = T.IDLE) : (g.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                        }
                    }
                }, e.prototype._reduceMaxBufferLength = function (t) {
                    var e = this.config;
                    return e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, g.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                }, e.prototype._checkBuffer = function () {
                    var t = this.config, e = this.media;
                    if (e && 0 !== e.readyState) {
                        var r = e.currentTime, i = this.mediaBuffer ? this.mediaBuffer : e, n = i.buffered;
                        if (!this.loadedmetadata && n.length) this.loadedmetadata = !0, this._seekToStartPos();
                        else if (this.immediateSwitch) this.immediateLevelSwitchEnd();
                        else {
                            var a = !(e.paused && e.readyState > 1 || e.ended || 0 === e.buffered.length), o = performance.now();
                            if (r !== this.lastCurrentTime) this.stallReported && (g.b.warn("playback not stuck anymore @" + r + ", after " + Math.round(o - this.stalled) + "ms"), this.stallReported = !1), this.stalled = null, this.nudgeRetry = 0;
                            else if (a) {
                                var l = o - this.stalled, u = s.a.bufferInfo(e, r, t.maxBufferHole);
                                if (!this.stalled) return void (this.stalled = o);
                                l >= 1e3 && this._reportStall(u.len), this._tryFixBufferStall(u, l)
                            }
                        }
                    }
                }, e.prototype.onFragLoadEmergencyAborted = function () {
                    this.state = T.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                }, e.prototype.onBufferFlushed = function () {
                    var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                    t && this.fragmentTracker.detectEvictedFragments(c.a.ElementaryStreamTypes.VIDEO, t.buffered), this.state = T.IDLE, this.fragPrevious = null
                }, e.prototype.swapAudioCodec = function () {
                    this.audioCodecSwap = !this.audioCodecSwap
                }, e.prototype.computeLivePosition = function (t, e) {
                    var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
                    return t + Math.max(0, e.totalduration - r)
                }, e.prototype._tryFixBufferStall = function (t, e) {
                    var r = this.config, i = this.media, n = i.currentTime, a = this.fragmentTracker.getPartialFragment(n); a && this._trySkipBufferHole(a), t.len > .5 && e > 1e3 * r.highBufferWatchdogPeriod && (this.stalled = null, this._tryNudgeBuffer())
                }, e.prototype._reportStall = function (t) {
                    var e = this.hls, r = this.media; this.stallReported || (this.stallReported = !0, g.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), e.trigger(u.a.ERROR, { type: v.b.MEDIA_ERROR, details: v.a.BUFFER_STALLED_ERROR, fatal: !1, buffer: t }))
                }, e.prototype._trySkipBufferHole = function (t) {
                    for (var e = this.hls, r = this.media, i = r.currentTime, n = 0, a = 0; a < r.buffered.length; a++) {
                        var o = r.buffered.start(a);
                        if (i >= n && i < o) return r.currentTime = Math.max(o, r.currentTime + .1), g.b.warn("skipping hole, adjusting currentTime from " + i + " to " + r.currentTime), this.stalled = null, void e.trigger(u.a.ERROR, {
                            type: v.b.MEDIA_ERROR, details: v.a.BUFFER_SEEK_OVER_HOLE, fatal: !1, reason: "fragment loaded with buffer holes, seeking from " + i + " to " + r.currentTime, frag: t
                        });
                        n = r.buffered.end(a)
                    }
                }, e.prototype._tryNudgeBuffer = function () {
                    var t = this.config, e = this.hls, r = this.media, i = r.currentTime, n = (this.nudgeRetry || 0) + 1;
                    if (this.nudgeRetry = n, n < t.nudgeMaxRetry) {
                        var a = i + n * t.nudgeOffset; g.b.log("adjust currentTime from " + i + " to " + a), r.currentTime = a, e.trigger(u.a.ERROR, { type: v.b.MEDIA_ERROR, details: v.a.BUFFER_NUDGE_ON_STALL, fatal: !1 })
                    }
                    else g.b.error("still stuck in high buffer @" + i + " after " + t.nudgeMaxRetry + ", raise fatal error"), e.trigger(u.a.ERROR, { type: v.b.MEDIA_ERROR, details: v.a.BUFFER_STALLED_ERROR, fatal: !0 })
                }, e.prototype._seekToStartPos = function () {
                    var t = this.media, e = t.currentTime, r = t.seeking ? e : this.startPosition; e !== r && (g.b.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + e + " "), t.currentTime = r)
                }, E(e, [{
                    key: "state", set: function (t) {
                        if (this.state !== t) {
                            var e = this.state; this._state = t, g.b.log("main stream:" + e + "->" + t), this.hls.trigger(u.a.STREAM_STATE_TRANSITION, { previousState: e, nextState: t })
                        }
                    }, get: function () {
                        return this._state
                    }
                }, {
                    key: "currentLevel",
                    get: function () {
                        var t = this.media;
                        if (t) {
                            var e = this.getBufferedFrag(t.currentTime);
                            if (e) return e.level
                        } return -1
                    }
                }, {
                    key: "nextBufferedFrag",
                    get: function () {
                        var t = this.media;
                        return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
                    }
                }, {
                    key: "nextLevel",
                    get: function () {
                        var t = this.nextBufferedFrag;
                        return t ? t.level : -1
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function () {
                        return this._liveSyncPosition
                    }, set: function (t) {
                        this._liveSyncPosition = t
                    }
                }]), e
            }(m.a);
        e.a = S
    }, function (t, e, r) {
        function i(t) {
            function e(i) {
                if (r[i]) return r[i].exports; var n = r[i] = { i: i, l: !1, exports: {} };
                return t[i].call(n.exports, n, n.exports, e), n.l = !0, n.exports
            }
            var r = {};
            e.m = t,
                e.c = r,
                e.i = function (t) { return t },
                e.d = function (t, r, i) { e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: i }) },
                e.n = function (t) {
                    var r = t && t.__esModule ? function () { return t.default } : function () { return t };
                    return e.d(r, "a", r), r
                },
                e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) },
                e.p = "/", e.oe = function (t) { throw console.error(t), t };
            var i = e(e.s = ENTRY_MODULE); return i.default || i
        }
        function n(t) { return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&") }
        function a(t, e, i) {
            var a = {};
            a[i] = [];
            var o = e.toString(), s = o.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/); if (!s) return a;
            for (var d, c = s[1], h = new RegExp("(\\\\n|\\W)" + n(c) + u, "g"); d = h.exec(o);)
                "dll-reference" !== d[3] && a[i].push(d[3]);
            for (h = new RegExp("\\(" + n(c) + '\\("(dll-reference\\s(' + l + '))"\\)\\)' + u, "g"); d = h.exec(o);)
                t[d[2]] || (a[i].push(d[1]), t[d[2]] = r(d[1]).m), a[d[2]] = a[d[2]] || [], a[d[2]].push(d[4]);
            return a
        }
        function o(t) {
            return Object.keys(t).reduce(function (e, r) {
                return e || t[r].length > 0
            }, !1)
        }
        function s(t, e) {
            for (var r = { main: [e] }, i = { main: [] }, n = { main: {} }; o(r);)
                for (var s = Object.keys(r), l = 0; l < s.length; l++) {
                    var u = s[l], d = r[u], c = d.pop();
                    if (n[u] = n[u] || {}, !n[u][c] && t[u][c]) {
                        n[u][c] = !0, i[u] = i[u] || [], i[u].push(c);
                        for (var h = a(t, t[u][c], u), f = Object.keys(h), p = 0; p < f.length; p++)
                            r[f[p]] = r[f[p]] || [], r[f[p]] = r[f[p]].concat(h[f[p]])
                    }
                }
            return i
        } var l = "[\\.|\\-|\\+|\\w|/|@]+", u = "\\((/\\*.*?\\*/)?s?.*?(" + l + ").*?\\)";
        t.exports = function (t, e) {
            e = e || {};
            var n = { main: r.m }, a = e.all ? { main: Object.keys(n) } : s(n, t), o = ""; Object.keys(a).filter(function (t) {
                return "main" !== t
            }).forEach(function (t) {
                for (var e = 0; a[t][e];)e++; a[t].push(e), n[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", o = o + "var " + t + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a[t].map(function (e) {
                    return JSON.stringify(e) + ": " + n[t][e].toString()
                }).join(",") + "});\n"
            }), o = o + "(" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.main.map(function (t) {
                return JSON.stringify(t) + ": " + n.main[t].toString()
            }).join(",") + "})(self);";
            var l = new window.Blob([o], { type: "text/javascript" });
            if (e.bare) return l;
            var u = window.URL || window.webkitURL || window.mozURL || window.msURL, d = u.createObjectURL(l), c = new window.Worker(d);
            return c.objectURL = d, c
        }
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = function () {
            function t(e, r) {
                i(this, t), this.subtle = e, this.aesIV = r
            }
            return t.prototype.decrypt = function (t, e) {
                return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, e, t)
            }, t
        }();
        e.a = n
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = function () {
            function t(e, r) {
                i(this, t), this.subtle = e, this.key = r
            }
            return t.prototype.expandKey = function () {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"])
            }, t
        }(); e.a = n
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } function n(t) {
            var e = t.byteLength, r = e && new DataView(t).getUint8(e - 1);
            return r ? t.slice(0, e - r) : t
        } var a = function () {
            function t() {
                i(this, t), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
            }
            return t.prototype.uint8ArrayToUint32Array_ = function (t) {
                for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++)
                    r[i] = e.getUint32(4 * i); return r
            }, t.prototype.initTable = function () {
                var t = this.sBox, e = this.invSBox, r = this.subMix, i = r[0], n = r[1], a = r[2], o = r[3], s = this.invSubMix, l = s[0], u = s[1], d = s[2], c = s[3], h = new Uint32Array(256), f = 0, p = 0, v = 0;
                for (v = 0; v < 256; v++)
                    h[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                for (v = 0; v < 256; v++) {
                    var g = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4; g = g >>> 8 ^ 255 & g ^ 99, t[f] = g, e[g] = f;
                    var y = h[f], m = h[y], b = h[m], E = 257 * h[g] ^ 16843008 * g;
                    i[f] = E << 24 | E >>> 8, n[f] = E << 16 | E >>> 16, a[f] = E << 8 | E >>> 24, o[f] = E, E = 16843009 * b ^ 65537 * m ^ 257 * y ^ 16843008 * f, l[g] = E << 24 | E >>> 8, u[g] = E << 16 | E >>> 16, d[g] = E << 8 | E >>> 24, c[g] = E, f ? (f = y ^ h[h[h[b ^ y]]], p ^= h[h[p]]) : f = p = 1
                }
            }, t.prototype.expandKey = function (t) {
                for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0;
                    i < e.length && r;)r = e[i] === this.key[i], i++;
                if (!r) {
                    this.key = e;
                    var n = this.keySize = e.length;
                    if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
                    var a = this.ksRows = 4 * (n + 6 + 1), o = void 0, s = void 0, l = this.keySchedule = new Uint32Array(a), u = this.invKeySchedule = new Uint32Array(a), d = this.sBox, c = this.rcon, h = this.invSubMix, f = h[0], p = h[1], v = h[2], g = h[3], y = void 0, m = void 0;
                    for (o = 0; o < a; o++)o < n ? y = l[o] = e[o] : (m = y, o % n == 0 ? (m = m << 8 | m >>> 24, m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m], m ^= c[o / n | 0] << 24) : n > 6 && o % n == 4 && (m = d[m >>> 24] << 24 | d[m >>> 16 & 255] << 16 | d[m >>> 8 & 255] << 8 | d[255 & m]), l[o] = y = (l[o - n] ^ m) >>> 0);
                    for (s = 0; s < a; s++)o = a - s, m = 3 & s ? l[o] : l[o - 4], u[s] = s < 4 || o <= 4 ? m : f[d[m >>> 24]] ^ p[d[m >>> 16 & 255]] ^ v[d[m >>> 8 & 255]] ^ g[d[255 & m]], u[s] = u[s] >>> 0
                }
            }, t.prototype.networkToHostOrderSwap = function (t) {
                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
            }, t.prototype.decrypt = function (t, e, r, i) {
                for (var a = this.keySize + 6, o = this.invKeySchedule, s = this.invSBox, l = this.invSubMix, u = l[0], d = l[1], c = l[2], h = l[3], f = this.uint8ArrayToUint32Array_(r), p = f[0], v = f[1], g = f[2], y = f[3], m = new Int32Array(t), b = new Int32Array(m.length), E = void 0, T = void 0, S = void 0, _ = void 0, A = void 0, R = void 0, w = void 0, L = void 0, D = void 0, I = void 0, k = void 0, O = void 0, C = void 0, P = void 0, x = this.networkToHostOrderSwap; e < m.length;) {
                    for (D = x(m[e]), I = x(m[e + 1]), k = x(m[e + 2]), O = x(m[e + 3]), A = D ^ o[0], R = O ^ o[1], w = k ^ o[2], L = I ^ o[3], C = 4, P = 1; P < a; P++)
                        E = u[A >>> 24] ^ d[R >> 16 & 255] ^ c[w >> 8 & 255] ^ h[255 & L] ^ o[C], T = u[R >>> 24] ^ d[w >> 16 & 255] ^ c[L >> 8 & 255] ^ h[255 & A] ^ o[C + 1], S = u[w >>> 24] ^ d[L >> 16 & 255] ^ c[A >> 8 & 255] ^ h[255 & R] ^ o[C + 2], _ = u[L >>> 24] ^ d[A >> 16 & 255] ^ c[R >> 8 & 255] ^ h[255 & w] ^ o[C + 3], A = E, R = T, w = S, L = _, C += 4; E = s[A >>> 24] << 24 ^ s[R >> 16 & 255] << 16 ^ s[w >> 8 & 255] << 8 ^ s[255 & L] ^ o[C], T = s[R >>> 24] << 24 ^ s[w >> 16 & 255] << 16 ^ s[L >> 8 & 255] << 8 ^ s[255 & A] ^ o[C + 1], S = s[w >>> 24] << 24 ^ s[L >> 16 & 255] << 16 ^ s[A >> 8 & 255] << 8 ^ s[255 & R] ^ o[C + 2], _ = s[L >>> 24] << 24 ^ s[A >> 16 & 255] << 16 ^ s[R >> 8 & 255] << 8 ^ s[255 & w] ^ o[C + 3], C += 3, b[e] = x(E ^ p), b[e + 1] = x(_ ^ v), b[e + 2] = x(S ^ g), b[e + 3] = x(T ^ y), p = D, v = I, g = k, y = O, e += 4
                } return i ? n(b.buffer) : b.buffer
            }, t.prototype.destroy = function () {
                this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
            }, t
        }();
        e.a = a
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(20), a = r(0), o = r(6), s = function () {
            function t(e, r, n) {
                i(this, t), this.observer = e, this.config = n, this.remuxer = r
            }
            return t.prototype.resetInitSegment = function (t, e, r, i) {
                this._audioTrack = {
                    container: "audio/adts", type: "audio", id: 0, sequenceNumber: 0, isAAC: !0, samples: [], len: 0, manifestCodec: e, duration: i, inputTimeScale: 9e4
                }
            }, t.prototype.resetTimeStamp = function () { }, t.probe = function (t) {
                if (!t) return !1;
                for (var e = o.a.getID3Data(t, 0) || [], r = e.length, i = t.length; r < i; r++)
                    if (n.e(t, r)) return a.b.log("ADTS sync word found !"), !0;
                return !1
            }, t.prototype.append = function (t, e, r, i) {
                for (var s = this._audioTrack, l = o.a.getID3Data(t, 0) || [], u = o.a.getTimeStamp(l), d = u ? 90 * u : 9e4 * e, c = 0, h = d, f = t.length, p = l.length, v = [{ pts: h, dts: h, data: l }]; p < f - 1;)
                    if (n.d(t, p) && p + 5 < f) {
                        n.c(s, this.observer, t, p, s.manifestCodec);
                        var g = n.a(s, t, p, d, c);
                        if (!g) {
                            a.b.log("Unable to parse AAC frame"); break
                        } p += g.length, h = g.sample.pts, c++
                    } else o.a.isHeader(t, p) ? (l = o.a.getID3Data(t, p), v.push({ pts: h, dts: h, data: l }), p += l.length) : p++;
                this.remuxer.remux(s, { samples: [] }, { samples: v, inputTimeScale: 9e4 }, { samples: [] }, e, r, i)
            }, t.prototype.destroy = function () { }, t
        }();
        e.a = s
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            try {
                var r = (new Date).valueOf(), i = new h.ModeOfOperation.ecb(e), n = t;
                if (t.length % 16 > 0) {
                    var a = 16 * parseInt(t.length / 16);
                    n = n.slice(0, a), n = i.decrypt(n), t.set(n, 0);
                    var o = (new Date).valueOf();
                    return d.b.log("parse pes extra time:" + (o - r)), t
                } n = t, n = i.decrypt(t);
                var o = (new Date).valueOf();
                return d.b.log("parse pes extra time:" + (o - r)), n
            } catch (e) {
                return t
            }
        } var a = r(20), o = r(21), s = r(1), l = r(39), u = r(40), d = r(0), c = r(2), h = r(41), f = null, p = "", v = { video: 1, audio: 2, id3: 3, text: 4 }, g = function () {
            function t(e, r, a, o) {
                i(this, t), this.observer = e, this.config = a, this.typeSupported = o, this.remuxer = r, this.sampleAes = null, f = n, p = a._sce_dlgtqredxx
            }
            return t.prototype.setDecryptData = function (t) {
                null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new u.a(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
            }, t.probe = function (e) {
                var r = t._syncOffset(e);
                return !(r < 0) && (r && d.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
            }, t._syncOffset = function (t) {
                for (var e = Math.min(1e3, t.length - 564), r = 0; r < e;) {
                    if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                    r++
                } return -1
            }, t.createTrack = function (t, e) {
                return { container: "video" === t || "audio" === t ? "video/mp2t" : void 0, type: t, id: v[t], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], len: 0, dropped: "video" === t ? 0 : void 0, isAAC: "audio" === t || void 0, duration: "audio" === t ? e : void 0 }
            }, t.prototype.resetInitSegment = function (e, r, i, n) {
                this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", n), this._audioTrack = t.createTrack("audio", n), this._id3Track = t.createTrack("id3", n), this._txtTrack = t.createTrack("text", n), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = n
            }, t.prototype.resetTimeStamp = function () { }, t.prototype.append = function (e, r, i, n) {
                var a = void 0, o = e.length, l = void 0, u = void 0, h = void 0, f = void 0, p = !1; this.contiguous = i; var v = this.pmtParsed, g = this._avcTrack, y = this._audioTrack, m = this._id3Track, b = g.pid, E = y.pid, T = m.pid, S = this._pmtId, _ = g.pesData, A = y.pesData, R = m.pesData, w = this._parsePAT, L = this._parsePMT, D = this._parsePES, I = this._parseAVCPES.bind(this), k = this._parseAACPES.bind(this), O = this._parseMPEGPES.bind(this), C = this._parseID3PES.bind(this), P = t._syncOffset(e);
                for (o -= (o + P) % 188, a = P; a < o; a += 188)if (71 === e[a]) {
                    if (l = !!(64 & e[a + 1]), u = ((31 & e[a + 1]) << 8) + e[a + 2], (48 & e[a + 3]) >> 4 > 1) {
                        if ((h = a + 5 + e[a + 4]) === a + 188) continue
                    }
                    else h = a + 4;
                    switch (u) {
                        case b: l && (_ && (f = D(_)) && void 0 !== f.pts && I(f, !1), _ = { data: [], size: 0 }), _ && (_.data.push(e.subarray(h, a + 188)), _.size += a + 188 - h); break;
                        case E: l && (A && (f = D(A)) && void 0 !== f.pts && (y.isAAC ? k(f) : O(f)), A = { data: [], size: 0 }), A && (A.data.push(e.subarray(h, a + 188)), A.size += a + 188 - h); break;
                        case T: l && (R && (f = D(R)) && void 0 !== f.pts && C(f), R = { data: [], size: 0 }), R && (R.data.push(e.subarray(h, a + 188)), R.size += a + 188 - h); break;
                        case 0: l && (h += e[h] + 1), S = this._pmtId = w(e, h); break;
                        case S: l && (h += e[h] + 1);
                            var x = L(e, h, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                            b = x.avc, b > 0 && (g.pid = b), E = x.audio, E > 0 && (y.pid = E, y.isAAC = x.isAAC), T = x.id3, T > 0 && (m.pid = T), p && !v && (d.b.log("reparse from beginning"), p = !1, a = P - 188), v = this.pmtParsed = !0; break;
                        case 17: case 8191: break; default: p = !0
                    }
                } else this.observer.trigger(s.a.ERROR, { type: c.b.MEDIA_ERROR, details: c.a.FRAG_PARSING_ERROR, fatal: !1, reason: "TS packet did not start with 0x47" });
                _ && (f = D(_)) && void 0 !== f.pts ? (I(f, !0), g.pesData = null) : g.pesData = _, A && (f = D(A)) && void 0 !== f.pts ? (y.isAAC ? k(f) : O(f), y.pesData = null) : (A && A.size && d.b.log("last AAC PES packet truncated,might overlap between fragments"), y.pesData = A), R && (f = D(R)) && void 0 !== f.pts ? (C(f), m.pesData = null) : m.pesData = R, null == this.sampleAes ? this.remuxer.remux(y, g, m, this._txtTrack, r, i, n) : this.decryptAndRemux(y, g, m, this._txtTrack, r, i, n)
            }, t.prototype.decryptAndRemux = function (t, e, r, i, n, a, o) {
                if (t.samples && t.isAAC) {
                    var s = this;
                    this.sampleAes.decryptAacSamples(t.samples, 0, function () {
                        s.decryptAndRemuxAvc(t, e, r, i, n, a, o)
                    })
                }
                else this.decryptAndRemuxAvc(t, e, r, i, n, a, o)
            }, t.prototype.decryptAndRemuxAvc = function (t, e, r, i, n, a, o) {
                if (e.samples) {
                    var s = this;
                    this.sampleAes.decryptAvcSamples(e.samples, 0, 0, function () {
                        s.remuxer.remux(t, e, r, i, n, a, o)
                    })
                }
                else this.remuxer.remux(t, e, r, i, n, a, o)
            }, t.prototype.destroy = function () {
                this._initPTS = this._initDTS = void 0, this._duration = 0
            }, t.prototype._parsePAT = function (t, e) {
                return (31 & t[e + 10]) << 8 | t[e + 11]
            }, t.prototype._parsePMT = function (t, e, r, i) {
                var n = void 0, a = void 0, o = void 0, s = void 0, l = { audio: -1, avc: -1, id3: -1, isAAC: !0 };
                for (n = (15 & t[e + 1]) << 8 | t[e + 2], a = e + 3 + n - 4, o = (15 & t[e + 10]) << 8 | t[e + 11], e += 12 + o; e < a;) {
                    switch (s = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
                        case 207: if (!i) { d.b.log("unkown stream type:" + t[e]); break }
                        case 15: -1 === l.audio && (l.audio = s); break;
                        case 21: -1 === l.id3 && (l.id3 = s); break;
                        case 219: if (!i) {
                            d.b.log("unkown stream type:" + t[e]); break
                        }
                        case 27: -1 === l.avc && (l.avc = s); break;
                        case 3: case 4: r ? -1 === l.audio && (l.audio = s, l.isAAC = !1) : d.b.log("MPEG audio found, not supported in this browser for now"); break;
                        case 36: d.b.warn("HEVC stream type found, not supported for now"); break;
                        default: d.b.log("unkown stream type:" + t[e])
                    }e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
                } return l
            }, t.prototype._parsePES = function (t) {
                var e = 0, r = void 0, i = void 0, n = void 0, a = void 0, o = void 0, s = void 0, l = void 0, u = void 0, c = t.data;
                if (!t || 0 === t.size) return null;
                for (; c[0].length < 19 && c.length > 1;) {
                    var h = new Uint8Array(c[0].length + c[1].length);
                    h.set(c[0]), h.set(c[1], c[0].length), c[0] = h, c.splice(1, 1)
                }
                if (r = c[0], 1 === (r[0] << 16) + (r[1] << 8) + r[2]) {
                    if ((n = (r[4] << 8) + r[5]) && n > t.size - 6) return null;
                    i = r[7], 192 & i && (s = 536870912 * (14 & r[9]) + 4194304 * (255 & r[10]) + 16384 * (254 & r[11]) + 128 * (255 & r[12]) + (254 & r[13]) / 2, s > 4294967295 && (s -= 8589934592), 64 & i ? (l = 536870912 * (14 & r[14]) + 4194304 * (255 & r[15]) + 16384 * (254 & r[16]) + 128 * (255 & r[17]) + (254 & r[18]) / 2, l > 4294967295 && (l -= 8589934592), s - l > 54e5 && (d.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"), s = l)) : l = s), a = r[8], u = a + 9, t.size -= u, o = new Uint8Array(t.size);
                    try {
                        for (var v = 0, g = c.length; v < g; v++) {
                            r = c[v];
                            var y = r.byteLength;
                            if (u) {
                                if (u > y) {
                                    u -= y; continue
                                }
                                r = r.subarray(u), y -= u, u = 0
                            }
                            o.set(r, e), e += y
                        }
                    }
                    catch (t) {
                        console.log(t)
                    }
                    return n && (n -= a + 3), p && f && (o = f(o, p)), { data: o, pts: s, dts: l, len: n }
                }
                return null
            }, t.prototype.pushAccesUnit = function (t, e) {
                if (t.units.length && t.frame) {
                    var r = e.samples, i = r.length;
                    !this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (i || this.contiguous) ? (t.id = i, r.push(t)) : e.dropped++
                }
                t.debug.length && d.b.log(t.pts + "/" + t.dts + ":" + t.debug)
            }, t.prototype._parseAVCPES = function (t, e) {
                var r = this, i = this._avcTrack, n = this._parseAVCNALu(t.data), a = void 0, o = this.avcSample, s = void 0, u = !1, d = void 0, c = this.pushAccesUnit.bind(this), h = function (t, e, r, i) {
                    return { key: t, pts: e, dts: r, units: [], debug: i }
                };
                t.data = null, o && n.length && !i.audFound && (c(o, i), o = this.avcSample = h(!1, t.pts, t.dts, "")), n.forEach(function (e) {
                    switch (e.type) {
                        case 1: s = !0, o || (o = r.avcSample = h(!0, t.pts, t.dts, "")), o.frame = !0; var n = e.data; if (u && n.length > 4) { var f = new l.a(n).readSliceType(); 2 !== f && 4 !== f && 7 !== f && 9 !== f || (o.key = !0) } break;
                        case 5: s = !0, o || (o = r.avcSample = h(!0, t.pts, t.dts, "")), o.key = !0, o.frame = !0; break;
                        case 6:
                            s = !0, a = new l.a(r.discardEPB(e.data)), a.readUByte();
                            for (var p = 0, v = 0, g = !1, y = 0; !g && a.bytesAvailable > 1;) {
                                p = 0;
                                do {
                                    y = a.readUByte(), p += y
                                }
                                while (255 === y);
                                v = 0;
                                do {
                                    y = a.readUByte(), v += y
                                }
                                while (255 === y);
                                if (4 === p && 0 !== a.bytesAvailable) {
                                    g = !0;
                                    if (181 === a.readUByte()) {
                                        if (49 === a.readUShort()) {
                                            if (1195456820 === a.readUInt()) {
                                                if (3 === a.readUByte()) {
                                                    var m = a.readUByte(), b = a.readUByte(), E = 31 & m, T = [m, b];
                                                    for (d = 0; d < E; d++)T.push(a.readUByte()), T.push(a.readUByte()), T.push(a.readUByte());
                                                    r._insertSampleInOrder(r._txtTrack.samples, { type: 3, pts: t.pts, bytes: T })
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (v < a.bytesAvailable) for (d = 0; d < v; d++)a.readUByte()
                            } break;
                        case 7:
                            if (s = !0, u = !0, !i.sps) {
                                a = new l.a(e.data);
                                var S = a.readSPS();
                                i.width = S.width, i.height = S.height, i.pixelRatio = S.pixelRatio, i.sps = [e.data], i.duration = r._duration;
                                var _ = e.data.subarray(1, 4), A = "avc1.";
                                for (d = 0; d < 3; d++) {
                                    var R = _[d].toString(16);
                                    R.length < 2 && (R = "0" + R), A += R
                                } i.codec = A
                            }
                            break;
                        case 8: s = !0, i.pps || (i.pps = [e.data]); break;
                        case 9: s = !1, i.audFound = !0, o && c(o, i), o = r.avcSample = h(!1, t.pts, t.dts, ""); break;
                        case 12: s = !1; break;
                        default: s = !1, o && (o.debug += "unknown NAL " + e.type + " ")
                    }
                    if (o && s) {
                        o.units.push(e)
                    }
                }), e && o && (c(o, i), this.avcSample = null)
            }, t.prototype._insertSampleInOrder = function (t, e) {
                var r = t.length; if (r > 0) {
                    if (e.pts >= t[r - 1].pts) t.push(e);
                    else
                        for (var i = r - 1; i >= 0; i--)
                            if (e.pts < t[i].pts) {
                                t.splice(i, 0, e);
                                break
                            }
                }
                else t.push(e)
            }, t.prototype._getLastNalUnit = function () {
                var t = this.avcSample, e = void 0;
                if (!t || 0 === t.units.length) {
                    var r = this._avcTrack, i = r.samples; t = i[i.length - 1]
                } if (t) {
                    var n = t.units;
                    e = n[n.length - 1]
                } return e
            }, t.prototype._parseAVCNALu = function (t) {
                var e = 0, r = t.byteLength, i = void 0, n = void 0, a = this._avcTrack, o = a.naluState || 0, s = o, l = [], u = void 0, d = void 0, c = -1, h = void 0;
                for (-1 === o && (c = 0, h = 31 & t[0], o = 0, e = 1); e < r;)
                    if (i = t[e++], o)
                        if (1 !== o)
                            if (i)
                                if (1 === i) {
                                    if (c >= 0) u = { data: t.subarray(c, e - o - 1), type: h }, l.push(u);
                                    else {
                                        var f = this._getLastNalUnit();
                                        if (f && (s && e <= 4 - s && f.state && (f.data = f.data.subarray(0, f.data.byteLength - s)), (n = e - o - 1) > 0)) {
                                            var p = new Uint8Array(f.data.byteLength + n);
                                            p.set(f.data, 0), p.set(t.subarray(0, n), f.data.byteLength), f.data = p
                                        }
                                    } e < r ? (d = 31 & t[e], c = e, h = d, o = 0) : o = -1
                                } else o = 0; else o = 3;
                        else o = i ? 0 : 2;
                    else o = i ? 0 : 1;
                if (c >= 0 && o >= 0 && (u = { data: t.subarray(c, r), type: h, state: o }, l.push(u)), 0 === l.length) {
                    var v = this._getLastNalUnit();
                    if (v) {
                        var g = new Uint8Array(v.data.byteLength + t.byteLength);
                        g.set(v.data, 0), g.set(t, v.data.byteLength), v.data = g
                    }
                }
                return a.naluState = o, l
            }, t.prototype.discardEPB = function (t) {
                for (var e = t.byteLength, r = [], i = 1, n = void 0, a = void 0; i < e - 2;)0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
                if (0 === r.length) return t;
                n = e - r.length, a = new Uint8Array(n);
                var o = 0; for (i = 0; i < n; o++, i++)o === r[0] && (o++, r.shift()), a[i] = t[o];
                return a
            }, t.prototype._parseAACPES = function (t) {
                var e = this._audioTrack, r = t.data, i = t.pts, n = this.aacOverFlow, o = this.aacLastPTS, l = void 0, u = void 0, h = void 0, f = void 0, p = void 0;
                if (n) {
                    var v = new Uint8Array(n.byteLength + r.byteLength);
                    v.set(n, 0), v.set(r, n.byteLength), r = v
                }
                for (h = 0, p = r.length; h < p - 1 && !a.d(r, h); h++);
                if (h) {
                    var g = void 0, y = void 0;
                    if (h < p - 1 ? (g = "AAC PES did not start with ADTS header,offset:" + h, y = !1) : (g = "no ADTS header found in AAC PES", y = !0), d.b.warn("parsing error:" + g), this.observer.trigger(s.a.ERROR, { type: c.b.MEDIA_ERROR, details: c.a.FRAG_PARSING_ERROR, fatal: y, reason: g }), y) return
                }
                if (a.c(e, this.observer, r, h, this.audioCodec), u = 0, l = a.b(e.samplerate), n && o) {
                    var m = o + l;
                    Math.abs(m - i) > 1 && (d.b.log("AAC: align PTS for overlapping frames by " + Math.round((m - i) / 90)), i = m)
                }
                for (; h < p;)
                    if (a.d(r, h) && h + 5 < p) {
                        var b = a.a(e, r, h, i, u);
                        if (!b) break;
                        h += b.length, f = b.sample.pts, u++
                    }
                    else h++;
                n = h < p ? r.subarray(h, p) : null, this.aacOverFlow = n, this.aacLastPTS = f
            }, t.prototype._parseMPEGPES = function (t) {
                for (var e = t.data, r = e.length, i = 0, n = 0, a = t.pts; n < r;)
                    if (o.a.isHeader(e, n)) {
                        var s = o.a.appendFrame(this._audioTrack, e, n, a, i);
                        if (!s) break;
                        n += s.length, i++
                    } else n++
            }, t.prototype._parseID3PES = function (t) {
                this._id3Track.samples.push(t)
            }, t
        }();
        e.a = g
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } var n = r(0), a = function () {
            function t(e) {
                i(this, t), this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
            }
            return t.prototype.loadWord = function () {
                var t = this.data, e = this.bytesAvailable, r = t.byteLength - e, i = new Uint8Array(4), n = Math.min(4, e);
                if (0 === n) throw new Error("no bytes available");
                i.set(t.subarray(r, r + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
            }, t.prototype.skipBits = function (t) {
                var e = void 0; this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, e = t >> 3, t -= e >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
            }, t.prototype.readBits = function (t) {
                var e = Math.min(this.bitsAvailable, t), r = this.word >>> 32 - e; return t > 32 && n.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), e = t - e, e > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
            }, t.prototype.skipLZ = function () {
                var t = void 0;
                for (t = 0; t < this.bitsAvailable; ++t)
                    if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                return this.loadWord(), t + this.skipLZ()
            }, t.prototype.skipUEG = function () {
                this.skipBits(1 + this.skipLZ())
            }, t.prototype.skipEG = function () {
                this.skipBits(1 + this.skipLZ())
            }, t.prototype.readUEG = function () {
                var t = this.skipLZ();
                return this.readBits(t + 1) - 1
            }, t.prototype.readEG = function () {
                var t = this.readUEG();
                return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
            }, t.prototype.readBoolean = function () {
                return 1 === this.readBits(1)
            }, t.prototype.readUByte = function () {
                return this.readBits(8)
            }, t.prototype.readUShort = function () {
                return this.readBits(16)
            }, t.prototype.readUInt = function () {
                return this.readBits(32)
            }, t.prototype.skipScalingList = function (t) {
                var e = 8, r = 8, i = void 0, n = void 0;
                for (i = 0; i < t; i++)0 !== r && (n = this.readEG(), r = (e + n + 256) % 256), e = 0 === r ? e : r
            }, t.prototype.readSPS = function () {
                var t = 0, e = 0, r = 0, i = 0, n = void 0, a = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = void 0, c = this.readUByte.bind(this), h = this.readBits.bind(this), f = this.readUEG.bind(this), p = this.readBoolean.bind(this), v = this.skipBits.bind(this), g = this.skipEG.bind(this), y = this.skipUEG.bind(this), m = this.skipScalingList.bind(this);
                if (c(), n = c(), h(5), v(3), c(), y(), 100 === n || 110 === n || 122 === n || 244 === n || 44 === n || 83 === n || 86 === n || 118 === n || 128 === n) {
                    var b = f();
                    if (3 === b && v(1), y(), y(), v(1), p())
                        for (u = 3 !== b ? 8 : 12, d = 0; d < u; d++)
                            p() && m(d < 6 ? 16 : 64)
                } y();
                var E = f();
                if (0 === E) f();
                else if (1 === E) for (v(1), g(), g(), a = f(), d = 0; d < a; d++)g();
                y(), v(1), o = f(), s = f(), l = h(1), 0 === l && v(1), v(1), p() && (t = f(), e = f(), r = f(), i = f());
                var T = [1, 1];
                if (p() && p()) {
                    switch (c()) {
                        case 1: T = [1, 1]; break;
                        case 2: T = [12, 11]; break;
                        case 3: T = [10, 11]; break;
                        case 4: T = [16, 11]; break;
                        case 5: T = [40, 33]; break;
                        case 6: T = [24, 11]; break;
                        case 7: T = [20, 11]; break;
                        case 8: T = [32, 11]; break;
                        case 9: T = [80, 33]; break;
                        case 10: T = [18, 11]; break;
                        case 11: T = [15, 11]; break;
                        case 12: T = [64, 33]; break;
                        case 13: T = [160, 99]; break;
                        case 14: T = [4, 3]; break;
                        case 15: T = [3, 2]; break;
                        case 16: T = [2, 1]; break;
                        case 255: T = [c() << 8 | c(), c() << 8 | c()]
                    }
                }
                return { width: Math.ceil(16 * (o + 1) - 2 * t - 2 * e), height: (2 - l) * (s + 1) * 16 - (l ? 2 : 4) * (r + i), pixelRatio: T }
            }, t.prototype.readSliceType = function () {
                return this.readUByte(), this.readUEG(), this.readUEG()
            }, t
        }();
        e.a = a
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(11), a = function () {
            function t(e, r, a, o) {
                i(this, t), this.decryptdata = a, this.discardEPB = o, this.decrypter = new n.a(e, r, { removePKCS7Padding: !1 })
            }
            return t.prototype.decryptBuffer = function (t, e) {
                this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
            }, t.prototype.decryptAacSample = function (t, e, r, i) {
                var n = t[e].unit, a = n.subarray(16, n.length - n.length % 16), o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length), s = this; this.decryptBuffer(o, function (a) {
                    a = new Uint8Array(a), n.set(a, 16), i || s.decryptAacSamples(t, e + 1, r)
                })
            }, t.prototype.decryptAacSamples = function (t, e, r) {
                for (; ; e++) {
                    if (e >= t.length) return void r();
                    if (!(t[e].unit.length < 32)) {
                        var i = this.decrypter.isSync();
                        if (this.decryptAacSample(t, e, r, i), !i) return
                    }
                }
            }, t.prototype.getAvcEncryptedData = function (t) {
                for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n <= t.length - 16; n += 160, i += 16)r.set(t.subarray(n, n + 16), i);
                return r
            }, t.prototype.getAvcDecryptedUnit = function (t, e) {
                e = new Uint8Array(e);
                for (var r = 0, i = 32; i <= t.length - 16; i += 160, r += 16)t.set(e.subarray(r, r + 16), i);
                return t
            }, t.prototype.decryptAvcSample = function (t, e, r, i, n, a) {
                var o = this.discardEPB(n.data), s = this.getAvcEncryptedData(o), l = this; this.decryptBuffer(s.buffer, function (s) {
                    n.data = l.getAvcDecryptedUnit(o, s), a || l.decryptAvcSamples(t, e, r + 1, i)
                })
            }, t.prototype.decryptAvcSamples = function (t, e, r, i) {
                for (; ; e++, r = 0) {
                    if (e >= t.length) return void i();
                    for (var n = t[e].units; !(r >= n.length); r++) {
                        var a = n[r];
                        if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                            var o = this.decrypter.isSync();
                            if (this.decryptAvcSample(t, e, r, i, a, o), !o) return
                        }
                    }
                }
            }, t
        }(); e.a = a
    }, function (t, e, r) {
        /*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
        !function (e) {
            "use strict";
            function r(t) {
                return parseInt(t) === t
            }
            function i(t) {
                if (!r(t.length)) return !1;
                for (var e = 0; e < t.length; e++)if (!r(t[e]) || t[e] < 0 || t[e] > 255) return !1;
                return !0
            }
            function n(t, e) {
                if (t.buffer && "Uint8Array" === t.name) return e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)), t;
                if (Array.isArray(t)) {
                    if (!i(t)) throw new Error("Array contains invalid value: " + t); return new Uint8Array(t)
                } if (r(t.length) && i(t)) return new Uint8Array(t);
                throw new Error("unsupported array-like object")
            }
            function a(t) { return new Uint8Array(t) }
            function o(t, e, r, i, n) {
                null == i && null == n || (t = t.slice ? t.slice(i, n) : Array.prototype.slice.call(t, i, n)), e.set(t, r)
            }
            function s(t) {
                for (var e = [], r = 0;
                    r < t.length; r += 4)e.push(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]);
                return e
            } function l(t) {
                t = n(t, !0);
                var e = 16 - t.length % 16, r = a(t.length + e);
                o(t, r);
                for (var i = t.length; i < r.length; i++)r[i] = e;
                return r
            }
            function u(t) {
                if (t = n(t, !0), t.length < 16) throw new Error("PKCS#7 invalid length");
                var e = t[t.length - 1];
                if (e > 16) throw new Error("PKCS#7 padding byte out of range");
                for (var r = t.length - e, i = 0; i < e; i++)
                    if (t[r + i] !== e) throw new Error("PKCS#7 invalid padding byte");
                var s = a(r); return o(t, s, 0, 0, r), s
            } var d = function () {
                function t(t) {
                    var e = [], r = 0;
                    for (t = encodeURI(t);
                        r < t.length;) {
                        var i = t.charCodeAt(r++);
                        37 === i ? (e.push(parseInt(t.substr(r, 2), 16)), r += 2) : e.push(i)
                    } return n(e)
                }
                function e(t) {
                    for (var e = [], r = 0; r < t.length;) {
                        var i = t[r];
                        i < 128 ? (e.push(String.fromCharCode(i)), r++) : i > 191 && i < 224 ? (e.push(String.fromCharCode((31 & i) << 6 | 63 & t[r + 1])), r += 2) : (e.push(String.fromCharCode((15 & i) << 12 | (63 & t[r + 1]) << 6 | 63 & t[r + 2])), r += 3)
                    }
                    return e.join("")
                } return { toBytes: t, fromBytes: e }
            }(), c = function () {
                function t(t) {
                    for (var e = [], r = 0; r < t.length; r += 2)e.push(parseInt(t.substr(r, 2), 16));
                    return e
                } function e(t) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        var n = t[i];
                        e.push(r[(240 & n) >> 4] + r[15 & n])
                    }
                    return e.join("")
                }
                var r = "0123456789abcdef";
                return { toBytes: t, fromBytes: e }
            }(),
                h = { 16: 10, 24: 12, 32: 14 },
                f = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
                p = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                v = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
                g = [
                    3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241,
                    1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171,
                    2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402,
                    3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664,
                    3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135,
                    798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174,
                    1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307,
                    3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934,
                    2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006,
                    2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106,
                    1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041,
                    2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505,
                    899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909,
                    3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051,
                    672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354,
                    1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010,
                    2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077,
                    3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599,
                    2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954,
                    1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241,
                    2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399,
                    765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576,
                    437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068,
                    1841019862, 739644986],
                y = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493,
                    1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913,
                    2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988,
                    2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980,
                    4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571,
                    674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098,
                    2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043,
                    1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132,
                    3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800,
                    717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647,
                    4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976,
                    82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268,
                    891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052,
                    3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568,
                    2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696,
                    1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740,
                    2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013,
                    1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102,
                    403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992,
                    2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421,
                    2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617,
                    658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267,
                    574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245,
                    3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707,
                    975967766],
                m = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337,
                    1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690,
                    1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120,
                    3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069,
                    4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926,
                    84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033,
                    2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259,
                    695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371,
                    1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858,
                    4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188,
                    2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668,
                    3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324,
                    1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273,
                    1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566,
                    3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601,
                    101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713,
                    3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908,
                    3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470,
                    3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832,
                    1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513,
                    2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038,
                    2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649,
                    2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488,
                    1425844308, 3151392187, 372911126],
                b = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006,
                    3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983,
                    3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243,
                    2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763,
                    875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861,
                    404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922,
                    151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469,
                    690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286,
                    1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543,
                    4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648,
                    2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563,
                    3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230,
                    2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344,
                    2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087,
                    1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855,
                    3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034,
                    2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567,
                    134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400,
                    522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495,
                    235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171,
                    286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880,
                    3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394,
                    252645662, 2964376443, 1414855848, 3149649517, 370555436],
                E = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
                    2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937,
                    632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213,
                    1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444,
                    1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743,
                    1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354,
                    33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293,
                    2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
                    2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648,
                    2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998,
                    908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226,
                    1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501,
                    2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747,
                    3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860,
                    2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585,
                    2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770,
                    2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923,
                    3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284,
                    699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591,
                    2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204,
                    25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441,
                    3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300,
                    2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206,
                    3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
                T = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355,
                    4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155,
                    1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162,
                    3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597,
                    1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576,
                    428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375,
                    2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643,
                    2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461,
                    91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386,
                    3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017,
                    560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114,
                    3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030,
                    3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268,
                    4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036,
                    446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837,
                    223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129,
                    2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859,
                    3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336,
                    4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314,
                    1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127,
                    901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179,
                    1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980,
                    1893020342, 1950903388, 1120974935],
                S = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867,
                    4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134,
                    1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201,
                    2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587,
                    2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645,
                    671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185,
                    4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366,
                    2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497,
                    1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398,
                    945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856,
                    547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201,
                    122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881,
                    2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827,
                    3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557,
                    3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285,
                    2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925,
                    3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862,
                    3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425,
                    2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631,
                    209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199,
                    2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544,
                    3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
                _ = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885,
                    3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835,
                    2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
                    3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913,
                    1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619,
                    679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524,
                    777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981,
                    1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953,
                    2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162,
                    1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234,
                    2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535,
                    1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413,
                    3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816,
                    4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092,
                    2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464,
                    410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714,
                    1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521,
                    3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909,
                    2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542,
                    1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274,
                    1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555,
                    850817237, 1817998408, 3092726480],
                A = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108,
                    1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216,
                    2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
                    3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995,
                    899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775,
                    2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422,
                    3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434,
                    2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685,
                    2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657,
                    807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
                    3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483,
                    2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871,
                    2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971,
                    3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284,
                    3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384,
                    1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369,
                    3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557,
                    2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233,
                    1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950,
                    25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226,
                    3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
                    2438237621, 2203032232, 2370213795],
                R = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205,
                    1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937,
                    2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342,
                    1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314,
                    428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734,
                    2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604,
                    3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904,
                    1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980,
                    605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491,
                    3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879,
                    129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615,
                    3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339,
                    2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575,
                    164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216,
                    3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212,
                    711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560,
                    1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242,
                    1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643,
                    2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796,
                    2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235,
                    243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663,
                    2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
                w = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587,
                    1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174,
                    4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922,
                    2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655,
                    3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052,
                    59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317,
                    1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665,
                    3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636,
                    3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224,
                    4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613,
                    188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577,
                    1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515,
                    2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431,
                    1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963,
                    1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836,
                    1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104,
                    3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721,
                    2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005,
                    1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217,
                    1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934,
                    1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691,
                    3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676,
                    2594734927, 2544078150],
                L = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550,
                    1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240,
                    3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714,
                    1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577,
                    1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623,
                    2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819,
                    1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389,
                    322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127,
                    2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650,
                    1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418,
                    983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152,
                    2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953,
                    3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675,
                    2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037,
                    796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116,
                    3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690,
                    1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736,
                    736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464,
                    2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082,
                    410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156,
                    1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549,
                    3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211,
                    718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201,
                    1335535747, 1184342925],
                D = function (t) {
                    if (!(this instanceof D)) throw Error("AES must be instanitated with `new`");
                    Object.defineProperty(this, "key", { value: n(t, !0) }), this._prepare()
                };
            D.prototype._prepare = function () {
                var t = h[this.key.length]; if (null == t) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
                this._Ke = [], this._Kd = []; for (var e = 0; e <= t; e++)this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
                for (var r, i = 4 * (t + 1), n = this.key.length / 4, a = s(this.key), e = 0; e < n; e++)
                    r = e >> 2, this._Ke[r][e % 4] = a[e], this._Kd[t - r][e % 4] = a[e];
                for (var o, l = 0, u = n; u < i;) {
                    if (o = a[n - 1], a[0] ^= p[o >> 16 & 255] << 24 ^ p[o >> 8 & 255] << 16 ^ p[255 & o] << 8 ^ p[o >> 24 & 255] ^ f[l] << 24, l += 1, 8 != n)
                        for (var e = 1; e < n; e++)a[e] ^= a[e - 1];
                    else {
                        for (var e = 1; e < n / 2; e++)
                            a[e] ^= a[e - 1]; o = a[n / 2 - 1], a[n / 2] ^= p[255 & o] ^ p[o >> 8 & 255] << 8 ^ p[o >> 16 & 255] << 16 ^ p[o >> 24 & 255] << 24;
                        for (var e = n / 2 + 1; e < n; e++)
                            a[e] ^= a[e - 1]
                    }
                    for (var d, c, e = 0; e < n && u < i;)
                        d = u >> 2, c = u % 4, this._Ke[d][c] = a[e], this._Kd[t - d][c] = a[e++], u++
                }
                for (var d = 1; d < t; d++)
                    for (var c = 0; c < 4; c++)
                        o = this._Kd[d][c], this._Kd[d][c] = A[o >> 24 & 255] ^ R[o >> 16 & 255] ^ w[o >> 8 & 255] ^ L[255 & o]
            }, D.prototype.encrypt = function (t) {
                if (16 != t.length) throw new Error("invalid plaintext size (must be 16 bytes)");
                for (var e = this._Ke.length - 1, r = [0, 0, 0, 0], i = s(t), n = 0; n < 4; n++)
                    i[n] ^= this._Ke[0][n];
                for (var o = 1; o < e; o++) {
                    for (var n = 0; n < 4; n++)
                        r[n] = g[i[n] >> 24 & 255] ^ y[i[(n + 1) % 4] >> 16 & 255] ^ m[i[(n + 2) % 4] >> 8 & 255] ^ b[255 & i[(n + 3) % 4]] ^ this._Ke[o][n];
                    i = r.slice()
                }
                for (var l, u = a(16), n = 0; n < 4; n++)
                    l = this._Ke[e][n], u[4 * n] = 255 & (p[i[n] >> 24 & 255] ^ l >> 24), u[4 * n + 1] = 255 & (p[i[(n + 1) % 4] >> 16 & 255] ^ l >> 16), u[4 * n + 2] = 255 & (p[i[(n + 2) % 4] >> 8 & 255] ^ l >> 8), u[4 * n + 3] = 255 & (p[255 & i[(n + 3) % 4]] ^ l);
                return u
            }, D.prototype.decrypt = function (t) {
                if (16 != t.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
                for (var e = this._Kd.length - 1, r = [0, 0, 0, 0], i = s(t), n = 0; n < 4; n++)
                    i[n] ^= this._Kd[0][n];
                for (var o = 1; o < e; o++) {
                    for (var n = 0; n < 4; n++)
                        r[n] = E[i[n] >> 24 & 255] ^ T[i[(n + 3) % 4] >> 16 & 255] ^ S[i[(n + 2) % 4] >> 8 & 255] ^ _[255 & i[(n + 1) % 4]] ^ this._Kd[o][n];
                    i = r.slice()
                }
                for (var l, u = a(16), n = 0; n < 4; n++)
                    l = this._Kd[e][n], u[4 * n] = 255 & (v[i[n] >> 24 & 255] ^ l >> 24), u[4 * n + 1] = 255 & (v[i[(n + 3) % 4] >> 16 & 255] ^ l >> 16), u[4 * n + 2] = 255 & (v[i[(n + 2) % 4] >> 8 & 255] ^ l >> 8), u[4 * n + 3] = 255 & (v[255 & i[(n + 1) % 4]] ^ l);
                return u
            };
            var I = function (t) {
                if (!(this instanceof I)) throw Error("AES must be instanitated with `new`");
                this.description = "Electronic Code Block", this.name = "ecb", this._aes = new D(t)
            };
            I.prototype.encrypt = function (t) {
                if (t = n(t), t.length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                for (var e = a(t.length), r = a(16), i = 0; i < t.length; i += 16)
                    o(t, r, 0, i, i + 16), r = this._aes.encrypt(r), o(r, e, i);
                return e
            },
                I.prototype.decrypt = function (t) {
                    if (t = n(t), t.length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                    for (var e = a(t.length), r = a(16), i = 0; i < t.length; i += 16)
                        o(t, r, 0, i, i + 16), r = this._aes.decrypt(r), o(r, e, i);
                    return e
                };
            var k = function (t, e) {
                if (!(this instanceof k)) throw Error("AES must be instanitated with `new`");
                if (this.description = "Cipher Block Chaining", this.name = "cbc", e) {
                    if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                } else e = a(16);
                this._lastCipherblock = n(e, !0), this._aes = new D(t)
            }; k.prototype.encrypt = function (t) {
                if (t = n(t), t.length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                for (var e = a(t.length), r = a(16), i = 0; i < t.length; i += 16) {
                    o(t, r, 0, i, i + 16);
                    for (var s = 0; s < 16; s++)r[s] ^= this._lastCipherblock[s];
                    this._lastCipherblock = this._aes.encrypt(r), o(this._lastCipherblock, e, i)
                }
                return e
            }, k.prototype.decrypt = function (t) {
                if (t = n(t), t.length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                for (var e = a(t.length), r = a(16), i = 0; i < t.length; i += 16) {
                    o(t, r, 0, i, i + 16), r = this._aes.decrypt(r);
                    for (var s = 0; s < 16; s++)
                        e[i + s] = r[s] ^ this._lastCipherblock[s];
                    o(t, this._lastCipherblock, 0, i, i + 16)
                } return e
            };
            var O = function (t, e, r) {
                if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");
                if (this.description = "Cipher Feedback", this.name = "cfb", e) {
                    if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 size)")
                } else e = a(16);
                r || (r = 1), this.segmentSize = r, this._shiftRegister = n(e, !0), this._aes = new D(t)
            };
            O.prototype.encrypt = function (t) {
                if (t.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
                for (var e, r = n(t, !0), i = 0; i < r.length; i += this.segmentSize) {
                    e = this._aes.encrypt(this._shiftRegister);
                    for (var a = 0; a < this.segmentSize; a++)
                        r[i + a] ^= e[a];
                    o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), o(r, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
                }
                return r
            },
                O.prototype.decrypt = function (t) {
                    if (t.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
                    for (var e, r = n(t, !0), i = 0; i < r.length; i += this.segmentSize) {
                        e = this._aes.encrypt(this._shiftRegister);
                        for (var a = 0; a < this.segmentSize; a++)
                            r[i + a] ^= e[a];
                        o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), o(t, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
                    }
                    return r
                };
            var C = function (t, e) {
                if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
                if (this.description = "Output Feedback", this.name = "ofb", e) {
                    if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                }
                else e = a(16);
                this._lastPrecipher = n(e, !0), this._lastPrecipherIndex = 16, this._aes = new D(t)
            };
            C.prototype.encrypt = function (t) {
                for (var e = n(t, !0), r = 0; r < e.length; r++)
                    16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), e[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
                return e
            },
                C.prototype.decrypt = C.prototype.encrypt;
            var P = function (t) {
                if (!(this instanceof P)) throw Error("Counter must be instanitated with `new`");
                0 === t || t || (t = 1), "number" == typeof t ? (this._counter = a(16), this.setValue(t)) : this.setBytes(t)
            };
            P.prototype.setValue = function (t) {
                if ("number" != typeof t || parseInt(t) != t) throw new Error("invalid counter value (must be an integer)");
                if (t > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
                for (var e = 15; e >= 0; --e)this._counter[e] = t % 256, t = parseInt(t / 256)
            }, P.prototype.setBytes = function (t) {
                if (t = n(t, !0), 16 != t.length) throw new Error("invalid counter bytes size (must be 16 bytes)");
                this._counter = t
            }, P.prototype.increment = function () {
                for (var t = 15; t >= 0; t--) {
                    if (255 !== this._counter[t]) {
                        this._counter[t]++; break
                    } this._counter[t] = 0
                }
            };
            var x = function (t, e) {
                if (!(this instanceof x)) throw Error("AES must be instanitated with `new`");
                this.description = "Counter", this.name = "ctr", e instanceof P || (e = new P(e)), this._counter = e, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new D(t)
            };
            x.prototype.encrypt = function (t) {
                for (var e = n(t, !0), r = 0; r < e.length; r++)
                    16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), e[r] ^= this._remainingCounter[this._remainingCounterIndex++];
                return e
            },
                x.prototype.decrypt = x.prototype.encrypt;
            var F = {
                AES: D,
                Counter: P,
                ModeOfOperation: {
                    ecb: I,
                    cbc: k,
                    cfb: O,
                    ofb: C,
                    ctr: x
                },
                utils: {
                    hex: c,
                    utf8: d
                },
                padding: {
                    pkcs7: {
                        pad: l,
                        strip: u
                    }
                },
                _arrayTest: {
                    coerceArray: n,
                    createArray: a,
                    copyArray: o
                }
            };
            t.exports = F
        }()
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } var n = r(6), a = r(0), o = r(21), s = function () { function t(e, r, n) { i(this, t), this.observer = e, this.config = n, this.remuxer = r } return t.prototype.resetInitSegment = function (t, e, r, i) { this._audioTrack = { container: "audio/mpeg", type: "audio", id: -1, sequenceNumber: 0, isAAC: !1, samples: [], len: 0, manifestCodec: e, duration: i, inputTimeScale: 9e4 } }, t.prototype.resetTimeStamp = function () { }, t.probe = function (t) { var e = void 0, r = void 0, i = n.a.getID3Data(t, 0); if (i && void 0 !== n.a.getTimeStamp(i)) for (e = i.length, r = Math.min(t.length - 1, e + 100); e < r; e++)if (o.a.probe(t, e)) return a.b.log("MPEG Audio sync word found !"), !0; return !1 }, t.prototype.append = function (t, e, r, i) { for (var a = n.a.getID3Data(t, 0), s = n.a.getTimeStamp(a), l = s ? 90 * s : 9e4 * e, u = a.length, d = t.length, c = 0, h = 0, f = this._audioTrack, p = [{ pts: l, dts: l, data: a }]; u < d;)if (o.a.isHeader(t, u)) { var v = o.a.appendFrame(f, t, u, l, c); if (!v) break; u += v.length, h = v.sample.pts, c++ } else n.a.isHeader(t, u) ? (a = n.a.getID3Data(t, u), p.push({ pts: h, dts: h, data: a }), u += a.length) : u++; this.remuxer.remux(f, { samples: [] }, { samples: p, inputTimeScale: 9e4 }, { samples: [] }, e, r, i) }, t.prototype.destroy = function () { }, t }(); e.a = s
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(44), a = r(45), o = r(1), s = r(2), l = r(0), u = function () {
            function t(e, r, n, a) {
                i(this, t), this.observer = e, this.config = r, this.typeSupported = n;
                var o = navigator.userAgent;
                this.isSafari = a && a.indexOf("Apple") > -1 && o && !o.match("CriOS"), this.ISGenerated = !1
            }
            return t.prototype.destroy = function () { }, t.prototype.resetTimeStamp = function (t) {
                this._initPTS = this._initDTS = t
            },
                t.prototype.resetInitSegment = function () {
                    this.ISGenerated = !1
                },
                t.prototype.remux = function (t, e, r, i, n, a, s) {
                    if (this.ISGenerated || this.generateIS(t, e, n), this.ISGenerated) {
                        var u = t.samples.length, d = e.samples.length, c = n, h = n;
                        if (u && d) {
                            var f = (t.samples[0].dts - e.samples[0].dts) / e.inputTimeScale;
                            c += Math.max(0, f), h += Math.max(0, -f)
                        }
                        if (u) {
                            t.timescale || (l.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, n));
                            var p = this.remuxAudio(t, c, a, s);
                            if (d) {
                                var v = void 0;
                                p && (v = p.endPTS - p.startPTS), e.timescale || (l.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, n)), this.remuxVideo(e, h, a, v, s)
                            }
                        }
                        else if (d) {
                            var g = this.remuxVideo(e, h, a, 0, s);
                            g && t.codec && this.remuxEmptyAudio(t, c, a, g)
                        }
                    } r.samples.length && this.remuxID3(r, n), i.samples.length && this.remuxText(i, n), this.observer.trigger(o.a.FRAG_PARSED)
                },
                t.prototype.generateIS = function (t, e, r) {
                    var i = this.observer, n = t.samples, u = e.samples, d = this.typeSupported, c = "audio/mp4", h = {}, f = { tracks: h }, p = void 0 === this._initPTS, v = void 0, g = void 0;
                    if (p && (v = g = 1 / 0), t.config && n.length && (t.timescale = t.samplerate, l.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (d.mpeg ? (c = "audio/mpeg", t.codec = "") : d.mp3 && (t.codec = "mp3")),
                        h.audio = {
                            container: c,
                            codec: t.codec,
                            initSegment: !t.isAAC && d.mpeg ? new Uint8Array : a.a.initSegment([t]),
                            metadata: {
                                channelCount: t.channelCount
                            }
                        },
                        p && (v = g = n[0].pts - t.inputTimeScale * r)), e.sps && e.pps && u.length) {
                        var y = e.inputTimeScale;
                        e.timescale = y,
                            h.video = {
                                container: "video/mp4",
                                codec: e.codec,
                                initSegment: a.a.initSegment([e]),
                                metadata: {
                                    width: e.width,
                                    height: e.height
                                }
                            },
                            p && (v = Math.min(v, u[0].pts - y * r), g = Math.min(g, u[0].dts - y * r), this.observer.trigger(o.a.INIT_PTS_FOUND, { initPTS: v }))
                    }
                    Object.keys(h).length ? (i.trigger(o.a.FRAG_PARSING_INIT_SEGMENT, f), this.ISGenerated = !0, p && (this._initPTS = v, this._initDTS = g)) : i.trigger(o.a.ERROR, { type: s.b.MEDIA_ERROR, details: s.a.FRAG_PARSING_ERROR, fatal: !1, reason: "no audio/video samples found" })
                },
                t.prototype.remuxVideo = function (t, e, r, i, n) {
                    var u = 8, d = t.timescale, c = void 0, h = void 0, f = void 0, p = void 0, v = void 0, g = void 0, y = void 0, m = t.samples, b = [], E = m.length, T = this._PTSNormalize, S = this._initDTS, _ = this.nextAvcDts, A = this.isSafari;
                    if (0 !== E) {
                        A && (r |= m.length && _ && (n && Math.abs(e - _ / d) < .1 || Math.abs(m[0].pts - _ - S) < d / 5)), r || (_ = e * d), m.forEach(function (t) {
                            t.pts = T(t.pts - S, _), t.dts = T(t.dts - S, _)
                        }), m.sort(function (t, e) {
                            var r = t.dts - e.dts, i = t.pts - e.pts; return r || i || t.id - e.id
                        });
                        var R = m.reduce(function (t, e) {
                            return Math.max(Math.min(t, e.pts - e.dts), -18e3)
                        }, 0);
                        if (R < 0) {
                            l.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(R / 90) + " ms to overcome this issue");
                            for (var w = 0; w < m.length; w++)m[w].dts += R
                        }
                        var L = m[0];
                        v = Math.max(L.dts, 0), p = Math.max(L.pts, 0);
                        var D = Math.round((v - _) / 90);
                        r && D && (D > 1 ? l.b.log("AVC:" + D + " ms hole between fragments detected,filling it") : D < -1 && l.b.log("AVC:" + -D + " ms overlapping between fragments detected"), v = _, m[0].dts = v, p = Math.max(p - D, _), m[0].pts = p, l.b.log("Video/PTS/DTS adjusted: " + Math.round(p / 90) + "/" + Math.round(v / 90) + ",delta:" + D + " ms")), v, L = m[m.length - 1], y = Math.max(L.dts, 0), g = Math.max(L.pts, 0, y), A && (c = Math.round((y - v) / (m.length - 1)));
                        for (var I = 0, k = 0, O = 0; O < E; O++) {
                            for (var C = m[O], P = C.units, x = P.length, F = 0, N = 0; N < x; N++)
                                F += P[N].data.length;
                            k += F, I += x, C.length = F, C.dts = A ? v + O * c : Math.max(C.dts, v), C.pts = Math.max(C.pts, C.dts)
                        }
                        var M = k + 4 * I + 8;
                        try {
                            h = new Uint8Array(M)
                        }
                        catch (t) {
                            return void this.observer.trigger(o.a.ERROR, { type: s.b.MUX_ERROR, details: s.a.REMUX_ALLOC_ERROR, fatal: !1, bytes: M, reason: "fail allocating video mdat " + M })
                        }
                        var U = new DataView(h.buffer);
                        U.setUint32(0, M), h.set(a.a.types.mdat, 4);
                        for (var B = 0; B < E; B++) {
                            for (var G = m[B], K = G.units, j = 0, H = void 0, V = 0, Y = K.length; V < Y; V++) {
                                var W = K[V], z = W.data, q = W.data.byteLength;
                                U.setUint32(u, q), u += 4, h.set(z, u), u += q, j += 4 + q
                            }
                            if (A) H = Math.max(0, c * Math.round((G.pts - G.dts) / c));
                            else {
                                if (B < E - 1) c = m[B + 1].dts - G.dts;
                                else {
                                    var X = this.config, Q = G.dts - m[B > 0 ? B - 1 : B].dts;
                                    if (X.stretchShortVideoTrack) {
                                        var $ = X.maxBufferHole, J = Math.floor($ * d), Z = (i ? p + i * d : this.nextAudioPts) - G.pts; Z > J ? (c = Z - Q, c < 0 && (c = Q), l.b.log("It is approximately " + Z / 90 + " ms to the next segment; using duration " + c / 90 + " ms for the last video frame.")) : c = Q
                                    }
                                    else c = Q
                                }
                                H = Math.round(G.pts - G.dts)
                            }
                            b.push({ size: j, duration: c, cts: H, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: G.key ? 2 : 1, isNonSync: G.key ? 0 : 1 } })
                        }
                        this.nextAvcDts = y + c;
                        var tt = t.dropped;
                        if (t.len = 0, t.nbNalu = 0, t.dropped = 0, b.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var et = b[0].flags;
                            et.dependsOn = 2, et.isNonSync = 0
                        }
                        t.samples = b, f = a.a.moof(t.sequenceNumber++, v, t), t.samples = [];
                        var rt = {
                            data1: f, data2: h, startPTS: p / d, endPTS: (g + c) / d, startDTS: v / d, endDTS: this.nextAvcDts / d, type: "video", hasAudio: !1, hasVideo: !0, nb: b.length, dropped: tt
                        };
                        return this.observer.trigger(o.a.FRAG_PARSING_DATA, rt), rt
                    }
                },
                t.prototype.remuxAudio = function (t, e, r, i) {
                    var u = t.inputTimeScale, d = t.timescale, c = u / d, h = t.isAAC ? 1024 : 1152, f = h * c, p = this._PTSNormalize, v = this._initDTS, g = !t.isAAC && this.typeSupported.mpeg, y = void 0, m = void 0, b = void 0, E = void 0, T = void 0, S = void 0, _ = void 0, A = t.samples, R = [], w = this.nextAudioPts; if (r |= A.length && w && (i && Math.abs(e - w / u) < .1 || Math.abs(A[0].pts - w - v) < 20 * f), A.forEach(function (t) {
                        t.pts = t.dts = p(t.pts - v, e * u)
                    }),
                        A = A.filter(function (t) {
                            return t.pts >= 0
                        }),
                        0 !== A.length) {
                        if (r || (w = i ? e * u : A[0].pts), t.isAAC)
                            for (var L = this.config.maxAudioFramesDrift, D = 0, I = w; D < A.length;) {
                                var k, O = A[D], C = O.pts;
                                k = C - I;
                                var P = Math.abs(1e3 * k / u);
                                if (k <= -L * f) l.b.warn("Dropping 1 audio frame @ " + (I / u).toFixed(3) + "s due to " + Math.round(P) + " ms overlap."), A.splice(D, 1), t.len -= O.unit.length;
                                else if (k >= L * f && P < 1e4 && I) {
                                    var x = Math.round(k / f); l.b.warn("Injecting " + x + " audio frame @ " + (I / u).toFixed(3) + "s due to " + Math.round(1e3 * k / u) + " ms gap.");
                                    for (var F = 0; F < x; F++) {
                                        var N = Math.max(I, 0);
                                        b = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), b || (l.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), b = O.unit.subarray()), A.splice(D, 0, { unit: b, pts: N, dts: N }), t.len += b.length, I += f, D++
                                    }
                                    O.pts = O.dts = I, I += f, D++
                                }
                                else Math.abs(k), O.pts = O.dts = I, I += f, D++
                            }
                        for (var M = 0, U = A.length; M < U; M++) {
                            var B = A[M], G = B.unit, K = B.pts;
                            if (void 0 !== _) m.duration = Math.round((K - _) / c);
                            else {
                                var j = Math.round(1e3 * (K - w) / u), H = 0;
                                if (r && t.isAAC && j) {
                                    if (j > 0 && j < 1e4) H = Math.round((K - w) / f), l.b.log(j + " ms hole between AAC samples detected,filling it"), H > 0 && (b = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), b || (b = G.subarray()), t.len += H * b.length);
                                    else if (j < -12) {
                                        l.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (w / u).toFixed(3) + "s/" + (K / u).toFixed(3) + "s/" + -j + "ms"), t.len -= G.byteLength; continue
                                    }
                                    K = w
                                }
                                if (S = K, !(t.len > 0)) return;
                                var V = g ? t.len : t.len + 8;
                                y = g ? 0 : 8;
                                try {
                                    E = new Uint8Array(V)
                                }
                                catch (t) {
                                    return void this.observer.trigger(o.a.ERROR, { type: s.b.MUX_ERROR, details: s.a.REMUX_ALLOC_ERROR, fatal: !1, bytes: V, reason: "fail allocating audio mdat " + V })
                                }
                                if (!g) {
                                    new DataView(E.buffer).setUint32(0, V), E.set(a.a.types.mdat, 4)
                                }
                                for (var Y = 0; Y < H; Y++)b = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount), b || (l.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), b = G.subarray()), E.set(b, y), y += b.byteLength, m = {
                                    size: b.byteLength, cts: 0, duration: 1024, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 }
                                },
                                    R.push(m)
                            }
                            E.set(G, y);
                            var W = G.byteLength;
                            y += W, m = { size: W, cts: 0, duration: 0, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, R.push(m), _ = K
                        }
                        var z = 0, q = R.length;
                        if (q >= 2 && (z = R[q - 2].duration, m.duration = z), q) {
                            this.nextAudioPts = w = _ + c * z, t.len = 0, t.samples = R, T = g ? new Uint8Array : a.a.moof(t.sequenceNumber++, S / c, t), t.samples = [];
                            var X = S / u, Q = w / u, $ = { data1: T, data2: E, startPTS: X, endPTS: Q, startDTS: X, endDTS: Q, type: "audio", hasAudio: !0, hasVideo: !1, nb: q };
                            return this.observer.trigger(o.a.FRAG_PARSING_DATA, $), $
                        }
                        return null
                    }
                },
                t.prototype.remuxEmptyAudio = function (t, e, r, i) {
                    var a = t.inputTimeScale, o = t.samplerate ? t.samplerate : a, s = a / o, u = this.nextAudioPts, d = (void 0 !== u ? u : i.startDTS * a) + this._initDTS, c = i.endDTS * a + this._initDTS, h = 1024 * s, f = Math.ceil((c - d) / h), p = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                    if (l.b.warn("remux empty Audio"), !p)
                        return void l.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                    for (var v = [], g = 0; g < f; g++) {
                        var y = d + g * h;
                        v.push({ unit: p, pts: y, dts: y }), t.len += p.length
                    }
                    t.samples = v, this.remuxAudio(t, e, r)
                },
                t.prototype.remuxID3 = function (t, e) {
                    var r = t.samples.length, i = void 0, n = t.inputTimeScale, a = this._initPTS, s = this._initDTS;
                    if (r) {
                        for (var l = 0; l < r; l++)
                            i = t.samples[l], i.pts = (i.pts - a) / n, i.dts = (i.dts - s) / n;
                        this.observer.trigger(o.a.FRAG_PARSING_METADATA, { samples: t.samples })
                    }
                    t.samples = [], e = e
                },
                t.prototype.remuxText = function (t, e) {
                    t.samples.sort(function (t, e) {
                        return t.pts - e.pts
                    });
                    var r = t.samples.length, i = void 0, n = t.inputTimeScale, a = this._initPTS;
                    if (r) {
                        for (var s = 0; s < r; s++)
                            i = t.samples[s], i.pts = (i.pts - a) / n; this.observer.trigger(o.a.FRAG_PARSING_USERDATA, { samples: t.samples })
                    }
                    t.samples = [], e = e
                },
                t.prototype._PTSNormalize = function (t, e) {
                    var r = void 0;
                    if (void 0 === e) return t;
                    for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;)t += r;
                    return t
                },
                t
        }();
        e.a = u
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = function () {
            function t() {
                i(this, t)
            } return t.getSilentFrame = function (t, e) {
                switch (t) {
                    case "mp4a.40.2":
                        if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]); break;
                    default:
                        if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
                return null
            },
                t
        }();
        e.a = n
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = Math.pow(2, 32) - 1, a = function () {
            function t() {
                i(this, t)
            }
            return t.init = function () {
                t.types = {
                    avc1: [],
                    avcC: [],
                    btrt: [],
                    dinf: [],
                    dref: [],
                    esds: [],
                    ftyp: [],
                    hdlr: [],
                    mdat: [],
                    mdhd: [],
                    mdia: [],
                    mfhd: [],
                    minf: [],
                    moof: [],
                    moov: [],
                    mp4a: [],
                    ".mp3": [],
                    mvex: [],
                    mvhd: [],
                    pasp: [],
                    sdtp: [],
                    stbl: [],
                    stco: [],
                    stsc: [],
                    stsd: [],
                    stsz: [],
                    stts: [],
                    tfdt: [],
                    tfhd: [],
                    traf: [],
                    trak: [],
                    trun: [],
                    trex: [],
                    tkhd: [],
                    vmhd: [],
                    smhd: []
                };
                var e = void 0;
                for (e in t.types)
                    t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                t.HDLR_TYPES = {
                    video: r,
                    audio: i
                };
                var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var o = new Uint8Array([105, 115, 111, 109]), s = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
                t.FTYP = t.box(t.types.ftyp, o, l, o, s), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
            }, t.box = function (t) {
                for (var e = Array.prototype.slice.call(arguments, 1), r = 8, i = e.length, n = i, a = void 0; i--;)
                    r += e[i].byteLength;
                for (a = new Uint8Array(r), a[0] = r >> 24 & 255, a[1] = r >> 16 & 255, a[2] = r >> 8 & 255, a[3] = 255 & r, a.set(t, 4), i = 0, r = 8; i < n; i++)
                    a.set(e[i], r), r += e[i].byteLength;
                return a
            },
                t.hdlr = function (e) {
                    return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                },
                t.mdat = function (e) {
                    return t.box(t.types.mdat, e)
                },
                t.mdhd = function (e, r) {
                    r *= e; var i = Math.floor(r / (n + 1)), a = Math.floor(r % (n + 1));
                    return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
                },
                t.mdia = function (e) {
                    return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                },
                t.mfhd = function (e) {
                    return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                },
                t.minf = function (e) {
                    return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                },
                t.moof = function (e, r, i) {
                    return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                },
                t.moov = function (e) {
                    for (var r = e.length, i = []; r--;)i[r] = t.trak(e[r]); return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
                },
                t.mvex = function (e) {
                    for (var r = e.length, i = []; r--;)i[r] = t.trex(e[r]); return t.box.apply(null, [t.types.mvex].concat(i))
                },
                t.mvhd = function (e, r) {
                    r *= e;
                    var i = Math.floor(r / (n + 1)), a = Math.floor(r % (n + 1)), o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return t.box(t.types.mvhd, o)
                },
                t.sdtp = function (e) {
                    var r = e.samples || [], i = new Uint8Array(4 + r.length), n = void 0, a = void 0;
                    for (a = 0; a < r.length; a++)n = r[a].flags, i[a + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
                    return t.box(t.types.sdtp, i)
                },
                t.stbl = function (e) {
                    return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                },
                t.avc1 = function (e) {
                    var r = [], i = [], n = void 0, a = void 0, o = void 0;
                    for (n = 0; n < e.sps.length; n++)a = e.sps[n], o = a.byteLength, r.push(o >>> 8 & 255), r.push(255 & o), r = r.concat(Array.prototype.slice.call(a));
                    for (n = 0; n < e.pps.length; n++)a = e.pps[n], o = a.byteLength, i.push(o >>> 8 & 255), i.push(255 & o), i = i.concat(Array.prototype.slice.call(a));
                    var s = t.box(t.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | e.sps.length].concat(r).concat([e.pps.length]).concat(i))), l = e.width, u = e.height, d = e.pixelRatio[0], c = e.pixelRatio[1];
                    return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
                },
                t.esds = function (t) {
                    var e = t.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                },
                t.mp4a = function (e) {
                    var r = e.samplerate; return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                },
                t.mp3 = function (e) {
                    var r = e.samplerate; return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                },
                t.stsd = function (e) {
                    return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                },
                t.tkhd = function (e) {
                    var r = e.id, i = e.duration * e.timescale, a = e.width, o = e.height, s = Math.floor(i / (n + 1)), l = Math.floor(i % (n + 1));
                    return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, o >> 8 & 255, 255 & o, 0, 0]))
                },
                t.traf = function (e, r) {
                    var i = t.sdtp(e), a = e.id, o = Math.floor(r / (n + 1)), s = Math.floor(r % (n + 1));
                    return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                }, t.trak = function (e) {
                    return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                },
                t.trex = function (e) {
                    var r = e.id; return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                },
                t.trun = function (e, r) {
                    var i = e.samples || [], n = i.length, a = 12 + 16 * n, o = new Uint8Array(a), s = void 0, l = void 0, u = void 0, d = void 0, c = void 0, h = void 0;
                    for (r += 8 + a, o.set([0, 0, 15, 1, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), s = 0; s < n; s++)
                        l = i[s], u = l.duration, d = l.size, c = l.flags, h = l.cts, o.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, c.isLeading << 2 | c.dependsOn, c.isDependedOn << 6 | c.hasRedundancy << 4 | c.paddingValue << 1 | c.isNonSync, 61440 & c.degradPrio, 15 & c.degradPrio, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h], 12 + 16 * s);
                    return t.box(t.types.trun, o)
                },
                t.initSegment = function (e) {
                    t.types || t.init(); var r = t.moov(e), i = void 0;
                    return i = new Uint8Array(t.FTYP.byteLength + r.byteLength), i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
                }, t
        }();
        e.a = a
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(1), a = function () {
            function t(e) {
                i(this, t), this.observer = e
            }
            return t.prototype.destroy = function () { }, t.prototype.resetTimeStamp = function () { }, t.prototype.resetInitSegment = function () { }, t.prototype.remux = function (t, e, r, i, a, o, s, l) {
                var u = this.observer, d = "";
                t && (d += "audio"), e && (d += "video"), u.trigger(n.a.FRAG_PARSING_DATA, { data1: l, startPTS: a, startDTS: a, type: d, hasAudio: !!t, hasVideo: !!e, nb: 1, dropped: 0 }), u.trigger(n.a.FRAG_PARSED)
            }, t
        }(); e.a = a
    },
    function (t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var i = r(19), n = r(1), a = r(0), o = r(10), s = r.n(o), l = function (t) {
            var e = new s.a;
            e.trigger = function (t) {
                for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                    i[n - 1] = arguments[n];
                e.emit.apply(e, [t, t].concat(i))
            },
                e.off = function (t) {
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
                        i[n - 1] = arguments[n];
                    e.removeListener.apply(e, [t].concat(i))
                };
            var r = function (e, r) {
                t.postMessage({ event: e, data: r })
            };
            t.addEventListener("message", function (n) {
                var o = n.data;
                switch (o.cmd) {
                    case "init":
                        var s = JSON.parse(o.config);
                        t.demuxer = new i.a(e, o.typeSupported, s, o.vendor);
                        try {
                            Object(a.a)(!0 === s.debug)
                        }
                        catch (t) {
                            console.warn("demuxerWorker: unable to enable logs")
                        }
                        r("init", null); break;
                    case "demux":
                        t.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                }
            }),
                e.on(n.a.FRAG_DECRYPTED, r), e.on(n.a.FRAG_PARSING_INIT_SEGMENT, r), e.on(n.a.FRAG_PARSED, r), e.on(n.a.ERROR, r), e.on(n.a.FRAG_PARSING_METADATA, r), e.on(n.a.FRAG_PARSING_USERDATA, r), e.on(n.a.INIT_PTS_FOUND, r), e.on(n.a.FRAG_PARSING_DATA, function (e, r) {
                    var i = [], n = { event: e, data: r };
                    r.data1 && (n.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (n.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), t.postMessage(n, i)
                })
        };
        e.default = l
    }, function (t, e, r) {
        "use strict";
        function i() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments[2], i = 0;
            if (r.programDateTime) {
                var n = Date.parse(r.programDateTime);
                isNaN(n) || (i = 1e3 * e + n - 1e3 * t)
            }
            return i
        }
        function n(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!Array.isArray(t) || !t.length || null === e) return null;
            if (e < t[0].pdt) return null;
            if (e >= t[t.length - 1].endPdt) return null;
            for (var r = 0; r < t.length; ++r) {
                var i = t[r];
                if (e < i.endPdt) return i
            }
            return null
        }
        function a(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, a = void 0, l = t ? e[t.sn - e[0].sn + 1] : null;
            return r < i && (r > i - n && (n = 0), a = l && !o(r, n, l) ? l : s.a.search(e, o.bind(null, r, n))), a
        }
        function o() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = arguments[2], i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
        }
        e.a = i, e.b = n, e.c = a, e.d = o; var s = r(5)
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(0), u = r(2), d = r(17), c = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), h = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.MANIFEST_LOADED, o.a.LEVEL_LOADED, o.a.FRAG_LOADED, o.a.ERROR));
                return a.canload = !1, a.currentLevelIndex = null, a.manualLevelIndex = -1, a.timer = null, a
            }
            return a(e, t), e.prototype.onHandlerDestroying = function () {
                this.cleanTimer(), this.manualLevelIndex = -1
            }, e.prototype.cleanTimer = function () {
                null !== this.timer && (clearTimeout(this.timer), this.timer = null)
            }, e.prototype.startLoad = function () {
                var t = this._levels;
                this.canload = !0, this.levelRetryCount = 0, t && t.forEach(function (t) {
                    t.loadError = 0; var e = t.details;
                    e && e.live && (t.details = void 0)
                }),
                    null !== this.timer && this.loadLevel()
            },
                e.prototype.stopLoad = function () {
                    this.canload = !1
                },
                e.prototype.onManifestLoaded = function (t) {
                    var e = [], r = void 0, i = {}, n = null, a = !1, s = !1, c = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), h = [];
                    if (t.levels.forEach(function (t) {
                        t.loadError = 0, t.fragmentError = !1, a = a || !!t.videoCodec, s = s || !!t.audioCodec || !(!t.attrs || !t.attrs.AUDIO), !0 === c && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0), n = i[t.bitrate], void 0 === n ? (t.url = [t.url], t.urlId = 0, i[t.bitrate] = t, e.push(t)) : n.url.push(t.url)
                    }), !0 === a && !0 === s && (e = e.filter(function (t) { return !!t.videoCodec })), e = e.filter(function (t) {
                        var e = t.audioCodec, r = t.videoCodec;
                        return (!e || Object(d.a)(e)) && (!r || Object(d.a)(r))
                    }),
                        t.audioTracks && (h = t.audioTracks.filter(function (t) { return !t.audioCodec || Object(d.a)(t.audioCodec, "audio") })), e.length > 0) {
                        r = e[0].bitrate, e.sort(function (t, e) { return t.bitrate - e.bitrate }), this._levels = e;
                        for (var f = 0; f < e.length; f++)
                            if (e[f].bitrate === r) {
                                this._firstLevel = f, l.b.log("manifest loaded," + e.length + " level(s) found, first bitrate:" + r); break
                            } this.hls.trigger(o.a.MANIFEST_PARSED, { levels: e, audioTracks: h, firstLevel: this._firstLevel, stats: t.stats, audio: s, video: a, altAudio: h.length > 0 && a })
                    }
                    else this.hls.trigger(o.a.ERROR, { type: u.b.MEDIA_ERROR, details: u.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: this.hls.url, reason: "no level with compatible codecs found in manifest" })
                },
                e.prototype.setLevelInternal = function (t) {
                    var e = this._levels, r = this.hls; if (t >= 0 && t < e.length) {
                        if (this.cleanTimer(), this.currentLevelIndex !== t) {
                            l.b.log("switching to level " + t), this.currentLevelIndex = t;
                            var i = e[t];
                            i.level = t, r.trigger(o.a.LEVEL_SWITCHING, i)
                        }
                        var n = e[t], a = n.details;
                        if (!a || !0 === a.live) {
                            var s = n.urlId;
                            r.trigger(o.a.LEVEL_LOADING, { url: n.url[s], level: t, id: s })
                        }
                    }
                    else r.trigger(o.a.ERROR, { type: u.b.OTHER_ERROR, details: u.a.LEVEL_SWITCH_ERROR, level: t, fatal: !1, reason: "invalid level idx" })
                },
                e.prototype.onError = function (t) {
                    if (!0 === t.fatal) return void (t.type === u.b.NETWORK_ERROR && this.cleanTimer());
                    var e = !1, r = !1, i = void 0;
                    switch (t.details) {
                        case u.a.FRAG_LOAD_ERROR:
                        case u.a.FRAG_LOAD_TIMEOUT:
                        case u.a.KEY_LOAD_ERROR:
                        case u.a.KEY_LOAD_TIMEOUT: i = t.frag.level, r = !0; break;
                        case u.a.LEVEL_LOAD_ERROR:
                        case u.a.LEVEL_LOAD_TIMEOUT: i = t.context.level, e = !0; break;
                        case u.a.REMUX_ALLOC_ERROR: i = t.level, e = !0
                    }
                    void 0 !== i && this.recoverLevel(t, i, e, r)
                },
                e.prototype.recoverLevel = function (t, e, r, i) {
                    var n = this, a = this.hls.config, o = t.details, s = this._levels[e], u = void 0, d = void 0, c = void 0;
                    if (s.loadError++, s.fragmentError = i, !0 === r) {
                        if (!(this.levelRetryCount + 1 <= a.levelLoadingMaxRetry)) return l.b.error("level controller, cannot recover from " + o + " error"), this.currentLevelIndex = null, this.cleanTimer(), void (t.fatal = !0);
                        d = Math.min(Math.pow(2, this.levelRetryCount) * a.levelLoadingRetryDelay, a.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function () {
                            return n.loadLevel()
                        },
                            d),
                            t.levelRetry = !0, this.levelRetryCount++, l.b.warn("level controller, " + o + ", retry in " + d + " ms, current retry count is " + this.levelRetryCount)
                    } !0 !== r && !0 !== i || (u = s.url.length, u > 1 && s.loadError < u ? (l.b.warn("level controller, " + o + " for level " + e + ": switching to redundant stream id " + s.urlId), s.urlId = (s.urlId + 1) % u, s.details = void 0) : -1 === this.manualLevelIndex ? (c = 0 === e ? this._levels.length - 1 : e - 1, l.b.warn("level controller, " + o + ": switch to " + c), this.hls.nextAutoLevel = this.currentLevelIndex = c) : !0 === i && (l.b.warn("level controller, " + o + ": reload a fragment"), this.currentLevelIndex = null))
                },
                e.prototype.onFragLoaded = function (t) {
                    var e = t.frag;
                    if (void 0 !== e && "main" === e.type) {
                        var r = this._levels[e.level];
                        void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                    }
                },
                e.prototype.onLevelLoaded = function (t) {
                    var e = this, r = t.level;
                    if (r === this.currentLevelIndex) {
                        var i = this._levels[r];
                        !1 === i.fragmentError && (i.loadError = 0, this.levelRetryCount = 0);
                        var n = t.details;
                        if (n.live) {
                            var a = 1e3 * (n.averagetargetduration ? n.averagetargetduration : n.targetduration), o = a, s = i.details;
                            s && n.endSN === s.endSN && (o /= 2, l.b.log("same live playlist, reload twice faster")), o -= performance.now() - t.stats.trequest, o = Math.max(a / 2, Math.round(o)), l.b.log("live playlist, reload in " + Math.round(o) + " ms"), this.timer = setTimeout(function () { return e.loadLevel() }, o)
                        }

                        else this.cleanTimer()
                    }
                }, e.prototype.loadLevel = function () {
                    var t = void 0, e = void 0;
                    null !== this.currentLevelIndex && !0 === this.canload && void 0 !== (t = this._levels[this.currentLevelIndex]) && t.url.length > 0 && (e = t.urlId, this.hls.trigger(o.a.LEVEL_LOADING, { url: t.url[e], level: this.currentLevelIndex, id: e }))
                },
                c(e, [{
                    key: "levels",
                    get: function () { return this._levels }
                }, {
                    key: "level",
                    get: function () { return this.currentLevelIndex },
                    set: function (t) {
                        var e = this._levels;
                        e && (t = Math.min(t, e.length - 1), this.currentLevelIndex === t && void 0 !== e[t].details || this.setLevelInternal(t))
                    }
                }, {
                    key: "manualLevel",
                    get: function () { return this.manualLevelIndex },
                    set: function (t) { this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t) }
                }, {
                    key: "firstLevel",
                    get: function () { return this._firstLevel },
                    set: function (t) { this._firstLevel = t }
                }, {
                    key: "startLevel",
                    get: function () {
                        if (void 0 === this._startLevel) {
                            var t = this.hls.config.startLevel;
                            return void 0 !== t ? t : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function (t) { this._startLevel = t }
                }, {
                    key: "nextLoadLevel",
                    get: function () { return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel },
                    set: function (t) { this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t) }
                }]), e
        }
            (s.a); e.a = h
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(6), u = r(25), d = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.MEDIA_ATTACHED, o.a.MEDIA_DETACHING, o.a.FRAG_PARSING_METADATA));
                return a.id3Track = void 0, a.media = void 0, a
            }
            return a(e, t), e.prototype.destroy = function () {
                s.a.prototype.destroy.call(this)
            },
                e.prototype.onMediaAttached = function (t) {
                    this.media = t.media, this.media
                },
                e.prototype.onMediaDetaching = function () {
                    Object(u.a)(this.id3Track), this.id3Track = void 0, this.media = void 0
                },
                e.prototype.getID3Track = function (t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        if ("metadata" === r.kind && "id3" === r.label) return Object(u.b)(r, this.media), r
                    }
                    return this.media.addTextTrack("metadata", "id3")
                },
                e.prototype.onFragParsingMetadata = function (t) {
                    var e = t.frag, r = t.samples;
                    this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                    for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, n = 0; n < r.length; n++) {
                        var a = l.a.getID3Frames(r[n].data);
                        if (a) {
                            var o = r[n].pts, s = n < r.length - 1 ? r[n + 1].pts : e.endPTS; o === s && (s += 1e-4);
                            for (var u = 0; u < a.length; u++) {
                                var d = a[u];
                                if (!l.a.isTimeStampFrame(d)) {
                                    var c = new i(o, s, "");
                                    c.value = d, this.id3Track.addCue(c)
                                }
                            }
                        }
                    }
                },
                e
        }
            (s.a);
        e.a = d
    },
    function (t, e, r) {
        "use strict";
        function i() {
            var t = Object(n.a)(), e = window.SourceBuffer || window.WebKitSourceBuffer, r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
            return !!r && !!i
        }
        e.a = i;
        var n = r(12)
    },
    function (t, e, r) {
        "use strict";
        r.d(e, "a", function () { return g });
        var i = r(53), n = r(56), a = r(57), o = r(58), s = r(59), l = r(60), u = r(61), d = r(62), c = r(64), h = r(68), f = r(69), p = r(70), v = r(71), g = {
            autoStartLoad: !0,
            startPosition: -1,
            defaultAudioCodec: void 0,
            debug: !1,
            capLevelOnFPSDrop: !1,
            capLevelToPlayerSize: !1,
            initialLiveManifestSize: 1,
            maxBufferLength: 30,
            maxBufferSize: 6e7,
            maxBufferHole: .5,
            lowBufferWatchdogPeriod: .5,
            highBufferWatchdogPeriod: 3,
            nudgeOffset: .1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: .25,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 1 / 0,
            liveSyncDuration: void 0,
            liveMaxLatencyDuration: void 0,
            liveDurationInfinity: !1,
            maxMaxBufferLength: 600,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 1,
            manifestLoadingRetryDelay: 1e3,
            manifestLoadingMaxRetryTimeout: 64e3,
            startLevel: void 0,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 4,
            levelLoadingRetryDelay: 1e3,
            levelLoadingMaxRetryTimeout: 64e3,
            fragLoadingTimeOut: 2e4,
            fragLoadingMaxRetry: 6,
            fragLoadingRetryDelay: 1e3,
            fragLoadingMaxRetryTimeout: 64e3,
            startFragPrefetch: !1,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            loader: s.a,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            abrController: i.a,
            bufferController: n.a,
            capLevelController: a.a,
            fpsController: o.a,
            stretchShortVideoTrack: !1,
            maxAudioFramesDrift: 1,
            forceKeyFrameOnDiscontinuity: !0,
            abrEwmaFastLive: 3,
            abrEwmaSlowLive: 9,
            abrEwmaFastVoD: 3,
            abrEwmaSlowVoD: 9,
            abrEwmaDefaultEstimate: 5e5,
            abrBandWidthFactor: .95,
            abrBandWidthUpFactor: .7,
            abrMaxWithRealBitrate: !1,
            maxStarvationDelay: 4,
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            emeEnabled: !1,
            widevineLicenseUrl: void 0,
            requestMediaKeySystemAccessFunc: v.a
        };
        g.subtitleStreamController = f.a, g.subtitleTrackController = h.a, g.timelineController = c.a, g.cueHandler = d, g.enableCEA708Captions = !0, g.enableWebVTT = !0, g.captionsTextTrack1Label = "English", g.captionsTextTrack1LanguageCode = "en", g.captionsTextTrack2Label = "Spanish", g.captionsTextTrack2LanguageCode = "es", g.subtitleLoadInterval = 8, g.audioStreamController = u.a, g.audioTrackController = l.a, g.emeController = p.a
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(9), u = r(2), d = r(0), c = r(54), h = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), f = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.FRAG_LOADING, o.a.FRAG_LOADED, o.a.FRAG_BUFFERED, o.a.ERROR));
                return a.lastLoadedFragLevel = 0, a._nextAutoLevel = -1, a.hls = r, a.timer = null, a._bwEstimator = null, a.onCheck = a._abandonRulesCheck.bind(a), a
            }
            return a(e, t), e.prototype.destroy = function () {
                this.clearTimer(), s.a.prototype.destroy.call(this)
            },
                e.prototype.onFragLoading = function (t) {
                    var e = t.frag;
                    if ("main" === e.type && (this.timer || (this.fragCurrent = e, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
                        var r = this.hls, i = t.frag.level, n = r.levels[i].details.live, a = r.config, o = void 0, s = void 0;
                        n ? (o = a.abrEwmaFastLive, s = a.abrEwmaSlowLive) : (o = a.abrEwmaFastVoD, s = a.abrEwmaSlowVoD), this._bwEstimator = new c.a(r, s, o, a.abrEwmaDefaultEstimate)
                    }
                },
                e.prototype._abandonRulesCheck = function () {
                    var t = this.hls, e = t.media, r = this.fragCurrent, i = t.minAutoLevel, n = r.loader;
                    if (!n || n.stats && n.stats.aborted) return d.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void (this._nextAutoLevel = -1);
                    var a = n.stats;
                    if (e && a && (!e.paused && 0 !== e.playbackRate || !e.readyState) && r.autoLevel && r.level) {
                        var s = performance.now() - a.trequest, u = Math.abs(e.playbackRate);
                        if (s > 500 * r.duration / u) {
                            var c = t.levels, h = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / s), f = c[r.level], p = f.realBitrate ? Math.max(f.realBitrate, f.bitrate) : f.bitrate, v = a.total ? a.total : Math.max(a.loaded, Math.round(r.duration * p / 8)), g = e.currentTime, y = (v - a.loaded) / h, m = (l.a.bufferInfo(e, g, t.config.maxBufferHole).end - g) / u;
                            if (m < 2 * r.duration / u && y > m) {
                                var b = void 0, E = void 0;
                                for (E = r.level - 1; E > i; E--) {
                                    var T = c[E].realBitrate ? Math.max(c[E].realBitrate, c[E].bitrate) : c[E].bitrate;
                                    if ((b = r.duration * T / (6.4 * h)) < m) break
                                }
                                b < y && (d.b.warn("loading too slow, abort fragment loading and switch to level " + E + ":fragLoadedDelay[" + E + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + b.toFixed(1) + "<" + y.toFixed(1) + ":" + m.toFixed(1)), t.nextLoadLevel = E, this._bwEstimator.sample(s, a.loaded), n.abort(), this.clearTimer(), t.trigger(o.a.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, stats: a }))
                            }
                        }
                    }
                },
                e.prototype.onFragLoaded = function (t) {
                    var e = t.frag;
                    if ("main" === e.type && !isNaN(e.sn)) {
                        if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var r = this.hls.levels[e.level], i = (r.loaded ? r.loaded.bytes : 0) + t.stats.loaded, n = (r.loaded ? r.loaded.duration : 0) + t.frag.duration;
                            r.loaded = { bytes: i, duration: n }, r.realBitrate = Math.round(8 * i / n)
                        }
                        if (t.frag.bitrateTest) {
                            var a = t.stats;
                            a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(t)
                        }
                    }
                },
                e.prototype.onFragBuffered = function (t) {
                    var e = t.stats, r = t.frag;
                    if (!(!0 === e.aborted || "main" !== r.type || isNaN(r.sn) || r.bitrateTest && e.tload !== e.tbuffered)) {
                        var i = e.tparsed - e.trequest;
                        d.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))), this._bwEstimator.sample(i, e.loaded), e.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                    }
                },
                e.prototype.onError = function (t) {
                    switch (t.details) {
                        case u.a.FRAG_LOAD_ERROR:
                        case u.a.FRAG_LOAD_TIMEOUT: this.clearTimer()
                    }
                },
                e.prototype.clearTimer = function () {
                    clearInterval(this.timer), this.timer = null
                },
                e.prototype._findBestLevel = function (t, e, r, i, n, a, o, s, l) {
                    for (var u = n; u >= i; u--) {
                        var c = l[u], h = c.details, f = h ? h.totalduration / h.fragments.length : e, p = !!h && h.live, v = void 0; v = u <= t ? o * r : s * r; var g = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate, y = g * f / v;
                        if (d.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(v) + "/" + g + "/" + f + "/" + a + "/" + y), v > g && (!y || p && !this.bitrateTestDelay || y < a))
                            return u
                    }
                    return -1
                },
                h(e, [
                    {
                        key: "nextAutoLevel",
                        get: function () {
                            var t = this._nextAutoLevel, e = this._bwEstimator;
                            if (!(-1 === t || e && e.canEstimate())) return t;
                            var r = this._nextABRAutoLevel;
                            return -1 !== t && (r = Math.min(t, r)), r
                        },
                        set: function (t) { this._nextAutoLevel = t }
                    }, {
                        key: "_nextABRAutoLevel", get: function () {
                            var t = this.hls, e = t.maxAutoLevel, r = t.levels, i = t.config, n = t.minAutoLevel, a = t.media, o = this.lastLoadedFragLevel, s = this.fragCurrent ? this.fragCurrent.duration : 0, u = a ? a.currentTime : 0, c = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1, h = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate, f = (l.a.bufferInfo(a, u, i.maxBufferHole).end - u) / c, p = this._findBestLevel(o, s, h, n, e, f, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
                            if (p >= 0) return p; d.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                            var v = s ? Math.min(s, i.maxStarvationDelay) : i.maxStarvationDelay, g = i.abrBandWidthFactor, y = i.abrBandWidthUpFactor;
                            if (0 === f) {
                                var m = this.bitrateTestDelay;
                                if (m) {
                                    v = (s ? Math.min(s, i.maxLoadingDelay) : i.maxLoadingDelay) - m, d.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), g = y = 1
                                }
                            }
                            return p = this._findBestLevel(o, s, h, n, e, f + v, g, y, r), Math.max(p, 0)
                        }
                    }
                ]), e
        }
            (s.a);
        e.a = f
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(55), a = function () {
            function t(e, r, a, o) {
                i(this, t), this.hls = e, this.defaultEstimate_ = o, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new n.a(r), this.fast_ = new n.a(a)
            } return t.prototype.sample = function (t, e) {
                t = Math.max(t, this.minDelayMs_);
                var r = 8e3 * e / t, i = t / 1e3;
                this.fast_.sample(i, r), this.slow_.sample(i, r)
            }, t.prototype.canEstimate = function () {
                var t = this.fast_; return t && t.getTotalWeight() >= this.minWeight_
            }, t.prototype.getEstimate = function () {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
            }, t.prototype.destroy = function () { }, t
        }();
        e.a = a
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = function () {
            function t(e) {
                i(this, t), this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
            }
            return t.prototype.sample = function (t, e) {
                var r = Math.pow(this.alpha_, t);
                this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
            }, t.prototype.getTotalWeight = function () {
                return this.totalWeight_
            }, t.prototype.getEstimate = function () {
                if (this.alpha_) {
                    var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    return this.estimate_ / t
                }
                return this.estimate_
            }, t
        }();
        e.a = n
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(0), u = r(2), d = r(12), c = Object(d.a)(), h = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, o.a.MEDIA_ATTACHING, o.a.MEDIA_DETACHING, o.a.MANIFEST_PARSED, o.a.BUFFER_RESET, o.a.BUFFER_APPENDING, o.a.BUFFER_CODECS, o.a.BUFFER_EOS, o.a.BUFFER_FLUSHING, o.a.LEVEL_PTS_UPDATED, o.a.LEVEL_UPDATED));
                return a._msDuration = null, a._levelDuration = null, a._live = null, a._objectUrl = null, a.onsbue = a.onSBUpdateEnd.bind(a), a.onsbe = a.onSBUpdateError.bind(a), a.pendingTracks = {}, a.tracks = {}, a
            }
            return a(e, t), e.prototype.destroy = function () {
                s.a.prototype.destroy.call(this)
            }, e.prototype.onLevelPtsUpdated = function (t) {
                var e = t.type, r = this.tracks.audio;
                if ("audio" === e && r && "audio/mpeg" === r.container) {
                    var i = this.sourceBuffer.audio;
                    if (Math.abs(i.timestampOffset - t.start) > .1) {
                        var n = i.updating;
                        try { i.abort() }
                        catch (t) { n = !0, l.b.warn("can not abort audio buffer: " + t) } n ? this.audioTimestampOffset = t.start : (l.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + t.start), i.timestampOffset = t.start)
                    }
                }
            },
                e.prototype.onManifestParsed = function (t) {
                    var e = t.audio, r = t.video || t.levels.length && t.altAudio, i = 0; t.altAudio && (e || r) && (i = (e ? 1 : 0) + (r ? 1 : 0), l.b.log(i + " sourceBuffer(s) expected")), this.sourceBufferNb = i
                },
                e.prototype.onMediaAttaching = function (t) {
                    var e = this.media = t.media;
                    if (e) {
                        var r = this.mediaSource = new c;
                        this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), e.src = URL.createObjectURL(r), this._objectUrl = e.src
                    }
                },
                e.prototype.onMediaDetaching = function () {
                    l.b.log("media source detaching");
                    var t = this.mediaSource;
                    if (t) {
                        if ("open" === t.readyState) try {
                            t.endOfStream()
                        }
                            catch (t) {
                                l.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                            } t.removeEventListener("sourceopen", this.onmso), t.removeEventListener("sourceended", this.onmse), t.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : l.b.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                    } this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(o.a.MEDIA_DETACHED)
                },
                e.prototype.onMediaSourceOpen = function () {
                    l.b.log("media source opened"), this.hls.trigger(o.a.MEDIA_ATTACHED, { media: this.media });
                    var t = this.mediaSource; t && t.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                },
                e.prototype.checkPendingTracks = function () {
                    var t = this.pendingTracks, e = Object.keys(t).length; e && (this.sourceBufferNb <= e || 0 === this.sourceBufferNb) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                },
                e.prototype.onMediaSourceClose = function () {
                    l.b.log("media source closed")
                },
                e.prototype.onMediaSourceEnded = function () {
                    l.b.log("media source ended")
                },
                e.prototype.onSBUpdateEnd = function () {
                    if (this.audioTimestampOffset) {
                        var t = this.sourceBuffer.audio; l.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + this.audioTimestampOffset), t.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
                    }
                    this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
                    var e = this.parent, r = this.segments.reduce(function (t, r) { return r.parent === e ? t + 1 : t }, 0), i = {}, n = this.sourceBuffer;
                    for (var a in n) i[a] = n[a].buffered; this.hls.trigger(o.a.BUFFER_APPENDED, { parent: e, pending: r, timeRanges: i }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                },
                e.prototype.onSBUpdateError = function (t) {
                    l.b.error("sourceBuffer error:", t), this.hls.trigger(o.a.ERROR, { type: u.b.MEDIA_ERROR, details: u.a.BUFFER_APPENDING_ERROR, fatal: !1 })
                },
                e.prototype.onBufferReset = function () {
                    var t = this.sourceBuffer;
                    for (var e in t) {
                        var r = t[e];
                        try {
                            this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe)
                        }
                        catch (t) { }
                    } this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                },
                e.prototype.onBufferCodecs = function (t) {
                    if (0 === Object.keys(this.sourceBuffer).length) {
                        for (var e in t) this.pendingTracks[e] = t[e];
                        var r = this.mediaSource;
                        r && "open" === r.readyState && this.checkPendingTracks()
                    }
                },
                e.prototype.createSourceBuffers = function (t) {
                    var e = this.sourceBuffer, r = this.mediaSource;
                    for (var i in t) if (!e[i]) {
                        var n = t[i], a = n.levelCodec || n.codec, s = n.container + ";codecs=" + a;
                        l.b.log("creating sourceBuffer(" + s + ")");
                        try {
                            var d = e[i] = r.addSourceBuffer(s);
                            d.addEventListener("updateend", this.onsbue), d.addEventListener("error", this.onsbe), this.tracks[i] = { codec: a, container: n.container }, n.buffer = d
                        }
                        catch (t) {
                            l.b.error("error while trying to add sourceBuffer:" + t.message), this.hls.trigger(o.a.ERROR, { type: u.b.MEDIA_ERROR, details: u.a.BUFFER_ADD_CODEC_ERROR, fatal: !1, err: t, mimeType: s })
                        }
                    }
                    this.hls.trigger(o.a.BUFFER_CREATED, { tracks: t })
                },
                e.prototype.onBufferAppending = function (t) {
                    this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
                },
                e.prototype.onBufferAppendFail = function (t) {
                    l.b.error("sourceBuffer error:", t.event), this.hls.trigger(o.a.ERROR, { type: u.b.MEDIA_ERROR, details: u.a.BUFFER_APPENDING_ERROR, fatal: !1 })
                },
                e.prototype.onBufferEos = function (t) {
                    var e = this.sourceBuffer, r = t.type;
                    for (var i in e) r && i !== r || e[i].ended || (e[i].ended = !0, l.b.log(i + " sourceBuffer now EOS"));
                    this.checkEos()
                },
                e.prototype.checkEos = function () {
                    var t = this.sourceBuffer, e = this.mediaSource;
                    if (!e || "open" !== e.readyState) return void (this._needsEos = !1);
                    for (var r in t) {
                        var i = t[r];
                        if (!i.ended) return;
                        if (i.updating) return void (this._needsEos = !0)
                    }
                    l.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                    try { e.endOfStream() }
                    catch (t) {
                        l.b.warn("exception while calling mediaSource.endOfStream()")
                    }
                    this._needsEos = !1
                },
                e.prototype.onBufferFlushing = function (t) {
                    this.flushRange.push({ start: t.startOffset, end: t.endOffset, type: t.type }), this.flushBufferCounter = 0, this.doFlush()
                },
                e.prototype.onLevelUpdated = function (t) {
                    var e = t.details;
                    e.fragments.length > 0 && (this._levelDuration = e.totalduration + e.fragments[0].start, this._live = e.live, this.updateMediaElementDuration())
                },
                e.prototype.updateMediaElementDuration = function () {
                    var t = this.hls.config, e = void 0;
                    if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                        for (var r in this.sourceBuffer) if (!0 === this.sourceBuffer[r].updating) return;
                        e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (l.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || e === 1 / 0 || isNaN(e)) && (l.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                    }
                },
                e.prototype.doFlush = function () {
                    for (; this.flushRange.length;) {
                        var t = this.flushRange[0];
                        if (!this.flushBuffer(t.start, t.end, t.type)) return void (this._needsFlush = !0);
                        this.flushRange.shift(), this.flushBufferCounter = 0
                    }
                    if (0 === this.flushRange.length) {
                        this._needsFlush = !1;
                        var e = 0, r = this.sourceBuffer;
                        try { for (var i in r) e += r[i].buffered.length } catch (t) { l.b.error("error while accessing sourceBuffer.buffered") }
                        this.appended = e, this.hls.trigger(o.a.BUFFER_FLUSHED)
                    }
                },
                e.prototype.doAppending = function () {
                    var t = this.hls, e = this.sourceBuffer, r = this.segments;
                    if (Object.keys(e).length) {
                        if (this.media.error) return this.segments = [], void l.b.error("trying to append although a media error occured, flush segment and abort");
                        if (this.appending) return;
                        if (r && r.length) {
                            var i = r.shift();
                            try {
                                var n = i.type, a = e[n];
                                a ? a.updating ? r.unshift(i) : (a.ended = !1, this.parent = i.parent, a.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                            }
                            catch (e) {
                                l.b.error("error while trying to append buffer:" + e.message), r.unshift(i);
                                var s = { type: u.b.MEDIA_ERROR, parent: i.parent };
                                22 !== e.code ? (this.appendError ? this.appendError++ : this.appendError = 1, s.details = u.a.BUFFER_APPEND_ERROR, this.appendError > t.config.appendErrorMaxRetry ? (l.b.log("fail " + t.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], s.fatal = !0, t.trigger(o.a.ERROR, s)) : (s.fatal = !1, t.trigger(o.a.ERROR, s))) : (this.segments = [], s.details = u.a.BUFFER_FULL_ERROR, s.fatal = !1, t.trigger(o.a.ERROR, s))
                            }
                        }
                    }
                },
                e.prototype.flushBuffer = function (t, e, r) {
                    var i = void 0, n = void 0, a = void 0, o = void 0, s = void 0, u = void 0, d = this.sourceBuffer;
                    if (Object.keys(d).length) {
                        if (l.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + e), this.flushBufferCounter < this.appended) {
                            for (var c in d) if (!r || c === r) {
                                if (i = d[c], i.ended = !1, i.updating) return l.b.warn("cannot flush, sb updating in progress"), !1;
                                try {
                                    for (n = 0; n < i.buffered.length; n++)if (a = i.buffered.start(n), o = i.buffered.end(n), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && e === Number.POSITIVE_INFINITY ? (s = t, u = e) : (s = Math.max(a, t), u = Math.min(o, e)), Math.min(u, o) - s > .5) return this.flushBufferCounter++, l.b.log("flush " + c + " [" + s + "," + u + "], of [" + a + "," + o + "], pos:" + this.media.currentTime), i.remove(s, u), !1
                                }
                                catch (t) { l.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource") }
                            }
                        }
                        else l.b.warn("abort flushing too many retries"); l.b.log("buffer flushed")
                    }
                    return !0
                },
                e
        }(s.a);
        e.a = h
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(),
            u = function (t) {
                function e(r) {
                    i(this, e);
                    var a = n(this, t.call(this, r, o.a.FPS_DROP_LEVEL_CAPPING, o.a.MEDIA_ATTACHING, o.a.MANIFEST_PARSED, o.a.BUFFER_CODECS));
                    return a.autoLevelCapping = Number.POSITIVE_INFINITY, a.firstLevel = null, a.levels = [], a.media = null, a.restrictedLevels = [], a.timer = null, a
                }
                return a(e, t), e.prototype.destroy = function () {
                    this.hls.config.capLevelToPlayerSize && (this.media = null, this._stopCapping())
                },
                    e.prototype.onFpsDropLevelCapping = function (t) {
                        e.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
                    },
                    e.prototype.onMediaAttaching = function (t) {
                        this.media = t.media instanceof HTMLVideoElement ? t.media : null
                    },
                    e.prototype.onManifestParsed = function (t) {
                        var e = this.hls; this.restrictedLevels = [], this.levels = t.levels, this.firstLevel = t.firstLevel, e.config.capLevelToPlayerSize && (t.video || t.levels.length && t.altAudio) && this._startCapping()
                    },
                    e.prototype.onBufferCodecs = function (t) {
                        this.hls.config.capLevelToPlayerSize && t.video && this._startCapping()
                    },
                    e.prototype.onLevelsUpdated = function (t) {
                        this.levels = t.levels
                    },
                    e.prototype.detectPlayerSize = function () {
                        if (this.media) {
                            var t = this.levels ? this.levels.length : 0;
                            if (t) {
                                var e = this.hls; e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                            }
                        }
                    },
                    e.prototype.getMaxLevel = function (t) {
                        var r = this;
                        if (!this.levels) return -1;
                        var i = this.levels.filter(function (i, n) {
                            return e.isLevelAllowed(n, r.restrictedLevels) && n <= t
                        });
                        return e.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
                    },
                    e.prototype._startCapping = function () {
                        this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                    },
                    e.prototype._stopCapping = function () {
                        this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
                    },
                    e.isLevelAllowed = function (t) {
                        return -1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(t)
                    },
                    e.getMaxLevelByMediaSize = function (t, e, r) {
                        if (!t || t && !t.length) return -1;
                        for (var i = t.length - 1, n = 0; n < t.length; n += 1) {
                            var a = t[n];
                            if ((a.width >= e || a.height >= r) && function (t, e) {
                                return !e || (t.width !== e.width || t.height !== e.height)
                            }
                                (a, t[n + 1])) {
                                i = n; break
                            }
                        }
                        return i
                    },
                    l(e, [
                        {
                            key: "mediaWidth",
                            get: function () {
                                var t = void 0, r = this.media;
                                return r && (t = r.width || r.clientWidth || r.offsetWidth, t *= e.contentScaleFactor), t
                            }
                        }, {
                            key: "mediaHeight",
                            get: function () {
                                var t = void 0, r = this.media;
                                return r && (t = r.height || r.clientHeight || r.offsetHeight, t *= e.contentScaleFactor), t
                            }
                        }
                    ], [
                        {
                            key: "contentScaleFactor",
                            get: function () {
                                var t = 1;
                                try { t = window.devicePixelRatio } catch (t) { } return t
                            }
                        }
                    ]), e
            }(s.a);
        e.a = u
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(0), u = function (t) {
            function e(r) {
                return i(this, e), n(this, t.call(this, r, o.a.MEDIA_ATTACHING))
            }
            return a(e, t), e.prototype.destroy = function () {
                this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
            },
                e.prototype.onMediaAttaching = function (t) {
                    var e = this.hls.config; if (e.capLevelOnFPSDrop) {
                        "function" == typeof (this.video = t.media instanceof HTMLVideoElement ? t.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod)
                    }
                },
                e.prototype.checkFPS = function (t, e, r) {
                    var i = performance.now();
                    if (e) {
                        if (this.lastTime) {
                            var n = i - this.lastTime, a = r - this.lastDroppedFrames, s = e - this.lastDecodedFrames, u = 1e3 * a / n, d = this.hls;
                            if (d.trigger(o.a.FPS_DROP, { currentDropped: a, currentDecoded: s, totalDroppedFrames: r }), u > 0 && a > d.config.fpsDroppedMonitoringThreshold * s) {
                                var c = d.currentLevel;
                                l.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c), c > 0 && (-1 === d.autoLevelCapping || d.autoLevelCapping >= c) && (c -= 1, d.trigger(o.a.FPS_DROP_LEVEL_CAPPING, { level: c, droppedLevel: d.currentLevel }), d.autoLevelCapping = c, d.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                    }
                },
                e.prototype.checkFPSInterval = function () {
                    var t = this.video;
                    if (t)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var e = t.getVideoPlaybackQuality();
                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                        }
                        else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                },
                e
        }
            (s.a);
        e.a = u
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = r(0), a = function () {
            function t(e) {
                i(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
            } return t.prototype.destroy = function () {
                this.abort(), this.loader = null
            },
                t.prototype.abort = function () {
                    var t = this.loader;
                    t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                },
                t.prototype.load = function (t, e, r) {
                    this.context = t, this.config = e, this.callbacks = r, this.stats = { trequest: performance.now(), retry: 0 }, this.retryDelay = e.retryDelay, this.loadInternal()
                },
                t.prototype.loadInternal = function () {
                    var t = void 0, e = this.context;
                    t = this.loader = new XMLHttpRequest;
                    var r = this.stats;
                    r.tfirst = 0, r.loaded = 0;
                    var i = this.xhrSetup;
                    try {
                        if (i) try { i(t, e.url) } catch (r) {
                            t.open("GET", e.url, !0), i(t, e.url)
                        }
                        t.readyState || t.open("GET", e.url, !0)
                    }
                    catch (r) {
                        return void this.callbacks.onError({ code: t.status, text: r.message }, e, t)
                    }
                    e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), t.send()
                },
                t.prototype.readystatechange = function (t) {
                    var e = t.currentTarget, r = e.readyState, i = this.stats, a = this.context, o = this.config;
                    if (!i.aborted && r >= 2)
                        if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest)), 4 === r) {
                            var s = e.status;
                            if (s >= 200 && s < 300) {
                                i.tload = Math.max(i.tfirst, performance.now());
                                var l = void 0, u = void 0;
                                "arraybuffer" === a.responseType ? (l = e.response, u = l.byteLength) : (l = e.responseText, u = l.length), i.loaded = i.total = u;
                                var d = { url: e.responseURL, data: l };
                                this.callbacks.onSuccess(d, i, a, e)
                            }
                            else i.retry >= o.maxRetry || s >= 400 && s < 499 ? (n.b.error(s + " while loading " + a.url), this.callbacks.onError({ code: s, text: e.statusText }, a, e)) : (n.b.warn(s + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), i.retry++)
                        }
                        else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), o.timeout)
                },
                t.prototype.loadtimeout = function () {
                    n.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                },
                t.prototype.loadprogress = function (t) {
                    var e = t.currentTarget, r = this.stats; r.loaded = t.loaded, t.lengthComputable && (r.total = t.total);
                    var i = this.callbacks.onProgress; i && i(r, this.context, null, e)
                },
                t
        }();
        e.a = a
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(3), l = r(0), u = r(2), d = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(),
            c = function (t) {
                function e(r) {
                    i(this, e);
                    var a = n(this, t.call(this, r, o.a.MANIFEST_LOADING, o.a.MANIFEST_PARSED, o.a.AUDIO_TRACK_LOADED, o.a.ERROR));
                    return a.ticks = 0, a.ontick = a.tick.bind(a), a
                }
                return a(e, t), e.prototype.destroy = function () { this.cleanTimer(), s.a.prototype.destroy.call(this) },
                    e.prototype.cleanTimer = function () { this.timer && (clearTimeout(this.timer), this.timer = null) },
                    e.prototype.tick = function () { 1 === ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0) },
                    e.prototype.doTick = function () { this.updateTrack(this.trackId) },
                    e.prototype.onError = function (t) { t.fatal && t.type === u.b.NETWORK_ERROR && this.cleanTimer() },
                    e.prototype.onManifestLoading = function () { this.tracks = [], this.trackId = -1 },
                    e.prototype.onManifestParsed = function (t) {
                        var e = this, r = t.audioTracks || [], i = !1;
                        this.tracks = r, this.hls.trigger(o.a.AUDIO_TRACKS_UPDATED, { audioTracks: r });
                        var n = 0;
                        r.forEach(function (t) {
                            if (t.default && !i) return e.audioTrack = n, void (i = !0);
                            n++
                        }), !1 === i && r.length && (l.b.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                    },
                    e.prototype.onAudioTrackLoaded = function (t) {
                        t.id < this.tracks.length && (l.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * t.details.targetduration)), !t.details.live && this.timer && this.cleanTimer())
                    },
                    e.prototype.setAudioTrackInternal = function (t) {
                        if (t >= 0 && t < this.tracks.length) {
                            this.cleanTimer(), this.trackId = t, l.b.log("switching to audioTrack " + t); var e = this.tracks[t], r = this.hls, i = e.type, n = e.url, a = { id: t, type: i, url: n }; r.trigger(o.a.AUDIO_TRACK_SWITCHING, a); var s = e.details; !n || void 0 !== s && !0 !== s.live || (l.b.log("(re)loading playlist for audioTrack " + t), r.trigger(o.a.AUDIO_TRACK_LOADING, { url: n, id: t }))
                        }
                    },
                    e.prototype.updateTrack = function (t) {
                        if (t >= 0 && t < this.tracks.length) {
                            this.cleanTimer(), this.trackId = t, l.b.log("updating audioTrack " + t);
                            var e = this.tracks[t], r = e.url, i = e.details;
                            !r || void 0 !== i && !0 !== i.live || (l.b.log("(re)loading playlist for audioTrack " + t), this.hls.trigger(o.a.AUDIO_TRACK_LOADING, { url: r, id: t }))
                        }
                    }, d(e, [
                        {
                            key: "audioTracks",
                            get: function () { return this.tracks }
                        }, {
                            key: "audioTrack",
                            get: function () { return this.trackId },
                            set: function (t) { this.trackId === t && void 0 !== this.tracks[t].details || this.setAudioTrackInternal(t) }
                        }
                    ]),
                    e
            }
                (s.a);
        e.a = c
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(5), s = r(9), l = r(18), u = r(1), d = r(22), c = r(23), h = r(2), f = r(0), p = r(24), v = r(13), g = r(8), y = r(7), m = function () {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function (e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(), b = { STOPPED: "STOPPED", STARTING: "STARTING", IDLE: "IDLE", PAUSED: "PAUSED", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BUFFER_FLUSHING: "BUFFER_FLUSHING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS" }, E = function (t) {
            function e(r, a) {
                i(this, e);
                var o = n(this, t.call(this, r, u.a.MEDIA_ATTACHED, u.a.MEDIA_DETACHING, u.a.AUDIO_TRACKS_UPDATED, u.a.AUDIO_TRACK_SWITCHING, u.a.AUDIO_TRACK_LOADED, u.a.KEY_LOADED, u.a.FRAG_LOADED, u.a.FRAG_PARSING_INIT_SEGMENT, u.a.FRAG_PARSING_DATA, u.a.FRAG_PARSED, u.a.ERROR, u.a.BUFFER_RESET, u.a.BUFFER_CREATED, u.a.BUFFER_APPENDED, u.a.BUFFER_FLUSHED, u.a.INIT_PTS_FOUND));
                return o.fragmentTracker = a, o.config = r.config, o.audioCodecSwap = !1, o._state = b.STOPPED, o.initPTS = [], o.waitingFragment = null, o.videoTrackCC = null, o
            }
            return a(e, t),
                e.prototype.onHandlerDestroying = function () { this.stopLoad() },
                e.prototype.onHandlerDestroyed = function () { this.state = b.STOPPED, this.fragmentTracker = null },
                e.prototype.onInitPtsFound = function (t) {
                    var e = t.id, r = t.frag.cc, i = t.initPTS;
                    "main" === e && (this.initPTS[r] = i, this.videoTrackCC = r, f.b.log("InitPTS for cc: " + r + " found from video track: " + i), this.state === b.WAITING_INIT_PTS && this.tick())
                },
                e.prototype.startLoad = function (t) {
                    if (this.tracks) {
                        var e = this.lastCurrentTime; this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (f.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = b.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = b.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                    }
                    else this.startPosition = t, this.state = b.STOPPED
                },
                e.prototype.stopLoad = function () {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = b.STOPPED
                },
                e.prototype.doTick = function () {
                    var t = void 0, e = void 0, r = void 0, i = this.hls, n = i.config;
                    switch (this.state) {
                        case b.ERROR:
                        case b.PAUSED:
                        case b.BUFFER_FLUSHING: break;
                        case b.STARTING: this.state = b.WAITING_TRACK, this.loadedmetadata = !1; break;
                        case b.IDLE:
                            var a = this.tracks;
                            if (!a) break;
                            if (!this.media && (this.startFragRequested || !n.startFragPrefetch)) break;
                            if (this.loadedmetadata) t = this.media.currentTime;
                            else if (void 0 === (t = this.nextLoadPosition)) break;
                            var l = this.mediaBuffer ? this.mediaBuffer : this.media, d = this.videoBuffer ? this.videoBuffer : this.media, c = s.a.bufferInfo(l, t, n.maxBufferHole), h = s.a.bufferInfo(d, t, n.maxBufferHole), v = c.len, y = c.end, m = this.fragPrevious, E = Math.min(n.maxBufferLength, n.maxMaxBufferLength), T = Math.max(E, h.len), S = this.audioSwitch, _ = this.trackId;
                            if ((v < T || S) && _ < a.length) {
                                if (void 0 === (r = a[_].details)) {
                                    this.state = b.WAITING_TRACK;
                                    break
                                }
                                if (!S && !r.live && m && m.sn === r.endSN && !c.nextStart && (!this.media.seeking || this.media.duration - y < m.duration / 2)) {
                                    this.hls.trigger(u.a.BUFFER_EOS, { type: "audio" }), this.state = b.ENDED;
                                    break
                                }
                                var A = r.fragments, R = A.length, w = A[0].start, L = A[R - 1].start + A[R - 1].duration, D = void 0;
                                if (S) if (r.live && !r.PTSKnown) f.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), y = 0;
                                else if (y = t, r.PTSKnown && t < w) {
                                    if (!(c.end > w || c.nextStart)) return;
                                    f.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = w + .05
                                }
                                if (r.initSegment && !r.initSegment.data) D = r.initSegment;
                                else if (y <= w) {
                                    if (D = A[0], null !== this.videoTrackCC && D.cc !== this.videoTrackCC && (D = Object(p.b)(A, this.videoTrackCC)), r.live && D.loadIdx && D.loadIdx === this.fragLoadIdx) {
                                        var I = c.nextStart ? c.nextStart : w;
                                        return f.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (I + .05)), void (this.media.currentTime = I + .05)
                                    }
                                }
                                else {
                                    var k = void 0, O = n.maxFragLookUpTolerance, C = m ? A[m.sn - A[0].sn + 1] : void 0, P = function (t) {
                                        var e = Math.min(O, t.duration);
                                        return t.start + t.duration - e <= y ? 1 : t.start - e > y && t.start ? -1 : 0
                                    };
                                    y < L ? (y > L - O && (O = 0), k = C && !P(C) ? C : o.a.search(A, P)) : k = A[R - 1], k && (D = k, w = k.start, m && D.level === m.level && D.sn === m.sn && (D.sn < r.endSN ? (D = A[D.sn + 1 - r.startSN], f.b.log("SN just loaded, load next one: " + D.sn)) : D = null))
                                }
                                D && (D.encrypted ? (f.b.log("Loading key for " + D.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + _), this.state = b.KEY_LOADING, i.trigger(u.a.KEY_LOADING, { frag: D })) : (f.b.log("Loading " + D.sn + ", cc: " + D.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + _ + ", currentTime:" + t + ",bufferEnd:" + y.toFixed(3)), (S || this.fragmentTracker.getState(D) === g.a.NOT_LOADED) && (this.fragCurrent = D, this.startFragRequested = !0, isNaN(D.sn) || (this.nextLoadPosition = D.start + D.duration), i.trigger(u.a.FRAG_LOADING, { frag: D }), this.state = b.FRAG_LOADING)))
                            } break;
                        case b.WAITING_TRACK: e = this.tracks[this.trackId], e && e.details && (this.state = b.IDLE); break;
                        case b.FRAG_LOADING_WAITING_RETRY:
                            var x = performance.now(), F = this.retryDate;
                            l = this.media;
                            var N = l && l.seeking;
                            (!F || x >= F || N) && (f.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = b.IDLE);
                            break;
                        case b.WAITING_INIT_PTS:
                            var M = this.videoTrackCC;
                            if (void 0 === this.initPTS[M]) break;
                            var U = this.waitingFragment;
                            if (U) {
                                var B = U.frag.cc;
                                M !== B ? (e = this.tracks[this.trackId], e.details && e.details.live && (f.b.warn("Waiting fragment CC (" + B + ") does not match video track CC (" + M + ")"), this.waitingFragment = null, this.state = b.IDLE)) : (this.state = b.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                            }
                            else this.state = b.IDLE;
                            break;
                        case b.STOPPED:
                        case b.FRAG_LOADING:
                        case b.PARSING:
                        case b.PARSED:
                        case b.ENDED:
                    }
                },
                e.prototype.onMediaAttached = function (t) {
                    var e = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                },
                e.prototype.onMediaDetaching = function () {
                    var t = this.media;
                    t && t.ended && (f.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                },
                e.prototype.onMediaSeeking = function () {
                    this.state === b.ENDED && (this.state = b.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), this.tick()
                },
                e.prototype.onMediaEnded = function () {
                    this.startPosition = this.lastCurrentTime = 0
                },
                e.prototype.onAudioTracksUpdated = function (t) {
                    f.b.log("audio tracks updated"), this.tracks = t.audioTracks
                },
                e.prototype.onAudioTrackSwitching = function (t) {
                    var e = !!t.url; this.trackId = t.id, this.fragCurrent = null, this.state = b.PAUSED, this.waitingFragment = null, e ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), e && (this.audioSwitch = !0, this.state = b.IDLE), this.tick()
                },
                e.prototype.onAudioTrackLoaded = function (t) {
                    var e = t.details, r = t.id, i = this.tracks[r], n = e.totalduration, a = 0;
                    if (f.b.log("track " + r + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + n), e.live) {
                        var o = i.details; o && e.fragments.length > 0 ? (d.a(o, e), a = e.fragments[0].start, e.PTSKnown ? f.b.log("live audio playlist sliding:" + a.toFixed(3)) : f.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, f.b.log("live audio playlist - first load, unknown sliding"))
                    }
                    else e.PTSKnown = !1;
                    if (i.details = e, !this.startFragRequested) {
                        if (-1 === this.startPosition) {
                            var s = e.startTimeOffset;
                            isNaN(s) ? this.startPosition = 0 : (f.b.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s)
                        } this.nextLoadPosition = this.startPosition
                    } this.state === b.WAITING_TRACK && (this.state = b.IDLE), this.tick()
                },
                e.prototype.onKeyLoaded = function () {
                    this.state === b.KEY_LOADING && (this.state = b.IDLE, this.tick())
                },
                e.prototype.onFragLoaded = function (t) {
                    var e = this.fragCurrent, r = t.frag;
                    if (this.state === b.FRAG_LOADING && e && "audio" === r.type && r.level === e.level && r.sn === e.sn) {
                        var i = this.tracks[this.trackId], n = i.details, a = n.totalduration, o = e.level, s = e.sn, d = e.cc, c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2", h = this.stats = t.stats;
                        if ("initSegment" === s) this.state = b.IDLE, h.tparsed = h.tbuffered = performance.now(), n.initSegment.data = t.payload, this.hls.trigger(u.a.FRAG_BUFFERED, { stats: h, frag: e, id: "audio" }), this.tick();
                        else {
                            this.state = b.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new l.a(this.hls, "audio"));
                            var p = this.initPTS[d], v = n.initSegment ? n.initSegment.data : [];
                            if (n.initSegment || void 0 !== p) {
                                this.pendingBuffering = !0, f.b.log("Demuxing " + s + " of [" + n.startSN + " ," + n.endSN + "],track " + o); this.demuxer.push(t.payload, v, c, null, e, a, !1, p)
                            }
                            else f.b.log("unknown video PTS for continuity counter " + d + ", waiting for video PTS before demuxing audio frag " + s + " of [" + n.startSN + " ," + n.endSN + "],track " + o), this.waitingFragment = t, this.state = b.WAITING_INIT_PTS
                        }
                    } this.fragLoadError = 0
                },
                e.prototype.onFragParsingInitSegment = function (t) {
                    var e = this.fragCurrent, r = t.frag;
                    if (e && "audio" === t.id && r.sn === e.sn && r.level === e.level && this.state === b.PARSING) {
                        var i = t.tracks, n = void 0;
                        if (i.video && delete i.video, n = i.audio) {
                            n.levelCodec = n.codec, n.id = t.id, this.hls.trigger(u.a.BUFFER_CODECS, i), f.b.log("audio track:audio,container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                            var a = n.initSegment;
                            if (a) {
                                var o = { type: "audio", data: a, parent: "audio", content: "initSegment" };
                                this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(u.a.BUFFER_APPENDING, o))
                            }
                            this.tick()
                        }
                    }
                },
                e.prototype.onFragParsingData = function (t) {
                    var e = this, r = this.fragCurrent, i = t.frag;
                    if (r && "audio" === t.id && "audio" === t.type && i.sn === r.sn && i.level === r.level && this.state === b.PARSING) {
                        var n = this.trackId, a = this.tracks[n], o = this.hls;
                        isNaN(t.endPTS) && (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), r.addElementaryStream(y.a.ElementaryStreamTypes.AUDIO), f.b.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), d.b(a.details, r, t.startPTS, t.endPTS);
                        var s = this.audioSwitch, l = this.media, c = !1;
                        if (s && l)
                            if (l.readyState) {
                                var p = l.currentTime;
                                f.b.log("switching audio track : currentTime:" + p), p >= t.startPTS && (f.b.log("switching audio track : flushing all audio"), this.state = b.BUFFER_FLUSHING, o.trigger(u.a.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), c = !0, this.audioSwitch = !1, o.trigger(u.a.AUDIO_TRACK_SWITCHED, { id: n }))
                            }
                            else this.audioSwitch = !1, o.trigger(u.a.AUDIO_TRACK_SWITCHED, { id: n });
                        var v = this.pendingData;
                        if (!v) return console.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void o.trigger(u.a.ERROR, { type: h.b.MEDIA_ERROR, details: null, fatal: !0 });
                        this.audioSwitch || ([t.data1, t.data2].forEach(function (e) {
                            e && e.length && v.push({ type: t.type, data: e, parent: "audio", content: "data" })
                        }), !c && v.length && (v.forEach(function (t) {
                            e.state === b.PARSING && (e.pendingBuffering = !0, e.hls.trigger(u.a.BUFFER_APPENDING, t))
                        }), this.pendingData = [], this.appended = !0)), this.tick()
                    }
                },
                e.prototype.onFragParsed = function (t) {
                    var e = this.fragCurrent, r = t.frag;
                    e && "audio" === t.id && r.sn === e.sn && r.level === e.level && this.state === b.PARSING && (this.stats.tparsed = performance.now(), this.state = b.PARSED, this._checkAppendedParsed())
                },
                e.prototype.onBufferReset = function () {
                    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                },
                e.prototype.onBufferCreated = function (t) {
                    var e = t.tracks.audio; e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
                },
                e.prototype.onBufferAppended = function (t) {
                    if ("audio" === t.parent) {
                        var e = this.state;
                        e !== b.PARSING && e !== b.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                    }
                },
                e.prototype._checkAppendedParsed = function () {
                    if (!(this.state !== b.PARSED || this.appended && this.pendingBuffering)) {
                        var t = this.fragCurrent, e = this.stats, r = this.hls;
                        if (t) {
                            this.fragPrevious = t, e.tbuffered = performance.now(), r.trigger(u.a.FRAG_BUFFERED, { stats: e, frag: t, id: "audio" });
                            var i = this.mediaBuffer ? this.mediaBuffer : this.media; f.b.log("audio buffered : " + c.a.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(u.a.AUDIO_TRACK_SWITCHED, { id: this.trackId })), this.state = b.IDLE
                        } this.tick()
                    }
                },
                e.prototype.onError = function (t) {
                    var e = t.frag;
                    if (!e || "audio" === e.type)
                        switch (t.details) {
                            case h.a.FRAG_LOAD_ERROR:
                            case h.a.FRAG_LOAD_TIMEOUT: if (!t.fatal) {
                                var r = this.fragLoadError;
                                r ? r++ : r = 1;
                                var i = this.config;
                                if (r <= i.fragLoadingMaxRetry) {
                                    this.fragLoadError = r;
                                    var n = Math.min(Math.pow(2, r - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                    f.b.warn("audioStreamController: frag loading failed, retry in " + n + " ms"), this.retryDate = performance.now() + n, this.state = b.FRAG_LOADING_WAITING_RETRY
                                }
                                else f.b.error("audioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = b.ERROR
                            } break;
                            case h.a.AUDIO_TRACK_LOAD_ERROR:
                            case h.a.AUDIO_TRACK_LOAD_TIMEOUT:
                            case h.a.KEY_LOAD_ERROR:
                            case h.a.KEY_LOAD_TIMEOUT: this.state !== b.ERROR && (this.state = t.fatal ? b.ERROR : b.IDLE, f.b.warn("audioStreamController: " + t.details + " while loading frag,switch to " + this.state + " state ...")); break;
                            case h.a.BUFFER_FULL_ERROR: if ("audio" === t.parent && (this.state === b.PARSING || this.state === b.PARSED)) {
                                var a = this.mediaBuffer, o = this.media.currentTime;
                                if (a && s.a.isBuffered(a, o) && s.a.isBuffered(a, o + .5)) {
                                    var l = this.config; l.maxMaxBufferLength >= l.maxBufferLength && (l.maxMaxBufferLength /= 2, f.b.warn("audio:reduce max buffer length to " + l.maxMaxBufferLength + "s")), this.state = b.IDLE
                                }
                                else f.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = b.BUFFER_FLUSHING, this.hls.trigger(u.a.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" })
                            }
                        }
                },
                e.prototype.onBufferFlushed = function () {
                    var t = this, e = this.pendingData;
                    e && e.length ? (f.b.log("appending pending audio data on Buffer Flushed"), e.forEach(function (e) { t.hls.trigger(u.a.BUFFER_APPENDING, e) }), this.appended = !0, this.pendingData = [], this.state = b.PARSED) : (this.state = b.IDLE, this.fragPrevious = null, this.tick())
                }, m(e, [
                    {
                        key: "state",
                        set: function (t) {
                            if (this.state !== t) {
                                var e = this.state;
                                this._state = t, f.b.log("audio stream:" + e + "->" + t)
                            }
                        }, get: function () { return this._state }
                    }
                ]), e
        }(v.a); e.a = E
    },
    function (t, e, r) {
        "use strict";
        function i(t, e, r, i) {
            for (var a = void 0, o = void 0, s = void 0, l = void 0, u = void 0, d = window.VTTCue || window.TextTrackCue, c = 0; c < i.rows.length; c++)if (a = i.rows[c], s = !0, l = 0, u = "", !a.isEmpty()) {
                for (var h = 0; h < a.chars.length; h++)a.chars[h].uchar.match(/\s/) && s ? l++ : (u += a.chars[h].uchar, s = !1);
                a.cueStartTime = e, e === r && (r += 1e-4), o = new d(e, r, Object(n.b)(u.trim())), l >= 16 ? l-- : l++, navigator.userAgent.match(/Firefox\//) ? o.line = c + 1 : o.line = c > 7 ? c - 2 : c + 1, o.align = "left", o.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), t.addCue(o)
            }
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.newCue = i; var n = r(26)
    },
    function (t, e, r) {
        "use strict";
        e.a = function () {
            function t(t) {
                return "string" == typeof t && (!!a[t.toLowerCase()] && t.toLowerCase())
            }
            function e(t) {
                return "string" == typeof t && (!!o[t.toLowerCase()] && t.toLowerCase())
            }
            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var i in r) t[i] = r[i]
                }
                return t
            }
            function i(i, a, o) {
                var s = this, l = function () {
                    if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
                }(), u = {}; l ? s = document.createElement("custom") : u.enumerable = !0, s.hasBeenReset = !1; var d = "", c = !1, h = i, f = a, p = o, v = null, g = "", y = !0, m = "auto", b = "start", E = 50, T = "middle", S = 50, _ = "middle";
                if (Object.defineProperty(s, "id", r({}, u, { get: function () { return d }, set: function (t) { d = "" + t } })),
                    Object.defineProperty(s, "pauseOnExit", r({}, u, {
                        get: function () { return c }, set: function (t) { c = !!t }
                    })),
                    Object.defineProperty(s, "startTime", r({}, u, {
                        get: function () { return h }, set: function (t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            h = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "endTime", r({}, u, {
                        get: function () { return f }, set: function (t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            f = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "text", r({}, u, {
                        get: function () { return p }, set: function (t) {
                            p = "" + t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "region", r({}, u, {
                        get: function () { return v }, set: function (t) {
                            v = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "vertical", r({}, u, {
                        get: function () { return g }, set: function (e) {
                            var r = t(e);
                            if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                            g = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "snapToLines", r({}, u, {
                        get: function () { return y }, set: function (t) {
                            y = !!t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "line", r({}, u, {
                        get: function () { return m }, set: function (t) {
                            if ("number" != typeof t && t !== n) throw new SyntaxError("An invalid number or illegal string was specified.");
                            m = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "lineAlign", r({}, u, {
                        get: function () { return b }, set: function (t) {
                            var r = e(t);
                            if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                            b = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "position", r({}, u, {
                        get: function () { return E }, set: function (t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            E = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "positionAlign", r({}, u, {
                        get: function () { return T }, set: function (t) {
                            var r = e(t);
                            if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                            T = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "size", r({}, u, {
                        get: function () { return S }, set: function (t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            S = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "align", r({}, u, {
                        get: function () { return _ }, set: function (t) {
                            var r = e(t);
                            if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                            _ = r, this.hasBeenReset = !0
                        }
                    })),
                    s.displayState = void 0, l)
                    return s
            } if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
            var n = "auto", a = { "": !0, lr: !0, rl: !0 }, o = { start: !0, middle: !0, end: !0, left: !0, right: !0 };
            return i.prototype.getCueAsHTML = function () { return window.WebVTT.convertCueToDOMTree(window, this.text) }, i
        }()
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function o(t, e) {
            return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
        }
        function s(t, e, r, i) {
            return Math.min(e, i) - Math.max(t, r)
        }
        var l = r(1), u = r(3), d = r(65), c = r(66), h = r(67), f = r(0), p = r(25), v = function (t) {
            function e(r) {
                i(this, e);
                var a = n(this, t.call(this, r, l.a.MEDIA_ATTACHING, l.a.MEDIA_DETACHING, l.a.FRAG_PARSING_USERDATA, l.a.FRAG_DECRYPTED, l.a.MANIFEST_LOADING, l.a.MANIFEST_LOADED, l.a.FRAG_LOADED, l.a.LEVEL_SWITCHING, l.a.INIT_PTS_FOUND));
                if (a.hls = r, a.config = r.config, a.enabled = !0, a.Cues = r.config.cueHandler, a.textTracks = [], a.tracks = [], a.unparsedVttFrags = [], a.initPTS = void 0, a.cueRanges = [], a.captionsTracks = {}, a.captionsProperties = { textTrack1: { label: a.config.captionsTextTrack1Label, languageCode: a.config.captionsTextTrack1LanguageCode }, textTrack2: { label: a.config.captionsTextTrack2Label, languageCode: a.config.captionsTextTrack2LanguageCode } }, a.config.enableCEA708Captions) {
                    var o = new c.a(a, "textTrack1"), s = new c.a(a, "textTrack2");
                    a.cea608Parser = new d.a(0, o, s)
                }
                return a
            }
            return a(e, t), e.prototype.addCues = function (t, e, r, i) {
                for (var n = this.cueRanges, a = !1, o = n.length; o--;) {
                    var l = n[o], u = s(l[0], l[1], e, r);
                    if (u >= 0 && (l[0] = Math.min(l[0], e), l[1] = Math.max(l[1], r), a = !0, u / (r - e) > .5)) return
                } a || n.push([e, r]), this.Cues.newCue(this.captionsTracks[t], e, r, i)
            }, e.prototype.onInitPtsFound = function (t) {
                var e = this;
                void 0 === this.initPTS && (this.initPTS = t.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function (t) {
                    e.onFragLoaded(t)
                }), this.unparsedVttFrags = [])
            }, e.prototype.getExistingTrack = function (t) {
                var e = this.media;
                if (e) for (var r = 0; r < e.textTracks.length; r++) {
                    var i = e.textTracks[r];
                    if (i[t]) return i
                } return null
            }, e.prototype.createCaptionsTrack = function (t) {
                var e = this.captionsProperties[t], r = e.label, i = e.languageCode, n = this.captionsTracks;
                if (!n[t]) {
                    var a = this.getExistingTrack(t);
                    if (a) n[t] = a, Object(p.a)(n[t]), Object(p.b)(n[t], this.media);
                    else {
                        var o = this.createTextTrack("captions", r, i);
                        o && (o[t] = !0, n[t] = o)
                    }
                }
            }, e.prototype.createTextTrack = function (t, e, r) {
                var i = this.media;
                if (i) return i.addTextTrack(t, e, r)
            }, e.prototype.destroy = function () {
                u.a.prototype.destroy.call(this)
            }, e.prototype.onMediaAttaching = function (t) {
                this.media = t.media, this._cleanTracks()
            }, e.prototype.onMediaDetaching = function () {
                var t = this.captionsTracks;
                Object.keys(t).forEach(function (e) {
                    Object(p.a)(t[e]), delete t[e]
                })
            }, e.prototype.onManifestLoading = function () {
                this.lastSn = -1, this.prevCC = -1, this.vttCCs = { ccOffset: 0, presentationOffset: 0 }, this._cleanTracks()
            }, e.prototype._cleanTracks = function () {
                var t = this.media;
                if (t) {
                    var e = t.textTracks;
                    if (e) for (var r = 0; r < e.length; r++)Object(p.a)(e[r])
                }
            }, e.prototype.onManifestLoaded = function (t) {
                var e = this;
                if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
                    this.tracks = t.subtitles || [];
                    var r = this.media ? this.media.textTracks : []; this.tracks.forEach(function (t, i) {
                        var n = void 0;
                        if (i < r.length) {
                            var a = r[i];
                            o(a, t) && (n = a)
                        }
                        n || (n = e.createTextTrack("subtitles", t.name, t.lang)), t.default ? n.mode = e.hls.subtitleDisplay ? "showing" : "hidden" : n.mode = "disabled", e.textTracks.push(n)
                    })
                }
            }, e.prototype.onLevelSwitching = function () {
                this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
            }, e.prototype.onFragLoaded = function (t) {
                var e = t.frag, r = t.payload;
                if ("main" === e.type) {
                    var i = e.sn;
                    if (i !== this.lastSn + 1) {
                        var n = this.cea608Parser;
                        n && n.reset()
                    }
                    this.lastSn = i
                }
                else if ("subtitle" === e.type) if (r.byteLength) {
                    if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                    var a = e.decryptdata;
                    null != a && null != a.key && "AES-128" === a.method || this._parseVTTs(e, r)
                }
                else this.hls.trigger(l.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e })
            }, e.prototype._parseVTTs = function (t, e) {
                var r = this.vttCCs; r[t.cc] || (r[t.cc] = { start: t.start, prevCC: this.prevCC, new: !0 }, this.prevCC = t.cc);
                var i = this.textTracks, n = this.hls; h.a.parse(e, this.initPTS, r, t.cc, function (e) {
                    var r = i[t.trackId];
                    if ("disabled" === r.mode) return void n.trigger(l.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t });
                    e.forEach(function (t) {
                        if (!r.cues.getCueById(t.id)) try {
                            r.addCue(t)
                        }
                            catch (i) {
                                var e = new window.TextTrackCue(t.startTime, t.endTime, t.text); e.id = t.id, r.addCue(e)
                            }
                    }), n.trigger(l.a.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: t })
                }, function (e) {
                    f.b.log("Failed to parse VTT cue: " + e), n.trigger(l.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t })
                })
            }, e.prototype.onFragDecrypted = function (t) {
                var e = t.payload, r = t.frag;
                if ("subtitle" === r.type) {
                    if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                    this._parseVTTs(r, e)
                }
            }, e.prototype.onFragParsingUserdata = function (t) {
                if (this.enabled && this.config.enableCEA708Captions) for (var e = 0; e < t.samples.length; e++) {
                    var r = this.extractCea608Data(t.samples[e].bytes);
                    this.cea608Parser.addData(t.samples[e].pts, r)
                }
            }, e.prototype.extractCea608Data = function (t) {
                for (var e = 31 & t[0], r = 2, i = void 0, n = void 0, a = void 0, o = void 0, s = void 0, l = [], u = 0; u < e; u++)i = t[r++], n = 127 & t[r++], a = 127 & t[r++], o = 0 != (4 & i), s = 3 & i, 0 === n && 0 === a || o && 0 === s && (l.push(n), l.push(a)); return l
            }, e
        }(u.a);
        e.a = v
    }, function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, a = function (t) {
            var e = t;
            return n.hasOwnProperty(t) && (e = n[t]), String.fromCharCode(e)
        }, o = 15, s = 100, l = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, u = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, d = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, c = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], f = {
            verboseFilter: { DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0 }, time: null, verboseLevel: 0, setTime: function (t) { this.time = t }, log: function (t, e) {
                var r = this.verboseFilter[t];
                this.verboseLevel >= r && console.log(this.time + " [" + t + "] " + e)
            }
        }, p = function (t) {
            for (var e = [], r = 0; r < t.length; r++)e.push(t[r].toString(16)); return e
        }, v = function () {
            function t(e, r, n, a, o) {
                i(this, t), this.foreground = e || "white", this.underline = r || !1, this.italics = n || !1, this.background = a || "black", this.flash = o || !1
            }
            return t.prototype.reset = function () {
                this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
            },
                t.prototype.setStyles = function (t) {
                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                        var i = e[r]; t.hasOwnProperty(i) && (this[i] = t[i])
                    }
                },
                t.prototype.isDefault = function () {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                },
                t.prototype.equals = function (t) {
                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                },
                t.prototype.copy = function (t) {
                    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                },
                t.prototype.toString = function () {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }, t
        }(),
            g = function () {
                function t(e, r, n, a, o, s) {
                    i(this, t), this.uchar = e || " ", this.penState = new v(r, n, a, o, s)
                }
                return t.prototype.reset = function () {
                    this.uchar = " ", this.penState.reset()
                }, t.prototype.setChar = function (t, e) {
                    this.uchar = t, this.penState.copy(e)
                }, t.prototype.setPenState = function (t) {
                    this.penState.copy(t)
                }, t.prototype.equals = function (t) {
                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                }, t.prototype.copy = function (t) {
                    this.uchar = t.uchar, this.penState.copy(t.penState)
                }, t.prototype.isEmpty = function () {
                    return " " === this.uchar && this.penState.isDefault()
                }, t
            }(),
            y = function () {
                function t() {
                    i(this, t), this.chars = [];
                    for (var e = 0; e < s; e++)this.chars.push(new g);
                    this.pos = 0, this.currPenState = new v
                }
                return t.prototype.equals = function (t) {
                    for (var e = !0, r = 0; r < s; r++)if (!this.chars[r].equals(t.chars[r])) {
                        e = !1; break
                    }
                    return e
                }, t.prototype.copy = function (t) {
                    for (var e = 0; e < s; e++)this.chars[e].copy(t.chars[e])
                }, t.prototype.isEmpty = function () {
                    for (var t = !0, e = 0; e < s; e++)if (!this.chars[e].isEmpty()) {
                        t = !1; break
                    }
                    return t
                }, t.prototype.setCursor = function (t) {
                    this.pos !== t && (this.pos = t), this.pos < 0 ? (f.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > s && (f.log("ERROR", "Too large cursor position " + this.pos), this.pos = s)
                }, t.prototype.moveCursor = function (t) {
                    var e = this.pos + t;
                    if (t > 1) for (var r = this.pos + 1; r < e + 1; r++)this.chars[r].setPenState(this.currPenState); this.setCursor(e)
                }, t.prototype.backSpace = function () {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, t.prototype.insertChar = function (t) {
                    t >= 144 && this.backSpace();
                    var e = a(t);
                    if (this.pos >= s) return void f.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!");
                    this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1)
                }, t.prototype.clearFromPos = function (t) {
                    var e = void 0;
                    for (e = t; e < s; e++)this.chars[e].reset()
                }, t.prototype.clear = function () {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, t.prototype.clearToEndOfRow = function () {
                    this.clearFromPos(this.pos)
                }, t.prototype.getTextString = function () {
                    for (var t = [], e = !0, r = 0; r < s; r++) {
                        var i = this.chars[r].uchar; " " !== i && (e = !1), t.push(i)
                    }
                    return e ? "" : t.join("")
                }, t.prototype.setPenStyles = function (t) {
                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(),
            m = function () {
                function t() {
                    i(this, t), this.rows = [];
                    for (var e = 0; e < o; e++)this.rows.push(new y);
                    this.currRow = o - 1, this.nrRollUpRows = null, this.reset()
                }
                return t.prototype.reset = function () {
                    for (var t = 0; t < o; t++)this.rows[t].clear();
                    this.currRow = o - 1
                }, t.prototype.equals = function (t) {
                    for (var e = !0, r = 0; r < o; r++)if (!this.rows[r].equals(t.rows[r])) {
                        e = !1;
                        break
                    }
                    return e
                }, t.prototype.copy = function (t) {
                    for (var e = 0; e < o; e++)this.rows[e].copy(t.rows[e])
                }, t.prototype.isEmpty = function () {
                    for (var t = !0, e = 0; e < o; e++)if (!this.rows[e].isEmpty()) {
                        t = !1;
                        break
                    }
                    return t
                }, t.prototype.backSpace = function () {
                    this.rows[this.currRow].backSpace()
                }, t.prototype.clearToEndOfRow = function () {
                    this.rows[this.currRow].clearToEndOfRow()
                }, t.prototype.insertChar = function (t) {
                    this.rows[this.currRow].insertChar(t)
                }, t.prototype.setPen = function (t) {
                    this.rows[this.currRow].setPenStyles(t)
                }, t.prototype.moveCursor = function (t) {
                    this.rows[this.currRow].moveCursor(t)
                }, t.prototype.setCursor = function (t) {
                    f.log("INFO", "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                }, t.prototype.setPAC = function (t) {
                    f.log("INFO", "pacData = " + JSON.stringify(t));
                    var e = t.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                        for (var r = 0; r < o; r++)this.rows[r].clear();
                        var i = this.currRow + 1 - this.nrRollUpRows, n = this.lastOutputScreen;
                        if (n) {
                            var a = n.rows[i].cueStartTime;
                            if (a && a < f.time) for (var s = 0; s < this.nrRollUpRows; s++)this.rows[e - this.nrRollUpRows + s + 1].copy(n.rows[i + s])
                        }
                    }
                    this.currRow = e;
                    var l = this.rows[this.currRow];
                    if (null !== t.indent) {
                        var u = t.indent, d = Math.max(u - 1, 0);
                        l.setCursor(t.indent), t.color = l.chars[d].penState.foreground
                    }
                    var c = { foreground: t.color, underline: t.underline, italics: t.italics, background: "black", flash: !1 };
                    this.setPen(c)
                }, t.prototype.setBkgData = function (t) {
                    f.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                }, t.prototype.setRollUpRows = function (t) {
                    this.nrRollUpRows = t
                }, t.prototype.rollUp = function () {
                    if (null === this.nrRollUpRows) return void f.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    f.log("TEXT", this.getDisplayText());
                    var t = this.currRow + 1 - this.nrRollUpRows, e = this.rows.splice(t, 1)[0];
                    e.clear(), this.rows.splice(this.currRow, 0, e), f.log("INFO", "Rolling up")
                }, t.prototype.getDisplayText = function (t) {
                    t = t || !1;
                    for (var e = [], r = "", i = -1, n = 0; n < o; n++) {
                        var a = this.rows[n].getTextString();
                        a && (i = n + 1, t ? e.push("Row " + i + ": '" + a + "'") : e.push(a.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, t.prototype.getTextAndFormat = function () {
                    return this.rows
                }, t
            }(),
            b = function () {
                function t(e, r) {
                    i(this, t), this.chNr = e, this.outputFilter = r, this.mode = null, this.verbose = 0, this.displayedMemory = new m, this.nonDisplayedMemory = new m, this.lastOutputScreen = new m, this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }
                return t.prototype.reset = function () {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                }, t.prototype.getHandler = function () {
                    return this.outputFilter
                }, t.prototype.setHandler = function (t) {
                    this.outputFilter = t
                }, t.prototype.setPAC = function (t) {
                    this.writeScreen.setPAC(t)
                }, t.prototype.setBkgData = function (t) {
                    this.writeScreen.setBkgData(t)
                }, t.prototype.setMode = function (t) {
                    t !== this.mode && (this.mode = t, f.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                }, t.prototype.insertChars = function (t) {
                    for (var e = 0; e < t.length; e++)this.writeScreen.insertChar(t[e]);
                    var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP"; f.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (f.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, t.prototype.ccRCL = function () {
                    f.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, t.prototype.ccBS = function () {
                    f.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, t.prototype.ccAOF = function () {

                }, t.prototype.ccAON = function () {

                }, t.prototype.ccDER = function () {
                    f.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, t.prototype.ccRU = function (t) {
                    f.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                }, t.prototype.ccFON = function () {
                    f.log("INFO", "FON - Flash On"), this.writeScreen.setPen({ flash: !0 })
                }, t.prototype.ccRDC = function () {
                    f.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, t.prototype.ccTR = function () {
                    f.log("INFO", "TR"), this.setMode("MODE_TEXT")
                }, t.prototype.ccRTD = function () {
                    f.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                }, t.prototype.ccEDM = function () {
                    f.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                }, t.prototype.ccCR = function () {
                    f.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                }, t.prototype.ccENM = function () {
                    f.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, t.prototype.ccEOC = function () {
                    if (f.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var t = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, f.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }, t.prototype.ccTO = function (t) {
                    f.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                }, t.prototype.ccMIDROW = function (t) {
                    var e = { flash: !1 };
                    if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
                    else {
                        var r = Math.floor(t / 2) - 16, i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                        e.foreground = i[r]
                    }
                    f.log("INFO", "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                }, t.prototype.outputDataUpdate = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = f.time; null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), !0 === t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                }, t.prototype.cueSplitAtTime = function (t) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                }, t
            }(),
            E = function () {
                function t(e, r, n) {
                    i(this, t), this.field = e || 1, this.outputs = [r, n], this.channels = [new b(1, r), new b(2, n)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = { padding: 0, char: 0, cmd: 0, other: 0 }
                }
                return t.prototype.getHandler = function (t) {
                    return this.channels[t].getHandler()
                }
                    , t.prototype.setHandler = function (t, e) {
                        this.channels[t].setHandler(e)
                    }, t.prototype.addData = function (t, e) {
                        var r = void 0, i = void 0, n = void 0, a = !1; this.lastTime = t, f.setTime(t);
                        for (var o = 0; o < e.length; o += 2)if (i = 127 & e[o], n = 127 & e[o + 1], 0 !== i || 0 !== n) {
                            if (f.log("DATA", "[" + p([e[o], e[o + 1]]) + "] -> (" + p([i, n]) + ")"), r = this.parseCmd(i, n), r || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) if (this.currChNr && this.currChNr >= 0) {
                                var s = this.channels[this.currChNr - 1];
                                s.insertChars(a)
                            }
                            else f.log("WARNING", "No channel found yet. TEXT-MODE?");
                            r ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, f.log("WARNING", "Couldn't parse cleaned data " + p([i, n]) + " orig: " + p([e[o], e[o + 1]])))
                        } else this.dataCounters.padding += 2
                    }, t.prototype.parseCmd = function (t, e) {
                        var r = null, i = (20 === t || 28 === t) && e >= 32 && e <= 47, n = (23 === t || 31 === t) && e >= 33 && e <= 35; if (!i && !n) return !1; if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, f.log("DEBUG", "Repeated command (" + p([t, e]) + ") is dropped"), !0; r = 20 === t || 23 === t ? 1 : 2; var a = this.channels[r - 1]; return 20 === t || 28 === t ? 32 === e ? a.ccRCL() : 33 === e ? a.ccBS() : 34 === e ? a.ccAOF() : 35 === e ? a.ccAON() : 36 === e ? a.ccDER() : 37 === e ? a.ccRU(2) : 38 === e ? a.ccRU(3) : 39 === e ? a.ccRU(4) : 40 === e ? a.ccFON() : 41 === e ? a.ccRDC() : 42 === e ? a.ccTR() : 43 === e ? a.ccRTD() : 44 === e ? a.ccEDM() : 45 === e ? a.ccCR() : 46 === e ? a.ccENM() : 47 === e && a.ccEOC() : a.ccTO(e - 32), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = r, !0
                    }, t.prototype.parseMidrow = function (t, e) {
                        var r = null;
                        if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                            if ((r = 17 === t ? 1 : 2) !== this.currChNr) return f.log("ERROR", "Mismatch channel in midrow parsing"), !1;
                            return this.channels[r - 1].ccMIDROW(e), f.log("DEBUG", "MIDROW (" + p([t, e]) + ")"), !0
                        }
                        return !1
                    }, t.prototype.parsePAC = function (t, e) {
                        var r = null, i = null, n = (t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127, a = (16 === t || 24 === t) && e >= 64 && e <= 95; if (!n && !a) return !1;
                        if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                        r = t <= 23 ? 1 : 2, i = e >= 64 && e <= 95 ? 1 === r ? l[t] : d[t] : 1 === r ? u[t] : c[t]; var o = this.interpretPAC(i, e);
                        return this.channels[r - 1].setPAC(o), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = r, !0
                    }, t.prototype.interpretPAC = function (t, e) {
                        var r = e, i = { color: null, italics: !1, indent: null, underline: !1, row: t };
                        return r = e > 95 ? e - 96 : e - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                    }, t.prototype.parseChars = function (t, e) {
                        var r = null, i = null, n = null;
                        if (t >= 25 ? (r = 2, n = t - 8) : (r = 1, n = t), n >= 17 && n <= 19) {
                            var o = e;
                            o = 17 === n ? e + 80 : 18 === n ? e + 112 : e + 144, f.log("INFO", "Special char '" + a(o) + "' in channel " + r), i = [o]
                        } else t >= 32 && t <= 127 && (i = 0 === e ? [t] : [t, e]); if (i) {
                            var s = p(i);
                            f.log("DEBUG", "Char codes =  " + s.join(",")), this.lastCmdA = null, this.lastCmdB = null
                        }
                        return i
                    }, t.prototype.parseBackgroundAttributes = function (t, e) {
                        var r = void 0, i = void 0, n = void 0, a = void 0, o = (16 === t || 24 === t) && e >= 32 && e <= 47, s = (23 === t || 31 === t) && e >= 45 && e <= 47;
                        return !(!o && !s) && (r = {}, 16 === t || 24 === t ? (i = Math.floor((e - 32) / 2), r.background = h[i], e % 2 == 1 && (r.background = r.background + "_semi")) : 45 === e ? r.background = "transparent" : (r.foreground = "black", 47 === e && (r.underline = !0)), n = t < 24 ? 1 : 2, a = this.channels[n - 1], a.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
                    }, t.prototype.reset = function () {
                        for (var t = 0; t < this.channels.length; t++)this.channels[t] && this.channels[t].reset();
                        this.lastCmdA = null, this.lastCmdB = null
                    }, t.prototype.cueSplitAtTime = function (t) {
                        for (var e = 0; e < this.channels.length; e++)this.channels[e] && this.channels[e].cueSplitAtTime(t)
                    }, t
            }();
        e.a = E
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var n = function () {
            function t(e, r) {
                i(this, t), this.timelineController = e, this.trackName = r, this.startTime = null, this.endTime = null, this.screen = null
            }
            return t.prototype.dispatchCue = function () {
                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
            }, t.prototype.newCue = function (t, e, r) {
                (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
            }, t
        }();
        e.a = n
    },
    function (t, e, r) {
        "use strict";
        var i = r(26), n = r(6),
            a = function (t, e, r) {
                return t.substr(r || 0, e.length) === e
            },
            o = function (t) {
                var e = parseInt(t.substr(-3)), r = parseInt(t.substr(-6, 2)), i = parseInt(t.substr(-9, 2)), n = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                return isNaN(e) || isNaN(r) || isNaN(i) || isNaN(n) ? -1 : (e += 1e3 * r, e += 6e4 * i, e += 36e5 * n)
            }, s = function (t) {
                for (var e = 5381, r = t.length; r;)e = 33 * e ^ t.charCodeAt(--r); return (e >>> 0).toString()
            }, l = function (t, e, r) {
                var i = t[e], n = t[i.prevCC];
                if (!n || !n.new && i.new) return t.ccOffset = t.presentationOffset = i.start, void (i.new = !1);
                for (; n && n.new;)t.ccOffset += i.start - n.start, i.new = !1, i = n, n = t[i.prevCC];
                t.presentationOffset = r
            }, u = {
                parse: function (t, e, r, u, d, c) {
                    var h = /\r\n|\n\r|\n|\r/g, f = Object(n.b)(new Uint8Array(t)).trim().replace(h, "\n").split("\n"), p = "00:00.000", v = 0, g = 0, y = 0, m = [], b = void 0, E = !0, T = new i.a;
                    T.oncue = function (t) {
                        var e = r[u], i = r.ccOffset;
                        e && e.new && (void 0 !== g ? i = r.ccOffset = e.start : l(r, u, y)), y && (i = y + r.ccOffset - r.presentationOffset), t.startTime += i - g - .5, t.endTime += i - g - .5, t.id = s(t.startTime.toString()) + s(t.endTime.toString()) + s(t.text), t.text = decodeURIComponent(encodeURIComponent(t.text)), t.endTime > 0 && m.push(t)
                    }, T.onparsingerror = function (t) { b = t }, T.onflush = function () { if (b && c) return void c(b); d(m) }, f.forEach(function (t) {
                        if (E) {
                            if (a(t, "X-TIMESTAMP-MAP=")) {
                                E = !1, t.substr(16).split(",").forEach(function (t) {
                                    a(t, "LOCAL:") ? p = t.substr(6) : a(t, "MPEGTS:") && (v = parseInt(t.substr(7)))
                                });
                                try { e = e < 0 ? e + 8589934592 : e, v -= e, g = o(p) / 1e3, y = v / 9e4, -1 === g && (b = new Error("Malformed X-TIMESTAMP-MAP: " + t)) }
                                catch (e) {
                                    b = new Error("Malformed X-TIMESTAMP-MAP: " + t)
                                }
                                return
                            } "" === t && (e > 0 && (g = e / 9e4), E = !1)
                        } T.parse(t + "\n"), console.log(t)
                    }), T.flush()
                }
            };
        e.a = u
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function o(t) {
            for (var e = [], r = 0; r < t.length; r++)"subtitles" === t[r].kind && e.push(t[r]); return e
        } var s = r(1), l = r(3), u = r(0),
            d = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function (e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(),
            c = function (t) {
                function e(r) {
                    i(this, e);
                    var a = n(this, t.call(this, r, s.a.MEDIA_ATTACHED, s.a.MEDIA_DETACHING, s.a.MANIFEST_LOADING, s.a.MANIFEST_LOADED, s.a.SUBTITLE_TRACK_LOADED));
                    return a.tracks = [], a.trackId = -1, a.media = null, a.subtitleDisplay = !0, a
                }
                return a(e, t), e.prototype._onTextTracksChanged = function () {
                    if (this.media) {
                        for (var t = -1, e = o(this.media.textTracks), r = 0; r < e.length; r++)if ("hidden" === e[r].mode) t = r;
                        else if ("showing" === e[r].mode) { t = r; break } this.subtitleTrack = t
                    }
                }, e.prototype.destroy = function () {
                    l.a.prototype.destroy.call(this)
                }, e.prototype.onMediaAttached = function (t) {
                    var e = this;
                    this.media = t.media, this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function () { e.trackChangeListener() }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }, e.prototype.onMediaDetaching = function () {
                    this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
                }, e.prototype.onManifestLoading = function () {
                    this.tracks = [], this.trackId = -1
                }, e.prototype.onManifestLoaded = function (t) {
                    var e = this, r = t.subtitles || [];
                    this.tracks = r, this.trackId = -1, this.hls.trigger(s.a.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: r }), r.forEach(function (t) {
                        t.default && (e.media ? e.subtitleTrack = t.id : e.queuedDefaultTrack = t.id)
                    })
                }, e.prototype.onTick = function () {
                    var t = this.trackId, e = this.tracks[t];
                    if (e) {
                        var r = e.details;
                        r && !0 !== r.live || (u.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(s.a.SUBTITLE_TRACK_LOADING, { url: e.url, id: t }))
                    }
                }, e.prototype.onSubtitleTrackLoaded = function (t) {
                    var e = this;
                    if (t.id < this.tracks.length) {
                        if (u.b.log("subtitle track " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer) {
                            var r = Math.min(this.hls.config.subtitleLoadInterval, t.details.targetduration);
                            this.timer = setInterval(function () { e.onTick() }, 1e3 * r, this)
                        }
                        !t.details.live && this.timer && this._stopTimer()
                    }
                }, e.prototype.setSubtitleTrackInternal = function (t) {
                    var e = this.hls, r = this.tracks;
                    if (!("number" != typeof t || t < -1 || t >= r.length) && (this._stopTimer(), this.trackId = t, u.b.log("switching to subtitle track " + t), e.trigger(s.a.SUBTITLE_TRACK_SWITCH, { id: t }), -1 !== t)) {
                        var i = r[t], n = i.details;
                        n && !n.live || (u.b.log("(re)loading playlist for subtitle track " + t), e.trigger(s.a.SUBTITLE_TRACK_LOADING, { url: i.url, id: t }))
                    }
                }, e.prototype._stopTimer = function () {
                    this.timer && (clearInterval(this.timer), this.timer = null)
                }, e.prototype._toggleTrackModes = function (t) {
                    var e = this.media, r = this.subtitleDisplay, i = this.trackId;
                    if (e) {
                        var n = o(e.textTracks);
                        if (-1 === t) [].slice.call(n).forEach(function (t) {
                            t.mode = "disabled"
                        });
                        else {
                            var a = n[i];
                            a && (a.mode = "disabled")
                        }
                        var s = n[t];
                        s && (s.mode = r ? "showing" : "hidden")
                    }
                }, d(e, [
                    {
                        key: "subtitleTracks", get: function () { return this.tracks }
                    }, {
                        key: "subtitleTrack", get: function () { return this.trackId },
                        set: function (t) {
                            this.trackId !== t && (this._toggleTrackModes(t), this.setSubtitleTrackInternal(t))
                        }
                    }
                ]), e
            }(l.a);
        e.a = c
    },
    function (t, e, r) {
        "use strict"; function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        } function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(1), s = r(0), l = r(11), u = r(13), d = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING" },
            c = function (t) {
                function e(r) {
                    i(this, e);
                    var a = n(this, t.call(this, r, o.a.MEDIA_ATTACHED, o.a.ERROR, o.a.KEY_LOADED, o.a.FRAG_LOADED, o.a.SUBTITLE_TRACKS_UPDATED, o.a.SUBTITLE_TRACK_SWITCH, o.a.SUBTITLE_TRACK_LOADED, o.a.SUBTITLE_FRAG_PROCESSED));
                    return a.config = r.config, a.vttFragSNsProcessed = {}, a.vttFragQueues = void 0, a.currentlyProcessing = null, a.state = d.STOPPED, a.currentTrackId = -1, a.decrypter = new l.a(r.observer, r.config), a
                }
                return a(e, t),
                    e.prototype.onHandlerDestroyed = function () { this.state = d.STOPPED },
                    e.prototype.clearVttFragQueues = function () {
                        var t = this;
                        this.vttFragQueues = {}, this.tracks.forEach(function (e) { t.vttFragQueues[e.id] = [] })
                    }, e.prototype.nextFrag = function () {
                        if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                            var t = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                            this.fragCurrent = t, this.hls.trigger(o.a.FRAG_LOADING, { frag: t }), this.state = d.FRAG_LOADING
                        }
                    }, e.prototype.onSubtitleFragProcessed = function (t) {
                        t.success && this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn), this.currentlyProcessing = null, this.state = d.IDLE, this.nextFrag()
                    }, e.prototype.onMediaAttached = function () {
                        this.state = d.IDLE
                    }, e.prototype.onError = function (t) {
                        var e = t.frag; e && "subtitle" !== e.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
                    }, e.prototype.doTick = function () {
                        var t = this;
                        switch (this.state) {
                            case d.IDLE: var e = this.tracks, r = this.currentTrackId, i = this.vttFragSNsProcessed[r], n = this.vttFragQueues[r], a = this.currentlyProcessing ? this.currentlyProcessing.sn : -1,
                                l = function (t) {
                                    return i.indexOf(t.sn) > -1
                                }, u = function (t) {
                                    return n.some(function (e) { return e.sn === t.sn })
                                };
                                if (!e) break;
                                var c;
                                if (r < e.length && (c = e[r].details), void 0 === c) break;
                                c.fragments.forEach(function (e) {
                                    l(e) || e.sn === a || u(e) || (e.encrypted ? (s.b.log("Loading key for " + e.sn), t.state = d.KEY_LOADING, t.hls.trigger(o.a.KEY_LOADING, { frag: e })) : (e.trackId = r, n.push(e), t.nextFrag()))
                                })
                        }
                    }, e.prototype.onSubtitleTracksUpdated = function (t) {
                        var e = this; s.b.log("subtitle tracks updated"), this.tracks = t.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function (t) {
                            e.vttFragSNsProcessed[t.id] = []
                        })
                    }, e.prototype.onSubtitleTrackSwitch = function (t) {
                        if (this.currentTrackId = t.id, this.tracks && -1 !== this.currentTrackId) {
                            var e = this.tracks[this.currentTrackId]; e && e.details && this.tick()
                        }
                    }, e.prototype.onSubtitleTrackLoaded = function () {
                        this.tick()
                    }, e.prototype.onKeyLoaded = function () {
                        this.state === d.KEY_LOADING && (this.state = d.IDLE, this.tick())
                    }, e.prototype.onFragLoaded = function (t) {
                        var e = this.fragCurrent, r = t.frag.decryptdata, i = t.frag, n = this.hls;
                        if (this.state === d.FRAG_LOADING && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && t.payload.byteLength > 0 && null != r && null != r.key && "AES-128" === r.method) {
                            var a = void 0;
                            try {
                                a = performance.now()
                            }
                            catch (t) {
                                a = Date.now()
                            }
                            this.decrypter.decrypt(t.payload, r.key.buffer, r.iv.buffer, function (t) {
                                var e = void 0;
                                try {
                                    e = performance.now()
                                }
                                catch (t) {
                                    e = Date.now()
                                } n.trigger(o.a.FRAG_DECRYPTED, {
                                    frag: i, payload: t, stats: { tstart: a, tdecrypt: e }
                                })
                            })
                        }
                    }, e
            }(u.a);
        e.a = c
    },
    function (t, e, r) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        var o = r(3), s = r(1), l = r(2), u = r(0),
            d = function () {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var i = e[r]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                } return function (e, r, i) {
                    return r && t(e.prototype, r), i && t(e, i), e
                }
            }(), c = { WIDEVINE: "com.widevine.alpha", PLAYREADY: "com.microsoft.playready" },
            h = function (t, e, r) {
                var i = { videoCapabilities: [] };
                return e.forEach(function (t) {
                    i.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + t + '"' })
                }), [i]
            },
            f = function (t, e, r) {
                switch (t) {
                    case c.WIDEVINE: return h(0, r);
                    default: throw Error("Unknown key-system: " + t)
                }
            },
            p = function (t) {
                function e(r) {
                    i(this, e);
                    var a = n(this, t.call(this, r, s.a.MEDIA_ATTACHED, s.a.MANIFEST_PARSED));
                    return a._widevineLicenseUrl = r.config.widevineLicenseUrl, a._licenseXhrSetup = r.config.licenseXhrSetup, a._emeEnabled = r.config.emeEnabled, a._requestMediaKeySystemAccess = r.config.requestMediaKeySystemAccessFunc, a._mediaKeysList = [], a._media = null, a._hasSetMediaKeys = !1, a._isMediaEncrypted = !1, a._requestLicenseFailureCount = 0, a
                }
                return a(e, t),
                    e.prototype.getLicenseServerUrl = function (t) {
                        var e = void 0;
                        switch (t) {
                            case c.WIDEVINE: e = this._widevineLicenseUrl; break;
                            default: e = null
                        }
                        return e || (u.b.error('No license server URL configured for key-system "' + t + '"'), this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 })), e
                    }, e.prototype._attemptKeySystemAccess = function (t, e, r) {
                        var i = this, n = f(t, 0, r);
                        if (!n) return void u.b.warn("Can not create config for key-system (maybe because platform is not supported):", t);
                        u.b.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(t, n).then(function (e) {
                            i._onMediaKeySystemAccessObtained(t, e)
                        }).catch(function (e) {
                            u.b.error('Failed to obtain key-system "' + t + '" access:', e)
                        })
                    }, e.prototype._onMediaKeySystemAccessObtained = function (t, e) {
                        var r = this; u.b.log('Access for key-system "' + t + '" obtained');
                        var i = { mediaKeys: null, mediaKeysSession: null, mediaKeysSessionInitialized: !1, mediaKeySystemAccess: e, mediaKeySystemDomain: t };
                        this._mediaKeysList.push(i), e.createMediaKeys().then(function (e) {
                            i.mediaKeys = e, u.b.log('Media-keys created for key-system "' + t + '"'), r._onMediaKeysCreated()
                        }).catch(function (t) {
                            u.b.error("Failed to create media-keys:", t)
                        })
                    }, e.prototype._onMediaKeysCreated = function () {
                        var t = this; this._mediaKeysList.forEach(function (e) {
                            e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                        })
                    }, e.prototype._onNewMediaKeySession = function (t) {
                        var e = this; u.b.log("New key-system session " + t.sessionId), t.addEventListener("message", function (r) {
                            e._onKeySessionMessage(t, r.message)
                        },
                            !1)
                    }, e.prototype._onKeySessionMessage = function (t, e) {
                        u.b.log("Got EME message event, creating license request"), this._requestLicense(e, function (e) {
                            u.b.log("Received license data, updating key-session"), t.update(e)
                        })
                    }, e.prototype._onMediaEncrypted = function (t, e) {
                        u.b.log('Media is encrypted using "' + t + '" init data type'), this._isMediaEncrypted = !0, this._mediaEncryptionInitDataType = t, this._mediaEncryptionInitData = e, this._attemptSetMediaKeys(), this._generateRequestWithPreferredKeySession()
                    }, e.prototype._attemptSetMediaKeys = function () {
                        if (!this._hasSetMediaKeys) {
                            var t = this._mediaKeysList[0];
                            if (!t || !t.mediaKeys) return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_NO_KEYS, fatal: !0 });
                            u.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0
                        }
                    }, e.prototype._generateRequestWithPreferredKeySession = function () {
                        var t = this, e = this._mediaKeysList[0];
                        if (!e) return u.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_NO_ACCESS, fatal: !0 });
                        if (e.mediaKeysSessionInitialized) return void u.b.warn("Key-Session already initialized but requested again");
                        var r = e.mediaKeysSession; r || (u.b.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_NO_SESSION, fatal: !0 }));
                        var i = this._mediaEncryptionInitDataType, n = this._mediaEncryptionInitData;
                        u.b.log('Generating key-session request for "' + i + '" init data type'), e.mediaKeysSessionInitialized = !0, r.generateRequest(i, n).then(function () {
                            u.b.debug("Key-session generation succeeded")
                        }).catch(function (e) {
                            u.b.error("Error generating key-session request:", e), t.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_NO_SESSION, fatal: !1 })
                        })
                    }, e.prototype._createLicenseXhr = function (t, e, r) {
                        var i = new XMLHttpRequest, n = this._licenseXhrSetup;
                        try {
                            if (n) try {
                                n(i, t)
                            }
                                catch (e) {
                                    i.open("POST", t, !0), n(i, t)
                                } i.readyState || i.open("POST", t, !0)
                        }
                        catch (t) {
                            return u.b.error("Error setting up key-system license XHR", t), void this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 })
                        }
                        return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r), i
                    }, e.prototype._onLicenseRequestReadyStageChange = function (t, e, r, i) {
                        switch (t.readyState) {
                            case 4: if (200 === t.status) this._requestLicenseFailureCount = 0, u.b.log("License request succeeded"), i(t.response);
                            else {
                                if (u.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), ++this._requestLicenseFailureCount <= 3) {
                                    var n = 3 - this._requestLicenseFailureCount + 1;
                                    return u.b.warn("Retrying license request, " + n + " attempts left"), void this._requestLicense(r, i)
                                }
                                this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 })
                            }
                        }
                    }, e.prototype._generateLicenseRequestChallenge = function (t, e) {
                        var r = void 0;
                        return t.mediaKeySystemDomain === c.PLAYREADY ? u.b.error("PlayReady is not supported (yet)") : t.mediaKeySystemDomain === c.WIDEVINE ? r = e : u.b.error("Unsupported key-system:", t.mediaKeySystemDomain), r
                    }, e.prototype._requestLicense = function (t, e) {
                        u.b.log("Requesting content license for key-system");
                        var r = this._mediaKeysList[0];
                        if (!r) return u.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(s.a.ERROR, { type: l.b.KEY_SYSTEM_ERROR, details: l.a.KEY_SYSTEM_NO_ACCESS, fatal: !0 });
                        var i = this.getLicenseServerUrl(r.mediaKeySystemDomain), n = this._createLicenseXhr(i, t, e); u.b.log("Sending license request to URL: " + i), n.send(this._generateLicenseRequestChallenge(r, t))
                    },
                    e.prototype.onMediaAttached = function (t) {
                        var e = this;
                        if (this._emeEnabled) {
                            var r = t.media; this._media = r, r.addEventListener("encrypted", function (t) {
                                e._onMediaEncrypted(t.initDataType, t.initData)
                            })
                        }
                    },
                    e.prototype.onManifestParsed = function (t) {
                        if (this._emeEnabled) {
                            var e = t.levels.map(function (t) {
                                return t.audioCodec
                            }), r = t.levels.map(function (t) {
                                return t.videoCodec
                            });
                            this._attemptKeySystemAccess(c.WIDEVINE, e, r)
                        }
                    }, d(e, [
                        {
                            key: "requestMediaKeySystemAccess",
                            get: function () {
                                if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                                return this._requestMediaKeySystemAccess
                            }
                        }
                    ]), e
            }(o.a);
        e.a = p
    },
    function (t, e, r) {
        "use strict"; r.d(e, "a", function () { return i }); var i = function () { return "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null }()
    }, function (t, e) {/*! http://mths.be/endswith v0.2.0 by @mathias */
        String.prototype.endsWith || function () {
            "use strict";
            var t = function () {
                try { var t = {}, e = Object.defineProperty, r = e(t, t, t) && e }
                catch (t) { } return r
            }(), e = {}.toString, r = function (t) {
                if (null == this) throw TypeError();
                var r = String(this); if (t && "[object RegExp]" == e.call(t)) throw TypeError();
                var i = r.length, n = String(t), a = n.length, o = i;
                if (arguments.length > 1) {
                    var s = arguments[1];
                    void 0 !== s && (o = s ? Number(s) : 0) != o && (o = 0)
                }
                var l = Math.min(Math.max(o, 0), i), u = l - a;
                if (u < 0) return !1;
                for (var d = -1; ++d < a;)if (r.charCodeAt(u + d) != n.charCodeAt(d)) return !1;
                return !0
            };
            t ? t(String.prototype, "endsWith", { value: r, configurable: !0, writable: !0 }) : String.prototype.endsWith = r
        }()
    }]).default
});
//# sourceMappingURL=aliplayer-hls-min.js.map