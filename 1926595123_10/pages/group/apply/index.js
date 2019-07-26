function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, a = getApp();

Page({
    data: {
        group: {
            max_members: 10,
            auto_verify: 0
        },
        verifyOptions: [ "人工", "自动" ],
        flightList: [ {
            type: 1
        }, {
            type: 0
        } ],
        user: {},
        disabled: !1,
        membersRange: [ 50, 100, 150, 200 ],
        rangeIndex: 0
    },
    onLoad: function(t) {
        this.setData({
            user: a.getUser(),
            "group.id": t.group_id || ""
        });
    },
    onShow: function() {
        this.data.group.id && this.getGroup(this.data.group.id);
    },
    flightChangeHandler: function(i) {
        var r = this, s = i.currentTarget.dataset.index, o = e({}, this.data.flightList[s], i.detail);
        this.setData(t({}, "flightList[" + s + "]", o)), i && a.useFlight(o, function(e) {
            r.setData(t({}, "flightList[" + s + "]", e));
        });
    },
    verifyChangeHandler: function(t) {
        var e = t && t.detail.value;
        this.setData({
            verifyOption: e,
            "group.auto_verify": 1 === e
        });
    },
    groupMembersChange: function(t) {
        var e = t && t.detail.value;
        this.setData({
            rangeIndex: e,
            "group.max_members": this.data.membersRange[e]
        });
    },
    getGroup: function(t) {
        var e = this;
        wx.showLoading(), a.request({
            url: "tourGroup/user/groupDetail",
            data: {
                group_id: t
            },
            success: function(t) {
                if (0 === t.err) {
                    var a = t.res;
                    a.flight_away.type = 1, a.flight_home.type = 0, e.setData({
                        disabled: null !== t.res,
                        "group.group_name": a.name,
                        "group.max_members": a.max_members,
                        "group.is_verified": a.is_verified,
                        "group.password": a.password,
                        "group.auto_verify": a.auto_verify,
                        "user.avatar": a.user && a.user.avatar,
                        "user.name": a.user && a.user.name,
                        "user.id": a.user && a.user.id,
                        flightList: [ a.flight_away, a.flight_home ],
                        rangeIndex: e.data.membersRange.findIndex(function(t) {
                            return t == a.max_members;
                        })
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getValueHandler: function(e) {
        var a = e.currentTarget.dataset.key, i = e.detail.value, r = "group." + a;
        this.setData(t({}, r, i));
    },
    checkDetails: function(t) {
        t && wx.navigateTo({
            url: "/pages/group/details/index?group_id=" + this.data.group.id
        });
    },
    reApply: function() {
        this.setData({
            "group.is_verified": -2,
            "group.auto_verify": -1,
            disabled: !1
        });
    },
    apply: function() {
        var t = this;
        this.data.group.group_name ? t.data.flightList[0].id && t.data.flightList[1].id ? wx.showModal({
            title: "请确认信息",
            content: this.data.group.group_name + "\n" + this.data.group.max_members + "人\n去程: " + this.data.flightList[0].flight_date + " " + this.data.flightList[0].flight_no + "\n返程: " + this.data.flightList[1].flight_date + " " + this.data.flightList[1].flight_no,
            success: function(e) {
                console.log(e), e.confirm && (wx.showLoading(), a.request({
                    url: "tourGroup/guide/createGroup",
                    data: {
                        group_name: t.data.group.group_name,
                        max_members: t.data.group.max_members,
                        flight_id_away: t.data.flightList[0].id,
                        flight_id_home: t.data.flightList[1].id,
                        password: t.data.group.password,
                        auto_verify: t.data.group.auto_verify
                    },
                    success: function(t) {
                        0 == t.err && wx.navigateBack({
                            success: function() {
                                a.publishEvent("newGroup");
                            }
                        });
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                }));
            }
        }) : wx.showModal({
            title: "错误提示",
            content: "请输入正确的航班信息",
            showCancel: !1
        }) : wx.showModal({
            title: "错误提示",
            content: "请输入团名称",
            showCancel: !1
        });
    }
});