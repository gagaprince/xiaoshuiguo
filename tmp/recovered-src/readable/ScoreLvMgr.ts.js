(function (t) {
  var createClass, cclegacy, sys, Error_2;
  return function () {
    var a, u;
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"];
    }, function (t) {
      Error_2 = t["Error"];
    }], u.execute = function () {
      var a;
      cclegacy._RF["push"]({}, "e9185DqjAVN9J6rNkKkMuko", "ScoreLvMgr", void 0), (a = t("default", function () {
        var t, r;
        return (t = (r = function () {
          this["score"] = 0, this["hasPopupSlotItem"] = !1, this["loadFromCache"]();
        })["prototype"])["addDeathScore"] = function () {
          this.score += 1, Error_2("死亡奖励分数加1，当前分数", this.score), this["saveToCache"]();
        }, t["addAdScore"] = function () {
          this.score += 1, Error_2("广告奖励分数加1，当前分数", this.score), this["saveToCache"]();
        }, t["getReduceFruitTypeCount"] = function () {
          var t;
          return t = Math["floor"](this.score / 10), Error_2("水果种类减少数量", t, "当前分数", this.score), Math["min"](t, 5);
        }, t["canPopupSlotItem"] = function (t) {
          return !(this["hasPopupSlotItem"] || t <= .5);
        }, t["markSlotItemPopuped"] = function () {
          this["hasPopupSlotItem"] = !0, this["saveToCache"]();
        }, t["resetSlotItemPopuped"] = function () {
          this["hasPopupSlotItem"] = !1;
        }, t["resetForNewLevel"] = function () {
          this["score"] = 0, this["hasPopupSlotItem"] = !1, this["clearCache"]();
        }, t["getDebugScore"] = function () {
          return this["score"];
        }, t["saveToCache"] = function () {
          var t;
          t = function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "score", 0)).score = 0, t;
            }["apply"]()).score = this.score, t;
          }["bind"](this)["apply"](), sys["localStorage"]["setItem"](r["CACHE_KEY"], JSON["stringify"](t));
        }, t["loadFromCache"] = function () {
          var t;
          if (t = sys["localStorage"]["getItem"](r["CACHE_KEY"])) try {
            var a;
            a = JSON["parse"](t), this.score = a.score || 0;
          } catch (e) {
            this["clearCache"]();
          }
        }, t["clearCache"] = function () {
          sys["localStorage"]["removeItem"](r["CACHE_KEY"]);
        }, createClass(r, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            return this._instance || (this._instance = new r()), this._instance;
          }, t;
        }["bind"](this)["apply"]()]), r;
      }()))["_instance"] = null, a["CACHE_KEY"] = "ScoreLvMgr_LevelCache", cclegacy._RF["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});