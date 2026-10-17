(function (t) {
  var createClass, asyncToGenerator, createForOfIteratorHelperLoose, cclegacy, SpriteFrame, assetManager, GbzPoolManager, GbzDataManager;
  return function () {
    var c, f;
    return Pu(c = {}, "setters", 0), Pu(c, "execute", 0), (f = c).setters = [function (t) {
      createClass = t["createClass"], asyncToGenerator = t["asyncToGenerator"], createForOfIteratorHelperLoose = t["createForOfIteratorHelperLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], SpriteFrame = t["SpriteFrame"], assetManager = t["assetManager"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, null], f.execute = function () {
      var c;
      cclegacy._RF["push"]({}, "cefd4zbwANP1L1y7WydE8dK", "GbzResManager", void 0), c = t("ResType", function (t) {
        return t["Prefab"] = "prefab", t["Audio"] = "audio", t["Sprite"] = "sprite", t["Json"] = "json", t.SpriteAtlas = "SpriteAtlas", t.SpriteFrame = "SpriteFrame", t;
      }({})), t("default", function () {
        var t, e;
        return (t = (e = function () {
          this["clips"] = {}, this["sprites"] = {}, this["jsons"] = {}, this["collectTexture"] = {}, this["bundleMap"] = {}, this["spriteSetToken"] = new WeakMap();
        })["prototype"])["getBundle"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, i;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = "bundleMap", i = this, t.abrupt("return", this[r][n] ? this[r][n] : new Promise(function (t, r) {
                    assetManager["loadBundle"](n, function (e, a) {
                      !e && a ? (i["bundleMap"][n] = a, t(a)) : r(e);
                    });
                  }));
                case 3:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["load"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, e, a, u, f, h, v, l, b, d, k, m, p, g, y;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return e = (r = to)[2], a = r[5], u = r[3], f = r[4][8], p = this, n[f], n[e[8]], n[a[4]], n[e[7]], n[u[12]], t.next = 9, this[r[7][92]](n[f]);
                case 9:
                  return b = t.sent, GbzDataManager[r[1][0]][r[10][29]], t.abrupt("return", ((g = this[u[76]])[v = n[f]] || (g[v] = {}), (d = this[a[85]])[h = n[f]] || (d[h] = {}), (y = this[u[77]])[l = n[f]] || (y[l] = {}), (k = this[r[12][24]])[m = n[f]] || (k[m] = {}), new Promise(function (t, r) {
                    b["loadDir"](n["path"], n["content"], function (t, n) {}, function (e, a) {
                      if (e) r(e);else {
                        switch (n["type"]) {
                          case c["Prefab"]:
                            for (var k, m = createForOfIteratorHelperLoose(a); !(k = m()).done;) {
                              var g;
                              g = k.value, GbzPoolManager["ins"]["setPrefab"](g["data"].name, g);
                            }
                            break;
                          case c["Audio"]:
                            for (var y, w = createForOfIteratorHelperLoose(a); !(y = w()).done;) {
                              var _, M, S;
                              S = y.value, (_ = p["clips"][n.bundle])[M = S.name] || (_[M] = S);
                            }
                            break;
                          case c["Sprite"]:
                            for (var A, C = createForOfIteratorHelperLoose(a); !(A = C()).done;) {
                              var x, T, L;
                              x = A.value, (L = p["sprites"][n.bundle])[T = x.name] || (L[T] = x);
                            }
                            break;
                          case c["Json"]:
                            for (var I, R = createForOfIteratorHelperLoose(a); !(I = R()).done;) {
                              var E, D, N;
                              E = I.value, (N = p["jsons"][n.bundle])[D = E.name] || (N[D] = E["json"]);
                            }
                            break;
                          case c["SpriteAtlas"]:
                            for (var P, G = createForOfIteratorHelperLoose(a); !(P = G()).done;) {
                              var O, F, B;
                              O = P.value, (B = p["collectTexture"][n.bundle])[F = O.name] || (B[F] = O);
                            }
                        }
                        t(a);
                      }
                    });
                  })));
                case 12:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["getRes"] = function (t, n, r, i) {
          var e, a, u, s, o, f;
          switch (o = null, t) {
            case c["Audio"]:
              o = (null == (f = this["clips"][n]) ? void 0 : f[r]) || null;
              break;
            case c["Sprite"]:
            case c["SpriteFrame"]:
              o = (null == (u = this["sprites"][n]) ? void 0 : u[r]) || null;
              break;
            case c["Json"]:
              o = (null == (a = this["jsons"][n]) ? void 0 : a[r]) || null;
              break;
            case c["SpriteAtlas"]:
              var k = null == (e = this["collectTexture"][n]) ? void 0 : e[r + ".plist"];
              o = (null == k ? void 0 : k["getSpriteFrame"](null != (s = null == i ? void 0 : i["toString"]()) ? s : "")) || null;
          }
          return o;
        }, t["setSpriteFrame"] = function (t, n, r) {
          var i;
          (i = this["getRes"](c["Sprite"], t, n)) && (r["spriteFrame"] = i);
        }, t["setSpriteFrameAsync"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n, r, i, e, u) {
            var s, o, f, h, v, l, b, d, k, m, p;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (o = (s = to)[1], f = s[4], h = s[9], v = s[5][14], l = s[12][47], b = s[1][3], d = s[9][13], !n || !n[v]) {
                    t.next = 20;
                    break;
                  }
                  if (m = Date[o[10]]() + Math[f[7]](), this[l][o[6]](n, m), !(k = this[f[15]](c[f[12]], r, i))) {
                    t.next = 9;
                    break;
                  }
                  n[v] && this[l][b](n) === m && (n[d] = k, u && u(k)), t.next = 20;
                  break;
                case 9:
                  return p = null, t.prev = 10, t.next = 13, this[h[169]](c[h[26]], SpriteFrame, r, i, void 0, e);
                case 13:
                  p = t.sent, t.next = 19;
                  break;
                case 16:
                  return t.prev = 16, t.t0 = t.catch(10), t.abrupt("return");
                case 19:
                  p && n[v] && this[l][b](n) === m && (n[d] = p, u && u(p));
                case 20:
                case "end":
                  return t.stop();
              }
            }, t, this, [[10, 16]]);
          })), function (n, r, i, e, a) {
            var u;
            return u = arguments, t["apply"](this, u);
          };
        }(), t["getResAsync"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n, r, i, e, a, u) {
            var s, o, c;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (o = (s = to)[4][15], !(c = this[o](n, i, e, a))) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return", c);
                case 4:
                  if (u) {
                    t.next = 6;
                    break;
                  }
                  return t.abrupt("return", null);
                case 6:
                  return t.prev = 6, t.next = 9, this[s[5][177]](function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "bundle", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "content", 0), (n = t).bundle = 0, n.path = 0, n.type = 0, n.content = 0, n;
                    }["apply"]())["bundle"] = i, t["path"] = u, t["type"] = n, t["content"] = r, t;
                  }[s[3][0]]());
                case 9:
                  t.next = 14;
                  break;
                case 11:
                  return t.prev = 11, t.t0 = t.catch(6), t.abrupt("return", null);
                case 14:
                  return t.abrupt("return", this[o](n, i, e, a));
                case 15:
                case "end":
                  return t.stop();
              }
            }, t, this, [[6, 11]]);
          })), function (n, r, i, e, a, u) {
            var s;
            return s = arguments, t["apply"](this, s);
          };
        }(), t["loadOne"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, i, e, a, u, o, f, h, v, l, b, d;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return i = (r = to)[2], e = r[3], u = this, b = n[r[4][8]], h = n[i[8]], a = n[i[7]], t.next = 7, this[r[7][92]](b);
                case 7:
                  return l = t.sent, t.abrupt("return", ((d = this[e[76]])[b] || (d[b] = {}), (o = this[r[5][85]])[b] || (o[b] = {}), (v = this[e[77]])[b] || (v[b] = {}), (f = this[r[12][24]])[b] || (f[b] = {}), new Promise(function (t, r) {
                    l["load"](h, n["content"], function (n, i) {
                      var e, o, f, h, v, l, d, k;
                      if (!n && i) switch (a) {
                        case c["Audio"]:
                          (e = u["clips"][b])[o = i.name] || (e[o] = i), t(i);
                          break;
                        case c["Sprite"]:
                        case c["SpriteFrame"]:
                          (f = u["sprites"][b])[h = i.name] || (f[h] = i), t(i);
                          break;
                        case c["Json"]:
                          (v = u["jsons"][b])[l = i.name] || (v[l] = i.json), t(i.json);
                          break;
                        case c["SpriteAtlas"]:
                          (d = u["collectTexture"][b])[k = i.name] || (d[k] = i), t(i);
                          break;
                        case c["Prefab"]:
                          GbzPoolManager["ins"]["setPrefab"](i["data"].name, i), t(i);
                          break;
                        default:
                          t(i);
                      } else r(n);
                    });
                  })));
                case 9:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), createClass(e, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this._ins || (this._ins = new e()), this._ins;
          }, t;
        }["bind"](this)["apply"]()]), e;
      }())["_ins"] = null, cclegacy._RF["pop"]();
    }, f;
  }["bind"](this)["apply"]();
});