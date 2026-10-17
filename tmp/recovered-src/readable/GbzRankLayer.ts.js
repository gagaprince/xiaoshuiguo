(function (t) {
  var applyDecoratedDescriptor, inheritsLoose, initializerDefineProperty, assertThisInitialized, cclegacy, _decorator, sys, find, GbzAudioManager, GbzDataManager, GbzInstance, GbzSdkManager, ENUM_CLIP, ENUM_UI, GbzBaselayer, GridLayerListView, RankDataComp;
  return function () {
    var p, g;
    return Pu(p = {}, "setters", 0), Pu(p, "execute", 0), (g = p).setters = [function (t) {
      applyDecoratedDescriptor = t["applyDecoratedDescriptor"], inheritsLoose = t["inheritsLoose"], initializerDefineProperty = t["initializerDefineProperty"], assertThisInitialized = t["assertThisInitialized"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], sys = t["sys"], find = t["find"];
    }, function (t) {
      GbzAudioManager = t["default"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzSdkManager = t["default"];
    }, function (t) {
      ENUM_CLIP = t["ENUM_CLIP"], ENUM_UI = t["ENUM_UI"];
    }, function (t) {
      GbzBaselayer = t["default"];
    }, function (t) {
      GridLayerListView = t["default"];
    }, function (t) {
      RankDataComp = t["RankDataComp"];
    }, null], g.execute = function () {
      var p, g, y, w, _, M, S, A;
      cclegacy._RF["push"]({}, "c5c8cWHi+dNWpeCH5A4oaZm", "GbzRankLayer", void 0), y = _decorator["ccclass"], g = _decorator["property"], t("default", (w = y("GbzRankLayer"), _ = g(GridLayerListView), w((A = applyDecoratedDescriptor((S = function (t) {
        var n, a;
        return a = function () {
          for (var n, r, _ = (n = arguments)["length"], M = new Array(_), S = 0; S < _; S++) M[S] = n[S];
          return r = t["call"].apply(t, [this]["concat"](M)) || this, initializerDefineProperty(r, "wordList", A, assertThisInitialized(r)), r["once"] = !0, r["wordRank"] = null, r["friendRank"] = null, r["btnWord"] = null, r["btnFriend"] = null, r["btn_Close"] = null, r["panel"] = null, r["selfDataNode"] = null, r["allNum"] = 50, r["maxLevel"] = 5000, r["minLevel"] = 2500, r["nameStrs"] = [function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "headImg", 0), Pu(t, "userName", 0), Pu(t, "level", 0), Pu(t, "isPlayer", 0), (n = t).headImg = 0, n.userName = 0, n.level = 0, n.isPlayer = 0, n;
            }["apply"]())["headImg"] = "冬枣", t["userName"] = "神秘玩家", t["level"] = 6000, t["isPlayer"] = !1, t;
          }.apply()], r["selfData"] = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "headImg", 0), Pu(t, "userName", 0), Pu(t, "level", 0), Pu(t, "isPlayer", 0), (n = t).headImg = 0, n.userName = 0, n.level = 0, n.isPlayer = 0, n;
            }["apply"]())["headImg"] = "椰子", t["userName"] = "自己", t["level"] = 1, t["isPlayer"] = !0, t;
          }.apply(), r["curlLevel"] = 0, r["namePrefixes"] = ["飞翔的", "奔跑的", "跳跃的", "可爱的", "神秘的", "勇敢的", "聪明的", "快乐的", "忧郁的", "疯狂的", "安静的", "闪亮的", "强大的", "敏捷的", "温柔的", "调皮的", "认真的", "懒惰的", "勤奋的", "幽默的", "Flying", "Running", "Jumping", "Cute", "Mysterious", "Brave", "Clever", "Happy", "Melancholy", "Crazy", "Quiet", "Shiny", "Powerful", "Agile", "Gentle", "Naughty", "Serious", "Lazy", "Diligent", "Humorous"], r["nameSuffixes"] = ["小猪", "小猫", "小狗", "小鸟", "小兔", "小熊", "小虎", "小龙", "小马", "小羊", "小猴", "小鸡", "小鸭", "小鱼", "熊猫", "狐狸", "狼人", "企鹅", "恐龙", "独角兽", "凤凰", "狮子", "老虎", "大象", "长颈鹿", "河马", "斑马", "袋鼠", "Piggy", "Kitty", "Puppy", "Birdie", "Bunny", "Bear", "Tiger", "Dragon", "Pony", "Lamb", "Monkey", "Chick", "Duckling", "Fish", "Panda", "Fox", "Werewolf", "Penguin", "Dinosaur", "Unicorn", "Phoenix", "Lion", "Tiger", "Elephant", "Giraffe", "Hippo", "Zebra", "Kangaroo"], r["specialNames"] = ["游戏达人", "闯关高手", "速度之王", "无尽挑战者", "关卡征服者", "冒险家", "探索者", "勇者无敌", "极限玩家", "终极战士", "地狱使者", "无敌玩家", "无敌战士", "孤独者", zr, "钟理", "Game Master", "Level Pro", "Speed King", "Endless Challenger", "Stage Conqueror", "Adventurer", "Explorer", "Invincible Hero", "Extreme Gamer", "Ultimate Warrior", "Hell Messenger", "Invincible Player", "Invincible Warrior", "Lonely One", "Void", "Chung Li"], r["chineseFamilyNames"] = [Hr, Vr, Wr, Jr, jr, qr, Kr, Yr, Xr, Zr, "Zhao", "Qian", "Sun", "Li", "Zhou", "Wu", "Zheng", "Wang", "Feng", "Chen"], r["chineseGivenNames"] = ["小明", "小红", "小刚", "小丽", "小华", "小强", "小美", "小杰", "文静", "建国", "建军", "爱国", "爱民", "志强", "美丽", "秀英", "Xiaoming", "Xiaohong", "Xiaogang", "Xiaoli", "Xiaohua", "Xiaoqiang", "Xiaomei", "Xiaojie", "Wenjing", "Jianguo", "Jianjun", "Aiguo", "Aimin", "Zhiqiang", "Meili", "Xiuying"], r["usedNames"] = new Set(), r;
        }, inheritsLoose(a, t), (n = a["prototype"])["onLoad"] = function () {
          this["init"]();
        }, n["getTodayDate"] = function () {
          var t;
          return (t = new Date())["getFullYear"]() + Tt + String(t["getMonth"]() + 1).padStart(2, it) + Tt + String(t["getDate"]()).padStart(2, it);
        }, n["initRankingData"] = function () {
          var t, n, r;
          (n = sys.localStorage.getItem("namesData")) && (n = JSON["parse"](n)), t = sys.localStorage.getItem("lastUpdateDate") || "", r = this["getTodayDate"](), !n || n["length"] < this["allNum"] ? this.nameStrs = this["generateRandomData"]() : (this.nameStrs = n, t !== r && this["updateNPCLevels"]()), GbzDataManager["ins"]["rankWordDate"] = this.nameStrs, this["processPlayerData"](), sys.localStorage.setItem("namesData", JSON["stringify"](this.nameStrs)), sys.localStorage.setItem("lastUpdateDate", r);
        }, n["updateNPCLevels"] = function () {
          this.nameStrs["forEach"](function (t) {
            var n;
            t["isPlayer"] || (n = Math["floor"](4 * Math["random"]()) + 1, t["level"] += n);
          }), this.nameStrs["sort"](function (t, n) {
            return n.level - t.level;
          });
        }, n["init"] = function () {
          this.panel = find("style/panel", this["node"]), this.wordRank = this.panel.getChildByName("wordRank"), this.friendRank = this.panel.getChildByName("friendRank"), this["wordList"] = this.wordRank.getChildByName("list")["getComponent"](GridLayerListView), this.btnWord = this.panel.getChildByName("changeBg").getChildByName("btnWord"), this.btnFriend = this.panel.getChildByName("changeBg").getChildByName("btnFriend"), this.btn_Close = this.panel.getChildByName("btn_Close"), this["selfDataNode"] = this.wordRank.getChildByName("selfData"), this.btnWord.on("click", this["onWordRank"], this), this.btnFriend.on("click", this["onFriendRank"], this), this.btn_Close.on("click", this["onclose"], this);
        }, n["onEnable"] = function () {
          var t;
          (t = this["panel"].getChildByName("changeBg")).getChildByName("btnWordShow").active = !0, t.getChildByName("btnFriendShow").active = !1, this["wordRank"].active = !0, this["friendRank"].active = !1, this.curlLevel = GbzDataManager.ins["fakeGame_level"] - 1, GbzSdkManager.ins["setRank"](this.curlLevel), this["initRankingData"](), this["selfDataFun"](), GbzSdkManager.ins["hideGameClubButton"]();
        }, n["selfDataFun"] = function () {
          var t;
          t = this.selfDataNode["getComponent"](RankDataComp), -1 != this["getPlayerRank"]() ? this.selfDataNode.active = !1 : (this.selfDataNode.active = !0, t["rankImg"]["node"].active = !1, t["labRank"].string = "99+", t["userName"].string = "自己", t["level"].string = this["curlLevel"] + Pr);
        }, n["show"] = function (t) {
          if (this["node"]["active"] = !0, this.once) {
            this.once = !1;
            for (var f = [], h = 0; h < this.allNum; h++) f.push(h);
            this.wordList["setDataList"](f), this.wordList.reset(f.length, f);
          } else {
            for (var v = [], l = 0; l < this.allNum; l++) v.push(l);
            this.wordList.reset(v.length, v);
          }
        }, n["onWordRank"] = function () {
          var t;
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), (t = this["panel"].getChildByName("changeBg")).getChildByName("btnWordShow").active = !0, t.getChildByName("btnFriendShow").active = !1, this["wordRank"].active = !0, this["friendRank"].active = !1;
        }, n["onFriendRank"] = function () {
          var t;
          GbzAudioManager["ins"]["play"](ENUM_CLIP["GAME_CLICK"]), (t = this["panel"].getChildByName("changeBg")).getChildByName("btnWordShow").active = !1, t.getChildByName("btnFriendShow").active = !0, this["wordRank"].active = !1, this["friendRank"].active = !0, this["friendRankFun"]();
        }, n["onclose"] = function () {
          GbzAudioManager.ins["play"](ENUM_CLIP["GAME_CLICK"]), GbzInstance["uiMgr"]["toggle"](ENUM_UI["GbzRankLayer"], !1), GbzSdkManager.ins["showGameClubButton"]();
        }, n["generateRandomData"] = function () {
          for (var r = [], i = new Set(), e = 0; e < this["allNum"]; e++) {
            var a, u, s;
            u = this["getUniqueUsername"](e, i), s = this["getRandomHead"](), a = this["getRandomLevel"](), r["push"](function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "headImg", 0), Pu(t, "userName", 0), Pu(t, "level", 0), Pu(t, "isPlayer", 0), (n = t).headImg = 0, n.userName = 0, n.level = 0, n.isPlayer = 0, n;
              }["apply"]())["headImg"] = s, t["userName"] = u, t["level"] = a, t["isPlayer"] = !1, t;
            }["apply"]());
          }
          return r["sort"](function (t, n) {
            return n.level - t.level;
          });
        }, n["processPlayerData"] = function () {
          var t, n, r, i, e;
          (t = this, n = this["curlLevel"], this["selfData"].level = n, this.nameStrs["length"] < this.allNum && this["fillMissingData"](), this.nameStrs.sort(function (t, n) {
            return n.level - t.level;
          }), i = this.nameStrs[this.allNum - 1].level, r = this.nameStrs["findIndex"](function (n) {
            return n.userName === t["selfData"].userName;
          }), n >= i) ? (e = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "headImg", 0), Pu(t, "userName", 0), Pu(t, "level", 0), Pu(t, "isPlayer", 0), (n = t).headImg = 0, n.userName = 0, n.level = 0, n.isPlayer = 0, n;
            }["apply"]()).headImg = this.selfData.headImg, t.userName = this.selfData.userName, t["level"] = n, t["isPlayer"] = !0, t;
          }["bind"](this)["apply"](), -1 !== r ? this.nameStrs[r] = e : (this.nameStrs.push(e), this.nameStrs.sort(function (t, n) {
            return n.level - t.level;
          }), this.nameStrs["pop"]())) : -1 !== r && (this.nameStrs["splice"](r, 1), this.nameStrs.push(this["createRandomPlayer"]()), this.nameStrs.sort(function (t, n) {
            return n.level - t.level;
          }));
          this.nameStrs.sort(function (t, n) {
            return n.level - t.level;
          }), this.nameStrs["forEach"](function (n) {
            n["isPlayer"] = n.userName === t["selfData"].userName;
          });
        }, n["fillMissingData"] = function () {
          var t;
          if (!((t = this["allNum"] - this.nameStrs["length"]) <= 0)) {
            var a;
            a = new Set(), this.nameStrs["forEach"](function (t) {
              return a["add"](t["userName"]);
            });
            for (var u = 0; u < t; u++) {
              var s;
              s = this["getUniqueUsername"](u, a), this.nameStrs["push"](function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "headImg", 0), Pu(t, "userName", 0), Pu(t, "level", 0), Pu(t, "isPlayer", 0), (n = t).headImg = 0, n.userName = 0, n.level = 0, n.isPlayer = 0, n;
                }["apply"]())["headImg"] = this["getRandomHead"](), t["userName"] = s, t["level"] = this["getRandomLevel"](), t["isPlayer"] = !1, t;
              }["bind"](this)["apply"]()), a["add"](s);
            }
          }
        }, n["createRandomPlayer"] = function () {
          var t;
          return t = new Set(), this["nameStrs"]["forEach"](function (n) {
            return t["add"](n["userName"]);
          }), function () {
            var n;
            return (n = function () {
              var t, n;
              return Pu(t = {}, "headImg", 0), Pu(t, "userName", 0), Pu(t, "level", 0), Pu(t, "isPlayer", 0), (n = t).headImg = 0, n.userName = 0, n.level = 0, n.isPlayer = 0, n;
            }["apply"]())["headImg"] = this["getRandomHead"](), n["userName"] = this["getUniqueUsername"](this["nameStrs"]["length"], t), n["level"] = this["getRandomLevel"](), n["isPlayer"] = !1, n;
          }["bind"](this)["apply"]();
        }, n["getRandomLevel"] = function () {
          return Math.random() < .3 ? Math.floor(1501 * Math.random()) + 2500 : Math.floor(1000 * Math.random()) + 4001;
        }, n["onDestroy"] = function () {
          this["btnWord"].off("click", this["onWordRank"], this), this["btnFriend"].off("click", this["onFriendRank"], this), this["btn_Close"].off("click", this["onclose"], this);
        }, n["generateRandomUsername"] = function (t) {
          switch (Math.floor(3 * Math.random())) {
            case 0:
              return this.namePrefixes[Math.floor(Math.random() * this.namePrefixes.length)] + this.nameSuffixes[Math.floor(Math.random() * this.nameSuffixes.length)];
            case 1:
              return this.chineseFamilyNames[Math.floor(Math.random() * this.chineseFamilyNames.length)] + this.chineseGivenNames[Math.floor(Math.random() * this.chineseGivenNames.length)];
            case 2:
              return this.specialNames[Math.floor(Math.random() * this.specialNames.length)];
            default:
              return "神秘玩家";
          }
        }, n["getUniqueUsername"] = function (t, n) {
          var r, i;
          r = 0;
          do {
            if (i = this["generateRandomUsername"](t), ++r > 10) {
              i += Math["floor"](1000 * Math["random"]());
              break;
            }
          } while (n["has"](i) && r < 20);
          return n["add"](i), i;
        }, n["getRandomHead"] = function () {
          return GbzInstance["gameMgr"]["fruitStr"][Math["floor"](28 * Math["random"]())];
        }, n["resetRankingData"] = function () {
          sys["localStorage"]["removeItem"]("namesData"), this["initRankingData"]();
        }, n["getPlayerRank"] = function () {
          for (var r = 0; r < this.nameStrs["length"]; r++) if (this.nameStrs[r]["isPlayer"]) return r + 1;
          return -1;
        }, n["friendRankFun"] = function () {
          var t;
          (t = GbzSdkManager["ins"].platform()) && t.platform()["getOpenDataContext"]()["postMessage"](function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "event", 0)).event = 0, t;
            }["apply"]())["event"] = "LOAD_FRIEND_RANK:" + t["query"]["openid"], n;
          }["apply"]());
        }, a;
      }(GbzBaselayer))["prototype"], "wordList", [_], (Pu(p = {}, "configurable", !0), Pu(p, "enumerable", !0), Pu(p, "writable", !0), Pu(p, "initializer", function () {
        return null;
      }), p)), M = S)) || M)), cclegacy._RF["pop"]();
    }, g;
  }["bind"](this)["apply"]();
});