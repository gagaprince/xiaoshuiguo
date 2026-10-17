(function (t) {
  Ys && _s && (gu += vr), Ys = 0;
  var n,
    r,
    i,
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
    _ = to;
  return function () {
    var _;
    Xs && ks && (yu = "authorize"), Xs = 0;
    var M = to,
      S = M[5],
      A = "setters",
      C = "execute";
    Fu(62.75) >= Fu(Bu((Ou(us) + Ou(20) + Ou(96) + Ou($u)) / 4)) && (Ic = [7, 3, 1, 10, 2, 0, 6, 8, 5, 9, 4]);
    var x,
      T = Ic["slice"](0);
    return Pu(_ = {}, "setters", 0), Pu(_, "execute", 0), (x = _)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["asyncToGenerator"];
    }, function (t) {
      var n = to;
      i = t["cclegacy"], e = t["sys"], a = t["color"], u = t["Sprite"];
    }, function (t) {
      s = t["default"];
    }, function (t) {
      o = t["default"];
    }, function (t) {
      c = t["globalxz"];
    }, function (t) {
      f = t["default"];
    }, function (t) {
      h = t["default"];
    }, function (t) {
      var n = to[5];
      v = t["default"], l = t["ResType"];
    }, function (t) {
      b = t["default"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["AdPlatformBase"];
    }, function (t) {
      p = t["default"];
    }, function (t) {
      g = t["default"];
    }, function (t) {
      var n = to;
      y = t["Log"], w = t["Error"];
    }], x["execute"] = function () {
      0;
      var _ = to,
        M = _[2],
        S = "_RF",
        A = "WxTTPlatform";
      Rs && Ic["sort"]();
      var C = 1;
      Fu(63) >= Fu(Bu((Ou(42) + Ou(48) + Ou(Qu)) / 3)) && (C += 8), i["_RF"]["push"]({}, "c84d2CGDMZLj6w7VDzE3H2f", "WxTTPlatform", void 0), t("WxTTPlatform", function (t) {
        Zs && ks && (gu = "主页面"), Zs = 0;
        var i = to,
          m = i[3],
          _ = i[7],
          M = i[6],
          S = i[11],
          A = i[18],
          x = i[13],
          L = i[14],
          I = i[8],
          R = i[10],
          E = i[12],
          D = i[5],
          N = i[16],
          P = i[9],
          G = 1;
        Ns && (Lc = [9, 1, 8, 6, 3, 0, 2, 7, 5, 10, 4]), G += 4, vs && (G += 0);
        var O,
          F,
          B = Lc["slice"](0);
        return n(F = function () {
          for (var n, r, i = to, e = ro, a = i[4], u = i[2], s = i[3], o = i[6], c = i[7], f = i[10], h = i[8], v = i[9], l = (n = arguments)["length"], b = new Array(l), d = 0; d < l; d++) b[d] = n[d];
          return (r = t["call"]["apply"](t, [this]["concat"](b)) || this)["ttURL"] = "http://api.devourad.com/douyin/gameLoginNoClickId", r["wxURL"] = "https://api.devourad.com/Wechat/gameLogin", r["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = 0, r["shareCall"] = null, r["IS_OPEN_TEST"] = !1, r["isMyGameIn"] = !1, r["_platform"] = null, r["GameClubButton"] = void 0, r["pkTitile"] = "快来PK,看谁最强", r["pkShareImage"] = "https://pauljk.cn/shareImages/001.png", r["openID"] = "", r["battleCheck"] = !0, r["code"] = void 0, r["clickid"] = void 0, r["query"] = void 0, r["loginTimer"] = null, r["loginRetryCount"] = 0, r["maxLoginRetry"] = 20, r["isLogging"] = !1, r["loginURL"] = "", r["recommendPageManager"] = void 0, r["adbtn_name"] = void 0, r["videoSuccess"] = void 0, r["videoCaller"] = void 0, r["videFail"] = void 0, r["isShowVideo"] = !1, r["videoHandled"] = !1, r["imgsul"] = "https://cdn.devourad.com/dy/ShuiGuoShares/1.jpg", r;
        }, t), (O = F["prototype"])["platform"] = function () {
          var t = to,
            n = t[0],
            r = t[3],
            i = t[6],
            a = "_platform",
            u = "platform",
            s = "Platform",
            o = "loginURL";
          return this["_platform"] || (e["platform"] == e["Platform"]["WECHAT_GAME"] ? (this["_platform"] = window["wx"], this["loginURL"] = this["wxURL"]) : e["platform"] == e["Platform"]["BYTEDANCE_MINI_GAME"] && (this["_platform"] = window["tt"], y("=======" + this["loginURL"]), this["loginURL"] = this["ttURL"])), this["_platform"];
        }, O["loadRecommend"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i, e;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[15][55], i = n[18][7], !(e = this[n[6][2]]()) || e == window[n[0][10]]) {
                    t.next = 8;
                    break;
                  }
                  if (e[r]) {
                    t.next = 5;
                    break;
                  }
                  throw n[10][236];
                case 5:
                  return this[i] = e[r](), t.next = 8, this[i][n[2][24]](function () {
                    var t,
                      n = to;
                    return (t = function () {
                      var t,
                        n = "openlink";
                      return (t = Pu({}, "openlink", 0))["openlink"] = 0, t;
                    }["apply"]())["openlink"] = pu, t;
                  }[n[3][0]]());
                case 8:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), O["showRecommend"] = function () {
          var t;
          return t = r(Nu().mark(function t() {
            var n, r, i;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[18][7], !(i = this[n[6][2]]()) || i == window[n[0][10]]) {
                    t.next = 10;
                    break;
                  }
                  if (t.t0 = this[r], t.t0) {
                    t.next = 7;
                    break;
                  }
                  return t.next = 7, this[n[11][91]]();
                case 7:
                  return t.next = 9, this[r][n[2][17]]();
                case 9:
                  return t.abrupt("return", t.sent);
                case 10:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), O["getLaunchOptionsSync"] = function () {
          var t,
            n = to;
          if ((t = this["platform"]()) && t == window["tt"]) return t["getLaunchOptionsSync"]();
        }, O["isPlatformAgree"] = function () {
          return !0;
        }, O["platformAgree"] = function () {}, O["platformNotAgree"] = function () {}, O["scanCode"] = function (t) {
          var n,
            r,
            i = to;
          (n = this["platform"]()) && (r = t, n["previewImage"](function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n,
                r = to,
                i = "current",
                e = "urls";
              return Pu(t = {}, "current", 0), Pu(t, "urls", 0), (n = t)["current"] = 0, n["urls"] = 0, n;
            }["apply"]())["current"] = r, t["urls"] = [r], t;
          }["apply"]()));
        }, O["init"] = function (t) {
          var n,
            r,
            i,
            e = to,
            u = e[14],
            s = e[11],
            o = e[7],
            c = e[8],
            h = e[10],
            v = "wx",
            l = "platform",
            b = "query",
            k = "clickid";
          (i = window["wx"]["getUpdateManager"]())["onCheckForUpdate"](function (t) {
            y(t["hasUpdate"]);
          }), this["getExptInfoSync"](), i["onUpdateReady"](function () {
            var t = to;
            window["wx"]["showModal"](function () {
              var t,
                n = to,
                r = n[3],
                e = n[5];
              return (t = function () {
                var t,
                  n,
                  r = to,
                  i = r[5],
                  e = "title",
                  a = "content",
                  u = "showCancel",
                  s = "success";
                return Pu(t = {}, "title", 0), Pu(t, "content", 0), Pu(t, "showCancel", 0), Pu(t, "success", 0), (n = t)["title"] = 0, n["content"] = 0, n["showCancel"] = 0, n["success"] = 0, n;
              }["apply"]())["title"] = "更新提示", t["content"] = "当前版本比较旧，请重启小游戏进行更新", t["showCancel"] = !1, t["success"] = function (t) {
                var n = to;
                t["confirm"] && i["applyUpdate"]();
              }, t;
            }["apply"]());
          }), window["wx"]["onMessage"](function (t) {
            w(JSON["stringify"](t));
          }), (n = this["platform"]()["getLaunchOptionsSync"]())["query"] && (this["clickid"] = n["query"]["clickid"], this["query"] = n["query"]), r = this, this["startLogin"](t), this["loadRecommend"](), this["onFeedStatusChange"](), this["passiveShare"](), this["initAudioEnd"](f), this["initBanner"](t), this["initInter"](t), this["initVideo"](t), this["initCustomCol"](), this["initCustomRow"](), this["checkTest"](), this["platform"]() && this["platform"]() != window["tt"] && this["platform"]()["onShow"](function (t) {
            var n,
              i = to,
              e = i[2],
              u = i[3],
              s = i[6],
              o = i[7],
              c = "isShared",
              f = "shareTag",
              h = "closeTime",
              v = "shareCall";
            r["isShared"] && "keys" == r["shareTag"] && ((n = new Date()["getTime"]()) - r["closeTime"] >= 1750 ? r["shareCall"] && (r["shareCall"](), r["shareCall"] = null) : d["ins"]["show"]("请转发到群或好友哦！", function () {
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
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = a(226, 69, 109, 255), t;
            }["apply"]()), r["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = n);
            r["checkMyGamaIn"](t["scene"]), r["battleCheck"] = !0;
          });
        }, O["startLogin"] = function (t) {
          var n = to;
          this["loginRetryCount"] = 0, this["tryLogin"](t);
        }, O["tryLogin"] = function () {
          var t;
          return t = r(Nu().mark(function t(n) {
            var r, i, e, a, u, s;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (i = (r = to)[10], e = r[4], this[a = r[7][158]]) {
                    t.next = 21;
                    break;
                  }
                  return this[a] = !0, t.prev = 3, t.next = 6, this[r[5][202]]();
                case 6:
                  return u = t.sent, t.next = 9, this[i[175]](u, n);
                case 9:
                  if (1 === (s = t.sent)[r[2][11]]) {
                    t.next = 12;
                    break;
                  }
                  throw new w(s[e[169]] || e[253]);
                case 12:
                  this[i[176]](s), t.next = 18;
                  break;
                case 15:
                  t.prev = 15, t.t0 = t.catch(3), this[r[11][131]](n);
                case 18:
                  return t.prev = 18, this[a] = !1, t.finish(18);
                case 21:
                case "end":
                  return t.stop();
              }
            }, t, this, [[3, 15, 18, 21]]);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), O["scheduleRetry"] = function (t) {
          var n,
            r,
            i = to,
            e = ro,
            a = i[1],
            u = 1000,
            s = "loginRetryCount";
          (n = this, this["loginRetryCount"]++, this["loginRetryCount"] >= 3) ? this["stopLoginRetry"]() : (r = 3000 * this["loginRetryCount"], r = Math["min"](r, 30000), r += 1000 * Math["random"](), y("外层第 " + this["loginRetryCount"] + " 次重试，将在 " + Math["round"](r / 1000) + " 秒后"), setTimeout(function () {
            return n["tryLogin"](t);
          }, r));
        }, O["loginSuccess"] = function (t) {
          var n = to,
            r = n[12],
            i = n[7],
            e = "openID",
            a = "inst";
          this["stopLoginRetry"](), this["openID"] = t["data"]["openid"], this["setOpenID"](), this["loginEd"](), g["inst"]["setOpenId"](this["openID"]), g["inst"]["checkLogin"](t), b["ins"]["get_level_data"](), this["storeFeedData"]();
        }, O["stopLoginRetry"] = function () {
          var t = to,
            n = "loginTimer";
          this["loginRetryCount"] = 0, this["loginTimer"] && (clearInterval(this["loginTimer"]), this["loginTimer"] = null);
        }, O["wxLogin"] = function () {
          var t;
          return t = this, new Promise(function (n, r) {
            var i = to,
              e = i[3];
            t["platform"]()["login"](function () {
              var t,
                i = to;
              return (t = function () {
                var t,
                  n,
                  r = to,
                  i = "success",
                  e = "fail";
                return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t)["success"] = 0, n["fail"] = 0, n;
              }["apply"]())["success"] = function (t) {
                var i = to,
                  e = "code";
                t["code"] ? n(t["code"]) : r("wx.login failed");
              }, t["fail"] = r, t;
            }["apply"]());
          });
        }, O["requestLogin"] = function () {
          var t;
          return t = r(Nu().mark(function t(n, r) {
            var i, a, u, o, c;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return a = (i = to)[6], u = i[3][0], o = this[a[109]], c = e[a[2]] == e[a[42]][i[9][56]] ? function () {
                    var t,
                      i = to,
                      e = "appid",
                      a = "sign";
                    return (t = function () {
                      var t,
                        n,
                        r = to,
                        i = r[2],
                        e = "appid",
                        a = "sign",
                        u = "code";
                      return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "code", 0), (n = t)["appid"] = 0, n["sign"] = 0, n["code"] = 0, n;
                    }["apply"]())["appid"] = r["appid"], t["sign"] = r["sign"], t["code"] = n, t;
                  }[u]() : function () {
                    var t,
                      i = to,
                      e = i[2],
                      a = "appid";
                    return (t = function () {
                      var t,
                        n,
                        r = to,
                        i = r[2],
                        e = "appid",
                        a = "sign",
                        u = "code";
                      return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "code", 0), (n = t)["appid"] = 0, n["sign"] = 0, n["code"] = 0, n;
                    }["apply"]())["appid"] = r["appid"], t["sign"] = s["hex_md5"](r["appid"] + r["appKey"] + n), t["code"] = n, t;
                  }[u](), t.next = 5, this[i[11][132]](o, c, 5);
                case 5:
                  return t.abrupt("return", t.sent);
                case 6:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function (n, r) {
            var i;
            return i = arguments, t["apply"](this, i);
          };
        }(), O["httpWithRetry"] = function (t, n, r) {
          return void 0 === r && (r = 5), new Promise(function (i, e) {
            var a;
            a = 0, function u() {
              a++, k["httpRequest"](t, n, function (t) {
                var n = to,
                  s = ro,
                  o = n[1];
                if (t) i(t);else {
                  var c;
                  if (a >= r) return void e(new w("登录请求失败，已重试 " + a + " 次"));
                  c = 1000 * Math["pow"](2, a - 1), c = Math["min"](c, 30000), c += 800 * Math["random"]() - 400, setTimeout(u, c);
                }
              });
            }();
          });
        }, O["openCustomerServiceConversation"] = function () {
          var t,
            n = to;
          (t = this["platform"]()) && t != window["tt"] && t["openCustomerServiceConversation"](function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n,
                r = to,
                i = "sessionFrom",
                e = "showMessageCard",
                a = "success",
                u = "fail";
              return Pu(t = {}, "sessionFrom", 0), Pu(t, "showMessageCard", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["sessionFrom"] = 0, n["showMessageCard"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["sessionFrom"] = gu, t["showMessageCard"] = !0, t["success"] = function (t) {
              var n = to;
              t["path"], t["query"];
            }, t["fail"] = function (t) {}, t;
          }["apply"]());
        }, O["loginFeedback"] = function (t, n) {
          var r,
            i = to,
            e = i[3];
          r = this, this["platform"]()["login"](function () {
            var i,
              e = to;
            return (i = function () {
              var t,
                n = "success";
              return (t = Pu({}, "success", 0))["success"] = 0, t;
            }["apply"]())["success"] = function (i) {
              var e = to,
                a = e[4],
                u = e[3],
                o = "code";
              i["code"] ? (r["code"] = i["code"], y(r["openID"] + "-----self.openid-------"), k["httpRequest"]("https://api.devourad.com/Wechat/feedback", function () {
                var i,
                  e = to,
                  a = e[4],
                  u = "appid";
                return (i = function () {
                  var t,
                    n = to,
                    r = n[3];
                  return (t = function () {
                    var t,
                      n,
                      r = to,
                      i = "appid",
                      e = "openid",
                      a = "feedback_type",
                      u = "feedback_content",
                      s = "sign";
                    return Pu(t = {}, "appid", 0), Pu(t, "openid", 0), Pu(t, "feedback_type", 0), Pu(t, "feedback_content", 0), Pu(t, "sign", 0), (n = t)["appid"] = 0, n["openid"] = 0, n["feedback_type"] = 0, n["feedback_content"] = 0, n["sign"] = 0, n;
                  }["apply"]())["appid"] = 0, t["openid"] = 0, t["feedback_type"] = 0, t["feedback_content"] = 0, t["sign"] = 0, t;
                }["apply"]())["appid"] = c["appid"], i["openid"] = r["openID"], i["feedback_type"] = t, i["feedback_content"] = n, i["sign"] = s["hex_md5"](c["appid"] + c["appKey"]), i;
              }["apply"](), function (t) {
                var n = to;
                1 == t["code"] || y("提交失败！" + t["errmsg"]);
              })) : y("登录失败！" + i["errMsg"]);
            }, i;
          }["apply"]());
        }, O["loginEd"] = function () {
          var t = to;
          this["query"] && this["reportScene"]();
        }, O["storeFeedData"] = function () {
          var t,
            n,
            r = to,
            i = ro;
          (t = this["platform"]()) && t == window["tt"] && (n = Date["now"]() + 7200000, t["storeFeedData"](function () {
            for (var t, r = to, i = ro, e = r[3], a = r[7], u = "extra", s = 0, o = C; s < 11;) switch (++s, o) {
              case 5:
                return t;
              case 7:
                t["extra"] = "extra", o = 3;
                break;
              case 4:
                t["contentID"] = "CONTENT1290209510", o = 2;
                break;
              case 1:
                t["status"] = 1, o = 7;
                break;
              case 10:
                t["operator"] = ">=", o = 8;
                break;
              case 8:
                t["rightValue"] = String(n), o = 1;
                break;
              case 6:
                t["scene"] = 3, o = 4;
                break;
              case 9:
                t = function () {
                  var t,
                    n,
                    r = to,
                    i = r[3],
                    e = r[7],
                    a = "rightValue",
                    u = "scene",
                    s = "status",
                    o = "operator",
                    c = "success",
                    f = "leftValue",
                    h = "extra",
                    v = "contentID",
                    l = "fail",
                    b = Gu(B);
                  try {
                    for (b.s(); !(n = b.n()).done;) {
                      var d = n.value;
                      if (-1 == d) ;else if (0 == d) {
                        t["rightValue"] = 0;
                        continue;
                      }
                      if (1 != d) {
                        if (2 != d) {
                          if (3 != d) {
                            if (4 == d) return t;
                            var k;
                            if (5 != d) {
                              if (6 != d) {
                                if (7 != d) {
                                  if (8 != d) {
                                    if (9 != d) 10 != d || (t["fail"] = 0);else Pu(k = {}, "scene", 0), Pu(k, "contentID", 0), Pu(k, "leftValue", 0), Pu(k, "operator", 0), Pu(k, "rightValue", 0), Pu(k, "status", 0), Pu(k, "extra", 0), Pu(k, "success", 0), Pu(k, "fail", 0), t = k;
                                  } else t["contentID"] = 0;
                                } else t["extra"] = 0;
                              } else t["leftValue"] = 0;
                            } else t["success"] = 0;
                          } else t["operator"] = 0;
                        } else t["status"] = 0;
                      } else t["scene"] = 0;
                    }
                  } catch (t) {
                    b.e(t);
                  } finally {
                    b.f();
                  }
                }["apply"](), o = 6;
                break;
              case 2:
                t["leftValue"] = "timeStampMs", o = 10;
                break;
              case 3:
                t["success"] = function (t) {}, o = 0;
                break;
              case 0:
                t["fail"] = function (t) {}, o = 5;
            }
          }["apply"]()));
        }, O["storeFeedDataAgain"] = function () {
          var t,
            n = to;
          (t = this["platform"]()) && t == window["tt"] && t["storeFeedData"](function () {
            var t,
              n,
              r = to,
              i = r[7],
              e = r[3],
              a = "timeStampMs",
              u = "extra",
              s = Gu(T);
            try {
              for (s.s(); !(n = s.n()).done;) {
                switch (n.value) {
                  case 0:
                    t["rightValue"] = "timeStampMs";
                    break;
                  case 1:
                    t["contentID"] = "CONTENT1290209510";
                    break;
                  case 2:
                    t["operator"] = ">=";
                    break;
                  case 3:
                    t["scene"] = 3;
                    break;
                  case 4:
                    return t;
                  case 5:
                    t["success"] = function (t) {};
                    break;
                  case 6:
                    t["status"] = 1;
                    break;
                  case 7:
                    t = function () {
                      for (var t, n, r = to, i = ro, e = r[3], a = r[7], u = "scene", s = "contentID", o = "leftValue", c = "operator", f = "rightValue", h = "status", v = "extra", l = "success", b = "fail", d = 0, k = G; d < 11;) switch (++d, k) {
                        case 4:
                          n["scene"] = 0, k = 8;
                          break;
                        case 5:
                          Pu(t = {}, "scene", 0), Pu(t, "contentID", 0), Pu(t, "leftValue", 0), Pu(t, "operator", 0), Pu(t, "rightValue", 0), Pu(t, "status", 0), Pu(t, "extra", 0), Pu(t, "success", 0), Pu(t, "fail", 0), n = t, k = 4;
                          break;
                        case 6:
                          n["leftValue"] = 0, k = 1;
                          break;
                        case 1:
                          n["operator"] = 0, k = 2;
                          break;
                        case 3:
                          n["status"] = 0, k = 7;
                          break;
                        case 8:
                          n["contentID"] = 0, k = 6;
                          break;
                        case 9:
                          n["fail"] = 0, k = 10;
                          break;
                        case 10:
                          return n;
                        case 2:
                          n["rightValue"] = 0, k = 3;
                          break;
                        case 0:
                          n["success"] = 0, k = 9;
                          break;
                        case 7:
                          n["extra"] = 0, k = 0;
                      }
                    }["apply"]();
                    break;
                  case 8:
                    t["extra"] = "extra";
                    break;
                  case 9:
                    t["fail"] = function (t) {};
                    break;
                  case 10:
                    t["leftValue"] = "timeStampMs";
                }
              }
            } catch (t) {
              s.e(t);
            } finally {
              s.f();
            }
          }["apply"]());
        }, O["onFeedStatusChange"] = function () {
          var t,
            n,
            r = to,
            i = "scene";
          (t = this["platform"]()) && t == window["tt"] && (n = t["getLaunchOptionsSync"](), y("onFeedStatusChange========" + n["scene"]), "3041" === n["scene"]["slice"](-4) && t["onFeedStatusChange"](function (t) {
            t["type"];
          }));
        }, O["reportScene"] = function () {
          var t,
            n = to;
          (t = this["platform"]()) && t["reportScene"](function () {
            var t,
              n = to,
              r = ro,
              i = n[5],
              e = "apply";
            return (t = function () {
              var t,
                n,
                r = to,
                i = r[5],
                e = "sceneId",
                a = "costTime",
                u = "dimension",
                s = "metric",
                o = "success",
                c = "fail";
              return Pu(t = {}, "sceneId", 0), Pu(t, "costTime", 0), Pu(t, "dimension", 0), Pu(t, "metric", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["sceneId"] = 0, n["costTime"] = 0, n["dimension"] = 0, n["metric"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["sceneId"] = 7001, t["costTime"] = 350, t["dimension"] = function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n = "d1";
                  return (t = Pu({}, "d1", 0))["d1"] = 0, t;
                }["apply"]())["d1"] = 0, t;
              }["apply"]())["d1"] = "2.1.0", t;
            }["apply"](), t["metric"] = function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n = "m1";
                  return (t = Pu({}, "m1", 0))["m1"] = 0, t;
                }["apply"]())["m1"] = 0, t;
              }["apply"]())["m1"] = "546", t;
            }["apply"](), t["success"] = function (t) {}, t["fail"] = function (t) {}, t;
          }["apply"]());
        }, O["reportSceneAgain"] = function () {
          var t,
            n = to;
          (t = this["platform"]()) && t["reportScene"](function () {
            var t,
              n = to,
              r = ro,
              i = n[5],
              e = "apply";
            return (t = function () {
              var t,
                n,
                r = to,
                i = r[5],
                e = "sceneId",
                a = "costTime",
                u = "dimension",
                s = "metric",
                o = "success",
                c = "fail";
              return Pu(t = {}, "sceneId", 0), Pu(t, "costTime", 0), Pu(t, "dimension", 0), Pu(t, "metric", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["sceneId"] = 0, n["costTime"] = 0, n["dimension"] = 0, n["metric"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["sceneId"] = 1020407, t["costTime"] = 350, t["dimension"] = function () {
              var t,
                n = to,
                r = n[3];
              return (t = function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n = "d1";
                  return (t = Pu({}, "d1", 0))["d1"] = 0, t;
                }["apply"]())["d1"] = 0, t;
              }["apply"]())["d1"] = "2.1.0", t;
            }["apply"](), t["metric"] = function () {
              var t,
                n = to;
              return (t = function () {
                var t,
                  n = to;
                return (t = function () {
                  var t,
                    n = "m1";
                  return (t = Pu({}, "m1", 0))["m1"] = 0, t;
                }["apply"]())["m1"] = 0, t;
              }["apply"]())["m1"] = "546", t;
            }["apply"](), t["success"] = function (t) {}, t["fail"] = function (t) {}, t;
          }["apply"]());
        }, O["requestFeedSubscribe"] = function (t) {
          var n = to;
          this["platform"]()["requestFeedSubscribe"](function () {
            var n,
              r = to,
              i = r[3],
              e = r[2];
            return (n = function () {
              var t,
                n,
                r = to,
                i = r[2],
                e = "type",
                a = "scene",
                u = "contentIDs",
                s = "success",
                o = "fail";
              return Pu(t = {}, "type", 0), Pu(t, "scene", 0), Pu(t, "contentIDs", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["type"] = 0, n["scene"] = 0, n["contentIDs"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["type"] = "play", n["scene"] = 3, n["contentIDs"] = ["CONTENT12902095106"], n["success"] = function (n) {
              var r = to,
                i = r[9],
                e = r[4],
                a = r[2],
                s = "success";
              y(n["success"]), o["isOnRequest"] = n["success"], n["success"] && (t["getComponent"](u)["spriteFrame"] = v["ins"]["getRes"](l["Sprite"], "game", "获得奖励"));
            }, n["fail"] = function (t) {
              y(t["errMsg"]);
            }, n;
          }["apply"]());
        }, O["checkFeedSubscribeStatus"] = function (t) {
          var n,
            r = to;
          (n = this["platform"]()) && n["checkFeedSubscribeStatus"](function () {
            var n,
              r = to,
              i = r[3],
              e = r[2];
            return (n = function () {
              var t,
                n,
                r = to,
                i = r[2],
                e = "type",
                a = "scene",
                u = "success",
                s = "fail";
              return Pu(t = {}, "type", 0), Pu(t, "scene", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["type"] = 0, n["scene"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["type"] = "play", n["scene"] = 3, n["success"] = function (n) {
              var r = to,
                i = r[4],
                e = r[9],
                a = r[2],
                s = "status";
              y(n["status"]), o["isOnRequest"] = n["status"], n["status"] && (t["getComponent"](u)["spriteFrame"] = v["ins"]["getRes"](l["Sprite"], "game", "获得奖励"));
            }, n["fail"] = function (t) {
              y(t["errMsg"]);
            }, n;
          }["apply"]());
        }, O["checkMyGamaIn"] = function (t) {
          var n,
            r = to,
            i = ro,
            e = r[12],
            a = r[8];
          n = this["platform"]()["getAppBaseInfo"]()["SDKVersion"], this["compareVersion"](n, "2.29.0") > 0 && (1109 != t && 1104 != t && 1271 != t && 1257 != t || (this["isMyGameIn"] = !0, k["emit"]("selfGameInRefresh")));
        }, O["login"] = function (t) {
          t && t();
        }, O["vibrateShort"] = function (t) {
          var n,
            r = to;
          (n = this["platform"]()) && n["vibrateShort"](t);
        }, O["checkTest"] = function () {
          var t,
            n = to,
            r = "platform",
            i = "getSystemInfo",
            a = "apply";
          t = this, e["platform"] == e["Platform"]["WECHAT_GAME"] ? this["platform"]()["getSystemInfo"] ? this["platform"]()["getSystemInfo"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "success";
              return (t = Pu({}, "success", 0))["success"] = 0, t;
            }["apply"]())["success"] = function (n) {
              var r = to,
                i = "enableDebug",
                e = "IS_OPEN_TEST",
                a = "freead";
              y("微信平台环境，", n["enableDebug"]), n["enableDebug"] ? (t["IS_OPEN_TEST"] = !0, t["freead"] = !0) : (t["IS_OPEN_TEST"] = !1, t["freead"] = !1, console["log"] = function () {}, console["info"] = function () {});
            }, n;
          }["apply"]()) : this["platform"]()["getAppBaseInfo"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "success";
              return (t = Pu({}, "success", 0))["success"] = 0, t;
            }["apply"]())["success"] = function (n) {
              var r = to,
                i = "enableDebug",
                e = "IS_OPEN_TEST",
                a = "freead";
              y("微信平台环境，", n["enableDebug"]), n["enableDebug"] ? (t["IS_OPEN_TEST"] = !0, t["freead"] = !0) : (t["IS_OPEN_TEST"] = !1, t["freead"] = !1, console["log"] = function () {}, console["info"] = function () {});
            }, n;
          }["apply"]()) : (this["IS_OPEN_TEST"] = !0, this["freead"] = !0);
        }, O["initAudioEnd"] = function (t) {
          var n = to,
            r = "wx";
          void 0 !== window["wx"] && window["wx"]["onAudioInterruptionEnd"](function () {
            var n = to;
            t["ins"]["play"]();
          });
        }, O["initBanner"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[6],
            u = "ad_banner_id",
            s = "ad_banner";
          (r = this, !(n = this["platform"]()) || t && "" == t["ad_banner_id"] || !t["ad_banner_id"]) || (i = n["getSystemInfoSync"](), null == this["ad_banner"] && (this["ad_banner"] = n["createBannerAd"](function () {
            var n,
              r = to,
              e = "apply";
            return (n = function () {
              var t,
                n,
                r = to,
                i = "adUnitId",
                e = "adIntervals",
                a = "style";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "adIntervals", 0), Pu(t, "style", 0), (n = t)["adUnitId"] = 0, n["adIntervals"] = 0, n["style"] = 0, n;
            }["apply"]())["adUnitId"] = t["ad_banner_id"], n["adIntervals"] = 30, n["style"] = function () {
              var t,
                n = to,
                r = ro,
                e = n[3];
              return (t = function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "height",
                    e = "left",
                    a = "top",
                    u = "width";
                  return Pu(t = {}, "height", 0), Pu(t, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), (n = t)["height"] = 0, n["left"] = 0, n["top"] = 0, n["width"] = 0, n;
                }["apply"]())["height"] = 0, t["left"] = 0, t["top"] = 0, t["width"] = 0, t;
              }["apply"]())["height"] = i["windowHeight"] - 80, t["left"] = 0, t["top"] = 500, t["width"] = i["windowWidth"], t;
            }["apply"](), n;
          }["apply"]()), this["ad_banner"]["onResize"](function (t) {
            var n = to,
              e = "ad_banner",
              a = "style";
            r["ad_banner"]["style"]["top"] = i["windowHeight"] - r["ad_banner"]["style"]["realHeight"], r["ad_banner"]["style"]["left"] = i["windowWidth"] / 2 - r["ad_banner"]["style"]["realWidth"] / 2;
          }), this["ad_banner"]["onError"](function () {})));
        }, O["showBanner"] = function (t) {
          var n = to,
            r = n[2],
            i = "ad_banner";
          this["platform"]() && this["ad_banner"] && (t ? this["ad_banner"]["show"]() : this["ad_banner"]["hide"]());
        }, O["initInter"] = function (t) {
          var n,
            r = to,
            i = "ad_inter_id",
            e = "ad_inter";
          (n = this["platform"]()) && (t && "" == t["ad_inter_id"] || !t["ad_inter_id"] || null == this["ad_inter"] && (this["ad_inter"] = n["createInterstitialAd"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "adUnitId";
              return (t = Pu({}, "adUnitId", 0))["adUnitId"] = 0, t;
            }["apply"]())["adUnitId"] = t["ad_inter_id"], n;
          }["apply"]()), this["ad_inter"]["onError"](function () {})));
        }, O["showInter"] = function () {
          var t = to,
            n = "ad_inter";
          this["platform"]() && this["ad_inter"] && this["ad_inter"]["show"]();
        }, O["initVideo"] = function (t) {
          var n,
            r,
            i = to,
            e = i[5],
            a = "ad_video";
          (n = this["platform"]()) && t && t["ad_video_id"] && ((r = this)["ad_video"] || (r["ad_video"] = n["createRewardedVideoAd"](function () {
            var n,
              r = to,
              i = r[6];
            return (n = function () {
              var t,
                n,
                r = to[6],
                i = "adUnitId",
                e = "multiton";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "multiton", 0), (n = t)["adUnitId"] = 0, n["multiton"] = 0, n;
            }["apply"]())["adUnitId"] = t["ad_video_id"], n["multiton"] = !0, n;
          }["apply"]()), r["ad_video"]["onError"](function (t) {
            var n = to;
            r["videoFailOnce"]("视频加载失败");
          }), r["ad_video"]["onClose"](function (t) {
            var n,
              i = to,
              e = i[5],
              a = i[14],
              u = "ins",
              s = "adbtn_name";
            t && t["isEnded"] || void 0 === t ? (b["ins"]["adAllNum"]++, h["ins"]["AddDayAdShowNum"](r["adbtn_name"], 1), g["inst"]["Video_Finish"](r["adbtn_name"]), n = h["ins"]["GetdayAdNumDatas"](r["adbtn_name"]), b["ins"]["dyWxGetUserLabel"](function () {
              var t,
                i = to,
                e = i[9],
                a = i[8];
              return (t = function () {
                var t,
                  n,
                  r = to,
                  i = r[9],
                  e = r[8],
                  a = "_event_type",
                  u = "_gift_scene",
                  s = "_gift_name",
                  o = "_gift_value",
                  c = "_gift_value_success",
                  f = "retryCount";
                return Pu(t = {}, "_event_type", 0), Pu(t, "_gift_scene", 0), Pu(t, "_gift_name", 0), Pu(t, "_gift_value", 0), Pu(t, "_gift_value_success", 0), Pu(t, "retryCount", 0), (n = t)["_event_type"] = 0, n["_gift_scene"] = 0, n["_gift_name"] = 0, n["_gift_value"] = 0, n["_gift_value_success"] = 0, n["retryCount"] = 0, n;
              }["apply"]())["_event_type"] = "game_addiction", t["_gift_scene"] = "视频奖励", t["_gift_name"] = r["adbtn_name"], t["_gift_value"] = n["clickNum"], t["_gift_value_success"] = n["showEdNum"], t["retryCount"] = 0, t;
            }["apply"]()), r["videoSuccessOnce"]("激励奖励已发放")) : r["videoFailOnce"]("视频未完整观看");
          })));
        }, O["resetVideoState"] = function () {
          var t = to,
            n = t[9],
            r = t[10];
          this["isShowVideo"] = !1, this["videoHandled"] = !1, this["videoSuccess"] = null, this["videFail"] = null, this["adbtn_name"] = null, this["videoCaller"] = null;
        }, O["videoFailOnce"] = function (t) {
          var n = to,
            r = n[2],
            i = "videoHandled",
            e = "videFail",
            u = "ins";
          this["videoHandled"] || (this["videoHandled"] = !0, this["videFail"] && this["videFail"]["call"](this["videoCaller"], t), this["resetVideoState"](), f["ins"]["resumeBGM"](), d && d["ins"]["show"](t, function () {
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
            }["apply"]())["gravity"] = "CENTER", t["bg_color"] = a(226, 69, 109, 255), t;
          }["apply"]()));
        }, O["videoSuccessOnce"] = function (t) {
          var n = to,
            r = n[2],
            i = n[10],
            e = "videoHandled",
            u = "videoSuccess",
            s = "ins";
          this["videoHandled"] || (this["videoHandled"] = !0, this["videoSuccess"] && this["videoSuccess"]["call"](this["videoCaller"], t), this["resetVideoState"](), f["ins"]["resumeBGM"](), d && d["ins"]["show"](t, function () {
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
            }["apply"]())["gravity"] = "CENTER", t["bg_color"] = a(226, 69, 109, 255), t;
          }["apply"]()));
        }, O["showVideo"] = function (t, n, r, i, e) {
          var u = to,
            s = u[10],
            o = u[3],
            c = u[2],
            v = "isShowVideo",
            l = "ad_video",
            b = "ins",
            d = "show",
            k = "inst",
            m = "AddDayAdClickNum";
          if (!this["isShowVideo"]) {
            var p, y;
            if ((p = this)["isShowVideo"] = !0, p["videoHandled"] = !1, p["freead"]) return p["isShowVideo"] = !1, void (t && t("模拟成功，激励奖励已发放"));
            if (!p["ad_video"]) return p["isShowVideo"] = !1, n && n("广告展示失败1"), void (r && r["ins"]["show"]("暂无广告，稍后重试", function () {
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
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = a(226, 69, 109, 255), t;
            }["apply"]()));
            g["inst"]["AddDayAdClickNum"](i, 1), g["inst"]["Ad_Placement_show"](i), g["inst"]["Ad_Placement_Click"](i), h["ins"]["AddDayAdClickNum"](i, 1), p["adbtn_name"] = i, p["videoSuccess"] = t, p["videFail"] = n, p["videoCaller"] = e, y = setTimeout(function () {
              var t = to;
              p["videoFailOnce"]("网络较差，广告加载失败"), p["ad_video"]["load"]();
            }, 8000), p["ad_video"]["show"]()["then"](function () {
              var t = to;
              g["inst"]["Ad_Impression"](1), clearTimeout(y), f["ins"]["pauseBGM"]();
            })["catch"](function () {
              var t = to,
                n = t[2];
              p["ad_video"]["load"]()["then"](function () {
                var t = to;
                return clearTimeout(y), p["ad_video"]["show"]();
              })["catch"](function () {
                var t = to;
                clearTimeout(y), p["rebuildVideoAd"](), p["videoFailOnce"]("广告展示失败,稍后重试");
              });
            });
          }
        }, O["rebuildVideoAd"] = function () {
          var t,
            n = to,
            r = ro,
            i = n[6],
            e = 1000,
            a = "ad_video",
            u = "call";
          if (t = this, this["ad_video"]) {
            try {
              var s, o, f, h;
              null == (s = (o = this["ad_video"])["offError"]) || s["call"](o), null == (f = (h = this["ad_video"])["offClose"]) || f["call"](h);
            } catch (n) {}
            this["ad_video"]["destroy"](), this["ad_video"] = null, setTimeout(function () {
              t["initVideo"](c);
            }, 1000);
          } else setTimeout(function () {
            t["initVideo"](c);
          }, 1000);
        }, O["initCustomRow"] = function () {
          var t,
            n,
            r = to,
            i = "ad_custom_row";
          (t = this["platform"]()) && "" != this["ad_custom_row_id"] && (n = t["getSystemInfoSync"](), null == this["ad_custom_row"] && (this["ad_custom_row"] = t["createCustomAd"](function () {
            var t,
              r = to,
              i = "apply";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "adUnitId",
                e = "adIntervals",
                a = "style";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "adIntervals", 0), Pu(t, "style", 0), (n = t)["adUnitId"] = 0, n["adIntervals"] = 0, n["style"] = 0, n;
            }["apply"]())["adUnitId"] = this["ad_custom_row_id"], t["adIntervals"] = 30, t["style"] = function () {
              var t,
                r = to,
                i = ro,
                e = r[3],
                a = 320;
              return (t = function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = r[3],
                    e = "width",
                    a = "left",
                    u = "top",
                    s = "fixed";
                  return Pu(t = {}, "width", 0), Pu(t, "left", 0), Pu(t, "top", 0), Pu(t, "fixed", 0), (n = t)["width"] = 0, n["left"] = 0, n["top"] = 0, n["fixed"] = 0, n;
                }["apply"]())["width"] = 0, t["left"] = 0, t["top"] = 0, t["fixed"] = 0, t;
              }["apply"]())["width"] = 320, t["left"] = (n["screenWidth"] - 320) / 2, t["top"] = n["screenHeight"] - 100, t["fixed"] = 0, t;
            }["apply"](), t;
          }["bind"](this)["apply"]()), this["ad_custom_row"]["onError"](function () {})));
        }, O["showCustomRow"] = function (t) {
          var n = to,
            r = n[2],
            i = "ad_custom_row";
          void 0 === t && (t = !0), this["platform"]() && this["ad_custom_row"] && (t ? this["ad_custom_row"]["show"]() : this["ad_custom_row"]["hide"]());
        }, O["initCustomCol"] = function () {
          var t,
            n,
            r = to,
            i = "ad_custom_col";
          (t = this["platform"]()) && "" != this["ad_custom_col_id"] && (n = t["getSystemInfoSync"](), null == this["ad_custom_col"] && (this["ad_custom_col"] = t["createCustomAd"](function () {
            var t,
              r = to,
              i = "apply";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "adUnitId",
                e = "adIntervals",
                a = "style";
              return Pu(t = {}, "adUnitId", 0), Pu(t, "adIntervals", 0), Pu(t, "style", 0), (n = t)["adUnitId"] = 0, n["adIntervals"] = 0, n["style"] = 0, n;
            }["apply"]())["adUnitId"] = this["ad_custom_col_id"], t["adIntervals"] = 30, t["style"] = function () {
              var t,
                r = to,
                i = ro,
                e = r[3];
              return (t = function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = r[3],
                    e = "width",
                    a = "left",
                    u = "top",
                    s = "fixed";
                  return Pu(t = {}, "width", 0), Pu(t, "left", 0), Pu(t, "top", 0), Pu(t, "fixed", 0), (n = t)["width"] = 0, n["left"] = 0, n["top"] = 0, n["fixed"] = 0, n;
                }["apply"]())["width"] = 0, t["left"] = 0, t["top"] = 0, t["fixed"] = 0, t;
              }["apply"]())["width"] = n["screenWidth"] - 20, t["left"] = 10, t["top"] = (n["screenHeight"] - 350) / 2, t["fixed"] = 0, t;
            }["apply"](), t;
          }["bind"](this)["apply"]()), this["ad_custom_col"]["onError"](function () {})));
        }, O["showCustomCol"] = function (t) {
          var n = to,
            r = n[2],
            i = "ad_custom_col";
          void 0 === t && (t = !0), this["platform"]() && this["ad_custom_col"] && (t ? this["ad_custom_col"]["show"]() : this["ad_custom_col"]["hide"]());
        }, O["activeShare"] = function (t, n) {
          var r,
            i,
            e = to,
            a = e[6],
            u = e[2],
            s = e[7],
            o = e[3],
            f = "shareInfo";
          (r = this["platform"]()) ? (g["inst"]["onShareAppMessage"](), t = t || c["shareInfo"] && c["shareInfo"]["title"] || c["logo"], i = c["shareInfo"] && c["shareInfo"]["imageName"] || this["imgsul"], r["shareAppMessage"](function () {
            var n,
              r = to,
              e = r[3];
            return (n = function () {
              var t,
                n,
                r = to,
                i = "title",
                e = "imageUrl";
              return Pu(t = {}, "title", 0), Pu(t, "imageUrl", 0), (n = t)["title"] = 0, n["imageUrl"] = 0, n;
            }["apply"]())["title"] = t, n["imageUrl"] = i, n;
          }["apply"]()), this["isShared"] = !0, this["shareTag"] = "keys", this["closeTime"] = new Date()["getTime"](), n && (this["shareCall"] = n)) : n && n();
        }, O["getAccountInfoSync"] = function () {
          var t = to,
            n = "platform",
            r = "getEnvInfoSync";
          return this["platform"]() == window["tt"] ? (y(this["platform"]()["getEnvInfoSync"]()), this["platform"]()["getEnvInfoSync"]()) : this["platform"]()["getAccountInfoSync"]();
        }, O["compareVersion"] = function (t, n) {
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
        }, O["GetUserInfo"] = function (t) {
          t();
        }, O["getFriendAuthorize"] = function (t) {
          var n = to;
          this["platform"]()["getSetting"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "success";
              return (t = Pu({}, "success", 0))["success"] = 0, t;
            }["apply"]())["success"] = function (n) {
              var r = to;
              n["authSetting"]["scope.WxFriendInteraction"] ? t && t(n) : window["wx"][yu](function () {
                var r,
                  i = to,
                  e = i[3];
                return (r = function () {
                  var t,
                    n = to,
                    r = n[3];
                  return (t = function () {
                    var t,
                      n,
                      r = to,
                      i = "scope",
                      e = "success";
                    return Pu(t = {}, "scope", 0), Pu(t, "success", 0), (n = t)["scope"] = 0, n["success"] = 0, n;
                  }["apply"]())["scope"] = 0, t["success"] = 0, t;
                }["apply"]())["scope"] = "scope.WxFriendInteraction", r["success"] = function () {
                  t && t(n);
                }, r;
              }["apply"]());
            }, n;
          }["apply"]());
        }, O["createGameClubButton"] = function (t) {
          var n,
            r = to,
            i = r[3],
            e = "platform",
            a = "GameClubButton";
          n = k["computWxPosition"](t, this["platform"]()["getSystemInfoSync"]()), this["GameClubButton"] = this["platform"]()["createGameClubButton"](function () {
            var t,
              r = to,
              i = r[3],
              e = r[2],
              a = "apply",
              u = "text";
            return (t = function () {
              var t,
                n,
                r = to,
                i = r[2],
                e = "icon",
                a = "type",
                u = "text",
                s = "style";
              return Pu(t = {}, "icon", 0), Pu(t, "type", 0), Pu(t, "text", 0), Pu(t, "style", 0), (n = t)["icon"] = 0, n["type"] = 0, n["text"] = 0, n["style"] = 0, n;
            }["apply"]())["icon"] = "green", t["type"] = "text", t["text"] = "", t["style"] = function () {
              var t,
                r = to,
                i = "left",
                e = "top",
                a = "width",
                u = "height";
              return (t = function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "left",
                    e = "top",
                    a = "width",
                    u = "height";
                  return Pu(t = {}, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), Pu(t, "height", 0), (n = t)["left"] = 0, n["top"] = 0, n["width"] = 0, n["height"] = 0, n;
                }["apply"]())["left"] = 0, t["top"] = 0, t["width"] = 0, t["height"] = 0, t;
              }["apply"]())["left"] = n["left"], t["top"] = n["top"], t["width"] = n["width"], t["height"] = n["height"], t;
            }["apply"](), t;
          }["apply"]()), this["GameClubButton"] && this["GameClubButton"]["onTap"](function (t) {
            var n = to;
            g["inst"]["GameClub_Enter"]();
          });
        }, O["showGameClubButton"] = function () {
          var t = to,
            n = "GameClubButton";
          this["GameClubButton"] && this["GameClubButton"]["show"]();
        }, O["hideGameClubButton"] = function () {
          var t = to,
            n = "GameClubButton";
          this["GameClubButton"] && this["GameClubButton"]["hide"]();
        }, O["getRank"] = function () {
          var t,
            n = to,
            r = "postMessage",
            i = "apply";
          (t = this["platform"]()) && (t["postMessage"](function () {
            var t,
              n = to,
              r = n[3],
              i = "openID";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "event",
                e = "openID";
              return Pu(t = {}, "event", 0), Pu(t, "openID", 0), (n = t)["event"] = 0, n["openID"] = 0, n;
            }["apply"]())["event"] = "openID", t["openID"] = this["openID"], t;
          }["bind"](this)["apply"]()), t["postMessage"](function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n,
                r = to[3],
                i = "event",
                e = "score";
              return Pu(t = {}, "event", 0), Pu(t, "score", 0), (n = t)["event"] = 0, n["score"] = 0, n;
            }["apply"]())["event"] = "getRank", t["score"] = h["ins"]["game_level"] - 1, t;
          }["apply"]()));
        }, O["setRank"] = function (t) {
          var n,
            r = to;
          (n = this["platform"]()) && n["setUserCloudStorage"](function () {
            var n,
              r,
              i = to,
              e = i[3];
            return (r = function () {
              var t,
                n,
                r = to,
                i = "KVDataList",
                e = "success",
                a = "fail";
              return Pu(t = {}, "KVDataList", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t)["KVDataList"] = 0, n["success"] = 0, n["fail"] = 0, n;
            }["apply"]())["KVDataList"] = [(n = {}, Pu(n, "key", "maplv"), Pu(n, "value", t["toString"]()), n)], r["success"] = function () {}, r["fail"] = function (t) {}, r;
          }["apply"]());
        }, O["uploadPkScore"] = function (t) {
          var n,
            r,
            i = to,
            e = "apply";
          (n = this["platform"]()) && (r = function () {
            var n,
              r = to,
              i = r[3],
              e = "apply";
            return (n = function () {
              var t,
                n,
                r = to,
                i = "score",
                e = "time",
                a = "wxgame";
              return Pu(t = {}, "score", 0), Pu(t, "time", 0), Pu(t, "wxgame", 0), (n = t)["score"] = 0, n["time"] = 0, n["wxgame"] = 0, n;
            }["apply"]())["score"] = t, n["time"] = Math["floor"](Date["now"]() / 1000), n["wxgame"] = function () {
              var n,
                r = to,
                i = r[3];
              return (n = function () {
                var t,
                  n = to,
                  r = n[3];
                return (t = function () {
                  var t,
                    n,
                    r = to,
                    i = "score",
                    e = "update_time";
                  return Pu(t = {}, "score", 0), Pu(t, "update_time", 0), (n = t)["score"] = 0, n["update_time"] = 0, n;
                }["apply"]())["score"] = 0, t["update_time"] = 0, t;
              }["apply"]())["score"] = t, n["update_time"] = Math["floor"](Date["now"]() / 1000), n;
            }["apply"](), n;
          }["apply"](), n["postMessage"](function () {
            var t,
              n = to,
              i = n[3];
            return (t = function () {
              var t,
                n,
                r = to,
                i = "event",
                e = "data";
              return Pu(t = {}, "event", 0), Pu(t, "data", 0), (n = t)["event"] = 0, n["data"] = 0, n;
            }["apply"]())["event"] = "uploadPkScore", t["data"] = JSON["stringify"](r), t;
          }["apply"]()));
        }, O["setOpenID"] = function () {
          var t,
            n = to,
            r = n[2];
          (t = this["platform"]()) && (y("保存分数", this["openID"]), t["postMessage"](function () {
            var t,
              n = to,
              r = n[3],
              i = "openID";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "event",
                e = "openID";
              return Pu(t = {}, "event", 0), Pu(t, "openID", 0), (n = t)["event"] = 0, n["openID"] = 0, n;
            }["apply"]())["event"] = "openID", t["openID"] = this["openID"], t;
          }["bind"](this)["apply"]()));
        }, O["getEnterOptionsSync"] = function () {
          var t = to;
          return this["platform"]()["getEnterOptionsSync"]();
        }, O["PK_Invitation"] = function (t) {
          var n,
            r = to;
          (n = this["platform"]()) && n && n["shareAppMessage"](function () {
            var n,
              r = to,
              i = r[3],
              e = r[6];
            return (n = function () {
              var t,
                n,
                r = to,
                i = r[3],
                e = "title",
                a = "imageUrl",
                u = "query";
              return Pu(t = {}, "title", 0), Pu(t, "imageUrl", 0), Pu(t, "query", 0), (n = t)["title"] = 0, n["imageUrl"] = 0, n["query"] = 0, n;
            }["apply"]())["title"] = this["pkTitile"], n["imageUrl"] = this["pkShareImage"], n["query"] = "accessInfo=" + t, n;
          }["bind"](this)["apply"]());
        }, O["isAuhorizeFriend"] = function (t) {
          var n,
            r = to;
          (n = e["localStorage"]["getItem"]("WxFriendInteraction")) && "true" === n ? t && t(!0) : this["platform"]()["getSetting"](function () {
            var n,
              r = to;
            return (n = function () {
              var t,
                n = "success";
              return (t = Pu({}, "success", 0))["success"] = 0, t;
            }["apply"]())["success"] = function (n) {
              var r = to,
                i = "authSetting";
              n["authSetting"]["scope.userInfo"] && n["authSetting"]["scope.WxFriendInteraction"] && (e["localStorage"]["setItem"]("WxFriendInteraction", "true"), t && t(!0));
            }, n;
          }["apply"]());
        }, O["triggerGC"] = function () {
          var t,
            n = to;
          (t = this["platform"]()) && t["triggerGC"]();
        }, O["getExptInfoSync"] = function () {
          var t,
            n = to,
            r = n[13],
            i = n[4],
            e = "platform",
            a = "getIns",
            u = "InitCf";
          if ((t = this["platform"]()) && this["platform"]() != window["tt"]) {
            var s;
            if (s = t["getExptInfoSync"]()) for (var o in s) y(o, s[o]), "expt_1779248773" == o && (0 == s[o] ? p["getIns"]()["InitCf"](1) : p["getIns"]()["InitCf"](2));
            t["getGameExptInfo"](function () {
              var t,
                n = to,
                r = n[5];
              return (t = function () {
                var t,
                  n,
                  r = to[5],
                  i = "keyList",
                  e = "success";
                return Pu(t = {}, "keyList", 0), Pu(t, "success", 0), (n = t)["keyList"] = 0, n["success"] = 0, n;
              }["apply"]())["keyList"] = [], t["success"] = function (t) {
                var n = to;
                t["list"]["forEach"](function (t) {
                  var n = to,
                    r = ro,
                    i = n[2],
                    e = n[4],
                    a = "expt_id",
                    u = "param_value",
                    s = "getIns",
                    o = "InitCf";
                  y("实验ID:", t["expt_id"]), y("参数名:", t["param_name"]), y("参数值:", t["param_value"]), t["param_value"], 24 == t["expt_id"] && (0 == t["param_value"] ? p["getIns"]()["InitCf"](1) : p["getIns"]()["InitCf"](2)), 27 == t["expt_id"] && (0 == t["param_value"] ? p["getIns"]()["InitCf"](1) : p["getIns"]()["InitCf"](2));
                });
              }, t;
            }["apply"]());
          }
        }, F;
      }(m)), i["_RF"]["pop"]();
    }, x;
  }["bind"](this)["apply"]();
});