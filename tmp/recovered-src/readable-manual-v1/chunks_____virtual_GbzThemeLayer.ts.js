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
    _ = to;
  return function () {
    var _,
      M,
      S = to[5],
      A = "setters",
      C = "execute";
    return Pu(_ = {}, "setters", 0), Pu(_, "execute", 0), (M = _)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to,
        h = n[2],
        v = n[4],
        l = n[3];
      r = t["cclegacy"], i = t["_decorator"], e = t["Node"], a = t["Sprite"], u = t["Label"], s = t["UIOpacity"], o = t["Button"], c = t["math"], f = t["color"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["default"];
    }, function (t) {
      var n = to[5];
      b = t["default"], d = t["ResType"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      var n = to;
      p = t["ENUM_CLIP"], g = t["ENUM_UI"], y = t["ENUM_Theme_Sprites_Sub"];
    }, function (t) {
      w = t["default"];
    }, null], M["execute"] = function () {
      var _,
        M,
        S = to,
        A = S[5],
        C = "_RF",
        x = "GbzThemeLayer";
      r["_RF"]["push"]({}, "37680PV7WpHyZ6GZYkW7SjI", "GbzThemeLayer", void 0), _ = i["ccclass"], i["property"], t("default", _("GbzThemeLayer")(M = function (t) {
        var r,
          i,
          w = to,
          _ = w[7],
          M = w[4],
          S = w[9],
          A = w[8];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[5], s = i[6], o = i[10], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["cards"] = null, r["card1"] = null, r["card2"] = null, r["btnLeft"] = null, r["btnRight"] = null, r["btnClose"] = null, r["curType"] = 0, r["progressBg"] = null, r["curTeamIndex"] = 0, r["maxTeamCount"] = 2, r["curHighlightIndex"] = 1, r["lastDirection"] = 0, r["card1ID"] = 0, r["card2ID"] = 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          var t = to,
            n = t[3],
            r = t[6],
            i = "cards",
            e = "node",
            a = "getChildByName",
            u = "card1",
            s = "card2",
            o = "btnLeft",
            c = "btnRight",
            f = "btnClose",
            h = "progressBg",
            v = "on",
            l = "click";
          this["cards"] = this["node"]["getChildByName"]("cards"), this["card1"] = this["cards"]["getChildByName"]("card1"), this["card2"] = this["cards"]["getChildByName"]("card2"), this["btnLeft"] = this["cards"]["getChildByName"]("btnLeft"), this["btnRight"] = this["cards"]["getChildByName"]("btnRight"), this["btnClose"] = this["node"]["getChildByName"]("btnClose"), this["progressBg"] = this["cards"]["getChildByName"]("progressBg"), this["btnLeft"]["on"]("click", this["btnLeftFun"], this), this["btnRight"]["on"]("click", this["btnRightFun"], this);
        }, r["changeTheme"] = function (t) {
          var n,
            r,
            i,
            e,
            a,
            u,
            s = to,
            o = ro,
            c = s[2],
            f = s[5],
            b = s[7],
            d = s[4],
            y = s[1],
            w = s[3],
            _ = 27,
            M = "ins",
            S = "max",
            A = "card1",
            C = "name",
            x = "card2",
            T = "curType",
            L = "getChildByName",
            I = "light",
            R = "active",
            E = "using";
          if (h["ins"]["play"](p["GAME_CLICK"]), i = t["node"], a = v["ins"]["fakeGame_level"] || 1, n = Math["max"](0, a - 1), e = 0, "card1" == i["name"]) e = this["card1ID"];else {
            if (!("card2" == i["name"] && 2 * this["curTeamIndex"] + 1 < v["ins"]["themeType"]["length"])) return;
            e = this["card2ID"];
          }
          (r = !1, 0 === e) ? r = !0 : (u = 27 * (e - 1), r = 27 === Math["max"](0, Math["min"](27, n - u)));
          r || k["ins"]["isTest"]() ? (this["curType"] = e, "card1" == i["name"] ? (this["card1"]["getChildByName"]("light")["active"] = !0, this["card2"]["getChildByName"]("light")["active"] = !1, this["card2"]["getChildByName"]("using")["active"] = !1, this["card1"]["getChildByName"]("using")["active"] = !0) : (this["card2"]["getChildByName"]("light")["active"] = !0, this["card1"]["getChildByName"]("light")["active"] = !1, this["card1"]["getChildByName"]("using")["active"] = !1, this["card2"]["getChildByName"]("using")["active"] = !0), v["ins"]["UseSkin"] = this["curType"], l["gameMgr"]["loadPrefabbAsync"](this["curType"])) : m["strTipLab"]("没有收集全哦", g["LAYER_THEME"], 200, 50);
        }, r["onDestroy"] = function () {
          var t = to,
            n = t[6],
            r = t[3],
            i = t[7],
            a = t[9],
            u = "off",
            s = "EventType",
            o = "TOUCH_START",
            c = "spriteFun",
            f = "click",
            h = "changeTheme";
          this["btnLeft"]["off"](e["EventType"]["TOUCH_START"], this["spriteFun"], this), this["btnRight"]["off"](e["EventType"]["TOUCH_START"], this["spriteFun"], this), this["btnClose"]["off"]("click", this["close"], this), this["card1"]["off"]("click", this["changeTheme"], this), this["card2"]["off"]("click", this["changeTheme"], this);
        }, r["close"] = function () {
          var t = to;
          h["ins"]["play"](p["GAME_CLICK"]), l["uiMgr"]["toggle"](g["LAYER_THEME"], !1);
        }, r["onEnable"] = function () {
          var t = to,
            n = t[7],
            r = t[10],
            i = t[3],
            a = t[6],
            u = t[9],
            s = "curType",
            o = "ins",
            c = "on",
            f = "EventType",
            h = "TOUCH_START",
            l = "spriteFun",
            b = "click",
            d = "changeTheme";
          this["curType"] = v["ins"]["useSkinId"], this["maxTeamCount"] = Math["ceil"](v["ins"]["themeType"]["length"] / 2), this["curTeamIndex"] = Math["floor"](this["curType"] / 2), this["updateProgress"](), this["btnLeft"]["on"](e["EventType"]["TOUCH_START"], this["spriteFun"], this), this["btnRight"]["on"](e["EventType"]["TOUCH_START"], this["spriteFun"], this), this["btnClose"]["on"]("click", this["close"], this), this["card1"]["on"]("click", this["changeTheme"], this), this["card2"]["on"]("click", this["changeTheme"], this), this["changeCard"]();
        }, r["updateProgress"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[10],
            u = i[4],
            s = i[3],
            o = "progressBg",
            c = "length",
            f = "active",
            h = "滑动底03",
            v = "滑动底02",
            l = "getComponent",
            k = "spriteFrame",
            m = "ins",
            p = "getRes",
            g = "Sprite",
            y = "secondary";
          if (this["progressBg"]) if (n = this["curTeamIndex"], t = this["maxTeamCount"], r = this["progressBg"]["children"], t <= 4) for (var w = 0; w < r["length"]; w++) {
            var _, M;
            if ((_ = r[w])["active"] = w < t, w < t) M = w === n ? "滑动底03" : "滑动底02", _["getComponent"](a)["spriteFrame"] = b["ins"]["getRes"](d["Sprite"], "secondary", M);
          } else {
            var S;
            0, S = 0 === n ? 0 : n === t - 1 ? 3 : 1 === this["lastDirection"] ? 1 === n ? 1 : 2 : n === t - 2 ? 2 : 1;
            for (var A = 0; A < r["length"]; A++) {
              var C, x;
              (C = r[A])["active"] = !0, x = A === S ? "滑动底03" : "滑动底02", C["getComponent"](a)["spriteFrame"] = b["ins"]["getRes"](d["Sprite"], "secondary", x);
            }
          }
        }, r["btnLeftFun"] = function () {
          var t = to,
            n = t[8],
            r = t[10],
            i = "curTeamIndex",
            e = "maxTeamCount";
          h["ins"]["play"](p["GAME_CLICK"]), this["lastDirection"] = -1, this["curTeamIndex"] = (this["curTeamIndex"] - 1 + this["maxTeamCount"]) % this["maxTeamCount"], this["changeCard"](), this["updateProgress"]();
        }, r["btnRightFun"] = function () {
          var t = to,
            n = t[8],
            r = "curTeamIndex";
          h["ins"]["play"](p["GAME_CLICK"]), this["lastDirection"] = 1, this["curTeamIndex"] = (this["curTeamIndex"] + 1) % this["maxTeamCount"], this["changeCard"](), this["updateProgress"]();
        }, r["spriteFun"] = function (t) {
          var n,
            r = to,
            i = r[4],
            u = r[10],
            s = r[7],
            o = "on",
            c = "EventType",
            f = "restoreSprite";
          (n = t["target"])["getComponent"](a)["spriteFrame"] = b["ins"]["getRes"](d["Sprite"], "secondary", "箭头01"), n["on"](e["EventType"]["TOUCH_END"], this["restoreSprite"], this), n["on"](e["EventType"]["TOUCH_CANCEL"], this["restoreSprite"], this);
        }, r["restoreSprite"] = function (t) {
          var n,
            r = to,
            i = r[4],
            u = r[10],
            s = r[7],
            o = "off",
            c = "EventType",
            f = "restoreSprite";
          (n = t["target"])["getComponent"](a)["spriteFrame"] = b["ins"]["getRes"](d["Sprite"], "secondary", "箭头02"), n["off"](e["EventType"]["TOUCH_END"], this["restoreSprite"], this), n["off"](e["EventType"]["TOUCH_CANCEL"], this["restoreSprite"], this);
        }, r["changeCard"] = function () {
          var t,
            n,
            r = to,
            i = r[5],
            e = r[3],
            a = "uiData";
          n = (t = 2 * this["curTeamIndex"]) + 1, this["card1ID"] = t, this["card2ID"] = n, this["uiData"](t, this["card1"]), this["uiData"](n, this["card2"]);
        }, r["uiData"] = function (t, n) {
          var r,
            e,
            h,
            l,
            k,
            m,
            p,
            g,
            w,
            _,
            M,
            S,
            A,
            C,
            x,
            T = to,
            L = ro,
            I = T[3],
            R = T[8],
            E = T[4],
            D = T[2],
            N = T[5],
            P = T[10],
            G = T[1],
            O = 27,
            F = 255,
            B = "getChildByName",
            z = "getComponent",
            U = "children",
            H = "addComponent",
            V = "ins",
            W = "max",
            J = "interactable",
            j = "active",
            q = "scale",
            K = "v3",
            Y = "setSpriteFrameAsync",
            X = "bundle",
            Z = "path",
            Q = "/spriteFrame",
            $ = "opacity",
            tt = "color",
            nt = "themeType",
            rt = "string",
            it = "skinIds";
          (w = n["getChildByName"]("light"), e = n["getChildByName"]("cardName")["getComponent"](u), S = n["getChildByName"]("nodeLayout"), r = n["getChildByName"]("using"), g = i["getNodeStr"](t), p = (k = n["getChildByName"]("black"))["children"][0]["getComponent"](u), A = k["getComponent"](s) || k["addComponent"](s), h = v["ins"]["fakeGame_level"] || 1, M = Math["max"](0, h - 1), l = 0, 0 === t) ? l = 27 : (x = 27 * (t - 1), l = Math["max"](0, Math["min"](27, M - x)));
          if ((_ = n["getComponent"](o))["interactable"] = !0, m = 0 === t || 27 === l, C = y[t], m) {
            k["active"] = !1;
            for (var et = 0; et < 27; et++) {
              var at, ut, st;
              ut = (at = S["children"][et]["children"][0])["getComponent"](s) || at["addComponent"](s), st = at["getComponent"](a), at["scale"] = 0 == t ? c["v3"](.4, .4, .4) : c["v3"](.5, .5, .5), b["ins"]["setSpriteFrameAsync"](at["getComponent"](a), C["bundle"], g[et], C["path"] + Et + g[et] + "/spriteFrame"), ut["opacity"] = 255, st["color"] = f(255, 255, 255);
            }
          } else if (t >= v["ins"]["themeType"]["length"]) A["opacity"] = 255, p["string"] = "敬请期待", k["active"] = !0, _["interactable"] = !1;else {
            k["active"] = !1;
            for (var ot = 0; ot < 27; ot++) {
              var ct, ft, ht;
              ht = (ct = S["children"][ot]["children"][0])["getComponent"](s) || ct["addComponent"](s), ft = ct["getComponent"](a), ct["scale"] = 0 == t ? c["v3"](.4, .4, .4) : c["v3"](.5, .5, .5), b["ins"]["setSpriteFrameAsync"](ft, C["bundle"], g[ot], C["path"] + Et + g[ot] + "/spriteFrame"), ot < l ? (ht["opacity"] = 255, ft["color"] = f(255, 255, 255)) : (ht["opacity"] = 80, ft["color"] = f(0, 0, 0));
            }
          }
          m && -1 === v["ins"]["skinIds"]["indexOf"](t) && v["ins"]["skinIds"]["push"](t), e["string"] = v["ins"]["themeType"][t], n["getComponent"](a)["spriteFrame"] = b["ins"]["getRes"](d["Sprite"], "secondary", v["ins"]["themeType"][t]), t == this["curType"] ? (w["active"] = !0, r["active"] = !0) : (w["active"] = !1, r["active"] = !1);
        }, i["getNodeStr"] = function (t) {
          var n = to,
            r = n[6],
            i = n[10],
            e = "gameMgr";
          switch (t) {
            case 0:
              return l["gameMgr"]["fruitStr"];
            case 1:
              return l["gameMgr"]["sweetStr"];
            case 2:
              return l["gameMgr"]["vegetableStr"];
            case 3:
              return l["gameMgr"]["animalsStr"];
            case 4:
              return l["gameMgr"]["seaAnimalStr"];
            case 5:
            case 6:
              return l["gameMgr"]["candyStr"];
          }
        }, i;
      }(w)) || M), r["_RF"]["pop"]();
    }, M;
  }["bind"](this)["apply"]();
});