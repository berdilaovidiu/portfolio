/**
 * User: oberdila
 * Date: 1/8/15
 * Time: 12:40 PM
 */

var initTopMenuActions = function () {
    var mobileMenuVisible = false;
    var topMenuHeight = $("#top_menu").css("height");
    var topMenuColor = $("#top_menu").css("background-color");

    var mobileMenu = $("<div></div>");
    mobileMenu.attr("id", "mobile_menu");
    mobileMenu.load("side_menu.html #menu");
    mobileMenu.css("position", "absolute");
    mobileMenu.css("top", topMenuHeight);
    mobileMenu.css("width", "100%");
    mobileMenu.css("height", "100%");
    mobileMenu.css("background-color", topMenuColor);
    mobileMenu.hide();

    $("body").append(mobileMenu);

    $("#top_menu #hamburger_menu").click(function () {
        if (!mobileMenuVisible) {
            mobileMenu.show();
            mobileMenuVisible = true;
        } else {
            mobileMenu.hide();
            mobileMenuVisible = false;
        }
    });
}
