getApp();

Component({
    properties: {
        swipeVelocity: {
            type: Number,
            value: 1500
        },
        swipeThreshold: {
            type: Number,
            value: 30
        },
        doubletapVelocity: {
            type: Number,
            value: 500
        }
    },
    data: {
        touched: !1,
        startTime: 0,
        startAngle: 0,
        startScale: 0,
        startTouch: null,
        tapCount: 0,
        startTabTime: 0,
        startPosition: {}
    },
    attached: function() {},
    methods: {
        start: function(t) {
            var a = t.touches;
            this.data.touched = !0, this.data.startTouch || (this.data.startTime = Date.now(), 
            this.data.startTouch = a[0]), this.data.startPosition = this.getPosition(a), a.length > 1 && (this.data.startAngle = this.getAngle(a[0], a[1]), 
            this.data.startScale = this.getDistance(a[0], a[1]));
        },
        move: function(t) {
            var a = void 0, e = void 0;
            this.data.touched && (a = t.touches, e = this.getPosition(a), t.deltaX = e.x - this.data.startPosition.x, 
            t.deltaY = e.y - this.data.startPosition.y, a.length > 1 && (t.angle = this.data.startAngle - this.getAngle(a[0], a[1]), 
            events.rotate.call(context, t), t.scale = this.getDistance(a[0], a[1]) / this.data.startScale));
        },
        end: function(t) {
            if (this.data.touched) {
                if (!this.data.swipeVelocity || Date.now() - this.data.startTime <= this.data.swipeVelocity) {
                    var a = t.changedTouches[0], e = a.clientX - this.data.startTouch.clientX, i = a.clientY - this.data.startTouch.clientY, s = Math.abs(e), n = Math.abs(i);
                    (s >= this.data.swipeThreshold || n >= this.data.swipeThreshold) && (t.direction = s > n ? e > 0 ? "right" : "left" : i > 0 ? "down" : "up", 
                    this.triggerEvent("onSwipe", t));
                }
                0 == t.touches.length ? (this.data.touched = !1, this.data.startTouch = null) : this.data.startPosition = this.getPosition(t.touches);
            }
        },
        cancel: function(t) {
            this.end(t);
        },
        tap: function(t) {
            var a = Date.now();
            this.data.tapCount > 0 && a - this.data.startTabTime <= this.data.doubletapVelocity ? this.data.tapCount = -1 : this.data.tapCount = 0, 
            this.data.startTabTime = a, this.data.tapCount++;
        },
        getAngle: function(t, a) {
            return 180 / Math.PI * Math.atan2(a.clientX - t.clientX, a.clientY - t.clientY);
        },
        getDistance: function(t, a) {
            return Math.sqrt(Math.pow(t.clientX - a.clientX, 2) + Math.pow(t.clientY - a.clientY, 2));
        },
        getPosition: function(t) {
            for (var a = 0, e = 0, i = t.length, s = i; s--; ) a += t[s].clientX, e += t[s].clientY;
            return {
                x: a / i,
                y: e / i
            };
        }
    }
});