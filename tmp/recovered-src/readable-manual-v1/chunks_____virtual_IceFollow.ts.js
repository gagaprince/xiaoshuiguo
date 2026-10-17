(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u = to;
  return function () {
    var u,
      s,
      o = to[5],
      c = "setters",
      f = "execute";
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["math"], a = t["Component"];
    }], s["execute"] = function () {
      var u,
        s,
        o = to,
        c = "_RF",
        f = "IceFollow";
      r["_RF"]["push"]({}, "03816qQeA1F2r9hRCq/fvhw", "IceFollow", void 0), u = i["ccclass"], i["property"], t("IceFollow", u("IceFollow")(s = function (t) {
        var r,
          i,
          a = to;
        return n(i = function () {
          var n,
            r = to,
            i = r[4],
            e = r[2];
          n = arguments;
          for (var a, u = n["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (a = t["call"]["apply"](t, [this]["concat"](s)) || this)["target"] = null, a["tick"] = 0, a;
        }, t), (r = i["prototype"])["start"] = function () {
          var t,
            n = to,
            r = n[2];
          t = this, this["node"]["scale"] = new e["Vec3"](0, 0, 0), this["scheduleOnce"](function () {
            var n = to,
              r = n[2];
            t["node"]["scale"] = new e["Vec3"](1, 1, 1);
          }, .05);
        }, r["update"] = function (t) {
          var n = to,
            r = ro,
            i = "tick",
            e = "target";
          this["tick"]++, this["tick"] % 3 == 0 && this["target"] && this["isValid"] && this["node"]["setPosition"](this["target"][At] + 20, this["target"][St] - 30);
        }, i;
      }(a)) || s), r["_RF"]["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});