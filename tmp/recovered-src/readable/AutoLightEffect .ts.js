(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Material, tween, Component;
  return function () {
    var f, h;
    return Pu(f = {}, "setters", 0), Pu(f, "execute", 0), (h = f).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Material = t["Material"], tween = t["tween"], Component = t["Component"];
    }], h.execute = function () {
      var f, h, v, l, b, d, k, m, p, g, y, w, _, M;
      cclegacy._RF["push"]({}, "514ee+7mfpPzaXWM1+0QdHi", "AutoLightEffect%20", void 0), b = _decorator["ccclass"], d = _decorator["property"], t("AutoLightEffect", (k = b("AutoLightEffect"), m = d(Material), k((y = applyDecoratedDescriptor((g = function (t) {
        var n;
        return n = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, initializerDefineProperty(r, "targetMaterial", y, assertThisInitialized(r)), initializerDefineProperty(r, "appearTime", w, assertThisInitialized(r)), initializerDefineProperty(r, "disappearTime", _, assertThisInitialized(r)), initializerDefineProperty(r, "sweepTime", M, assertThisInitialized(r)), r;
        }, inheritsLoose(n, t), n["prototype"]["start"] = function () {
          var t, n;
          this.targetMaterial.setProperty("fadeInOut", 0), this.targetMaterial.setProperty("speed", 0), t = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "fadeInOut", 0), Pu(t, "speed", 0), (n = t).fadeInOut = 0, n.speed = 0, n;
            }["apply"]())["fadeInOut"] = 0, t["speed"] = 0, t;
          }.apply(), n = this.targetMaterial, tween(t).to(this["appearTime"], function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "fadeInOut", 0)).fadeInOut = 0, t;
            }["apply"]())["fadeInOut"] = 1, t;
          }.apply(), function () {
            var r;
            return (r = function () {
              var t;
              return (t = Pu({}, "onUpdate", 0)).onUpdate = 0, t;
            }["apply"]())["onUpdate"] = function () {
              n["setProperty"]("fadeInOut", t.fadeInOut);
            }, r;
          }.apply()).to(this["disappearTime"], function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "fadeInOut", 0)).fadeInOut = 0, t;
            }["apply"]())["fadeInOut"] = 0, t;
          }.apply(), function () {
            var r;
            return (r = function () {
              var t;
              return (t = Pu({}, "onUpdate", 0)).onUpdate = 0, t;
            }["apply"]())["onUpdate"] = function () {
              n["setProperty"]("fadeInOut", t.fadeInOut);
            }, r;
          }.apply()).to(this["sweepTime"], function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "speed", 0)).speed = 0, t;
            }["apply"]())["speed"] = 1, t;
          }.apply(), function () {
            var r;
            return (r = function () {
              var t;
              return (t = Pu({}, "onUpdate", 0)).onUpdate = 0, t;
            }["apply"]())["onUpdate"] = function () {
              n["setProperty"]("speed", t.speed);
            }, r;
          }.apply())["start"]();
        }, n;
      }(Component)).prototype, "targetMaterial", [m], (Pu(f = {}, "configurable", !0), Pu(f, "enumerable", !0), Pu(f, "writable", !0), Pu(f, "initializer", function () {
        return null;
      }), f)), w = applyDecoratedDescriptor(g.prototype, "appearTime", [d], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return 1;
      }), h)), _ = applyDecoratedDescriptor(g.prototype, "disappearTime", [d], (Pu(v = {}, "configurable", !0), Pu(v, "enumerable", !0), Pu(v, "writable", !0), Pu(v, "initializer", function () {
        return 1;
      }), v)), M = applyDecoratedDescriptor(g.prototype, "sweepTime", [d], (Pu(l = {}, "configurable", !0), Pu(l, "enumerable", !0), Pu(l, "writable", !0), Pu(l, "initializer", function () {
        return 2;
      }), l)), p = g)) || p)), cclegacy._RF["pop"]();
    }, h;
  }["bind"](this)["apply"]();
});