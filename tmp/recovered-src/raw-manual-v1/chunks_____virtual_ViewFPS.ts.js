function(t) {
            var n, r, i, e, a, u, s = to;
            return function() {
                var s, o, c = to[5],
                    f = c[1],
                    h = c[2];
                return Pu(s = {}, f, 0), Pu(s, h, 0), (o = s)[f] = [function(t) {
                    n = t[to[11][3]]
                }, function(t) {
                    var n = to;
                    r = t[n[6][4]], i = t[n[8][4]], e = t[n[13][65]], a = t[n[7][5]]
                }, function(t) {
                    u = t[to[5][0]]
                }, null], o[h] = function() {
                    var s, o, c, f = to,
                        h = f[5],
                        v = f[1][2],
                        l = f[5][199];
                    r[v][f[2][1]]({}, f[21][132], l, void 0), s = i[h[7]], i[f[6][9]], t(h[0], s(l)(((c = function(t) {
                        var r, i, a = to,
                            s = a[9],
                            o = a[4];
                        return n(i = function() {
                            for (var n, r, i = to, e = i[4], a = i[3], s = (n = arguments)[e[0]], o = new Array(s), c = 0; c < s; c++) o[c] = n[c];
                            return (r = t[i[2][5]][a[0]](t, [this][e[3]](o)) || this)[i[7][19]] = null, r[i[12][55]] = 0, r[i[5][91]] = 0, r[i[6][70]] = new u, r[i[9][185]] = !1, r[a[90]] = 1, r
                        }, t), i[s[77]] = function() {
                            return i[to[7][19]]
                        }, (r = i[a[7][0]])[o[16]] = function() {
                            i[to[7][19]] = this
                        }, r[a[3][7]] = function() {
                            var t = to;
                            this[t[5][91]] = 0, this[t[12][55]] = Date[t[1][10]]()
                        }, r[o[35]] = function(t) {
                            var n, r = to,
                                i = r[5],
                                e = r[2],
                                a = r[5][91],
                                u = r[6][70];
                            (this[a] += 1, this[a] % ro[51] == 0) && (n = this[e[140]](), this[u][i[109]](n), this[u][e[34]]() > 10 && (this[u][i[128]](), this[r[9][185]] = !0))
                        }, r[a[2][140]] = function() {
                            var t, n = to,
                                r = n[5][91],
                                i = n[1][10],
                                e = n[12][55];
                            return t = Math[n[2][36]](ro[54] * this[r] / (Date[i]() - this[e])), this[e] = Date[i](), this[r] = 0, t
                        }, r[o[167]] = function() {
                            var t, n = to,
                                r = ro[13],
                                i = n[6][70],
                                e = n[2][34];
                            if (t = 0, this[i][e]() > 0) {
                                for (var a = 0; a < this[i][e](); a++) {
                                    var u;
                                    (u = this[i][n[5][195]]()[a]) < r && (u = r), t += u
                                }
                                return Math[n[3][3]](t / this[i][e]())
                            }
                            return 0
                        }, r[a[6][178]] = function() {
                            var t, n, r = to;
                            return t = this[r[4][167]](), (n = Math[r[3][81]](t / ro[13])) < 1 && (n = 1), n > 4 && (n = 4), n
                        }, r[a[17][20]] = function() {
                            var t, n = to,
                                r = ro,
                                i = n[16],
                                a = r[19],
                                u = r[23],
                                s = i[57],
                                o = i[58],
                                c = n[9][186];
                            t = e[n[6][0]], this[n[3][90]] <= 1 ? (t[s] = a, t[o] = a, t[c] = 4) : (t[s] = u, t[o] = u, t[c] = 2)
                        }, r[s[153]] = function() {
                            var t, n = to;
                            t = this[n[6][178]](), this[n[3][90]] = t, this[n[17][20]]()
                        }, r[a[10][145]] = function() {
                            var t, n = to,
                                r = n[3][90];
                            (t = this[n[6][178]]()) > this[r] && (this[r] = t, this[n[17][20]]())
                        }, i
                    }(a))[f[7][19]] = null, o = c)) || o), r[v][f[1][4]]()
                }, o
            }[s[2][3]](this)[s[3][0]]()
        }