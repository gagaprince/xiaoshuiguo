(function (t) {
  var cclegacy, instantiate, NodePool;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      cclegacy = t["cclegacy"], instantiate = t["instantiate"], NodePool = t["NodePool"];
    }, null], a.execute = function () {
      cclegacy._RF["push"]({}, "be5fe4D6NxK1YLtRIN7eVWt", "CCNodePool", void 0), t("default", function () {
        var t, n;
        return (t = (n = function (t, n, r) {
          this.pool = void 0, this.resItem = void 0, this.name = "", this.name = t, this.pool = new NodePool(), this.resItem = n;
          for (var c = 0; c < r; c++) {
            var f;
            f = this["getNode"](), this.pool["put"](f);
          }
        })["prototype"])["getName"] = function () {
          return this["name"];
        }, t["get"] = function () {
          return this.pool["size"]() > 0 ? this.pool["get"]() : this["getNode"]();
        }, t["getNode"] = function () {
          return this.resItem ? instantiate(this.resItem) : null;
        }, t["size"] = function () {
          return this["pool"]["size"]();
        }, t["put"] = function (t) {
          this["pool"]["put"](t);
        }, t["clear"] = function () {
          this["pool"]["clear"]();
        }, n;
      }()), cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});