(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Button, EditBox, Node, Component, GbzDataManager, GbzInstance;
  return function () {
    var l, b;
    return Pu(l = {}, "setters", 0), Pu(l, "execute", 0), (b = l).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Button = t["Button"], EditBox = t["EditBox"], Node = t["Node"], Component = t["Component"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }], b.execute = function () {
      var l, b, d, k, m, p, g, y, w, _, M, S, A, C, x, T, L, I, R, E;
      cclegacy._RF["push"]({}, "5f7f5WXEYpORp6URYlj+aHC", "JumpLvBtn", void 0), g = _decorator["ccclass"], p = _decorator["property"], t("default", (y = g("JumpLvBtn"), w = p(Button), _ = p(Button), M = p(Button), S = p(EditBox), A = p(Node), y((T = applyDecoratedDescriptor((x = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          for (var n, r, o = (n = arguments)["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return r = t["call"]["apply"](t, [this]["concat"](c)) || this, initializerDefineProperty(r, "btnOpen", T, assertThisInitialized(r)), initializerDefineProperty(r, "btnClose", L, assertThisInitialized(r)), initializerDefineProperty(r, "btnJump", I, assertThisInitialized(r)), initializerDefineProperty(r, "editBox", R, assertThisInitialized(r)), initializerDefineProperty(r, "pan", E, assertThisInitialized(r)), r;
        }, t), (n = a["prototype"])["onEnable"] = function () {
          this["btnOpen"].node.on("click", this["onShow"], this), this["btnJump"].node.on("click", this["onJump"], this), this["btnClose"].node.on("click", this["onClose"], this);
        }, n["onDisable"] = function () {
          this["btnOpen"].node.off("click", this["onShow"], this), this["btnJump"].node.off("click", this["onJump"], this), this["btnClose"].node.off("click", this["onClose"], this);
        }, n["onClose"] = function () {
          this["pan"]["active"] = !1;
        }, n["onShow"] = function () {
          this["pan"]["active"] = !0;
        }, n["onJump"] = function () {
          var t;
          (t = parseInt(this["editBox"]["string"])) && (GbzDataManager["ins"]["SetCurLv"](t), GbzInstance["gameMgr"]["onGameStart"]());
        }, a;
      }(Component)).prototype, "btnOpen", [w], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), L = applyDecoratedDescriptor(x.prototype, "btnClose", [_], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), I = applyDecoratedDescriptor(x.prototype, "btnJump", [M], (Pu(d = {}, "configurable", !0), Pu(d, "enumerable", !0), Pu(d, "writable", !0), Pu(d, "initializer", function () {
        return null;
      }), d)), R = applyDecoratedDescriptor(x.prototype, "editBox", [S], (Pu(k = {}, "configurable", !0), Pu(k, "enumerable", !0), Pu(k, "writable", !0), Pu(k, "initializer", function () {
        return null;
      }), k)), E = applyDecoratedDescriptor(x.prototype, "pan", [A], (Pu(m = {}, "configurable", !0), Pu(m, "enumerable", !0), Pu(m, "writable", !0), Pu(m, "initializer", function () {
        return null;
      }), m)), C = x)) || C)), cclegacy._RF["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});