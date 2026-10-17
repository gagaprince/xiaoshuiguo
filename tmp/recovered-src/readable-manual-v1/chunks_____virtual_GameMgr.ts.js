(function (t) {
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
    _,
    M,
    S,
    A,
    C,
    x,
    T,
    L,
    I,
    R,
    E,
    D,
    N,
    P,
    G,
    O,
    F,
    B,
    z,
    U,
    H,
    V,
    W,
    J,
    j,
    q,
    K,
    Y,
    X,
    Z,
    Q,
    $,
    tt,
    nt,
    rt,
    it,
    et,
    at,
    ut,
    st,
    ot,
    ct,
    ft,
    ht = to;
  return function () {
    var ht,
      vt,
      lt = to[5],
      bt = "setters",
      dt = "execute";
    return Pu(ht = {}, "setters", 0), Pu(ht, "execute", 0), (vt = ht)["setters"] = [function (t) {
      var u = to;
      n = t["applyDecoratedDescriptor"], r = t["inheritsLoose"], i = t["initializerDefineProperty"], e = t["assertThisInitialized"], a = t["createForOfIteratorHelperLoose"];
    }, function (t) {
      var n = to,
        r = n[6],
        i = n[2],
        e = n[4],
        a = n[3],
        R = n[14],
        E = n[7],
        D = n[9];
      u = t["cclegacy"], s = t["_decorator"], o = t["Material"], c = t["Node"], f = t["Graphics"], h = t["math"], v = t["Widget"], l = t["BoxCollider2D"], b = t["Label"], d = t["Sprite"], k = t["PhysicsSystem2D"], m = t["EPhysics2DDrawFlags"], p = t["ERigidBody2DType"], g = t["UIOpacity"], y = t["tween"], w = t["UITransform"], _ = t["RigidBody2D"], M = t["Vec2"], S = t["Tween"], A = t["color"], C = t["Vec3"], x = t["ParticleSystem2D"], T = t["PolygonCollider2D"], L = t["view"], I = t["Component"];
    }, function (t) {
      R = t["FruitComp"];
    }, function (t) {
      E = t["HoleComp"];
    }, function (t) {
      D = t["default"];
    }, function (t) {
      N = t["default"];
    }, function (t) {
      P = t["default"];
    }, function (t) {
      G = t["FruitConfig"];
    }, function (t) {
      O = t["default"];
    }, function (t) {
      F = t["default"];
    }, function (t) {
      B = t["LocalData"];
    }, function (t) {
      var n = to;
      z = t["ENUM_GAME_STATE"], U = t["ENUM_STATUS"], H = t["ENUM_UI"], V = t["ENUM_CLIP"], W = t["ENUM_Theme_Sprites_Sub"];
    }, function (t) {
      J = t["default"];
    }, function (t) {
      j = t["default"];
    }, function (t) {
      q = t["default"];
    }, function (t) {
      K = t["default"];
    }, function (t) {
      Y = t["default"];
    }, function (t) {
      var n = to[5];
      X = t["default"], Z = t["ResType"];
    }, function (t) {
      Q = t["reporter"];
    }, function (t) {
      $ = t["default"];
    }, function (t) {
      tt = t["default"];
    }, function (t) {
      nt = t["default"];
    }, function (t) {
      rt = t["default"];
    }, function (t) {
      it = t["default"];
    }, function (t) {
      et = t["default"];
    }, function (t) {
      at = t["gameMsg"];
    }, function (t) {
      ut = t["default"];
    }, function (t) {
      st = t["default"];
    }, function (t) {
      ot = t["Log"];
    }, function (t) {
      ct = t["ChuiziCom"];
    }, function (t) {
      ft = t["default"];
    }], vt["execute"] = function () {
      var ht,
        vt,
        lt,
        bt,
        dt,
        kt,
        mt,
        pt,
        gt,
        yt,
        wt,
        _t,
        Mt,
        Ct,
        xt,
        Lt,
        It,
        Rt,
        Dt,
        Nt,
        Pt,
        Gt,
        Ot,
        Ft,
        Bt,
        zt,
        Ut,
        Ht,
        Vt,
        Wt,
        Jt,
        jt,
        qt,
        Kt,
        Yt,
        Xt,
        Zt,
        Qt,
        $t,
        tn = to,
        nn = tn[5],
        rn = tn[6],
        en = tn[12],
        an = tn[11],
        un = "_RF",
        sn = "GameMgr",
        on = "prototype",
        cn = "configurable",
        fn = "enumerable",
        hn = "writable",
        vn = "initializer";
      u["_RF"]["push"]({}, "d2634BH/IBDuqK7wdEJOpTl", "GameMgr", void 0), _t = s["ccclass"], Mt = s["property"], t("default", (Ct = _t("GameMgr"), xt = Mt(o), Lt = Mt(o), It = Mt(o), Rt = Mt(c), Dt = Mt(c), Nt = Mt(c), Pt = Mt(c), Gt = Mt(c), Ot = Mt(f), Ft = Mt(it), Bt = Mt(N), Ct((($t = function (t) {
        var n,
          u,
          s = to,
          o = s[7],
          f = s[4],
          I = s[10],
          N = s[13],
          it = s[14],
          ht = s[3],
          vt = s[9],
          lt = s[6],
          bt = s[8],
          dt = s[12],
          kt = s[11],
          mt = s[15],
          pt = s[5];
        return r(u = function () {
          for (var n, r, a = to, u = ro, s = a[4], o = a[2], c = a[3], f = a[9], v = a[14], l = a[8], b = a[6], d = a[7], k = a[5], m = a[10], p = a[11], g = a[12], y = a[13], w = a[0], _ = a[1], M = "apply", S = (n = arguments)["length"], A = new Array(S), C = 0; C < S; C++) A[C] = n[C];
          return (r = t["call"]["apply"](t, [this]["concat"](A)) || this)["reliveCount"] = 1, r["fruitsInSlotComp"] = [], r["fruitsComp"] = [], r["iceComps"] = [], r["holeComps"] = [], r["labFruit"] = void 0, r["labProgress"] = void 0, r["fillImg"] = void 0, r["fillBg"] = void 0, r["basket"] = void 0, r["boundaryLine"] = void 0, r["btnFirstWall"] = void 0, r["btnSecondWall"] = void 0, r["slotsNum"] = 3, r["colorLimit"] = 3, r["dirtectionTip"] = null, r["levelBg"] = void 0, i(r, "materialAttacked", Ht, e(r)), i(r, "normalMaterial", Vt, e(r)), i(r, "lightMaterial", Wt, e(r)), r["curThemeType"] = 2, r["fruitTotalNum"] = 40, r["fruitRemnantNum"] = 200, r["leaderTip"] = null, r["firstLevelIDS"] = [[9, 9, 9, 9], [1, 1, 1, 1], [2, 2, 2, 2]], r["firstLevelBg"] = null, r["finger"] = null, r["canCheck"] = null, r["leftWall"] = null, r["rightWall"] = null, r["topWall"] = null, r["bottomWall"] = null, r["floor"] = null, r["middleBox"] = null, r["policeLineFruit"] = null, r["lastTouchFruit"] = [], r["line"] = void 0, r["arrangeType"] = 1, r["baseY"] = 120, i(r, "obstaclesRoot", Jt, e(r)), i(r, "stakeRoot", jt, e(r)), i(r, "fruits", qt, e(r)), i(r, "numRoot", Kt, e(r)), i(r, "effsRoot", Yt, e(r)), i(r, "jointGraphics", Xt, e(r)), i(r, "jointGearMgr", Zt, e(r)), r["isDowning"] = !1, r["activeTween"] = !1, r["currentLevel"] = 1, r["fruitConfig"] = null, r["fruitsIDS"] = [], i(r, "FruitDownLayer", Qt, e(r)), r["isSpecialProp_"] = !1, r["getedFruitList"] = [], r["bgMoveDis"] = h["v2"](0, 0), r["gameRoot"] = void 0, r["lastTouchFruitComp"] = function () {
            var t,
              n,
              r = to,
              i = "fruitComp",
              e = "isDown";
            return Pu(t = {}, "fruitComp", 0), Pu(t, "isDown", 0), (n = t)["fruitComp"] = null, n["isDown"] = !1, n;
          }["apply"](), r["clickCount"] = 0, r["moveDistance"] = 7, r["isBreaking"] = !1, r["isIceTip"] = !1, r["time_"] = 0, r["totalTime_"] = .2, r["stoneStrJs"] = "水果解锁砖", r["stoneStr"] = "水果砖", r["dirImgStr"] = ["xiangxia大", "向右大", "向左大", "中间大", "雪花大", "未知", "黑洞"], r["dirLabStr"] = ["从上往下移动", "从左往右移动", "从右往左移动", "从两侧往中间移动", "通过消除解锁冰冻水果", "掉落解锁未知水果", "黑洞内有多个水果"], r["lastReportedProgress"] = 0, r["viewTime_"] = 0, r["viewMaxTime_"] = 25, r;
        }, t), (n = u["prototype"])["onLoad"] = function () {
          var t,
            n = to,
            r = n[9],
            i = n[6],
            e = n[2],
            a = n[10],
            s = n[13],
            o = n[5],
            f = n[3],
            h = n[7],
            k = n[8],
            m = n[4],
            p = n[11],
            g = "getInstance",
            y = "gameRoot",
            w = "node",
            _ = "getChildByName",
            M = "getComponent",
            S = "line",
            A = "floor",
            C = "middleBox",
            x = "labFruit",
            T = "btnFirstWall",
            L = "btnSecondWall",
            I = "leaderTip",
            R = "fillImg",
            E = "progressBg",
            D = "fillBg",
            N = "labProgress",
            P = "canCheck",
            G = "boundaryLine",
            O = "dirtectionTip",
            F = "levelBg",
            B = "instance";
          st["getInstance"]() && st["getInstance"]()["checkLowFps"](), this["gameRoot"] = this["node"]["getChildByName"]("game"), this["node"]["getComponent"](v)["updateAlignment"](), this["node"]["getComponentsInChildren"](v)["forEach"](function (t) {
            t["updateAlignment"]();
          }), this["showGameMoveAni"](!0), t = this["gameRoot"]["getChildByName"]("walls"), this["line"] = t["getChildByName"]("line"), this["leftWall"] = t["getChildByName"]("left"), this["rightWall"] = t["getChildByName"]("right"), this["topWall"] = t["getChildByName"]("top"), this["bottomWall"] = t["getChildByName"]("bottom"), this["floor"] = t["getChildByName"]("floor"), this["middleBox"] = t["getChildByName"]("middleBox")["getComponent"](l), this["middleBox"]["node"]["active"] = !1, this["labFruit"] = this["gameRoot"]["getChildByName"]("fruitTextBg")["getChildByName"]("labFruit")["getComponent"](b), this["basket"] = this["gameRoot"]["getChildByName"]("basket01"), this["btnFirstWall"] = t["getChildByName"]("btnFirstWall"), this["btnSecondWall"] = t["getChildByName"]("btnSecondWall"), this["leaderTip"] = this["gameRoot"]["getChildByName"]("leaderTip"), this["fillImg"] = this["gameRoot"]["getChildByName"]("progressBg")["getChildByName"]("fillImg")["getComponent"](d), this["fillBg"] = this["gameRoot"]["getChildByName"]("progressBg")["getChildByName"]("fillBg")["getComponent"](d), this["labProgress"] = this["gameRoot"]["getChildByName"]("progressBg")["getChildByName"]("labProgress")["getComponent"](b), this["canCheck"] = t["getChildByName"]("canCheck"), this["boundaryLine"] = this["gameRoot"]["getChildByName"]("boundaryLine"), this["dirtectionTip"] = this["gameRoot"]["getChildByName"]("dirtectionTip"), this["firstLevelBg"] = this["gameRoot"]["getChildByName"]("firstLevel"), this["levelBg"] = this["gameRoot"]["getChildByName"]("levelBg"), this["btnFirstWall"]["on"](c["EventType"]["TOUCH_END"], this["breakWall"], this), this["setPysicsMgr"](!0), this["setEnabledAccumulator"](!0), u["instance"] || (u["instance"] = this);
        }, n["setPysicsMgr"] = function (t) {
          var n = to;
          k["instance"]["enable"] = t;
        }, n["setCollisionMgr"] = function (t) {}, n["setEnabledAccumulator"] = function (t) {
          k["instance"];
        }, n["openPhysicsDebug"] = function () {
          var t = to;
          k["instance"]["debugDrawFlags"] = m["Shape"];
        }, n["start"] = function () {
          var t,
            n = to,
            r = n[5],
            i = n[7],
            e = n[12],
            a = n[10],
            u = n[11],
            s = n[4],
            o = n[8],
            c = "ins",
            f = "fakeGame_level",
            h = "active";
          t = this, j["gameMgr"]["gameState"] = z["isPlaying"], ot("```````````````````````````````", F["ins"]["fakeGame_level"]), this["boundaryLine"]["getComponent"](v)["updateAlignment"](), this["dirtectionTip"]["active"] = !1, this["levelBg"]["getChildByName"]("img")["active"] = !1, this["isSpecialProp_"] = F["ins"]["fakeGame_level"] > 1 && B["inst"]["getUndergoLv"](), this["reliveCount"] = 1, F["ins"]["skillIndex"] = -1, this["curThemeType"] = F["ins"]["useSkinId"], J["_GbzMainLayer"]["refesh"](), F["ins"]["status"] = U["UNRUN"], this["colorLoop"](), this["changeThemeBG"](), this["getImgFill"](), this["initLevel"](function (n) {
            var r,
              i = to;
            t["init"](), r = 0, n && (t["blitzkrieg"](), r = .5), t["scheduleOnce"](function () {
              var n = to,
                r = n[4];
              t["isSpecialProp_"] && j["uiMgr"]["toggle"](H["LAYER_Prop_Special"], !0, null, Math["random"]() > .5 ? 1 : 0);
            }, r);
          });
        }, n["initLevel"] = function (t) {
          var n,
            r = to,
            i = ro,
            e = r[7],
            a = r[1],
            u = r[2],
            s = r[6],
            o = r[13],
            c = r[10],
            f = r[21],
            l = r[5],
            b = r[12],
            d = r[8],
            k = r[9],
            m = r[4],
            g = r[11],
            y = "inst",
            w = "node",
            _ = "middleBox",
            M = "active",
            S = "currentLevel",
            A = "ins",
            C = "arrangeType",
            x = "fruitTotalNum",
            T = "fruitRemnantNum",
            L = "updateFruitText",
            I = "setTip",
            R = "initWall",
            E = "fruitConfig",
            D = "moveDir",
            N = "MoveDirection",
            O = "woodenObs",
            B = "_GbzMainLayer",
            z = "showAnim";
          if (n = this, this["bgMoveDis"]["set"](h["v2"](0, 0)), et["inst"]["resetSlotItemPopuped"](), this["gameRoot"][St] = 0, this["showGameMoveAni"](!0), this["node"]["getComponent"](v)["updateAlignment"](), this["node"]["getComponentsInChildren"](v)["forEach"](function (t) {
            t["updateAlignment"]();
          }), this["getedFruitList"] = [], this["setCollisionMgr"](!1), this["middleBox"]["node"]["active"] = !1, this["currentLevel"] = F["ins"]["game_level"], ft["inst"]["Level_Enter"](F["ins"]["fakeGame_level"]), 1 == this["currentLevel"]) this["arrangeType"] = 1, this["clickCount"] = 0, this["fruitTotalNum"] = 12, this["fruitRemnantNum"] = this["fruitTotalNum"], this["updateFruitText"](!0), this["setTip"](), this["initWall"](0), this["firstLevel"](function () {
            var r = to,
              i = r[2],
              e = r[11],
              a = "fruitsComp";
            for (var u in n["setCollisionMgr"](!0), t && t(), n["hideWall"](), n["fruitsComp"]) n["fruitsComp"][u]["setRigType"](p["Static"]);
            K["emit"](at["CreateFruitEd"]), ft["inst"]["TutorialStart"]();
          });else {
            var U, H;
            switch (H = P["inst"]["genLvMapData"](this["currentLevel"], this["boundaryLine"][St], this["stakeRoot"], this["obstaclesRoot"]), this["fruitConfig"] = H["info"], this["fruitConfig"]["moveDir"]) {
              case G["MoveDirection"]["NONE"]:
                this["arrangeType"] = 0;
                break;
              case G["MoveDirection"]["DOWN"]:
                this["arrangeType"] = 1;
                break;
              case G["MoveDirection"]["RIGHT"]:
                this["arrangeType"] = 2;
                break;
              case G["MoveDirection"]["LEFT"]:
                this["arrangeType"] = 3;
            }
            this["initWall"](this["fruitConfig"]["moveDir"]), this["fruitConfig"]["woodenObs"] > 0 && (6 == this["fruitConfig"]["woodenObs"] ? this["setLeftAndRightBoxWidth"](345) : 2 == this["fruitConfig"]["woodenObs"] && (this["middleBox"]["node"]["setPosition"](0, 100), this["middleBox"]["node"]["active"] = !0)), this["fruitTotalNum"] = H["totalNum"], this["fruitRemnantNum"] = this["fruitTotalNum"], this["updateFruitText"](!0), this["setTip"](), U = function () {
              var r = to;
              P["inst"]["genLvMap"](function () {
                var r = to;
                n["scheduleOnce"](function () {
                  var r = to,
                    i = r[7],
                    e = r[2],
                    a = r[8],
                    u = "fruitConfig",
                    s = "woodenObs",
                    o = "jointGearMgr";
                  n["fruitConfig"]["woodenObs"] > 0 && (6 == n["fruitConfig"]["woodenObs"] ? n["setLeftAndRightBoxWidth"](200) : 2 == n["fruitConfig"]["woodenObs"] && (n["middleBox"]["node"]["active"] = !1)), n["sortFruit"](), n["jointGearMgr"]["init"](n["jointGraphics"]), n["jointGearMgr"]["mapCreateJoint"](n["fruitsComp"], n["fruitConfig"]["itemConnet"], function () {
                    var r = to;
                    n["scheduleOnce"](function () {
                      var r = to,
                        i = r[11];
                      n["setCollisionMgr"](!0), J["_GbzMainLayer"]["showlightning"](function (n) {
                        t && t(n);
                      });
                    }, 0), n["hideWall"]();
                  }), n["hideWall"]();
                }, 1), K["emit"](at["CreateFruitEd"]);
              });
            }, 2 == this["currentLevel"] ? J["_GbzMainLayer"]["showAnim"](0, function () {
              U();
            }) : (U(), J["_GbzMainLayer"]["showAnim"](1, function () {
              var t = to;
              n["arrangeType"] > 1 && (n["levelBg"]["getChildByName"]("img")["active"] = !0);
            }, this["arrangeType"], this["levelBg"]["getChildByName"]("img")));
          }
        }, n["sortFruit"] = function () {
          var t = to,
            n = t[2],
            r = "MoveDirection",
            i = "fruitsComp",
            e = "sort";
          switch (this["fruitConfig"]["moveDir"]) {
            case G["MoveDirection"]["NONE"]:
            case G["MoveDirection"]["DOWN"]:
              this["fruitsComp"]["sort"](function (t, n) {
                var r,
                  i,
                  e,
                  a,
                  u = "node";
                return (null != (r = null == (i = t["node"]) ? void 0 : i[St]) ? r : 0) - (null != (e = null == (a = n["node"]) ? void 0 : a[St]) ? e : 0);
              });
              break;
            case G["MoveDirection"]["RIGHT"]:
              this["fruitsComp"]["sort"](function (t, n) {
                var r,
                  i,
                  e,
                  a,
                  u,
                  s = "node";
                return r = null != (i = null == (u = t["node"]) ? void 0 : u[At]) ? i : 0, (null != (a = null == (e = n["node"]) ? void 0 : e[At]) ? a : 0) - r;
              });
              break;
            case G["MoveDirection"]["LEFT"]:
              this["fruitsComp"]["sort"](function (t, n) {
                var r,
                  i,
                  e,
                  a,
                  u = "node";
                return (null != (r = null == (i = t["node"]) ? void 0 : i[At]) ? r : 0) - (null != (e = null == (a = n["node"]) ? void 0 : a[At]) ? e : 0);
              });
          }
        }, n["init"] = function () {
          var t,
            n = to,
            r = n[7],
            i = n[4],
            e = n[1],
            a = "arrangeType";
          t = this, 1 == this["arrangeType"] && (this["fruitDown"](), this["schedule"](function () {
            t["fruitDown"]();
          }, 1)), 2 != this["arrangeType"] && 3 != this["arrangeType"] || this["fruitMove"](!0), this["dirtectionTip"]["active"] = !1, F["ins"]["status"] = U["RUN"], this["lineOpacity"]();
        }, n["lineOpacity"] = function () {
          var t,
            n = to,
            r = n[10],
            i = "line",
            e = "to",
            a = "apply";
          this["arrangeType"] > 1 && ((t = this["line"]["getComponent"](g) || this["line"]["addComponent"](g))["opacity"] = 0, y(t)["repeat"](3, y(t)["to"](.5, function () {
            var t,
              n = "opacity";
            return (t = Pu({}, "opacity", 0))["opacity"] = 255, t;
          }["apply"]())["to"](.5, function () {
            var t,
              n = "opacity";
            return (t = Pu({}, "opacity", 0))["opacity"] = 50, t;
          }["apply"]()))["to"](.5, function () {
            var t,
              n = "opacity";
            return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
          }["apply"]())["start"]());
        }, n["setLeftAndRightBoxWidth"] = function (t) {
          var n,
            r,
            i = to,
            e = i[3],
            a = "getComponent",
            u = "size",
            s = "width",
            o = "apply";
          r = this["leftWall"]["getComponent"](l), n = this["rightWall"]["getComponent"](l), r["size"]["width"] = t, n["size"]["width"] = t, r["apply"](), n["apply"]();
        }, n["initWall"] = function (t) {
          var n = to,
            r = ro,
            i = n[7],
            e = n[5],
            a = n[2],
            u = n[3],
            s = 100,
            o = 70,
            c = "leftWall",
            f = "active",
            h = "rightWall",
            l = "topWall",
            b = "bottomWall",
            d = "getComponent",
            k = "setPosition",
            m = "node",
            p = "width",
            g = "group",
            y = "RB_GROUPS",
            M = "DEFAULT",
            S = "line",
            A = "guardrail";
          switch (this["leftWall"]["active"] = !1, this["rightWall"]["active"] = !1, this["topWall"]["active"] = !1, this["bottomWall"]["active"] = !0, this["bottomWall"]["getComponent"](v)["updateAlignment"](), this["leftWall"]["setPosition"](-this["node"]["getComponent"](w)["width"] / 2 - 100, 0), this["rightWall"]["setPosition"](this["node"]["getComponent"](w)["width"] / 2 + 100, 0), this["arrangeType"]) {
            case 0:
              this["rightWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["leftWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["line"]["active"] = !1, this["leftWall"]["active"] = !0, this["rightWall"]["active"] = !0, this["topWall"]["active"] = !0, this["bottomWall"]["active"] = !0;
            case 1:
              this["rightWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["leftWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["line"]["active"] = !1, this["leftWall"]["active"] = !0, this["rightWall"]["active"] = !0;
              break;
            case 2:
              this["line"]["active"] = !0, this["line"][At] = this["node"]["getComponent"](w)["width"] / 2 - 70, this["rightWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["rightWall"]["active"] = !0, this["leftWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["guardrail"], this["leftWall"]["active"] = !0, this["topWall"]["active"] = !0, this["bottomWall"]["active"] = !0;
              break;
            case 3:
              this["line"]["active"] = !0, this["line"][At] = -this["node"]["getComponent"](w)["width"] / 2 + 70, this["leftWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["leftWall"]["active"] = !0, this["rightWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["guardrail"], this["rightWall"]["active"] = !0, this["topWall"]["active"] = !0, this["bottomWall"]["active"] = !0;
              break;
            case 4:
              this["rightWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["leftWall"]["getComponent"](_)["group"] = G["RB_GROUPS"]["DEFAULT"], this["leftWall"]["active"] = !0, this["rightWall"]["active"] = !0, this["line"]["active"] = !0, this["line"][At] = 0;
          }
        }, n["hideWall"] = function () {
          var t = to,
            n = "active";
          1 == this["arrangeType"] && (this["topWall"]["active"] = !1), this["bottomWall"]["active"] = !1;
        }, n["firstLevel"] = function (t) {
          var n,
            r,
            i,
            e,
            a = to,
            u = ro,
            s = a[4],
            o = a[10],
            c = a[2],
            f = "ins",
            h = "node",
            v = "firstLevelBg",
            l = "children",
            b = "setPosition",
            d = "length",
            k = "push",
            m = "finger";
          n = this, F["ins"]["status"] = U["UNRUN"], e = this["node"]["getComponent"](w)["height"] / 2 + 500, this["firstLevelBg"]["children"][0], r = this["firstLevelBg"]["children"][1], i = this["firstLevelBg"]["children"][2], r["setPosition"](r[At], e), i["setPosition"](i[At], e);
          for (var p = [], g = 0; g < this["firstLevelBg"]["children"]["length"]; g++) {
            for (var y = this["firstLevelBg"]["children"][g], _ = [], S = 0; S < y["children"]["length"]; S++) {
              var A;
              A = y["children"][S], _["push"](new M(A[At], A[St]));
            }
            p["push"](_);
          }
          this["finger"] = q["ins"]["getPrefab"]("finger"), this["node"]["addChild"](this["finger"]), this["opacityTween"](this["finger"]), this["finger"]["active"] = !1;
          for (var C = function (r) {
              for (var i = to, e = n["firstLevelBg"]["children"][r], a = function (i) {
                  var a = to,
                    u = a[3],
                    s = "firstLevelIDS",
                    o = P["inst"]["getPt"](n["firstLevelIDS"][r][i]);
                  n["createFruitNodes"](e, new O(n["firstLevelIDS"][r][i], p[r][i], 0, o["radius"], o["scale"]), !1, null, function () {
                    var e = to,
                      a = e[10],
                      u = "length";
                    r == n["firstLevelBg"]["children"]["length"] - 1 && i == n["firstLevelIDS"][r]["length"] - 1 && (n["setFinger"](0, 0, 4, !0), n["scheduleOnce"](function () {
                      var n = to,
                        r = n[1];
                      F["ins"]["status"] = U["RUN"], t() && t();
                    }, .3));
                  });
                }, u = 0; u < n["firstLevelIDS"][r]["length"]; u++) a(u);
            }, x = 0; x < this["firstLevelBg"]["children"]["length"]; x++) C(x);
        }, n["showLeader"] = function () {
          var t,
            n = to,
            r = n[4],
            i = "ins",
            e = "clickCount",
            a = "setFinger",
            u = "inst",
            s = "Tutorial_Finish";
          if (t = this, 1 == F["ins"]["game_level"] && F["ins"]["status"] != U["UNRUN"]) switch (this["clickCount"]++, this["clickCount"]) {
            case 1:
              this["setFinger"](0, 1, 5, !0), ft["inst"]["Tutorial_Finish"]();
              break;
            case 2:
              this["setFinger"](0, 1, 4, !1), this["leaderTip"]["active"] = !0, this["setFinger"](0, 1, 5, !1), this["scheduleOnce"](function () {
                var n = to;
                t["leaderTip"]["active"] = !1;
              }, 2);
              break;
            case 4:
              this["firsrLevelRound2"](), ft["inst"]["Tutorial_Finish"]();
          }
        }, n["firsrLevelRound2"] = function () {
          for (var t = to, n = t[2], r = t[3], i = "firstLevelBg", e = "children", a = this["firstLevelBg"]["children"][0], u = 1; u < this["firstLevelBg"]["children"]["length"]; u++) {
            var s, o;
            o = this["firstLevelBg"]["children"][u], s = new h["Vec3"](o[At], a[St]), y(o)["to"](2, function () {
              var t,
                n = "position";
              return (t = Pu({}, "position", 0))["position"] = s, t;
            }["apply"]())["call"](function () {})["start"]();
          }
        }, n["setFinger"] = function (t, n, r, i) {
          var e,
            a,
            u,
            s = to,
            o = s[10],
            c = s[4],
            f = "firstLevelBg",
            h = "children",
            v = "finger",
            l = "active",
            b = "isValid",
            d = "getComponent";
          a = this["firstLevelBg"]["children"][t]["children"][n], this["finger"]["active"] = i, e = (u = this["firstLevelBg"]["children"][t]["children"][r]) && u["isValid"] ? u["getComponent"](R) : null, a && e && e["isValid"] && !e["isTouch"] ? (this["finger"]["setPosition"](a[At], a[St] + a["parent"][St]), this["firstLevelBg"]["children"][t]["children"][r]["getComponent"](R)["isCanTouch"] = !0) : this["finger"]["active"] = !1;
        }, n["opacityTween"] = function (t) {
          var n = to,
            r = n[3],
            i = "to",
            e = "apply";
          y(t)["to"](.5, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](.7, .7, .7), t;
          }["apply"]())["to"](.5, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](.8, .8, .8), t;
          }["apply"]())["union"]()["repeatForever"]()["start"]();
        }, n["createFruitNodes"] = function (t, n, r, i, e, a) {
          var u,
            s,
            o,
            c,
            f = to,
            h = f[10],
            v = f[2];
          return o = this, void 0 === a && (a = 0), s = this["getNodeName"]() + n["fruitType"], c = q["ins"]["getNode"](s), t["addChild"](c), u = c["getComponent"](R) || c["addComponent"](R), 0 == a ? u["init"](n, r, i, function (t) {
            var n = to,
              r = "push";
            null != t && (t instanceof E ? o["holeComps"]["push"](t) : t instanceof R && o["iceComps"]["push"](t)), e && e();
          }) : u["init2"](n, r, i, function (t) {
            var n = to,
              r = "push";
            null != t && (t instanceof E ? o["holeComps"]["push"](t) : t instanceof R && o["iceComps"]["push"](t)), e && e();
          }), this["fruitsComp"]["push"](u), u;
        }, n["getNodeName"] = function () {
          var t = to,
            n = t[3],
            r = "fruit";
          switch (this["curThemeType"]) {
            case 0:
              return "fruit";
            case 1:
              return "sweet";
            case 2:
              return "vegetable";
            case 3:
              return "animal";
            case 4:
              return "sea";
            case 5:
              return "candy";
            default:
              return "fruit";
          }
        }, n["getMinDistance"] = function () {
          for (var t = to, n = ro, r = "fruitsComp", i = "node", e = 500, a = 5000, u = 0; u < this["fruitsComp"]["length"]; u++) {
            var s, o;
            if (!(s = this["fruitsComp"][u])["isTouch"]) (o = Math["abs"](s["node"][At] - this["line"][At])) < a && (a = o, e = s["node"][At]);
          }
          return [a, e];
        }, n["fruitDown"] = function () {
          var t,
            n = to,
            r = ro,
            i = n[2],
            e = n[10],
            a = n[3],
            u = 50000,
            s = "isDowning",
            o = "node",
            c = "fruitsComp",
            f = "length",
            v = "isTouch",
            l = "apply",
            b = "obstaclesRoot",
            d = "children";
          if (t = this, 1 != F["ins"]["game_level"] && 1 == this["arrangeType"] && !this["isDowning"]) {
            this["node"]["getComponent"](w);
            for (var k = this["boundaryLine"][St] + 10, m = 50000, p = -50000, g = this["fruitsComp"]["length"] - 1; g >= 0; g--) {
              var _, M;
              if ((_ = this["fruitsComp"][g]) && (!_ || _["node"]["isValid"]) && !_["isTouch"]) (M = _["node"][St]) < m && (m = M), M > p && (p = M);
            }
            var S;
            if (!(p < D["inst"]["gameH"] / 2 - 250)) if ((S = m - k) > 20) {
              var A, C;
              (C = S / 600) < .4 && (C = .4), this["isDowning"] = !0, this["bgMoveDis"][St] -= S;
              for (var x = [], T = 0; T < this["fruitsComp"]["length"]; T++) {
                var L;
                (L = this["fruitsComp"][T])["isTouch"] || x["push"](function () {
                  var t,
                    n,
                    r = to,
                    i = r[3],
                    e = "fruit",
                    a = "origX",
                    u = "origY",
                    s = "node",
                    o = "position";
                  return Pu(t = {}, "fruit", 0), Pu(t, "origX", 0), Pu(t, "origY", 0), (n = t)["fruit"] = L, n["origX"] = L["node"]["position"][At], n["origY"] = L["node"]["position"][St], n;
                }["apply"]());
              }
              if (A = function () {
                var t,
                  n = "offset";
                return (t = Pu({}, "offset", 0))["offset"] = 0, t;
              }["apply"](), y(A)["to"](C, function () {
                var t,
                  n = "offset";
                return (t = Pu({}, "offset", 0))["offset"] = S, t;
              }["apply"](), function () {
                var t,
                  n = "onUpdate";
                return (t = Pu({}, "onUpdate", 0))["onUpdate"] = function () {
                  for (var t = to, n = t[4], r = t[3], i = "fruit", e = A["offset"], a = 0, u = x; a < u["length"]; a++) {
                    var s;
                    (s = u[a])["fruit"]["isValid"] && s["fruit"]["node"]["setPosition"](s["origX"], s["origY"] - e, 0);
                  }
                }, t;
              }["apply"]())["start"](), this["obstaclesRoot"]["children"]["length"] > 0) for (var I = function () {
                  var n = to,
                    r = n[3],
                    i = t["obstaclesRoot"]["children"][R];
                  i && i["isValid"] && y(i)["to"](C, function () {
                    var t = to,
                      n = "position",
                      r = Pu({}, "position", 0);
                    return r["position"] = h["v3"](i["position"][At], i["position"][St] - S, 0), r;
                  }["apply"]())["call"](function () {
                    var n = to,
                      r = n[5];
                    i && i["isValid"] && i["position"][St] <= t["boundaryLine"][St] && (i["removeFromParent"](), q["ins"]["putNode"](i));
                  })["start"]();
                }, R = this["obstaclesRoot"]["children"]["length"] - 1; R >= 0; R--) I();
              this["scheduleOnce"](function () {
                var n = to;
                t["isDowning"] = !1, K["emit"](at["moveFruitAll"], -S);
              }, C + .2);
            }
          }
        }, n["fruitMove"] = function (t) {
          var n,
            r,
            i,
            e,
            a = to,
            u = a[10],
            s = "baseY";
          (n = this, this["isDowning"] || this["arrangeType"] <= 1) || (e = this["moveDistance"], r = this["getMinDistance"]()[0], i = function () {
            var r,
              i = to,
              a = ro,
              u = i[10],
              s = i[7],
              o = i[2],
              c = "arrangeType",
              f = "fruitsComp",
              v = "length",
              l = "apply";
            if (S["stopAllByTag"](1), n["isDowning"] = !0, (r = e / 1050) < .15 && (r = .15), n["scheduleOnce"](function () {
              n["isDowning"] = !1;
            }, r), 4 != n["arrangeType"]) {
              var b;
              t || (r = .1), e = 2 == n["arrangeType"] ? e : -e, n["bgMoveDis"][At] += e;
              for (var d = [], k = 0; k < n["fruitsComp"]["length"]; k++) {
                var m;
                (m = n["fruitsComp"][k])["isTouch"] || d["push"](function () {
                  var t,
                    n,
                    r = to,
                    i = r[3],
                    e = "fruit",
                    a = "origX",
                    u = "origY",
                    s = "node",
                    o = "position";
                  return Pu(t = {}, "fruit", 0), Pu(t, "origX", 0), Pu(t, "origY", 0), (n = t)["fruit"] = m, n["origX"] = m["node"]["position"][At], n["origY"] = m["node"]["position"][St], n;
                }["apply"]());
              }
              b = function () {
                var t,
                  n = "offset";
                return (t = Pu({}, "offset", 0))["offset"] = 0, t;
              }["apply"](), y(b)["to"](r, function () {
                var t,
                  n = "offset";
                return (t = Pu({}, "offset", 0))["offset"] = e, t;
              }["apply"](), function () {
                var t,
                  n = "onUpdate";
                return (t = Pu({}, "onUpdate", 0))["onUpdate"] = function () {
                  for (var t = to, n = t[4], r = t[3], i = "fruit", e = b["offset"], a = 0, u = d; a < u["length"]; a++) {
                    var s;
                    (s = u[a])["fruit"]["isValid"] && s["fruit"]["node"]["setPosition"](s["origX"] + e, s["origY"], 0);
                  }
                }, t;
              }["apply"]())["tag"](1)["call"](function () {
                for (var t = to, n = "fruit", r = 0, i = d; r < i["length"]; r++) {
                  var e;
                  (e = i[r])["fruit"]["isValid"] && e["fruit"]["checkBound"]();
                }
              })["start"]();
            } else for (var p = function () {
                var t = to,
                  i = t[3],
                  a = "node",
                  u = n["fruitsComp"][g];
                if (u["isTouch"]) return 1;
                var s = u["node"][At] > 0 ? -e : e;
                y(u["node"])["to"](r, function () {
                  var t = to,
                    n = "position",
                    r = "node",
                    i = Pu({}, "position", 0);
                  return i["position"] = new h["Vec3"](u["node"][At] + s, u["node"][St], 0), i;
                }["apply"]())["tag"](1)["call"](function () {
                  u["checkBound"]();
                })["start"]();
              }, g = 0; g < n["fruitsComp"]["length"]; g++) p();
          }, t ? r > this["baseY"] && (e = r - this["baseY"], this["scheduleOnce"](function () {
            S["stopAllByTag"](1), i();
          }, .1)) : i());
        }, n["colorLoop"] = function () {
          var t = to,
            n = "fruitColorTween";
          this["unschedule"](this["fruitColorTween"]), this["schedule"](this["fruitColorTween"], 3);
        }, n["fruitColorTween"] = function () {
          var t = to,
            n = t[1],
            r = t[3],
            i = t[10],
            e = "fruitsInSlotComp",
            a = "length",
            u = "to",
            s = "apply";
          if (F["ins"]["status"] != U["UNRUN"] && !(this["fruitsInSlotComp"]["length"] < this["colorLimit"])) {
            S["stopAllByTag"](2);
            for (var o = 0; o < this["fruitsInSlotComp"]["length"]; o++) {
              var c, f;
              if (c = this["fruitsInSlotComp"][o]["node"]) f = c["getComponent"](d), y(f)["to"](.5, function () {
                var t,
                  n = to,
                  r = 255,
                  i = "color";
                return (t = Pu({}, "color", 0))["color"] = A(255, 0, 0, 255), t;
              }["apply"](), function () {
                var t,
                  n = to,
                  r = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = "sineIn", t;
              }["apply"]())["to"](.5, function () {
                var t,
                  n = to,
                  r = 255,
                  i = "color";
                return (t = Pu({}, "color", 0))["color"] = A(255, 255, 255, 255), t;
              }["apply"](), function () {
                var t,
                  n = to,
                  r = "easing";
                return (t = Pu({}, "easing", 0))["easing"] = "sineOut", t;
              }["apply"]())["tag"](2)["start"]();
            }
          }
        }, n["breakWall"] = function (t) {
          var n,
            r = to,
            i = ro,
            e = r[1],
            a = r[7],
            u = r[8],
            s = 200,
            o = 35,
            f = "ins",
            h = "showVideo",
            v = "空位",
            l = "skillIndex",
            b = "strTipLab",
            k = "LAYER_MAIN";
          n = this, F["ins"]["status"] != U["UNRUN"] ? this["slotsNum"] < 4 ? Y["ins"]["showVideo"](function () {
            var t = to,
              r = t[7],
              i = t[8],
              e = t[1],
              a = t[0],
              u = t[9],
              s = t[4],
              o = "btnFirstWall",
              f = "EventType",
              h = "TOUCH_END",
              v = "breakWall",
              l = "btnSecondWall",
              b = "ins",
              k = "children",
              m = "active";
            j["gameMgr"]["gameState"] == z["isPlaying"] && (n["slotsNum"]++, n["colorLimit"]++, n["btnFirstWall"] ? (n["btnFirstWall"]["off"](c["EventType"]["TOUCH_END"], n["breakWall"], n), n["playChuiziEff"](n["btnFirstWall"], function () {
              var t = to,
                r = t[7],
                i = t[10],
                e = t[4],
                a = "btnFirstWall",
                u = "btnSecondWall",
                s = "children",
                o = "active";
              n["offButton"](n["btnFirstWall"]), n["creatBoxBoom"](n["btnFirstWall"]), n["btnFirstWall"]["destroy"](), n["btnFirstWall"] = null, n["btnSecondWall"]["on"](c["EventType"]["TOUCH_END"], n["breakWall"], n), n["btnSecondWall"]["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", n["stoneStrJs"]), n["btnSecondWall"]["children"][0]["active"] = !0, n["btnSecondWall"]["children"][1]["active"] = !0;
            })) : (n["btnSecondWall"]["on"](c["EventType"]["TOUCH_END"], n["breakWall"], n), n["btnSecondWall"]["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", n["stoneStrJs"]), n["btnSecondWall"]["children"][0]["active"] = !0, n["btnSecondWall"]["children"][1]["active"] = !0), Q["reportAdRwd"]("空位"), F["ins"]["status"] = U["RUN"]);
          }, function () {}, "空位", this, !0) : Y["ins"]["showVideo"](function () {
            var t = to,
              r = t[7],
              i = t[1],
              e = "btnSecondWall";
            j["gameMgr"]["gameState"] == z["isPlaying"] && (n["slotsNum"]++, n["colorLimit"]++, n["btnSecondWall"] && (n["btnSecondWall"]["off"](c["EventType"]["TOUCH_END"], n["breakWall"], n), n["playChuiziEff"](n["btnSecondWall"], function () {
              var t = to,
                r = "btnSecondWall";
              n["offButton"](n["btnSecondWall"]), n["creatBoxBoom"](n["btnSecondWall"]), n["btnSecondWall"]["destroy"](), n["btnSecondWall"] = null;
            })), F["ins"]["status"] = U["RUN"], Q["reportAdRwd"]("空位"));
          }, function () {}, "空位", this, !0) : 0 == F["ins"]["skillIndex"] ? K["strTipLab"]("消除中", H["LAYER_MAIN"], 200, 35) : 1 == F["ins"]["skillIndex"] && K["strTipLab"]("刷新中", H["LAYER_MAIN"], 200, 35);
        }, n["offButton"] = function (t) {
          var n = to,
            r = n[7];
          t["off"](c["EventType"]["TOUCH_END"], this["breakWall"], this);
        }, n["breakAllWall"] = function () {
          var t,
            n,
            r = to,
            i = r[11],
            e = "btnFirstWall",
            a = "btnSecondWall",
            u = "playChuiziEff";
          n = this, t = function () {
            var t = to,
              r = t[10],
              i = t[7],
              e = "btnFirstWall",
              a = "slotsNum",
              u = "colorLimit",
              s = "off",
              o = "EventType",
              f = "TOUCH_END",
              h = "breakWall",
              v = "offButton",
              l = "creatBoxBoom",
              b = "destroy",
              d = "btnSecondWall";
            n["isValid"] && (n["btnFirstWall"] && (n["slotsNum"]++, n["colorLimit"]++, n["btnFirstWall"]["off"](c["EventType"]["TOUCH_END"], n["breakWall"], n), n["offButton"](n["btnFirstWall"]), n["creatBoxBoom"](n["btnFirstWall"]), n["btnFirstWall"]["destroy"](), n["btnFirstWall"] = null), n["btnSecondWall"] && (n["slotsNum"]++, n["colorLimit"]++, n["btnSecondWall"]["off"](c["EventType"]["TOUCH_END"], n["breakWall"], n), n["offButton"](n["btnSecondWall"]), n["creatBoxBoom"](n["btnSecondWall"]), n["btnSecondWall"]["destroy"](), n["btnSecondWall"] = null));
          }, this["btnFirstWall"] && this["btnSecondWall"] ? this["playChuiziEff"](this["btnFirstWall"], t, new C(0, -50, 0)) : this["btnFirstWall"] ? this["playChuiziEff"](this["btnFirstWall"], t) : this["playChuiziEff"](this["btnSecondWall"], t);
        }, n["breakSingleWall"] = function () {
          var t,
            n = to,
            r = n[7],
            i = n[11],
            e = "btnFirstWall",
            a = "slotsNum",
            u = "colorLimit",
            s = "off",
            o = "EventType",
            f = "TOUCH_END",
            h = "breakWall",
            v = "playChuiziEff",
            l = "btnSecondWall";
          if (t = this, this["btnFirstWall"]) return this["slotsNum"]++, this["colorLimit"]++, this["btnFirstWall"]["off"](c["EventType"]["TOUCH_END"], this["breakWall"], this), void this["playChuiziEff"](this["btnFirstWall"], function () {
            var n = to,
              r = n[7],
              i = n[10],
              e = n[4],
              a = "btnFirstWall",
              u = "btnSecondWall",
              s = "children",
              o = "active";
            t["offButton"](t["btnFirstWall"]), t["creatBoxBoom"](t["btnFirstWall"]), t["btnFirstWall"]["destroy"](), t["btnFirstWall"] = null, t["btnSecondWall"]["on"](c["EventType"]["TOUCH_END"], t["breakWall"], t), t["btnSecondWall"]["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", t["stoneStrJs"]), t["btnSecondWall"]["children"][0]["active"] = !0, t["btnSecondWall"]["children"][1]["active"] = !0;
          });
          this["btnSecondWall"] && (this["slotsNum"]++, this["colorLimit"]++, this["btnSecondWall"]["off"](c["EventType"]["TOUCH_END"], this["breakWall"], this), this["playChuiziEff"](this["btnSecondWall"], function () {
            var n = to,
              r = "btnSecondWall";
            t["offButton"](t["btnSecondWall"]), t["creatBoxBoom"](t["btnSecondWall"]), t["btnSecondWall"]["destroy"](), t["btnSecondWall"] = null;
          }));
        }, n["fruitTween"] = function (t, n, r) {
          var i,
            e,
            a,
            u,
            s = to,
            o = ro,
            c = s[2],
            f = s[3],
            v = 255,
            l = "fruitSplice",
            b = "to",
            k = "apply",
            m = "call",
            p = "start";
          (i = this, void 0 === r && (r = !1), e = t["node"]) ? (e["getComponent"](d)["color"] = A(255, 255, 255), this["hightLight"](e), u = e["scale"][At], a = u + .1, this["fruitSplice"](t), S["stopAllByTarget"](e), y(e)["to"](.12, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](a, a, a), t;
          }["apply"]())["to"](.12, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](u, u, u), t;
          }["apply"]())["call"](function () {
            var n = to,
              r = n[0],
              a = n[2];
            e["scale"] = h["v3"](u, u, u), i["showFruitEff"](t["node"], P["inst"]["getEliminateColor"](t["ID"]));
          })["start"](), y(e)["delay"](.24)["to"](.2, function () {
            var t,
              n,
              r = to,
              i = "position",
              u = "scale",
              s = "v3";
            return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t)["position"] = h["v3"](e[At], e[St] + 50, 0), n["scale"] = h["v3"](a, a, a), n;
          }["apply"](), function () {
            var t,
              n = to,
              r = "easing";
            return (t = Pu({}, "easing", 0))["easing"] = "quadOut", t;
          }["apply"]())["call"](function () {
            n && n();
          })["to"](.4, function () {
            var t,
              n = to,
              r = "position",
              i = "basket";
            return (t = Pu({}, "position", 0))["position"] = h["v3"](this["basket"][At], this["basket"][St], 0), t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to,
              r = "easing";
            return (t = Pu({}, "easing", 0))["easing"] = "quadIn", t;
          }["apply"]())["call"](function () {
            var n = to,
              e = n[9],
              a = n[2],
              u = n[13],
              s = "fruitMove";
            i["basketTween"](), tt["ins"]["play"](V["btn_Remove"], !1, 1), i["updateFruitText"](), i["fruitMove"](!0), i["fruitMove"](!1), i["recycleFruit"](t), i["getedFruitList"]["push"](t["calculatedInfo_"]), i["breakIceFun"](), r && i["bottomFruitAnim"](), i["checkSlotLose"]();
          })["start"]()) : this["fruitSplice"](t);
        }, n["recycleFruit"] = function (t) {
          t["recycleSelf"]();
        }, n["starTween"] = function (t) {
          var n,
            r,
            i,
            e,
            a,
            u = to,
            s = ro,
            o = u[9],
            c = u[2],
            f = u[4],
            v = "random",
            l = "ins",
            b = "node",
            d = "fillImg",
            k = "parent",
            m = "to",
            p = "apply";
          e = this, this["activeTween"] = !0, n = 150 * (Math["random"]() - .5), r = 80 * Math["random"](), (a = q["ins"]["getNode"]("star", this["node"]))["getComponent"](x)["resetSystem"](), a["children"][0]["active"] = !0, a["setPosition"](t["node"][At], t["node"][St]), i = new h["Vec3"](this["fillImg"]["node"]["parent"][At], this["fillImg"]["node"][St] + this["fillImg"]["node"]["parent"][St], 0), y(a)["to"](.3, function () {
            var i,
              e,
              a = to,
              u = "position",
              s = "scale",
              o = "node";
            return Pu(i = {}, "position", 0), Pu(i, "scale", 0), (e = i)["position"] = new h["Vec3"](t["node"][At] + n, t["node"][St] + r, 0), e["scale"] = h["v3"](1.3, 1.3, 1.3), e;
          }["apply"]())["to"](.8, function () {
            var t,
              n,
              r = to,
              e = "position",
              a = "scale";
            return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t)["position"] = i, n["scale"] = h["v3"](0, 0, 0), n;
          }["apply"](), function () {
            var t,
              n = to,
              r = "easing";
            return (t = Pu({}, "easing", 0))["easing"] = "backIn", t;
          }["apply"]())["call"](function () {
            var t = to,
              n = t[10];
            a["children"][0]["active"] = !1, a["getComponent"](x)["stopSystem"](), e["scheduleOnce"](function () {
              var t = to;
              q["ins"]["putNode"](a);
            }, 1), e["fillLight"]();
          })["start"](), tt["ins"]["play"](V["btn_Remove"]);
        }, n["fillLight"] = function () {
          var t,
            n,
            r = to,
            i = ro,
            e = r[3],
            a = 255,
            u = "fillBg",
            s = "color",
            o = "clone",
            c = "fillImg";
          t = this, this["fillBg"]["color"]["clone"](), n = this["fillImg"]["color"]["clone"](), this["fillBg"]["color"] = A(255, 255, 255, 255), this["fillImg"]["color"] = A(255, 255, 255, 255), this["scheduleOnce"](function () {
            var r = to,
              i = ro,
              e = r[5],
              a = 139,
              u = "fillBg",
              s = "isValid",
              o = "color",
              c = "fillImg";
            t["fillBg"]["isValid"] && (t["fillBg"]["color"] = A(139, 139, 139, 255)), t["fillImg"]["isValid"] && (t["fillImg"]["color"] = n), t["activeTween"] = !1, t["updateFruitText"]();
          }, .2);
        }, n["basketTween"] = function () {
          var t,
            n,
            r = to,
            i = r[6],
            e = r[3],
            a = "gameRoot",
            u = "getChildByName",
            s = "to",
            o = "apply",
            c = "start";
          n = this["gameRoot"]["getChildByName"]("basket02"), t = this["gameRoot"]["getChildByName"]("basket01"), y(n)["to"](.15, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](1.2, 1.2, 1.2), t;
          }["apply"]())["to"](.15, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](1, 1, 1), t;
          }["apply"]())["start"](), y(t)["to"](.15, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](1.2, 1.2, 1.2), t;
          }["apply"]())["to"](.15, function () {
            var t,
              n = to,
              r = "scale";
            return (t = Pu({}, "scale", 0))["scale"] = h["v3"](1, 1, 1), t;
          }["apply"]())["start"]();
        }, n["fruitSplice"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = "fruitsInSlotComp",
            u = "indexOf",
            s = "fruitsComp",
            o = "splice",
            c = "iceComps";
          i = this["fruitsInSlotComp"]["indexOf"](t), n = this["fruitsComp"]["indexOf"](t), -1 != i && this["fruitsInSlotComp"]["splice"](i, 1), -1 != n && this["fruitsComp"]["splice"](n, 1), -1 != (r = this["iceComps"]["indexOf"](t)) && this["iceComps"]["splice"](r, 1);
        }, n["holeSplice"] = function (t) {
          var n,
            r = to,
            i = "holeComps";
          -1 != (n = this["holeComps"]["indexOf"](t)) && this["holeComps"]["splice"](n, 1);
        }, n["addInSlotFruit"] = function (t) {
          var n = to,
            r = n[8],
            i = "fruitsInSlotComp",
            e = "isInSlot",
            a = "checkLose",
            u = "checkSlotLose";
          -1 == this["fruitsInSlotComp"]["indexOf"](t) && (t["isInSlot"] || (t["isInSlot"] = !0, this["fruitsInSlotComp"]["push"](t), this["fruitsInSlotComp"]["length"] >= this["colorLimit"] ? (this["fruitColorTween"](), this["unschedule"](this["checkLose"]), this["checkLose"](), this["checkSlotLose"]()) : this["checkSlotLose"]()));
        }, n["checkSlotLose"] = function () {
          var t = to,
            n = t[2],
            r = "length",
            i = "fruitsInSlotComp",
            e = "fruitsComp",
            u = "done",
            s = "value",
            o = "isInSlot",
            c = "ID",
            f = "overFun",
            h = "消不掉啦";
          if (F["ins"]["status"] == U["UNRUN"]) return !1;
          if (this["holeComps"]["length"] > 0) return !1;
          if (0 === this["fruitsInSlotComp"]["length"]) return !1;
          if (this["fruitsInSlotComp"]["length"] >= this["slotsNum"] && !this["canMatchInSlot"]()) {
            for (var v, l = !1, b = a(this["fruitsComp"]); !(v = b())["done"];) {
              var d;
              if (!(d = v["value"])["isInSlot"]) {
                for (var k, m = a(this["fruitsInSlotComp"]); !(k = m())["done"];) {
                  var p;
                  if (p = k["value"], d["ID"] === p["ID"]) {
                    l = !0;
                    break;
                  }
                }
                if (l) break;
              }
            }
            if (!l) for (var g = 0; g < this["fruitsComp"]["length"]; g++) if (!this["fruitsComp"][g]["isInSlot"]) {
              for (var y = g + 1; y < this["fruitsComp"]["length"]; y++) if (!this["fruitsComp"][y]["isInSlot"] && this["fruitsComp"][g]["ID"] === this["fruitsComp"][y]["ID"]) {
                l = !0;
                break;
              }
              if (l) break;
            }
            if (!l) return this["overFun"]("消不掉啦"), !0;
          }
          if (this["fruitsComp"]["length"] != this["fruitsInSlotComp"]["length"]) return !1;
          for (var w in this["fruitsComp"]) if (!this["fruitsComp"][w]["isTouch"]) return !1;
          return this["overFun"]("消不掉啦"), !1;
        }, n["canMatchInSlot"] = function () {
          for (var t = to, n = "fruitsInSlotComp", r = "length", i = "ID", e = 0; e < this["fruitsInSlotComp"]["length"]; e++) for (var a = e + 1; a < this["fruitsInSlotComp"]["length"]; a++) if (this["fruitsInSlotComp"][e]["ID"] === this["fruitsInSlotComp"][a]["ID"]) return !0;
          return !1;
        }, n["debounceCheckLose"] = function () {
          var t = to,
            n = "checkLose";
          this["unschedule"](this["checkLose"]), this["scheduleOnce"](this["checkLose"], .2);
        }, n["checkLose"] = function () {
          var t,
            n,
            r = to,
            i = "fruitsInSlotComp",
            e = "length";
          if ((t = this, F["ins"]["status"] != U["UNRUN"]) && (n = this["fruitsInSlotComp"]["length"], this["checkPro50UeseProp"](), n > this["slotsNum"])) {
            this["overFun"]("装不下啦"), S["stopAllByTag"](2);
            for (var a = function () {
                var n = to,
                  r = t["fruitsInSlotComp"][u];
                t["scheduleOnce"](function () {
                  var t = to,
                    n = 100;
                  r["setRigType"](p["Static"]), r["node"]["getComponent"](d)["color"] = A(100, 100, 100);
                }, 0);
              }, u = 0; u < this["fruitsInSlotComp"]["length"]; u++) a();
          }
        }, n["bottomFruitAnim"] = function () {
          var t,
            n,
            r = to,
            i = r[4],
            e = r[3],
            a = r[10],
            u = "arrangeType",
            s = "to",
            o = "apply";
          (t = null, this["fruitsComp"]["length"] <= 0 || F["ins"]["status"] == U["UNRUN"] || 1 == this["currentLevel"] || (0 != this["arrangeType"] && 1 != this["arrangeType"] || (t = this["getBottomFruit"](10000, function (t, n) {
            return t[St] < n;
          })), !t)) || (n = t["node"]["getComponent"](d), y(n)["to"](.6, function () {
            var t,
              n = to,
              r = ro,
              i = 80,
              e = "color";
            return (t = Pu({}, "color", 0))["color"] = A(80, 80, 80, 255), t;
          }["apply"]())["to"](.6, function () {
            var t,
              n = to,
              r = 255,
              i = "color";
            return (t = Pu({}, "color", 0))["color"] = A(255, 255, 255, 255), t;
          }["apply"]())["start"]());
        }, n["getBottomFruit"] = function (t, n) {
          for (var r = to, i = "fruitsComp", e = "node", a = null, u = t, s = 0; s < this["fruitsComp"]["length"]; s++) {
            var o;
            (o = this["fruitsComp"][s])["isTouch"] || 0 != o["fruitType"] || n(o["node"], u) && (u = o["node"][St], a = o);
          }
          return a;
        }, n["stopGame"] = function () {
          var t,
            n = to,
            r = n[4];
          t = this, F["ins"]["status"] = U["UNRUN"];
          for (var i = function () {
              var n = to,
                r = t["fruitsComp"][e];
              t["scheduleOnce"](function () {
                var t = to;
                r["setRigType"](p["Static"]);
              });
            }, e = 0; e < this["fruitsComp"]["length"]; e++) i();
        }, n["resumGame"] = function () {
          var t,
            n = to,
            r = n[1],
            i = n[4];
          t = this, F["ins"]["status"] = U["RUN"], this["checkWin"](), this["checkLose"]();
          for (var e = function () {
              var n = to,
                r = t["fruitsComp"][a];
              r["isTouch"] && t["scheduleOnce"](function () {
                var t = to;
                r["setRigType"](p["Dynamic"], r["gravityScale"], !0);
              });
            }, a = 0; a < this["fruitsComp"]["length"]; a++) e();
        }, n["checkWin"] = function () {
          var t = to,
            n = t[4];
          F["ins"]["status"] != U["UNRUN"] && this["fruitRemnantNum"] <= 0 && (j["gameMgr"]["gameState"] = z["isPaused"], this["winFun"]());
        }, n["overFun"] = function (t) {
          var n = to,
            r = "gameMgr";
          B["inst"]["setUndergoLv"](!0), this["fullTip"](t), this["closeViewTime"](), j["gameMgr"]["gameState"] = z["isOver"], j["gameMgr"]["onGameOver"](H["LAYER_LOSE_FULL"]);
        }, n["winFun"] = function (t) {
          var n = to,
            r = n[2],
            i = n[10],
            e = n[5],
            u = n[4],
            s = n[8],
            o = n[3],
            c = n[13],
            f = n[12],
            h = "inst",
            v = "active",
            l = "getedFruitList",
            b = "FruitDownLayer";
          if (void 0 === t && (t = !1), $["ins"]["addScore"]($["SCORE_CLEAR"]), B["inst"]["setUndergoLv"](!1), this["topWall"]["active"] = !1, this["closeViewTime"](), et["inst"]["resetForNewLevel"](), t) for (var d, k = []["concat"](this["fruitsComp"]), m = a(k); !(d = m())["done"];) {
            var p;
            p = d["value"], this["getedFruitList"]["push"](p["calculatedInfo_"]), this["recycleFruit"](p);
          }
          j["uiMgr"]["toggle"](H["LAYER_MAIN"], !1), this["showGameMoveAni"](), this["FruitDownLayer"]["node"]["active"] = !0, this["FruitDownLayer"]["showAni"](this["getedFruitList"]), this["recycle"]();
        }, n["btnRemoveFun"] = function (t, n, r) {
          var i,
            e = to,
            u = e[11],
            s = e[3],
            o = "isDowning",
            c = "size",
            f = "forEach";
          if (i = this, void 0 === r && (r = !1), 0 != this["fruitsComp"]["length"]) {
            var h, v, l, b, d, k;
            if (this["closeViewTime"](), this["sortFruit"](), this["isDowning"] = !0, h = new Set(), l = 0, function () {
              var n,
                r,
                e,
                u = to,
                s = u[4],
                o = u[2],
                c = "fruitsInSlotComp",
                f = "concat",
                v = "done",
                b = "value",
                d = "arrangeType",
                k = "node";
              if (n = function (n) {
                var r,
                  e = to,
                  a = e[1],
                  u = "has",
                  s = "add";
                return l >= t || !h["has"](n) && !!(r = i["getMatchFruit"](n)) && !h["has"](r) && (h["add"](n), h["add"](r), ++l >= t);
              }, i["fruitsInSlotComp"]["length"] > 0) for (var m, p = []["concat"](i["fruitsInSlotComp"])["reverse"](), g = a(p); !(m = g())["done"] && !n(m["value"]););else if (e = i["fruitsComp"]["filter"](function (t) {
                var n = to;
                return t["ID"] > 0 && 0 === t["fruitType"] && !t["holeComp"];
              }), r = K["shuffleArray"]([]["concat"](e)), 1 == t) {
                if (1 == i["arrangeType"]) {
                  for (var y, w = r[0]["node"][St], _ = r[0], M = a(r); !(y = M())["done"];) {
                    var S;
                    (S = y["value"])["node"][St] < w && (w = S["node"][St], _ = S);
                  }
                  n(_);
                } else if (3 == i["arrangeType"]) {
                  for (var A, C = r[0]["node"][At], x = r[0], T = a(r); !(A = T())["done"];) {
                    var L;
                    (L = A["value"])["node"][At] < C && (C = L["node"][At], x = L);
                  }
                  n(x);
                } else if (2 == i["arrangeType"]) {
                  for (var I, R = r[0]["node"][At], E = r[0], D = a(r); !(I = D())["done"];) {
                    var N;
                    (N = I["value"])["node"][At] > R && (R = N["node"][At], E = N);
                  }
                  n(E);
                } else for (var P, G = a(r); !(P = G())["done"] && !n(P["value"]););
              } else for (var O, F = a(r); !(O = F())["done"] && !n(O["value"]););
            }(), function () {
              var n = to,
                r = n[4],
                e = n[1],
                u = n[7],
                s = n[14],
                o = "fruitsInSlotComp",
                c = "curHoleFruitTyes";
              if (!(l >= t)) for (var f = i["fruitsInSlotComp"]["length"] - 1; f >= 0; f--) {
                var v;
                if (v = i["fruitsInSlotComp"][f], !h["has"](v)) for (var b, d = a(i["holeComps"]); !(b = d())["done"];) {
                  var k, m;
                  if (-1 !== (m = (k = b["value"])["curHoleFruitTyes"]["indexOf"](v["ID"]))) return k["curHoleFruitTyes"]["splice"](m, 1), k["upHoleLa"](), k["checkRecycle"](), h["add"](v), i["fillLight"](), void l++;
                }
              }
            }(), d = 2 * t, h["size"] > d) k = Array["from"](h)["slice"](0, d), h["clear"](), k["forEach"](function (t) {
              return h["add"](t);
            });
            if (0 === h["size"]) return this["isDowning"] = !1, this["startViewTime"](), void (n && n());
            for (var m = 0; m < l; m++) this["onEliminatePair"]();
            v = 0, b = h["size"], h["forEach"](function (t) {
              var e = to;
              t["hideCollider"](), t["isTouch"] = !0, r && t["streakFun"](), i["fruitTween"](t, function () {
                var t = to,
                  r = t[7],
                  e = "arrangeType";
                ++v >= b && (n && n(), i["startViewTime"](), i["isDowning"] = !1, 1 === i["arrangeType"] ? i["fruitDown"]() : 2 !== i["arrangeType"] && 3 !== i["arrangeType"] || i["fruitMove"](!0));
              });
            });
          }
        }, n["onEliminatePair"] = function () {
          var t = to;
          $["ins"]["addScore"]($["SCORE_ELIMINATE"]);
        }, n["getMatchFruit"] = function (t) {
          for (var n, r, i, e = to, u = e[8], s = e[3], o = e[2], c = e[15], f = e[10], h = "ID", v = "fruitType", l = "isJoint", b = "push", d = "holeComp", k = "node", m = "length", p = "eliminateDataSort", g = "jointGearMgr", y = "removeRopeByFruit", w = "hideCollider", _ = "unlockFruit", M = [], S = [], A = [], C = [], x = [], T = a(this["fruitsComp"]); !(i = T())["done"];) {
            var L;
            (L = i["value"]) === t || L["isCollider"] || L["ID"] !== t["ID"] || (0 === L["fruitType"] ? L["isJoint"] ? S["push"](L) : L["holeComp"] && 0 !== L["node"]["scale"][At] ? A["push"](L) : M["push"](L) : 1 === L["fruitType"] ? C["push"](L) : 2 === L["fruitType"] && x["push"](L));
          }
          return r = null, (n = M["concat"](S))["length"] > 0 ? (this["eliminateDataSort"](n, !0), r = n[0], this["jointGearMgr"]["removeRopeByFruit"](r["node"]), r["hideCollider"]()) : A["length"] > 0 ? (this["eliminateDataSort"](A), (r = A[0])["hideCollider"](), r["holeComp"]["genFruit"]()) : C["length"] > 0 ? (this["eliminateDataSort"](C), (r = C[0])["hideCollider"](), r["unlockFruit"]()) : x["length"] > 0 && (this["eliminateDataSort"](x), (r = x[0])["hideCollider"](), r["unlockFruit"]()), r && t["isJoint"] && this["jointGearMgr"]["removeRopeByFruit"](t["node"]), r;
        }, n["eliminateDataSort"] = function (t, n) {
          var r,
            i = to;
          r = this, void 0 === n && (n = !1), P["inst"]["bubbleSort"](t, function (t, i) {
            var e,
              a = to,
              u = a[2],
              s = "isTouch",
              o = "arrangeType",
              c = "node",
              f = "inst",
              h = "halfGameW";
            return !(!i["isTouch"] || !n) || (0 == r["arrangeType"] || 1 == r["arrangeType"] ? i["node"][St] < t["node"][St] : (2 == r["arrangeType"] || 3 == r["arrangeType"]) && (e = i["node"][At], n ? !t["isTouch"] && e > -D["inst"]["halfGameW"] && e < D["inst"]["halfGameW"] : e > -D["inst"]["halfGameW"] && e < D["inst"]["halfGameW"]));
          });
        }, n["btnDisturbFun"] = function (t) {
          var n,
            r,
            i,
            e,
            a,
            u,
            s,
            o = to,
            c = o[8],
            f = o[2],
            h = o[10],
            v = "jointGearMgr",
            l = "length",
            b = "holeCompBind",
            d = "fruitComp",
            k = "movePos",
            m = "pos";
          if (e = this, this["isDowning"] = !0, this["setCollisionMgr"](!1), this["closeViewTime"](), (i = this["jointGearMgr"]["ConnectNum"]) > 0 && this["jointGearMgr"]["recycle"](), a = function () {
            var n = to;
            e["sortFruit"](), e["jointGearMgr"]["shuffleCreateJoint"](i, e["fruitsComp"], function () {
              var n = to;
              e["setCollisionMgr"](!0), e["isDowning"] = !1, t && t(), e["startViewTime"]();
            });
          }, n = this["fruitsComp"]["filter"](function (t) {
            var n = to,
              r = n[8],
              i = n[6],
              e = "fruitType";
            return !(t["isCollider"] || t["isInSlot"] || 0 != t["fruitType"] && 2 != t["fruitType"] || t["holeComp"] || t["isCanCheck"]);
          }), r = [], n["length"] > 0) for (var p = 0; p < n["length"]; p++) r["push"](function () {
            var t,
              r,
              i = to,
              e = "pos",
              a = "holeCompBind";
            return Pu(t = {}, "pos", 0), Pu(t, "holeCompBind", 0), (r = t)["pos"] = n[p]["node"]["position"]["clone"](), r["holeCompBind"] = n[p]["holeCompBind"], r;
          }["apply"]()), n[p]["holeCompBind"] = null;
          if (2 == r["length"]) s = r[0]["holeCompBind"], u = r[1]["holeCompBind"], n[0]["holeCompBind"] = u, n[1]["holeCompBind"] = s, u && u["fruitComp"] && (u["fruitComp"] = n[0]), s && s["fruitComp"] && (s["fruitComp"] = n[1]), n[0]["movePos"](null, r[1]["pos"]), n[1]["movePos"](null, r[0]["pos"], function () {
            a();
          });else if (r["length"] > 2) {
            P["inst"]["shuffleArray"](r);
            for (var g = 0, y = function () {
                var t = to,
                  i = "holeCompBind",
                  e = "fruitComp",
                  u = n[w];
                u["holeCompBind"] = r[w]["holeCompBind"], u["holeCompBind"] && u["holeCompBind"]["fruitComp"] && (u["holeCompBind"]["fruitComp"] = u), u["movePos"](null, r[w]["pos"], function () {
                  var t = to;
                  u["checkBound"](), ++g == n["length"] && a();
                });
              }, w = 0; w < n["length"]; w++) y();
          } else a();
        }, n["reviveFun"] = function () {
          var t,
            n = to,
            r = n[5],
            i = n[7],
            e = n[4],
            a = "fruitsComp",
            u = "filter",
            s = "length";
          if (t = this, this["isValid"] && j["gameMgr"]["gameState"] != z["isPlaying"]) {
            var o, c, f, v;
            this["isDowning"] = !0, F["ins"]["status"] = U["UNRUN"];
            for (var l = this["fruitsComp"]["filter"](function (n) {
                var r = to,
                  i = r[8],
                  e = r[6],
                  a = "node";
                return !n["isCollider"] && !n["isInSlot"] && !n["isCanCheck"] && !n["isColliderLR"] && !n["holeComp"] && t["isOnScreen"](n["node"][At], n["node"][St]);
              }), b = 0; b < l["length"]; b++) l[b]["setRigType"](p["Dynamic"], 0, !1);
            f = this["fruitsComp"]["filter"](function (t) {
              return t["isTouch"];
            }), v = f["reduce"](function (t, n) {
              var r = "node";
              return t["node"][St] < n["node"][St] ? t : n;
            }), o = f["length"], c = [], function () {
              for (var n = to, r = ro, i = n[10], e = 255, a = "fruitsInSlotComp", u = "length", s = 0, b = o - (v ? 1 : 0), k = function () {
                  var n = to,
                    r = n[3],
                    i = n[7],
                    e = n[8],
                    a = n[0],
                    u = "fruitsInSlotComp",
                    o = "indexOf",
                    d = "pos",
                    k = m;
                  if (v == f[m]) return 1;
                  var g = f[k];
                  -1 != t["fruitsInSlotComp"]["indexOf"](g) && t["fruitsInSlotComp"]["splice"](t["fruitsInSlotComp"]["indexOf"](g), 1);
                  var y = function () {
                    var t,
                      n = to,
                      r = "pos",
                      i = "radius",
                      e = "downOrgPos",
                      a = (Pu(t = {}, "pos", 0), Pu(t, "radius", 0), t);
                    return a["pos"] = h["v2"](g["downOrgPos"][At], g["downOrgPos"][St]), a["radius"] = g["radius"], a;
                  }["apply"]();
                  if (-1 != c["indexOf"](g) || g["isHolePos"] && !g["holeCompBind"] || g["isAutoDrop"]) {
                    var w = t["getSafePos"](l);
                    y["pos"] = h["v2"](w[At], w[St]);
                  }
                  g["fruitRigidbody"]["group"] = G["RB_GROUPS"]["fruit"], g["movePos"](0, h["v3"](y["pos"][At], y["pos"][St]), function () {
                    var n = to;
                    g["fruitReset"](), ++s == b && t["scheduleOnce"](function () {
                      for (var n = to, r = n[4], i = n[1], e = n[7], a = 0; a < l["length"]; a++) {
                        var u = l[a];
                        v != u && u["setRigType"](p["Static"]);
                      }
                      F["ins"]["status"] = U["RUN"], j["gameMgr"]["gameState"] = z["isPlaying"], t["isDowning"] = !1, t["startViewTime"]();
                    });
                  }, .5, .4);
                }, m = 0; m < o; m++) k();
              if (t["fruitsInSlotComp"]["length"] > 0) for (var g = 0; g < t["fruitsInSlotComp"]["length"]; g++) {
                var y, w;
                (y = (w = t["fruitsInSlotComp"][g])["node"]["getComponent"](d)) && (y["color"] = A(255, 255, 255, 255)), w["setRigType"](p["Dynamic"], w["gravityScale"]);
              }
            }();
          }
        }, n["isOnScreen"] = function (t, n) {
          var r = to,
            i = 100,
            e = "inst",
            a = "halfGameW";
          return !(t >= D["inst"]["halfGameW"] + 100 || t <= -D["inst"]["halfGameW"] - 100 || n >= D["inst"]["halfGameH"] + 100);
        }, n["getNewPos"] = function (t, n) {
          var r,
            i,
            e,
            a,
            u,
            s,
            o,
            c = to,
            f = ro,
            v = c[10],
            l = c[2],
            b = c[4],
            d = c[7],
            k = c[3],
            m = 300,
            p = 100,
            g = 150,
            y = "inst",
            _ = "halfGameH",
            S = "arrangeType",
            A = "line",
            C = "v2",
            x = "RandomInt",
            T = "length",
            L = "scale",
            I = "random",
            R = "apply";
          if (a = this, e = -300, i = 300, s = this["boundaryLine"][St] + 50, o = D["inst"]["halfGameH"] - 80, 2 == this["arrangeType"] ? (i = this["line"][At] - 100, o = D["inst"]["halfGameH"] - 150) : 3 == this["arrangeType"] && (e = this["line"][At] + 100, o = D["inst"]["halfGameH"] - 150), !(r = function (r) {
            for (var i = to, e = i[4], u = i[2], s = i[6], o = "length", c = "radius", f = [], v = a["fruitsComp"]["filter"](function (t) {
                var r = to,
                  i = r[8],
                  e = "node";
                return t != n && !t["isCollider"] && !t["isInSlot"] && !t["isCanCheck"] && a["isOnScreen"](t["node"][At], t["node"][St]);
              }), l = 0; l < v["length"]; l++) {
              var b, d;
              d = v[l]["node"]["position"], b = v[l]["radius"], f["push"](function () {
                var t,
                  n,
                  r = to,
                  i = "pos",
                  e = "radius";
                return Pu(t = {}, "pos", 0), Pu(t, "radius", 0), (n = t)["pos"] = h["v2"](d[At], d[St]), n["radius"] = b, n;
              }["apply"]());
            }
            f = f["concat"](t);
            for (var k = 0; k < f["length"]; k++) {
              var m;
              if (m = f[k], M["distance"](r, m["pos"]) < m["radius"]) return !1;
            }
            return !0;
          })(u = h["v2"](D["inst"]["RandomInt"](e, i), D["inst"]["RandomInt"](s, o)))) {
            u = null;
            for (var E = 0; E < 100 && !r(u = h["v2"](D["inst"]["RandomInt"](e, i), D["inst"]["RandomInt"](s, o))); E++) u = null;
          }
          if (!u) {
            for (var N = this["fruitsComp"]["filter"](function (t) {
                var r = to,
                  i = r[8],
                  e = "node";
                return t != n && !t["isCollider"] && !t["isInSlot"] && !t["isCanCheck"] && a["isOnScreen"](t["node"][At], t["node"][St]);
              }), P = [], G = 0; G < N["length"]; G++) {
              var O, F, B, z, U;
              if (z = (O = N[G]["node"])["getComponent"](w), F = z["width"] / 2 * O["scale"][At], B = z["height"] / 2 * O["scale"][St], O[At] + F < i && O[At] - F > e && O[St] + B < o && O[St] - B > s) U = h["v2"](O[At], O[St]), Math["random"]() < .5 ? Math["random"]() < .5 ? U[At] += F : U[At] -= F : Math["random"]() < .5 ? U[St] += B : U[St] -= B, P["push"](function () {
                var t,
                  n,
                  r = to,
                  i = "pos",
                  e = "radius";
                return Pu(t = {}, "pos", 0), Pu(t, "radius", 0), (n = t)["pos"] = U, n["radius"] = Math["min"](F, B), n;
              }["apply"]());
            }
            u = P[D["inst"]["RandomInt"](0, P["length"] - 1)]["pos"];
          }
          return u || (u = h["v2"](D["inst"]["RandomInt"](e, i), D["inst"]["RandomInt"](s, o))), function () {
            var t,
              r,
              i = to,
              e = "pos",
              a = "radius";
            return Pu(t = {}, "pos", 0), Pu(t, "radius", 0), (r = t)["pos"] = u, r["radius"] = n["radius"], r;
          }["apply"]();
        }, n["creatBoxBoom"] = function (t) {
          var n = to,
            r = n[2],
            i = n[5],
            e = "ins";
          tt["ins"]["play"](V["breakWall"]), q["ins"]["getNode"]("boxBoom", this["gameRoot"]["getChildByName"]("walls"), new h["Vec3"](t[At], t[St]));
        }, n["hightLight"] = function (t) {
          var n,
            r = to,
            i = r[10];
          (n = t["getComponent"](d)) && (n["customMaterial"] = this["materialAttacked"], this["scheduleOnce"](function () {
            var t = to;
            n["isValid"] && (n["customMaterial"] = null);
          }, .24));
        }, n["showFruitEff"] = function (t, n) {
          var r,
            i = to,
            e = ro;
          r = this, void 0 === n && (n = 0);
          for (var a = nt["convetOtherNodeSpaceAR"](t, this["effsRoot"]), u = D["inst"]["RandomInt"](8, 12), s = function () {
              for (var t = to, i = ro, e = t[3], u = t[6], s = t[9], o = t[0], c = t[2], f = 50, v = 55, l = 95, b = "children", d = "active", k = "v3", m = "inst", p = "randomN", g = "Vec3", w = "by", _ = "apply", M = "start", S = q["ins"]["getNode"]("effPr"), A = 0; A < S["children"]["length"]; A++) S["children"][A]["active"] = A == n;
              S["active"] = !0, r["effsRoot"]["addChild"](S), S["setPosition"](h["v3"](a[At] + D["inst"]["randomN"](-50, 50), a[St] + D["inst"]["randomN"](-50, 50))), S["setScale"](h["v3"](.69, .69, .69)["multiplyScalar"](D["inst"]["randomN"](1, 2))), S["angle"] = 0;
              var C = D["inst"]["randomN"](55, 95),
                x = D["inst"]["GetQuatForV3"](D["inst"]["RandomAngle"]()),
                T = new h["Vec3"](1, 0, 0);
              h["Vec3"]["transformQuat"](T, T, x);
              var L = D["inst"]["randomN"](55, 95),
                I = L / C;
              y(S)["by"](I, function () {
                var t = to,
                  n = "position",
                  r = Pu({}, "position", 0);
                return r["position"] = h["v3"](T[At] * L, T[St] * L, 0), r;
              }["apply"](), function () {
                var t = to,
                  n = "easing",
                  r = Pu({}, "easing", 0);
                return r["easing"] = "sineOut", r;
              }["apply"]())["call"](function () {
                var t = to;
                S["active"] = !1, S["removeFromParent"](), q["ins"]["putNode"](S);
              })["start"](), y(S)["parallel"](y(S)["by"](I, function () {
                var t = to,
                  n = ro,
                  r = "angle",
                  i = Pu({}, "angle", 0);
                return i["angle"] = D["inst"]["randomN"](260, 300), i;
              }["apply"]()), y(S)["to"](I, function () {
                var t = to,
                  n = "scale",
                  r = Pu({}, "scale", 0);
                return r["scale"] = h["v3"](0, 0, 0), r;
              }["apply"]()))["start"]();
            }, o = 0; o < u; o++) s();
        }, n["breakIceFun"] = function () {
          var t,
            n = to,
            r = "iceComps",
            i = "length",
            e = "isBreaking";
          if (t = this, !(this["iceComps"]["length"] <= 0 || this["isBreaking"])) {
            this["isBreaking"] = !0;
            for (var a = 0; a < this["iceComps"]["length"]; a++) this["iceComps"][a]["iceBox"]();
            this["scheduleOnce"](function () {
              t["isBreaking"] = !1;
            }, .01);
          }
        }, n["iceTip"] = function () {
          var t = to,
            n = "isIceTip";
          this["isIceTip"] || (this["isIceTip"] = !0, this["fullTip"]("未解冻"));
        }, n["update"] = function (t) {
          var n = to,
            r = ro,
            i = n[4],
            e = n[10],
            u = n[8],
            s = n[3],
            o = n[12],
            c = n[2],
            f = "node",
            h = "active",
            v = "time_",
            l = "holeComps",
            b = "length",
            d = "fruitsComp",
            k = "push",
            m = "position",
            p = "getInstance";
          if (this["node"]["active"] && (this["jointGearMgr"]["upDrawRope"](), F["ins"]["status"] != U["UNRUN"] && this["node"]["active"] && (this["time_"] += .02, this["time_"] >= this["totalTime_"]))) {
            if (this["time_"] = 0, this["holeComps"]["length"] > 0) for (var g = 0; g < this["holeComps"]["length"]; g++) {
              var y;
              (y = this["holeComps"][g]) && y["upInfo"]();
            }
            for (var w = [], _ = 0; _ < this["fruitsComp"]["length"]; _++) {
              var M;
              (M = this["fruitsComp"][_])["isTouch"] && !M["isInSlot"] && M["isColliderLR"] && w["push"](M);
            }
            if (w["length"] > 1) {
              for (var S, A = [], C = a(w); !(S = C())["done"];) {
                var x, T;
                (x = (T = S["value"])["fruitRigidbody"]) && x["linearVelocity"]["length"]() < 100 && A["push"](T);
              }
              if (A["length"] > 1) for (var L = A[0], I = 1; I < A["length"]; I++) A[I]["node"]["position"][St] < L["node"]["position"][St] && (L = A[I]);
            }
            st["getInstance"]() && st["getInstance"]()["checkHighFps"]();
          }
        }, n["onDisable"] = function () {
          var t = to;
          this["recycle"](), u["instance"] = null;
        }, n["recycle"] = function () {
          var t = to,
            n = t[13],
            r = t[5],
            i = t[7],
            e = t[6],
            a = "recycle",
            u = "fruitsComp",
            s = "length",
            o = "holeComps",
            c = "obstaclesRoot",
            f = "children",
            h = "removeFromParent",
            v = "ins",
            l = "putNode",
            b = "stakeRoot",
            d = "effsRoot";
          this["closeViewTime"](), this["jointGearMgr"]["recycle"](), this["unscheduleAllCallbacks"](), this["setCollisionMgr"](!1);
          for (var k = this["fruitsComp"]["length"] - 1; k >= 0; k--) {
            var m;
            (m = this["fruitsComp"][k]) && m["recycleSelf"]();
          }
          for (var p = this["holeComps"]["length"] - 1; p >= 0; p--) {
            var g;
            (g = this["holeComps"][p]) && g["recycle"](!1);
          }
          for (var y = this["obstaclesRoot"]["children"]["length"] - 1; y >= 0; y--) {
            var w;
            (w = this["obstaclesRoot"]["children"][y]) && (w["removeFromParent"](), q["ins"]["putNode"](w));
          }
          for (var _ = this["stakeRoot"]["children"]["length"] - 1; _ >= 0; _--) {
            var M;
            (M = this["stakeRoot"]["children"][_]) && (M["removeFromParent"](), q["ins"]["putNode"](M));
          }
          for (var A = this["effsRoot"]["children"]["length"] - 1; A >= 0; A--) {
            var C;
            (C = this["effsRoot"]["children"][A]) && (S["stopAllByTarget"](C), C["removeFromParent"](), q["ins"]["putNode"](C));
          }
          this["fruitsIDS"] = [], this["fruitsComp"] = [], this["holeComps"] = [], this["iceComps"] = [], this["fruitsInSlotComp"] = [];
        }, n["getImgFill"] = function () {
          var t,
            n,
            r,
            i,
            e,
            a,
            u,
            s = to,
            o = ro,
            c = s[4],
            f = s[12],
            h = s[6],
            v = s[10],
            l = 27,
            b = "ins",
            d = "fakeGame_level",
            k = "gameMgr",
            m = "fruitStr",
            p = "length",
            g = "sweetStr",
            y = "vegetableStr",
            w = "animalsStr",
            _ = "seaAnimalStr",
            M = "candyStr",
            S = "cityUnlockData",
            A = "setSpriteFrameAsync",
            C = "bundle",
            x = "path",
            T = "/spriteFrame";
          switch (e = this, (r = (0 === (n = (i = F["ins"]["fakeGame_level"] || 1) % 27) ? 27 : n) - 1) < 0 && (r = 0), Math["floor"]((i - 1) / 27) + 1) {
            case 0:
              j["gameMgr"]["fruitStr"][r % j["gameMgr"]["fruitStr"]["length"]];
              break;
            case 1:
              j["gameMgr"]["sweetStr"][r % j["gameMgr"]["sweetStr"]["length"]];
              break;
            case 2:
              j["gameMgr"]["vegetableStr"][r % j["gameMgr"]["vegetableStr"]["length"]];
              break;
            case 3:
              j["gameMgr"]["animalsStr"][r % j["gameMgr"]["animalsStr"]["length"]];
              break;
            case 4:
              j["gameMgr"]["seaAnimalStr"][r % j["gameMgr"]["seaAnimalStr"]["length"]];
              break;
            case 5:
              j["gameMgr"]["candyStr"][r % j["gameMgr"]["candyStr"]["length"]];
              break;
            default:
              j["gameMgr"]["fruitStr"][r % j["gameMgr"]["sweetStr"]["length"]];
          }
          t = (F["ins"]["fakeGame_level"] - 1) % (rt["cityUnlockData"]["length"] - 1), this["gameRoot"]["getChildByName"]("progressBg")["active"] = !0, a = rt["cityUnlockData"][t][0], u = W[rt["cityUnlockData"][t][1]], X["ins"]["setSpriteFrameAsync"](this["fillBg"], u["bundle"], a, u["path"] + Et + a + "/spriteFrame", function (t) {
            var n = to;
            K["SetSpriteSizeHeight"](e["fillBg"], 78);
          }), X["ins"]["setSpriteFrameAsync"](this["fillImg"], u["bundle"], a, u["path"] + Et + a + "/spriteFrame", function (t) {
            var n = to;
            K["SetSpriteSizeHeight"](e["fillImg"], 78);
          });
        }, n["changeThemeBG"] = function () {}, n["setTip"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[6],
            a = i[10],
            u = i[2],
            s = i[4],
            o = i[0],
            c = i[12],
            f = "levelBg",
            h = "getChildByName",
            v = "getComponent",
            l = "string",
            k = "ins",
            m = "fakeGame_level",
            p = "arrangeType";
          r = (t = this["levelBg"]["getChildByName"]("labLevel")["getComponent"](b))["node"]["children"][0]["getComponent"](b), t["string"] = "第 " + F["ins"]["fakeGame_level"] + " 关", r["string"] = rt["getCurCitySimpleName"](F["ins"]["fakeGame_level"]) + Tt + rt["getCurlvName"](F["ins"]["fakeGame_level"]), (n = this["levelBg"]["getChildByName"]("img"))["active"] = !1, this["arrangeType"] > 0 && (n["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", ["xiangxia", "向右", "向左", "中间", "小雪", "未知", "黑洞"][this["arrangeType"] - 1]), this["scheduleOnce"](function () {
            var t = to;
            K["SetSpriteSizeWidth"](n["getComponent"](d), 50);
          }, 0));
        }, n["dirTipFun"] = function (t) {
          var n,
            r,
            i,
            e,
            a = to,
            u = a[4],
            s = a[3],
            o = a[6],
            c = a[2],
            f = a[9],
            v = a[7],
            l = "dirtectionTip",
            k = "levelBg",
            m = "getChildByName",
            p = "getComponent",
            _ = "target",
            M = "to",
            S = "apply",
            A = "arrangeType",
            C = "string",
            x = "dirLabStr",
            T = "spriteFrame",
            L = "ins",
            I = "getRes",
            R = "Sprite",
            E = "game",
            D = "dirImgStr",
            N = "fruitConfig";
          this["dirtectionTip"]["setPosition"](0, this["levelBg"][St] - 300), (e = this["levelBg"]["getChildByName"]("img"))["active"] = !1, i = this["dirtectionTip"]["getComponent"](g) || this["dirtectionTip"]["addComponent"](g), y()["target"](i)["to"](.5, function () {
            var t,
              n = "opacity";
            return (t = Pu({}, "opacity", 0))["opacity"] = 255, t;
          }["apply"]())["delay"](.7)["parallel"](y()["target"](this["dirtectionTip"])["to"](.7, function () {
            var t,
              n,
              r = to,
              i = "position",
              e = "scale";
            return Pu(t = {}, "position", 0), Pu(t, "scale", 0), (n = t)["position"] = new h["Vec3"](100, this["levelBg"][St], 0), n["scale"] = h["v3"](0, 0, 0), n;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to,
              r = "easing";
            return (t = Pu({}, "easing", 0))["easing"] = "backIn", t;
          }["apply"]()), y()["target"](i)["to"](.7, function () {
            var t,
              n = "opacity";
            return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
          }["apply"](), function () {
            var t,
              n = to,
              r = "easing";
            return (t = Pu({}, "easing", 0))["easing"] = "backIn", t;
          }["apply"]()))["call"](function () {
            e["active"] = !0, t && t();
          })["start"](), n = this["dirtectionTip"]["getChildByName"]("dirImg"), r = this["dirtectionTip"]["getChildByName"]("dirLab")["getComponent"](b), this["arrangeType"] > 0 ? (r["string"] = this["dirLabStr"][this["arrangeType"] - 1], n["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", this["dirImgStr"][this["arrangeType"] - 1])) : (this["fruitConfig"]["iceCount"] > 0 && (n["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", this["dirImgStr"][4]), r["string"] = this["dirLabStr"][4]), this["fruitConfig"]["randomBox"] > 0 && (n["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", this["dirImgStr"][5]), r["string"] = this["dirLabStr"][5]), this["fruitConfig"]["holeItemTypeArr"]["length"] > 0 && (n["getComponent"](d)["spriteFrame"] = X["ins"]["getRes"](Z["Sprite"], "game", this["dirImgStr"][6]), n["getComponent"](w)["width"] *= 1.5, n["getComponent"](w)["height"] *= 1.5, r["string"] = this["dirLabStr"][6]));
        }, n["fullTip"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[6],
            u = e[2],
            s = e[3],
            o = "getComponent";
          r = (i = this["gameRoot"]["getChildByName"]("full"))["children"][0]["getComponent"](b), n = i["getComponent"](g) || i["addComponent"](g), r["string"] = t, S["stopAllByTarget"](i), y(n)["to"](.3, function () {
            var t,
              n = "opacity";
            return (t = Pu({}, "opacity", 0))["opacity"] = 255, t;
          }["apply"]())["call"](function () {
            var t = to,
              r = t[3],
              e = "to",
              a = "apply";
            y(i)["repeat"](2, y(i)["to"](.1, function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 10, t;
            }["apply"]())["to"](.1, function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]())["to"](.1, function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = -10, t;
            }["apply"]())["to"](.1, function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]()))["delay"](.5)["call"](function () {
              var t = to,
                r = t[3];
              y(n)["to"](.3, function () {
                var t,
                  n = "opacity";
                return (t = Pu({}, "opacity", 0))["opacity"] = 0, t;
              }["apply"]())["start"]();
            })["start"]();
          })["start"]();
        }, n["updateFruitText"] = function (t) {
          var n,
            r,
            i = to,
            e = ro,
            a = i[9],
            u = i[6],
            s = i[5],
            o = 100,
            c = "labFruit",
            f = "string",
            h = "fruitRemnantNum",
            v = "toString",
            l = "fruitTotalNum",
            b = "fillImg",
            d = "spriteFrame",
            k = "fillRange",
            m = "labProgress",
            p = "toFixed",
            g = " %";
          (void 0 === t && (t = !1), t) ? (this["labFruit"]["string"] = this["fruitRemnantNum"]["toString"](), n = (this["fruitTotalNum"] - this["fruitRemnantNum"]) / this["fruitTotalNum"], this["fillImg"]["spriteFrame"] && (this["fillImg"]["fillRange"] = n), this["labProgress"]["string"] = (100 * n)["toFixed"](0) + " %") : (this["fruitRemnantNum"]--, this["labFruit"]["string"] = this["fruitRemnantNum"]["toString"](), r = (this["fruitTotalNum"] - this["fruitRemnantNum"]) / this["fruitTotalNum"], this["fillImg"]["spriteFrame"] && (this["fillImg"]["fillRange"] = r), this["labProgress"]["string"] = (100 * r)["toFixed"](0) + " %", this["activeTween"] || this["checkWin"](), this["progressFun"](r));
        }, n["progressFun"] = function (t) {
          var n,
            r = to,
            i = "floor",
            e = "lastReportedProgress";
          (n = Math["floor"](100 * t)) % 10 == 0 && n !== this["lastReportedProgress"] && (Math["floor"](this["fruitRemnantNum"] / 2), this["lastReportedProgress"] = n);
        }, n["startViewTime"] = function () {
          this["isSpecialProp_"];
        }, n["resetViewTimeNum"] = function () {}, n["recoverViewTime"] = function () {}, n["closeViewTime"] = function () {}, n["addViewTime"] = function () {}, n["showGameMoveAni"] = function (t) {
          var n,
            r,
            i,
            e,
            a,
            u,
            s = to,
            o = s[3],
            c = s[6],
            f = "gameRoot",
            h = "getChildByName",
            v = "walls",
            l = "dropLeft",
            b = "active",
            d = "dropRight",
            k = "wall",
            m = "btnFirstWall",
            p = "btnSecondWall";
          (n = this, void 0 === t && (t = !1), t) ? (this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("dropLeft")["active"] = !0, this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("dropRight")["active"] = !0, this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("wall")["active"] = !0, (r = this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("btnFirstWall")) && (r["active"] = !0), (i = this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("btnSecondWall")) && (i["active"] = !0), this["gameRoot"]["getChildByName"]("basket01")["active"] = !0) : (this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("dropLeft")["active"] = !1, this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("dropRight")["active"] = !1, this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("wall")["active"] = !0, this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("wall")["getComponent"](T)["enabled"] = !1, (a = this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("btnFirstWall")) && (a["active"] = !1), (e = this["gameRoot"]["getChildByName"]("walls")["getChildByName"]("btnSecondWall")) && (e["active"] = !1), u = L["getVisibleSize"](), y(this["gameRoot"])["to"](.3, function () {
            var t;
            return (t = Pu({}, St, 0))[St] = u["height"], t;
          }["apply"]())["call"](function () {
            var t = to,
              r = t[6];
            n["gameRoot"]["getChildByName"]("basket01")["active"] = !1;
          })["start"]());
        }, n["recycleDownFruit"] = function () {
          var t = to;
          this["FruitDownLayer"]["recycleFruit"]();
        }, n["blitzkrieg"] = function () {
          var t = to,
            n = ro,
            r = t[1],
            i = t[2],
            e = t[6],
            a = 20,
            u = "fruitsComp",
            s = "length",
            o = "inst",
            c = "RandomInt";
          tt["ins"]["play"](V["lei"]);
          for (var f = Math["floor"](this["fruitsComp"]["length"] / 13), h = [], v = 0; v < f; v++) {
            for (var l = D["inst"]["RandomInt"](20, this["fruitsComp"]["length"] - 1); h["includes"](l) || this["fruitsComp"][l]["node"]["position"][St] < 300;) l = D["inst"]["RandomInt"](20, this["fruitsComp"]["length"] - 1);
            h["push"](l), this["fruitsComp"][l]["electricShock"]();
          }
        }, n["checkPro50UeseProp"] = function () {
          var t,
            n,
            r,
            i = to,
            e = i[10],
            a = "lastTouchFruit",
            u = "ID";
          (t = this, 1 != this["currentLevel"]) && (r = this["lastTouchFruit"]["length"] < 2 ? .5 : this["lastTouchFruit"][0] && this["lastTouchFruit"][1] && this["lastTouchFruit"][0]["ID"] == this["lastTouchFruit"][1]["ID"] ? 1.5 : .5, n = function () {
            var n,
              r = to,
              i = r[4],
              e = r[3],
              a = "fruitsInSlotComp",
              u = "length",
              s = "policeLineFruit",
              o = "fruitTotalNum",
              c = "inst";
            if (t["isValid"] && F["ins"]["status"] != U["UNRUN"] && (n = t["fruitsInSlotComp"]["length"], t["policeLineFruit"] = t["fruitsInSlotComp"][t["fruitsInSlotComp"]["length"] - 1], n == t["slotsNum"])) {
              var f;
              if (!t["btnFirstWall"] && !t["btnSecondWall"]) return;
              f = (t["fruitTotalNum"] - t["fruitRemnantNum"]) / t["fruitTotalNum"], et["inst"]["canPopupSlotItem"](f) && (et["inst"]["markSlotItemPopuped"](), j["uiMgr"]["toggle"](H["LAYER_Prop_Special"], !0, null, 2)), t["policeLineFruit"] = null;
            }
          }, this["scheduleOnce"](function () {
            var r = to,
              i = "lastTouchFruit",
              e = "ID";
            t["isValid"] && (2 == t["lastTouchFruit"]["length"] && t["lastTouchFruit"][0] && t["lastTouchFruit"][1] && t["lastTouchFruit"][0]["ID"] == t["lastTouchFruit"][1]["ID"] ? t["scheduleOnce"](function () {
              n();
            }, 1) : n());
          }, r));
        }, n["addTouchFruit"] = function (t) {
          var n = to,
            r = "lastTouchFruit";
          this["lastTouchFruit"]["includes"](t) || (this["lastTouchFruit"]["length"] < 2 || this["lastTouchFruit"]["shift"](), this["lastTouchFruit"]["push"](t));
        }, n["getSafePos"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = ro,
            u = e[4],
            s = 300,
            o = 200,
            c = 500,
            f = "apply",
            v = "v2",
            l = "inst",
            b = "RandomInt";
          return i = function () {
            var t,
              n,
              r = to,
              i = ro,
              e = r[2],
              a = 200,
              u = 300,
              s = "xMin",
              o = "xMax",
              c = "yMin",
              f = "yMax",
              h = "arrangeType";
            return Pu(t = {}, "xMin", 0), Pu(t, "xMax", 0), Pu(t, "yMin", 0), Pu(t, "yMax", 0), (n = t)["xMin"] = 3 == this["arrangeType"] ? -200 : -300, n["xMax"] = 2 == this["arrangeType"] ? 200 : 300, n["yMin"] = this["boundaryLine"][St], n["yMax"] = D["inst"]["halfGameH"], n;
          }["bind"](this)["apply"](), r = t["map"](function (t) {
            return function () {
              var n,
                r,
                i = to,
                e = "position",
                a = "radius";
              return Pu(n = {}, "position", 0), Pu(n, "radius", 0), (r = n)["position"] = t["node"]["position"], r["radius"] = t["radius"], r;
            }["apply"]();
          }), 0 == t["length"] ? h["v2"](D["inst"]["RandomInt"](-300, 300), D["inst"]["RandomInt"](200, 500)) : ((n = ut["inst"]["findSafePosition"](i, r, t[0]["radius"] || 50, function () {
            var t,
              n,
              r = to,
              i = "margin",
              e = "preferY",
              a = "safeMargin",
              u = "fallbackMode";
            return Pu(t = {}, "margin", 0), Pu(t, "preferY", 0), Pu(t, "safeMargin", 0), Pu(t, "fallbackMode", 0), (n = t)["margin"] = .8, n["preferY"] = 0, n["safeMargin"] = 15, n["fallbackMode"] = "random", n;
          }["apply"]())) || (n = h["v2"](D["inst"]["RandomInt"](-300, 300), D["inst"]["RandomInt"](200, 500))), n);
        }, n["playChuiziEff"] = function (t, n, r) {
          var i,
            e = to,
            a = e[1],
            u = e[4],
            s = e[6];
          void 0 === r && (r = new C(0, 0, 0)), (i = q["ins"]["getNode"]("chuizi")) && (this["node"]["addChild"](i), i["setPosition"](t["position"]["add"](r)), i["active"] = !0, i["getComponent"](ct)["playHammer"](n));
        }, n["setLastTouchFruit"] = function (t, n) {
          var r = to,
            i = "lastTouchFruitComp",
            e = "fruitComp",
            a = "isDown";
          n ? this["lastTouchFruitComp"]["fruitComp"] != t || this["lastTouchFruitComp"]["isDown"] || (this["lastTouchFruitComp"]["isDown"] = !0, this["fruitMove"](!0)) : (this["lastTouchFruitComp"]["fruitComp"] = t, this["lastTouchFruitComp"]["isDown"] = !1);
        }, n["getPr"] = function () {
          var t,
            n = to,
            r = "fruitTotalNum";
          return t = (this["fruitTotalNum"] - this["fruitRemnantNum"]) / this["fruitTotalNum"], parseFloat(t["toFixed"](2));
        }, u;
      }(I))["instance"] = void 0, Ht = n((Ut = $t)["prototype"], "materialAttacked", [xt], (Pu(ht = {}, "configurable", !0), Pu(ht, "enumerable", !0), Pu(ht, "writable", !0), Pu(ht, "initializer", function () {
        return null;
      }), ht)), Vt = n(Ut["prototype"], "normalMaterial", [Lt], (Pu(vt = {}, "configurable", !0), Pu(vt, "enumerable", !0), Pu(vt, "writable", !0), Pu(vt, "initializer", function () {
        return null;
      }), vt)), Wt = n(Ut["prototype"], "lightMaterial", [It], (Pu(lt = {}, "configurable", !0), Pu(lt, "enumerable", !0), Pu(lt, "writable", !0), Pu(lt, "initializer", function () {
        return null;
      }), lt)), Jt = n(Ut["prototype"], "obstaclesRoot", [Rt], (Pu(bt = {}, "configurable", !0), Pu(bt, "enumerable", !0), Pu(bt, "writable", !0), Pu(bt, "initializer", function () {
        return null;
      }), bt)), jt = n(Ut["prototype"], "stakeRoot", [Dt], (Pu(dt = {}, "configurable", !0), Pu(dt, "enumerable", !0), Pu(dt, "writable", !0), Pu(dt, "initializer", function () {
        return null;
      }), dt)), qt = n(Ut["prototype"], "fruits", [Nt], (Pu(kt = {}, "configurable", !0), Pu(kt, "enumerable", !0), Pu(kt, "writable", !0), Pu(kt, "initializer", function () {
        return null;
      }), kt)), Kt = n(Ut["prototype"], "numRoot", [Pt], (Pu(mt = {}, "configurable", !0), Pu(mt, "enumerable", !0), Pu(mt, "writable", !0), Pu(mt, "initializer", function () {
        return null;
      }), mt)), Yt = n(Ut["prototype"], "effsRoot", [Gt], (Pu(pt = {}, "configurable", !0), Pu(pt, "enumerable", !0), Pu(pt, "writable", !0), Pu(pt, "initializer", function () {
        return null;
      }), pt)), Xt = n(Ut["prototype"], "jointGraphics", [Ot], (Pu(gt = {}, "configurable", !0), Pu(gt, "enumerable", !0), Pu(gt, "writable", !0), Pu(gt, "initializer", function () {
        return null;
      }), gt)), Zt = n(Ut["prototype"], "jointGearMgr", [Ft], (Pu(yt = {}, "configurable", !0), Pu(yt, "enumerable", !0), Pu(yt, "writable", !0), Pu(yt, "initializer", function () {
        return null;
      }), yt)), Qt = n(Ut["prototype"], "FruitDownLayer", [Bt], (Pu(wt = {}, "configurable", !0), Pu(wt, "enumerable", !0), Pu(wt, "writable", !0), Pu(wt, "initializer", function () {
        return null;
      }), wt)), zt = Ut)) || zt)), u["_RF"]["pop"]();
    }, vt;
  }["bind"](this)["apply"]();
});