(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      var r;
      cclegacy._RF["push"]({}, "a47ba428--c31-a-41-be-8-e9f-58b8483aeb7e", "GbzInstance", void 0), (r = t("default", function () {
        var t;
        return (t = function () {})["setGameMgr"] = function (n) {
          t["gameMgr"] = n;
        }, t["setUIMgr"] = function (n) {
          t["uiMgr"] = n;
        }, t["setFadeMgr"] = function (n) {
          t["fadeMgr"] = n;
        }, t;
      }()))["gameMgr"] = null, r["uiMgr"] = null, r["fadeMgr"] = null, cclegacy._RF["pop"]();
    }, i;
  }["apply"]();
});