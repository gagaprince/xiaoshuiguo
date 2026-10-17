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
    f = to;
  return function () {
    var f,
      h,
      v = to[5],
      l = "setters",
      b = "execute";
    return Pu(f = {}, "setters", 0), Pu(f, "execute", 0), (h = f)["setters"] = [function (t) {
      var f = to,
        h = f[7],
        v = f[9],
        l = f[2];
      n = t["cclegacy"], r = t["resources"], i = t["SpriteFrame"], e = t["assetManager"], a = t["sp"], u = t["Texture2D"], s = t["math"], o = t["view"], c = t["UITransform"];
    }, null], h["execute"] = function () {
      var f = to,
        h = f[5],
        v = "_RF";
      n["_RF"]["push"]({}, "b8f34r1lmZKb6/WSof5ViNL", "CocosUtils", void 0), t("default", function () {
        var t,
          n = to,
          f = n[7],
          h = n[11],
          v = n[14],
          l = n[6];
        return (t = function () {})["loadResSF"] = function (t) {
          return new Promise(function (n, e) {
            var a,
              u = to;
            (a = r["get"](t, i)) ? n(a) : r["load"](t, i, function (t, r) {
              n(t ? null : r);
            });
          });
        }, t["bundleLoadRes"] = function (t, n, r, i, a) {
          var u,
            s,
            o,
            c,
            f = to,
            h = f[1];
          (s = this, void 0 === i && (i = "res"), void 0 === a && (a = !1), u = function () {
            var r,
              e = to,
              u = e[1],
              o = "allRes_";
            s["allRes_"][i] || (s["allRes_"][i] = new Map()), (r = s["allRes_"][i])["has"](t) && r["get"](t) || r["set"](t, function () {
              var r,
                e = to,
                u = e[2];
              return (r = function () {
                var t,
                  n,
                  r = to,
                  i = r[2],
                  e = "path",
                  a = "type",
                  u = "bundelName",
                  s = "isLock";
                return Pu(t = {}, "path", 0), Pu(t, "type", 0), Pu(t, "bundelName", 0), Pu(t, "isLock", 0), (n = t)["path"] = 0, n["type"] = 0, n["bundelName"] = 0, n["isLock"] = 0, n;
              }["apply"]())["path"] = t, r["type"] = n, r["bundelName"] = i, r["isLock"] = a, r;
            }["apply"]());
          }, o = e["getBundle"](i)) ? (c = o["get"](t, n)) ? c && (r(c), u()) : o["load"](t, n, function (t, n) {
            t || (r(n), u());
          }) : e["loadBundle"](i, function (i, e) {
            i || e["load"](t, n, function (t, n) {
              t || (r(n), u());
            });
          });
        }, t["bundelRelease"] = function (t, n) {
          var r,
            i,
            a = to,
            u = "forEach";
          i = e["getBundle"](n), r = this["allRes_"][n], 0 == t ? r && r["forEach"](function (t, n) {
            var e = to,
              a = e[2];
            t && (t["isLock"] || (r["set"](n, null), i["release"](t["path"], t["type"])));
          }) : 1 == t && (r && (r["forEach"](function (t, n) {
            var r = to,
              e = r[2];
            t && i["release"](t["path"], t["type"]);
          }), r["clear"]()), i["releaseAll"](), e["removeBundle"](i), i = null);
        }, t["loadResSkeletonData"] = function (t, n) {
          return void 0 === n && (n = "Main"), new Promise(function (r, i) {
            var u,
              s,
              o = to,
              c = "SkeletonData";
            (u = e["getBundle"](n)) ? (s = u["get"](t, a["SkeletonData"])) ? r(s) : u["load"](t, a["SkeletonData"], function (t, n) {
              r(n);
            }) : e["loadBundle"](n, function (n, i) {
              var e = to;
              i["load"](t, a["SkeletonData"], function (t, n) {
                r(n);
              });
            });
          });
        }, t["loadResTexture2D"] = function (t) {
          return new Promise(function (n, i) {
            r["load"](t, u, function (t, r) {
              n(r);
            });
          });
        }, t["loadImage"] = function (t) {
          return new Promise(function (n) {
            e["loadRemote"](t, function (t, r) {
              n(t ? null : r);
            });
          });
        }, t["convertTimeString"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = ro,
            u = 600,
            s = 60,
            o = "floor";
          return (i = Math["floor"](t / 600)) + "" + (r = Math["floor"]((t - 600 * i) / 60)) + xt + ((n = t - 60 * r + 600 * i) <= 9 ? it + n : n + "");
        }, t["loadResoucesJson"] = function (t) {
          return new Promise(function (n, i) {
            r["load"](t, function (t, r) {
              n(t ? null : r["json"]);
            });
          });
        }, t["GetCross"] = function (t, n, r) {
          return (n[At] - t[At]) * (r[St] - t[St]) - (r[At] - t[At]) * (n[St] - t[St]);
        }, t["isPointInVec2InMatrix"] = function (t, n, r, i, e) {
          var a = "GetCross";
          return this["GetCross"](t, n, e) * this["GetCross"](r, i, e) >= 0 && this["GetCross"](n, r, e) * this["GetCross"](i, t, e) >= 0;
        }, t["CheckIsInRect"] = function (t, n, r) {
          var i,
            e,
            a,
            u,
            o,
            c,
            f = to,
            h = "v2";
          return o = r[At] / 2, a = r[St] / 2, c = s["v2"](n[At] - o, n[St] - a), e = s["v2"](n[At] + o, n[St] - a), u = s["v2"](n[At] - o, n[St] + a), i = s["v2"](n[At] + o, n[St] + a), this["IsPointInRect"](c, e, u, i, t);
        }, t["IsPointInRect"] = function (t, n, r, i, e) {
          var a, u, s, o, c, f, h, v;
          return h = n, o = r, a = i, f = ((u = t)[At] - o[At]) * (e[St] - o[St]) - (u[St] - o[St]) * (e[At] - o[At]), c = (h[At] - u[At]) * (e[St] - u[St]) - (h[St] - u[St]) * (e[At] - u[At]), v = (a[At] - h[At]) * (e[St] - h[St]) - (a[St] - h[St]) * (e[At] - h[At]), s = (o[At] - a[At]) * (e[St] - a[St]) - (o[St] - a[St]) * (e[At] - a[At]), f > 0 && c > 0 && v > 0 && s > 0 || f < 0 && c < 0 && v < 0 && s < 0;
        }, t["isNewDay"] = function (t) {
          var n,
            r = to;
          return t != (n = new Date())["getFullYear"]() + Tt + (n["getMonth"]() + 1) + Tt + n["getDate"]();
        }, t["formatTime"] = function (t) {
          var n,
            r,
            i = to,
            e = ro,
            a = 3600000,
            u = "floor";
          return n = Math["floor"](t / 3600000), r = Math["floor"]((t - 3600000 * n) / 60000), function () {
            var i,
              e = to,
              a = ro,
              u = e[3],
              s = e[5];
            return (i = function () {
              var t,
                n,
                r = to,
                i = r[5],
                e = "hours",
                a = "minutes",
                u = "seconds";
              return Pu(t = {}, "hours", 0), Pu(t, "minutes", 0), Pu(t, "seconds", 0), (n = t)["hours"] = 0, n["minutes"] = 0, n["seconds"] = 0, n;
            }["apply"]())["hours"] = n, i["minutes"] = r, i["seconds"] = Math["floor"]((t - 3600000 * n - 60000 * r) / 1000), i;
          }["apply"]();
        }, t["getTimeString"] = function (t, n, r) {
          var i,
            e,
            a = to,
            u = a[5],
            s = "hours",
            o = "minutes",
            c = "seconds";
          return void 0 === n && (n = [0, 1, 1]), void 0 === r && (r = !1), i = this["formatTime"](t), e = "", 1 == n[0] && 1 == n[1] && 1 == n[2] ? e = (i["hours"] < 10 ? it + i["hours"] : "" + i["hours"]) + (r ? Lt : "") + xt + (i["minutes"] < 10 ? it + i["minutes"] : "" + i["minutes"]) + (r ? It : "") + xt + (i["seconds"] < 10 ? it + i["seconds"] : "" + i["seconds"]) + (r ? Rt : "") : 1 == n[1] && 1 == n[2] ? e = (i["minutes"] < 10 ? it + i["minutes"] : "" + i["minutes"]) + (r ? It : "") + xt + (i["seconds"] < 10 ? it + i["seconds"] : "" + i["seconds"]) + (r ? Rt : "") : 1 == n[0] && 1 == n[2] && (e = (i["hours"] < 10 ? it + i["hours"] : "" + i["hours"]) + (r ? Lt : "") + xt + (i["minutes"] < 10 ? it + i["minutes"] : "" + i["minutes"]) + (r ? It : "")), e;
        }, t["roundNumberToTwoDecimals"] = function (t) {
          var n = 100;
          return Math["round"](100 * t) / 100;
        }, t["getDateTime"] = function (t) {
          var n,
            r,
            i = to,
            e = i[6],
            a = i[8],
            u = "getFullYear",
            s = "getMonth",
            o = "getDate",
            c = "getHours",
            f = "getMinutes",
            h = "getSeconds";
          return void 0 === t && (t = 0), r = new Date(), n = "", 0 == t ? n = r["getFullYear"]() + Et + (r["getMonth"]() + 1) + Et + r["getDate"]() + Dt + r["getHours"]() + xt + r["getMinutes"]() + xt + r["getSeconds"]() : 1 == t ? n = r["getFullYear"]() + Et + (r["getMonth"]() + 1) + Et + r["getDate"]() : 2 == t && (n = r["getHours"]() + xt + r["getMinutes"]() + xt + r["getSeconds"]()), n;
        }, t["intervalDays"] = function (t) {
          var n,
            r,
            i = to,
            e = ro,
            a = i[3],
            u = i[1],
            s = 60;
          return r = Date["parse"](t), n = Date["now"](), Math["abs"](Math["floor"]((n - r) / 1000 / 60 / 60 / 24));
        }, t["computWxPosition"] = function (t, n) {
          var r,
            i,
            e,
            a,
            u = to,
            s = "height",
            c = "width";
          return a = function () {
            var t,
              n = to,
              r = n[3];
            return (t = function () {
              var t,
                n,
                r = to,
                i = "left",
                e = "top",
                a = "width",
                u = "height";
              return Pu(t = {}, "left", 0), Pu(t, "top", 0), Pu(t, "width", 0), Pu(t, "height", 0), (n = t)["left"] = 0, n["top"] = 0, n["width"] = 0, n["height"] = 0, n;
            }["apply"]())["left"] = 0, t["top"] = 0, t["width"] = 0, t["height"] = 0, t;
          }["apply"](), e = t["getBoundingBoxToWorld"](), i = o["getDevicePixelRatio"](), r = o["getScaleX"]() / i, a["left"] = e[At] * r, a["top"] = n["screenHeight"] - (e[St] + e["height"]) * r, a["width"] = e["width"] * r, a["height"] = e["height"] * r, a;
        }, t["lookAt"] = function (t, n) {
          var r,
            i,
            e,
            a,
            u = to,
            o = ro,
            f = u[0],
            h = u[6],
            v = u[3],
            l = "getComponent";
          e = t["parent"]["getComponent"](c)["convertToNodeSpaceAR"](n["getComponent"](c)["convertToWorldSpaceAR"](s["v3"](0, 0, 0))), r = t["position"], i = e["subtract"](r), a = 180 * Math["atan2"](i[St], i[At]) / Math["PI"], t["angle"] = a - 90;
        }, t;
      }())["allRes_"] = [], n["_RF"]["pop"]();
    }, h;
  }["bind"](this)["apply"]();
});