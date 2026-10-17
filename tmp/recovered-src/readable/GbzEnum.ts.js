(function (t) {
  xs && (Go = [13, 21, 3, 11, 15, 1, 9, 17, 18, 20, 23, 25, 8, 24, 19, 6, 16, 5, 2, 14, 4, 7, 22, 12, 0, 10]);
  var cclegacy,
    Prefab,
    SpriteFrame,
    JsonAsset,
    AudioClip,
    Sprite,
    c = Go["slice"](0);
  return function () {
    var n, r;
    return Pu(n = {}, "setters", 0), Pu(n, "execute", 0), (r = n).setters = [function (t) {
      cclegacy = t["cclegacy"], Prefab = t["Prefab"], SpriteFrame = t["SpriteFrame"], JsonAsset = t["JsonAsset"], AudioClip = t["AudioClip"], Sprite = t["Sprite"];
    }], r.execute = function () {
      Go["sort"](), cclegacy._RF["push"]({}, "22671S0d7NP/4/wnTS7ylEC", "GbzEnum", void 0), t("ENUM_STATUS", function (t) {
        return t.UNRUN = "UNRUN", t.RUN = "RUN", t;
      }({})), t("ENUM_GAME_STATE", function (t) {
        return t.isPlaying = "isPlaying", t.isPaused = "isPaused", t.isOver = "isOver", t.isHome = "isHome", t;
      }({})), t("ENUM_UIReload", function (t) {
        return t["LAYER_MENU"] = "GbzMenuLayer", t["LAYER_MAIN"] = "GbzMainLayer", t;
      }({})), t("ENUM_UI", function (t) {
        return t["LAYER_MENU"] = "GbzMenuLayer", t["LAYER_SETTING"] = "GbzSettingLayer", t["LAYER_MAIN"] = "GbzMainLayer", t["LAYER_EXIT"] = "GbzExitLayer", t["LAYER_WIN"] = "GbzWin2Layer", t["LAYER_LOSE_FULL"] = "GbzLoseFullLayer", t["LAYER_ShowGetRew"] = "GbzGetRewLayer", t["LAYER_Fans"] = "GbzFansLayer", t["LAYER_Prop_Special"] = "GbzPropSpecialLayer", t["FruitBookLayer"] = "GbzFruitBookLayer", t["CarMoveLayer"] = "GbzCarMoveLayer", t.GbzResurgenceLayer = "GbzResurgenceLayer", t.GbzGetItemLayer = "GbzGetItemLayer", t.GbzRankLayer = "GbzRankLayer", t;
      }({})), t("ENUM_CLIP", function () {
        for (var t, A = 0, C = Po; A < 26;) switch (++A, C) {
          case 17:
            t["breakWall"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "解锁坑位", t["group"] = 1, t;
            }.apply(), C = 18;
            break;
          case 24:
            t["GAME_LAND"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "水果落地", t["group"] = 1, t;
            }.apply(), C = 21;
            break;
          case 0:
            t["fullSound"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "装不下啦", t["group"] = 1, t;
            }.apply(), C = 15;
            break;
          case 5:
            t["RankIn"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "排位获得新段位", t["group"] = 2, t;
            }.apply(), C = 17;
            break;
          case 21:
            t["GAME_SPRAY"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "水果喷射", t["group"] = 1, t;
            }.apply(), C = 20;
            break;
          case 12:
            t["GAME_WIN"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "胜利", t["group"] = 2, t;
            }.apply(), C = 24;
            break;
          case 14:
            t["btn_Remove"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "水果消失", t["group"] = 1, t;
            }.apply(), C = 13;
            break;
          case 25:
            t = function () {
              var t,
                n,
                N = Gu(c);
              try {
                for (N.s(); !(n = N.n()).done;) {
                  var P = n.value;
                  if (-1 == P) ;else {
                    if (0 == P) {
                      t.lei = 0;
                      continue;
                    }
                    if (1 == P) {
                      t.GAME_PLAYBGM = 0;
                      continue;
                    }
                    if (2 == P) {
                      t.GAME_CAR = 0;
                      continue;
                    }
                    if (3 == P) {
                      t.getVegetableSound = 0;
                      continue;
                    }
                    if (4 == P) {
                      t.xiaochu_2 = 0;
                      continue;
                    }
                    if (5 == P) {
                      t.GAME_SPRAY = 0;
                      continue;
                    }
                    if (6 == P) {
                      t.GAME_WIN = 0;
                      continue;
                    }
                  }
                  if (7 != P) {
                    if (8 != P) {
                      if (9 != P) {
                        if (10 == P) return t;
                        var G;
                        if (11 != P) {
                          if (12 != P) {
                            if (13 != P) 14 != P ? 15 != P ? 16 != P ? 17 != P ? 18 != P ? 19 != P ? 20 != P ? 21 != P ? 22 != P ? 23 != P ? 24 != P ? 25 != P || (t.RankIn = 0) : t.GAME_CLICK = 0 : t.rankRolling = 0 : t.xiaochu_4 = 0 : t.btn_FruitClick = 0 : t.CITIESOUND = 0 : t.GAME_LOSE = 0 : t.sameIDHitSound = 0 : t.fullSound = 0 : t.GAME_LAND = 0 : t.GAME_BGM = 0 : t.xiaochu_1 = 0;else Pu(G = {}, "btn_FruitClick", 0), Pu(G, "getVegetableSound", 0), Pu(G, "btn_Remove", 0), Pu(G, "GAME_BGM", 0), Pu(G, "GAME_PLAYBGM", 0), Pu(G, "btn_Disturb", 0), Pu(G, "fullSound", 0), Pu(G, "sameIDHitSound", 0), Pu(G, "CITIESOUND", 0), Pu(G, "rankRolling", 0), Pu(G, "RankIn", 0), Pu(G, "breakWall", 0), Pu(G, "GAME_CLICK", 0), Pu(G, "GAME_LOSE", 0), Pu(G, "GAME_WIN", 0), Pu(G, "GAME_LAND", 0), Pu(G, "GAME_SPRAY", 0), Pu(G, "GAME_CAR", 0), Pu(G, "xiaochu_1", 0), Pu(G, "xiaochu_2", 0), Pu(G, "xiaochu_3", 0), Pu(G, "xiaochu_4", 0), Pu(G, "xiaochu_5", 0), Pu(G, "lei", 0), t = G;
                          } else t.xiaochu_5 = 0;
                        } else t.btn_Remove = 0;
                      } else t.btn_Disturb = 0;
                    } else t.breakWall = 0;
                  } else t.xiaochu_3 = 0;
                }
              } catch (t) {
                N.e(t);
              } finally {
                N.f();
              }
            }.apply(), C = 9;
            break;
          case 7:
            t["xiaochu_2"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "xiaochu_2", t["group"] = 1, t;
            }.apply(), C = 2;
            break;
          case 16:
            t["xiaochu_1"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "xiaochu_1", t["group"] = 1, t;
            }.apply(), C = 7;
            break;
          case 23:
            t["xiaochu_4"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "xiaochu_4", t["group"] = 1, t;
            }.apply(), C = 1;
            break;
          case 13:
            t["GAME_BGM"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "水果消除bgm", t["group"] = 0, t;
            }.apply(), C = 6;
            break;
          case 20:
            t["GAME_CAR"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "汽车鸣笛", t["group"] = 2, t;
            }.apply(), C = 16;
            break;
          case 3:
            t["btn_Disturb"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "刷新", t["group"] = 1, t;
            }.apply(), C = 0;
            break;
          case 10:
            t["rankRolling"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "排行榜滚动", t["group"] = 2, t;
            }.apply(), C = 5;
            break;
          case 1:
            t["xiaochu_5"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "xiaochu_5", t["group"] = 1, t;
            }.apply(), C = 19;
            break;
          case 6:
            t["GAME_PLAYBGM"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "水果消除关卡bgm", t["group"] = 0, t;
            }.apply(), C = 3;
            break;
          case 9:
            t["btn_FruitClick"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "点击水果", t["group"] = 1, t;
            }.apply(), C = 4;
            break;
          case 18:
            t["GAME_CLICK"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "ui_click", t["group"] = 1, t;
            }.apply(), C = 11;
            break;
          case 11:
            t["GAME_LOSE"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "失败", t["group"] = 2, t;
            }.apply(), C = 12;
            break;
          case 22:
            return t;
          case 15:
            t["sameIDHitSound"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "相同水果碰撞", t["group"] = 1, t;
            }.apply(), C = 8;
            break;
          case 4:
            t["getVegetableSound"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "胜利后获得蔬菜", t["group"] = 2, t;
            }.apply(), C = 14;
            break;
          case 19:
            t["lei"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "lei", t["group"] = 1, t;
            }.apply(), C = 22;
            break;
          case 2:
            t["xiaochu_3"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "xiaochu_3", t["group"] = 1, t;
            }.apply(), C = 23;
            break;
          case 8:
            t["CITIESOUND"] = function () {
              var t;
              return (t = function () {
                var t;
                return (t = function () {
                  var t, n;
                  return Pu(t = {}, "clip", 0), Pu(t, "group", 0), (n = t).clip = 0, n.group = 0, n;
                }["apply"]())["clip"] = 0, t["group"] = 0, t;
              }["apply"]())["clip"] = "磁铁音效", t["group"] = 1, t;
            }.apply(), C = 10;
        }
      }.apply()), t("ENUM_RES", [function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "game", t["content"] = Prefab, t["path"] = "prefab", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "game", t["content"] = SpriteFrame, t["path"] = "sprite", t["type"] = "sprite", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "game", t["content"] = JsonAsset, t["path"] = "json_encrypt", t["type"] = "json", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "game", t["content"] = AudioClip, t["path"] = "audios", t["type"] = "audio", t["ratio"] = .3, t;
      }.apply()]), t("ENUM_RES_SECONDARY", [function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "secondary", t["content"] = Prefab, t["path"] = "prefab/Home/", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "secondary", t["content"] = SpriteFrame, t["path"] = "sprite/Home/", t["type"] = "sprite", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "secondary", t["content"] = Prefab, t["path"] = "prefab/Game/", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "secondary", t["content"] = SpriteFrame, t["path"] = "sprite/Game/", t["type"] = "sprite", t["ratio"] = .2, t;
      }.apply()]), t("ENUM_RESSub", [function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "fruits", t["content"] = Prefab, t["path"] = "", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "sweets", t["content"] = Prefab, t["path"] = "", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "vegetable", t["content"] = Prefab, t["path"] = "", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "animals", t["content"] = Prefab, t["path"] = "", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "seaAnimals", t["content"] = Prefab, t["path"] = "", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "type", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.type = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "candies", t["content"] = Prefab, t["path"] = "", t["type"] = "prefab", t["ratio"] = .3, t;
      }.apply()]), t("ENUM_Theme_Sprites_Sub", [function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "fruits", t["content"] = Sprite, t["path"] = "水果图标", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "sweets", t["content"] = Prefab, t["path"] = "甜品", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "vegetable", t["content"] = Prefab, t["path"] = "蔬菜", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "animals", t["content"] = Prefab, t["path"] = "动物", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "seaAnimals", t["content"] = Prefab, t["path"] = "海洋动物", t["ratio"] = .2, t;
      }.apply(), function () {
        var t;
        return (t = function () {
          var t, n;
          return Pu(t = {}, "bundle", 0), Pu(t, "content", 0), Pu(t, "path", 0), Pu(t, "ratio", 0), (n = t).bundle = 0, n.content = 0, n.path = 0, n.ratio = 0, n;
        }["apply"]())["bundle"] = "candies", t["content"] = Prefab, t["path"] = "糖果", t["ratio"] = .2, t;
      }.apply()]), cclegacy._RF["pop"]();
    }, r;
  }["apply"]();
});