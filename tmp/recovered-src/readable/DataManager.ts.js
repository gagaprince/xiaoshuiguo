(function (t) {
  var createClass, cclegacy, sys;
  return function () {
    var e, a;
    return Pu(e = {}, "setters", 0), Pu(e, "execute", 0), (a = e).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"];
    }, null], a.execute = function () {
      cclegacy._RF["push"]({}, "065e87xdWdGAL53glDflLx+", "DataManager", void 0), t("default", function () {
        var t, r;
        return (t = (r = function () {
          this["game_music"] = !0, this["game_sound"] = !0, this["game_vibrate"] = !0, this["game_level"] = 1, this["game_level_max"] = 100, this["coins"] = 0, this["props"] = [0, 0, 0], this["useSkinId"] = 0, this["skinData"] = [], this["adTicketCount"] = 0, this["_dayAdNumDatas"] = {};
        })["prototype"])["mergeStorageKey"] = function (t) {
          return "GAME_DATA_" + t;
        }, t["store"] = function () {
          Fu(66.25) >= Fu(Bu((Ou(50) + Ou(48) + Ou(ju) + Ou(96)) / 4)) && (go = 5);
          var r;
          r = function () {
            for (var t, k = 0, m = Co; k < 12;) switch (++k, m) {
              case 4:
                t.skinData = this.skinData, m = 6;
                break;
              case 5:
                return t;
              case 10:
                t.game_sound = this.game_sound, m = 11;
                break;
              case 8:
                t.useSkinId = this.useSkinId, m = 4;
                break;
              case 7:
                t.props = this.props, m = 8;
                break;
              case 9:
                t.game_music = this.game_music, m = 10;
                break;
              case 0:
                t["dayAdNumDatas"] = this["_dayAdNumDatas"], m = 5;
                break;
              case 11:
                t.game_vibrate = this.game_vibrate, m = 2;
                break;
              case 3:
                t = function () {
                  for (var t, n, g = 0, y = 4; g < 12;) switch (++g, y) {
                    case 0:
                      n.props = 0, y = 7;
                      break;
                    case 10:
                      n.adTicketCount = 0, y = 8;
                      break;
                    case 8:
                      n.dayAdNumDatas = 0, y = 2;
                      break;
                    case 1:
                      n.game_vibrate = 0, y = 11;
                      break;
                    case 11:
                      n.game_level = 0, y = 4;
                      break;
                    case 4:
                      n.coins = 0, y = 0;
                      break;
                    case 7:
                      n.useSkinId = 0, y = 6;
                      break;
                    case 2:
                      return n;
                    case 9:
                      n.game_music = 0, y = 3;
                      break;
                    case 6:
                      n.skinData = 0, y = 10;
                      break;
                    case 5:
                      Pu(t = {}, "game_music", 0), Pu(t, "game_sound", 0), Pu(t, "game_vibrate", 0), Pu(t, "game_level", 0), Pu(t, "coins", 0), Pu(t, "props", 0), Pu(t, "useSkinId", 0), Pu(t, "skinData", 0), Pu(t, "adTicketCount", 0), Pu(t, "dayAdNumDatas", 0), n = t, y = 9;
                      break;
                    case 3:
                      n.game_sound = 0, y = 1;
                  }
                }["apply"](), m = 9;
                break;
              case 6:
                t.adTicketCount = this.adTicketCount, m = 0;
                break;
              case 2:
                t.game_level = this.game_level, m = 1;
                break;
              case 1:
                t.coins = this.coins, m = 7;
            }
          }["bind"](this)["apply"](), sys["localStorage"]["setItem"](this["mergeStorageKey"]("SAVE"), JSON["stringify"](r));
        }, t["restore"] = function () {
          var t;
          if (t = sys["localStorage"]["getItem"](this["mergeStorageKey"]("SAVE"))) try {
            var r;
            r = JSON["parse"](t), Object["assign"](this, r);
          } catch (n) {}
        }, t["getPropNum"] = function (t) {
          return this["props"][t] || 0;
        }, t["addProp"] = function (t, n) {
          this.props[t] = (this.props[t] || 0) + n, this["store"]();
        }, t["getSkinData"] = function (t) {
          return 0 === this.skinData["length"] && (this.skinData = t["map"](function (t, n) {
            return function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "id", 0), Pu(t, "isUnlock", 0), (n = t).id = 0, n.isUnlock = 0, n;
              }["apply"]())["id"] = n, t["isUnlock"] = 0 === n ? 1 : 0, t;
            }["apply"]();
          })), this.skinData;
        }, t["unlockSkin"] = function (t) {
          var n;
          (n = this["skinData"]["find"](function (n) {
            return n["id"] === t;
          })) && (n["isUnlock"] = 1, this["store"]());
        }, t["addAdTicket"] = function (t) {
          this["adTicketCount"] += t, this["store"]();
        }, t["useAdTicket"] = function () {
          return this.adTicketCount > 0 && (this.adTicketCount--, this["store"](), !0);
        }, t["GetDayAdNumDatas"] = function (t) {
          return this._dayAdNumDatas[t] || (this._dayAdNumDatas[t] = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "clickNum", 0), Pu(t, "showEdNum", 0), (n = t).clickNum = 0, n.showEdNum = 0, n;
            }["apply"]())["clickNum"] = 0, t["showEdNum"] = 0, t;
          }["apply"]()), this._dayAdNumDatas[t];
        }, t["AddDayAdClickNum"] = function (t, n) {
          this["GetDayAdNumDatas"](t)["clickNum"] += n, this["store"]();
        }, t["AddDayAdShowNum"] = function (t, n) {
          this["GetDayAdNumDatas"](t)["showEdNum"] += n, this["store"]();
        }, t["getTodayStr"] = function () {
          var t;
          return "" + (t = new Date())["getFullYear"]() + (t["getMonth"]() + 1) + t["getDate"]();
        }, createClass(r, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this._ins || (this._ins = new r(), this._ins["restore"]()), this._ins;
          }, t;
        }["bind"](this)["apply"]()]), r;
      }())["_ins"] = null, cclegacy._RF["pop"]();
    }, a;
  }["bind"](this)["apply"]();
});