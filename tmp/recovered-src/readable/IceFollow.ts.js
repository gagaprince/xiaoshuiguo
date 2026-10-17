(function (t) {
  var inheritsLoose, cclegacy, _decorator, math, Component;
  return function () {
    var u, s;
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], math = t["math"], Component = t["Component"];
    }], s.execute = function () {
      var u, s;
      cclegacy._RF["push"]({}, "03816qQeA1F2r9hRCq/fvhw", "IceFollow", void 0), u = _decorator["ccclass"], _decorator["property"], t("IceFollow", u("IceFollow")(s = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          var n;
          n = arguments;
          for (var a, u = n["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (a = t["call"]["apply"](t, [this]["concat"](s)) || this)["target"] = null, a["tick"] = 0, a;
        }, t), (r = i["prototype"])["start"] = function () {
          var t;
          t = this, this["node"]["scale"] = new math["Vec3"](0, 0, 0), this["scheduleOnce"](function () {
            t["node"]["scale"] = new math["Vec3"](1, 1, 1);
          }, .05);
        }, r["update"] = function (t) {
          this.tick++, this.tick % 3 == 0 && this.target && this["isValid"] && this["node"]["setPosition"](this.target.x + 20, this.target.y - 30);
        }, i;
      }(Component)) || s), cclegacy._RF["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});