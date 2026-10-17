(function (t) {
  var createClass, cclegacy, instantiate, NodePool;
  return function () {
    var a, u;
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], instantiate = t["instantiate"], NodePool = t["NodePool"];
    }, null], u.execute = function () {
      cclegacy._RF["push"]({}, "e92f4H/5+VMCZnr3htu+flw", "GbzPoolManager", void 0), t("default", function () {
        var t, r;
        return (r = function () {
          this["_pool"] = {}, this["_prefab"] = {};
        })["getIns"] = function () {
          return null === this._ins && (this._ins = new r()), this._ins;
        }, (t = r["prototype"])["setPrefab"] = function (t, n) {
          this["_prefab"][t] = instantiate(n);
        }, t["getNode"] = function (t, n, r) {
          var a, u, s, o, c;
          if ("string" == Du(t)) {
            if (s = t, !(u = this["_prefab"][t])) return null;
          } else u = t, s = t["data"]["name"];
          (a = null, this._pool["hasOwnProperty"](s)) ? a = (o = this._pool[s])["size"]() > 0 ? o["get"]() : instantiate(u) : (c = new NodePool(), this._pool[s] = c, a = instantiate(u));
          return n && (a["parent"] = n, a["active"] = !0, r && (a["position"] = r)), a;
        }, t["getPrefab"] = function (t) {
          return instantiate(this["_prefab"][t]);
        }, t["putNode"] = function (t, n) {
          var r, i;
          t && (i = t["name"], r = null, this._pool["hasOwnProperty"](i) ? r = this._pool[i] : (r = new NodePool(), this._pool[i] = r), r["put"](t));
        }, createClass(r, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["_ins"] = null, cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});