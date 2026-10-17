(function (t) {
  var createClass, cclegacy, color, director, Canvas, UITransform, Node, Layers, Label, Graphics, UIOpacity, tween, math;
  return function () {
    var b, k;
    return 0, Pu(b = {}, "setters", 0), Pu(b, "execute", 0), (k = b).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], color = t["color"], director = t["director"], Canvas = t["Canvas"], UITransform = t["UITransform"], Node = t["Node"], Layers = t["Layers"], Label = t["Label"], Graphics = t["Graphics"], UIOpacity = t["UIOpacity"], tween = t["tween"], math = t["math"];
    }], k.execute = function () {
      cclegacy._RF["push"]({}, "2c30esmzUVMSbo3h4LMUgQv", "GbzToastManager", void 0), t("default", function () {
        var t;
        return (t = function () {})["getIns"] = function () {
          return null === this._ins && (this._ins = new t()), this._ins;
        }, t["prototype"]["show"] = function (t, n) {
          for (var r, b, k, m, p, g, y, w, _, M, S, A, C, x, T, L, nt = 0, rt = 1; nt < 11;) switch (++nt, rt) {
            case 9:
              L["layer"] = Layers["Enum"]["UI_2D"], rt = 5;
              break;
            case 0:
              S.getComponent(UITransform).height = m.fontSize * b, rt = 10;
              break;
            case 8:
              tween(L)["sequence"](tween(L)["by"](k, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "position", 0)).position = 0, t;
                }["apply"]())["position"] = math["v3"](0, 0, 0), t;
              }.apply()), tween(A)["to"](.3, function () {
                var t;
                return (t = function () {
                  var t;
                  return (t = Pu({}, "opacity", 0)).opacity = 0, t;
                }["apply"]())["opacity"] = 0, t;
              }.apply()), tween()["call"](function () {
                L["destroy"]();
              }))["start"](), rt = 1;
              break;
            case 4:
              b = 1 + ~~(t.length * m.fontSize / (3 * p / 5)), rt = 0;
              break;
            case 7:
              M.arc(-S.getComponent(UITransform).width / 2, 0, S.getComponent(UITransform).height / 2 + 20, .5 * Math.PI, 1.5 * Math.PI, !0), M.lineTo(S.getComponent(UITransform).width / 2, -(S.getComponent(UITransform).height / 2 + 20)), M.arc(S.getComponent(UITransform).width / 2, 0, S.getComponent(UITransform).height / 2 + 20, 1.5 * Math.PI, .5 * Math.PI, !0), M.lineTo(-S.getComponent(UITransform).width / 2, S.getComponent(UITransform).height / 2 + 20), M["fillColor"] = g, M["fill"](), L.addChild(S), "CENTER" === r ? (L.y = 0, L.x = 0) : "TOP" === r ? L.y = L.y + C / 5 * 2 : "BOTTOM" === r && (L.y = L.y - C / 5 * 2), w.node.addChild(L), rt = 2;
              break;
            case 10:
              M = L.addComponent(Graphics), rt = 7;
              break;
            case 1:
              void 0 === t && (t = ""), rt = 3;
              break;
            case 5:
              m = (S = new Node()).addComponent(Label), rt = 6;
              break;
            case 2:
              A = L.getComponent(UIOpacity) || L.addComponent(UIOpacity), rt = 8;
              break;
            case 6:
              m["horizontalAlign"] = Label["HorizontalAlign"].CENTER, m["verticalAlign"] = Label["VerticalAlign"].CENTER, m.fontSize = 30, m["string"] = t, t.length * m.fontSize > 3 * p / 5 ? (S.getComponent(UITransform).width = 3 * p / 5, m["overflow"] = Label["Overflow"]["RESIZE_HEIGHT"]) : S.getComponent(UITransform).width = t.length * m.fontSize, rt = 4;
              break;
            case 3:
              r = void 0 === (T = (x = void 0 === n ? {} : n)["gravity"]) ? "CENTER" : T, k = void 0 === (_ = x["duration"]) ? 1 : _, g = void 0 === (y = x["bg_color"]) ? color(102, 102, 102, 200) : y, p = (w = director["getScene"]()["getComponentInChildren"](Canvas)).node.getComponent(UITransform).width, C = w.node.getComponent(UITransform).height, L = new Node(), rt = 9;
          }
        }, createClass(t, null, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "ins", t["get"] = function () {
            return this["getIns"]();
          }, t;
        }["bind"](this)["apply"]()]), t;
      }())["_ins"] = null, cclegacy._RF["pop"]();
    }, k;
  }["bind"](this)["apply"]();
});