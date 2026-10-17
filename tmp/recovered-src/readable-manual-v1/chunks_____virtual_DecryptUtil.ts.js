(function (t) {
  var n,
    r = to;
  return function () {
    var r,
      i,
      e = to[5],
      a = "setters",
      u = "execute";
    return Pu(r = {}, "setters", 0), Pu(r, "execute", 0), (i = r)["setters"] = [function (t) {
      n = t["cclegacy"];
    }], i["execute"] = function () {
      var r = to,
        i = "_RF";
      n["_RF"]["push"]({}, "846692SKIxGB4ExEMuPKi3+", "DecryptUtil", void 0), t("default", function () {
        var t,
          n = to;
        return (t = function () {})["base64Decode"] = function (t) {
          var n,
            r,
            i = to,
            e = ro,
            a = 64,
            u = "length",
            s = "endsWith",
            o = "indexOf";
          n = kt, r = .75 * t["length"], t["endsWith"]("==") ? r -= 2 : t["endsWith"](mt) && (r -= 1);
          for (var c = new Uint8Array(r), f = 0, h = 0; h < t["length"]; h += 4) {
            var v, l, b, d, k, m, p;
            v = n["indexOf"](t[h]), m = n["indexOf"](t[h + 1]), k = n["indexOf"](t[h + 2]), p = n["indexOf"](t[h + 3]), d = v << 2 | m >> 4, l = (15 & m) << 4 | k >> 2, b = (3 & k) << 6 | p, c[f++] = d, 64 !== k && (c[f++] = l), 64 !== p && (c[f++] = b);
          }
          return c;
        }, t["xorDecrypt"] = function (t, n) {
          for (var r = to, i = "length", e = new Uint8Array(t["length"]), a = 0; a < t["length"]; a++) e[a] = t[a] ^ n["charCodeAt"](a % n["length"]);
          return e;
        }, t["bytesToString"] = function (t) {
          for (var n = to, r = ro, i = n[6], e = "", a = 0; a < t["length"]; a++) e += pt + t[a]["toString"](16)["padStart"](2, it);
          return decodeURIComponent(e);
        }, t["decryptJson"] = function (t) {
          var n,
            r,
            i,
            e = to,
            a = e[10];
          return n = this["base64Decode"](t), i = this["xorDecrypt"](n, "taomumao2025"), r = this["bytesToString"](i), JSON["parse"](r);
        }, t;
      }()), n["_RF"]["pop"]();
    }, i;
  }["bind"](this)["apply"]();
});