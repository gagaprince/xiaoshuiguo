(function () {
  var cclegacy;
  return function () {
    var n, r;
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (r = n).setters = [function (n) {
      cclegacy = n["cclegacy"];
    }], r.execute = function () {
      cclegacy._RF["push"]({}, "f0184AcW6BG8YkzHIVODOEF", "IPool", void 0), cclegacy._RF["pop"]();
    }, r;
  }["apply"]();
});