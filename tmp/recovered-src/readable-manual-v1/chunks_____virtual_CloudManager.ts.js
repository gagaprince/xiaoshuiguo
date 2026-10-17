(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o,
    c = to;
  return function () {
    var c,
      f,
      h = to[5],
      v = "setters",
      l = "execute";
    return Pu(c = {}, "setters", 0), Pu(c, "execute", 0), (f = c)["setters"] = [function (t) {
      var i = to;
      n = t["asyncToGenerator"], r = t["extends"];
    }, function (t) {
      var n = to;
      i = t["cclegacy"], e = t["sys"];
    }, function (t) {
      a = t["default"];
    }, function (t) {
      u = t["default"];
    }, function (t) {
      var n = to;
      s = t["Log"], o = t["Warn"];
    }], f["execute"] = function () {
      var c,
        f = to,
        h = f[5],
        v = f[4],
        l = f[7],
        b = "_RF";
      i["_RF"]["push"]({}, "59aadvBsNVHLZzOZru52DGq", "CloudManager", void 0), (c = t("default", function () {
        var t,
          i = to,
          c = i[10];
        return (t = function () {})["init"] = function () {
          var t;
          return t = n(Nu().mark(function t() {
            var n, r, i, s, o, c, f, h, v, l, b, d, k, m, p, g;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], i = n[6], s = n[9], o = n[4][32], c = n[0][7], f = n[6][2], h = n[3][91], v = n[1][0], l = n[7][78], b = n[21][0], d = this, this[o] || (this[o] = !0, !window[c] || e[f] != e[i[42]][s[56]])) {
                    t.next = 13;
                    break;
                  }
                  return (k = window[c])[h][n[2][14]](function () {
                    var t,
                      n = to;
                    return (t = function () {
                      var t,
                        n = "env";
                      return (t = Pu({}, "env", 0))["env"] = 0, t;
                    }["apply"]())["env"] = "cloudbase-4gnwt8be5f2000b2", t;
                  }[n[3][0]]()), this[n[0][27]] = k[h][i[226]](), k[n[19][7]](function (t) {
                    var n,
                      r = to,
                      i = "stopped",
                      e = "pendingData";
                    t["isConnected"] ? (d["stopped"] = !1, d["pendingData"] && !d["saving"] && (n = d["pendingData"], d["pendingData"] = null, d["realSaveUser"](n))) : d["stopped"] = !0;
                  }), t.next = 7, this[n[7][202]]();
                case 7:
                  if (!(m = t.sent)) {
                    t.next = 13;
                    break;
                  }
                  return t.next = 11, this[s[113]](m);
                case 11:
                  p = t.sent, u[v][f]()[r[18]] = m, p && 0 !== p[r[0]] ? (g = p[0], this[l] = g[n[1][20]], a[v][b](g)) : (this[l] = null, a[v][b](null));
                case 13:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), t["sleep"] = function (t) {
          return new Promise(function (n) {
            return setTimeout(n, t);
          });
        }, t["retryRequest"] = function () {
          var t;
          return t = n(Nu().mark(function t(n) {
            var r, i, e, a;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  r = to, i = ro, e = 1;
                case 2:
                  if (!(e <= 3)) {
                    t.next = 19;
                    break;
                  }
                  return t.prev = 3, t.next = 6, n();
                case 6:
                  return t.abrupt("return", t.sent);
                case 9:
                  if (t.prev = 9, t.t0 = t.catch(3), !(e >= 3)) {
                    t.next = 13;
                    break;
                  }
                  return t.abrupt("return", null);
                case 13:
                  return a = i[42] * e, t.next = 16, this[r[3][133]](a);
                case 16:
                  e++, t.next = 2;
                  break;
                case 19:
                  return t.abrupt("return", null);
                case 20:
                case "end":
                  return t.stop();
              }
            }, t, this, [[3, 9]]);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["getOpenId"] = function () {
          var t;
          return t = n(Nu().mark(function t() {
            var n, r, i, e, a;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[4], !this[i = n[4][67]]) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return", this[i]);
                case 3:
                  return e = window[n[0][7]], t.next = 6, this[n[10][46]](function () {
                    var t = to,
                      n = t[3];
                    return e["cloud"]["callFunction"](function () {
                      var t,
                        n = to;
                      return (t = function () {
                        var t,
                          n = "name";
                        return (t = Pu({}, "name", 0))["name"] = 0, t;
                      }["apply"]())["name"] = "get", t;
                    }["apply"]());
                  });
                case 6:
                  return a = t.sent, t.abrupt("return", a ? (this[i] = a[r[142]][r[14]], s(n[5][207], this[i]), this[i]) : null);
                case 8:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), t["getUserData"] = function () {
          var t;
          return t = n(Nu().mark(function t(n) {
            var r, i, e;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = to, i = this, t.next = 4, this[r[10][46]](function () {
                    var t = to,
                      r = t[3];
                    return i["db"]["collection"]("game_file")["where"](function () {
                      var t,
                        r = to;
                      return (t = function () {
                        var t,
                          n = "_openid";
                        return (t = Pu({}, "_openid", 0))["_openid"] = 0, t;
                      }["apply"]())["_openid"] = n, t;
                    }["apply"]())["limit"](1)["get"]();
                  });
                case 4:
                  return e = t.sent, t.abrupt("return", e ? e[r[2][12]] : null);
                case 6:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["saveUser"] = function (t, n) {
          var r,
            i = to,
            e = "saveTimer",
            a = "pendingData";
          if (r = this, void 0 === n && (n = !1), !this["stopped"]) {
            if (n) return this["saveTimer"] && (clearTimeout(this["saveTimer"]), this["saveTimer"] = null), this["saving"] ? void (this["pendingData"] = t) : void this["realSaveUser"](t);
            this["pendingData"] = t, this["saveTimer"] && clearTimeout(this["saveTimer"]), this["saveTimer"] = setTimeout(function () {
              var t,
                n = to,
                i = "pendingData";
              t = r["pendingData"], r["pendingData"] = null, r["saveTimer"] = null, t && r["realSaveUser"](t);
            }, 2000);
          }
        }, t["realSaveUser"] = function () {
          var t;
          return t = n(Nu().mark(function t(n) {
            var i, e, a, u, c, f, h, v, l, b, d, k, m, p, g;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (e = (i = to)[4], a = e[77], u = i[12][57], c = i[7][78], f = i[10][46], h = i[1][20], v = e[67], l = i[9][36], b = this, this[a] || this[i[5][93]]) {
                    t.next = 43;
                    break;
                  }
                  if (d = JSON[i[7][6]](n), this[u] === d) {
                    t.next = 43;
                    break;
                  }
                  if (this[a] = !0, k = !1, t.prev = 7, !this[c]) {
                    t.next = 16;
                    break;
                  }
                  return t.next = 11, this[f](function () {
                    var t = to,
                      i = t[7];
                    return b["db"]["collection"]("game_file")["doc"](b["userDocId"])["update"](function () {
                      var t,
                        i = to;
                      return (t = function () {
                        var t,
                          n = "data";
                        return (t = Pu({}, "data", 0))["data"] = 0, t;
                      }["apply"]())["data"] = r({}, n), t;
                    }["apply"]());
                  });
                case 11:
                  if (t.t0 = t.sent, !t.t0) {
                    t.next = 14;
                    break;
                  }
                  k = !0;
                case 14:
                  t.next = 35;
                  break;
                case 16:
                  return t.next = 18, this[f](function () {
                    var t = to;
                    return b["db"]["collection"]("game_file")["add"](function () {
                      var t,
                        i = to;
                      return (t = function () {
                        var t,
                          n = "data";
                        return (t = Pu({}, "data", 0))["data"] = 0, t;
                      }["apply"]())["data"] = r({}, n), t;
                    }["apply"]());
                  });
                case 18:
                  if (!(m = t.sent)) {
                    t.next = 23;
                    break;
                  }
                  this[c] = m[h], k = !0, t.next = 35;
                  break;
                case 23:
                  if (o(i[15][58]), this[v]) {
                    t.next = 25;
                    break;
                  }
                  return t.abrupt("return");
                case 25:
                  return t.next = 27, this[i[9][113]](this[v]);
                case 27:
                  if (!((p = t.sent) && p[i[4][0]] > 0)) {
                    t.next = 35;
                    break;
                  }
                  return this[c] = p[0][h], t.next = 32, this[f](function () {
                    var t = to,
                      i = t[7];
                    return b["db"]["collection"]("game_file")["doc"](b["userDocId"])["update"](function () {
                      var t,
                        i = to;
                      return (t = function () {
                        var t,
                          n = "data";
                        return (t = Pu({}, "data", 0))["data"] = 0, t;
                      }["apply"]())["data"] = r({}, n), t;
                    }["apply"]());
                  });
                case 32:
                  if (t.t1 = t.sent, !t.t1) {
                    t.next = 35;
                    break;
                  }
                  k = !0;
                case 35:
                  k ? (s(i[3][166]), this[u] = d) : o(i[16][61]), t.next = 40;
                  break;
                case 38:
                  t.prev = 38, t.t2 = t.catch(7);
                case 40:
                  return t.prev = 40, this[a] = !1, this[l] && (g = this[l], this[l] = null, this[i[10][61]](g)), t.finish(40);
                case 43:
                case "end":
                  return t.stop();
              }
            }, t, this, [[7, 38, 40, 43]]);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t;
      }()))["openId"] = null, c["db"] = null, c["inited"] = !1, c["stopped"] = !1, c["saving"] = !1, c["userDocId"] = null, c["lastUploadData"] = null, c["saveTimer"] = null, c["pendingData"] = null, i["_RF"]["pop"]();
    }, f;
  }["bind"](this)["apply"]();
});