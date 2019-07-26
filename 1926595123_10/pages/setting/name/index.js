var a = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
    }
    return a;
}, t = getApp();

Page({
    data: {
        loading: !1
    },
    nameChangeHandler: function(t) {
        var e = t && t.detail.value;
        this.store.user.dispatch(a({}, this.data.store.user, {
            name: e
        }));
    },
    updateUserInfo: function() {
        var a = this;
        this.data.loading || (this.setData({
            loading: !0
        }), t.request({
            url: "user/updateProfile",
            data: {
                name: this.data.store.user.name,
                gender: this.data.store.user.gender,
                avatar: this.data.store.user.avatar
            },
            success: function(t) {
                0 == t.err && (a.store.user.dispatch(t.res), wx.navigateBack());
            },
            complete: function() {
                a.setData({
                    loading: !1
                });
            },
            fail: function(a) {}
        }));
    }
});