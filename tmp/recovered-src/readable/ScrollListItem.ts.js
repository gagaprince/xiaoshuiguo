(function (t) {
  var inheritsLoose, createClass, cclegacy, _decorator, Component;
  return function () {
    var u, s;
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Component = t["Component"];
    }], s.execute = function () {
      var u, s;
      cclegacy._RF["push"]({}, "355cf5ZHjBECrMMVGHNvEln", "ScrollListItem", void 0), u = _decorator["ccclass"], _decorator["property"], t("default", u("ScrollListItem")(s = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, a = (n = arguments)["length"], u = new Array(a), s = 0; s < a; s++) u[s] = n[s];
          return (r = t["call"]["apply"](t, [this]["concat"](u)) || this)["_dataIndex"] = void 0, r;
        }, t), (i = e["prototype"])["onItemRender"] = function (t) {}, i["onDestroy"] = function () {}, createClass(e, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "dataIndex", t["get"] = function () {
            return this["_dataIndex"];
          }, t["set"] = function (t) {
            this["_dataIndex"] = t;
          }, t;
        }["bind"](this)["apply"]()]), e;
      }(Component)) || s), cclegacy._RF["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});