$('.anhor').click(function() {
    $(window).scrollTop($('.greeting').offset().top);
});

$('.rotator').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true
            }
        },

    ]
});




const scene = document.getElementById('separateImage');
const parallaxInstance = new Parallax(scene);