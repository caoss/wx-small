Page({
    data: {
        url: ""
    },
    onLoad: function(n) {
        this.setData({
            url: decodeURIComponent(n.url)
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "您的好友分享了一个好玩的",
            path: "tradis/h5/h5?url=" + encodeURIComponent(this.data.url),
            success: function(n) {
                console.log(n);
            },
            fail: function(n) {
                console.log("分享失败");
            }
        };
    }
});