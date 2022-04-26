const dotsLenght = Array.from(document.querySelectorAll('.slick-dots li')).length;	


		const currentSlide = document.querySelector('.header .slide-count .current');		
		
		const allSlides = document.querySelector('.header .slide-count .all').innerHTML  = dotsLenght;

		
		$('.header-rotator').on('afterChange', function(){
		  currentSlide.innerHTML = document.querySelector('.slick-dots li.slick-active').innerText;

		});
		const anhor = document.querySelector('.header .anhor');
		
		anhor.addEventListener('click', function () {
		    const pointer = document.querySelector('.category').offsetTop - 85 -100;
			window.scrollTo({
		        top: pointer,
		        behavior: "smooth"
		    })
		});






		$('.header-rotator').on('afterChange', function(e, slick, currentSlide){
			const currentSlideDiv = document.querySelector(`[data-slick-index = "${currentSlide}"]`);

			  const textBLock = Array.from(currentSlideDiv.querySelectorAll('div.item .text-wrapp')).map((el) => {
			  	if(el.hasChildNodes()){
			  		console.log(el);

			  		const arr = el.children;

			  		for(let i = 0; i< arr.length; i++){
			  			arr[i].classList.add('fadeInLeft');
			  			arr[i].style.opacity = 1;
			  		}
			  	}
			});

		});