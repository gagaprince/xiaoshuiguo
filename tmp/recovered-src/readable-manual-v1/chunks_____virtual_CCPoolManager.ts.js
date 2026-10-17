(function (t) {
  var n,
    r,
    i,
    e,
    a = to;
  return function () {
    var a,
      u,
      s = to[5],
      o = "setters",
      c = "execute";
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a)["setters"] = [function (t) {
      var i = to;
      n = t["cclegacy"], r = t["warn"];
    }, function (t) {
      i = t["default"];
    }, function (t) {
      e = t["default"];
    }], u["execute"] = function () {
      var a = to,
        u = a[1],
        s = "_RF";
      n["_RF"]["push"]({}, "0c495w+CwdIiJ2rChkM4w5B", "CCPoolManager", void 0), t("default", function () {
        var t,
          n,
          a = to,
          u = a[6],
          s = a[1];
        return (n = function () {
          var t = to;
          this["pools"] = {}, this["nameMap"] = {};
        })["instance"] = function () {
          var t = "ins";
          return this["ins"] || (this["ins"] = new n()), this["ins"];
        }, (t = n["prototype"])["init"] = function (t, n, r) {
          var a = "pools";
          this["pools"][t] || (this["pools"][t] = new e(new i(t, n, r)));
        }, t["getPool"] = function (t) {
          var n = to;
          return this["pools"][t]["getPool"]();
        }, t["get"] = function (t) {
          var n,
            r = to,
            i = "pools",
            e = "nameMap",
            a = "name";
          return this["pools"][t] ? (n = this["pools"][t]["get"](), this["nameMap"][n["name"]] || n["name"] == t || (this["nameMap"][n["name"]] = t), n) : null;
        }, t["put"] = function (t, n) {
          var i,
            e = to,
            a = "name",
            u = "pools";
          void 0 === n && (n = !1), (i = this["nameMap"][t["name"]]) || (i = t["name"]), this["pools"][i] ? this["pools"][i]["put"](t, n) : r(" not have  name ", i, " ,go.name ", t["name"]);
        }, t["clear"] = function (t) {
          var n = to,
            r = "pools";
          this["pools"][t] && (this["pools"][t]["clear"](), this["pools"][t] = null);
        }, t["clealAll"] = function () {
          var t = to,
            n = "pools";
          for (var r in this["pools"]) this["clear"](r);
          this["pools"] = {};
        }, n;
      }())["ins"] = void 0, n["_RF"]["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});