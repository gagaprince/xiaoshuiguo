(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o,
    c,
    f,
    h = to;
  return function () {
    var h,
      v,
      l = to[5],
      b = "setters",
      d = "execute";
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h)["setters"] = [function (t) {
      var i = to;
      n = t["createClass"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to,
        r = n[6];
      i = t["cclegacy"], e = t["Node"], a = t["director"], u = t["AudioSource"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      var n = to[5];
      o = t["default"], c = t["ResType"];
    }, function (t) {
      f = t["default"];
    }], v["execute"] = function () {
      var h = to,
        v = h[2],
        l = "_RF";
      i["_RF"]["push"]({}, "a15438Vd/5MzJSqFKAj6ViC", "GbzAudioManager", void 0), t("default", function () {
        var t,
          i,
          h = to,
          v = h[7],
          l = h[2],
          b = h[12],
          d = h[5];
        return (i = function () {
          var t = to,
            n = t[12],
            r = t[6],
            i = t[11];
          this["as"] = null, this["loop"] = !0, this["volume"] = .3, this["audioEngineMap"] = new Map(), this["groupPlayCount"] = new Map(), this["comboKey"] = "xiaochu", this["comboMax"] = 5, this["comboInterval"] = 3000, this["comboIndex"] = 0, this["lastComboTime"] = 0;
        })["getIns"] = function () {
          var t = to,
            n = "_ins";
          return null === this["_ins"] && (this["_ins"] = new i(), this["_ins"]["init"]()), this["_ins"];
        }, (t = i["prototype"])["init"] = function () {
          var t = to,
            n = "as",
            r = "loop",
            i = "volume";
          this["as"] = this["newAudioSource"](0), this["as"]["loop"] = this["loop"], this["as"]["volume"] = this["volume"];
        }, t["newAudioSource"] = function (t) {
          var n,
            r = to,
            i = r[6];
          return (n = new e())["name"] = "__audio__" + t, a["getScene"]()["addChild"](n), a["addPersistRootNode"](n), n["addComponent"](u);
        }, t["play"] = function () {
          var t;
          return t = r(Nu().mark(function t(n, r, i) {
            var e, a, u, o, c, h, v, l, b, d, k, m, p, g, y, w;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (a = (e = to)[1], u = e[2], o = e[9], c = e[12], h = c[20], v = a[3], l = a[6], b = c[40], d = this, void 0 === n && (n = null), void 0 === r && (r = !1), void 0 === i && (i = 1), !n || !s[a[0]][e[8][11]]) {
                    t.next = 13;
                    break;
                  }
                  if (k = n[e[3][5]], r) {
                    t.next = 9;
                    break;
                  }
                  if (!((p = this[h][v](k) || 0) >= i)) {
                    t.next = 8;
                    break;
                  }
                  return t.abrupt("return");
                case 8:
                  this[h][l](k, p + 1);
                case 9:
                  return t.next = 11, this[e[5][135]](n[u[6]]);
                case 11:
                  (m = t.sent) ? ((g = this[b][v](k)) || (g = new f(k, i), this[b][l](k, g)), r ? g[u[10]](m, 1, !0) : (g[o[86]](m), y = m[o[203]]() || 0, setTimeout(function () {
                    var t,
                      n = to,
                      r = n[1],
                      i = "groupPlayCount";
                    t = d["groupPlayCount"]["get"](k) || 1, d["groupPlayCount"]["set"](k, Math["max"](0, t - 1));
                  }, 1000 * y))) : r || (w = this[h][v](k) || 1, this[h][l](k, Math[a[12]](0, w - 1)));
                case 13:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n, r, i) {
            var e;
            return e = arguments, t["apply"](this, e);
          };
        }(), t["stopSound"] = function (t) {
          var n,
            r = to,
            i = r[12],
            e = r[1],
            a = "group";
          (void 0 === t && (t = null), t) && (n = this["audioEngineMap"]["get"](t["group"])) && (n["stop"](), this["groupPlayCount"]["set"](t["group"], 0));
        }, t["playBGM"] = function () {
          var t;
          return t = r(Nu().mark(function t(n) {
            var r, i, e, a, u, o;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (i = (r = to)[5], e = r[2], a = r[2][6], u = r[0][11], !s[r[1][0]][r[8][10]]) {
                    t.next = 6;
                    break;
                  }
                  return t.next = 4, this[i[135]](n[a]);
                case 4:
                  (o = t.sent) && (this[u][i[136]] && this[u][e[56]](), this[u][a] = o, this[u][e[74]] = !0, this[u][e[10]]());
                case 6:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["pauseBGM"] = function () {
          var t = to,
            n = "as";
          this["as"] && this["as"]["playing"] && this["as"]["pause"]();
        }, t["resumeBGM"] = function () {
          var t = to,
            n = "as";
          s["ins"]["game_music"] && this["as"] && !this["as"]["playing"] && this["as"]["play"]();
        }, t["stopBGM"] = function () {
          var t = to,
            n = "as";
          this["as"] && this["as"]["stop"]();
        }, t["getClip"] = function () {
          var t;
          return t = r(Nu().mark(function t(n) {
            var r;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = to, t.next = 3, o[r[1][0]][r[4][15]](c[r[3][83]], r[2][33], n);
                case 3:
                  return t.abrupt("return", t.sent);
                case 4:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["setComboSound"] = function (t, n, r) {
          var i = to,
            e = i[6],
            a = i[11];
          void 0 === r && (r = 300), this["comboKey"] = t, this["comboMax"] = Math["max"](1, n), this["comboInterval"] = r, this["comboIndex"] = 0, this["lastComboTime"] = 0;
        }, t["playComboSound"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, u, o, c, f;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[1], i = n[6], e = i[115], a = n[11][48], u = n[8][46], o = i[116], !this[e] || !s[r[0]][n[8][11]]) {
                    t.next = 6;
                    break;
                  }
                  return (c = Date[r[10]]()) - this[a] <= this[n[11][67]] ? (this[u]++, this[u] > this[o] && (this[u] = 1)) : this[u] = 1, this[a] = c, f = this[e] + $t + this[u], t.abrupt("return", this[n[2][10]](function () {
                    var t,
                      n = to,
                      r = n[3];
                    return (t = function () {
                      var t,
                        n,
                        r = to,
                        i = "clip",
                        e = "group";
                      return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t)["clip"] = 0, n["group"] = 0, n;
                    }["apply"]())["clip"] = f, t["group"] = 99, t;
                  }[n[3][0]](), !1, this[o]));
                case 6:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), n(i, null, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }["bind"](this)["apply"]()]), i;
      }())["_ins"] = null, i["_RF"]["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});