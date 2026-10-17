(function (t) {
  var createClass, cclegacy, Node, director, AudioSource, AudioClip, resources, RTQueue;
  return function () {
    var c, f;
    return Pu(c = {}, "setters", 0), Pu(c, "execute", 0), (f = c).setters = [function (t) {
      createClass = t["createClass"];
    }, function (t) {
      cclegacy = t["cclegacy"], Node = t["Node"], director = t["director"], AudioSource = t["AudioSource"], AudioClip = t["AudioClip"], resources = t["resources"];
    }, function (t) {
      RTQueue = t["default"];
    }, null], f.execute = function () {
      cclegacy._RF["push"]({}, "941204WFQNPVI53n5mYMzOj", "AudioEngine", void 0), t("default", function () {
        var t, r;
        return (t = (r = function (t, n) {
          this["_audioSource"] = void 0, this["_audiosQueue"] = new RTQueue(), this._maxAudioNum = 5, this.group = 0, this.group = t, this._maxAudioNum = n;
        })["prototype"])["newAudioSource"] = function () {
          var t;
          return (t = new Node())["name"] = "__audioMgr__" + this["group"], director["getScene"]()["addChild"](t), director["addPersistRootNode"](t), t["addComponent"](AudioSource);
        }, t["playOneShot"] = function (t, n) {
          var r;
          r = this, void 0 === n && (n = 1), this._audiosQueue["size"]() < this["_maxAudioNum"] ? (this._audioSource = this["newAudioSource"](), this._audiosQueue.enqueue(this._audioSource)) : this._audioSource = this._audiosQueue["dequeue"](), t instanceof AudioClip ? (this._audioSource["playOneShot"](t, n), this._audiosQueue.enqueue(this._audioSource)) : resources["load"](t, function (t, i) {
            t || r["_audioSource"]["playOneShot"](i, n);
          });
        }, t["play"] = function (t, n, r) {
          var i;
          i = this, void 0 === n && (n = 1), void 0 === r && (r = !0), this._audioSource || (this._audioSource = this["newAudioSource"]()), t instanceof AudioClip ? (this._audioSource["stop"](), this._audioSource["clip"] = t, this._audioSource["play"](), this.audioSource["volume"] = n, this.audioSource["loop"] = r) : resources["load"](t, function (t, r) {
            t || (i._audioSource["stop"](), i._audioSource["clip"] = r, i._audioSource["play"](), i["audioSource"]["volume"] = n);
          });
        }, t["stop"] = function () {
          this["_audioSource"]["stop"]();
        }, t["pause"] = function () {
          this["_audioSource"]["pause"]();
        }, t["resume"] = function () {
          this["_audioSource"]["play"]();
        }, createClass(r, [function () {
          var t;
          return (t = function () {
            var t, n;
            return Pu(t = {}, "key", 0), Pu(t, "get", 0), (n = t).key = 0, n.get = 0, n;
          }["apply"]())["key"] = "audioSource", t["get"] = function () {
            return this["_audioSource"];
          }, t;
        }["bind"](this)["apply"]()]), r;
      }()), cclegacy._RF["pop"]();
    }, f;
  }["bind"](this)["apply"]();
});