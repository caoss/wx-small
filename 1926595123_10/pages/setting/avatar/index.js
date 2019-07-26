var t = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    }
    return t;
}, a = getApp();

Page({
    data: {},
    onLoad: function() {
        this.isUpdated = !1;
    },
    onUnload: function() {
        this.updateUserInfo();
    },
    setAvatarHandler: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            success: function(a) {
                var e = a.tempFilePaths;
                t.uploadAvatar(e[0]);
            },
            fail: function(t) {
                console.log(t);
            },
            complete: function() {}
        });
    },
    uploadAvatar: function(e) {
        var r = this;
        a.uploadFile({
            url: "user/uploadAvatar",
            name: "file",
            filePath: e,
            success: function(a) {
                r.isUpdated = !0, 0 == a.err && r.store.user.dispatch(t({}, r.data.store.user, {
                    avatar: a.res.url
                }));
            }
        });
    },
    updateUserInfo: function() {
        var t = this;
        this.isUpdated && a.request({
            url: "user/updateProfile",
            data: {
                name: this.data.store.user.name,
                gender: this.data.store.user.gender,
                avatar: this.data.store.user.avatar
            },
            success: function(a) {
                0 == a.err && t.store.user.dispatch(a.res);
            },
            fail: function(t) {}
        });
    }
});