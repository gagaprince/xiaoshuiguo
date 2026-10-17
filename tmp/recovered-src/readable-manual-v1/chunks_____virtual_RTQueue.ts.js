(function (t) {
  var n,
    r,
    i = to;
  return function () {
    var i,
      e,
      a = to[5],
      u = "setters",
      s = "execute";
    return Pu(i = {}, "setters", 0), Pu(i, "execute", 0), (e = i)["setters"] = [function (t) {
      n = t["cclegacy"];
    }, function (t) {
      r = t["Log"];
    }], e["execute"] = function () {
      var i = to,
        e = i[5],
        a = "_RF";
      n["_RF"]["push"]({}, "2d474m4r01PYphV2ofwQ12Y", "RTQueue", void 0), t("default", function () {
        var t,
          n,
          i = to,
          e = i[5],
          a = i[2];
        return (t = (n = function () {
          this["items"] = [];
        })["prototype"])["enqueue"] = function (t) {
          var n = to;
          this["items"]["push"](t);
        }, t["dequeue"] = function () {
          var t = to,
            n = t[3];
          if (!this["isEmpty"]()) return this["items"]["shift"]();
        }, t["peek"] = function () {
          var t = to;
          if (!this["isEmpty"]()) return this["items"][0];
        }, t["find"] = function (t) {
          var n = to,
            r = "items";
          if (this["items"]) for (var i = 0; i < this["items"]["length"]; i++) {
            var e;
            if ((e = this["items"][i]) == t) return e;
          }
        }, t["isEmpty"] = function () {
          var t = to;
          return 0 === this["items"]["length"];
        }, t["size"] = function () {
          var t = to;
          return this["items"]["length"];
        }, t["toarray"] = function () {
          return this["items"];
        }, t["printQueue"] = function () {
          var t = to;
          r(this["items"]["join"](", "));
        }, n;
      }()), n["_RF"]["pop"]();
    }, e;
  }["bind"](this)["apply"]();
});