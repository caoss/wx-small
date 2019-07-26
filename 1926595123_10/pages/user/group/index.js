function t(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

var e = getApp();

Page({
    data: {
        group: {},
        password: "",
        application_msg: "",
        isShow: !1,
        currentUser: e.getUser(),
        noticeModalShow: !1,
        memberList: []
    },
    onLoad: function(t) {
        this.getGroup(t.group_id), this.getMemberList(t.group_id);
    },
    onShow: function() {
        e.loadFontFace();
    },
    phoneCall: function(t) {
        var e = t && t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: e,
            success: function() {},
            fail: function(t) {
                console.log(t);
            }
        });
    },
    getGroup: function(t) {
        var o = this;
        wx.showLoading(), e.request({
            url: "tourGroup/user/groupDetail",
            data: {
                group_id: t
            },
            success: function(t) {
                if (0 === t.err) {
                    var e = t.res;
                    o.setData({
                        group: e
                    }, function() {
                        e.auto_verify && 0 === e.is_verified && o.joinGroup({}, e.auto_verify);
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getMemberList: function(t) {
        var o = this;
        e.request({
            url: "tourGroup/user/groupMemberList",
            data: {
                page: 1,
                limit: 11,
                group_id: t
            },
            success: function(t) {
                if (0 == t.err) {
                    var e = t.res;
                    o.setData({
                        memberList: e.list
                    });
                }
            }
        });
    },
    bindValueHandler: function(e) {
        var o = e && e.currentTarget.dataset.key;
        e && e.detail.value;
        this.setData(t({}, o, e.detail.value));
    },
    groupRefusedHandler: function(t) {
        this.acceptInvitation(!1);
    },
    groupAcceptHandler: function(t) {
        this.acceptInvitation(!0);
    },
    invitedUserHandler: function(t) {
        if (t.detail.cancel) return !1;
        this.joinGroup(t);
    },
    joinGroupHandler: function(t) {
        this.data.group.password_required ? this.setData({
            isShow: !0
        }) : this.joinGroup(t);
    },
    acceptInvitation: function(t) {
        var o = this;
        wx.showLoading(), e.request({
            url: "tourGroup/user/verifyInvitation",
            data: {
                application_id: o.data.group.application.id,
                is_verified: t
            },
            success: function() {
                setTimeout(function() {
                    wx.navigateBack();
                }, 1e3);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    joinGroup: function(t, o) {
        var i = this;
        !i.data.group.password_required || i.data.password ? (wx.showLoading(), e.request({
            url: "tourGroup/user/joinGroup",
            data: {
                group_id: i.data.group.id,
                _formId: t && t.detail && t.detail.formId,
                password: i.data.password,
                msg: i.data.application_msg
            },
            success: function(t) {
                0 == t.err && wx.showToast({
                    title: o ? "入团成功" : "提交成功",
                    success: function() {
                        i.setData({
                            "group.application": t.res
                        }), i.getMemberList(i.data.group.id);
                    },
                    complete: function() {
                        i.setData({
                            isShow: !1
                        });
                    }
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        })) : wx.showModal({
            title: "错误提示",
            content: "请输入入团密码",
            showCancel: !1
        });
    },
    reJoinGroup: function(t) {},
    checkMembers: function(t) {
        wx.navigateTo({
            url: "/pages/user/member/index?group_id=" + this.data.group.id
        });
    },
    toggleModal: function() {
        this.setData({
            noticeModalShow: !this.data.noticeModalShow
        });
    },
    getScanner: function() {
        var t = this;
        wx.scanCode({
            success: function(e) {
                t.addUserToGroup(e.result);
            }
        });
    }
});