const moreTileBtn = document.querySelector('.btn');
const moreTileWrapp = document.querySelector('.tile-wrapp');
const afterEffect = document.querySelector('.tile-wrapp .after');


moreTileBtn.addEventListener('click', function() {
    const afterEffectOpacity = window.getComputedStyle(afterEffect).getPropertyValue('opacity');
    let fullHeight = 0;
    let height = 0;

    if (moreTileWrapp.hasChildNodes()) {
        let arr = moreTileWrapp.children;
        for (let i = 0; i < arr.length; i++) {
            fullHeight += arr[i].offsetHeight + 20;
        }
    }

    if (window.innerWidth >= 768 && window.innerWidth <= 1220) {
        height = fullHeight / 3;
    } else if (window.innerWidth <= 768) {
        height = fullHeight / 2;
    } else if (window.innerWidth >= 1220) {
        height = fullHeight / 4;
    }

    moreTileWrapp.style.maxHeight = (moreTileWrapp.offsetHeight === 400 || moreTileWrapp.offsetHeight === 250) ? (height + 'px') : '';
    this.innerHTML = (this.innerHTML.trim() === 'Больше примеров') ? 'Меньше примеров' : 'Больше примеров';
    afterEffect.style.opacity = (afterEffectOpacity === '1') ? '0' : '1';
});


/*-*/
const header = document.querySelector('.header');
const headerImg = header.querySelector('img');

function pictureHeight() {
    if (window.innerWidth <= 768) {
        const headerP = header.querySelector('p').offsetTop + header.querySelector('p').offsetParent.offsetTop;
        headerImg.style.height = headerP - 15 + 'px';

    } else {
        headerImg.style.height = '';

    }
}

pictureHeight()


window.addEventListener('resize', () => {
    pictureHeight();
});