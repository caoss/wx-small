function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var e = a(require("../../utils/saveFile")), t = a(require("../../utils/getShareText")), n = a(require("../../utils/shareImage")), i = require("../../utils/SystemHelper.js");

Page({
    data: {
        showOverride: !1,
        currentTab: "share",
        imageUrl: null,
        showAd: !1,
        list: [],
        adInfo: {},
        shareImage: null,
        hideMenu: !1,
        naviToMiniProgramVisible: !0
    },
    banner_href: function(a) {
        var e = a.currentTarget.id;
        this.setData({
            AdId: this.data.list[e].app_id
        }), wx.navigateToMiniProgram({
            appId: this.data.list[e].app_id,
            path: this.data.list[e].app_url,
            success: function(a) {
                console.log("跳转成功"), console.log(e);
            }
        });
    },
    getNavigateToMiniProgram: function() {
        i.curVersionBiggerThan("2.0.6") ? this.setData({
            naviToMiniProgramVisible: !1
        }) : this.setData({
            naviToMiniProgramVisible: !0
        });
    },
    onShareAppMessage: function() {
        return {
            title: (0, t.default)(),
            path: "/pages/selector/index"
        };
    },
    onShow: function() {
        var a = this;
        wx.request({
            url: "https://wx3.xxjr.com/wenda/banner",
            data: {
                type: 3
            },
            success: function(e) {
                a.setData({
                    list: e.data.data
                });
            }
        });
    },
    onLoad: function(a) {
        var e = this, t = a.url;
        t || wx.showToast({
            title: "图片不存在",
            showCancel: !1,
            success: function() {
                wx.navigateBack({
                    delta: 1
                });
            }
        }), wx.showModal({
            title: "保存成功",
            content: "头像已经保存到系统相册",
            showCancel: !1
        }), (0, n.default)({
            canvasId: "t",
            background: {
                src: "../../assets/share2.png",
                args: [ 0, 0, 647, 1e3 ]
            },
            avatar: {
                src: t,
                args: [ 90, 205, 470, 470 ]
            }
        }).then(function(a) {
            e.setData({
                shareImage: a
            });
        }).catch(function(a) {
            console.error(a);
        }), this.setData({
            imageUrl: t
        }), this.getNavigateToMiniProgram();
    },
    onClickSaveTemplate: function() {
        (0, e.default)(this.data.shareImage).then(function(a) {
            a ? wx.showModal({
                title: "保存成功",
                content: "图片已经保存到系统相册",
                showCancel: !1
            }) : wx.showToast({
                icon: "none",
                title: "保存到相册失败，请重试或允许授权",
                duration: 3e3
            });
        });
    },
    onClickAd: function() {
        var a = this.data.adInfo, e = a.appId, t = a.path;
        wx.navigateToMiniProgram({
            appId: e,
            path: t,
            extraData: {
                from: "xmasapp",
                plcode: "othersell"
            },
            complete: function() {
                wx.reportAnalytics("ad_click", {
                    app_id: e
                });
            }
        });
    },
    handleQRCode: function() {
        wx.canvasToTempFilePath({
            canvasId: "hideCanvas",
            success: function(a) {
                wx.reportAnalytics("genarate_preview", {
                    genarate_preview: 0
                }), wx.navigateTo({
                    url: "/pages/share/index?url=" + a.tempFilePath
                });
            }
        });
    },
    onPreviewImage: function() {
        wx.previewImage({
            urls: [ this.data.imageUrl ],
            success: function(a) {}
        });
    },
    handleClickOverride: function() {
        this.setData({
            showOverride: !1
        });
    },
    handleRecommend: function() {
        wx.reportAnalytics("recommend", {
            recommend: 0
        });
    },
    handleSaveFile: function() {
        wx.reportAnalytics("save", {
            save: 0
        }), (0, e.default)(this.data.imageUrl).then(function(a) {
            wx.showToast({
                title: "保存成功"
            });
        }, function(a) {
            console.log(a);
        });
    },
    handleToApps: function() {
        wx.navigateTo({
            url: "/pages/apps/index"
        });
    },
    handleTabBack: function() {
        var a = this;
        wx.navigateBack({
            delta: 1,
            success: function() {
                a.previewWeCropper = null;
            }
        });
    },
    handleConact: function() {
        wx.reportAnalytics("concat", {
            concat: 0
        });
    },
    handleClickShareTab: function() {
        this.setData({
            hideMenu: !this.data.hideMenu
        });
    },
    handleTabSave: function() {
        (0, e.default)(this.data.imageUrl).then(function() {
            wx.showToast({
                title: "保存成功"
            });
        });
    }
});