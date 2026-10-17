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
    S = to;
  return function () {
    var S,
      A,
      C = to[5],
      x = "setters",
      T = "execute";
    return Pu(S = {}, "setters", 0), Pu(S, "execute", 0), (A = S)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to,
        r = n[2],
        h = n[3];
      i = t["cclegacy"], e = t["_decorator"], a = t["find"], u = t["Label"], s = t["Button"], o = t["tween"], c = t["math"], f = t["color"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      b = t["default"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["reporter"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      var n = to;
      p = t["ENUM_STATUS"], g = t["ENUM_UI"], y = t["ENUM_CLIP"];
    }, function (t) {
      w = t["default"];
    }, function (t) {
      _ = t["default"];
    }, function (t) {
      M = t["Log"];
    }], A["execute"] = function () {
      var S,
        A,
        C = to,
        x = C[5],
        T = "_RF",
        L = "GbzLoseFullLayer";
      i["_RF"]["push"]({}, "453102MJiZGvpbon5n4Q3/F", "GbzLoseFullLayer", void 0), S = e["ccclass"], e["property"], t("default", S("GbzLoseFullLayer")(A = function (t) {
        var i,
          e,
          w = to,
          S = w[7],
          A = w[8],
          C = w[5];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[6], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["panel"] = null, r["lose_panel"] = null, r["btn_restart"] = null, r["btn_back"] = null, r["btn_close"] = null, r["btnShare"] = null, r["labNum"] = void 0, r["labChallenge"] = void 0, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[8],
            r = t[5],
            i = t[3],
            e = t[6],
            s = "panel",
            o = "node",
            c = "lose_panel",
            f = "on",
            h = "click",
            v = "btn_restart",
            l = "btn_back",
            b = "labNum",
            d = "getChildByName",
            k = "getComponent",
            m = "btnShare";
          this["panel"] = a("style/panel", this["node"]), this["lose_panel"] = a("style/lose_panel", this["node"]), a("btn_close2", this["panel"])["on"]("click", this["onClose"], this), this["btn_restart"] = a("btn_restart", this["lose_panel"]), this["btn_restart"]["on"]("click", this["onRestart"], this), this["btn_back"] = a("btn_back", this["lose_panel"]), this["btn_back"]["on"]("click", this["onBackHome"], this), this["labNum"] = this["panel"]["getChildByName"]("labInfos")["getChildByName"]("labNum")["getComponent"](u), this["labChallenge"] = this["lose_panel"]["getChildByName"]("labs")["getChildByName"]("challengeCount")["getComponent"](u), this["btnShare"] = a("btnShare", this["lose_panel"]), this["btnShare"]["on"]("click", this["onShare"], this);
        }, i["onDestroy"] = function () {
          var t = to,
            n = "off",
            r = "click";
          this["btn_restart"]["off"]("click", this["onRestart"], this), this["btn_back"]["off"]("click", this["onBackHome"], this);
        }, i["onEnable"] = function () {
          var t,
            n = to,
            r = n[1],
            i = n[4],
            e = n[3],
            a = n[13],
            u = n[9],
            o = n[5],
            c = "instance",
            f = "active",
            h = "uiMgr",
            b = "toggle";
          v["ins"]["status"] = p["UNRUN"], this["labNum"]["string"] = m["instance"]["fruitRemnantNum"]["toString"](), this["btn_restart"]["getComponent"](s)["enabled"] = !0, (t = this["node"]["getChildByName"]("img")) && t["destroy"](), this["panel"]["active"] = !0, this["lose_panel"]["active"] = !1, m["instance"]["reliveCount"] > 0 ? (l["uiMgr"]["toggle"](g["LAYER_LOSE_FULL"], !1), l["uiMgr"]["toggle"](g["GbzResurgenceLayer"], !0)) : this["onClose"]();
        }, i["panelTween"] = function (t) {
          for (var n = to, r = n[3], i = "children", e = "apply", a = 0; a < t["children"]["length"]; a++) {
            var u, s;
            (u = t["children"][a])["setScale"](0, 0, 0), M(u["scale"]), s = .2 * a, o(u)["delay"](s)["to"](.5, function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = "scale";
                return (t = Pu({}, "scale", 0))["scale"] = 0, t;
              }["apply"]())["scale"] = c["v3"](1, 1, 1), t;
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
        }, i["losePanelTween"] = function () {
          for (var t = to, n = this, r = function () {
              var t = to,
                r = t[6],
                e = n["panel"]["children"][i];
              e["setScale"](0, 0, 0);
              var a = .2 * i;
              n["scheduleOnce"](function () {
                var t = to,
                  n = "apply";
                o(e)["to"](.5, function () {
                  var t = to,
                    n = t[3],
                    r = function () {
                      var t = "scale",
                        n = Pu({}, "scale", 0);
                      return n["scale"] = 0, n;
                    }["apply"]();
                  return r["scale"] = c["v3"](1, 1, 1), r;
                }["apply"](), function () {
                  var t = to,
                    n = function () {
                      var t = "easing",
                        n = Pu({}, "easing", 0);
                      return n["easing"] = 0, n;
                    }["apply"]();
                  return n["easing"] = "backOut", n;
                }["apply"]())["start"]();
              }, a);
            }, i = 1; i < this["lose_panel"]["children"]["length"]; i++) r();
        }, i["onDisable"] = function () {
          var t = to,
            n = "scale",
            r = "v3";
          this["btn_back"]["scale"] = c["v3"](0, 0, 0), this["btn_restart"]["scale"] = c["v3"](0, 0, 0);
        }, i["onRestart"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[9], i = n[5], h[n[1][0]][n[2][10]](y[n[8][6]]), this[r[44]][n[10][0]](s)[i[19]] = !1, t.next = 5, l[i[64]][n[0][28]]();
                case 5:
                  l[n[3][8]][n[4][11]](g[n[13][11]], !1), l[i[6]][r[49]]();
                case 7:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onClose"] = function () {
          var t,
            n = to,
            r = n[8],
            i = n[12],
            e = n[3],
            a = n[7],
            u = n[4],
            s = "ins",
            o = "instance",
            c = "play",
            f = "lose_panel",
            l = "challengeCount",
            b = "active";
          _["inst"]["Level_Lose"](v["ins"]["fakeGame_level"], m["instance"]["getPr"]()), h["ins"]["play"](y["GAME_LOSE"]), this["panelTween"](this["lose_panel"]), v["ins"]["challengeCount"]++, this["labChallenge"]["string"] = v["ins"]["challengeCount"]["toString"](), v["ins"]["store"](), this["panel"]["active"] = !1, this["shadow"](this["lose_panel"]), this["lose_panel"]["active"] = !0, h["ins"]["play"](y["GAME_CLICK"]), t = Math["floor"](100 * m["instance"]["fillImg"]["fillRange"]), k["reportGameLose"](t), v["ins"]["uploadLocalToServer"]();
        }, i["onBackHome"] = function () {
          var t = to,
            n = t[8],
            r = "ins",
            i = "uiMgr",
            e = "toggle";
          h["ins"]["play"](y["GAME_CLICK"]), v["ins"]["status"] = p["UNRUN"], l["uiMgr"]["toggle"](g["LAYER_MAIN"], !1), l["uiMgr"]["toggle"](g["LAYER_LOSE_FULL"], !1), l["uiMgr"]["toggle"](g["LAYER_MENU"]);
        }, i["onShare"] = function () {
          var t = to,
            n = t[2],
            r = t[6],
            i = "ins";
          h["ins"]["play"](y["GAME_CLICK"]), b["ins"]["platform"]() ? b["ins"]["activeShare"]() : d["ins"]["show"]("仅支持小游戏平台", function () {
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
            }["apply"]())["gravity"] = "TOP", t["bg_color"] = f(102, 202, 28, 255), t;
          }["apply"]());
        }, e;
      }(w)) || A), i["_RF"]["pop"]();
    }, A;
  }["bind"](this)["apply"]();
});