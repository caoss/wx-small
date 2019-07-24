function n(o, u) {
    wx.saveImageToPhotosAlbum({
        filePath: o,
        success: function(n) {
            u(null, n);
        },
        fail: function(o) {
            "saveImageToPhotosAlbum:fail auth deny" === o.errMsg && e("授权失败将无法保存照片，是否打开？").then(function() {
                t().then(function(t) {
                    return n(u);
                }, function() {
                    e("没能授权，您仍可通过预览功能手动保存照片");
                });
            }), u(o);
        }
    });
}

function t() {
    return new Promise(function(n, t) {
        wx.openSetting({
            success: function(e) {
                return e.authSetting["scope.writePhotosAlbum"] ? n(e) : t(e);
            },
            fail: function(n) {
                return t(n);
            }
        });
    });
}

function e(n) {
    return new Promise(function(t, e) {
        wx.showModal({
            title: "保存失败",
            content: n,
            showCancel: !1,
            success: function(n) {
                return n.confirm && t(null);
            },
            fail: function() {
                return e(new Error());
            }
        });
    });
}

module.exports = function(t) {
    return new Promise(function(o, u) {
        if (!wx.saveImageToPhotosAlbum) return e("当前微信版本过低，不支持保存。").then(function() {
            wx.previewImage({
                urls: [ t ]
            });
        }), u(new Error("NOT_SUPPORT"));
        n(t, function(n, t) {
            if (n) return u(new Error(n));
            o(t);
        });
    });
};