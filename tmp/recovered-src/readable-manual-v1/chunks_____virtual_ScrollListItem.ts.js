(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u = to;
  return function () {
    var u,
      s,
      o = to[5],
      c = "setters",
      f = "execute";
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["createClass"];
    }, function (t) {
      var n = to;
      i = t["cclegacy"], e = t["_decorator"], a = t["Component"];
    }], s["execute"] = function () {
      var u,
        s,
        o = to,
        c = o[5],
        f = "_RF",
        h = "ScrollListItem";
      i["_RF"]["push"]({}, "355cf5ZHjBECrMMVGHNvEln", "ScrollListItem", void 0), u = e["ccclass"], e["property"], t("default", u("ScrollListItem")(s = function (t) {
        var i,
          e,
          a = to,
          u = a[7];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["_dataIndex"] = void 0, r;
        }, t), (i = e["prototype"])["onItemRender"] = function (t) {}, i["onDestroy"] = function () {}, r(e, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get",
              a = "set";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t)["key"] = 0, n["get"] = 0, n["set"] = 0, n;
          }["apply"]())["key"] = "dataIndex", t["get"] = function () {
            return this["_dataIndex"];
          }, t["set"] = function (t) {
            this["_dataIndex"] = t;
          }, t;
        }["bind"](this)["apply"]()]), e;
      }(a)) || s), i["_RF"]["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});