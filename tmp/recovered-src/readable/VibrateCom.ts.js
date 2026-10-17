(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, CCString, Component, Log, GbzSdkManager;
  return function () {
    var h, v;
    return Pu(h = {}, "setters", 0), Pu(h, "execute", 0), (v = h).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], CCString = t["CCString"], Component = t["Component"];
    }, function (t) {
      Log = t["Log"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }], v.execute = function () {
      var h, v, l, b, d, k, m, p;
      cclegacy._RF["push"]({}, "43bb6fKayNBYbX8U1vE9wAT", "VibrateCom", void 0), l = _decorator["ccclass"], v = _decorator["property"], t("default", (b = l("VibrateCom"), d = v(CCString), b((p = applyDecoratedDescriptor((m = function (t) {
        var n, a;
        return a = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return r = t["call"]["apply"](t, [this]["concat"](o)) || this, initializerDefineProperty(r, "virbrateMode", p, assertThisInitialized(r)), r;
        }, inheritsLoose(a, t), (n = a["prototype"])["onEnable"] = function () {
          this["node"]["on"]("click", this["Vibrate"], this);
        }, n["Vibrate"] = function () {
          Log("UI震！ ", GbzSdkManager.ins.uiVibrateOpen), GbzSdkManager.ins.uiVibrateOpen && GbzSdkManager.ins["vibrateShort"](function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "type", 0)).type = 0, t;
            }["apply"]())["type"] = this["virbrateMode"], t;
          }["bind"](this)["apply"]());
        }, a;
      }(Component))["prototype"], "virbrateMode", [d], (Pu(h = {}, "configurable", !0), Pu(h, "enumerable", !0), Pu(h, "writable", !0), Pu(h, "initializer", function () {
        return "medium";
      }), h)), k = m)) || k)), cclegacy._RF["pop"]();
    }, v;
  }["bind"](this)["apply"]();
});