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
    d = to;
  return function () {
    var d,
      k,
      m = to[5],
      p = "setters",
      g = "execute";
    return Pu(d = {}, "setters", 0), Pu(d, "execute", 0), (k = d)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        s = n[3];
      r = t["cclegacy"], i = t["_decorator"], e = t["Label"], a = t["tween"], u = t["math"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      var n = to;
      h = t["ENUM_CLIP"], v = t["ENUM_UI"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      b = t["Log"];
    }], k["execute"] = function () {
      var d,
        k,
        m = to,
        p = m[5],
        g = "_RF",
        y = "GbzCarMoveLayer";
      r["_RF"]["push"]({}, "4a3a4GyhVdCTJtcJ+yZHpTy", "GbzCarMoveLayer", void 0), d = i["ccclass"], i["property"], t("default", d("GbzCarMoveLayer")(k = function (t) {
        var r,
          i,
          l = to,
          d = l[7];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[6], u = i[5], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["aniPanel"] = null, r["shanNode"] = null, r["caoNode"] = null, r["carNode"] = null, r["lv"] = null, r["startPoint"] = null, r["endPoint"] = null, r["inited"] = !1, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this["initCom"]();
        }, r["initCom"] = function () {
          var t = to,
            n = t[6],
            r = t[5],
            i = t[1],
            a = "inited",
            u = "node",
            s = "getChildByName",
            o = "caoNode",
            c = "lv";
          this["inited"] || (this["inited"] = !0, this["shanNode"] = this["node"]["getChildByName"]("shan"), this["caoNode"] = this["node"]["getChildByName"]("cao"), this["carNode"] = this["node"]["getChildByName"]("car"), this["lv"] = this["caoNode"]["getChildByName"]("zhanpai")["getChildByName"]("lv")["getComponent"](e), this["startPoint"] = this["node"]["getChildByName"]("carStart"), this["endPoint"] = this["node"]["getChildByName"]("carEnd"));
        }, r["onEnable"] = function () {
          this["losePanelTween"]();
        }, r["onDisable"] = function () {}, r["losePanelTween"] = function () {
          var t = to,
            n = t[6],
            r = t[3],
            i = t[5],
            e = "ins",
            l = "fakeGame_level",
            d = "shanNode",
            k = "children",
            m = "length",
            p = "setScale",
            g = "delay",
            y = "to",
            w = "apply",
            _ = "call",
            M = "start",
            S = "caoNode",
            A = "carNode";
          this["initCom"](), b(c["ins"]["fakeGame_level"]), this["lv"]["string"] = s["getCurCityName"](c["ins"]["fakeGame_level"] - 1);
          for (var C = 0; C < this["shanNode"]["children"]["length"]; C++) {
            var x, T;
            (T = this["shanNode"]["children"][C])["setScale"](0, 0, 0), x = .2 * C, a(T)["delay"](x)["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = u["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["call"](function () {})["start"]();
          }
          for (var L = 0; L < this["caoNode"]["children"]["length"]; L++) {
            var I, R;
            (I = this["caoNode"]["children"][L])["setScale"](0, 0, 0), R = .2 * L, a(I)["delay"](R)["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = u["v3"](1, 1, 1), t;
            }["apply"](), function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }["apply"]())["call"](function () {})["start"]();
          }
          this["carNode"][At] = this["startPoint"]["position"][At], this["scheduleOnce"](function () {
            var t = to;
            o["ins"]["play"](h["GAME_CAR"]);
          }, 1), a(this["carNode"])["delay"](1)["to"](2, function () {
            var t,
              n = to,
              r = n[6];
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0))[At] = 0, t;
            }["apply"]())[At] = this["endPoint"]["position"][At], t;
          }["bind"](this)["apply"]())["call"](function () {
            var t = to,
              n = "uiMgr",
              r = "toggle";
            f["uiMgr"]["toggle"](v["CarMoveLayer"], !1), f["uiMgr"]["toggle"](v["LAYER_MAIN"], !1), f["gameMgr"]["onGameStart"]();
          })["start"]();
        }, i;
      }(l)) || k), r["_RF"]["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});