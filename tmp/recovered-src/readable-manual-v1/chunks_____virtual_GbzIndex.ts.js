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
    x,
    T = to;
  return function () {
    var T,
      L,
      I = to[5],
      R = "setters",
      E = "execute";
    return Pu(T = {}, "setters", 0), Pu(T, "execute", 0), (L = T)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to,
        r = n[6],
        p = n[2],
        g = n[3];
      i = t["cclegacy"], e = t["_decorator"], a = t["view"], u = t["macro"], s = t["Color"], o = t["color"], c = t["find"], f = t["warn"], h = t["Label"], v = t["Node"], l = t["UITransform"], b = t["size"], d = t["Graphics"], k = t["ResolutionPolicy"], m = t["Component"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      var n = to;
      g = t["ENUM_RES"], y = t["ENUM_UI"];
    }, function (t) {
      w = t["gameMsg"];
    }, function (t) {
      _ = t["default"];
    }, function (t) {
      M = t["default"];
    }, function (t) {
      S = t["default"];
    }, function (t) {
      A = t["default"];
    }, function (t) {
      C = t["default"];
    }, function (t) {
      x = t["default"];
    }, null], L["execute"] = function () {
      var T,
        L,
        I = to,
        R = I[5],
        E = "_RF",
        D = "GbzIndex";
      i["_RF"]["push"]({}, "920f995b--b39-4-4b-74-8-daf-4fc1f35dea4b", "GbzIndex", void 0), T = e["ccclass"], e["property"], t("default", T("GbzIndex")(L = function (t) {
        var i,
          e,
          m = to;
        return n(e = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[16],
            i = n[10];
          t = this, a["setResizeCallback"](function () {
            return t["setScreenReponsive"]();
          }), this["setScreenReponsive"](), _["ins"]["loading_rate"] = 0, u["ENABLE_MULTI_TOUCH"] = !1, p["initFruitArr"]();
        }, i["start"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, i, e, a, u;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  i = (n = to)[1][0], e = this, _[i][n[5][96]](), A[i][n[2][14]](), u = 0, a = function () {
                    var t = to,
                      n = t[8],
                      i = "uiMgr",
                      a = "toggle";
                    ++u >= 2 && (M["uiMgr"]["init"](), 1 == _["ins"]["game_level"] ? M["uiMgr"]["toggle"](y["LAYER_MAIN"], !0, r(Nu().mark(function t() {
                      var n, r, i, a;
                      return Nu().wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = (n = to)[2], i = n[10], a = n[1][0], x[r[4]][n[8][122]](), _[a][i[29]] = 1, e[i[6]](function () {}), A[a][n[18][2]](), t.next = 7, M[n[5][6]][n[9][49]]();
                          case 7:
                            C[r[30]](w[n[17][9]]), A[a][n[7][66]]();
                          case 9:
                          case "end":
                            return t.stop();
                        }
                      }, t);
                    }))) : M["uiMgr"]["toggle"](y["LAYER_MENU"], !0, function () {
                      var t = to,
                        n = t[2],
                        r = "ins";
                      x["inst"]["LoadFinish"](), _["ins"]["loading_rate"] = 1, A["ins"]["getLaunchOptionsSync"](), C["emit"](w["lStartLoadAllBackUI"]), A["ins"]["triggerGC"]();
                    }));
                  }, this[n[14][15]](function () {
                    a(), e["loadENUM_RES"](a);
                  });
                case 5:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["loadENUM_RES"] = function () {
          var t;
          return t = r(Nu().mark(function t(n) {
            var r, i, e, a, u;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  i = (r = to)[4][0], e = r[1][0], a = 0;
                case 2:
                  if (!(a < g[i])) {
                    t.next = 10;
                    break;
                  }
                  return u = g[a], t.next = 6, S[e][r[2][24]](u);
                case 6:
                  a == g[i] - 1 && (A[e][r[7][66]](), n && n());
                case 7:
                  a++, t.next = 2;
                  break;
                case 10:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), i["loadPrefabbAsync"] = function () {
          var t;
          return t = r(Nu().mark(function t(n) {
            var r, i, e, a;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return i = (r = to)[7], e = r[1][0], a = _[e][i[16]], t.next = 4, M[r[5][6]][r[14][15]](a);
                case 4:
                  A[e][i[66]](), n && n();
                case 6:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), i["setScreenReponsive"] = function () {
          var t,
            n,
            r,
            i,
            e,
            u = to,
            s = u[10],
            o = "width",
            c = "height",
            f = "setResolutionPolicy";
          r = a["getDesignResolutionSize"](), n = a["getFrameSize"](), t = function () {
            var t = to;
            a["setResolutionPolicy"](k["EXACT_FIT"]);
          }, i = r["width"] / r["height"], e = n["width"] / n["height"], i < 1 ? e < 1 ? e > i ? t() : a["setResolutionPolicy"](k["FIXED_WIDTH"]) : t() : e > 1 ? e < i ? t() : a["setResolutionPolicy"](k["FIXED_HEIGHT"]) : t();
        }, i["openFps"] = function () {
          var t;
          t = this, this["scheduleOnce"](function () {
            t["setStatsColor"]();
          }, 0);
        }, i["setStatsColor"] = function (t, n) {
          var r,
            i,
            e,
            a = to,
            u = ro,
            k = a[3],
            m = a[6],
            p = a[12],
            g = a[2],
            y = 150,
            w = "BACKGROUND",
            _ = "getComponent";
          if (void 0 === t && (t = s["WHITE"]), void 0 === n && (n = o(0, 0, 0, 150)), !(e = c("PROFILER-NODE"))) return f("未找到统计面板节点！");
          e["children"]["forEach"](function (n) {
            var r,
              i = to;
            (r = n["getComponent"](h)) && (r["color"] = t);
          }), (i = e["getChildByName"]("BACKGROUND")) || (i = new v("BACKGROUND"), e["addChild"](i), i["getComponent"](l)["setContentSize"](b(200, 150)), i["setPosition"](0, 0)), (r = i["getComponent"](d) || i["addComponent"](d))["clear"](), r["rect"](-5, 12.5, i["getComponent"](l)["width"] + 10, i["getComponent"](l)["height"] - 10), r["fillColor"] = n, r["fill"]();
        }, e;
      }(m)) || L), i["_RF"]["pop"]();
    }, L;
  }["bind"](this)["apply"]();
});