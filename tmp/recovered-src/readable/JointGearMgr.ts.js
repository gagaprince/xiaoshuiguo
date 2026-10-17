(function (t) {
  var inheritsLoose, createClass, cclegacy, _decorator, ERigidBody2DType, math, Vec2, UITransform, Intersection2D, DistanceJoint2D, RigidBody2D, misc, Component, FruitComp, GbzDataManager, ReferenceMgr, GbzPoolManager, Log;
  return function () {
    var g, y;
    return Pu(g = {}, "setters", 0), Pu(g, "execute", 0), (y = g).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"], createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], ERigidBody2DType = t["ERigidBody2DType"], math = t["math"], Vec2 = t["Vec2"], UITransform = t["UITransform"], Intersection2D = t["Intersection2D"], DistanceJoint2D = t["DistanceJoint2D"], RigidBody2D = t["RigidBody2D"], misc = t["misc"], Component = t["Component"];
    }, function (t) {
      FruitComp = t["FruitComp"];
    }, function (t) {
      GbzDataManager = t["default"];
    }, function (t) {
      ReferenceMgr = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      Log = t["Log"];
    }], y.execute = function () {
      var g, y;
      cclegacy._RF["push"]({}, "f9629AlCotKs5dIJMcaMGhP", "JointGearMgr", void 0), g = _decorator["ccclass"], _decorator["property"], t("default", g("JointGearMgr")(y = function (t) {
        var i, e;
        return inheritsLoose(e = function () {
          for (var n, r, u = (n = arguments)["length"], s = new Array(u), o = 0; o < u; o++) s[o] = n[o];
          return (r = t["call"]["apply"](t, [this]["concat"](s)) || this)["fruitRopes"] = [], r["ropeConnectFruits"] = [], r["graphics"] = null, r["isUpdateDrow"] = !1, r["isInit"] = !1, r["lastDrawPositions"] = [], r;
        }, t), (i = e["prototype"])["init"] = function (t) {
          this["graphics"] = t, this["fruitRopes"] = [], this["ropeConnectFruits"] = [], this["lastDrawPositions"] = [], this["isUpdateDrow"] = !1, this["isInit"] = !0;
        }, i["mapCreateJoint"] = function (t, n, r) {
          var i;
          if (i = this, this["isInit"] && n) {
            for (var o = Math["min"](5, 2 + Math["floor"](GbzDataManager["ins"]["fakeGame_level"] / 10)), c = 0, f = function () {
                if (0 == o) return 0;
                var v = ReferenceMgr["inst"]["RandomInt"](3, t.length - 1),
                  l = t[v];
                if (i.ropeConnectFruits["some"](function (t) {
                  return -1 != t["indexOf"](l["node"]);
                })) return 1;
                var b = function (t) {
                  if (i["ropeConnectFruits"]["some"](function (n) {
                    return -1 != n["indexOf"](t["node"]);
                  })) return !1;
                  var a = Vec2["distance"](l.node.position, t.node.position);
                  return a >= 139 && a <= 347.5;
                };
                if (++c >= 3000) return 0;
                for (var d = !1, m = Math["max"](0, v - 10), p = Math["min"](v + 10, t.length - 1), g = null, y = m; y <= p; y++) if ((g = t[y]) != l && b(g)) {
                  d = !0;
                  break;
                }
                if (!d) return 1;
                o--, i.ropeConnectFruits["push"]([l.node, g.node]);
              }; o > 0 && 0 != f(););
            this["canCreateLines"](t, r);
          } else r && r();
        }, i["shuffleCreateJoint"] = function (t, n, r) {
          var i, e, a;
          (i = this, !this["isInit"] || t <= 0) ? r && r() : (e = t, a = ReferenceMgr["inst"]["RandomInt"](20, 30), function () {
            for (var h = a; h < n.length - 1; h++) {
              var v;
              if (e <= 0) return;
              if (v = n[h], !i.isConnectFruitsExist(v.node)) for (var l = h + 1; l < n.length; l++) {
                var b, d;
                if (e <= 0) return;
                if (b = n[l], !i.isConnectFruitsExist(v.node) && !i.isConnectFruitsExist(b.node)) if ((d = Vec2["distance"](v.node.getPosition(), b.node.getPosition())) >= 139 && d <= 347.5 && i["canCreateLine"](n, v, b) && (e--, i["ropeConnectFruits"]["push"]([v.node, b.node]), e <= 0)) return;
              }
            }
          }(), this["canCreateLines"](n, r));
        }, i["JointRestorePosition"] = function (t) {
          if (this.ropeConnectFruits.length <= 0) return t && t(), !1;
          for (var A = [], C = 0; C < this.ropeConnectFruits.length; C++) {
            var x, T, L;
            T = (L = this.ropeConnectFruits[C])[0].getComponent(FruitComp), x = L[1].getComponent(FruitComp), (T.isTouch || x.isTouch) && (T.node.angle = 0, x.node.angle = 0, T.setRigType(ERigidBody2DType.Static, 0, !1), x.setRigType(ERigidBody2DType.Static, 0, !1), T.fruitRigidbody.linearVelocity = math.v2(0, 0), x.fruitRigidbody.linearVelocity = math.v2(0, 0), T.fruitRigidbody.angularVelocity = 0, x.fruitRigidbody.angularVelocity = 0, T.fruitCollider.sensor = !0, x.fruitCollider.sensor = !0, T.fruitCollider.enabled = !1, x.fruitCollider.enabled = !1, T.fruitCollider.apply(), x.fruitCollider.apply(), A["push"]([T.node, x.node]));
          }
          A.length <= 0 && t && t(), this["scheduleOnce"](function () {
            for (var s = 0, o = function () {
                ++s / 2 >= A["length"] && t && t();
              }, c = 0; c < A["length"]; c++) {
              var f, h, v;
              v = (h = A[c])[0].getComponent(FruitComp), f = h[1].getComponent(FruitComp), v.fallStartPos_ ? v.movePos(0, math.v3(v.fallStartPos_.x, v.fallStartPos_.y), function () {
                o();
              }, .2, .4) : o(), f.fallStartPos_ ? f.movePos(0, math.v3(f.fallStartPos_.x, f.fallStartPos_.y), function () {
                o();
              }, .2, .4) : o();
            }
          });
        }, i["isConnectFruitsExist"] = function (t) {
          if (0 == this.ropeConnectFruits.length) return !1;
          for (var e = 0; e < this.ropeConnectFruits.length; e++) if (-1 !== this.ropeConnectFruits[e]["indexOf"](t)) return !0;
          return !1;
        }, i["canCreateLines"] = function (t, n) {
          var r;
          r = this, Log("可以创建绳子", this.ropeConnectFruits.length);
          for (var c = 0; c < t.length; c++) {
            var f;
            (f = t[c].getComponent(FruitComp))["isInSlot"] || f["setRigType"](ERigidBody2DType["Dynamic"], 0, !1);
          }
          for (var h = 0; h < this.ropeConnectFruits.length; h++) {
            var v;
            v = this.ropeConnectFruits[h], this["createRope"](v[0].getComponent(FruitComp), v[1].getComponent(FruitComp));
          }
          this["scheduleOnce"](function () {
            for (var c = 0; c < t.length; c++) {
              var f;
              (f = t[c].getComponent(FruitComp))["isInSlot"] || f["setRigType"](ERigidBody2DType["Static"]);
            }
            for (var h = 0; h < r.ropeConnectFruits.length; h++) {
              var v, l, d;
              d = (l = r.ropeConnectFruits[h])[0].getComponent(FruitComp), v = l[1].getComponent(FruitComp), d.jointFruit = v, v.jointFruit = d;
            }
            n && n(), r["isUpdateDrow"] = !0;
          }, .5);
        }, i["canCreateLine"] = function (t, n, r) {
          for (var b = math.v2(n.node.getPosition().x, n.node.getPosition().y), d = math.v2(r.node.getPosition().x, r.node.getPosition().y), k = math.v2((b.x + d.x) / 2, (b.y + d.y) / 2), m = Vec2["distance"](b, d) - 50, p = this["getAngleForPos"](b, d), g = this["CalculateCorners"](k, m, 20, p), y = 0; y < t["length"]; y++) {
            var w, _, M, S;
            if (S = (M = t[y]).node["getComponent"](UITransform), _ = math.v2(M.node.x, M.node.y), w = Math["max"](S["width"], S["height"]) / 2 * M.node["scale"].x, M != n && M != r && Intersection2D["polygonCircle"](g, _, w)) return !1;
          }
          return !0;
        }, i["removeRopeByFruit"] = function (t) {
          if (this["isInit"]) for (var c = 0; c < this.ropeConnectFruits.length; c++) {
            var h;
            if (-1 != (h = this.ropeConnectFruits[c])["indexOf"](t)) {
              for (var v, l, d = 0; d < h.length; d++) {
                var k;
                (k = h[d]) && k["isValid"] && k.getComponent(FruitComp)["removeJoint"]();
              }
              if (this.ropeConnectFruits.splice(c, 1), (v = (l = this.fruitRopes[c]).length) > 0) for (var p = 0; p < v; p++) {
                var g, y;
                (y = (g = l["shift"]()).getComponent(DistanceJoint2D)) && (y["connectedBody"] = null), g["removeFromParent"](), GbzPoolManager["ins"]["putNode"](g);
              }
              this.fruitRopes.splice(c, 1);
              break;
            }
          }
        }, i["upDrawRope"] = function () {
          if (this["isInit"] && 0 !== this["fruitRopes"].length) if (this["isUpdateDrow"]) this.drawRope();else for (var c = 0; c < this.ropeConnectFruits.length; c++) {
            var f, h, v;
            if (v = (f = this.ropeConnectFruits[c])[0], h = f[1], v.isValid && h.isValid) {
              var l;
              if (!(l = this["lastDrawPositions"][c])) return void this.drawRope();
              if (Math.abs(v.position.x - l["ax"]) > .5 || Math.abs(v.position.y - l["ay"]) > .5 || Math.abs(h.position.x - l["bx"]) > .5 || Math.abs(h.position.y - l["by"]) > .5) return void this.drawRope();
            }
          }
        }, i["createRope"] = function (t, n) {
          var r, i, e, a, c, v, l, b;
          i = math.v2(t.node.getPosition().x, t.node.getPosition().y), v = math.v2(n.node.getPosition().x, n.node.getPosition().y), c = Vec2["distance"](i, v), l = Math["floor"](c / 19), b = v.clone()["subtract"](i.clone())["normalize"](), e = math.v2(0, 0), Vec2.multiplyScalar(e, b.clone(), c / l), a = math.v2(0, 0), r = Math["max"](t.node.getComponent(UITransform)["width"], t.node.getComponent(UITransform)["height"]) / 2, Vec2.multiplyScalar(a, b.clone(), r * t.node["scale"].x);
          for (var O = i.clone().add(a), F = this["graphics"].node, B = [], z = 0; z < l; z++) {
            var U, H, V, W;
            if (H = GbzPoolManager["ins"]["getNode"]("jointPoint"), F["addChild"](H), H["setPosition"](O.x, O.y, 0), H["active"] = !0, V = H.getComponent(RigidBody2D), U = H.getComponent(DistanceJoint2D), O = O.clone().add(e), B.push(H), 0 === z) t.initJoint(V);else z == l - 1 && (n.initJoint(V), U && U["destroy"]()), (W = B[z - 1].getComponent(DistanceJoint2D) || B[z - 1]["addComponent"](DistanceJoint2D))["connectedBody"] = H.getComponent(RigidBody2D), W.maxLength = 10, Log("disJoint_.distance", W.maxLength), W["apply"]();
          }
          this["fruitRopes"].push(B);
        }, i["drawRope"] = function () {
          this.graphics["clear"](), this.lastDrawPositions.length = 0;
          for (var f = 0; f < this.fruitRopes.length; f++) {
            var h, v, l, b, d, k;
            b = this.fruitRopes[f], l = this["ropeConnectFruits"][f], h = l[0].position.x, k = l[0].position.y, v = l[1].position.x, d = l[1].position.y, this.lastDrawPositions["push"](function () {
              var t;
              return (t = function () {
                var t, n;
                return Pu(t = {}, "ax", 0), Pu(t, "ay", 0), Pu(t, "bx", 0), Pu(t, "by", 0), (n = t).ax = 0, n.ay = 0, n.bx = 0, n.by = 0, n;
              }["apply"]())["ax"] = h, t["ay"] = k, t["bx"] = v, t["by"] = d, t;
            }["apply"]()), this.graphics["moveTo"](h, k);
            for (var m = 0; m < b.length; m++) this.graphics.lineTo(b[m].position.x, b[m].position.y);
            this.graphics.lineTo(v, d);
          }
          this.graphics["stroke"](), this["isUpdateDrow"] = !1;
        }, i["recycle"] = function () {
          if (this["isInit"]) {
            this.graphics["clear"]();
            for (var c = this.graphics.node.children.length - 1; c >= 0; c--) {
              var h, v;
              (v = (h = this.graphics.node.children[c]).getComponent(DistanceJoint2D)) && (v["connectedBody"] = null), h["removeFromParent"](), GbzPoolManager["ins"]["putNode"](h);
            }
            if (this.ropeConnectFruits.length > 0) for (var l = 0; l < this.ropeConnectFruits.length; l++) for (var d = this.ropeConnectFruits[l], k = 0; k < d.length; k++) {
              var p;
              (p = d[k]) && p["isValid"] && p.getComponent(FruitComp)["removeJoint"]();
            }
            this["fruitRopes"] = [], this.ropeConnectFruits = [], this["lastDrawPositions"] = [], this["isUpdateDrow"] = !1;
          }
        }, i["getAngleForPos"] = function (t, n, r) {
          var i;
          return void 0 === r && (r = !1), i = r ? -Math.atan2(n.x - t.x, n.y - t.y) : Math.atan2(n.y - t.y, n.x - t.x), misc["radiansToDegrees"](i);
        }, i["CalculateCorners"] = function (t, n, r, i) {
          var e, a, s;
          return a = i * Math["PI"] / 180, e = Math["cos"](a), s = Math["sin"](a), [function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t).dx = 0, n.dy = 0, n;
            }["apply"]())["dx"] = n / 2, t["dy"] = r / 2, t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t).dx = 0, n.dy = 0, n;
            }["apply"]())["dx"] = n / 2, t["dy"] = -r / 2, t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t).dx = 0, n.dy = 0, n;
            }["apply"]())["dx"] = -n / 2, t["dy"] = -r / 2, t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "dx", 0), Pu(t, "dy", 0), (n = t).dx = 0, n.dy = 0, n;
            }["apply"]())["dx"] = -n / 2, t["dy"] = r / 2, t;
          }.apply()]["map"](function (n) {
            var r, i;
            return i = n["dx"], r = n["dy"], math["v2"](t.x + (i * e - r * s), t.y + (i * s + r * e));
          });
        }, createClass(e, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ConnectNum", t["get"] = function () {
            return this["ropeConnectFruits"]["length"];
          }, t;
        }["bind"](this)["apply"]()]), e;
      }(Component)) || y), cclegacy._RF["pop"]();
    }, y;
  }["bind"](this)["apply"]();
});