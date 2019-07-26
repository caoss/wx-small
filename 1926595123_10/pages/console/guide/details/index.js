function e(e, i, t) {
    return i in e ? Object.defineProperty(e, i, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[i] = t, e;
}

var i = getApp();

Page({
    data: {
        id_card_title: {
            icon: "../../assets/images/id_card.svg",
            name: "身份证"
        },
        guide_card_title: {
            icon: "../../assets/images/confirmation.svg",
            name: "导游证"
        },
        submit_card_title: {
            icon: "../../assets/images/certificate.svg",
            name: "确认函"
        },
        currentType: 1,
        reject_msg: "",
        isShow: !1,
        id: ""
    },
    onLoad: function(e) {
        this.setData({
            id: e.application_id
        }), this.getGuideApply(e.application_id);
    },
    getGuideApply: function(e) {
        var t = this;
        i.request({
            url: "tourGroup/admin/guideDetail",
            data: {
                application_id: e
            },
            success: function(e) {
                if (0 == e.err && null != e.res) {
                    var i = e.res, a = {
                        name: i.name,
                        mobile: i.mobile,
                        id_num: i.id_num,
                        img_id_card_1: i.images.id_card_1,
                        img_id_card_2: i.images.id_card_2,
                        img_certificate: i.images.certificate,
                        img_contract: i.images.contract
                    };
                    t.setData({
                        user: a,
                        currentType: i.is_verified
                    });
                }
            }
        });
    },
    applyVerifiedHandler: function(e) {
        var t = this, a = this, r = e.currentTarget.dataset.verified;
        wx.showLoading(), i.request({
            url: "tourGroup/admin/guideVerify",
            data: {
                application_ids: [ a.data.id ],
                is_verified: r,
                msg: a.data.reject_msg
            },
            success: function(e) {
                0 == e.err && (wx.showToast({
                    title: "操作成功"
                }), t.data.isShow && t.setData({
                    isShow: !1
                }), a.getGuideApply(a.data.id));
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    bindValueHandler: function(i) {
        var t = i && i.currentTarget.dataset.key, a = i && i.detail.value;
        this.setData(e({}, t, a));
    },
    rejectApplyHandler: function() {
        this.setData({
            isShow: !0
        });
    },
    rejectHandler: function(e) {
        e.detail.cancel ? this.setData({
            isShow: !1
        }) : this.applyVerifiedHandler({
            currentTarget: {
                dataset: {
                    verified: 0
                }
            }
        });
    }
});