Component({
    properties: {
        imageurl: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        uploadFileHandler: function(e) {
            var i = this;
            if (this.properties.disabled || this.properties.imageurl) return !1;
            e && wx.chooseImage({
                count: 1,
                sizeType: [ "original", "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(e) {
                    var r = e.tempFilePaths;
                    i.triggerEvent("choose", {
                        file: r[0]
                    });
                }
            });
        },
        deleteHandler: function(e) {
            e && this.triggerEvent("delete");
        },
        previewImages: function(e) {
            wx.previewImage({
                urls: [ this.properties.imageurl ]
            });
        }
    }
});