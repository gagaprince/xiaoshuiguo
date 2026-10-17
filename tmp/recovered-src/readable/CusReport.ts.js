(function (t) {
  var cclegacy, sys, globalxz, GbzDataManager, Log;
  return function () {
    var u, s;
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u).setters = [function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"];
    }, function (t) {
      globalxz = t["globalxz"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], s.execute = function () {
      var u, s;
      cclegacy._RF["push"]({}, "cbc3fiRx/hLopAEtKEDVsDT", "CusReport", void 0), s = t("CusReport", function () {
        var t, n;
        return (t = (n = function () {
          this["id"] = "", this["opReport"] = !1;
        })["prototype"])["init"] = function () {
          var t;
          if (t = sys.localStorage["getItem"](GbzDataManager.ins.mergeStorageKey("usereportid"))) this.id = t;else {
            var v;
            v = [Gt, Ot, Ft, Bt, zt, Ut, _u, Ht, Vt], this.id = "";
            for (var l = 0; l < 10; l++) {
              var b;
              b = Math["floor"](Math["random"]() * v["length"]), this.id += v[b];
            }
            this.id += Date["now"]()["toString"](), Log("✨新id", this.id), sys.localStorage["setItem"](GbzDataManager.ins.mergeStorageKey("usereportid"), this.id);
          }
          this["checkReprotState"]();
        }, t["trackEvent"] = function (t, n) {
          var r, e;
          this["opReport"] && ((e = new XMLHttpRequest())["onreadystatechange"] = function () {}, r = function () {
            var r;
            return (r = function () {
              var t, n;
              return Pu(t = {}, "event_id", 0), Pu(t, "uid", 0), Pu(t, "game_id", 0), Pu(t, "event_data", 0), (n = t).event_id = 0, n.uid = 0, n.game_id = 0, n.event_data = 0, n;
            }["apply"]())["event_id"] = t, r["uid"] = this["id"], r["game_id"] = globalxz["appid"], r["event_data"] = n, r;
          }["bind"](this)["apply"](), e["open"]("POST", "https://wx.wxxyxnb.com/api"), e["onerror"] = function (t) {}, e["ontimeout"] = function (t) {}, e["setRequestHeader"]("Content-Type", "application/json"), e["send"](JSON["stringify"](r)));
        }, t["checkReprotState"] = function () {
          var t, n, r;
          t = this, (n = new XMLHttpRequest())["onreadystatechange"] = function (r) {
            4 == n["readyState"] && 200 == n.status && (t["opReport"] = 1 == JSON["parse"](n["response"])["data"].status);
          }, r = function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "game_id", 0)).game_id = 0, t;
            }["apply"]())["game_id"] = globalxz["appid"], t;
          }["apply"](), n["open"]("POST", "https://wx.wxxyxnb.com/api/index/gameStatus"), n["onerror"] = function (t) {}, n["ontimeout"] = function (t) {}, n["setRequestHeader"]("Content-Type", "application/json"), n["send"](JSON["stringify"](r));
        }, n;
      }()), u = t("cusRpt", new s()), window.cusRpt = u, cclegacy._RF["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});