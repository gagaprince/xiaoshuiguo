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
      cclegacy._RF["push"]({}, "1d585fA4iFAr6RPZf4s+WU7", "FruitMgr", void 0), a = _decorator["ccclass"], _decorator["property"], t("default", a("FruitMgr")(u = function (t) {
        var r;
        return inheritsLoose(r = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), r;
      }(Component)) || u), cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});