function n(n) {
    return function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise(function(e, r) {
            t.success = function(n) {
                e(n);
            }, t.fail = function(n) {
                r(n);
            }, n(t);
        });
    };
}

Promise.prototype.finally = function(n) {
    var t = this.constructor;
    return this.then(function(e) {
        return t.resolve(n()).then(function() {
            return e;
        });
    }, function(e) {
        return t.resolve(n()).then(function() {
            throw e;
        });
    });
}, module.exports = {
    wxPromisify: n,
    wxLogin: function() {
        return n(wx.login);
    },
    wxGetUserInfo: function() {
        return n(wx.getUserInfo);
    },
    wxGetSystemInfo: function() {
        return n(wx.getSystemInfo);
    }
};