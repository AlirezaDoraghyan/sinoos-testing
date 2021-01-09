$(document).ready(function () {

    // mobile menu vars
    var cover = $(".mobile-cover");
    var menu = $(".mobile-menu");

    // posts-slider
    $(".section-5-carousel").owlCarousel({
        items: 4,
        loop: 1,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    });

    // games-post-slider
    $(".owl-carousel-games .section-5-carousel").owlCarousel({
        items: 4,
        loop: 1,
        margin: 2,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        responsive: {
            200: {
                items: 4
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }

    });

    //noicescrool function
    $(".noicscrool2").niceScroll();

    // icon-mobile-menu function
    $(".menu-mobo-span").click(function () {
        cover.css({
            "opacity": "1",
            "pointerEvents": "all"
        });
        menu.css("left", "0px");
    });

    // remove-mobile-menu function
    $(cover).click(function () {
        $(this).css({
            "opacity": "0",
            "pointerEvents": "none"
        });
        menu.css("left", "-250px");
    });

});