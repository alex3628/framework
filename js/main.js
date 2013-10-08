$(function(){
    $('img.lazy').jail({
        timeout : 1000
    });

    $("#slides").slidesjs();

    if (navigator.userAgent.indexOf('iPhone') != -1 && (window.navigator.userAgent.indexOf("Safari" )>= 0 && navigator.userAgent.toLowerCase().indexOf("version") >= 0 )) {
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        var clientHeight = document.documentElement.clientHeight;
        var appleScreen = clientHeight + 60;
        $("html").css("min-height", appleScreen);
        $("html").scrollTop(1);
        setTimeout(function() {
            $("body").scrollTop(0);
        }, 500);
    }
});