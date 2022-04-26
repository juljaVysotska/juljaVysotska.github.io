//read more in header

const readMoreBnt = document.querySelector('.read-more');
const text = document.querySelector('.head p:not(.read-more)');
readMoreBnt.addEventListener('click', function() {
    if (this.innerHTML.trim() === 'Читать больше') {
        this.innerHTML = 'Свернуть';
        text.style.maxHeight = text.scrollHeight + 'px';
        text.classList.add('full')

    } else {
        this.innerHTML = 'Читать больше';
        text.style.maxHeight = 125 + 'px';
        text.classList.remove('full');
    }

    let widthBrn = readMoreBnt.offsetWidth / 2;
    this.style.marginLeft = `calc(100% / 2 - ${widthBrn}px)`;
});


/*-*/


// position: fixed in mobile

let windowScroll = 0;
const tab = document.querySelector('.tabs');
const canvas = document.querySelector('.canvas');

window.addEventListener('scroll', function() {
    const doorPrice = document.querySelector('.door-price');

    const same = document.querySelector('.same ')

    if (tab.offsetTop > canvas.offsetTop) {
        doorPrice.style.bottom = 0;

    } else {
        doorPrice.style.bottom = '';
    }


    if (window.scrollY > windowScroll &&
        canvas.offsetTop < window.scrollY &&
        same.offsetTop > window.scrollY &&
        window.innerWidth <= 768) {
        document.querySelector('nav').style.top = '-70px';
        tab.style.top = 0;
        windowScroll = window.scrollY;

    } else {
        document.querySelector('nav').style.top = '0';
        tab.style.top = '70px';

        windowScroll = window.scrollY;

    }

    if (window.scrollY === 0) {
        document.querySelector('nav').style.top = 0;
    }
});

/*-*/

//anhor to top


const arrUp = document.querySelector('.door-price .arr-up');

arrUp.addEventListener('click', function() {
    const pointer = document.querySelector('.selected-door').offsetTop - 110;

    window.scrollTo({
        top: pointer,
        behavior: "smooth"
    })

});

/*-*/

//call pop up


const popupBack = document.createElement("div");
popupBack.classList.add('popup-back')
document.querySelector('body').append(popupBack);


function callPopUp() {

    const target = this.getAttribute('data-target').split('#')[1];//get id from data attr
    const modalBackground = document.getElementById(`${target}`);
    document.querySelector('body').style.overflow = 'hidden';
    modalBackground.classList.add('here');
    modalBackground.style.pointerEvents = "unset";

    popupBack.classList.add('show');
}

function closePopUp(e) {
    const target = this.closest('.here');
    target.classList.remove('here');
    popupBack.classList.remove('show');
    target.style.pointerEvents = "";
    document.querySelector('body').style.overflow = '';
}

const modalBtn = Array.from(document.querySelectorAll('a[data-target]')).map((el) => {
    el.addEventListener('click', callPopUp);

});
   
const modalBackground = Array.from(document.querySelectorAll('.popup-wrapp')).map((el) => {
    el.addEventListener('click', function(e) {
        e.target.classList.remove('here');
        popupBack.classList.remove('show');
        e.target.style.pointerEvents = "";
        document.querySelector('body').style.overflow = '';
        
    });
})

const modalContent = Array.from(document.querySelectorAll('.popup-wrapp [class$="popup"]')).map((el) => {
    el.addEventListener('click', (e) => {
       e.stopPropagation();
    })
});

const closePopup = Array.from(document.querySelectorAll('.popup-wrapp .close')).map((el) =>{
    el.addEventListener('click', closePopUp);
});


try{

    const doorLayout = Array.from(document.querySelectorAll('.door-layout .door')).map((el) => {
        if(window.innerWidth <= 768){
            el.addEventListener('click', callPopUp);     
        }
    });


    document.getElementById('doorColorSelect').querySelector('.selected-color').addEventListener('click', closePopUp);  

}catch (err) {}

/**/


//image dependency on text

const header = document.querySelector('.head');
const headerImg = header.querySelector('img');

function pictureHeight() {
    if (window.innerWidth <= 768) {
        const headerP = header.querySelector('p').offsetTop;
        headerImg.style.height = headerP - 15 + 'px';

    } else {
        headerImg.style.height = '';

    }
}

pictureHeight()


window.addEventListener('resize', () => {
    pictureHeight();
});





if(window.innerWidth >= 768){
    const scrollTop = document.querySelector('.selector').offsetTop - 150;
    window.scrollTo( 0, scrollTop );

}else{
    const scrollTop = document.querySelector('.tabs').offsetTop-70;
    window.scrollTo( 0, scrollTop );
}