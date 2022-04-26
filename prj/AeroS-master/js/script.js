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
$('input:focus').attr('palaceholdr', '');
$('.modal.burger-menu .list-title').click(function() {


    var clicks = $(this).data('clicks');

    if (clicks) {
        $(this).closest('.list').removeClass('active-list');
        $(this).find('img').removeClass('arr-rotate-up');
        $(this).find('img').addClass('arr-rotate-down');
        $(this).closest('.list').find('.list-items').animate({
            height: "toggle"
        });
    } else {
        $(this).closest('.list').addClass('active-list');
        $(this).find('img').addClass('arr-rotate-up');
        $(this).find('img').removeClass('arr-rotate-down');
        $(this).closest('.list').find('.list-items').animate({
            height: "toggle"
        });
    }
    $(this).data("clicks", !clicks);
});


$('.dropdown-item').click(function() {
    $(this).closest('.dropdown').find('.btn').text($(this).text());
    $(this).closest('.dropdown').find('input').val($(this).text());

})