function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = getApp();

Page({
    data: {
        mobile: "",
        point: "",
        loading: !1
    },
    onShow: function() {},
    handlerFocus: function(t) {},
    handlerBlur: function(t) {},
    bindValueHandler: function(a) {
        var e = a && a.currentTarget.dataset.key, n = a && a.detail.value;
        this.setData(t({}, e, n));
    },
    applyHandler: function() {
        var t = this;
        this.data.loading || (this.setData({
            loading: !0
        }), a.request({
            url: "user/debugAddPoints",
            data: {
                mobile: this.data.mobile,
                amount: this.data.point
            },
            success: function(t) {
                0 === t.err && wx.showToast({
                    title: "充值成功"
                });
            },
            complete: function() {
                t.setData({
                    loading: !1
                });
            }
        }));
    }
});