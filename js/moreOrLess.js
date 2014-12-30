/**
 * User: oberdila
 * Date: 12/30/14
 * Time: 11:29 AM
 */

var moreOrLess = function (element) {
    var showMoreText = "Show more";
    var showLessText = "Show less";

    var that = {};
    var isVisible;
    var button = $("<a></a>");

    var init = function () {
        element.hide();
        isVisible = false;

        button.text(showMoreText);

        button.click(function () {
            if (isVisible) {
                that.showLess();
            } else {
                that.showMore();
            }
        });

        button.mouseover(function () {
            button.css("cursor", "pointer");
        });

        element.after(button);
    };

    that.showLess = function () {
        element.slideUp(400);
        button.text(showMoreText);
        isVisible = false;
    };

    that.showMore = function () {
        element.slideDown(400);
        button.text(showLessText);
        isVisible = true;
    };

    init();

    return that;
}
