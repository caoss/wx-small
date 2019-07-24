getApp();

Component({
    properties: {
        data: {
            type: Object,
            value: {}
        },
        show: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    attached: function() {},
    methods: {
        _onItemTap: function(t) {
            console.log(t);
            var e = t.currentTarget.dataset, a = e.type, o = void 0 === a ? "" : a, n = e.index, p = void 0 === n ? 0 : n, r = e.onlyavatar;
            this.triggerEvent("onItemTap", {
                type: o,
                index: p,
                onlyavatar: r
            });
        }
    }
});