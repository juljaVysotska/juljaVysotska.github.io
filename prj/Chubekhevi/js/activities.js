
$('.rotator').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
            breakpoint: 1200,
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

$(document).ready(function() {
    let i = 0;
    $('.card').each((el) => {
        $($('.card')[i]).css('animation-delay', `${i/5}s`);
        i++;
    });
});


const cards = Array.from(document.querySelectorAll('.cards-list .card'));
let minHeight = 0;

function height() {

    cards.forEach((el) => {
        let height = 0;

        if(el.hasChildNodes()){
            let childrens = el.children;

            for(let i =0; i< childrens.length; i++){
                height += childrens[i].offsetHeight + parseFloat(window.getComputedStyle(childrens[i]).getPropertyValue('margin-top')) +parseFloat(window.getComputedStyle(childrens[i]).getPropertyValue('margin-bottom')) ;
            }
            minHeight = height;
    
        }
    });
   

    cards.map((el) => {
        if(window.innerWidth >= 760){
            el.style.height = minHeight + 25 + 'px';
        }else{
            el.style.height = '';

        }

    });

}

height();

window.onresize = height;