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
      var r,
        i = to,
        e = i[5],
        a = "_RF";
      n["_RF"]["push"]({}, "a47ba428--c31-a-41-be-8-e9f-58b8483aeb7e", "GbzInstance", void 0), (r = t("default", function () {
        var t,
          n = to,
          r = n[8];
        return (t = function () {})["setGameMgr"] = function (n) {
          t["gameMgr"] = n;
        }, t["setUIMgr"] = function (n) {
          t["uiMgr"] = n;
        }, t["setFadeMgr"] = function (n) {
          t["fadeMgr"] = n;
        }, t;
      }()))["gameMgr"] = null, r["uiMgr"] = null, r["fadeMgr"] = null, n["_RF"]["pop"]();
    }, i;
  }["apply"]();
});