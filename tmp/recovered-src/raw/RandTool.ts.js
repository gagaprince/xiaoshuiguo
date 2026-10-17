function(t) {
        var n, r, i, e, a = to;
        return function() {
            var a, u, s = to[5],
                o = s[1],
                c = s[2];
            return Pu(a = {}, o, 0), Pu(a, c, 0), (u = a)[o] = [function(t) {
                n = t[to[28][0]]
            }, function(t) {
                var n = to;
                r = t[n[6][4]], i = t[n[3][13]]
            }, function(t) {
                e = t[to[5][0]]
            }], u[c] = function() {
                var a = to,
                    u = a[1][2];
                r[u][a[2][1]]({}, a[21][112], a[6][293], void 0), t(a[5][0], function() {
                    var t, r = to,
                        a = r[12];
                    return (t = function() {})[r[8][261]] = function(t, n) {
                        var r = to;
                        return Math[r[3][3]](Math[r[4][7]]() * (n - t - 1)) + t + 1
                    }, t[a[80]] = function(t, n) {
                        var r = to;
                        return Math[r[3][3]](Math[r[4][7]]() * (n - t)) + t
                    }, t[a[155]] = function(t, n) {
                        var r = to;
                        return Math[r[3][3]](Math[r[4][7]]() * (n - t)) + t + 1
                    }, t[a[11]] = function(t, n) {
                        var r = to;
                        return Math[r[3][3]](Math[r[4][7]]() * (n - t + 1)) + t
                    }, t[r[13][109]] = function() {
                        return 0 == t[to[12][11]](0, 1) ? -1 : 1
                    }, t[r[19][16]] = function() {
                        return 0 !== t[to[12][11]](0, 1)
                    }, t[r[7][232]] = function(t) {
                        var n = to;
                        return !!(t && t[n[4][0]] > 0) && (t[n[2][23]]((function() {
                            return .5 - Math[to[4][7]]()
                        })), !0)
                    }, t[r[10][224]] = function(n) {
                        var r, e, a, u = to,
                            s = ro[66],
                            o = u[12][11];
                        return void 0 === n && (n = s), r = t[o](0, s), a = t[o](0, s), e = t[o](0, s), i(r, a, e, n)
                    }, t[r[15][77]] = function(n) {
                        var r = to,
                            i = r[4][0];
                        return null == n || n[i] <= 0 ? -1 : 0 === n[i] ? 0 : t[r[12][80]](0, n[i])
                    }, t[r[16][75]] = function(r, i) {
                        var e = to,
                            a = e[2][1];
                        if (r[e[4][0]] <= i) return r;
                        for (var u, s = [], o = n(r); !(u = o())[e[2][20]];) {
                            var c;
                            c = u[e[3][2]], s[a](c)
                        }
                        t[e[7][232]](s);
                        for (var f = [], h = 0; h < i; h++) f[a](s[h]);
                        return f
                    }, t[r[14][82]] = function(r) {
                        var i = to,
                            a = i[3],
                            u = i[1],
                            o = i[4][0],
                            c = u[55],
                            f = u[56],
                            h = i[3][114];
                        if (null === r) return -1;
                        if (r[o] <= 0) return -1;
                        for (var v = 0, l = new e, b = 0; b < r[o]; b++) {
                            var d;
                            (d = new s)[c] = v, v = r[b][a[113]] + v, d[f] = v, d[h] = b, l[i[1][15]](d)
                        }
                        for (var k, m = t[i[12][80]](0, v), p = n(l); !(k = p())[i[2][20]];) {
                            var g;
                            if (m >= (g = k[a[2]])[c] && m < g[f]) return g[h]
                        }
                        return -1
                    }, t
                }()), t(a[12][156], (function(t, n) {
                    var r = to,
                        i = r[1][135],
                        e = r[3][113];
                    this[i] = void 0, this[e] = void 0, this[i] = t, this[e] = n
                }));
                var s = t(a[10][225], (function() {
                    var t = to,
                        n = t[1];
                    this[n[55]] = void 0, this[n[56]] = void 0, this[t[3][114]] = void 0
                }));
                r[u][a[1][4]]()
            }, u
        }[a[2][3]](this)[a[3][0]]()
    }