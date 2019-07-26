var e = getApp();

Page({
    data: {
        qrcode: null,
        user: null
    },
    onLoad: function() {
        this.setData({
            user: e.getUser()
        }), this.getCode();
    },
    getCode: function() {
        var t = this;
        wx.showLoading(), e.request({
            url: "user/getMemberQrcode",
            success: function(e) {
                0 === e.err && t.setData({
                    qrcode: e.res.qrcode
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    }
});