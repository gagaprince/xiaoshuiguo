(function (t) {
  var inheritsLoose, cclegacy, _decorator, PhysicsSystem2D, Component, RTQueue;
  return function () {
    var s, o;
    return Pu(s = {}, "setters", 0), Pu(s, "execute", 0), (o = s).setters = [function (t) {
      inheritsLoose = t["inheritsLoose"];
    }, function (t) {
      cclegacy = t["cclegacy"], _decorator = t["_decorator"], PhysicsSystem2D = t["PhysicsSystem2D"], Component = t["Component"];
    }, function (t) {
      RTQueue = t["default"];
    }, null], o.execute = function () {
      var s, o, c;
      cclegacy._RF["push"]({}, "d3e05fdK21M8Zf5/QI2/jKz", "ViewFPS", void 0), s = _decorator["ccclass"], _decorator["property"], t("default", s("ViewFPS")(((c = function (t) {
        var r, i;
        return inheritsLoose(i = function () {
          for (var n, r, s = (n = arguments)["length"], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
          return (r = t["call"]["apply"](t, [this]["concat"](o)) || this)["_instance"] = null, r["startCounterDt"] = 0, r["counter"] = 0, r["fpsQueue"] = new RTQueue(), r["isSampleFPS"] = !1, r["fpslv"] = 1, r;
        }, t), i["getInstance"] = function () {
          return i["_instance"];
        }, (r = i["prototype"])["onLoad"] = function () {
          i["_instance"] = this;
        }, r["start"] = function () {
          this["counter"] = 0, this["startCounterDt"] = Date["now"]();
        }, r["update"] = function (t) {
          var n;
          (this.counter += 1, this.counter % 60 == 0) && (n = this["snap"](), this.fpsQueue["enqueue"](n), this.fpsQueue["size"]() > 10 && (this.fpsQueue["dequeue"](), this["isSampleFPS"] = !0));
        }, r["snap"] = function () {
          var t;
          return t = Math["ceil"](1000 * this.counter / (Date.now() - this.startCounterDt)), this.startCounterDt = Date.now(), this.counter = 0, t;
        }, r["getFPS"] = function () {
          var t;
          if (t = 0, this.fpsQueue.size() > 0) {
            for (var a = 0; a < this.fpsQueue.size(); a++) {
              var u;
              (u = this.fpsQueue["toarray"]()[a]) < 30 && (u = 30), t += u;
            }
            return Math["floor"](t / this.fpsQueue.size());
          }
          return 0;
        }, r["getFpsLv"] = function () {
          var t, n;
          return t = this["getFPS"](), (n = Math["round"](t / 30)) < 1 && (n = 1), n > 4 && (n = 4), n;
        }, r["modifyPhysicSetting"] = function () {
          var t;
          t = PhysicsSystem2D["instance"], this["fpslv"] <= 1 ? (t.velocityIterations = 20, t.positionIterations = 20, t.maxSubSteps = 4) : (t.velocityIterations = 15, t.positionIterations = 15, t.maxSubSteps = 2);
        }, r["checkLowFps"] = function () {
          var t;
          t = this["getFpsLv"](), this["fpslv"] = t, this["modifyPhysicSetting"]();
        }, r["checkHighFps"] = function () {
          var t;
          (t = this["getFpsLv"]()) > this.fpslv && (this.fpslv = t, this["modifyPhysicSetting"]());
        }, i;
      }(Component))["_instance"] = null, o = c)) || o), cclegacy._RF["pop"]();
    }, o;
  }["bind"](this)["apply"]();
});