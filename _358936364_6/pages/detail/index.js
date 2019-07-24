var t = require("../../libs/wechat-weapp-mobx/observer").observer;

getApp();

Page(t({
    props: {
        homeStore: require("../../store/index.js").homeStore
    },
    data: {
        showAction: !0,
        currentIndex: null,
        imageUrl: "",
        showPoster: !1,
        posterData: {},
        bigSize: 0,
        smallSize: 0
    },
    onLoad: function(t) {
        var e = this, a = this.props.homeStore, o = t.currentIndex, r = void 0 === o ? 0 : o, i = a.wallpaperData;
        a.cur_type && (i = a.wallpaperDataColum);
        var s = i.list[parseInt(r)].imgUrl + "?imageMogr2/thumbnail/640x";
        a.getSize(s).then(function(t) {
            var a = t.size;
            e.setData({
                currentIndex: parseInt(r),
                bigSize: Math.floor((i.list[parseInt(r)].imgSize - 0) / 1048576 * 100) / 100,
                smallSize: Math.floor(a / 1048576 * 100) / 100
            });
        });
    },
    onUnload: function() {},
    onImageChange: function(t) {
        var e = this, a = t.detail.current, o = void 0 === a ? 0 : a, r = this.props.homeStore;
        this.data.currentIndex = o;
        var i = r.wallpaperData;
        r.cur_type && (i = r.wallpaperDataColum);
        var s = i.list[o].imgUrl + "?imageMogr2/thumbnail/640x";
        r.getSize(s).then(function(t) {
            var a = t.size;
            e.setData({
                smallSize: Math.floor(a / 1048576 * 100) / 100
            });
        }), this.setData({
            currentIndex: o,
            bigSize: Math.floor((i.list[o].imgSize - 0) / 1048576 * 100) / 100
        });
    },
    onAnimationfinish: function(t) {
        var e = this.props.homeStore, a = this.data.currentIndex, o = e.wallpaperData;
        e.cur_type && (o = e.wallpaperDataColum), o.more && o.list.length - a == 1 && (wx.showLoading({
            title: "",
            mask: !0
        }), e.getWallpapperList());
    },
    _tapDownload: function(t) {
        var e = t.currentTarget.dataset.index;
        console.log(e);
        var a = this.props.homeStore, o = this.data.currentIndex, r = void 0 === o ? 0 : o, i = "", s = a.wallpaperData;
        a.cur_type && (s = a.wallpaperDataColum), i = 1 == e ? s.list[r].imgUrl : s.list[r].imgUrl + "?imageMogr2/thumbnail/640x";
        var l = s.list[r].id;
        console.log("_tapDownload-----------", i), wx.showLoading({
            title: "正在下载...",
            mask: !0
        }), wx.getImageInfo({
            src: i,
            success: function(t) {
                console.log("res-----------", t), wx.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function(t) {
                        wx.showToast({
                            title: "下载完成"
                        }), a.downLoadSuccess(l);
                    },
                    fail: function(t) {
                        wx.showToast({
                            title: "下载失败",
                            image: "../../images/download_fail_white.png"
                        });
                    }
                });
            },
            fail: function(t) {
                console.log("err-----------", t), wx.showToast({
                    title: "下载失败",
                    image: "../../images/download_fail_white.png"
                });
            }
        });
    },
    _tapPoster: function(t) {
        var e = this.props.homeStore, a = this.data.currentIndex, o = void 0 === a ? 0 : a, r = e.wallpaperData.list[o].url, i = e.wallpaperData.list[o].text ? "currentIndex" + o : "this is text";
        this.data.posterData = {
            imageUrl: r,
            text: i
        }, this.setData({
            posterData: this.data.posterData,
            showPoster: !0
        });
    },
    _cancelPoster: function(t) {
        this.setData({
            showPoster: !1
        });
    },
    _tapPreview: function(t) {
        var e = this.props.homeStore, a = this.data.currentIndex, o = void 0 === a ? 0 : a, r = e.wallpaperData;
        e.cur_type && (r = e.wallpaperDataColum);
        var i = r.list[o].url;
        console.log("url----------------", i), wx.previewImage({
            urls: [ i ]
        });
    },
    _onSwipe: function(t) {
        console.log(t);
        var e = t.detail.direction;
        e && "down" === e && wx.navigateBack({
            delt: 1
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.props.homeStore.shareTiles[0],
            imageUrl: "../../images/on-share.png",
            path: "/pages/home/index"
        };
    },
    parseSize: function(t) {
        return Math.ceil(100) + "";
    }
}));