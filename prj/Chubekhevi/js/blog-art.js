$('.rotator-wrapp').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
            
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                variableWidth: true,
                arrows: true,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
            }
        },

    ]
});


$(window).scroll(() => {
    $('nav').addClass('white');
    $('nav').css('background-color', '');
    $('nav').removeClass('transparent');
    $('nav').css('position', 'absolute');

    if ($(window).scrollTop() >= 1200) {
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



 const cards = Array.from(document.querySelectorAll('.blog .blog-article'));
        let minHeight = 0;
        let imgHeight = 0;


        function height() {

            cards.forEach((el) => {
                let height = 0;

                if(el.hasChildNodes()){
                    let childrens = el.children;

                     imgHeight = (el.querySelector('.img-cover').offsetHeight >= imgHeight)? el.querySelector('.img-cover').offsetHeight : imgHeight;

                    for(let i =0; i< childrens.length; i++){
                        height += childrens[i].offsetHeight + parseFloat(window.getComputedStyle(childrens[i]).getPropertyValue('margin-top')) +parseFloat(window.getComputedStyle(childrens[i]).getPropertyValue('margin-bottom')) ;
                       
                    }
                    minHeight = height;
            
                }

                console.log(imgHeight);

            });



            cards.map((el) => {
                if(window.innerWidth >= 760){
                    el.style.height = minHeight  + 'px';
                    // el.querySelector('.img-cover').style.height = imgHeight + 'px';
                }else{
                    // el.querySelector('.img-cover').style.height = '';
                    el.style.height = '';

                }

            });

        }

        height();

        window.onresize = height;