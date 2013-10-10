$(function(){
    $('img.lazy').jail({
        timeout : 1000
    });

    $("#slides").slidesjs();
    $("#slides1").slidesjs({
        pagination: {
            active: false
        },
        navigation: {
            active: false
        }
    });
    $("#slides2").slidesjs({
        navigation: {
            effect: "fade"
        },
        pagination: {
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 800
            }
        }
    });

    if (navigator.userAgent.indexOf('iPhone') != -1 && (window.navigator.userAgent.indexOf("Safari" )>= 0)) {
        //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
});