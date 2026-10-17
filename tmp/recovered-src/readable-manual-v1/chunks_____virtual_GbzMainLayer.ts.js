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
    T,
    L,
    I,
    R,
    E,
    D = to;
  return function () {
    var D,
      N,
      P = to[5],
      G = "setters",
      O = "execute";
    return Pu(D = {}, "setters", 0), Pu(D, "execute", 0), (N = D)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        d = n[2],
        k = n[3],
        m = n[7];
      r = t["cclegacy"], i = t["_decorator"], e = t["math"], a = t["find"], u = t["input"], s = t["Input"], o = t["EditBox"], c = t["Label"], f = t["UIOpacity"], h = t["view"], v = t["Tween"], l = t["tween"], b = t["Animation"];
    }, function (t) {
      d = t["gameMsg"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      var n = to;
      m = t["PropType"], p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      y = t["default"];
    }, function (t) {
      w = t["default"];
    }, function (t) {
      _ = t["default"];
    }, function (t) {
      M = t["default"];
    }, function (t) {
      S = t["default"];
    }, function (t) {
      A = t["default"];
    }, function (t) {
      var n = to;
      C = t["ENUM_CLIP"], x = t["ENUM_STATUS"], T = t["ENUM_UI"];
    }, function (t) {
      L = t["default"];
    }, function (t) {
      I = t["default"];
    }, function (t) {
      R = t["default"];
    }, function (t) {
      E = t["Log"];
    }], N["execute"] = function () {
      var D,
        N,
        P,
        G = to,
        O = G[5],
        F = "_RF",
        B = "GbzMainLayer";
      r["_RF"]["push"]({}, "7c330JdxoVKRZpHO2ppqzfY", "GbzMainLayer", void 0), D = i["ccclass"], i["property"], t("default", D("GbzMainLayer")(((P = function (t) {
        var r,
          i,
          L = to,
          D = L[7],
          N = L[4],
          P = L[6],
          G = L[13];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[5], u = i[11], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["btn_exit"] = null, r["skills"] = null, r["loseCounts"] = 0, r["btnType"] = [m["removeFruit"], m["disturbFruit"]], r["btn_Win"] = null, r["jumpLv"] = null, r["animNodes"] = null, r["_skillClickHandlers"] = [], r["lightningNode"] = null, r["linearDamping"] = void 0, r;
        }, t), (r = i["prototype"])["yure"] = function () {
          var t,
            n = to,
            r = n[3],
            i = "ins",
            a = "getNode",
            u = "node";
          t = y["ins"]["getNode"]("flash", this["node"]), y["ins"]["getNode"]("ice", this["node"])["scale"] = e["v3"](0), t["setPosition"](0, -1000), this["scheduleOnce"](function () {
            t["destroy"]();
          }, 3);
        }, r["refesh"] = function () {
          var t = to;
          this["animNodes"]["active"] = !1, g["gameMgr"]["itemADCounts"] = [4, 4], this["refreshSkillBtn"]();
        }, r["onLoad"] = function () {
          var t = to,
            n = t[2],
            r = t[6],
            e = t[4],
            c = t[5],
            f = t[7],
            h = t[1],
            v = t[11],
            l = "_GbzMainLayer",
            b = "btn_exit",
            k = "node",
            m = "on",
            p = "click",
            g = "btn_Win",
            y = "getChildByName",
            _ = "jumpLv",
            S = "animNodes",
            A = "active",
            C = "lightningNode",
            x = "EventType",
            T = "touchClick",
            L = "platformApi",
            I = "linearDamping";
          M["emit"](d["lStartLoadGameBackUI"]), i["_GbzMainLayer"] || (i["_GbzMainLayer"] = this), this["btn_exit"] = a("btn_exit", this["node"]), this["btn_exit"]["on"]("click", this["onExit"], this), this["btn_Win"] = this["node"]["getChildByName"]("btn_Win"), this["btn_Win"]["on"]("click", this["btnWinFun"], this), this["jumpLv"] = this["node"]["getChildByName"]("jumpLv"), this["animNodes"] = a("animNodes", this["node"]), this["animNodes"]["active"] = !1, this["lightningNode"] = a("lightningNode", this["node"]), this["lightningNode"]["active"] = !1, u["on"](s["EventType"]["TOUCH_START"], this["touchClick"], this), u["on"](s["EventType"]["TOUCH_END"], this["touchClick"], this), w["_ins"]["platformApi"] ? w["ins"]["platformApi"]["freead"] ? (this["btn_Win"]["active"] = !0, this["jumpLv"]["active"] = !0) : (this["btn_Win"]["active"] = !1, this["jumpLv"]["active"] = !1) : (this["btn_Win"]["active"] = !0, this["jumpLv"]["active"] = !0), this["linearDamping"] = a("linearDamping", this["node"])["getComponent"](o), a("btn", this["linearDamping"]["node"])["on"]("click", this["editorBoxChange"], this), this["jumpLv"]["getChildByName"]("btn_cf1")["on"]("click", this["onBtnCf1"], this), this["jumpLv"]["getChildByName"]("btn_cf2")["on"]("click", this["onBtnCf2"], this), this["jumpLv"]["getChildByName"]("btn_cf3")["on"]("click", this["onBtnCf3"], this);
        }, r["onBtnCf1"] = function () {
          var t = to,
            n = t[4];
          R["getIns"]()["InitCf"](1), _["ins"]["show"]("切换配置为原版");
        }, r["onBtnCf2"] = function () {
          var t = to,
            n = t[4];
          R["getIns"]()["InitCf"](2), _["ins"]["show"]("切换配置为简单");
        }, r["onBtnCf3"] = function () {
          var t = to,
            n = t[4];
          R["getIns"]()["InitCf"](3), _["ins"]["show"]("切换配置为困难");
        }, r["editorBoxChange"] = function () {
          var t = to,
            n = "ins",
            r = "linearDamping";
          p["ins"]["linearDamping"] = parseFloat(this["linearDamping"]["string"]) || 0, E(p["ins"]["linearDamping"]), M["emit"](d["changelinearDamping"]);
        }, r["onEnable"] = function () {
          var t,
            n = to,
            r = n[5],
            i = n[4],
            e = "skills",
            u = "active";
          t = this, this["skills"] = a("skills", this["node"]), this["skills"]["active"] = !0, a("Canvas/MAIN/Stage")["active"] = !0, this["refesh"](), this["rendorCurrentLevel"](), k["ins"]["playBGM"](C["GAME_PLAYBGM"]), this["skills"]["children"]["forEach"](function (n, r) {
            var i,
              e = to;
            i = function () {
              t["onSkillClick"](r);
            }, t["_skillClickHandlers"][r] = i, n["on"]("click", i);
          });
        }, r["onDisable"] = function () {
          var t,
            n,
            r = to,
            i = r[5],
            e = r[6],
            a = r[4];
          n = this, k["ins"]["playBGM"](C["GAME_BGM"]), (t = this["node"]["getChildByName"]("DynamicLabel")) && t["destroy"](), this["skills"]["children"]["forEach"](function (t, r) {
            var i,
              e = to;
            (i = n["_skillClickHandlers"][r]) && t["off"]("click", i);
          }), this["_skillClickHandlers"]["length"] = 0;
        }, r["btnWinFun"] = function () {
          var t = to,
            n = t[4],
            r = "instance";
          p["ins"]["status"] != x["UNRUN"] && A["instance"] && A["instance"]["winFun"](!0);
        }, r["onDestroy"] = function () {
          var t = to,
            n = t[7],
            r = "off",
            i = "EventType",
            e = "touchClick",
            a = "click";
          u["off"](s["EventType"]["TOUCH_START"], this["touchClick"], this), u["off"](s["EventType"]["TOUCH_END"], this["touchClick"], this), this["btn_exit"]["off"]("click", this["onExit"], this), this["btn_Win"]["off"]("click", this["btnWinFun"], this);
        }, r["onExit"] = function () {
          var t = to,
            n = t[4],
            r = t[3],
            i = t[8],
            e = "ins";
          p["ins"]["status"] != x["UNRUN"] && (k["ins"]["play"](C["GAME_CLICK"]), g["uiMgr"]["toggle"](T["LAYER_EXIT"]));
        }, r["refreshSkillBtn"] = function () {
          for (var t = to, n = ro, r = t[4], i = t[10], e = t[5], a = "skills", u = "children", s = "btnType", o = "getChildByName", h = "ad", v = "active", l = "propNumLbl", b = "getComponent", d = "opacity", k = 0; k < this["skills"]["children"]["length"]; k++) {
            var m, y, w, _;
            if (m = this["skills"]["children"][k], y = p["ins"]["getPropNum"](this["btnType"][k]), E(this["btnType"][k]), y > 0) m["getChildByName"]("ad")["active"] = !1, (w = m["getChildByName"]("propNumLbl"))["active"] = !0, w["getComponent"](c)["string"] = At + y["toString"]();else m["getChildByName"]("ad")["active"] = !0, _ = m["getComponent"](f) || m["addComponent"](f), m["getChildByName"]("propNumLbl")["active"] = !1, g["gameMgr"]["itemADCounts"][this["btnType"][k]] > 0 ? (_["opacity"] = 255, m["getChildByName"]("ad")["active"] = !0) : (_["opacity"] = 125, m["getChildByName"]("ad")["active"] = !1);
          }
        }, r["onSkillClick"] = function (t) {
          var n,
            r = to,
            i = ro,
            e = r[1],
            a = r[4],
            u = r[3],
            s = r[2],
            o = r[8],
            c = r[5],
            f = 200,
            h = 35,
            v = "refreshSkillBtn",
            l = "ins",
            b = "skillIndex",
            d = "btnType",
            m = "gameMgr",
            y = "strTipLab",
            w = "LAYER_MAIN";
          (this["refreshSkillBtn"](), p["ins"]["status"] != x["UNRUN"]) ? (k["ins"]["play"](C["GAME_CLICK"]), p["ins"]["skillIndex"] = t, n = p["ins"]["getPropNum"](this["btnType"][t]), g["gameMgr"]["itemADCounts"][this["btnType"][t]] < 1 || (n > 0 ? (p["ins"]["addProp"](this["btnType"][t], -1), g["gameMgr"]["onGameSkill"](), this["refreshSkillBtn"]()) : 1 != p["ins"]["game_level"] ? g["uiMgr"]["toggle"](T["GbzGetItemLayer"], !0, null, function () {
            var n,
              r = to,
              i = r[3];
            return (n = function () {
              var t,
                n,
                r = to,
                i = "index",
                e = "_GbzMainLayer";
              return Pu(t = {}, "index", 0), Pu(t, "_GbzMainLayer", 0), (n = t)["index"] = 0, n["_GbzMainLayer"] = 0, n;
            }["apply"]())["index"] = t, n["_GbzMainLayer"] = this, n;
          }["bind"](this)["apply"]()) : M["strTipLab"]("第二关使用", T["LAYER_MAIN"], 200, 35))) : 0 == p["ins"]["skillIndex"] ? M["strTipLab"]("消除中", T["LAYER_MAIN"], 200, 35) : 1 == p["ins"]["skillIndex"] && M["strTipLab"]("刷新中", T["LAYER_MAIN"], 200, 35);
        }, r["rendorCurrentLevel"] = function () {}, r["touchClick"] = function (t) {
          var n = to,
            r = "instance";
          A["instance"] && A["instance"]["resetViewTimeNum"]();
        }, r["showAnim"] = function (t, n, r, i) {
          var a,
            u,
            s,
            o,
            f,
            b,
            d = to,
            k = ro,
            m = d[7],
            p = d[4],
            g = d[3],
            y = 200,
            w = "animNodes",
            _ = "active",
            M = "getChildByName",
            A = "stopAllByTarget",
            C = "to",
            x = "apply",
            T = "call",
            L = "start",
            I = "children",
            R = "string";
          if (a = this, this["animNodes"]["active"] = !0, s = this["animNodes"]["getChildByName"]("animbg"), o = this["animNodes"]["getChildByName"]("animNode0"), u = this["animNodes"]["getChildByName"]("animNode1"), s["active"] = !0, o["active"] = !1, u["active"] = !1, 0 == t) f = h["getVisibleSize"]()["width"], o["active"] = !0, o[At] = -f / 2 - 200, b = f / 2 + 200, v["stopAllByTarget"](o), l(o)["to"](.5, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0))[At] = 0, t;
            }["apply"]())[At] = 0, t;
          }["apply"]())["delay"](1.5)["to"](.5, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, At, 0))[At] = 0, t;
            }["apply"]())[At] = b, t;
          }["apply"]())["call"](function () {
            var t = to;
            a["animNodes"]["active"] = !1, n && n();
          })["start"]();else if (1 == t) if (2 == r || 3 == r) {
            var E, D, N;
            u["active"] = !0, (N = u["getChildByName"]("icons"))["scale"] = e["v3"](1.5, 1.5, 1.5), N["angle"] = 0, N["setPosition"](0, 40), N["active"] = !0;
            for (var P = 0; P < N["children"]["length"]; P++) N["children"][P]["active"] = !1;
            (D = u["getChildByName"]("dir")["getComponent"](c))["node"]["active"] = !0, 2 == r ? (D["string"] = "从左往右移动", N["children"][2]["active"] = !0) : 3 == r && (D["string"] = "从右往左移动", N["children"][1]["active"] = !0), E = S["convetOtherNodeSpaceAR"](i, u), v["stopAllByTarget"](N), l(N)["to"](.1, function () {
              var t,
                n = to[3];
              return (t = function () {
                var t,
                  n = "angle";
                return (t = Pu({}, "angle", 0))["angle"] = 0, t;
              }["apply"]())["angle"] = 15, t;
            }["apply"]())["to"](.1, function () {
              var t,
                n = to[3];
              return (t = function () {
                var t,
                  n = "angle";
                return (t = Pu({}, "angle", 0))["angle"] = 0, t;
              }["apply"]())["angle"] = 0, t;
            }["apply"]())["to"](.1, function () {
              var t,
                n = to[3];
              return (t = function () {
                var t,
                  n = "angle";
                return (t = Pu({}, "angle", 0))["angle"] = 0, t;
              }["apply"]())["angle"] = -15, t;
            }["apply"]())["to"](.1, function () {
              var t,
                n = to[3];
              return (t = function () {
                var t,
                  n = "angle";
                return (t = Pu({}, "angle", 0))["angle"] = 0, t;
              }["apply"]())["angle"] = 0, t;
            }["apply"]())["union"]()["repeat"](3)["call"](function () {
              var t = to,
                r = t[3],
                i = t[2],
                u = "active";
              N["angle"] = 0, D["node"]["active"] = !1, s["active"] = !1, l(N)["to"](.5, function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "position",
                    e = "scale";
                  return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t)["position"] = 0, n["scale"] = 0, n;
                }["apply"]())["position"] = E, t["scale"] = e["v3"](1, 1, 1), t;
              }["apply"]())["call"](function () {
                var t = to,
                  r = "active";
                N["active"] = !1, a["animNodes"]["active"] = !1, n && n();
              })["start"]();
            })["start"]();
          } else this["animNodes"]["active"] = !1, n && n();
        }, r["showlightning"] = function (t) {
          var n,
            r,
            i,
            e,
            a = to,
            u = a[12],
            s = a[2],
            o = a[3],
            c = "lightningNode",
            h = "anim",
            v = "getComponent";
          (n = this, p["ins"]["fakeGame_level"] % 10 == 1 && 1 == I["inst"]["curTheme"]) ? (this["lightningNode"]["active"] = !0, r = (i = this["lightningNode"]["getChildByName"]("anim"))["getComponent"](b), (e = i["getComponent"](f) || i["addComponent"](f))["opacity"] = 100, r["play"]("anim"), l(e)["to"](.2, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "opacity";
              return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
            }["apply"]())["opacity"] = 255, t;
          }["apply"]())["delay"](.3)["call"](function () {
            var r = to;
            n["lightningNode"]["active"] = !1, t && t(!0);
          })["start"]()) : t && t(!1);
        }, i;
      }(L))["levelBg"] = void 0, P["_GbzMainLayer"] = void 0, N = P)) || N), r["_RF"]["pop"]();
    }, N;
  }["bind"](this)["apply"]();
});