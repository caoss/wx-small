function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp();

Page({
    data: {
        user: null,
        code: "",
        mobile: "",
        password: "",
        name: "",
        gender: 0,
        options: [ "男", "女" ],
        loading: !1,
        wxUserInfo: null
    },
    onLoad: function(e) {
        this.setData({
            user: t.getUser()
        });
    },
    bindValueHandler: function(t) {
        var a = t && t.currentTarget.dataset.key, n = t && t.detail.value;
        this.setData(e({}, a, n));
    },
    genderChangeHandler: function(e) {
        var t = e && e.detail.value;
        this.setData({
            gender: t
        });
    },
    registerSunriseHandler: function(e) {
        var a = this;
        a.data.name && a.data.gender >= 0 ? (wx.showLoading(), a.setData({
            loading: !0
        }), t.request({
            url: "user/registerMember",
            data: {
                name: a.data.name,
                gender: a.data.gender + 1
            },
            success: function(e) {
                0 === e.err && wx.showModal({
                    title: "操作成功",
                    content: "日上会员开通成功",
                    showCancel: !1,
                    success: function() {
                        t.login({
                            success: function() {
                                t.request({
                                    url: "weixin/syncUserInfo",
                                    data: a.data.wxUserInfo
                                }), t.redirectBack();
                            }
                        });
                    }
                });
            },
            complete: function() {
                wx.hideLoading(), a.setData({
                    loading: !1
                });
            }
        })) : wx.showModal({
            title: "错误提示",
            content: "请完善注册信息",
            showCancel: !1
        });
    },
    userInfoHandler: function(e) {
        e && e.detail.userInfo && (this.setData({
            wxUserInfo: e.detail,
            gender: e.detail.userInfo.gender
        }), this.submitAccountHandler());
    },
    submitAccountHandler: function() {
        var e = this, a = e.data.password.toString();
        if (e.data.mobile && e.data.code && a.length >= 6) wx.showLoading(), e.setData({
            loading: !0
        }), t.request({
            url: "user/register",
            data: {
                mobile: e.data.mobile,
                verify_code: e.data.code,
                password: e.data.password
            },
            success: function(a) {
                0 === a.err && (t.setToken(a.res.token), t.setUser(a.res.user), e.store.user.dispatch(a.res.user), 
                wx.showToast({
                    title: "账号注册成功",
                    success: function() {
                        e.setData({
                            user: a.res.user,
                            gender: a.res.user.gender - 1
                        });
                    }
                }));
            },
            complete: function() {
                e.setData({
                    loading: !1
                }), wx.hideLoading();
            }
        }); else {
            if (a.length < 6) return void wx.showModal({
                title: "错误提示",
                content: "密码长度最少为6位",
                showCancel: !1
            });
            wx.showModal({
                title: "错误提示",
                content: "请完善注册信息",
                showCancel: !1
            });
        }
    }
});