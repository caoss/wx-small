var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
}, t = getApp();

Component({
    properties: {
        color: {
            type: String,
            value: "#fff"
        },
        bgcolor: {
            type: String,
            value: "#C7AA81"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        formsubmit: function(o) {
            t.pushFormId(o.detail.formId), this.triggerEvent("click", e({}, o.detail));
        }
    }
});