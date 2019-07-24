function t() {
    return !0;
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = require("../utils/SystemHelper.js"), i = require("../utils/CommonHelper.js"), o = require("../utils/StringHelper.js"), a = {
    init: function(t, n, e) {
        a.Drawing.init(t), a.ShapeBuilder.init(n), a.UI.init(t, e);
    }
};

a.Drawing = function() {
    var t, n, e = "#ffffff", i = "#ffffff", o = 2 * Math.PI;
    return {
        init: function(e) {
            n = (t = e).getCanvasContext();
        },
        setFontColor: function(t, n) {
            e = t, i = n;
        },
        clearFrame: function() {
            n.clearRect(0, 0, t.width, t.height);
        },
        getArea: function() {
            return {
                w: t.width,
                h: t.height
            };
        },
        drawCircle: function(t, a) {
            n.fillStyle = 2 * Math.random() > 1 ? e : i, n.beginPath(), n.arc(t.x, t.y, t.z, 0, o, !0), 
            n.closePath(), n.fill();
        }
    };
}(), a.UI = function() {
    function t(t) {
        return t && t.split(" ")[1];
    }
    function e(t) {
        return (t = t && t.split(" ")[0]) && t[0] === x && t.substring(1);
    }
    function o() {
        if (m.length > 0) {
            if (v >= m.length) {
                if (!y) return void (v = m.length - 1);
                v = 0;
            }
            console.log("_switchNextShape datalenght:" + m.length + " index:" + v + " " + m[v].dots.length), 
            a.Shape.switchShape(m[v]), v++;
        }
    }
    function s() {
        if (p.length <= 0) return console.log("data_length:" + m.length), M = !1, d && d(!0, c), 
        a.UI.startRenderData(), !1;
        S++;
        var n = p.shift(), o = e(n), l = t(n);
        switch (console.log("nextAction action:" + o + " value:" + l), o) {
          case "countdown":
            i.isEmpty(l) && (l = 3), a.ShapeBuilder.letter(l, function(t) {
                P || i.isEmpty(l) && 0 == t.dots.length || l.length > 0 && t.dots.length > 0 && u != n && !P && t.dots.length != h() || u == n && (t.dots.length == h() || 0 == h()) ? (!P && C ? p.unshift(n) : (S = 0, 
                m.push(t), u = n, null != (l = parseInt(l)) && l > 1 && p.unshift("#countdown " + (l - 1)), 
                u = n), C = !1, setTimeout(s, I)) : (console.error("2:remake shape:[" + n + "] lastCmd:[" + u + "] makeTime:" + S), 
                S > 10 ? r() : (p.unshift(n), setTimeout(s, I)));
            });
            break;

          default:
            var f = i.isEmpty(n) ? "" : n;
            a.ShapeBuilder.letter(f, function(t) {
                P || i.isEmpty(f) && 0 == t.dots.length || f.length > 0 && t.dots.length > 0 && u != n && t.dots.length != h() || u == n && (t.dots.length == h() || 0 == h()) ? (!P && C ? p.unshift(n) : (u = n, 
                S = 0, m.push(t)), C = !1, setTimeout(s, I)) : (console.error("1:remake shape:[" + n + "] lastCmd:[" + u + "] makeTime:" + S), 
                S > 10 ? r() : (p.unshift(n), setTimeout(s, I)));
            });
        }
        return !0;
    }
    function h() {
        return m.length > 0 ? m[m.length - 1].dots.length : 0;
    }
    function r() {
        v = 0, p.splice(0, p.length), m.splice(0, m.length), M = !1, C = !0, S = 0, c = "", 
        d && d(!1, c);
    }
    function l(t) {
        return p = "object" === (void 0 === t ? "undefined" : n(t)) ? t : t.split("|"), 
        v = 0, m.splice(0, m.length), M = !0, C = !0, S = 0, a.Shape.clearDots(), setTimeout(function() {
            p.length > 0 && r();
        }, 3e3 + 500 * p.length), s(), !0;
    }
    var c, u, f, d, g, p = [], m = [], v = 0, w = [], x = "#", y = !0, M = !1, C = !1, S = 0, I = 50, P = !1, z = function(t) {
        setTimeout(t, 50);
    };
    return {
        init: function(t, n) {
            f = t.getCanvasContext(), I = (P = n) ? 0 : 50;
        },
        simulate: function(t, n) {
            return console.log("simulate action:" + t + " cyclePlay:" + y), y = n, c == t ? 0 == p.length ? (v = 0, 
            d && d(!0, c), this.startRenderData(), 1) : (console.log("simulate last cmd data not create complite"), 
            2) : (c = t, l(t), 0);
        },
        loop: function(t) {
            g = g || t, M || (g(), f.draw(), z.call(this, this.loop.bind(this)));
        },
        draw: function() {
            f.draw();
        },
        nextAction: function() {
            return s();
        },
        startRenderData: function() {
            M = !1, this.loop(function() {
                a.Shape.render();
            }), this.switchNextShape();
        },
        switchNextShape: function() {
            return o();
        },
        getInfo: function(t) {
            if (0 == w.length) {
                var n = wx.getStorageSync("barrageInfo");
                w = n.split("=");
            }
            return parseInt(w[t].charAt(0));
        },
        setMakeDataCallback: function(t) {
            d = t;
        }
    };
}(), a.Point = function(t) {
    this.x = t.x, this.y = t.y, this.z = t.z, this.a = t.a, this.h = t.h;
}, a.Color = function(t, n, e, i) {
    this.r = t, this.g = n, this.b = e, this.a = i;
}, a.Color.prototype = {
    render: function() {
        return "rgba(" + this.r + "," + +this.g + "," + this.b + "," + this.a + ")";
    }
}, a.Dot = function(t, n) {
    this.p = new a.Point({
        x: t,
        y: n,
        z: 5,
        a: 1,
        h: 0
    }), this.e = .07, this.s = !0, this.c = new a.Color(0, 255, 255, this.p.a), this.t = this.clone(), 
    this.q = [], this.moveComplite = !1;
}, a.Dot.prototype = {
    clone: function() {
        return new a.Point({
            x: this.x,
            y: this.y,
            z: this.z,
            a: this.a,
            h: this.h
        });
    },
    _draw: function() {
        this.c.a = this.p.a, a.Drawing.drawCircle(this.p, this.c);
    },
    _moveTowards: function(t) {
        var n = this.distanceTo(t, !0), e = n[0], i = n[1], o = n[2], a = this.e * o;
        if (-1 === this.p.h) return this.p.x = t.x, this.p.y = t.y, !0;
        if (o > 1) this.p.x -= e / o * a, this.p.y -= i / o * a; else {
            if (!(this.p.h > 0)) return !0;
            this.p.h--;
        }
        return !1;
    },
    _update: function() {
        if (this._moveTowards(this.t)) {
            var t = this.q.shift();
            t ? (this.t.x = t.x || this.p.x, this.t.y = t.y || this.p.y, this.t.z = t.z || this.p.z, 
            this.t.a = t.a || this.p.a, this.p.h = t.h || 0) : (this.moveComplite = !0, this.s ? (this.p.x -= Math.sin(3.142 * Math.random()), 
            this.p.y -= Math.sin(3.142 * Math.random())) : this.move(new a.Point({
                x: this.p.x + 50 * Math.random() - 25,
                y: this.p.y + 50 * Math.random() - 25
            })));
        }
        var n = this.p.a - this.t.a;
        this.p.a = Math.max(.1, this.p.a - .05 * n), n = this.p.z - this.t.z, this.s && 0 == this.q.length ? this.p.z = this.t.z : this.p.z = Math.max(1, this.p.z - .05 * n);
    },
    distanceTo: function(t, n) {
        var e = this.p.x - t.x, i = this.p.y - t.y, o = Math.sqrt(e * e + i * i);
        return n ? [ e, i, o ] : o;
    },
    move: function(t, n) {
        (!n || n && this.distanceTo(t) > 1) && this.q.push(t);
    },
    removeLastPoint: function() {
        if (this.q.length > 2) {
            var t = this.q.shift();
            null != t && (this.q = [], this.q.push(t));
        }
    },
    render: function() {
        this._update(), this._draw();
    },
    renderDirect: function() {
        this._draw();
    }
}, a.ShapeBuilder = function() {
    function t() {
        h.fillStyle = "" + f, h.textBaseline = "middle", h.textAlign = "center", h.translate(r, 0), 
        h.rotate(90 * Math.PI / 180), console.log("fit fontColor:" + f);
    }
    function n(t, n) {
        wx.canvasGetImageData({
            canvasId: s.id,
            x: 0,
            y: 0,
            width: r,
            height: l,
            success: function(e) {
                console.log("canvasGetImageData:" + e.data.length);
                for (var i = [], o = e.data, s = 0, h = 0, l = e.width, u = e.height, f = 0, d = 0, g = a.UI.getInfo(1), p = a.UI.getInfo(3), m = 0; m < o.length; m += p * c) o[m + g] > 0 && (i.push(new a.Point({
                    x: s,
                    y: h
                })), f = s > f ? s : f, d = h > d ? h : d, l = s < l ? s : l, u = h < u ? h : u), 
                (s += c) >= r && (s = 0, h += c, m += c * p * r);
                console.log("processCanvas.....end length:" + i.length), n({
                    dots: i,
                    w: f + l,
                    h: d + u,
                    action: t
                });
            }
        }), console.log("processCanvas.....");
    }
    function e(t) {
        h.font = "normal bold " + Math.floor(t) + "px " + d, console.log("setFontSize:" + h.font);
    }
    function i(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
    }
    function o(t, n) {
        h = n, r = (s = t).width, l = s.height, r = Math.floor(r / c) * c, l = Math.floor(l / c) * c;
    }
    var s, h, r, l, c = 10, u = 150, f = "#ff0000", d = "sans-serif";
    return {
        init: function(t) {
            o(t, t.getCanvasContext());
        },
        setFontColor: function(t) {
            f = t;
        },
        circle: function(t, e) {
            var i = Math.max(0, t) / 2;
            return h.clearRect(0, 0, r, l), h.beginPath(), h.arc(i * c, i * c, i * c, 0, 2 * Math.PI, !1), 
            h.fill(), h.closePath(), h.draw(), n("circle", e);
        },
        letter: function(o, a) {
            console.log("builder shape letter:[" + o + "]");
            t();
            var s = l, c = r;
            return u = Math.min(s / o.length - 20, i(o) ? 3 * c / 4 : 1 * c / 2), e(u), h.clearRect(0, 0, s, c), 
            h.fillText(o, s / 2, c / 2), h.draw(), n(o, a);
        },
        rectangle: function(t, n) {
            for (var e = [], i = c * t, o = c * n, s = 0; s < o; s += c) for (var h = 0; h < i; h += c) e.push(new a.Point({
                x: h,
                y: s
            }));
            return {
                dots: e,
                w: i,
                h: o
            };
        }
    };
}(), a.Shape = function() {
    function t() {
        var t = a.Drawing.getArea();
        o = t.w / 2 - e / 2, s = t.h / 2 - i / 2;
    }
    var n = [], e = 0, i = 0, o = 0, s = 0, h = !1, r = 0;
    return {
        init: function() {},
        getLastStaticNum: function() {
            return r;
        },
        shuffleIdle: function() {
            for (var t = a.Drawing.getArea(), e = 0; e < n.length; e++) n[e].s || n[e].move({
                x: Math.random() * t.w,
                y: Math.random() * t.h
            });
        },
        clearDots: function() {
            n.splice(0, n.length);
        },
        switchShape: function(l, c) {
            var u, f = a.Drawing.getArea();
            e = l.w, i = l.h, t();
            var d = 0 == n.length;
            if (l.dots.length > n.length) {
                u = l.dots.length - n.length + 50;
                for (v = 1; v <= u; v++) {
                    var g = Math.random() * (2 * Math.random() > 1 ? 30 : -30), p = Math.random() * (2 * Math.random() > 1 ? 30 : -30), m = new a.Dot(f.w / 2 + g, f.h / 2 + p);
                    m.p.z = 20 * Math.random(), n.push(m);
                }
                console.log("add dots....... " + u);
            }
            var v = 0, w = 0;
            r = l.dots.length, console.log("switchShape action:[" + l.action + "] staticNum:" + r);
            for (var x = l.dots; x.length > 0; ) w = Math.floor(Math.random() * x.length), n[v].e = c ? .6 : (n[v].s, 
            .5), n[v].s ? n[v].move(new a.Point({
                z: 5 * Math.random() + 3,
                a: Math.random(),
                h: 2
            })) : n[v].move(new a.Point({
                z: 5 * Math.random(),
                h: 2
            })), d && (n[v].e = .6), n[v].s = !0, n[v].move(new a.Point({
                x: x[w].x + o,
                y: x[w].y + s,
                a: 1,
                z: 5 * Math.random() + 2,
                h: 0
            })), n[v].moveComplite = !1, x = x.slice(0, w).concat(x.slice(w + 1)), v++;
            for (w = v; w < n.length; w++) n[w].s && (n[w].move(new a.Point({
                z: 5 * Math.random() + 5,
                a: Math.random(),
                h: 2
            })), n[w].s = !1, n[w].e = .08, n[w].move(new a.Point({
                x: Math.random() * f.w,
                y: Math.random() * f.h,
                a: .3,
                z: 3 * Math.random(),
                h: 2
            })), n[w].moveComplite = !1);
            h = !1;
        },
        isTriggerNext: function() {
            return h;
        },
        render: function() {
            for (var t = 0, e = 0; e < n.length; e++) n[e].render(), !h && n[e].s && n[e].moveComplite && ++t >= r && (h = !0, 
            console.log("d:" + e + " s:" + n[e].s + " moveCompleteNum:" + t), setTimeout(function() {
                a.UI.switchNextShape();
            }, 300));
        }
    };
}();

module.exports = {
    Canvas: function(t, n, e) {
        this.id = t, this.width = n, this.height = e, this.context = null, this.getCanvasContext = function() {
            return null == this.context && (this.context = wx.createCanvasContext(this.id)), 
            this.context;
        };
    },
    ParticeLogic: function(t) {
        this.canvasForShow, this.canvasForBuildShape, this.isIos = t, this.setCanvas = function(t, n) {
            this.canvasForShow = t, this.canvasForBuildShape = n, a.init(this.canvasForShow, this.canvasForBuildShape, this.isIos);
        }, this.setFontColor = function(t, n) {
            a.Drawing.setFontColor(t, n);
        }, this.setBgColor = function(t) {
            a.ShapeBuilder.setFontColor(t);
        }, this.setMakeParticeDataCallback = function(t) {
            a.UI.setMakeDataCallback(t);
        }, this.start = function(t) {
            var n = !1;
            if (!i.isNull(t) && (n = 2 == t.getPlayMode(), !i.isEmpty(t.getText()))) {
                s = o.Trim(t.getText()), 1 == t.getPlayMode() && (s += " ");
                var e = s.replace(/\s/g, "|");
                return console.log("start text:[" + s + "] action:[" + e + "] mode:" + t.getPlayMode()), 
                a.UI.simulate(e, n);
            }
            var s = "3|2|1";
            return n || (s += "|"), a.UI.simulate(s, n);
        };
    },
    isHorizontalMode: t,
    checkClientIsSurpport: function() {
        return wx.canIUse("canvasGetImageData") && e.curVersionBiggerThan("1.9.9");
    }
};