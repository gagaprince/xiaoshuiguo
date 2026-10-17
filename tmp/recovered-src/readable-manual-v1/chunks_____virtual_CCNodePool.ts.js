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
      var e = to,
        a = e[6];
      n = t["cclegacy"], r = t["instantiate"], i = t["NodePool"];
    }, null], a["execute"] = function () {
      var e = to,
        a = "_RF";
      n["_RF"]["push"]({}, "be5fe4D6NxK1YLtRIN7eVWt", "CCNodePool", void 0), t("default", function () {
        var t,
          n,
          e = to,
          a = e[5],
          u = e[1];
        return (t = (n = function (t, n, r) {
          var e = to,
            a = e[2],
            u = "pool",
            s = "resItem",
            o = "name";
          this["pool"] = void 0, this["resItem"] = void 0, this["name"] = "", this["name"] = t, this["pool"] = new i(), this["resItem"] = n;
          for (var c = 0; c < r; c++) {
            var f;
            f = this["getNode"](), this["pool"]["put"](f);
          }
        })["prototype"])["getName"] = function () {
          return this["name"];
        }, t["get"] = function () {
          var t = to,
            n = "pool";
          return this["pool"]["size"]() > 0 ? this["pool"]["get"]() : this["getNode"]();
        }, t["getNode"] = function () {
          var t = "resItem";
          return this["resItem"] ? r(this["resItem"]) : null;
        }, t["size"] = function () {
          var t = to[2];
          return this["pool"]["size"]();
        }, t["put"] = function (t) {
          var n = to;
          this["pool"]["put"](t);
        }, t["clear"] = function () {
          var t = to;
          this["pool"]["clear"]();
        }, n;
      }()), n["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});