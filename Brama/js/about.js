const dateWrapp = document.querySelector('.date-rotator .wrapp');
const dateRotatorWidth = document.querySelector('.item').offsetWidth;
let wrappWidth = 0;

if (dateWrapp.hasChildNodes()) {
    const arr = dateWrapp.children;

    for (const el of arr) {
        wrappWidth += el.offsetWidth + parseFloat(getComputedStyle(el).marginRight);
    }

}





function slideLocation() {
    let gap = (wrappWidth - dateRotatorWidth) / 100;
    dateWrapp.style.marginLeft = range.value * (-1) * gap + 'px';
}

let arr = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]


function buildStrips() {
    const rangeWidth = range.offsetWidth;
    const rangeWrapp = document.querySelector('.range-wrapp');

    let fragment = new DocumentFragment();
    let fragmentWrapp = new DocumentFragment();
    let div = document.createElement('ul');



    for (let k = 0; k < dateWrapp.children.length; k++) {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.append(arr[k]);
        li.style.width = rangeWidth / dateWrapp.children.length + 'px'
        li.append(p);
        div.append(li);

    }



    rangeWrapp.append(div);
}


if (window.innerWidth >= 768) {
    dateWrapp.style.width = `${wrappWidth}px`;
    buildStrips();
    slideLocation();

    range.addEventListener('input', slideLocation)
} else {
    dateWrapp.style.width = '';
    dateWrapp.style.marginLeft = '';
    range.removeEventListener('input', slideLocation)
}


const prevBtnRotator = document.querySelector('.rotator .slick-arrow.slick-prev');
const nextBtnRotator = document.querySelector('.rotator .slick-arrow.slick-next');



const arrSlideTitle = Array.from(document.querySelectorAll('.rotator .slide-title')).map((el) => {
    return el.innerText
});



$('.rotator').on('afterChange', function(e, slick, currentSlide) {
    if (currentSlide === 0) {
        prevBtnRotator.querySelector('span').innerHTML = arrSlideTitle[2];
        nextBtnRotator.querySelector('span').innerHTML = arrSlideTitle[1];
    } else if (currentSlide === arrSlideTitle.length - 1) {

        prevBtnRotator.querySelector('span').innerHTML = arrSlideTitle[1];
        nextBtnRotator.querySelector('span').innerHTML = arrSlideTitle[0];
    } else {
        prevBtnRotator.querySelector('span').innerHTML = arrSlideTitle[currentSlide - 1];
        nextBtnRotator.querySelector('span').innerHTML = arrSlideTitle[currentSlide + 1];
    }
})



let countries = document.getElementById('countries');
let years = document.getElementById('years');
let production = document.getElementById('production');
let staf = document.getElementById('staf');
let doors = document.getElementById('doors');





function intervalcounter(numb, elem) {
    let i = 0;
    let time = 0;

    if (numb < 200) {
        time = 30;
    }

    if (numb >= 200 && numb <= 1000) {
        time = 8;
    }

    if (numb > 20000) {
        time = 0;
        i = numb - 500;
    }

    const int = setInterval(() => {
        elem.innerHTML = i++;
        if (i > numb) clearInterval(int);
    }, time);
}


function bigNumber(numb, elem) {
    let number = 0;
    let time = 4;

    let timer = setTimeout(function tick() {
        number = numb++;

        if (number === 1000000) {
            time = 2000
        }

        elem.innerHTML = number.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
        timer = setTimeout(tick, time);
    }, 0);

}

function once(fn, context) { 
    let result;

    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}


let canOnlyFireOnce = once(function() {
    intervalcounter(15, countries);
    intervalcounter(20, years);
    intervalcounter(249, production);
    intervalcounter(200, staf);
    bigNumber(999700, doors);
});


window.addEventListener('scroll', () => {
    if(window.pageYOffset > document.querySelector('.achievement').offsetTop - 500){
        document.querySelector('.achievement').style.opacity = 1;
        document.querySelector('.achievement').style.transform = 'translateY(0)';
       canOnlyFireOnce()
    }

});


if(window.pageYOffset > document.querySelector('.achievement').offsetTop - 500){
        document.querySelector('.achievement').style.transform = 'translateY(0)';
        document.querySelector('.achievement').style.opacity = 1;
   canOnlyFireOnce()
}


/*-*/

const readMoreBnt = Array.from(document.querySelectorAll('.read-more'));


readMoreBnt.map((el) => {
    const text = el.parentNode.querySelector('.content-wrapper');

    el.addEventListener('click', function() {


        if (this.innerHTML.trim() === 'Читать больше') {
            this.innerHTML = 'Свернуть';
            el.parentNode.style.maxHeight = text.scrollHeight + 135 + 25 + 25 + 'px';
            text.classList.add('full')

        } else {
            this.innerHTML = 'Читать больше';
            el.parentNode.style.maxHeight = '';
            text.classList.remove('full');
        }

        let widthBrn = readMoreBnt.offsetWidth / 2;
        this.style.marginLeft = `calc(100% / 2 - ${widthBrn}px)`;


    });

});



const imagesResize = () => {
    let elemHeight = 0;

    const wrapperIMage = Array.from(document.querySelectorAll('.wrapper .content-wrapper')).map((el) => {

        let contentWrapp = (el) ? el.offsetTop + 130 : 0;

        if (window.innerWidth <= 768) {
            el.closest(".wrapper").querySelector(".back").style.height = contentWrapp + 'px'

        } else {
            el.style.height = '';

        }


    });


};



imagesResize();




window.addEventListener('resize', () => {
    imagesResize();


})