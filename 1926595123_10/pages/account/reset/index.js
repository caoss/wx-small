function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var e = getApp();

Page({
    data: {
        mobile: "",
        code: "",
        password: "",
        submitPassword: "",
        loading: !1
    },
    onLoad: function() {},
    onShow: function() {},
    bindValueHandler: function(e) {
        var t = e && e.currentTarget.dataset.key, o = e && e.detail.value;
        this.setData(a({}, t, o));
    },
    submitHandler: function() {
        var a = this;
        this.data.loading || (a.data.password === a.data.submitPassword ? a.data.code ? a.data.mobile ? (wx.showLoading(), 
        a.setData({
            loading: !0
        }), e.request({
            url: "user/changePassword",
            data: {
                mobile: a.data.mobile,
                password: a.data.password,
                verify_code: a.data.code
            },
            success: function(t) {
                0 == t.err && wx.showModal({
                    title: "密码修改成功",
                    content: "请退出重新登录",
                    showCancel: !1,
                    success: function() {
                        a.store.user.dispatch({}), e.setUser(null), wx.reLaunch({
                            url: "/pages/account/index"
                        });
                    }
                });
            },
            complete: function() {
                a.setData({
                    loading: !1
                }), wx.hideLoading();
            }
        })) : wx.showModal({
            title: "错误提示",
            content: "请输入手机号码",
            showCancel: !1
        }) : wx.showModal({
            title: "错误提示",
            content: "请输入验证码",
            showCancel: !1
        }) : wx.showModal({
            title: "错误提示",
            content: "两次输入密码不相同",
            showCancel: !1
        }));
    }
});