var e = require("../../libs/wechat-weapp-mobx/observer").observer;

Page(e({
    props: {
        homeStore: require("../../store/index.js").homeStore
    },
    data: {
        loadStatus: "loading",
        currentIndex: 0,
        showCategory: !1
    },
    onShareAppMessage: function() {
        var e = "", a = "../../images/on-share.png", s = this.props.homeStore;
        switch (console.log("currentType", s.currentType.id), s.currentType.id) {
          case 1:
            e = s.shareTiles[3], a = "../../images/shareImgs/select.jpeg";
            break;

          case 2:
            e = s.shareTiles[1], a = "../../images/shareImgs/fuzhai.jpeg";
            break;

          case 10:
            e = s.shareTiles[2], a = "../../images/shareImgs/jutu.jpeg";
            break;

          case 6:
            e = s.shareTiles[4], a = "../../images/shareImgs/jitang.jpeg";
            break;

          case 4:
            e = s.shareTiles[5], a = "../../images/shareImgs/game.jpeg";
            break;

          case 5:
            e = s.shareTiles[6];
            break;

          case 7:
            e = s.shareTiles[0], a = "../../images/shareImgs/avter.jpeg";
            break;

          case 9:
            e = s.shareTiles[0], a = "../../images/shareImgs/animate.jpeg";
            break;

          case 3:
            e = s.shareTiles[0], a = "../../images/shareImgs/aidou.jpeg";
            break;

          default:
            e = s.shareTiles[0], a = "";
        }
        return {
            title: e,
            imageUrl: a,
            path: "/pages/home/index"
        };
    },
    onLoad: function(e) {},
    onUnload: function() {},
    _loadMoreWallPaper: function(e) {
        console.log("chu fa");
        var a = this.props.homeStore;
        console.log("_loadMoreWallPaper-------------", e), a.wallpaperDataColum.more && a.getWallpapperList();
    },
    tabImageItem: function(e) {
        console.log(e);
        var a = e.currentTarget.dataset.currentIndex, s = void 0 === a ? "" : a;
        wx.navigateTo({
            url: "../detail/index?currentIndex=" + s
        });
    },
    _onLeftTap: function(e) {
        console.log("_leftIconTap---------", e);
        var a = this.props.homeStore;
        console.log("_leftIconTap---------", e), a.setCurrentType2(0), wx.navigateBack({
            delt: 1
        });
    },
    _onTitleTap: function(e) {
        console.log("_titleTap---------", e), console.log("_titleTap---------", e), this.setData({
            showCategory: !this.data.showCategory
        });
    },
    _onCayegoryChange: function(e) {
        var a = this, s = this.props.homeStore, r = e.detail, o = (r.type, r.index), t = void 0 === o ? 0 : o;
        s.setCurrentType({
            index: t
        }).then(function(e) {
            console.log("res", e), e.status, a.setData({
                showCategory: !1
            });
        });
    }
}));