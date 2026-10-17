(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      cclegacy._RF["push"]({}, "5dba1RZ/KRLgbybwk+ZvrXg", "gridInfo", void 0), t("default", function () {
        this["pos"] = void 0, this["width"] = void 0, this["height"] = void 0, this["count"] = void 0, this["maxCount"] = void 0;
      }), cclegacy._RF["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});