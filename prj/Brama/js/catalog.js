const colorSelect = document.querySelector('.color-select');
    	const arr = ['#FFFFFF','#E0E0E0','#533A21','#967D5F','#828282','#858A79'];

    	arr.forEach((el) =>{
    		let colorWrapp = document.createElement('div'); 
    		colorWrapp.classList.add('color-wrapp');

    		let div = document.createElement('div');
    		
    		if(el === '#FFFFFF'){
    			div.style.border = '1px solid #E0E0E0';

    		}

    		div.style.backgroundColor = el;



    		let input = document.createElement('input');
    		input.setAttribute('type','checkbox');

    		div.append(input);
    		colorWrapp.append(div);
    		colorSelect.append(colorWrapp);

    		colorWrapp.addEventListener('click', function () {
    			if(this.classList.contains('selected')) {
	    			this.classList.remove('selected');
	    		}else{
	    			this.classList.add('selected');
	    		}

    		})


    	});


    	function resizeDoor() {
    		const door = document.querySelector('.door');

    		const spesDoor = document.querySelector('.tech .door');
			spesDoor.style.width = door.offsetWidth +'px';
			spesDoor.style.height = door.offsetHeight +'px';



    	}
		
		resizeDoor();
    	window.onresize = resizeDoor;



		const formSubmit = document.querySelector('form button');

		const searchResult = document.querySelector('.search-result');

		formSubmit.addEventListener('click', function (e) {
			e.preventDefault();
			searchResult.style.display = 'block';
		});



		const showForm = document.querySelector('.form-toggle');
		const form = document.querySelector('form');

		showForm.addEventListener('click', function() {

			this.innerHTML = (this.innerHTML.trim() === 'Свернуть фильтр') ? 'Развернуть фильтр' : 'Свернуть фильтр';
		

			form.classList.toggle('collapsed');
		});


		/*-*/

		//shiw collection
		function doorCount(thisArg) {
			const arrDoor = Array.from(thisArg.closest('.collection').querySelectorAll('.door'));
			console.log(arrDoor.length);


			let height = 0;

			for(let i =0; i< arrDoor.length; i++){
				height += arrDoor[i].offsetHeight + parseFloat(window.getComputedStyle(arrDoor[i]).getPropertyValue('margin-bottom'))
			}

			let rowCount =0;

				if(window.innerWidth >= 1200){
					rowCount = Math.round(arrDoor.length / 3) * height / arrDoor.length;
				}else if(window.innerWidth < 1200 & window.innerWidth >= 768){
					rowCount = Math.round(arrDoor.length / 2) * height / arrDoor.length;
				}else  if(window.innerWidth < 768){
					rowCount = '';
				}


				const doorWrapp = thisArg.closest('.collection').querySelector('.door-wrapp');
				doorWrapp.style.maxHeight = `${rowCount + 16}px`;
		}



		const btn = Array.from(document.querySelectorAll('.collection .full-collection')).map((el) => { 
			el.addEventListener('click', function () {
				doorCount(el);
				
				
			});


		});