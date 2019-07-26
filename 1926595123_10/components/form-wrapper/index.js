var t = getApp();

Component({
    properties: {
        url: {
            type: String,
            default: ""
        }
    },
    methods: {
        onSubmit: function(r) {
            t.pushFormId(r.detail.formId), this.data.url && wx.navigateTo({
                url: this.data.url
            });
        }
    }
});