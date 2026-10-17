(function (t) {
  Ys && _s && (gu += vr), Ys = 0;
  var inheritsLoose, asyncToGenerator, cclegacy, sys, color, Sprite, MD5, GbzTTRequestLayer, globalxz, GbzAudioManager, GbzDataManager, GbzResManager, ResType, GbzSdkManager, GbzToastManager, SOUtil, AdPlatformBase, LevelConfig, WxIAAMgr, Log, Error_2;
  return function () {
    var _;
    Xs && ks && (yu = "authorize"), Xs = 0;
    Fu(62.75) >= Fu(Bu((Ou(us) + Ou(20) + Ou(96) + Ou($u)) / 4)) && (Ic = [7, 3, 1, 10, 2, 0, 6, 8, 5, 9, 4]);
    var x,
      T = Ic["slice"](0);
    return Pu(_ = {}, "setters", 0), Pu(_, "execute", 0), (x = _).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], sys = t["sys"], color = t["color"], Sprite = t["Sprite"];
    }, function (t) {
      MD5 = t["default"];
    }, function (t) {
      GbzTTRequestLayer = t["default"];
    }, function (t) {
      globalxz = t["globalxz"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      GbzToastManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      AdPlatformBase = t["AdPlatformBase"];
    }, function (t) {
      LevelConfig = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }, function (t) {
      Log = t["Log"], Error_2 = t["Error"];
    }], x.execute = function () {
      0;
      Rs && Ic["sort"]();
      var C = 1;
      Fu(63) >= Fu(Bu((Ou(42) + Ou(48) + Ou(Qu)) / 3)) && (C += 8), cclegacy._RF["push"]({}, "c84d2CGDMZLj6w7VDzE3H2f", "WxTTPlatform", void 0), t("WxTTPlatform", function (t) {
        Zs && ks && (gu = "主页面"), Zs = 0;
        var G = 1;
        Ns && (Lc = [9, 1, 8, 6, 3, 0, 2, 7, 5, 10, 4]), G += 4, vs && (G += 0);
        var O,
          F,
          B = Lc["slice"](0);
        return inheritsLoose(F = function () {
          for (var n, r, l = (n = arguments)["length"], b = new Array(l), d = 0; d < l; d++) b[d] = n[d];
          return (r = t["call"]["apply"](t, [this]["concat"](b)) || this)["ttURL"] = "http://api.devourad.com/douyin/gameLoginNoClickId", r["wxURL"] = "https://api.devourad.com/Wechat/gameLogin", r["isShared"] = !1, r["shareTag"] = "", r["closeTime"] = 0, r["shareCall"] = null, r["IS_OPEN_TEST"] = !1, r["isMyGameIn"] = !1, r["_platform"] = null, r["GameClubButton"] = void 0, r["pkTitile"] = "快来PK,看谁最强", r["pkShareImage"] = "https://pauljk.cn/shareImages/001.png", r["openID"] = "", r["battleCheck"] = !0, r["code"] = void 0, r["clickid"] = void 0, r["query"] = void 0, r["loginTimer"] = null, r["loginRetryCount"] = 0, r["maxLoginRetry"] = 20, r["isLogging"] = !1, r["loginURL"] = "", r["recommendPageManager"] = void 0, r["adbtn_name"] = void 0, r["videoSuccess"] = void 0, r["videoCaller"] = void 0, r["videFail"] = void 0, r["isShowVideo"] = !1, r["videoHandled"] = !1, r["imgsul"] = "https://cdn.devourad.com/dy/ShuiGuoShares/1.jpg", r;
        }, t), (O = F["prototype"])["platform"] = function () {
          return this._platform || (sys.platform == sys.Platform["WECHAT_GAME"] ? (this._platform = window["wx"], this.loginURL = this["wxURL"]) : sys.platform == sys.Platform["BYTEDANCE_MINI_GAME"] && (this._platform = window["tt"], Log("=======" + this.loginURL), this.loginURL = this["ttURL"])), this._platform;
        }, O["loadRecommend"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
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
                    var t;
                    return (t = function () {
                      var t;
                      return (t = Pu({}, "openlink", 0)).openlink = 0, t;
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
          return t = asyncToGenerator(Nu().mark(function t() {
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
          var t;
          if ((t = this["platform"]()) && t == window["tt"]) return t["getLaunchOptionsSync"]();
        }, O["isPlatformAgree"] = function () {
          return !0;
        }, O["platformAgree"] = function () {}, O["platformNotAgree"] = function () {}, O["scanCode"] = function (t) {
          var n, r;
          (n = this["platform"]()) && (r = t, n["previewImage"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "current", 0), Pu(t, "urls", 0), (n = t).current = 0, n.urls = 0, n;
            }["apply"]())["current"] = r, t["urls"] = [r], t;
          }["apply"]()));
        }, O["init"] = function (t) {
          var n, r, i;
          (i = window.wx["getUpdateManager"]())["onCheckForUpdate"](function (t) {
            Log(t["hasUpdate"]);
          }), this["getExptInfoSync"](), i["onUpdateReady"](function () {
            window["wx"]["showModal"](function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "title", 0), Pu(t, "content", 0), Pu(t, "showCancel", 0), Pu(t, "success", 0), (n = t).title = 0, n.content = 0, n.showCancel = 0, n.success = 0, n;
              }["apply"]())["title"] = "更新提示", t["content"] = "当前版本比较旧，请重启小游戏进行更新", t["showCancel"] = !1, t["success"] = function (t) {
                t["confirm"] && i["applyUpdate"]();
              }, t;
            }["apply"]());
          }), window.wx["onMessage"](function (t) {
            Error_2(JSON["stringify"](t));
          }), (n = this.platform()["getLaunchOptionsSync"]()).query && (this.clickid = n.query.clickid, this.query = n.query), r = this, this["startLogin"](t), this["loadRecommend"](), this["onFeedStatusChange"](), this["passiveShare"](), this["initAudioEnd"](GbzAudioManager), this["initBanner"](t), this["initInter"](t), this["initVideo"](t), this["initCustomCol"](), this["initCustomRow"](), this["checkTest"](), this.platform() && this.platform() != window["tt"] && this.platform()["onShow"](function (t) {
            var n;
            r.isShared && "keys" == r.shareTag && ((n = new Date()["getTime"]()) - r.closeTime >= 1750 ? r.shareCall && (r.shareCall(), r.shareCall = null) : GbzToastManager["ins"]["show"]("请转发到群或好友哦！", function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
            }["apply"]()), r.isShared = !1, r.shareTag = "", r.closeTime = n);
            r["checkMyGamaIn"](t["scene"]), r["battleCheck"] = !0;
          });
        }, O["startLogin"] = function (t) {
          this["loginRetryCount"] = 0, this["tryLogin"](t);
        }, O["tryLogin"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
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
                  throw new Error_2(s[e[169]] || e[253]);
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
          var n, r;
          (n = this, this.loginRetryCount++, this.loginRetryCount >= 3) ? this["stopLoginRetry"]() : (r = 3000 * this.loginRetryCount, r = Math["min"](r, 30000), r += 1000 * Math["random"](), Log("外层第 " + this.loginRetryCount + " 次重试，将在 " + Math["round"](r / 1000) + " 秒后"), setTimeout(function () {
            return n["tryLogin"](t);
          }, r));
        }, O["loginSuccess"] = function (t) {
          this["stopLoginRetry"](), this.openID = t["data"]["openid"], this["setOpenID"](), this["loginEd"](), WxIAAMgr.inst["setOpenId"](this.openID), WxIAAMgr.inst["checkLogin"](t), GbzSdkManager["ins"]["get_level_data"](), this["storeFeedData"]();
        }, O["stopLoginRetry"] = function () {
          this["loginRetryCount"] = 0, this.loginTimer && (clearInterval(this.loginTimer), this.loginTimer = null);
        }, O["wxLogin"] = function () {
          var t;
          return t = this, new Promise(function (n, r) {
            t["platform"]()["login"](function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "success", 0), Pu(t, "fail", 0), (n = t).success = 0, n.fail = 0, n;
              }["apply"]())["success"] = function (t) {
                t.code ? n(t.code) : r("wx.login failed");
              }, t["fail"] = r, t;
            }["apply"]());
          });
        }, O["requestLogin"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n, r) {
            var i, a, u, o, c;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return a = (i = to)[6], u = i[3][0], o = this[a[109]], c = sys[a[2]] == sys[a[42]][i[9][56]] ? function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "code", 0), (n = t).appid = 0, n.sign = 0, n.code = 0, n;
                    }["apply"]()).appid = r.appid, t.sign = r.sign, t["code"] = n, t;
                  }[u]() : function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "appid", 0), Pu(t, "sign", 0), Pu(t, "code", 0), (n = t).appid = 0, n.sign = 0, n.code = 0, n;
                    }["apply"]()).appid = r.appid, t["sign"] = MD5["hex_md5"](r.appid + r["appKey"] + n), t["code"] = n, t;
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
              a++, SOUtil["httpRequest"](t, n, function (t) {
                if (t) i(t);else {
                  var c;
                  if (a >= r) return void e(new Error_2("登录请求失败，已重试 " + a + " 次"));
                  c = 1000 * Math["pow"](2, a - 1), c = Math["min"](c, 30000), c += 800 * Math["random"]() - 400, setTimeout(u, c);
                }
              });
            }();
          });
        }, O["openCustomerServiceConversation"] = function () {
          var t;
          (t = this["platform"]()) && t != window["tt"] && t["openCustomerServiceConversation"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "sessionFrom", 0), Pu(t, "showMessageCard", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).sessionFrom = 0, n.showMessageCard = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["sessionFrom"] = gu, t["showMessageCard"] = !0, t["success"] = function (t) {
              t["path"], t["query"];
            }, t["fail"] = function (t) {}, t;
          }["apply"]());
        }, O["loginFeedback"] = function (t, n) {
          var r;
          r = this, this["platform"]()["login"](function () {
            var i;
            return (i = function () {
              var t;
              return (t = Pu({}, "success", 0)).success = 0, t;
            }["apply"]())["success"] = function (i) {
              i.code ? (r.code = i.code, Log(r["openID"] + "-----self.openid-------"), SOUtil["httpRequest"]("https://api.devourad.com/Wechat/feedback", function () {
                var i;
                return (i = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "appid", 0), Pu(t, "openid", 0), Pu(t, "feedback_type", 0), Pu(t, "feedback_content", 0), Pu(t, "sign", 0), (n = t).appid = 0, n.openid = 0, n.feedback_type = 0, n.feedback_content = 0, n.sign = 0, n;
                  }["apply"]())["appid"] = 0, t["openid"] = 0, t["feedback_type"] = 0, t["feedback_content"] = 0, t["sign"] = 0, t;
                }["apply"]()).appid = globalxz.appid, i["openid"] = r["openID"], i["feedback_type"] = t, i["feedback_content"] = n, i["sign"] = MD5["hex_md5"](globalxz.appid + globalxz["appKey"]), i;
              }["apply"](), function (t) {
                1 == t["code"] || Log("提交失败！" + t["errmsg"]);
              })) : Log("登录失败！" + i["errMsg"]);
            }, i;
          }["apply"]());
        }, O["loginEd"] = function () {
          this["query"] && this["reportScene"]();
        }, O["storeFeedData"] = function () {
          var t, n;
          (t = this["platform"]()) && t == window["tt"] && (n = Date["now"]() + 7200000, t["storeFeedData"](function () {
            for (var t, s = 0, o = C; s < 11;) switch (++s, o) {
              case 5:
                return t;
              case 7:
                t.extra = "extra", o = 3;
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
                    b = Gu(B);
                  try {
                    for (b.s(); !(n = b.n()).done;) {
                      var d = n.value;
                      if (-1 == d) ;else if (0 == d) {
                        t.rightValue = 0;
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
                                    if (9 != d) 10 != d || (t.fail = 0);else Pu(k = {}, "scene", 0), Pu(k, "contentID", 0), Pu(k, "leftValue", 0), Pu(k, "operator", 0), Pu(k, "rightValue", 0), Pu(k, "status", 0), Pu(k, "extra", 0), Pu(k, "success", 0), Pu(k, "fail", 0), t = k;
                                  } else t.contentID = 0;
                                } else t.extra = 0;
                              } else t.leftValue = 0;
                            } else t.success = 0;
                          } else t.operator = 0;
                        } else t.status = 0;
                      } else t.scene = 0;
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
          var t;
          (t = this["platform"]()) && t == window["tt"] && t["storeFeedData"](function () {
            var t,
              n,
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
                      for (var t, n, d = 0, k = G; d < 11;) switch (++d, k) {
                        case 4:
                          n.scene = 0, k = 8;
                          break;
                        case 5:
                          Pu(t = {}, "scene", 0), Pu(t, "contentID", 0), Pu(t, "leftValue", 0), Pu(t, "operator", 0), Pu(t, "rightValue", 0), Pu(t, "status", 0), Pu(t, "extra", 0), Pu(t, "success", 0), Pu(t, "fail", 0), n = t, k = 4;
                          break;
                        case 6:
                          n.leftValue = 0, k = 1;
                          break;
                        case 1:
                          n.operator = 0, k = 2;
                          break;
                        case 3:
                          n.status = 0, k = 7;
                          break;
                        case 8:
                          n.contentID = 0, k = 6;
                          break;
                        case 9:
                          n.fail = 0, k = 10;
                          break;
                        case 10:
                          return n;
                        case 2:
                          n.rightValue = 0, k = 3;
                          break;
                        case 0:
                          n.success = 0, k = 9;
                          break;
                        case 7:
                          n.extra = 0, k = 0;
                      }
                    }["apply"]();
                    break;
                  case 8:
                    t.extra = "extra";
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
          var t, n;
          (t = this["platform"]()) && t == window["tt"] && (n = t["getLaunchOptionsSync"](), Log("onFeedStatusChange========" + n.scene), "3041" === n.scene["slice"](-4) && t["onFeedStatusChange"](function (t) {
            t["type"];
          }));
        }, O["reportScene"] = function () {
          var t;
          (t = this["platform"]()) && t["reportScene"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "sceneId", 0), Pu(t, "costTime", 0), Pu(t, "dimension", 0), Pu(t, "metric", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).sceneId = 0, n.costTime = 0, n.dimension = 0, n.metric = 0, n.success = 0, n.fail = 0, n;
            }.apply())["sceneId"] = 7001, t["costTime"] = 350, t["dimension"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "d1", 0)).d1 = 0, t;
                }["apply"]())["d1"] = 0, t;
              }["apply"]())["d1"] = "2.1.0", t;
            }.apply(), t["metric"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "m1", 0)).m1 = 0, t;
                }["apply"]())["m1"] = 0, t;
              }["apply"]())["m1"] = "546", t;
            }.apply(), t["success"] = function (t) {}, t["fail"] = function (t) {}, t;
          }["apply"]());
        }, O["reportSceneAgain"] = function () {
          var t;
          (t = this["platform"]()) && t["reportScene"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "sceneId", 0), Pu(t, "costTime", 0), Pu(t, "dimension", 0), Pu(t, "metric", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).sceneId = 0, n.costTime = 0, n.dimension = 0, n.metric = 0, n.success = 0, n.fail = 0, n;
            }.apply())["sceneId"] = 1020407, t["costTime"] = 350, t["dimension"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "d1", 0)).d1 = 0, t;
                }["apply"]())["d1"] = 0, t;
              }["apply"]())["d1"] = "2.1.0", t;
            }.apply(), t["metric"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "m1", 0)).m1 = 0, t;
                }["apply"]())["m1"] = 0, t;
              }["apply"]())["m1"] = "546", t;
            }.apply(), t["success"] = function (t) {}, t["fail"] = function (t) {}, t;
          }["apply"]());
        }, O["requestFeedSubscribe"] = function (t) {
          this["platform"]()["requestFeedSubscribe"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "type", 0), Pu(t, "scene", 0), Pu(t, "contentIDs", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).type = 0, n.scene = 0, n.contentIDs = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["type"] = "play", n["scene"] = 3, n["contentIDs"] = ["CONTENT12902095106"], n["success"] = function (n) {
              Log(n.success), GbzTTRequestLayer["isOnRequest"] = n.success, n.success && (t["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "game", "获得奖励"));
            }, n["fail"] = function (t) {
              Log(t["errMsg"]);
            }, n;
          }["apply"]());
        }, O["checkFeedSubscribeStatus"] = function (t) {
          var n;
          (n = this["platform"]()) && n["checkFeedSubscribeStatus"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "type", 0), Pu(t, "scene", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).type = 0, n.scene = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["type"] = "play", n["scene"] = 3, n["success"] = function (n) {
              Log(n.status), GbzTTRequestLayer["isOnRequest"] = n.status, n.status && (t["getComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "game", "获得奖励"));
            }, n["fail"] = function (t) {
              Log(t["errMsg"]);
            }, n;
          }["apply"]());
        }, O["checkMyGamaIn"] = function (t) {
          var n;
          n = this["platform"]()["getAppBaseInfo"]()["SDKVersion"], this["compareVersion"](n, "2.29.0") > 0 && (1109 != t && 1104 != t && 1271 != t && 1257 != t || (this["isMyGameIn"] = !0, SOUtil["emit"]("selfGameInRefresh")));
        }, O["login"] = function (t) {
          t && t();
        }, O["vibrateShort"] = function (t) {
          var n;
          (n = this["platform"]()) && n["vibrateShort"](t);
        }, O["checkTest"] = function () {
          var t;
          t = this, sys.platform == sys["Platform"]["WECHAT_GAME"] ? this.platform().getSystemInfo ? this.platform().getSystemInfo(function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "success", 0)).success = 0, t;
            }["apply"]())["success"] = function (n) {
              Log("微信平台环境，", n.enableDebug), n.enableDebug ? (t.IS_OPEN_TEST = !0, t.freead = !0) : (t.IS_OPEN_TEST = !1, t.freead = !1, console["log"] = function () {}, console["info"] = function () {});
            }, n;
          }.apply()) : this.platform()["getAppBaseInfo"](function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "success", 0)).success = 0, t;
            }["apply"]())["success"] = function (n) {
              Log("微信平台环境，", n.enableDebug), n.enableDebug ? (t.IS_OPEN_TEST = !0, t.freead = !0) : (t.IS_OPEN_TEST = !1, t.freead = !1, console["log"] = function () {}, console["info"] = function () {});
            }, n;
          }.apply()) : (this["IS_OPEN_TEST"] = !0, this["freead"] = !0);
        }, O["initAudioEnd"] = function (t) {
          void 0 !== window.wx && window.wx["onAudioInterruptionEnd"](function () {
            t["ins"]["play"]();
          });
        }, O["initBanner"] = function (t) {
          var n, r, i;
          (r = this, !(n = this["platform"]()) || t && "" == t.ad_banner_id || !t.ad_banner_id) || (i = n["getSystemInfoSync"](), null == this.ad_banner && (this.ad_banner = n["createBannerAd"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "adIntervals", 0), Pu(t, "style", 0), (n = t).adUnitId = 0, n.adIntervals = 0, n.style = 0, n;
            }.apply())["adUnitId"] = t["ad_banner_id"], n["adIntervals"] = 30, n["style"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "height", 0), Pu(t, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), (n = t).height = 0, n.left = 0, n.top = 0, n.width = 0, n;
                }["apply"]())["height"] = 0, t["left"] = 0, t["top"] = 0, t["width"] = 0, t;
              }["apply"]())["height"] = i["windowHeight"] - 80, t["left"] = 0, t["top"] = 500, t["width"] = i["windowWidth"], t;
            }.apply(), n;
          }["apply"]()), this.ad_banner["onResize"](function (t) {
            r.ad_banner.style["top"] = i["windowHeight"] - r.ad_banner.style["realHeight"], r.ad_banner.style["left"] = i["windowWidth"] / 2 - r.ad_banner.style["realWidth"] / 2;
          }), this.ad_banner["onError"](function () {})));
        }, O["showBanner"] = function (t) {
          this["platform"]() && this.ad_banner && (t ? this.ad_banner["show"]() : this.ad_banner["hide"]());
        }, O["initInter"] = function (t) {
          var n;
          (n = this["platform"]()) && (t && "" == t.ad_inter_id || !t.ad_inter_id || null == this.ad_inter && (this.ad_inter = n["createInterstitialAd"](function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "adUnitId", 0)).adUnitId = 0, t;
            }["apply"]())["adUnitId"] = t["ad_inter_id"], n;
          }["apply"]()), this.ad_inter["onError"](function () {})));
        }, O["showInter"] = function () {
          this["platform"]() && this.ad_inter && this.ad_inter["show"]();
        }, O["initVideo"] = function (t) {
          var n, r;
          (n = this["platform"]()) && t && t["ad_video_id"] && ((r = this).ad_video || (r.ad_video = n["createRewardedVideoAd"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "multiton", 0), (n = t).adUnitId = 0, n.multiton = 0, n;
            }["apply"]())["adUnitId"] = t["ad_video_id"], n["multiton"] = !0, n;
          }["apply"]()), r.ad_video["onError"](function (t) {
            r["videoFailOnce"]("视频加载失败");
          }), r.ad_video["onClose"](function (t) {
            var n;
            t && t["isEnded"] || void 0 === t ? (GbzSdkManager.ins["adAllNum"]++, GbzDataManager.ins["AddDayAdShowNum"](r.adbtn_name, 1), WxIAAMgr["inst"]["Video_Finish"](r.adbtn_name), n = GbzDataManager.ins["GetdayAdNumDatas"](r.adbtn_name), GbzSdkManager.ins["dyWxGetUserLabel"](function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "_event_type", 0), Pu(t, "_gift_scene", 0), Pu(t, "_gift_name", 0), Pu(t, "_gift_value", 0), Pu(t, "_gift_value_success", 0), Pu(t, "retryCount", 0), (n = t)._event_type = 0, n._gift_scene = 0, n._gift_name = 0, n._gift_value = 0, n._gift_value_success = 0, n.retryCount = 0, n;
              }["apply"]())["_event_type"] = "game_addiction", t["_gift_scene"] = "视频奖励", t["_gift_name"] = r["adbtn_name"], t["_gift_value"] = n["clickNum"], t["_gift_value_success"] = n["showEdNum"], t["retryCount"] = 0, t;
            }["apply"]()), r["videoSuccessOnce"]("激励奖励已发放")) : r["videoFailOnce"]("视频未完整观看");
          })));
        }, O["resetVideoState"] = function () {
          this["isShowVideo"] = !1, this["videoHandled"] = !1, this["videoSuccess"] = null, this["videFail"] = null, this["adbtn_name"] = null, this["videoCaller"] = null;
        }, O["videoFailOnce"] = function (t) {
          this.videoHandled || (this.videoHandled = !0, this.videFail && this.videFail["call"](this["videoCaller"], t), this["resetVideoState"](), GbzAudioManager.ins["resumeBGM"](), GbzToastManager && GbzToastManager.ins["show"](t, function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
            }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
          }["apply"]()));
        }, O["videoSuccessOnce"] = function (t) {
          this.videoHandled || (this.videoHandled = !0, this.videoSuccess && this.videoSuccess["call"](this["videoCaller"], t), this["resetVideoState"](), GbzAudioManager.ins["resumeBGM"](), GbzToastManager && GbzToastManager.ins["show"](t, function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
            }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
          }["apply"]()));
        }, O["showVideo"] = function (t, n, r, i, e) {
          if (!this.isShowVideo) {
            var p, y;
            if ((p = this).isShowVideo = !0, p["videoHandled"] = !1, p["freead"]) return p.isShowVideo = !1, void (t && t("模拟成功，激励奖励已发放"));
            if (!p.ad_video) return p.isShowVideo = !1, n && n("广告展示失败1"), void (r && r.ins.show("暂无广告，稍后重试", function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "gravity", 0), Pu(t, "bg_color", 0), (n = t).gravity = 0, n.bg_color = 0, n;
              }["apply"]())["gravity"] = "CENTER", t["bg_color"] = color(226, 69, 109, 255), t;
            }["apply"]()));
            WxIAAMgr.inst.AddDayAdClickNum(i, 1), WxIAAMgr.inst["Ad_Placement_show"](i), WxIAAMgr.inst["Ad_Placement_Click"](i), GbzDataManager.ins.AddDayAdClickNum(i, 1), p["adbtn_name"] = i, p["videoSuccess"] = t, p["videFail"] = n, p["videoCaller"] = e, y = setTimeout(function () {
              p["videoFailOnce"]("网络较差，广告加载失败"), p["ad_video"]["load"]();
            }, 8000), p.ad_video.show()["then"](function () {
              WxIAAMgr["inst"]["Ad_Impression"](1), clearTimeout(y), GbzAudioManager["ins"]["pauseBGM"]();
            })["catch"](function () {
              p["ad_video"]["load"]()["then"](function () {
                return clearTimeout(y), p["ad_video"]["show"]();
              })["catch"](function () {
                clearTimeout(y), p["rebuildVideoAd"](), p["videoFailOnce"]("广告展示失败,稍后重试");
              });
            });
          }
        }, O["rebuildVideoAd"] = function () {
          var t;
          if (t = this, this.ad_video) {
            try {
              var s, o, f, h;
              null == (s = (o = this.ad_video)["offError"]) || s.call(o), null == (f = (h = this.ad_video)["offClose"]) || f.call(h);
            } catch (n) {}
            this.ad_video["destroy"](), this.ad_video = null, setTimeout(function () {
              t["initVideo"](globalxz);
            }, 1000);
          } else setTimeout(function () {
            t["initVideo"](globalxz);
          }, 1000);
        }, O["initCustomRow"] = function () {
          var t, n;
          (t = this["platform"]()) && "" != this["ad_custom_row_id"] && (n = t["getSystemInfoSync"](), null == this.ad_custom_row && (this.ad_custom_row = t["createCustomAd"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "adIntervals", 0), Pu(t, "style", 0), (n = t).adUnitId = 0, n.adIntervals = 0, n.style = 0, n;
            }.apply())["adUnitId"] = this["ad_custom_row_id"], t["adIntervals"] = 30, t["style"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "width", 0), Pu(t, "left", 0), Pu(t, "top", 0), Pu(t, "fixed", 0), (n = t).width = 0, n.left = 0, n.top = 0, n.fixed = 0, n;
                }["apply"]())["width"] = 0, t["left"] = 0, t["top"] = 0, t["fixed"] = 0, t;
              }["apply"]())["width"] = 320, t["left"] = (n["screenWidth"] - 320) / 2, t["top"] = n["screenHeight"] - 100, t["fixed"] = 0, t;
            }.apply(), t;
          }["bind"](this)["apply"]()), this.ad_custom_row["onError"](function () {})));
        }, O["showCustomRow"] = function (t) {
          void 0 === t && (t = !0), this["platform"]() && this.ad_custom_row && (t ? this.ad_custom_row["show"]() : this.ad_custom_row["hide"]());
        }, O["initCustomCol"] = function () {
          var t, n;
          (t = this["platform"]()) && "" != this["ad_custom_col_id"] && (n = t["getSystemInfoSync"](), null == this.ad_custom_col && (this.ad_custom_col = t["createCustomAd"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "adUnitId", 0), Pu(t, "adIntervals", 0), Pu(t, "style", 0), (n = t).adUnitId = 0, n.adIntervals = 0, n.style = 0, n;
            }.apply())["adUnitId"] = this["ad_custom_col_id"], t["adIntervals"] = 30, t["style"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "width", 0), Pu(t, "left", 0), Pu(t, "top", 0), Pu(t, "fixed", 0), (n = t).width = 0, n.left = 0, n.top = 0, n.fixed = 0, n;
                }["apply"]())["width"] = 0, t["left"] = 0, t["top"] = 0, t["fixed"] = 0, t;
              }["apply"]())["width"] = n["screenWidth"] - 20, t["left"] = 10, t["top"] = (n["screenHeight"] - 350) / 2, t["fixed"] = 0, t;
            }.apply(), t;
          }["bind"](this)["apply"]()), this.ad_custom_col["onError"](function () {})));
        }, O["showCustomCol"] = function (t) {
          void 0 === t && (t = !0), this["platform"]() && this.ad_custom_col && (t ? this.ad_custom_col["show"]() : this.ad_custom_col["hide"]());
        }, O["activeShare"] = function (t, n) {
          var r, i;
          (r = this["platform"]()) ? (WxIAAMgr["inst"]["onShareAppMessage"](), t = t || globalxz.shareInfo && globalxz.shareInfo["title"] || globalxz["logo"], i = globalxz.shareInfo && globalxz.shareInfo["imageName"] || this["imgsul"], r["shareAppMessage"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "title", 0), Pu(t, "imageUrl", 0), (n = t).title = 0, n.imageUrl = 0, n;
            }["apply"]())["title"] = t, n["imageUrl"] = i, n;
          }["apply"]()), this["isShared"] = !0, this["shareTag"] = "keys", this["closeTime"] = new Date()["getTime"](), n && (this["shareCall"] = n)) : n && n();
        }, O["getAccountInfoSync"] = function () {
          return this.platform() == window["tt"] ? (Log(this.platform().getEnvInfoSync()), this.platform().getEnvInfoSync()) : this.platform()["getAccountInfoSync"]();
        }, O["compareVersion"] = function (t, n) {
          t = t.split(Hi), n = n.split(Hi);
          for (var u = Math["max"](t.length, n.length); t.length < u;) t.push(it);
          for (; n.length < u;) n.push(it);
          for (var s = 0; s < u; s++) {
            var o, c;
            if ((c = parseInt(t[s])) > (o = parseInt(n[s]))) return 1;
            if (c < o) return -1;
          }
          return 0;
        }, O["GetUserInfo"] = function (t) {
          t();
        }, O["getFriendAuthorize"] = function (t) {
          this["platform"]()["getSetting"](function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "success", 0)).success = 0, t;
            }["apply"]())["success"] = function (n) {
              n["authSetting"]["scope.WxFriendInteraction"] ? t && t(n) : window["wx"][""](function () {
                var r;
                return (r = function () {
                  var t;
                  return (t = function () {
                    var t, n;
                    return Pu(t = {}, "scope", 0), Pu(t, "success", 0), (n = t).scope = 0, n.success = 0, n;
                  }["apply"]())["scope"] = 0, t["success"] = 0, t;
                }["apply"]())["scope"] = "scope.WxFriendInteraction", r["success"] = function () {
                  t && t(n);
                }, r;
              }["apply"]());
            }, n;
          }["apply"]());
        }, O["createGameClubButton"] = function (t) {
          var n;
          n = SOUtil["computWxPosition"](t, this.platform()["getSystemInfoSync"]()), this.GameClubButton = this.platform()["createGameClubButton"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "icon", 0), Pu(t, "type", 0), Pu(t, "text", 0), Pu(t, "style", 0), (n = t).icon = 0, n.type = 0, n.text = 0, n.style = 0, n;
            }.apply())["icon"] = "green", t["type"] = "text", t.text = "", t["style"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), Pu(t, "height", 0), (n = t).left = 0, n.top = 0, n.width = 0, n.height = 0, n;
                }["apply"]())["left"] = 0, t["top"] = 0, t["width"] = 0, t["height"] = 0, t;
              }["apply"]()).left = n.left, t.top = n.top, t.width = n.width, t.height = n.height, t;
            }.apply(), t;
          }["apply"]()), this.GameClubButton && this.GameClubButton["onTap"](function (t) {
            WxIAAMgr["inst"]["GameClub_Enter"]();
          });
        }, O["showGameClubButton"] = function () {
          this.GameClubButton && this.GameClubButton["show"]();
        }, O["hideGameClubButton"] = function () {
          this.GameClubButton && this.GameClubButton["hide"]();
        }, O["getRank"] = function () {
          var t;
          (t = this["platform"]()) && (t.postMessage(function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "event", 0), Pu(t, "openID", 0), (n = t).event = 0, n.openID = 0, n;
            }["apply"]())["event"] = "openID", t.openID = this.openID, t;
          }["bind"](this).apply()), t.postMessage(function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "event", 0), Pu(t, "score", 0), (n = t).event = 0, n.score = 0, n;
            }["apply"]())["event"] = "getRank", t["score"] = GbzDataManager["ins"]["game_level"] - 1, t;
          }.apply()));
        }, O["setRank"] = function (t) {
          var n;
          (n = this["platform"]()) && n["setUserCloudStorage"](function () {
            var n, r;
            return (r = function () {
              var t, n;
              return Pu(t = {}, "KVDataList", 0), Pu(t, "success", 0), Pu(t, "fail", 0), (n = t).KVDataList = 0, n.success = 0, n.fail = 0, n;
            }["apply"]())["KVDataList"] = [(n = {}, Pu(n, "key", "maplv"), Pu(n, "value", t["toString"]()), n)], r["success"] = function () {}, r["fail"] = function (t) {}, r;
          }["apply"]());
        }, O["uploadPkScore"] = function (t) {
          var n, r;
          (n = this["platform"]()) && (r = function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "score", 0), Pu(t, "time", 0), Pu(t, "wxgame", 0), (n = t).score = 0, n.time = 0, n.wxgame = 0, n;
            }.apply())["score"] = t, n["time"] = Math["floor"](Date["now"]() / 1000), n["wxgame"] = function () {
              var n;
              return (n = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "score", 0), Pu(t, "update_time", 0), (n = t).score = 0, n.update_time = 0, n;
                }["apply"]())["score"] = 0, t["update_time"] = 0, t;
              }["apply"]())["score"] = t, n["update_time"] = Math["floor"](Date["now"]() / 1000), n;
            }.apply(), n;
          }.apply(), n["postMessage"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "event", 0), Pu(t, "data", 0), (n = t).event = 0, n.data = 0, n;
            }["apply"]())["event"] = "uploadPkScore", t["data"] = JSON["stringify"](r), t;
          }.apply()));
        }, O["setOpenID"] = function () {
          var t;
          (t = this["platform"]()) && (Log("保存分数", this["openID"]), t["postMessage"](function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "event", 0), Pu(t, "openID", 0), (n = t).event = 0, n.openID = 0, n;
            }["apply"]())["event"] = "openID", t.openID = this.openID, t;
          }["bind"](this)["apply"]()));
        }, O["getEnterOptionsSync"] = function () {
          return this["platform"]()["getEnterOptionsSync"]();
        }, O["PK_Invitation"] = function (t) {
          var n;
          (n = this["platform"]()) && n && n["shareAppMessage"](function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "title", 0), Pu(t, "imageUrl", 0), Pu(t, "query", 0), (n = t).title = 0, n.imageUrl = 0, n.query = 0, n;
            }["apply"]())["title"] = this["pkTitile"], n["imageUrl"] = this["pkShareImage"], n["query"] = "accessInfo=" + t, n;
          }["bind"](this)["apply"]());
        }, O["isAuhorizeFriend"] = function (t) {
          var n;
          (n = sys["localStorage"]["getItem"]("WxFriendInteraction")) && "true" === n ? t && t(!0) : this["platform"]()["getSetting"](function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "success", 0)).success = 0, t;
            }["apply"]())["success"] = function (n) {
              n.authSetting["scope.userInfo"] && n.authSetting["scope.WxFriendInteraction"] && (sys["localStorage"]["setItem"]("WxFriendInteraction", "true"), t && t(!0));
            }, n;
          }["apply"]());
        }, O["triggerGC"] = function () {
          var t;
          (t = this["platform"]()) && t["triggerGC"]();
        }, O["getExptInfoSync"] = function () {
          var t;
          if ((t = this.platform()) && this.platform() != window["tt"]) {
            var s;
            if (s = t["getExptInfoSync"]()) for (var o in s) Log(o, s[o]), "expt_1779248773" == o && (0 == s[o] ? LevelConfig.getIns().InitCf(1) : LevelConfig.getIns().InitCf(2));
            t["getGameExptInfo"](function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "keyList", 0), Pu(t, "success", 0), (n = t).keyList = 0, n.success = 0, n;
              }["apply"]())["keyList"] = [], t["success"] = function (t) {
                t["list"]["forEach"](function (t) {
                  Log("实验ID:", t.expt_id), Log("参数名:", t["param_name"]), Log("参数值:", t.param_value), t.param_value, 24 == t.expt_id && (0 == t.param_value ? LevelConfig.getIns().InitCf(1) : LevelConfig.getIns().InitCf(2)), 27 == t.expt_id && (0 == t.param_value ? LevelConfig.getIns().InitCf(1) : LevelConfig.getIns().InitCf(2));
                });
              }, t;
            }["apply"]());
          }
        }, F;
      }(AdPlatformBase)), cclegacy._RF["pop"]();
    }, x;
  }["bind"](this)["apply"]();
});