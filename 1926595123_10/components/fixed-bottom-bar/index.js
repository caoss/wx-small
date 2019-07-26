getApp();

Component({
    externalClasses: [ "bottom-bar-style" ],
    properties: {
        bottom: {
            type: Number,
            value: 0
        }
    },
    data: {
        fitHeight: "0",
        staticHeight: "0"
    },
    ready: function() {
        var t = this, e = wx.getSystemInfoSync(), i = wx.createSelectorQuery().in(this);
        e.statusBarHeight > 40 && this.setData({
            fitHeight: "68rpx"
        }), i.select(".fixed-layout-inner").boundingClientRect(function(e) {
            e && t.setData({
                staticHeight: e.height + 34 + "px"
            });
        }).exec();
    }
});