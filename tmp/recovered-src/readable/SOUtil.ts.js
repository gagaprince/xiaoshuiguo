(function (t) {
  var createForOfIteratorHelperLoose, cclegacy, math, Sprite, UITransform, screen, view, find, tween, Animation, Texture2D, SpriteFrame, Node, Label, color, UIOpacity, LabelUp, EventDispatcher, toXY, GbzInstance, GbzPoolManager, GbzResManager, ResType, RandTool;
  return function () {
    var A, C;
    return Pu(A = {}, "setters", 0), Pu(A, "execute", 0), (C = A).setters = [function (t) {
      createForOfIteratorHelperLoose = t["createForOfIteratorHelperLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], math = t["math"], Sprite = t["Sprite"], UITransform = t["UITransform"], screen = t["screen"], view = t["view"], find = t["find"], tween = t["tween"], Animation = t["Animation"], Texture2D = t["Texture2D"], SpriteFrame = t["SpriteFrame"], Node = t["Node"], Label = t["Label"], color = t["color"], UIOpacity = t["UIOpacity"];
    }, function (t) {
      LabelUp = t["default"];
    }, function (t) {
      EventDispatcher = t["EventDispatcher"];
    }, function (t) {
      toXY = t["toXY"];
    }, function (t) {
      GbzInstance = t["default"];
    }, function (t) {
      GbzPoolManager = t["default"];
    }, function (t) {
      GbzResManager = t["default"], ResType = t["ResType"];
    }, function (t) {
      RandTool = t["default"];
    }, null], C.execute = function () {
      cclegacy._RF["push"]({}, "896ecNg16hAz4aUghuhjl5O", "SOUtil", void 0), t("default", function () {
        var t;
        return (t = function () {})["emit"] = function (t, n) {
          this["_eventListener"]["emit"](t, n);
        }, t["on"] = function (t, n, r, i) {
          this["_eventListener"]["on"](t, n, r, i);
        }, t["offAllCaller"] = function (t) {
          this["_eventListener"]["offAllCaller"](t);
        }, t["off"] = function (t, n, r) {
          this["_eventListener"]["off"](t, n, r);
        }, t["offAll"] = function (t) {
          this["_eventListener"]["offAll"](t);
        }, t["clamp"] = function (t, n, r) {
          return t > r ? r : t < n ? n : t;
        }, t["getRandomArray"] = function (t, n, r) {
          var i, e, a;
          if (!(t instanceof Array)) return [];
          for (i = [], n = (e = t.length) < n ? e : n; i.length < n;) {
            var c;
            (c = t[0, a = e - 1, Math["floor"](Math["random"]() * (a - 0 + 1) + 0)]) && (r ? i["indexOf"](c) < 0 && i.push(c) : i.push(c));
          }
          return i;
        }, t["getRandomIntInclusive"] = function (t, n) {
          return t = Math["ceil"](t), n = Math.floor(n), Math.floor(Math["random"]() * (n - t + 1)) + t;
        }, t["random"] = function (t, n) {
          return Math["floor"](Math["random"]() * (n - t + 1) + t);
        }, t["randomFloat"] = function (t, n) {
          var r;
          return r = Math.random() * (n - t + 1) + t, r = this["clamp"](r, t, n), Math.random() * (n - t) + t;
        }, t["randomNum"] = function (t, n) {
          var r, i;
          return i = n - t, (r = Math["round"](Math["random"]() * i + t)) >= n && (r = n), r <= t && (r = t), r;
        }, t["getCenter"] = function (t, n) {
          var r;
          return r = Math["min"](t, n), Math["max"](t, n) - r + r;
        }, t["getRandomArr"] = function (t) {
          var n, r;
          for (n = new Array(), r = 0; r < t["length"]; r++) n[r] = t[r];
          return n["sort"](function () {
            return .5 - Math["random"]();
          }), n;
        }, t["convetOtherNodeSpace"] = function (t, n) {
          var r;
          return t && n ? (r = this["localConvertWorldPoint"](t), this["worldConvertLocalPoint"](n, r)) : null;
        }, t["convetOtherNodeSpaceAR"] = function (t, n) {
          var r;
          return t && n ? (r = this["localConvertWorldPointAR"](t), this["worldConvertLocalPointAR"](n, r)) : null;
        }, t["localConvertWorldPointAR"] = function (t) {
          return t ? t["convertToWorldSpaceAR"](math["v3"](0, 0, 0)) : null;
        }, t["localConvertWorldPoint"] = function (t) {
          return t ? t["convertToWorldSpace"](math["v2"](0, 0)) : null;
        }, t["worldConvertLocalPointAR"] = function (t, n) {
          return t ? t["convertToNodeSpaceAR"](n) : null;
        }, t["worldConvertLocalPoint"] = function (t, n) {
          return t ? t["convertToNodeSpace"](n) : null;
        }, t["setSpriteGray"] = function (t, r, i) {
          var a;
          (a = t["getComponent"](Sprite)) && (a["grayscale"] = r);
          for (var s, o = createForOfIteratorHelperLoose(t["children"]); !(s = o())["done"];) {
            var c;
            c = s["value"], this["setSpriteGray"](c, r);
          }
        }, t["httpRequest"] = function (t, n, r, i) {
          var e;
          void 0 === i && (i = "POST"), (e = new XMLHttpRequest())["onreadystatechange"] = function () {
            if (4 === e["readyState"]) if (200 === e["status"]) try {
              var n;
              n = JSON["parse"](e["responseText"]), r && r(n);
            } catch (t) {
              r && r(null);
            } else r && r(null);
          }, e["onerror"] = function (t) {
            r && r(null);
          }, e["ontimeout"] = function (t) {
            r && r(null);
          }, e["open"](i, t, !0), e["setRequestHeader"]("Content-Type", "application/json"), e["send"](JSON["stringify"](n));
        }, t["isSameDay"] = function (t) {
          var n, r;
          return !!t && (n = new Date(t), r = new Date(), n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate());
        }, t["SetSpriteSizeWidth"] = function (t, n) {
          var r, i, e;
          t && t.spriteFrame && (i = (r = t.spriteFrame).getOriginalSize()["width"], e = r.getOriginalSize()["height"] * (n / i), t["node"]["getComponent"](UITransform)["setContentSize"](n, e));
        }, t["SetSpriteSizeHeight"] = function (t, n) {
          var r, i;
          t && t.spriteFrame && (i = (r = t.spriteFrame).getOriginalSize()["width"] * (n / r.getOriginalSize()["height"]), t["node"]["getComponent"](UITransform)["setContentSize"](i, n));
        }, t["computWxPosition"] = function (t, n) {
          var r, i, e, o;
          return o = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), Pu(t, "height", 0), (n = t).left = 0, n.top = 0, n.width = 0, n.height = 0, n;
            }["apply"]())["left"] = 0, t["top"] = 0, t["width"] = 0, t["height"] = 0, t;
          }["apply"](), r = t["getComponent"](UITransform)["getBoundingBoxToWorld"](), e = screen["devicePixelRatio"], i = view["getScaleX"]() / e, o["left"] = r.x * i, o["top"] = n["screenHeight"] - (r.y + r.height) * i, o.width = r.width * i, o.height = r.height * i, o;
        }, t["showFlyGold"] = function (n, r, e) {
          var a, u, s, f, h, v;
          f = find("Canvas/UI"), s = GbzPoolManager["ins"]["getNode"]("flyGold", f), u = toXY(n, f), a = toXY(r, f), s["position"] = math.v3(u), h = math.v3((a.x + u.x) / 2, (a.y + u.y) / 2, 0).add(math.v3(0, RandTool.RandIncludeAll(-100, -150), 0)), v = a.add(math.v3(RandTool.RandIncludeAll(30, 70), RandTool.RandIncludeAll(-70, -120), 0)), s["angle"] = 0, tween(s)["parallel"](tween(s).to(e, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = math["v3"](a), t;
          }.apply(), function () {
            var n;
            return (n = function () {
              var t;
              return (t = Pu({}, "onUpdate", 0)).onUpdate = 0, t;
            }["apply"]())["onUpdate"] = function (n, r) {
              var e;
              e = new math["Vec3"](), t["quadraticBezier"](h, v, a, r, e), n["setPosition"](e);
            }, n;
          }.apply()), tween(s).to(e, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "angle", 0)).angle = 0, t;
            }["apply"]())["angle"] = -360, t;
          }.apply()).start())["call"](function () {
            GbzPoolManager["ins"]["putNode"](s);
          }).start();
        }, t["quadraticBezier"] = function (t, n, r, i, e) {
          var a;
          a = 1 - i, e.x = a * a * t.x + 2 * i * a * n.x + i * i * r.x, e.y = a * a * t.y + 2 * i * a * n.y + i * i * r.y, e.z = a * a * t.z + 2 * i * a * n.z + i * i * r.z;
        }, t["showFlyObj"] = function (t, n, r, e, a, u) {
          var s, f, h, v;
          f = find("Canvas/UI"), v = GbzPoolManager["ins"]["getNode"](t, f), a && a(v), s = toXY(n, f), h = toXY(r, f), v["position"] = math.v3(s), math.v2((h.x + s.x) / 2, (h.y + s.y) / 2).add(math.v2(0, RandTool.RandIncludeAll(-100, -150))), h.add(math.v3(RandTool.RandIncludeAll(30, 70), RandTool.RandIncludeAll(-70, -120), 0)), v["angle"] = 0, tween(v)["to"](e, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = math["v3"](h), t;
          }["apply"]())["call"](function () {
            GbzPoolManager["ins"]["putNode"](v), u && u();
          })["start"]();
        }, t["showLabelUp"] = function (t, n) {
          var r, e, a;
          e = find("Canvas/UI"), (r = GbzPoolManager["ins"]["getNode"]("labelUp", e))["getComponent"](LabelUp)["SetData"](n), a = toXY(t, e), r["position"] = math["v3"](a);
        }, t["showBoomEff"] = function (t) {
          var n, r, e;
          n = find("Canvas/UI"), (r = GbzPoolManager["ins"]["getNode"]("boomEff", n))["getComponent"](Animation)["play"](), e = toXY(t, n), r["position"] = math["v3"](e);
        }, t["getBound"] = function (t) {
          return t ? t["getComponent"](UITransform)["getBoundingBoxToWorld"]() : null;
        }, t["updateAvatar"] = function (t, n) {
          var r;
          window.wx && ((r = window.wx["createImage"]())["onload"] = function () {
            var t;
            (t = new Texture2D())["image"] = r, n && (n.spriteFrame = new SpriteFrame(), n.spriteFrame["texture"] = t);
          }, r["src"] = t);
        }, t["strTipLab"] = function (t, n, r, e) {
          var u, s, o, f;
          f = GbzInstance["uiMgr"]["getLayer"](n)["node"], (o = (s = new Node("DynamicLabel")).addComponent(Label))["string"] = t, o["fontSize"] = e, o["lineHeight"] = e + 5, o["horizontalAlign"] = Label["HorizontalAlign"]["CENTER"], o["isBold"] = !0, s.getComponent(UITransform)["width"] = r, s.getComponent(UITransform)["height"] = 40, s["setPosition"](0, -100), o["outlineColor"] = color(0, 0, 0), o["outlineWidth"] = 1, o["enableOutline"] = !0, f["addChild"](s), u = s.getComponent(UIOpacity) || s.addComponent(UIOpacity), tween(s)["parallel"](tween(u).to(.8, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 100, t;
          }.apply()), tween(s).to(.8, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = new math["Vec3"](s.x, s.y + 200), t;
          }.apply()))["call"](function () {
            s["destroy"]();
          })["start"]();
        }, t["randomRange"] = function (t, n, r) {
          return void 0 === r && (r = !0), r ? (t = Math["ceil"](t), n = Math.floor(n), Math.floor(Math.random() * (n - t + 1)) + t) : Math.random() * (n - t) + t;
        }, t["convertTimeString"] = function (t) {
          var n, r, i, e;
          return e = Math.floor(t / 60), r = Math.floor(e / 10), i = e % 10, n = Math.floor(t % 60), r + "" + i + xt + (n < 10 ? it + n : n + "");
        }, t["imgEff"] = function (t, n, r, u, s, o) {
          var f, h, v, b, d, k, m, p;
          (d = new Node("img"))["addComponent"](Sprite)["spriteFrame"] = GbzResManager["ins"]["getRes"](ResType["Sprite"], "game", t), s["addChild"](d), h = n.getComponent(UITransform).convertToWorldSpaceAR(math.Vec3.ZERO), v = r.getComponent(UITransform).convertToWorldSpaceAR(math.Vec3.ZERO), m = s.getComponent(UITransform).convertToNodeSpaceAR(h), b = s.getComponent(UITransform).convertToNodeSpaceAR(v), d["position"] = m, k = 100 * (Math.random() - .5), f = 100 * (Math.random() - .5), p = math["v3"](m.x + k, m.y + f, m.z), tween(d).to(.2 * u, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = p, t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "quadOut", t;
          }.apply()).to(.8 * u, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = b, t;
          }.apply(), function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "easing", 0)).easing = 0, t;
            }["apply"]())["easing"] = "backIn", t;
          }.apply())["delay"](.01)["call"](function () {
            d["destroy"](), o && o();
          })["start"]();
        }, t["strTipLabUseItem"] = function (t, n, r, e) {
          var u, s, o, f;
          s = n, (o = (u = new Node("DynamicLabel")).addComponent(Label))["string"] = t, o["fontSize"] = e, o["lineHeight"] = e + 5, o["horizontalAlign"] = Label["HorizontalAlign"]["CENTER"], o["isBold"] = !0, u.getComponent(UITransform)["width"] = r, u.getComponent(UITransform)["height"] = 40, u["setPosition"](0, 0), o["outlineColor"] = color(0, 0, 0), o["outlineWidth"] = 1, o["enableOutline"] = !0, s["addChild"](u), f = u.getComponent(UIOpacity) || u.addComponent(UIOpacity), tween(u)["parallel"](tween(f).to(.8, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "opacity", 0)).opacity = 0, t;
            }["apply"]())["opacity"] = 100, t;
          }.apply()), tween(u).to(.8, function () {
            var t;
            return (t = function () {
              var t;
              return (t = Pu({}, "position", 0)).position = 0, t;
            }["apply"]())["position"] = new math["Vec3"](u.x, u.y + 200), t;
          }.apply()))["call"](function () {
            u["destroy"]();
          })["start"]();
        }, t["shuffleArray"] = function (t) {
          for (var e = t["slice"](), a = e["length"] - 1; a > 0; a--) {
            var u, s;
            u = [e[s = Math["floor"](Math["random"]() * (a + 1))], e[a]], e[a] = u[0], e[s] = u[1];
          }
          return e;
        }, t;
      }())["_eventListener"] = new EventDispatcher(), cclegacy._RF["pop"]();
    }, C;
  }["bind"](this)["apply"]();
});