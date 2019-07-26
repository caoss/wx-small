var e = getApp();

Page({
    data: {
        groupId: "",
        group: {
            group_name: "",
            max_members: "",
            is_verified: ""
        },
        user: {},
        flightList: [],
        edit: 1
    },
    onLoad: function(e) {
        this.setData({
            groupId: e.group_id,
            edit: e.edit || 1
        }), this.getGroup(e.group_id);
    },
    getGroup: function(i) {
        var t = this;
        wx.showLoading(), e.request({
            url: "tourGroup/user/groupDetail",
            data: {
                group_id: i
            },
            success: function(e) {
                if (0 === e.err) {
                    var i = e.res;
                    i.flight_away.type = 1, i.flight_home.type = 0, t.setData({
                        user: i.user,
                        "group.group_name": i.name,
                        "group.max_members": i.max_members,
                        "group.is_verified": i.is_verified,
                        flightList: [ i.flight_away, i.flight_home ]
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    applyVerifiedHandler: function(e) {
        var i = this, t = e.currentTarget.dataset.verified;
        0 != t ? this.updateVerified(t) : wx.showModal({
            title: "驳回申请",
            content: "是否驳回该团申请",
            success: function(e) {
                e.confirm && i.updateVerified(t);
            }
        });
    },
    updateVerified: function(i) {
        this.verifiedQuery || (wx.showLoading(), this.verifiedQuery = !0, e.request({
            url: "tourGroup/admin/groupVerify",
            data: {
                group_id: this.data.groupId,
                is_verified: i
            },
            success: function(e) {
                0 == e.err && wx.showModal({
                    content: "操作成功",
                    showCancel: !1,
                    success: function() {
                        wx.navigateBack();
                    }
                });
            },
            complete: function() {
                wx.hideLoading(), this.verifiedQuery = !1;
            }
        }));
    }
});