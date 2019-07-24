function n() {
    return new Promise(function(n, t) {
        wx.login({
            success: function(e) {
                return e.code ? n(e.code) : t(e);
            },
            fail: function(n) {
                return t(n);
            }
        });
    });
}

function t() {
    return new Promise(function(n, t) {
        wx.openSetting({
            success: function(e) {
                return e.authSetting["scope.userInfo"] ? n(e) : t(e);
            },
            fail: function(n) {
                return t(n);
            }
        });
    });
}

function e() {
    return new Promise(function(n, t) {
        wx.getUserInfo({
            withCredentials: !0,
            success: function(t) {
                return n(t);
            },
            fail: function(n) {
                return t(n);
            }
        });
    });
}

function u(n, t) {
    return r.default.authentication({
        code: n,
        userInfo: t.userInfo
    }).then(function(n) {
        return wx.setStorageSync("session_key", n.xToken), wx.setStorageSync("userId", n.userId), 
        t;
    }).catch(function(n) {
        o(n.message || n).then();
    });
}

function o(n) {
    return new Promise(function(t, e) {
        wx.showModal({
            title: "登录失败",
            content: n,
            showCancel: !1,
            success: function(n) {
                return n.confirm && t(null);
            },
            fail: function() {
                return e(new Error());
            }
        });
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function(n) {
    return n && n.__esModule ? n : {
        default: n
    };
}(require("./api/index"));

exports.default = function(r) {
    r = r || function() {}, n().then(function(n) {
        function c() {
            e().then(function(t) {
                return {
                    code: n,
                    authInfo: t
                };
            }).then(function(n) {
                u(n.code, n.authInfo).then(function(t) {
                    return r(n.authInfo);
                });
            }).catch(function() {
                o("授权登录失败将导致部分功能无法使用，是否打开？").then(function() {
                    t().then(function() {
                        return c();
                    }, function() {
                        return c();
                    });
                });
            });
        }
        c();
    });
};