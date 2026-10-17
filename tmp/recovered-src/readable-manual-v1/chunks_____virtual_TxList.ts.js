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
      var i = to;
      n = t["inheritsLoose"], r = t["wrapNativeSuper"];
    }, function (t) {
      i = t["cclegacy"];
    }], a["execute"] = function () {
      var e = to,
        a = "_RF";
      i["_RF"]["push"]({}, "a8cb34sMORMLKt+jIPXQ38v", "TxList", void 0), t("default", function (t) {
        var r;
        return r = function () {
          var n,
            r = to,
            i = r[4],
            e = r[3],
            a = r[5];
          return (n = t["call"](this) || this)["add"] = function (t) {
            this["push"](t);
          }, n["insert"] = function (t, n) {
            this["splice"](t, 0, n);
          }, n["remove"] = function (t) {
            var n,
              r = to;
            n = this["indexOf"](t), this["removeAt"](n);
          }, n["removeAt"] = function (t) {
            this["splice"](t, 1);
          }, n["count"] = function () {
            return this["length"];
          }, n["clear"] = function () {
            this["splice"](0);
          }, n["foreach"] = function (t) {
            var n = to,
              r = "_breaking";
            this["_breaking"] = !1;
            for (var i = this["length"], e = 0; e < i && !this["_breaking"]; e++) t(this[e]);
          }, n["_breaking"] = !1, n["break"] = function () {
            this["_breaking"] = !0;
          }, n["toArray"] = function () {
            var t;
            return t = [], this["forEach"](function (n) {
              t["push"](n);
            }), t;
          }, n["append"] = function (t) {
            var n;
            n = this, t["forEach"](function (t) {
              n["push"](t);
            });
          }, n;
        }, n(r, t), r;
      }(r(Array))), i["_RF"]["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});