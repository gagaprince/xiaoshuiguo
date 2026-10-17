(function (t) {
  var inheritsLoose, cclegacy, _decorator, Node, Sprite, Label, UIOpacity, Button, math, color, GbzAudioManager, GbzDataManager, GbzInstance, GbzResManager, ResType, GbzSdkManager, SOUtil, ENUM_CLIP, ENUM_UI, ENUM_Theme_Sprites_Sub, GbzBaselayer;
  return function () {
    var _, M;
    return Pu(_ = {}, "setters", 0), Pu(_, "execute", 0), (M = _).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], Sprite = t["Sprite"], Label = t["Label"], UIOpacity = t["UIOpacity"], Button = t["Button"], math = t["math"], color = t["color"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"], ENUM_Theme_Sprites_Sub = t["ENUM_Theme_Sprites_Sub"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, null], M.execute = function () {
      var _, M;
      cclegacy._RF["push"]({}, "37680PV7WpHyZ6GZYkW7SjI", "GbzThemeLayer", void 0), _ = _decorator["ccclass"], _decorator["property"], t("default", _("GbzThemeLayer")(M = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["cards"] = null, r["card1"] = null, r["card2"] = null, r["btnLeft"] = null, r["btnRight"] = null, r["btnClose"] = null, r["curType"] = 0, r["progressBg"] = null, r["curTeamIndex"] = 0, r["maxTeamCount"] = 2, r["curHighlightIndex"] = 1, r["lastDirection"] = 0, r["card1ID"] = 0, r["card2ID"] = 0, r;
        }, t), (r = i["prototype"])["onLoad"] = function () {
          this.cards = this.node.getChildByName("cards"), this.card1 = this.cards.getChildByName("card1"), this.card2 = this.cards.getChildByName("card2"), this.btnLeft = this.cards.getChildByName("btnLeft"), this.btnRight = this.cards.getChildByName("btnRight"), this.btnClose = this.node.getChildByName("btnClose"), this.progressBg = this.cards.getChildByName("progressBg"), this.btnLeft.on("click", this["btnLeftFun"], this), this.btnRight.on("click", this["btnRightFun"], this);
        }, r["changeTheme"] = function (t) {
          var n, r, i, e, a, u;
          if (GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), i = t["node"], a = GbzDataManager.ins["fakeGame_level"] || 1, n = Math.max(0, a - 1), e = 0, "card1" == i.name) e = this["card1ID"];else {
            if (!("card2" == i.name && 2 * this["curTeamIndex"] + 1 < GbzDataManager.ins["themeType"]["length"])) return;
            e = this["card2ID"];
          }
          (r = !1, 0 === e) ? r = !0 : (u = 27 * (e - 1), r = 27 === Math.max(0, Math["min"](27, n - u)));
          r || GbzSdkManager.ins["isTest"]() ? (this.curType = e, "card1" == i.name ? (this.card1.getChildByName("light").active = !0, this.card2.getChildByName("light").active = !1, this.card2.getChildByName("using").active = !1, this.card1.getChildByName("using").active = !0) : (this.card2.getChildByName("light").active = !0, this.card1.getChildByName("light").active = !1, this.card1.getChildByName("using").active = !1, this.card2.getChildByName("using").active = !0), GbzDataManager.ins["UseSkin"] = this.curType, GbzInstance["gameMgr"]["loadPrefabbAsync"](this.curType)) : SOUtil["strTipLab"]("没有收集全哦", ENUM_UI["LAYER_THEME"], 200, 50);
        }, r["onDestroy"] = function () {
          this["btnLeft"].off(Node.EventType.TOUCH_START, this.spriteFun, this), this["btnRight"].off(Node.EventType.TOUCH_START, this.spriteFun, this), this["btnClose"].off("click", this["close"], this), this["card1"].off("click", this.changeTheme, this), this["card2"].off("click", this.changeTheme, this);
        }, r["close"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_THEME"], !1);
        }, r["onEnable"] = function () {
          this.curType = GbzDataManager.ins["useSkinId"], this["maxTeamCount"] = Math["ceil"](GbzDataManager.ins["themeType"]["length"] / 2), this["curTeamIndex"] = Math["floor"](this.curType / 2), this["updateProgress"](), this["btnLeft"].on(Node.EventType.TOUCH_START, this.spriteFun, this), this["btnRight"].on(Node.EventType.TOUCH_START, this.spriteFun, this), this["btnClose"].on("click", this["close"], this), this["card1"].on("click", this.changeTheme, this), this["card2"].on("click", this.changeTheme, this), this["changeCard"]();
        }, r["updateProgress"] = function () {
          var t, n, r;
          if (this.progressBg) if (n = this["curTeamIndex"], t = this["maxTeamCount"], r = this.progressBg["children"], t <= 4) for (var w = 0; w < r.length; w++) {
            var _, M;
            if ((_ = r[w]).active = w < t, w < t) M = w === n ? "滑动底03" : "滑动底02", _.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "secondary", M);
          } else {
            var S;
            0, S = 0 === n ? 0 : n === t - 1 ? 3 : 1 === this["lastDirection"] ? 1 === n ? 1 : 2 : n === t - 2 ? 2 : 1;
            for (var A = 0; A < r.length; A++) {
              var C, x;
              (C = r[A]).active = !0, x = A === S ? "滑动底03" : "滑动底02", C.getComponent(Sprite).spriteFrame = GbzResManager.ins.getRes(ResType.Sprite, "secondary", x);
            }
          }
        }, r["btnLeftFun"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), this["lastDirection"] = -1, this.curTeamIndex = (this.curTeamIndex - 1 + this.maxTeamCount) % this.maxTeamCount, this["changeCard"](), this["updateProgress"]();
        }, r["btnRightFun"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), this["lastDirection"] = 1, this.curTeamIndex = (this.curTeamIndex + 1) % this["maxTeamCount"], this["changeCard"](), this["updateProgress"]();
        }, r["spriteFun"] = function (t) {
          var n;
          (n = t["target"])["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "secondary", "箭头01"), n.on(Node.EventType["TOUCH_END"], this.restoreSprite, this), n.on(Node.EventType["TOUCH_CANCEL"], this.restoreSprite, this);
        }, r["restoreSprite"] = function (t) {
          var n;
          (n = t["target"])["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "secondary", "箭头02"), n.off(Node.EventType["TOUCH_END"], this.restoreSprite, this), n.off(Node.EventType["TOUCH_CANCEL"], this.restoreSprite, this);
        }, r["changeCard"] = function () {
          var t, n;
          n = (t = 2 * this["curTeamIndex"]) + 1, this["card1ID"] = t, this["card2ID"] = n, this.uiData(t, this["card1"]), this.uiData(n, this["card2"]);
        }, r["uiData"] = function (t, n) {
          var r, e, h, l, k, m, p, g, w, _, M, S, A, C, x;
          (w = n.getChildByName("light"), e = n.getChildByName("cardName").getComponent(Label), S = n.getChildByName("nodeLayout"), r = n.getChildByName("using"), g = i["getNodeStr"](t), p = (k = n.getChildByName("black")).children[0].getComponent(Label), A = k.getComponent(UIOpacity) || k.addComponent(UIOpacity), h = GbzDataManager.ins["fakeGame_level"] || 1, M = Math.max(0, h - 1), l = 0, 0 === t) ? l = 27 : (x = 27 * (t - 1), l = Math.max(0, Math["min"](27, M - x)));
          if ((_ = n.getComponent(Button)).interactable = !0, m = 0 === t || 27 === l, C = ENUM_Theme_Sprites_Sub[t], m) {
            k.active = !1;
            for (var et = 0; et < 27; et++) {
              var at, ut, st;
              ut = (at = S.children[et].children[0]).getComponent(UIOpacity) || at.addComponent(UIOpacity), st = at.getComponent(Sprite), at.scale = 0 == t ? math.v3(.4, .4, .4) : math.v3(.5, .5, .5), GbzResManager.ins.setSpriteFrameAsync(at.getComponent(Sprite), C.bundle, g[et], C.path + Et + g[et] + "/spriteFrame"), ut.opacity = 255, st.color = color(255, 255, 255);
            }
          } else if (t >= GbzDataManager.ins.themeType["length"]) A.opacity = 255, p.string = "敬请期待", k.active = !0, _.interactable = !1;else {
            k.active = !1;
            for (var ot = 0; ot < 27; ot++) {
              var ct, ft, ht;
              ht = (ct = S.children[ot].children[0]).getComponent(UIOpacity) || ct.addComponent(UIOpacity), ft = ct.getComponent(Sprite), ct.scale = 0 == t ? math.v3(.4, .4, .4) : math.v3(.5, .5, .5), GbzResManager.ins.setSpriteFrameAsync(ft, C.bundle, g[ot], C.path + Et + g[ot] + "/spriteFrame"), ot < l ? (ht.opacity = 255, ft.color = color(255, 255, 255)) : (ht.opacity = 80, ft.color = color(0, 0, 0));
            }
          }
          m && -1 === GbzDataManager.ins.skinIds["indexOf"](t) && GbzDataManager.ins.skinIds["push"](t), e.string = GbzDataManager.ins.themeType[t], n.getComponent(Sprite)["spriteFrame"] = GbzResManager.ins["getRes"](ResType["Sprite"], "secondary", GbzDataManager.ins.themeType[t]), t == this["curType"] ? (w.active = !0, r.active = !0) : (w.active = !1, r.active = !1);
        }, i["getNodeStr"] = function (t) {
          switch (t) {
            case 0:
              return GbzInstance.gameMgr["fruitStr"];
            case 1:
              return GbzInstance.gameMgr["sweetStr"];
            case 2:
              return GbzInstance.gameMgr["vegetableStr"];
            case 3:
              return GbzInstance.gameMgr["animalsStr"];
            case 4:
              return GbzInstance.gameMgr["seaAnimalStr"];
            case 5:
            case 6:
              return GbzInstance.gameMgr["candyStr"];
          }
        }, i;
      }(GbzBaselayer)) || M), cclegacy._RF["pop"]();
    }, M;
  }["bind"](this)["apply"]();
});