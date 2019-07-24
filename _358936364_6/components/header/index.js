var t = getApp();

Component({
    properties: {
        title: {
            type: String,
            value: "",
            observer: function(t, e, a) {}
        },
        showBack: {
            type: Boolean,
            value: !0
        },
        backgroundColor: {
            type: String,
            value: ""
        },
        left: {
            type: Object,
            value: null
        },
        type: {
            type: Number,
            value: 0
        },
        leftIcon: {
            type: String,
            value: "../../images/back.png"
        },
        titleIcon: {
            type: String,
            value: null
        },
        titleIconR: {
            type: Boolean,
            value: !1
        },
        showLeft: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        statusBarHeight: 0,
        navgationHeight: 0
    },
    created: function() {},
    attached: function() {
        var e = t.globalData, a = e.statusBarHeight, n = void 0 === a ? 0 : a, i = e.navgationHeight, o = void 0 === i ? 0 : i;
        this.setData({
            statusBarHeight: n,
            navgationHeight: o
        });
    },
    methods: {
        _goBack: function() {
            wx.navigateBack({
                delta: 1
            });
        },
        _leftIconTap: function() {
            this.triggerEvent("onLeftTap");
        },
        _titleTap: function() {
            this.triggerEvent("onTitleTap");
        }
    }
});