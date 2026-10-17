(function (t) {
  var cclegacy, Log;
  return function () {
    var i, e;
    return Pu(i = {}, "setters", 0), Pu(i, "execute", 0), (e = i).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }, function (t) {
      Log = t["Log"];
    }], e.execute = function () {
      cclegacy._RF["push"]({}, "2d474m4r01PYphV2ofwQ12Y", "RTQueue", void 0), t("default", function () {
        var t, n;
        return (t = (n = function () {
          this["items"] = [];
        })["prototype"])["enqueue"] = function (t) {
          this["items"]["push"](t);
        }, t["dequeue"] = function () {
          if (!this["isEmpty"]()) return this["items"]["shift"]();
        }, t["peek"] = function () {
          if (!this["isEmpty"]()) return this["items"][0];
        }, t["find"] = function (t) {
          if (this.items) for (var i = 0; i < this.items["length"]; i++) {
            var e;
            if ((e = this.items[i]) == t) return e;
          }
        }, t["isEmpty"] = function () {
          return 0 === this["items"]["length"];
        }, t["size"] = function () {
          return this["items"]["length"];
        }, t["toarray"] = function () {
          return this["items"];
        }, t["printQueue"] = function () {
          Log(this["items"]["join"](", "));
        }, n;
      }()), cclegacy._RF["pop"]();
    }, e;
  }["bind"](this)["apply"]();
});