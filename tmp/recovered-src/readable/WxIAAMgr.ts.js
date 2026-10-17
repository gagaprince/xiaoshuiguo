(function (t) {
  var createClass, asyncToGenerator, cclegacy, SDK, Log, Error_2;
  return function () {
    var s, o;
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s).setters = [function (t) {
      createClass = t["createClass"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"];
    }, function (t) {
      SDK = t["SDK"];
    }, function (t) {
      Log = t["Log"], Error_2 = t["Error"];
    }], o.execute = function () {
      var s;
      cclegacy._RF["push"]({}, "b200bhH7ttKCKqiSzuzk238", "WxIAAMgr", void 0), s = t("PropDes", function (t) {
        return t["none"] = rn, t["eliminate"] = "消除", t["shuffle"] = "打乱", t["resurrection"] = "复活", t["unlock"] = "空位", t["unlockAll"] = "解锁所有墙", t["unlockSingle"] = "解锁一个墙", t["eliminateAll"] = "消除多组水果", t;
      }({})), t("default", function () {
        var t, i;
        return (t = (i = function () {
          this["CryptoJS"] = window["Crypto"], this["baseUrl"] = "https://api.devourad.com/", this["isNewUser"] = !1, this["sdk"] = void 0, this["isUse"] = !0, this["_openId"] = "", this["regressionTime"] = 0, this["_dayAdNumDatas"] = [], this["gameStartTime"] = 0, this["globalxz"] = null;
        })["prototype"])["onReportFail"] = function (t) {}, t["init"] = function (t) {
          if (this.globalxz = t, window["wx"] && this.globalxz["info"]["isWxIAAReport"]) {
            var c;
            this["_dayAdNumDatas"] = [], this.isUse = !0;
            try {
              this.sdk = new SDK(function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "user_action_set_id", 0), Pu(t, "secret_key", 0), Pu(t, "appid", 0), Pu(t, "on_report_fail", 0), (n = t).user_action_set_id = 0, n.secret_key = 0, n.appid = 0, n.on_report_fail = 0, n;
                }["apply"]()).user_action_set_id = this.globalxz.info.user_action_set_id, t.secret_key = this.globalxz.info.secret_key, t.appid = this.globalxz.appid, t["on_report_fail"] = this["onReportFail"]["bind"](this), t;
              }["bind"](this)["apply"]()), Log("✨IAA_SDK初始化成功");
            } catch (t) {}
            c = this.sdk && this.sdk["getInitResult"](), !this.sdk || c && !c["inited"] ? this.isUse = !1 : this["onAppStart"]();
          } else this.isUse = !1;
        }, t["setOpenId"] = function (t) {
          var n;
          this["isUse"] && (this._openId = t, n = this["sdk"]["setOpenId"](this._openId), this["debugReportResults"]("设置openId", n), this["getStrategy"]());
        }, t["checkLogin"] = function (t) {
          var n;
          this["isUse"] && (this.isNewUser = 1 == (null == t || null == (n = t["data"]) ? void 0 : n["is_new_user"]), Log("✨登录成功，openid：", this["_openId"]), this.isNewUser ? this["sdk"]["onRegister"]() : this["onReActive"](7));
        }, t["getTimestamp"] = function () {
          return Math["floor"](Date["now"]() / 1000);
        }, t["newSign"] = function (t) {
          var n, r;
          return void 0 === t && (t = 0), !this["isUse"] || this._openId["length"] <= 0 ? "" : (0 === t && (t = this["getTimestamp"]()), r = this._openId + this.globalxz["appid"] + this.globalxz["appKey"] + t, n = this.CryptoJS.MD5(r).toString(), this.CryptoJS.MD5(n).toString());
        }, t["post"] = function (t, n) {
          return new Promise(function (r) {
            var i;
            (i = new XMLHttpRequest())["onreadystatechange"] = function () {
              if (4 === i["readyState"]) if (200 === i["status"]) try {
                var n;
                n = JSON["parse"](i["responseText"]), r(n);
              } catch (t) {
                r(null);
              } else r(null);
            }, i["onerror"] = function (t) {
              r(null);
            }, i["ontimeout"] = function (t) {
              r(null);
            }, i["open"]("POST", t), i["setRequestHeader"]("Content-Type", "application/json"), i["send"](JSON["stringify"](n));
          });
        }, t["onReActive"] = function (t) {
          this.isUse && (this["_openId"]["length"] <= 0 || this.isUse && this["checkUserActivityAndSetLevelData"](t));
        }, t["checkUserActivityAndSetLevelData"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, i, e, s, o, c, f, h, v, l, b, d, k, m, p, g, y;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return i = (r = to)[2], e = r[3], s = r[5], o = r[7], c = r[10][28], f = r[3][0], h = r[2][12], v = r[12][39], d = this[c](), l = function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "timestamp", 0), Pu(t, "openid", 0), (n = t).appid = 0, n.sign = 0, n.timestamp = 0, n.openid = 0, n;
                    }["apply"]()).appid = this["globalxz"].appid, t["sign"] = this["newSign"](d), t["timestamp"] = d, t["openid"] = this["_openId"], t;
                  }[i[3]](this)[f](), k = this[s[200]] + r[21][134], t.next = 6, this[i[141]](k, l);
                case 6:
                  if (!(b = t.sent) || 1 !== b[i[11]]) {
                    t.next = 22;
                    break;
                  }
                  if (t.prev = 8, (m = b[h]) && m[h]) {
                    t.next = 12;
                    break;
                  }
                  return t.abrupt("return", void Error_2(s[277], b));
                case 12:
                  g = JSON[e[37]](m[h]), this[v] = null != (p = g[v]) ? p : this[c](), y = Math[e[3]]((d - this[v]) / 86400), Log(o[302], y), y >= n && (Log(r[6][302] + n + r[17][51]), this[r[1][9]][e[27]](o[228], function () {
                    var t;
                    return (t = function () {
                      var t;
                      return (t = Pu({}, "backFlowDay", 0)).backFlowDay = 0, t;
                    }["apply"]())["backFlowDay"] = n, t;
                  }[f]())), this[v] = this[c](), t.next = 20;
                  break;
                case 18:
                  t.prev = 18, t.t0 = t.catch(8);
                case 20:
                  t.next = 23;
                  break;
                case 22:
                  Error_2(o[303], null == b ? void 0 : b[s[11]]);
                case 23:
                case "end":
                  return t.stop();
              }
            }, t, this, [[8, 18]]);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), t["onAppStart"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["onAppStart"](), this["debugReportResults"]("小游戏启动", t));
        }, t["LoadFinish"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("LOAD_FINISH", {}), this["debugReportResults"]("完成加载", t));
        }, t["onShareAppMessage"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("SHARE", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "target", 0)).target = 0, t;
            }["apply"]())["target"] = "APP_MESSAGE", t;
          }["apply"]()), this["debugReportResults"]("转发给朋友,主动分享", t));
        }, t["onShareTimeline"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("SHARE", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "target", 0)).target = 0, t;
            }["apply"]())["target"] = "TIME_LINE", t;
          }["apply"]()), this["debugReportResults"]("分享到朋友圈", t));
        }, t["onAddToFavorites"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("ADD_TO_WISHLIST", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "type", 0)).type = 0, t;
            }["apply"]())["type"] = "default", t;
          }["apply"]()), this["debugReportResults"]("添加收藏", t));
        }, t["onSubscribe"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("SUBSCRIBE", {}), this["debugReportResults"]("订阅", t));
        }, t["TutorialStart"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("TUTORIAL_START", {}), this["debugReportResults"]("新手引导开始", t));
        }, t["Tutorial_Finish"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["onTutorialFinish"](), this["debugReportResults"]("完成新手引导", t));
        }, t["Level_Enter"] = function (t) {
          var n;
          (this["CloseDayAdShowNum"](), this["gameStartTime"] = this["getTimestamp"](), this["isUse"]) && (n = this["sdk"]["track"]("LEVEL_ENTER", function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "enter_level_id", 0), Pu(t, "level_id", 0), (n = t).enter_level_id = 0, n.level_id = 0, n;
            }["apply"]())["enter_level_id"] = 0, n["level_id"] = t, n;
          }["apply"]()), this["debugReportResults"]("进入关卡", n));
        }, t["Level_Exit"] = function (t, n) {
          var r, i, e;
          (i = this["getLvAdInfo"](this["_dayAdNumDatas"]), r = this["getTimestamp"]() - this["gameStartTime"], Log("✨IAA_SDK  中途退出", t, r, n, i["ad_cnt"], i["items"]), this["isUse"]) && (e = this["sdk"]["track"]("LEVEL_EXIT", function () {
            var e;
            return (e = function () {
              var t, n;
              return Pu(t = {}, "ad_cnt", 0), Pu(t, "duration", 0), Pu(t, "enter_level_id", 0), Pu(t, "level_id", 0), Pu(t, "items", 0), (n = t).ad_cnt = 0, n.duration = 0, n.enter_level_id = 0, n.level_id = 0, n.items = 0, n;
            }["apply"]()).ad_cnt = i.ad_cnt, e["duration"] = r, e["enter_level_id"] = n, e["level_id"] = t, e.items = i.items, e;
          }["apply"]()), this["debugReportResults"]("中途退出", e), this["CloseDayAdShowNum"]());
        }, t["Level_Lose"] = function (t, n) {
          var r, i, e;
          (i = this["getLvAdInfo"](this["_dayAdNumDatas"]), r = this["getTimestamp"]() - this["gameStartTime"], Log("✨IAA_SDK  关卡失败", t, r, n, i["ad_cnt"], i["items"]), this["isUse"]) && (e = this["sdk"]["track"]("LEVEL_LOSE", function () {
            var e;
            return (e = function () {
              var t, n;
              return Pu(t = {}, "ad_cnt", 0), Pu(t, "duration", 0), Pu(t, "enter_level_id", 0), Pu(t, "items", 0), Pu(t, "level_id", 0), (n = t).ad_cnt = 0, n.duration = 0, n.enter_level_id = 0, n.items = 0, n.level_id = 0, n;
            }["apply"]()).ad_cnt = i.ad_cnt, e["duration"] = r, e["enter_level_id"] = n, e.items = i.items, e["level_id"] = t, e;
          }["apply"]()), this["debugReportResults"]("关卡失败", e), this["CloseDayAdShowNum"]());
        }, t["Level_Pass"] = function (t) {
          var n, r, i;
          (r = this["getLvAdInfo"](this["_dayAdNumDatas"]), n = this["getTimestamp"]() - this["gameStartTime"], Log("✨IAA_SDK  关卡胜利", t, n, r["ad_cnt"], r["items"]), this["isUse"]) && (i = this["sdk"]["track"]("LEVEL_PASS", function () {
            var i;
            return (i = function () {
              var t, n;
              return Pu(t = {}, "ad_cnt", 0), Pu(t, "duration", 0), Pu(t, "enter_level_id", 0), Pu(t, "level_id", 0), Pu(t, "items", 0), (n = t).ad_cnt = 0, n.duration = 0, n.enter_level_id = 0, n.level_id = 0, n.items = 0, n;
            }["apply"]()).ad_cnt = r.ad_cnt, i["duration"] = n, i["enter_level_id"] = 1, i["level_id"] = t, i.items = r.items, i;
          }["apply"]()), this["debugReportResults"]("关卡胜利", i), this["CloseDayAdShowNum"]());
        }, t["HomePage_View"] = function () {
          var t;
          (this["gameStartTime"] = this["getTimestamp"](), this["isUse"]) && (t = this["sdk"]["track"]("HOMEPAGE_VIEW", {}), this["debugReportResults"]("外围周边预览", t));
        }, t["RankList_Enter"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("RANKLIST_ENTER", {}), this["debugReportResults"]("点击排行榜", t));
        }, t["GameClub_Enter"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("GAMECLUB_ENTER", {}), this["debugReportResults"]("点击进入游戏圈", t));
        }, t["Theme_Click"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("THEME_CLICK", {}), this["debugReportResults"]("点击进入主题", t));
        }, t["Get_Item"] = function (t) {
          var n;
          this["isUse"] && (n = this["sdk"]["track"]("GET_ITEM", function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "item_source", 0)).item_source = 0, t;
            }["apply"]())["item_source"] = t, n;
          }["apply"]()), this["debugReportResults"]("获得道具", n));
        }, t["Use_Item"] = function (t) {
          var n;
          this["isUse"] && (n = this["sdk"]["track"]("USE_ITEM", function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "item_source", 0)).item_source = 0, t;
            }["apply"]())["item_source"] = t, n;
          }["apply"]()), this["debugReportResults"]("使用道具", n));
        }, t["Ad_Placement_show"] = function (t) {
          var n, r;
          this["isUse"] && this.sdk && (r = this["getAdSoureAd"](t), n = this.sdk["track"]("AD_PLACEMENT_SHOW", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "ad_placement_name", 0)).ad_placement_name = 0, t;
            }["apply"]())["ad_placement_name"] = r, t;
          }["apply"]()), this["debugReportResults"]("激励视频点位在界面中渲染完毕", n));
        }, t["Ad_Placement_Click"] = function (t) {
          var n, r;
          this["isUse"] && this.sdk && (n = this["getAdSoureAd"](t), r = this.sdk["track"]("AD_CLICK", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "ad_placement_name", 0)).ad_placement_name = 0, t;
            }["apply"]())["ad_placement_name"] = n, t;
          }["apply"]()), this["debugReportResults"]("点击激励视频", r));
        }, t["Video_Finish"] = function (t) {
          var n, r;
          this["isUse"] && (this["AddDayAdShowNum"](t, 1), n = this["getAdSoureAd"](t), r = this["sdk"]["track"]("AD_VIDEO_FINISH", function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "ad_placement_name", 0)).ad_placement_name = 0, t;
            }["apply"]())["ad_placement_name"] = n, t;
          }["apply"]()), this["debugReportResults"]("激励视频完整播放完毕", r));
        }, t["Ad_Impression"] = function (t) {
          var n;
          this["isUse"] && this.sdk && (n = this.sdk["track"]("AD_IMPRESSION", function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "ad_type", 0)).ad_type = 0, t;
            }["apply"]())["ad_type"] = t, n;
          }["apply"]()), this["debugReportResults"]("广告曝光", n));
        }, t["Gift_Get"] = function () {
          var t;
          this["isUse"] && (t = this["sdk"]["track"]("GIFT_GET", {}), this["debugReportResults"]("玩家点击礼包", t));
        }, t["debugReportResults"] = function (t, n) {}, t["getLvAdInfo"] = function (t) {
          var n;
          for (var u in n = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "ad_cnt", 0), Pu(t, "items", 0), (n = t).ad_cnt = 0, n.items = 0, n;
            }["apply"]())["ad_cnt"] = 0, t["items"] = [], t;
          }.apply(), t) {
            var s, o;
            if (s = t[u]) n["ad_cnt"] += s["showEdNum"], o = function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "item_type", 0), Pu(t, "item_num", 0), (n = t).item_type = 0, n.item_num = 0, n;
              }["apply"]())["item_type"] = this["getPropType"](u), t["item_num"] = s["showEdNum"], t;
            }["bind"](this).apply(), n["items"]["push"](JSON["stringify"](o));
          }
          return n;
        }, t["getPropType"] = function (t) {
          var n;
          switch (n = 46, t) {
            case s["eliminate"]:
              n = 35;
              break;
            case s["shuffle"]:
              n = 12;
              break;
            case s["unlock"]:
              n = 29;
              break;
            case s["resurrection"]:
              n = 11;
              break;
            case s["unlockAll"]:
              n = 44;
              break;
            case s["eliminateAll"]:
              n = 40;
              break;
            default:
              n = 46;
          }
          return n;
        }, t["getAdSoureAd"] = function (t) {
          var n;
          switch (n = 68, t) {
            case s["eliminate"]:
              n = 45;
              break;
            case s["shuffle"]:
              n = 30;
              break;
            case s["unlock"]:
              n = 63;
              break;
            case s["resurrection"]:
              n = 1;
              break;
            case s["unlockAll"]:
              n = 54;
              break;
            case s["eliminateAll"]:
              n = 50;
              break;
            default:
              n = 68;
          }
          return n;
        }, t["GetdayAdNumDatas"] = function (t) {
          if (this["isUse"]) return this._dayAdNumDatas[t] || (this._dayAdNumDatas[t] = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "clickNum", 0), Pu(t, "showEdNum", 0), (n = t).clickNum = 0, n.showEdNum = 0, n;
            }["apply"]())["clickNum"] = 0, t["showEdNum"] = 0, t;
          }["apply"]()), this._dayAdNumDatas[t];
        }, t["AddDayAdClickNum"] = function (t, n) {
          this["isUse"] && (this["GetdayAdNumDatas"](t)["clickNum"] += n);
        }, t["AddDayAdShowNum"] = function (t, n) {
          this["isUse"] && (this["GetdayAdNumDatas"](t)["showEdNum"] += n);
        }, t["CloseDayAdShowNum"] = function () {
          this["isUse"] && (this["_dayAdNumDatas"] = []);
        }, t["onStrategyCallback"] = function (t) {
          0 == t["code"] && t["data"]["result"]["tutorial_result"];
        }, t["getStrategy"] = function () {
          this["isUse"] && this["sdk"]["getStrategy"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "app_id", 0), Pu(t, "openid", 0), Pu(t, "mode", 0), (n = t).app_id = 0, n.openid = 0, n.mode = 0, n;
            }["apply"]())["app_id"] = this["globalxz"]["appid"], t["openid"] = this["_openId"], t["mode"] = "tutorial", t;
          }["bind"](this)["apply"](), this["onStrategyCallback"]);
        }, createClass(i, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "inst", t["get"] = function () {
            return this._inst || (this._inst = new i()), this._inst;
          }, t;
        }["bind"](this)["apply"]()]), i;
      }())["_inst"] = void 0, cclegacy._RF["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});