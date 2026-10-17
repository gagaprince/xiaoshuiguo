(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Label, Tween, UIOpacity, tween, math, Component;
  return function () {
    var l, b;
    return Pu(l = {}, "setters", 0), Pu(l, "execute", 0), (b = l).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Label = t["Label"], Tween = t["Tween"], UIOpacity = t["UIOpacity"], tween = t["tween"], math = t["math"], Component = t["Component"];
    }], b.execute = function () {
      var l, b, d, k, m, p, g, y;
      cclegacy._RF["push"]({}, "59f92wAndBC4ZdwRttEdV1b", "LabelUp", void 0), b = _decorator["ccclass"], d = _decorator["property"], t("default", (k = b("LabelUp"), m = d(Label), k((y = applyDecoratedDescriptor((g = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          var n;
          n = arguments;
          for (var s, o = n["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return s = t["call"]["apply"](t, [this]["concat"](c)) || this, initializerDefineProperty(s, "label", y, assertThisInitialized(s)), s;
        }, t), (n = a["prototype"])["SetData"] = function (t) {
          this["label"]["string"] = t;
        }, n["onEnable"] = function () {
          var t, n, r;
          Tween["stopAllByTarget"](this.node), (r = this.node["getComponent"](UIOpacity) || this.node["addComponent"](UIOpacity))["opacity"] = 255, n = tween(this.node).to(.1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = math["v3"](1.5, 1.5, 1.5), t;
          }.apply()).to(.1, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "scale", 0)).scale = 0, t;
            }["apply"]())["scale"] = math["v3"](1, 1, 1), t;
          }.apply()), t = tween(this.node).parallel(tween(this.node)["by"](.6, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = math["v3"](0, 160, 0), t;
          }.apply()), tween(r).to(.4, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 0, t;
          }.apply())), tween(this.node).parallel(n, t)["start"]();
        }, a;
      }(Component))["prototype"], "label", [m], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), p = g)) || p)), cclegacy._RF["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});