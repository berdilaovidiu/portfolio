/**
 * User: oberdila
 * Date: 1/8/15
 * Time: 12:40 PM
 */

var initTopMenuActions = function (pageContentId) {
    var mobileMenuVisible = false;
    var tempKeylineVisible = false;

    var mobileDrawer = $("<div></div>");
    mobileDrawer.attr("id", "mobile_drawer");
    mobileDrawer.load("menu.html #menu_items_container");
    mobileDrawer.hide();

    $("body").append(mobileDrawer);


    $("#hamburger_icon").click(function () {
        $(this).toggleClass("open");
        var pageContent = ($("#" + pageContentId));

        if (!mobileMenuVisible) {
            if(isKeylineVisible()){
                tempKeylineVisible = true;
                setKeylineVisible(false);
            }else {
                tempKeylineVisible = false;
            }
            pageContent.css("transition", "0.25s filter linear");
            pageContent.css("filter", "blur(7px)");
            $("body").css("overflow", "hidden");
            mobileDrawer.fadeIn(300);
            mobileMenuVisible = true;

        } else {
            if (tempKeylineVisible){
                setKeylineVisible(true);
            }
            pageContent.css("filter", "");
            $("body").css("overflow", "auto");
            mobileDrawer.fadeOut(100);
            mobileMenuVisible = false;
        }
    });

    var topMenuHeight = $("#menu").css("height");

    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 0.5 * parseInt(topMenuHeight, 10);
        if (distanceY > shrinkOn) {
            setKeylineVisible(true);
        } else {
            setKeylineVisible(false);
        }
    });
}

var setKeylineVisible = function(visible){
    var menuMain = document.querySelector("#menu .main");
    if (visible){
        menuMain.classList.add("ontop");
    } else{
        menuMain.classList.remove("ontop");
    }
}

var isKeylineVisible = function(){
    var menuMain = document.querySelector("#menu .main");
    return menuMain.classList.contains("ontop");
}

