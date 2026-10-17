function(t) {
        var n, r, i, e, a = to;
        return function() {
            var a, u, s = to[5],
                o = s[1],
                c = s[2];
            return Pu(a = {}, o, 0), Pu(a, c, 0), (u = a)[o] = [function(t) {
                n = t[to[9][18]]
            }, function(t) {
                var n = to;
                r = t[n[6][4]], i = t[n[2][18]]
            }, function(t) {
                e = t[to[5][0]]
            }], u[c] = function() {
                var a, u = to,
                    s = u[5],
                    o = u[1][2];
                r[o][u[2][1]]({}, u[21][84], u[9][220], void 0), a = t(s[252], (function(t, n, r, i) {
                    var e = to,
                        a = e[1],
                        u = e[2],
                        s = a[131],
                        o = a[132],
                        c = u[7],
                        f = u[89],
                        h = e[6][1],
                        v = e[3][36];
                    void 0 === i && (i = null), this[s] = void 0, this[o] = void 0, this[c] = void 0, this[f] = void 0, this[e[0][8]] = void 0, this[h] = void 0, this[v] = void 0, i || (i = []), this[s] = t, this[o] = n, this[h] = r, this[f] = !1, this[c] = i, this[v] = null
                })), t(s[0], function() {
                    var t, r, u = to,
                        s = u[7],
                        o = u[6];
                    return (t = (r = function() {
                        this[to[2][55]] = []
                    })[s[0]])[o[213]] = function(t, n, r, e, a, u) {
                        var s = to,
                            o = s[2],
                            c = o[55],
                            f = s[0][1],
                            h = o[1];
                        void 0 === u && (u = 0), this[c] = [];
                        for (var v = 0; v < n; v++) {
                            var l, b;
                            b = [], l = t, v % 2 == 0 && (l = t - 1);
                            for (var d = i[f](-(l - 1) / 2 * (e + r), u + v * (a + r)), k = 0; k < l; k++) {
                                var m, p;
                                m = i[f](d[At] + k * (e + r), d[St]), p = this[s[8][76]](v, k, m), b[h](p)
                            }
                            this[c][h](b)
                        }
                    }, t[s[223]] = function(t, n, r, a, u, s) {
                        var o = to,
                            c = o[2],
                            f = c[55],
                            h = o[0][1],
                            v = c[1];
                        void 0 === s && (s = 0), this[f] = [];
                        for (var l = 0, b = !1, d = 0; d < n; d++) {
                            var k, m, p;
                            k = [], p = t, m = a * l / 2, b ? l-- : l++, 4 === l ? b = !0 : 0 === l && (b = !1);
                            for (var g = i[h](a / 2 - (e[o[2][4]][o[7][7]] - 5) + m, s + d * (u + r)), y = 0; y < p; y++) {
                                var w, _;
                                w = i[h](g[At] + y * (a + r), g[St]), _ = this[o[8][76]](d, y, w), k[v](_)
                            }
                            this[f][v](k)
                        }
                    }, t[s[224]] = function(t, n, r, e, a, u) {
                        var s = to,
                            o = s[2],
                            c = o[55],
                            f = s[0][1],
                            h = o[1];
                        void 0 === u && (u = 0), this[c] = [];
                        for (var v = 0, l = 7, b = 1, d = 0, k = i[f](0, 0), m = 0; m < n; m++) {
                            var p;
                            p = [], 0 === v && b++, 6 === l && d++, k = i[f](-((m % 2 != 0 ? t - 1 : t) - 1) / 2 * (e + r), u + m * (a + r));
                            for (var g = v; g < l; g++) {
                                var y, w;
                                w = i[f](k[At] + g * (e + r), k[St]), y = this[s[8][76]](m, g, w), p[h](y)
                            }
                            this[c][h](p), 1 === v && (v = 0), 3 === b && (v = 1, b = 0), 7 === l && (l = 6), 3 === d && (l = 7, d = 0)
                        }
                    }, t[s[225]] = function(t, n, r, a, u, s) {
                        var o = to,
                            c = o[2],
                            f = c[55],
                            h = c[4],
                            v = o[7][2],
                            l = o[0][1],
                            b = c[1];
                        void 0 === s && (s = 0), this[f] = [];
                        for (var d = t, k = 0; k < n; k++) {
                            var m;
                            m = [], d = 0 === k ? t : k % 2 != 0 ? t - 1 - 2 * e[h][v](0, 1) : t - 2 * e[h][v](0, 2);
                            for (var p = i[l](-(d - 1) / 2 * (a + r), s + k * (u + r)), g = 0; g < d; g++) {
                                var y, w;
                                y = i[l](p[At] + g * (a + r), p[St]), w = this[o[8][76]](k, g, y), m[b](w)
                            }
                            this[f][b](m)
                        }
                    }, t[o[214]] = function() {
                        return this[to[2][55]]
                    }, t[u[8][76]] = function(t, n, r) {
                        return new a(t, n, r)
                    }, n(r, null, [function() {
                        var t, n = to,
                            i = n[1];
                        return (t = function() {
                            var t, n, r = to[1],
                                i = r[1],
                                e = r[3];
                            return Pu(t = {}, i, 0), Pu(t, e, 0), (n = t)[i] = 0, n[e] = 0, n
                        }[n[3][0]]())[i[1]] = n[2][4], t[i[3]] = function() {
                            var t = to[3][50];
                            return this[t] || (this[t] = new r), this[t]
                        }, t
                    }[u[2][3]](this)[u[3][0]]()]), r
                }())[u[3][50]] = null, r[o][u[1][4]]()
            }, u
        }[a[2][3]](this)[a[3][0]]()
    }