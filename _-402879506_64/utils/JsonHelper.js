function r(r) {
    var t = Object.create(null), e = !0, o = !1, i = void 0;
    try {
        for (var a, u = r[Symbol.iterator](); !(e = (a = u.next()).done); e = !0) {
            var l = n(a.value, 2), s = l[0], f = l[1];
            t[s] = f;
        }
    } catch (r) {
        o = !0, i = r;
    } finally {
        try {
            !e && u.return && u.return();
        } finally {
            if (o) throw i;
        }
    }
    return t;
}

function t(r) {
    var t = new Map(), n = !0, e = !1, o = void 0;
    try {
        for (var i, a = Object.keys(r)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
            var u = i.value;
            t.set(u, r[u]);
        }
    } catch (r) {
        e = !0, o = r;
    } finally {
        try {
            !n && a.return && a.return();
        } finally {
            if (e) throw o;
        }
    }
    return t;
}

var n = function() {
    function r(r, t) {
        var n = [], e = !0, o = !1, i = void 0;
        try {
            for (var a, u = r[Symbol.iterator](); !(e = (a = u.next()).done) && (n.push(a.value), 
            !t || n.length !== t); e = !0) ;
        } catch (r) {
            o = !0, i = r;
        } finally {
            try {
                !e && u.return && u.return();
            } finally {
                if (o) throw i;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return r(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = require("CommonHelper.js");

module.exports = {
    stringToJson: function(r) {
        return e.isEmpty(r) ? (console.error("stringToJson data:" + r), null) : JSON.parse(r);
    },
    jsonToString: function(r) {
        return e.isNull(r) ? (console.error("jsonToString data:" + r), null) : JSON.stringify(r);
    },
    mapToJson: function(t) {
        return JSON.stringify(r(t));
    },
    jsonToMap: function(r) {
        return t(JSON.parse(r));
    },
    strMapToObj: r,
    objToStrMap: t
};