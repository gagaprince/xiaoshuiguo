(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s = to;
  return function () {
    var s,
      o,
      c = to[5],
      f = "setters",
      h = "execute";
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s)["setters"] = [function (t) {
      var i = to;
      n = t["cclegacy"], r = t["sys"];
    }, function (t) {
      i = t["cusRpt"];
    }, function (t) {
      e = t["globalxz"];
    }, function (t) {
      a = t["default"];
    }, function (t) {
      u = t["Log"];
    }], o["execute"] = function () {
      var s,
        o = to,
        c = "_RF",
        f = "ReportHelper";
      n["_RF"]["push"]({}, "3f81aHTce9Ad4lGCbvn86xe", "ReportHelper", void 0), s = t("ReportHelper", function () {
        var t,
          n,
          s = to,
          o = s[7],
          c = s[4],
          f = s[9],
          h = s[12];
        return (t = (n = function () {
          var t = to,
            n = t[6],
            r = t[7],
            i = t[5],
            e = t[9],
            a = t[4];
          this["saveName"] = "reportData", this["todayStr"] = void 0, this["gameTime"] = void 0, this["todayTime"] = void 0, this["todayAdCount"] = void 0, this["regdate"] = void 0, this["userType"] = void 0, this["cusReport"] = !1, this["enterlvtime"] = void 0, this["adnum"] = void 0, this["isInLv"] = !1, this["lvTime"] = void 0, this["lvCount"] = 0, this["ticketnum"] = void 0, this["reportPro"] = .1, this["isUseReport"] = !1;
        })["prototype"])["init"] = function () {
          var t,
            n,
            s,
            o = to,
            c = o[9],
            f = o[6],
            h = o[2],
            v = o[3],
            l = o[1],
            b = o[10],
            d = o[5],
            k = "localStorage",
            m = "getItem",
            p = "isUseReport",
            g = "todayStr",
            y = "regdate",
            w = "isNewDay",
            _ = "todayTime",
            M = "todayAdCount",
            S = "lvCount",
            A = "userType",
            C = "新用户";
          (null === (n = r["localStorage"]["getItem"]("isUseReport")) || "" === n ? (n = Math["random"]() < this["reportPro"], r["localStorage"]["setItem"]("isUseReport", n["toString"]())) : n = "true" === n, this["isUseReport"] = n, u("可以上报 ", this["isUseReport"]), this["todayStr"] = this["getTodayStr"](), t = r["localStorage"]["getItem"](a["ins"]["mergeStorageKey"](this["saveName"]))) ? (s = JSON["parse"](t), this["regdate"] = s["regdate"], this["todayStr"] !== s["todayStr"] ? this["isNewDay"]() : (this["todayTime"] = s["todayTime"] ? s["todayTime"] : 0, this["todayAdCount"] = s["todayAdCount"] ? s["todayAdCount"] : 0, this["lvCount"] = s["lvCount"] ? s["lvCount"] : 0), this["todayStr"] == s["regdate"] ? this["userType"] = "新用户" : this["userType"] = "老用户") : (this["userType"] = "新用户", this["regdate"] = this["todayStr"], this["isNewDay"]());
          this["gameTime"] = 0, e["isCusReport"] && i["init"]();
        }, t["saveLs"] = function () {
          var t = to;
          r["localStorage"]["setItem"](a["ins"]["mergeStorageKey"](this["saveName"]), JSON["stringify"](function () {
            var t,
              n = to,
              r = n[5],
              i = "todayTime",
              e = "todayAdCount",
              a = "regdate",
              u = "todayStr",
              s = "lvCount";
            return (t = function () {
              var t,
                n,
                r = to,
                i = r[5],
                e = "todayTime",
                a = "todayAdCount",
                u = "regdate",
                s = "todayStr",
                o = "lvCount";
              return Pu(t = {}, "todayTime", 0), Pu(t, "todayAdCount", 0), Pu(t, "regdate", 0), Pu(t, "todayStr", 0), Pu(t, "lvCount", 0), (n = t)["todayTime"] = 0, n["todayAdCount"] = 0, n["regdate"] = 0, n["todayStr"] = 0, n["lvCount"] = 0, n;
            }["apply"]())["todayTime"] = this["todayTime"], t["todayAdCount"] = this["todayAdCount"], t["regdate"] = this["regdate"], t["todayStr"] = this["todayStr"], t["lvCount"] = this["lvCount"], t;
          }["bind"](this)["apply"]()));
        }, t["getTodayStr"] = function () {
          var t,
            n,
            r,
            i,
            e = to,
            a = "toString";
          return t = (r = new Date())["getFullYear"](), i = r["getMonth"]() + 1, n = r["getDate"](), t["toString"]() + Et + i["toString"]() + Et + n["toString"]();
        }, t["isNewDay"] = function () {
          var t = to;
          this["todayTime"] = 0, this["todayAdCount"] = 0, this["lvCount"] = 0, this["saveLs"]();
        }, t["onTickSec"] = function () {
          var t = to;
          this["todayTime"]++, this["gameTime"]++;
        }, t["reportEnter_game"] = function (t) {
          var n = to;
          this["report"]("enter_game", function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "enter_game_scene";
              return (t = Pu({}, "enter_game_scene", 0))["enter_game_scene"] = 0, t;
            }["apply"]())["enter_game_scene"] = t, n;
          }["apply"]());
        }, t["reportEnterLv"] = function () {
          var t = to,
            n = t[3],
            r = t[4];
          this["adnum"] = 0, this["enterlvtime"] = Date["now"](), this["report"]("enter_lv", function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "level_id";
              return (t = Pu({}, "level_id", 0))["level_id"] = 0, t;
            }["apply"]())["level_id"] = a["ins"]["fakeGame_level"], t;
          }["apply"]()), this["isInLv"] = !0, this["saveLs"]();
        }, t["reportGameLose"] = function (t) {
          var n,
            r = to,
            i = r[3];
          n = Math["floor"]((Date["now"]() - this["enterlvtime"]) / 1000), this["report"]("level_loss", function () {
            var r,
              i = to,
              e = i[8];
            return (r = function () {
              var t,
                n,
                r = to,
                i = "level_id",
                e = "lvtime",
                a = "shengyunum";
              return Pu(t = {}, "level_id", 0), Pu(t, "lvtime", 0), Pu(t, "shengyunum", 0), (n = t)["level_id"] = 0, n["lvtime"] = 0, n["shengyunum"] = 0, n;
            }["apply"]())["level_id"] = a["ins"]["game_level"], r["lvtime"] = n, r["shengyunum"] = t, r;
          }["apply"]());
        }, t["reportGamePass"] = function () {
          var t,
            n = to,
            r = n[3],
            i = n[4];
          t = Math["floor"]((Date["now"]() - this["enterlvtime"]) / 1000), this["report"]("game_win", function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n,
                r = to,
                i = "level_id",
                e = "lvtime";
              return Pu(t = {}, "level_id", 0), Pu(t, "lvtime", 0), (n = t)["level_id"] = 0, n["lvtime"] = 0, n;
            }["apply"]())["level_id"] = a["ins"]["fakeGame_level"], n["lvtime"] = t, n;
          }["apply"]()), this["lvCount"] = 0, this["saveLs"]();
        }, t["reportAdRwd"] = function (t) {
          var n = to;
          this["report"]("ad_getreward", function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n,
                r = to,
                i = "adbtn_name",
                e = "level_id";
              return Pu(t = {}, "adbtn_name", 0), Pu(t, "level_id", 0), (n = t)["adbtn_name"] = 0, n["level_id"] = 0, n;
            }["apply"]())["adbtn_name"] = t, n["level_id"] = a["ins"]["fakeGame_level"], n;
          }["apply"]());
        }, t["reportLvTime"] = function () {}, t["report"] = function (t, n) {
          var a = to,
            u = a[9],
            s = a[6],
            o = a[5],
            c = "version",
            f = "regdate";
          this["isUseReport"] && (n["version"] = e["version"], n["regdate"] = this["regdate"], n["use_type"] = this["userType"], r["isBrowser"] || e["isCusReport"] && i["trackEvent"](t, n));
        }, n;
      }()), t("reporter", new s()), n["_RF"]["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});