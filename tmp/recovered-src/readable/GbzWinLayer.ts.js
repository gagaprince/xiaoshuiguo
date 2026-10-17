(function (t) {
  0;
  var inheritsLoose, asyncToGenerator, cclegacy, _decorator, find, Sprite, Label, Node, UIOpacity, color, tween, math, GbzAudioManager, GbzDataManager, GbzInstance, GbzResManager, ResType, GbzSdkManager, SOUtil, ENUM_CLIP, ENUM_STATUS, ENUM_UI, ENUM_Theme_Sprites_Sub, GbzBaselayer, GbzThemeLayer, Log;
  return function () {
    var x, T;
    return Pu(x = {}, "setters", 0), Pu(x, "execute", 0), (T = x).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], find = t["find"], Sprite = t["Sprite"], Label = t["Label"], Node = t["Node"], UIOpacity = t["UIOpacity"], color = t["color"], tween = t["tween"], math = t["math"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      SOUtil = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_STATUS = t["ENUM_STATUS"], ENUM_UI = t["ENUM_UI"], ENUM_Theme_Sprites_Sub = t["ENUM_Theme_Sprites_Sub"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      GbzThemeLayer = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], T.execute = function () {
      Vs && ms && (wi = "甜品大"), Vs = 0;
      var x, T;
      cclegacy._RF["push"]({}, "c03f5dy6z9CeaCQD3pKQ26H", "GbzWinLayer", void 0), x = _decorator["ccclass"], _decorator["property"], t("default", x("GbzWinLayer")(T = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, v = (n = arguments)["length"], l = new Array(v), b = 0; b < v; b++) l[b] = n[b];
          return (r = t["call"]["apply"](t, [this]["concat"](l)) || this)["panel"] = null, r["fruitsLayout"] = null, r["labNum"] = null, r["proFill"] = null, r["labPro"] = null, r["btnUse"] = null, r["collectAll"] = null, r["btnSure"] = null, r["fruitImg"] = null, r["fruitName"] = null, r["fruitBg"] = null, r["themeCount"] = 27, r["getBgshade"] = null, r["themeBg"] = null, r["title"] = null, r["curUnlockSkinIndex"] = 1, r["curCollectCount"] = 0, r["titleStr"] = ["水果", "甜品1", "蔬菜1", "动物1", "海洋1", "糖果1"], r["themeBgStr"] = ["水果", wi, "蔬菜大", "动物大", "海洋大", "糖果大"], r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          this.panel = find("style/panel", this.node), this["getBgshade"] = find("style/getBgshade", this.node), this.fruitBg = find("style/fruitBg", this.node), this.fruitImg = this.fruitBg.getChildByName("fruitImg").getComponent(Sprite), this["fruitName"] = this.fruitBg.getChildByName("name").getComponent(Label), this["fruitsLayout"] = this.panel.getChildByName("fruits"), this["labNum"] = this.panel.getChildByName("numBg").children[0].getComponent(Label), this["proFill"] = this.panel.getChildByName("proBg").children[0].getComponent(Sprite), this["labPro"] = this.panel.getChildByName("proBg").children[1].getComponent(Label), this.btnSure = this.panel.getChildByName("buttons").getChildByName("btnSure"), this.btnSure.on("click", this["btnSureFun"], this), this.btnUse = this.panel.getChildByName("btnUse"), this.collectAll = this.panel.getChildByName("collectAll"), this.btnUse.on("click", this["changeTheme"], this), this.themeBg = this.panel.getChildByName("themeBg"), this.title = this.panel.getChildByName("titleLayout").getChildByName("title");
        }, i["btnSureFun"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[8], i = n[3][8], e = n[4][11], GbzAudioManager[n[1][0]][n[2][10]](ENUM_CLIP[r[6]]), t.next = 4, GbzInstance[n[5][64]][n[0][28]]();
                case 4:
                  GbzInstance[i][e](ENUM_UI[n[7][70]], !1), GbzInstance[i][e](ENUM_UI[r[189]], !0);
                case 6:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["changeTheme"] = function () {
          GbzDataManager.ins.UseSkin = this["curUnlockSkinIndex"], GbzInstance["gameMgr"]["loadPrefabbAsync"](GbzDataManager.ins.UseSkin), GbzDataManager.ins["uploadLocalToServer"](!0), this["btnSureFun"]();
        }, i["createFruits"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, a, s, o, h, v, l, b, d, m, p, y, w, _;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  r = ro, i = (n = to)[10], e = n[4], a = r[66], s = n[16][9], o = i[31], h = n[6][5], v = i[0], l = n[5][5], b = n[3][13], d = ENUM_Theme_Sprites_Sub[this[s]], m = 0;
                case 2:
                  if (!(m < this[o][h][e[0]])) {
                    t.next = 11;
                    break;
                  }
                  return y = this[o][h][m], w = y[v](UIOpacity) || y[i[5]](UIOpacity), p = y[v](Sprite), _ = GbzThemeLayer[n[8][129]](this[s])[m], t.next = 6, GbzResManager[n[1][0]][n[17][2]](p, d[e[8]], _, d[n[2][8]] + Et + _ + i[35]);
                case 6:
                  SOUtil[n[16][17]](p, r[97]), m < this[n[13][6]] - 1 ? (w[l] = a, p[b] = color(a, a, a)) : (w[l] = r[60], p[b] = color(0, 0, 0));
                case 8:
                  m++, t.next = 2;
                  break;
                case 11:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["dataUI"] = function () {
          var t, n, r;
          return t = (n = this.curCollectCount - 1) / this.themeCount, this["proFill"]["fillRange"] = t, this["labNum"].string = n + Et + this.themeCount, this["labPro"].string = (100 * t)["toFixed"](0) + pt, r = this.curCollectCount >= this.themeCount, this["btnUse"].active = r, this["collectAll"].active = r, r;
        }, i["updateUIAfterAnimation"] = function () {
          var t, n;
          return n = this.curCollectCount / this.themeCount, this["proFill"]["fillRange"] = n, this["labNum"].string = this.curCollectCount + Et + this.themeCount, this["labPro"].string = (100 * n)["toFixed"](0) + pt, t = n >= 1, this["btnUse"].active = t, this["collectAll"].active = t, t;
        }, i["getFruit"] = function () {
          var t, n;
          t = this["curCollectCount"] - 1, n = this["fruitsLayout"]["children"][t]["getComponent"](Sprite), this["fruitName"]["string"] = n.spriteFrame["name"], this["fruitImg"].spriteFrame = n.spriteFrame;
        }, i["onDestroy"] = function () {
          this["btnSure"].off(Node["EventType"]["TOUCH_END"], this["btnSureFun"], this), this["btnUse"].off("click", this["changeTheme"], this);
        }, i["changeFruit"] = function () {
          var t, n, r, i;
          t = this["curCollectCount"] - 1, i = (n = this["fruitsLayout"]["children"][t]).getComponent(UIOpacity) || n["addComponent"](UIOpacity), r = n.getComponent(Sprite), i["opacity"] = 255, r && (r["color"] = color(255, 255, 255));
        }, i["getData"] = function () {
          var t, n, r;
          r = (n = GbzDataManager["ins"]["fakeGame_level"] || 1) - 1, this.curUnlockSkinIndex = Math["floor"]((r - 1) / 27) + 1, t = r % 27, this.curCollectCount = 0 === t ? 27 : t, Log("当前关卡:", n, "已通过关卡:", r, "解锁皮肤:", this.curUnlockSkinIndex, "收集数量:", this.curCollectCount);
        }, i["onEnable"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, a, s, o, c, f, p, g, w, M, S, A, C, x, T, L, I, R, E, D, N, P, G, O, F, B, z, U, H, V;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (r = (n = to)[5], i = n[7], e = n[3], a = n[8], s = n[6], o = n[1], c = n[4], f = n[10], p = n[16][9], g = o[0], w = c[0], M = o[8], S = n[8][132], A = n[6][166], C = f[0], x = n[9][13], T = c[15], L = c[12], I = n[7][17], R = f[31], E = c[2], D = n[5][73], N = n[0][2], P = n[3][0], G = n[2][5], O = this, this[r[179]](), !(this[p] >= GbzDataManager[g][i[69]][w])) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return", (GbzInstance[e[8]][n[4][11]](ENUM_UI[i[70]], !1), void this[a[75]]()));
                case 4:
                  return U = Math[M](this[p], this[S][w] - 1), z = Math[M](this[p], this[A][w] - 1), this[r[119]][C](Sprite)[x] = GbzResManager[g][T](ResType[L], I, this[S][U]), this[e[17]][C](Sprite)[x] = GbzResManager[g][T](ResType[L], I, this[A][z]), GbzAudioManager[g][n[2][10]](ENUM_CLIP[s[123]]), H = this[n[13][6]] - 1, F = this[R][s[5]][H], V = F.x + this[R].x, B = F.y + this[R].y, this[a[97]][E] = !0, t.next = 10, this[n[10][156]]();
                case 10:
                  this[D][E] = !0, this[s[145]](), this[D][s[27]](0, 0, 0), tween(this[D])[N](.5, function () {
                    var t;
                    return (t = function () {
                      var t;
                      return (t = Pu({}, "scale", 0)).scale = 0, t;
                    }["apply"]())["scale"] = math["v3"](1, 1, 1), t;
                  }[P](), function () {
                    var t;
                    return (t = function () {
                      var t;
                      return (t = Pu({}, "easing", 0)).easing = 0, t;
                    }["apply"]())["easing"] = "backOut", t;
                  }[P]())[G](function () {
                    O["getBgshade"]["active"] = !1, GbzAudioManager["ins"]["play"](ENUM_CLIP["getVegetableSound"]);
                  })[N](.5, function () {
                    var t;
                    return (t = function () {
                      var t, n;
                      return Pu(t = {}, "scale", 0), Pu(t, "position", 0), (n = t).scale = 0, n.position = 0, n;
                    }["apply"]())["scale"] = math["v3"](0, 0, 0), t["position"] = new math["Vec3"](V, B, 0), t;
                  }[P](), function () {
                    var t;
                    return (t = function () {
                      var t;
                      return (t = Pu({}, "easing", 0)).easing = 0, t;
                    }["apply"]())["easing"] = "backIn", t;
                  }[P]())[G](function () {
                    O["changeFruit"](), O["updateUIAfterAnimation"]();
                  })[e[7]](), GbzDataManager[g][n[12][6]] = 0, GbzDataManager[g][n[17][4]](!0), GbzDataManager[g][e[22]]();
                case 17:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onDisable"] = function () {}, i["rendor"] = function () {}, i["initSkin"] = function () {}, i["onNext"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), i["onShare"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzSdkManager.ins["platform"]() && GbzSdkManager.ins["activeShare"]();
        }, i["onBackHome"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzDataManager.ins["status"] = ENUM_STATUS["UNRUN"], GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MAIN"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_WIN"], !1), GbzInstance.uiMgr.toggle(ENUM_UI["LAYER_MENU"]);
        }, i["onPaint"] = function () {
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["LAYER_WIN"], !1);
        }, e;
      }(GbzBaselayer)) || T), cclegacy._RF["pop"]();
    }, T;
  }["bind"](this)["apply"]();
});