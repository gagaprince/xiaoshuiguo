(function (t) {
  var n,
    r = to;
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
      n["_RF"]["push"]({}, "19c5aMSuXpBz4uvDRWR5oHr", "AbMgr", void 0), t("default", function () {
        var t,
          n,
          r = to,
          i = r[8];
        return (n = function () {
          this["Model"] = 0;
        })["Ins"] = function () {
          var t = "_instance";
          return null == n["_instance"] && (n["_instance"] = new n()), n["_instance"];
        }, (t = n["prototype"])["GetNowType"] = function () {
          return this["Model"];
        }, t["SetNowType"] = function (t) {
          this["Model"] = t;
        }, t["GetIsNewTheme"] = function () {
          return 1 == this["Model"];
        }, t["isShowNewBg"] = function () {
          return 1 == this["Model"];
        }, n;
      }())["_instance"] = null, n["_RF"]["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});