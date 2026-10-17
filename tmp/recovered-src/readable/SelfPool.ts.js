(function (t) {
  var cclegacy, UIOpacity, Tween;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      cclegacy = t["cclegacy"], UIOpacity = t["UIOpacity"], Tween = t["Tween"];
    }], a.execute = function () {
      cclegacy._RF["push"]({}, "509342BxtFHmKe2sY51qfbL", "SelfPool", void 0), t("default", function () {
        var t, n;
        return (t = (n = function (t) {
          this["list"] = [], this.pool = void 0, this.pool = t;
        })["prototype"])["get"] = function () {
          var t;
          return ((t = this.list["length"] > 0 ? this.list["shift"]() : this["pool"]["get"]())["getComponent"](UIOpacity) || t["addComponent"](UIOpacity))["opacity"] = 255, t;
        }, t["getPool"] = function () {
          return this["pool"];
        }, t["size"] = function () {
          return this["pool"]["size"]() + this["list"]["length"];
        }, t["put"] = function (t, n) {
          void 0 === n && (n = !1), n ? this["pool"]["put"](t) : (this["list"]["push"](t), Tween["stopAllByTarget"](t), (t["getComponent"](UIOpacity) || t["addComponent"](UIOpacity))["opacity"] = 0);
        }, t["clear"] = function () {
          this["pool"]["clear"](), this["list"]["length"] = 0;
        }, n;
      }()), cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});