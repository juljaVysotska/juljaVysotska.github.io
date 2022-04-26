const readMoreBnt = document.querySelector('.read-more');
    	const text = document.querySelector('.header p:not(.read-more)');
    	readMoreBnt.addEventListener('click', function() {


			if(this.innerHTML.trim() === 'Читать больше'){
				this.innerHTML = 'Свернуть';
	    		text.style.maxHeight = text.scrollHeight + 'px';
	    		text.classList.add('full')

			}else{
				this.innerHTML = 'Читать больше';
	    		text.style.maxHeight = 125+ 'px';
	    		text.classList.remove('full');
			}

			let widthBrn = readMoreBnt.offsetWidth / 2;
			this.style.marginLeft = `calc(100% / 2 - ${widthBrn}px)`;


    	});


    	const header = document.querySelector('.header');
		const headerImg = header.querySelector('img');
		function pictureHeight() {
			if(window.innerWidth <= 768){
					const headerP = header.querySelector('p').offsetTop;
					headerImg.style.height = headerP - 15 + 'px';

			}else{
				headerImg.style.height = '';

			}
		}

		pictureHeight()


		window.addEventListener('resize', () => {
			pictureHeight();
		});