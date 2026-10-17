(function (t) {
  var inheritsLoose, cclegacy, color, AdPlatformBase, Log;
  return function () {
    var u, s;
    return Pu(u = {}, "setters", 0), Pu(u, "execute", 0), (s = u).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], color = t["color"];
    }, function (t) {
      AdPlatformBase = t["AdPlatformBase"];
    }, function (t) {
      Log = t["Log"];
    }], s.execute = function () {
      cclegacy._RF["push"]({}, "48596WE0IJGhLlhhkBar7Zt", "JDPlatform", void 0), t("JDPlatform", function (t) {
        var r, e;
        return inheritsLoose(e = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = 0, r["shareCall"] = null, r["IS_OPEN_TEST"] = !1, r["isMyGameIn"] = !1, r["_platform"] = null, r["GameClubButton"] = void 0, r["openID"] = "", r;
        }, t), (r = e["prototype"])["platform"] = function () {
          return this._platform || (this._platform = window["jd"]), this._platform;
        }, r["login"] = function (t) {
          t && t();
        }, r["isPlatformAgree"] = function () {
          return !0;
        }, r["platformAgree"] = function () {}, r["platformNotAgree"] = function () {}, r["init"] = function (t) {
          this["initVideo"](t), this["platform"]();
        }, r["vibrateShort"] = function (t) {
          var n;
          (n = this["platform"]()) && n["vibrateShort"](t);
        }, r["initAudioEnd"] = function (t) {
          void 0 !== window.wx && window.wx["onAudioInterruptionEnd"](function () {
            t["ins"]["play"]();
          });
        }, r["initVideo"] = function (t) {
          var n;
          (n = this["platform"]()) && "" != this["ad_video_id"] && null == this["ad_video"] && Log("创建视频", n, n["createRewardedAd"]);
        }, r["showVideo"] = function (t, n, r) {
          var e;
          if (e = this, !this.ad_video) return n && n("广告展示失败");
          this.ad_video["offClose"](), this.ad_video["onClose"](function (r) {
            return e["ad_video"]["offClose"](), r && r["isEnded"] || void 0 === r ? t && t("激励奖励已发放") : n && n("视频播放中断");
          }), this.ad_video["show"]()["catch"](function () {
            e["ad_video"]["load"]()["then"](function () {
              return e["ad_video"]["show"]();
            })["catch"](function () {
              r && r["ins"]["show"]("广告展示失败", function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
                }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
              }["apply"]());
            });
          });
        }, r["getAccountInfoSync"] = function () {
          return this["platform"]()["getAccountInfoSync"]();
        }, r["compareVersion"] = function (t, n) {
          t = t.split(Hi), n = n.split(Hi);
          for (var u = Math["max"](t.length, n.length); t.length < u;) t.push(it);
          for (; n.length < u;) n.push(it);
          for (var s = 0; s < u; s++) {
            var o, c;
            if ((c = parseInt(t[s])) > (o = parseInt(n[s]))) return 1;
            if (c < o) return -1;
          }
          return 0;
        }, e;
      }(AdPlatformBase)), cclegacy._RF["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});