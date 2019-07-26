var e = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
};

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
        placeholder: {
            type: String,
            value: "请输入"
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
        bindFocusHandler: function(t) {
            t && this.triggerEvent("focusEvent", e({}, t.detail));
        },
        bindBlurHandler: function(t) {
            t && this.triggerEvent("blurEvent", e({}, t.detail));
        },
        bindInputHandler: function(t) {
            t && this.triggerEvent("inputEvent", e({}, t.detail));
        }
    }
});