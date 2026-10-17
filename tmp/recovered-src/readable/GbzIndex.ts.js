(function (t) {
  var inheritsLoose, asyncToGenerator, cclegacy, _decorator, view, macro, Color, color, find, warn, Label, Node, UITransform, size, Graphics, ResolutionPolicy, Component, CityConfig, ENUM_RES, ENUM_UI, gameMsg, GbzDataManager, GbzInstance, GbzResManager, GbzSdkManager, SOUtil, WxIAAMgr;
  return function () {
    var T, L;
    return Pu(T = {}, "setters", 0), Pu(T, "execute", 0), (L = T).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], view = t["view"], macro = t["macro"], Color = t["Color"], color = t["color"], find = t["find"], warn = t["warn"], Label = t["Label"], Node = t["Node"], UITransform = t["UITransform"], size = t["size"], Graphics = t["Graphics"], ResolutionPolicy = t["ResolutionPolicy"], Component = t["Component"];
    }, function (t) {
      CityConfig = t["default"];
    }, function (t) {
      ENUM_RES = t["ENUM_RES"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      gameMsg = t["gameMsg"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzResManager = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }, null], L.execute = function () {
      var T, L;
      cclegacy._RF["push"]({}, "920f995b--b39-4-4b-74-8-daf-4fc1f35dea4b", "GbzIndex", void 0), T = _decorator["ccclass"], _decorator["property"], t("default", T("GbzIndex")(L = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          var n;
          return n = arguments, t["apply"](this, n) || this;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t;
          t = this, view["setResizeCallback"](function () {
            return t["setScreenReponsive"]();
          }), this["setScreenReponsive"](), GbzDataManager["ins"]["loading_rate"] = 0, macro["ENABLE_MULTI_TOUCH"] = !1, CityConfig["initFruitArr"]();
        }, i["start"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, i, e, a, u;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  i = (n = to)[1][0], e = this, GbzDataManager[i][n[5][96]](), GbzSdkManager[i][n[2][14]](), u = 0, a = function () {
                    ++u >= 2 && (GbzInstance.uiMgr["init"](), 1 == GbzDataManager["ins"]["game_level"] ? GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MAIN"], !0, asyncToGenerator(Nu().mark(function t() {
                      var n, r, i, a;
                      return Nu().wrap(function (t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = (n = to)[2], i = n[10], a = n[1][0], WxIAAMgr[r[4]][n[8][122]](), GbzDataManager[a][i[29]] = 1, e[i[6]](function () {}), GbzSdkManager[a][n[18][2]](), t.next = 7, GbzInstance[n[5][6]][n[9][49]]();
                          case 7:
                            SOUtil[r[30]](gameMsg[n[17][9]]), GbzSdkManager[a][n[7][66]]();
                          case 9:
                          case "end":
                            return t.stop();
                        }
                      }, t);
                    }))) : GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MENU"], !0, function () {
                      WxIAAMgr["inst"]["LoadFinish"](), GbzDataManager.ins["loading_rate"] = 1, GbzSdkManager.ins["getLaunchOptionsSync"](), SOUtil["emit"](gameMsg["lStartLoadAllBackUI"]), GbzSdkManager.ins["triggerGC"]();
                    }));
                  }, this[n[14][15]](function () {
                    a(), e["loadENUM_RES"](a);
                  });
                case 5:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["loadENUM_RES"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, i, e, a, u;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  i = (r = to)[4][0], e = r[1][0], a = 0;
                case 2:
                  if (!(a < ENUM_RES[i])) {
                    t.next = 10;
                    break;
                  }
                  return u = ENUM_RES[a], t.next = 6, GbzResManager[e][r[2][24]](u);
                case 6:
                  a == ENUM_RES[i] - 1 && (GbzSdkManager[e][r[7][66]](), n && n());
                case 7:
                  a++, t.next = 2;
                  break;
                case 10:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), i["loadPrefabbAsync"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, i, e, a;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return i = (r = to)[7], e = r[1][0], a = GbzDataManager[e][i[16]], t.next = 4, GbzInstance[r[5][6]][r[14][15]](a);
                case 4:
                  GbzSdkManager[e][i[66]](), n && n();
                case 6:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), i["setScreenReponsive"] = function () {
          var t, n, r, i, e;
          r = view["getDesignResolutionSize"](), n = view["getFrameSize"](), t = function () {
            view["setResolutionPolicy"](ResolutionPolicy["EXACT_FIT"]);
          }, i = r.width / r.height, e = n.width / n.height, i < 1 ? e < 1 ? e > i ? t() : view.setResolutionPolicy(ResolutionPolicy["FIXED_WIDTH"]) : t() : e > 1 ? e < i ? t() : view.setResolutionPolicy(ResolutionPolicy["FIXED_HEIGHT"]) : t();
        }, i["openFps"] = function () {
          var t;
          t = this, this["scheduleOnce"](function () {
            t["setStatsColor"]();
          }, 0);
        }, i["setStatsColor"] = function (t, n) {
          var r, i, e;
          if (void 0 === t && (t = Color["WHITE"]), void 0 === n && (n = color(0, 0, 0, 150)), !(e = find("PROFILER-NODE"))) return warn("未找到统计面板节点！");
          e["children"]["forEach"](function (n) {
            var r;
            (r = n["getComponent"](Label)) && (r["color"] = t);
          }), (i = e["getChildByName"]("BACKGROUND")) || (i = new Node("BACKGROUND"), e["addChild"](i), i.getComponent(UITransform)["setContentSize"](size(200, 150)), i["setPosition"](0, 0)), (r = i.getComponent(Graphics) || i["addComponent"](Graphics))["clear"](), r["rect"](-5, 12.5, i.getComponent(UITransform)["width"] + 10, i.getComponent(UITransform)["height"] - 10), r["fillColor"] = n, r["fill"]();
        }, e;
      }(Component)) || L), cclegacy._RF["pop"]();
    }, L;
  }["bind"](this)["apply"]();
});