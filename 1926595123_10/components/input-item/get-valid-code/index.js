var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
    }
    return t;
}, e = getApp();

Component({
    properties: {
        value: {
            type: Number
        },
        type: {
            type: String
        }
    },
    data: {
        loadLock: !1
    },
    methods: {
        bindValueHandler: function(e) {
            e && this.triggerEvent("inputEvent", t({}, e.detail));
        },
        countDown: function() {
            var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60;
            if (e <= 0) return e = 60, this.setData({
                timer: e,
                loadLock: !1
            }), !1;
            this.setData({
                timer: e
            }), setTimeout(function() {
                e -= 1, t.countDown(e);
            }, 1050);
        },
        getCodeHandler: function(t) {
            var o = this;
            return !o.data.loadLock && (11 !== o.properties.value.toString().length ? (wx.showModal({
                title: "错误提示",
                content: "请输入手机号码",
                showCancel: !1
            }), !1) : (o.setData({
                loadLock: !0
            }), wx.showLoading(), void e.request({
                url: "user/sendMobileVerify",
                data: {
                    type: o.properties.type,
                    mobile: o.properties.value
                },
                success: function(t) {
                    0 === t.err && (wx.showToast({
                        title: "验证码发送成功",
                        duration: 1e3
                    }), o.countDown());
                },
                complete: function() {
                    !o.data.timer && o.setData({
                        loadLock: !1
                    }), wx.hideLoading();
                }
            })));
        }
    }
});