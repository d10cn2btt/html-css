function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        $(".top-menu-container").removeClass('top-menu-container').addClass('ie-top-menu-container');
        // $(".wrap-top-menu-container").css('padding','5px 0');
        $("#fix_ie_1").addClass('fix_height_12_ie fix_font_ie');
        $("#fix_ie_2").addClass('fix_height_12_ie fix_font_ie');
        $("#fix_ie_3").addClass('fix_font_ie');
        $("#fix_ie_4").addClass('fix_font_ie');
        if (msie > 0) { //if IE is 9 or 10 version
            $(".bordered-right").css({
                'border-right-style': 'dotted',
                'border-right-color': '#fff',
                'border-right-width': '2.5px'
            });
        }
    }
    return false;
}
function checksafariBrowse() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            return false;
        } else {
            $(".buffer_fooer").css('min-height', '170px');
        }
    }
}

$(document).ready(function () {
    checksafariBrowse();
    msieversion();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.totop').fadeIn('fast');
        } else {
            $('.totop').fadeOut('fast');
        }
        if ($('.totop_m')) {
            if ($(this).scrollTop() > 200) {
                $('.totop_m').fadeIn('fast');
            } else {
                $('.totop_m').fadeOut('fast');
            }
        }
    });

    $('.totop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('a[href^="#bottom_mobile_1"]').click(function () {
        $('body').animate({scrollTop: $(document).height()}, 1000);
        return false;
    });

    $('a[href^="#to_top_mobile"]').click(function () {
        $('body').animate({scrollTop: 0}, 1000);
        return false;
    });

    $('#m-btn-menu').click(function (e) {
        e.stopPropagation();
        if ($('ul.dropdown-menu').is(":hidden")) {
            $("ul.dropdown-menu").slideDown("fast");
            $("ul.dropdown-menu").addClass("ex");
        }
        else {
            $("ul.dropdown-menu").slideUp();
        }
    });

    $("#carousel-example-generic, #carousel-example-generic1").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#carousel-example-generic, #carousel-example-generic1").swipeleft(function () {
        $(this).carousel('next');
    });
});