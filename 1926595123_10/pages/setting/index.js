var e = getApp();

Page({
    onShow: function() {
        this.getUserProfile();
    },
    getUserProfile: function() {
        var t = this;
        e.request({
            url: "user/profile",
            success: function(r) {
                0 === r.err && (e.setUser(r.res), t.store.user.dispatch(r.res));
            }
        });
    },
    nameUpdateHandler: function() {
        wx.navigateTo({
            url: "/pages/setting/name/index?name=" + this.data.store.user.name
        });
    },
    genderUpdateHandler: function() {
        wx.navigateTo({
            url: "/pages/setting/gender/index?gender=" + this.data.store.user.gender
        });
    },
    setAvatarHandler: function() {
        wx.navigateTo({
            url: "/pages/setting/avatar/index"
        });
    }
});