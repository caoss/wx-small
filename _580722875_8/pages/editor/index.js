function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a) {
    var e = new Date().getTime(), s = Math.max(0, 16 - (e - g)), i = setTimeout(function() {
        t(e + s);
    }, s);
    return g = e + s, i;
}

var e = t(require("../../utils/av-weapp-min.js")), s = t(require("../../utils/getShareText")), i = t(require("../../utils/saveFile")), n = getApp(), r = wx.getSystemInfoSync(), h = r.model, o = r.windowWidth, c = r.windowHeight, l = r.SDKVersion, d = r.platform, u = 750 / o, v = 675 / u, g = 0;

Page({
    currentEdit: 0,
    initialAngle: .25 * Math.PI,
    hats: [],
    data: {
        isPhoneX: !!(h.indexOf("iPhone X") >= 0),
        savedImagePath: "",
        backgroundUrl: "",
        currentCat: 0,
        currentHat: null,
        hats: [],
        contentTop: 0,
        tempUrl: ""
    },
    onShareAppMessage: function() {
        return {
            title: (0, s.default)(),
            path: "/pages/selector/index"
        };
    },
    onLoad: function(t) {
       
        var a = this, s = t.url;
        s || wx.showToast({
            title: "图片不存在",
            showCancel: !1,
            success: function() {
                wx.navigateBack({
                    delta: 1
                });
            }
        });
        var i = u * (c - (this.data.isPhoneX ? 98 : 0));
        n.globalData.hats && n.globalData.hats.length <= 0 ? new e.default.Query("Categories").find().then(function(t) {
            var e = t.map(function(t) {
                return {
                    items: t.get("hats"),
                    icon: {
                        default: t.get("default"),
                        active: t.get("active")
                    }
                };
            });
            n.globalData.hats = e, a.setData({
                hats: e
            });
        }) : this.setData({
            hats: n.globalData.hats
        }), this.setBackground(s), this.setData({
            contentTop: i - 750 - 335
        });
        
    },
    handleClickHat: function(t) {
        var a = this, e = t.currentTarget.dataset, s = e.src, i = e.index;
        this.setData({
            currentHat: i
        }), s.indexOf("https") >= 0 ? (wx.showNavigationBarLoading(), wx.showToast({
            title: "载入中",
            duration: 2e4,
            icon: "loading"
        }), wx.downloadFile({
            url: s,
            success: function(t) {
                wx.hideToast(), wx.hideNavigationBarLoading(), a.addHatToCanvas(t.tempFilePath);
            },
            fail: function(t) {
                wx.showModal({
                    title: "加载失败",
                    content: "很抱歉，表情加载失败，关注官方公众号反馈问题;"
                });
            }
        })) : this.addHatToCanvas(s);
    },
    addHatToCanvas: function(t) {
        var a = {
            startX: 0,
            startY: 0,
            lastX: .5 * v,
            lastY: .5 * v,
            x: .5 * v,
            y: .5 * v,
            scaleWidth: 100,
            width: 100,
            angle: 0,
            r: 70.7,
            rbX: 70.7 * Math.cos(.25 * Math.PI),
            rbY: 70.7 * Math.sin(.25 * Math.PI),
            src: t,
            delta: 0,
            lastDelta: 0,
            scale: 1,
            lastScale: 1,
            editing: !0,
            removed: !1
        };
        wx.reportAnalytics("hat_selected", {
            hat_id: t
        }), this.hats.unshift(a), this.currentEdit = 0, this.repaint();
    },
    repaint: function() {
        a(this._repaint);
    },
    _repaint: function() {
        var t = this, a = wx.createCanvasContext("baseCanvas");
        a.drawImage(this.data.backgroundUrl, 0, 0, v, v), a.save(), this.hats.forEach(function(e, s) {
            a.save(), a.translate(e.x, e.y), e.angle ? a.rotate(e.angle - t.initialAngle) : a.rotate(e.angle), 
            a.drawImage(e.src, -e.scaleWidth / 2, -e.scaleWidth / 2, e.scaleWidth, e.scaleWidth), 
            t.currentEdit === s && (a.setStrokeStyle("#F9DCCB"), a.setLineWidth(3), a.setLineDash && "function" == typeof a.setLineDash && a.setLineDash([ 10, 10 ], 5), 
            a.setLineJoin("round"), a.strokeRect(-e.scaleWidth / 2, -e.scaleWidth / 2, e.scaleWidth, e.scaleWidth), 
            a.drawImage("/assets/zoom2.png", e.scaleWidth / 2 - 10, e.scaleWidth / 2 - 10, 20, 20), 
            a.drawImage("/assets/delete2.png", -e.scaleWidth / 2 - 10, -e.scaleWidth / 2 - 10, 20, 20)), 
            a.translate(-e.x, -e.y), a.restore();
        }), a.draw();
    },
    handleTouchStart: function(t) {
        for (var a = t.touches[0], e = a.x, s = a.y, i = e, n = s, r = 0; r < this.hats.length; r++) i <= this.hats[r].x + .5 * this.hats[r].scaleWidth && i >= this.hats[r].x - .5 * this.hats[r].scaleWidth && n <= this.hats[r].y + .5 * this.hats[r].scaleWidth && n >= this.hats[r].y - .5 * this.hats[r].scaleWidth && (this.currentEdit = r);
        if (this.repaint(), this.hats[this.currentEdit]) {
            var h = this.hats[this.currentEdit];
            i <= h.x + h.rbX + 20 && i >= h.x + h.rbX - 20 && n <= h.y + h.rbY + 20 && n >= h.y + h.rbY - 20 ? (h.rotation = !0, 
            h.moving = !1, h.editing = !0, h.lastDelta = Math.sqrt((e - h.x) * (e - h.x) + (s - h.y) * (s - h.y))) : i <= h.x - h.rbX + 20 && i >= h.x - h.rbX - 20 && n <= h.y - h.rbY + 20 && n >= h.y - h.rbY - 20 ? this.removeHat() : i >= h.x - h.r + 20 && i <= h.x + h.r - 20 && n <= h.y + h.r - 20 && n >= h.y - h.r + 20 && (h.rotation = !1, 
            h.moving = !0, h.editing = !0, h.startX = e, h.startY = s);
        }
    },
    handleTouchMove: function(t) {
        if (this.hats[this.currentEdit]) {
            var a = t.touches[0], e = a.x, s = a.y, i = this.hats[this.currentEdit];
            i.rotation && this.updateState(e, s), i.moving && (i.x = i.lastX + e - i.startX, 
            i.y = i.lastY + s - i.startY), this.repaint();
        }
    },
    handleTouchEnd: function(t) {
        if (this.hats[this.currentEdit]) {
            var a = this.hats[this.currentEdit];
            a.rotation = !1, a.moving = !1, a.lastScale = a.scale, a.lastX = a.x, a.lastY = a.y;
        }
    },
    updateState: function(t, a) {
        var e = this.hats[this.currentEdit], s = Math.sqrt((t - e.x) * (t - e.x) + (a - e.y) * (a - e.y));
        e.scale = e.lastScale + .01 * (s - e.lastDelta), e.scaleWidth = e.width * e.scale, 
        e.angle = Math.atan2(a - e.y, t - e.x);
        var i = .5 * Math.sqrt(2 * e.scaleWidth * e.scaleWidth);
        e.r = i, e.rbX = i * Math.cos(e.angle), e.rbY = i * Math.sin(e.angle);
    },
    removeHat: function() {
        this.hats.splice(this.currentEdit, 1), this.repaint();
    },
    handleSave: function() {
        var t = this;
        this.currentEdit = null, this.repaint();
        var a = "长按保存头像";
        "ios" !== d && l < "1.5.0" && (a = "点右上角可以保存头像"), a += "，分享给朋友", wx.showModal({
            title: "提示",
            content: a,
            showCancel: !1,
            confirmText: "知道了",
            complete: function(a) {
                t.saveAvatar(function(t) {
                    wx.previewImage({
                        urls: [ t ]
                    });
                });
            }
        });
    },
    saveAvatar: function(t) {
        var a = this;
        wx.canvasToTempFilePath({
            canvasId: "baseCanvas",
            success: function(e) {
                var s = e.tempFilePath;
                a.setData({
                    savedImagePath: s
                }), t(s);
            }
        });
    },
    handlePreview: function() {
        var t = this;
        this.currentEdit = null, wx.reportAnalytics("save", {
            save: 0
        }), wx.showNavigationBarLoading(), this.repaint(), wx.showToast({
            title: "生成中",
            duration: 3e3,
            success: function() {
                t.saveAvatar(function(a) {
                    t.currentEdit = 0, wx.hideNavigationBarLoading(), (0, i.default)(a).then(function(e) {
                        t.setData({
                            tempUrl: a
                        }), wx.navigateTo({
                            url: "/pages/saved/index?url=" + t.data.tempUrl,
                            complete: function() {
                                wx.hideToast();
                            }
                        });
                    }, function() {
                        wx.showToast({
                            title: "保存到相册失败，请重试或允许授权",
                            duration: 3e3
                        });
                    });
                });
            }
        });
    },
    onCategoryClick: function(t) {
        var a = t.currentTarget.dataset.index;
        this.setData({
            currentCat: a
        });
    },
    handleOpen: function() {
        var t = "/pages/selector/index";
        wx.reLaunch ? wx.reLaunch({
            url: t
        }) : wx.redirectTo({
            url: t
        });
    },
    setBackground: function(t) {
        this.setData({
            backgroundUrl: t
        });
        var a = wx.createCanvasContext("baseCanvas");
        a.drawImage(t, 0, 0, v, v), a.draw();
    }
});