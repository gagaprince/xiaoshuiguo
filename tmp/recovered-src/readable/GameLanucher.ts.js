(function (t) {
  var inheritsLoose, cclegacy, _decorator, Component;
  return function () {
    var a, u;
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Component = t["Component"];
    }], u.execute = function () {
      var a, u;
      cclegacy._RF["push"]({}, "fefd0XKWvBC7bioUQPoOoSe", "GameLanucher", void 0), a = _decorator["ccclass"], _decorator["property"], t("GameLanucher", a("GameLanucher")(u = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (r = i["prototype"])["start"] = function () {}, r["update"] = function (t) {}, i;
      }(Component)) || u), cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});