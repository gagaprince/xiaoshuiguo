(function (t) {
  var n,
    r,
    i,
    e = to;
  return function () {
    var e,
      a,
      u = to[5],
      s = "setters",
      o = "execute";
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e)["setters"] = [function (t) {
      var e = to;
      n = t["cclegacy"], r = t["UIOpacity"], i = t["Tween"];
    }], a["execute"] = function () {
      var e = to,
        a = "_RF";
      n["_RF"]["push"]({}, "509342BxtFHmKe2sY51qfbL", "SelfPool", void 0), t("default", function () {
        var t,
          n,
          e = to,
          a = e[1];
        return (t = (n = function (t) {
          var n = to,
            r = "pool";
          this["list"] = [], this["pool"] = void 0, this["pool"] = t;
        })["prototype"])["get"] = function () {
          var t,
            n = to,
            i = n[10],
            e = "list";
          return ((t = this["list"]["length"] > 0 ? this["list"]["shift"]() : this["pool"]["get"]())["getComponent"](r) || t["addComponent"](r))["opacity"] = 255, t;
        }, t["getPool"] = function () {
          return this["pool"];
        }, t["size"] = function () {
          var t = to,
            n = t[2];
          return this["pool"]["size"]() + this["list"]["length"];
        }, t["put"] = function (t, n) {
          var e = to,
            a = e[2],
            u = e[10];
          void 0 === n && (n = !1), n ? this["pool"]["put"](t) : (this["list"]["push"](t), i["stopAllByTarget"](t), (t["getComponent"](r) || t["addComponent"](r))["opacity"] = 0);
        }, t["clear"] = function () {
          var t = to,
            n = t[2];
          this["pool"]["clear"](), this["list"]["length"] = 0;
        }, n;
      }()), n["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});