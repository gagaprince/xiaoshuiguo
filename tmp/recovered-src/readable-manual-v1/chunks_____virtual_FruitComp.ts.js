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
    G = to;
  return function () {
    var G,
      O,
      F = to[5],
      B = "setters",
      z = "execute";
    return Pu(G = {}, "setters", 0), Pu(G, "execute", 0), (O = G)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["createClass"];
    }, function (t) {
      var n = to,
        r = n[9],
        M = n[2],
        S = n[7],
        A = n[4],
        C = n[3],
        x = n[14];
      i = t["cclegacy"], e = t["_decorator"], a = t["RigidBody2D"], u = t["Node"], s = t["UITransform"], o = t["UIOpacity"], c = t["Sprite"], f = t["color"], h = t["math"], v = t["Layers"], l = t["CircleCollider2D"], b = t["PolygonCollider2D"], d = t["ERigidBody2DType"], k = t["Contact2DType"], m = t["tween"], p = t["Label"], g = t["Tween"], y = t["ParticleSystem2D"], w = t["DistanceJoint2D"], _ = t["Component"];
    }, function (t) {
      M = t["FruitConfig"];
    }, function (t) {
      S = t["StreakComp"];
    }, function (t) {
      A = t["HoleComp"];
    }, function (t) {
      C = t["default"];
    }, function (t) {
      x = t["default"];
    }, function (t) {
      T = t["default"];
    }, function (t) {
      var n = to;
      L = t["ENUM_STATUS"], I = t["ENUM_CLIP"];
    }, function (t) {
      R = t["default"];
    }, function (t) {
      E = t["default"];
    }, function (t) {
      D = t["default"];
    }, function (t) {
      N = t["gameMsg"];
    }, function (t) {
      P = t["default"];
    }], O["execute"] = function () {
      var G,
        O,
        F = to,
        B = "_RF",
        z = "FruitComp";
      i["_RF"]["push"]({}, "d0cbfZE7HhEdYOVgy/v3E6s", "FruitComp", void 0), G = e["ccclass"], e["property"], t("FruitComp", G("FruitComp")(O = function (t) {
        var i,
          e,
          _ = to,
          G = _[7],
          O = _[4],
          F = _[6],
          B = _[11],
          z = _[2],
          U = _[10],
          H = _[3],
          V = _[8],
          W = _[5],
          J = _[9],
          j = _[12],
          q = "bind",
          K = "apply";
        return n(e = function () {
          for (var n, r, i = to, e = ro, a = i[4], u = i[2], s = i[6], o = i[0], c = i[12], f = i[11], v = i[5], l = i[7], b = i[8], d = i[13], k = i[10], m = i[9], p = (n = arguments)["length"], g = new Array(p), y = 0; y < p; y++) g[y] = n[y];
          return (r = t["call"]["apply"](t, [this]["concat"](g)) || this)["isCircle"] = !0, r["ID"] = 0, r["fruitRigidbody"] = void 0, r["fruitCollider"] = null, r["squeezeCircle"] = null, r["initCom"] = !1, r["isTouch"] = !1, r["_isInSlot"] = !1, r["isCollider"] = !1, r["isCanTouch"] = !0, r["isShowedlandEff"] = !1, r["inCheckBox"] = !1, r["isCanCheck"] = !1, r["isColliderLR"] = !1, r["isLRAddForce"] = !1, r["isColliderSlotFruit"] = !1, r["iceCounts"] = 30, r["_holeComp"] = null, r["holeCompBind"] = null, r["sizeWH"] = new h["Vec2"](), r["fruitScale"] = .75, r["fruitType"] = 0, r["gravityScale"] = 13, r["restitution"] = 0, r["radius"] = 0, r["lastTime"] = 0, r["cooldown"] = 250, r["fallStartPos_"] = null, r["downOrgPos"] = null, r["isHolePos"] = !1, r["polygonInfo"] = null, r["isNoLg"] = !1, r["hitFruits"] = new Set(), r["originPos"] = h["v3"](), r["hitSoundDistSq"] = 2500, r["disJoint"] = null, r["jointFruit"] = null, r["isAutoDrop"] = !1, r["calculatedInfo_"] = null, r;
        }, t), (i = e["prototype"])["onLoad"] = function () {
          var t = to;
          this["getCom"](), this["initParameter"]();
        }, i["onEnable"] = function () {
          var t = to,
            n = "on";
          D["on"](N["CreateFruitEd"], this["onCreateFruitEd"], this), D["on"](N["moveFruitAll"], this["onMoveFruitAll"], this), D["on"](N["changelinearDamping"], this["onChangeLinearDamping"], this);
        }, i["onDisable"] = function () {
          var t = to,
            n = "off";
          D["off"](N["CreateFruitEd"], this["onCreateFruitEd"], this), D["off"](N["moveFruitAll"], this["onMoveFruitAll"], this), D["off"](N["changelinearDamping"], this["onChangeLinearDamping"], this);
        }, i["onChangeLinearDamping"] = function () {
          var t = to,
            n = "linearDamping";
          this["fruitRigidbody"]["linearDamping"] = T["ins"]["linearDamping"];
        }, i["getCom"] = function () {
          var t = to,
            n = "initCom",
            r = "node";
          this["initCom"] || (this["initCom"] = !0, this["fruitRigidbody"] = this["node"]["getComponent"](a), this["node"]["on"](u["EventType"]["TOUCH_START"], this["touchStart"], this));
        }, i["initParameter"] = function (t) {
          var n = to,
            r = ro,
            i = n[7],
            e = n[3],
            u = n[8],
            l = n[11],
            b = n[6],
            d = n[5],
            k = n[10],
            m = n[2],
            p = 255,
            g = "sizeWH",
            y = "node",
            w = "getComponent";
          void 0 === t && (t = 0), this["hitFruits"]["clear"](), this["isAutoDrop"] = !1, this["isHolePos"] = !1, this["polygonInfo"] = null, this["squeezeCircle"] = null, this["lastTime"] = 0, this["isCanTouch"] = !1, this["isTouch"] = !1, this["isInSlot"] = !1, this["isCollider"] = !1, this["isColliderLR"] = !1, this["isLRAddForce"] = !1, this["isShowedlandEff"] = !1, this["inCheckBox"] = !1, this["isCanCheck"] = !1, this["isColliderSlotFruit"] = !1, this["sizeWH"][At] = this["node"]["getComponent"](s)["width"], this["sizeWH"][St] = this["node"]["getComponent"](s)["height"], this["node"]["getComponent"](a)["group"] = M["RB_GROUPS"]["fruit"], this["node"]["getComponent"](o)["opacity"] = 255, this["node"]["getComponent"](c)["color"] = f(255, 255, 255, 255), this["node"]["scale"] = new h["Vec3"](t, t, t), this["fallStartPos_"] = null, this["downOrgPos"] = null, this["node"]["layer"] = v["Enum"]["DEFAULT"];
        }, i["onCreateFruitEd"] = function () {}, i["init"] = function (t, n, r, i) {
          var e,
            a,
            u,
            s = to,
            o = s[6],
            f = s[5],
            v = s[9],
            k = s[2],
            m = s[10],
            p = s[7],
            g = s[11],
            y = s[0],
            w = s[8],
            _ = "isCircle",
            M = "node",
            S = "getComponent",
            A = "enabled",
            C = "calculatedInfo_",
            x = "radius",
            T = "fruitType",
            L = "pos",
            I = "polygonInfo",
            R = "apply",
            E = "squeezeCircle";
          (e = this, this["isCircle"] = -1 == P["gameMgr"]["NotCrircles"]["indexOf"](this["node"]["name"]), this["node"]["getComponent"](c)["enabled"] = !0, this["hitFruits"]["clear"](), this["holeCompBind"] = null, this["isNoLg"] = !1, this["initParameter"](), this["calculatedInfo_"] = t, this["setfruitScale"](), this["radius"] = this["calculatedInfo_"]["radius"], this["holeComp"] = r, this["ID"] = t["fruitType"], this["fruitType"] = t["type"], 1 == this["fruitType"] && (this["iceCounts"] = t["unlockNum"]), this["downOrgPos"] = h["v2"](t["pos"][At], t["pos"][St]), this["fruitCollider"] = this["node"]["getComponent"](l) || this["node"]["getComponent"](b), this["isCircle"]) && (a = this["node"]["getComponent"](l), (u = this["node"]["getComponent"](b)) && (this["polygonInfo"] = function () {
            var t,
              n = to,
              r = n[3],
              i = n[8],
              e = n[4];
            return (t = function () {
              var t,
                n,
                r = to[8],
                i = "bindOffset",
                e = "bindPoints";
              return Pu(t = {}, "bindOffset", 0), Pu(t, "bindPoints", 0), (n = t)["bindOffset"] = 0, n["bindPoints"] = 0, n;
            }["apply"]())["bindOffset"] = u["offset"]["clone"](), t["bindPoints"] = u["points"]["concat"](), t;
          }["apply"](), u["enabled"] = !1, u["destroy"]()), a ? (this["polygonInfo"] = function () {
            var t,
              n = to,
              r = n[3],
              i = "radius";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "bindOffset",
                e = "radius";
              return Pu(t = {}, "bindOffset", 0), Pu(t, "radius", 0), (n = t)["bindOffset"] = 0, n["radius"] = 0, n;
            }["apply"]())["bindOffset"] = a["offset"]["clone"](), t["radius"] = a["radius"], t;
          }["apply"](), this["squeezeCircle"] = a) : this["squeezeCircle"] = this["node"]["addComponent"](l));
          this["node"]["setPosition"](t["pos"][At], t["pos"][St]), this["originPos"]["set"](this["node"]["position"]), this["checkBound"](), this["scheduleOnce"](function () {
            var t = to,
              r = t[10],
              a = "squeezeCircle",
              u = "restitution";
            e["squeezeCircle"] && (e["squeezeCircle"]["enabled"] = !0, e["squeezeCircle"]["radius"] = e["getMaxRadius"](), e["squeezeCircle"]["friction"] = 0, e["squeezeCircle"]["restitution"] = e["restitution"], e["squeezeCircle"]["apply"](), e["fruitCollider"] = e["squeezeCircle"]), e["scheduleOnce"](function () {
              var t = to;
              e["setRigType"](d["Dynamic"], 0, !1);
            }, 0), e["setFruitType"](), e["anim"](n, function () {
              var t = to;
              e["initContactCallBack"](), e["polygonInfo"] = null, 1 == e["fruitType"] ? i && i(e) : 3 == e["calculatedInfo_"]["type"] ? i && i(e["holeComp"]) : i && i();
            }, 1.3);
          }, 0);
        }, i["initContactCallBack"] = function () {
          var t,
            n = to,
            r = n[11],
            i = n[9],
            e = "on";
          (t = this["fruitCollider"]) && (t["on"](k["BEGIN_CONTACT"], this["onBeginContact"], this), t["on"](k["END_CONTACT"], this["onEndContact"], this), t["on"](k["POST_SOLVE"], this["onPostSolve"], this));
        }, i["activeCircle"] = function (t) {
          var n,
            r,
            i = to,
            e = i[10],
            a = "node",
            u = "getComponent",
            s = "enabled",
            o = "squeezeCircle",
            c = "restitution";
          (n = this["node"]["getComponent"](l), t) ? ((r = this["node"]["getComponent"](b)) && (r["enabled"] = !1, r["destroy"]()), this["squeezeCircle"] = n || this["node"]["addComponent"](l), this["squeezeCircle"]["radius"] = this["getMaxRadius"](), this["squeezeCircle"]["friction"] = 0, this["squeezeCircle"]["restitution"] = this["restitution"], this["squeezeCircle"]["apply"]()) : this["polygonInfo"] && n && (n["enabled"] = !1, this["node"]["removeComponent"](l));
        }, i["getMaxRadius"] = function () {
          var t = to;
          return this["node"]["getComponent"](s)["width"] / 2;
        }, i["init2"] = function (t, n, r, i) {
          var e,
            a,
            u = to,
            s = u[7],
            o = u[3],
            c = u[11],
            f = u[6],
            v = u[2],
            k = u[8],
            m = "fruitType",
            p = "node",
            g = "getComponent",
            y = "pos";
          a = this, this["hitFruits"]["clear"](), this["initParameter"](), this["calculatedInfo_"] = t, this["setfruitScale"](), this["holeComp"] = r, this["ID"] = t["fruitType"], this["fruitType"] = t["type"], this["checkBound"](), this["fruitCollider"] = this["node"]["getComponent"](l) || this["node"]["getComponent"](b), this["squeezeCircle"] = null, this["setRigType"](d["Static"]), this["node"]["setPosition"](t["pos"][At], t["pos"][St]), this["originPos"]["set"](this["node"]["position"]), e = this["fruitScale"] - .1, this["node"]["scale"] = new h["Vec3"](e, e, e), this["initContactCallBack"](), this["anim"](n, function () {
            a["polygonInfo"] = null, i && i();
          });
        }, i["setfruitScale"] = function () {
          var t = to,
            n = t[3],
            r = "instance",
            i = "curThemeType",
            e = "fruitScale";
          0 == C["instance"]["curThemeType"] ? this["fruitScale"] = this["calculatedInfo_"]["scale"] : 2 == C["instance"]["curThemeType"] || 5 == C["instance"]["curThemeType"] ? this["fruitScale"] = .68 : this["fruitScale"] = .65, this["radius"] = this["node"]["getComponent"](s)["width"] * this["fruitScale"] / 2;
        }, i["anim"] = function (t, n, r) {
          var i,
            e,
            a = to,
            u = a[2],
            s = a[0],
            o = a[3],
            c = a[8],
            f = "setRigType",
            v = "node",
            k = "apply",
            p = "fruitScale";
          e = this, void 0 === r && (r = .8), i = function () {
            var t,
              r = to,
              i = r[8],
              a = r[13],
              u = r[10],
              s = r[5],
              o = r[4],
              c = r[11],
              f = "squeezeCircle",
              v = "polygonInfo",
              k = "bindPoints",
              m = "node",
              p = "fruitCollider",
              g = "apply",
              y = "radius",
              w = "fruitType",
              _ = "holeComp";
            (e["squeezeCircle"] && (e["polygonInfo"] && e["polygonInfo"]["bindPoints"] ? (e["node"]["removeComponent"](l), e["fruitCollider"] = e["node"]["addComponent"](b), e["fruitCollider"]["enabled"] = !0, e["fruitCollider"]["points"] = e["polygonInfo"]["bindPoints"], e["fruitCollider"]["offset"] = e["polygonInfo"]["bindOffset"], e["fruitCollider"]["apply"](), e["fruitRigidbody"]["enabledContactListener"] = !0, e["squeezeCircle"] = null, e["polygonInfo"] = null) : e["polygonInfo"] && e["polygonInfo"]["radius"] && (e["squeezeCircle"]["radius"] = e["polygonInfo"]["radius"], e["squeezeCircle"]["apply"](), e["polygonInfo"] = null)), e["setRigType"](d["Static"]), 3 != e["fruitType"] || e["holeComp"]) || (e["fruitType"] = 0, t = x["ins"]["getNode"]("holeBg"), C["instance"]["fruits"]["insertChild"](t, 0), e["holeComp"] = t["getComponent"](A), e["holeComp"]["init"](h["v2"](e["node"][At], e["node"][St]), e, e["calculatedInfo_"]["holeFruitTyes"]));
            n && n();
          }, t ? (this["holeComp"] ? this["setRigType"](d["Static"], 0, !1) : this["setRigType"](d["Dynamic"], 0, !1), m(this["node"])["to"](r, function () {
            var t,
              n = to,
              r = n[3],
              i = "fruitScale";
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = h["v3"](this["fruitScale"], this["fruitScale"], this["fruitScale"]), t;
          }["bind"](this)["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["call"](function () {
            var t = to,
              n = "fruitScale";
            e["node"]["scale"] = h["v3"](e["fruitScale"], e["fruitScale"], e["fruitScale"]), i();
          })["start"]()) : (this["node"]["scale"] = h["v3"](this["fruitScale"], this["fruitScale"], this["fruitScale"]), i());
        }, i["setFruitType"] = function () {
          var t,
            n = to,
            r = n[5],
            i = n[6],
            e = n[3],
            a = "node",
            u = "getComponent",
            o = "ins",
            f = "getNode",
            v = "active",
            l = "width",
            b = "scale",
            d = "v3",
            k = "setPosition",
            m = "angle";
          switch (t = this["node"]["getComponent"](s), this["fruitType"]) {
            case 1:
              var p = x["ins"]["getNode"]("iceLab", this["node"]),
                g = this["node"]["getComponent"](s);
              p["active"] = !0;
              var y = t["width"] / g["width"] + .15;
              p["scale"] = h["v3"](y, y, y), p["setPosition"](0, 0), p["children"][0]["angle"] = -this["node"]["angle"], this["upIceLa"]();
              break;
            case 2:
              var w = x["ins"]["getNode"]("blackBox", this["node"]);
              this["node"]["getComponent"](s), w["active"] = !0;
              var _ = .55 / this["fruitScale"];
              w["scale"] = h["v3"](_, _, _), w["setPosition"](0, 0), w["angle"] = -this["node"]["angle"], this["node"]["getComponent"](c)["enabled"] = !1;
          }
        }, i["setRigType"] = function (t, n, r) {
          var i = to,
            e = i[4],
            a = i[5],
            u = i[12],
            s = i[11],
            o = "fruitCollider",
            c = "restitution",
            f = "fruitRigidbody",
            v = "linearDamping",
            l = "allowSleep",
            b = "bullet";
          void 0 === n && (n = 0), void 0 === r && (r = !0), this["isNoLg"] || (this["fruitCollider"]["sensor"] = !1, this["fruitCollider"]["density"] = 1, this["fruitCollider"]["friction"] = 0, this["fruitCollider"]["restitution"] = this["restitution"], this["fruitCollider"]["enabled"] = !0, r && this["fruitCollider"]["apply"](), this["fruitRigidbody"]["enabledContactListener"] = !0, this["fruitRigidbody"]["gravityScale"] = n, this["fruitRigidbody"]["angularVelocity"] = 0, this["fruitRigidbody"]["linearVelocity"] = h["v2"](0, 0), this["fruitRigidbody"]["angularDamping"] = 0, this["fruitRigidbody"]["linearDamping"] = T["ins"]["linearDamping"], this["fruitRigidbody"]["type"] = t, t == d["Static"] || t == d["Kinematic"] ? (this["fruitRigidbody"]["allowSleep"] = !0, this["fruitRigidbody"]["bullet"] = !1) : t == d["Dynamic"] && (r ? (this["fruitRigidbody"]["allowSleep"] = !1, this["fruitRigidbody"]["bullet"] = !0) : (this["fruitRigidbody"]["allowSleep"] = !0, this["fruitRigidbody"]["bullet"] = !1)));
        }, i["hideCollider"] = function (t) {
          var n,
            r = to;
          n = this, this["isNoLg"] || this["scheduleOnce"](function () {
            var r = to,
              i = r[4],
              e = r[12],
              a = "fruitCollider",
              u = "enabled",
              s = "fruitRigidbody";
            n["fruitCollider"]["enabled"] && (n["fruitCollider"]["sensor"] = !0, n["fruitCollider"]["enabled"] = !1), n["fruitRigidbody"] && (n["fruitRigidbody"]["gravityScale"] = 0, n["fruitRigidbody"]["allowSleep"] = !0, n["fruitRigidbody"]["bullet"] = !1, n["fruitRigidbody"]["angularVelocity"] = 0, n["fruitRigidbody"]["linearVelocity"] = h["v2"](0, 0), n["fruitRigidbody"]["angularDamping"] = 0, n["fruitRigidbody"]["linearDamping"] = 0, n["fruitRigidbody"]["enabledContactListener"] = !1, n["fruitRigidbody"]["type"] = d["Static"]), t && t();
          }, 0);
        }, i["showCollider"] = function () {
          var t = to,
            n = t[4],
            r = t[5],
            i = "fruitCollider",
            e = "node",
            u = "getComponent",
            s = "fruitRigidbody";
          this["fruitCollider"] = this["node"]["getComponent"](l) || this["node"]["getComponent"](b), this["fruitCollider"] && (this["fruitCollider"]["sensor"] = !1, this["fruitCollider"]["enabled"] = !0), this["fruitRigidbody"] = this["node"]["getComponent"](a) || this["node"]["getComponent"](a), this["fruitRigidbody"] && (this["fruitRigidbody"]["enabledContactListener"] = !0, this["fruitRigidbody"]["bullet"] = !0, this["fruitRigidbody"]["type"] = d["Dynamic"]), this["fruitRigidbody"] = null, this["fruitCollider"] = null;
        }, i["movePos"] = function (t, n, r, i, e, a) {
          var u,
            s = to,
            v = 255,
            l = "node",
            b = "getComponent";
          u = this, void 0 === i && (i = 1), void 0 === e && (e = .4), void 0 === a && (a = !1), this["unscheduleAllCallbacks"](), e <= 0 && (e = .1), this["node"]["getComponent"](o)["opacity"] = 255, this["node"]["getComponent"](c)["color"] = f(255, 255, 255, 255), this["hideCollider"](function () {
            var s = to,
              o = s[2],
              c = s[0],
              f = s[3],
              v = "node";
            i > 0 ? m(u["node"])["to"](i, function () {
              var t,
                r = to,
                i = r[3];
              return (t = function () {
                var t,
                  n = "position";
                return (t = Pu({}, "position", 0))["position"] = 0, t;
              }["apply"]())["position"] = n["clone"](), t;
            }["apply"]())["call"](function () {
              var n = to,
                i = n[2];
              null != t && (u["node"]["scale"] = h["v3"](t, t, t)), u["anim"](!0, function () {
                u["isTouch"] = a, r && r();
              }, e);
            })["start"]() : (u["node"]["setPosition"](n), null != t && (u["node"]["scale"] = h["v3"](t, t, t)), u["anim"](!0, function () {
              u["isTouch"] = a, r && r();
            }, e));
          });
        }, i["iceBox"] = function () {
          var t = to,
            n = "iceCounts";
          1 == this["fruitType"] && (this["iceCounts"]--, this["iceCounts"] <= 0 ? this["unlockFruit"]() : this["upIceLa"]());
        }, i["unlockFruit"] = function () {
          var t = to,
            n = "fruitType";
          0 != this["fruitType"] && (this["fruitType"] = 0, this["recycleIceAndBlock"](), 1 == this["fruitType"] && (this["iceCounts"] = 0, C["instance"]["fruitSplice"](this)));
        }, i["upIceLa"] = function () {
          var t,
            n,
            r = to,
            i = r[3],
            e = r[2],
            a = "node",
            u = "children",
            s = "to",
            o = "apply",
            c = "call";
          t = this, n = this["node"]["children"][0]["children"][0]["getComponent"](p), g["stopAllByTarget"](n["node"]), n["node"]["scale"] = h["v3"](1, 1, 1), m(n["node"])["to"](.2, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = h["v3"](1.5, 1.5, 1.5), t;
          }["apply"](), function () {
            var t,
              n = to,
              r = n[4];
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backIn", t;
          }["apply"]())["call"](function () {
            var r = to;
            n["string"] = t["iceCounts"]["toString"]();
          })["to"](.2, function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n = "scale";
              return (t = Pu({}, "scale", 0))["scale"] = 0, t;
            }["apply"]())["scale"] = h["v3"](1, 1, 1), t;
          }["apply"](), function () {
            var t,
              n = to;
            return (t = function () {
              var t,
                n = "easing";
              return (t = Pu({}, "easing", 0))["easing"] = 0, t;
            }["apply"]())["easing"] = "backOut", t;
          }["apply"]())["call"](function () {
            var t = to;
            n["node"]["scale"] = h["v3"](1, 1, 1);
          })["start"]();
        }, i["checkBound"] = function () {
          var t,
            n = to,
            r = ro,
            i = n[3],
            e = 30,
            a = "instance",
            u = "node",
            o = "arrangeType",
            c = "isCanTouch",
            f = "width",
            h = "black",
            v = "light";
          switch (t = C["instance"]["node"]["getComponent"](s), C["instance"]["arrangeType"]) {
            case 0:
            case 1:
              this["isCanTouch"] = !0;
              break;
            case 2:
              this["node"][At] < -t["width"] / 2 + 30 ? this["black"]() : this["light"]();
              break;
            case 3:
              var l = t["width"] / 2 - 30;
              this["node"][At] > l ? this["black"]() : this["light"]();
              break;
            case 4:
              this["node"][At] > t["width"] / 2 - 30 || this["node"][At] < -t["width"] / 2 + 30 ? this["black"]() : this["light"]();
          }
          C["instance"]["arrangeType"] > 1 && this["isCanTouch"] && this["fruitDrop"]();
        }, i["fruitDrop"] = function () {
          var t,
            n = to,
            r = n[2],
            i = n[5],
            e = n[8],
            a = "instance";
          t = C["instance"]["line"][At], Math["abs"](t - this["node"][At]) < 50 && (this["isTouch"] = !0, this["isAutoDrop"] = !0, this["setRigType"](d["Dynamic"], this["gravityScale"]), C["instance"]["setLastTouchFruit"](this, !1));
        }, i["touchStart"] = function (t) {
          var n = to,
            r = ro,
            i = n[4],
            e = n[3],
            a = n[7],
            u = n[8],
            s = n[5],
            v = n[6],
            l = n[12],
            b = n[11],
            k = 255,
            m = "ins",
            p = "isTouch",
            y = "instance",
            w = "node",
            _ = "fruitScale",
            S = "v2",
            A = "getComponent";
          this["isNoLg"] || T["ins"]["status"] != L["UNRUN"] && (1 != this["fruitType"] ? this["isCanTouch"] && (this["isTouch"] || (C["instance"]["setLastTouchFruit"](this, !1), this["fruitRigidbody"]["group"] = M["RB_GROUPS"]["clickFruit"], this["clickTween"](), this["node"]["setScale"](this["fruitScale"], this["fruitScale"], this["fruitScale"]), this["isTouch"] = !0, this["holeComp"] || (this["fallStartPos_"] = h["v2"](this["node"][At], this["node"][St])), this["downOrgPos"] = h["v2"](this["node"][At], this["node"][St]), this["breakHole"](), C["instance"]["fruitDown"](), this["node"]["getComponent"](o)["opacity"] = 255, this["node"]["getComponent"](c)["color"] = f(255, 255, 255, 255), g["stopAllByTarget"](this["node"]), this["setRigType"](d["Dynamic"], this["gravityScale"]), C["instance"]["showLeader"](), R["ins"]["play"](I["btn_FruitClick"]), C["instance"]["addTouchFruit"](this))) : C["instance"]["iceTip"]());
        }, i["breakHole"] = function () {
          var t = to,
            n = "holeComp";
          this["holeComp"] && (this["holeComp"]["isUpdate"] = !0, this["holeComp"] = null);
        }, i["fruitReset"] = function () {
          var t = to,
            n = t[8];
          this["initParameter"](this["fruitScale"]), this["setRigType"](d["Static"]), this["checkBound"](), this["originPos"]["set"](this["node"]["position"]);
        }, i["update"] = function (t) {
          var n = to,
            r = n[4],
            i = n[6],
            e = "node",
            a = "instance",
            u = "canCheck",
            s = "isCanCheck";
          this["isBind"] || this["isNoLg"] || T["ins"]["status"] != L["UNRUN"] && this["isTouch"] && (2 == this["fruitType"] && this["node"]["children"]["length"] > 0 && this["node"][St] <= C["instance"]["canCheck"][St] && this["unlockFruit"](), this["node"][St] <= C["instance"]["canCheck"][St] ? this["isCanCheck"] = !0 : this["isCanCheck"] = !1);
        }, i["onPostSolve"] = function (t, n, r) {
          var i,
            e = to,
            a = e[4];
          this["isBind"] || this["isNoLg"] || T["ins"]["status"] == L["UNRUN"] || (i = n["node"], this["checkID"](i), this["checkDropWall"](i));
        }, i["onBeginContact"] = function (t, n, r) {
          var i = to,
            e = i[4],
            a = i[3],
            u = i[2],
            s = i[6],
            o = i[8],
            c = i[11],
            f = "fruitCollider",
            h = "fallStartPos_",
            v = "isColliderLR";
          if (!this["isBind"] && !this["isNoLg"] && T["ins"]["status"] != L["UNRUN"]) switch (n["node"]["name"]) {
            case "canCheck":
              this["inCheckBox"] = !0, this["fruitCollider"] && (this["fruitCollider"]["friction"] = .2);
              break;
            case "dropRight":
            case "dropLeft":
              this["fallStartPos_"] = null, this["isColliderLR"] || this["hitPower"](), this["isCanTouch"] && (this["isColliderLR"] = !0);
              break;
            case "btnFirstWall":
            case "btnSecondWall":
            case "floor":
              this["fallStartPos_"] = null;
          }
        }, i["onEndContact"] = function (t, n, r) {
          var i = to,
            e = i[4],
            a = i[2];
          this["isBind"] || this["isNoLg"] || T["ins"]["status"] != L["UNRUN"] && "canCheck" == n["node"]["name"] && (this["inCheckBox"] = !1);
        }, i["checkDropWall"] = function (t) {
          var n = to,
            r = ro,
            i = n[4],
            e = n[5],
            a = n[7],
            u = n[2],
            s = n[1],
            o = n[3],
            c = n[6],
            f = "isLRAddForce",
            v = "dropRight",
            l = "name",
            b = "dropLeft",
            d = "ins",
            k = "isShowedlandEff",
            m = "node",
            p = "position";
          if (!this["isNoLg"] && this["isTouch"] && !this["isLRAddForce"] && ("dropRight" == t["name"] || "dropLeft" == t["name"])) {
            var g, w, _, M, S, A, C;
            if (R["ins"]["play"](I["GAME_LAND"], !1, 5), _ = t["angle"] * Math["PI"] / 180, w = -Math["sin"](_), M = -Math["cos"](_), ("dropRight" == t["name"] && w > 0 || "dropLeft" == t["name"] && w < 0) && (w = -w), g = 125 + 20 * Math["random"](), new h["Vec2"](w, M)["normalize"]()["multiplyScalar"](g), !this["isShowedlandEff"]) C = new h["Vec3"](this["node"]["position"][At], this["node"]["position"][St] - 60, 0), this["isShowedlandEff"] = !0, S = Math["floor"](T["ins"]["game_level"] / 10) % 4, (A = x["ins"]["getNode"]("landEff" + S, this["node"]["parent"], C)) && A["getComponent"](y)["resetSystem"]();
            this["isLRAddForce"] = !0;
          }
        }, i["checkID"] = function (t) {
          var n,
            r,
            i = to,
            a = i[4],
            u = i[1],
            s = i[3],
            o = i[10],
            c = i[2],
            f = i[6],
            v = i[12],
            l = i[7],
            b = i[15],
            d = "ins",
            k = "node",
            m = "originPos",
            p = "hitFruits",
            g = "isCanCheck",
            y = "ID",
            w = "isInSlot",
            _ = "isBind",
            M = "isColliderSlotFruit",
            S = "fruitRigidbody",
            A = "isJoint",
            x = "instance",
            E = "jointGearMgr",
            D = "removeRopeByFruit",
            N = "addInSlotFruit",
            P = "setLastTouchFruit";
          if (n = this, !this["isNoLg"] && T["ins"]["status"] != L["UNRUN"]) if (r = t["getComponent"](e)) {
            var G, O, F, B, z;
            if (O = t["uuid"], (B = (z = this["node"]["position"])[At] - this["originPos"][At]) * B + (G = z[St] - this["originPos"][St]) * G >= this["hitSoundDistSq"] && !this["hitFruits"]["has"](O) && (this["hitFruits"]["add"](O), this["hitPower"](), R["ins"]["play"](I["GAME_CLICK"])), F = function () {
              var t = to,
                i = t[12],
                e = t[13],
                a = t[10],
                u = "isCollider",
                s = "ins",
                o = "fruitRigidbody",
                c = "isJoint",
                f = "instance",
                v = "jointGearMgr",
                l = "removeRopeByFruit",
                b = "node",
                d = "hideCollider";
              n["isCollider"] || r["isCollider"] || T["ins"]["status"] != L["UNRUN"] && (n["fruitRigidbody"]["linearVelocity"] = h["v2"](0, 0), n["fruitRigidbody"]["angularVelocity"] = 0, n["isCollider"] = !0, r["isCollider"] = !0, n["isJoint"] && C["instance"]["jointGearMgr"]["removeRopeByFruit"](n["node"]), r["isJoint"] && C["instance"]["jointGearMgr"]["removeRopeByFruit"](r["node"]), n["hideCollider"](function () {
                var t = to;
                C["instance"]["fruitTween"](n, null, !0);
              }), r["hideCollider"](function () {
                var t = to;
                C["instance"]["fruitTween"](r);
              }), R["ins"]["playComboSound"](), C["instance"]["lineOpacity"](), C["instance"]["setLastTouchFruit"](n, !0), C["instance"]["onEliminatePair"]());
            }, this["isCanCheck"] && r["isCanCheck"] && this["ID"] == r["ID"]) return void F();
            if (!r["isInSlot"] && !this["isInSlot"]) return;
            if (this["ID"] == r["ID"] && !this["isBind"] && !r["isBind"]) return void F();
            if (r["isInSlot"] && !this["isInSlot"] && !this["isBind"]) return this["isColliderSlotFruit"] || (this["fruitRigidbody"]["linearVelocity"] = h["v2"](0, 0), this["isColliderSlotFruit"] = !0), this["fruitRigidbody"]["angularVelocity"] = 0, this["isJoint"] && C["instance"]["jointGearMgr"]["removeRopeByFruit"](this["node"]), C["instance"]["addInSlotFruit"](this), void C["instance"]["setLastTouchFruit"](this, !0);
          } else switch (t["name"]) {
            case "dropLeft":
            case "dropRight":
              return void C["instance"]["setLastTouchFruit"](this, !0);
            case "btnFirstWall":
            case "btnSecondWall":
            case "floor":
              return this["unlockFruit"](), this["isJoint"] && C["instance"]["jointGearMgr"]["removeRopeByFruit"](this["node"]), C["instance"]["addInSlotFruit"](this), void C["instance"]["setLastTouchFruit"](this, !0);
          }
        }, i["black"] = function () {
          var t = to,
            n = ro,
            r = 65,
            i = "node",
            e = "getComponent";
          this["isCanTouch"] = !1, this["node"]["getComponent"](o)["opacity"] = 125, this["node"]["getComponent"](c)["color"] = f(65, 65, 65);
        }, i["light"] = function () {
          var t = to,
            n = 255,
            r = "node",
            i = "getComponent";
          this["isCanTouch"] = !0, this["node"]["getComponent"](o)["opacity"] = 255, this["node"]["getComponent"](c)["color"] = f(255, 255, 255);
        }, i["clickTween"] = function () {
          var t,
            n = to,
            r = n[2],
            i = "node",
            e = "to",
            a = "bind",
            u = "apply";
          !this["isNoLg"] && this["isTouch"] && (g["stopAllByTarget"](this["node"]), t = this["node"]["getComponent"](s), m(t)["to"](.1, function () {
            var t,
              n = to,
              r = n[3],
              i = "sizeWH";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "width",
                e = "height";
              return Pu(t = {}, "width", 0), Pu(t, "height", 0), (n = t)["width"] = 0, n["height"] = 0, n;
            }["apply"]())["width"] = .95 * this["sizeWH"][At], t["height"] = .95 * this["sizeWH"][St], t;
          }["bind"](this)["apply"]())["to"](.1, function () {
            var t,
              n = to,
              r = n[3],
              i = "sizeWH";
            return (t = function () {
              var t,
                n,
                r = to,
                i = "width",
                e = "height";
              return Pu(t = {}, "width", 0), Pu(t, "height", 0), (n = t)["width"] = 0, n["height"] = 0, n;
            }["apply"]())["width"] = this["sizeWH"][At], t["height"] = this["sizeWH"][St], t;
          }["bind"](this)["apply"]())["tag"](1)["start"]());
        }, i["recycleSelf"] = function () {
          var t = to,
            n = t[9],
            r = t[7],
            i = t[1],
            e = t[8],
            a = t[11],
            s = t[5],
            o = "node",
            c = "holeComp";
          this["removeJoint"](), this["hitFruits"]["clear"](), C["instance"]["fruitSplice"](this), g["stopAllByTarget"](this["node"]), this["node"]["off"](u["EventType"]["TOUCH_START"], this["touchStart"], this), this["initParameter"](this["fruitScale"]), this["hideCollider"](), this["recycleIceAndBlock"](), this["holeComp"] && (this["holeComp"]["recycle"](), this["holeComp"] = null), this["fruitRigidbody"] = null, this["fruitCollider"] = null, this["squeezeCircle"] = null, this["destroy"](), this["node"]["removeFromParent"](), x["ins"]["putNode"](this["node"]);
        }, i["recycleIceAndBlock"] = function () {
          var t,
            n = to,
            r = n[5],
            i = "node";
          (t = this["node"]["children"][0]) && (t["removeFromParent"](), x["ins"]["putNode"](t)), this["node"]["getComponent"](c)["enabled"] = !0;
        }, i["hitPower"] = function () {
          var t = to;
          E["ins"]["vibrateShort"](null);
        }, i["streakFun"] = function () {
          var t = to,
            n = t[4],
            r = "node";
          x["ins"]["getNode"]("streak", this["node"]["parent"])["addComponent"](S)["init"](this["node"]);
        }, i["initJoint"] = function (t) {
          var n,
            r = to,
            i = r[10],
            e = "disJoint",
            a = "node",
            u = "getPosition";
          this["disJoint"] || (this["disJoint"] = this["node"]["getComponent"](w) || this["node"]["addComponent"](w), this["disJoint"]["connectedBody"] = t, n = h["Vec2"]["distance"](this["node"]["getPosition"](), t["node"]["getPosition"]()), this["disJoint"]["maxLength"] = n, this["disJoint"]["apply"]());
        }, i["removeJoint"] = function () {
          var t = to,
            n = "disJoint";
          this["disJoint"] && (this["jointFruit"] = null, this["disJoint"]["connectedBody"] = null, this["disJoint"]["destroy"](), this["disJoint"] = null);
        }, i["electricShock"] = function () {
          var t,
            n,
            r = to,
            i = ro,
            e = r[3],
            a = r[7],
            u = 255,
            s = "node",
            o = "to",
            v = "apply";
          n = this, this["fruitRigidbody"]["group"] = M["RB_GROUPS"]["clickFruit"], this["isTouch"] = !0, this["holeComp"] || (this["fallStartPos_"] = h["v2"](this["node"][At], this["node"][St])), this["breakHole"](), (t = this["node"]["getComponent"](c)) && (t["color"] = f(255, 255, 255, 255)), g["stopAllByTarget"](this["node"]), m(this["node"])["repeat"](1, m(this["node"])["to"](.1, function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]())["angle"] = 15, t;
          }["apply"]())["to"](.1, function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]())["angle"] = -15, t;
          }["apply"]())["to"](.1, function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]())["angle"] = 15, t;
          }["apply"]())["to"](.1, function () {
            var t,
              n = to[3];
            return (t = function () {
              var t,
                n = "angle";
              return (t = Pu({}, "angle", 0))["angle"] = 0, t;
            }["apply"]())["angle"] = 0, t;
          }["apply"]()))["call"](function () {
            var t = to;
            n["setRigType"](d["Dynamic"], n["gravityScale"]);
          })["start"]();
        }, i["onMoveFruitAll"] = function (t) {
          var n,
            r = to,
            i = "downOrgPos";
          this["downOrgPos"] && (n = this["downOrgPos"][St] + t, n = Math["max"](n, C["instance"]["boundaryLine"][St]), this["downOrgPos"][St] = n);
        }, r(e, [function () {
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
          }["apply"]())["key"] = "isInSlot", t["get"] = function () {
            return this["_isInSlot"];
          }, t["set"] = function (t) {
            this["_isInSlot"] = t;
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
          }["apply"]())["key"] = "holeComp", t["get"] = function () {
            return this["_holeComp"];
          }, t["set"] = function (t) {
            var n = to,
              r = n[7];
            this["_holeComp"] = t, t && (this["isHolePos"] = !0, this["holeCompBind"] = t);
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
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "isJoint", t["get"] = function () {
            return null != this["disJoint"];
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
              e = "get";
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t)["key"] = 0, n["get"] = 0, n;
          }["apply"]())["key"] = "isBind", t["get"] = function () {
            var t = to,
              n = t[5],
              r = "jointFruit";
            return this["jointFruit"] && !this["jointFruit"]["isTouch"] && this["isJoint"];
          }, t;
        }["bind"](this)["apply"]()]), e;
      }(_)) || O), i["_RF"]["pop"]();
    }, O;
  }["bind"](this)["apply"]();
});