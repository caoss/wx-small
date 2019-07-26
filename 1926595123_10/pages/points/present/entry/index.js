var t = getApp();

Page({
    data: {
        types: [ "日上账户", "微信好友" ],
        currentType: 0
    },
    onLoad: function() {},
    onShow: function() {
        t.loadFontFace();
    },
    getInfo: function() {
        var n = this;
        t.request({
            url: "points/getInfo",
            success: function(t) {
                0 === t.err && n.store.points.dispatch(t.res);
            }
        });
    }
});