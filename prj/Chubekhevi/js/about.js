$('.anhor').click(function() {
    $(window).scrollTop($('.block').offset().top);
});

$('.rotator').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
});


const scene = document.getElementById('separateImage');
const parallaxInstance = new Parallax(scene);

$('.map-picture').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    buttons: false,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
});

$(window).resize(function() {
    if ($(window).width() < 760) {
        let height = ($('.map-wrapp .text-block').height() + 60) / 2;
        $('.slick-arrow.slick-next, .slick-arrow.slick-prev').css('bottom', height);

    } else {
        $('.slick-arrow.slick-next, .slick-arrow.slick-prev').css('bottom', '');

    }
});

$(document).ready(function() {
    $(window).resize();
})