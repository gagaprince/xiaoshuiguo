(function (t) {
  var n;
  return function () {
    var r,
      i,
      e = to[5],
      a = "setters",
      u = "execute";
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r)["setters"] = [function (t) {
      n = t["cclegacy"];
    }], i["execute"] = function () {
      var r = to,
        i = "_RF";
      t(function () {
        var t,
          n = to,
          r = n[3];
        return (t = function () {
          var t,
            n,
            r = to,
            i = "Error",
            e = "Log",
            a = "Warn";
          return Pu(t = {}, "Error", 0), Pu(t, "Log", 0), Pu(t, "Warn", 0), (n = t)["Error"] = 0, n["Log"] = 0, n["Warn"] = 0, n;
        }["apply"]())["Error"] = function () {}, t["Log"] = function () {}, t["Warn"] = function () {}, t;
      }["apply"]()), n["_RF"]["push"]({}, "296acgPi1pN2LoxOc6r4JVg", "DebugLog", void 0), n["_RF"]["pop"]();
    }, i;
  }["apply"]();
});