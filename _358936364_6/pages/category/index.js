var e = require("../../libs/wechat-weapp-mobx/observer").observer;

Page(e({
    props: {
        homeStore: require("../../store/index.js").homeStore
    },
    data: {
        pageNo: 1,
        pageSize: 10
    },
    onShareAppMessage: function() {
        return {
            title: "neets高清壁纸",
            imageUrl: "../../images/on-share.png"
        };
    },
    onLoad: function(e) {
        this.props.homeStore;
    },
    onUnload: function() {},
    _loadMoreWallPaper: function(e) {},
    _changeCategory: function(e) {
        var o = this.props.homeStore, t = e.currentTarget.dataset, n = (t.type, t.index), a = void 0 === n ? 0 : n;
        console.log("type-------------", a), o.setCurrentType({
            index: a
        }).then(function() {
            wx.navigateBack({
                delta: 1
            });
        });
    },
    _onTitleTap: function(e) {
        console.log("_titleTap---------", e), wx.navigateBack({
            delt: 1
        });
    }
}));