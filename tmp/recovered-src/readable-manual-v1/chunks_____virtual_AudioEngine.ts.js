(function (t) {
  var n,
    r,
    i,
    e,
    a,
    u,
    s,
    o,
    c = to;
  return function () {
    var c,
      f,
      h = to[5],
      v = "setters",
      l = "execute";
    return Pu(c = {}, "setters", 0), Pu(c, "execute", 0), (f = c)["setters"] = [function (t) {
      n = t["createClass"];
    }, function (t) {
      var n = to,
        o = n[6],
        c = n[7];
      r = t["cclegacy"], i = t["Node"], e = t["director"], a = t["AudioSource"], u = t["AudioClip"], s = t["resources"];
    }, function (t) {
      o = t["default"];
    }, null], f["execute"] = function () {
      var c = to,
        f = "_RF";
      r["_RF"]["push"]({}, "941204WFQNPVI53n5mYMzOj", "AudioEngine", void 0), t("default", function () {
        var t,
          r,
          c = to,
          f = c[2],
          h = c[3];
        return (t = (r = function (t, n) {
          var r = to,
            i = r[10],
            e = "_maxAudioNum",
            a = "group";
          this["_audioSource"] = void 0, this["_audiosQueue"] = new o(), this["_maxAudioNum"] = 5, this["group"] = 0, this["group"] = t, this["_maxAudioNum"] = n;
        })["prototype"])["newAudioSource"] = function () {
          var t,
            n = to,
            r = n[10],
            u = n[6];
          return (t = new i())["name"] = "__audioMgr__" + this["group"], e["getScene"]()["addChild"](t), e["addPersistRootNode"](t), t["addComponent"](a);
        }, t["playOneShot"] = function (t, n) {
          var r,
            i = to,
            e = i[2],
            a = i[10],
            o = "_audiosQueue",
            c = "_audioSource",
            f = "enqueue";
          r = this, void 0 === n && (n = 1), this["_audiosQueue"]["size"]() < this["_maxAudioNum"] ? (this["_audioSource"] = this["newAudioSource"](), this["_audiosQueue"]["enqueue"](this["_audioSource"])) : this["_audioSource"] = this["_audiosQueue"]["dequeue"](), t instanceof u ? (this["_audioSource"]["playOneShot"](t, n), this["_audiosQueue"]["enqueue"](this["_audioSource"])) : s["load"](t, function (t, i) {
            var e = to;
            t || r["_audioSource"]["playOneShot"](i, n);
          });
        }, t["play"] = function (t, n, r) {
          var i,
            e = to,
            a = e[2],
            o = "_audioSource",
            c = "audioSource";
          i = this, void 0 === n && (n = 1), void 0 === r && (r = !0), this["_audioSource"] || (this["_audioSource"] = this["newAudioSource"]()), t instanceof u ? (this["_audioSource"]["stop"](), this["_audioSource"]["clip"] = t, this["_audioSource"]["play"](), this["audioSource"]["volume"] = n, this["audioSource"]["loop"] = r) : s["load"](t, function (t, r) {
            var e = to,
              a = e[2],
              u = "_audioSource";
            t || (i["_audioSource"]["stop"](), i["_audioSource"]["clip"] = r, i["_audioSource"]["play"](), i["audioSource"]["volume"] = n);
          });
        }, t["stop"] = function () {
          var t = to;
          this["_audioSource"]["stop"]();
        }, t["pause"] = function () {
          var t = to;
          this["_audioSource"]["pause"]();
        }, t["resume"] = function () {
          var t = to;
          this["_audioSource"]["play"]();
        }, n(r, [function () {
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
          }["apply"]())["key"] = "audioSource", t["get"] = function () {
            return this["_audioSource"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }()), r["_RF"]["pop"]();
    }, f;
  }["bind"](this)["apply"]();
});