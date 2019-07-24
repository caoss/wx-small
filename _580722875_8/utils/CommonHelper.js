function o(o) {
    return null == o || void 0 == o;
}

function t(o) {
    var n, e = o.constructor === Array ? [] : {};
    if ("object" === (void 0 === o ? "undefined" : r(o))) {
        if (window.JSON) n = JSON.stringify(o), e = JSON.parse(n); else for (var i in o) e[i] = "object" === r(o[i]) ? t(o[i]) : o[i];
        return e;
    }
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, r = "function" == typeof Symbol && "symbol" == n(Symbol.iterator) ? function(o) {
    return void 0 === o ? "undefined" : n(o);
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : n(o);
};

module.exports = {
    isNull: o,
    isEmpty: function(t) {
        return !!(o(t) || t.length <= 0);
    },
    indexOf: function(o, t, n) {
        for (var r = 0; r < o.length; r++) if (o[r] === t) return r;
        return n;
    },
    cloneObj: t
};