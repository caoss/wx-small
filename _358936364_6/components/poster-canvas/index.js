var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
    }
    return t;
}, e = getApp(), a = parseFloat((e.globalData.windowWidth / 375).toFixed(2));

Component({
    properties: {
        posterData: {
            type: Object,
            value: {}
        },
        height: {
            type: Number,
            value: 1e3
        }
    },
    data: {
        posterContext: null,
        canvasHeight: 0,
        canvasWidth: 0
    },
    ready: function() {
        var e = this.data.posterData, a = void 0 === e ? {} : e, i = this, o = wx.createSelectorQuery(), n = wx.createCanvasContext("poater-canvas", this);
        this.data.posterContext = n, o.in(this), o.select("#poater-canvas-con").boundingClientRect(function(e) {
            var o = e && e.width ? e.width : 0, s = e && e.height ? e.height : 0;
            i.data.canvasWidth = o, i.data.canvasHeight = s, wx.getImageInfo({
                src: a.imageUrl ? a.imageUrl : "",
                success: function(e) {
                    var a = e.width, r = e.height, h = 0, l = 0, c = a / r;
                    c >= o / s ? (r = s, h = ((a = c * s) - o) / 2) : (a = o, l = ((r = o / c) - s) / 2), 
                    i.generatePoster(n, t({
                        image: {
                            path: e.path,
                            width: a,
                            height: r,
                            dx: h,
                            dy: l
                        }
                    }, i.data.posterData));
                }
            });
        }).exec();
    },
    methods: {
        generatePoster: function(t, e) {
            t.drawImage(e.image.path, -e.image.dx, -e.image.dy, e.image.width, e.image.height), 
            this.drawDate(t), t.draw();
        },
        drawDate: function(t) {
            var e = new Date().toDateString().split(" "), i = (this.data.canvasWidth, this.data.canvasHeight, 
            parseInt(48 * a)), o = 1.2 * i, n = parseInt(64 * a), s = 16 * a;
            t.font = "normal bold " + i + "px/" + o + " Roboto-Bold", console.log(e), t.setTextAlign("left"), 
            t.setFillStyle("#FFF"), t.fillText(e[2], s, n);
            var r = parseInt(18 * a), h = 1.2 * r, l = 16 * a + this.getTextWidth(t, e[2]);
            t.font = "normal normal " + r + "px/" + h + " Roboto", t.fillText(e[1], l, n);
            var c = l + this.getTextWidth(t, e[1]), d = n + 10 * a;
            t.setLineWidth(1), t.setStrokeStyle("#FFF"), t.moveTo(s, d), t.lineTo(s + c, d), 
            t.stroke();
            var g = parseInt(12 * a), p = r, f = 94 * a;
            t.font = "normal normal " + g + "px/" + p + " Roboto", t.fillText(e[0], s, f);
            var v = s + 7 * a + this.getTextWidth(t, e[0]);
            t.fillText("/", v, f);
            parseInt(12 * a);
            var w = v + 7 * a + this.getTextWidth(t, "/");
            t.font = "normal normal " + g + "px/" + p + " Roboto", t.fillText(e[3], w, f);
        },
        getTextWidth: function(t, e) {
            var a = t.measureText(e).width;
            return console.log(a), a;
        },
        _tapDownload: function(t) {
            wx.canvasToTempFilePath({
                canvasId: "poater-canvas",
                x: 0,
                y: 0,
                width: this.data.canvasWidth,
                height: this.data.canvasHeight,
                success: function(t) {
                    console.log("tempFilePath", t);
                    var e = t.tempFilePath;
                    wx.showLoading({
                        title: "正在下载...",
                        mask: !0
                    }), wx.getImageInfo({
                        src: e,
                        success: function(t) {
                            wx.saveImageToPhotosAlbum({
                                filePath: t.path,
                                success: function(t) {
                                    wx.showToast({
                                        title: "下载完成"
                                    });
                                },
                                fail: function(t) {
                                    wx.showToast({
                                        title: "下载失败",
                                        image: "../../images/download_fail_white.png"
                                    });
                                }
                            });
                        },
                        fail: function(t) {
                            wx.showToast({
                                title: "下载失败",
                                image: "../../images/download_fail_white.png"
                            });
                        }
                    });
                },
                fail: function(t) {
                    console.log("err-----------", t);
                }
            }, this);
        }
    }
});