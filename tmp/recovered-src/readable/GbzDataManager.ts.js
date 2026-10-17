(function (t) {
  var createClass, asyncToGenerator, cclegacy, sys, ENUM_STATUS, reporter, GbzInstance, GbzResManager, GbzSdkManager, SOUtil, Log;
  return function () {
    var v, l;
    return Pu(v = {}, "setters", 0), Pu(v, "execute", 0), (l = v).setters = [function (t) {
      createClass = t["createClass"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"];
    }, function (t) {
      ENUM_STATUS = t["ENUM_STATUS"];
    }, function (t) {
      reporter = t["reporter"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzResManager = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], l.execute = function () {
      var v,
        k = 3;
      k += 1, _s && (k += 0), cclegacy._RF["push"]({}, "2abf0A6ll1IhJlv3bhcjUJN", "GbzDataManager", void 0), v = "CC2_SCREWBOX", t("default", function () {
        Ps && (No = [7, 10, 22, 0, 21, 11, 3, 16, 2, 5, 4, 19, 18, 8, 12, 1, 14, 13, 15, 20, 9, 17, 6]);
        var C,
          x,
          T = No["slice"](0);
        return (C = (x = function () {
          this["_status"] = ENUM_STATUS["UNRUN"], this["loading_rate"] = 0, this["game_music"] = !0, this["game_sound"] = !0, this["game_vibrate"] = !0, this["game_level"] = 1, this["game_level_max"] = 100, this["fakeGame_level"] = 1, this["challengeCount"] = 0, this["rankingIndex"] = -1, this["lastCurRank"] = 50, this["fruitBookLastLevel"] = 0, this["score"] = 0, this["scoreMax"] = 0, this["propCount"] = [0, 0], this["propName"] = ["消除", "刷新", "复活"], this["hp"] = 5, this["useSkinId"] = 0, this["skinCount"] = [0, 0, 0, 0, 0], this["skinIds"] = [0], this["themeType"] = ["水果", "甜品", "蔬菜", "动物", "海洋", "糖果"], this["lvPro"] = void 0, this["stroageKey"] = "", this["rankWordDate"] = [], this["_dayAdNumDatas"] = {}, this["skillIndex"] = -1, this["onGetTTSideBarRwd"] = !1, this["onGetTTShortcutRwd"] = !1, this["onGetTTRequestcutRwd"] = !1, this["isTipTheme"] = !0, this["gameLoopStart"] = 61, this["dayShareNum"] = 0, this["dayShareNowNum"] = 0, this["lastDayTime"] = 0, this["linearDamping"] = 0;
        })["prototype"])["init"] = function () {}, C["resetGameData"] = function () {}, C["store"] = function () {
          var t;
          t = function () {
            for (var t, W = 0, J = k; W < 23;) switch (++W, J) {
              case 1:
                t.skinIds = this.skinIds, J = 5;
                break;
              case 6:
                t.hp = this.hp, J = 14;
                break;
              case 16:
                t.onGetTTRequestcutRwd = this.onGetTTRequestcutRwd, J = 6;
                break;
              case 5:
                t.onGetTTSideBarRwd = this.onGetTTSideBarRwd, J = 2;
                break;
              case 10:
                t.lastCurRank = this.lastCurRank, J = 1;
                break;
              case 3:
                t.propCount = this.propCount, J = 13;
                break;
              case 13:
                t.challengeCount = this.challengeCount, J = 20;
                break;
              case 21:
                t.useSkinId = this.useSkinId, J = 3;
                break;
              case 12:
                t.score = this.score, J = 11;
                break;
              case 9:
                t.fruitBookLastLevel = this.fruitBookLastLevel, J = 7;
                break;
              case 14:
                t.lastDayTime = this.lastDayTime, J = 0;
                break;
              case 17:
                t.fakeGame_level = this.fakeGame_level, J = 12;
                break;
              case 11:
                t.scoreMax = this.scoreMax, J = 21;
                break;
              case 0:
                t.dayShareNowNum = this.dayShareNowNum, J = 9;
                break;
              case 8:
                t.game_level = this.game_level, J = 17;
                break;
              case 20:
                t.skinCount = this.skinCount, J = 19;
                break;
              case 2:
                t.onGetTTShortcutRwd = this.onGetTTShortcutRwd, J = 16;
                break;
              case 4:
                t = function () {
                  var t,
                    n,
                    r,
                    D = Gu(T);
                  try {
                    for (D.s(); !(r = D.n()).done;) {
                      switch (r.value) {
                        case 0:
                          n.game_vibrate = 0;
                          break;
                        case 1:
                          n.onGetTTSideBarRwd = 0;
                          break;
                        case 2:
                          n.useSkinId = 0;
                          break;
                        case 3:
                          n.score = 0;
                          break;
                        case 4:
                          n.challengeCount = 0;
                          break;
                        case 5:
                          n.propCount = 0;
                          break;
                        case 6:
                          return n;
                        case 7:
                          Pu(t = {}, "game_music", 0), Pu(t, "game_sound", 0), Pu(t, "game_vibrate", 0), Pu(t, "game_level", 0), Pu(t, "fakeGame_level", 0), Pu(t, "score", 0), Pu(t, "scoreMax", 0), Pu(t, "useSkinId", 0), Pu(t, "propCount", 0), Pu(t, "challengeCount", 0), Pu(t, "skinCount", 0), Pu(t, "rankingIndex", 0), Pu(t, "lastCurRank", 0), Pu(t, "skinIds", 0), Pu(t, "onGetTTSideBarRwd", 0), Pu(t, "onGetTTShortcutRwd", 0), Pu(t, "onGetTTRequestcutRwd", 0), Pu(t, "hp", 0), Pu(t, "lastDayTime", 0), Pu(t, "dayShareNowNum", 0), Pu(t, "fruitBookLastLevel", 0), n = t;
                          break;
                        case 8:
                          n.lastCurRank = 0;
                          break;
                        case 9:
                          n.dayShareNowNum = 0;
                          break;
                        case 10:
                          n.game_music = 0;
                          break;
                        case 11:
                          n.fakeGame_level = 0;
                          break;
                        case 12:
                          n.skinIds = 0;
                          break;
                        case 13:
                          n.onGetTTRequestcutRwd = 0;
                          break;
                        case 14:
                          n.onGetTTShortcutRwd = 0;
                          break;
                        case 15:
                          n.hp = 0;
                          break;
                        case 16:
                          n.scoreMax = 0;
                          break;
                        case 17:
                          n.fruitBookLastLevel = 0;
                          break;
                        case 18:
                          n.rankingIndex = 0;
                          break;
                        case 19:
                          n.skinCount = 0;
                          break;
                        case 20:
                          n.lastDayTime = 0;
                          break;
                        case 21:
                          n.game_level = 0;
                          break;
                        case 22:
                          n.game_sound = 0;
                      }
                    }
                  } catch (t) {
                    D.e(t);
                  } finally {
                    D.f();
                  }
                }["apply"](), J = 15;
                break;
              case 7:
                return t;
              case 18:
                t.game_vibrate = this.game_vibrate, J = 8;
                break;
              case 22:
                t.game_sound = this.game_sound, J = 18;
                break;
              case 19:
                t.rankingIndex = this.rankingIndex, J = 10;
                break;
              case 15:
                t.game_music = this.game_music, J = 22;
            }
          }["bind"](this)["apply"](), sys["localStorage"]["setItem"](v, JSON["stringify"](t));
        }, C["restore"] = function () {
          var t, n, r;
          r = sys.localStorage.getItem(v);
          try {
            var G, O, F, B, z, U, H, V, W, J, j, q, K, Y, X;
            U = JSON["parse"](r), this.game_music = !!U.game_music, this.game_sound = !!U.game_sound, this.game_vibrate = !!U.game_vibrate, this.game_level = null != (G = U.game_level) ? G : 1, this.fakeGame_level = U.fakeGame_level ? U.fakeGame_level : U.game_level, this.score = null != (W = U.score) ? W : 0, this.scoreMax = null != (V = U.scoreMax) ? V : 0, this.useSkinId = null != (Y = U.useSkinId) ? Y : 0, this.propCount = null != (K = U.propCount) ? K : [2, 0], this.challengeCount = null != (H = U.challengeCount) ? H : 0, this.skinCount = null != (q = U.skinCount) ? q : [0, 0], this.rankingIndex = null != (X = U.rankingIndex) ? X : 0, this.lastCurRank = null != (J = U.lastCurRank) ? J : 0, this.skinIds = null != (B = U.skinIds) ? B : [0], this.onGetTTSideBarRwd = !!U.onGetTTSideBarRwd, this.onGetTTShortcutRwd = !!U.onGetTTShortcutRwd, this.onGetTTRequestcutRwd = !!U.onGetTTRequestcutRwd, this.hp = null != (F = U.hp) ? F : 5, this.lastDayTime = null != (j = U.lastDayTime) ? j : 0, this.dayShareNowNum = null != (z = U.dayShareNowNum) ? z : 0, this.fruitBookLastLevel = null != (O = U.fruitBookLastLevel) ? O : 0;
          } catch (i) {}
          t = sys.localStorage.getItem("ZXMTG_Test_GAME_CACHE_gameLv"), n = sys.localStorage.getItem("ZXMTG_Test_GAME_CACHE_curLvChallengeNum"), t && Number(t) > this.game_level && (this.game_level = Number(t), this.fakeGame_level = this.game_level), n && Number(n) > this.challengeCount && (this.challengeCount = Number(n)), this["checkNewDay"](), this["getServerShareCfg"]();
        }, C["checkNewDay"] = function () {
          var t, n, r;
          r = Date["now"](), n = new Date(this.lastDayTime), t = new Date(r), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth() && n.getDate() === t.getDate() || (this.lastDayTime = r, this.dayShareNowNum = x["ins"]["fakeGame_level"] < 5 && Math["random"]() < .5 ? 0 : 1, Log("dayShareNowNum", this.dayShareNowNum), this["store"]());
        }, C["getServerShareCfg"] = function () {
          var t, n, r;
          (t = this, window.wx) && (n = window.wx["getAccountInfoSync"](), (r = new XMLHttpRequest())["onreadystatechange"] = function () {
            4 == r["readyState"] && 200 == r["status"] && (t.dayShareNum = JSON["parse"](r["responseText"]).dayShareNum);
          }, sys["isBrowser"] ? r.open("Get", cr) : r.open("Get", fr + n["miniProgram"]["appId"] + ".json"), r["send"]());
        }, C["addHp"] = function (t) {
          this.hp += t, this.hp >= 5 && (this.hp = 5), this["store"]();
        }, C["getPropNum"] = function (t) {
          var n;
          return null != (n = this["propCount"][t]) ? n : 0;
        }, C["addProp"] = function (t, n) {
          this["propCount"][t] = this["getPropNum"](t) + n, this["store"]();
        }, C["getLvType"] = function () {
          return "普通关卡";
        }, C["AddDayAdClickNum"] = function (t, n) {
          this["GetdayAdNumDatas"](t)["clickNum"] += n, this["store"]();
        }, C["AddDayAdShowNum"] = function (t, n) {
          this["GetdayAdNumDatas"](t)["showEdNum"] += n, this["store"]();
        }, C["GetdayAdNumDatas"] = function (t) {
          return this._dayAdNumDatas[t] || (this._dayAdNumDatas[t] = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "clickNum", 0), Pu(t, "showEdNum", 0), (n = t).clickNum = 0, n.showEdNum = 0, n;
            }["apply"]())["clickNum"] = 0, t["showEdNum"] = 0, t;
          }["apply"]()), this._dayAdNumDatas[t];
        }, C["SetCurLv"] = function (t) {
          this.game_level = t, this["fakeGame_level"] = t, sys.localStorage.setItem("ZXMTG_Test_GAME_CACHE_gameLv", this.game_level), sys.localStorage.setItem("ZXMTG_Test_GAME_CACHE_curLvChallengeNum", this["challengeCount"]), this["store"]();
        }, C["AddCurLv"] = function (t) {
          this.game_level += t, this["fakeGame_level"] += t, sys.localStorage.setItem("ZXMTG_Test_GAME_CACHE_gameLv", this.game_level), sys.localStorage.setItem("ZXMTG_Test_GAME_CACHE_curLvChallengeNum", this["challengeCount"]), this["store"]();
        }, C["mergeStorageKey"] = function (t) {
          return this["stroageKey"] + t;
        }, C["contrastServerLevelDate"] = function (t) {
          var n, r, i, e, a, s;
          i = this["fakeGame_level"], this["challengeCount"], (a = function () {
            var r;
            return (r = function () {
              var t, n;
              return Pu(t = {}, "lv", 0), Pu(t, "chgCount", 0), (n = t).lv = 0, n.chgCount = 0, n;
            }["apply"]()).lv = null != (n = null == t ? void 0 : t.lv) ? n : 1, r.chgCount = null != (s = null == t ? void 0 : t.chgCount) ? s : [], r;
          }["apply"]()).lv < 1 && (a.lv = 1, t && void 0 !== t.lv && (t.lv = 1)), r = null != t && a.lv > 1, (e = i > 1) && (1 != i || "新用户" != reporter.userType) || r ? reporter.userType = "老用户" : reporter.userType = "新用户", !r && e ? this.uploadLocalToServer(!0) : r && e ? i > a.lv ? this.uploadLocalToServer(!0) : a.lv > i && (this.overrideLocalWithServer(a), this.loadNewLevel()) : !e && r && (this.overrideLocalWithServer(a), this.loadNewLevel());
        }, C["loadNewLevel"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[5], t.next = 3, GbzInstance[r[64]][n[0][28]]();
                case 3:
                  GbzInstance[r[6]][n[9][49]]();
                case 4:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), C["uploadLocalToServer"] = function (t) {
          GbzSdkManager["ins"]["set_level_data"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "lv", 0), Pu(t, "skC", 0), (n = t).lv = 0, n.skC = 0, n;
            }["apply"]())["lv"] = this["fakeGame_level"], t["skC"] = this["skinCount"], t;
          }["bind"](this)["apply"](), this["fakeGame_level"]);
        }, C["overrideLocalWithServer"] = function (t) {
          this["SetCurLv"](t["lv"]), this["challengeCount"] = t["chgCount"], GbzInstance["gameMgr"]["repairSkinData"](), this["store"]();
        }, C["isVideo2Share"] = function () {
          return Log("dayShareNowNum", this.dayShareNowNum, "dayShareNum", this.dayShareNum), this.dayShareNowNum < this.dayShareNum;
        }, C["AddShareNum"] = function () {
          this["dayShareNowNum"]++, this["store"]();
        }, C["setVideoImgSprite"] = function (t, n) {
          var r;
          void 0 === n && (n = 0), r = this["isVideo2Share"]() ? "分享" : "视频", GbzResManager["ins"]["setSpriteFrame"]("game", r, t), n > 0 && SOUtil["SetSpriteSizeWidth"](t, n);
        }, createClass(x, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "status", t["get"] = function () {
            return this["_status"];
          }, t["set"] = function (t) {
            this["_status"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "UseSkin", t["get"] = function () {
            return this["useSkinId"];
          }, t["set"] = function (t) {
            this["useSkinId"] = t, this["store"]();
          }, t;
        }.bind(this).apply()], [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this._ins || (this._ins = new x(), this._ins["restore"]()), this._ins;
          }, t;
        }.bind(this).apply()]), x;
      }())["_ins"] = null, t("PropType", function (t) {
        return t[t.removeFruit = 0] = "removeFruit", t[t.disturbFruit = 1] = "disturbFruit", t;
      }({})), cclegacy._RF["pop"]();
    }, l;
  }["bind"](this)["apply"]();
});