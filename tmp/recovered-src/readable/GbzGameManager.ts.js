(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, asyncToGenerator, cclegacy, _decorator, Node, find, sys, Component, GbzAudioManager, GbzDataManager, GbzPoolManager, ENUM_GAME_STATE, ENUM_RESSub, ENUM_STATUS, ENUM_UI, ENUM_Theme_Sprites_Sub, ENUM_CLIP, globalxz, reporter, GbzInstance, TickCntlr, GameMgr, GbzResManager, ResType, GbzSdkManager, WxIAAMgr;
  return function () {
    var I, R;
    return Pu(I = {}, "setters", 0), Pu(I, "execute", 0), (R = I).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"], asyncToGenerator = t["asyncToGenerator"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], Node = t["Node"], find = t["find"], sys = t["sys"], Component = t["Component"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      ENUM_GAME_STATE = t["ENUM_GAME_STATE"], ENUM_RESSub = t["ENUM_RESSub"], ENUM_STATUS = t["ENUM_STATUS"], ENUM_UI = t["ENUM_UI"], ENUM_Theme_Sprites_Sub = t["ENUM_Theme_Sprites_Sub"], ENUM_CLIP = t["ENUM_CLIP"];
    }, function (t) {
      globalxz = t["globalxz"];
    }, function (t) {
      reporter = t["reporter"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      TickCntlr = t["default"];
    }, function (t) {
      GameMgr = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      WxIAAMgr = t["default"];
    }, null], R.execute = function () {
      var I, R, E, D, N, P, G;
      cclegacy._RF["push"]({}, "8dee9CGwE5NrbcsI8oQa6CF", "GbzGameManager", void 0), R = _decorator["ccclass"], E = _decorator["property"], t("default", (D = E(Node), R((G = applyDecoratedDescriptor((P = function (t) {
        var n, u;
        return inheritsLoose(u = function () {
          for (var n, r, T = (n = arguments)["length"], L = new Array(T), I = 0; I < T; I++) L[I] = n[I];
          return (r = t["call"]["apply"](t, [this]["concat"](L)) || this)["gameState"] = ENUM_GAME_STATE["isHome"], r["vegetableStr"] = ["冬瓜", "包菜", "南瓜", "土豆", "大白菜", "大蒜", "小红萝卜", "朝天椒", "洋葱", "玉米", "生姜", "生菜", Y, "红甘蓝", "胡萝卜", "花菜", "苦瓜", "茄子", "荸荠", "莲藕", "菜心", "菜瓜", "西兰花", "西红柿", "贝贝南瓜", "香菇", "黄彩椒", "黄瓜"], r["fruitStr"] = ["西瓜", "火龙果", "包菜", "葡萄", "桃子", "香蕉", "西红柿", "车厘子", "草莓", "柠檬", "石榴", "蓝莓", "榴莲", "桂圆", "柿子", "茄子", "芒果", "树莓", "橘子", "冬枣", "杨梅", "红甘蓝", "花菜", "山竹", "人参果", "椰子", "哈密瓜", "贝贝南瓜", "土豆", "桑葚", "南瓜", "黄彩椒", "荔枝"], r["sweetStr"] = ["华夫饼", "可颂", "哈密瓜蛋糕", "巧克力夹心饼干", "巧克力甜甜圈", "巧克力蛋糕", "巧克力饼干", "抹茶奶冻", "抹茶瑞士卷", "提拉米苏", "曲奇", "泡芙", "白兔蛋糕", "白巧夹心饼干", "缤纷纸杯蛋糕", "羊奶饼干", "芒果千层", "芒果布丁", "芝士甜甜圈", "花朵饼干", "草莓瑞士卷", "草莓甜甜圈", "草莓蛋糕", "草莓酱饼干", "草莓马卡龙", "菠萝包", "葡挞", "蓝色物语蛋糕", "蓝莓蛋糕", "蓝莓马卡龙", "虎皮卷", "蛋黄酥", "蝴蝶酥", "铜锣烧", "马卡龙蛋糕", "黑森林蛋糕"], r["animalsStr"] = ["企鹅", "兔子", "刺猬", "博美", "卡皮巴拉", "奶牛", "小浣熊", "小马驹", "小鸡", "小黄鸭", "松鼠", "棕熊", "橘猫", "熊猫", "狐狸", Z, "狮子", Q, $, tt, "猫头鹰", "猴子", "绵羊", "羊驼", "老虎", "萨摩耶犬", nt, "长颈鹿", "青蛙", "鹦鹉", "黄牛", rt], r["seaAnimalStr"] = ["八爪鱼", "北极虾", "夜光水母", "寄居蟹", "小丑鱼", "小海豹", "比目鱼", "水母", "河豚", "海兔", "海星", "海胆", "海螺", "海豚", "海象", "海贝", "海马", "海龟", "狮子鱼", "珊瑚虾", "白鲸", "章鱼", "虎鲸", "螃蟹", "锦鲤", "食人鱼", "鲨鱼", "鹦鹉鱼", "龙虾"], r["candyStr"] = ["双扭糖卷", "双色棒棒糖", "双色糖", "奇异果软糖", "彩条方糖", "彩纹三角糖", "棒棒糖", "棕巧糖", "橘瓣糖", "橙圈甜甜糖", "橙子软糖", "猫爪软糖", "粉旋糖结", "粉条方糖", "紫格方糖", "紫菱旋糖", "红圆果糖", "红心糖", "红莓软糖", "绿花糖", "蓝星彩糖", "蓝纹糖", "蓝花糖", "西瓜软糖", "青柠软糖", "青浪小三角", "黄星糖", "黄白糖卷"], r["NotCrircles"] = ["fruit2", "fruit4", "fruit6", "fruit9", "fruit17", "fruit30"], r["stage"] = null, r["challengeReady"] = !1, r["wait"] = !1, initializerDefineProperty(r, "blackInput", G, assertThisInitialized(r)), r["levelComp"] = void 0, r["canReviveTime"] = void 0, r["canCleanTargetTime"] = 0, r["isReviveTip"] = !1, r["rangkingConfig"] = void 0, r["videoLevel"] = 5, r["itemADCounts"] = [4, 4], r;
        }, t), (n = u["prototype"])["onLoad"] = function () {
          GbzSdkManager.ins["platform"](), GbzSdkManager.ins["onShow"](), this["getAppInfo"](), WxIAAMgr["inst"].init(globalxz), TickCntlr.ins(), reporter.init(), reporter["reportEnter_game"](1), GbzDataManager.ins.init(), GbzInstance["setGameMgr"](this), this["stage"] = find("Stage", this["node"]), globalxz["sign"] && sys["isBrowser"], this["repairSkinData"]();
        }, n["getAppInfo"] = function () {
          var t;
          sys["isBrowser"] ? globalxz.setAppid() : (t = GbzSdkManager["ins"]["getAccountInfoSync"](), sys.platform == sys.Platform["WECHAT_GAME"] && (globalxz.setAppid(t.miniProgram.appId), t.miniProgram.version.length > 0 && (globalxz.version = t.miniProgram.version)), sys.platform == sys.Platform["BYTEDANCE_MINI_GAME"] && (globalxz.setAppid(t.microapp.appId), t.microapp.mpVersion.length > 0 && (globalxz.version = t.microapp.mpVersion)));
        }, n["loadPrefabb"] = function (t) {
          GbzResManager["ins"]["load"](ENUM_RESSub[t]);
        }, n["loadPrefabbAsync"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t(n) {
            var r, i, e;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return i = (r = to)[1][0], e = r[2][24], t.next = 3, GbzResManager[i][e](ENUM_Theme_Sprites_Sub[n]);
                case 3:
                  return t.next = 5, GbzResManager[i][e](ENUM_RESSub[n]);
                case 5:
                case "end":
                  return t.stop();
              }
            }, t);
          })), function (n) {
            var r;
            return r = arguments, t["apply"](this, r);
          };
        }(), n["Restart"] = function () {
          this["onGameStart"]();
        }, n["onGameStart"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[11], reporter[r[110]](), GbzDataManager[n[1][0]][r[108]](), t.next = 5, this[n[2][14]]();
                case 5:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), n["onGameOver"] = function (t, n) {
          var r;
          GbzDataManager.ins.status != ENUM_STATUS.UNRUN && (r = 2, GbzDataManager.ins.status = ENUM_STATUS.UNRUN, t == ENUM_UI["LAYER_LOSE_FULL"] ? r = 2 : (t == ENUM_UI["LAYER_WIN"] && (reporter["reportGamePass"](), WxIAAMgr["inst"]["Level_Pass"](GbzDataManager.ins["fakeGame_level"])), r = 1, GbzSdkManager.ins["setRank"](GbzDataManager.ins["game_level"]), GbzDataManager.ins["AddCurLv"](1), GbzDataManager.ins["store"]()), this["scheduleOnce"](function () {
            n && n(), GbzInstance["uiMgr"]["toggle"](t);
          }, r));
        }, n["onGameRevive"] = function () {}, n["init"] = function () {
          var t;
          return t = asyncToGenerator(Nu().mark(function t() {
            var n, r, i, e, u, s, o, c, f, h, d, k;
            return Nu().wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  return r = (n = to)[4], i = n[2], e = n[8], u = n[10], s = n[5], o = n[1][0], c = n[12][68], f = n[3][8], h = n[4][11], d = n[7][85], k = this, GbzAudioManager[o][n[7][206]](ENUM_CLIP[n[9][95]]), this[c] = GbzResManager[o][r[15]](ResType[i[76]], i[33], c), GbzDataManager[o][r[9]] = ENUM_STATUS[n[3][19]], GbzInstance[f][h](ENUM_UI[e[15]]), GbzInstance[f][h](ENUM_UI[e[22]], !1), this[d] && (this[d][u[0]](GameMgr)[s[41]](), this[d][s[21]]()), this[u[6]](asyncToGenerator(Nu().mark(function t() {
                    var n;
                    return Nu().wrap(function (t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          k[(n = to)[7][85]] = GbzPoolManager[n[1][0]][n[5][13]](n[9][210], k[n[3][107]]);
                        case 2:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }))), t.next = 11, GbzInstance[s[64]][n[1][129]]();
                case 11:
                case "end":
                  return t.stop();
              }
            }, t, this);
          })), function () {
            var n;
            return n = arguments, t["apply"](this, n);
          };
        }(), n["onGameSkill"] = function () {
          if (this["isValid"]) switch (GbzDataManager.ins["skillIndex"]) {
            case 0:
              GbzDataManager.ins.status = ENUM_STATUS.UNRUN, GameMgr.instance["btnRemoveFun"](1, function () {
                GbzDataManager.ins["status"] = ENUM_STATUS["RUN"], GbzDataManager.ins["skillIndex"] = -1;
              });
              break;
            case 1:
              GbzDataManager.ins.status = ENUM_STATUS.UNRUN, GameMgr.instance["btnDisturbFun"](function () {
                GbzDataManager.ins["status"] = ENUM_STATUS["RUN"], GbzDataManager.ins["skillIndex"] = -1;
              });
          }
        }, n["repairSkinData"] = function () {
          if (GbzDataManager.ins.skinCount.length < GbzDataManager.ins.themeType.length - 1) {
            for (var c = parseInt(sys.localStorage["getItem"]("isThemeTip")), h = 0; h < GbzDataManager.ins.themeType.length - 1 - GbzDataManager.ins.skinCount.length; h++) GbzDataManager.ins.skinCount["push"](0);
            2 != c && sys.localStorage["setItem"]("isThemeTip", 1), GbzDataManager.ins["store"]();
          }
        }, u;
      }(Component))["prototype"], "blackInput", [D], (Pu(I = {}, "configurable", !0), Pu(I, "enumerable", !0), Pu(I, "writable", !0), Pu(I, "initializer", function () {
        return null;
      }), I)), N = P)) || N)), cclegacy._RF["pop"]();
    }, R;
  }["bind"](this)["apply"]();
});