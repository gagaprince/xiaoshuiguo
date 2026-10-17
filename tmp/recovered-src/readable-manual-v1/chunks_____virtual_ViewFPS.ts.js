(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s = to;
  return function () {
    var s,
      o,
      c = to[5],
      f = "setters",
      h = "execute";
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s)["setters"] = [function (t) {
      n = t["inheritsLoose"];
    }, function (t) {
      var n = to;
      r = t["cclegacy"], i = t["_decorator"], e = t["PhysicsSystem2D"], a = t["Component"];
    }, function (t) {
      u = t["default"];
    }, null], o["execute"] = function () {
      var s,
        o,
        c,
        f = to,
        h = f[5],
        v = "_RF",
        l = "ViewFPS";
      r["_RF"]["push"]({}, "d3e05fdK21M8Zf5/QI2/jKz", "ViewFPS", void 0), s = i["ccclass"], i["property"], t("default", s("ViewFPS")(((c = function (t) {
        var r,
          i,
          a = to,
          s = a[9],
          o = a[4];
        return n(i = function () {
          for (var n, r, i = to, e = i[4], a = i[3], s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["_instance"] = null, r["startCounterDt"] = 0, r["counter"] = 0, r["fpsQueue"] = new u(), r["isSampleFPS"] = !1, r["fpslv"] = 1, r;
        }, t), i["getInstance"] = function () {
          return i["_instance"];
        }, (r = i["prototype"])["onLoad"] = function () {
          i["_instance"] = this;
        }, r["start"] = function () {
          var t = to;
          this["counter"] = 0, this["startCounterDt"] = Date["now"]();
        }, r["update"] = function (t) {
          var n,
            r = to,
            i = r[5],
            e = r[2],
            a = "counter",
            u = "fpsQueue";
          (this["counter"] += 1, this["counter"] % 60 == 0) && (n = this["snap"](), this["fpsQueue"]["enqueue"](n), this["fpsQueue"]["size"]() > 10 && (this["fpsQueue"]["dequeue"](), this["isSampleFPS"] = !0));
        }, r["snap"] = function () {
          var t,
            n = to,
            r = "counter",
            i = "now",
            e = "startCounterDt";
          return t = Math["ceil"](1000 * this["counter"] / (Date["now"]() - this["startCounterDt"])), this["startCounterDt"] = Date["now"](), this["counter"] = 0, t;
        }, r["getFPS"] = function () {
          var t,
            n = to,
            r = 30,
            i = "fpsQueue",
            e = "size";
          if (t = 0, this["fpsQueue"]["size"]() > 0) {
            for (var a = 0; a < this["fpsQueue"]["size"](); a++) {
              var u;
              (u = this["fpsQueue"]["toarray"]()[a]) < 30 && (u = 30), t += u;
            }
            return Math["floor"](t / this["fpsQueue"]["size"]());
          }
          return 0;
        }, r["getFpsLv"] = function () {
          var t,
            n,
            r = to;
          return t = this["getFPS"](), (n = Math["round"](t / 30)) < 1 && (n = 1), n > 4 && (n = 4), n;
        }, r["modifyPhysicSetting"] = function () {
          var t,
            n = to,
            r = ro,
            i = n[16],
            a = 20,
            u = 15,
            s = "velocityIterations",
            o = "positionIterations",
            c = "maxSubSteps";
          t = e["instance"], this["fpslv"] <= 1 ? (t["velocityIterations"] = 20, t["positionIterations"] = 20, t["maxSubSteps"] = 4) : (t["velocityIterations"] = 15, t["positionIterations"] = 15, t["maxSubSteps"] = 2);
        }, r["checkLowFps"] = function () {
          var t,
            n = to;
          t = this["getFpsLv"](), this["fpslv"] = t, this["modifyPhysicSetting"]();
        }, r["checkHighFps"] = function () {
          var t,
            n = to,
            r = "fpslv";
          (t = this["getFpsLv"]()) > this["fpslv"] && (this["fpslv"] = t, this["modifyPhysicSetting"]());
        }, i;
      }(a))["_instance"] = null, o = c)) || o), r["_RF"]["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});