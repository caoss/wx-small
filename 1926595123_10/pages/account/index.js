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
        loading: !1,
        loginType: 1
    },
    onLoad: function(e) {
        this.change = e.change;
    },
    onShow: function() {
        t.LOGIN_REDIRECT_LOCK = !1;
    },
    typeChangeHandler: function(e) {
        var t = e && e.currentTarget.dataset.type;
        this.setData({
            loginType: t,
            code: "",
            password: ""
        });
    },
    bindValueHandler: function(t) {
        var a = t && t.currentTarget.dataset.key, s = t && t.detail.value;
        this.setData(e({}, a, s));
    },
    loginHandler: function() {
        var e = this;
        if (!this.data.mobile) return wx.showModal({
            title: "错误提示",
            content: "请完善登陆信息",
            showCancel: !1
        }), !1;
        wx.showLoading(), this.setData({
            loading: !0
        });
        var a = {
            mobile: this.data.mobile
        };
        this.data.password && (a.password = this.data.password), this.data.code && (a.verify_code = this.data.code), 
        t.request({
            url: "user/login",
            data: a,
            success: function(a) {
                0 === a.err && wx.showToast({
                    title: "登录成功",
                    icon: "success",
                    success: function() {
                        t.setToken(a.res.token), t.setUser(a.res.user), e.store.user.dispatch(a.res.user), 
                        1 != e.change ? t.redirectBack() : wx.reLaunch({
                            url: "/pages/home/index"
                        });
                    }
                });
            },
            complete: function() {
                e.setData({
                    loading: !1
                }), wx.hideLoading();
            }
        });
    }
});