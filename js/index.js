$(document).ready(function(){
})
function video_end(){
    $(".video_bg_div").hide();
    $(".start_btn").show();
    list_slider();
}
function list_slider(){
    var jssor_1_options = {
        $AutoPlay: true,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $ThumbnailNavigatorOptions: {
            $Class: $JssorThumbnailNavigator$,
            $Cols: 4,
            $SpacingX: 4,
            $SpacingY: 4,
            $Orientation: 2,
            $Align: 0
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*responsive code begin*/

    /*remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 960);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*responsive code end*/
}