const nav = document.querySelector("nav");


let navHeight = 0;
let margTop = 0;


const windowWidth = () => {
    navHeight = 0;
    margTop= 0;

    if(window.innerWidth <= 768){
        navHeight = 70;
        margTop = 16;
    } 


    if(window.innerWidth >= 1220){
        margTop = 23;
        navHeight = 100;
    }

    if(window.innerWidth <= 1220 && window.innerWidth >= 768){
        margTop = 23;
        navHeight = 90;
    }

}

windowWidth();
window.onresize  = windowWidth;



function filled() {
    nav.style.boxShadow = '0px 4px 11px rgba(0, 0, 0, 0.05)';
     nav.style.height = navHeight+'px';
     nav.querySelector('.wrapp').style.marginTop = margTop+'px';


    if (!window.scrollY) {
        nav.style.height = '';
        nav.style.boxShadow = '';
        nav.querySelector('.wrapp').style.marginTop = '';

    }
}


function noFilled() {
    nav.style.boxShadow = '0px 4px 11px rgba(0, 0, 0, 0.05)';
    nav.classList.add('filled');

    nav.style.height = '';
    nav.querySelector('.wrapp').style.marginTop = '';

    if (!window.scrollY) {
        nav.classList.remove('filled');
        nav.style.boxShadow = '';
        nav.style.height = '';
        nav.querySelector('.wrapp').style.marginTop = '';


    }

}

window.addEventListener("scroll", () => {
    if (nav.classList.contains('no-filled')) {

        noFilled()
    } 

    filled();


});




const burger = document.querySelector('nav .burger');
const burgerClose = document.querySelector('.burger-menu .close');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', function () {

    burgerMenu.style.top = 0;
    document.querySelector('body').style.overflow = 'hidden';
});

burgerClose.addEventListener('click', function () {
    burgerMenu.style.top = "";
    document.querySelector('body').style.overflow = '';

});



try{

    const formWrapp = Array.from(document.querySelectorAll('.form-wrapp .input-wrapp input, .form-wrapp .input-wrapp textarea'));

    formWrapp.map((el) =>{

        let label = el.closest('.input-wrapp').querySelector('label');      
        
        
        if(!el.value){
            label.classList.remove('up');
        }else{
            label.classList.add('up');
        }
        
        el.onfocus = () =>{
            label.classList.add('up');
        };

        el.onblur = () =>{
            if(!el.value){
                label.classList.remove('up');
            }
        };


    });
}
catch(er){}






/**/
const unsetHEight = () => {
    let otherCards = Array.from(document.querySelectorAll('.burger-menu li .submenu-wrapp')).map((el) => {
        el.style.maxHeight = 0
    });
};

const subFunck = (el) => {
    let counter = 0;
    
    return () => {
        counter++;
        const subMenu =  el.querySelector('.submenu-wrapp');

            unsetHEight();

            subMenu.style.maxHeight = (subMenu.offsetHeight === 0) ? subMenu.querySelector('ul').offsetHeight + 38 + "px" : 0;
            el.style.color = "#009877";

    }
    
};

const burgerSubMenu2 = Array.from(document.querySelectorAll('.burger-menu li ')).map((el) => {
    
    if(el.hasChildNodes() && el.querySelector('.submenu-wrapp')){
        el.onclick = subFunck(el);
        
    }
})







const burgeMenuPopUp = document.querySelector('.burger-menu');
const navMenu = document.querySelector('nav');


function languagePicler(e, thisAg) {
      const langList = thisAg.querySelector('.languages');

    langList.style.opacity = "";
    langList.style.pointerEvents = "";

    if(e.target === thisAg.querySelector('.actual-language')){
        langList.style.opacity = 1;
        langList.style.pointerEvents = "all"
    }
}


document.querySelector('body').addEventListener('click', function (e) {
    let arg = (window.innerWidth >= 1220) ? navMenu : burgeMenuPopUp
    languagePicler(e,arg)

})