Component({
    properties: {
        imageUrl: {
            type: String,
            value: ""
        }
    },
    methods: {
        download: function() {
            var o = this;
            wx.showLoading({
                mask: !0
            }), wx.downloadFile({
                url: o.properties.imageUrl,
                success: function(o) {
                    wx.saveImageToPhotosAlbum({
                        filePath: o.tempFilePath,
                        success: function() {
                            wx.showToast({
                                title: "已保存到相册"
                            });
                        },
                        fail: function(o) {
                            wx.showModal({
                                title: "保存失败",
                                content: "错误:" + o.errMsg,
                                showCancel: !1
                            });
                        }
                    });
                },
                fail: function(o) {
                    console.log(o), wx.showModal({
                        title: "下载失败",
                        content: "错误:" + o.errMsg,
                        showCancel: !1
                    });
                }
            });
        }
    }
});