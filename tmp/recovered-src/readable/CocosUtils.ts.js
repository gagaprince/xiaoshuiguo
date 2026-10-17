(function (t) {
  var cclegacy, resources, SpriteFrame, assetManager, sp, Texture2D, math, view, UITransform;
  return function () {
    var f, h;
    return Pu(f = {}, "setters", 0), Pu(f, "execute", 0), (h = f).setters = [function (t) {
      cclegacy = t["cclegacy"], resources = t["resources"], SpriteFrame = t["SpriteFrame"], assetManager = t["assetManager"], sp = t["sp"], Texture2D = t["Texture2D"], math = t["math"], view = t["view"], UITransform = t["UITransform"];
    }, null], h.execute = function () {
      cclegacy._RF["push"]({}, "b8f34r1lmZKb6/WSof5ViNL", "CocosUtils", void 0), t("default", function () {
        var t;
        return (t = function () {})["loadResSF"] = function (t) {
          return new Promise(function (n, e) {
            var a;
            (a = resources["get"](t, SpriteFrame)) ? n(a) : resources["load"](t, SpriteFrame, function (t, r) {
              n(t ? null : r);
            });
          });
        }, t["bundleLoadRes"] = function (t, n, r, i, a) {
          var u, s, o, c;
          (s = this, void 0 === i && (i = "res"), void 0 === a && (a = !1), u = function () {
            var r;
            s.allRes_[i] || (s.allRes_[i] = new Map()), (r = s.allRes_[i])["has"](t) && r["get"](t) || r["set"](t, function () {
              var r;
              return (r = function () {
                var t, n;
                return Pu(t = {}, "path", 0), Pu(t, "type", 0), Pu(t, "bundelName", 0), Pu(t, "isLock", 0), (n = t).path = 0, n.type = 0, n.bundelName = 0, n.isLock = 0, n;
              }["apply"]())["path"] = t, r["type"] = n, r["bundelName"] = i, r["isLock"] = a, r;
            }["apply"]());
          }, o = assetManager["getBundle"](i)) ? (c = o["get"](t, n)) ? c && (r(c), u()) : o["load"](t, n, function (t, n) {
            t || (r(n), u());
          }) : assetManager["loadBundle"](i, function (i, e) {
            i || e["load"](t, n, function (t, n) {
              t || (r(n), u());
            });
          });
        }, t["bundelRelease"] = function (t, n) {
          var r, i;
          i = assetManager["getBundle"](n), r = this["allRes_"][n], 0 == t ? r && r.forEach(function (t, n) {
            t && (t["isLock"] || (r["set"](n, null), i["release"](t["path"], t["type"])));
          }) : 1 == t && (r && (r.forEach(function (t, n) {
            t && i["release"](t["path"], t["type"]);
          }), r["clear"]()), i["releaseAll"](), assetManager["removeBundle"](i), i = null);
        }, t["loadResSkeletonData"] = function (t, n) {
          return void 0 === n && (n = "Main"), new Promise(function (r, i) {
            var u, s;
            (u = assetManager["getBundle"](n)) ? (s = u["get"](t, sp.SkeletonData)) ? r(s) : u["load"](t, sp.SkeletonData, function (t, n) {
              r(n);
            }) : assetManager["loadBundle"](n, function (n, i) {
              i["load"](t, sp["SkeletonData"], function (t, n) {
                r(n);
              });
            });
          });
        }, t["loadResTexture2D"] = function (t) {
          return new Promise(function (n, i) {
            resources["load"](t, Texture2D, function (t, r) {
              n(r);
            });
          });
        }, t["loadImage"] = function (t) {
          return new Promise(function (n) {
            assetManager["loadRemote"](t, function (t, r) {
              n(t ? null : r);
            });
          });
        }, t["convertTimeString"] = function (t) {
          var n, r, i;
          return (i = Math.floor(t / 600)) + "" + (r = Math.floor((t - 600 * i) / 60)) + xt + ((n = t - 60 * r + 600 * i) <= 9 ? it + n : n + "");
        }, t["loadResoucesJson"] = function (t) {
          return new Promise(function (n, i) {
            resources["load"](t, function (t, r) {
              n(t ? null : r["json"]);
            });
          });
        }, t["GetCross"] = function (t, n, r) {
          return (n.x - t.x) * (r.y - t.y) - (r.x - t.x) * (n.y - t.y);
        }, t["isPointInVec2InMatrix"] = function (t, n, r, i, e) {
          return this.GetCross(t, n, e) * this.GetCross(r, i, e) >= 0 && this.GetCross(n, r, e) * this.GetCross(i, t, e) >= 0;
        }, t["CheckIsInRect"] = function (t, n, r) {
          var i, e, a, u, o, c;
          return o = r.x / 2, a = r.y / 2, c = math.v2(n.x - o, n.y - a), e = math.v2(n.x + o, n.y - a), u = math.v2(n.x - o, n.y + a), i = math.v2(n.x + o, n.y + a), this["IsPointInRect"](c, e, u, i, t);
        }, t["IsPointInRect"] = function (t, n, r, i, e) {
          var a, u, s, o, c, f, h, v;
          return h = n, o = r, a = i, f = ((u = t).x - o.x) * (e.y - o.y) - (u.y - o.y) * (e.x - o.x), c = (h.x - u.x) * (e.y - u.y) - (h.y - u.y) * (e.x - u.x), v = (a.x - h.x) * (e.y - h.y) - (a.y - h.y) * (e.x - h.x), s = (o.x - a.x) * (e.y - a.y) - (o.y - a.y) * (e.x - a.x), f > 0 && c > 0 && v > 0 && s > 0 || f < 0 && c < 0 && v < 0 && s < 0;
        }, t["isNewDay"] = function (t) {
          var n;
          return t != (n = new Date())["getFullYear"]() + Tt + (n["getMonth"]() + 1) + Tt + n["getDate"]();
        }, t["formatTime"] = function (t) {
          var n, r;
          return n = Math.floor(t / 3600000), r = Math.floor((t - 3600000 * n) / 60000), function () {
            var i;
            return (i = function () {
              var t, n;
              return Pu(t = {}, "hours", 0), Pu(t, "minutes", 0), Pu(t, "seconds", 0), (n = t).hours = 0, n.minutes = 0, n.seconds = 0, n;
            }["apply"]())["hours"] = n, i["minutes"] = r, i["seconds"] = Math["floor"]((t - 3600000 * n - 60000 * r) / 1000), i;
          }["apply"]();
        }, t["getTimeString"] = function (t, n, r) {
          var i, e;
          return void 0 === n && (n = [0, 1, 1]), void 0 === r && (r = !1), i = this["formatTime"](t), e = "", 1 == n[0] && 1 == n[1] && 1 == n[2] ? e = (i.hours < 10 ? it + i.hours : "" + i.hours) + (r ? Lt : "") + xt + (i.minutes < 10 ? it + i.minutes : "" + i.minutes) + (r ? It : "") + xt + (i.seconds < 10 ? it + i.seconds : "" + i.seconds) + (r ? Rt : "") : 1 == n[1] && 1 == n[2] ? e = (i.minutes < 10 ? it + i.minutes : "" + i.minutes) + (r ? It : "") + xt + (i.seconds < 10 ? it + i.seconds : "" + i.seconds) + (r ? Rt : "") : 1 == n[0] && 1 == n[2] && (e = (i.hours < 10 ? it + i.hours : "" + i.hours) + (r ? Lt : "") + xt + (i.minutes < 10 ? it + i.minutes : "" + i.minutes) + (r ? It : "")), e;
        }, t["roundNumberToTwoDecimals"] = function (t) {
          return Math["round"](100 * t) / 100;
        }, t["getDateTime"] = function (t) {
          var n, r;
          return void 0 === t && (t = 0), r = new Date(), n = "", 0 == t ? n = r.getFullYear() + Et + (r.getMonth() + 1) + Et + r.getDate() + Dt + r.getHours() + xt + r.getMinutes() + xt + r.getSeconds() : 1 == t ? n = r.getFullYear() + Et + (r.getMonth() + 1) + Et + r.getDate() : 2 == t && (n = r.getHours() + xt + r.getMinutes() + xt + r.getSeconds()), n;
        }, t["intervalDays"] = function (t) {
          var n, r;
          return r = Date["parse"](t), n = Date["now"](), Math["abs"](Math["floor"]((n - r) / 1000 / 60 / 60 / 24));
        }, t["computWxPosition"] = function (t, n) {
          var r, i, e, a;
          return a = function () {
            var t;
            return (t = function () {
              var t, n;
              return Pu(t = {}, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), Pu(t, "height", 0), (n = t).left = 0, n.top = 0, n.width = 0, n.height = 0, n;
            }["apply"]())["left"] = 0, t["top"] = 0, t["width"] = 0, t["height"] = 0, t;
          }["apply"](), e = t["getBoundingBoxToWorld"](), i = view["getDevicePixelRatio"](), r = view["getScaleX"]() / i, a["left"] = e.x * r, a["top"] = n["screenHeight"] - (e.y + e.height) * r, a.width = e.width * r, a.height = e.height * r, a;
        }, t["lookAt"] = function (t, n) {
          var r, i, e, a;
          e = t["parent"].getComponent(UITransform)["convertToNodeSpaceAR"](n.getComponent(UITransform)["convertToWorldSpaceAR"](math["v3"](0, 0, 0))), r = t["position"], i = e["subtract"](r), a = 180 * Math["atan2"](i.y, i.x) / Math["PI"], t["angle"] = a - 90;
        }, t;
      }())["allRes_"] = [], cclegacy._RF["pop"]();
    }, h;
  }["bind"](this)["apply"]();
});