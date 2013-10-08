(typeof(jQuery) != 'undefined') && jQuery(function ($){
    $(function () {
        var toTopOffsiteHeight = 0;
        var toOverviewOffsiteHeight = parseInt($("#Overview").offset().top);
        var toCodeOffsiteHeight = parseInt($("#Code").offset().top);
        var toDemoOffsiteHeight = parseInt($("#Demo").offset().top);

        var toTopButton = $('#toTop');
        var toOverviewButton = $('#toOverview');
        var toCodeButton = $('#toCode');
        var toDemoButton = $('#toDemo');


        $(window).scroll(function () {
            if ( $(this).scrollTop() >= toTopOffsiteHeight && $(this).scrollTop() < toOverviewOffsiteHeight ) {
                $('.submenu a').removeClass();
                $('.submenu a[id=toTop]').addClass("active");
                $('.submenu a[id=toOverview]').addClass("goDown");
                $('.submenu a[id=toCode]').addClass("goDown");
                $('.submenu a[id=toDemo]').addClass("goDown");
            } else if( $(this).scrollTop() >= toOverviewOffsiteHeight && $(this).scrollTop() < toCodeOffsiteHeight ) {
                $('.submenu a').removeClass();
                $('.submenu a[id=toOverview]').addClass("active");
                $('.submenu a[id=toCode]').addClass("goDown");
                $('.submenu a[id=toDemo]').addClass("goDown");
            } else if( $(this).scrollTop() >= toCodeOffsiteHeight && $(this).scrollTop() < toDemoOffsiteHeight ) {
                $('.submenu a').removeClass();
                $('.submenu a[id=toCode]').addClass("active");
                $('.submenu a[id=toDemo]').addClass("goDown");
            } else if( $(this).scrollTop() >= toDemoOffsiteHeight ) {
                $('.submenu a').removeClass();
                $('.submenu a[id=toDemo]').addClass("active");
            }else{}
        });


        function scrollAnimation (offsite){
            $('body').animate({
                scrollTop: offsite
            }, 800);
            return false;
        }


        toTopButton.click(function () {
            scrollAnimation (toTopOffsiteHeight);
        });
        toOverviewButton.click(function () {
            scrollAnimation (toOverviewOffsiteHeight);
        });
        toCodeButton.click(function () {
            scrollAnimation (toCodeOffsiteHeight);
        });
        toDemoButton.click(function () {
            scrollAnimation (toDemoOffsiteHeight);
        });
    });
});