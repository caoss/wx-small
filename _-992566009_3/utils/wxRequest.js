function e(e) {
    return function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(n, o) {
            t.success = function(e) {
                n(e);
            }, t.fail = function(e) {
                o(e);
            }, e(t);
        });
    };
}

Promise.prototype.finally = function(e) {
    var t = this.constructor;
    return this.then(function(n) {
        return t.resolve(e()).then(function() {
            return n;
        });
    }, function(n) {
        return t.resolve(e()).then(function() {
            throw n;
        });
    });
}, module.exports = {
    postRequest: function(t, n) {
        return e(wx.request)({
            url: t,
            method: "POST",
            data: n,
            header: {
                "content-type": "application/json",
                "X-Token": wx.getStorageSync("token"),
                source: 2
            }
        });
    },
    getRequest: function(t, n) {
        return e(wx.request)({
            url: t,
            method: "GET",
            data: n,
            header: {
                "Content-Type": "application/json",
                "X-Token": wx.getStorageSync("token"),
                source: 2
            }
        });
    },
    putRequest: function(t, n) {
        return e(wx.request)({
            url: t,
            method: "put",
            data: n,
            header: {
                "content-type": "application/json",
                "X-Token": wx.getStorageSync("token"),
                source: 2
            }
        });
    },
    deleteRequest: function(t, n) {
        return e(wx.request)({
            url: t,
            method: "delete",
            data: n,
            header: {
                "content-type": "application/json",
                "X-Token": wx.getStorageSync("token"),
                source: 2
            }
        });
    }
};