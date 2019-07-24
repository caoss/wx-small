var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
    return typeof r;
} : function(r) {
    return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
}, t = require("./mobx"), e = t.autorun, o = (t.observable, t.action, t.isObservable), n = t.isObservableArray, i = t.isObservableObject, u = t.isObservableValue, a = t.isObservableMap, f = function(r, t) {
    Object.getOwnPropertyNames(t).forEach(function(e) {
        if ("$mobx" !== e) {
            var o = Object.getOwnPropertyDescriptor(t, e);
            !o || o.enumerable || o.writable || (r[e] = l(t[e]));
        }
    });
}, l = function t(e, l, s) {
    function b(r) {
        return l && s.push([ e, r ]), r;
    }
    if (void 0 === l && (l = !0), void 0 === s && (s = []), o(e)) {
        if (l && null === s && (s = []), l && null !== e && "object" === (void 0 === e ? "undefined" : r(e))) for (var c = 0, p = s.length; c < p; c++) if (s[c][0] === e) return s[c][1];
        if (n(e)) {
            var v = b([]), y = e.map(function(r) {
                return t(r, l, s);
            });
            v.length = y.length;
            for (var c = 0, p = y.length; c < p; c++) v[c] = y[c];
            return v;
        }
        if (i(e)) {
            v = b({});
            for (var d in e) v[d] = t(e[d], l, s);
            return f(v, e), v;
        }
        if (a(e)) {
            var h = b({});
            return e.forEach(function(r, e) {
                return h[e] = t(r, l, s);
            }), h;
        }
        if (u(e)) return t(e.get(), l, s);
    }
    if ("[object Array]" === Object.prototype.toString.call(e)) return e.map(function(r) {
        return t(r);
    });
    if (null !== e && "object" === (void 0 === e ? "undefined" : r(e))) {
        v = {};
        for (var d in e) v[d] = t(e[d]);
        return v;
    }
    return e;
};

module.exports = {
    observer: function(r) {
        var o = r.onLoad, n = r.onUnload;
        return r._update = function() {
            var r = this.props || {};
            this.setData({
                props: l(r)
            });
        }, r.onLoad = function() {
            var r = this;
            r.props = t.observable(r.props), r._autorun = e(function() {
                r._update();
            }), o && o.apply(this, arguments);
        }, r.onUnload = function() {
            this._autorun(), n && n.apply(this, arguments);
        }, r;
    },
    toJSWithGetter: l,
    version: "0.1.3"
};