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
    g = to;
  return function () {
    var g,
      y,
      w = to[5],
      _ = "setters",
      M = "execute";
    return Pu(g = {}, "setters", 0), Pu(g, "execute", 0), (y = g)["setters"] = [function (t) {
      var i = to;
      n = t["inheritsLoose"], r = t["createClass"];
    }, function (t) {
      var n = to,
        r = n[2],
        b = n[9];
      i = t["cclegacy"], e = t["_decorator"], a = t["ERigidBody2DType"], u = t["math"], s = t["Vec2"], o = t["UITransform"], c = t["Intersection2D"], f = t["DistanceJoint2D"], h = t["RigidBody2D"], v = t["misc"], l = t["Component"];
    }, function (t) {
      b = t["FruitComp"];
    }, function (t) {
      d = t["default"];
    }, function (t) {
      k = t["default"];
    }, function (t) {
      m = t["default"];
    }, function (t) {
      p = t["Log"];
    }], y["execute"] = function () {
      var g,
        y,
        w = to,
        _ = w[5],
        M = "_RF",
        S = "JointGearMgr";
      i["_RF"]["push"]({}, "f9629AlCotKs5dIJMcaMGhP", "JointGearMgr", void 0), g = e["ccclass"], e["property"], t("default", g("JointGearMgr")(y = function (t) {
        var i,
          e,
          l = to,
          g = l[2],
          y = l[12],
          w = l[18],
          _ = l[8];
        return n(e = function () {
          for (var n, r, i = to, e = i[4], a = i[15], u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["fruitRopes"] = [], r["ropeConnectFruits"] = [], r["graphics"] = null, r["isUpdateDrow"] = !1, r["isInit"] = !1, r["lastDrawPositions"] = [], r;
        }, t), (i = e["prototype"])["init"] = function (t) {
          var n = to,
            r = n[15];
          this["graphics"] = t, this["fruitRopes"] = [], this["ropeConnectFruits"] = [], this["lastDrawPositions"] = [], this["isUpdateDrow"] = !1, this["isInit"] = !0;
        }, i["mapCreateJoint"] = function (t, n, r) {
          var i,
            e = to,
            a = e[1],
            u = e[12];
          if (i = this, this["isInit"] && n) {
            for (var o = Math["min"](5, 2 + Math["floor"](d["ins"]["fakeGame_level"] / 10)), c = 0, f = function () {
                var n = to,
                  r = ro,
                  e = n[2],
                  a = n[1],
                  u = "length",
                  f = "ropeConnectFruits",
                  h = "node";
                if (0 == o) return 0;
                var v = k["inst"]["RandomInt"](3, t["length"] - 1),
                  l = t[v];
                if (i["ropeConnectFruits"]["some"](function (t) {
                  var n = to;
                  return -1 != t["indexOf"](l["node"]);
                })) return 1;
                var b = function (t) {
                  var n = to,
                    r = "node",
                    e = "position";
                  if (i["ropeConnectFruits"]["some"](function (n) {
                    var r = to;
                    return -1 != n["indexOf"](t["node"]);
                  })) return !1;
                  var a = s["distance"](l["node"]["position"], t["node"]["position"]);
                  return a >= 139 && a <= 347.5;
                };
                if (++c >= 3000) return 0;
                for (var d = !1, m = Math["max"](0, v - 10), p = Math["min"](v + 10, t["length"] - 1), g = null, y = m; y <= p; y++) if ((g = t[y]) != l && b(g)) {
                  d = !0;
                  break;
                }
                if (!d) return 1;
                o--, i["ropeConnectFruits"]["push"]([l["node"], g["node"]]);
              }; o > 0 && 0 != f(););
            this["canCreateLines"](t, r);
          } else r && r();
        }, i["shuffleCreateJoint"] = function (t, n, r) {
          var i,
            e,
            a,
            u = to,
            o = ro;
          (i = this, !this["isInit"] || t <= 0) ? r && r() : (e = t, a = k["inst"]["RandomInt"](20, 30), function () {
            for (var t = to, r = ro, u = "length", o = "isConnectFruitsExist", c = "node", f = "getPosition", h = a; h < n["length"] - 1; h++) {
              var v;
              if (e <= 0) return;
              if (v = n[h], !i["isConnectFruitsExist"](v["node"])) for (var l = h + 1; l < n["length"]; l++) {
                var b, d;
                if (e <= 0) return;
                if (b = n[l], !i["isConnectFruitsExist"](v["node"]) && !i["isConnectFruitsExist"](b["node"])) if ((d = s["distance"](v["node"]["getPosition"](), b["node"]["getPosition"]())) >= 139 && d <= 347.5 && i["canCreateLine"](n, v, b) && (e--, i["ropeConnectFruits"]["push"]([v["node"], b["node"]]), e <= 0)) return;
              }
            }
          }(), this["canCreateLines"](n, r));
        }, i["JointRestorePosition"] = function (t) {
          var n = to,
            r = n[4],
            i = n[5],
            e = n[3],
            s = n[12],
            o = "ropeConnectFruits",
            c = "length",
            f = "getComponent",
            h = "isTouch",
            v = "node",
            l = "angle",
            d = "setRigType",
            k = "Static",
            m = "fruitRigidbody",
            p = "linearVelocity",
            g = "v2",
            y = "angularVelocity",
            w = "fruitCollider",
            _ = "sensor",
            M = "enabled",
            S = "apply";
          if (this["ropeConnectFruits"]["length"] <= 0) return t && t(), !1;
          for (var A = [], C = 0; C < this["ropeConnectFruits"]["length"]; C++) {
            var x, T, L;
            T = (L = this["ropeConnectFruits"][C])[0]["getComponent"](b), x = L[1]["getComponent"](b), (T["isTouch"] || x["isTouch"]) && (T["node"]["angle"] = 0, x["node"]["angle"] = 0, T["setRigType"](a["Static"], 0, !1), x["setRigType"](a["Static"], 0, !1), T["fruitRigidbody"]["linearVelocity"] = u["v2"](0, 0), x["fruitRigidbody"]["linearVelocity"] = u["v2"](0, 0), T["fruitRigidbody"]["angularVelocity"] = 0, x["fruitRigidbody"]["angularVelocity"] = 0, T["fruitCollider"]["sensor"] = !0, x["fruitCollider"]["sensor"] = !0, T["fruitCollider"]["enabled"] = !1, x["fruitCollider"]["enabled"] = !1, T["fruitCollider"]["apply"](), x["fruitCollider"]["apply"](), A["push"]([T["node"], x["node"]]));
          }
          A["length"] <= 0 && t && t(), this["scheduleOnce"](function () {
            for (var n = to, r = "getComponent", i = "fallStartPos_", e = "movePos", a = "v3", s = 0, o = function () {
                ++s / 2 >= A["length"] && t && t();
              }, c = 0; c < A["length"]; c++) {
              var f, h, v;
              v = (h = A[c])[0]["getComponent"](b), f = h[1]["getComponent"](b), v["fallStartPos_"] ? v["movePos"](0, u["v3"](v["fallStartPos_"][At], v["fallStartPos_"][St]), function () {
                o();
              }, .2, .4) : o(), f["fallStartPos_"] ? f["movePos"](0, u["v3"](f["fallStartPos_"][At], f["fallStartPos_"][St]), function () {
                o();
              }, .2, .4) : o();
            }
          });
        }, i["isConnectFruitsExist"] = function (t) {
          var n = to,
            r = "ropeConnectFruits",
            i = "length";
          if (0 == this["ropeConnectFruits"]["length"]) return !1;
          for (var e = 0; e < this["ropeConnectFruits"]["length"]; e++) if (-1 !== this["ropeConnectFruits"][e]["indexOf"](t)) return !0;
          return !1;
        }, i["canCreateLines"] = function (t, n) {
          var r,
            i = to,
            e = i[8],
            u = "ropeConnectFruits",
            s = "length",
            o = "getComponent";
          r = this, p("可以创建绳子", this["ropeConnectFruits"]["length"]);
          for (var c = 0; c < t["length"]; c++) {
            var f;
            (f = t[c]["getComponent"](b))["isInSlot"] || f["setRigType"](a["Dynamic"], 0, !1);
          }
          for (var h = 0; h < this["ropeConnectFruits"]["length"]; h++) {
            var v;
            v = this["ropeConnectFruits"][h], this["createRope"](v[0]["getComponent"](b), v[1]["getComponent"](b));
          }
          this["scheduleOnce"](function () {
            for (var i = to, e = "length", u = "getComponent", s = "ropeConnectFruits", o = "jointFruit", c = 0; c < t["length"]; c++) {
              var f;
              (f = t[c]["getComponent"](b))["isInSlot"] || f["setRigType"](a["Static"]);
            }
            for (var h = 0; h < r["ropeConnectFruits"]["length"]; h++) {
              var v, l, d;
              d = (l = r["ropeConnectFruits"][h])[0]["getComponent"](b), v = l[1]["getComponent"](b), d["jointFruit"] = v, v["jointFruit"] = d;
            }
            n && n(), r["isUpdateDrow"] = !0;
          }, .5);
        }, i["canCreateLine"] = function (t, n, r) {
          for (var i = to, e = ro, a = i[4], f = i[3], h = "v2", v = "node", l = "getPosition", b = u["v2"](n["node"]["getPosition"]()[At], n["node"]["getPosition"]()[St]), d = u["v2"](r["node"]["getPosition"]()[At], r["node"]["getPosition"]()[St]), k = u["v2"]((b[At] + d[At]) / 2, (b[St] + d[St]) / 2), m = s["distance"](b, d) - 50, p = this["getAngleForPos"](b, d), g = this["CalculateCorners"](k, m, 20, p), y = 0; y < t["length"]; y++) {
            var w, _, M, S;
            if (S = (M = t[y])["node"]["getComponent"](o), _ = u["v2"](M["node"][At], M["node"][St]), w = Math["max"](S["width"], S["height"]) / 2 * M["node"]["scale"][At], M != n && M != r && c["polygonCircle"](g, _, w)) return !1;
          }
          return !0;
        }, i["removeRopeByFruit"] = function (t) {
          var n = to,
            r = n[5],
            i = n[4],
            e = "ropeConnectFruits",
            a = "length",
            u = "getComponent",
            s = "splice",
            o = "fruitRopes";
          if (this["isInit"]) for (var c = 0; c < this["ropeConnectFruits"]["length"]; c++) {
            var h;
            if (-1 != (h = this["ropeConnectFruits"][c])["indexOf"](t)) {
              for (var v, l, d = 0; d < h["length"]; d++) {
                var k;
                (k = h[d]) && k["isValid"] && k["getComponent"](b)["removeJoint"]();
              }
              if (this["ropeConnectFruits"]["splice"](c, 1), (v = (l = this["fruitRopes"][c])["length"]) > 0) for (var p = 0; p < v; p++) {
                var g, y;
                (y = (g = l["shift"]())["getComponent"](f)) && (y["connectedBody"] = null), g["removeFromParent"](), m["ins"]["putNode"](g);
              }
              this["fruitRopes"]["splice"](c, 1);
              break;
            }
          }
        }, i["upDrawRope"] = function () {
          var t = to,
            n = t[0],
            r = t[6],
            i = "length",
            e = "drawRope",
            a = "ropeConnectFruits",
            u = "isValid",
            s = "abs",
            o = "position";
          if (this["isInit"] && 0 !== this["fruitRopes"]["length"]) if (this["isUpdateDrow"]) this["drawRope"]();else for (var c = 0; c < this["ropeConnectFruits"]["length"]; c++) {
            var f, h, v;
            if (v = (f = this["ropeConnectFruits"][c])[0], h = f[1], v["isValid"] && h["isValid"]) {
              var l;
              if (!(l = this["lastDrawPositions"][c])) return void this["drawRope"]();
              if (Math["abs"](v["position"][At] - l["ax"]) > .5 || Math["abs"](v["position"][St] - l["ay"]) > .5 || Math["abs"](h["position"][At] - l["bx"]) > .5 || Math["abs"](h["position"][St] - l["by"]) > .5) return void this["drawRope"]();
            }
          }
        }, i["createRope"] = function (t, n) {
          var r,
            i,
            e,
            a,
            c,
            v,
            l,
            b,
            d = to,
            k = ro,
            g = d[6],
            y = d[3],
            w = d[1],
            _ = d[4],
            M = d[5],
            S = d[8],
            A = d[2],
            C = d[7],
            x = "v2",
            T = "node",
            L = "getPosition",
            I = "clone",
            R = "multiplyScalar",
            E = "getComponent",
            D = "add",
            N = "push",
            P = "initJoint",
            G = "maxLength";
          i = u["v2"](t["node"]["getPosition"]()[At], t["node"]["getPosition"]()[St]), v = u["v2"](n["node"]["getPosition"]()[At], n["node"]["getPosition"]()[St]), c = s["distance"](i, v), l = Math["floor"](c / 19), b = v["clone"]()["subtract"](i["clone"]())["normalize"](), e = u["v2"](0, 0), s["multiplyScalar"](e, b["clone"](), c / l), a = u["v2"](0, 0), r = Math["max"](t["node"]["getComponent"](o)["width"], t["node"]["getComponent"](o)["height"]) / 2, s["multiplyScalar"](a, b["clone"](), r * t["node"]["scale"][At]);
          for (var O = i["clone"]()["add"](a), F = this["graphics"]["node"], B = [], z = 0; z < l; z++) {
            var U, H, V, W;
            if (H = m["ins"]["getNode"]("jointPoint"), F["addChild"](H), H["setPosition"](O[At], O[St], 0), H["active"] = !0, V = H["getComponent"](h), U = H["getComponent"](f), O = O["clone"]()["add"](e), B["push"](H), 0 === z) t["initJoint"](V);else z == l - 1 && (n["initJoint"](V), U && U["destroy"]()), (W = B[z - 1]["getComponent"](f) || B[z - 1]["addComponent"](f))["connectedBody"] = H["getComponent"](h), W["maxLength"] = 10, p("disJoint_.distance", W["maxLength"]), W["apply"]();
          }
          this["fruitRopes"]["push"](B);
        }, i["drawRope"] = function () {
          var t = to,
            n = t[3],
            r = t[4],
            i = t[6],
            e = "graphics",
            a = "lastDrawPositions",
            u = "length",
            s = "fruitRopes",
            o = "position",
            c = "lineTo";
          this["graphics"]["clear"](), this["lastDrawPositions"]["length"] = 0;
          for (var f = 0; f < this["fruitRopes"]["length"]; f++) {
            var h, v, l, b, d, k;
            b = this["fruitRopes"][f], l = this["ropeConnectFruits"][f], h = l[0]["position"][At], k = l[0]["position"][St], v = l[1]["position"][At], d = l[1]["position"][St], this["lastDrawPositions"]["push"](function () {
              var t,
                n = to,
                r = n[0];
              return (t = function () {
                var t,
                  n,
                  r = to[0],
                  i = "ax",
                  e = "ay",
                  a = "bx",
                  u = "by";
                return Pu(t = {}, "ax", 0), Pu(t, "ay", 0), Pu(t, "bx", 0), Pu(t, "by", 0), (n = t)["ax"] = 0, n["ay"] = 0, n["bx"] = 0, n["by"] = 0, n;
              }["apply"]())["ax"] = h, t["ay"] = k, t["bx"] = v, t["by"] = d, t;
            }["apply"]()), this["graphics"]["moveTo"](h, k);
            for (var m = 0; m < b["length"]; m++) this["graphics"]["lineTo"](b[m]["position"][At], b[m]["position"][St]);
            this["graphics"]["lineTo"](v, d);
          }
          this["graphics"]["stroke"](), this["isUpdateDrow"] = !1;
        }, i["recycle"] = function () {
          var t = to,
            n = t[5],
            r = t[6],
            i = "graphics",
            e = "node",
            a = "children",
            u = "length",
            s = "getComponent",
            o = "ropeConnectFruits";
          if (this["isInit"]) {
            this["graphics"]["clear"]();
            for (var c = this["graphics"]["node"]["children"]["length"] - 1; c >= 0; c--) {
              var h, v;
              (v = (h = this["graphics"]["node"]["children"][c])["getComponent"](f)) && (v["connectedBody"] = null), h["removeFromParent"](), m["ins"]["putNode"](h);
            }
            if (this["ropeConnectFruits"]["length"] > 0) for (var l = 0; l < this["ropeConnectFruits"]["length"]; l++) for (var d = this["ropeConnectFruits"][l], k = 0; k < d["length"]; k++) {
              var p;
              (p = d[k]) && p["isValid"] && p["getComponent"](b)["removeJoint"]();
            }
            this["fruitRopes"] = [], this["ropeConnectFruits"] = [], this["lastDrawPositions"] = [], this["isUpdateDrow"] = !1;
          }
        }, i["getAngleForPos"] = function (t, n, r) {
          var i,
            e = to,
            a = "atan2";
          return void 0 === r && (r = !1), i = r ? -Math["atan2"](n[At] - t[At], n[St] - t[St]) : Math["atan2"](n[St] - t[St], n[At] - t[At]), v["radiansToDegrees"](i);
        }, i["CalculateCorners"] = function (t, n, r, i) {
          var e,
            a,
            s,
            o = to,
            c = o[1],
            f = "apply";
          return a = i * Math["PI"] / 180, e = Math["cos"](a), s = Math["sin"](a), [function () {
            var t,
              i = to,
              e = i[0];
            return (t = function () {
              var t,
                n,
                r = to[0],
                i = "dx",
                e = "dy";
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t)["dx"] = 0, n["dy"] = 0, n;
            }["apply"]())["dx"] = n / 2, t["dy"] = r / 2, t;
          }["apply"](), function () {
            var t,
              i = to,
              e = i[0];
            return (t = function () {
              var t,
                n,
                r = to[0],
                i = "dx",
                e = "dy";
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t)["dx"] = 0, n["dy"] = 0, n;
            }["apply"]())["dx"] = n / 2, t["dy"] = -r / 2, t;
          }["apply"](), function () {
            var t,
              i = to,
              e = i[0];
            return (t = function () {
              var t,
                n,
                r = to[0],
                i = "dx",
                e = "dy";
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t)["dx"] = 0, n["dy"] = 0, n;
            }["apply"]())["dx"] = -n / 2, t["dy"] = -r / 2, t;
          }["apply"](), function () {
            var t,
              i = to,
              e = i[0];
            return (t = function () {
              var t,
                n,
                r = to[0],
                i = "dx",
                e = "dy";
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t)["dx"] = 0, n["dy"] = 0, n;
            }["apply"]())["dx"] = -n / 2, t["dy"] = r / 2, t;
          }["apply"]()]["map"](function (n) {
            var r,
              i,
              a = to[0];
            return i = n["dx"], r = n["dy"], u["v2"](t[At] + (i * e - r * s), t[St] + (i * s + r * e));
          });
        }, r(e, [function () {
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
          }["apply"]())["key"] = "ConnectNum", t["get"] = function () {
            var t = to;
            return this["ropeConnectFruits"]["length"];
          }, t;
        }["bind"](this)["apply"]()]), e;
      }(l)) || y), i["_RF"]["pop"]();
    }, y;
  }["bind"](this)["apply"]();
});