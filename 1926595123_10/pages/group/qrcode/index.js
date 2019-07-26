var t = getApp();

Page({
    data: {
        group: {}
    },
    onLoad: function(t) {
        this.getGroup(t.id);
    },
    getGroup: function(e) {
        var r = this;
        wx.showLoading(), t.request({
            url: "tourGroup/user/groupDetail",
            data: {
                group_id: e
            },
            success: function(t) {
                if (0 === t.err) {
                    var e = t.res;
                    r.setData({
                        group: e
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.data.group.name + "邀请您加入旅行团",
            path: "/pages/group/qrcode/index?id=" + this.data.group.id
        };
    }
});