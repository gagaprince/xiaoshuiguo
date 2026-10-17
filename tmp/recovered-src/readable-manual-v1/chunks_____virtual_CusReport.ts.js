(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u = to;
  return function () {
    var u,
      s,
      o = to[5],
      c = "setters",
      f = "execute";
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u)["setters"] = [function (t) {
      var i = to;
      n = t["cclegacy"], r = t["sys"];
    }, function (t) {
      i = t["globalxz"];
    }, function (t) {
      e = t["default"];
    }, function (t) {
      a = t["Log"];
    }], s["execute"] = function () {
      var u,
        s,
        o = to,
        c = "_RF",
        f = "CusReport",
        h = "cusRpt";
      n["_RF"]["push"]({}, "cbc3fiRx/hLopAEtKEDVsDT", "CusReport", void 0), s = t("CusReport", function () {
        var t,
          n,
          u = to;
        return (t = (n = function () {
          var t = to;
          this["id"] = "", this["opReport"] = !1;
        })["prototype"])["init"] = function () {
          var t,
            n = to,
            i = n[5],
            u = n[4],
            s = "localStorage",
            o = "ins",
            c = "mergeStorageKey",
            f = "usereportid",
            h = "id";
          if (t = r["localStorage"]["getItem"](e["ins"]["mergeStorageKey"]("usereportid"))) this["id"] = t;else {
            var v;
            v = [Gt, Ot, Ft, Bt, zt, Ut, _u, Ht, Vt], this["id"] = "";
            for (var l = 0; l < 10; l++) {
              var b;
              b = Math["floor"](Math["random"]() * v["length"]), this["id"] += v[b];
            }
            this["id"] += Date["now"]()["toString"](), a("✨新id", this["id"]), r["localStorage"]["setItem"](e["ins"]["mergeStorageKey"]("usereportid"), this["id"]);
          }
          this["checkReprotState"]();
        }, t["trackEvent"] = function (t, n) {
          var r,
            e,
            a = to,
            u = a[2],
            s = a[7],
            o = a[14];
          this["opReport"] && ((e = new XMLHttpRequest())["onreadystatechange"] = function () {}, r = function () {
            var r,
              e = to,
              a = e[3];
            return (r = function () {
              var t,
                n,
                r = to,
                i = "event_id",
                e = "uid",
                a = "game_id",
                u = "event_data";
              return Pu(t = {}, "event_id", 0), Pu(t, "uid", 0), Pu(t, "game_id", 0), Pu(t, "event_data", 0), (n = t)["event_id"] = 0, n["uid"] = 0, n["game_id"] = 0, n["event_data"] = 0, n;
            }["apply"]())["event_id"] = t, r["uid"] = this["id"], r["game_id"] = i["appid"], r["event_data"] = n, r;
          }["bind"](this)["apply"](), e["open"]("POST", "https://wx.wxxyxnb.com/api"), e["onerror"] = function (t) {}, e["ontimeout"] = function (t) {}, e["setRequestHeader"]("Content-Type", "application/json"), e["send"](JSON["stringify"](r)));
        }, t["checkReprotState"] = function () {
          var t,
            n,
            r,
            e = to,
            a = e[2],
            u = e[7],
            s = e[14];
          t = this, (n = new XMLHttpRequest())["onreadystatechange"] = function (r) {
            var i = to,
              e = i[6],
              a = "status";
            4 == n["readyState"] && 200 == n["status"] && (t["opReport"] = 1 == JSON["parse"](n["response"])["data"]["status"]);
          }, r = function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "game_id";
              return (t = Pu({}, "game_id", 0))["game_id"] = 0, t;
            }["apply"]())["game_id"] = i["appid"], t;
          }["apply"](), n["open"]("POST", "https://wx.wxxyxnb.com/api/index/gameStatus"), n["onerror"] = function (t) {}, n["ontimeout"] = function (t) {}, n["setRequestHeader"]("Content-Type", "application/json"), n["send"](JSON["stringify"](r));
        }, n;
      }()), u = t("cusRpt", new s()), window["cusRpt"] = u, n["_RF"]["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});