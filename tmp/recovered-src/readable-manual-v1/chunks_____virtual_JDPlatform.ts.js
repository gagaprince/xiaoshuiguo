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
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["color"];
    }, function (t) {
      e = t["AdPlatformBase"];
    }, function (t) {
      a = t["Log"];
    }], s["execute"] = function () {
      var u = to,
        s = "_RF",
        o = "JDPlatform";
      r["_RF"]["push"]({}, "48596WE0IJGhLlhhkBar7Zt", "JDPlatform", void 0), t("JDPlatform", function (t) {
        var r,
          e,
          u = to,
          s = u[7],
          o = u[10];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = i[6], u = i[7], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = 0, r["shareCall"] = null, r["IS_OPEN_TEST"] = !1, r["isMyGameIn"] = !1, r["_platform"] = null, r["GameClubButton"] = void 0, r["openID"] = "", r;
        }, t), (r = e["prototype"])["platform"] = function () {
          var t = to,
            n = "_platform";
          return this["_platform"] || (this["_platform"] = window["jd"]), this["_platform"];
        }, r["login"] = function (t) {
          t && t();
        }, r["isPlatformAgree"] = function () {
          return !0;
        }, r["platformAgree"] = function () {}, r["platformNotAgree"] = function () {}, r["init"] = function (t) {
          var n = to;
          this["initVideo"](t), this["platform"]();
        }, r["vibrateShort"] = function (t) {
          var n,
            r = to;
          (n = this["platform"]()) && n["vibrateShort"](t);
        }, r["initAudioEnd"] = function (t) {
          var n = to,
            r = "wx";
          void 0 !== window["wx"] && window["wx"]["onAudioInterruptionEnd"](function () {
            var n = to;
            t["ins"]["play"]();
          });
        }, r["initVideo"] = function (t) {
          var n,
            r = to,
            i = r[6];
          (n = this["platform"]()) && "" != this["ad_video_id"] && null == this["ad_video"] && a("创建视频", n, n["createRewardedAd"]);
        }, r["showVideo"] = function (t, n, r) {
          var e,
            a = to,
            u = "ad_video";
          if (e = this, !this["ad_video"]) return n && n("广告展示失败");
          this["ad_video"]["offClose"](), this["ad_video"]["onClose"](function (r) {
            var i = to,
              a = i[6],
              u = i[5];
            return e["ad_video"]["offClose"](), r && r["isEnded"] || void 0 === r ? t && t("激励奖励已发放") : n && n("视频播放中断");
          }), this["ad_video"]["show"]()["catch"](function () {
            var t = to,
              n = t[2];
            e["ad_video"]["load"]()["then"](function () {
              var t = to;
              return e["ad_video"]["show"]();
            })["catch"](function () {
              var t = to;
              r && r["ins"]["show"]("广告展示失败", function () {
                var t,
                  n = to,
                  r = ro;
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "gravity",
                    e = "bg_color";
                  return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t)["gravity"] = 0, n["bg_color"] = 0, n;
                }["apply"]())["gravity"] = "CENTER", t["bg_color"] = i(226, 69, 109, 255), t;
              }["apply"]());
            });
          });
        }, r["getAccountInfoSync"] = function () {
          var t = to;
          return this["platform"]()["getAccountInfoSync"]();
        }, r["compareVersion"] = function (t, n) {
          var r = to,
            i = "split",
            e = "length",
            a = "push";
          t = t["split"](Hi), n = n["split"](Hi);
          for (var u = Math["max"](t["length"], n["length"]); t["length"] < u;) t["push"](it);
          for (; n["length"] < u;) n["push"](it);
          for (var s = 0; s < u; s++) {
            var o, c;
            if ((c = parseInt(t[s])) > (o = parseInt(n[s]))) return 1;
            if (c < o) return -1;
          }
          return 0;
        }, e;
      }(e)), r["_RF"]["pop"]();
    }, s;
  }["bind"](this)["apply"]();
});