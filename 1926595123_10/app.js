function e(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}

function t(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
}, r = function() {
    function e(e, t) {
        var n = [], r = !0, o = !1, a = void 0;
        try {
            for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (n.push(s.value), 
            !t || n.length !== t); r = !0) ;
        } catch (e) {
            o = !0, a = e;
        } finally {
            try {
                !r && i.return && i.return();
            } finally {
                if (o) throw a;
            }
        }
        return n;
    }
    return function(t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), o = require("modules/config"), a = require("modules/createStore"), s = require("./store/index"), i = wx.getUpdateManager();

i.onUpdateReady(function() {
    wx.showModal({
        title: "更新提示",
        content: "新版本已经准备好，是否重启应用？",
        success: function(e) {
            e.confirm && i.applyUpdate();
        }
    });
});

var c = Page, u = o.store.globalKey, l = [], f = Object.entries(s).reduce(function(e, n) {
    var o = r(n, 2), s = o[0], i = o[1], c = a(i), f = u + "." + s;
    return e[s] = c, l.push([ f, function() {
        return c.getState();
    } ]), c.subscribe(function() {
        var e = getCurrentPages();
        e.length > 0 && e[e.length - 1].setData(t({}, f, c.getState()));
    }), e;
}, {});

Page = function(e) {
    var n = e.onHide, o = e.onLoad, a = e.onShow, s = e.data, i = getApp();
    if ("[object Object]" === Object.prototype.toString.call(s) && ~Object.keys(s).indexOf(u)) throw new Error("same as " + u + " key");
    return e.onLoad = function(e) {
        this.store = f, this.store.user.dispatch(i.getUser()), this.store.user.id < 0 ? wx.reLaunch({
            url: "/pages/account/index"
        }) : "function" == typeof o && o.call(this, e);
    }, e.onShow = function() {
        var e = this;
        l.forEach(function(n) {
            var o = r(n, 2), a = o[0], s = o[1];
            e.setData(t({}, a, s()));
        }), "function" == typeof a && a.call(this);
    }, e.onHide = function() {
        i.saveFormId(), "function" == typeof n && n.call(this);
    }, c(e);
}, App({
    formIds: [],
    globalData: {},
    config: o,
    store: f,
    LAUNCH_REDIRECT_URL: "",
    onLaunch: function(e) {
        this.initGlobalData();
        var t = e.query;
        try {
            var n = Object.entries(t).map(function(e) {
                return e[0] + "=" + e[1];
            }).join("&"), r = e.path.startsWith("/pages/account/") ? "/pages/home/index" : "/" + e.path + "?" + n;
            console.log("LAUNCH_REDIRECT_URL: " + r), this.LAUNCH_REDIRECT_URL = r;
        } catch (e) {
            console.log(e);
        }
        this.request({
            url: "app/checkToken",
            success: function(e) {
                console.log(e);
            }
        });
    },
    initGlobalData: function() {
        var e = wx.getSystemInfoSync();
        this.globalData.sysInfo = e, this.globalData.navBarHeight = e.statusBarHeight + 46;
    },
    loadFontFace: function() {
        wx.loadFontFace({
            family: "DIN-Next-LT-Pro-Bold-Condensed",
            source: 'url("https://sunrisedutyfree-weixin.oss-cn-shanghai.aliyuncs.com/static/Oswald-Regular.ttf")',
            success: function(e) {
                console.log(e.status);
            }
        });
    },
    onShow: function(e) {},
    login: function(e) {
        var t = this;
        e = e || {};
        var n = wx.getLaunchOptionsSync();
        e.success = e.success || function() {}, wx.showLoading(), wx.login({
            success: function(r) {
                t.request({
                    url: "weixin/codeLogin",
                    data: {
                        code: r.code,
                        options: n
                    },
                    success: function(n) {
                        0 === n.err && (t.setToken(n.res.token), t.setUser(n.res.user), t.store.user.dispatch(n.res.user), 
                        e.success(n.res.user));
                    }
                });
            },
            fail: function() {
                wx.showModal({
                    title: "登录失败, 请尝试重新打开",
                    showCancel: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getToken: function() {
        try {
            var e = wx.getStorageSync(o.store.tokenKey);
            return e ? "Bearer " + e : "";
        } catch (e) {}
        return "";
    },
    setToken: function(e) {
        try {
            wx.setStorageSync(o.store.tokenKey, e);
        } catch (t) {
            wx.setStorage({
                key: o.store.tokenKey,
                data: e
            });
        }
    },
    getUserId: function() {
        var e = this.getUser();
        return e ? e.id : 0;
    },
    getUser: function() {
        try {
            return wx.getStorageSync(o.store.userKey);
        } catch (e) {}
        return null;
    },
    setUser: function(e) {
        try {
            wx.setStorageSync(o.store.userKey, e);
        } catch (e) {
            wx.showToast({
                title: "设置用户失败"
            });
        }
    },
    uploadFile: function(e) {
        e.url = o.getEnvConfig().apiBaseUrl + e.url, e.header = e.header || {}, e.header.Authorization = this.getToken(), 
        e.header["x-device-id"] = this.getDeviceID(), e.formData = e.formData || {}, e.success = e.success || function() {}, 
        e.fail = e.fail || function() {}, e.complete = e.complete || function() {}, wx.uploadFile({
            url: e.url,
            formData: e.formData,
            header: e.header,
            name: e.name,
            filePath: e.filePath,
            success: function(t) {
                var n = JSON.parse(t.data);
                0 === n.err ? e.success(n) : wx.showModal({
                    title: "错误提示",
                    content: n.msg,
                    showCancel: !1
                });
            },
            fail: function(t) {
                wx.showModal({
                    title: "网络错误",
                    content: t.errMsg,
                    showCancel: !1
                }), e.fail();
            },
            complete: function() {
                e.complete();
            }
        });
    },
    request: function(e) {
        var t = this;
        (e = e || {}).url = o.getEnvConfig().apiBaseUrl + e.url, e.header = e.header || {}, 
        e.header.Authorization = this.getToken(), e.header["x-device-id"] = this.getDeviceID(), 
        e.data = e.data || {}, e.method = e.method || "POST", e.success = e.success || function() {}, 
        e.fail = e.fail || function() {}, e.complete = e.complete || function() {}, wx.request({
            url: e.url,
            data: e.data,
            header: e.header,
            method: e.method,
            success: function(n) {
                var r = n.data;
                100401 !== r.err ? 100402 !== r.err ? (0 !== r.err && wx.showModal({
                    title: "错误提示",
                    content: r.msg,
                    showCancel: !1
                }), e.success(r)) : t.LOGIN_REDIRECT_LOCK || (t.LOGIN_REDIRECT_LOCK = !0, wx.reLaunch({
                    url: "/pages/account/register/index"
                })) : t.LOGIN_REDIRECT_LOCK || (t.LOGIN_REDIRECT_LOCK = !0, t.setToken(null), t.setUser(null), 
                wx.reLaunch({
                    url: "/pages/account/index"
                }));
            },
            fail: function(t) {
                wx.showModal({
                    title: "网络错误",
                    content: t.errMsg,
                    showCancel: !1
                }), e.fail();
            },
            complete: function() {
                e.complete();
            }
        });
    },
    redirectBack: function() {
        var e = this.LAUNCH_REDIRECT_URL;
        e || (e = "/pages/home/index"), e = e.startsWith("/") ? e : "/" + e, wx.reLaunch({
            url: e
        });
    },
    publishEvent: function(e, t) {
        getCurrentPages().forEach(function(n, r, o) {
            "function" == typeof n[e + "Listener"] && n[e + "Listener"](t);
        });
    },
    pushFormId: function(e) {
        this.formIds.push(e);
    },
    saveFormId: function() {
        var t = this;
        this.formIds.length > 0 && this.request({
            url: "weixin/saveFormId",
            data: {
                __formId: [].concat(e(new Set(this.formIds)))
            },
            success: function() {
                t.formIds = [];
            }
        });
    },
    getDeviceID: function() {
        var e = null;
        try {
            e = wx.getStorageSync("DEVICE_ID");
        } catch (e) {}
        return e || (e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16);
        }), wx.setStorageSync("DEVICE_ID", e)), e;
    },
    bindValueHandler: function(e) {
        var n = e && e.currentTarget.dataset.key, r = e && e.detail.value;
        this.setData(t({}, n, r));
    },
    useFlight: function(e, t) {
        var r = this, o = e.flight_no, a = e.flight_date, s = e.type;
        if (o && a) {
            if (this.flightQuery) return;
            this.flightQuery = !0, wx.showLoading(), this.request({
                url: "flight/query",
                data: {
                    flight_no: o,
                    departure_date: a
                },
                success: function(e) {
                    0 == e.err && t && t(n({}, e.res, {
                        type: s
                    }));
                },
                complete: function() {
                    r.flightQuery = !1, wx.hideLoading();
                }
            });
        }
    }
});