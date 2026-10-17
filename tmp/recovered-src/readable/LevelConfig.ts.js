(function (t) {
  var createClass, cclegacy, LvConfig1, LvConfig1_easy, LvConfig3;
  return function () {
    var u, s;
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"];
    }, function (t) {
      LvConfig1 = t["default"];
    }, function (t) {
      LvConfig1_easy = t["default"];
    }, function (t) {
      LvConfig3 = t["default"];
    }, null], s.execute = function () {
      cclegacy._RF["push"]({}, "c2101kTvSNHAJ8u8bqcCgd0", "LevelConfig", void 0), t("default", function () {
        var t;
        return (t = function () {
          this.nowConfig = null, this.nowConfig = new LvConfig1();
        })["getIns"] = function () {
          return null == this.ins && (this.ins = new t()), this.ins;
        }, t["prototype"]["InitCf"] = function (t) {
          switch (t) {
            case 1:
              this.nowConfig = new LvConfig1();
              break;
            case 2:
              this.nowConfig = new LvConfig1_easy();
              break;
            case 3:
              this.nowConfig = new LvConfig3();
          }
        }, createClass(t, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv2Config", t["get"] = function () {
            return this["nowConfig"]["lv2Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv2_3_5Config", t["get"] = function () {
            return this["nowConfig"]["lv2_3_5Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv4Config", t["get"] = function () {
            return this["nowConfig"]["lv4Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv6Config", t["get"] = function () {
            return this["nowConfig"]["lv6Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv7Config", t["get"] = function () {
            return this["nowConfig"]["lv7Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv8Config", t["get"] = function () {
            return this["nowConfig"]["lv8Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv9Config", t["get"] = function () {
            return this["nowConfig"]["lv9Config"];
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "lv10Config", t["get"] = function () {
            return this["nowConfig"]["lv10Config"];
          }, t;
        }.bind(this).apply()]), t;
      }())["ins"] = null, cclegacy._RF["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});