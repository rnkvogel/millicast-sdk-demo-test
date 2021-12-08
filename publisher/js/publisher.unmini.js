let params     = new URLSearchParams(document.location.search.substring(1));
let accountId  = params.get('accountId');
let streamName = params.get('streamName');
let streamToken = params.get('streamToken');



!(function (e) {
    "function" == typeof define && define.amd ? define(e) : e();
})(function () {
    "use strict";
    function e(e, t, r, n, i, s, o) {
        try {
            var a = e[s](o),
                c = a.value;
        } catch (e) {
            return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i);
    }
    function t(t) {
        return function () {
            var r = this,
                n = arguments;
            return new Promise(function (i, s) {
                var o = t.apply(r, n);
                function a(t) {
                    e(o, i, s, a, c, "next", t);
                }
                function c(t) {
                    e(o, i, s, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    !(function () {
        const e = { MILLICAST_ACCOUNT_ID: accountId, MILLICAST_PUBLISH_TOKEN: streamToken, MILLICAST_STREAM_NAME: streamName };
        try {
            if (process) return (process.env = Object.assign({}, process.env)), void Object.assign(process.env, e);
        } catch (e) {}
        globalThis.process = { env: e };
    })();
    var r,
        n =
            ((function (e) {
                var t = (function (e) {
                    var t,
                        r = Object.prototype,
                        n = r.hasOwnProperty,
                        i = "function" == typeof Symbol ? Symbol : {},
                        s = i.iterator || "@@iterator",
                        o = i.asyncIterator || "@@asyncIterator",
                        a = i.toStringTag || "@@toStringTag";
                    function c(e, t, r) {
                        return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t];
                    }
                    try {
                        c({}, "");
                    } catch (e) {
                        c = function (e, t, r) {
                            return (e[t] = r);
                        };
                    }
                    function u(e, t, r, n) {
                        var i = t && t.prototype instanceof g ? t : g,
                            s = Object.create(i.prototype),
                            o = new R(n || []);
                        return (
                            (s._invoke = (function (e, t, r) {
                                var n = l;
                                return function (i, s) {
                                    if (n === p) throw new Error("Generator is already running");
                                    if (n === h) {
                                        if ("throw" === i) throw s;
                                        return P();
                                    }
                                    for (r.method = i, r.arg = s; ; ) {
                                        var o = r.delegate;
                                        if (o) {
                                            var a = k(o, r);
                                            if (a) {
                                                if (a === m) continue;
                                                return a;
                                            }
                                        }
                                        if ("next" === r.method) r.sent = r._sent = r.arg;
                                        else if ("throw" === r.method) {
                                            if (n === l) throw ((n = h), r.arg);
                                            r.dispatchException(r.arg);
                                        } else "return" === r.method && r.abrupt("return", r.arg);
                                        n = p;
                                        var c = d(e, t, r);
                                        if ("normal" === c.type) {
                                            if (((n = r.done ? h : f), c.arg === m)) continue;
                                            return { value: c.arg, done: r.done };
                                        }
                                        "throw" === c.type && ((n = h), (r.method = "throw"), (r.arg = c.arg));
                                    }
                                };
                            })(e, r, o)),
                            s
                        );
                    }
                    function d(e, t, r) {
                        try {
                            return { type: "normal", arg: e.call(t, r) };
                        } catch (e) {
                            return { type: "throw", arg: e };
                        }
                    }
                    e.wrap = u;
                    var l = "suspendedStart",
                        f = "suspendedYield",
                        p = "executing",
                        h = "completed",
                        m = {};
                    function g() {}
                    function v() {}
                    function y() {}
                    var w = {};
                    w[s] = function () {
                        return this;
                    };
                    var b = Object.getPrototypeOf,
                        S = b && b(b(A([])));
                    S && S !== r && n.call(S, s) && (w = S);
                    var C = (y.prototype = g.prototype = Object.create(w));
                    function E(e) {
                        ["next", "throw", "return"].forEach(function (t) {
                            c(e, t, function (e) {
                                return this._invoke(t, e);
                            });
                        });
                    }
                    function x(e, t) {
                        function r(i, s, o, a) {
                            var c = d(e[i], e, s);
                            if ("throw" !== c.type) {
                                var u = c.arg,
                                    l = u.value;
                                return l && "object" == typeof l && n.call(l, "__await")
                                    ? t.resolve(l.__await).then(
                                          function (e) {
                                              r("next", e, o, a);
                                          },
                                          function (e) {
                                              r("throw", e, o, a);
                                          }
                                      )
                                    : t.resolve(l).then(
                                          function (e) {
                                              (u.value = e), o(u);
                                          },
                                          function (e) {
                                              return r("throw", e, o, a);
                                          }
                                      );
                            }
                            a(c.arg);
                        }
                        var i;
                        this._invoke = function (e, n) {
                            function s() {
                                return new t(function (t, i) {
                                    r(e, n, t, i);
                                });
                            }
                            return (i = i ? i.then(s, s) : s());
                        };
                    }
                    function k(e, r) {
                        var n = e.iterator[r.method];
                        if (n === t) {
                            if (((r.delegate = null), "throw" === r.method)) {
                                if (e.iterator.return && ((r.method = "return"), (r.arg = t), k(e, r), "throw" === r.method)) return m;
                                (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
                            }
                            return m;
                        }
                        var i = d(n, e.iterator, r.arg);
                        if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), m;
                        var s = i.arg;
                        return s
                            ? s.done
                                ? ((r[e.resultName] = s.value), (r.next = e.nextLoc), "return" !== r.method && ((r.method = "next"), (r.arg = t)), (r.delegate = null), m)
                                : s
                            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), m);
                    }
                    function T(e) {
                        var t = { tryLoc: e[0] };
                        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
                    }
                    function I(e) {
                        var t = e.completion || {};
                        (t.type = "normal"), delete t.arg, (e.completion = t);
                    }
                    function R(e) {
                        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(T, this), this.reset(!0);
                    }
                    function A(e) {
                        if (e) {
                            var r = e[s];
                            if (r) return r.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var i = -1,
                                    o = function r() {
                                        for (; ++i < e.length; ) if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
                                        return (r.value = t), (r.done = !0), r;
                                    };
                                return (o.next = o);
                            }
                        }
                        return { next: P };
                    }
                    function P() {
                        return { value: t, done: !0 };
                    }
                    return (
                        (v.prototype = C.constructor = y),
                        (y.constructor = v),
                        (v.displayName = c(y, a, "GeneratorFunction")),
                        (e.isGeneratorFunction = function (e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
                        }),
                        (e.mark = function (e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : ((e.__proto__ = y), c(e, a, "GeneratorFunction")), (e.prototype = Object.create(C)), e;
                        }),
                        (e.awrap = function (e) {
                            return { __await: e };
                        }),
                        E(x.prototype),
                        (x.prototype[o] = function () {
                            return this;
                        }),
                        (e.AsyncIterator = x),
                        (e.async = function (t, r, n, i, s) {
                            void 0 === s && (s = Promise);
                            var o = new x(u(t, r, n, i), s);
                            return e.isGeneratorFunction(r)
                                ? o
                                : o.next().then(function (e) {
                                      return e.done ? e.value : o.next();
                                  });
                        }),
                        E(C),
                        c(C, a, "Generator"),
                        (C[s] = function () {
                            return this;
                        }),
                        (C.toString = function () {
                            return "[object Generator]";
                        }),
                        (e.keys = function (e) {
                            var t = [];
                            for (var r in e) t.push(r);
                            return (
                                t.reverse(),
                                function r() {
                                    for (; t.length; ) {
                                        var n = t.pop();
                                        if (n in e) return (r.value = n), (r.done = !1), r;
                                    }
                                    return (r.done = !0), r;
                                }
                            );
                        }),
                        (e.values = A),
                        (R.prototype = {
                            constructor: R,
                            reset: function (e) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(I), !e))
                                    for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
                            },
                            stop: function () {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type) throw e.arg;
                                return this.rval;
                            },
                            dispatchException: function (e) {
                                if (this.done) throw e;
                                var r = this;
                                function i(n, i) {
                                    return (a.type = "throw"), (a.arg = e), (r.next = n), i && ((r.method = "next"), (r.arg = t)), !!i;
                                }
                                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                                    var o = this.tryEntries[s],
                                        a = o.completion;
                                    if ("root" === o.tryLoc) return i("end");
                                    if (o.tryLoc <= this.prev) {
                                        var c = n.call(o, "catchLoc"),
                                            u = n.call(o, "finallyLoc");
                                        if (c && u) {
                                            if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                            if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                        } else if (c) {
                                            if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                        } else {
                                            if (!u) throw new Error("try statement without catch or finally");
                                            if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var i = this.tryEntries[r];
                                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var s = i;
                                        break;
                                    }
                                }
                                s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
                                var o = s ? s.completion : {};
                                return (o.type = e), (o.arg = t), s ? ((this.method = "next"), (this.next = s.finallyLoc), m) : this.complete(o);
                            },
                            complete: function (e, t) {
                                if ("throw" === e.type) throw e.arg;
                                return (
                                    "break" === e.type || "continue" === e.type
                                        ? (this.next = e.arg)
                                        : "return" === e.type
                                        ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                        : "normal" === e.type && t && (this.next = t),
                                    m
                                );
                            },
                            finish: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), I(r), m;
                                }
                            },
                            catch: function (e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var r = this.tryEntries[t];
                                    if (r.tryLoc === e) {
                                        var n = r.completion;
                                        if ("throw" === n.type) {
                                            var i = n.arg;
                                            I(r);
                                        }
                                        return i;
                                    }
                                }
                                throw new Error("illegal catch attempt");
                            },
                            delegateYield: function (e, r, n) {
                                return (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }), "next" === this.method && (this.arg = t), m;
                            },
                        }),
                        e
                    );
                })(e.exports);
                try {
                    regeneratorRuntime = t;
                } catch (e) {
                    Function("r", "regeneratorRuntime = r")(t);
                }
            })((r = { exports: {} }), r.exports),
            r.exports);
    function i(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
    }
    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function a(e, t, r) {
        return t && o(e.prototype, t), r && o(e, r), e;
    }
    function c(e) {
        return (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function u(e, t, r) {
        return (u =
            "undefined" != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (e, t, r) {
                      var n = (function (e, t) {
                          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); );
                          return e;
                      })(e, t);
                      if (n) {
                          var i = Object.getOwnPropertyDescriptor(n, t);
                          return i.get ? i.get.call(r) : i.value;
                      }
                  })(e, t, r || e);
    }
    function d(e, t) {
        return (d =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }
    function l(e) {
        return (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  })(e);
    }
    function f(e, t) {
        return !t || ("object" !== l(t) && "function" != typeof t)
            ? (function (e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e;
              })(e)
            : t;
    }
    function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
                (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
        }
        return r;
    }
    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? p(Object(r), !0).forEach(function (t) {
                      v(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : p(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
        }
        return e;
    }
    function m(e, t, r, n, i, s, o) {
        try {
            var a = e[s](o),
                c = a.value;
        } catch (e) {
            return void r(e);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i);
    }
    function g(e) {
        return function () {
            var t = this,
                r = arguments;
            return new Promise(function (n, i) {
                var s = e.apply(t, r);
                function o(e) {
                    m(s, n, i, o, a, "next", e);
                }
                function a(e) {
                    m(s, n, i, o, a, "throw", e);
                }
                o(void 0);
            });
        };
    }
    function v(e, t, r) {
        return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
    }
    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    function w(e, t) {
        var r = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!r) {
            if (
                Array.isArray(e) ||
                (r = (function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return y(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(e, t) : void 0;
                    }
                })(e)) ||
                (t && e && "number" == typeof e.length)
            ) {
                r && (e = r);
                var n = 0,
                    i = function () {};
                return {
                    s: i,
                    n: function () {
                        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: i,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var s,
            o = !0,
            a = !1;
        return {
            s: function () {
                r = r.call(e);
            },
            n: function () {
                var e = r.next();
                return (o = e.done), e;
            },
            e: function (e) {
                (a = !0), (s = e);
            },
            f: function () {
                try {
                    o || null == r.return || r.return();
                } finally {
                    if (a) throw s;
                }
            },
        };
    }
    var b = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function S(e) {
        var t = { exports: {} };
        return e(t, t.exports), t.exports;
    }
    var C = S(function (e) {
        !(function (t) {
            var r,
                n = {};
            n.VERSION = "1.6.1";
            var i = {},
                s = function (e, t) {
                    return function () {
                        return t.apply(e, arguments);
                    };
                },
                o = function () {
                    var e,
                        t,
                        r = arguments,
                        n = r[0];
                    for (t = 1; t < r.length; t++) for (e in r[t]) !(e in n) && r[t].hasOwnProperty(e) && (n[e] = r[t][e]);
                    return n;
                },
                a = function (e, t) {
                    return { value: e, name: t };
                };
            (n.TRACE = a(1, "TRACE")), (n.DEBUG = a(2, "DEBUG")), (n.INFO = a(3, "INFO")), (n.TIME = a(4, "TIME")), (n.WARN = a(5, "WARN")), (n.ERROR = a(8, "ERROR")), (n.OFF = a(99, "OFF"));
            var c = function (e) {
                (this.context = e), this.setLevel(e.filterLevel), (this.log = this.info);
            };
            c.prototype = {
                setLevel: function (e) {
                    e && "value" in e && (this.context.filterLevel = e);
                },
                getLevel: function () {
                    return this.context.filterLevel;
                },
                enabledFor: function (e) {
                    var t = this.context.filterLevel;
                    return e.value >= t.value;
                },
                trace: function () {
                    this.invoke(n.TRACE, arguments);
                },
                debug: function () {
                    this.invoke(n.DEBUG, arguments);
                },
                info: function () {
                    this.invoke(n.INFO, arguments);
                },
                warn: function () {
                    this.invoke(n.WARN, arguments);
                },
                error: function () {
                    this.invoke(n.ERROR, arguments);
                },
                time: function (e) {
                    "string" == typeof e && e.length > 0 && this.invoke(n.TIME, [e, "start"]);
                },
                timeEnd: function (e) {
                    "string" == typeof e && e.length > 0 && this.invoke(n.TIME, [e, "end"]);
                },
                invoke: function (e, t) {
                    r && this.enabledFor(e) && r(t, o({ level: e }, this.context));
                },
            };
            var u,
                d = new c({ filterLevel: n.OFF });
            ((u = n).enabledFor = s(d, d.enabledFor)),
                (u.trace = s(d, d.trace)),
                (u.debug = s(d, d.debug)),
                (u.time = s(d, d.time)),
                (u.timeEnd = s(d, d.timeEnd)),
                (u.info = s(d, d.info)),
                (u.warn = s(d, d.warn)),
                (u.error = s(d, d.error)),
                (u.log = u.info),
                (n.setHandler = function (e) {
                    r = e;
                }),
                (n.setLevel = function (e) {
                    for (var t in (d.setLevel(e), i)) i.hasOwnProperty(t) && i[t].setLevel(e);
                }),
                (n.getLevel = function () {
                    return d.getLevel();
                }),
                (n.get = function (e) {
                    return i[e] || (i[e] = new c(o({ name: e }, d.context)));
                }),
                (n.createDefaultHandler = function (e) {
                    (e = e || {}).formatter =
                        e.formatter ||
                        function (e, t) {
                            t.name && e.unshift("[" + t.name + "]");
                        };
                    var t = {},
                        r = function (e, t) {
                            Function.prototype.apply.call(e, console, t);
                        };
                    return "undefined" == typeof console
                        ? function () {}
                        : function (i, s) {
                              i = Array.prototype.slice.call(i);
                              var o,
                                  a = console.log;
                              s.level === n.TIME
                                  ? ((o = (s.name ? "[" + s.name + "] " : "") + i[0]),
                                    "start" === i[1] ? (console.time ? console.time(o) : (t[o] = new Date().getTime())) : console.timeEnd ? console.timeEnd(o) : r(a, [o + ": " + (new Date().getTime() - t[o]) + "ms"]))
                                  : (s.level === n.WARN && console.warn
                                        ? (a = console.warn)
                                        : s.level === n.ERROR && console.error
                                        ? (a = console.error)
                                        : s.level === n.INFO && console.info
                                        ? (a = console.info)
                                        : s.level === n.DEBUG && console.debug
                                        ? (a = console.debug)
                                        : s.level === n.TRACE && console.trace && (a = console.trace),
                                    e.formatter(i, s),
                                    r(a, i));
                          };
                }),
                (n.useDefaults = function (e) {
                    n.setLevel((e && e.defaultLevel) || n.DEBUG), n.setHandler(n.createDefaultHandler(e));
                }),
                (n.setDefaults = n.useDefaults),
                e.exports
                    ? (e.exports = n)
                    : ((n._prevLogger = t.Logger),
                      (n.noConflict = function () {
                          return (t.Logger = n._prevLogger), n;
                      }),
                      (t.Logger = n));
        })(b);
    });
    C.useDefaults({ defaultLevel: C.TRACE });
    const E = (e, t) => {
            e.unshift(`[${t.name || "Global"}] ${new Date().toISOString()} - ${t.level.name} -`);
        },
        x = (e, t) => (t ? e.value >= A[t].value : e.value >= R.value),
        k = C.createDefaultHandler({ formatter: E });
    C.setHandler((e, t) => {
        ((e, t) => {
            (e = (e = Array.prototype.slice.call(e)).map((e) => ("object" == typeof e ? JSON.stringify(e) : e))), E(e, t), 0 !== T ? (I.push(e.join(" ")), I.length >= T && (I = I.slice(-T))) : (I = []);
        })(e, t),
            x(t.level, t.name) && k(e, t);
        var r,
            n = w(P);
        try {
            for (n.s(); !(r = n.n()).done; ) {
                const n = r.value,
                    i = n.handler,
                    s = n.level;
                t.level.value >= s.value && i(e, t);
            }
        } catch (e) {
            n.e(e);
        } finally {
            n.f();
        }
    });
    let T = 1e4,
        I = [],
        R = C.OFF;
    const A = {},
        P = [],
        L = h(
            h({}, C),
            {},
            {
                enabledFor: x,
                getHistory: () => I,
                getHistoryMaxSize: () => T,
                setHistoryMaxSize: (e) => {
                    T = e;
                },
                setLevel: (e) => {
                    R = e;
                    for (const t in A) A[t] = e;
                },
                getLevel: () => R,
                get: (e) => {
                    A[e] || (A[e] = R);
                    const t = C.get(e);
                    return (
                        (t.setLevel = (t) => {
                            A[e] = t;
                        }),
                        (t.getLevel = () => A[e]),
                        t
                    );
                },
                setHandler: (e, t) => {
                    P.push({ handler: e, level: t });
                },
            }
        );
    var O = function (e, t) {
            return function () {
                for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                return e.apply(t, r);
            };
        },
        B = Object.prototype.toString;
    function M(e) {
        return "[object Array]" === B.call(e);
    }
    function N(e) {
        return void 0 === e;
    }
    function D(e) {
        return null !== e && "object" == typeof e;
    }
    function j(e) {
        if ("[object Object]" !== B.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
    }
    function U(e) {
        return "[object Function]" === B.call(e);
    }
    function _(e, t) {
        if (null != e)
            if (("object" != typeof e && (e = [e]), M(e))) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
            else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
    }
    var F = {
        isArray: M,
        isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === B.call(e);
        },
        isBuffer: function (e) {
            return null !== e && !N(e) && null !== e.constructor && !N(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        },
        isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
            return "string" == typeof e;
        },
        isNumber: function (e) {
            return "number" == typeof e;
        },
        isObject: D,
        isPlainObject: j,
        isUndefined: N,
        isDate: function (e) {
            return "[object Date]" === B.call(e);
        },
        isFile: function (e) {
            return "[object File]" === B.call(e);
        },
        isBlob: function (e) {
            return "[object Blob]" === B.call(e);
        },
        isFunction: U,
        isStream: function (e) {
            return D(e) && U(e.pipe);
        },
        isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
        },
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) && "undefined" != typeof window && "undefined" != typeof document;
        },
        forEach: _,
        merge: function e() {
            var t = {};
            function r(r, n) {
                j(t[n]) && j(r) ? (t[n] = e(t[n], r)) : j(r) ? (t[n] = e({}, r)) : M(r) ? (t[n] = r.slice()) : (t[n] = r);
            }
            for (var n = 0, i = arguments.length; n < i; n++) _(arguments[n], r);
            return t;
        },
        extend: function (e, t, r) {
            return (
                _(t, function (t, n) {
                    e[n] = r && "function" == typeof t ? O(t, r) : t;
                }),
                e
            );
        },
        trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "");
        },
        stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
    };
    function V(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    var z = function (e, t, r) {
        if (!t) return e;
        var n;
        if (r) n = r(t);
        else if (F.isURLSearchParams(t)) n = t.toString();
        else {
            var i = [];
            F.forEach(t, function (e, t) {
                null != e &&
                    (F.isArray(e) ? (t += "[]") : (e = [e]),
                    F.forEach(e, function (e) {
                        F.isDate(e) ? (e = e.toISOString()) : F.isObject(e) && (e = JSON.stringify(e)), i.push(V(t) + "=" + V(e));
                    }));
            }),
                (n = i.join("&"));
        }
        if (n) {
            var s = e.indexOf("#");
            -1 !== s && (e = e.slice(0, s)), (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
        }
        return e;
    };
    function q() {
        this.handlers = [];
    }
    (q.prototype.use = function (e, t) {
        return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }),
        (q.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
        }),
        (q.prototype.forEach = function (e) {
            F.forEach(this.handlers, function (t) {
                null !== t && e(t);
            });
        });
    var G = q,
        H = function (e, t, r) {
            return (
                F.forEach(r, function (r) {
                    e = r(e, t);
                }),
                e
            );
        },
        W = function (e) {
            return !(!e || !e.__CANCEL__);
        },
        X = function (e, t) {
            F.forEach(e, function (r, n) {
                n !== t && n.toUpperCase() === t.toUpperCase() && ((e[t] = r), delete e[n]);
            });
        },
        Y = function (e, t, r, n, i) {
            return (function (e, t, r, n, i) {
                return (
                    (e.config = t),
                    r && (e.code = r),
                    (e.request = n),
                    (e.response = i),
                    (e.isAxiosError = !0),
                    (e.toJSON = function () {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code,
                        };
                    }),
                    e
                );
            })(new Error(e), t, r, n, i);
        },
        J = F.isStandardBrowserEnv()
            ? {
                  write: function (e, t, r, n, i, s) {
                      var o = [];
                      o.push(e + "=" + encodeURIComponent(t)),
                          F.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()),
                          F.isString(n) && o.push("path=" + n),
                          F.isString(i) && o.push("domain=" + i),
                          !0 === s && o.push("secure"),
                          (document.cookie = o.join("; "));
                  },
                  read: function (e) {
                      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                      return t ? decodeURIComponent(t[3]) : null;
                  },
                  remove: function (e) {
                      this.write(e, "", Date.now() - 864e5);
                  },
              }
            : {
                  write: function () {},
                  read: function () {
                      return null;
                  },
                  remove: function () {},
              },
        Z = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
        ],
        K = F.isStandardBrowserEnv()
            ? (function () {
                  var e,
                      t = /(msie|trident)/i.test(navigator.userAgent),
                      r = document.createElement("a");
                  function n(e) {
                      var n = e;
                      return (
                          t && (r.setAttribute("href", n), (n = r.href)),
                          r.setAttribute("href", n),
                          {
                              href: r.href,
                              protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                              host: r.host,
                              search: r.search ? r.search.replace(/^\?/, "") : "",
                              hash: r.hash ? r.hash.replace(/^#/, "") : "",
                              hostname: r.hostname,
                              port: r.port,
                              pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
                          }
                      );
                  }
                  return (
                      (e = n(window.location.href)),
                      function (t) {
                          var r = F.isString(t) ? n(t) : t;
                          return r.protocol === e.protocol && r.host === e.host;
                      }
                  );
              })()
            : function () {
                  return !0;
              },
        Q = function (e) {
            return new Promise(function (t, r) {
                var n = e.data,
                    i = e.headers;
                F.isFormData(n) && delete i["Content-Type"];
                var s = new XMLHttpRequest();
                if (e.auth) {
                    var o = e.auth.username || "",
                        a = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                    i.Authorization = "Basic " + btoa(o + ":" + a);
                }
                var c,
                    u,
                    d =
                        ((c = e.baseURL),
                        (u = e.url),
                        c && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)
                            ? (function (e, t) {
                                  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
                              })(c, u)
                            : u);
                if (
                    (s.open(e.method.toUpperCase(), z(d, e.params, e.paramsSerializer), !0),
                    (s.timeout = e.timeout),
                    (s.onreadystatechange = function () {
                        if (s && 4 === s.readyState && (0 !== s.status || (s.responseURL && 0 === s.responseURL.indexOf("file:")))) {
                            var n =
                                    "getAllResponseHeaders" in s
                                        ? (function (e) {
                                              var t,
                                                  r,
                                                  n,
                                                  i = {};
                                              return e
                                                  ? (F.forEach(e.split("\n"), function (e) {
                                                        if (((n = e.indexOf(":")), (t = F.trim(e.substr(0, n)).toLowerCase()), (r = F.trim(e.substr(n + 1))), t)) {
                                                            if (i[t] && Z.indexOf(t) >= 0) return;
                                                            i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([r]) : i[t] ? i[t] + ", " + r : r;
                                                        }
                                                    }),
                                                    i)
                                                  : i;
                                          })(s.getAllResponseHeaders())
                                        : null,
                                i = { data: e.responseType && "text" !== e.responseType ? s.response : s.responseText, status: s.status, statusText: s.statusText, headers: n, config: e, request: s };
                            !(function (e, t, r) {
                                var n = r.config.validateStatus;
                                r.status && n && !n(r.status) ? t(Y("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r);
                            })(t, r, i),
                                (s = null);
                        }
                    }),
                    (s.onabort = function () {
                        s && (r(Y("Request aborted", e, "ECONNABORTED", s)), (s = null));
                    }),
                    (s.onerror = function () {
                        r(Y("Network Error", e, null, s)), (s = null);
                    }),
                    (s.ontimeout = function () {
                        var t = "timeout of " + e.timeout + "ms exceeded";
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(Y(t, e, "ECONNABORTED", s)), (s = null);
                    }),
                    F.isStandardBrowserEnv())
                ) {
                    var l = (e.withCredentials || K(d)) && e.xsrfCookieName ? J.read(e.xsrfCookieName) : void 0;
                    l && (i[e.xsrfHeaderName] = l);
                }
                if (
                    ("setRequestHeader" in s &&
                        F.forEach(i, function (e, t) {
                            void 0 === n && "content-type" === t.toLowerCase() ? delete i[t] : s.setRequestHeader(t, e);
                        }),
                    F.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials),
                    e.responseType)
                )
                    try {
                        s.responseType = e.responseType;
                    } catch (t) {
                        if ("json" !== e.responseType) throw t;
                    }
                "function" == typeof e.onDownloadProgress && s.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && s.upload && s.upload.addEventListener("progress", e.onUploadProgress),
                    e.cancelToken &&
                        e.cancelToken.promise.then(function (e) {
                            s && (s.abort(), r(e), (s = null));
                        }),
                    n || (n = null),
                    s.send(n);
            });
        },
        ee = { "Content-Type": "application/x-www-form-urlencoded" };
    function te(e, t) {
        !F.isUndefined(e) && F.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }
    var re,
        ne = {
            adapter: (("undefined" != typeof XMLHttpRequest || ("undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process))) && (re = Q), re),
            transformRequest: [
                function (e, t) {
                    return (
                        X(t, "Accept"),
                        X(t, "Content-Type"),
                        F.isFormData(e) || F.isArrayBuffer(e) || F.isBuffer(e) || F.isStream(e) || F.isFile(e) || F.isBlob(e)
                            ? e
                            : F.isArrayBufferView(e)
                            ? e.buffer
                            : F.isURLSearchParams(e)
                            ? (te(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                            : F.isObject(e)
                            ? (te(t, "application/json;charset=utf-8"), JSON.stringify(e))
                            : e
                    );
                },
            ],
            transformResponse: [
                function (e) {
                    if ("string" == typeof e)
                        try {
                            e = JSON.parse(e);
                        } catch (e) {}
                    return e;
                },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300;
            },
        };
    (ne.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        F.forEach(["delete", "get", "head"], function (e) {
            ne.headers[e] = {};
        }),
        F.forEach(["post", "put", "patch"], function (e) {
            ne.headers[e] = F.merge(ee);
        });
    var ie = ne;
    function se(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
    }
    var oe = function (e) {
            return (
                se(e),
                (e.headers = e.headers || {}),
                (e.data = H(e.data, e.headers, e.transformRequest)),
                (e.headers = F.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
                F.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                    delete e.headers[t];
                }),
                (e.adapter || ie.adapter)(e).then(
                    function (t) {
                        return se(e), (t.data = H(t.data, t.headers, e.transformResponse)), t;
                    },
                    function (t) {
                        return W(t) || (se(e), t && t.response && (t.response.data = H(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
                    }
                )
            );
        },
        ae = function (e, t) {
            t = t || {};
            var r = {},
                n = ["url", "method", "data"],
                i = ["headers", "auth", "proxy", "params"],
                s = [
                    "baseURL",
                    "transformRequest",
                    "transformResponse",
                    "paramsSerializer",
                    "timeout",
                    "timeoutMessage",
                    "withCredentials",
                    "adapter",
                    "responseType",
                    "xsrfCookieName",
                    "xsrfHeaderName",
                    "onUploadProgress",
                    "onDownloadProgress",
                    "decompress",
                    "maxContentLength",
                    "maxBodyLength",
                    "maxRedirects",
                    "transport",
                    "httpAgent",
                    "httpsAgent",
                    "cancelToken",
                    "socketPath",
                    "responseEncoding",
                ],
                o = ["validateStatus"];
            function a(e, t) {
                return F.isPlainObject(e) && F.isPlainObject(t) ? F.merge(e, t) : F.isPlainObject(t) ? F.merge({}, t) : F.isArray(t) ? t.slice() : t;
            }
            function c(n) {
                F.isUndefined(t[n]) ? F.isUndefined(e[n]) || (r[n] = a(void 0, e[n])) : (r[n] = a(e[n], t[n]));
            }
            F.forEach(n, function (e) {
                F.isUndefined(t[e]) || (r[e] = a(void 0, t[e]));
            }),
                F.forEach(i, c),
                F.forEach(s, function (n) {
                    F.isUndefined(t[n]) ? F.isUndefined(e[n]) || (r[n] = a(void 0, e[n])) : (r[n] = a(void 0, t[n]));
                }),
                F.forEach(o, function (n) {
                    n in t ? (r[n] = a(e[n], t[n])) : n in e && (r[n] = a(void 0, e[n]));
                });
            var u = n.concat(i).concat(s).concat(o),
                d = Object.keys(e)
                    .concat(Object.keys(t))
                    .filter(function (e) {
                        return -1 === u.indexOf(e);
                    });
            return F.forEach(d, c), r;
        };
    function ce(e) {
        (this.defaults = e), (this.interceptors = { request: new G(), response: new G() });
    }
    (ce.prototype.request = function (e) {
        "string" == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
            (e = ae(this.defaults, e)).method ? (e.method = e.method.toLowerCase()) : this.defaults.method ? (e.method = this.defaults.method.toLowerCase()) : (e.method = "get");
        var t = [oe, void 0],
            r = Promise.resolve(e);
        for (
            this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected);
            }),
                this.interceptors.response.forEach(function (e) {
                    t.push(e.fulfilled, e.rejected);
                });
            t.length;

        )
            r = r.then(t.shift(), t.shift());
        return r;
    }),
        (ce.prototype.getUri = function (e) {
            return (e = ae(this.defaults, e)), z(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
        }),
        F.forEach(["delete", "get", "head", "options"], function (e) {
            ce.prototype[e] = function (t, r) {
                return this.request(ae(r || {}, { method: e, url: t, data: (r || {}).data }));
            };
        }),
        F.forEach(["post", "put", "patch"], function (e) {
            ce.prototype[e] = function (t, r, n) {
                return this.request(ae(n || {}, { method: e, url: t, data: r }));
            };
        });
    var ue = ce;
    function de(e) {
        this.message = e;
    }
    (de.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
    }),
        (de.prototype.__CANCEL__ = !0);
    var le = de;
    function fe(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e;
        });
        var r = this;
        e(function (e) {
            r.reason || ((r.reason = new le(e)), t(r.reason));
        });
    }
    (fe.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
    }),
        (fe.source = function () {
            var e;
            return {
                token: new fe(function (t) {
                    e = t;
                }),
                cancel: e,
            };
        });
    var pe = fe;
    function he(e) {
        var t = new ue(e),
            r = O(ue.prototype.request, t);
        return F.extend(r, ue.prototype, t), F.extend(r, t), r;
    }
    var me = he(ie);
    (me.Axios = ue),
        (me.create = function (e) {
            return he(ae(me.defaults, e));
        }),
        (me.Cancel = le),
        (me.CancelToken = pe),
        (me.isCancel = W),
        (me.all = function (e) {
            return Promise.all(e);
        }),
        (me.spread = function (e) {
            return function (t) {
                return e.apply(null, t);
            };
        }),
        (me.isAxiosError = function (e) {
            return "object" == typeof e && !0 === e.isAxiosError;
        });
    var ge = me,
        ve = me;
    ge.default = ve;
    var ye,
        we = ge,
        be = "object" == typeof Reflect ? Reflect : null,
        Se =
            be && "function" == typeof be.apply
                ? be.apply
                : function (e, t, r) {
                      return Function.prototype.apply.call(e, t, r);
                  };
    ye =
        be && "function" == typeof be.ownKeys
            ? be.ownKeys
            : Object.getOwnPropertySymbols
            ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : function (e) {
                  return Object.getOwnPropertyNames(e);
              };
    var Ce =
        Number.isNaN ||
        function (e) {
            return e != e;
        };
    function Ee() {
        Ee.init.call(this);
    }
    var xe = Ee,
        ke = function (e, t) {
            return new Promise(function (r, n) {
                function i(r) {
                    e.removeListener(t, s), n(r);
                }
                function s() {
                    "function" == typeof e.removeListener && e.removeListener("error", i), r([].slice.call(arguments));
                }
                Ne(e, t, s, { once: !0 }),
                    "error" !== t &&
                        (function (e, t, r) {
                            "function" == typeof e.on && Ne(e, "error", t, r);
                        })(e, i, { once: !0 });
            });
        };
    (Ee.EventEmitter = Ee), (Ee.prototype._events = void 0), (Ee.prototype._eventsCount = 0), (Ee.prototype._maxListeners = void 0);
    var Te = 10;
    function Ie(e) {
        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
    }
    function Re(e) {
        return void 0 === e._maxListeners ? Ee.defaultMaxListeners : e._maxListeners;
    }
    function Ae(e, t, r, n) {
        var i, s, o, a;
        if (
            (Ie(r),
            void 0 === (s = e._events) ? ((s = e._events = Object.create(null)), (e._eventsCount = 0)) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), (s = e._events)), (o = s[t])),
            void 0 === o)
        )
            (o = s[t] = r), ++e._eventsCount;
        else if (("function" == typeof o ? (o = s[t] = n ? [r, o] : [o, r]) : n ? o.unshift(r) : o.push(r), (i = Re(e)) > 0 && o.length > i && !o.warned)) {
            o.warned = !0;
            var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            (c.name = "MaxListenersExceededWarning"), (c.emitter = e), (c.type = t), (c.count = o.length), (a = c), console && console.warn && console.warn(a);
        }
        return e;
    }
    function Pe() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function Le(e, t, r) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
            i = Pe.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
    }
    function Oe(e, t, r) {
        var n = e._events;
        if (void 0 === n) return [];
        var i = n[t];
        return void 0 === i
            ? []
            : "function" == typeof i
            ? r
                ? [i.listener || i]
                : [i]
            : r
            ? (function (e) {
                  for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                  return t;
              })(i)
            : Me(i, i.length);
    }
    function Be(e) {
        var t = this._events;
        if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length;
        }
        return 0;
    }
    function Me(e, t) {
        for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
        return r;
    }
    function Ne(e, t, r, n) {
        if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
        else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, function i(s) {
                n.once && e.removeEventListener(t, i), r(s);
            });
        }
    }
    Object.defineProperty(Ee, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
            return Te;
        },
        set: function (e) {
            if ("number" != typeof e || e < 0 || Ce(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Te = e;
        },
    }),
        (Ee.init = function () {
            (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
        }),
        (Ee.prototype.setMaxListeners = function (e) {
            if ("number" != typeof e || e < 0 || Ce(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return (this._maxListeners = e), this;
        }),
        (Ee.prototype.getMaxListeners = function () {
            return Re(this);
        }),
        (Ee.prototype.emit = function (e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var n = "error" === e,
                i = this._events;
            if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1;
            if (n) {
                var s;
                if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
                var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw ((o.context = s), o);
            }
            var a = i[e];
            if (void 0 === a) return !1;
            if ("function" == typeof a) Se(a, this, t);
            else {
                var c = a.length,
                    u = Me(a, c);
                for (r = 0; r < c; ++r) Se(u[r], this, t);
            }
            return !0;
        }),
        (Ee.prototype.addListener = function (e, t) {
            return Ae(this, e, t, !1);
        }),
        (Ee.prototype.on = Ee.prototype.addListener),
        (Ee.prototype.prependListener = function (e, t) {
            return Ae(this, e, t, !0);
        }),
        (Ee.prototype.once = function (e, t) {
            return Ie(t), this.on(e, Le(this, e, t)), this;
        }),
        (Ee.prototype.prependOnceListener = function (e, t) {
            return Ie(t), this.prependListener(e, Le(this, e, t)), this;
        }),
        (Ee.prototype.removeListener = function (e, t) {
            var r, n, i, s, o;
            if ((Ie(t), void 0 === (n = this._events))) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (i = -1, s = r.length - 1; s >= 0; s--)
                    if (r[s] === t || r[s].listener === t) {
                        (o = r[s].listener), (i = s);
                        break;
                    }
                if (i < 0) return this;
                0 === i
                    ? r.shift()
                    : (function (e, t) {
                          for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                          e.pop();
                      })(r, i),
                    1 === r.length && (n[e] = r[0]),
                    void 0 !== n.removeListener && this.emit("removeListener", e, o || t);
            }
            return this;
        }),
        (Ee.prototype.off = Ee.prototype.removeListener),
        (Ee.prototype.removeAllListeners = function (e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== r[e] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[e]), this;
            if (0 === arguments.length) {
                var i,
                    s = Object.keys(r);
                for (n = 0; n < s.length; ++n) "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
            }
            if ("function" == typeof (t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t) for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this;
        }),
        (Ee.prototype.listeners = function (e) {
            return Oe(this, e, !0);
        }),
        (Ee.prototype.rawListeners = function (e) {
            return Oe(this, e, !1);
        }),
        (Ee.listenerCount = function (e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : Be.call(e, t);
        }),
        (Ee.prototype.listenerCount = Be),
        (Ee.prototype.eventNames = function () {
            return this._eventsCount > 0 ? ye(this._events) : [];
        }),
        (xe.once = ke);
    var De = _e,
        je = function (e, t) {
            var r = new Ue();
            return _e(e, r, t), r;
        },
        Ue = xe.EventEmitter;
    function _e(e, t, r) {
        Array.isArray(r) || (r = [r]);
        var n = [];
        return (
            r.forEach(function (r) {
                var i = function () {
                    var e = [].slice.call(arguments);
                    e.unshift(r), t.emit.apply(t, e);
                };
                n.push(i), e.on(r, i);
            }),
            function () {
                r.forEach(function (t, r) {
                    e.removeListener(t, n[r]);
                });
            }
        );
    }
    De.filter = je;
    const Fe = L.get("PeerConnectionStats"),
        Ve = "stats";
    class ze extends xe {
        constructor(e) {
            super(), (this.peer = e), (this.stats = null), (this.emitInterval = null), (this.previousStats = null);
        }
        init() {
            var e = this;
            Fe.info("Initializing peer connection stats"),
                (this.emitInterval = setInterval(
                    g(function* () {
                        Fe.debug("New interval executed");
                        const t = yield e.peer.getStats();
                        e.parseStats(t), Fe.debug("Emitting stats"), e.emit(Ve, e.stats);
                    }),
                    1e3
                ));
        }
        parseStats(e) {
            Fe.debug("Parsing raw stats"), (this.previousStats = this.stats);
            const t = { audio: { inbounds: [], outbounds: [] }, video: { inbounds: [], outbounds: [] }, raw: e };
            var r,
                n = w(e.values());
            try {
                for (n.s(); !(r = n.n()).done; ) {
                    const e = r.value;
                    switch (e.type) {
                        case "outbound-rtp":
                            $e(e, this.previousStats, t);
                            break;
                        case "inbound-rtp":
                            qe(e, this.previousStats, t);
                            break;
                        case "candidate-pair":
                            e.nominated && Ge(e, t);
                    }
                }
            } catch (e) {
                n.e(e);
            } finally {
                n.f();
            }
            this.stats = t;
        }
        stop() {
            Fe.info("Stopping peer connection stats"), clearInterval(this.emitInterval);
        }
    }
    const $e = (e, t, r) => {
            var n, i;
            Fe.debug("Parsing outbound-rtp report");
            const s = He(e),
                o = We(e.codecId, r.raw),
                a = Xe(e, s);
            (a.totalBytesSent = e.bytesSent), (a.id = e.id);
            const c = t ? (null !== (n = null === (i = t[s].outbounds.find((e) => e.id === a.id)) || void 0 === i ? void 0 : i.totalBytesSent) && void 0 !== n ? n : 0) : null;
            (a.bitrate = c ? 8 * (e.bytesSent - c) : 0), "video" === s && (a.qualityLimitationReason = e.qualityLimitationReason), r[s].outbounds.push(h(h({}, o), a));
        },
        qe = (e, t, r) => {
            Fe.debug("Parsing inbound-rtp report");
            let n = He(e);
            const i = We(e.codecId, r.raw);
            ["audio", "video"].includes(n) || (n = e.id.includes("Video") ? "video" : "audio");
            const s = Xe(e, n);
            if (
                ((s.totalBytesReceived = e.bytesReceived),
                (s.totalPacketsReceived = e.packetsReceived),
                (s.totalPacketsLost = e.packetsLost),
                (s.jitter = e.jitter),
                (s.id = e.id),
                (s.bitrate = 0),
                (s.packetsLostRatioPerSecond = 0),
                (s.packetsLostDeltaPerSecond = 0),
                t)
            ) {
                const r = t[n].inbounds.find((e) => e.id === s.id);
                if (r) {
                    const t = r.totalBytesReceived;
                    (s.bitrate = 8 * (e.bytesReceived - t)), (s.packetsLostRatioPerSecond = Ye(s, r)), (s.packetsLostDeltaPerSecond = Je(s, r));
                }
            }
            r[n].inbounds.push(h(h({}, i), s));
        },
        Ge = (e, t) => {
            Fe.debug("Parsing candidate-pair report"),
                (t.totalRoundTripTime = e.totalRoundTripTime),
                (t.currentRoundTripTime = e.currentRoundTripTime),
                (t.availableOutgoingBitrate = e.availableOutgoingBitrate),
                (t.candidateType = t.raw.get(e.localCandidateId).candidateType);
        },
        He = (e) => e.mediaType || e.kind,
        We = (e, t) => {
            var r;
            return { mimeType: (e && null !== (r = t.get(e)) && void 0 !== r ? r : {}).mimeType };
        },
        Xe = (e, t) => {
            const r = {};
            return "video" === t && ((r.framesPerSecond = e.framesPerSecond), (r.frameHeight = e.frameHeight), (r.frameWidth = e.frameWidth)), (r.timestamp = e.timestamp), r;
        },
        Ye = (e, t) => Je(e, t) / (e.totalPacketsReceived - t.totalPacketsReceived),
        Je = (e, t) => e.totalPacketsLost - t.totalPacketsLost;
    var Ze = S(function (e) {
            var t = (e.exports = {
                v: [{ name: "version", reg: /^(\d*)$/ }],
                o: [{ name: "origin", reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/, names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"], format: "%s %s %d %s IP%d %s" }],
                s: [{ name: "name" }],
                i: [{ name: "description" }],
                u: [{ name: "uri" }],
                e: [{ name: "email" }],
                p: [{ name: "phone" }],
                z: [{ name: "timezones" }],
                r: [{ name: "repeats" }],
                t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }],
                c: [{ name: "connection", reg: /^IN IP(\d) (\S*)/, names: ["version", "ip"], format: "IN IP%d %s" }],
                b: [{ push: "bandwidth", reg: /^(TIAS|AS|CT|RR|RS):(\d*)/, names: ["type", "limit"], format: "%s:%s" }],
                m: [{ reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/, names: ["type", "port", "protocol", "payloads"], format: "%s %d %s %s" }],
                a: [
                    {
                        push: "rtp",
                        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
                        names: ["payload", "codec", "rate", "encoding"],
                        format: function (e) {
                            return e.encoding ? "rtpmap:%d %s/%s/%s" : e.rate ? "rtpmap:%d %s/%s" : "rtpmap:%d %s";
                        },
                    },
                    { push: "fmtp", reg: /^fmtp:(\d*) ([\S| ]*)/, names: ["payload", "config"], format: "fmtp:%d %s" },
                    { name: "control", reg: /^control:(.*)/, format: "control:%s" },
                    {
                        name: "rtcp",
                        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
                        names: ["port", "netType", "ipVer", "address"],
                        format: function (e) {
                            return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
                        },
                    },
                    { push: "rtcpFbTrrInt", reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/, names: ["payload", "value"], format: "rtcp-fb:%s trr-int %d" },
                    {
                        push: "rtcpFb",
                        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
                        names: ["payload", "type", "subtype"],
                        format: function (e) {
                            return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
                        },
                    },
                    {
                        push: "ext",
                        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
                        names: ["value", "direction", "encrypt-uri", "uri", "config"],
                        format: function (e) {
                            return "extmap:%d" + (e.direction ? "/%s" : "%v") + (e["encrypt-uri"] ? " %s" : "%v") + " %s" + (e.config ? " %s" : "");
                        },
                    },
                    { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
                    {
                        push: "crypto",
                        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
                        names: ["id", "suite", "config", "sessionConfig"],
                        format: function (e) {
                            return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
                        },
                    },
                    { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
                    { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" },
                    { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
                    { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
                    { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" },
                    { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" },
                    { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
                    { name: "icelite", reg: /^(ice-lite)/ },
                    { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" },
                    { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
                    { name: "fingerprint", reg: /^fingerprint:(\S*) (\S*)/, names: ["type", "hash"], format: "fingerprint:%s %s" },
                    {
                        push: "candidates",
                        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
                        names: ["foundation", "component", "transport", "priority", "ip", "port", "type", "raddr", "rport", "tcptype", "generation", "network-id", "network-cost"],
                        format: function (e) {
                            var t = "candidate:%s %d %s %d %s %d typ %s";
                            return (
                                (t += null != e.raddr ? " raddr %s rport %d" : "%v%v"),
                                (t += null != e.tcptype ? " tcptype %s" : "%v"),
                                null != e.generation && (t += " generation %d"),
                                (t += null != e["network-id"] ? " network-id %d" : "%v"),
                                (t += null != e["network-cost"] ? " network-cost %d" : "%v")
                            );
                        },
                    },
                    { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
                    { name: "remoteCandidates", reg: /^remote-candidates:(.*)/, format: "remote-candidates:%s" },
                    { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" },
                    {
                        push: "ssrcs",
                        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
                        names: ["id", "attribute", "value"],
                        format: function (e) {
                            var t = "ssrc:%d";
                            return null != e.attribute && ((t += " %s"), null != e.value && (t += ":%s")), t;
                        },
                    },
                    { push: "ssrcGroups", reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/, names: ["semantics", "ssrcs"], format: "ssrc-group:%s %s" },
                    { name: "msidSemantic", reg: /^msid-semantic:\s?(\w*) (\S*)/, names: ["semantic", "token"], format: "msid-semantic: %s %s" },
                    { push: "groups", reg: /^group:(\w*) (.*)/, names: ["type", "mids"], format: "group:%s %s" },
                    { name: "rtcpMux", reg: /^(rtcp-mux)/ },
                    { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
                    {
                        name: "sctpmap",
                        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
                        names: ["sctpmapNumber", "app", "maxMessageSize"],
                        format: function (e) {
                            return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
                        },
                    },
                    { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" },
                    {
                        push: "rids",
                        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
                        names: ["id", "direction", "params"],
                        format: function (e) {
                            return e.params ? "rid:%s %s %s" : "rid:%s %s";
                        },
                    },
                    {
                        push: "imageattrs",
                        reg: new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),
                        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
                        format: function (e) {
                            return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
                        },
                    },
                    {
                        name: "simulcast",
                        reg: new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),
                        names: ["dir1", "list1", "dir2", "list2"],
                        format: function (e) {
                            return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
                        },
                    },
                    { name: "simulcast_03", reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/, names: ["value"], format: "simulcast: %s" },
                    { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" },
                    { name: "sourceFilter", reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/, names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"], format: "source-filter: %s %s %s %s %s" },
                    { name: "bundleOnly", reg: /^(bundle-only)/ },
                    { name: "label", reg: /^label:(.+)/, format: "label:%s" },
                    { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" },
                    { name: "maxMessageSize", reg: /^max-message-size:(\d+)$/, format: "max-message-size:%s" },
                    {
                        push: "tsRefClocks",
                        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
                        names: ["clksrc", "clksrcExt"],
                        format: function (e) {
                            return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "");
                        },
                    },
                    {
                        name: "mediaClk",
                        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
                        names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
                        format: function (e) {
                            var t = "mediaclk:";
                            return (t += null != e.id ? "id=%s %s" : "%v%s"), (t += null != e.mediaClockValue ? "=%s" : ""), (t += null != e.rateNumerator ? " rate=%s" : ""), (t += null != e.rateDenominator ? "/%s" : "");
                        },
                    },
                    { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
                    { name: "content", reg: /^content:(.+)/, format: "content:%s" },
                    { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" },
                    { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
                    { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
                    { name: "bfcpFloorId", reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/, names: ["id", "mStream"], format: "floorid:%s mstrm:%s" },
                    { push: "invalid", names: ["value"] },
                ],
            });
            Object.keys(t).forEach(function (e) {
                t[e].forEach(function (e) {
                    e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s");
                });
            });
        }),
        Ke = S(function (e, t) {
            var r = function (e) {
                    return String(Number(e)) === e ? Number(e) : e;
                },
                n = function (e, t, n) {
                    var i = e.name && e.names;
                    e.push && !t[e.push] ? (t[e.push] = []) : i && !t[e.name] && (t[e.name] = {});
                    var s = e.push ? {} : i ? t[e.name] : t;
                    !(function (e, t, n, i) {
                        if (i && !n) t[i] = r(e[1]);
                        else for (var s = 0; s < n.length; s += 1) null != e[s + 1] && (t[n[s]] = r(e[s + 1]));
                    })(n.match(e.reg), s, e.names, e.name),
                        e.push && t[e.push].push(s);
                },
                i = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
            t.parse = function (e) {
                var t = {},
                    r = [],
                    s = t;
                return (
                    e
                        .split(/(\r\n|\r|\n)/)
                        .filter(i)
                        .forEach(function (e) {
                            var t = e[0],
                                i = e.slice(2);
                            "m" === t && (r.push({ rtp: [], fmtp: [] }), (s = r[r.length - 1]));
                            for (var o = 0; o < (Ze[t] || []).length; o += 1) {
                                var a = Ze[t][o];
                                if (a.reg.test(i)) return n(a, s, i);
                            }
                        }),
                    (t.media = r),
                    t
                );
            };
            var s = function (e, t) {
                var n = t.split(/=(.+)/, 2);
                return 2 === n.length ? (e[n[0]] = r(n[1])) : 1 === n.length && t.length > 1 && (e[n[0]] = void 0), e;
            };
            (t.parseParams = function (e) {
                return e.split(/;\s?/).reduce(s, {});
            }),
                (t.parseFmtpConfig = t.parseParams),
                (t.parsePayloads = function (e) {
                    return e.toString().split(" ").map(Number);
                }),
                (t.parseRemoteCandidates = function (e) {
                    for (var t = [], n = e.split(" ").map(r), i = 0; i < n.length; i += 3) t.push({ component: n[i], ip: n[i + 1], port: n[i + 2] });
                    return t;
                }),
                (t.parseImageAttributes = function (e) {
                    return e.split(" ").map(function (e) {
                        return e
                            .substring(1, e.length - 1)
                            .split(",")
                            .reduce(s, {});
                    });
                }),
                (t.parseSimulcastStreamList = function (e) {
                    return e.split(";").map(function (e) {
                        return e.split(",").map(function (e) {
                            var t,
                                n = !1;
                            return "~" !== e[0] ? (t = r(e)) : ((t = r(e.substring(1, e.length))), (n = !0)), { scid: t, paused: n };
                        });
                    });
                });
        }),
        Qe = /%[sdv%]/g,
        et = function (e) {
            var t = 1,
                r = arguments,
                n = r.length;
            return e.replace(Qe, function (e) {
                if (t >= n) return e;
                var i = r[t];
                switch (((t += 1), e)) {
                    case "%%":
                        return "%";
                    case "%s":
                        return String(i);
                    case "%d":
                        return Number(i);
                    case "%v":
                        return "";
                }
            });
        },
        tt = function (e, t, r) {
            var n = [e + "=" + (t.format instanceof Function ? t.format(t.push ? r : r[t.name]) : t.format)];
            if (t.names)
                for (var i = 0; i < t.names.length; i += 1) {
                    var s = t.names[i];
                    t.name ? n.push(r[t.name][s]) : n.push(r[t.names[i]]);
                }
            else n.push(r[t.name]);
            return et.apply(null, n);
        },
        rt = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
        nt = ["i", "c", "b", "a"],
        it = {
            write: function (e, t) {
                (t = t || {}),
                    null == e.version && (e.version = 0),
                    null == e.name && (e.name = " "),
                    e.media.forEach(function (e) {
                        null == e.payloads && (e.payloads = "");
                    });
                var r = t.outerOrder || rt,
                    n = t.innerOrder || nt,
                    i = [];
                return (
                    r.forEach(function (t) {
                        Ze[t].forEach(function (r) {
                            r.name in e && null != e[r.name]
                                ? i.push(tt(t, r, e))
                                : r.push in e &&
                                  null != e[r.push] &&
                                  e[r.push].forEach(function (e) {
                                      i.push(tt(t, r, e));
                                  });
                        });
                    }),
                    e.media.forEach(function (e) {
                        i.push(tt("m", Ze.m[0], e)),
                            n.forEach(function (t) {
                                Ze[t].forEach(function (r) {
                                    r.name in e && null != e[r.name]
                                        ? i.push(tt(t, r, e))
                                        : r.push in e &&
                                          null != e[r.push] &&
                                          e[r.push].forEach(function (e) {
                                              i.push(tt(t, r, e));
                                          });
                                });
                            });
                    }),
                    i.join("\r\n") + "\r\n"
                );
            },
            parse: Ke.parse,
            parseParams: Ke.parseParams,
            parseFmtpConfig: Ke.parseFmtpConfig,
            parsePayloads: Ke.parsePayloads,
            parseRemoteCandidates: Ke.parseRemoteCandidates,
            parseImageAttributes: Ke.parseImageAttributes,
            parseSimulcastStreamList: Ke.parseSimulcastStreamList,
        };
    class st {
        constructor(e, t, r, n, i, s, o, a, c) {
            (this.foundation = e), (this.componentId = t), (this.transport = r), (this.priority = n), (this.address = i), (this.port = s), (this.type = o), (this.relAddr = a), (this.relPort = c);
        }
        equals(e) {
            return (
                e.foundation === this.foundation &&
                e.componentId === this.componentId &&
                e.transport === this.transport &&
                e.priority === this.priority &&
                e.address === this.address &&
                e.port === this.port &&
                e.type === this.type &&
                e.relAddr === this.relAddr &&
                e.relPort === this.relPort
            );
        }
        clone() {
            return new st(this.foundation, this.componentId, this.transport, this.priority, this.address, this.port, this.type, this.relAddr, this.relPort);
        }
        plain() {
            const e = { foundation: this.foundation, componentId: this.componentId, transport: this.transport, priority: this.priority, address: this.address, port: this.port, type: this.type };
            return this.relAddr && (e.relAddr = this.relAddr), this.relPort && (e.relPort = this.relPort), e;
        }
        getFoundation() {
            return this.foundation;
        }
        getComponentId() {
            return this.componentId;
        }
        getTransport() {
            return this.transport;
        }
        getPriority() {
            return this.priority;
        }
        getAddress() {
            return this.address;
        }
        getPort() {
            return this.port;
        }
        getType() {
            return this.type;
        }
        getRelAddr() {
            return this.relAddr;
        }
        getRelPort() {
            return this.relPort;
        }
    }
    st.expand = function (e) {
        return new st(e.foundation, e.componentId, e.transport, e.priority, e.address, e.port, e.type, e.relAddr, e.relPort);
    };
    var ot = st;
    class at {
        constructor(e, t) {
            (this.id = e), (this.params = t || []);
        }
        clone() {
            return new at(this.id, this.params);
        }
        plain() {
            return this.params.length ? { id: this.id, params: this.params } : { id: this.id };
        }
        getId() {
            return this.id;
        }
        getParams() {
            return this.params;
        }
    }
    at.expand = function (e) {
        return new at(e.id, e.params);
    };
    var ct = at;
    class ut {
        constructor(e, t, r) {
            (this.codec = e), (this.type = t), (this.params = {}), (this.rtcpfbs = new Set()), r && this.addParams(r);
        }
        clone() {
            const e = new ut(this.codec, this.type, this.params);
            this.hasRTX() && e.setRTX(this.getRTX());
            for (const t of this.rtcpfbs) e.addRTCPFeedback(t.clone());
            return this.hasChannels() && e.setChannels(this.getChannels()), e;
        }
        plain() {
            const e = { codec: this.codec, type: this.type };
            this.rtx && (e.rtx = this.rtx), this.channels && (e.channels = this.channels), Object.keys(this.params).length && (e.params = this.params);
            for (const t of this.rtcpfbs) e.rtcpfbs || (e.rtcpfbs = []), e.rtcpfbs.push(t.plain());
            return e;
        }
        setRTX(e) {
            this.rtx = e;
        }
        getType() {
            return this.type;
        }
        setType(e) {
            this.type = e;
        }
        getCodec() {
            return this.codec;
        }
        getParams() {
            return this.params;
        }
        addParams(e) {
            for (const t in e) this.params[t] = e[t];
        }
        addParam(e, t) {
            this.params[e] = t;
        }
        hasParam(e) {
            return this.params.hasOwnProperty(e);
        }
        getParam(e, t) {
            return this.hasParam(e) ? this.params[e] : "" + t;
        }
        hasRTX() {
            return this.rtx;
        }
        getRTX() {
            return this.rtx;
        }
        hasChannels() {
            return this.channels;
        }
        getChannels() {
            return this.channels;
        }
        setChannels(e) {
            this.channels = e;
        }
        addRTCPFeedback(e) {
            this.rtcpfbs.add(e);
        }
        getRTCPFeedbacks() {
            return this.rtcpfbs;
        }
    }
    (ut.expand = function (e) {
        const t = new ut(e.codec, e.type, e.params);
        e.rtx && t.setRTX(e.rtx), e.channels && t.setChannels(e.channels);
        for (let r = 0; e.rtcpfbs && r < e.rtcpfbs.length; ++r) {
            const n = ct.expand(e.rtcpfbs[r]);
            t.addRTCPFeedback(n);
        }
        return t;
    }),
        (ut.MapFromNames = function (e, t, r) {
            const n = new Map();
            let i = 96;
            for (let s = 0; s < e.length; ++s) {
                let o;
                const a = e[s].split(";"),
                    c = a[0].toLowerCase().trim();
                o = "pcmu" === c ? 0 : "pcma" === c ? 8 : ++i;
                const u = new ut(c, o);
                "opus" === c ? u.setChannels(2) : "multiopus" === c && u.setChannels(6), t && "ulpfec" !== c && "flexfec-03" !== c && "red" !== c && u.setRTX(++i);
                for (let e = 0; r && e < r.length; ++e) u.addRTCPFeedback(new ct(r[e].id, r[e].params));
                for (let e = 1; e < a.length; ++e) {
                    let t = a[e].split("=");
                    u.addParam(t[0].trim(), t[1].trim());
                }
                n.set(u.getCodec().toLowerCase(), u);
            }
            return n;
        });
    var dt = ut;
    var lt = function e() {
        var t = this;
        if (!(this instanceof e)) return new (Function.prototype.bind.apply(e, [null].concat(Array.prototype.slice.call(arguments))))();
        Array.from(arguments).forEach(function (e) {
            t[e] = Symbol.for("MEDOOZE_SEMANTIC_SDP_" + e);
        });
    };
    const ft = lt("ACTIVE", "PASSIVE", "ACTPASS", "INACTIVE");
    (ft.byValue = function (e) {
        switch (e) {
            case ft.ACTIVE:
            case ft.PASSIVE:
            case ft.ACTPASS:
            case ft.INACTIVE:
                return e;
        }
        return ft[e.toUpperCase()];
    }),
        (ft.toString = function (e) {
            switch (e) {
                case ft.ACTIVE:
                    return "active";
                case ft.PASSIVE:
                    return "passive";
                case ft.ACTPASS:
                    return "actpass";
                case ft.INACTIVE:
                    return "inactive";
            }
        }),
        (ft.reverse = function (e) {
            switch (e) {
                case ft.ACTIVE:
                    return ft.PASSIVE;
                case ft.PASSIVE:
                    return ft.ACTIVE;
                case ft.ACTPASS:
                    return ft.PASSIVE;
                case ft.INACTIVE:
                    return ft.INACTIVE;
            }
        });
    var pt = ft;
    class ht {
        constructor(e, t, r) {
            (this.setup = e), (this.hash = t), (this.fingerprint = r);
        }
        clone() {
            return new ht(this.setup, this.hash, this.fingerprint);
        }
        plain() {
            return { setup: pt.toString(this.setup), hash: this.hash, fingerprint: this.fingerprint };
        }
        getFingerprint() {
            return this.fingerprint;
        }
        getHash() {
            return this.hash;
        }
        getSetup() {
            return this.setup;
        }
        setSetup(e) {
            this.setup = e;
        }
    }
    ht.expand = function (e) {
        return new ht(e.setup ? pt.byValue(e.setup) : pt.ACTPASS, e.hash, e.fingerprint);
    };
    var mt = ht;
    class gt {
        constructor(e, t, r, n) {
            (this.tag = e), (this.suite = t), (this.keyParams = r), (this.sessionParams = n);
        }
        clone() {
            return new gt(this.tag, this.suite, this.keyParams, this.sessionParams);
        }
        plain() {
            return { tag: this.tag, suite: this.suite, keyParams: this.keyParams, sessionParams: this.sessionParams };
        }
        getSessionParams() {
            return this.sessionParams;
        }
        getKeyParams() {
            return this.keyParams;
        }
        getSuite() {
            return this.suite;
        }
        getTag() {
            return this.tag;
        }
    }
    gt.expand = function (e) {
        return new gt(e.tag, e.suite, e.keyParams, e.sessionParams);
    };
    for (
        var vt = gt,
            yt = function (e) {
                var t = It(e),
                    r = t[0],
                    n = t[1];
                return (3 * (r + n)) / 4 - n;
            },
            wt = function (e) {
                var t,
                    r,
                    n = It(e),
                    i = n[0],
                    s = n[1],
                    o = new Et(
                        (function (e, t, r) {
                            return (3 * (t + r)) / 4 - r;
                        })(0, i, s)
                    ),
                    a = 0,
                    c = s > 0 ? i - 4 : i;
                for (r = 0; r < c; r += 4)
                    (t = (Ct[e.charCodeAt(r)] << 18) | (Ct[e.charCodeAt(r + 1)] << 12) | (Ct[e.charCodeAt(r + 2)] << 6) | Ct[e.charCodeAt(r + 3)]), (o[a++] = (t >> 16) & 255), (o[a++] = (t >> 8) & 255), (o[a++] = 255 & t);
                2 === s && ((t = (Ct[e.charCodeAt(r)] << 2) | (Ct[e.charCodeAt(r + 1)] >> 4)), (o[a++] = 255 & t));
                1 === s && ((t = (Ct[e.charCodeAt(r)] << 10) | (Ct[e.charCodeAt(r + 1)] << 4) | (Ct[e.charCodeAt(r + 2)] >> 2)), (o[a++] = (t >> 8) & 255), (o[a++] = 255 & t));
                return o;
            },
            bt = function (e) {
                for (var t, r = e.length, n = r % 3, i = [], s = 16383, o = 0, a = r - n; o < a; o += s) i.push(Rt(e, o, o + s > a ? a : o + s));
                1 === n ? ((t = e[r - 1]), i.push(St[t >> 2] + St[(t << 4) & 63] + "==")) : 2 === n && ((t = (e[r - 2] << 8) + e[r - 1]), i.push(St[t >> 10] + St[(t >> 4) & 63] + St[(t << 2) & 63] + "="));
                return i.join("");
            },
            St = [],
            Ct = [],
            Et = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            xt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            kt = 0,
            Tt = xt.length;
        kt < Tt;
        ++kt
    )
        (St[kt] = xt[kt]), (Ct[xt.charCodeAt(kt)] = kt);
    function It(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
    }
    function Rt(e, t, r) {
        for (var n, i, s = [], o = t; o < r; o += 3) (n = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), s.push(St[((i = n) >> 18) & 63] + St[(i >> 12) & 63] + St[(i >> 6) & 63] + St[63 & i]);
        return s.join("");
    }
    (Ct["-".charCodeAt(0)] = 62), (Ct["_".charCodeAt(0)] = 63);
    var At = { byteLength: yt, toByteArray: wt, fromByteArray: bt },
        Pt = function (e, t, r, n, i) {
            var s,
                o,
                a = 8 * i - n - 1,
                c = (1 << a) - 1,
                u = c >> 1,
                d = -7,
                l = r ? i - 1 : 0,
                f = r ? -1 : 1,
                p = e[t + l];
            for (l += f, s = p & ((1 << -d) - 1), p >>= -d, d += a; d > 0; s = 256 * s + e[t + l], l += f, d -= 8);
            for (o = s & ((1 << -d) - 1), s >>= -d, d += n; d > 0; o = 256 * o + e[t + l], l += f, d -= 8);
            if (0 === s) s = 1 - u;
            else {
                if (s === c) return o ? NaN : (1 / 0) * (p ? -1 : 1);
                (o += Math.pow(2, n)), (s -= u);
            }
            return (p ? -1 : 1) * o * Math.pow(2, s - n);
        },
        Lt = function (e, t, r, n, i, s) {
            var o,
                a,
                c,
                u = 8 * s - i - 1,
                d = (1 << u) - 1,
                l = d >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : s - 1,
                h = n ? 1 : -1,
                m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
                t = Math.abs(t),
                    isNaN(t) || t === 1 / 0
                        ? ((a = isNaN(t) ? 1 : 0), (o = d))
                        : ((o = Math.floor(Math.log(t) / Math.LN2)),
                          t * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
                          (t += o + l >= 1 ? f / c : f * Math.pow(2, 1 - l)) * c >= 2 && (o++, (c /= 2)),
                          o + l >= d ? ((a = 0), (o = d)) : o + l >= 1 ? ((a = (t * c - 1) * Math.pow(2, i)), (o += l)) : ((a = t * Math.pow(2, l - 1) * Math.pow(2, i)), (o = 0)));
                i >= 8;
                e[r + p] = 255 & a, p += h, a /= 256, i -= 8
            );
            for (o = (o << i) | a, u += i; u > 0; e[r + p] = 255 & o, p += h, o /= 256, u -= 8);
            e[r + p - h] |= 128 * m;
        },
        Ot = S(function (e, t) {
            const r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            (t.Buffer = s),
                (t.SlowBuffer = function (e) {
                    +e != e && (e = 0);
                    return s.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50);
            const n = 2147483647;
            function i(e) {
                if (e > n) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                const t = new Uint8Array(e);
                return Object.setPrototypeOf(t, s.prototype), t;
            }
            function s(e, t, r) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return c(e);
                }
                return o(e, t, r);
            }
            function o(e, t, r) {
                if ("string" == typeof e)
                    return (function (e, t) {
                        ("string" == typeof t && "" !== t) || (t = "utf8");
                        if (!s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                        const r = 0 | f(e, t);
                        let n = i(r);
                        const o = n.write(e, t);
                        o !== r && (n = n.slice(0, o));
                        return n;
                    })(e, t);
                if (ArrayBuffer.isView(e))
                    return (function (e) {
                        if (H(e, Uint8Array)) {
                            const t = new Uint8Array(e);
                            return d(t.buffer, t.byteOffset, t.byteLength);
                        }
                        return u(e);
                    })(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (H(e, ArrayBuffer) || (e && H(e.buffer, ArrayBuffer))) return d(e, t, r);
                if ("undefined" != typeof SharedArrayBuffer && (H(e, SharedArrayBuffer) || (e && H(e.buffer, SharedArrayBuffer)))) return d(e, t, r);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return s.from(n, t, r);
                const o = (function (e) {
                    if (s.isBuffer(e)) {
                        const t = 0 | l(e.length),
                            r = i(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r;
                    }
                    if (void 0 !== e.length) return "number" != typeof e.length || W(e.length) ? i(0) : u(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data);
                })(e);
                if (o) return o;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            }
            function a(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            }
            function c(e) {
                return a(e), i(e < 0 ? 0 : 0 | l(e));
            }
            function u(e) {
                const t = e.length < 0 ? 0 : 0 | l(e.length),
                    r = i(t);
                for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r;
            }
            function d(e, t, r) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return (n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r)), Object.setPrototypeOf(n, s.prototype), n;
            }
            function l(e) {
                if (e >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
                return 0 | e;
            }
            function f(e, t) {
                if (s.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || H(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                const r = e.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let i = !1;
                for (;;)
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return $(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return q(e).length;
                        default:
                            if (i) return n ? -1 : $(e).length;
                            (t = ("" + t).toLowerCase()), (i = !0);
                    }
            }
            function p(e, t, r) {
                let n = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
                if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                    switch (e) {
                        case "hex":
                            return I(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return E(this, t, r);
                        case "ascii":
                            return k(this, t, r);
                        case "latin1":
                        case "binary":
                            return T(this, t, r);
                        case "base64":
                            return C(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return R(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (n = !0);
                    }
            }
            function h(e, t, r) {
                const n = e[t];
                (e[t] = e[r]), (e[r] = n);
            }
            function m(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if (("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), W((r = +r)) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length)) {
                    if (i) return -1;
                    r = e.length - 1;
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0;
                }
                if (("string" == typeof t && (t = s.from(t, n)), s.isBuffer(t))) return 0 === t.length ? -1 : g(e, t, r, n, i);
                if ("number" == typeof t) return (t &= 255), "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r)) : g(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer");
            }
            function g(e, t, r, n, i) {
                let s,
                    o = 1,
                    a = e.length,
                    c = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    (o = 2), (a /= 2), (c /= 2), (r /= 2);
                }
                function u(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o);
                }
                if (i) {
                    let n = -1;
                    for (s = r; s < a; s++)
                        if (u(e, s) === u(t, -1 === n ? 0 : s - n)) {
                            if ((-1 === n && (n = s), s - n + 1 === c)) return n * o;
                        } else -1 !== n && (s -= s - n), (n = -1);
                } else
                    for (r + c > a && (r = a - c), s = r; s >= 0; s--) {
                        let r = !0;
                        for (let n = 0; n < c; n++)
                            if (u(e, s + n) !== u(t, n)) {
                                r = !1;
                                break;
                            }
                        if (r) return s;
                    }
                return -1;
            }
            function v(e, t, r, n) {
                r = Number(r) || 0;
                const i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : (n = i);
                const s = t.length;
                let o;
                for (n > s / 2 && (n = s / 2), o = 0; o < n; ++o) {
                    const n = parseInt(t.substr(2 * o, 2), 16);
                    if (W(n)) return o;
                    e[r + o] = n;
                }
                return o;
            }
            function y(e, t, r, n) {
                return G($(t, e.length - r), e, r, n);
            }
            function w(e, t, r, n) {
                return G(
                    (function (e) {
                        const t = [];
                        for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t;
                    })(t),
                    e,
                    r,
                    n
                );
            }
            function b(e, t, r, n) {
                return G(q(t), e, r, n);
            }
            function S(e, t, r, n) {
                return G(
                    (function (e, t) {
                        let r, n, i;
                        const s = [];
                        for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) (r = e.charCodeAt(o)), (n = r >> 8), (i = r % 256), s.push(i), s.push(n);
                        return s;
                    })(t, e.length - r),
                    e,
                    r,
                    n
                );
            }
            function C(e, t, r) {
                return 0 === t && r === e.length ? At.fromByteArray(e) : At.fromByteArray(e.slice(t, r));
            }
            function E(e, t, r) {
                r = Math.min(e.length, r);
                const n = [];
                let i = t;
                for (; i < r; ) {
                    const t = e[i];
                    let s = null,
                        o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (i + o <= r) {
                        let r, n, a, c;
                        switch (o) {
                            case 1:
                                t < 128 && (s = t);
                                break;
                            case 2:
                                (r = e[i + 1]), 128 == (192 & r) && ((c = ((31 & t) << 6) | (63 & r)), c > 127 && (s = c));
                                break;
                            case 3:
                                (r = e[i + 1]), (n = e[i + 2]), 128 == (192 & r) && 128 == (192 & n) && ((c = ((15 & t) << 12) | ((63 & r) << 6) | (63 & n)), c > 2047 && (c < 55296 || c > 57343) && (s = c));
                                break;
                            case 4:
                                (r = e[i + 1]),
                                    (n = e[i + 2]),
                                    (a = e[i + 3]),
                                    128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && ((c = ((15 & t) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & a)), c > 65535 && c < 1114112 && (s = c));
                        }
                    }
                    null === s ? ((s = 65533), (o = 1)) : s > 65535 && ((s -= 65536), n.push(((s >>> 10) & 1023) | 55296), (s = 56320 | (1023 & s))), n.push(s), (i += o);
                }
                return (function (e) {
                    const t = e.length;
                    if (t <= x) return String.fromCharCode.apply(String, e);
                    let r = "",
                        n = 0;
                    for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += x)));
                    return r;
                })(n);
            }
            (t.kMaxLength = n),
                (s.TYPED_ARRAY_SUPPORT = (function () {
                    try {
                        const e = new Uint8Array(1),
                            t = {
                                foo: function () {
                                    return 42;
                                },
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
                    } catch (e) {
                        return !1;
                    }
                })()),
                s.TYPED_ARRAY_SUPPORT ||
                    "undefined" == typeof console ||
                    "function" != typeof console.error ||
                    console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                Object.defineProperty(s.prototype, "parent", {
                    enumerable: !0,
                    get: function () {
                        if (s.isBuffer(this)) return this.buffer;
                    },
                }),
                Object.defineProperty(s.prototype, "offset", {
                    enumerable: !0,
                    get: function () {
                        if (s.isBuffer(this)) return this.byteOffset;
                    },
                }),
                (s.poolSize = 8192),
                (s.from = function (e, t, r) {
                    return o(e, t, r);
                }),
                Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(s, Uint8Array),
                (s.alloc = function (e, t, r) {
                    return (function (e, t, r) {
                        return a(e), e <= 0 ? i(e) : void 0 !== t ? ("string" == typeof r ? i(e).fill(t, r) : i(e).fill(t)) : i(e);
                    })(e, t, r);
                }),
                (s.allocUnsafe = function (e) {
                    return c(e);
                }),
                (s.allocUnsafeSlow = function (e) {
                    return c(e);
                }),
                (s.isBuffer = function (e) {
                    return null != e && !0 === e._isBuffer && e !== s.prototype;
                }),
                (s.compare = function (e, t) {
                    if ((H(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), H(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)))
                        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    let r = e.length,
                        n = t.length;
                    for (let i = 0, s = Math.min(r, n); i < s; ++i)
                        if (e[i] !== t[i]) {
                            (r = e[i]), (n = t[i]);
                            break;
                        }
                    return r < n ? -1 : n < r ? 1 : 0;
                }),
                (s.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1;
                    }
                }),
                (s.concat = function (e, t) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return s.alloc(0);
                    let r;
                    if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                    const n = s.allocUnsafe(t);
                    let i = 0;
                    for (r = 0; r < e.length; ++r) {
                        let t = e[r];
                        if (H(t, Uint8Array)) i + t.length > n.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(n, i)) : Uint8Array.prototype.set.call(n, t, i);
                        else {
                            if (!s.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                            t.copy(n, i);
                        }
                        i += t.length;
                    }
                    return n;
                }),
                (s.byteLength = f),
                (s.prototype._isBuffer = !0),
                (s.prototype.swap16 = function () {
                    const e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (let t = 0; t < e; t += 2) h(this, t, t + 1);
                    return this;
                }),
                (s.prototype.swap32 = function () {
                    const e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (let t = 0; t < e; t += 4) h(this, t, t + 3), h(this, t + 1, t + 2);
                    return this;
                }),
                (s.prototype.swap64 = function () {
                    const e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (let t = 0; t < e; t += 8) h(this, t, t + 7), h(this, t + 1, t + 6), h(this, t + 2, t + 5), h(this, t + 3, t + 4);
                    return this;
                }),
                (s.prototype.toString = function () {
                    const e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : p.apply(this, arguments);
                }),
                (s.prototype.toLocaleString = s.prototype.toString),
                (s.prototype.equals = function (e) {
                    if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === s.compare(this, e);
                }),
                (s.prototype.inspect = function () {
                    let e = "";
                    const r = t.INSPECT_MAX_BYTES;
                    return (
                        (e = this.toString("hex", 0, r)
                            .replace(/(.{2})/g, "$1 ")
                            .trim()),
                        this.length > r && (e += " ... "),
                        "<Buffer " + e + ">"
                    );
                }),
                r && (s.prototype[r] = s.prototype.inspect),
                (s.prototype.compare = function (e, t, r, n, i) {
                    if ((H(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e))) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if ((void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length))
                        throw new RangeError("out of range index");
                    if (n >= i && t >= r) return 0;
                    if (n >= i) return -1;
                    if (t >= r) return 1;
                    if (this === e) return 0;
                    let o = (i >>>= 0) - (n >>>= 0),
                        a = (r >>>= 0) - (t >>>= 0);
                    const c = Math.min(o, a),
                        u = this.slice(n, i),
                        d = e.slice(t, r);
                    for (let e = 0; e < c; ++e)
                        if (u[e] !== d[e]) {
                            (o = u[e]), (a = d[e]);
                            break;
                        }
                    return o < a ? -1 : a < o ? 1 : 0;
                }),
                (s.prototype.includes = function (e, t, r) {
                    return -1 !== this.indexOf(e, t, r);
                }),
                (s.prototype.indexOf = function (e, t, r) {
                    return m(this, e, t, r, !0);
                }),
                (s.prototype.lastIndexOf = function (e, t, r) {
                    return m(this, e, t, r, !1);
                }),
                (s.prototype.write = function (e, t, r, n) {
                    if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                    else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0);
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        (t >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                    }
                    const i = this.length - t;
                    if (((void 0 === r || r > i) && (r = i), (e.length > 0 && (r < 0 || t < 0)) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    let s = !1;
                    for (;;)
                        switch (n) {
                            case "hex":
                                return v(this, e, t, r);
                            case "utf8":
                            case "utf-8":
                                return y(this, e, t, r);
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return w(this, e, t, r);
                            case "base64":
                                return b(this, e, t, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return S(this, e, t, r);
                            default:
                                if (s) throw new TypeError("Unknown encoding: " + n);
                                (n = ("" + n).toLowerCase()), (s = !0);
                        }
                }),
                (s.prototype.toJSON = function () {
                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                });
            const x = 4096;
            function k(e, t, r) {
                let n = "";
                r = Math.min(e.length, r);
                for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n;
            }
            function T(e, t, r) {
                let n = "";
                r = Math.min(e.length, r);
                for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n;
            }
            function I(e, t, r) {
                const n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = t; n < r; ++n) i += X[e[n]];
                return i;
            }
            function R(e, t, r) {
                const n = e.slice(t, r);
                let i = "";
                for (let e = 0; e < n.length - 1; e += 2) i += String.fromCharCode(n[e] + 256 * n[e + 1]);
                return i;
            }
            function A(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
            }
            function P(e, t, r, n, i, o) {
                if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range");
            }
            function L(e, t, r, n, i) {
                _(t, n, i, e, r, 7);
                let s = Number(t & BigInt(4294967295));
                (e[r++] = s), (s >>= 8), (e[r++] = s), (s >>= 8), (e[r++] = s), (s >>= 8), (e[r++] = s);
                let o = Number((t >> BigInt(32)) & BigInt(4294967295));
                return (e[r++] = o), (o >>= 8), (e[r++] = o), (o >>= 8), (e[r++] = o), (o >>= 8), (e[r++] = o), r;
            }
            function O(e, t, r, n, i) {
                _(t, n, i, e, r, 7);
                let s = Number(t & BigInt(4294967295));
                (e[r + 7] = s), (s >>= 8), (e[r + 6] = s), (s >>= 8), (e[r + 5] = s), (s >>= 8), (e[r + 4] = s);
                let o = Number((t >> BigInt(32)) & BigInt(4294967295));
                return (e[r + 3] = o), (o >>= 8), (e[r + 2] = o), (o >>= 8), (e[r + 1] = o), (o >>= 8), (e[r] = o), r + 8;
            }
            function B(e, t, r, n, i, s) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range");
            }
            function M(e, t, r, n, i) {
                return (t = +t), (r >>>= 0), i || B(e, 0, r, 4), Lt(e, t, r, n, 23, 4), r + 4;
            }
            function N(e, t, r, n, i) {
                return (t = +t), (r >>>= 0), i || B(e, 0, r, 8), Lt(e, t, r, n, 52, 8), r + 8;
            }
            (s.prototype.slice = function (e, t) {
                const r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                const n = this.subarray(e, t);
                return Object.setPrototypeOf(n, s.prototype), n;
            }),
                (s.prototype.readUintLE = s.prototype.readUIntLE = function (e, t, r) {
                    (e >>>= 0), (t >>>= 0), r || A(e, t, this.length);
                    let n = this[e],
                        i = 1,
                        s = 0;
                    for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
                    return n;
                }),
                (s.prototype.readUintBE = s.prototype.readUIntBE = function (e, t, r) {
                    (e >>>= 0), (t >>>= 0), r || A(e, t, this.length);
                    let n = this[e + --t],
                        i = 1;
                    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
                    return n;
                }),
                (s.prototype.readUint8 = s.prototype.readUInt8 = function (e, t) {
                    return (e >>>= 0), t || A(e, 1, this.length), this[e];
                }),
                (s.prototype.readUint16LE = s.prototype.readUInt16LE = function (e, t) {
                    return (e >>>= 0), t || A(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (s.prototype.readUint16BE = s.prototype.readUInt16BE = function (e, t) {
                    return (e >>>= 0), t || A(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (s.prototype.readUint32LE = s.prototype.readUInt32LE = function (e, t) {
                    return (e >>>= 0), t || A(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
                }),
                (s.prototype.readUint32BE = s.prototype.readUInt32BE = function (e, t) {
                    return (e >>>= 0), t || A(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
                }),
                (s.prototype.readBigUInt64LE = Y(function (e) {
                    F((e >>>= 0), "offset");
                    const t = this[e],
                        r = this[e + 7];
                    (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
                    const n = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                        i = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
                    return BigInt(n) + (BigInt(i) << BigInt(32));
                })),
                (s.prototype.readBigUInt64BE = Y(function (e) {
                    F((e >>>= 0), "offset");
                    const t = this[e],
                        r = this[e + 7];
                    (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
                    const n = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
                    return (BigInt(n) << BigInt(32)) + BigInt(i);
                })),
                (s.prototype.readIntLE = function (e, t, r) {
                    (e >>>= 0), (t >>>= 0), r || A(e, t, this.length);
                    let n = this[e],
                        i = 1,
                        s = 0;
                    for (; ++s < t && (i *= 256); ) n += this[e + s] * i;
                    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
                }),
                (s.prototype.readIntBE = function (e, t, r) {
                    (e >>>= 0), (t >>>= 0), r || A(e, t, this.length);
                    let n = t,
                        i = 1,
                        s = this[e + --n];
                    for (; n > 0 && (i *= 256); ) s += this[e + --n] * i;
                    return (i *= 128), s >= i && (s -= Math.pow(2, 8 * t)), s;
                }),
                (s.prototype.readInt8 = function (e, t) {
                    return (e >>>= 0), t || A(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }),
                (s.prototype.readInt16LE = function (e, t) {
                    (e >>>= 0), t || A(e, 2, this.length);
                    const r = this[e] | (this[e + 1] << 8);
                    return 32768 & r ? 4294901760 | r : r;
                }),
                (s.prototype.readInt16BE = function (e, t) {
                    (e >>>= 0), t || A(e, 2, this.length);
                    const r = this[e + 1] | (this[e] << 8);
                    return 32768 & r ? 4294901760 | r : r;
                }),
                (s.prototype.readInt32LE = function (e, t) {
                    return (e >>>= 0), t || A(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
                }),
                (s.prototype.readInt32BE = function (e, t) {
                    return (e >>>= 0), t || A(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
                }),
                (s.prototype.readBigInt64LE = Y(function (e) {
                    F((e >>>= 0), "offset");
                    const t = this[e],
                        r = this[e + 7];
                    (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
                    const n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
                    return (BigInt(n) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24);
                })),
                (s.prototype.readBigInt64BE = Y(function (e) {
                    F((e >>>= 0), "offset");
                    const t = this[e],
                        r = this[e + 7];
                    (void 0 !== t && void 0 !== r) || V(e, this.length - 8);
                    const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                    return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r);
                })),
                (s.prototype.readFloatLE = function (e, t) {
                    return (e >>>= 0), t || A(e, 4, this.length), Pt(this, e, !0, 23, 4);
                }),
                (s.prototype.readFloatBE = function (e, t) {
                    return (e >>>= 0), t || A(e, 4, this.length), Pt(this, e, !1, 23, 4);
                }),
                (s.prototype.readDoubleLE = function (e, t) {
                    return (e >>>= 0), t || A(e, 8, this.length), Pt(this, e, !0, 52, 8);
                }),
                (s.prototype.readDoubleBE = function (e, t) {
                    return (e >>>= 0), t || A(e, 8, this.length), Pt(this, e, !1, 52, 8);
                }),
                (s.prototype.writeUintLE = s.prototype.writeUIntLE = function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                        P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    }
                    let i = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++s < r && (i *= 256); ) this[t + s] = (e / i) & 255;
                    return t + r;
                }),
                (s.prototype.writeUintBE = s.prototype.writeUIntBE = function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), (r >>>= 0), !n)) {
                        P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    }
                    let i = r - 1,
                        s = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); ) this[t + i] = (e / s) & 255;
                    return t + r;
                }),
                (s.prototype.writeUint8 = s.prototype.writeUInt8 = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
                }),
                (s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
                }),
                (s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
                }),
                (s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4;
                }),
                (s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
                }),
                (s.prototype.writeBigUInt64LE = Y(function (e, t = 0) {
                    return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (s.prototype.writeBigUInt64BE = Y(function (e, t = 0) {
                    return O(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                })),
                (s.prototype.writeIntLE = function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), !n)) {
                        const n = Math.pow(2, 8 * r - 1);
                        P(this, e, t, r, n - 1, -n);
                    }
                    let i = 0,
                        s = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++i < r && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1), (this[t + i] = (((e / s) >> 0) - o) & 255);
                    return t + r;
                }),
                (s.prototype.writeIntBE = function (e, t, r, n) {
                    if (((e = +e), (t >>>= 0), !n)) {
                        const n = Math.pow(2, 8 * r - 1);
                        P(this, e, t, r, n - 1, -n);
                    }
                    let i = r - 1,
                        s = 1,
                        o = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1), (this[t + i] = (((e / s) >> 0) - o) & 255);
                    return t + r;
                }),
                (s.prototype.writeInt8 = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
                }),
                (s.prototype.writeInt16LE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
                }),
                (s.prototype.writeInt16BE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
                }),
                (s.prototype.writeInt32LE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 4, 2147483647, -2147483648), (this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
                }),
                (s.prototype.writeInt32BE = function (e, t, r) {
                    return (e = +e), (t >>>= 0), r || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
                }),
                (s.prototype.writeBigInt64LE = Y(function (e, t = 0) {
                    return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                })),
                (s.prototype.writeBigInt64BE = Y(function (e, t = 0) {
                    return O(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                })),
                (s.prototype.writeFloatLE = function (e, t, r) {
                    return M(this, e, t, !0, r);
                }),
                (s.prototype.writeFloatBE = function (e, t, r) {
                    return M(this, e, t, !1, r);
                }),
                (s.prototype.writeDoubleLE = function (e, t, r) {
                    return N(this, e, t, !0, r);
                }),
                (s.prototype.writeDoubleBE = function (e, t, r) {
                    return N(this, e, t, !1, r);
                }),
                (s.prototype.copy = function (e, t, r, n) {
                    if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if ((r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r)) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    const i = n - r;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
                }),
                (s.prototype.fill = function (e, t, r, n) {
                    if ("string" == typeof e) {
                        if (("string" == typeof t ? ((n = t), (t = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), void 0 !== n && "string" != typeof n)) throw new TypeError("encoding must be a string");
                        if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        if (1 === e.length) {
                            const t = e.charCodeAt(0);
                            (("utf8" === n && t < 128) || "latin1" === n) && (e = t);
                        }
                    } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                    if (r <= t) return this;
                    let i;
                    if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), e || (e = 0), "number" == typeof e)) for (i = t; i < r; ++i) this[i] = e;
                    else {
                        const o = s.isBuffer(e) ? e : s.from(e, n),
                            a = o.length;
                        if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (i = 0; i < r - t; ++i) this[i + t] = o[i % a];
                    }
                    return this;
                });
            const D = {};
            function j(e, t, r) {
                D[e] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: !0, configurable: !0 }), (this.name = `${this.name} [${e}]`), this.stack, delete this.name;
                    }
                    get code() {
                        return e;
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: e, writable: !0 });
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`;
                    }
                };
            }
            function U(e) {
                let t = "",
                    r = e.length;
                const n = "-" === e[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
                return `${e.slice(0, r)}${t}`;
            }
            function _(e, t, r, n, i, s) {
                if (e > r || e < t) {
                    const n = "bigint" == typeof t ? "n" : "";
                    let i;
                    throw (
                        ((i = s > 3 ? (0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (s + 1)}${n}` : `>= -(2${n} ** ${8 * (s + 1) - 1}${n}) and < 2 ** ${8 * (s + 1) - 1}${n}`) : `>= ${t}${n} and <= ${r}${n}`),
                        new D.ERR_OUT_OF_RANGE("value", i, e))
                    );
                }
                !(function (e, t, r) {
                    F(t, "offset"), (void 0 !== e[t] && void 0 !== e[t + r]) || V(t, e.length - (r + 1));
                })(n, i, s);
            }
            function F(e, t) {
                if ("number" != typeof e) throw new D.ERR_INVALID_ARG_TYPE(t, "number", e);
            }
            function V(e, t, r) {
                if (Math.floor(e) !== e) throw (F(e, r), new D.ERR_OUT_OF_RANGE(r || "offset", "an integer", e));
                if (t < 0) throw new D.ERR_BUFFER_OUT_OF_BOUNDS();
                throw new D.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
            }
            j(
                "ERR_BUFFER_OUT_OF_BOUNDS",
                function (e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
                },
                RangeError
            ),
                j(
                    "ERR_INVALID_ARG_TYPE",
                    function (e, t) {
                        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
                    },
                    TypeError
                ),
                j(
                    "ERR_OUT_OF_RANGE",
                    function (e, t, r) {
                        let n = `The value of "${e}" is out of range.`,
                            i = r;
                        return (
                            Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? (i = U(String(r))) : "bigint" == typeof r && ((i = String(r)), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = U(i)), (i += "n")),
                            (n += ` It must be ${t}. Received ${i}`),
                            n
                        );
                    },
                    RangeError
                );
            const z = /[^+/0-9A-Za-z-_]/g;
            function $(e, t) {
                let r;
                t = t || 1 / 0;
                const n = e.length;
                let i = null;
                const s = [];
                for (let o = 0; o < n; ++o) {
                    if (((r = e.charCodeAt(o)), r > 55295 && r < 57344)) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue;
                            }
                            if (o + 1 === n) {
                                (t -= 3) > -1 && s.push(239, 191, 189);
                                continue;
                            }
                            i = r;
                            continue;
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && s.push(239, 191, 189), (i = r);
                            continue;
                        }
                        r = 65536 + (((i - 55296) << 10) | (r - 56320));
                    } else i && (t -= 3) > -1 && s.push(239, 191, 189);
                    if (((i = null), r < 128)) {
                        if ((t -= 1) < 0) break;
                        s.push(r);
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push((r >> 6) | 192, (63 & r) | 128);
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                    }
                }
                return s;
            }
            function q(e) {
                return At.toByteArray(
                    (function (e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(z, "")).length < 2) return "";
                        for (; e.length % 4 != 0; ) e += "=";
                        return e;
                    })(e)
                );
            }
            function G(e, t, r, n) {
                let i;
                for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i;
            }
            function H(e, t) {
                return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
            }
            function W(e) {
                return e != e;
            }
            const X = (function () {
                const e = "0123456789abcdef",
                    t = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
                }
                return t;
            })();
            function Y(e) {
                return "undefined" == typeof BigInt ? J : e;
            }
            function J() {
                throw new Error("BigInt not supported");
            }
        }),
        Bt = S(function (e, t) {
            var r = Ot.Buffer;
            function n(e, t) {
                for (var r in e) t[r] = e[r];
            }
            function i(e, t, n) {
                return r(e, t, n);
            }
            r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? (e.exports = Ot) : (n(Ot, t), (t.Buffer = i)),
                n(r, i),
                (i.from = function (e, t, n) {
                    if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                    return r(e, t, n);
                }),
                (i.alloc = function (e, t, n) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    var i = r(e);
                    return void 0 !== t ? ("string" == typeof n ? i.fill(t, n) : i.fill(t)) : i.fill(0), i;
                }),
                (i.allocUnsafe = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return r(e);
                }),
                (i.allocUnsafeSlow = function (e) {
                    if ("number" != typeof e) throw new TypeError("Argument must be a number");
                    return Ot.SlowBuffer(e);
                });
        }),
        Mt = S(function (e) {
            var t = 65536,
                r = 4294967295;
            var n = Bt.Buffer,
                i = b.crypto || b.msCrypto;
            i && i.getRandomValues
                ? (e.exports = function (e, s) {
                      if (e > r) throw new RangeError("requested too many random bytes");
                      var o = n.allocUnsafe(e);
                      if (e > 0)
                          if (e > t) for (var a = 0; a < e; a += t) i.getRandomValues(o.slice(a, a + t));
                          else i.getRandomValues(o);
                      if ("function" == typeof s)
                          return process.nextTick(function () {
                              s(null, o);
                          });
                      return o;
                  })
                : (e.exports = function () {
                      throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
                  });
        });
    class Nt {
        constructor(e, t) {
            (this.ufrag = e), (this.pwd = t), (this.lite = !1), (this.endOfCandidates = !1);
        }
        clone() {
            const e = new Nt(this.ufrag, this.pwd);
            return e.setLite(this.lite), e.setEndOfCandidates(this.endOfCandidates), e;
        }
        plain() {
            const e = { ufrag: this.ufrag, pwd: this.pwd };
            return this.lite && (e.lite = this.lite), this.endOfCandidates && (e.endOfCandidates = this.endOfCandidates), e;
        }
        getUfrag() {
            return this.ufrag;
        }
        getPwd() {
            return this.pwd;
        }
        isLite() {
            return this.lite;
        }
        setLite(e) {
            this.lite = e;
        }
        isEndOfCandidates() {
            return this.endOfCandidates;
        }
        setEndOfCandidates(e) {
            this.endOfCandidates = e;
        }
    }
    (Nt.generate = function (e) {
        const t = new Nt(),
            r = Mt(8),
            n = Mt(24);
        return (t.ufrag = r.toString("hex")), (t.pwd = n.toString("hex")), (t.lite = e), t;
    }),
        (Nt.expand = function (e) {
            const t = new Nt(e.ufrag, e.pwd);
            return t.setLite(e.lite), t.setEndOfCandidates(e.endOfCandidates), t;
        });
    var Dt = Nt;
    const jt = lt("SEND", "RECV");
    (jt.byValue = function (e) {
        return jt[e.toUpperCase()];
    }),
        (jt.toString = function (e) {
            switch (e) {
                case jt.SEND:
                    return "send";
                case jt.RECV:
                    return "recv";
            }
        }),
        (jt.reverse = function (e) {
            switch (e) {
                case jt.SEND:
                    return jt.RECV;
                case jt.RECV:
                    return jt.SEND;
            }
        });
    var Ut = jt;
    class _t {
        constructor(e, t) {
            (this.id = e), (this.direction = t), (this.formats = []), (this.params = new Map());
        }
        clone() {
            var e = new _t(this.id, this.direction);
            return e.setFormats(this.formats), e.setParams(this.params), e;
        }
        plain() {
            var e = { id: this.id, direction: Ut.toString(this.direction) };
            for (var [t, r] of (this.formats && (e.formats = this.formats), this.params.entries())) e.params || (e.params = {}), (e.params[t] = r);
            return e;
        }
        getId() {
            return this.id;
        }
        getDirection() {
            return this.direction;
        }
        setDirection(e) {
            this.direction = e;
        }
        getFormats() {
            return this.formats;
        }
        setFormats(e) {
            this.formats = [];
            for (let t = 0; t < e.length; ++t) this.formats.push(parseInt(e[t]));
        }
        getParams() {
            return this.params;
        }
        setParams(e) {
            this.params = new Map(e);
        }
        addParam(e, t) {
            this.params.set(e, t);
        }
        getDirection() {
            return this.direction;
        }
        setDirection(e) {
            this.direction = e;
        }
    }
    _t.expand = function (e) {
        const t = new _t(e.id, Ut.byValue(e.direction));
        for (let r in e.params) t.addParam(r, e.params[r]);
        return e.formats && t.setFormats(e.formats), t;
    };
    var Ft = _t;
    class Vt {
        constructor(e, t) {
            (this.paused = t), (this.id = e);
        }
        clone() {
            return new Vt(this.id, this.paused);
        }
        plain() {
            return { id: this.id, paused: this.paused };
        }
        isPaused() {
            return this.paused;
        }
        getId() {
            return this.id;
        }
    }
    Vt.expand = function (e) {
        return new Vt(e.id, e.paused);
    };
    var zt = Vt;
    class $t {
        constructor() {
            (this.send = []), (this.recv = []);
        }
        clone() {
            const e = new $t();
            for (let t = 0; t < this.send.length; ++t) {
                let r = [];
                for (let e = 0; t < this.send[e].length; ++t) r.push(this.send[t][e].clone());
                e.addSimulcastAlternativeStreams(Ut.SEND, r);
            }
            for (let t = 0; t < this.recv.length; ++t) {
                let r = [];
                for (let e = 0; t < this.recv[e].length; ++t) r.push(this.recv[t][e].clone());
                e.addSimulcastAlternativeStreams(Ut.RECV, r);
            }
            return e;
        }
        plain() {
            const e = { send: [], recv: [] };
            for (let t = 0; t < this.send.length; ++t) {
                let r = [];
                for (let e = 0; e < this.send[t].length; ++e) r.push(this.send[t][e].plain());
                e.send.push(r);
            }
            for (let t = 0; t < this.recv.length; ++t) {
                let r = [];
                for (let e = 0; e < this.recv[t].length; ++e) r.push(this.recv[t][e].plain());
                e.recv.push(r);
            }
            return e;
        }
        addSimulcastAlternativeStreams(e, t) {
            return e === Ut.SEND ? this.send.push(t) : this.recv.push(t);
        }
        addSimulcastStream(e, t) {
            return e === Ut.SEND ? this.send.push([t]) : this.recv.push([t]);
        }
        getSimulcastStreams(e) {
            return e === Ut.SEND ? this.send : this.recv;
        }
    }
    $t.expand = function (e) {
        const t = new $t();
        for (let r = 0; r < e.send.length; ++r) {
            let n = [];
            for (let t = 0; t < e.send[r].length; ++t) n.push(zt.expand(e.send[r][t]));
            t.addSimulcastAlternativeStreams(Ut.SEND, n);
        }
        for (let r = 0; r < e.recv.length; ++r) {
            let n = [];
            for (let t = 0; t < e.recv[r].length; ++t) n.push(zt.expand(e.recv[r][t]));
            t.addSimulcastAlternativeStreams(Ut.RECV, n);
        }
        return t;
    };
    var qt = $t;
    const Gt = lt("SENDRECV", "SENDONLY", "RECVONLY", "INACTIVE");
    (Gt.byValue = function (e) {
        return Gt[e.toUpperCase()];
    }),
        (Gt.toString = function (e) {
            switch (e) {
                case Gt.SENDRECV:
                    return "sendrecv";
                case Gt.SENDONLY:
                    return "sendonly";
                case Gt.RECVONLY:
                    return "recvonly";
                case Gt.INACTIVE:
                    return "inactive";
            }
        }),
        (Gt.reverse = function (e) {
            switch (e) {
                case Gt.SENDRECV:
                    return Gt.SENDRECV;
                case Gt.SENDONLY:
                    return Gt.RECVONLY;
                case Gt.RECVONLY:
                    return Gt.SENDONLY;
                case Gt.INACTIVE:
                    return Gt.INACTIVE;
            }
        });
    var Ht = Gt;
    class Wt {
        constructor(e, t) {
            (this.id = e), (this.type = t), (this.direction = Ht.SENDRECV), (this.extensions = new Map()), (this.codecs = new Map()), (this.rids = new Map()), (this.simulcast = null), (this.bitrate = 0), (this.control = null);
        }
        clone() {
            const e = new Wt(this.id, this.type);
            e.setDirection(this.direction), e.setBitrate(this.bitrate);
            for (const t of this.codecs.values()) e.addCodec(t.clone());
            for (const [t, r] of this.extensions.entries()) e.addExtension(t, r);
            for (const t of this.rids.values()) e.addRID(t.clone());
            return this.simulcast && e.setSimulcast(this.simulcast.clone()), this.control && e.setControl(this.control), e;
        }
        plain() {
            const e = { id: this.id, type: this.type, direction: Ht.toString(this.direction), codecs: [] };
            this.bitrate && (e.bitrate = this.bitrate);
            for (const t of this.codecs.values()) e.codecs.push(t.plain());
            for (const [t, r] of this.extensions.entries()) e.extensions || (e.extensions = {}), (e.extensions[t] = r);
            for (const t of this.rids.values()) e.rids || (e.rids = []), e.rids.push(t.plain());
            return this.simulcast && (e.simulcast = this.simulcast.plain()), this.control && (e.control = this.control), e;
        }
        getType() {
            return this.type;
        }
        getId() {
            return this.id;
        }
        setId(e) {
            this.id = e;
        }
        addExtension(e, t) {
            this.extensions.set(e, t);
        }
        addRID(e) {
            this.rids.set(e.getId(), e);
        }
        addCodec(e) {
            this.codecs.set(e.getType(), e);
        }
        setCodecs(e) {
            this.codecs = e;
        }
        getCodecForType(e) {
            return this.codecs.get(e);
        }
        getCodec(e) {
            for (const t of this.codecs.values()) if (t.getCodec().toLowerCase() === e.toLowerCase()) return t;
            return null;
        }
        hasCodec(e) {
            return null !== this.getCodec(e);
        }
        getCodecs() {
            return this.codecs;
        }
        hasRTX() {
            for (const e of this.codecs.values()) if (e.hasRTX()) return !0;
            return !1;
        }
        getExtensions() {
            return this.extensions;
        }
        getRIDs() {
            return this.rids;
        }
        getRID(e) {
            return this.rids.get(e);
        }
        getBitrate() {
            return this.bitrate;
        }
        setBitrate(e) {
            this.bitrate = e;
        }
        getDirection() {
            return this.direction;
        }
        setDirection(e) {
            this.direction = e;
        }
        hasControl() {
            return !!this.control;
        }
        getControl() {
            return this.control;
        }
        setControl(e) {
            this.control = e;
        }
        answer(e) {
            const t = new Wt(this.id, this.type);
            if (e) {
                if ((t.setDirection(Ht.reverse(this.direction)), e.codecs)) {
                    let r;
                    r = Array.isArray(e.codecs) ? dt.MapFromNames(e.codecs, e.rtx, e.rtcpfbs) : e.codecs;
                    for (let e of this.codecs.values())
                        if (r.has(e.getCodec().toLowerCase())) {
                            const n = r.get(e.getCodec().toLowerCase());
                            if ("h264" === n.getCodec() && n.hasParam("packetization-mode") && n.getParam("packetization-mode") != e.getParam("packetization-mode", "0")) continue;
                            if ("h264" === n.getCodec() && n.hasParam("profile-level-id") && e.hasParam("profile-level-id") && n.getParam("profile-level-id") != e.getParam("profile-level-id")) continue;
                            if ("multiopus" === n.getCodec() && n.hasParam("num_streams") && e.hasParam("num_streams") && n.getParam("num_streams") != e.getParam("num_streams")) continue;
                            const i = n.clone();
                            i.setType(e.getType()), i.hasRTX() && i.setRTX(e.getRTX()), e.hasChannels() && i.setChannels(e.getChannels()), i.addParams(e.getParams()), t.addCodec(i);
                        }
                }
                const n = new Set(e.extensions);
                for (let [e, r] of this.extensions) n.has(r) && t.addExtension(e, r);
                if (e.simulcast && this.simulcast) {
                    const e = new qt(),
                        n = this.simulcast.getSimulcastStreams(Ut.SEND);
                    if (n)
                        for (let t = 0; t < n.length; ++t) {
                            var r = [];
                            for (let e = 0; e < n[t].length; ++e) r.push(n[t][e].clone());
                            e.addSimulcastAlternativeStreams(Ut.RECV, r);
                        }
                    const i = this.simulcast.getSimulcastStreams(Ut.RECV);
                    if (i)
                        for (let t = 0; t < i.length; ++t) {
                            r = [];
                            for (let e = 0; e < i[t].length; ++e) r.push(i[t][e].clone());
                            e.addSimulcastAlternativeStreams(Ut.SEND, r);
                        }
                    for (const e of this.rids.values()) {
                        const r = e.clone();
                        r.setDirection(Ut.reverse(e.getDirection())), t.addRID(r);
                    }
                    t.setSimulcast(e);
                }
            } else t.setDirection(Ht.INACTIVE);
            return t;
        }
        getSimulcast() {
            return this.simulcast;
        }
        setSimulcast(e) {
            this.simulcast = e;
        }
    }
    (Wt.create = function (e, t) {
        const r = new Wt(e, e);
        if (t) {
            if ((t.codecs && (Array.isArray(t.codecs) ? r.setCodecs(dt.MapFromNames(t.codecs, t.rtx, t.rtcpfbs)) : r.setCodecs(t.codecs)), t.extensions)) {
                let e = 1;
                for (let n of t.extensions) 15 === e && e++, r.addExtension(e++, n);
            }
        } else r.setDirection(Ht.INACTIVE);
        return r;
    }),
        (Wt.expand = function (e) {
            const t = new Wt(e.id, e.type);
            e.direction && t.setDirection(Ht.byValue(e.direction)), t.setBitrate(e.bitrate);
            for (let r in e.extensions) t.addExtension(r, e.extensions[r]);
            for (let r = 0; e.codecs && r < e.codecs.length; ++r) {
                const n = dt.expand(e.codecs[r]);
                n && t.addCodec(n);
            }
            for (let r = 0; e.rids && r < e.rids.length; ++r) {
                const n = Ft.expand(e.rids[r]);
                t.addRID(n);
            }
            return e.simulcast && t.setSimulcast(qt.expand(e.simulcast)), e.control && t.setControl(e.control), t;
        });
    var Xt = Wt;
    class Yt {
        constructor(e, t) {
            (this.semantics = e), (this.ssrcs = []);
            for (let e = 0; e < t.length; ++e) this.ssrcs.push(parseInt(t[e]));
        }
        clone() {
            return new Yt(this.semantics, this.ssrcs);
        }
        plain() {
            const e = { semantics: this.semantics, ssrcs: [] };
            for (let t = 0; t < this.ssrcs.length; ++t) e.ssrcs.push(this.ssrcs[t]);
            return e;
        }
        getSemantics() {
            return this.semantics;
        }
        getSSRCs() {
            return this.ssrcs;
        }
    }
    Yt.expand = function (e) {
        return new Yt(e.semantics, e.ssrcs);
    };
    var Jt = Yt;
    class Zt {
        constructor(e) {
            this.ssrc = e;
        }
        clone() {
            const e = new Zt(this.ssrc);
            e.setCName(this.cname), e.setStreamId(this.streamId), e.setTrackId(this.trackId);
        }
        plain() {
            const e = { ssrc: this.ssrc };
            return this.cname && (e.cname = this.cname), this.streamId && (e.streamId = this.streamId), this.trackId && (e.trackid = this.trackId), e;
        }
        getCName() {
            return this.cname;
        }
        setCName(e) {
            this.cname = e;
        }
        getStreamId() {
            return this.streamId;
        }
        setStreamId(e) {
            this.streamId = e;
        }
        getTrackId() {
            return this.trackId;
        }
        setTrackId(e) {
            this.trackId = e;
        }
        getSSRC() {
            return this.ssrc;
        }
    }
    Zt.expand = function (e) {
        const t = new Zt(e.ssrc);
        return t.setCName(e.cname), t.setStreamId(e.streamId), t.setTrackId(e.trackId), t;
    };
    var Kt = Zt;
    class Qt {
        constructor(e, t) {
            (this.id = e), (this.paused = t), (this.codecs = new Map()), (this.params = new Map());
        }
        clone() {
            var e = new Qt(this.id, this.paused);
            for (let t of this.codecs.values()) e.addCodec(t.clone());
            return e.setParams(this.params), e;
        }
        plain() {
            var e = { id: this.id, paused: this.paused, codecs: {}, params: {} };
            for (var [t, r] of this.codecs.entries()) e.codecs[t] = r.plain();
            for (var [t, n] of this.params.entries()) e.params[t] = n;
            return e;
        }
        getId() {
            return this.id;
        }
        getCodecs() {
            return this.codecs;
        }
        addCodec(e) {
            this.codecs.set(e.getType(), e);
        }
        getParams() {
            return this.params;
        }
        setParams(e) {
            this.params = new Map(e);
        }
        addParam(e, t) {
            this.params.set(e, t);
        }
        isPaused() {
            return this.paused;
        }
    }
    Qt.expand = function (e) {
        const t = new Qt(e.id, e.paused);
        for (let r in e.codecs) t.addCodec(dt.expand(e.codecs[r]));
        for (let r in e.params) t.addParam(r, e.params[r]);
        return t;
    };
    var er = Qt;
    class tr {
        constructor(e, t) {
            (this.media = e), (this.id = t), (this.ssrcs = []), (this.groups = []), (this.encodings = []);
        }
        clone() {
            const e = new tr(this.media, this.id);
            this.mediaId && e.setMediaId(this.mediaId);
            for (let t = 0; t < this.ssrcs.length; ++t) e.addSSRC(this.ssrcs[t]);
            for (let t = 0; t < this.groups.length; ++t) e.addSourceGroup(this.groups[t].clone());
            for (let t = 0; t < this.encodings.length; ++t) {
                const r = [];
                for (let e = 0; e < this.encodings[t].length; ++e) r.push(this.encodings[t][e].clone());
                e.addAlternativeEncodings(r);
            }
            return e;
        }
        plain() {
            const e = { media: this.media, id: this.id, ssrcs: [] };
            this.mediaId && (e.mediaId = this.mediaId);
            for (let t = 0; t < this.ssrcs.length; ++t) e.ssrcs.push(this.ssrcs[t]);
            for (let t = 0; t < this.groups.length; ++t) e.groups || (e.groups = []), e.groups.push(this.groups[t].plain());
            for (let t = 0; t < this.encodings.length; ++t) {
                const r = [];
                for (let e = 0; e < this.encodings[t].length; ++e) r.push(this.encodings[t][e].plain());
                r.length && (e.encodings || (e.encodings = []), e.encodings.push(r));
            }
            return e;
        }
        getMedia() {
            return this.media;
        }
        setMediaId(e) {
            this.mediaId = e;
        }
        getMediaId() {
            return this.mediaId;
        }
        getId() {
            return this.id;
        }
        addSSRC(e) {
            this.ssrcs.push(e);
        }
        getSSRCs() {
            return this.ssrcs;
        }
        addSourceGroup(e) {
            this.groups.push(e);
        }
        getSourceGroup(e) {
            for (let t in this.groups) {
                let r = this.groups[t];
                if (r.getSemantics().toLowerCase() === e.toLowerCase()) return r;
            }
            return null;
        }
        getSourceGroups() {
            return this.groups;
        }
        hasSourceGroup(e) {
            for (let t in this.groups) {
                if (this.groups[t].getSemantics().toLowerCase() === e.toLowerCase()) return !0;
            }
            return !1;
        }
        getEncodings() {
            return this.encodings;
        }
        addEncoding(e) {
            this.encodings.push([e]);
        }
        addAlternativeEncodings(e) {
            this.encodings.push(e);
        }
        setEncodings(e) {
            this.encodings = e;
        }
    }
    tr.expand = function (e) {
        const t = new tr(e.media, e.id);
        e.mediaId && t.setMediaId(e.mediaId);
        for (let r = 0; e.ssrcs && r < e.ssrcs.length; ++r) t.addSSRC(e.ssrcs[r]);
        for (let r = 0; e.groups && r < e.groups.length; ++r) t.addSourceGroup(Jt.expand(e.groups[r]));
        for (let r = 0; e.encodings && r < e.encodings.length; ++r) {
            const n = [];
            for (let t = 0; t < e.encodings[r].length; ++t) n.push(er.expand(e.encodings[r][t]));
            t.addAlternativeEncodings(n);
        }
        return t;
    };
    var rr = tr;
    class nr {
        constructor(e) {
            (this.id = e), (this.tracks = new Map());
        }
        clone() {
            const e = new nr(this.id);
            for (const t of this.tracks.values()) e.addTrack(t.clone());
            return e;
        }
        plain() {
            const e = { id: this.id, tracks: [] };
            for (const t of this.tracks.values()) e.tracks.push(t.plain());
            return e;
        }
        getId() {
            return this.id;
        }
        addTrack(e) {
            this.tracks.set(e.getId(), e);
        }
        removeTrack(e) {
            return this.tracks.delete(e.getId());
        }
        removeTrackById(e) {
            return this.tracks.delete(e);
        }
        getFirstTrack(e) {
            for (let t of this.tracks.values()) if (t.getMedia().toLowerCase() === e.toLowerCase()) return t;
            return null;
        }
        getTracks() {
            return this.tracks;
        }
        removeAllTracks() {
            this.tracks.clear();
        }
        getTrack(e) {
            return this.tracks.get(e);
        }
    }
    nr.expand = function (e) {
        const t = new nr(e.id, e.paused);
        for (let r = 0; r < e.tracks.length; ++r) {
            const n = rr.expand(e.tracks[r]);
            n && t.addTrack(n);
        }
        return t;
    };
    var ir = nr;
    class sr {
        constructor(e) {
            (this.version = e || 1), (this.streams = new Map()), (this.medias = new Array()), (this.candidates = new Array()), (this.ice = null), (this.dtls = null), (this.crypto = null);
        }
        clone() {
            const e = new sr(this.version);
            for (let t = 0; t < this.medias.length; ++t) e.addMedia(this.medias[t].clone());
            for (const t of this.streams.values()) e.addStream(t.clone());
            for (let t = 0; t < this.candidates.length; ++t) e.addCandidate(this.candidates[t].clone());
            return e.setICE(this.ice.clone()), this.dtls && e.setDTLS(this.dtls.clone()), this.crypto && e.setCrypto(this.crypto.clone()), e;
        }
        plain() {
            const e = { version: this.version, streams: [], medias: [], candidates: [] };
            for (let t = 0; t < this.medias.length; ++t) e.medias.push(this.medias[t].plain());
            for (const t of this.streams.values()) e.streams.push(t.plain());
            for (let t = 0; t < this.candidates.length; ++t) e.candidates.push(this.candidates[t].plain());
            return this.ice && (e.ice = this.ice.plain()), this.dtls && (e.dtls = this.dtls.plain()), this.crypto && (e.crypto = this.crypto.plain()), e;
        }
        unify() {
            const e = new sr(this.version);
            for (let t = 0; t < this.medias.length; ++t) e.addMedia(this.medias[t].clone());
            const t = { audio: e.getMediasByType("audio"), video: e.getMediasByType("video") };
            for (const r of this.streams.values()) {
                const n = r.clone();
                for (const r of n.getTracks().values()) {
                    let n = t[r.getMedia()].pop();
                    if (!n) {
                        (n = this.getMedia(r.getMedia()).clone()), n.setId(r.getId()), e.addMedia(n);
                    }
                    r.setMediaId(n.getId());
                }
                e.addStream(n);
            }
            for (let t = 0; t < this.candidates.length; ++t) e.addCandidate(this.candidates[t].clone());
            return this.ice && e.setICE(this.ice.clone()), this.dtls && e.setDTLS(this.dtls.clone()), this.crypto && e.setCrypto(this.crypto.clone()), e;
        }
        setVersion(e) {
            this.version = e;
        }
        addMedia(e) {
            this.medias.push(e);
        }
        getMedia(e) {
            for (let t in this.medias) {
                let r = this.medias[t];
                if (r.getType().toLowerCase() === e.toLowerCase()) return r;
            }
            return null;
        }
        getMediasByType(e) {
            var t = [];
            for (let r in this.medias) {
                let n = this.medias[r];
                n.getType().toLowerCase() === e.toLowerCase() && t.push(n);
            }
            return t;
        }
        getMediaById(e) {
            for (let t in this.medias) {
                let r = this.medias[t];
                if (r.getId().toLowerCase() === e.toLowerCase()) return r;
            }
            return null;
        }
        replaceMedia(e) {
            for (let t in this.medias) if (this.medias[t].getId() == e.getId()) return (this.medias[t] = e), !0;
            return !1;
        }
        getMedias() {
            return this.medias;
        }
        getVersion() {
            return this.version;
        }
        getDTLS() {
            return this.dtls;
        }
        setDTLS(e) {
            this.dtls = e;
        }
        hasCrypto() {
            return !!this.crypto;
        }
        getCrypto() {
            return this.crypto;
        }
        setCrypto(e) {
            this.crypto = e;
        }
        hasICE() {
            return !!this.ice;
        }
        getICE() {
            return this.ice;
        }
        setICE(e) {
            this.ice = e;
        }
        addCandidate(e) {
            for (let t = 0; t < this.candidates.length; ++t) if (this.candidates[t].equals(e)) return;
            this.candidates.push(e);
        }
        addCandidates(e) {
            for (let t = 0; t < e.length; ++t) this.addCandidate(e[t]);
        }
        getCandidates() {
            return this.candidates;
        }
        getStream(e) {
            return this.streams.get(e);
        }
        getStreams() {
            return this.streams;
        }
        getFirstStream() {
            for (let e of this.streams.values()) return e;
            return null;
        }
        addStream(e) {
            this.streams.set(e.getId(), e);
        }
        removeStream(e) {
            return this.streams.delete(e.getId());
        }
        removeAllStreams() {
            this.streams.clear();
        }
        getTrackByMediaId(e) {
            for (let t of this.streams.values()) for (let [r, n] of t.getTracks()) if (n.getMediaId() == e) return n;
            return null;
        }
        getStreamByMediaId(e) {
            for (let t of this.streams.values()) for (let [r, n] of t.getTracks()) if (n.getMediaId() == e) return t;
            return null;
        }
        answer(e) {
            const t = new sr();
            e.ice && (e.ice instanceof Dt ? t.setICE(e.ice.clone()) : t.setICE(Dt.expand(e.ice))),
                e.dtls && (e.dtls instanceof mt ? t.setDTLS(e.dtls) : t.setDTLS(mt.expand(e.dtls))),
                e.crypto && (e.crypto instanceof vt ? t.setCrypto(e.crypto) : t.setCrypto(vt.expand(e.crypto)));
            for (let r = 0; e.candidates && r < e.candidates.length; ++r) e.candidates[r] instanceof ot ? t.addCandidate(e.candidates[r].clone()) : t.addCandidate(ot.expand(e.candidates[r]));
            for (let r in this.medias) {
                const n = this.medias[r],
                    i = e && e.capabilities && e.capabilities[n.getType()];
                t.addMedia(n.answer(i));
            }
            return t;
        }
        toString() {
            let e = { version: 0, media: [] };
            (e.version = 0),
                (e.origin = { username: "-", sessionId: new Date().getTime(), sessionVersion: this.version, netType: "IN", ipVer: 4, address: "127.0.0.1" }),
                (e.name = "semantic-sdp"),
                (e.connection = { version: 4, ip: "0.0.0.0" }),
                (e.timing = { start: 0, stop: 0 }),
                this.hasICE() && this.getICE().isLite() && (e.icelite = "ice-lite"),
                (e.msidSemantic = { semantic: "WMS", token: "*" }),
                (e.groups = []);
            let t = { type: "BUNDLE", mids: [] };
            for (let r in this.medias) {
                let n = this.medias[r],
                    i = { type: n.getType(), port: 9, protocol: "", fmtp: [], rtp: [], rtcpFb: [], ext: [], bandwidth: [], candidates: [], ssrcGroups: [], ssrcs: [], rids: [] };
                (i.direction = Ht.toString(n.getDirection())),
                    (i.rtcpMux = "rtcp-mux"),
                    (i.rtcpRsize = "rtcp-rsize"),
                    (i.extmapAllowMixed = "extmap-allow-mixed"),
                    (i.mid = n.getId()),
                    t.mids.push(n.getId()),
                    n.hasControl() && (i.control = n.getControl()),
                    n.getBitrate() > 0 && i.bandwidth.push({ type: "AS", limit: n.getBitrate() });
                let s = this.getCandidates();
                for (let e = 0; e < s.length; ++e) {
                    let t = s[e];
                    i.candidates.push({
                        foundation: t.getFoundation(),
                        component: t.getComponentId(),
                        transport: t.getTransport(),
                        priority: t.getPriority(),
                        ip: t.getAddress(),
                        port: t.getPort(),
                        type: t.getType(),
                        raddr: t.getRelAddr(),
                        rport: t.getRelPort(),
                    });
                }
                this.getICE() && ((i.iceUfrag = this.getICE().getUfrag()), (i.icePwd = this.getICE().getPwd())),
                    this.getDTLS()
                        ? ((i.protocol = "UDP/TLS/RTP/SAVPF"), (i.fingerprint = { type: this.getDTLS().getHash(), hash: this.getDTLS().getFingerprint() }), (i.setup = pt.toString(this.getDTLS().getSetup())))
                        : this.getCrypto()
                        ? ((i.protocol = "UDP/SAVPF"), (i.crypto = [{ id: this.getCrypto().getTag(), suite: this.getCrypto().getSuite(), config: this.getCrypto().getKeyParams() }]))
                        : (i.protocol = "UDP/AVP");
                for (let e of n.getCodecs().values()) {
                    "video" === n.getType().toLowerCase()
                        ? i.rtp.push({ payload: e.getType(), codec: e.getCodec().toUpperCase(), rate: 9e4 })
                        : "opus" === e.getCodec().toLowerCase() || "multiopus" === e.getCodec().toLowerCase()
                        ? i.rtp.push({ payload: e.getType(), codec: e.getCodec(), rate: 48e3, encoding: e.getChannels() })
                        : i.rtp.push({ payload: e.getType(), codec: e.getCodec(), rate: 8e3 });
                    for (const t of e.getRTCPFeedbacks()) i.rtcpFb.push({ payload: e.getType(), type: t.getId(), subtype: t.getParams().join(" ") });
                    e.hasRTX() && (i.rtp.push({ payload: e.getRTX(), codec: "rtx", rate: 9e4 }), i.fmtp.push({ payload: e.getRTX(), config: "apt=" + e.getType() }));
                    const t = e.getParams();
                    if (Object.keys(t).length) {
                        const r = { payload: e.getType(), config: "" };
                        for (const e in t) r.config.length && (r.config += ";"), t.hasOwnProperty(e) ? (r.config += e + "=" + t[e]) : (r.config += e);
                        i.fmtp.push(r);
                    }
                }
                const o = [];
                for (let e = 0; e < i.rtp.length; ++e) o.push(i.rtp[e].payload);
                i.payloads = o.join(" ");
                for (let [e, t] of n.getExtensions().entries()) i.ext.push({ value: e, uri: t });
                for (let e of n.getRIDs().values()) {
                    let t = { id: e.getId(), direction: Ut.toString(e.getDirection()), params: "" };
                    e.getFormats().length && (t.params = "pt=" + e.getFormats().join(","));
                    for (let [r, n] of e.getParams().entries()) t.params += (t.params.length ? ";" : "") + r + "=" + n;
                    i.rids.push(t);
                }
                const a = n.getSimulcast();
                if (a) {
                    let e = 1;
                    i.simulcast = {};
                    const t = a.getSimulcastStreams(Ut.SEND),
                        r = a.getSimulcastStreams(Ut.RECV);
                    if (t && t.length) {
                        let r = "";
                        for (let e = 0; e < t.length; ++e) {
                            let n = "";
                            for (let r = 0; r < t[e].length; ++r) n += (n.length ? "," : "") + (t[e][r].isPaused() ? "~" : "") + t[e][r].getId();
                            r += (r.length ? ";" : "") + n;
                        }
                        (i.simulcast["dir" + e] = "send"), (i.simulcast["list" + e] = r), e++;
                    }
                    if (r && r.length) {
                        let t = [];
                        for (let e = 0; e < r.length; ++e) {
                            let n = "";
                            for (let t = 0; t < r[e].length; ++t) n += (n.length ? "," : "") + (r[e][t].isPaused() ? "~" : "") + r[e][t].getId();
                            t += (t.length ? ";" : "") + n;
                        }
                        (i.simulcast["dir" + e] = "recv"), (i.simulcast["list" + e] = t), e++;
                    }
                }
                e.media.push(i);
            }
            for (let t of this.streams.values())
                for (let r of t.getTracks().values())
                    for (let n in e.media) {
                        let i = e.media[n];
                        if (r.getMediaId()) {
                            if (r.getMediaId() == i.mid) {
                                let e = r.getSourceGroups();
                                for (let t in e) {
                                    let r = e[t];
                                    i.ssrcGroups.push({ semantics: r.getSemantics(), ssrcs: r.getSSRCs().join(" ") });
                                }
                                let n = r.getSSRCs();
                                for (let e in n) i.ssrcs.push({ id: n[e], attribute: "cname", value: t.getId() }), i.ssrcs.push({ id: n[e], attribute: "msid", value: t.getId() + " " + r.getId() });
                                i.msid = t.getId() + " " + r.getId();
                                break;
                            }
                        } else if (i.type.toLowerCase() === r.getMedia().toLowerCase()) {
                            let e = r.getSourceGroups();
                            for (let t in e) {
                                let r = e[t];
                                i.ssrcGroups.push({ semantics: r.getSemantics(), ssrcs: r.getSSRCs().join(" ") });
                            }
                            let n = r.getSSRCs();
                            for (let e in n) i.ssrcs.push({ id: n[e], attribute: "cname", value: t.getId() }), i.ssrcs.push({ id: n[e], attribute: "msid", value: t.getId() + " " + r.getId() });
                            break;
                        }
                    }
            return (t.mids = t.mids.join(" ")), e.groups.push(t), it.write(e);
        }
    }
    (sr.create = function (e) {
        const t = new sr();
        e.ice && (e.ice instanceof Dt ? t.setICE(e.ice.clone()) : t.setICE(Dt.expand(e.ice))),
            e.dtls && (e.dtls instanceof mt ? t.setDTLS(e.dtls) : t.setDTLS(mt.expand(e.dtls))),
            e.crypto && (e.crypto instanceof vt ? t.setCrypto(e.crypto) : t.setCrypto(vt.expand(e.crypto)));
        for (let r = 0; e.candidates && r < e.candidates.length; ++r) e.candidates[r] instanceof ot ? t.addCandidate(e.candidates[r].clone()) : t.addCandidate(ot.expand(e.candidates[r]));
        let r = 96;
        for (let n in e.capabilities) {
            const i = Xt.create(n, e.capabilities[n]);
            for (const [e, t] of i.getCodecs()) t.getType() >= 96 && t.setType(r++), t.getRTX() && t.setRTX(r++);
            t.addMedia(i);
        }
        return t;
    }),
        (sr.expand = function (e) {
            const t = new sr(e.version);
            for (let r = 0; e.medias && r < e.medias.length; ++r) {
                const n = Xt.expand(e.medias[r]);
                n && t.addMedia(n);
            }
            for (let r = 0; e.streams && r < e.streams.length; ++r) {
                const n = ir.expand(e.streams[r]);
                n && t.addStream(n);
            }
            for (let r = 0; e.candidates && r < e.candidates.length; ++r) {
                const n = ot.expand(e.candidates[r]);
                n && t.addCandidate(n);
            }
            return e.ice && t.setICE(Dt.expand(e.ice)), e.dtls && t.setDTLS(mt.expand(e.dtls)), e.crypto && t.setCrypto(mt.expand(e.crypto)), t;
        }),
        (sr.process = function (e) {
            return sr.parse(e);
        }),
        (sr.parse = function (e) {
            const t = it.parse(e),
                r = new sr();
            r.setVersion(t.version);
            for (let e in t.media) {
                const n = t.media[e],
                    i = n.type,
                    s = n.mid ? n.mid.toString() : e,
                    o = new Xt(s, i);
                if (n.iceUfrag && n.icePwd) {
                    const e = String(n.iceUfrag),
                        t = String(n.icePwd);
                    r.setICE(new Dt(e, t));
                }
                for (let e = 0; n.candidates && e < n.candidates.length; ++e) {
                    const t = n.candidates[e],
                        i = new ot(t.foundation, t.component, t.transport, t.priority, t.ip, t.port, t.type, t.raddr, t.rport);
                    r.addCandidate(i);
                }
                const a = n.fingerprint || t.fingerprint;
                if (a) {
                    const e = a.type,
                        t = a.hash;
                    let i = pt.ACTPASS;
                    n.setup && (i = pt.byValue(n.setup)), r.setDTLS(new mt(i, e, t));
                }
                if (n.crypto) {
                    const e = n.crypto[0];
                    r.setCrypto(new vt(e.id, e.suite, e.config, e.sessionConfig));
                }
                let c = Ht.SENDRECV;
                n.direction && ((c = Ht.byValue(n.direction)), o.setDirection(c)), n.control && o.setControl(n.control);
                const u = new Map();
                for (let e in n.rtp) {
                    const t = n.rtp[e],
                        r = t.payload,
                        i = t.codec;
                    if ("RED" === i.toUpperCase() || "ULPFEC" === i.toUpperCase()) continue;
                    let s = {};
                    for (let e in n.fmtp) {
                        const t = n.fmtp[e];
                        if (t.payload === r) {
                            const e = t.config.split(";");
                            for (let t in e) {
                                const r = e[t].split("="),
                                    n = r[0].trim(),
                                    i = r.splice(1).join("=").trim();
                                s[n] = i;
                            }
                        }
                    }
                    if ("RTX" === i.toUpperCase()) u.set(parseInt(s.apt), r);
                    else {
                        const e = new dt(i, r, s);
                        t.encoding > 1 && e.setChannels(t.encoding), o.addCodec(e);
                    }
                }
                for (let e of u.entries()) {
                    const t = o.getCodecForType(e[0]);
                    t && t.setRTX(e[1]);
                }
                for (let e = 0; n.rtcpFb && e < n.rtcpFb.length; ++e) {
                    const t = o.getCodecForType(n.rtcpFb[e].payload);
                    if (t) {
                        const r = n.rtcpFb[e].type,
                            i = n.rtcpFb[e].subtype ? n.rtcpFb[e].subtype.split(" ") : null;
                        t.addRTCPFeedback(new ct(r, i));
                    }
                }
                const d = n.ext;
                for (let e in d) {
                    const t = d[e];
                    o.addExtension(t.value, t.uri);
                }
                const l = n.rids;
                for (let e in l) {
                    const t = l[e],
                        r = new Ft(t.id, Ut.byValue(t.direction));
                    let n = [];
                    const i = new Map();
                    if (t.params) {
                        const e = it.parseParams(t.params);
                        for (let t in e) "pt" === t ? (n = e[t].split(",")) : i.set(t, e[t]);
                        r.setFormats(n), r.setParams(i);
                    }
                    o.addRID(r);
                }
                const f = [];
                if (n.simulcast) {
                    const e = new qt();
                    if (n.simulcast.dir1) {
                        const t = Ut.byValue(n.simulcast.dir1),
                            r = it.parseSimulcastStreamList(n.simulcast.list1);
                        for (let n = 0; n < r.length; ++n) {
                            const i = [];
                            for (let e = 0; e < r[n].length; ++e) i.push(new zt(r[n][e].scid, r[n][e].paused));
                            e.addSimulcastAlternativeStreams(t, i);
                        }
                    }
                    if (n.simulcast.dir2) {
                        const t = Ut.byValue(n.simulcast.dir2),
                            r = it.parseSimulcastStreamList(n.simulcast.list2);
                        for (let n = 0; n < r.length; ++n) {
                            const i = [];
                            for (let e = 0; e < r[n].length; ++e) i.push(new zt(r[n][e].scid, r[n][e].paused));
                            e.addSimulcastAlternativeStreams(t, i);
                        }
                    }
                    for (let t of e.getSimulcastStreams(Ut.SEND)) {
                        const e = [];
                        for (let r = 0; r < t.length; r++) {
                            const n = new er(t[r].getId(), t[r].isPaused()),
                                i = o.getRID(n.getId());
                            if (i) {
                                const t = i.getFormats();
                                for (let e = 0; t && e < t.length; ++e) {
                                    const r = o.getCodecForType(t[e]);
                                    r && n.addCodec(r);
                                }
                                n.setParams(i.getParams()), e.push(n);
                            }
                        }
                        e.length && f.push(e);
                    }
                    o.setSimulcast(e);
                }
                const p = new Map();
                if (n.ssrcs)
                    for (let e in n.ssrcs) {
                        let t = n.ssrcs[e],
                            o = t.id,
                            a = t.attribute,
                            c = t.value,
                            u = p.get(o);
                        if ((u || ((u = new Kt(o)), p.set(u.getSSRC(), u)), "cname" === a.toLowerCase())) u.setCName(c);
                        else if ("msid" === a.toLowerCase()) {
                            let e = c.split(" "),
                                t = e[0],
                                n = e[1];
                            u.setStreamId(t), u.setTrackId(n);
                            let a = r.getStream(t);
                            a || ((a = new ir(t)), r.addStream(a));
                            let d = a.getTrack(n);
                            d || ((d = new rr(i, n)), d.setMediaId(s), d.setEncodings(f), a.addTrack(d)), d.addSSRC(o);
                        }
                    }
                if (n.msid) {
                    let e = n.msid.split(" "),
                        t = e[0],
                        o = e[1],
                        a = r.getStream(t);
                    a || ((a = new ir(t)), r.addStream(a));
                    let c = a.getTrack(o);
                    c || ((c = new rr(i, o)), c.setMediaId(s), c.setEncodings(f), a.addTrack(c));
                    for (let [e, r] of p.entries()) r.getStreamId() || (r.setStreamId(t), r.setTrackId(o), c.addSSRC(e));
                }
                for (let [e, t] of p.entries())
                    if (!t.getStreamId()) {
                        let n = t.getCName(),
                            o = s;
                        t.setStreamId(n), t.setTrackId(o);
                        let a = r.getStream(n);
                        a || ((a = new ir(n)), r.addStream(a));
                        let c = a.getTrack(o);
                        c || ((c = new rr(i, o)), c.setMediaId(s), c.setEncodings(f), a.addTrack(c)), c.addSSRC(e);
                    }
                if (n.ssrcGroups)
                    for (let e in n.ssrcGroups) {
                        let t = n.ssrcGroups[e],
                            i = t.ssrcs.split(" "),
                            s = new Jt(t.semantics, i),
                            o = p.get(parseInt(i[0]));
                        r.getStream(o.getStreamId()).getTrack(o.getTrackId()).addSourceGroup(s);
                    }
                r.addMedia(o);
            }
            return r;
        });
    var or = { SDPInfo: sr, CandidateInfo: ot, CodecInfo: dt, DTLSInfo: mt, CryptoInfo: vt, ICEInfo: Dt, MediaInfo: Xt, Setup: pt, SourceGroupInfo: Jt, SourceInfo: Kt, StreamInfo: ir, TrackInfo: rr, TrackEncodingInfo: er, Direction: Ht },
        ar = S(function (e, t) {
            !(function (r, n) {
                var i = "function",
                    s = "object",
                    o = "string",
                    a = "model",
                    c = "name",
                    u = "type",
                    d = "vendor",
                    l = "version",
                    f = "architecture",
                    p = "console",
                    h = "mobile",
                    m = "tablet",
                    g = "smarttv",
                    v = "wearable",
                    y = "embedded",
                    w = {
                        extend: function (e, t) {
                            var r = {};
                            for (var n in e) t[n] && t[n].length % 2 == 0 ? (r[n] = t[n].concat(e[n])) : (r[n] = e[n]);
                            return r;
                        },
                        has: function (e, t) {
                            return typeof e === o && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
                        },
                        lowerize: function (e) {
                            return e.toLowerCase();
                        },
                        major: function (e) {
                            return typeof e === o ? e.replace(/[^\d\.]/g, "").split(".")[0] : n;
                        },
                        trim: function (e, t) {
                            return (e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")), void 0 === t ? e : e.substring(0, 255);
                        },
                    },
                    b = {
                        rgx: function (e, t) {
                            for (var r, o, a, c, u, d, l = 0; l < t.length && !u; ) {
                                var f = t[l],
                                    p = t[l + 1];
                                for (r = o = 0; r < f.length && !u; )
                                    if ((u = f[r++].exec(e)))
                                        for (a = 0; a < p.length; a++)
                                            (d = u[++o]),
                                                typeof (c = p[a]) === s && c.length > 0
                                                    ? 2 == c.length
                                                        ? typeof c[1] == i
                                                            ? (this[c[0]] = c[1].call(this, d))
                                                            : (this[c[0]] = c[1])
                                                        : 3 == c.length
                                                        ? typeof c[1] !== i || (c[1].exec && c[1].test)
                                                            ? (this[c[0]] = d ? d.replace(c[1], c[2]) : n)
                                                            : (this[c[0]] = d ? c[1].call(this, d, c[2]) : n)
                                                        : 4 == c.length && (this[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : n)
                                                    : (this[c] = d || n);
                                l += 2;
                            }
                        },
                        str: function (e, t) {
                            for (var r in t)
                                if (typeof t[r] === s && t[r].length > 0) {
                                    for (var i = 0; i < t[r].length; i++) if (w.has(t[r][i], e)) return "?" === r ? n : r;
                                } else if (w.has(t[r], e)) return "?" === r ? n : r;
                            return e;
                        },
                    },
                    S = {
                        browser: {
                            oldSafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } },
                            oldEdge: { version: { 0.1: "12.", 21: "13.", 31: "14.", 39: "15.", 41: "16.", 42: "17.", 44: "18." } },
                        },
                        os: {
                            windows: {
                                version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" },
                            },
                        },
                    },
                    C = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [l, [c, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [l, [c, "Edge"]],
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                            [c, l],
                            [/opios[\/\s]+([\w\.]+)/i],
                            [l, [c, "Opera Mini"]],
                            [/\sopr\/([\w\.]+)/i],
                            [l, [c, "Opera"]],
                            [
                                /(kindle)\/([\w\.]+)/i,
                                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                                /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
                                /(?:ms|\()(ie)\s([\w\.]+)/i,
                                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                                /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
                                /(weibo)__([\d\.]+)/i,
                            ],
                            [c, l],
                            [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [l, [c, "UCBrowser"]],
                            [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                            [l, [c, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [l, [c, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [l, [c, "Konqueror"]],
                            [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                            [l, [c, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [l, [c, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [[c, /(.+)/, "$1 Secure Browser"], l],
                            [/focus\/([\w\.]+)/i],
                            [l, [c, "Firefox Focus"]],
                            [/opt\/([\w\.]+)/i],
                            [l, [c, "Opera Touch"]],
                            [/coc_coc_browser\/([\w\.]+)/i],
                            [l, [c, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [l, [c, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [l, [c, "Opera Coast"]],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [l, [c, "MIUI Browser"]],
                            [/fxios\/([\w\.-]+)/i],
                            [l, [c, "Firefox"]],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [[c, "360 Browser"]],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [[c, /(.+)/, "$1 Browser"], l],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [[c, /_/g, " "], l],
                            [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                            [c, l],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                            [c],
                            [/;fbav\/([\w\.]+);/i],
                            [l, [c, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [[c, "Facebook"]],
                            [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                            [c, l],
                            [/\bgsa\/([\w\.]+)\s.*safari\//i],
                            [l, [c, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [l, [c, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [[c, "Chrome WebView"], l],
                            [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                            [l, [c, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [c, l],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [l, [c, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [l, c],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [c, [l, b.str, S.browser.oldSafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [c, l],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [[c, "Netscape"], l],
                            [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                            [l, [c, "Firefox Reality"]],
                            [
                                /ekiohf.+(flow)\/([\w\.]+)/i,
                                /(swiftfox)/i,
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                                /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
                                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                /(links)\s\(([\w\.]+)/i,
                                /(gobrowser)\/?([\w\.]*)/i,
                                /(ice\s?browser)\/v?([\w\._]+)/i,
                                /(mosaic)[\/\s]([\w\.]+)/i,
                            ],
                            [c, l],
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [[f, "amd64"]],
                            [/(ia32(?=;))/i],
                            [[f, w.lowerize]],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [[f, "ia32"]],
                            [/\b(aarch64|armv?8e?l?)\b/i],
                            [[f, "arm64"]],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [[f, "armhf"]],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [[f, "arm"]],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [[f, /ower/, "", w.lowerize]],
                            [/(sun4\w)[;\)]/i],
                            [[f, "sparc"]],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [[f, w.lowerize]],
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                            [a, [d, "Samsung"], [u, m]],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                            [a, [d, "Samsung"], [u, h]],
                            [/\((ip(?:hone|od)[\s\w]*);/i],
                            [a, [d, "Apple"], [u, h]],
                            [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [a, [d, "Apple"], [u, m]],
                            [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                            [a, [d, "Huawei"], [u, m]],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                            [a, [d, "Huawei"], [u, h]],
                            [
                                /\b(poco[\s\w]+)(?:\sbuild|\))/i,
                                /\b;\s(\w+)\sbuild\/hm\1/i,
                                /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                                /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
                                /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
                            ],
                            [
                                [a, /_/g, " "],
                                [d, "Xiaomi"],
                                [u, h],
                            ],
                            [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                            [
                                [a, /_/g, " "],
                                [d, "Xiaomi"],
                                [u, m],
                            ],
                            [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                            [a, [d, "OPPO"], [u, h]],
                            [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                            [a, [d, "Vivo"], [u, h]],
                            [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                            [a, [d, "Realme"], [u, h]],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                            [a, [d, "Motorola"], [u, h]],
                            [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [a, [d, "Motorola"], [u, m]],
                            [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                            [a, [d, "LG"], [u, m]],
                            [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                            [a, [d, "LG"], [u, h]],
                            [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                            [a, [d, "Lenovo"], [u, m]],
                            [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                            [
                                [a, /_/g, " "],
                                [d, "Nokia"],
                                [u, h],
                            ],
                            [/droid.+;\s(pixel\sc)[\s)]/i],
                            [a, [d, "Google"], [u, m]],
                            [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                            [a, [d, "Google"], [u, h]],
                            [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [a, [d, "Sony"], [u, h]],
                            [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                            [
                                [a, "Xperia Tablet"],
                                [d, "Sony"],
                                [u, m],
                            ],
                            [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                            [a, [d, "OnePlus"], [u, h]],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                            [a, [d, "Amazon"], [u, m]],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [a, "Fire Phone"],
                                [d, "Amazon"],
                                [u, h],
                            ],
                            [/\((playbook);[\w\s\),;-]+(rim)/i],
                            [a, d, [u, m]],
                            [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                            [a, [d, "BlackBerry"], [u, h]],
                            [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                            [a, [d, "ASUS"], [u, m]],
                            [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                            [a, [d, "ASUS"], [u, h]],
                            [/(nexus\s9)/i],
                            [a, [d, "HTC"], [u, m]],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [d, [a, /_/g, " "], [u, h]],
                            [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [a, [d, "Acer"], [u, m]],
                            [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                            [a, [d, "Meizu"], [u, h]],
                            [
                                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                /(hp)\s([\w\s]+\w)/i,
                                /(asus)-?(\w+)/i,
                                /(microsoft);\s(lumia[\s\w]+)/i,
                                /(lenovo)[_\s-]?([\w-]+)/i,
                                /linux;.+(jolla);/i,
                                /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
                            ],
                            [d, a, [u, h]],
                            [
                                /(archos)\s(gamepad2?)/i,
                                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                                /(kindle)\/([\w\.]+)/i,
                                /\s(nook)[\w\s]+build\/(\w+)/i,
                                /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                                /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
                                /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
                                /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
                                /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
                            ],
                            [d, a, [u, m]],
                            [/\s(surface\sduo)\s/i],
                            [a, [d, "Microsoft"], [u, m]],
                            [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                            [a, [d, "Fairphone"], [u, h]],
                            [/\s(u304aa)\sbuild/i],
                            [a, [d, "AT&T"], [u, h]],
                            [/sie-(\w*)/i],
                            [a, [d, "Siemens"], [u, h]],
                            [/[;\/]\s?(rct\w+)\sbuild/i],
                            [a, [d, "RCA"], [u, m]],
                            [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                            [a, [d, "Dell"], [u, m]],
                            [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                            [a, [d, "Verizon"], [u, m]],
                            [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                            [a, [d, "Barnes & Noble"], [u, m]],
                            [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                            [a, [d, "NuVision"], [u, m]],
                            [/;\s(k88)\sbuild/i],
                            [a, [d, "ZTE"], [u, m]],
                            [/;\s(nx\d{3}j)\sbuild/i],
                            [a, [d, "ZTE"], [u, h]],
                            [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                            [a, [d, "Swiss"], [u, h]],
                            [/[;\/]\s?(zur\d{3})\sbuild/i],
                            [a, [d, "Swiss"], [u, m]],
                            [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                            [a, [d, "Zeki"], [u, m]],
                            [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                            [[d, "Dragon Touch"], a, [u, m]],
                            [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                            [a, [d, "Insignia"], [u, m]],
                            [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                            [a, [d, "NextBook"], [u, m]],
                            [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                            [[d, "Voice"], a, [u, h]],
                            [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                            [[d, "LvTel"], a, [u, h]],
                            [/;\s(ph-1)\s/i],
                            [a, [d, "Essential"], [u, h]],
                            [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                            [a, [d, "Envizen"], [u, m]],
                            [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                            [a, [d, "MachSpeed"], [u, m]],
                            [/[;\/]\s?tu_(1491)\sbuild/i],
                            [a, [d, "Rotor"], [u, m]],
                            [/(shield[\w\s]+)\sbuild/i],
                            [a, [d, "Nvidia"], [u, m]],
                            [/(sprint)\s(\w+)/i],
                            [d, a, [u, h]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [a, /\./g, " "],
                                [d, "Microsoft"],
                                [u, h],
                            ],
                            [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [a, [d, "Zebra"], [u, m]],
                            [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [a, [d, "Zebra"], [u, h]],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                            [d, a, [u, p]],
                            [/droid.+;\s(shield)\sbuild/i],
                            [a, [d, "Nvidia"], [u, p]],
                            [/(playstation\s[345portablevi]+)/i],
                            [a, [d, "Sony"], [u, p]],
                            [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                            [a, [d, "Microsoft"], [u, p]],
                            [/smart-tv.+(samsung)/i],
                            [d, [u, g]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [a, /^/, "SmartTV"],
                                [d, "Samsung"],
                                [u, g],
                            ],
                            [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                            [
                                [d, "LG"],
                                [u, g],
                            ],
                            [/(apple)\s?tv/i],
                            [d, [a, "Apple TV"], [u, g]],
                            [/crkey/i],
                            [
                                [a, "Chromecast"],
                                [d, "Google"],
                                [u, g],
                            ],
                            [/droid.+aft([\w])(\sbuild\/|\))/i],
                            [a, [d, "Amazon"], [u, g]],
                            [/\(dtv[\);].+(aquos)/i],
                            [a, [d, "Sharp"], [u, g]],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [d, w.trim],
                                [a, w.trim],
                                [u, g],
                            ],
                            [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                            [[u, g]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [d, a, [u, v]],
                            [/droid.+;\s(glass)\s\d/i],
                            [a, [d, "Google"], [u, v]],
                            [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                            [a, [d, "Zebra"], [u, v]],
                            [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                            [d, [u, y]],
                            [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [a, [u, h]],
                            [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [a, [u, m]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [[u, w.lowerize]],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [a, [d, "Generic"]],
                            [/(phone)/i],
                            [[u, h]],
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [l, [c, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [l, [c, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [c, l],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [l, c],
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [c, l],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                            [c, [l, b.str, S.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [c, "Windows"],
                                [l, b.str, S.os.windows.version],
                            ],
                            [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [l, /_/g, "."],
                                [c, "iOS"],
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                            [
                                [c, "Mac OS"],
                                [l, /_/g, "."],
                            ],
                            [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                            [c, l],
                            [/\(bb(10);/i],
                            [l, [c, "BlackBerry"]],
                            [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                            [l, [c, "Symbian"]],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [[c, "Firefox OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [l, [c, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [l, [c, "Chromecast"]],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [[c, "Chromium OS"], l],
                            [
                                /(nintendo|playstation)\s([wids345portablevuch]+)/i,
                                /(xbox);\s+xbox\s([^\);]+)/i,
                                /(mint)[\/\s\(\)]?(\w*)/i,
                                /(mageia|vectorlinux)[;\s]/i,
                                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
                                /(hurd|linux)\s?([\w\.]*)/i,
                                /(gnu)\s?([\w\.]*)/i,
                                /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                                /(haiku)\s(\w+)/i,
                            ],
                            [c, l],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [[c, "Solaris"], l],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [c, l],
                        ],
                    },
                    E = function (e, t) {
                        if (("object" == typeof e && ((t = e), (e = n)), !(this instanceof E))) return new E(e, t).getResult();
                        var i = e || (void 0 !== r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            s = t ? w.extend(C, t) : C;
                        return (
                            (this.getBrowser = function () {
                                var e = { name: n, version: n };
                                return b.rgx.call(e, i, s.browser), (e.major = w.major(e.version)), e;
                            }),
                            (this.getCPU = function () {
                                var e = { architecture: n };
                                return b.rgx.call(e, i, s.cpu), e;
                            }),
                            (this.getDevice = function () {
                                var e = { vendor: n, model: n, type: n };
                                return b.rgx.call(e, i, s.device), e;
                            }),
                            (this.getEngine = function () {
                                var e = { name: n, version: n };
                                return b.rgx.call(e, i, s.engine), e;
                            }),
                            (this.getOS = function () {
                                var e = { name: n, version: n };
                                return b.rgx.call(e, i, s.os), e;
                            }),
                            (this.getResult = function () {
                                return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
                            }),
                            (this.getUA = function () {
                                return i;
                            }),
                            (this.setUA = function (e) {
                                return (i = typeof e === o && e.length > 255 ? w.trim(e, 255) : e), this;
                            }),
                            this.setUA(i),
                            this
                        );
                    };
                (E.VERSION = "0.7.28"),
                    (E.BROWSER = { NAME: c, MAJOR: "major", VERSION: l }),
                    (E.CPU = { ARCHITECTURE: f }),
                    (E.DEVICE = { MODEL: a, VENDOR: d, TYPE: u, CONSOLE: p, MOBILE: h, SMARTTV: g, TABLET: m, WEARABLE: v, EMBEDDED: y }),
                    (E.ENGINE = { NAME: c, VERSION: l }),
                    (E.OS = { NAME: c, VERSION: l }),
                    e.exports && (t = e.exports = E),
                    (t.UAParser = E);
                var x = void 0 !== r && (r.jQuery || r.Zepto);
                if (x && !x.ua) {
                    var k = new E();
                    (x.ua = k.getResult()),
                        (x.ua.get = function () {
                            return k.getUA();
                        }),
                        (x.ua.set = function (e) {
                            k.setUA(e);
                            var t = k.getResult();
                            for (var r in t) x.ua[r] = t[r];
                        });
                }
            })("object" == typeof window ? window : b);
        });
    const cr = ["iOS"];
    class ur extends ar {
        constructor() {
            super(window.navigator.userAgent);
        }
        isChrome() {
            const e = this.getBrowser(),
                t = this.getOS();
            let r = !0;
            return (r = !new RegExp(cr.join("|"), "i").test(t.name)), e.name.match(/Chrome/i) && r;
        }
        isFirefox() {
            return this.getBrowser().name.match(/Firefox/i);
        }
    }
    const dr = L.get("SdpParser"),
        lr = Array.from({ length: 31 }, (e, t) => t + 35),
        fr = Array.from({ length: 32 }, (e, t) => t + 96);
    class pr {
        static setSimulcast(e, t) {
            dr.info("Setting simulcast. Codec: ", t);
            if (!new ur().isChrome()) return dr.warn("Simulcast is only available in Google Chrome browser"), e;
            if ("h264" !== t && "vp8" !== t) return dr.warn("Simulcast is only available in h264 and vp8 codecs"), e;
            try {
                const t = /m=video[\s\S]*?a=ssrc:([0-9]*) mslabel:([\s\S]+?)\r\n/,
                    r = /m=video[\s\S]*?a=ssrc:([0-9]*) msid:([\s\S]+?)\r\n/,
                    n = /m=video[\s\S]*?a=ssrc:([0-9]*) label:([\s\S]+?)\r\n/,
                    i = /m=video[\s\S]*?a=ssrc:([0-9]*) cname:([\s\S]+?)\r\n/.exec(e),
                    s = i[1],
                    o = i[2],
                    a = t.exec(e)[2],
                    c = r.exec(e)[2],
                    u = n.exec(e)[2],
                    d = 2,
                    l = [s];
                for (let t = 0; t < d; ++t) {
                    const r = 100 + 2 * t,
                        n = r + 1;
                    l.push(r),
                        (e +=
                            "a=ssrc-group:FID " +
                            r +
                            " " +
                            n +
                            "\r\na=ssrc:" +
                            r +
                            " cname:" +
                            o +
                            "\r\na=ssrc:" +
                            r +
                            " msid:" +
                            c +
                            "\r\na=ssrc:" +
                            r +
                            " mslabel:" +
                            a +
                            "\r\na=ssrc:" +
                            r +
                            " label:" +
                            u +
                            "\r\na=ssrc:" +
                            n +
                            " cname:" +
                            o +
                            "\r\na=ssrc:" +
                            n +
                            " msid:" +
                            c +
                            "\r\na=ssrc:" +
                            n +
                            " mslabel:" +
                            a +
                            "\r\na=ssrc:" +
                            n +
                            " label:" +
                            u +
                            "\r\n");
                }
                return (e += "a=x-google-flag:conference\r\n"), (e += "a=ssrc-group:SIM " + l.join(" ") + "\r\n"), dr.info("Simulcast setted"), dr.debug("Simulcast SDP: ", e), e;
            } catch (e) {
                throw (dr.error("Error setting SDP for simulcast: ", e), e);
            }
        }
        static setStereo(e) {
            return dr.info("Replacing SDP response for support stereo"), (e = e.replace("useinbandfec=1", "useinbandfec=1; stereo=1")), dr.info("Replaced SDP response for support stereo"), dr.debug("New SDP value: ", e), e;
        }
        static setVideoBitrate(e, t) {
            if (t < 1) dr.info("Remove bitrate restrictions"), (e = e.replace(/b=AS:.*\r\n/, "").replace(/b=TIAS:.*\r\n/, ""));
            else {
                const r = new ur(),
                    n = or.SDPInfo.parse(e),
                    i = n.getMedia("video");
                dr.info("Setting video bitrate"),
                    i.setBitrate(t),
                    (e = n.toString()).indexOf("b=AS:") > -1 && r.isFirefox() && (dr.info("Updating SDP for firefox browser"), (e = e.replace("b=AS:", "b=TIAS:")), dr.debug("SDP updated for firefox: ", e));
            }
            return e;
        }
        static removeSdpLine(e, t) {
            return (
                dr.debug("SDP before trimming: ", e),
                (e = e
                    .split("\n")
                    .filter((e) => e.trim() !== t)
                    .join("\n")),
                dr.debug("SDP trimmed result: ", e),
                e
            );
        }
        static adaptCodecName(e, t, r) {
            if (!e) return e;
            const n = new RegExp(`${t}`, "i");
            return e.replace(n, r);
        }
        static setMultiopus(e, t) {
            if (new ur().isChrome() && (!t || hr(t)))
                if (e.includes("multiopus/48000/6")) dr.info("Multiopus already setted");
                else {
                    dr.info("Setting multiopus");
                    const t = /m=audio 9 UDP\/TLS\/RTP\/SAVPF (.*)\r\n/.exec(e)[0],
                        r = pr.getAvailablePayloadTypeRange(e)[0],
                        n = t.replace("\r\n", " ") + r + "\r\na=rtpmap:" + r + " multiopus/48000/6\r\na=fmtp:" + r + " channel_mapping=0,4,1,2,3,5;coupled_streams=2;minptime=10;num_streams=4;useinbandfec=1\r\n";
                    (e = e.replace(t, n)), dr.info("Multiopus offer created"), dr.debug("SDP parsed for multioups: ", e);
                }
            return e;
        }
        static getAvailablePayloadTypeRange(e) {
            const t = e.matchAll(/m=(?:.*) (?:.*) UDP\/TLS\/RTP\/SAVPF (.*)\r\n/gm);
            let r = fr.concat(lr);
            var n,
                i = w(t);
            try {
                for (i.s(); !(n = i.n()).done; ) {
                    const e = n.value[1].split(" ").map((e) => parseInt(e));
                    r = r.filter((t) => !e.includes(t));
                }
            } catch (e) {
                i.e(e);
            } finally {
                i.f();
            }
            return r;
        }
    }
    const hr = (e) => e.getAudioTracks().some((e) => e.getSettings().channelCount > 2);
    class mr extends xe {
        constructor(e, t) {
            super(), (this.namespace = e), (this.tm = t);
        }
        cmd(e, t) {
            return this.tm.cmd(e, t, this.namespace);
        }
        event(e, t) {
            return this.tm.event(e, t, this.namespace);
        }
        close() {
            return this.tm.namespaces.delete(this.namespace);
        }
    }
    var gr = class extends xe {
        constructor(e) {
            super(),
                (this.maxId = 0),
                (this.namespaces = new Map()),
                (this.transactions = new Map()),
                (this.transport = e),
                (this.listener = (t) => {
                    let r;
                    try {
                        r = JSON.parse(t.utf8Data || t.data);
                    } catch (e) {
                        return;
                    }
                    switch (r.type) {
                        case "cmd":
                            const t = {
                                name: r.name,
                                data: r.data,
                                namespace: r.namespace,
                                accept: (t) => {
                                    e.send(JSON.stringify({ type: "response", transId: r.transId, data: t }));
                                },
                                reject: (t) => {
                                    e.send(JSON.stringify({ type: "error", transId: r.transId, data: t }));
                                },
                            };
                            if (t.namespace) {
                                const e = this.namespaces.get(t.namespace);
                                e ? e.emit("cmd", t) : this.emit("cmd", t);
                            } else this.emit("cmd", t);
                            break;
                        case "response": {
                            const e = this.transactions.get(r.transId);
                            if (!e) return;
                            this.transactions.delete(r.transId), e.resolve(r.data);
                            break;
                        }
                        case "error": {
                            const e = this.transactions.get(r.transId);
                            if (!e) return;
                            this.transactions.delete(r.transId), e.reject(r.data);
                            break;
                        }
                        case "event":
                            const i = { name: r.name, data: r.data, namespace: r.namespace };
                            if (i.namespace) {
                                var n = this.namespaces.get(i.namespace);
                                n ? n.emit("event", i) : this.emit("event", i);
                            } else this.emit("event", i);
                    }
                }),
                this.transport.addListener ? this.transport.addListener("message", this.listener) : this.transport.addEventListener("message", this.listener);
        }
        cmd(e, t, r) {
            return new Promise((n, i) => {
                if (!e || 0 === e.length) throw new Error("Bad command name");
                const s = { type: "cmd", transId: this.maxId++, name: e, data: t };
                r && (s.namespace = r);
                const o = JSON.stringify(s);
                (s.resolve = n), (s.reject = i), this.transactions.set(s.transId, s);
                try {
                    this.transport.send(o);
                } catch (e) {
                    throw (this.transactions.delete(s.transId), e);
                }
            });
        }
        event(e, t, r) {
            if (!e || 0 === e.length) throw new Error("Bad event name");
            const n = { type: "event", name: e, data: t };
            r && (n.namespace = r);
            const i = JSON.stringify(n);
            this.transport.send(i);
        }
        namespace(e) {
            let t = this.namespaces.get(e);
            return t || ((t = new mr(e, this)), this.namespaces.set(e, t), t);
        }
        close() {
            for (const e of this.namespaces.values()) e.close();
            this.transport.removeListener ? this.transport.removeListener("message", this.listener) : this.transport.removeEventListener("message", this.listener);
        }
    };
    const vr = L.get("Signaling"),
        yr = "wsConnectionSuccess",
        wr = "wsConnectionError",
        br = "wsConnectionClose",
        Sr = "broadcastEvent",
        Cr = { VP8: "vp8", VP9: "vp9", H264: "h264", AV1: "av1" },
        Er = { OPUS: "opus", MULTIOPUS: "multiopus" };
    class xr extends xe {
        constructor(e = { streamName: null, url: "ws://localhost:8080/" }) {
            super(), (this.streamName = e.streamName), (this.wsUrl = e.url), (this.webSocket = null), (this.transactionManager = null);
        }
        connect() {
            var e = this;
            return g(function* () {
                var t;
                return (
                    vr.info("Connecting to Signaling Server"),
                    e.transactionManager && (null === (t = e.webSocket) || void 0 === t ? void 0 : t.readyState) === WebSocket.OPEN
                        ? (vr.info("Connected to server: ", e.webSocket.url),
                          vr.debug("WebSocket value: ", { url: e.webSocket.url, protocol: e.webSocket.protocol, readyState: e.webSocket.readyState, binaryType: e.webSocket.binaryType, extensions: e.webSocket.extensions }),
                          e.emit(yr, { ws: e.webSocket, tm: e.transactionManager }),
                          e.webSocket)
                        : new Promise((t, r) => {
                              (e.webSocket = new WebSocket(e.wsUrl)),
                                  (e.transactionManager = new gr(e.webSocket)),
                                  (e.webSocket.onopen = () => {
                                      vr.info("WebSocket opened"),
                                          e.transactionManager.on("event", (t) => {
                                              e.emit(Sr, t);
                                          }),
                                          vr.info("Connected to server: ", e.webSocket.url),
                                          vr.debug("WebSocket value: ", { url: e.webSocket.url, protocol: e.webSocket.protocol, readyState: e.webSocket.readyState, binaryType: e.webSocket.binaryType, extensions: e.webSocket.extensions }),
                                          e.emit(yr, { ws: e.webSocket, tm: e.transactionManager }),
                                          t(e.webSocket);
                                  }),
                                  (e.webSocket.onerror = () => {
                                      vr.error("WebSocket not connected: ", e.webSocket.url), e.emit(wr, e.webSocket.url), r(e.webSocket.url);
                                  }),
                                  (e.webSocket.onclose = () => {
                                      (e.webSocket = null), (e.transactionManager = null), vr.info("Connection closed with Signaling Server."), e.emit(br);
                                  });
                          })
                );
            })();
        }
        close() {
            var e;
            vr.info("Closing connection with Signaling Server."), null === (e = this.webSocket) || void 0 === e || e.close();
        }
        subscribe(e) {
            var t = this;
            return g(function* () {
                vr.info("Starting subscription to streamName: ", t.streamName), vr.debug("Subcription local description: ", e);
                const r = { sdp: (e = pr.adaptCodecName(e, "AV1X", Cr.AV1)), streamId: t.streamName };
                try {
                    yield t.connect(), vr.info("Sending view command");
                    const e = yield t.transactionManager.cmd("view", r);
                    return (e.sdp = pr.adaptCodecName(e.sdp, Cr.AV1, "AV1X")), vr.info("Command sent, subscriberId: ", e.subscriberId), vr.debug("Command result: ", e), e.sdp;
                } catch (e) {
                    throw (vr.error("Error sending view command, error: ", e), e);
                }
            })();
        }
        publish(e, t = Cr.H264) {
            var r = this;
            return g(function* () {
                vr.info(`Starting publishing to streamName: ${r.streamName}, codec: ${t}`), vr.debug("Publishing local description: ", e);
                const n = Object.values(Cr);
                if (-1 === n.indexOf(t)) throw (vr.error("Invalid codec. Possible values are: ", n), new Error(`Invalid codec. Possible values are: ${n}`));
                t === Cr.AV1 && (e = pr.adaptCodecName(e, "AV1X", Cr.AV1));
                const i = { name: r.streamName, sdp: e, codec: t };
                try {
                    var s;
                    yield r.connect(), vr.info("Sending publish command");
                    const e = yield r.transactionManager.cmd("publish", i);
                    return (
                        t === Cr.AV1 && (e.sdp = pr.adaptCodecName(e.sdp, Cr.AV1, "AV1X")),
                        -1 !== (null === (s = e.sdp) || void 0 === s ? void 0 : s.indexOf("\na=extmap-allow-mixed")) && (e.sdp = pr.removeSdpLine(e.sdp, "a=extmap-allow-mixed")),
                        vr.info("Command sent, publisherId: ", e.publisherId),
                        vr.debug("Command result: ", e),
                        e.sdp
                    );
                } catch (e) {
                    throw (vr.error("Error sending publish command, error: ", e), e);
                }
            })();
        }
    }
    const kr = L.get("PeerConnection"),
        Tr = "track",
        Ir = "connectionStateChange";
    class Rr extends xe {
        constructor() {
            super(), (this.sessionDescription = null), (this.peer = null), (this.peerConnectionStats = null), (this.RTCOfferOptions = { offerToReceiveVideo: !0, offerToReceiveAudio: !0 });
        }
        getRTCPeer(e = null) {
            var t = this;
            return g(function* () {
                kr.info("Getting RTC Peer"), kr.debug("RTC configuration provided by user: ", e), t.peer || (e || (kr.info("RTC configuration not provided by user."), (e = yield t.getRTCConfiguration())), (t.peer = Lr(t, e)));
                const r = Br(t.peer),
                    n = t.peer,
                    i = n.currentLocalDescription,
                    s = n.currentRemoteDescription;
                return kr.debug("getRTCPeer return: ", { connectionState: r, currentLocalDescription: i, currentRemoteDescription: s }), t.peer;
            })();
        }
        closeRTCPeer() {
            var e = this;
            return g(function* () {
                var t;
                kr.info("Closing RTCPeerConnection"), null === (t = e.peer) || void 0 === t || t.close(), (e.peer = null), e.stopStats(), e.emit(Ir, "closed");
            })();
        }
        getRTCConfiguration() {
            var e = this;
            return g(function* () {
                kr.info("Getting RTC configuration");
                const t = { rtcpMuxPolicy: "require", bundlePolicy: "max-bundle" };
                return (t.iceServers = yield e.getRTCIceServers()), t;
            })();
        }
        getRTCIceServers(e = "https://turn.millicast.com/webrtc/_turn") {
            return g(function* () {
                kr.info("Getting RTC ICE servers"), kr.debug("RTC ICE servers request location: ", e);
                const t = [];
                try {
                    const i = (yield we.put(e)).data;
                    if ((kr.debug("RTC ICE servers response: ", i), "ok" === i.s)) {
                        var r,
                            n = w(i.v.iceServers);
                        try {
                            for (n.s(); !(r = n.n()).done; ) {
                                const e = r.value,
                                    n = e.url;
                                n && ((e.urls = n), delete e.url), t.push(e);
                            }
                        } catch (e) {
                            n.e(e);
                        } finally {
                            n.f();
                        }
                        kr.info("RTC ICE servers successfully obtained.");
                    }
                } catch (e) {
                    kr.error("Error while getting RTC ICE servers: ", e.response.data);
                }
                return t;
            })();
        }
        setRTCRemoteSDP(e) {
            var t = this;
            return g(function* () {
                kr.info("Setting RTC Remote SDP");
                const r = { type: "answer", sdp: e };
                try {
                    yield t.peer.setRemoteDescription(r), kr.info("RTC Remote SDP was set successfully."), kr.debug("RTC Remote SDP new value: ", e);
                } catch (e) {
                    throw (kr.error("Error while setting RTC Remote SDP: ", e), e);
                }
            })();
        }
        getRTCLocalSDP(e = { stereo: !1, mediaStream: null, codec: "h264", simulcast: !1, scalabilityMode: null }) {
            var t = this;
            return g(function* () {
                kr.info("Getting RTC Local SDP"), kr.debug("Stereo value: ", e.stereo), kr.debug("RTC offer options: ", t.RTCOfferOptions);
                const r = Pr(e.mediaStream);
                if (r) {
                    kr.info("Adding mediaStream tracks to RTCPeerConnection");
                    var n,
                        i = w(r.getTracks());
                    try {
                        for (i.s(); !(n = i.n()).done; ) {
                            const i = n.value;
                            "video" === i.kind && e.scalabilityMode && new ur().isChrome()
                                ? (kr.debug(`Video track with scalability mode: ${e.scalabilityMode}, adding as transceiver.`), t.peer.addTransceiver(i, { streams: [r], sendEncodings: [{ scalabilityMode: e.scalabilityMode }] }))
                                : ("video" === i.kind && e.scalabilityMode && kr.warn("SVC is only supported in Google Chrome"), t.peer.addTrack(i, r)),
                                kr.info(`Track '${i.label}' added: `, `id: ${i.id}`, `kind: ${i.kind}`);
                        }
                    } catch (e) {
                        i.e(e);
                    } finally {
                        i.f();
                    }
                }
                kr.info("Creating peer offer");
                const s = yield t.peer.createOffer(t.RTCOfferOptions);
                return (
                    kr.info("Peer offer created"),
                    kr.debug("Peer offer response: ", s.sdp),
                    (t.sessionDescription = s),
                    (t.sessionDescription.sdp = pr.setMultiopus(t.sessionDescription.sdp, r)),
                    e.simulcast && (t.sessionDescription.sdp = pr.setSimulcast(t.sessionDescription.sdp, e.codec)),
                    e.stereo && (t.sessionDescription.sdp = pr.setStereo(t.sessionDescription.sdp)),
                    yield t.peer.setLocalDescription(t.sessionDescription),
                    kr.info("Peer local description set"),
                    t.sessionDescription.sdp
                );
            })();
        }
        updateBandwidthRestriction(e, t) {
            return kr.info("Updating bandwidth restriction, bitrate value: ", t), kr.debug("SDP value: ", e), pr.setVideoBitrate(e, t);
        }
        updateBitrate(e = 0) {
            var t = this;
            return g(function* () {
                kr.info("Updating bitrate to value: ", e), (t.peer = yield t.getRTCPeer()), yield t.getRTCLocalSDP(!0, null);
                const r = t.updateBandwidthRestriction(t.peer.remoteDescription.sdp, e);
                yield t.setRTCRemoteSDP(r), kr.info("Bitrate restirctions updated: ", `${e > 0 ? e : "unlimited"} kbps`);
            })();
        }
        getRTCPeerStatus() {
            if ((kr.info("Getting RTC peer status"), !this.peer)) return null;
            const e = Br(this.peer);
            return kr.info("RTC peer status getted, value: ", e), e;
        }
        replaceTrack(e) {
            if (!this.peer) return void kr.error("Could not change track if there is not an active connection.");
            const t = this.peer.getSenders().find((t) => t.track.kind === e.kind);
            t ? t.replaceTrack(e) : kr.error(`There is no ${e.kind} track in active broadcast.`);
        }
        static getCapabilities(e) {
            const t = new ur();
            if (t.isFirefox())
                return ((e) =>
                    "video" === e
                        ? {
                              codecs: [
                                  { codec: "vp8", mimeType: "video/VP8" },
                                  { codec: "vp9", mimeType: "video/VP9" },
                                  { codec: "h264", mimeType: "video/H264" },
                              ],
                              headerExtensions: [],
                          }
                        : "audio" === e
                        ? { codecs: [{ codec: "opus", mimeType: "audio/opus", channels: 2 }], headerExtensions: [] }
                        : null)(e);
            const r = RTCRtpSender.getCapabilities(e);
            if (r) {
                const s = {};
                let o = new RegExp(`^video/(${Object.values(Cr).join("|")})x?$`, "i");
                "audio" === e && ((o = new RegExp(`^audio/(${Object.values(Er).join("|")})$`, "i")), t.isChrome() && (s.multiopus = { mimeType: "audio/multiopus", channels: 6 }));
                var n,
                    i = w(r.codecs);
                try {
                    for (i.s(); !(n = i.n()).done; ) {
                        const e = n.value,
                            t = e.mimeType.match(o);
                        if (t) {
                            const r = t[1].toLowerCase();
                            if (((s[r] = h(h({}, s[r]), {}, { mimeType: e.mimeType })), e.scalabilityModes)) {
                                let t = s[r].scalabilityModes || [];
                                (t = [...t, ...e.scalabilityModes]), (s[r].scalabilityModes = [...new Set(t)]);
                            }
                            e.channels && (s[r].channels = e.channels);
                        }
                    }
                } catch (e) {
                    i.e(e);
                } finally {
                    i.f();
                }
                r.codecs = Object.keys(s).map((e) => h({ codec: e }, s[e]));
            }
            return r;
        }
        getTracks() {
            var e, t;
            return null === (e = this.peer) || void 0 === e || null === (t = e.getSenders()) || void 0 === t ? void 0 : t.map((e) => e.track);
        }
        initStats() {
            this.peerConnectionStats
                ? kr.warn("Cannot init peer stats: Already initialized")
                : this.peer
                ? ((this.peerConnectionStats = new ze(this.peer)), this.peerConnectionStats.init(), De(this.peerConnectionStats, this, [Ve]))
                : kr.warn("Cannot init peer stats: RTCPeerConnection not initialized");
        }
        stopStats() {
            var e;
            null === (e = this.peerConnectionStats) || void 0 === e || e.stop(), (this.peerConnectionStats = null);
        }
    }
    const Ar = (e) => (null == e ? void 0 : e.getAudioTracks().length) <= 1 && (null == e ? void 0 : e.getVideoTracks().length) <= 1,
        Pr = (e) => {
            if (!e) return null;
            if (e instanceof MediaStream && Ar(e)) return e;
            if (!(e instanceof MediaStream)) {
                kr.info("Creating MediaStream to add received tracks.");
                const n = new MediaStream();
                var t,
                    r = w(e);
                try {
                    for (r.s(); !(t = r.n()).done; ) {
                        const e = t.value;
                        n.addTrack(e);
                    }
                } catch (e) {
                    r.e(e);
                } finally {
                    r.f();
                }
                if (Ar(n)) return n;
            }
            throw (kr.error("MediaStream must have 1 audio track and 1 video track, or at least one of them."), new Error("MediaStream must have 1 audio track and 1 video track, or at least one of them."));
        },
        Lr = (e, t) => {
            const r = new RTCPeerConnection(t);
            return Or(e, r), r;
        },
        Or = (e, t) => {
            (t.ontrack = (t) => {
                kr.info("New track from peer."), kr.debug("Track event value: ", t), e.emit(Tr, t);
            }),
                t.connectionState
                    ? (t.onconnectionstatechange = (r) => {
                          kr.info("Peer connection state change: ", t.connectionState), e.emit(Ir, t.connectionState);
                      })
                    : (t.oniceconnectionstatechange = (r) => {
                          kr.info("Peer ICE connection state change: ", t.iceConnectionState), e.emit(Ir, t.iceConnectionState);
                      });
        },
        Br = (e) => {
            var t;
            const r = null !== (t = e.connectionState) && void 0 !== t ? t : e.iceConnectionState;
            switch (r) {
                case "checking":
                    return "connecting";
                case "completed":
                    return "connected";
                default:
                    return r;
            }
        },
        Mr = L.get("Director"),
        Nr = "WebRtc";
    let Dr,
        jr = "https://director.millicast.com";
    class Ur {
        static setEndpoint(e) {
            jr = e.replace(/\/$/, "");
        }
        static getEndpoint() {
            return jr;
        }
        static getPublisher(e, t, r = Nr) {
            var n = this;
            return g(function* () {
                Mr.info("Getting publisher connection path for stream name: ", t);
                const i = { streamName: t, streamType: r },
                    s = { Authorization: `Bearer ${e}` },
                    o = `${n.getEndpoint()}/api/director/publish`;
                try {
                    const e = (yield we.post(o, i, { headers: s })).data;
                    return Mr.debug("Getting publisher response: ", e), e.data;
                } catch (e) {
                    var a;
                    throw (Mr.error("Error while getting publisher connection path: ", null === (a = e.response) || void 0 === a ? void 0 : a.data), e);
                }
            })();
        }
        static getSubscriber(e, t, r = null) {
            var n = this;
            return g(function* () {
                Mr.info(`Getting subscriber connection data for stream name: ${e} and account id: ${t}`);
                const i = { streamAccountId: t, streamName: e };
                let s = {};
                r && (s = { Authorization: `Bearer ${r}` });
                const o = `${n.getEndpoint()}/api/director/subscribe`;
                try {
                    const e = (yield we.post(o, i, { headers: s })).data;
                    return Mr.debug("Getting subscriber response: ", e), e.data;
                } catch (e) {
                    var a;
                    throw (Mr.error("Error while getting subscriber connection path: ", null === (a = e.response) || void 0 === a ? void 0 : a.data), e);
                }
            })();
        }
    }
    class _r extends xe {
        constructor(e, t, r, n) {
            if ((super(), (Dr = r), !e)) throw (Dr.error("Stream Name is required to construct this module."), new Error("Stream Name is required to construct this module."));
            if (!t) throw (Dr.error("Token generator is required to construct this module."), new Error("Token generator is required to construct this module."));
            (this.webRTCPeer = new Rr()),
                (this.signaling = null),
                (this.streamName = e),
                (this.autoReconnect = n),
                (this.reconnectionInterval = 1e3),
                (this.alreadyDisconnected = !1),
                (this.firstReconnection = !0),
                (this.tokenGenerator = t),
                (this.options = null);
        }
        stop() {
            var e;
            Dr.info("Stopping"), this.webRTCPeer.closeRTCPeer(), null === (e = this.signaling) || void 0 === e || e.close(), (this.signaling = null), (this.webRTCPeer = new Rr());
        }
        isActive() {
            const e = this.webRTCPeer.getRTCPeerStatus();
            return Dr.info("Broadcast status: ", e || "not_established"), "connected" === e;
        }
        setReconnect() {
            this.autoReconnect &&
                (this.signaling.on(wr, () => {
                    (!this.firstReconnection && this.alreadyDisconnected) || ((this.firstReconnection = !1), this.reconnect());
                }),
                this.webRTCPeer.on(Ir, (e) => {
                    ("failed" === e || ("disconnected" === e && this.alreadyDisconnected)) && this.firstReconnection
                        ? ((this.firstReconnection = !1), this.reconnect())
                        : "disconnected" === e
                        ? ((this.alreadyDisconnected = !0), setTimeout(() => this.reconnect(), 1500))
                        : (this.alreadyDisconnected = !1);
                }));
        }
        reconnect() {
            var e = this;
            return g(function* () {
                try {
                    e.isActive() || (e.stop(), yield e.connect(e.options), (e.alreadyDisconnected = !1), (e.reconnectionInterval = 1e3), (e.firstReconnection = !0));
                } catch (t) {
                    (e.reconnectionInterval = Fr(e.reconnectionInterval)),
                        Dr.error(`Reconnection failed, retrying in ${e.reconnectionInterval}ms. Error was: `, t),
                        e.emit("reconnect", { timeout: e.reconnectionInterval, error: t }),
                        setTimeout(() => e.reconnect(), e.reconnectionInterval);
                }
            })();
        }
    }
    const Fr = (e) => (e < 32e3 ? 2 * e : e),
        Vr = L.get("Publish");
    L.get("View");
    const zr = L.get("EventSubscriber"),
        $r = "";
    class qr extends xe {
        constructor() {
            super(), (this.webSocket = null);
        }
        subscribe(e) {
            zr.info("Subscribing to event topic"),
                zr.debug("Topic request value: ", e),
                (e = JSON.stringify(e) + $r),
                (this.webSocket.onmessage = (e) => {
                    var t;
                    var r,
                        n = w(null === (t = e.data) || void 0 === t ? void 0 : t.split($r));
                    try {
                        for (n.s(); !(r = n.n()).done; ) {
                            const e = r.value;
                            if (e) {
                                const t = this.parseSignalRMessage(e);
                                this.emit("message", t);
                            }
                        }
                    } catch (e) {
                        n.e(e);
                    } finally {
                        n.f();
                    }
                }),
                this.webSocket.send(e);
        }
        initializeHandshake() {
            var e = this;
            return g(function* () {
                var t, r;
                if ((null === (t = e.webSocket) || void 0 === t ? void 0 : t.readyState) !== WebSocket.CONNECTING && (null === (r = e.webSocket) || void 0 === r ? void 0 : r.readyState) !== WebSocket.OPEN)
                    return new Promise((t, r) => {
                        zr.info("Starting events WebSocket handshake."),
                            (e.webSocket = new WebSocket("wss://streamevents.millicast.com/ws")),
                            (e.webSocket.onopen = () => {
                                zr.info("Connection established with events WebSocket.");
                                e.webSocket.send(JSON.stringify({ protocol: "json", version: 1 }) + $r);
                            }),
                            (e.webSocket.onmessage = (n) => {
                                try {
                                    const r = e.handleHandshakeResponse(n.data);
                                    zr.info("Successful handshake with events WebSocket. Waiting for subscriptions..."), zr.debug("WebSocket handshake message: ", r), t();
                                } catch (t) {
                                    e.close(), r(t);
                                }
                            });
                    });
            })();
        }
        handleHandshakeResponse(e) {
            const t = this.parseSignalRMessage(e);
            if (t.error) throw (zr.error("There was an error with events WebSocket handshake: ", t.error), new Error(t.error));
            return t;
        }
        parseSignalRMessage(e) {
            return (e = e.endsWith($r) ? e.slice(0, -1) : e), JSON.parse(e);
        }
        close() {
            this.webSocket &&
                (this.webSocket.close(),
                (this.webSocket.onclose = () => {
                    zr.info("Events WebSocket closed"), (this.webSocket = null);
                }));
        }
    }
    const Gr = L.get("StreamEvents"),
        Hr = 1,
        Wr = 3;
    let Xr = 0;
    const Yr = "You need to initialize stream event with StreamEvents.init()";
    class Jr {
        constructor() {
            this.eventSubscriber = null;
        }
        static init() {
            return g(function* () {
                const e = new Jr();
                return (e.eventSubscriber = new qr()), yield e.eventSubscriber.initializeHandshake(), e;
            })();
        }
        onUserCount(e, t, r) {
            if (!this.eventSubscriber) throw (Gr.error(Yr), new Error(Yr));
            Gr.info(`Starting user count. AccountId: ${e}, streamName: ${t}`);
            const n = `${e}/${t}`,
                i = Xr++,
                s = { arguments: [[n]], invocationId: i.toString(), streamIds: [], target: "SubscribeViewerCount", type: 1 };
            this.eventSubscriber.subscribe(s),
                this.eventSubscriber.on("message", (e) => {
                    Zr(n, i, e, r);
                });
        }
        stop() {
            this.eventSubscriber.close();
        }
    }
    const Zr = (e, t, r, n) => {
        switch (r.type) {
            case Hr:
                if ("SubscribeViewerCountResponse" === r.target) {
                    var i,
                        s = w(r.arguments);
                    try {
                        for (s.s(); !(i = s.n()).done; ) {
                            const t = i.value,
                                r = t.streamId,
                                s = t.count;
                            if (r === e) {
                                const e = { streamId: r, count: s };
                                Gr.debug("User count changed: ", e), n(e);
                            }
                        }
                    } catch (e) {
                        s.e(e);
                    } finally {
                        s.f();
                    }
                }
                break;
            case Wr:
                if (r.error && r.invocationId === t) {
                    const t = { error: r.error, streamId: e };
                    Gr.error("User count error: ", r.error), n(t);
                }
        }
    };
    function Kr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
                (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
        }
        return r;
    }
    function Qr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? Kr(Object(r), !0).forEach(function (t) {
                      i(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : Kr(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
        }
        return e;
    }
    function en(e, t) {
        var r = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (!r) {
            if (
                Array.isArray(e) ||
                (r = (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return tn(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tn(e, t);
                })(e)) ||
                (t && e && "number" == typeof e.length)
            ) {
                r && (e = r);
                var n = 0,
                    i = function () {};
                return {
                    s: i,
                    n: function () {
                        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                    },
                    e: function (e) {
                        throw e;
                    },
                    f: i,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var s,
            o = !0,
            a = !1;
        return {
            s: function () {
                r = r.call(e);
            },
            n: function () {
                var e = r.next();
                return (o = e.done), e;
            },
            e: function (e) {
                (a = !0), (s = e);
            },
            f: function () {
                try {
                    o || null == r.return || r.return();
                } finally {
                    if (a) throw s;
                }
            },
        };
    }
    function tn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    var rn = (function () {
        function e(t) {
            s(this, e),
                (this.mediaStream = null),
                (this.constraints = { audio: { echoCancellation: !1, channelCount: { ideal: 2 } }, video: { height: 1080, width: 1920 } }),
                t && t.constraints && Object.assign(this.constraints, t.constraints);
        }
        var r, i, o, c, u;
        return (
            a(e, [
                {
                    key: "getDevices",
                    get: function () {
                        return this.getMediaDevices();
                    },
                },
                {
                    key: "getInput",
                    value: function (e) {
                        var t = null;
                        if (!e) return t;
                        if (this.mediaStream) {
                            var r,
                                n = en(this.mediaStream.getTracks());
                            try {
                                for (n.s(); !(r = n.n()).done; ) {
                                    var i = r.value;
                                    if (i.kind === e) {
                                        t = i;
                                        break;
                                    }
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                        }
                        return t;
                    },
                },
                {
                    key: "videoInput",
                    get: function () {
                        return this.getInput("video");
                    },
                },
                {
                    key: "audioInput",
                    get: function () {
                        return this.getInput("audio");
                    },
                },
                {
                    key: "getMedia",
                    value:
                        ((u = t(
                            n.mark(function e() {
                                return n.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.prev = 0), (e.next = 3), navigator.mediaDevices.getUserMedia(this.constraints);
                                                case 3:
                                                    return (this.mediaStream = e.sent), e.abrupt("return", this.mediaStream);
                                                case 7:
                                                    throw ((e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not get Media: ", e.t0, this.constraints), e.t0);
                                                case 11:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this,
                                    [[0, 7]]
                                );
                            })
                        )),
                        function () {
                            return u.apply(this, arguments);
                        }),
                },
                {
                    key: "getMediaDevices",
                    value:
                        ((c = t(
                            n.mark(function e() {
                                var t, r, i, s, o;
                                return n.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    throw new Error("Could not get list of media devices!  This might not be supported by this browser.");
                                                case 2:
                                                    return (e.prev = 2), (t = { audioinput: [], videoinput: [], audiooutput: [] }), (e.next = 6), navigator.mediaDevices.enumerateDevices();
                                                case 6:
                                                    (r = e.sent), (i = en(r));
                                                    try {
                                                        for (i.s(); !(s = i.n()).done; ) (o = s.value), this.addMediaDevicesToList(t, o);
                                                    } catch (e) {
                                                        i.e(e);
                                                    } finally {
                                                        i.f();
                                                    }
                                                    (this.devices = t), (e.next = 16);
                                                    break;
                                                case 12:
                                                    (e.prev = 12), (e.t0 = e.catch(2)), console.error("Could not get Media: ", e.t0), (this.devices = []);
                                                case 16:
                                                    return e.abrupt("return", this.devices);
                                                case 17:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this,
                                    [[2, 12]]
                                );
                            })
                        )),
                        function () {
                            return c.apply(this, arguments);
                        }),
                },
                {
                    key: "addMediaDevicesToList",
                    value: function (e, t) {
                        "default" !== t.deviceId && e[t.kind] && e[t.kind].push(t);
                    },
                },
                {
                    key: "changeVideo",
                    value:
                        ((o = t(
                            n.mark(function e(t) {
                                return n.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), this.changeSource(t, "video");
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        )),
                        function (e) {
                            return o.apply(this, arguments);
                        }),
                },
                {
                    key: "changeAudio",
                    value:
                        ((i = t(
                            n.mark(function e(t) {
                                return n.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.next = 2), this.changeSource(t, "audio");
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        )),
                        function (e) {
                            return i.apply(this, arguments);
                        }),
                },
                {
                    key: "changeSource",
                    value:
                        ((r = t(
                            n.mark(function e(t, r) {
                                return n.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if (t) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    throw new Error("Required id");
                                                case 2:
                                                    return (this.constraints[r] = Qr(Qr({}, this.constraints[r]), {}, { deviceId: { exact: t } })), (e.next = 5), this.getMedia();
                                                case 5:
                                                    return e.abrupt("return", e.sent);
                                                case 6:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        )),
                        function (e, t) {
                            return r.apply(this, arguments);
                        }),
                },
                {
                    key: "muteVideo",
                    value: function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = !1;
                        return this.mediaStream ? ((this.mediaStream.getVideoTracks()[0].enabled = !e), (t = !0)) : console.error("There is no media stream object."), t;
                    },
                },
                {
                    key: "muteAudio",
                    value: function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = !1;
                        return this.mediaStream ? ((this.mediaStream.getAudioTracks()[0].enabled = !e), (t = !0)) : console.error("There is no media stream object."), t;
                    },
                },
            ]),
            e
        );
    })();
    function nn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
                (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
        }
        return r;
    }
    function sn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? nn(Object(r), !0).forEach(function (t) {
                      i(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : nn(Object(r)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
        }
        return e;
    }
    function on(e) {
        var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function () {
            var r,
                n = c(e);
            if (t) {
                var i = c(this).constructor;
                r = Reflect.construct(n, arguments, i);
            } else r = n.apply(this, arguments);
            return f(this, r);
        };
    }
    var an = (function (e) {
        !(function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && d(e, t);
        })(f, e);
        var r,
            i,
            o,
            l = on(f);
        function f(e, t, r) {
            var n;
            return s(this, f), ((n = l.call(this, e.streamName, t, r)).mediaManager = new rn(e)), n;
        }
        return (
            a(
                f,
                [
                    {
                        key: "constraints",
                        get: function () {
                            return this.mediaManager.constraints;
                        },
                        set: function (e) {
                            this.mediaManager.constraints = e;
                        },
                    },
                    {
                        key: "devices",
                        get: function () {
                            return this.mediaManager.getDevices;
                        },
                    },
                    {
                        key: "activeVideo",
                        get: function () {
                            return this.mediaManager.videoInput;
                        },
                    },
                    {
                        key: "activeAudio",
                        get: function () {
                            return this.mediaManager.audioInput;
                        },
                    },
                    {
                        key: "connect",
                        value:
                            ((o = t(
                                n.mark(function e() {
                                    var t,
                                        r = arguments;
                                    return n.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (t = r.length > 0 && void 0 !== r[0] ? r[0] : { bandwidth: 0, disableVideo: !1, disableAudio: !1 }),
                                                            (e.next = 3),
                                                            u(c(f.prototype), "connect", this).call(this, sn(sn({}, t), {}, { mediaStream: this.mediaManager.mediaStream }))
                                                        );
                                                    case 3:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                })
                            )),
                            function () {
                                return o.apply(this, arguments);
                            }),
                    },
                    {
                        key: "getMediaStream",
                        value:
                            ((i = t(
                                n.mark(function e() {
                                    return n.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), (e.next = 3), this.mediaManager.getMedia();
                                                    case 3:
                                                        return e.abrupt("return", e.sent);
                                                    case 6:
                                                        throw ((e.prev = 6), (e.t0 = e.catch(0)), e.t0);
                                                    case 9:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this,
                                        [[0, 6]]
                                    );
                                })
                            )),
                            function () {
                                return i.apply(this, arguments);
                            }),
                    },
                    {
                        key: "destroyMediaStream",
                        value: function () {
                            this.mediaManager.mediaStream = null;
                        },
                    },
                    {
                        key: "updateMediaStream",
                        value: function (e, t) {
                            var r = this;
                            return "audio" === e
                                ? new Promise(function (e, n) {
                                      r.mediaManager
                                          .changeAudio(t)
                                          .then(function (t) {
                                              (r.mediaManager.mediaStream = t), r.isActive() && r.webRTCPeer.replaceTrack(t.getAudioTracks()[0]), e(t);
                                          })
                                          .catch(function (e) {
                                              console.error("Could not update Audio: ", e), n(e);
                                          });
                                  })
                                : "video" === e
                                ? new Promise(function (e, n) {
                                      r.mediaManager
                                          .changeVideo(t)
                                          .then(function (t) {
                                              (r.mediaManager.mediaStream = t), r.isActive() && r.webRTCPeer.replaceTrack(t.getVideoTracks()[0]), e(t);
                                          })
                                          .catch(function (e) {
                                              console.error("Could not update Video: ", e), n(e);
                                          });
                                  })
                                : Promise.reject("Invalid Type: ".concat(e));
                        },
                    },
                    {
                        key: "muteMedia",
                        value: function (e, t) {
                            return "audio" === e ? this.mediaManager.muteAudio(t) : "video" === e && this.mediaManager.muteVideo(t);
                        },
                    },
                ],
                [
                    {
                        key: "build",
                        value:
                            ((r = t(
                                n.mark(function e(t, r) {
                                    var i,
                                        s,
                                        o = arguments;
                                    return n.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (i = !(o.length > 2 && void 0 !== o[2]) || o[2]), (s = new f(t, r, i)), (e.next = 4), s.getMediaStream();
                                                case 4:
                                                    return e.abrupt("return", s);
                                                case 5:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            )),
                            function (e, t) {
                                return r.apply(this, arguments);
                            }),
                    },
                ]
            ),
            f
        );
    })(
        class extends _r {
            constructor(e, t, r = !0) {
                super(e, t, Vr, r);
            }
            connect(e = { mediaStream: null, bandwidth: 0, disableVideo: !1, disableAudio: !1, codec: Cr.H264, simulcast: !1, scalabilityMode: null }) {
                var t = this;
                return g(function* () {
                    if ((Vr.debug("Broadcast option values: ", e), (t.options = e), !e.mediaStream)) throw (Vr.error("Error while broadcasting. MediaStream required"), new Error("MediaStream required"));
                    if (t.isActive()) throw (Vr.warn("Broadcast currently working"), new Error("Broadcast currently working"));
                    let r;
                    try {
                        r = yield t.tokenGenerator();
                    } catch (e) {
                        throw (Vr.error("Error generating token."), e);
                    }
                    if (!r) throw (Vr.error("Error while broadcasting. Publisher data required"), new Error("Publisher data required"));
                    (t.signaling = new xr({ streamName: t.streamName, url: `${r.urls[0]}?token=${r.jwt}` })),
                        yield t.webRTCPeer.getRTCPeer(),
                        De(t.webRTCPeer, t, [Ir]),
                        (t.webRTCPeer.RTCOfferOptions = { offerToReceiveVideo: !e.disableVideo, offerToReceiveAudio: !e.disableAudio });
                    const n = yield t.webRTCPeer.getRTCLocalSDP({ mediaStream: e.mediaStream, simulcast: e.simulcast, codec: e.codec, scalabilityMode: e.scalabilityMode });
                    let i = yield t.signaling.publish(n, e.codec);
                    !e.disableVideo && e.bandwidth > 0 && (i = t.webRTCPeer.updateBandwidthRestriction(i, e.bandwidth)), yield t.webRTCPeer.setRTCRemoteSDP(i), t.setReconnect(), Vr.info("Broadcasting to streamName: ", t.streamName);
                })();
            }
            reconnect() {
                var e, t;
                (this.options.mediaStream = null !== (e = null === (t = this.webRTCPeer) || void 0 === t ? void 0 : t.getTracks()) && void 0 !== e ? e : this.options.mediaStream), super.reconnect();
            }
        }
    );
    window.Logger = L;
    var cn,
        un = process.env.MILLICAST_STREAM_NAME,
        dn = process.env.MILLICAST_ACCOUNT_ID,
        ln = process.env.MILLICAST_PUBLISH_TOKEN,
        fn = !1,
        pn = !1,
        hn = !1;
    document.addEventListener(
        "DOMContentLoaded",
        ((cn = t(
            n.mark(function e(r) {
                var i, s, o, a, c, u, d, l, f, p, h, m, g, v, y, w, b, S, C, E, x, k, T, I, R, A, P, L, O, B, M, N, D, j, U;
                return n.wrap(function (e) {
                    for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                    (U = function () {
                                        var e = document.getElementById("viewerURL"),
                                            t = (e.textContent || e.innerText).trim(),
                                            r = document.createElement("input");
                                        if (
                                            ((r.type = "text"),
                                            (r.readonly = !0),
                                            (r.value = t),
                                            (r.style.position = "fixed"),
                                            (r.style.left = "-9999px"),
                                            document.body.appendChild(r),
                                            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
                                        ) {
                                            console.log("IS iOS!"), r.setAttribute("contenteditable", !0), r.setAttribute("readonly", !1);
                                            var n = document.createRange();
                                            n.selectNodeContents(r);
                                            var i = window.getSelection();
                                            i.removeAllRanges(), i.addRange(n), r.setSelectionRange(0, 999999), r.setAttribute("contenteditable", !1), r.setAttribute("readonly", !0);
                                        } else r.select();
                                        return document.execCommand("copy"), alert("Copied to Clipboard!"), document.body.removeChild(r), !0;
                                    }),
                                    (j = function (e) {
                                        return 0 === e.indexOf("Default - ") && (e = e.split("Default - ").join("")), e;
                                    }),
                                    (D = function () {
                                        console.log("timer start", S), (b = setTimeout(N, S));
                                    }),
                                    (N = function () {
                                        E && E.stop();
                                        for (var e = document.getElementById("publishView"); e.firstChild; ) e.removeChild(e.firstChild);
                                        document.getElementById("thanks").classList.remove("d-none");
                                    }),
                                    (M = function () {
                                        y.classList.add("d-none");
                                        var e = location.href.split("?")[0];
                                        e.indexOf("htm") > -1 && (e = e.substring(0, e.lastIndexOf("/") + 1));
                                        var t = "https://viewer.millicast.com/v2?streamId=".concat(dn, "/").concat(un);
                                        o.removeChild(o.firstChild), (o.innerHTML = t), w.classList.remove("d-none");
                                    }),
                                    (B = function (e) {
                                        fn
                                            ? (M(), c.classList.remove("hidden"), a.classList.add("hidden"), (d.disabled = !0), (x.disabled = !1), b || D(), showGuide && (showGuide("guide1", !1), showGuide("guide2", !0)))
                                            : (c.classList.add("hidden"), a.classList.remove("hidden"), (d.disabled = !1));
                                    }),
                                    (O = function (e) {
                                        ("mic" !== e && e) || (micListBtn.innerHTML = "<p>" + j(E.activeAudio.label) + '</p><span class="boxCover"></span>'),
                                            ("cam" !== e && e) || (camListBtn.innerHTML = "<p>" + j(E.activeVideo.label) + '</p><span class="boxCover"></span>');
                                    }),
                                    (L = function (e) {
                                        for (var t = e.audioinput; p.firstChild; ) p.removeChild(p.firstChild);
                                        t.length > 0 &&
                                            t.forEach(function (e) {
                                                var t = document.createElement("button");
                                                (t.innerHTML = e.label), (t.classList = "dropdown-item use-hand"), (t.id = e.deviceId), p.appendChild(t);
                                            });
                                        for (var r = e.videoinput; l.firstChild; ) l.removeChild(l.firstChild);
                                        r.length > 0 &&
                                            r.forEach(function (e) {
                                                var t = document.createElement("button");
                                                (t.innerHTML = e.label), (t.classList = "dropdown-item use-hand"), (t.id = e.deviceId), l.appendChild(t);
                                            }),
                                            O();
                                    }),
                                    (P = function () {
                                        return (P = t(
                                            n.mark(function e() {
                                                var r, a;
                                                return n.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (
                                                                        (x.innerHTML = 0 === k ? "Maximum Bitrate" : "".concat(k, " kbps")),
                                                                        0 !== k && I(),
                                                                        v.forEach(function (e) {
                                                                            e.classList.add("btn"), e.addEventListener("click", I);
                                                                        }),
                                                                        (r = { channelCount: { ideal: 2 }, echoCancellation: !1 }),
                                                                        console.log("constraints audio:", r, " disableAudio:", r),
                                                                        (E.mediaManager.constraints = {
                                                                            audio: r,
                                                                            video: { width: { min: 640, max: 1280, ideal: 1280 }, height: { min: 480, max: 720, ideal: 720 }, frameRate: { min: 10, max: 60, ideal: 24 } },
                                                                        }),
                                                                        (e.prev = 8),
                                                                        (e.next = 11),
                                                                        E.getMediaStream()
                                                                    );
                                                                case 11:
                                                                    return (i.srcObject = e.sent), (e.next = 14), E.devices;
                                                                case 14:
                                                                    (a = e.sent), L(a), (e.next = 21);
                                                                    break;
                                                                case 18:
                                                                    (e.prev = 18), (e.t0 = e.catch(8)), console.error(e.t0);
                                                                case 21:
                                                                    d.addEventListener(
                                                                        "click",
                                                                        (function () {
                                                                            var e = t(
                                                                                n.mark(function e(t) {
                                                                                    return n.wrap(function (e) {
                                                                                        for (;;)
                                                                                            switch ((e.prev = e.next)) {
                                                                                                case 0:
                                                                                                    return (e.next = 2), T();
                                                                                                case 2:
                                                                                                case "end":
                                                                                                    return e.stop();
                                                                                            }
                                                                                    }, e);
                                                                                })
                                                                            );
                                                                            return function (t) {
                                                                                return e.apply(this, arguments);
                                                                            };
                                                                        })()
                                                                    ),
                                                                        l.addEventListener(
                                                                            "click",
                                                                            (function () {
                                                                                var e = t(
                                                                                    n.mark(function e(t) {
                                                                                        var r;
                                                                                        return n.wrap(
                                                                                            function (e) {
                                                                                                for (;;)
                                                                                                    switch ((e.prev = e.next)) {
                                                                                                        case 0:
                                                                                                            return (e.prev = 0), (r = t.target), (e.next = 4), E.updateMediaStream("video", r.id);
                                                                                                        case 4:
                                                                                                            (i.srcObject = e.sent), O("cam"), (e.next = 12);
                                                                                                            break;
                                                                                                        case 8:
                                                                                                            (e.prev = 8), (e.t0 = e.catch(0)), console.log("*index*  new stream failed ", e.t0), alert("Failed to update.", e.t0);
                                                                                                        case 12:
                                                                                                        case "end":
                                                                                                            return e.stop();
                                                                                                    }
                                                                                            },
                                                                                            e,
                                                                                            null,
                                                                                            [[0, 8]]
                                                                                        );
                                                                                    })
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        ),
                                                                        f.addEventListener("click", function (e) {
                                                                            if (E.muteMedia("video", !pn)) {
                                                                                pn = !pn;
                                                                                var t = document.querySelector("#camOnIcon");
                                                                                pn ? t.classList.add("fa-video-slash") : t.classList.remove("fa-video-slash");
                                                                            }
                                                                        }),
                                                                        p.addEventListener(
                                                                            "click",
                                                                            (function () {
                                                                                var e = t(
                                                                                    n.mark(function e(t) {
                                                                                        var r;
                                                                                        return n.wrap(
                                                                                            function (e) {
                                                                                                for (;;)
                                                                                                    switch ((e.prev = e.next)) {
                                                                                                        case 0:
                                                                                                            return (e.prev = 0), (r = t.target), (e.next = 4), E.updateMediaStream("audio", r.id);
                                                                                                        case 4:
                                                                                                            (i.srcObject = e.sent), O("mic"), (e.next = 11);
                                                                                                            break;
                                                                                                        case 8:
                                                                                                            (e.prev = 8), (e.t0 = e.catch(0)), console.log("*index*  new stream failed ", e.t0);
                                                                                                        case 11:
                                                                                                        case "end":
                                                                                                            return e.stop();
                                                                                                    }
                                                                                            },
                                                                                            e,
                                                                                            null,
                                                                                            [[0, 8]]
                                                                                        );
                                                                                    })
                                                                                );
                                                                                return function (t) {
                                                                                    return e.apply(this, arguments);
                                                                                };
                                                                            })()
                                                                        ),
                                                                        h.addEventListener("click", function (e) {
                                                                            if (E.muteMedia("audio", !hn)) {
                                                                                hn = !hn;
                                                                                var t = document.querySelector("#micOnIcon");
                                                                                hn ? t.classList.add("fa-microphone-slash") : t.classList.remove("fa-microphone-slash");
                                                                            }
                                                                        }),
                                                                        m.addEventListener("click", function () {
                                                                            U(), showGuide("guide2", !1);
                                                                        }),
                                                                        o.addEventListener("click", function (e) {
                                                                            if (s) return U();
                                                                            var t = (o.textContent || o.innerText).trim();
                                                                            if (0 === t.length || "https://" === t || "Must broadcast first" === t) return alert("You need to start a broadcast first."), !1;
                                                                            window.open(t, "_blank");
                                                                        }),
                                                                        g.addEventListener("click", function (e) {
                                                                            window.location = "https://millicast.com/pricing/";
                                                                        });
                                                                case 29:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    null,
                                                    [[8, 18]]
                                                );
                                            })
                                        )).apply(this, arguments);
                                    }),
                                    (A = function () {
                                        return P.apply(this, arguments);
                                    }),
                                    (R = function (e) {
                                        (fn = !1), console.log("Failed to set session description: " + e.toString());
                                    }),
                                    $(".privy-popup-container, .privy-popup-content-wrap").click(function (e) {
                                        return !1;
                                    }),
                                    (i = document.querySelector("video")),
                                    (s = window.mobilecheck =
                                        ((r = void 0),
                                        (_ = void 0),
                                        (_ = !1),
                                        (r = navigator.userAgent || navigator.vendor || window.opera),
                                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                                            r
                                        ) ||
                                            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                                                r.substr(0, 4)
                                            )) &&
                                            (_ = !0),
                                        _)) || i.setAttribute("class", "vidWinBrowser"),
                                    (o = document.getElementById("viewerURL")),
                                    (a = document.getElementById("readyBadge")),
                                    (c = document.getElementById("liveBadge")),
                                    (u = document.getElementById("userCount")),
                                    (d = document.getElementById("publishBtn")),
                                    (l = document.getElementById("camList")),
                                    (f = document.getElementById("camMuteBtn")),
                                    (p = document.getElementById("micList")),
                                    (h = document.getElementById("micMuteBtn")),
                                    (m = document.getElementById("copyBtn")),
                                    document.getElementById("ctrlUI"),
                                    document.getElementById("shareView"),
                                    (g = document.getElementById("signUpBtn")),
                                    (v = document.querySelectorAll("#bandwidthMenu>.dropdown-item")),
                                    (y = document.getElementById("publishSection")),
                                    (w = document.getElementById("shareSection")),
                                    (S = 3e5),
                                    (e.next = 32),
                                    Jr.init()
                                );
                            case 32:
                                return (
                                    e.sent.onUserCount(dn, un, function (e) {
                                        var t = e.count;
                                        u.innerHTML = t;
                                    }),
                                    (C = function () {
                                        return Ur.getPublisher(ln, un);
                                    }),
                                    (e.next = 40),
                                    an.build({ streamName: un }, C, !0)
                                );
                            case 40:
                                (E = e.sent),
                                    (x = document.querySelector("#bandwidthMenuButton")),
                                    (k = 0),
                                    (T = (function () {
                                        var e = t(
                                            n.mark(function e() {
                                                return n.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (e.prev = 0), (e.next = 3), E.connect({ bandwidth: k, codec: "h264" });
                                                                case 3:
                                                                    (fn = !0), B(), (e.next = 13);
                                                                    break;
                                                                case 7:
                                                                    (e.prev = 7), (e.t0 = e.catch(0)), console.log(e.t0), (fn = !1), B(), R(e.t0);
                                                                case 13:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    null,
                                                    [[0, 7]]
                                                );
                                            })
                                        );
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()),
                                    (I = (function () {
                                        var e = t(
                                            n.mark(function e(t) {
                                                return n.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    if (((x.disabled = !0), (k = t.target.dataset.rate), (x.innerHTML = 0 === k ? "Maximum Bitrate" : "".concat(k, " kbps")), E.isActive())) {
                                                                        e.next = 7;
                                                                        break;
                                                                    }
                                                                    (x.disabled = !1), (e.next = 16);
                                                                    break;
                                                                case 7:
                                                                    return (e.prev = 7), (e.next = 10), E.webRTCPeer.updateBitrate(k);
                                                                case 10:
                                                                    console.log("Bitrate updated"), (e.next = 16);
                                                                    break;
                                                                case 13:
                                                                    (e.prev = 13), (e.t0 = e.catch(7)), R(e.t0);
                                                                case 16:
                                                                    x.disabled = !1;
                                                                case 17:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    null,
                                                    [[7, 13]]
                                                );
                                            })
                                        );
                                        return function (t) {
                                            return e.apply(this, arguments);
                                        };
                                    })()),
                                    A();
                            case 46:
                            case "end":
                                return e.stop();
                        }
                    var r, _;
                }, e);
            })
        )),
        function (e) {
            return cn.apply(this, arguments);
        })
    );
});
