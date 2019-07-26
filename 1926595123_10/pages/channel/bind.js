var e = getApp();

Page({
    data: {
        info: {},
        user: {},
        bindSuccess: !1,
        result: {}
    },
    onLoad: function() {
        var e = wx.getLaunchOptionsSync();
        console.log(e), this.getUser(), this.setData({
            info: e.referrerInfo
        });
    },
    getUser: function() {
        var a = this;
        wx.showLoading(), e.request({
            url: "user/get",
            success: function(e) {
                0 == e.err && a.setData({
                    user: e.res
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    goBack: function() {
        wx.navigateToMiniProgram({
            appId: "wxcee891a8a9c3d891",
            path: "pages/user/member/sunrise/index?member_id=" + this.data.result.memberid + "&member_code=" + this.data.result.code + "&name=" + this.data.result.info.name,
            envVersion: "trial"
        });
    },
    doBind: function() {
        var a = this;
        wx.showLoading(), e.request({
            url: "user/bindChannel",
            data: {
                channel_name: this.data.info.extraData.channel,
                channel_user_id: this.data.info.extraData.user.id
            },
            success: function(e) {
                0 == e.err && a.setData({
                    bindSuccess: !0,
                    result: e.res
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    }
});