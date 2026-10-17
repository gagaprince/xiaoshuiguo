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
    L = to;
  return function () {
    var L,
      I,
      R = to[5],
      E = "setters",
      D = "execute";
    return Pu(L = {}, "setters", 0), Pu(L, "execute", 0), (I = L)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to,
        r = n[4],
        d = n[3];
      i = t["cclegacy"], e = t["_decorator"], a = t["find"], u = t["Widget"], s = t["UITransform"], o = t["v3"], c = t["tween"], f = t["Sprite"], h = t["Label"], v = t["Button"], l = t["sys"], b = t["color"];
    }, function (t) {
      d = t["gameMsg"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      y = t["default"];
    }, function (t) {
      w = t["default"];
    }, function (t) {
      var n = to;
      _ = t["ENUM_CLIP"], M = t["ENUM_UI"], S = t["ENUM_GAME_STATE"];
    }, function (t) {
      A = t["default"];
    }, function (t) {
      C = t["default"];
    }, function (t) {
      x = t["default"];
    }, function (t) {
      T = t["Log"];
    }], I["execute"] = function () {
      var L,
        I,
        R = to,
        E = R[5],
        D = "_RF",
        N = "GbzMenuLayer";
      i["_RF"]["push"]({}, "6cd43MVVK5NNY+5UtqwDA2W", "GbzMenuLayer", void 0), L = e["ccclass"], e["property"], t("default", L("GbzMenuLayer")(I = function (t) {
        var i,
          e,
          A = to,
          L = A[7],
          I = A[11],
          R = A[8],
          E = A[6],
          D = A[5];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = i[7], u = i[9], s = i[5], o = i[13], c = i[6], f = i[11], h = i[10], v = (n = arguments)["length"], l = new Array(v), b = 0; b < v; b++) l[b] = n[b];
          return (r = t["call"]["apply"](t, [this]["concat"](l)) || this)["btn_start"] = null, r["btn_setting"] = null, r["btn_sub"] = null, r["btn_Theme"] = null, r["btn_request"] = null, r["inTime"] = 0, r["btn_cbl"] = null, r["btn_addShortcut"] = null, r["btn_advise"] = null, r["btn_fans"] = null, r["btn_fruitBook"] = null, r["btn_gameClub"] = null, r["btn_Service"] = null, r["btn_rank"] = null, r["btn_share"] = null, r["logoNode"] = void 0, r["mainBtn"] = void 0, r["_logoInitPos"] = null, r["_mainBtnInitPos"] = null, r["_fruitBookInitPos"] = null, r["_fansInitPos"] = null, r["_gameClubInitPos"] = null, r["_serviceInitPos"] = null, r["_rankInitPos"] = null, r["_settingInitPos"] = null, r["_shareInitPos"] = null, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[7],
            i = n[2],
            e = n[5],
            s = n[13],
            o = n[11],
            c = n[10],
            f = n[3],
            h = n[9],
            v = n[6],
            l = "btn_start",
            b = "node",
            k = "on",
            m = "click",
            p = "btn_setting",
            g = "btn_Theme",
            _ = "btn_cbl",
            M = "getChildByName",
            S = "btn_addShortcut",
            A = "btn_request",
            C = "btn_advise",
            x = "btn_fans",
            T = "btn_fruitBook",
            L = "btn_Service",
            I = "btn_rank",
            R = "btn_share",
            E = "btn_gameClub",
            D = "logoNode",
            N = "mainBtn",
            P = "getComponent",
            G = "position",
            O = "clone";
          t = this, this["btn_start"] = a("main/btn_start", this["node"]), this["btn_start"]["on"]("click", this["onStart"], this), this["btn_setting"] = a("btn_setting", this["node"]), this["btn_setting"]["on"]("click", this["onSetting"], this), this["btn_Theme"] = a("btn_Theme", this["node"]), this["btn_Theme"]["on"]("click", this["openTheme"], this), this["btn_cbl"] = this["node"]["getChildByName"]("btn_cbl"), this["btn_cbl"]["on"]("click", this["openTTCbl"], this), this["btn_addShortcut"] = this["node"]["getChildByName"]("btn_addShortcut"), this["btn_addShortcut"]["on"]("click", this["openTTADD"], this), this["btn_request"] = this["node"]["getChildByName"]("btn_request"), this["btn_request"]["on"]("click", this["openTTRequest"], this), this["btn_advise"] = this["node"]["getChildByName"]("btn_advise"), this["btn_advise"]["on"]("click", this["openAdvise"], this), this["btn_fans"] = this["node"]["getChildByName"]("btn_fans"), this["btn_fans"]["on"]("click", this["openFans"], this), this["btn_fruitBook"] = this["node"]["getChildByName"]("btn_fruitBook"), this["btn_fruitBook"]["on"]("click", this["openFruitBook"], this), this["btn_Service"] = this["node"]["getChildByName"]("btn_Service"), this["btn_Service"]["on"]("click", this["openWXService"], this), this["btn_rank"] = this["node"]["getChildByName"]("btn_rank"), this["btn_rank"]["on"]("click", this["openRankLayer"], this), this["btn_share"] = this["node"]["getChildByName"]("btn_share"), this["btn_share"]["on"]("click", this["openShare"], this), this["btn_gameClub"] = this["node"]["getChildByName"]("btn_gameClub"), this["scheduleOnce"](function () {
            var n = to;
            y["ins"]["createGameClubButton"](t["btn_gameClub"]);
          }, 2.5), this["logoNode"] = this["node"]["getChildByName"]("bg_notice"), this["mainBtn"] = this["node"]["getChildByName"]("main"), w["emit"](d["lStartLoadHomeBackUI"]), this["logoNode"]["getComponent"](u)["updateAlignment"](), this["logoNode"]["getComponent"](u)["enabled"] = !1, this["_logoInitPos"] = this["logoNode"]["position"]["clone"](), this["_mainBtnInitPos"] = this["mainBtn"]["position"]["clone"](), this["_fruitBookInitPos"] = this["btn_fruitBook"]["position"]["clone"](), this["_fansInitPos"] = this["btn_fans"]["position"]["clone"](), this["_gameClubInitPos"] = this["btn_gameClub"]["position"]["clone"](), this["_serviceInitPos"] = this["btn_Service"]["position"]["clone"](), this["_rankInitPos"] = this["btn_rank"]["position"]["clone"](), this["_settingInitPos"] = this["btn_setting"]["position"]["clone"](), this["_shareInitPos"] = this["btn_share"]["position"]["clone"](), this["setMainBtnPos"]();
        }, i["setMainBtnPos"] = function () {
          var t,
            n = to,
            r = n[10],
            i = n[13],
            e = n[6],
            a = n[9],
            c = n[11],
            f = "node",
            h = "getComponent",
            v = "logoNode",
            l = "height",
            b = "mainBtn",
            d = "btnsSetPos";
          this["node"]["getComponent"](u)["updateAlignment"](), this["logoNode"]["setPosition"](this["_logoInitPos"][At], this["node"]["getComponent"](s)["height"] / 2 + this["logoNode"]["getComponent"](s)["height"] + 50), (t = this["mainBtn"]["getComponent"](u)) && (t["enabled"] = !1), this["mainBtn"]["scale"] = o(0, 0, 0), this["btnsSetPos"](this["btn_fruitBook"], this["_fruitBookInitPos"], !0), this["btnsSetPos"](this["btn_fans"], this["_fansInitPos"], !0), this["btnsSetPos"](this["btn_Service"], this["_serviceInitPos"], !0), this["btnsSetPos"](this["btn_share"], this["_shareInitPos"], !1), this["btnsSetPos"](this["btn_rank"], this["_rankInitPos"], !1), this["btnsSetPos"](this["btn_gameClub"], this["_gameClubInitPos"], !0), this["btnsSetPos"](this["btn_setting"], this["_settingInitPos"], !0);
        }, i["btnsSetPos"] = function (t, n, r) {
          var i,
            e,
            a = to,
            o = "getComponent";
          (e = t["getComponent"](u)) && (e["enabled"] = !1), i = r ? -1 : 1, t["setPosition"](this["node"]["getComponent"](s)["width"] / 2 * i + 100 * i, n[St]);
        }, i["fruitBookShow"] = function () {
          var t = to,
            n = t[6],
            r = t[9],
            i = t[3],
            e = t[2],
            a = "btn_fruitBook",
            u = "ins",
            s = "delay",
            f = "to",
            h = "bind",
            v = "apply",
            l = "start",
            b = "call";
          this["btn_fruitBook"]["children"][0]["active"] = m["ins"]["fruitBookLastLevel"] < m["ins"]["game_level"], c(this["btn_fruitBook"])["delay"](1.2)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_fruitBookInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"](), c(this["btn_Service"])["delay"](1.2)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_serviceInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"](), c(this["btn_fans"])["delay"](1.8)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_fansInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"](), c(this["btn_gameClub"])["delay"](1.5)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_gameClubInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["call"](function () {
            var t = to;
            y["ins"]["showGameClubButton"]();
          })["start"](), c(this["btn_rank"])["delay"](1.8)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_rankInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"](), c(this["btn_setting"])["delay"](1.8)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_settingInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"](), c(this["btn_share"])["delay"](1.5)["to"](1, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_shareInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["call"](function () {
            var t = to;
            y["ins"]["showGameClubButton"]();
          })["start"](), c(this["logoNode"])["to"](.8, function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = 0, t;
            }["apply"]())["position"] = this["_logoInitPos"], t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"](), c(this["mainBtn"])["delay"](.7)["to"](.8, function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = o(1, 1, 1), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["start"]();
        }, i["openWXService"] = function () {
          var t = to,
            n = "ins";
          k["ins"]["play"](_["GAME_CLICK"]), y["ins"]["openCustomerServiceConversation"]();
        }, i["openFruitBook"] = function () {
          var t = to;
          k["ins"]["play"](_["GAME_CLICK"]), p["uiMgr"]["toggle"](M["FruitBookLayer"], !0, null, this["btn_fruitBook"]["children"][0]);
        }, i["openRankLayer"] = function () {
          var t = to,
            n = t[2];
          x["inst"]["RankList_Enter"](), k["ins"]["play"](_["GAME_CLICK"]), p["uiMgr"]["toggle"](M["GbzRankLayer"], !0);
        }, i["creatorPool"] = function () {
          for (var t = ro, n = this, r = 0; r < 30; r++) for (var i = function () {
              var t = to,
                i = "fruit" + (r + 1),
                e = g["ins"]["getNode"](i);
              n["scheduleOnce"](function () {
                var t = to;
                g["ins"]["putNode"](e);
              }, .5);
            }, e = 0; e < 20; e++) i();
        }, i["onEnable"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[2],
            u = i[11],
            s = i[6],
            o = i[10],
            c = i[7],
            l = i[5],
            b = i[4],
            g = i[12],
            M = "getComponent",
            A = "ins",
            C = "game_level",
            L = "gameMgr",
            I = "active",
            R = "levelComp",
            E = "btn_start",
            D = "getChildByName",
            N = "fakeGame_level";
          x["inst"]["HomePage_View"](), t = this["btn_fruitBook"]["children"][2]["getComponent"](f), (r = (m["ins"]["game_level"] - 1) / 175) >= 1 && (r = 1), t["fillRange"] = r, p["gameMgr"]["gameState"] = S["isHome"], this["setMainBtnPos"](), this["scheduleOnce"](this["fruitBookShow"], .5), k["ins"]["playBGM"](_["GAME_BGM"]), this["inTime"] = Date["now"](), a("Canvas/MAIN/Stage")["active"] = !1, w["on"](d["backInHome"], this["onCominHomew"], this), p["gameMgr"]["levelComp"] && (p["gameMgr"]["levelComp"]["active"] = !1), n = this["btn_start"]["getChildByName"]("level")["getChildByName"]("labLevel")["getComponent"](h), T(Nr + m["ins"]["fakeGame_level"] + Pr), T("数据表第" + m["ins"]["game_level"] + Pr), n["string"] = m["ins"]["fakeGame_level"]["toString"](), this["checktt"](), y["ins"]["ttcanluse"](this["btn_request"]), this["btn_start"]["getComponent"](v)["enabled"] = !0, this["themeTip"]();
        }, i["openAdvise"] = function () {}, i["themeTip"] = function () {
          var t,
            n = to;
          t = parseInt(l["localStorage"]["getItem"]("isThemeTip")), this["btn_Theme"]["children"][0]["active"] = 1 == t;
        }, i["openTheme"] = function () {
          var t = to,
            n = t[8];
          k["ins"]["play"](_["GAME_CLICK"]), this["btn_Theme"]["children"][0]["active"] = !1, l["localStorage"]["setItem"]("isThemeTip", 2);
        }, i["openFans"] = function () {
          var t = to;
          p["uiMgr"]["toggle"](M["LAYER_Fans"], !0);
        }, i["openTTCbl"] = function () {}, i["openTTADD"] = function () {}, i["openTTRequest"] = function () {}, i["checktt"] = function () {
          var t = to;
          y["ins"]["ttcheckScene"](this["btn_cbl"]);
        }, i["onDisable"] = function () {
          var t = to,
            n = t[1];
          y["ins"]["hideGameClubButton"](), w["off"](d["backInHome"], this["onCominHomew"], this);
        }, i["onDestroy"] = function () {
          var t = to,
            n = t[7],
            r = t[9],
            i = t[11],
            e = t[8],
            a = t[6],
            u = "off",
            s = "click";
          this["btn_start"]["off"]("click", this["onStart"], this), this["btn_setting"]["off"]("click", this["onSetting"], this), this["btn_Theme"]["off"]("click", this["openTheme"], this), this["btn_request"]["off"]("click", this["openTTRequest"], this), this["btn_advise"]["off"]("click", this["openAdvise"], this), this["btn_fans"]["off"]("click", this["openFans"], this), this["btn_fruitBook"]["off"]("click", this["openFruitBook"], this), this["btn_Service"]["off"]("click", this["openWXService"], this), this["btn_rank"]["off"]("click", this["openRankLayer"], this);
        }, i["start"] = function () {}, i["onStart"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e, a;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[5], i = n[8], e = n[3][8], a = n[4][11], this[n[7][86]][n[10][0]](v)[r[19]] = !1, k[n[1][0]][n[2][10]](_[i[6]]), t.next = 5, p[r[64]][n[0][28]]();
                case 5:
                  p[e][a](M[i[22]], !1), p[e][a](M[i[15]]), p[r[6]][n[9][49]]();
                case 8:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onSetting"] = function () {
          var t = to;
          k["ins"]["play"](_["GAME_CLICK"]), p["uiMgr"]["toggle"](M["LAYER_SETTING"]);
        }, i["openShare"] = function () {
          var t = to,
            n = t[2],
            r = t[6],
            i = "ins";
          k["ins"]["play"](_["GAME_CLICK"]), y["ins"]["platform"]() ? y["ins"]["activeShare"]() : C["ins"]["show"]("仅支持小游戏平台", function () {
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
            }["apply"]())["gravity"] = "TOP", t["bg_color"] = b(102, 202, 28, 255), t;
          }["apply"]());
        }, i["onCominHomew"] = function () {
          var t = to;
          this["inTime"] = Date["now"]();
        }, i["isClick"] = function () {
          var t,
            n = to,
            r = "inTime";
          return (t = Date["now"]()) - this["inTime"] > 500 && (this["inTime"] = t, !0);
        }, e;
      }(A)) || I), i["_RF"]["pop"]();
    }, I;
  }["bind"](this)["apply"]();
});