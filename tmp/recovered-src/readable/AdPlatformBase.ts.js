(function (t) {
  var cclegacy;
  return function () {
    var r, i;
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r).setters = [function (t) {
      cclegacy = t["cclegacy"];
    }], i.execute = function () {
      cclegacy._RF["push"]({}, "61e85oyla1M+rWVc0ob1xLa", "AdPlatformBase", void 0), t("AdPlatformBase", function () {
        var t, n;
        return (t = (n = function () {
          this["share_title"] = "熬夜消水果，过不了第二关，谁来帮帮我呀？", this["ad_video"] = null, this["ad_inter"] = null, this["ad_banner"] = null, this["ad_custom_row"] = null, this["ad_custom_col"] = null, this["ad_video_id"] = "", this["ad_inter_id"] = "", this["ad_banner_id"] = "", this["ad_custom_row_id"] = "", this["ad_custom_col_id"] = "", this["isShared"] = !1, this["shareTag"] = "", this["closeTime"] = 0, this["shareCall"] = null, this["freead"] = !1, this["IS_OPEN_TEST"] = !1, this["opAdTicket"] = !1, this["adTicketMaxLv"] = 3, this["navigateMiniOpen"] = !1, this["navigateAppid"] = "", this["navigateAppName"] = "", this["navigateAppIconUrl"] = "", this["navigateAppPath"] = "";
        })["prototype"])["activeShare"] = function (t, n) {
          var r;
          (r = this["platform"]()) ? (t = t || this["share_title"], r["shareAppMessage"](function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "title", 0)).title = 0, t;
            }["apply"]())["title"] = t, n;
          }["apply"]()), this["isShared"] = !0, this["shareTag"] = "keys", this["closeTime"] = new Date()["getTime"](), n && (this["shareCall"] = n)) : n && n();
        }, t["passiveShare"] = function (t) {
          var n;
          (n = this["platform"]()) && (n["showShareMenu"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t).success = 0, n.fail = 0, n;
            }["apply"]())["success"] = function () {}, t["fail"] = function () {}, t;
          }["apply"]()), t = t || this["share_title"], n["onShareAppMessage"](function () {
            return function () {
              var n;
              return (n = function () {
                var t;
                return (t = Pu({}, "title", 0)).title = 0, t;
              }["apply"]())["title"] = t, n;
            }["apply"]();
          }));
        }, t["showToast"] = function (t) {
          var n, r, i, e;
          e = t["title"], i = t["icon"], r = t["duration"], (n = this["platform"]()) && n["showToast"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "title", 0), Pu(t, "icon", 0), Pu(t, "duration", 0), (n = t).title = 0, n.icon = 0, n.duration = 0, n;
            }["apply"]())["title"] = e, t["icon"] = i, t["duration"] = r, t;
          }["apply"]());
        }, t["getRank"] = function () {
          var t;
          (t = this["platform"]()) && t["postMessage"](function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "event", 0)).event = 0, t;
            }["apply"]())["event"] = "getRank", t;
          }["apply"]());
        }, t["setRank"] = function (t) {
          var n;
          (n = this["platform"]()) && n["setUserCloudStorage"](function () {
            var n, r;
            return (r = function () {
              var t, n;
              return Pu(t = {}, "KVDataList", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).KVDataList = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["KVDataList"] = [(n = {}, Pu(n, "key", "score"), Pu(n, "value", t["toString"]()), n)], r["success"] = function () {}, r["fail"] = function () {}, r;
          }["apply"]());
        }, t["onSubscribe"] = function () {
          var t;
          (t = this["platform"]()) && t["requestSubscribeSystemMessage"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "msgTypeList", 0), Pu(t, "success", 0), Pu(t, "fail", 0), Pu(t, "complete", 0), (n = t).msgTypeList = 0, n.success = 0, n.fail = 0, n.complete = 0, n;
            }["apply"]())["msgTypeList"] = ["SYS_MSG_TYPE_INTERACTIVE", "SYS_MSG_TYPE_RANK"], t["success"] = function (t) {}, t["fail"] = function (t) {}, t["complete"] = function (t) {}, t;
          }["apply"]());
        }, t["triggerGC"] = function () {}, n;
      }()), cclegacy._RF["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});