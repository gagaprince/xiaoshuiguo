(function (t) {
  var createClass, cclegacy, sys;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"];
    }], a.execute = function () {
      cclegacy._RF["push"]({}, "c7fcayTVvpASqFTveUWnVBq", "localData", void 0), t("LocalData", function () {
        var t, r;
        return (r = function () {})["initUndergoLv"] = function () {
          var t;
          t = "undergoLv", sys.localStorage["getItem"](t) && sys.localStorage["removeItem"](t);
        }, (t = r["prototype"])["setUndergoLv"] = function (t) {
          sys["localStorage"]["setItem"]("undergoLvnew", t ? Ne : it);
        }, t["getUndergoLv"] = function () {
          return Ne === sys["localStorage"]["getItem"]("undergoLvnew");
        }, createClass(r, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            return this.inst_ || (this.inst_ = new r(), this["initUndergoLv"]()), this.inst_;
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["inst_"] = null, cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});