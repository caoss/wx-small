getApp();

Component({
    properties: {
        flight: {
            type: Object,
            value: {}
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        flightChange: function(t) {
            t && this.triggerEvent("flightchange", {
                flight_no: t.detail.value
            });
        },
        flightDateChange: function(t) {
            t && this.triggerEvent("flightchange", {
                flight_date: t.detail.value
            });
        }
    }
});