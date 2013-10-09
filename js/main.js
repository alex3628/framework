$(function(){
    $('img.lazy').jail({
        timeout : 1000
    });

    $("#slides").slidesjs();

    if (navigator.userAgent.indexOf('iPhone') != -1 && (window.navigator.userAgent.indexOf("Safari" )>= 0)) {
        //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
});