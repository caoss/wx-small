function r(r) {
    if (Array.isArray(r)) {
        for (var a = 0, e = Array(r.length); a < r.length; a++) e[a] = r[a];
        return e;
    }
    return Array.from(r);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(a) {
    var e = a.canvasId, n = a.background, t = a.avatar;
    return new Promise(function(a, c) {
        var o = wx.createCanvasContext(e);
        o.drawImage.apply(o, [ n.src ].concat(r(n.args))), o.drawImage.apply(o, [ t.src ].concat(r(t.args))), 
        o.draw(!1, function() {
            wx.canvasToTempFilePath({
                canvasId: e,
                success: function(r) {
                    var e = r.tempFilePath;
                    return a(e);
                },
                fail: function(r) {
                    return c(r);
                }
            });
        });
    });
};