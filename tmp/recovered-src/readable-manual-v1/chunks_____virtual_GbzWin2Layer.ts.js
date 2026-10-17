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
    A = to;
  return function () {
    var A,
      C,
      x = to[5],
      T = "setters",
      L = "execute";
    return Pu(A = {}, "setters", 0), Pu(A, "execute", 0), (C = A)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        v = n[6],
        l = n[2],
        b = n[3];
      r = t["cclegacy"], i = t["_decorator"], e = t["find"], a = t["Sprite"], u = t["RichText"], s = t["Tween"], o = t["UITransform"], c = t["tween"], f = t["math"], h = t["color"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      b = t["default"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      var n = to;
      y = t["ENUM_Theme_Sprites_Sub"], w = t["ENUM_CLIP"], _ = t["ENUM_UI"];
    }, function (t) {
      M = t["default"];
    }, function (t) {
      S = t["Log"];
    }], C["execute"] = function () {
      var A,
        C,
        x = to,
        T = x[5],
        L = "_RF",
        I = "GbzWin2Layer";
      r["_RF"]["push"]({}, "198aaN23dBAaL62KzMHr32p", "GbzWin2Layer", void 0), A = i["ccclass"], i["property"], t("default", A("GbzWin2Layer")(C = function (t) {
        var r,
          i,
          M = to,
          A = M[7],
          C = M[12];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[2], u = i[3], s = i[6], o = i[5], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["panel"] = null, r["aniPanel"] = null, r["icon"] = null, r["title"] = null, r["guang"] = null, r["info"] = null, r["proBg"] = null, r["btnshare"] = null, r["buttons"] = null, r["proBg_fill"] = null, r["lv"] = null, r["carNode"] = null, r["targetPro"] = 0, r["nowPro"] = 1, r["btnShare"] = null, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[9],
            r = t[6],
            i = t[3],
            s = t[2],
            o = "panel",
            c = "node",
            f = "title",
            h = "getChildByName",
            v = "guang",
            l = "icon",
            b = "getComponent",
            d = "info",
            k = "proBg",
            m = "btnshare",
            p = "buttons",
            g = "proBg_fill",
            y = "lv";
          this["panel"] = e("style/panel", this["node"]), this["aniPanel"] = e("style/aniPanel", this["node"]), this["title"] = this["panel"]["getChildByName"]("title"), this["guang"] = this["panel"]["getChildByName"]("guang"), this["icon"] = this["guang"]["getChildByName"]("icon")["getComponent"](a), this["info"] = this["panel"]["getChildByName"]("info"), this["proBg"] = this["panel"]["getChildByName"]("proBg"), this["btnshare"] = this["panel"]["getChildByName"]("btnshare"), this["buttons"] = this["panel"]["getChildByName"]("buttons")["getChildByName"]("btn_restart"), this["proBg_fill"] = this["proBg"]["getChildByName"]("proBg_fill")["getComponent"](a), this["lv"] = this["proBg"]["getChildByName"]("lv")["getComponent"](u), this["carNode"] = this["proBg"]["getChildByName"]("car"), this["btnShare"] = this["panel"]["getChildByName"]("btnshare");
        }, r["onEnable"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[12],
            a = i[5],
            u = i[17],
            s = i[2],
            o = "on",
            c = "click",
            f = "ins",
            h = "fakeGame_level",
            l = "cityUnlockData",
            d = "length";
          this["losePanelTween"](), this["buttons"]["on"]("click", this["onClickButtons"], this), this["btnShare"]["on"]("click", this["onShare"], this), n = (b["ins"]["fakeGame_level"] - 2) % (v["cityUnlockData"]["length"] - 1), S(n, b["ins"]["fakeGame_level"] - 2, v["cityUnlockData"]["length"] - 1), t = v["cityUnlockData"][n][0], r = y[v["cityUnlockData"][n][1]], k["ins"]["setSpriteFrameAsync"](this["icon"], r["bundle"], t, r["path"] + Et + t + "/spriteFrame"), b["ins"]["challengeCount"] = 0, b["ins"]["uploadLocalToServer"](!0), b["ins"]["store"]();
        }, r["onDisable"] = function () {
          var t = to,
            n = t[2],
            r = t[3],
            i = t[6],
            e = t[5],
            a = "stopAllByTarget",
            u = "buttons",
            o = "off",
            c = "click";
          s["stopAllByTarget"](this["node"]), s["stopAllByTarget"](this["title"]), s["stopAllByTarget"](this["guang"]), s["stopAllByTarget"](this["info"]), s["stopAllByTarget"](this["proBg"]), s["stopAllByTarget"](this["btnshare"]), s["stopAllByTarget"](this["buttons"]), s["stopAllByTarget"](this["proBg_fill"]), s["stopAllByTarget"](this["carNode"]), this["buttons"]["off"]("click", this["onClickButtons"], this), this["btnShare"]["off"]("click", this["onShare"], this);
        }, r["onClickButtons"] = function () {
          var t = to,
            n = "uiMgr",
            r = "toggle";
          l["ins"]["play"](w["GAME_CLICK"]), d["uiMgr"]["toggle"](_["LAYER_WIN"], !1), d["uiMgr"]["toggle"](_["CarMoveLayer"]), g["instance"]["recycleDownFruit"]();
        }, r["losePanelTween"] = function () {
          var t,
            n,
            r,
            i,
            e,
            a = to,
            u = a[3],
            s = a[7],
            h = a[2],
            l = "buttons",
            d = "ins",
            k = "fakeGame_level",
            m = "nowPro",
            p = "proBg",
            g = "getComponent",
            y = "width",
            w = "</color></b></outline>",
            _ = "setScale",
            M = "call",
            A = "delay";
          i = this, this["buttons"]["angle"] = 0, S(b["ins"]["fakeGame_level"]), n = v["getCityTotalProgress"](b["ins"]["fakeGame_level"] - 1), t = v["getCityCurProgress"](b["ins"]["fakeGame_level"] - 1), this["nowPro"] = (t - 1) / n, this["targetPro"] = t / n, this["carNode"][At] = .5 * -this["proBg"]["getComponent"](o)["width"] + this["proBg"]["getComponent"](o)["width"] * this["nowPro"], this["proBg_fill"]["fillRange"] = this["nowPro"], r = v["getLvDiffNum"](b["ins"]["fakeGame_level"] - 1), e = v["getNextCityName"](b["ins"]["fakeGame_level"] - 1), this["lv"]["string"] = 0 == r ? ki + e + "</color></b></outline>" : mi + r + pi + e + "</color></b></outline>", this["title"]["setScale"](0, 0, 0), this["guang"]["setScale"](0, 0, 0), this["info"]["setScale"](0, 0, 0), this["proBg"]["setScale"](0, 0, 0), this["btnshare"]["setScale"](0, 0, 0), this["buttons"]["setScale"](0, 0, 0), c(this["node"])["call"](function () {
            var t = to,
              n = t[3],
              r = "apply";
            c(i["title"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = f["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["start"]();
          })["delay"](.5)["call"](function () {
            var t = to,
              n = t[3],
              r = "to",
              e = "apply",
              a = "start";
            c(i["guang"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = f["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["start"](), c(i["info"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = f["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["start"]();
          })["delay"](.5)["call"](function () {
            var t = to,
              n = t[3],
              r = "to",
              e = "apply",
              a = "start";
            c(i["proBg"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = f["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["start"](), c(i["proBg_fill"])["to"](1, function () {
              var t,
                n = to,
                r = n[7];
              return (t = function () {
                var t,
                  n = "fillRange";
                return (t = Pu({}, "fillRange", 0))["fillRange"] = 0, t;
              }["apply"]())["fillRange"] = i["targetPro"], t;
            }["apply"]())["start"](), c(i["carNode"])["to"](1, function () {
              var t,
                n = to,
                r = n[3],
                e = "proBg",
                a = "getComponent",
                u = "width";
              return (t = function () {
                var t;
                return (t = Pu({}, At, 0))[At] = 0, t;
              }["apply"]())[At] = .5 * -i["proBg"]["getComponent"](o)["width"] + i["proBg"]["getComponent"](o)["width"] * i["targetPro"], t;
            }["apply"]())["start"]();
          })["delay"](1)["call"](function () {
            var t = to,
              n = "apply";
            c(i["btnshare"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = f["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["start"]();
          })["delay"](.5)["delay"](.2)["call"](function () {
            var t = to,
              n = "apply";
            c(i["buttons"])["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = f["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["start"]();
          })["delay"](.5)["call"](function () {
            !function t() {
              var n = to,
                r = n[3],
                e = "to",
                a = "apply";
              c(i["buttons"])["to"](.2, function () {
                var t,
                  n = to[3];
                return (t = function () {
                  var t,
                    n = "angle";
                  return (t = Pu({}, "angle", 0))["angle"] = 0, t;
                }["apply"]())["angle"] = 18, t;
              }["apply"]())["to"](.2, function () {
                var t,
                  n = to[3];
                return (t = function () {
                  var t,
                    n = "angle";
                  return (t = Pu({}, "angle", 0))["angle"] = 0, t;
                }["apply"]())["angle"] = -18, t;
              }["apply"]())["to"](.2, function () {
                var t,
                  n = to[3];
                return (t = function () {
                  var t,
                    n = "angle";
                  return (t = Pu({}, "angle", 0))["angle"] = 0, t;
                }["apply"]())["angle"] = 18, t;
              }["apply"]())["to"](.2, function () {
                var t,
                  n = to[3];
                return (t = function () {
                  var t,
                    n = "angle";
                  return (t = Pu({}, "angle", 0))["angle"] = 0, t;
                }["apply"]())["angle"] = -18, t;
              }["apply"]())["to"](.2, function () {
                var t,
                  n = to[3];
                return (t = function () {
                  var t,
                    n = "angle";
                  return (t = Pu({}, "angle", 0))["angle"] = 0, t;
                }["apply"]())["angle"] = 0, t;
              }["apply"]())["delay"](2)["call"](t)["start"]();
            }();
          })["start"]();
        }, r["onShare"] = function () {
          var t = to,
            n = t[2],
            r = t[6],
            i = "ins";
          l["ins"]["play"](w["GAME_CLICK"]), m["ins"]["platform"]() ? m["ins"]["activeShare"]() : p["ins"]["show"]("仅支持小游戏平台", function () {
            var t,
              n = to,
              r = ro;
            return (t = function () {
              var t,
                n,
                r = to,
                i = "gravity",
                e = "bg_color";
              return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t)["gravity"] = 0, n["bg_color"] = 0, n;
            }["apply"]())["gravity"] = "TOP", t["bg_color"] = h(102, 202, 28, 255), t;
          }["apply"]());
        }, i;
      }(M)) || C), r["_RF"]["pop"]();
    }, C;
  }["bind"](this)["apply"]();
});