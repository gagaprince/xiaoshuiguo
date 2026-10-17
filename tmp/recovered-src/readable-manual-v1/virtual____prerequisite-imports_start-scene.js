(function (t, n) {
  return function () {
    var n,
      r,
      i = to[5],
      e = "setters",
      a = "execute";
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (r = n)["setters"] = [function (n) {
      var r,
        i = to;
      for (var e in r = {}, n) e !== "default" && e !== "__esModule" && (r[e] = n[e]);
      t(r);
    }], r["execute"] = function () {}, r;
  }["apply"]();
});