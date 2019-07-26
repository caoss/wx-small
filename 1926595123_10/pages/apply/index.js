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
        user: {},
        disabled: !1
    },
    onLoad: function(e) {
        var a = t.getUser();
        this.setData({
            "user.name": a.name,
            "user.mobile": a.mobile
        }), this.user = a, this.getApplyStatus();
    },
    getValueHandler: function(t) {
        var a = t.currentTarget.dataset.key, s = t.detail.value, n = "user." + a;
        this.setData(e({}, n, s));
    },
    getApplyStatus: function() {
        var e = this;
        wx.showLoading(), t.request({
            url: "tourGroup/guide/getApplication",
            success: function(t) {
                0 === t.err && e.setData({
                    user: t.res,
                    disabled: null !== t.res
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    chooseHandler: function(a) {
        var s = a.currentTarget.dataset.key, n = a.detail.file, u = "user." + s, r = this;
        wx.showLoading(), t.uploadFile({
            url: "tourGroup/guide/uploadImage",
            filePath: n,
            name: "file",
            success: function(t) {
                0 == t.err && r.setData(e({}, u, t.res.url));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    deleteHandler: function(t) {
        var a = "user." + t.currentTarget.dataset.key;
        console.log(a), this.setData(e({}, a, ""));
    },
    reSubmit: function() {
        this.setData({
            disabled: !1,
            user: {},
            "user.name": this.user.name,
            "user.mobile": this.user.mobile
        });
    },
    submit: function(e) {
        var a = this;
        if (a.data.user && a.data.user.name && a.data.user.mobile && a.data.user.id_num && a.data.user.images) {
            if (18 !== a.data.user.id_num.toString().length) return wx.showModal({
                title: "错误提示",
                content: "请输入正确的身份证号码",
                showCancel: !1
            }), !1;
            if (4 !== Object.keys(a.data.user.images).length) return wx.showModal({
                title: "错误提示",
                content: "请完善证件照片信息的上传",
                showCancel: !1
            }), !1;
            wx.showLoading(), t.request({
                url: "tourGroup/guide/apply",
                data: a.data.user,
                success: function(e) {
                    0 == e.err && wx.showToast({
                        content: "提交成功",
                        showCancel: !1,
                        success: function() {
                            setTimeout(function() {
                                wx.navigateBack();
                            }, 1500);
                        }
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            });
        } else wx.showModal({
            title: "申请失败",
            content: "请完善认证信息",
            showCancel: !1
        });
    }
});