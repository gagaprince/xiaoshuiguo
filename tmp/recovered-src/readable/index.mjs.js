(function (t) {
  qs && (Tu = "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", Iu = "、", Ru = "", Eu = "https://api.datanexus.qq.com/data-nexus-cgi/miniprogram"), qs && ys && (Ki += rr), qs && (Ru = "Sign-Value"), qs && ps && (Ki += "TE_COMMON_CONFIG"), qs = 0;
  var cclegacy;
  return function () {
    var r;
    Ks && Ss && (Ru += Ur), Ks = 0;
    var i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      /**
       * @dn-sdk/minigame v1.5.8
       * (c) 2026
       * @license ISC
       */
      function Et(t, n, r) {
        var i = t[n];
        t[n] = t[r], t[r] = i;
      }
      var Dt = 36,
        Nt = [0],
        Pt = [1, 0],
        Gt = [4, 3, 2, 0, 1],
        Ot = [3],
        Ht = 1,
        Vt = [1, 0, 6, 3, 5, 7, 2, 4, 9, 8],
        Wt = [3],
        Jt = [2, 1, 0],
        jt = 0;
      Dt = 41, ps && Et(Pt, 0, 1), ds && Et(Pt, 1, 0), xs && Et(Gt, 3, 2), Et(Gt, 0, 4), Ot = [1, 2, 0, 4, 3], Ht += 10, Rs && (Ht += 7), As && Et(Vt, 8, 0), Et(Vt, 5, 9), Wt = [7, 1, 0, 3, 4, 5, 6, 8, 2], Fu(160 / 3) >= Fu(Bu((Ou(Ju) + Ou(32) + Ou(hs)) / 3)) && Et(Jt, 1, 2), jt = 0;
      for (var qt, Kt, Yt, Xt, Zt, Qt, tn, nn, rn, en, an, un, sn, on, cn, fn, hn, vn, ln, bn, dn, kn, mn, pn, gn, yn, wn, _n, Mn, Sn, An, Cn, xn, Tn, Ln, In, Rn, En, Dn, Nn, Pn, Gn, On, Fn, Bn, zn, Un, Hn, Vn, Wn, Jn, jn, qn, Kn, Yn, Xn, Zn, Qn, $n, tr, nr, rr, ir, er, ar, ur, sr, or, cr, fr, hr, vr, lr, br, dr, kr, mr, pr, gr, yr, wr, _r, Mr, Sr, Ar, Cr = Dt, xr = Ot.slice(0), Tr = Wt.slice(0), Lr = jt, Ir = 0, Rr = Cr; Ir < 52;) {
        var Er = 0;
        switch (Er += 1, ++Ir, Rr) {
          case 21:
            Rr = 48;
            break;
          case 26:
            gr = function (t, n) {
              return (gr = Object.setPrototypeOf ? Object.setPrototypeOf["bind"]() : function (t, n) {
                return t["__proto__"] = n, t;
              })(t, n);
            }, Rr = 43;
            break;
          case 37:
            Rr = 42;
            break;
          case 39:
            Rr = 2;
            break;
          case 47:
            pr = function (t, n) {
              if ("function" != Du(n) && null !== n) throw new TypeError("Super expression must either be null or a function");
              t.prototype = Object["create"](n && n.prototype, function () {
                var n, r;
                return (r = Pu({}, "constructor", 0)).constructor = (Pu(n = {}, "value", t), Pu(n, "writable", !0), Pu(n, "configurable", !0), n), r;
              }["apply"]()), Object["defineProperty"](t, "prototype", Pu({}, "writable", !1)), n && gr(t, n);
            }, Rr = 26;
            break;
          case 48:
            Rr = 51;
            break;
          case 45:
            Sr = function (t) {
              try {
                t();
              } catch (t) {
                Kn(t);
              }
            }, Rr = 40;
            break;
          case 13:
            yr = function (t) {
              return (yr = "function" == ("undefined" == typeof Symbol ? "undefined" : Du(Symbol)) && "symbol" == Du(Symbol["iterator"]) ? function (t) {
                return Du(t);
              } : function (t) {
                return t && "function" == ("undefined" == typeof Symbol ? "undefined" : Du(Symbol)) && t["constructor"] === Symbol && t !== Symbol["prototype"] ? "symbol" : Du(t);
              })(t);
            }, Rr = 5;
            break;
          case 23:
            cclegacy._RF["push"]({}, "6402fTTRW9Gf6vK/V/OdgSl", "index", void 0), Rr = 41;
            break;
          case 38:
            ir = function (t, n, r, i) {
              try {
                if (!xi || null == t || !t[n]) return;
                t[n] = new xi(t[n], function () {
                  var t;
                  return (t = Pu({}, "apply", 0)).apply = function (t, n, e) {
                    var a, u, s, o;
                    return i && Sr(function () {
                      return i["apply"](void 0, nr(e));
                    }), (a = !!(null != (s = e[0]) && s.success || null != (o = e[0]) && o.fail)) && ["success", "fail"]["forEach"](function (t) {
                      if (e[0][t]) try {
                        e[0][t] = new xi(e[0][t], function () {
                          var n;
                          return (n = function () {
                            var t;
                            return (t = Pu({}, "apply", 0)).apply = 0, t;
                          }.apply()).apply = function (n, i, a) {
                            return Sr(function () {
                              return r["apply"](void 0, [t, e[0]]["concat"](nr(a)));
                            }), n["apply"](i, a);
                          }, n;
                        }["apply"]());
                      } catch (t) {
                        Kn(t);
                      }
                    }), u = t["apply"](n, e), !a && u && "[object Promise]" === Object["prototype"]["toString"]["call"](u) ? u["then"](function (t) {
                      return Sr(function () {
                        return r("success", e[0], t);
                      }), t;
                    })["catch"](function (t) {
                      throw Sr(function () {
                        return r("fail", e[0], t);
                      }), t;
                    }) : u;
                  }, t;
                }["apply"]());
              } catch (t) {
                Kn(t);
              }
            }, Rr = 6;
            break;
          case 1:
            nr = function (t) {
              return function (t) {
                if (Array["isArray"](t)) return vr(t);
              }(t) || function (t) {
                if ("undefined" != ("undefined" == typeof Symbol ? "undefined" : Du(Symbol)) && null != t[Symbol["iterator"]] || null != t["@@iterator"]) return Array["from"](t);
              }(t) || tr(t) || function () {
                throw new TypeError(Bi);
              }();
            }, Rr = 29;
            break;
          case 40:
            Kn = function (t) {
              mr(function () {
                var n, r;
                return Pu(n = {}, "log_type", 0), Pu(n, "message", 0), Pu(n, "err_stack", 0), (r = n).log_type = "PROXY_ERROR", r.message = null == t ? void 0 : t.message, r.err_stack = null == t ? void 0 : t["stack"], r;
              }["apply"]());
            }, Rr = 36;
            break;
          case 15:
            _r = function (t, n) {
              for (var e = 0; e < n["length"]; e++) {
                var a;
                (a = n[e]).enumerable = a.enumerable || !1, a["configurable"] = !0, "value" in a && (a["writable"] = !0), Object["defineProperty"](t, or(a["key"]), a);
              }
            }, Rr = 27;
            break;
          case 50:
            Rr = 28;
            break;
          case 9:
            dr = function (t, n, r, i) {
              var e, a, u, s, o, c, f;
              (s = null == t ? void 0 : t["statusCode"], o = null == (c = null == t ? void 0 : t.data) ? void 0 : c["code"], 200 !== s || 0 !== o) ? (f = o, 200 !== s && (f = "number" == Du(s) ? -1 * s : -888), mr(function () {
                var n, i;
                return Pu(n = {}, "log_type", 0), Pu(n, "message", 0), Pu(n, "code", 0), (i = n).log_type = "REQUEST_CONFIG_ERROR", i.message = "cgiName: ".concat(r, ", statusCode: ").concat(s, ", code: ").concat(o, ", traceid: ").concat(null == (u = null == t ? void 0 : t["data"]) ? void 0 : u["trace_id"]), i.code = f, i;
              }["apply"]()), null == i || i(null == (e = null == t ? void 0 : t.data) ? void 0 : e.data)) : n(null == (a = t.data) ? void 0 : a.data);
            }, Rr = 16;
            break;
          case 33:
            Yn = function () {
              var t, n;
              return t = new Date()["getTime"](), n = Math["abs"](1000 * (t - wi)), "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx"["replace"](/[xy]/g, function (r) {
                var i;
                return i = 16 * Math["random"](), t > 0 ? (i = (t + i) % 16 | 0, t = Math.floor(t / 16)) : (i = (n + i) % 16 | 0, n = Math.floor(n / 16)), (At === r ? i : 3 & i | 8)["toString"](16)["replace"](/-/g, "");
              });
            }, Rr = 22;
            break;
          case 17:
            Qn = function (t, n) {
              return Object["prototype"]["hasOwnProperty"]["call"](t, n);
            }, Rr = 46;
            break;
          case 2:
            Rr = 50;
            break;
          case 27:
            fr = function (t, n, r) {
              return n && _r(t.prototype, n), r && _r(t, r), Object["defineProperty"](t, "prototype", Pu({}, "writable", !1)), t;
            }, Rr = 11;
            break;
          case 0:
            Rr = 37;
            break;
          case 25:
            hr = function (t, n) {
              try {
                if (0 === t.length) return n.length;
                if (0 === n.length) return t.length;
                for (var u = [], s = 0; s <= n.length; s++) u[s] = [s];
                for (var o = 0; o <= t.length; o++) u[0][o] = o;
                for (var c = 1; c <= n.length; c++) for (var f = 1; f <= t.length; f++) n.charAt(c - 1) === t.charAt(f - 1) ? u[c][f] = u[c - 1][f - 1] : u[c][f] = Math["min"](u[c - 1][f - 1] + 1, u[c][f - 1] + 1, u[c - 1][f] + 1);
                return u[n.length][t.length];
              } catch (t) {
                Si["error"](t);
              }
            }, Rr = 8;
            break;
          case 49:
            mr = function (t, n) {
              try {
                var e, a, u, s;
                e = ni(), a = oi(), s = function () {
                  for (var t, n, C = 0, x = Er; C < 14;) switch (++C, x) {
                    case 13:
                      n.sdk_name = "@dn-sdk/minigame", x = 9;
                      break;
                    case 2:
                      n.wx_lib_version = null == e ? void 0 : e.wx_lib_version, x = 5;
                      break;
                    case 0:
                      return n;
                    case 10:
                      n.os = null == e ? void 0 : e.os, x = 12;
                      break;
                    case 11:
                      n.appid = null == a ? void 0 : a["appId"], x = 0;
                      break;
                    case 8:
                      n.env_version = null == a ? void 0 : a["envVersion"], x = 11;
                      break;
                    case 6:
                      n.device_model = null == e ? void 0 : e.device_model, x = 7;
                      break;
                    case 9:
                      n.device_brand = null == e ? void 0 : e.device_brand, x = 6;
                      break;
                    case 1:
                      Pu(t = {}, "sdk_version", 0), Pu(t, "sdk_name", 0), Pu(t, "device_brand", 0), Pu(t, "device_model", 0), Pu(t, "wx_version", 0), Pu(t, "wx_lib_version", 0), Pu(t, "wx_platform", 0), Pu(t, "os", 0), Pu(t, "os_version", 0), Pu(t, "local_id", 0), Pu(t, "env_version", 0), Pu(t, "appid", 0), n = t, x = 4;
                      break;
                    case 12:
                      n.os_version = null == e ? void 0 : e.os_version, x = 3;
                      break;
                    case 5:
                      n.wx_platform = null == e ? void 0 : e.wx_platform, x = 10;
                      break;
                    case 3:
                      n.local_id = ri(), x = 8;
                      break;
                    case 7:
                      n.wx_version = null == e ? void 0 : e.wx_version, x = 2;
                      break;
                    case 4:
                      n.sdk_version = "1.5.8", x = 13;
                  }
                }.apply(), u = Object["assign"](s, t), wx["request"](function () {
                  var t, r;
                  return Pu(t = {}, "url", 0), Pu(t, "data", 0), Pu(t, "method", 0), Pu(t, "timeout", 0), Pu(t, "success", 0), (r = t).url = "https://api.datanexus.qq.com/data-nexus-trace/log", r.data = u, r.method = "POST", r.timeout = Hr["requestTimeout"], r.success = function (t) {
                    "function" == Du(n) && 200 === (null == t ? void 0 : t["statusCode"]) && n();
                  }, r;
                }.apply());
              } catch (t) {
                Si["error"](t);
              }
            }, Rr = 32;
            break;
          case 24:
            Rr = 10;
            break;
          case 5:
            Zn = function (t, n) {
              if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
            }, Rr = 15;
            break;
          case 14:
            er = function (t, n) {
              try {
                t["is_sdk_auto_track"] || (function (t) {
                  try {
                    var u;
                    if (!(u = Ae["getActionList"]())["includes"](t)) {
                      var s, o;
                      o = function (t, n) {
                        var r, i, e, a;
                        if (!(r = "undefined" != ("undefined" == typeof Symbol ? "undefined" : Du(Symbol)) && t[Symbol["iterator"]] || t["@@iterator"])) {
                          var o, c;
                          if (Array["isArray"](t) || (r = tr(t))) return r && (t = r), c = 0, o = function () {}, function () {
                            var n, r;
                            return Pu(n = {}, bi, 0), Pu(n, zi, 0), Pu(n, zt, 0), Pu(n, Ut, 0), (r = n).s = o, r.n = function () {
                              var n;
                              return c >= t["length"] ? function () {
                                var t;
                                return (t = function () {
                                  var t;
                                  return (t = Pu({}, "done", 0)).done = 0, t;
                                }["apply"]())["done"] = !0, t;
                              }["apply"]() : (Pu(n = {}, "done", !1), Pu(n, "value", t[c++]), n);
                            }, r.e = function (t) {
                              throw t;
                            }, r.f = o, r;
                          }.apply();
                          throw new TypeError(Tu);
                        }
                        return i = !0, a = !1, function () {
                          var n, u;
                          return Pu(n = {}, bi, 0), Pu(n, zi, 0), Pu(n, zt, 0), Pu(n, Ut, 0), (u = n).s = function () {
                            r = r["call"](t);
                          }, u.n = function () {
                            var t;
                            return t = r["next"](), i = t["done"], t;
                          }, u.e = function (t) {
                            a = !0, e = t;
                          }, u.f = function () {
                            try {
                              i || null == r.return || r.return();
                            } finally {
                              if (a) throw e;
                            }
                          }, u;
                        }.apply();
                      }(u);
                      try {
                        for (o.s(); !(s = o.n())["done"];) {
                          var c;
                          if (c = s["value"], hr(c, t) <= parseInt((.3 * c["length"])["toString"]())) {
                            Si["warn"]("通过SDK上报的".concat(t, "行为名称可能有误，请检查该行为类型是否为腾讯广告提供的标准行为！").concat("（如果确认无误，请忽略该提示）"));
                            break;
                          }
                        }
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                    }
                  } catch (t) {
                    Si["error"](t);
                  }
                }(t["action_type"]), "minigame" === n ? function (t, n) {
                  var r, i, e;
                  try {
                    ["PURCHASE", "ADD_TO_CART"]["includes"](t.action_type) && t.action_param && Qn(t.action_param, "value") && ("number" != Du(null == (r = t.action_param) ? void 0 : r.value) ? Si.warn("通过SDK上报的".concat(t.action_type, "行为携带的金额参数需要为数字！")) : (null == (i = t.action_param) ? void 0 : i.value) <= 0 ? Si.warn("通过SDK上报的".concat(t.action_type, "行为携带的金额参数需要大于0！")) : "minigame" === n && (null == (e = t.action_param) ? void 0 : e.value) < 100 && Si.warn("通过SDK上报的".concat(t.action_type, "行为携带的金额参数可能有误，金额的单位为‘分’，请检查金额是否正确！").concat("（如果确认无误，请忽略该提示）")));
                  } catch (t) {
                    Si["error"](t);
                  }
                }(t, n) : "miniprogram" === n && function (t) {
                  try {
                    var s, o;
                    s = null == t ? void 0 : t["action_type"], o = (null == t ? void 0 : t["action_param"]) || {}, "PURCHASE" === s && Qn(o, "value") && ("number" != Du(null == o ? void 0 : o.value) ? Si.warn("通过SDK上报的".concat(s, "行为携带的金额参数需要为数字！")) : (null == o ? void 0 : o.value) <= 0 && Si.warn("通过SDK上报的".concat(s, "行为携带的金额参数需要大于0！")));
                  } catch (t) {
                    Si["error"](t);
                  }
                }(t));
              } catch (t) {
                Si["error"](t);
              }
            }, Rr = 25;
            break;
          case 16:
            Jn = function (t, n, r) {
              mr(function () {
                var r, i;
                return Pu(r = {}, "log_type", 0), Pu(r, "message", 0), Pu(r, "code", 0), (i = r).log_type = "REQUEST_CONFIG_ERROR", i.message = "cgiName: ".concat(n, " , message: ").concat(null == t ? void 0 : t["errMsg"], Ui), i.code = "number" == Du(null == t ? void 0 : t.errno) ? -1 * t.errno : -999, i;
              }["apply"]()), null == r || r(t);
            }, Rr = 7;
            break;
          case 31:
            vr = function (t, n) {
              (null == n || n > t.length) && (n = t.length);
              for (var i = 0, e = new Array(n); i < n; i++) e[i] = t[i];
              return e;
            }, Rr = 47;
            break;
          case 51:
            Rr = 18;
            break;
          case 11:
            or = function (t) {
              var n;
              return n = function (t, n) {
                var r;
                if ("object" !== yr(t) || null === t) return t;
                if (void 0 !== (r = t[Symbol["toPrimitive"]])) {
                  var a;
                  if (a = r["call"](t, n), "object" !== yr(a)) return a;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(t);
              }(t, "string"), "symbol" === yr(n) ? n : String(n);
            }, Rr = 19;
            break;
          case 6:
            kr = function (t, n, r) {
              try {
                if (!xi || null == t || !t[n]) return;
                t[n] = new xi(t[n], function () {
                  var t;
                  return (t = Pu({}, "apply", 0)).apply = function (t, n, i) {
                    var e, a;
                    if (a = "function" == Du(i[0])) try {
                      i[0] = new xi(i[0], function () {
                        var t;
                        return (t = function () {
                          var t;
                          return (t = Pu({}, "apply", 0)).apply = 0, t;
                        }.apply()).apply = function (t, n, i) {
                          var e;
                          return e = t["call"]["apply"](t, [n]["concat"](nr(i))), Sr(function () {
                            return r(e);
                          }), e;
                        }, t;
                      }.apply());
                    } catch (t) {
                      Kn(t);
                    }
                    return e = t["call"].apply(t, [n]["concat"](nr(i))), a || Sr(function () {
                      return r(e);
                    }), e;
                  }, t;
                }["apply"]());
              } catch (t) {
                Kn(t);
              }
            }, Rr = 34;
            break;
          case 8:
            Mr = function (t) {
              try {
                t && !/^[a-zA-Z0-9_\-]+$/["test"](t) && Si["warn"]("通过SDK上报的openid：".concat(t, "可能有误，请检查openid是否正确！").concat("（如果确认无误，请忽略该提示）"));
              } catch (t) {
                Si["error"](t);
              }
            }, Rr = 21;
            break;
          case 46:
            lr = function (t, n, r) {
              var i;
              return i = r.value, r.value = function () {
                for (var r, f = (r = arguments)["length"], h = new Array(f), v = 0; v < f; v++) h[v] = r[v];
                try {
                  return i.apply(this, h);
                } catch (a) {
                  try {
                    var l;
                    Si.error.apply(Si, ["calling ".concat(t["constructor"]["name"], Hi).concat(n, " error with arguments")].concat(h)), Si.error(a), l = function () {
                      var r, i;
                      return Pu(r = {}, "log_type", 0), Pu(r, "message", 0), Pu(r, "err_stack", 0), (i = r).log_type = "JS_RUN_ERROR", i.message = "[safeExcutable] ".concat(t["constructor"]["name"], Hi).concat(n, ": ").concat(null == a ? void 0 : a.message), i.err_stack = null == a ? void 0 : a["stack"], i;
                    }.apply(), yi(this.reportLog) ? this.reportLog(l) : mr(l);
                  } catch (t) {}
                }
              }, r;
            }, Rr = 3;
            break;
          case 43:
            qn = function (t) {
              var n;
              return n = function () {
                if ("undefined" == ("undefined" == typeof Reflect ? "undefined" : Du(Reflect)) || !Reflect.construct) return !1;
                if (Reflect.construct["sham"]) return !1;
                if ("function" == ("undefined" == typeof Proxy ? "undefined" : Du(Proxy))) return !0;
                try {
                  return Boolean["prototype"]["valueOf"]["call"](Reflect.construct(Boolean, [], function () {})), !0;
                } catch (t) {
                  return !1;
                }
              }(), function () {
                var r, i, e, a;
                (r = arguments, e = jn(t), n) ? (a = jn(this)["constructor"], i = Reflect["construct"](e, r, a)) : i = e["apply"](this, r);
                return Wn(this, i);
              };
            }, Rr = 12;
            break;
          case 36:
            rr = function (t) {
              var n, r, i, e, a;
              if (a = "", e = null == t ? void 0 : t["appid"], r = null == t ? void 0 : t["secret_key"], n = null == t ? void 0 : t["sdk_version"], i = null == t ? void 0 : t["timestamp"], !(e && r && n && i && 32 === r["length"])) return a;
              for (var o = Gi(n + e + i), c = 0; c < 32; c++) a += c % 2 == 0 ? r[c] : o[c];
              return a;
            }, Rr = 14;
            break;
          case 3:
            $n = function (t) {
              return t && t["__esModule"] && Object["prototype"]["hasOwnProperty"]["call"](t, "default") ? t.default : t;
            }, Rr = 38;
            break;
          case 4:
            cr = function (t) {
              if (void 0 === t) throw new ReferenceError(Vi);
              return t;
            }, Rr = 35;
            break;
          case 10:
            Rr = 39;
            break;
          case 29:
            tr = function (t, n) {
              var r;
              if (t) return "string" == Du(t) ? vr(t, n) : (r = Object["prototype"]["toString"]["call"](t)["slice"](8, -1), "Object" === r && t.constructor && (r = t.constructor["name"]), "Map" === r || "Set" === r ? Array["from"](t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](r) ? vr(t, n) : void 0);
            }, Rr = 31;
            break;
          case 34:
            br = function (t) {
              var n, r, i, e, a;
              n = (i = arguments).length > 1 && void 0 !== i[1] ? i[1] : "", r = i.length > 2 ? i[2] : void 0, a = i.length > 3 && void 0 !== i[3] ? i[3] : [], e = i.length > 4 ? i[4] : void 0;
              try {
                if (!xi || null == t || !t[n]) return;
                t[n] = new xi(t[n], function () {
                  var t;
                  return (t = Pu({}, "apply", 0)).apply = function (t, i, u) {
                    var s;
                    return s = t["call"]["apply"](t, [i]["concat"](nr(u))), (!r || !Li[n]) && (Sr(function () {
                      return null == e ? void 0 : e(s);
                    }), a["forEach"](function (t) {
                      var n, r, i;
                      i = t["eventName"], r = t["isAsync"], n = t["proxyEvent"], r ? ir(s, i, n) : kr(s, i, n);
                    })), r && (Li[n] = !0), s;
                  }, t;
                }["apply"]());
              } catch (t) {
                Kn(t);
              }
            }, Rr = 45;
            break;
          case 32:
            ur = function (t) {
              return new Promise(function (n, r) {
                wx["request"](function () {
                  var i, e;
                  return Pu(i = {}, "method", 0), Pu(i, "url", 0), Pu(i, "data", 0), Pu(i, "timeout", 0), Pu(i, "success", 0), Pu(i, "fail", 0), (e = i).method = "POST", e.url = Wi, e.data = t, e.timeout = Hr["requestTimeout"], e.success = function (t) {
                    dr(t, n, "config/get", r), Ar(t);
                  }, e.fail = function (t) {
                    Jn(t, "config/get", r);
                  }, e;
                }["apply"]());
              });
            }, Rr = 9;
            break;
          case 20:
            Rr = 24;
            break;
          case 18:
            Rr = 20;
            break;
          case 19:
            Xn = function (t) {
              var n, r;
              return n = null == t ? void 0 : t["query"], pi(n) ? (r = "", n["gdt_vid"] || [1045, 1046, 1084].indexOf(null == t ? void 0 : t.scene) > -1 ? r = "TENCENT" : n["clue_token"] || n["clickid"] && n["item_id"] ? r = "BYTEDANCE" : n.callback && "kuaishou" === n["ksChannel"] ? r = "KUAISHOU" : n["bd_vid"] || n["ai"] && n.d && n.q && n.c ? r = "BAIDU" : n["uctrackid"] ? r = "ALIBABA" : (n["trackid"] || n["imp"] || [1065, 1069, 1194].indexOf(null == t ? void 0 : t.scene) > -1 && (n.callback || n.u)) && (r = "OTHERS"), r) : "";
            }, Rr = 49;
            break;
          case 35:
            jn = function (t) {
              return (jn = Object["setPrototypeOf"] ? Object["getPrototypeOf"]["bind"]() : function (t) {
                return t["__proto__"] || Object["getPrototypeOf"](t);
              })(t);
            }, Rr = 13;
            break;
          case 7:
            Ar = function (t) {
              var n, r;
              (r = 1 * (null == (n = null == t ? void 0 : t["header"]) ? void 0 : n["Server-Time"])) > 1726675200000 && vi["revise"](r);
            }, Rr = 33;
            break;
          case 12:
            Wn = function (t, n) {
              if (n && ("object" === yr(n) || "function" == Du(n))) return n;
              if (void 0 !== n) throw new TypeError(qi);
              return cr(t);
            }, Rr = 4;
            break;
          case 22:
            wr = function (t) {
              return sr()[t];
            }, Rr = 30;
            break;
          case 42:
            Rr = 44;
            break;
          case 41:
            ar = function (t, n, r) {
              var i;
              return (n = or(n)) in t ? Object["defineProperty"](t, n, (Pu(i = {}, "value", r), Pu(i, "enumerable", !0), Pu(i, "configurable", !0), Pu(i, "writable", !0), i)) : t[n] = r, t;
            }, Rr = 1;
            break;
          case 28:
            Rr = 0;
            break;
          case 44:
            Rr = 23;
            break;
          case 30:
            sr = function () {
              return Hr;
            }, Rr = 17;
        }
      }
      for (var Dr, Nr, Ur = function () {
          var t,
            u = (Pu(t = {}, "init", 0), Pu(t, "reporting", 0), Pu(t, "fail", 0), t);
          return u.init = "init", u.reporting = "reporting", u.fail = "fail", u;
        }.apply(), Hr = function () {
          var t,
            w = (Pu(t = {}, "maxSdkInstance", 0), Pu(t, "maxQueueLength", 0), Pu(t, "actionParamMaxLength", 0), Pu(t, "autoTrack", 0), Pu(t, "reportThreshold", 0), Pu(t, "reportDelay", 0), Pu(t, "inspectDelay", 0), Pu(t, "cgiBatchSize", 0), Pu(t, "requestConcurrency", 0), Pu(t, "requestTimeout", 0), Pu(t, "signVersion", 0), Pu(t, "realTimeActionList", 0), t);
          return w.maxSdkInstance = 4, w.maxQueueLength = 500, w.actionParamMaxLength = 10000, w.autoTrack = !0, w.reportThreshold = 5, w.reportDelay = 1, w.inspectDelay = 30, w.cgiBatchSize = 50, w.requestConcurrency = 4, w.requestTimeout = 10000, w.signVersion = "1.0", w.realTimeActionList = ["START_APP", "REGISTER", "PURCHASE"], w;
        }.apply(), ti = (Nr = function (t) {
          return "".concat("@dn-sdk/minigame", $t).concat("production", $t).concat(t);
        }, function () {
          var t,
            e = (Pu(t = {}, "getSync", 0), Pu(t, "setSync", 0), t);
          return e.getSync = function (t) {
            var n;
            try {
              n = wx["getStorageSync"](Nr(t));
            } catch (t) {
              return console["error"]("storage get error", t), n;
            }
            return n;
          }, e.setSync = function (t, n) {
            try {
              wx["setStorageSync"](Nr(t), n);
            } catch (t) {
              return console["error"]("storage set error", t), !1;
            }
            return !0;
          }, e;
        }.apply()), ni = function () {
          var t;
          return function () {
            if (!t) {
              var i = function () {
                  if (Dr) return Dr;
                  try {
                    return Dr = wx["getSystemInfoSync"]();
                  } catch (t) {
                    return {};
                  }
                }(),
                e = i["system"],
                a = void 0 === e ? "" : e,
                u = (null == a ? void 0 : a["split"](Ui)) || [],
                s = function (t) {
                  if (!t) return "UNKNOWN";
                  var o = (null == t ? void 0 : t["toUpperCase"]()) || "";
                  return o.indexOf("ANDROID") > -1 ? "ANDROID" : o.indexOf("IOS") > -1 ? "IOS" : o.indexOf("MAC") > -1 ? "OSX" : o.indexOf("WINDOWS") > -1 ? "WINDOWS" : "UNKNOWN";
                }(u[0]),
                o = function (t) {
                  return !t || t.length <= 0 ? "" : 2 === t.length ? t[1] : 3 === t.length && "Windows" === t[0] ? "".concat(t[1], Ui).concat(t[2]) : t[t.length - 1];
                }(u);
              t = function () {
                var t,
                  g = (Pu(t = {}, "benchmark_level", 0), Pu(t, "device_brand", 0), Pu(t, "screen_height", 0), Pu(t, "screen_width", 0), Pu(t, "wx_lib_version", 0), Pu(t, "wx_version", 0), Pu(t, "wx_platform", 0), Pu(t, "device_model", 0), Pu(t, "os", 0), Pu(t, "os_version", 0), t);
                return g.benchmark_level = i["benchmarkLevel"], g.device_brand = i["brand"], g.screen_height = Math.floor(i["screenHeight"]), g.screen_width = Math.floor(i["screenWidth"]), g.wx_lib_version = i["SDKVersion"], g.wx_version = i["version"], g.wx_platform = i["platform"], g.device_model = i["model"], g.os = s, g.os_version = o, g;
              }["apply"]();
            }
            return t;
          };
        }(), ri = function () {
          var t;
          return function () {
            try {
              if (t) return t;
              t || (t = ti["getSync"]("LOCAL_ID") || ""), t || (t = Yn(), ti["setSync"]("LOCAL_ID", t));
            } catch (t) {}
            return t;
          };
        }(), ii = function () {
          var t = "unknown",
            n = !1;
          return function () {
            if (!n) try {
              wx["getNetworkType"](function () {
                var n,
                  a = (Pu(n = {}, "success", 0), Pu(n, "fail", 0), n);
                return a.success = function (n) {
                  t = n["networkType"];
                }, a.fail = function () {
                  t = "unknown";
                }, a;
              }["apply"]()), wx["onNetworkStatusChange"](function (n) {
                t = n["networkType"];
              }), n = !0;
            } catch (t) {}
            return t;
          };
        }(), ei = 0, ai = Nt; ei < ai.length; ei++) {
        var ui = ai[ei];
        if (-1 == ui) ;else if (0 == ui) {
          ii();
          continue;
        }
      }
      for (var si = function () {
          var t = "";
          return function () {
            return t || (t = ti["getSync"]("OPENID") || ""), t;
          };
        }(), oi = function () {
          var t;
          return function () {
            if (t) return t;
            try {
              var i = wx["getAccountInfoSync"]();
              return pi(i.miniProgram) ? t = i.miniProgram : {};
            } catch (t) {
              return {};
            }
          };
        }(), ci = 0, fi = Pt; ci < fi.length; ci++) {
        var hi = fi[ci];
        if (-1 == hi) ;else {
          if (0 == hi) continue;
          if (1 == hi) continue;
        }
      }
      for (var vi = function () {
          var t, n, r;
          return fr(r = function () {
            Zn(this, r);
          }, null, [(t = {}, Pu(t, "key", "revise"), Pu(t, "value", function (t) {
            t > 0 && !this.isRevised && (this["offsetTime"] = t - Date["now"](), this.isRevised = !0);
          }), t), (n = {}, Pu(n, "key", "getRevisedcurrentTimeMillis"), Pu(n, "value", function () {
            return this["isRevised"] ? Date["now"]() + this["offsetTime"] : -1;
          }), n)]), r;
        }(), li = 0, di = Gt; li < di.length; li++) {
        switch (di[li]) {
          case 0:
          case 1:
          case 2:
          case 3:
            break;
          case 4:
            vi["offsetTime"] = 0, vi["isRevised"] = !1;
        }
      }
      var ki,
        mi = Object.prototype["toString"],
        pi = function (t) {
          return "[object Object]" === mi["call"](t);
        },
        gi = function (t) {
          return "[object Array]" === mi["call"](t);
        },
        yi = function (t) {
          return "[object Function]" === mi["call"](t);
        },
        wi = new Date()["getTime"](),
        _i = Gu(xr);
      try {
        for (_i.s(); !(ki = _i.n()).done;) {
          var Mi = ki.value;
          if (-1 == Mi) ;else {
            if (0 == Mi) continue;
            if (1 == Mi) continue;
            if (2 == Mi) {
              In = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i, vn = function (t) {
                if ("string" != Du(t)) throw new TypeError("Invalid argument expected string");
                if (!In["test"](t)) throw new Error(Yi["concat"](t, Xi));
              }, an = function (t) {
                return isNaN(Number(t)) ? t : Number(t);
              }, Mn = function (t) {
                var n, r, i;
                return n = function (t, n) {
                  return -1 === t.indexOf(Tt) ? t["length"] : t.indexOf(Tt);
                }(i = t.replace(/^v/, "").replace(/\+.*$/, "")), (r = i.substring(0, n)["split"](Hi))["push"](i.substring(n + 1)), r;
              }, en = function (t, n) {
                var r, i;
                [t, n]["forEach"](vn);
                for (var l = Mn(t), b = Mn(n), d = 0; d < Math.max(l.length - 1, b.length - 1); d++) {
                  var k, m;
                  if ((m = parseInt(l[d] || it, 10)) > (k = parseInt(b[d] || it, 10))) return 1;
                  if (k > m) return -1;
                }
                if (i = l[l.length - 1], r = b[b.length - 1], i && r) for (var p = i.split(Hi).map(an), g = r.split(Hi).map(an), y = 0; y < Math.max(p.length, g.length); y++) {
                  if (void 0 === p[y] || "string" == Du(g[y]) && "number" == Du(p[y])) return -1;
                  if (void 0 === g[y] || "string" == Du(p[y]) && "number" == Du(g[y]) || p[y] > g[y]) return 1;
                  if (g[y] > p[y]) return -1;
                } else if (i || r) return i ? -1 : 1;
                return 0;
              };
              continue;
            }
          }
        }
      } catch (t) {
        _i.e(t);
      } finally {
        _i.f();
      }
      for (var Si = function () {
          var t, n, r, i, e, a;
          return fr(a = function () {
            Zn(this, a);
          }, null, [(t = {}, Pu(t, "key", "error"), Pu(t, "value", function (t) {
            for (var n, a = arguments, u = a["length"], s = new Array(u > 1 ? u - 1 : 0), o = 1; o < u; o++) s[o - 1] = a[o];
            (n = console)["error"]["apply"](n, ["".concat("[@dn-sdk/minigame v1.5.8]", ": ").concat(t)].concat(s));
          }), t), (n = {}, Pu(n, "key", "info"), Pu(n, "value", function (t) {
            for (var n, u = arguments, s = u["length"], o = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) o[c - 1] = u[c];
            a["debug"] && (n = console)["info"]["apply"](n, ["".concat("[@dn-sdk/minigame v1.5.8]", ": ").concat(t)].concat(o));
          }), n), (r = {}, Pu(r, "key", "log"), Pu(r, "value", function (t) {
            for (var n, u = arguments, s = u["length"], o = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) o[c - 1] = u[c];
            a["debug"] && (n = console)["log"]["apply"](n, ["".concat("[@dn-sdk/minigame v1.5.8]", ": ").concat(t)].concat(o));
          }), r), (i = {}, Pu(i, "key", "warn"), Pu(i, "value", function (t) {
            for (var n, e = arguments, a = e["length"], u = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++) u[s - 1] = e[s];
            (n = console)["warn"]["apply"](n, ["".concat("[@dn-sdk/minigame v1.5.8]", ": ").concat(t)].concat(u));
          }), i), (e = {}, Pu(e, "key", "devLog"), Pu(e, "value", function (t) {
            for (var n, u = arguments, s = u["length"], o = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) o[c - 1] = u[c];
            a["isDev"] && (n = console)["log"]["apply"](n, ["".concat("[@dn-sdk/minigame v1.5.8]", ": ").concat(t)].concat(o));
          }), e)]), a;
        }(), Ai = 0, Ci = Ht; Ai < 13;) switch (++Ai, Ci) {
        case 11:
          Si["debug"] = !1, Si["isDev"] = !1, Ci = 8;
          break;
        case 12:
          Fn = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, gn = function (t, n, r, i) {
            for (var e, u = i > 1 ? void 0 : i ? nn(n, r) : n, s = t["length"] - 1; s >= 0; s--) (e = t[s]) && (u = (i ? e(n, r, u) : e(u)) || u);
            return i && u && Fn(n, r, u), u;
          }, Cn = function (t) {
            var n, r, i, e, a, u, s, o, c, f, h;
            return pr(h = function (t) {
              var n, r, i, e, a, u;
              return i = t["userActionSetId"], u = t["maxLength"], r = void 0 === u ? 500 : u, a = void 0 === (n = t.ogEvents) ? [] : n, Zn(this, h), (e = f["call"](this, function () {
                var t, n;
                return Pu(t = {}, "userActionSetId", 0), Pu(t, "maxLength", 0), (n = t).userActionSetId = i, n.maxLength = r, n;
              }["apply"]())).ogEvents = a, e;
            }, Pn), f = qn(h), fr(h, [(n = {}, Pu(n, "key", "getReportableActions"), Pu(n, "value", function () {
              var t, n, r, i;
              return t = (r = arguments)["length"] > 0 && void 0 !== r[0] ? r[0] : 100, n = this["getItems"](), i = [], null == n || n["forEach"](function (n) {
                var r;
                (null == i ? void 0 : i["length"]) < t && (null == n ? void 0 : n["inner_status"]) !== (null == (r = Ur) ? void 0 : r["reporting"]) && (null == i || i["push"](n));
              }), i;
            }), n), (r = {}, Pu(r, "key", "addAction"), Pu(r, "value", function (t) {
              var n, r, i, e, a, u, s, o;
              (Pu(n = {}, "code", 0), Pu(n, "message", "成功"), Pu(n, "actionId", t.action_id), r = n, (null == (i = this["getItems"]()) ? void 0 : i["length"]) >= this.maxLength) ? (o = "队列长度超过最大限制".concat(this.maxLength, "条，SDK将按照行为优先级排序，丢弃优先级最低的行为事件"), Si["warn"](o), mr((Pu(e = {}, "user_action_set_id", this["userActionSetId"]), Pu(e, "log_type", "JS_QUEUE_LOG"), Pu(e, "message", "队列长度超过限制"), e)), s = this["sortQueue"](t, i), Si["debug"] && Si["info"]("超过".concat(this.maxLength, "条按优先级排序的队列："), s.concat([])), u = s["pop"](), this["updateAllStack"](s), this["updateLostAction"]((null == u ? void 0 : u["session_id"]) || ""), (null == u ? void 0 : u.action_id) === t.action_id && (Pu(a = {}, "code", 103), Pu(a, "message", "缓存队列已满，主动丢弃行为"), r = a)) : this["addItem"](t);
              return kn["hasDirectGameMask"] || this["updateToStorage"](), r;
            }), r), (i = {}, Pu(i, "key", "removeActions"), Pu(i, "value", function (t) {
              this["removeItems"](t), this["updateToStorage"]();
            }), i), (e = {}, Pu(e, "key", "updateActionsForReportFail"), Pu(e, "value", function (t) {
              this["updateForReportFail"](t), this["updateToStorage"]();
            }), e), (a = {}, Pu(a, "key", "updateActionsForReporting"), Pu(a, "value", function (t) {
              this["updateForReporting"](t), this["updateToStorage"]();
            }), a), (u = {}, Pu(u, "key", "getReportableActionsLength"), Pu(u, "value", function () {
              var t;
              return null == (t = this["getItems"]()["filter"](function (t) {
                var n;
                return (null == t ? void 0 : t["inner_status"]) !== (null == (n = Ur) ? void 0 : n["reporting"]);
              })) ? void 0 : t["length"];
            }), u), (s = {}, Pu(s, "key", "sortQueue"), Pu(s, "value", function (t, n) {
              var r, i, e, a, u;
              return u = this, e = {}, a = null == t ? void 0 : t["action_time"], r = n["concat"]([t]), i = function (t) {
                return e[t.action_id] || (e[t.action_id] = u["caculateWeight"](a, t)), e[t.action_id];
              }, r["sort"](function (t, n) {
                return i(n) - i(t);
              });
            }), s), (o = {}, Pu(o, "key", "caculateWeight"), Pu(o, "value", function (t, n) {
              var r, i, e, a, u, s, o;
              return u = 0, a = (r = this["formatWeight"](t, null == n ? void 0 : n.action_time))["ogWeight"], i = r["sdkWeight"], e = r["userWeight"], null != (o = this["ogEvents"]) && o["includes"](null == n ? void 0 : n["action_type"]) && (u += a), null != n && n["is_sdk_auto_track"] ? u += i : u += e, (s = t - (null == n ? void 0 : n.action_time) + 1) > 0 ? u + 1 / s : u;
            }), o), (c = {}, Pu(c, "key", "formatWeight"), Pu(c, "value", function (t, n) {
              var r, i, e, a;
              return i = 1000, a = 10, e = 100, t - n > 2592000000 && (i /= 100, a /= 100, e /= 100), Pu(r = {}, "ogWeight", i), Pu(r, "sdkWeight", a), Pu(r, "userWeight", e), r;
            }), c)]), h;
          }(), Ci = 7;
          break;
        case 0:
          kn["hasDirectGameMask"] = !1, kn["activeDuration"] = 0, Ci = 12;
          break;
        case 2:
          Gn["ERROR_CALLBACK_IS_NOT_A_FUNCTION"] = "callback 不是函数", Ci = 3;
          break;
        case 9:
          Ci = 6;
          break;
        case 4:
          Gn = function () {
            var t, n, r, i, e, a, u;
            return fr(u = function () {
              Zn(this, u), this["events"] = {};
            }, [(t = {}, Pu(t, "key", "subscribe"), Pu(t, "value", function (t, n) {
              u["checkCallback"](n), gi(this.events[t]) ? this.events[t]["push"](n) : this.events[t] = [n];
            }), t), (n = {}, Pu(n, "key", "once"), Pu(n, "value", function (t, n) {
              u["checkCallback"](n), this["subscribe"](this["onceEventName"](t), n);
            }), n), (r = {}, Pu(r, "key", "unsubscribe"), Pu(r, "value", function (t, n) {
              u["checkCallback"](n), gi(this.events[t]) && (this.events[t] = this.events[t].filter(function (t) {
                return t !== n;
              })), gi(this.events[this.onceEventName(t)]) && (this.events[this.onceEventName(t)] = this.events[this.onceEventName(t)].filter(function (t) {
                return t !== n;
              }));
            }), r), (i = {}, Pu(i, "key", "publish"), Pu(i, "value", function (t) {
              for (var n, r, s = (n = arguments)["length"], o = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) o[c - 1] = n[c];
              r = Date["now"](), gi(this.events[t]) && this.events[t].forEach(function (t) {
                return t["apply"](void 0, [r]["concat"](o));
              }), gi(this.events[this.onceEventName(t)]) && (this.events[this.onceEventName(t)].forEach(function (t) {
                return t["apply"](void 0, [r]["concat"](o));
              }), this.events[this.onceEventName(t)] = []);
            }), i), (e = {}, Pu(e, "key", "onceEventName"), Pu(e, "value", function (t) {
              return "once_event_prefix_"["concat"](t);
            }), e)], [(a = {}, Pu(a, "key", "checkCallback"), Pu(a, "value", function (t) {
              yi(t) || Si["error"](u["ERROR_CALLBACK_IS_NOT_A_FUNCTION"]);
            }), a)]), u;
          }(), Ci = 2;
          break;
        case 1:
          sn([lr], Pn.prototype, "getItems", 1), sn([lr], Pn.prototype, "getStorage", 1), sn([lr], Pn.prototype, "reportLostNum", 1), sn([lr], Pn.prototype, "getLostMaps", 1), sn([lr], Pn.prototype, "init", 1), sn([lr], Pn.prototype, "addItem", 1), sn([lr], Pn.prototype, "removeItems", 1), sn([lr], Pn.prototype, "updateForReportFail", 1), sn([lr], Pn.prototype, "updateForReporting", 1), sn([lr], Pn.prototype, "updateAllStack", 1), sn([lr], Pn.prototype, "updateToStorage", 1), sn([lr], Pn.prototype, "updateLostAction", 1), Ci = 5;
          break;
        case 10:
          Ci = 11;
          break;
        case 5:
          kn = fr(function t() {
            Zn(this, t);
          }), Ci = 0;
          break;
        case 8:
          Qt = function () {
            var t;
            return function () {
              if (!t) try {
                var a, u, s;
                a = wx["getLaunchOptionsSync"](), (u = a["query"]["gdt_vid"] || "") ? ti["setSync"]("CLICK_ID", u) : u = ti["getSync"]("CLICK_ID") || "", (s = JSON.stringify(a))["length"] > 10000 && (s = JSON.stringify(function () {
                  var t, n;
                  return Pu(t = {}, "cut", 0), Pu(t, "scene", 0), (n = t).cut = 1, n.scene = a.scene, n;
                }.apply())), t = function () {
                  var t, n;
                  return Pu(t = {}, "source_scene", 0), Pu(t, "pkg_channel_id", 0), Pu(t, "ad_trace_id", 0), Pu(t, "launch_options", 0), Pu(t, "channel", 0), (n = t).source_scene = a["scene"], n.pkg_channel_id = a["query"]["wxgamepro"] || "", n.ad_trace_id = u, n.launch_options = s, n.channel = Xn(a), n;
                }.apply();
              } catch (r) {
                t = {}, Si["log"]("获取场景值和渠道号失败", r);
              }
              return t;
            };
          }(), Ci = 9;
          break;
        case 3:
          cn = new Gn(), Hn = ["REGISTER", "VIEW_CONTENT", "ADD_TO_CART", "PURCHASE", "COMPLETE_ORDER", "ADD_TO_WISHLIST", "START_APP", "CREATE_ROLE", "AUTHORIZE", "TUTORIAL_FINISH", "START_PAY", "FINISH_PAY"], Kt = "SHARE", rn = "FINISH_PAY", qt = "START_PAY", on = ["REGISTER", "START_APP", "RE_ACTIVE"], tn = ["TICKET", "ENTER_FOREGROUND", "ENTER_BACKGROUND"], Bn = new (function () {
            var t, n, r, i, e, a, u, s;
            return fr(s = function () {
              Zn(this, s), this["channelClaimActionList"] = on, this["noClaimActionList"] = tn, this.realTimeActionList = Hr.realTimeActionList, this["ticketInterval"] = 60, this.requestTimeout = Hr.requestTimeout, this["loadConfig"]();
            }, [(t = {}, Pu(t, "key", "getChannelClaimActionList"), Pu(t, "value", function () {
              return this["channelClaimActionList"];
            }), t), (n = {}, Pu(n, "key", "getNoClaimActionList"), Pu(n, "value", function () {
              return this["noClaimActionList"];
            }), n), (r = {}, Pu(r, "key", "getRealTimeActionList"), Pu(r, "value", function () {
              return this["realTimeActionList"];
            }), r), (i = {}, Pu(i, "key", "getTicketInterval"), Pu(i, "value", function () {
              return this["ticketInterval"];
            }), i), (e = {}, Pu(e, "key", "getRequestTimeout"), Pu(e, "value", function () {
              return this["requestTimeout"];
            }), e), (a = {}, Pu(a, "key", "loadConfig"), Pu(a, "value", function () {
              var t;
              t = this;
              try {
                var i, e;
                if ("undefined" == ("undefined" == typeof wx ? "undefined" : Du(wx))) return;
                (e = ti["getSync"]("REMO")) && this["updateConfig"](e), ur((i = {}, Pu(i, "conf_name", "mini_game_sdk_common"), Pu(i, "conf_key", "config"), i))["then"](function (n) {
                  n && pi(n) && (t["updateConfig"](n), ti["setSync"]("REMO", n));
                });
              } catch (r) {
                console["error"](r);
              }
            }), a), (u = {}, Pu(u, "key", "updateConfig"), Pu(u, "value", function (t) {
              t.channelClaimActionList && gi(t.channelClaimActionList) && (this.channelClaimActionList = t.channelClaimActionList), t.noClaimActionList && gi(t.noClaimActionList) && (this.noClaimActionList = t.noClaimActionList), t.realTimeActionList && gi(t.realTimeActionList) && (this.realTimeActionList = t.realTimeActionList), t.ticketInterval && "number" == Du(t.ticketInterval) && t.ticketInterval > 1 && t.ticketInterval !== this.ticketInterval && (this.ticketInterval = t.ticketInterval, cn["publish"]("TICKET_INTERVAL_CHANGE")), t.requestTimeout && "number" == Du(t.requestTimeout) && t.requestTimeout > 5000 && (this.requestTimeout = t.requestTimeout);
            }), u)]), s;
          }())(), Nn = function () {
            var t, n, r, i, e, a;
            return n = !0, i = !0, t = !0, r = !0, a = !0, e = !1, function () {
              if (!e) {
                var d, k, m;
                if (e = !0, (null == (d = ti["getSync"]("REMOTE_CONFIG")) ? void 0 : d.bg) === "TRUE" ? n = !0 : (null == d ? void 0 : d.bg) === "FALSE" && (n = !1), (null == d ? void 0 : d.fg) === "TRUE" ? i = !0 : (null == d ? void 0 : d.fg) === "FALSE" && (i = !1), (null == d ? void 0 : d.st) === "TRUE" ? t = !0 : (null == d ? void 0 : d.st) === "FALSE" && (t = !1), (null == d ? void 0 : d.ti) === "TRUE" ? r = !0 : (null == d ? void 0 : d.ti) === "FALSE" && (r = !1), Si["devLog"]("当前缓存开关 bgOn，fgOn，stOn，tiOn：", n, i, t, r), t && cn["publish"]("START_APP"), r) k = function () {
                  a && cn["publish"]("TICKET");
                }, m = setInterval(k, 1000 * Bn["getTicketInterval"]()), cn["subscribe"]("TICKET_INTERVAL_CHANGE", function () {
                  m && clearInterval(m), m = setInterval(k, 1000 * Bn["getTicketInterval"]());
                });
                wx["onShow"](function (t) {
                  if (a = !0, i) {
                    var u;
                    u = "";
                    try {
                      (u = JSON.stringify(t))["length"] > 10000 && (u = JSON.stringify(function () {
                        var n, r;
                        return Pu(n = {}, "cut", 0), Pu(n, "scene", 0), (r = n).cut = 1, r.scene = t.scene, r;
                      }.apply()));
                    } catch (t) {}
                    cn["publish"]("ENTER_FOREGROUND", function () {
                      var t;
                      return (t = Pu({}, "enter_options", 0)).enter_options = u, t;
                    }.apply());
                  }
                }), wx["onHide"](function () {
                  var t;
                  (a = !1, n) && (t = 0, 0 !== kn.activeDuration && (t = Date["now"]() - kn.activeDuration, kn.activeDuration = 0), cn["publish"]("ENTER_BACKGROUND", function () {
                    var n;
                    return (n = Pu({}, "duration", 0)).duration = t > 0 ? t : 0, n;
                  }["apply"]()));
                });
              }
            };
          }(), bn = "undefined" != ("undefined" == typeof globalThis ? "undefined" : Du(globalThis)) ? globalThis : "undefined" != ("undefined" == typeof window ? "undefined" : Du(window)) ? window : "undefined" != ("undefined" == typeof global ? "undefined" : Du(global)) ? global : "undefined" != ("undefined" == typeof self ? "undefined" : Du(self)) ? self : {}, Ci = 10;
          break;
        case 6:
          Dn = Object.defineProperty, un = Object.getOwnPropertyDescriptor, sn = function (t, n, r, i) {
            for (var e, u = i > 1 ? void 0 : i ? un(n, r) : n, s = t["length"] - 1; s >= 0; s--) (e = t[s]) && (u = (i ? e(n, r, u) : e(u)) || u);
            return i && u && Dn(n, r, u), u;
          }, Pn = function () {
            var t, n, r, i, e, a, u, s, o, c, f, h, v, l;
            return fr(l = function (t) {
              var n, r, i;
              r = t.userActionSetId, n = void 0 === (i = t.maxLength) ? 500 : i, Zn(this, l), this["lostActionMaps"] = {}, this["stack"] = [], this.localStorageKey = "", this.localStorageKey = "".concat("QUEUE_ACTIONS", $t).concat(null == r ? void 0 : r["toString"]()), this.maxLength = n, this.userActionSetId = r, this["setTimeStamp"](), this["init"]();
            }, [(t = {}, Pu(t, "key", "getItems"), Pu(t, "value", function () {
              return this["stack"];
            }), t), (n = {}, Pu(n, "key", "getStorage"), Pu(n, "value", function () {
              var t, n;
              return t = (null == (n = ti) ? void 0 : n["getSync"](this["localStorageKey"])) || "[]", JSON["parse"](t);
            }), n), (r = {}, Pu(r, "key", "reportLostNum"), Pu(r, "value", function () {
              var t, n, r;
              for (var u in r = this, n = [], t = Object["assign"]({}, this["lostActionMaps"])) {
                var s, o;
                o = null == u ? void 0 : u["split"]($t), n["push"]((Pu(s = {}, "queue_lost_session_id", o[0]), Pu(s, "queue_lost_timestamp", o[1]), Pu(s, "queue_lost_num", t[u]), s));
              }
              n["length"] && (this["setTimeStamp"](), n["forEach"](function (t) {
                var n, i, e, a, u;
                e = Object["assign"]({}, (Pu(n = {}, "user_action_set_id", r["userActionSetId"]), Pu(n, "log_type", "QUEUE_LOST_NUM"), n), t), i = null == t ? void 0 : t["queue_lost_session_id"], a = null == t ? void 0 : t["queue_lost_timestamp"], u = "".concat(i, $t).concat(a), mr(e, function () {
                  Qn(r.lostActionMaps, u) && (delete r.lostActionMaps[u], ti["setSync"]("QUEUE_LOST_MAP", JSON["stringify"](r.lostActionMaps)));
                });
              }));
            }), r), (i = {}, Pu(i, "key", "getLostMaps"), Pu(i, "value", function () {
              return this["lostActionMaps"];
            }), i), (e = {}, Pu(e, "key", "init"), Pu(e, "value", function () {
              var t, n, r;
              t = this, n = null == (r = this["getStorage"]()) ? void 0 : r["map"](function (t) {
                var n, r, i;
                return t.inner_status === (null == (r = Ur) ? void 0 : r["reporting"]) ? Object["assign"]({}, t, (Pu(n = {}, "inner_status", null == (i = Ur) ? void 0 : i["fail"]), Pu(n, "is_retry", !0), Pu(n, "retry_count", t.retry_count + 1), n)) : t;
              }), this["stack"] = n, this["lostActionMaps"] = JSON["parse"](ti["getSync"]("QUEUE_LOST_MAP") || "{}"), setTimeout(function () {
                t["reportLostNum"]();
              }, 1000);
            }), e), (a = {}, Pu(a, "key", "addItem"), Pu(a, "value", function (t) {
              var n;
              null == (n = null == this ? void 0 : this["stack"]) || n["push"](t);
            }), a), (u = {}, Pu(u, "key", "removeItems"), Pu(u, "value", function (t) {
              var n, r;
              r = null == (n = null == this ? void 0 : this.stack) ? void 0 : n["filter"](function (n) {
                return !(null != t && t["includes"](null == n ? void 0 : n["action_id"]));
              }), this.stack = r;
            }), u), (s = {}, Pu(s, "key", "updateForReportFail"), Pu(s, "value", function (t) {
              var n;
              this.stack = null == (n = this.stack) ? void 0 : n["map"](function (n) {
                var r, i;
                return null != t && t["includes"](null == n ? void 0 : n["action_id"]) ? Object["assign"]({}, n, (Pu(r = {}, "inner_status", null == (i = Ur) ? void 0 : i["fail"]), Pu(r, "retry_count", n.retry_count + 1), Pu(r, "is_retry", !0), r)) : n;
              });
            }), s), (o = {}, Pu(o, "key", "updateForReporting"), Pu(o, "value", function (t) {
              var n;
              this.stack = null == (n = this.stack) ? void 0 : n["map"](function (n) {
                var r;
                return null != t && t["includes"](null == n ? void 0 : n["action_id"]) ? Object["assign"]({}, n, Pu({}, "inner_status", null == (r = Ur) ? void 0 : r["reporting"])) : n;
              });
            }), o), (c = {}, Pu(c, "key", "updateAllStack"), Pu(c, "value", function (t) {
              this["stack"] = t;
            }), c), (f = {}, Pu(f, "key", "updateToStorage"), Pu(f, "value", function () {
              ti["setSync"](this["localStorageKey"], JSON["stringify"](this["stack"]));
            }), f), (h = {}, Pu(h, "key", "updateLostAction"), Pu(h, "value", function (t) {
              var n, r;
              t && (n = "".concat(t, $t).concat(this["timeStamp"]), r = this.lostActionMaps[n] || 0, this.lostActionMaps[n] = r + 1, ti["setSync"]("QUEUE_LOST_MAP", JSON["stringify"](this.lostActionMaps)));
            }), h), (v = {}, Pu(v, "key", "setTimeStamp"), Pu(v, "value", function () {
              this["timeStamp"] = Date["now"]()["toString"]();
            }), v)]), l;
          }(), Ci = 1;
          break;
        case 7:
          gn([lr], Cn.prototype, "getReportableActions", 1), gn([lr], Cn.prototype, "addAction", 1), gn([lr], Cn.prototype, "removeActions", 1), gn([lr], Cn.prototype, "updateActionsForReportFail", 1), gn([lr], Cn.prototype, "updateActionsForReporting", 1), gn([lr], Cn.prototype, "getReportableActionsLength", 1), gn([lr], Cn.prototype, "sortQueue", 1), gn([lr], Cn.prototype, "caculateWeight", 1), gn([lr], Cn.prototype, "formatWeight", 1), Ci = 4;
      }
      for (var xi, Ti = $n(function () {
          var t, n;
          n = function (t) {
            return !!t && ("object" == yr(t) || "function" == Du(t));
          }, t = function (t) {
            if (null !== t && !n(t)) throw new TypeError("Object prototype may only be an Object or null: " + t);
          };
          var a,
            u = null,
            s = Object,
            o = !(!s.create && {
              __proto__: null
            } instanceof s),
            c = s.create || (o ? function (n) {
              return t(n), {
                __proto__: n
              };
            } : function (n) {
              if (t(n), null === n) throw new SyntaxError(Qi);
              var r = function () {};
              return r["prototype"] = n, new r();
            }),
            f = function () {
              return null;
            },
            h = s["getPrototypeOf"] || ([]["__proto__"] === Array["prototype"] ? function (t) {
              var r = t["__proto__"];
              return n(r) ? r : null;
            } : f);
          return (a = function (r, i) {
            if (void 0 === (this && this instanceof a ? this["constructor"] : void 0)) throw new TypeError($i);
            if (!n(r) || !n(i)) throw new TypeError(te);
            var p = function () {};
            u = function () {
              r = null, p = function (t) {
                throw new TypeError(ne["concat"](t, re));
              };
            }, setTimeout(function () {
              u = null;
            }, 0);
            var g = i;
            for (var y in i = function () {
              var t,
                s = (Pu(t = {}, "get", 0), Pu(t, "set", 0), Pu(t, "apply", 0), Pu(t, "construct", 0), t);
              return s.get = null, s.set = null, s.apply = null, s.construct = null, s;
            }.apply(), g) {
              if (!(y in i)) throw new TypeError(ie["concat"](y, ee));
              i[y] = g[y];
            }
            "function" == Du(g) && (i.apply = g.apply["bind"](g));
            var w,
              _ = h(r),
              M = !1,
              S = !1;
            "function" == Du(r) ? (w = function () {
              var u = arguments,
                s = this && this["constructor"] === w,
                o = Array["prototype"]["slice"].call(u);
              return p(s ? "construct" : "apply"), s && i.construct ? i.construct.call(this, r, o) : !s && i.apply ? i.apply(r, this, o) : s ? (o["unshift"](r), new (r["bind"].apply(r, o))()) : r.apply(this, o);
            }, M = !0) : r instanceof Array ? (w = [], S = !0) : w = o || null !== _ ? c(_) : {};
            var A = i.get ? function (t) {
                return p("get"), i.get(this, t, w);
              } : function (t) {
                return p("get"), this[t];
              },
              C = i["set"] ? function (t, n) {
                p("set"), i.set(this, t, n, w);
              } : function (t, n) {
                p("set"), this[t] = n;
              },
              x = s["getOwnPropertyNames"](r),
              T = {};
            x["forEach"](function (t) {
              if (!M && !S || !(t in w)) {
                var u,
                  o = (Pu(u = {}, "enumerable", !!s["getOwnPropertyDescriptor"](r, t).enumerable), Pu(u, "get", A.bind(r, t)), Pu(u, "set", C.bind(r, t)), u);
                s["defineProperty"](w, t, o), T[t] = !0;
              }
            });
            var L = !0;
            if (M || S) {
              var I = s["setPrototypeOf"] || ([]["__proto__"] === Array["prototype"] ? function (n, r) {
                return t(r), n["__proto__"] = r, n;
              } : f);
              _ && I(w, _) || (L = !1);
            }
            if (i.get || !L) for (var R in r) T[R] || s["defineProperty"](w, R, function () {
              var i = Pu({}, "get", 0);
              return i.get = A["bind"](r, R), i;
            }.apply());
            return s.seal(r), s.seal(w), w;
          })["revocable"] = function (t, n) {
            return function () {
              var r,
                o = (Pu(r = {}, "proxy", 0), Pu(r, "revoke", 0), r);
              return o.proxy = new a(t, n), o.revoke = u, o;
            }["apply"]();
          }, a;
        }), Li = {}, Ii = 0, Ri = Vt; Ii < Ri.length; Ii++) {
        var Ei = Ri[Ii],
          Di = 27;
        if (-1 == Ei) ;else {
          if (0 == Ei) continue;
          if (1 == Ei) {
            Yt = function () {
              var t;
              return (t = Pu({}, "exports", 0)).exports = {}, t;
            }.apply();
            continue;
          }
          if (2 == Ei) {
            var Ni = [4, 3, 9, 7, 6, 1, 5, 0, 2, 8];
            ms && Et(Ni, 2, 7), Fu(95 / 3) >= Fu(Bu((Ou(es) + Ou(60) + Ou(4)) / 3)) && Et(Ni, 0, 6), Is && Et(Ni, 7, 9), mn = Kt, zn = qt, Rn = rn, fn = function () {
              var t;
              return t = !1, function () {
                t || (t = !0, ir(wx, "login", function (t) {
                  "success" === t && cn["publish"]("LOGIN");
                }), kr(wx, "onAddToFavorites", function () {
                  cn["publish"]("ADD_TO_WISHLIST");
                }), kr(wx, "onShareTimeline", function () {
                  cn["publish"](mn, function () {
                    var t, n;
                    return Pu(t = {}, "target", 0), Pu(t, "trigger", 0), (n = t).target = "TIME_LINE", n.trigger = "MENU", n;
                  }["apply"]());
                }), kr(wx, "onShareAppMessage", function () {
                  cn["publish"](mn, function () {
                    var t, n;
                    return Pu(t = {}, "target", 0), Pu(t, "trigger", 0), (n = t).target = "APP_MESSAGE", n.trigger = "MENU", n;
                  }["apply"]());
                }), kr(wx, "shareAppMessage", function () {
                  cn["publish"](mn, function () {
                    var t, n;
                    return Pu(t = {}, "target", 0), Pu(t, "trigger", 0), (n = t).target = "APP_MESSAGE", n.trigger = "BUTTON", n;
                  }["apply"]());
                }), br(wx, "createGameClubButton", !1, [function () {
                  var t, n;
                  return Pu(t = {}, "isAsync", 0), Pu(t, "eventName", 0), Pu(t, "proxyEvent", 0), (n = t).isAsync = !1, n.eventName = "onTap", n.proxyEvent = function () {
                    cn["publish"]("TAP_GAME_CLUB");
                  }, n;
                }.apply()], function () {
                  cn["publish"]("CREATE_GAME_CLUB");
                }), br(wx, "getGameServerManager", !0, [function () {
                  var t, n;
                  return Pu(t = {}, "isAsync", 0), Pu(t, "eventName", 0), Pu(t, "proxyEvent", 0), (n = t).isAsync = !0, n.eventName = "createRoom", n.proxyEvent = function (t) {
                    "success" === t && cn["publish"]("CREATE_GAME_ROOM");
                  }, n;
                }.apply(), function () {
                  var t, n;
                  return Pu(t = {}, "isAsync", 0), Pu(t, "eventName", 0), Pu(t, "proxyEvent", 0), (n = t).isAsync = !0, n.eventName = "joinRoom", n.proxyEvent = function (t) {
                    "success" === t && cn["publish"]("JOIN_GAME_ROOM");
                  }, n;
                }.apply()]), ir(wx, "requestMidasPayment", function (t, n) {
                  cn["publish"](Rn, function () {
                    var r, i;
                    return Pu(r = {}, "status", 0), Pu(r, "quantity", 0), Pu(r, "mode", 0), Pu(r, "platform", 0), Pu(r, "no", 0), Pu(r, "payType", 0), (i = r).status = "success" === t ? "SUCCESS" : "FAIL", i.quantity = (null == n ? void 0 : n["buyQuantity"]) || 0, i.mode = (null == n ? void 0 : n.mode) || "", i.platform = (null == n ? void 0 : n.platform) || "", i.no = (null == n ? void 0 : n["outTradeNo"]) || "", i.payType = "Midas", i;
                  }["apply"]());
                }, function (t) {
                  cn["publish"](zn, function () {
                    var n, r;
                    return Pu(n = {}, "quantity", 0), Pu(n, "mode", 0), Pu(n, "platform", 0), Pu(n, "no", 0), Pu(n, "payType", 0), (r = n).quantity = (null == t ? void 0 : t["buyQuantity"]) || 0, r.mode = (null == t ? void 0 : t.mode) || "", r.platform = (null == t ? void 0 : t.platform) || "", r.no = (null == t ? void 0 : t["outTradeNo"]) || "", r.payType = "Midas", r;
                  }["apply"]());
                }), ir(wx, "requestMidasPaymentGameItem", function (t, n) {
                  var r;
                  r = (n || {})["signData"], cn["publish"](Rn, function () {
                    for (var n, i, d = 0, k = Ni; d < k.length; d++) {
                      switch (k[d]) {
                        case 0:
                          i.quantity = (null == r ? void 0 : r["buyQuantity"]) || 0;
                          break;
                        case 1:
                          i.no = (null == r ? void 0 : r["outTradeNo"]) || "";
                          break;
                        case 2:
                          i.payType = "MidasGameItem";
                          break;
                        case 3:
                          i.status = "success" === t ? "SUCCESS" : "FAIL";
                          break;
                        case 4:
                          i.p = (null == r ? void 0 : r["goodsPrice"]) || 0;
                          break;
                        case 5:
                          Pu(n = {}, "status", 0), Pu(n, "quantity", 0), Pu(n, "mode", 0), Pu(n, "platform", 0), Pu(n, "no", 0), Pu(n, ae, 0), Pu(n, "productId", 0), Pu(n, "payType", 0), i = n;
                          break;
                        case 6:
                          i.platform = (null == r ? void 0 : r.platform) || "";
                          break;
                        case 7:
                          i.mode = (null == r ? void 0 : r.mode) || "";
                          break;
                        case 8:
                          return i;
                        case 9:
                          i.productId = (null == r ? void 0 : r.productId) || "";
                      }
                    }
                  }["apply"]());
                }, function (t) {
                  var n;
                  n = (t || {})["signData"], cn["publish"](zn, function () {
                    var t, r;
                    return Pu(t = {}, "quantity", 0), Pu(t, "mode", 0), Pu(t, "platform", 0), Pu(t, "no", 0), Pu(t, ae, 0), Pu(t, "productId", 0), Pu(t, "payType", 0), (r = t).quantity = (null == n ? void 0 : n["buyQuantity"]) || 0, r.mode = (null == n ? void 0 : n.mode) || "", r.platform = (null == n ? void 0 : n.platform) || "", r.no = (null == n ? void 0 : n["outTradeNo"]) || "", r.p = (null == n ? void 0 : n["goodsPrice"]) || 0, r.productId = (null == n ? void 0 : n.productId) || "", r.payType = "MidasGameItem", r;
                  }["apply"]());
                }));
              };
            }(), wn = function () {
              var t, n, r, i;
              return fr(i = function () {
                Zn(this, i);
              }, null, [(t = {}, Pu(t, "key", "isEmpty"), Pu(t, "value", function (t) {
                return null == t || "string" == Du(t) && "" === t["trim"]();
              }), t), (n = {}, Pu(n, "key", "format"), Pu(n, "value", function (t) {
                for (var n, i = (n = arguments)["length"], e = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) e[a - 1] = n[a];
                return t["replace"](/\${(\d+)}/g, function (t, n) {
                  return e[n];
                });
              }), n), (r = {}, Pu(r, "key", "customStringify"), Pu(r, "value", function (t) {
                var n;
                n = [];
                try {
                  return JSON["stringify"](t, function (t, r) {
                    if (void 0 === r) return "undefined";
                    if ("object" == yr(r) && null !== r) {
                      if (-1 !== n["indexOf"](r)) return "[Circular]";
                      n["push"](r);
                    }
                    return "bigint" == Du(r) ? r["toString"]() : r;
                  });
                } catch (t) {
                  return "[Param Error]";
                }
              }), r)]), i;
            }(), Un = /^([a-zA-Z][a-zA-Z\d_]{0,63})$/i, On = /^ams_reserved_(.*)/i, xn = function () {
              var t, n, r, i, e, a;
              return fr(a = function () {
                Zn(this, a);
              }, null, [(t = {}, Pu(t, "key", "validateActionType"), Pu(t, "value", function (t) {
                return wn["isEmpty"](t) ? (Si.error(a["ERROR_ACTION_TYPE_NULL"]), !1) : !!Un["test"](t) || (Si.error(a["ERROR_ACTION_TYPE_INVALID"]), !1);
              }), t), (n = {}, Pu(n, "key", "validateActionParam"), Pu(n, "value", function (t) {
                if (!t) return !0;
                if (!pi(t)) return Si.error(a["ERROR_ACTION_PARAM_IS_NOT_OBJECT"]), !1;
                for (var o in t) {
                  var c;
                  if (wn["isEmpty"](o)) return Si.error(a["ERROR_ACTION_PARAM_KEY_NULL"]), !1;
                  if (!Un.test(o)) return Si.error(a["ERROR_ACTION_PARAM_KEY_INVALID"]), !1;
                  if (On.test(o) && Si["warn"](a["WARN_ACTION_PARAM_KEY_RESERVED"]), c = t[o], !a["isValidValue"](c)) return Si.error(wn.format(a["ERROR_ACTION_PARAM_VALUE_INVALID"], o, c)), !1;
                  if (gi(c)) {
                    if (!a["isValidArrayValue"](c)) {
                      for (var f = 0; f < c["length"]; f++) Si.error(wn.format(a["ERROR_ACTION_PARAM_VALUE_ARRAY_INVALID"], o, wn["customStringify"](c), f, c[f]));
                      return !1;
                    }
                    if (!a["checkArrayElementTypes"](c)) return Si.error(a["ERROR_ACTION_PARAM_VALUE_ARRAY_TYPE_UNUNIQUE"]), !1;
                  }
                }
                return !0;
              }), n), (r = {}, Pu(r, "key", "isValidValue"), Pu(r, "value", function (t) {
                return null == t || "string" == Du(t) || "number" == Du(t) || "boolean" == Du(t) || gi(t);
              }), r), (i = {}, Pu(i, "key", "isValidArrayValue"), Pu(i, "value", function (t) {
                for (var i = 0; i < t["length"]; i++) {
                  var e;
                  if (e = t[i], "string" != Du(e) && "number" != Du(e) && "boolean" != Du(e)) return !1;
                }
                return !0;
              }), i), (e = {}, Pu(e, "key", "checkArrayElementTypes"), Pu(e, "value", function (t) {
                if (!t || t.length <= 1) return !0;
                for (var r = yr(t[0]), i = 1; i < t.length; i++) if (yr(t[i]) !== r) return !1;
                return !0;
              }), e)]), a;
            }();
            continue;
          }
          if (3 == Ei) continue;
        }
        if (4 != Ei) {
          if (5 != Ei && 6 != Ei) if (7 != Ei) {
            if (8 != Ei) if (9 != Ei) ;else try {
              xi || (xi = Ti());
            } catch (t) {
              Kn(t);
            }
          } else !function (t) {
            !function (n) {
              for (var r, i, e, a, u, s, o, c, f, h, v, l, b, d, O = 0, F = Di; O < 29;) switch (++O, F) {
                case 5:
                  s = function (t, n, r, i, e, a, u) {
                    return d(r ^ (n | ~i), t, n, e, a, u);
                  }, F = 2;
                  break;
                case 24:
                  F = 6;
                  break;
                case 1:
                  u = function (t, n, r, i, e, a, u) {
                    return d(n ^ r ^ i, t, n, e, a, u);
                  }, F = 5;
                  break;
                case 13:
                  F = 14;
                  break;
                case 14:
                  t.exports ? t.exports = e : n["md5"] = e, F = 27;
                  break;
                case 19:
                  b = function (t, n, r, i, e, a, u) {
                    return d(n & r | ~n & i, t, n, e, a, u);
                  }, F = 7;
                  break;
                case 11:
                  o = function (t) {
                    return unescape(encodeURIComponent(t));
                  }, F = 3;
                  break;
                case 27:
                  i = function (t, n) {
                    var r;
                    return (t >> 16) + (n >> 16) + ((r = (65535 & t) + (65535 & n)) >> 16) << 16 | 65535 & r;
                  }, F = 12;
                  break;
                case 23:
                  F = 24;
                  break;
                case 21:
                  F = 25;
                  break;
                case 8:
                  e = function (t, n, i) {
                    return n ? i ? l(n, t) : function (t, n) {
                      return r(l(t, n));
                    }(n, t) : i ? a(t) : function (t) {
                      return r(a(t));
                    }(t);
                  }, F = 23;
                  break;
                case 0:
                  F = 13;
                  break;
                case 18:
                  f = function (t) {
                    var n, r, i;
                    for ((i = [])[(t.length >> 2) - 1] = void 0, r = 0; r < i.length; r += 1) i[r] = 0;
                    for (n = 8 * t.length, r = 0; r < n; r += 8) i[r >> 5] |= (255 & t["charCodeAt"](r / 8)) << r % 32;
                    return i;
                  }, F = 17;
                  break;
                case 17:
                  r = function (t) {
                    var n, r, i, e;
                    for (e = "0123456789abcdef", i = "", r = 0; r < t["length"]; r += 1) n = t["charCodeAt"](r), i += e.charAt(n >>> 4 & 15) + e.charAt(15 & n);
                    return i;
                  }, F = 11;
                  break;
                case 20:
                  F = 22;
                  break;
                case 22:
                  F = 0;
                  break;
                case 15:
                  F = 21;
                  break;
                case 10:
                  F = 4;
                  break;
                case 12:
                  d = function (t, n, r, e, a, u) {
                    return i(function (t, n) {
                      return t << n | t >>> 32 - n;
                    }(i(i(n, t), i(e, u)), a), r);
                  }, F = 19;
                  break;
                case 2:
                  c = function (t, n) {
                    var r, e, a, o, c, f, h, l, d;
                    for (t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n, e = 1732584193, h = -271733879, f = -1732584194, r = 271733878, a = 0; a < t["length"]; a += 16) l = e, d = h, c = f, o = r, e = b(e, h, f, r, t[a], 7, -680876936), r = b(r, e, h, f, t[a + 1], 12, -389564586), f = b(f, r, e, h, t[a + 2], 17, 606105819), h = b(h, f, r, e, t[a + 3], 22, -1044525330), e = b(e, h, f, r, t[a + 4], 7, -176418897), r = b(r, e, h, f, t[a + 5], 12, 1200080426), f = b(f, r, e, h, t[a + 6], 17, -1473231341), h = b(h, f, r, e, t[a + 7], 22, -45705983), e = b(e, h, f, r, t[a + 8], 7, 1770035416), r = b(r, e, h, f, t[a + 9], 12, -1958414417), f = b(f, r, e, h, t[a + 10], 17, -42063), h = b(h, f, r, e, t[a + 11], 22, -1990404162), e = b(e, h, f, r, t[a + 12], 7, 1804603682), r = b(r, e, h, f, t[a + 13], 12, -40341101), f = b(f, r, e, h, t[a + 14], 17, -1502002290), e = v(e, h = b(h, f, r, e, t[a + 15], 22, 1236535329), f, r, t[a + 1], 5, -165796510), r = v(r, e, h, f, t[a + 6], 9, -1069501632), f = v(f, r, e, h, t[a + 11], 14, 643717713), h = v(h, f, r, e, t[a], 20, -373897302), e = v(e, h, f, r, t[a + 5], 5, -701558691), r = v(r, e, h, f, t[a + 10], 9, 38016083), f = v(f, r, e, h, t[a + 15], 14, -660478335), h = v(h, f, r, e, t[a + 4], 20, -405537848), e = v(e, h, f, r, t[a + 9], 5, 568446438), r = v(r, e, h, f, t[a + 14], 9, -1019803690), f = v(f, r, e, h, t[a + 3], 14, -187363961), h = v(h, f, r, e, t[a + 8], 20, 1163531501), e = v(e, h, f, r, t[a + 13], 5, -1444681467), r = v(r, e, h, f, t[a + 2], 9, -51403784), f = v(f, r, e, h, t[a + 7], 14, 1735328473), e = u(e, h = v(h, f, r, e, t[a + 12], 20, -1926607734), f, r, t[a + 5], 4, -378558), r = u(r, e, h, f, t[a + 8], 11, -2022574463), f = u(f, r, e, h, t[a + 11], 16, 1839030562), h = u(h, f, r, e, t[a + 14], 23, -35309556), e = u(e, h, f, r, t[a + 1], 4, -1530992060), r = u(r, e, h, f, t[a + 4], 11, 1272893353), f = u(f, r, e, h, t[a + 7], 16, -155497632), h = u(h, f, r, e, t[a + 10], 23, -1094730640), e = u(e, h, f, r, t[a + 13], 4, 681279174), r = u(r, e, h, f, t[a], 11, -358537222), f = u(f, r, e, h, t[a + 3], 16, -722521979), h = u(h, f, r, e, t[a + 6], 23, 76029189), e = u(e, h, f, r, t[a + 9], 4, -640364487), r = u(r, e, h, f, t[a + 12], 11, -421815835), f = u(f, r, e, h, t[a + 15], 16, 530742520), e = s(e, h = u(h, f, r, e, t[a + 2], 23, -995338651), f, r, t[a], 6, -198630844), r = s(r, e, h, f, t[a + 7], 10, 1126891415), f = s(f, r, e, h, t[a + 14], 15, -1416354905), h = s(h, f, r, e, t[a + 5], 21, -57434055), e = s(e, h, f, r, t[a + 12], 6, 1700485571), r = s(r, e, h, f, t[a + 3], 10, -1894986606), f = s(f, r, e, h, t[a + 10], 15, -1051523), h = s(h, f, r, e, t[a + 1], 21, -2054922799), e = s(e, h, f, r, t[a + 8], 6, 1873313359), r = s(r, e, h, f, t[a + 15], 10, -30611744), f = s(f, r, e, h, t[a + 6], 15, -1560198380), h = s(h, f, r, e, t[a + 13], 21, 1309151649), e = s(e, h, f, r, t[a + 4], 6, -145523070), r = s(r, e, h, f, t[a + 11], 10, -1120210379), f = s(f, r, e, h, t[a + 2], 15, 718787259), h = s(h, f, r, e, t[a + 9], 21, -343485551), e = i(e, l), h = i(h, d), f = i(f, c), r = i(r, o);
                    return [e, h, f, r];
                  }, F = 28;
                  break;
                case 9:
                  F = 10;
                  break;
                case 26:
                  l = function (t, n) {
                    return function (t, n) {
                      var r, i, e, a, u;
                      for (a = f(t), (e = [])[15] = (i = [])[15] = void 0, a.length > 16 && (a = c(a, 8 * t.length)), u = 0; u < 16; u += 1) e[u] = 909522486 ^ a[u], i[u] = 1549556828 ^ a[u];
                      return r = c(e.concat(f(n)), 512 + 8 * n.length), h(c(i.concat(r), 640));
                    }(o(t), o(n));
                  }, F = 8;
                  break;
                case 16:
                  F = 20;
                  break;
                case 4:
                  F = 15;
                  break;
                case 25:
                  F = 16;
                  break;
                case 28:
                  h = function (t) {
                    var n, r, i;
                    for (n = "", i = 32 * t["length"], r = 0; r < i; r += 8) n += String["fromCharCode"](t[r >> 5] >>> r % 32 & 255);
                    return n;
                  }, F = 18;
                  break;
                case 7:
                  v = function (t, n, r, i, e, a, u) {
                    return d(n & i | r & ~i, t, n, e, a, u);
                  }, F = 1;
                  break;
                case 6:
                  F = 9;
                  break;
                case 3:
                  a = function (t) {
                    return function (t) {
                      return h(c(f(t), 8 * t["length"]));
                    }(o(t));
                  }, F = 26;
              }
            }(bn);
          }(Yt);
        } else xn["ERROR_ACTION_TYPE_NULL"] = "在track方法中，action_type参数不能为空！", xn["ERROR_ACTION_TYPE_INVALID"] = ue, xn["ERROR_ACTION_PARAM_KEY_NULL"] = "在track方法中，action_param参数的key不能为空！", xn["ERROR_ACTION_PARAM_KEY_INVALID"] = se, xn["WARN_ACTION_PARAM_KEY_RESERVED"] = oe, xn["ERROR_ACTION_PARAM_VALUE_INVALID"] = ce, xn["ERROR_ACTION_PARAM_VALUE_ARRAY_INVALID"] = fe, xn["ERROR_ACTION_PARAM_VALUE_ARRAY_TYPE_UNUNIQUE"] = he, xn["ERROR_ACTION_PARAM_IS_NOT_OBJECT"] = "action_param 参数不是Object";
      }
      var Pi,
        Gi = $n(Yt["exports"]),
        Oi = "function" == ("undefined" == typeof btoa ? "undefined" : Du(btoa)),
        Fi = "function" == ("undefined" == typeof Buffer ? "undefined" : Du(Buffer)),
        Zi = Gu(Tr);
      try {
        for (Zi.s(); !(Pi = Zi.n()).done;) {
          var ye = Pi.value;
          0 != ye ? 1 != ye ? 2 != ye ? 3 != ye ? 4 != ye ? 5 != ye ? 6 != ye && (7 != ye ? 8 != ye || (En = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, Ln = function (t, n, r, i) {
            for (var e, u = i > 1 ? void 0 : i ? ln(n, r) : n, s = t["length"] - 1; s >= 0; s--) (e = t[s]) && (u = (i ? e(n, r, u) : e(u)) || u);
            return i && u && En(n, r, u), u;
          }, Vn = function () {
            var t, n, r, i, e, a, u, s, o, c, f;
            return f = function (t) {
              function n(n) {
                return t.apply(this, arguments);
              }
              return n.toString = function () {
                return t.toString();
              }, n;
            }(function (t) {
              var n;
              n = this, Zn(this, f), this.cgiBatchSize = Hr.cgiBatchSize, this.reportThreshold = Hr.reportThreshold, this.reportDelay = Hr.reportDelay, this["triggerExecuteSend"] = function (t) {
                var n, r, i, e;
                return i = (n = arguments)["length"] > 1 && void 0 !== n[1] ? n[1] : 0, r = [], function () {
                  for (var n, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
                  return clearTimeout(e), e = setTimeout(function () {
                    var n;
                    n = t["apply"](void 0, s), r["forEach"](function (t) {
                      return t(n);
                    }), r = [];
                  }, i), new Promise(function (t) {
                    return r["push"](t);
                  });
                };
              }(function () {
                n["executeSend"]();
              }, 1000 * this.reportDelay), this.inspectDelay = Hr.inspectDelay, this["inspectTimer"] = void 0, this["isNeedContinueSend"] = !1, this.getBaseInfo = t.getBaseInfo, this.reportLog = t.reportLog, this.queueManager = t.queueManager, this.configManager = t.configManager, this.onReportComplete = t.onReportComplete, this.onReportFail = t.onReportFail, this["flushSend"](), this["startInspectTimer"]();
            }), fr(f, [(t = {}, Pu(t, "key", "batchSend"), Pu(t, "value", function () {
              var t, n, r;
              (n = this["queueManager"]["getReportableActions"](this.reportThreshold))["length"] >= this.reportThreshold ? this.executeSend() : (r = (null == (t = this["configManager"]) ? void 0 : t["getRealTimeActionList"]()) || Hr["realTimeActionList"], n["some"](function (t) {
                return r["indexOf"](t["action_type"]) > -1 && !t["is_retry"];
              }) ? this.executeSend() : this["triggerExecuteSend"]());
              this["startInspectTimer"]();
            }), t), (n = {}, Pu(n, "key", "flushSend"), Pu(n, "value", function () {
              this["executeSend"]();
            }), n), (r = {}, Pu(r, "key", "executeSend"), Pu(r, "value", function () {
              var t;
              if (t = this, !kn["hasDirectGameMask"]) if (f.currentRequestCount >= f.requestConcurrency) this.isNeedContinueSend = !0;else {
                var d, k, m;
                if (this.isNeedContinueSend = !1, k = (f.requestConcurrency - f.currentRequestCount) * this.cgiBatchSize, d = this.queueManager["getReportableActions"](k), !(m = this["getBaseInfo"]())["openid"] && !m["unionid"] && (Si["warn"]("请尽快调用 setOpenId 或 setUnionId 方法设置用户ID！"), d = d["filter"](function (t) {
                  return null == t ? void 0 : t["ad_trace_id"];
                })), !(d.length <= 0)) {
                  k < this.queueManager["getReportableActionsLength"]() && (this.isNeedContinueSend = !0), f.currentRequestCount += Math["ceil"](d.length / this.cgiBatchSize);
                  for (var p = [], g = 0; g < d.length; g += this.cgiBatchSize) {
                    var y;
                    y = this["generateActionReportParams"](d["slice"](g, g + this.cgiBatchSize)), p["push"](this["report"](y));
                  }
                  Promise["all"](p)["then"](function (n) {
                    var r;
                    r = n["some"](function (t) {
                      return t >= 0;
                    }), t["isNeedContinueSend"] && r && t["executeSend"]();
                  })["catch"](function (n) {
                    var r;
                    Si["error"](n), t["reportLog"]((Pu(r = {}, "message", "executeSend catch: "["concat"](n.message)), Pu(r, "log_type", "JS_RUN_ERROR"), Pu(r, "err_stack", n["stack"]), r));
                  });
                }
              }
            }), r), (i = {}, Pu(i, "key", "generateActionReportParams"), Pu(i, "value", function (t) {
              var n, r, i, e, a;
              return a = [], e = [], i = this["getBaseInfo"](), t["forEach"](function (t) {
                var n;
                e.push(t["action_id"]), delete (n = Object["assign"]({}, t)).inner_status, a.push(n);
              }), Pu(r = {}, "data", (Pu(n = {}, "info", i), Pu(n, "actions", a), n)), Pu(r, "actionIdList", e), r;
            }), i), (e = {}, Pu(e, "key", "dealSuccessData"), Pu(e, "value", function (t, n, r) {
              var i;
              [51001, 51003].indexOf(null == t ? void 0 : t.code) > -1 ? this.queueManager["updateActionsForReportFail"](n) : this.queueManager["removeActions"](n), 0 !== (null == t ? void 0 : t.code) && (this["reportLog"]((Pu(i = {}, "log_type", "REQUEST_ERROR"), Pu(i, "code", null == t ? void 0 : t.code), Pu(i, "message", "trace_id: ".concat(null == t ? void 0 : t["trace_id"], "，msg: ").concat(null == t ? void 0 : t.message)), i)), Si["error"]("上报失败：", t)), this.doTrackCallbackFn(this["onReportComplete"], t, r), -1 === [0, 51001, 51003].indexOf(null == t ? void 0 : t.code) && this.doTrackCallbackFn(this["onReportFail"], t, r);
            }), e), (a = {}, Pu(a, "key", "dealFailData"), Pu(a, "value", function (t, n, r) {
              var i;
              this["queueManager"]["updateActionsForReportFail"](n), this["reportLog"]((Pu(i = {}, "log_type", "REQUEST_ERROR"), Pu(i, "code", t.code), Pu(i, "message", t.message), i)), Si["error"]("上报失败：", t), this["doTrackCallbackFn"](this["onReportComplete"], t, r);
            }), a), (u = {}, Pu(u, "key", "report"), Pu(u, "value", function (t) {
              var n, r, i;
              return i = this, n = t["data"], r = t["actionIdList"], this["queueManager"]["updateActionsForReporting"](r), Si["debug"] && (Si.info("上报行为类型: ", le["concat"](n["actions"]["map"](function (t) {
                return t["action_type"];
              })["join"](Iu), be)), Si.info("上报请求参数: ", n)), new Promise(function (t) {
                var e, a, u, s, o, c, h, v, l, b;
                u = Date["now"]();
                try {
                  var I, R, E, D;
                  E = rr((Pu(I = {}, "appid", null == (v = null == n ? void 0 : n.info) ? void 0 : v.appid), Pu(I, "secret_key", null == (a = null == n ? void 0 : n.info) ? void 0 : a.secret_key), Pu(I, "sdk_version", null == (c = null == n ? void 0 : n.info) ? void 0 : c.sdk_version), Pu(I, "timestamp", u), I)), D = Xt(JSON["stringify"](n)), Pu(R = {}, "Client-Time", u), Pu(R, Ru, Gi(D + (null == (h = null == n ? void 0 : n.info) ? void 0 : h["user_action_set_id"]) + (null == (o = null == n ? void 0 : n.info) ? void 0 : o.secret_key) + E)), Pu(R, "Sign-Version", Hr["signVersion"]), Pu(R, "content-type", "text/plain;charset=UTF-8"), s = R, l = D;
                } catch (t) {
                  var N;
                  s = Pu({}, "Client-Time", u), l = n, i["reportLog"]((Pu(N = {}, "log_type", "SIGN_ERROR"), Pu(N, "message", "sign error msg: "["concat"](null == t ? void 0 : t.message)), Pu(N, "err_stack", null == t ? void 0 : t["stack"]), N)), Si["error"](t);
                }
                wx["request"]((Pu(e = {}, "url", Eu), Pu(e, "method", "POST"), Pu(e, "timeout", (null == (b = i["configManager"]) ? void 0 : b["getRequestTimeout"]()) || Hr["requestTimeout"]), Pu(e, "header", s), Pu(e, "data", l), Pu(e, "success", function (e) {
                  var a, u, s, o, c, h;
                  if (Si["devLog"]("上报接口返回码:", null == (c = null == e ? void 0 : e.data) ? void 0 : c.code), s = (null == (h = null == e ? void 0 : e["header"]) ? void 0 : h["Server-Time"]) || -1, vi["revise"](s), f["currentRequestCount"] -= 1, 200 === (null == e ? void 0 : e.statusCode)) return i["dealSuccessData"](null == e ? void 0 : e.data, r, n), void t((null == e ? void 0 : e.data).code);
                  u = "";
                  try {
                    u = "object" == yr(null == e ? void 0 : e.data) ? JSON["stringify"](null == e ? void 0 : e.data) : null == e ? void 0 : e.data;
                  } catch (t) {
                    Si["error"](t);
                  }
                  Pu(a = {}, "code", "number" == Du(null == e ? void 0 : e.statusCode) ? -1 * e.statusCode : -888), Pu(a, "message", "statusCode: ".concat(null == e ? void 0 : e.statusCode, ", data: ").concat(u)), o = a, i["dealFailData"](o, r, n), t(o.code);
                }), Pu(e, "fail", function (e) {
                  var a, u;
                  Si["devLog"]("上报失败:", e), f["currentRequestCount"] -= 1, Pu(a = {}, "code", "number" == Du(null == e ? void 0 : e.errno) ? -1 * e.errno : -999), Pu(a, "message", null == e ? void 0 : e["errMsg"]), u = a, i["dealFailData"](u, r, n), t(u.code);
                }), e));
              });
            }), u), (s = {}, Pu(s, "key", "startInspectTimer"), Pu(s, "value", function () {
              var t;
              t = this, clearTimeout(this.inspectTimer), this.inspectTimer = setTimeout(function () {
                f.currentRequestCount >= f.requestConcurrency && (f.currentRequestCount = f.requestConcurrency - 1), t["executeSend"](), t["startInspectTimer"]();
              }, 1000 * this["inspectDelay"]);
            }), s), (o = {}, Pu(o, "key", "doTrackCallbackFn"), Pu(o, "value", function (t, n, r) {
              if ("function" == Du(t)) try {
                for (var _ = [], M = 0; M < r.actions.length; M++) if (!r.actions[M]["is_sdk_auto_track"]) {
                  var S, A, C, x, T, L;
                  T = (x = r.actions[M]).action_type, C = x.action_param, L = x.action_id, A = x.action_time, _["push"]((Pu(S = {}, "action_type", T), Pu(S, "action_param", C), Pu(S, "action_id", L), Pu(S, "action_time", A), S));
                }
                var I, R, E, D, N, P, G, O, F;
                if (_.length) G = (O = r.info).user_action_set_id, D = O.appid, P = O.openid, N = O.unionid, F = O.user_unique_id, t((Pu(E = {}, "code", null == n ? void 0 : n.code), Pu(E, "message", null == n ? void 0 : n.message), Pu(E, "data", (Pu(R = {}, "actions", _), Pu(R, "info", (Pu(I = {}, "user_action_set_id", G), Pu(I, "appid", D), Pu(I, "openid", P), Pu(I, "unionid", N), Pu(I, "user_unique_id", F), I)), R)), E));
              } catch (t) {
                Si["error"]("返回上报回调数据异常：", t);
              }
            }), o)], [(c = {}, Pu(c, "key", "setRequestConcurrency"), Pu(c, "value", function (t) {
              "number" == Du(t) ? t < 1 ? Si.error("网络请求最大并发量不能小于1") : t > 10 ? Si.error("网络请求最大并发量不能大于10") : f["requestConcurrency"] = t : Si.error("网络请求最大并发量需设置为数字");
            }), c)]), f;
          }()) : "function" == ("undefined" == typeof TextDecoder ? "undefined" : Du(TextDecoder)) && new TextDecoder()) : (Sn = Oi ? function (t) {
            return btoa(t);
          } : Fi ? function (t) {
            return Buffer["from"](t, "binary")["toString"]("base64");
          } : function (t) {
            for (var n, r, i, e, h = "", v = t.length % 3, l = 0; l < t.length;) {
              if ((r = t.charCodeAt(l++)) > 255 || (i = t.charCodeAt(l++)) > 255 || (e = t.charCodeAt(l++)) > 255) throw new TypeError("invalid character found");
              h += dn[(n = r << 16 | i << 8 | e) >> 18 & 63] + dn[n >> 12 & 63] + dn[n >> 6 & 63] + dn[63 & n];
            }
            return v ? h["slice"](0, v - 3) + "==="["substring"](v) : h;
          }, yn = Fi ? function (t) {
            return Buffer["from"](t)["toString"]("base64");
          } : function (t) {
            for (var a = [], u = 0, s = t["length"]; u < s; u += 4096) a["push"](_n["apply"](null, t["subarray"](u, u + 4096)));
            return Sn(a["join"](""));
          }, An = function (t) {
            var n;
            return t["length"] < 2 ? (n = t.charCodeAt(0)) < 128 ? t : n < 2048 ? _n(192 | n >>> 6) + _n(128 | 63 & n) : _n(224 | n >>> 12 & 15) + _n(128 | n >>> 6 & 63) + _n(128 | 63 & n) : (n = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320), _n(240 | n >>> 18 & 7) + _n(128 | n >>> 12 & 63) + _n(128 | n >>> 6 & 63) + _n(128 | 63 & n));
          }, Tn = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, hn = Fi ? function (t) {
            return Buffer["from"](t, "utf8")["toString"]("base64");
          } : Zt ? function (t) {
            return yn(Zt["encode"](t));
          } : function (t) {
            return Sn(function (t) {
              return t["replace"](Tn, An);
            }(t));
          }, Xt = function (t) {
            var n;
            return (n = arguments)["length"] > 1 && void 0 !== n[1] && n[1] ? function (t) {
              return t.replace(/=/g, "").replace(/[+\/]/g, function (t) {
                return ve == t ? Tt : $t;
              });
            }(hn(t)) : hn(t);
          }) : "function" == Du(Uint8Array.from) && Uint8Array.from.bind(Uint8Array) : _n = String["fromCharCode"].bind(String) : (Vn["currentRequestCount"] = 0, Vn.requestConcurrency = Hr.requestConcurrency, Ln([lr], Vn.prototype, "batchSend", 1), Ln([lr], Vn.prototype, "flushSend", 1), Ln([lr], Vn.prototype, "executeSend", 1)) : (Zt = "function" == ("undefined" == typeof TextEncoder ? "undefined" : Du(TextEncoder)) ? new TextEncoder() : void 0, dn = Array.prototype.slice["call"](kt)) : (pn = {}, dn["forEach"](function (t, n) {
            return pn[t] = n;
          }));
        }
      } catch (t) {
        Zi.e(t);
      } finally {
        Zi.f();
      }
      for (var we = function () {
          var t, n;
          return fr(n = function () {
            Zn(this, n);
          }, [(t = {}, Pu(t, "key", "install"), Pu(t, "value", function (t, n) {
            var u = function (n) {
              cn["subscribe"](n, function (n) {
                var r = arguments,
                  i = r["length"] > 1 && void 0 !== r[1] ? r[1] : {};
                return function (r) {
                  var u = arguments,
                    s = u["length"] > 1 && void 0 !== u[1] ? u[1] : {};
                  kn["hasDirectGameMask"] || ("ENTER_FOREGROUND" === n && (kn["activeDuration"] = Date["now"]()), t["track"](n, Object["assign"](i || {}, s, ar(ar({}, De, !0), Ne, r))));
                };
              }(n));
            };
            u("TICKET"), u("START_APP"), u("ENTER_FOREGROUND"), u("ENTER_BACKGROUND"), "all" === n && (u("LOGIN"), u("ADD_TO_WISHLIST"), u("SHARE"), u("CREATE_GAME_CLUB"), u("TAP_GAME_CLUB"), u("CREATE_GAME_ROOM"), u("JOIN_GAME_ROOM"), u("START_PAY"), u("FINISH_PAY"));
          }), t)]), n;
        }(), _e = function () {
          var t, n, r, i, e, a, u, s;
          return fr(s = function () {
            Zn(this, s), this.special_method_symbol = Symbol("special_method_symbol");
          }, [(t = {}, Pu(t, "key", "onPurchase"), Pu(t, "value", function (t) {
            return "number" != Du(t) && Si.warn("付费金额需要为数字"), t <= 0 && Si.warn("付费金额需要大于0"), this["wrapTrack"]("PURCHASE", Pu({}, "value", t));
          }), t), (n = {}, Pu(n, "key", "onEnterForeground"), Pu(n, "value", function () {
            return this["wrapTrack"]("ENTER_FOREGROUND");
          }), n), (r = {}, Pu(r, "key", "onEnterBackground"), Pu(r, "value", function () {
            return this["wrapTrack"]("ENTER_BACKGROUND");
          }), r), (i = {}, Pu(i, "key", "onAppStart"), Pu(i, "value", function () {
            return this["wrapTrack"]("START_APP");
          }), i), (e = {}, Pu(e, "key", "onAppQuit"), Pu(e, "value", function () {
            return this["wrapTrack"]("APP_QUIT");
          }), e), (a = {}, Pu(a, "key", "onAddToWishlist"), Pu(a, "value", function () {
            return this["wrapTrack"]("ADD_TO_WISHLIST");
          }), a), (u = {}, Pu(u, "key", "wrapTrack"), Pu(u, "value", function (t, n) {
            return this["track"](t, Object["assign"](n || {}, ar({}, this["special_method_symbol"], 1)));
          }), u)]), s;
        }(), Me = function (t) {
          var n, r, i, e;
          pr(e = function () {
            var t = arguments;
            return Zn(this, e), o["apply"](this, t);
          }, _e);
          var o = qn(e);
          return fr(e, [(n = {}, Pu(n, "key", "onRegister"), Pu(n, "value", function () {
            return this["wrapTrack"]("REGISTER");
          }), n), (r = {}, Pu(r, "key", "onCreateRole"), Pu(r, "value", function (t) {
            return t && "string" != Du(t) && Si["warn"]("角色名称需要为字符串"), this["wrapTrack"]("CREATE_ROLE", t ? Pu({}, "name", t) : {});
          }), r), (i = {}, Pu(i, "key", "onTutorialFinish"), Pu(i, "value", function () {
            return this["wrapTrack"]("TUTORIAL_FINISH");
          }), i)]), e;
        }(), Ae = function () {
          var t = [];
          return function () {
            var n,
              a = (Pu(n = {}, "requestActionList", 0), Pu(n, "getActionList", 0), n);
            return a.requestActionList = function () {
              try {
                ur(function () {
                  var n = function () {
                    var t,
                      e = (Pu(t = {}, "conf_name", 0), Pu(t, "conf_key", 0), t);
                    return e.conf_name = 0, e.conf_key = 0, e;
                  }["apply"]();
                  return n["conf_name"] = "data_nexus_common", n["conf_key"] = "action_types", n;
                }["apply"]())["then"](function (n) {
                  gi(n) && (t = n);
                });
              } catch (t) {
                Si["error"](t);
              }
            }, a.getActionList = function () {
              return t;
            }, a;
          }["apply"]();
        }(), Ce = 0, xe = Jt; Ce < xe.length; Ce++) {
        var Te = xe[Ce];
        if (-1 == Te) ;else {
          if (0 == Te) continue;
          if (1 == Te) continue;
          if (2 == Te) continue;
        }
      }
      for (var Le = Object.defineProperty, Ie = Object.getOwnPropertyDescriptor, Re = function (t, n, r, i) {
          for (var e, u = i > 1 ? void 0 : i ? Ie(n, r) : n, s = t["length"] - 1; s >= 0; s--) (e = t[s]) && (u = (i ? e(n, r, u) : e(u)) || u);
          return i && u && Le(n, r, u), u;
        }, Ee = Symbol("initializedInstance"), De = Symbol("autoTrack"), Ne = Symbol("actionTime"), Pe = function (t) {
          var n, r, i, e, a, u, s, o, c, f, h, v, l, b, d, k, m, p, g;
          pr(g = function (t) {
            var n;
            if (Zn(this, g), (n = x["call"](this))["env"] = "production", n["sdk_version"] = "1.5.8", n["sdk_name"] = "@dn-sdk/minigame", n.deviceInfo = {}, n.gameInfo = {}, n.session_id = "", n["log_id"] = 0, n.inited = !1, n.initErrMsg = "", null == wx || !wx["createCanvas"]) return n.initErrMsg = "不支持非微信小游戏中使用", Si.error(n.initErrMsg), Wn(n);
            var D = sr();
            if (g[Ee]["length"] >= D["maxSdkInstance"]) return n.initErrMsg = "初始化超过上限", Si.error(n.initErrMsg), Wn(n);
            var N = function (t) {
                return pi(t) ? (function (t) {
                  var u = ["user_action_set_id", "secret_key", "appid", "openid", "unionid", "user_unique_id", "auto_track", "auto_attr", "on_report_fail", "on_report_complete"];
                  for (var s in t) u["includes"](s) || Si["warn"](de["concat"](s, ke));
                }(t), "number" != Du(t.user_action_set_id) ? "user_action_set_id 参数需为 number 类型" : t.user_action_set_id <= 0 ? "user_action_set_id 参数需大于 0" : "string" != Du(t.secret_key) ? "secret_key 参数需为 string 类型" : "" === t.secret_key.trim() ? "缺少 secret_key 参数" : 32 !== t.secret_key["length"] ? "secret_key 参数需为 32 位字符串" : "string" != Du(t.appid) ? "appid 参数需为 string 类型" : "" !== t.appid.trim() || "缺少 appid") : "初始化参数需为 object 类型";
              }(t),
              P = oi();
            if (!0 !== N) return n.initErrMsg = N, Si.error(N), Wn(n);
            var G = null == P ? void 0 : P["appId"];
            if (G && G !== t["appid"]) return n.initErrMsg = "初始化传入的appid与当前小游戏appid不一致", Si.error(n.initErrMsg), Wn(n);
            n.config = t, Qn(t, "auto_track") || (n.config.auto_track = wr("autoTrack")), n.openid = t.openid, n.unionid = t.unionid, n.user_unique_id = t.user_unique_id, n["onReportComplete"] = t["on_report_complete"], n["onReportFail"] = t["on_report_fail"], n["saveValidOpenidToStorage"]();
            var O = t["user_action_set_id"];
            return g[Ee]["includes"](O) ? (n.initErrMsg = "同个数据源["["concat"](O, "]只能初始化一次"), Si.error(n.initErrMsg), n.reportLog(function () {
              var t,
                a = (Pu(t = {}, "log_type", 0), Pu(t, "message", 0), t);
              return a.log_type = "JS_RUN_ERROR", a.message = n["initErrMsg"], a;
            }.apply()), Wn(n)) : (n.reportLog = n.reportLog.bind(cr(n)), n.getTrackBaseInfo = n.getTrackBaseInfo.bind(cr(n)), kn["activeDuration"] = Date["now"](), n.deviceInfo = ni(), n.gameInfo = Qt(), n.session_id = Yn(), n["queueManage"] = new Cn(function () {
              var t,
                a = (Pu(t = {}, "userActionSetId", 0), Pu(t, "maxLength", 0), Pu(t, "ogEvents", 0), t);
              return a.userActionSetId = O, a.maxLength = D["maxQueueLength"], a.ogEvents = Hn, a;
            }.apply()), n["actionReporter"] = new Vn(function () {
              var t,
                f = (Pu(t = {}, "getBaseInfo", 0), Pu(t, "reportLog", 0), Pu(t, "queueManager", 0), Pu(t, "configManager", 0), Pu(t, "onReportComplete", 0), Pu(t, "onReportFail", 0), t);
              return f.getBaseInfo = n["getTrackBaseInfo"], f.reportLog = n.reportLog, f.queueManager = n["queueManage"], f.configManager = Bn, f.onReportComplete = n.onReportComplete, f.onReportFail = n.onReportFail, f;
            }.apply()), n.inited = !0, g[Ee]["push"](O), n["useAutoTrack"](), n["doReportOnEnterBackground"](), "release" === (null == P ? void 0 : P["envVersion"]) ? (Si["info"]("初始化成功"), Wn(n)) : (function (t) {
              var i = t["sdk_version"],
                e = t["default_download_url"],
                a = t["fail_handler"];
              ur(function () {
                var n,
                  a = (Pu(n = {}, "conf_name", 0), Pu(n, "conf_key", 0), n);
                return a.conf_name = t.conf_name, a.conf_key = t.conf_key, a;
              }["apply"]())["then"](function (t) {
                if (pi(t)) {
                  var l = null == t ? void 0 : t["blackVersions"],
                    b = null == t ? void 0 : t["minVersion"],
                    d = null == t ? void 0 : t["bestVersion"],
                    k = null == t ? void 0 : t["downloadUrl"],
                    m = e;
                  return k && /^https/["test"](k) && (m = k), gi(l) && (null == l ? void 0 : l["indexOf"](i)) > -1 ? (null == a || a(), void Si.error("初始化失败！当前SDK版本存在兼容问题，请尽快升级至最新版！下载地址：".concat(m))) : b && en(i, b) < 0 ? (null == a || a(), void Si.error("初始化失败！当前SDK版本过低，请尽快升级至最新版！下载地址：".concat(m))) : (d && en(i, d) < 0 && Si["warn"]("新版本SDK已上线，强烈建议您升级至最新版，尽早享受新特性！下载地址：".concat(m)), void Si.info("初始化成功"));
                }
                Si.info("初始化成功");
              })["catch"](function () {
                Si["info"]("初始化成功");
              });
            }(function () {
              var t,
                o = (Pu(t = {}, "conf_name", 0), Pu(t, "conf_key", 0), Pu(t, "sdk_version", 0), Pu(t, "default_download_url", 0), Pu(t, "fail_handler", 0), t);
              return o.conf_name = "mini_game_sdk_common", o.conf_key = "version", o.sdk_version = n.sdk_version, o.default_download_url = me, o.fail_handler = function () {
                n["inited"] = !1;
              }, o;
            }.apply()), Ae["requestActionList"](), Mr(t.openid), Wn(n)));
          }, Me);
          var x = qn(g);
          return fr(g, [(n = {}, Pu(n, "key", "getInitResult"), Pu(n, "value", function () {
            var t;
            return Pu(t = {}, "inited", this.inited), Pu(t, "initErrMsg", this.initErrMsg), t;
          }), n), (r = {}, Pu(r, "key", "track"), Pu(r, "value", function (t, n) {
            var r, i, e, a;
            if (!this["inited"] || !this.queueManage) return Si.error("上报失败，请先完成初始化"), Pu(r = {}, "code", 100), Pu(r, "message", "未完成初始化或重复初始化导致初始化失败，请先完成初始化"), r;
            var p = xn["validateActionType"](t),
              g = xn["validateActionParam"](n);
            if (p && g) {
              var y;
              !this["openid"] && !this["unionid"] && Si["warn"]("缺少 openid 或 unionid");
              var w = wr("actionParamMaxLength");
              if (JSON["stringify"](n || {})["length"] > w) return Si.error("监测到超过".concat(w, "的上报日志：").concat(t, Ui).concat(n)), Pu(y = {}, "code", 102), Pu(y, "message", "action_param 参数过大，不能超过 ".concat(w, " 字符")), y;
              var _ = !(null == n || !n[De]),
                M = this["createAction"](t, n || {}, _);
              "release" !== (null == (e = oi()) ? void 0 : e["envVersion"]) && er(M, "minigame");
              var S = this.queueManage["addAction"](M);
              return null == (a = this["actionReporter"]) || a["batchSend"](), S;
            }
            return Pu(i = {}, "code", 101), Pu(i, "message", "action_type 或 action_param 参数错误"), i;
          }), r), (i = {}, Pu(i, "key", "flush"), Pu(i, "value", function () {
            var t;
            null == (t = this["actionReporter"]) || t["flushSend"]();
          }), i), (e = {}, Pu(e, "key", "setOpenId"), Pu(e, "value", function (t) {
            var n, r, i;
            if (t && "string" == Du(t)) return this["openid"] = t, this["gameInfo"]["ad_trace_id"] && !ti["getSync"]("OPENID") && cn["publish"]("START_APP"), this["flush"](), this["saveValidOpenidToStorage"](), "release" !== (null == (i = oi()) ? void 0 : i["envVersion"]) && Mr(t), Pu(n = {}, "code", 0), Pu(n, "message", "成功"), n;
            return Si["error"]("openid 格式错误"), Pu(r = {}, "code", 101), Pu(r, "message", "openid 格式错误"), r;
          }), e), (a = {}, Pu(a, "key", "setUnionId"), Pu(a, "value", function (t) {
            var n, r;
            if (t && "string" == Du(t)) return this["unionid"] = t, this["flush"](), Pu(n = {}, "code", 0), Pu(n, "message", "成功"), n;
            return Si["error"]("unionid 格式错误"), Pu(r = {}, "code", 101), Pu(r, "message", "unionid 格式错误"), r;
          }), a), (u = {}, Pu(u, "key", "setUserUniqueId"), Pu(u, "value", function (t) {
            var n, r;
            if (t && "string" == Du(t)) return this["user_unique_id"] = t, Pu(n = {}, "code", 0), Pu(n, "message", "成功"), n;
            return Si["error"]("user_unique_id 格式错误"), Pu(r = {}, "code", 101), Pu(r, "message", "user_unique_id 格式错误"), r;
          }), u), (s = {}, Pu(s, "key", "getStrategy"), Pu(s, "value", function (t, n) {
            var r;
            if (this["inited"]) {
              if ("[object Object]" === Object.prototype.toString.call(t)) {
                if ("[object Function]" === Object.prototype.toString.call(n)) {
                  try {
                    if ((null == (r = JSON["stringify"](t)) ? void 0 : r["length"]) > 10000) return void Si.error("获取托管策略的入参的字符串长度不能超过10000");
                  } catch (t) {
                    Si["log"]("获取托管策略的入参解析异常：", t);
                  }
                  !function (t, n, r) {
                    try {
                      var y,
                        w,
                        _,
                        M,
                        S,
                        A,
                        C = ni(),
                        x = (Pu(_ = {}, "sys_info", (Pu(y = {}, "sdk_ver", "1.5.8"), Pu(y, "os", null == C ? void 0 : C.os), Pu(y, "os_ver", null == C ? void 0 : C["os_version"]), y)), Pu(_, "info", (Pu(w = {}, "user_action_set_id", null == r ? void 0 : r.user_action_set_id), Pu(w, "secret_key", null == r ? void 0 : r.secret_key), Pu(w, "app_id", null == r ? void 0 : r.appid), Pu(w, "sdk_version", "1.5.8"), w)), _),
                        T = Object["assign"](x, Pu({}, "custom_param", t)),
                        L = Date["now"]();
                      try {
                        var I,
                          R,
                          E = rr((Pu(I = {}, "appid", null == r ? void 0 : r.appid), Pu(I, "secret_key", null == r ? void 0 : r.secret_key), Pu(I, "sdk_version", null == r ? void 0 : r.sdk_version), Pu(I, "timestamp", L), I)),
                          D = Xt(JSON["stringify"](T));
                        Pu(R = {}, "Client-Time", L), Pu(R, Ru, Gi(D + (null == r ? void 0 : r.user_action_set_id) + (null == r ? void 0 : r.secret_key) + E)), Pu(R, "Sign-Version", Hr["signVersion"]), Pu(R, "content-type", "text/plain;charset=UTF-8"), S = R, A = D;
                      } catch (t) {
                        S = Pu({}, "Client-Time", L), A = T, Si.error(t);
                      }
                      wx["request"]((Pu(M = {}, "url", pe), Pu(M, "method", "POST"), Pu(M, "timeout", Hr["requestTimeout"]), Pu(M, "header", S), Pu(M, "data", A), Pu(M, "success", function (t) {
                        if (200 !== (null == t ? void 0 : t.statusCode)) {
                          var o,
                            c = "";
                          try {
                            c = "object" == yr(null == t ? void 0 : t.data) ? JSON["stringify"](null == t ? void 0 : t.data) : null == t ? void 0 : t.data;
                          } catch (t) {
                            Si["error"](t);
                          }
                          var f = (Pu(o = {}, "code", "number" == Du(null == t ? void 0 : t.statusCode) ? -1 * t.statusCode : -888), Pu(o, "message", "statusCode: ".concat(null == t ? void 0 : t.statusCode, ", data: ").concat(c)), o);
                          n(f);
                        } else n(null == t ? void 0 : t.data);
                      }), Pu(M, "fail", function (t) {
                        var r;
                        Si["devLog"]("获取托管策略失败:", t);
                        var u = (Pu(r = {}, "code", "number" == Du(null == t ? void 0 : t.errno) ? -1 * t.errno : -999), Pu(r, "message", null == t ? void 0 : t["errMsg"]), r);
                        n(u);
                      }), M));
                    } catch (t) {
                      Si.error(t);
                    }
                  }(t, n, this["getTrackBaseInfo"]());
                } else Si.error("获取托管策略的回调函数需为 function 类型");
              } else Si.error("获取托管策略的入参需为 object 类型");
            } else Si.error("请先初始化SDK");
          }), s), (o = {}, Pu(o, "key", "doReportOnEnterBackground"), Pu(o, "value", function () {
            var t = this;
            wx["onHide"](function () {
              var n, r;
              null == (n = t["actionReporter"]) || n["flushSend"](), null == (r = t["queueManage"]) || r["reportLostNum"]();
            });
          }), o), (c = {}, Pu(c, "key", "getTrackBaseInfo"), Pu(c, "value", function () {
            var t,
              n,
              h = oi();
            return Object["assign"]({}, this["deviceInfo"], function (t, n) {
              var e = {};
              return ["user_action_set_id", "appid", "openid", "secret_key", "user_unique_id", "unionid"]["forEach"](function (n) {
                Qn(t, n) && (e[n] = t[n]);
              }), e;
            }(this["config"]), (Pu(n = {}, "local_id", ri()), Pu(n, "sdk_name", this.sdk_name), Pu(n, "sdk_version", this.sdk_version), Pu(n, "openid", this.openid || si()), Pu(n, "unionid", this.unionid), Pu(n, "user_unique_id", this.user_unique_id), Pu(n, "inner_param", (Pu(t = {}, "app_env_version", h["envVersion"]), Pu(t, "app_version", h["version"]), t)), n));
          }), c), (f = {}, Pu(f, "key", "createAction"), Pu(f, "value", function (t, n) {
            var r,
              m = arguments,
              p = m["length"] > 2 && void 0 !== m[2] && m[2];
            null != n && n[De] && delete n[De];
            var g = Date["now"]();
            null != n && n[Ne] && (g = null == n ? void 0 : n[Ne], delete n[Ne]);
            var y = (Pu(r = {}, "action_id", Yn()), Pu(r, "action_param", n), Pu(r, "action_time", g), Pu(r, "action_type", t), Pu(r, "is_retry", !1), Pu(r, "is_sdk_auto_track", p), Pu(r, "retry_count", 0), Pu(r, "revised_action_time", vi["getRevisedcurrentTimeMillis"]()), Pu(r, "log_id", ++this.log_id), Pu(r, "session_id", this.session_id), Pu(r, "pkg_channel_id", this.gameInfo.pkg_channel_id), Pu(r, "source_scene", this.gameInfo.source_scene), Pu(r, "network_type", ii()), Pu(r, "ad_trace_id", this.gameInfo.ad_trace_id), Pu(r, "channel", this["getChannelByActionType"](t)), r);
            return null != n && n[this["special_method_symbol"]] && (this.addActionInnerParam(y, "is_special_method", !0), delete n[this.special_method_symbol]), Bn["getChannelClaimActionList"]()["indexOf"](t) > -1 && this.gameInfo.launch_options && this.addActionInnerParam(y, "launch_options", this.gameInfo.launch_options), y;
          }), f), (h = {}, Pu(h, "key", "addActionInnerParam"), Pu(h, "value", function (t, n, r) {
            t.inner_param && pi(t.inner_param) ? t.inner_param[n] = r : t.inner_param = ar({}, n, r);
          }), h), (v = {}, Pu(v, "key", "getChannelByActionType"), Pu(v, "value", function (t) {
            var e = "";
            return Bn["getChannelClaimActionList"]().indexOf(t) > -1 ? e = this["gameInfo"]["channel"] || "" : Bn["getNoClaimActionList"]().indexOf(t) > -1 && (e = "UNKNOWN"), e;
          }), v), (l = {}, Pu(l, "key", "reportLog"), Pu(l, "value", function (t) {
            var n,
              r,
              i,
              c = (Pu(n = {}, "user_action_set_id", null == (r = this.config) ? void 0 : r.user_action_set_id), Pu(n, "appid", null == (i = this.config) ? void 0 : i.appid), Pu(n, "session_id", this.session_id), n);
            mr(Object["assign"](c, t));
          }), l), (b = {}, Pu(b, "key", "useAutoTrack"), Pu(b, "value", function () {
            var t;
            if (null != (t = this["config"]) && t["auto_track"]) {
              var e = !0,
                a = ti["getSync"]("REMOTE_CONFIG");
              (null == a ? void 0 : a.ap) === "TRUE" ? e = !0 : (null == a ? void 0 : a.ap) === "FALSE" && (e = !1), "devtools" === ni()["wx_platform"] && (e = !0), new we()["install"](this, e ? "all" : "lifecycle"), Nn(), e && fn(), this["getAutoProxyRemoteConfig"]();
            }
          }), b), (d = {}, Pu(d, "key", "getAutoProxyRemoteConfig"), Pu(d, "value", function () {
            var t,
              n,
              r,
              i,
              l = ni();
            l.os && l.os_version && null != (r = this.config) && r.user_action_set_id && function (t) {
              return new Promise(function (n) {
                var r;
                wx["request"]((Pu(r = {}, "method", "POST"), Pu(r, "url", ge), Pu(r, "data", t), Pu(r, "timeout", Hr["requestTimeout"]), Pu(r, "success", function (t) {
                  dr(t, n, "minigame/get"), Ar(t);
                }), Pu(r, "fail", function (t) {
                  Jn(t, "minigame/get");
                }), r));
              });
            }((n = {}, Pu(n, "conf_name", "MG"), Pu(n, "conf_param", (t = {}, Pu(t, "user_action_set_id", null == (i = this.config) ? void 0 : i.user_action_set_id), Pu(t, "sdk_version", this.sdk_version), Pu(t, "os_type", (null == l ? void 0 : l.os) || ""), Pu(t, "os_version", function (t) {
              try {
                return t && "string" == Du(t) ? -1 === (t = t["replace"](/\s/g, ""))["indexOf"](Hi) ? t : t["split"](Hi)["slice"](0, 2)["join"](Hi) : "";
              } catch (n) {
                return t;
              }
            }(l.os_version)), Pu(t, "device_brand", (null == l ? void 0 : l.device_brand) || ""), Pu(t, "weixin_lib_version", (null == l ? void 0 : l["wx_lib_version"]) || ""), Pu(t, "weixin_version", (null == l ? void 0 : l["wx_version"]) || ""), t)), n))["then"](function (t) {
              pi(t) && ti["setSync"]("REMOTE_CONFIG", t);
            });
          }), d), (k = {}, Pu(k, "key", "saveValidOpenidToStorage"), Pu(k, "value", function () {
            this.openid && function (t) {
              return /^[a-zA-Z0-9_-]{28,30}$/["test"](t);
            }(this.openid) && ti["setSync"]("OPENID", this.openid);
          }), k)], [(m = {}, Pu(m, "key", "setRequestConcurrency"), Pu(m, "value", function (t) {
            Vn["setRequestConcurrency"](t);
          }), m), (p = {}, Pu(p, "key", "setDebug"), Pu(p, "value", function (t) {
            Si["debug"] = t;
          }), p)]), g;
        }(), Ge = t("SDK", Pe), Oe = 0, Fe = Lr; Oe < 1;) switch (++Oe, Fe) {
        case 0:
          Ge[Ee] = [], Re([lr], Ge.prototype, "track", 1), Re([lr, function (t, n, r) {
            var i;
            return i = r.value, r.value = function () {
              var t;
              if (t = arguments, this["inited"]) {
                for (var a = t["length"], u = new Array(a), s = 0; s < a; s++) u[s] = t[s];
                return i["apply"](this, u);
              }
              Si["error"]("上报失败，请先完成初始化");
            }, r;
          }], Ge.prototype, "flush", 1), Re([lr], Ge.prototype, "setOpenId", 1), Re([lr], Ge.prototype, "setUnionId", 1), Re([lr], Ge.prototype, "setUserUniqueId", 1), Re([lr], Ge.prototype, "getStrategy", 1), Re([lr], Ge.prototype, "doReportOnEnterBackground", 1), Re([lr], Ge.prototype, "getTrackBaseInfo", 1), Re([lr], Ge.prototype, "useAutoTrack", 1), cclegacy._RF["pop"](), Fe = 0;
      }
    }, i;
  }["bind"](this)["apply"]();
});