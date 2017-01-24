/**
 * Created by Ovidiu on 1/22/2017.
 */

var addVideoControls = function(video){

    var overlay= $("<div>");
    overlay.addClass("video_overlay");
    overlay.addClass("overlay_play");

    video.parent().css("position", "relative");
    video.parent().css("display", "inline-block");
    video.parent().append(overlay);

    overlay.click(function() {
        var videoElement = video.get(0);
        if (videoElement.paused == true) {
            // Play the video
            videoElement.play();
            overlay.removeClass("overlay_play");
        } else {
            // Pause the video
            videoElement.pause();
            overlay.removeClass("overlay_pause").addClass("overlay_play");
        }

        videoElement.addEventListener('ended',function(){
            videoElement.currentTime = 0;
            overlay.addClass("video_overlay");
            overlay.removeClass("overlay_pause");
            overlay.addClass("overlay_play");
        },false);
    });

    overlay.mouseenter(function(){
        var videoElement = video.get(0);
        if (videoElement.paused == false) {
            overlay.addClass("overlay_pause");
        }
    });

    overlay.mouseleave(function(){
        var videoElement = video.get(0);
        if (videoElement.paused == false) {
            overlay.removeClass("overlay_pause");
        }
    });
}