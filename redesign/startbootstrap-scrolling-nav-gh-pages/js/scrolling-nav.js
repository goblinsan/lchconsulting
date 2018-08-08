//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
//        $("#lch-logo").stop().animate({
//                            height: "35px",
//                            "margin-top": "8px",
//                            "margin-left": "50px"
//                        }, 300);
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//        $("#lch-logo").stop().animate({
//                            height: "100px",
//                            "margin-top": "0px",
//                            "margin-left": "10px"
//                        }, 500);
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });
});
