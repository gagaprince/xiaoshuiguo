(function (t) {
  var inheritsLoose, cclegacy, _decorator, Component, GameMgr, GbzDataManager, ENUM_STATUS;
  return function () {
    var o, c;
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Component = t["Component"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      ENUM_STATUS = t["ENUM_STATUS"];
    }], c.execute = function () {
      var o, c;
      cclegacy._RF["push"]({}, "756beZ6z0hF55pJdo4Z0B36", "autoGame", void 0), o = _decorator["ccclass"], _decorator["property"], t("default", o("autoGame")(c = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (r = i["prototype"])["start"] = function () {
          this["schedule"](this["autoPlay"], 1);
        }, r["autoPlay"] = function () {
          GameMgr.instance && GbzDataManager["ins"]["status"] != ENUM_STATUS["UNRUN"] && GameMgr.instance["btnRemoveFun"](1, function () {
            GbzDataManager["ins"]["status"] = ENUM_STATUS["RUN"], GameMgr["instance"]["startViewTime"]();
          });
        }, i;
      }(Component)) || c), cclegacy._RF["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});