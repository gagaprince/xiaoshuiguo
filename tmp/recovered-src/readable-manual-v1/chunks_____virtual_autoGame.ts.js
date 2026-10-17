(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o = to;
  return function () {
    var o,
      c,
      f = to[5],
      h = "setters",
      v = "execute";
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["Component"];
    }, function (t) {
      a = t["default"];
    }, function (t) {
      u = t["default"];
    }, function (t) {
      s = t["ENUM_STATUS"];
    }], c["execute"] = function () {
      var o,
        c,
        f = to,
        h = f[5],
        v = "_RF",
        l = "autoGame";
      r["_RF"]["push"]({}, "756beZ6z0hF55pJdo4Z0B36", "autoGame", void 0), o = i["ccclass"], i["property"], t("default", o("autoGame")(c = function (t) {
        var r,
          i,
          e = to;
        return n(i = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (r = i["prototype"])["start"] = function () {
          var t = to[6];
          this["schedule"](this["autoPlay"], 1);
        }, r["autoPlay"] = function () {
          var t = to,
            n = "instance";
          a["instance"] && u["ins"]["status"] != s["UNRUN"] && a["instance"]["btnRemoveFun"](1, function () {
            var t = to,
              n = t[1];
            u["ins"]["status"] = s["RUN"], a["instance"]["startViewTime"]();
          });
        }, i;
      }(e)) || c), r["_RF"]["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});