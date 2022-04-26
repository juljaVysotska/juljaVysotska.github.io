const header = document.querySelector('.header');
const headerImg = header.querySelector('img');
function pictureHeight() {
	if(window.innerWidth <= 768){
        const headerP = header.querySelector('p').offsetTop + header.querySelector('p').offsetParent.offsetTop;
			headerImg.style.height = headerP - 15 + 'px';

	}else{
		headerImg.style.height = '';

	}
}

pictureHeight()


window.addEventListener('resize', () => {
	pictureHeight();
});