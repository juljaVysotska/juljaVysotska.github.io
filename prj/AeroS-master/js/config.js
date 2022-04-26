$('.group-title').click(function() {


    $(this).find('img').toggleClass('rotate');
    $(this).find('img').toggleClass('rotate2');

    if ($(window).width() <= 760) {
        $(this).closest('.element-section').find('.details-list.details').animate({
            height: "toggle"
        });

        console.log('click' + $(window).width());
    } else {
        $(this).closest('.element-section').find('.items').animate({
            height: "toggle"
        });
    }

});



$('.project-tree .nested-list .branch-text').click(function() {
    $(this).closest('.nested-list').find('ul').slideToggle("fast"); //think about it

    $(this).find('img').toggleClass('rotate');
    $(this).find('img').toggleClass('rotate2');

    // console.log($(this).find('ul'));
});


$('.color-select').each(function() {
    let lll = $(this).find('.dropdown-item:first-of-type').find('.color').clone();
    $(this).find('.btn').empty();
    lll.appendTo($(this).find('.btn'));
});

$('.color-select .dropdown-item').ready(function() {
    var lll = $(this).find('.color').clone();
    $(this).closest('.dropdown').find('.btn').empty();
    lll.appendTo($(this).closest('.dropdown').find('.btn'));
});


$('.color-select .dropdown-item').click(function() {
    var lll = $(this).find('.color').clone();
    $(this).closest('.dropdown').find('.btn').empty();
    lll.appendTo($(this).closest('.dropdown').find('.btn'));
});

$('.dropdown-item:not(.color-select .dropdown-item)').click(function() {
    $(this).closest('.input-wrapp').find('.dropdown-toggle').text($(this).text());
});


$('.category-elements li').click(function() {
    $('.category-elements li').removeClass('actual');
    $(this).addClass('actual');

    const ident = $(this).attr('class').split(' ')[0];
    $('.detail-wrapp').removeClass('selected');
    $(`[data-attr="${ident}"]`).addClass('selected')
});


$('.detail-wrapp').click(function() {
    $('.detail-wrapp').removeClass('selected');

    $(this).addClass('selected');

    const ident = $(this).attr('data-attr');
    $('.category-elements li').removeClass('actual');
    $(`.category-elements li.${ident}`).addClass('actual');

    if ($(window).width() <= 760) {
        $(this).closest('.left-section').addClass('animate-slide');
    }
});

$('.category-title').click(function() {
    $('.details-info').css('display', ' none')
    $('.details:not(.details-list.details)').css('display', ' block');
});

$('.category-elements li, .detail-wrapp').click(function() {
    $('.details-info').css('display', ' block')
    $('.details').css('display', ' none');

});


$('.detail-item').click(function() {
    $(this).closest('.mobile-menu').addClass('click');
    $('.select-detail').css('display', 'flex')

});

$('.structure-item').click(function() {
    $(this).closest('.mobile-menu').addClass('click');

    $('.main-block .left-section, .main-block .right-section,.select-detail').css('display', 'none');
    $('.structure-mobile').css('display', ' block');



});

$('.left-section .list-element .section-title, .structure.structure-mobile .section-title, .select-detail').click(function() {
    $('.mobile-menu').removeClass('click');


    setTimeout(() => {
        $('.main-block .left-section, .main-block .right-section').css('display', 'block');
        $('.structure-mobile, .details-info').css('display', 'none');
    }, 400);

    $('.left-section').removeClass('animate-slide');


});

$('#data').click(function() {
    $(this).closest('.mobile-tab-navigation').addClass('animate-slide');

    $('.element-pict-section').css('display', 'none');
    $('.data').css('display', 'block');
});

$('#paramsTable').click(function() {
    $(this).closest('.mobile-tab-navigation').addClass('animate-slide');
    $('.element-pict-section').css('display', 'none');
    $('.right-section_params-table').css('display', 'block');
});

$('#schema').click(function() {
    $(this).closest('.mobile-tab-navigation').addClass('animate-slide');
    $('.element-pict-section').css('display', 'none');
    $('.schema').css('display', 'block');
});


$('.data .section-title , .schema .section-title , .right-section_params-table .section-title , .description .nav-tabs .nav-link.active,.description .nav-tabs .nav-link').click(function() {

    if ($(window).width() <= 760) {
        $('.mobile-tab-navigation').removeClass('animate-slide');
        $('.element-pict-section').css('display', 'block');
        $('.data,.schema,.right-section_params-table').css('display', 'none')

    }
});

$('.filter').click(function() {
    $('.right-section_params-table .input-wrapp').css('height', 30);
    $('.filter-wrapp p').css('width', 103);
});

$('.right-section_params-table th .input-wrapp input').focus(function() {
    $('.right-section_params-table th .input-wrapp label').css('opacity', '0');
    $(this).closest('th').find('label').css('opacity', '1');
}).focusout(function() {
    $('.right-section_params-table th .input-wrapp label').css('opacity', '0');
});


$('.filter-wrapp p').click(function() {
    $('.right-section_params-table .input-wrapp').css('height', 0);
    $('.filter-wrapp p').css('width', 0);

});