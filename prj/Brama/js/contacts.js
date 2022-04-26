const map = document.getElementById('map');
    	function resizeMap(){
	    	map.style.width = document.querySelector("body").clientWidth / 2 + 'px';

    	}
    	resizeMap();


    	window.onresize = resizeMap;



    	function onClick(e) {
			let target = e.target;

			if(target.closest('.card_title')){
				const main = target.closest('.accordion_card').querySelector('.main-info');

    			let height = 0;

    			if(main.hasChildNodes()){
    				let childrens = main.children;

    				for(let i =0; i < childrens.length; i++){
						height += childrens[i].offsetHeight + parseFloat(window.getComputedStyle(childrens[i]).getPropertyValue('margin-top')) +parseFloat(window.getComputedStyle(childrens[i]).getPropertyValue('margin-bottom')) ;
    				}
    			}

    			let otherCards = Array.from(document.querySelectorAll('.accordion_card .main-info')).map((el) => {
    				el.style.maxHeight = 0
    			});
    		
				main.style.maxHeight = ( main.offsetHeight === 0 )  ? height + 'px' : 0;
			}   		
    			
    	}




    	document.querySelector('.accordion').onclick = onClick;



    	/*-----*/

		const orderBtn = document.querySelector('.contact_us-button');
		const doorselectPopup = document.querySelector('.popup-wrapp');
		const popupBack = document.createElement("div");
		popupBack.classList.add('popup-back')
		document.querySelector('body').append(popupBack);

		orderBtn.addEventListener('click', (e) =>{
			doorselectPopup.classList.add('here');
			doorselectPopup.style.pointerEvents = "unset";
			document.querySelector('body').style.overflow = 'hidden';
			popupBack.classList.add('show');
			
		});

		function closePopUp() {
			doorselectPopup.classList.remove('here');
			document.querySelector('body').style.overflow = '';
			popupBack.classList.remove('show');
			doorselectPopup.style.pointerEvents = "";

		}

		doorselectPopup.querySelector('.close').addEventListener('click', function (e) {
			closePopUp();
		});

		doorselectPopup.addEventListener('click', function (e) {
			if(e.target !== doorselectPopup.querySelector('.contact_us-popup')){
				closePopUp()
			}

		});
		doorselectPopup.querySelector('.contact_us-popup').addEventListener('click', function (e) {
			e.stopPropagation();
		})