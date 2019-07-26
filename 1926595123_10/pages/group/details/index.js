var t = getApp();

Page({
    data: {
        group: {},
        currentUser: t.getUser(),
        flightList: [],
        noticeModalShow: !1,
        noticeFormShow: !1
    },
    onLoad: function(o) {
        t.loadFontFace();
    },
    onShow: function() {
        this.getGroup();
    },
    getGroup: function() {
        var o = this;
        wx.showLoading(), t.request({
            url: "tourGroup/user/groupDetail",
            data: {
                group_id: this.options.group_id
            },
            success: function(t) {
                if (0 === t.err) {
                    var e = t.res;
                    e.flight_away.type = 1, e.flight_home.type = 0, o.setData({
                        group: e,
                        flightList: [ e.flight_away, e.flight_home ]
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    checkGroupStatus: function(t) {
        var o = t && t.currentTarget.dataset.verified;
        wx.navigateTo({
            url: "/pages/group/member/index?verified=" + o + "&group_id=" + this.data.group.id
        });
    },
    toggleModal: function() {
        this.setData({
            noticeModalShow: !this.data.noticeModalShow
        });
    },
    toggleForm: function() {
        this.setData({
            noticeFormShow: !this.data.noticeFormShow
        });
    },
    getScanner: function() {
        var t = this;
        wx.scanCode({
            success: function(o) {
                t.addUserToGroup(o.result);
            }
        });
    },
    addUserToGroup: function(o) {
        var e = this;
        wx.showLoading(), t.request({
            url: "tourGroup/guide/inviteMember",
            data: {
                group_id: this.data.group.id,
                member_code: o
            },
            success: function(t) {
                0 == t.err && wx.showModal({
                    title: "邀请成功",
                    content: "请等待对方确认",
                    showCancel: !1,
                    success: function() {
                        e.getGroup();
                    }
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    setGroupNotice: function(o) {
        var e = this;
        wx.showLoading(), t.request({
            url: "tourGroup/guide/setGroupNotice",
            data: {
                group_id: this.data.group.id,
                content: o.detail.value.content,
                __formId: o.detail.formId
            },
            success: function(t) {
                0 == t.err && (e.toggleForm(), wx.showToast({
                    title: "设置成功"
                }), e.setData({
                    "group.notice": t.res.notice
                }));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onShareAppMessage: function() {
        return {
            imageUrl: "https://sunrisedutyfree-weixin.oss-cn-shanghai.aliyuncs.com/static/share_join_group.jpg",
            title: this.data.group.user.name + "邀请您加入旅行团",
            path: "/pages/user/group/index?group_id=" + this.data.group.id
        };
    }
});