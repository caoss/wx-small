function r(r) {
    return r.replace(/(^\s*)|(\s*$)/g, "");
}

function e(r) {
    return !!/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/i.test(r) && (console.log("is face..."), 
    !0);
}

var t = require("CommonHelper.js");

module.exports = {
    chineseNum: function(r) {
        var e = 0, t = !0, u = !1, n = void 0;
        try {
            for (var i, a = r[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                var l = i.value;
                l.length != l.replace(/[^\x00-\xff]/g, "**").length && e++;
            }
        } catch (r) {
            u = !0, n = r;
        } finally {
            try {
                !t && a.return && a.return();
            } finally {
                if (u) throw n;
            }
        }
        return e;
    },
    Trim: r,
    generateUUID: function() {
        var r = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (r + 16 * Math.random()) % 16 | 0;
            return r = Math.floor(r / 16), ("x" == e ? t : 3 & t | 8).toString(16);
        });
    },
    haveEmojiFace: e,
    getCharIfStartWithEmojiFace: function(r) {
        if (!t.isEmpty(r) && r.length >= 2) {
            var u = r.substring(0, 1);
            if (console.log("getCharIfStartWithEmojiFace checkStr:" + u), e(u)) return u;
        }
        return null;
    },
    spliteTextByChar: function(e, u, n) {
        for (var i = "", a = e.split(u), l = 0; l < a.length; l++) if (a[l] = r(a[l]), l == a.length - 1 || !t.isEmpty(a[l])) {
            0 != l && (i += u);
            var o = 0;
            if (a[l].length > 5) for (var x = 0, c = n; !(x >= a[l].length); ) 0 != o && (i += u), 
            o++, i += a[l].substring(x, c), x = c, c + n > e.length ? c = e.length : c += n; else i += a[l];
        }
        return i;
    },
    findStrAndRemoveFromArray: function(r, e) {
        var u = r;
        if (!t.isNull(u) && !t.isNull(e)) for (var n = 0; n < u.length; n++) u[n] != e || (u = u.slice(0, n).concat(u.slice(n + 1)), 
        n = 0);
        return u;
    }
};