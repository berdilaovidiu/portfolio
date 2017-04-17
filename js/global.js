var fancyboxOptions = {
    afterLoad: function (instance, slide) {
        var style = slide.opts.$orig[0].getAttribute("class");
        if (style !== null && style.includes("needsBorder")) {
            $(slide.$image[0]).addClass("fancybox-image-with-border");
        }
    },

    margin: [60, 0, 80, 0],

    slideShow: false,
    fullScreen: true,
    thumbs: false,
    closeBtn: true,

};