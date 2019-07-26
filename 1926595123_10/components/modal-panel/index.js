var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
};

getApp();

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        showCancel: {
            type: Boolean,
            value: !0
        },
        isShow: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        confirm: function(e) {
            this.triggerEvent("click", t({
                confirm: !0
            }, e.detail)), this.setData({
                isShow: !1
            });
        },
        cancel: function(e) {
            this.triggerEvent("click", t({
                cancel: !0
            }, e.detail)), this.setData({
                isShow: !1
            });
        }
    }
});