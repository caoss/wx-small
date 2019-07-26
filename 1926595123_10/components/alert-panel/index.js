getApp();

Component({
    properties: {
        isShow: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        hideHandler: function() {
            this.setData({
                isShow: !this.properties.isShow
            });
        }
    }
});