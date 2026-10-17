(function (t) {
  var r = 0;
  r += 1, Rs && (r += 0);
  var createClass, asyncToGenerator, cclegacy, sys, Sprite, color, MD5, ENUM_STATUS, GbzTTAddtableLayer, GbzTTcblLayer, gameMsg, globalxz, reporter, HwPlatform, WxTTPlatform, SOUtil, GbzAudioManager, GbzDataManager, GbzResManager, ResType, GbzToastManager, WxIAAMgr, Log;
  return function () {
    var n, x;
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (x = n).setters = [function (t) {
      createClass = t["createClass"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"], Sprite = t["Sprite"], color = t["color"];
    }, function (t) {
      MD5 = t["default"];
    }, function (t) {
      ENUM_STATUS = t["ENUM_STATUS"];
    }, function (t) {
      GbzTTAddtableLayer = t["default"];
    }, function (t) {
      GbzTTcblLayer = t["default"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      globalxz = t["globalxz"];
    }, function (t) {
      reporter = t["reporter"];
    }, function (t) {
      HwPlatform = t["HwPlatform"];
    }, function (t) {
      WxTTPlatform = t["WxTTPlatform"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      GbzToastManager = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], x.execute = function () {
      var n;
      cclegacy._RF["push"]({}, "ecfc40/aCVE6JD1sVRWfB2Y", "GbzSdkManager", void 0), n = t("IHttpMethod", function (t) {
        return t.GET = "GET", t.POST = "POST", t;
      }({})), t("default", function () {
        var t, a;
        return 1, (a = function () {
          this["platformApi"] = void 0, this["CryptoJS"] = window["Crypto"], this["share_title"] = "熬夜消水果，过不了第二关，谁来帮帮我呀？", this["freead"] = !1, this["_isOpenTest"] = !0, this["_adAllNum"] = 0, this["dyIsNew"] = !1, this["opAdTicket"] = !1, this["adTicketMaxLv"] = 3, this["navigateMiniOpen"] = !1, this["navigateAppid"] = "", this["navigateAppName"] = "", this["navigateAppIconUrl"] = "", this["navigateAppPath"] = "", this["levelShare"] = 0, this["uiVibrateOpen"] = !0, this["vibrateLastTime"] = void 0, this["vibrateCooldown"] = 30, this["MAX_DYWX_RETRY"] = 3;
        })["getIns"] = function () {
          return null === this._ins && (this._ins = new a()), this._ins;
        }, (t = a["prototype"])["platform"] = function () {
          return this.platformApi || (sys.platform == sys.Platform["WECHAT_GAME"] || sys.platform == sys.Platform["BYTEDANCE_MINI_GAME"] ? (this.platformApi = new WxTTPlatform(), Log("new platformApi", this.platformApi)) : sys.platform == sys.Platform["HUAWEI_QUICK_GAME"] && (this.platformApi = new HwPlatform(), Log("new platformApi", this.platformApi))), this.platformApi;
        }, t["getPlatform"] = function () {
          if (null != this.platformApi) return this.platformApi["platform"]();
        }, t["getServerNavigateCfg"] = function () {
          var t, r;
          r = this, t = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), (n = t).appid = 0, n.sign = 0, n;
            }["apply"]()).appid = globalxz.appid, t.sign = globalxz.sign, t;
          }["apply"](), this["httpRequest"]("https://api.devourad.com/Gameinfo/getBindGame", t, n["GET"], function (t) {
            1 == t["code"] && (r["setNavigateData"](t["data"]), Log("=======视频转分享" + r["levelShare"]));
          }, function (t) {});
        }, t["setNavigateData"] = function (t) {
          var n;
          t.game_list && t.game_list["length"] > 0 && (this["navigateMiniOpen"] = !0, n = t.game_list[0], this["navigateAppid"] = n["appid"], this["navigateAppName"] = n["game_name"], this["navigateAppIconUrl"] = n["game_icon"], this["navigateAppPath"] = n["game_path"]);
        }, t["openCustomerServiceConversation"] = function () {
          null != this.platformApi && this.platformApi["openCustomerServiceConversation"]();
        }, t["showRecommend"] = function () {
          null != this.platformApi && this.platformApi["showRecommend"]();
        }, t["del_level_data"] = function () {}, t["get_level_data"] = function (t) {
          var r, i, e;
          (r = this, void 0 === t && (t = 0), !sys["isBrowser"] && globalxz["isServerArchive"]) && (e = Math["floor"](Date["now"]() / 1000), i = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "timestamp", 0), Pu(t, "openid", 0), (n = t).appid = 0, n.sign = 0, n.timestamp = 0, n.openid = 0, n;
            }["apply"]()).appid = globalxz.appid, t["sign"] = this["NewSign"](e), t["timestamp"] = e, t["openid"] = a["ins"]["platform"]()["openID"], t;
          }["bind"](this)["apply"](), this["httpRequest"]("https://api.devourad.com/WechatGameFile/get_data", i, n["POST"], function (n) {
            var i, e;
            n && 1 == n["code"] ? (e = n.data) && e.data ? (e = JSON["parse"](e.data), GbzDataManager.ins.contrastServerLevelDate(e), r._adAllNum = null != (i = e["adAllNum"]) ? i : 0) : (GbzDataManager.ins.contrastServerLevelDate(null), r._adAllNum = 0) : r["retryGetLevelData"](t, 3, 1000);
          }, function (n) {
            r["retryGetLevelData"](t, 3, 1000);
          }));
        }, t["retryGetLevelData"] = function (t, n, r) {
          var i;
          i = this, t >= n || setTimeout(function () {
            i["get_level_data"](t + 1);
          }, r);
        }, t["set_level_data"] = function (t, r) {
          var i, e;
          !sys["isBrowser"] && globalxz["isServerArchive"] && (i = Math["floor"](Date["now"]() / 1000), e = function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "timestamp", 0), Pu(t, "openid", 0), Pu(t, "data", 0), Pu(t, "level_id", 0), (n = t).appid = 0, n.sign = 0, n.timestamp = 0, n.openid = 0, n.data = 0, n.level_id = 0, n;
            }["apply"]()).appid = globalxz.appid, n["sign"] = this["NewSign"](i), n["timestamp"] = i, n["openid"] = a["ins"]["platform"]()["openID"], n["data"] = JSON["stringify"](t), n["level_id"] = r, n;
          }["bind"](this)["apply"](), this["httpRequest"]("https://api.devourad.com/WechatGameFile/set_data", e, n["POST"], function (t) {
            t["code"];
          }, function (t) {}));
        }, t["ttrequestFeedSubscribe"] = function (t) {
          null != this.platformApi && this.platformApi["requestFeedSubscribe"](t);
        }, t["ttcheckFeedSubscribeStatus"] = function (t) {
          null != this.platformApi && this.platformApi["checkFeedSubscribeStatus"](t);
        }, t["ttcanluse"] = function (t) {
          null != this["platformApi"] && (a.ins.getPlatform() == window["tt"] ? t.active = a.ins.getPlatform()["canIUse"]("request") : t.active = !1);
        }, t["getLaunchOptionsSync"] = function () {
          null != this.platformApi && this.platformApi["getLaunchOptionsSync"]();
        }, t["addShortcut"] = function (t) {
          null != this["platformApi"] && a.ins.getPlatform() == window["tt"] && a.ins.getPlatform()["addShortcut"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t).success = 0, n.fail = 0, n;
            }["apply"]())["success"] = function () {
              t["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "secondary", "获得奖励"), GbzTTAddtableLayer["isOnAdd"] = !0;
            }, n["fail"] = function (t) {
              Log("添加桌面失败", t["errMsg"]);
            }, n;
          }["apply"]());
        }, t["checkShortcut"] = function (t) {
          this["platformApi"] && a.ins.getPlatform() == window["tt"] && a.ins.getPlatform()["checkShortcut"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t).success = 0, n.fail = 0, n;
            }["apply"]())["success"] = function (n) {
              Log("检查快捷方式", n.status.exist), GbzTTAddtableLayer["isOnAdd"] = n.status.exist, n.status.exist && (t["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "secondary", "获得奖励"));
            }, n["fail"] = function (t) {
              Log("检查快捷方式失败", t["errMsg"]);
            }, n;
          }["apply"]());
        }, t["navigateToScene"] = function () {
          null != this["platformApi"] && (a.ins.getPlatform() != window["tt"] || a.ins.getPlatform()["navigateToScene"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "scene", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).scene = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["scene"] = "sidebar", t["success"] = function (t) {}, t["fail"] = function (t) {}, t;
          }["apply"]()));
        }, t["onShow"] = function () {
          null != this["platformApi"] && a.ins.getPlatform() == window["tt"] && a.ins.getPlatform()["onShow"](function (t) {
            Log("侧边栏进来" + GbzDataManager.ins.onGetTTSideBarRwd), GbzDataManager.ins.onGetTTSideBarRwd || (GbzTTcblLayer["isOnShow"] = !0, GbzTTcblLayer["changeImg"](!0));
          });
        }, t["ttcheckScene"] = function (t) {
          null != this["platformApi"] ? a.ins.getPlatform() == window["tt"] && a.ins.getPlatform()["checkScene"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "scene", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).scene = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["scene"] = "sidebar", n["success"] = function (n) {
              Log("check scene success: ", n.isExist), t["active"] = n.isExist;
            }, n["fail"] = function (n) {
              t["active"] = n["isExist"];
            }, n;
          }["apply"]()) : t["active"] = !0;
        }, t["init"] = function () {
          this.platformApi && this.platformApi["init"](globalxz);
        }, t["getAccountInfoSync"] = function () {
          return this.platformApi ? this.platformApi["getAccountInfoSync"]() : null;
        }, t["vibrateShort"] = function (t) {
          var n;
          GbzDataManager["ins"]["game_vibrate"] && ((n = Date["now"]()) - this.vibrateLastTime < this["vibrateCooldown"] || (this.vibrateLastTime = n, this.platformApi && (null == t && (t = function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "type", 0)).type = 0, t;
            }["apply"]())["type"] = "medium", t;
          }["apply"]()), this.platformApi["vibrateShort"](t))));
        }, t["activeShare"] = function (t, n) {
          null != this.platformApi && this.platformApi["activeShare"](t, n);
        }, t["passiveShare"] = function (t) {
          null != this.platformApi && this.platformApi["passiveShare"](t);
        }, t["initAudioEnd"] = function () {
          this["platformApi"]["initAudioEnd"](GbzAudioManager);
        }, t["initBanner"] = function () {
          this["platformApi"]["initBanner"](globalxz);
        }, t["showBanner"] = function (t) {
          null != this.platformApi && this.platformApi["showBanner"](t);
        }, t["initInter"] = function () {
          this["platformApi"]["initInter"](globalxz);
        }, t["showInter"] = function () {
          null != this.platformApi && this.platformApi["showInter"]();
        }, t["initVideo"] = function () {
          this["platformApi"]["initVideo"](globalxz);
        }, t["scande"] = function (t) {
          null != this.platformApi && this.platformApi["scanCode"](t);
        }, t["showVideo"] = function (t, n, r, i, e) {
          var s, c;
          if (s = this, void 0 === e && (e = !1), c = function () {
            return s.platformApi ? s.platformApi && s.platformApi["freead"] ? t && t("模拟成功，激励奖励已发放") : void s.platformApi["showVideo"](t, function () {
              GbzDataManager.ins["status"] = ENUM_STATUS["RUN"], GbzAudioManager.ins["resumeBGM"](), n && n();
            }, GbzToastManager, r, i) : (WxIAAMgr.inst["Ad_Impression"](1), WxIAAMgr.inst["Ad_Placement_show"](r), WxIAAMgr.inst["Ad_Placement_Click"](r), WxIAAMgr.inst["Video_Finish"](r), WxIAAMgr.inst["AddDayAdClickNum"](r, 1), WxIAAMgr.inst["AddDayAdShowNum"](r, 1), GbzToastManager && GbzToastManager["ins"]["show"]("模拟成功，激励奖励已发放", function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
            }["apply"]()), t && t("模拟成功，激励奖励已发放"));
          }, sys["platform"] == sys["Platform"]["WECHAT_GAME"]) {
            if (GbzDataManager.ins["isVideo2Share"]() && e) {
              if (GbzDataManager.ins["AddShareNum"](), SOUtil["emit"](gameMsg["shareClick"]), this.platformApi && this.platformApi["freead"]) return t && t("模拟成功，激励奖励已发放");
              a.ins["activeShare"](null, function () {
                a["ins"]["showToast"](function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "title", 0), Pu(t, "icon", 0), Pu(t, "duration", 0), (n = t).title = 0, n.icon = 0, n.duration = 0, n;
                  }["apply"]())["title"] = "分享成功", t["icon"] = "success", t["duration"] = 1000, t;
                }["apply"]()), t();
              });
            } else c();
          } else c();
        }, t["loginFeedback"] = function (t, n) {
          null != this.platformApi && this.platformApi["loginFeedback"](t, n);
        }, t["isTest"] = function () {
          return !!(!this.platformApi || this.platformApi && this.platformApi["freead"]);
        }, t["initCustomRow"] = function () {
          this["platformApi"]["initCustomRow"]();
        }, t["showCustomRow"] = function (t) {
          void 0 === t && (t = !0), null != this.platformApi && this.platformApi["showCustomRow"](t);
        }, t["initCustomCol"] = function () {
          this["platformApi"]["initCustomCol"]();
        }, t["showCustomCol"] = function (t) {
          void 0 === t && (t = !0), null != this.platformApi && this.platformApi["showCustomCol"](t);
        }, t["showToast"] = function (t) {
          var n, r, i;
          r = t["title"], n = t["icon"], i = t["duration"], this["platformApi"]["showToast"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "title", 0), Pu(t, "icon", 0), Pu(t, "duration", 0), (n = t).title = 0, n.icon = 0, n.duration = 0, n;
            }["apply"]())["title"] = r, t["icon"] = n, t["duration"] = i, t;
          }["apply"]());
        }, t["getRank"] = function () {
          null != this.platformApi && this.platformApi["getRank"]();
        }, t["setRank"] = function (t) {
          null != this.platformApi && this.platformApi["setRank"](t);
        }, t["onSubscribe"] = function () {
          this["platformApi"]["onSubscribe"]();
        }, t["triggerGC"] = function () {
          null != this.platformApi && this.platformApi["triggerGC"]();
        }, t["VideoType"] = function () {
          return 1;
        }, t["httpRequest"] = function (t, r, i, e, a) {
          var u, s;
          if (u = function (t) {
            var n;
            t && (n = JSON["parse"](t), e && e(n));
          }, (s = new XMLHttpRequest())["onreadystatechange"] = function () {
            4 == s.readyState && s.status >= 200 && s.status < 400 ? u && u(s.responseText) : 4 == s.readyState && (s.status < 200 || s.status >= 400) && a && a(s.responseText);
          }, i == n.GET && r) {
            var d;
            for (var k in d = ei, r) t += "" + d + k + mt + encodeURIComponent(r[k]), d = ai;
            s.open("GET", t, !0), s.send();
          } else i == n.POST && (s.open("POST", t, !0), s["setRequestHeader"]("Content-Type", "application/json"), s.send(JSON["stringify"](r)));
        }, t["showGameClubButton"] = function () {
          null != this.platformApi && a["ins"]["getPlatform"]() != window["tt"] && this.platformApi["showGameClubButton"]();
        }, t["hideGameClubButton"] = function () {
          null != this.platformApi && this.platformApi["hideGameClubButton"]();
        }, t["createGameClubButton"] = function (t) {
          null != this.platformApi && a["ins"]["getPlatform"]() != window["tt"] && this.platformApi["createGameClubButton"](t);
        }, t["NewSign"] = function (t) {
          var n, r, i;
          return i = globalxz["appKey"], n = this["platform"]()["openID"] + globalxz["appid"] + i + (t || this["timestamp"]()), r = this.CryptoJS.MD5(n).toString(), this.CryptoJS.MD5(r).toString();
        }, t["timestamp"] = function () {
          var t;
          return t = new Date()["getTime"](), Math["round"](t / 1000);
        }, t["signParam"] = function (t) {
          return MD5["hex_md5"](t);
        }, t["delay"] = function (t) {
          return new Promise(function (n) {
            return setTimeout(n, t);
          });
        }, t["dyWxGetUserLabel"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n, r, i) {
            var e, u, s, o, c, f;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (u = (e = to)[3], s = e[0][7], o = e[3][0], c = this, void 0 === r && (r = !1), void 0 === i && (i = !1), n[e[8][73]] >= this[e[12][105]]) {
                    t.next = 9;
                    break;
                  }
                  if (f = function () {
                    c["wxGetUserLabel"](n["_gift_scene"], n["_gift_name"], n["_gift_value"], n["_gift_value_success"], function (t) {
                      c["dyConversion"](n["_event_type"], t["encryptedData"], t["iv"], n);
                    });
                  }, t.t0 = r, t.t0) {
                    t.next = 8;
                    break;
                  }
                  return t.next = 8, this[u[26]](30000);
                case 8:
                  i ? window[s][u[65]](function () {
                    var t;
                    return (t = function () {
                      var t;
                      return (t = Pu({}, "success", 0)).success = 0, t;
                    }["apply"]())["success"] = function (t) {
                      t.code ? (a["ins"]["platform"]().code = t.code, f()) : Log("登录失败！" + t["errMsg"]);
                    }, t;
                  }[o]()) : window[s][e[10][203]](function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t).success = 0, n.fail = 0, n;
                    }["apply"]())["success"] = function () {
                      f();
                    }, t["fail"] = function () {
                      window["wx"]["login"](function () {
                        var t;
                        return (t = function () {
                          var t;
                          return (t = function () {
                            var t;
                            return (t = Pu({}, "success", 0)).success = 0, t;
                          }["apply"]())["success"] = 0, t;
                        }["apply"]())["success"] = function (t) {
                          t.code ? (a["ins"]["platform"]().code = t.code, f()) : Log("登录失败！" + t["errMsg"]);
                        }, t;
                      }["apply"]());
                    }, t;
                  }[o]());
                case 9:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n, r, i) {
            var e;
            return e = arguments, t["apply"](this, e);
          };
        }(), t["wxGetUserLabel"] = function (t, n, r, i, e) {}, t["isValidValue"] = function (t) {
          return null != t;
        }, t["dyConversion"] = function (t, i, e, u) {
          if (Log("判定抖音归因 : ", this.platform().clickid), this.isValidValue(this.platform().clickid) && this.isValidValue(this.platform().query) && this.isValidValue(this.platform().query["project_id"])) {
            var l, k;
            for (var m in Rs && 2, l = function () {
              for (var n, M = 0, S = r; M < 13;) switch (++M, S) {
                case 9:
                  n["event_type"] = t, S = 4;
                  break;
                case 11:
                  n["encryptedData"] = i, S = 12;
                  break;
                case 2:
                  n.appid = globalxz.appid, S = 3;
                  break;
                case 0:
                  n["jl_channel"] = "dy", S = 7;
                  break;
                case 5:
                  n["ipu"] = this["adAllNum"], S = 6;
                  break;
                case 7:
                  return n;
                case 10:
                  n["openid"] = a["ins"].platform()["openID"], S = 5;
                  break;
                case 8:
                  n.code = this.platform().code, S = 10;
                  break;
                case 4:
                  n.clickid = this.platform().clickid, S = 11;
                  break;
                case 1:
                  n = function () {
                    for (var t, n, g = 0, y = 3; g < 13;) switch (++g, y) {
                      case 11:
                        n.sign = 0, y = 7;
                        break;
                      case 7:
                        n.code = 0, y = 8;
                        break;
                      case 4:
                        n.iv = 0, y = 1;
                        break;
                      case 12:
                        n.appid = 0, y = 11;
                        break;
                      case 0:
                        n.use_type = 0, y = 5;
                        break;
                      case 1:
                        n.jl_channel = 0, y = 9;
                        break;
                      case 3:
                        Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "code", 0), Pu(t, "openid", 0), Pu(t, "ipu", 0), Pu(t, "use_type", 0), Pu(t, "event_type", 0), Pu(t, "clickid", 0), Pu(t, "encryptedData", 0), Pu(t, "iv", 0), Pu(t, "jl_channel", 0), n = t, y = 12;
                        break;
                      case 9:
                        return n;
                      case 8:
                        n.openid = 0, y = 6;
                        break;
                      case 5:
                        n.event_type = 0, y = 2;
                        break;
                      case 2:
                        n.clickid = 0, y = 10;
                        break;
                      case 10:
                        n.encryptedData = 0, y = 4;
                        break;
                      case 6:
                        n.ipu = 0, y = 0;
                    }
                  }["apply"](), S = 2;
                  break;
                case 3:
                  n.sign = globalxz.sign, S = 8;
                  break;
                case 6:
                  n["use_type"] = reporter["userType"], S = 9;
                  break;
                case 12:
                  n["iv"] = e, S = 0;
              }
            }["bind"](this)["apply"](), this.platform().query) {
              var p;
              p = this.platform().query[m], l["jl_" + m] = p;
            }
            k = this, this["httpRequest"]("https://api.devourad.com/Wechat/dyConversion", l, n["POST"], function (t) {
              1 == t.code || -1 == t.code && u && (u["retryCount"] += 1, k["dyWxGetUserLabel"](u, !0, !0));
            }, function (t) {});
          }
        }, createClass(a, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "IS_OPEN_TEST", t["get"] = function () {
            return this["_isOpenTest"];
          }, t["set"] = function (t) {
            this["_isOpenTest"] = t;
          }, t;
        }.bind(this).apply(), function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t).key = 0, n.get = 0, n.set = 0, n;
          }["apply"]())["key"] = "adAllNum", t["get"] = function () {
            return this["_adAllNum"];
          }, t["set"] = function (t) {
            this["_adAllNum"] = Math["max"](0, t);
          }, t;
        }.bind(this).apply()], [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }.bind(this).apply()]), a;
      }())["_ins"] = null, cclegacy._RF["pop"]();
    }, x;
  }["bind"](this)["apply"]();
});