(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o = to;
  return function () {
    var o,
      c,
      f = to[5],
      h = "setters",
      v = "execute";
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["color"];
    }, function (t) {
      e = t["default"];
    }, function (t) {
      a = t["AdPlatformBase"];
    }, function (t) {
      var n = to;
      u = t["Log"], s = t["Error"];
    }], c["execute"] = function () {
      var o = to,
        c = "_RF",
        f = "HwPlatform";
      r["_RF"]["push"]({}, "9d3f8UrqJBO7YB5isuzZZYd", "HwPlatform", void 0), t("HwPlatform", function (t) {
        var r,
          a,
          o = to,
          c = o[7],
          f = o[10],
          h = o[9],
          v = o[8],
          l = o[5];
        return n(a = function () {
          for (var n, r, i = to, e = i[4], a = i[3], u = i[7], s = i[6], o = i[13], c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["share_title"] = "熬夜消水果，过不了第二关，谁来帮帮我呀？", r["ad_banner"] = null, r["ad_native"] = null, r["ad_inter"] = null, r["ad_video"] = null, r["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = 0, r["shareCall"] = null, r["IS_OPEN_TEST"] = !1, r["statusBarHeight"] = 0, r["yinliyinqingCom"] = void 0, r["appid"] = "113954177", r["globalxz"] = void 0, r;
        }, t), (r = a["prototype"])["isPlatformAgree"] = function () {
          var t = to;
          return "true" == localStorage["getItem"]("huaweiAgree");
        }, r["platformAgree"] = function () {
          var t = to;
          localStorage["setItem"]("huaweiAgree", "true");
        }, r["platformNotAgree"] = function () {
          var t = to;
          localStorage["setItem"]("huaweiAgree", "false");
        }, r["platform"] = function () {
          var t = to,
            n = "qg";
          return "undefined" != ("undefined" == typeof window ? "undefined" : Du(window)) && window["qg"] ? window["qg"] : null;
        }, r["init"] = function (t) {
          var n,
            r = to,
            i = r[6],
            a = r[8],
            s = r[7];
          n = this, this["platform"]()["getSystemInfo"](function () {
            var t,
              r = to;
            return (t = function () {
              var t,
                n,
                r = to,
                i = "success",
                e = "fail",
                a = "complete";
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t)["success"] = 0, n["fail"] = 0, n["complete"] = 0, n;
            }["apply"]())["success"] = function (t) {
              var r = to,
                i = "statusBarHeight",
                a = "safeArea",
                s = "top",
                o = "screenHeight";
              u("```````````获取系统信息···········", JSON["stringify"](t)), n["statusBarHeight"] = t["safeArea"]["top"] / t["screenHeight"], u("```````````获取状态栏高度···········", n["statusBarHeight"], t["safeArea"]["top"], t["screenHeight"]), e["emit"]("huaweiAreaRefresh");
            }, t["fail"] = function () {}, t["complete"] = function () {}, t;
          }["apply"]()), this["globalxz"] = t, this["passiveShare"](), this["initBanner"](t), this["initNative"](t), this["initInter"](t), this["initVideo"](t), this["checkTest"]();
        }, r["initWaitLoagin"] = function () {
          var t = to,
            n = t[8],
            r = t[7],
            i = "globalxz";
          this["passiveShare"](), this["initBanner"](this["globalxz"]), this["initNative"](this["globalxz"]), this["initInter"](this["globalxz"]), this["initVideo"](this["globalxz"]), this["checkTest"]();
        }, r["login"] = function (t) {
          var n = to;
          this["platform"]()["gameLogin"](function () {
            var n,
              r = to,
              i = "appid";
            return (n = function () {
              var t,
                n,
                r = to,
                i = "forceLogin",
                e = "appid",
                a = "success",
                u = "fail";
              return Pu(t = {}, "forceLogin", 0), Pu(t, "appid", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["forceLogin"] = 0, n["appid"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["forceLogin"] = 1, n["appid"] = this["appid"], n["success"] = function (n) {
              var r = to;
              u(" game login with real success:" + JSON["stringify"](n)), t && t();
            }, n["fail"] = function (t, n) {
              var r = to;
              u("game login with real fail:" + t + ", code:" + n + " , " + this["appid"]);
            }, n;
          }["bind"](this)["apply"]());
        }, r["vibrateShort"] = function (t) {
          var n = to,
            r = "platform";
          this["platform"]() && this["platform"]()["vibrateShort"]();
        }, r["checkTest"] = function () {}, r["getAccountInfoSync"] = function () {
          var t = to;
          return function () {
            var t,
              n = to,
              r = "apply";
            return (t = function () {
              var t,
                n = "miniProgram";
              return (t = Pu({}, "miniProgram", 0))["miniProgram"] = 0, t;
            }["apply"]())["miniProgram"] = function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "appId",
                    e = "version";
                  return Pu(t = {}, "appId", 0), Pu(t, "version", 0), (n = t)["appId"] = 0, n["version"] = 0, n;
                }["apply"]())["appId"] = 0, t["version"] = 0, t;
              }["apply"]())["appId"] = this["appid"], t["version"] = "", t;
            }["bind"](this)["apply"](), t;
          }["bind"](this)["apply"]();
        }, r["activeShare"] = function (t, n) {
          var r,
            i = to,
            e = "share_title";
          (r = this["platform"]()) ? (t = (t = t || this["share_title"]) || this["share_title"], r["serviceShare"](function () {
            var n,
              r = to,
              i = r[3];
            return (n = function () {
              var t,
                n,
                r = to,
                i = "shareType",
                e = "title",
                a = "fail",
                u = "cancel";
              return Pu(t = {}, "shareType", 0), Pu(t, "title", 0), Pu(t, "fail", 0), Pu(t, "cancel", 0), (n = t)["shareType"] = 0, n["title"] = 0, n["fail"] = 0, n["cancel"] = 0, n;
            }["apply"]())["shareType"] = 1, n["title"] = t, n["fail"] = function (t, n) {}, n["cancel"] = function () {}, n;
          }["apply"]())) : n && n();
        }, r["passiveShare"] = function (t) {}, r["initBanner"] = function (t) {
          var n,
            r = to,
            i = "createBannerAd",
            e = "ad_banner",
            a = "onError";
          (n = this["platform"]()) && n["createBannerAd"] && t["ad_banner_id"] && null == this["ad_banner"] && (this["ad_banner"] = n["createBannerAd"](function () {
            var n,
              r = to,
              i = "apply";
            return (n = function () {
              var t,
                n,
                r = to,
                i = "adUnitId",
                e = "style";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "style", 0), (n = t)["adUnitId"] = 0, n["style"] = 0, n;
            }["apply"]())["adUnitId"] = t["ad_banner_id"], n["style"] = function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "top",
                    e = "left";
                  return Pu(t = {}, "top", 0), Pu(t, "left", 0), (n = t)["top"] = 0, n["left"] = 0, n;
                }["apply"]())["top"] = 0, t["left"] = 0, t;
              }["apply"]())["top"] = 500, t["left"] = 0, t;
            }["apply"](), n;
          }["apply"]()), this["ad_banner"]["onError"] && this["ad_banner"]["onError"](function () {}));
        }, r["showBanner"] = function (t) {
          var n = to,
            r = n[2],
            i = "ad_banner";
          this["ad_banner"] && (t ? this["ad_banner"]["show"]() : this["ad_banner"]["hide"]());
        }, r["initNative"] = function (t) {
          var n,
            r = to,
            i = r[12],
            e = "ad_native",
            a = "onError";
          (n = this["platform"]()) && n["createBannerAd"] && t["ad_native_id"] && null == this["ad_native"] && (this["ad_native"] = n["createNativeAd"](function () {
            var t,
              n = to,
              r = n[6];
            return (t = function () {
              var t,
                n,
                r = to,
                i = r[6],
                e = "adUnitId",
                a = "success",
                u = "fail",
                s = "complete";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t)["adUnitId"] = 0, n["success"] = 0, n["fail"] = 0, n["complete"] = 0, n;
            }["apply"]())["adUnitId"] = "xxx", t["success"] = function (t) {}, t["fail"] = function (t, n) {}, t["complete"] = function () {}, t;
          }["apply"]()), this["ad_native"]["onError"] && this["ad_native"]["onError"](function () {}));
        }, r["initInter"] = function (t) {
          var n,
            r = to,
            i = "createInterstitialAd",
            e = "ad_inter",
            a = "onError";
          (n = this["platform"]()) && n["createInterstitialAd"] && t["ad_inter_id"] && null == this["ad_inter"] && (this["ad_inter"] = n["createInterstitialAd"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "adUnitId";
              return (t = Pu({}, "adUnitId", 0))["adUnitId"] = 0, t;
            }["apply"]())["adUnitId"] = t["ad_inter_id"], n;
          }["apply"]()), this["ad_inter"]["onError"] && this["ad_inter"]["onError"](function () {}));
        }, r["showInter"] = function () {
          var t = to,
            n = "ad_inter";
          this["ad_inter"] && this["ad_inter"]["show"]();
        }, r["initVideo"] = function (t) {
          var n,
            r = to,
            i = "createRewardedVideoAd",
            e = "ad_video_id",
            a = "ad_video";
          (n = this["platform"]()) && n["createRewardedVideoAd"] && t["ad_video_id"] && null == this["ad_video"] && (u("ad_video_id: " + t["ad_video_id"]), this["ad_video"] = n["createRewardedVideoAd"](function () {
            var n,
              r = to,
              i = r[6];
            return (n = function () {
              var t,
                n,
                r = to,
                i = r[6],
                e = "adUnitId",
                a = "success",
                u = "fail",
                s = "complete";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t)["adUnitId"] = 0, n["success"] = 0, n["fail"] = 0, n["complete"] = 0, n;
            }["apply"]())["adUnitId"] = t["ad_video_id"], n["success"] = function (t) {}, n["fail"] = function (t, n) {}, n["complete"] = function () {}, n;
          }["apply"]()), this["ad_video"]["onLoad"](function () {}), this["ad_video"]["onError"](function (t) {
            var n = to;
            s("load ad error:" + JSON["stringify"](t));
          }), this["ad_video"]["load"]());
        }, r["showVideo"] = function (t, n, r) {
          var e,
            a = to,
            u = a[5],
            s = a[2],
            o = a[6],
            c = "ad_video",
            f = "offClose";
          if (e = this, !this["ad_video"]) return n && n("广告未初始化");
          this["ad_video"]["offClose"] && this["ad_video"]["offClose"](), this["ad_video"] && this["ad_video"]["onClose"](function (r) {
            var i = to,
              a = i[5],
              u = i[6],
              s = "ad_video",
              o = "offClose";
            return e["ad_video"]["offClose"] && e["ad_video"]["offClose"](), r && r["isEnded"] || void 0 === r ? t && t("激励奖励已发放") : n && n("视频播放中断");
          }), this["ad_video"]["offError"](), this["ad_video"]["onError"](function (t) {
            var n = to,
              a = n[4],
              u = "ad_video";
            e["ad_video"]["onLoad"](function () {
              var t = to;
              e["ad_video"]["show"]();
            }), e["ad_video"]["offError"](), r && r["ins"]["show"]("广告展示失败", function () {
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
          }), this["ad_video"]["show"](), this["ad_video"]["load"]();
        }, r["showToast"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[3],
            u = e[6],
            s = "showToast";
          r = t["title"], t["icon"], i = t["duration"], (n = this["platform"]()) && n["showToast"] && n["showToast"](function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n,
                r = to,
                i = "content",
                e = "duration";
              return Pu(t = {}, "content", 0), Pu(t, "duration", 0), (n = t)["content"] = 0, n["duration"] = 0, n;
            }["apply"]())["content"] = r, t["duration"] = i || 2000, t;
          }["apply"]());
        }, r["getRank"] = function () {}, r["setRank"] = function (t) {}, r["onSubscribe"] = function () {}, a;
      }(a)), r["_RF"]["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});