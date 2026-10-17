(function (t) {
  var n = to,
    r = 0;
  r += 1, Rs && (r += 0);
  var i,
    e,
    a,
    u,
    s,
    o,
    c,
    f,
    h,
    v,
    l,
    b,
    d,
    k,
    m,
    p,
    g,
    y,
    w,
    _,
    M,
    S,
    A,
    C = 3;
  return function () {
    var n,
      x,
      T = to[5],
      L = "setters",
      I = "execute";
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (x = n)["setters"] = [function (t) {
      var n = to;
      i = t["createClass"], e = t["asyncToGenerator"];
    }, function (t) {
      var n = to;
      a = t["cclegacy"], u = t["sys"], s = t["Sprite"], o = t["color"];
    }, function (t) {
      c = t["default"];
    }, function (t) {
      f = t["ENUM_STATUS"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      v = t["default"];
    }, function (t) {
      l = t["gameMsg"];
    }, function (t) {
      b = t["globalxz"];
    }, function (t) {
      d = t["reporter"];
    }, function (t) {
      k = t["HwPlatform"];
    }, function (t) {
      m = t["WxTTPlatform"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      y = t["default"];
    }, function (t) {
      var n = to[5];
      w = t["default"], _ = t["ResType"];
    }, function (t) {
      M = t["default"];
    }, function (t) {
      S = t["default"];
    }, function (t) {
      A = t["Log"];
    }], x["execute"] = function () {
      var n,
        x = to,
        T = x[2],
        L = "_RF";
      a["_RF"]["push"]({}, "ecfc40/aCVE6JD1sVRWfB2Y", "GbzSdkManager", void 0), n = t("IHttpMethod", function (t) {
        var n = to,
          r = "GET",
          i = "POST";
        return t["GET"] = "GET", t["POST"] = "POST", t;
      }({})), t("default", function () {
        var t,
          a,
          x = to,
          T = x[4],
          L = x[7],
          I = x[9],
          R = x[18],
          E = x[13],
          D = x[11],
          N = x[12],
          P = x[10],
          G = x[16],
          O = x[8],
          F = x[5],
          B = "bind",
          z = "apply";
        return 1, (a = function () {
          var t = to,
            n = t[9],
            r = t[4],
            i = t[8],
            e = t[11],
            a = t[13];
          this["platformApi"] = void 0, this["CryptoJS"] = window["Crypto"], this["share_title"] = "熬夜消水果，过不了第二关，谁来帮帮我呀？", this["freead"] = !1, this["_isOpenTest"] = !0, this["_adAllNum"] = 0, this["dyIsNew"] = !1, this["opAdTicket"] = !1, this["adTicketMaxLv"] = 3, this["navigateMiniOpen"] = !1, this["navigateAppid"] = "", this["navigateAppName"] = "", this["navigateAppIconUrl"] = "", this["navigateAppPath"] = "", this["levelShare"] = 0, this["uiVibrateOpen"] = !0, this["vibrateLastTime"] = void 0, this["vibrateCooldown"] = 30, this["MAX_DYWX_RETRY"] = 3;
        })["getIns"] = function () {
          var t = "_ins";
          return null === this["_ins"] && (this["_ins"] = new a()), this["_ins"];
        }, (t = a["prototype"])["platform"] = function () {
          var t = to,
            n = t[6],
            r = "platformApi",
            i = "platform",
            e = "Platform",
            a = "new platformApi";
          return this["platformApi"] || (u["platform"] == u["Platform"]["WECHAT_GAME"] || u["platform"] == u["Platform"]["BYTEDANCE_MINI_GAME"] ? (this["platformApi"] = new m(), A("new platformApi", this["platformApi"])) : u["platform"] == u["Platform"]["HUAWEI_QUICK_GAME"] && (this["platformApi"] = new k(), A("new platformApi", this["platformApi"]))), this["platformApi"];
        }, t["getPlatform"] = function () {
          var t = to,
            n = "platformApi";
          if (null != this["platformApi"]) return this["platformApi"]["platform"]();
        }, t["getServerNavigateCfg"] = function () {
          var t,
            r,
            i = to;
          r = this, t = function () {
            var t,
              n = to,
              r = "appid",
              i = "sign";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "appid",
                e = "sign";
              return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), (n = t)["appid"] = 0, n["sign"] = 0, n;
            }["apply"]())["appid"] = b["appid"], t["sign"] = b["sign"], t;
          }["apply"](), this["httpRequest"]("https://api.devourad.com/Gameinfo/getBindGame", t, n["GET"], function (t) {
            var n = to,
              i = n[2];
            1 == t["code"] && (r["setNavigateData"](t["data"]), A("=======视频转分享" + r["levelShare"]));
          }, function (t) {});
        }, t["setNavigateData"] = function (t) {
          var n,
            r = to,
            i = r[7],
            e = r[13],
            a = "game_list";
          t["game_list"] && t["game_list"]["length"] > 0 && (this["navigateMiniOpen"] = !0, n = t["game_list"][0], this["navigateAppid"] = n["appid"], this["navigateAppName"] = n["game_name"], this["navigateAppIconUrl"] = n["game_icon"], this["navigateAppPath"] = n["game_path"]);
        }, t["openCustomerServiceConversation"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["openCustomerServiceConversation"]();
        }, t["showRecommend"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["showRecommend"]();
        }, t["del_level_data"] = function () {}, t["get_level_data"] = function (t) {
          var r,
            i,
            e,
            s = to,
            o = s[3],
            c = s[2];
          (r = this, void 0 === t && (t = 0), !u["isBrowser"] && b["isServerArchive"]) && (e = Math["floor"](Date["now"]() / 1000), i = function () {
            var t,
              n = to,
              r = n[4],
              i = "appid";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "appid",
                e = "sign",
                a = "timestamp",
                u = "openid";
              return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "timestamp", 0), Pu(t, "openid", 0), (n = t)["appid"] = 0, n["sign"] = 0, n["timestamp"] = 0, n["openid"] = 0, n;
            }["apply"]())["appid"] = b["appid"], t["sign"] = this["NewSign"](e), t["timestamp"] = e, t["openid"] = a["ins"]["platform"]()["openID"], t;
          }["bind"](this)["apply"](), this["httpRequest"]("https://api.devourad.com/WechatGameFile/get_data", i, n["POST"], function (n) {
            var i,
              e,
              a = to,
              u = "data",
              s = "ins",
              o = "contrastServerLevelDate",
              c = "_adAllNum";
            n && 1 == n["code"] ? (e = n["data"]) && e["data"] ? (e = JSON["parse"](e["data"]), y["ins"]["contrastServerLevelDate"](e), r["_adAllNum"] = null != (i = e["adAllNum"]) ? i : 0) : (y["ins"]["contrastServerLevelDate"](null), r["_adAllNum"] = 0) : r["retryGetLevelData"](t, 3, 1000);
          }, function (n) {
            r["retryGetLevelData"](t, 3, 1000);
          }));
        }, t["retryGetLevelData"] = function (t, n, r) {
          var i;
          i = this, t >= n || setTimeout(function () {
            i["get_level_data"](t + 1);
          }, r);
        }, t["set_level_data"] = function (t, r) {
          var i,
            e,
            s = to,
            o = s[3],
            c = s[2];
          !u["isBrowser"] && b["isServerArchive"] && (i = Math["floor"](Date["now"]() / 1000), e = function () {
            var n,
              e = to,
              u = e[2],
              s = e[7],
              o = e[4],
              c = e[6],
              f = "appid";
            return (n = function () {
              var t,
                n,
                r = to,
                i = r[2],
                e = "appid",
                a = "sign",
                u = "timestamp",
                s = "openid",
                o = "data",
                c = "level_id";
              return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "timestamp", 0), Pu(t, "openid", 0), Pu(t, "data", 0), Pu(t, "level_id", 0), (n = t)["appid"] = 0, n["sign"] = 0, n["timestamp"] = 0, n["openid"] = 0, n["data"] = 0, n["level_id"] = 0, n;
            }["apply"]())["appid"] = b["appid"], n["sign"] = this["NewSign"](i), n["timestamp"] = i, n["openid"] = a["ins"]["platform"]()["openID"], n["data"] = JSON["stringify"](t), n["level_id"] = r, n;
          }["bind"](this)["apply"](), this["httpRequest"]("https://api.devourad.com/WechatGameFile/set_data", e, n["POST"], function (t) {
            t["code"];
          }, function (t) {}));
        }, t["ttrequestFeedSubscribe"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && this["platformApi"]["requestFeedSubscribe"](t);
        }, t["ttcheckFeedSubscribeStatus"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && this["platformApi"]["checkFeedSubscribeStatus"](t);
        }, t["ttcanluse"] = function (t) {
          var n = to,
            r = n[5],
            i = "ins",
            e = "getPlatform",
            u = "active";
          null != this["platformApi"] && (a["ins"]["getPlatform"]() == window["tt"] ? t["active"] = a["ins"]["getPlatform"]()["canIUse"]("request") : t["active"] = !1);
        }, t["getLaunchOptionsSync"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["getLaunchOptionsSync"]();
        }, t["addShortcut"] = function (t) {
          var n = to,
            r = n[9],
            i = "ins",
            e = "getPlatform";
          null != this["platformApi"] && a["ins"]["getPlatform"]() == window["tt"] && a["ins"]["getPlatform"]()["addShortcut"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n,
                r = to,
                i = "success",
                e = "fail";
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t)["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["success"] = function () {
              var n = to,
                r = n[4];
              t["getComponent"](s)["spriteFrame"] = w["ins"]["getRes"](_["Sprite"], "secondary", "获得奖励"), h["isOnAdd"] = !0;
            }, n["fail"] = function (t) {
              var n = to[4];
              A("添加桌面失败", t["errMsg"]);
            }, n;
          }["apply"]());
        }, t["checkShortcut"] = function (t) {
          var n = to,
            r = "ins",
            i = "getPlatform";
          this["platformApi"] && a["ins"]["getPlatform"]() == window["tt"] && a["ins"]["getPlatform"]()["checkShortcut"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n,
                r = to,
                i = "success",
                e = "fail";
              return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t)["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["success"] = function (n) {
              var r = to,
                i = r[4],
                e = "status",
                a = "exist";
              A("检查快捷方式", n["status"]["exist"]), h["isOnAdd"] = n["status"]["exist"], n["status"]["exist"] && (t["getComponent"](s)["spriteFrame"] = w["ins"]["getRes"](_["Sprite"], "secondary", "获得奖励"));
            }, n["fail"] = function (t) {
              var n = to;
              A("检查快捷方式失败", t["errMsg"]);
            }, n;
          }["apply"]());
        }, t["navigateToScene"] = function () {
          var t = to,
            n = "ins",
            r = "getPlatform";
          null != this["platformApi"] && (a["ins"]["getPlatform"]() != window["tt"] || a["ins"]["getPlatform"]()["navigateToScene"](function () {
            var t,
              n = to,
              r = n[3],
              i = n[5];
            return (t = function () {
              var t,
                n,
                r = to,
                i = "scene",
                e = "success",
                a = "fail";
              return Pu(t = {}, "scene", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["scene"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["scene"] = "sidebar", t["success"] = function (t) {}, t["fail"] = function (t) {}, t;
          }["apply"]()));
        }, t["onShow"] = function () {
          var t = to,
            n = "ins",
            r = "getPlatform";
          null != this["platformApi"] && a["ins"]["getPlatform"]() == window["tt"] && a["ins"]["getPlatform"]()["onShow"](function (t) {
            var n = to,
              r = "ins",
              i = "onGetTTSideBarRwd";
            A("侧边栏进来" + y["ins"]["onGetTTSideBarRwd"]), y["ins"]["onGetTTSideBarRwd"] || (v["isOnShow"] = !0, v["changeImg"](!0));
          });
        }, t["ttcheckScene"] = function (t) {
          var n = to,
            r = "ins",
            i = "getPlatform";
          null != this["platformApi"] ? a["ins"]["getPlatform"]() == window["tt"] && a["ins"]["getPlatform"]()["checkScene"](function () {
            var n,
              r = to,
              i = r[3],
              e = r[5];
            return (n = function () {
              var t,
                n,
                r = to,
                i = "scene",
                e = "success",
                a = "fail";
              return Pu(t = {}, "scene", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["scene"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["scene"] = "sidebar", n["success"] = function (n) {
              var r = to,
                i = "isExist";
              A("check scene success: ", n["isExist"]), t["active"] = n["isExist"];
            }, n["fail"] = function (n) {
              var r = to;
              t["active"] = n["isExist"];
            }, n;
          }["apply"]()) : t["active"] = !0;
        }, t["init"] = function () {
          var t = to,
            n = "platformApi";
          this["platformApi"] && this["platformApi"]["init"](b);
        }, t["getAccountInfoSync"] = function () {
          var t = to,
            n = "platformApi";
          return this["platformApi"] ? this["platformApi"]["getAccountInfoSync"]() : null;
        }, t["vibrateShort"] = function (t) {
          var n,
            r = to,
            i = r[1],
            e = r[10],
            a = "vibrateLastTime",
            u = "platformApi";
          y["ins"]["game_vibrate"] && ((n = Date["now"]()) - this["vibrateLastTime"] < this["vibrateCooldown"] || (this["vibrateLastTime"] = n, this["platformApi"] && (null == t && (t = function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "type";
              return (t = Pu({}, "type", 0))["type"] = 0, t;
            }["apply"]())["type"] = "medium", t;
          }["apply"]()), this["platformApi"]["vibrateShort"](t))));
        }, t["activeShare"] = function (t, n) {
          var r = to,
            i = "platformApi";
          null != this["platformApi"] && this["platformApi"]["activeShare"](t, n);
        }, t["passiveShare"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && this["platformApi"]["passiveShare"](t);
        }, t["initAudioEnd"] = function () {
          var t = to;
          this["platformApi"]["initAudioEnd"](g);
        }, t["initBanner"] = function () {
          var t = to;
          this["platformApi"]["initBanner"](b);
        }, t["showBanner"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && this["platformApi"]["showBanner"](t);
        }, t["initInter"] = function () {
          var t = to;
          this["platformApi"]["initInter"](b);
        }, t["showInter"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["showInter"]();
        }, t["initVideo"] = function () {
          var t = to;
          this["platformApi"]["initVideo"](b);
        }, t["scande"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && this["platformApi"]["scanCode"](t);
        }, t["showVideo"] = function (t, n, r, i, e) {
          var s,
            c,
            h = to,
            v = h[6],
            b = h[9],
            d = "ins",
            k = "platformApi";
          if (s = this, void 0 === e && (e = !1), c = function () {
            var e = to,
              a = "platformApi",
              u = "inst",
              c = "模拟成功，激励奖励已发放";
            return s["platformApi"] ? s["platformApi"] && s["platformApi"]["freead"] ? t && t("模拟成功，激励奖励已发放") : void s["platformApi"]["showVideo"](t, function () {
              var t = to,
                r = "ins";
              y["ins"]["status"] = f["RUN"], g["ins"]["resumeBGM"](), n && n();
            }, M, r, i) : (S["inst"]["Ad_Impression"](1), S["inst"]["Ad_Placement_show"](r), S["inst"]["Ad_Placement_Click"](r), S["inst"]["Video_Finish"](r), S["inst"]["AddDayAdClickNum"](r, 1), S["inst"]["AddDayAdShowNum"](r, 1), M && M["ins"]["show"]("模拟成功，激励奖励已发放", function () {
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
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = o(226, 69, 109, 255), t;
            }["apply"]()), t && t("模拟成功，激励奖励已发放"));
          }, u["platform"] == u["Platform"]["WECHAT_GAME"]) {
            if (y["ins"]["isVideo2Share"]() && e) {
              if (y["ins"]["AddShareNum"](), p["emit"](l["shareClick"]), this["platformApi"] && this["platformApi"]["freead"]) return t && t("模拟成功，激励奖励已发放");
              a["ins"]["activeShare"](null, function () {
                var n = to;
                a["ins"]["showToast"](function () {
                  var t,
                    n = to,
                    r = n[3],
                    i = n[2];
                  return (t = function () {
                    var t,
                      n,
                      r = to,
                      i = "title",
                      e = "icon",
                      a = "duration";
                    return Pu(t = {}, "title", 0), Pu(t, "icon", 0), Pu(t, "duration", 0), (n = t)["title"] = 0, n["icon"] = 0, n["duration"] = 0, n;
                  }["apply"]())["title"] = "分享成功", t["icon"] = "success", t["duration"] = 1000, t;
                }["apply"]()), t();
              });
            } else c();
          } else c();
        }, t["loginFeedback"] = function (t, n) {
          var r = to,
            i = "platformApi";
          null != this["platformApi"] && this["platformApi"]["loginFeedback"](t, n);
        }, t["isTest"] = function () {
          var t = to,
            n = "platformApi";
          return !!(!this["platformApi"] || this["platformApi"] && this["platformApi"]["freead"]);
        }, t["initCustomRow"] = function () {
          var t = to;
          this["platformApi"]["initCustomRow"]();
        }, t["showCustomRow"] = function (t) {
          var n = to,
            r = "platformApi";
          void 0 === t && (t = !0), null != this["platformApi"] && this["platformApi"]["showCustomRow"](t);
        }, t["initCustomCol"] = function () {
          var t = to;
          this["platformApi"]["initCustomCol"]();
        }, t["showCustomCol"] = function (t) {
          var n = to,
            r = "platformApi";
          void 0 === t && (t = !0), null != this["platformApi"] && this["platformApi"]["showCustomCol"](t);
        }, t["showToast"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[3];
          r = t["title"], n = t["icon"], i = t["duration"], this["platformApi"]["showToast"](function () {
            var t,
              e = to,
              a = e[3];
            return (t = function () {
              var t,
                n,
                r = to,
                i = "title",
                e = "icon",
                a = "duration";
              return Pu(t = {}, "title", 0), Pu(t, "icon", 0), Pu(t, "duration", 0), (n = t)["title"] = 0, n["icon"] = 0, n["duration"] = 0, n;
            }["apply"]())["title"] = r, t["icon"] = n, t["duration"] = i, t;
          }["apply"]());
        }, t["getRank"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["getRank"]();
        }, t["setRank"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && this["platformApi"]["setRank"](t);
        }, t["onSubscribe"] = function () {
          var t = to[9];
          this["platformApi"]["onSubscribe"]();
        }, t["triggerGC"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["triggerGC"]();
        }, t["VideoType"] = function () {
          return 1;
        }, t["httpRequest"] = function (t, r, i, e, a) {
          var u,
            s,
            o = to,
            c = o[14],
            f = o[2],
            h = "GET",
            v = "open",
            l = "send",
            b = "POST";
          if (u = function (t) {
            var n;
            t && (n = JSON["parse"](t), e && e(n));
          }, (s = new XMLHttpRequest())["onreadystatechange"] = function () {
            var t = to,
              n = ro,
              r = 200,
              i = 400,
              e = "readyState",
              o = "status",
              c = "responseText";
            4 == s["readyState"] && s["status"] >= 200 && s["status"] < 400 ? u && u(s["responseText"]) : 4 == s["readyState"] && (s["status"] < 200 || s["status"] >= 400) && a && a(s["responseText"]);
          }, i == n["GET"] && r) {
            var d;
            for (var k in d = ei, r) t += "" + d + k + mt + encodeURIComponent(r[k]), d = ai;
            s["open"]("GET", t, !0), s["send"]();
          } else i == n["POST"] && (s["open"]("POST", t, !0), s["setRequestHeader"]("Content-Type", "application/json"), s["send"](JSON["stringify"](r)));
        }, t["showGameClubButton"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && a["ins"]["getPlatform"]() != window["tt"] && this["platformApi"]["showGameClubButton"]();
        }, t["hideGameClubButton"] = function () {
          var t = to,
            n = "platformApi";
          null != this["platformApi"] && this["platformApi"]["hideGameClubButton"]();
        }, t["createGameClubButton"] = function (t) {
          var n = to,
            r = "platformApi";
          null != this["platformApi"] && a["ins"]["getPlatform"]() != window["tt"] && this["platformApi"]["createGameClubButton"](t);
        }, t["NewSign"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[4],
            u = e[6],
            s = "CryptoJS",
            o = "MD5",
            c = "toString";
          return i = b["appKey"], n = this["platform"]()["openID"] + b["appid"] + i + (t || this["timestamp"]()), r = this["CryptoJS"]["MD5"](n)["toString"](), this["CryptoJS"]["MD5"](r)["toString"]();
        }, t["timestamp"] = function () {
          var t,
            n = to;
          return t = new Date()["getTime"](), Math["round"](t / 1000);
        }, t["signParam"] = function (t) {
          return c["hex_md5"](t);
        }, t["delay"] = function (t) {
          return new Promise(function (n) {
            return setTimeout(n, t);
          });
        }, t["dyWxGetUserLabel"] = function () {
          var t;
          return t = e(Nu().mark(function t(n, r, i) {
            var e, u, s, o, c, f;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (u = (e = to)[3], s = e[0][7], o = e[3][0], c = this, void 0 === r && (r = !1), void 0 === i && (i = !1), n[e[8][73]] >= this[e[12][105]]) {
                    t.next = 9;
                    break;
                  }
                  if (f = function () {
                    var t = to,
                      r = t[9];
                    c["wxGetUserLabel"](n["_gift_scene"], n["_gift_name"], n["_gift_value"], n["_gift_value_success"], function (t) {
                      var r = to;
                      c["dyConversion"](n["_event_type"], t["encryptedData"], t["iv"], n);
                    });
                  }, t.t0 = r, t.t0) {
                    t.next = 8;
                    break;
                  }
                  return t.next = 8, this[u[26]](30000);
                case 8:
                  i ? window[s][u[65]](function () {
                    var t,
                      n = to;
                    return (t = function () {
                      var t,
                        n = "success";
                      return (t = Pu({}, "success", 0))["success"] = 0, t;
                    }["apply"]())["success"] = function (t) {
                      var n = to,
                        r = "code";
                      t["code"] ? (a["ins"]["platform"]()["code"] = t["code"], f()) : A("登录失败！" + t["errMsg"]);
                    }, t;
                  }[o]()) : window[s][e[10][203]](function () {
                    var t,
                      n = to;
                    return (t = function () {
                      var t,
                        n,
                        r = to,
                        i = "success",
                        e = "fail";
                      return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t)["success"] = 0, n["fail"] = 0, n;
                    }["apply"]())["success"] = function () {
                      f();
                    }, t["fail"] = function () {
                      var t = to,
                        n = t[3];
                      window["wx"]["login"](function () {
                        var t,
                          n = to;
                        return (t = function () {
                          var t,
                            n = to;
                          return (t = function () {
                            var t,
                              n = "success";
                            return (t = Pu({}, "success", 0))["success"] = 0, t;
                          }["apply"]())["success"] = 0, t;
                        }["apply"]())["success"] = function (t) {
                          var n = to,
                            r = "code";
                          t["code"] ? (a["ins"]["platform"]()["code"] = t["code"], f()) : A("登录失败！" + t["errMsg"]);
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
          var s = to,
            o = s[2],
            c = "platform",
            f = "clickid",
            h = "isValidValue",
            v = "query";
          if (A("判定抖音归因 : ", this["platform"]()["clickid"]), this["isValidValue"](this["platform"]()["clickid"]) && this["isValidValue"](this["platform"]()["query"]) && this["isValidValue"](this["platform"]()["query"]["project_id"])) {
            var l, k;
            for (var m in Rs && 2, l = function () {
              for (var n, u = to, s = ro, o = u[8], c = u[0], f = u[1], h = u[6], v = u[4], l = u[2], k = 11, m = 12, p = "appid", g = "platform", y = "code", w = "clickid", _ = "sign", M = 0, S = r; M < 13;) switch (++M, S) {
                case 9:
                  n["event_type"] = t, S = 4;
                  break;
                case 11:
                  n["encryptedData"] = i, S = 12;
                  break;
                case 2:
                  n["appid"] = b["appid"], S = 3;
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
                  n["openid"] = a["ins"]["platform"]()["openID"], S = 5;
                  break;
                case 8:
                  n["code"] = this["platform"]()["code"], S = 10;
                  break;
                case 4:
                  n["clickid"] = this["platform"]()["clickid"], S = 11;
                  break;
                case 1:
                  n = function () {
                    for (var t, n, r = to, i = ro, e = r[2], a = r[8], u = 11, s = 12, o = "sign", c = "code", f = "iv", h = "appid", v = "use_type", l = "jl_channel", b = "openid", d = "ipu", k = "event_type", m = "clickid", p = "encryptedData", g = 0, y = 3; g < 13;) switch (++g, y) {
                      case 11:
                        n["sign"] = 0, y = 7;
                        break;
                      case 7:
                        n["code"] = 0, y = 8;
                        break;
                      case 4:
                        n["iv"] = 0, y = 1;
                        break;
                      case 12:
                        n["appid"] = 0, y = 11;
                        break;
                      case 0:
                        n["use_type"] = 0, y = 5;
                        break;
                      case 1:
                        n["jl_channel"] = 0, y = 9;
                        break;
                      case 3:
                        Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "code", 0), Pu(t, "openid", 0), Pu(t, "ipu", 0), Pu(t, "use_type", 0), Pu(t, "event_type", 0), Pu(t, "clickid", 0), Pu(t, "encryptedData", 0), Pu(t, "iv", 0), Pu(t, "jl_channel", 0), n = t, y = 12;
                        break;
                      case 9:
                        return n;
                      case 8:
                        n["openid"] = 0, y = 6;
                        break;
                      case 5:
                        n["event_type"] = 0, y = 2;
                        break;
                      case 2:
                        n["clickid"] = 0, y = 10;
                        break;
                      case 10:
                        n["encryptedData"] = 0, y = 4;
                        break;
                      case 6:
                        n["ipu"] = 0, y = 0;
                    }
                  }["apply"](), S = 2;
                  break;
                case 3:
                  n["sign"] = b["sign"], S = 8;
                  break;
                case 6:
                  n["use_type"] = d["userType"], S = 9;
                  break;
                case 12:
                  n["iv"] = e, S = 0;
              }
            }["bind"](this)["apply"](), this["platform"]()["query"]) {
              var p;
              p = this["platform"]()["query"][m], l["jl_" + m] = p;
            }
            k = this, this["httpRequest"]("https://api.devourad.com/Wechat/dyConversion", l, n["POST"], function (t) {
              var n = to,
                r = "code";
              1 == t["code"] || -1 == t["code"] && u && (u["retryCount"] += 1, k["dyWxGetUserLabel"](u, !0, !0));
            }, function (t) {});
          }
        }, i(a, [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get",
              a = "set";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t)["key"] = 0, n["get"] = 0, n["set"] = 0, n;
          }["apply"]())["key"] = "IS_OPEN_TEST", t["get"] = function () {
            return this["_isOpenTest"];
          }, t["set"] = function (t) {
            this["_isOpenTest"] = t;
          }, t;
        }["bind"](this)["apply"](), function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get",
              a = "set";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), Pu(t, "set", 0), (n = t)["key"] = 0, n["get"] = 0, n["set"] = 0, n;
          }["apply"]())["key"] = "adAllNum", t["get"] = function () {
            return this["_adAllNum"];
          }, t["set"] = function (t) {
            var n = to;
            this["_adAllNum"] = Math["max"](0, t);
          }, t;
        }["bind"](this)["apply"]()], [function () {
          var t,
            n = to,
            r = n[1];
          return (t = function () {
            var t,
              n,
              r = to[1],
              i = "key",
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }["bind"](this)["apply"]()]), a;
      }())["_ins"] = null, a["_RF"]["pop"]();
    }, x;
  }["bind"](this)["apply"]();
});