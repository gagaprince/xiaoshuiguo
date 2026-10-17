(function (t) {
  var cclegacy, warn, CCNodePool, SelfPool;
  return function () {
    var a, u;
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      cclegacy = t["cclegacy"], warn = t["warn"];
    }, function (t) {
      CCNodePool = t["default"];
    }, function (t) {
      SelfPool = t["default"];
    }], u.execute = function () {
      cclegacy._RF["push"]({}, "0c495w+CwdIiJ2rChkM4w5B", "CCPoolManager", void 0), t("default", function () {
        var t, n;
        return (n = function () {
          this["pools"] = {}, this["nameMap"] = {};
        })["instance"] = function () {
          return this.ins || (this.ins = new n()), this.ins;
        }, (t = n["prototype"])["init"] = function (t, n, r) {
          this.pools[t] || (this.pools[t] = new SelfPool(new CCNodePool(t, n, r)));
        }, t["getPool"] = function (t) {
          return this["pools"][t]["getPool"]();
        }, t["get"] = function (t) {
          var n;
          return this.pools[t] ? (n = this.pools[t]["get"](), this.nameMap[n.name] || n.name == t || (this.nameMap[n.name] = t), n) : null;
        }, t["put"] = function (t, n) {
          var i;
          void 0 === n && (n = !1), (i = this["nameMap"][t.name]) || (i = t.name), this.pools[i] ? this.pools[i]["put"](t, n) : warn(" not have  name ", i, " ,go.name ", t.name);
        }, t["clear"] = function (t) {
          this.pools[t] && (this.pools[t]["clear"](), this.pools[t] = null);
        }, t["clealAll"] = function () {
          for (var r in this.pools) this["clear"](r);
          this.pools = {};
        }, n;
      }())["ins"] = void 0, cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});