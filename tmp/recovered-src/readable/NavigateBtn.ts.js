(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, Sprite, Label, assetManager, SpriteFrame, Component, GbzSdkManager, Log;
  return function () {
    var b, d;
    return Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (d = b).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Sprite = t["Sprite"], Label = t["Label"], assetManager = t["assetManager"], SpriteFrame = t["SpriteFrame"], Component = t["Component"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], d.execute = function () {
      var b, d, k, m, p, g, y, w, _, M, S;
      cclegacy._RF["push"]({}, "ba107pYm49Ip6YO7m8Ipz8k", "NavigateBtn", void 0), m = _decorator["ccclass"], k = _decorator["property"], t("default", (p = m("NavigateBtn"), g = k(Sprite), y = k(Label), p((M = applyDecoratedDescriptor((_ = function (t) {
        var n, a;
        return inheritsLoose(a = function () {
          var n;
          n = arguments;
          for (var s, o = n["length"], c = new Array(o), f = 0; f < o; f++) c[f] = n[f];
          return s = t["call"]["apply"](t, [this]["concat"](c)) || this, initializerDefineProperty(s, "icon", M, assertThisInitialized(s)), initializerDefineProperty(s, "nameLbl", S, assertThisInitialized(s)), s;
        }, t), (n = a["prototype"])["start"] = function () {
          var t, n, r;
          t = this, r = !1, (n = GbzSdkManager["ins"])["navigateMiniOpen"] && n["navigateAppid"] && n.navigateAppName && n.navigateAppIconUrl && (r = !0, this["nameLbl"]["string"] = n.navigateAppName, assetManager["loadRemote"](n.navigateAppIconUrl, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "ext", 0)).ext = 0, t;
            }["apply"]())["ext"] = ".png", t;
          }["apply"](), function (n, r) {
            var i;
            n || ((i = new SpriteFrame())["texture"] = r, t["icon"]["spriteFrame"] = i);
          })), r || (this["node"]["active"] = !1);
        }, n["onClick"] = function () {
          Log("跳转参数", GbzSdkManager.ins["navigateAppid"], GbzSdkManager.ins["navigateAppPath"]), window["wx"]["navigateToMiniProgram"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "appId", 0), Pu(t, "path", 0), (n = t).appId = 0, n.path = 0, n;
            }["apply"]())["appId"] = GbzSdkManager.ins["navigateAppid"], t["path"] = GbzSdkManager.ins["navigateAppPath"], t;
          }["apply"]());
        }, a;
      }(Component)).prototype, "icon", [g], (Pu(b = {}, "configurable", !0), Pu(b, "enumerable", !0), Pu(b, "writable", !0), Pu(b, "initializer", function () {
        return null;
      }), b)), S = applyDecoratedDescriptor(_.prototype, "nameLbl", [y], (Pu(d = {}, "configurable", !0), Pu(d, "enumerable", !0), Pu(d, "writable", !0), Pu(d, "initializer", function () {
        return null;
      }), d)), w = _)) || w)), cclegacy._RF["pop"]();
    }, d;
  }["bind"](this)["apply"]();
});