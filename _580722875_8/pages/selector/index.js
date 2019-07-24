function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/weCropper.min.js")), a = t(require("../../utils/rpx2px")), i = t(require("../../utils/getShareText")), n = wx.getSystemInfoSync().model.indexOf("iPhone X") >= 0, o = n ? 750 : 710, r = require("../../utils/SystemHelper.js");

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        isPhoneX: n,
        list: [],
        currentAvatarIndex: 0,
        userAvatar: "",
        contentTop: 0,
        buttonReady: !1,
        showLoginPopup: !1,
        naviToMiniProgramVisible: !0,
        cropperOpt: {
            id: "baseCanvas",
            width: (0, a.default)(750),
            height: (0, a.default)(o),
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (0, a.default)(100) / 2,
                y: (0, a.default)(o - 650) / 2,
                width: (0, a.default)(650),
                height: (0, a.default)(650)
            }
        }
    },
    banner_href: function(t) {
        var e = t.currentTarget.id;
        this.setData({
            AdId: this.data.list[e].app_id
        }), wx.navigateToMiniProgram({
            appId: this.data.list[e].app_id,
            path: this.data.list[e].app_url,
            success: function(t) {
                console.log("跳转成功"), console.log(e);
            }
        });
    },
    getNavigateToMiniProgram: function() {
        r.curVersionBiggerThan("2.0.6") ? this.setData({
            naviToMiniProgramVisible: !1
        }) : this.setData({
            naviToMiniProgramVisible: !0
        });
    },
    onShow: function() {
        var t = this;
        wx.request({
            url: "https://wx3.xxjr.com/wenda/banner",
            data: {
                type: 3
            },
            success: function(e) {
                t.setData({
                    list: e.data.data
                });
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: (0, i.default)(),
            path: "/pages/selector/index"
        };
    },
    onLoad: function() {
        var t = this, a = this.data.cropperOpt;
        this.clipWeCropper = new e.default(a).on("ready", function(e) {
            var a = wx.getStorageSync("avatarUrl");
            a ? e.pushOrign(a) : t.setData({
                showLoginPopup: !0
            });
        }).on("beforeImageLoad", function(t) {
            wx.showToast({
                title: "头像加载中",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(e) {
            t.setData({
                buttonReady: !0
            }), wx.hideToast();
        }).updateCanvas(), this.getNavigateToMiniProgram();
    },
    handleConfirm: function() {
        this.clipWeCropper.getCropperImage(function(t) {
            wx.showToast({
                title: "头像加载中",
                icon: "loading",
                duration: 2e4
            }), wx.navigateTo({
                url: "/pages/editor/index?url=" + t,
                complete: function() {
                    wx.hideToast();
                }
            });
        });
    },
    handleLogin: function(t) {
        console.log(t);
        var e = t.detail.userInfo.avatarUrl.split("/");
        e[e.length - 1] = 0;
        var a = e.join("/");
        wx.setStorageSync("avatarUrl", a), this.setData({
            userAvatar: a,
            showLoginPopup: !1
        }), this.clipWeCropper.pushOrign(this.data.userAvatar);
    },
    handleRefreshAvatar: function() {
        wx.clearStorageSync(), this.setData({
            showLoginPopup: !0
        });
    },
    handleUseAvatar: function() {
        this.clipWeCropper.pushOrign(this.data.userAvatar);
    },
    handleChooseImage: function() {
        var t = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                t.setData({
                    currentAvatarIndex: -1
                }), t.clipWeCropper.pushOrign(e.tempFilePaths[0]);
            }
        });
    },
    handleTouchStart: function(t) {
        this.clipWeCropper.touchStart(t);
    },
    handleTouchMove: function(t) {
        this.clipWeCropper.touchMove(t);
    },
    handleTouchEnd: function(t) {
        this.clipWeCropper.touchEnd(t);
    }
});