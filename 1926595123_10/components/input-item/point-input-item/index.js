var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
};

getApp();

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        label: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: ""
        },
        value: {
            type: String
        },
        password: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        styles: {
            type: String,
            value: ""
        },
        maxlength: {
            type: Number,
            value: 100
        },
        focus: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        bindInputHandler: function(t) {
            t && this.triggerEvent("inputEvent", e({}, t.detail));
        },
        bindBlurHandler: function(t) {
            t && this.triggerEvent("blurEvent", e({}, t.detail));
        },
        bindFocusHandler: function(t) {
            t && this.triggerEvent("focusEvent", e({}, t.detail));
        }
    }
});