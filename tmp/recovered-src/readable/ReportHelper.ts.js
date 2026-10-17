(function (t) {
  var cclegacy, sys, cusRpt, globalxz, GbzDataManager, Log;
  return function () {
    var s, o;
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s).setters = [function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"];
    }, function (t) {
      cusRpt = t["cusRpt"];
    }, function (t) {
      globalxz = t["globalxz"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], o.execute = function () {
      var s;
      cclegacy._RF["push"]({}, "3f81aHTce9Ad4lGCbvn86xe", "ReportHelper", void 0), s = t("ReportHelper", function () {
        var t, n;
        return (t = (n = function () {
          this["saveName"] = "reportData", this["todayStr"] = void 0, this["gameTime"] = void 0, this["todayTime"] = void 0, this["todayAdCount"] = void 0, this["regdate"] = void 0, this["userType"] = void 0, this["cusReport"] = !1, this["enterlvtime"] = void 0, this["adnum"] = void 0, this["isInLv"] = !1, this["lvTime"] = void 0, this["lvCount"] = 0, this["ticketnum"] = void 0, this["reportPro"] = .1, this["isUseReport"] = !1;
        })["prototype"])["init"] = function () {
          var t, n, s;
          (null === (n = sys.localStorage.getItem("isUseReport")) || "" === n ? (n = Math["random"]() < this["reportPro"], sys.localStorage["setItem"]("isUseReport", n["toString"]())) : n = "true" === n, this.isUseReport = n, Log("可以上报 ", this.isUseReport), this.todayStr = this["getTodayStr"](), t = sys.localStorage.getItem(GbzDataManager["ins"]["mergeStorageKey"](this["saveName"]))) ? (s = JSON["parse"](t), this.regdate = s.regdate, this.todayStr !== s.todayStr ? this.isNewDay() : (this.todayTime = s.todayTime ? s.todayTime : 0, this.todayAdCount = s.todayAdCount ? s.todayAdCount : 0, this.lvCount = s.lvCount ? s.lvCount : 0), this.todayStr == s.regdate ? this.userType = "新用户" : this.userType = "老用户") : (this.userType = "新用户", this.regdate = this.todayStr, this.isNewDay());
          this["gameTime"] = 0, globalxz["isCusReport"] && cusRpt["init"]();
        }, t["saveLs"] = function () {
          sys["localStorage"]["setItem"](GbzDataManager["ins"]["mergeStorageKey"](this["saveName"]), JSON["stringify"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "todayTime", 0), Pu(t, "todayAdCount", 0), Pu(t, "regdate", 0), Pu(t, "todayStr", 0), Pu(t, "lvCount", 0), (n = t).todayTime = 0, n.todayAdCount = 0, n.regdate = 0, n.todayStr = 0, n.lvCount = 0, n;
            }["apply"]()).todayTime = this.todayTime, t.todayAdCount = this.todayAdCount, t.regdate = this.regdate, t.todayStr = this.todayStr, t.lvCount = this.lvCount, t;
          }["bind"](this)["apply"]()));
        }, t["getTodayStr"] = function () {
          var t, n, r, i;
          return t = (r = new Date())["getFullYear"](), i = r["getMonth"]() + 1, n = r["getDate"](), t.toString() + Et + i.toString() + Et + n.toString();
        }, t["isNewDay"] = function () {
          this["todayTime"] = 0, this["todayAdCount"] = 0, this["lvCount"] = 0, this["saveLs"]();
        }, t["onTickSec"] = function () {
          this["todayTime"]++, this["gameTime"]++;
        }, t["reportEnter_game"] = function (t) {
          this["report"]("enter_game", function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "enter_game_scene", 0)).enter_game_scene = 0, t;
            }["apply"]())["enter_game_scene"] = t, n;
          }["apply"]());
        }, t["reportEnterLv"] = function () {
          this["adnum"] = 0, this["enterlvtime"] = Date["now"](), this["report"]("enter_lv", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "level_id", 0)).level_id = 0, t;
            }["apply"]())["level_id"] = GbzDataManager["ins"]["fakeGame_level"], t;
          }["apply"]()), this["isInLv"] = !0, this["saveLs"]();
        }, t["reportGameLose"] = function (t) {
          var n;
          n = Math["floor"]((Date["now"]() - this["enterlvtime"]) / 1000), this["report"]("level_loss", function () {
            var r;
            return (r = function () {
              var t, n;
              return Pu(t = {}, "level_id", 0), Pu(t, "lvtime", 0), Pu(t, "shengyunum", 0), (n = t).level_id = 0, n.lvtime = 0, n.shengyunum = 0, n;
            }["apply"]())["level_id"] = GbzDataManager["ins"]["game_level"], r["lvtime"] = n, r["shengyunum"] = t, r;
          }["apply"]());
        }, t["reportGamePass"] = function () {
          var t;
          t = Math["floor"]((Date["now"]() - this["enterlvtime"]) / 1000), this["report"]("game_win", function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "level_id", 0), Pu(t, "lvtime", 0), (n = t).level_id = 0, n.lvtime = 0, n;
            }["apply"]())["level_id"] = GbzDataManager["ins"]["fakeGame_level"], n["lvtime"] = t, n;
          }["apply"]()), this["lvCount"] = 0, this["saveLs"]();
        }, t["reportAdRwd"] = function (t) {
          this["report"]("ad_getreward", function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "adbtn_name", 0), Pu(t, "level_id", 0), (n = t).adbtn_name = 0, n.level_id = 0, n;
            }["apply"]())["adbtn_name"] = t, n["level_id"] = GbzDataManager["ins"]["fakeGame_level"], n;
          }["apply"]());
        }, t["reportLvTime"] = function () {}, t["report"] = function (t, n) {
          this["isUseReport"] && (n.version = globalxz.version, n.regdate = this.regdate, n["use_type"] = this["userType"], sys["isBrowser"] || globalxz["isCusReport"] && cusRpt["trackEvent"](t, n));
        }, n;
      }()), t("reporter", new s()), cclegacy._RF["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});