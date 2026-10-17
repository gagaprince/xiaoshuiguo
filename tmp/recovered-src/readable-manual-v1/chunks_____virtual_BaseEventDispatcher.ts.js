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
      n = t["createClass"];
    }, function (t) {
      r = t["cclegacy"];
    }, function (t) {
      i = t["EventDispatcher"];
    }], a["execute"] = function () {
      var e = to,
        a = "_RF";
      r["_RF"]["push"]({}, "4f368eEohxLP56G4KmXeyHu", "BaseEventDispatcher", void 0), t("default", function () {
        var t,
          r,
          e = to,
          a = e[2];
        return (t = (r = function () {
          var t = "_dispatcher";
          this["_dispatcher"] = void 0, this["_dispatcher"] = new i();
        })["prototype"])["once"] = function (t, n, r) {
          var i = to,
            e = "_dispatcher";
          this["_dispatcher"] && this["_dispatcher"]["once"](t["toString"](), n, r);
        }, t["on"] = function (t, n, r, i) {
          var e,
            a = to,
            u = a[3],
            s = "_dispatcher",
            o = "toString";
          (void 0 === i && (i = !1), this["_dispatcher"] && (this["_dispatcher"]["on"](t["toString"](), n, r), i)) && n["call"](r, (Pu(e = {}, "event", t["toString"]()), Pu(e, "value", this[t]), e));
        }, t["off"] = function (t, n, r, i) {
          var e = to,
            a = e[1],
            u = "_dispatcher";
          void 0 === i && (i = "all"), this["_dispatcher"] && this["_dispatcher"]["off"](t["toString"](), n, r, "once" === i);
        }, t["offAllCaller"] = function (t) {
          var n = to,
            r = "_dispatcher";
          this["_dispatcher"] && this["_dispatcher"]["offAllCaller"](t);
        }, t["emit"] = function (t, n) {
          var r,
            i,
            e,
            a = to,
            u = "_dispatcher",
            s = "event";
          this["isValid"] && (r = t["toString"](), this["_dispatcher"]["hasListener"](r) && (Pu(i = {}, "event", r), Pu(i, "value", n), e = i, this["_dispatcher"]["emit"](e["event"], e)));
        }, t["hasListener"] = function (t) {
          var n,
            r = to,
            i = r[9];
          return (null == (n = this["_dispatcher"]) ? void 0 : n["hasListener"](t["toString"]())) || !1;
        }, t["destroy"] = function () {
          var t = to,
            n = "_dispatcher";
          this["_dispatcher"] && (this["_dispatcher"]["offAll"](), this["_dispatcher"] = null);
        }, n(r, [function () {
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
          }["apply"]())["key"] = "isValid", t["get"] = function () {
            return !!this["_dispatcher"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }()), r["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});