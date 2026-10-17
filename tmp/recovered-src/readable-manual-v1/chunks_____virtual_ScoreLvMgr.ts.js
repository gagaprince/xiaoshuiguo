(function (t) {
  var n,
    r,
    i,
    e,
    a = to;
  return function () {
    var a,
      u,
      s = to[5],
      o = "setters",
      c = "execute";
    return Pu(a = {}, "setters", 0), Pu(a, "execute", 0), (u = a)["setters"] = [function (t) {
      n = t["createClass"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["sys"];
    }, function (t) {
      e = t["Error"];
    }], u["execute"] = function () {
      var a,
        u = to,
        s = u[7],
        o = "_RF";
      r["_RF"]["push"]({}, "e9185DqjAVN9J6rNkKkMuko", "ScoreLvMgr", void 0), (a = t("default", function () {
        var t,
          r,
          a = to,
          u = a[11],
          s = a[8],
          o = a[14];
        return (t = (r = function () {
          var t = to;
          this["score"] = 0, this["hasPopupSlotItem"] = !1, this["loadFromCache"]();
        })["prototype"])["addDeathScore"] = function () {
          var t = to,
            n = "score";
          this["score"] += 1, e("死亡奖励分数加1，当前分数", this["score"]), this["saveToCache"]();
        }, t["addAdScore"] = function () {
          var t = to,
            n = "score";
          this["score"] += 1, e("广告奖励分数加1，当前分数", this["score"]), this["saveToCache"]();
        }, t["getReduceFruitTypeCount"] = function () {
          var t,
            n = to,
            r = "score";
          return t = Math["floor"](this["score"] / 10), e("水果种类减少数量", t, "当前分数", this["score"]), Math["min"](t, 5);
        }, t["canPopupSlotItem"] = function (t) {
          return !(this["hasPopupSlotItem"] || t <= .5);
        }, t["markSlotItemPopuped"] = function () {
          var t = to;
          this["hasPopupSlotItem"] = !0, this["saveToCache"]();
        }, t["resetSlotItemPopuped"] = function () {
          this["hasPopupSlotItem"] = !1;
        }, t["resetForNewLevel"] = function () {
          var t = to;
          this["score"] = 0, this["hasPopupSlotItem"] = !1, this["clearCache"]();
        }, t["getDebugScore"] = function () {
          return this["score"];
        }, t["saveToCache"] = function () {
          var t,
            n = to,
            e = n[7];
          t = function () {
            var t,
              n = to,
              r = "score";
            return (t = function () {
              var t,
                n = "score";
              return (t = Pu({}, "score", 0))["score"] = 0, t;
            }["apply"]())["score"] = this["score"], t;
          }["bind"](this)["apply"](), i["localStorage"]["setItem"](r["CACHE_KEY"], JSON["stringify"](t));
        }, t["loadFromCache"] = function () {
          var t,
            n = to,
            e = "score";
          if (t = i["localStorage"]["getItem"](r["CACHE_KEY"])) try {
            var a;
            a = JSON["parse"](t), this["score"] = a["score"] || 0;
          } catch (e) {
            this["clearCache"]();
          }
        }, t["clearCache"] = function () {
          var t = to;
          i["localStorage"]["removeItem"](r["CACHE_KEY"]);
        }, n(r, null, [function () {
          var t,
            n = to,
            i = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            var t = "_instance";
            return this["_instance"] || (this["_instance"] = new r()), this["_instance"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }()))["_instance"] = null, a["CACHE_KEY"] = "ScoreLvMgr_LevelCache", r["_RF"]["pop"]();
    }, u;
  }["bind"](this)["apply"]();
});