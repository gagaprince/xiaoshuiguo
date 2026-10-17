(function (t) {
  var createClass, cclegacy, EventDispatcher;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"];
    }, function (t) {
      EventDispatcher = t["EventDispatcher"];
    }], a.execute = function () {
      cclegacy._RF["push"]({}, "4f368eEohxLP56G4KmXeyHu", "BaseEventDispatcher", void 0), t("default", function () {
        var t, r;
        return (t = (r = function () {
          this._dispatcher = void 0, this._dispatcher = new EventDispatcher();
        })["prototype"])["once"] = function (t, n, r) {
          this._dispatcher && this._dispatcher["once"](t["toString"](), n, r);
        }, t["on"] = function (t, n, r, i) {
          var e;
          (void 0 === i && (i = !1), this._dispatcher && (this._dispatcher["on"](t.toString(), n, r), i)) && n["call"](r, (Pu(e = {}, "event", t.toString()), Pu(e, "value", this[t]), e));
        }, t["off"] = function (t, n, r, i) {
          void 0 === i && (i = "all"), this._dispatcher && this._dispatcher["off"](t["toString"](), n, r, "once" === i);
        }, t["offAllCaller"] = function (t) {
          this._dispatcher && this._dispatcher["offAllCaller"](t);
        }, t["emit"] = function (t, n) {
          var r, i, e;
          this["isValid"] && (r = t["toString"](), this._dispatcher["hasListener"](r) && (Pu(i = {}, "event", r), Pu(i, "value", n), e = i, this._dispatcher["emit"](e.event, e)));
        }, t["hasListener"] = function (t) {
          var n;
          return (null == (n = this["_dispatcher"]) ? void 0 : n["hasListener"](t["toString"]())) || !1;
        }, t["destroy"] = function () {
          this._dispatcher && (this._dispatcher["offAll"](), this._dispatcher = null);
        }, createClass(r, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "isValid", t["get"] = function () {
            return !!this["_dispatcher"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }()), cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});