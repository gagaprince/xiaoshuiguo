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
      var n = to;
      r = t["cclegacy"], i = t["sys"];
    }], a["execute"] = function () {
      var e = to,
        a = e[7],
        u = "_RF";
      r["_RF"]["push"]({}, "c7fcayTVvpASqFTveUWnVBq", "localData", void 0), t("LocalData", function () {
        var t,
          r,
          e = to,
          a = e[10];
        return (r = function () {})["initUndergoLv"] = function () {
          var t,
            n = to,
            r = "localStorage";
          t = "undergoLv", i["localStorage"]["getItem"](t) && i["localStorage"]["removeItem"](t);
        }, (t = r["prototype"])["setUndergoLv"] = function (t) {
          var n = to,
            r = n[10];
          i["localStorage"]["setItem"]("undergoLvnew", t ? Ne : it);
        }, t["getUndergoLv"] = function () {
          var t = to,
            n = t[10];
          return Ne === i["localStorage"]["getItem"]("undergoLvnew");
        }, n(r, null, [function () {
          var t,
            n = to,
            i = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            var t = to,
              n = "inst_";
            return this["inst_"] || (this["inst_"] = new r(), this["initUndergoLv"]()), this["inst_"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["inst_"] = null, r["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});