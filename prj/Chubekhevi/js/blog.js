$(window).scroll(() => {
    $('nav').addClass('white');
    $('nav').css('background-color', '');
    $('nav').removeClass('transparent');
    $('nav').css('position', 'absolute');
    $('nav').addClass('first-screen');


    if ($(window).scrollTop() >= 1200) {
        $('nav').removeClass('first-screen');

        $('nav').addClass('white');
        $('nav').css('background-color', 'white');
        $('nav').removeClass('transparent');
        $('nav').css({
            'position': 'fixed',
            'top': 0,
            'transition': '.3s all ease-in-out'
        });
    }
});

let i = 0;

$(document).ready(function() {
    $('.blog-article').each((el) => {
        $($('.blog-article')[i]).css('animation-delay', `${i/10}s`);
        i++;
    })
});


