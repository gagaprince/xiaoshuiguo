(function (t) {
  var createClass, cclegacy, GbzSdkManager;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }], a.execute = function () {
      var e;
      cclegacy._RF["push"]({}, "b098e7l0hlM4aJj7BWlSYEX", "PkManager", void 0), (e = t("default", function () {
        var t;
        return (t = function () {
          this["_totalScore"] = 0;
        })["prototype"]["addScore"] = function (t) {
          var n;
          t <= 0 || (this["_totalScore"] += t, (n = GbzSdkManager["ins"]["platform"]()) && n.uploadPkScore && n.uploadPkScore(t));
        }, createClass(t, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "totalScore", t["get"] = function () {
            return this["_totalScore"];
          }, t;
        }.bind(this).apply()], [function () {
          var n;
          return (n = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", n["get"] = function () {
            return this._ins || (this._ins = new t()), this._ins;
          }, n;
        }.bind(this).apply()]), t;
      }()))["_ins"] = null, e["SCORE_ELIMINATE"] = 10, e["SCORE_CLEAR"] = 1000, cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});