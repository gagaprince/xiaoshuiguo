(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Sprite, Label, Node, Tween, math, tween, UIOpacity, color, CityConfig, GbzDataManager, GbzResManager, ScrollListItem, ENUM_Theme_Sprites_Sub;
  return function () {
    var y, w;
    return Pu(y = {}, "setters", 0), Pu(y, "execute", 0), (w = y).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Sprite = t["Sprite"], Label = t["Label"], Node = t["Node"], Tween = t["Tween"], math = t["math"], tween = t["tween"], UIOpacity = t["UIOpacity"], color = t["color"];
    }, function (t) {
      CityConfig = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"];
    }, function (t) {
      ScrollListItem = t["default"];
    }, function (t) {
      ENUM_Theme_Sprites_Sub = t["ENUM_Theme_Sprites_Sub"];
    }], w.execute = function () {
      var y, w, _, M, S, A, C, x, T, L, I, R, E, D, N, P, G, O, F, B, z, U, H;
      cclegacy._RF["push"]({}, "28ebf3XjF1IfIgnSzzCjMhD", "FruitBookComp", void 0), x = _decorator["ccclass"], C = _decorator["property"], t("default", (T = x("FruitBookComp"), L = C(Sprite), I = C(Label), R = C(Sprite), E = C(Label), D = C(Node), N = C(Node), T((O = applyDecoratedDescriptor((G = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          var n;
          n = arguments;
          for (var s, o = n["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return s = t["call"]["apply"](t, [this]["concat"](c)) || this, initializerDefineProperty(s, "fruit", O, assertThisInitialized(s)), initializerDefineProperty(s, "fruitName", F, assertThisInitialized(s)), initializerDefineProperty(s, "fruitSprite", B, assertThisInitialized(s)), initializerDefineProperty(s, "noNum", z, assertThisInitialized(s)), initializerDefineProperty(s, "newTip", U, assertThisInitialized(s)), initializerDefineProperty(s, "parent", H, assertThisInitialized(s)), s["index"] = -1, s;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          -1 != this["index"] && this["refreshPro"]();
        }, n["refreshPro"] = function () {
          var t, n, r, i, e;
          e = this, r = this.index + 1, n = CityConfig.cityUnlockData[this.index][0], this.fruitName.string = n, i = ENUM_Theme_Sprites_Sub[CityConfig.cityUnlockData[this.index][1]], GbzResManager.ins["setSpriteFrameAsync"](this.fruit, i["bundle"], n, i["path"] + Et + n + "/spriteFrame"), this.noNum.string = "No." + r, Tween["stopAllByTarget"](this.parent), this.parent["scale"] = math["v3"](0, 0, 0), this["scheduleOnce"](function () {
            tween(e["parent"])["to"](.5, function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "scale", 0)).scale = 0, t;
              }["apply"]())["scale"] = math["v3"](.9, .9, .9), t;
            }.apply(), function () {
              var t;
              return (t = function () {
                var t;
                return (t = Pu({}, "easing", 0)).easing = 0, t;
              }["apply"]())["easing"] = "backOut", t;
            }.apply())["call"](function () {
              e["parent"]["scale"] = math["v3"](.9, .9, .9);
            })["start"]();
          }, 0), t = this.fruit["getComponent"](UIOpacity) || this.fruit["addComponent"](UIOpacity), r < GbzDataManager.ins.game_level ? (this.fruitSprite.color = color(255, 255, 255), t.opacity = 255, this.fruitName.node.active = !0, this.noNum.node.active = !0) : (this.fruitSprite.color = color(0, 0, 0), t.opacity = 100, this.fruitName.node.active = !1, this.noNum.node.active = !1), r < GbzDataManager.ins.game_level && r >= GbzDataManager.ins["fruitBookLastLevel"] ? this.newTip.active = !0 : this.newTip.active = !1;
        }, n["onItemRender"] = function (t) {
          this["index"] = t, this["refreshPro"]();
        }, a;
      }(ScrollListItem)).prototype, "fruit", [L], (Pu(y = {}, "configurable", !0), Pu(y, "enumerable", !0), Pu(y, "writable", !0), Pu(y, "initializer", function () {
        return null;
      }), y)), F = applyDecoratedDescriptor(G.prototype, "fruitName", [I], (Pu(w = {}, "configurable", !0), Pu(w, "enumerable", !0), Pu(w, "writable", !0), Pu(w, "initializer", function () {
        return null;
      }), w)), B = applyDecoratedDescriptor(G.prototype, "fruitSprite", [R], (Pu(_ = {}, "configurable", !0), Pu(_, "enumerable", !0), Pu(_, "writable", !0), Pu(_, "initializer", function () {
        return null;
      }), _)), z = applyDecoratedDescriptor(G.prototype, "noNum", [E], (Pu(M = {}, "configurable", !0), Pu(M, "enumerable", !0), Pu(M, "writable", !0), Pu(M, "initializer", function () {
        return null;
      }), M)), U = applyDecoratedDescriptor(G.prototype, "newTip", [D], (Pu(S = {}, "configurable", !0), Pu(S, "enumerable", !0), Pu(S, "writable", !0), Pu(S, "initializer", function () {
        return null;
      }), S)), H = applyDecoratedDescriptor(G.prototype, "parent", [N], (Pu(A = {}, "configurable", !0), Pu(A, "enumerable", !0), Pu(A, "writable", !0), Pu(A, "initializer", function () {
        return null;
      }), A)), P = G)) || P)), cclegacy._RF["pop"]();
    }, w;
  }["bind"](this)["apply"]();
});