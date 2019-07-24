function e(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function n(e, n) {
    return function(r) {
        return new Promise(function(t, i) {
            var a = n.urlPrefix + e.url;
            if (~e.url.indexOf(":")) for (var o in r) {
                var u = new RegExp("\\/:" + o);
                a.match(u) && (a = a.replace(new RegExp("\\/:" + o), "/" + r[o]), delete r[o]);
            }
            var c = {
                url: a,
                data: r,
                header: n.header || {},
                method: e.method,
                success: function(e) {
                    var r = n.transform(e.data), a = r.success, o = r.content, u = r.error;
                    a ? t(o) : i(u);
                },
                fail: function(e) {
                    i(Error(e.errMsg));
                }
            };
            wx.request(n.beforeRequest(c));
        });
    };
}

var r = function() {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var t = n[r];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
            Object.defineProperty(e, t.key, t);
        }
    }
    return function(n, r, t) {
        return r && e(n.prototype, r), t && e(n, t), n;
    };
}(), t = function() {
    function t(n) {
        e(this, t), this.config = n, this.instances = {};
    }
    return r(t, [ {
        key: "create",
        value: function(e) {
            for (var r = Object.keys(e), t = 0; t < r.length; t++) this.instances[r[t]] = n(e[r[t]], this.config);
        }
    }, {
        key: "getRequests",
        value: function() {
            return this.instances;
        }
    } ]), t;
}();

module.exports = t;