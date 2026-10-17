(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Node, ParticleSystem2D, tween, Quat, Component, GbzPoolManager;
  return function () {
    var l, b;
    return Pu(l = {}, "setters", 0), Pu(l, "execute", 0), (b = l).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], ParticleSystem2D = t["ParticleSystem2D"], tween = t["tween"], Quat = t["Quat"], Component = t["Component"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }], b.execute = function () {
      var l, b, d, k, m, p, g, y, w, _, M;
      cclegacy._RF["push"]({}, "acf520OJytAxa5ekqX+w531", "ChuiziCom", void 0), d = _decorator["ccclass"], k = _decorator["property"], t("ChuiziCom", (m = d("ChuiziCom"), p = k(Node), g = k(ParticleSystem2D), m((_ = applyDecoratedDescriptor((w = function (t) {
        var n, a;
        return a = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, initializerDefineProperty(r, "nodeChuizi", _, assertThisInitialized(r)), initializerDefineProperty(r, "eff", M, assertThisInitialized(r)), r;
        }, inheritsLoose(a, t), (n = a["prototype"])["playHammer"] = function (t) {
          var n;
          n = this, this.nodeChuizi && (this.nodeChuizi["active"] = !0, this.nodeChuizi["setRotationFromEuler"](0, 0, 0), tween(this.nodeChuizi)["delay"](.5).to(.08, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "rotation", 0)).rotation = 0, t;
            }["apply"]())["rotation"] = Quat["fromEuler"](new Quat(), 0, 0, -10), t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "quadOut", t;
          }.apply()).to(.18, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "rotation", 0)).rotation = 0, t;
            }["apply"]())["rotation"] = Quat["fromEuler"](new Quat(), 0, 0, 45), t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }.apply())["call"](function () {
            n["nodeChuizi"]["active"] = !1, null == t || t(), n["playEffect"]();
          })["start"]());
        }, n["playEffect"] = function () {
          var t;
          t = this, this.eff ? (this.eff["resetSystem"](), this["scheduleOnce"](function () {
            t["onEffectFinish"]();
          }, 2)) : this["onEffectFinish"]();
        }, n["onEffectFinish"] = function () {
          this["isValid"] && GbzPoolManager["ins"]["putNode"](this["node"]);
        }, a;
      }(Component)).prototype, "nodeChuizi", [p], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return null;
      }), l)), M = applyDecoratedDescriptor(w.prototype, "eff", [g], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), y = w)) || y)), cclegacy._RF["pop"]();
    }, b;
  }["bind"](this)["apply"]();
});