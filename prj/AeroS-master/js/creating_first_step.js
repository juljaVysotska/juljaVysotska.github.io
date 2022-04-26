$('.datepicker-here').datepicker({
    minDate: new Date()
});

$('.title-wrapp').click(function() {
    $('.title-wrapp img').toggle();

    $('.aditional-info-form').animate({
        height: "toggle"
    });
});




$(document).ready(function() {

    $('input').change(function() {
        if ($('.project-name').val() != '') {
            $('.btn-submit').addClass('btn-active');
            $('.btn-submit').attr('disabled', false);
            $('.btn-submit').removeClass('btn-inactive');
        } else {
            $('.btn-submit').removeClass('btn-active');
            $('.btn-submit').attr('disabled', true);
            $('.btn-submit').addClass('btn-inactive');

        }
    });


    var date = new Date();

    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    console.log(date.toLocaleString("ru", options));
    $('.datepicker-here').attr('placeholder', date.toLocaleString("ru", options));


    $('.additional-info .title-separator').width($('.additional-info .title-wrapp').width() - $('.title-text-wrapp').width());
});

$('.dropdown .dropdown-toggle img, header img.settings').each(function() {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');

        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }

        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        $img.replaceWith($svg);

    }, 'xml');

});

$('.dropdown').each(function() {
    $(this).find('.btn').text($(this).find('.dropdown-item:not(.color-select .dropdown-item):first-child').text());
});

$('.dropdown-item:not(.color-select .dropdown-item)').click(function() {
    $(this).closest('.dropdown').find('.btn').text($(this).text());
});