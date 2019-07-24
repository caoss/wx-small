var e = require("../../libs/wechat-weapp-mobx/observer").observer;

Page(e({
    props: {
        homeStore: require("../../store/index.js").homeStore
    },
    data: {
        currentIndex: 0,
        showCategory: !1,
        showUpDialog: !1,
        bigSize: 0,
        smallSize: 0
    },
    onLoad: function(e) {},
    onUnload: function() {},
    onImageChange: function(e) {
        var a = e.detail.current, t = void 0 === a ? 0 : a;
        this.props.homeStore;
        this.data.currentIndex = t, this.setData({
            currentIndex: t
        });
    },
    onAnimationfinish: function(e) {
        var a = this.props.homeStore, t = this.data.currentIndex, s = a.wallpaperData;
        s.more && s.list.length - t == 1 && a.getWallpapperList();
    },
    tabImage: function(e) {
        var a = e.currentTarget.dataset.currentIndex, t = void 0 === a ? "" : a;
        wx.navigateTo({
            url: "../detail/index?currentIndex=" + t
        });
    },
    _onLeftTap: function(e) {
        var a = this.props.homeStore;
        console.log("_leftIconTap---------", e), a.setCurrentType2(1), a.getWallpapperList({
            pageNo: 1
        }), wx.navigateTo({
            url: "../home-column/index"
        });
    },
    _onTitleTap: function(e) {
        console.log("_titleTap---------", e), this.setData({
            showCategory: !this.data.showCategory
        });
    },
    _onCayegoryChange: function(e) {
        var a = this, t = this.props.homeStore, s = e.detail, r = (s.type, s.index), o = void 0 === r ? 0 : r, i = s.onlyavatar;
        i && (t.setCurrentType2(1), wx.navigateTo({
            url: "../home-column/index"
        })), t.setCurrentType({
            index: o,
            onlyavatar: i
        }).then(function(e) {
            console.log("res", e), 0 === e.status ? a.setData({
                currentIndex: 0,
                showCategory: !1
            }) : a.setData({
                showCategory: !1
            });
        });
    },
    onShareAppMessage: function() {
        var e = "", a = "../../images/on-share.png", t = this.props.homeStore;
        switch (console.log("currentType", t.currentType.id), t.currentType.id) {
          case 1:
            e = t.shareTiles[3], a = "../../images/shareImgs/select.jpeg";
            break;

          case 2:
            e = t.shareTiles[1], a = "../../images/shareImgs/fuzhai.jpeg";
            break;

          case 10:
            e = t.shareTiles[2], a = "../../images/shareImgs/jutu.jpeg";
            break;

          case 6:
            e = t.shareTiles[4], a = "../../images/shareImgs/jitang.jpeg";
            break;

          case 4:
            e = t.shareTiles[5], a = "../../images/shareImgs/game.jpeg";
            break;

          case 5:
            e = t.shareTiles[6];
            break;

          case 7:
            e = t.shareTiles[0], a = "../../images/shareImgs/avter.jpeg";
            break;

          case 9:
            e = t.shareTiles[0], a = "../../images/shareImgs/animate.jpeg";
            break;

          case 3:
            e = t.shareTiles[0], a = "../../images/shareImgs/aidou.jpeg";
            break;

          default:
            e = t.shareTiles[0], a = "";
        }
        return {
            title: e,
            imageUrl: a,
            path: "/pages/home/index"
        };
    },
    _upImgs: function(e) {
        var a = this, t = this.props.homeStore, s = this.data.currentIndex, r = t.wallpaperData.list[s].imgUrl + "?imageMogr2/thumbnail/640x";
        t.getSize(r).then(function(e) {
            var r = e.size;
            a.setData({
                bigSize: Math.floor((t.wallpaperData.list[s].imgSize - 0) / 1048576 * 100) / 100,
                smallSize: Math.floor(r / 1048576 * 100) / 100,
                showUpDialog: !a.data.showUpDialog
            });
        });
    },
    _tapDownload: function(e) {
        var a = e.currentTarget.dataset.index, t = this.props.homeStore, s = this.data.currentIndex, r = void 0 === s ? 0 : s, o = "";
        o = 1 == a ? t.wallpaperData.list[r].imgUrl : t.wallpaperData.list[r].imgUrl + "?imageMogr2/thumbnail/640x";
        var i = t.wallpaperData.list[r].id;
        console.log("wpId-----------", i), wx.showLoading({
            title: "正在下载...",
            mask: !0
        }), wx.getImageInfo({
            src: o,
            success: function(e) {
                console.log("res-----------", e), wx.saveImageToPhotosAlbum({
                    filePath: e.path,
                    success: function(e) {
                        t.downLoadSuccess(i), wx.showToast({
                            title: "下载完成"
                        });
                    },
                    fail: function(e) {
                        wx.showToast({
                            title: "下载失败",
                            image: "../../images/download_fail_white.png"
                        });
                    }
                });
            },
            fail: function(e) {
                console.log("err-----------", e), wx.showToast({
                    title: "下载失败",
                    image: "../../images/download_fail_white.png"
                });
            }
        });
    },
    _redirectH5: function() {
        wx.navigateTo({
            url: "../h5-page/index"
        });
    }
}));