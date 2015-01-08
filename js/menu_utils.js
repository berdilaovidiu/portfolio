/**
 * User: oberdila
 * Date: 1/8/15
 * Time: 12:40 PM
 */

var initTopMenuActions = function(){
    var sideMenuVisible = false;
    $("#top_menu #hamburger_menu").click(function(){
        $("#top_menu").hide();
        $("#side_menu").show();
        sideMenuVisible = true;
    });

    $("#right_panel").click(function(){
        if (sideMenuVisible){
            $("#top_menu").show();
            $("#side_menu").hide();
            sideMenuVisible = false;
        }
    });
}
