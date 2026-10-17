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
      n = t["createClass"];
    }, function (t) {
      var n = to,
        a = n[6];
      r = t["cclegacy"], i = t["instantiate"], e = t["NodePool"];
    }, null], u["execute"] = function () {
      var a = to,
        u = a[2],
        s = "_RF";
      r["_RF"]["push"]({}, "e92f4H/5+VMCZnr3htu+flw", "GbzPoolManager", void 0), t("default", function () {
        var t,
          r,
          a = to,
          u = a[7],
          s = a[5];
        return (r = function () {
          var t = to;
          this["_pool"] = {}, this["_prefab"] = {};
        })["getIns"] = function () {
          var t = "_ins";
          return null === this["_ins"] && (this["_ins"] = new r()), this["_ins"];
        }, (t = r["prototype"])["setPrefab"] = function (t, n) {
          this["_prefab"][t] = i(n);
        }, t["getNode"] = function (t, n, r) {
          var a,
            u,
            s,
            o,
            c,
            f = to,
            h = f[4],
            v = f[2],
            l = "_pool";
          if ("string" == Du(t)) {
            if (s = t, !(u = this["_prefab"][t])) return null;
          } else u = t, s = t["data"]["name"];
          (a = null, this["_pool"]["hasOwnProperty"](s)) ? a = (o = this["_pool"][s])["size"]() > 0 ? o["get"]() : i(u) : (c = new e(), this["_pool"][s] = c, a = i(u));
          return n && (a["parent"] = n, a["active"] = !0, r && (a["position"] = r)), a;
        }, t["getPrefab"] = function (t) {
          return i(this["_prefab"][t]);
        }, t["putNode"] = function (t, n) {
          var r,
            i,
            a = to,
            u = "_pool";
          t && (i = t["name"], r = null, this["_pool"]["hasOwnProperty"](i) ? r = this["_pool"][i] : (r = new e(), this["_pool"][i] = r), r["put"](t));
        }, n(r, null, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["_ins"] = null, r["_RF"]["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});