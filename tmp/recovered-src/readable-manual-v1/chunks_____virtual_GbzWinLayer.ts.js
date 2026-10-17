(function (t) {
  0;
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
    h,
    v,
    l,
    b,
    d,
    k,
    m,
    p,
    g,
    y,
    w,
    _,
    M,
    S,
    A,
    C,
    x = to;
  return function () {
    var x,
      T,
      L = to[5],
      I = "setters",
      R = "execute";
    return Pu(x = {}, "setters", 0), Pu(x, "execute", 0), (T = x)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to,
        r = n[2],
        l = n[3];
      i = t["cclegacy"], e = t["_decorator"], a = t["find"], u = t["Sprite"], s = t["Label"], o = t["Node"], c = t["UIOpacity"], f = t["color"], h = t["tween"], v = t["math"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      b = t["default"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      var n = to[5];
      k = t["default"], m = t["ResType"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      var n = to;
      y = t["ENUM_CLIP"], w = t["ENUM_STATUS"], _ = t["ENUM_UI"], M = t["ENUM_Theme_Sprites_Sub"];
    }, function (t) {
      S = t["default"];
    }, function (t) {
      A = t["default"];
    }, function (t) {
      C = t["Log"];
    }], T["execute"] = function () {
      Vs && ms && (wi = "甜品大"), Vs = 0;
      var x,
        T,
        L = to,
        I = L[5],
        R = "_RF",
        E = "GbzWinLayer";
      i["_RF"]["push"]({}, "c03f5dy6z9CeaCQD3pKQ26H", "GbzWinLayer", void 0), x = e["ccclass"], e["property"], t("default", x("GbzWinLayer")(T = function (t) {
        var i,
          e,
          S = to,
          x = S[7],
          T = S[4],
          L = S[8],
          I = S[9],
          R = S[6],
          E = S[5];
        return n(e = function () {
          for (var n, r, i = to, e = ro, a = i[4], u = i[3], s = i[5], o = i[8], c = i[6], f = i[1], h = "水果", v = (n = arguments)["length"], l = new Array(v), b = 0; b < v; b++) l[b] = n[b];
          return (r = t["call"]["apply"](t, [this]["concat"](l)) || this)["panel"] = null, r["fruitsLayout"] = null, r["labNum"] = null, r["proFill"] = null, r["labPro"] = null, r["btnUse"] = null, r["collectAll"] = null, r["btnSure"] = null, r["fruitImg"] = null, r["fruitName"] = null, r["fruitBg"] = null, r["themeCount"] = 27, r["getBgshade"] = null, r["themeBg"] = null, r["title"] = null, r["curUnlockSkinIndex"] = 1, r["curCollectCount"] = 0, r["titleStr"] = ["水果", "甜品1", "蔬菜1", "动物1", "海洋1", "糖果1"], r["themeBgStr"] = ["水果", wi, "蔬菜大", "动物大", "海洋大", "糖果大"], r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[9],
            r = t[8],
            i = t[5],
            e = t[4],
            o = t[3],
            c = t[6],
            f = "panel",
            h = "node",
            v = "fruitBg",
            l = "fruitImg",
            b = "getChildByName",
            d = "getComponent",
            k = "children",
            m = "proBg",
            p = "btnSure",
            g = "on",
            y = "click",
            w = "btnUse",
            _ = "collectAll",
            M = "themeBg",
            S = "title";
          this["panel"] = a("style/panel", this["node"]), this["getBgshade"] = a("style/getBgshade", this["node"]), this["fruitBg"] = a("style/fruitBg", this["node"]), this["fruitImg"] = this["fruitBg"]["getChildByName"]("fruitImg")["getComponent"](u), this["fruitName"] = this["fruitBg"]["getChildByName"]("name")["getComponent"](s), this["fruitsLayout"] = this["panel"]["getChildByName"]("fruits"), this["labNum"] = this["panel"]["getChildByName"]("numBg")["children"][0]["getComponent"](s), this["proFill"] = this["panel"]["getChildByName"]("proBg")["children"][0]["getComponent"](u), this["labPro"] = this["panel"]["getChildByName"]("proBg")["children"][1]["getComponent"](s), this["btnSure"] = this["panel"]["getChildByName"]("buttons")["getChildByName"]("btnSure"), this["btnSure"]["on"]("click", this["btnSureFun"], this), this["btnUse"] = this["panel"]["getChildByName"]("btnUse"), this["collectAll"] = this["panel"]["getChildByName"]("collectAll"), this["btnUse"]["on"]("click", this["changeTheme"], this), this["themeBg"] = this["panel"]["getChildByName"]("themeBg"), this["title"] = this["panel"]["getChildByName"]("titleLayout")["getChildByName"]("title");
        }, i["btnSureFun"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[8], i = n[3][8], e = n[4][11], l[n[1][0]][n[2][10]](y[r[6]]), t.next = 4, d[n[5][64]][n[0][28]]();
                case 4:
                  d[i][e](_[n[7][70]], !1), d[i][e](_[r[189]], !0);
                case 6:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["changeTheme"] = function () {
          var t = to,
            n = "ins",
            r = "UseSkin";
          b["ins"]["UseSkin"] = this["curUnlockSkinIndex"], d["gameMgr"]["loadPrefabbAsync"](b["ins"]["UseSkin"]), b["ins"]["uploadLocalToServer"](!0), this["btnSureFun"]();
        }, i["createFruits"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, s, o, h, v, l, b, d, m, p, y, w, _;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  r = ro, i = (n = to)[10], e = n[4], a = r[66], s = n[16][9], o = i[31], h = n[6][5], v = i[0], l = n[5][5], b = n[3][13], d = M[this[s]], m = 0;
                case 2:
                  if (!(m < this[o][h][e[0]])) {
                    t.next = 11;
                    break;
                  }
                  return y = this[o][h][m], w = y[v](c) || y[i[5]](c), p = y[v](u), _ = A[n[8][129]](this[s])[m], t.next = 6, k[n[1][0]][n[17][2]](p, d[e[8]], _, d[n[2][8]] + Et + _ + i[35]);
                case 6:
                  g[n[16][17]](p, r[97]), m < this[n[13][6]] - 1 ? (w[l] = a, p[b] = f(a, a, a)) : (w[l] = r[60], p[b] = f(0, 0, 0));
                case 8:
                  m++, t.next = 2;
                  break;
                case 11:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["dataUI"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[5],
            a = i[4],
            u = "curCollectCount",
            s = "themeCount",
            o = "string",
            c = "active";
          return t = (n = this["curCollectCount"] - 1) / this["themeCount"], this["proFill"]["fillRange"] = t, this["labNum"]["string"] = n + Et + this["themeCount"], this["labPro"]["string"] = (100 * t)["toFixed"](0) + pt, r = this["curCollectCount"] >= this["themeCount"], this["btnUse"]["active"] = r, this["collectAll"]["active"] = r, r;
        }, i["updateUIAfterAnimation"] = function () {
          var t,
            n,
            r = to,
            i = r[5],
            e = r[4],
            a = "curCollectCount",
            u = "themeCount",
            s = "string",
            o = "active";
          return n = this["curCollectCount"] / this["themeCount"], this["proFill"]["fillRange"] = n, this["labNum"]["string"] = this["curCollectCount"] + Et + this["themeCount"], this["labPro"]["string"] = (100 * n)["toFixed"](0) + pt, t = n >= 1, this["btnUse"]["active"] = t, this["collectAll"]["active"] = t, t;
        }, i["getFruit"] = function () {
          var t,
            n,
            r = to,
            i = r[10],
            e = r[6],
            a = "spriteFrame";
          t = this["curCollectCount"] - 1, n = this["fruitsLayout"]["children"][t]["getComponent"](u), this["fruitName"]["string"] = n["spriteFrame"]["name"], this["fruitImg"]["spriteFrame"] = n["spriteFrame"];
        }, i["onDestroy"] = function () {
          var t = to,
            n = t[7],
            r = "off";
          this["btnSure"]["off"](o["EventType"]["TOUCH_END"], this["btnSureFun"], this), this["btnUse"]["off"]("click", this["changeTheme"], this);
        }, i["changeFruit"] = function () {
          var t,
            n,
            r,
            i,
            e = to,
            a = ro,
            s = e[10],
            o = 255,
            h = "getComponent";
          t = this["curCollectCount"] - 1, i = (n = this["fruitsLayout"]["children"][t])["getComponent"](c) || n["addComponent"](c), r = n["getComponent"](u), i["opacity"] = 255, r && (r["color"] = f(255, 255, 255));
        }, i["getData"] = function () {
          var t,
            n,
            r,
            i = to,
            e = ro,
            a = i[3],
            u = 27,
            s = "curUnlockSkinIndex",
            o = "curCollectCount";
          r = (n = b["ins"]["fakeGame_level"] || 1) - 1, this["curUnlockSkinIndex"] = Math["floor"]((r - 1) / 27) + 1, t = r % 27, this["curCollectCount"] = 0 === t ? 27 : t, C("当前关卡:", n, "已通过关卡:", r, "解锁皮肤:", this["curUnlockSkinIndex"], "收集数量:", this["curCollectCount"]);
        }, i["onEnable"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a, s, o, c, f, p, g, w, M, S, A, C, x, T, L, I, R, E, D, N, P, G, O, F, B, z, U, H, V;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[5], i = n[7], e = n[3], a = n[8], s = n[6], o = n[1], c = n[4], f = n[10], p = n[16][9], g = o[0], w = c[0], M = o[8], S = n[8][132], A = n[6][166], C = f[0], x = n[9][13], T = c[15], L = c[12], I = n[7][17], R = f[31], E = c[2], D = n[5][73], N = n[0][2], P = n[3][0], G = n[2][5], O = this, this[r[179]](), !(this[p] >= b[g][i[69]][w])) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return", (d[e[8]][n[4][11]](_[i[70]], !1), void this[a[75]]()));
                case 4:
                  return U = Math[M](this[p], this[S][w] - 1), z = Math[M](this[p], this[A][w] - 1), this[r[119]][C](u)[x] = k[g][T](m[L], I, this[S][U]), this[e[17]][C](u)[x] = k[g][T](m[L], I, this[A][z]), l[g][n[2][10]](y[s[123]]), H = this[n[13][6]] - 1, F = this[R][s[5]][H], V = F[At] + this[R][At], B = F[St] + this[R][St], this[a[97]][E] = !0, t.next = 10, this[n[10][156]]();
                case 10:
                  this[D][E] = !0, this[s[145]](), this[D][s[27]](0, 0, 0), h(this[D])[N](.5, function () {
                    var t,
                      n = to,
                      r = n[3];
                    return (t = function () {
                      var t,
                        n = "scale";
                      return (t = Pu({}, "scale", 0))["scale"] = 0, t;
                    }["apply"]())["scale"] = v["v3"](1, 1, 1), t;
                  }[P](), function () {
                    var t,
                      n = to;
                    return (t = function () {
                      var t,
                        n = "easing";
                      return (t = Pu({}, "easing", 0))["easing"] = 0, t;
                    }["apply"]())["easing"] = "backOut", t;
                  }[P]())[G](function () {
                    var t = to;
                    O["getBgshade"]["active"] = !1, l["ins"]["play"](y["getVegetableSound"]);
                  })[N](.5, function () {
                    var t,
                      n = to,
                      r = n[3];
                    return (t = function () {
                      var t,
                        n,
                        r = to,
                        i = "scale",
                        e = "position";
                      return Pu(t = {}, "scale", 0), Pu(t, "position", 0), (n = t)["scale"] = 0, n["position"] = 0, n;
                    }["apply"]())["scale"] = v["v3"](0, 0, 0), t["position"] = new v["Vec3"](V, B, 0), t;
                  }[P](), function () {
                    var t,
                      n = to,
                      r = n[4];
                    return (t = function () {
                      var t,
                        n = "easing";
                      return (t = Pu({}, "easing", 0))["easing"] = 0, t;
                    }["apply"]())["easing"] = "backIn", t;
                  }[P]())[G](function () {
                    var t = to;
                    O["changeFruit"](), O["updateUIAfterAnimation"]();
                  })[e[7]](), b[g][n[12][6]] = 0, b[g][n[17][4]](!0), b[g][e[22]]();
                case 17:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onDisable"] = function () {}, i["rendor"] = function () {}, i["initSkin"] = function () {}, i["onNext"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onShare"] = function () {
          var t = to,
            n = "ins";
          l["ins"]["play"](y["GAME_CLICK"]), p["ins"]["platform"]() && p["ins"]["activeShare"]();
        }, i["onBackHome"] = function () {
          var t = to,
            n = t[8],
            r = "ins",
            i = "uiMgr",
            e = "toggle";
          l["ins"]["play"](y["GAME_CLICK"]), b["ins"]["status"] = w["UNRUN"], d["uiMgr"]["toggle"](_["LAYER_MAIN"], !1), d["uiMgr"]["toggle"](_["LAYER_WIN"], !1), d["uiMgr"]["toggle"](_["LAYER_MENU"]);
        }, i["onPaint"] = function () {
          var t = to;
          l["ins"]["play"](y["GAME_CLICK"]), d["uiMgr"]["toggle"](_["LAYER_WIN"], !1);
        }, e;
      }(S)) || T), i["_RF"]["pop"]();
    }, T;
  }["bind"](this)["apply"]();
});