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
      n = t["createClass"];
    }, function (t) {
      r = t["cclegacy"];
    }, function (t) {
      i = t["default"];
    }], a["execute"] = function () {
      var e,
        a = to,
        u = a[2],
        s = "_RF";
      r["_RF"]["push"]({}, "b098e7l0hlM4aJj7BWlSYEX", "PkManager", void 0), (e = t("default", function () {
        var t,
          r = to,
          e = "bind",
          a = "apply";
        return (t = function () {
          this["_totalScore"] = 0;
        })["prototype"]["addScore"] = function (t) {
          var n,
            r = to,
            e = "uploadPkScore";
          t <= 0 || (this["_totalScore"] += t, (n = i["ins"]["platform"]()) && n["uploadPkScore"] && n["uploadPkScore"](t));
        }, n(t, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "totalScore", t["get"] = function () {
            return this["_totalScore"];
          }, t;
        }["bind"](this)["apply"]()], [function () {
          var n,
            r = to,
            i = r[1];
          return (n = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "ins", n["get"] = function () {
            var n = "_ins";
            return this["_ins"] || (this["_ins"] = new t()), this["_ins"];
          }, n;
        }["bind"](this)["apply"]()]), t;
      }()))["_ins"] = null, e["SCORE_ELIMINATE"] = 10, e["SCORE_CLEAR"] = 1000, r["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});