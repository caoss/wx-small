getApp();

Component({
    properties: {
        options: {
            type: Array,
            value: []
        },
        label: {
            type: String,
            value: ""
        },
        value: {
            type: null,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        clickHandler: function(e) {
            this.properties.disabled || this.triggerEvent("change", {
                label: e.currentTarget.dataset.option,
                value: e.currentTarget.dataset.index
            });
        }
    }
});