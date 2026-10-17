(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      cclegacy._RF["push"]({}, "19c5aMSuXpBz4uvDRWR5oHr", "AbMgr", void 0), t("default", function () {
        var t, n;
        return (n = function () {
          this["Model"] = 0;
        })["Ins"] = function () {
          return null == n._instance && (n._instance = new n()), n._instance;
        }, (t = n["prototype"])["GetNowType"] = function () {
          return this["Model"];
        }, t["SetNowType"] = function (t) {
          this["Model"] = t;
        }, t["GetIsNewTheme"] = function () {
          return 1 == this["Model"];
        }, t["isShowNewBg"] = function () {
          return 1 == this["Model"];
        }, n;
      }())["_instance"] = null, cclegacy._RF["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});