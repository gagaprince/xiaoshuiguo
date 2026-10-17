(function (t) {
  var inheritsLoose, cclegacy, color, SOUtil, AdPlatformBase, Log, Error_2;
  return function () {
    var o, c;
    return Pu(o = {}, "setters", 0), Pu(o, "execute", 0), (c = o).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], color = t["color"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      AdPlatformBase = t["AdPlatformBase"];
    }, function (t) {
      Log = t["Log"], Error_2 = t["Error"];
    }], c.execute = function () {
      cclegacy._RF["push"]({}, "9d3f8UrqJBO7YB5isuzZZYd", "HwPlatform", void 0), t("HwPlatform", function (t) {
        var r, a;
        return inheritsLoose(a = function () {
          for (var n, r, c = (n = arguments)["length"], f = new Array(c), h = 0; h < c; h++) f[h] = n[h];
          return (r = t["call"]["apply"](t, [this]["concat"](f)) || this)["share_title"] = "熬夜消水果，过不了第二关，谁来帮帮我呀？", r["ad_banner"] = null, r["ad_native"] = null, r["ad_inter"] = null, r["ad_video"] = null, r["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = 0, r["shareCall"] = null, r["IS_OPEN_TEST"] = !1, r["statusBarHeight"] = 0, r["yinliyinqingCom"] = void 0, r["appid"] = "113954177", r["globalxz"] = void 0, r;
        }, t), (r = a["prototype"])["isPlatformAgree"] = function () {
          return "true" == localStorage["getItem"]("huaweiAgree");
        }, r["platformAgree"] = function () {
          localStorage["setItem"]("huaweiAgree", "true");
        }, r["platformNotAgree"] = function () {
          localStorage["setItem"]("huaweiAgree", "false");
        }, r["platform"] = function () {
          return "undefined" != ("undefined" == typeof window ? "undefined" : Du(window)) && window.qg ? window.qg : null;
        }, r["init"] = function (t) {
          var n;
          n = this, this["platform"]()["getSystemInfo"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t).success = 0, n.fail = 0, n.complete = 0, n;
            }["apply"]())["success"] = function (t) {
              Log("```````````获取系统信息···········", JSON["stringify"](t)), n.statusBarHeight = t.safeArea.top / t.screenHeight, Log("```````````获取状态栏高度···········", n.statusBarHeight, t.safeArea.top, t.screenHeight), SOUtil["emit"]("huaweiAreaRefresh");
            }, t["fail"] = function () {}, t["complete"] = function () {}, t;
          }["apply"]()), this["globalxz"] = t, this["passiveShare"](), this["initBanner"](t), this["initNative"](t), this["initInter"](t), this["initVideo"](t), this["checkTest"]();
        }, r["initWaitLoagin"] = function () {
          this["passiveShare"](), this["initBanner"](this.globalxz), this["initNative"](this.globalxz), this["initInter"](this.globalxz), this["initVideo"](this.globalxz), this["checkTest"]();
        }, r["login"] = function (t) {
          this["platform"]()["gameLogin"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "forceLogin", 0), Pu(t, "appid", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).forceLogin = 0, n.appid = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["forceLogin"] = 1, n.appid = this.appid, n["success"] = function (n) {
              Log(" game login with real success:" + JSON["stringify"](n)), t && t();
            }, n["fail"] = function (t, n) {
              Log("game login with real fail:" + t + ", code:" + n + " , " + this["appid"]);
            }, n;
          }["bind"](this)["apply"]());
        }, r["vibrateShort"] = function (t) {
          this.platform() && this.platform()["vibrateShort"]();
        }, r["checkTest"] = function () {}, r["getAccountInfoSync"] = function () {
          return function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "miniProgram", 0)).miniProgram = 0, t;
            }.apply())["miniProgram"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "appId", 0), Pu(t, "version", 0), (n = t).appId = 0, n.version = 0, n;
                }["apply"]())["appId"] = 0, t["version"] = 0, t;
              }["apply"]())["appId"] = this["appid"], t["version"] = "", t;
            }["bind"](this).apply(), t;
          }["bind"](this)["apply"]();
        }, r["activeShare"] = function (t, n) {
          var r;
          (r = this["platform"]()) ? (t = (t = t || this.share_title) || this.share_title, r["serviceShare"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "shareType", 0), Pu(t, "title", 0), Pu(t, "fail", 0), Pu(t, "cancel", 0), (n = t).shareType = 0, n.title = 0, n.fail = 0, n.cancel = 0, n;
            }["apply"]())["shareType"] = 1, n["title"] = t, n["fail"] = function (t, n) {}, n["cancel"] = function () {}, n;
          }["apply"]())) : n && n();
        }, r["passiveShare"] = function (t) {}, r["initBanner"] = function (t) {
          var n;
          (n = this["platform"]()) && n.createBannerAd && t["ad_banner_id"] && null == this.ad_banner && (this.ad_banner = n.createBannerAd(function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "style", 0), (n = t).adUnitId = 0, n.style = 0, n;
            }.apply())["adUnitId"] = t["ad_banner_id"], n["style"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "top", 0), Pu(t, "left", 0), (n = t).top = 0, n.left = 0, n;
                }["apply"]())["top"] = 0, t["left"] = 0, t;
              }["apply"]())["top"] = 500, t["left"] = 0, t;
            }.apply(), n;
          }["apply"]()), this.ad_banner.onError && this.ad_banner.onError(function () {}));
        }, r["showBanner"] = function (t) {
          this.ad_banner && (t ? this.ad_banner["show"]() : this.ad_banner["hide"]());
        }, r["initNative"] = function (t) {
          var n;
          (n = this["platform"]()) && n["createBannerAd"] && t["ad_native_id"] && null == this.ad_native && (this.ad_native = n["createNativeAd"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t).adUnitId = 0, n.success = 0, n.fail = 0, n.complete = 0, n;
            }["apply"]())["adUnitId"] = "xxx", t["success"] = function (t) {}, t["fail"] = function (t, n) {}, t["complete"] = function () {}, t;
          }["apply"]()), this.ad_native.onError && this.ad_native.onError(function () {}));
        }, r["initInter"] = function (t) {
          var n;
          (n = this["platform"]()) && n.createInterstitialAd && t["ad_inter_id"] && null == this.ad_inter && (this.ad_inter = n.createInterstitialAd(function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "adUnitId", 0)).adUnitId = 0, t;
            }["apply"]())["adUnitId"] = t["ad_inter_id"], n;
          }["apply"]()), this.ad_inter.onError && this.ad_inter.onError(function () {}));
        }, r["showInter"] = function () {
          this.ad_inter && this.ad_inter["show"]();
        }, r["initVideo"] = function (t) {
          var n;
          (n = this["platform"]()) && n.createRewardedVideoAd && t.ad_video_id && null == this.ad_video && (Log("ad_video_id: " + t.ad_video_id), this.ad_video = n.createRewardedVideoAd(function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t).adUnitId = 0, n.success = 0, n.fail = 0, n.complete = 0, n;
            }["apply"]())["adUnitId"] = t["ad_video_id"], n["success"] = function (t) {}, n["fail"] = function (t, n) {}, n["complete"] = function () {}, n;
          }["apply"]()), this.ad_video["onLoad"](function () {}), this.ad_video["onError"](function (t) {
            Error_2("load ad error:" + JSON["stringify"](t));
          }), this.ad_video["load"]());
        }, r["showVideo"] = function (t, n, r) {
          var e;
          if (e = this, !this.ad_video) return n && n("广告未初始化");
          this.ad_video.offClose && this.ad_video.offClose(), this.ad_video && this.ad_video["onClose"](function (r) {
            return e.ad_video.offClose && e.ad_video.offClose(), r && r["isEnded"] || void 0 === r ? t && t("激励奖励已发放") : n && n("视频播放中断");
          }), this.ad_video["offError"](), this.ad_video["onError"](function (t) {
            e.ad_video["onLoad"](function () {
              e["ad_video"]["show"]();
            }), e.ad_video["offError"](), r && r["ins"]["show"]("广告展示失败", function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
            }["apply"]());
          }), this.ad_video["show"](), this.ad_video["load"]();
        }, r["showToast"] = function (t) {
          var n, r, i;
          r = t["title"], t["icon"], i = t["duration"], (n = this["platform"]()) && n.showToast && n.showToast(function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "content", 0), Pu(t, "duration", 0), (n = t).content = 0, n.duration = 0, n;
            }["apply"]())["content"] = r, t["duration"] = i || 2000, t;
          }["apply"]());
        }, r["getRank"] = function () {}, r["setRank"] = function (t) {}, r["onSubscribe"] = function () {}, a;
      }(AdPlatformBase)), cclegacy._RF["pop"]();
    }, c;
  }["bind"](this)["apply"]();
});