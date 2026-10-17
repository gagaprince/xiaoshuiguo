(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      t(function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "Error", 0), Pu(t, "Log", 0), Pu(t, "Warn", 0), (n = t).Error = 0, n.Log = 0, n.Warn = 0, n;
        }["apply"]())["Error"] = function () {}, t["Log"] = function () {}, t["Warn"] = function () {}, t;
      }["apply"]()), cclegacy._RF["push"]({}, "296acgPi1pN2LoxOc6r4JVg", "DebugLog", void 0), cclegacy._RF["pop"]();
    }, i;
  }["apply"]();
});