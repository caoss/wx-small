var t = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
};

getApp();

Component({
    properties: {
        value: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        focus: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        blurHandler: function(e) {
            e && this.triggerEvent("blurEvent", t({}, e.detail));
        },
        focusHandler: function(e) {
            e && this.triggerEvent("focusEvent", t({}, e.detail));
        },
        inputHandler: function(e) {
            e && this.triggerEvent("inputEvent", t({}, e.detail));
        }
    }
});