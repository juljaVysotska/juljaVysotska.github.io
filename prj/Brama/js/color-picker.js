
//color picker 

const obj = {
    new:"Новинка",
    inStock:"На складе",
    sale:"Распродажа",
    action: "Акция -20%"
}

const label = Array.from(document.querySelectorAll('.door .content-wrapp')).map((el)=>{
    
    labelDetection(el);
});


function labelDetection(el) {
    const arr = el.getAttribute('data-label').split(',');

    let numb = 16;

    for(const key of arr){
        let div = document.createElement('div');
        div.classList.add(key);
        div.classList.add('label');
        div.innerHTML = obj[key];
        div.style.top = `${numb}px`;

        numb = (window.innerWidth <= 768) ? numb + 17 : numb + 23;
       // numb = numb + 23;
        el.closest('.door').querySelector('.content-wrapp').append(div);

    }
}

function labelRemoval(thisArg) {
    const labelRemove = Array.from(thisArg.closest('.door').querySelectorAll('.content-wrapp .label')).map((el)=>{;
            el.remove();
    })
    
}
/*-*/


const objLabel = {
	sale : {
		color : "#9E824D"
	},
	new : {
		color : "#5BAFDF"
	}, 
	inStock : {
		color : "#BAC900"
	},
	action  : {
		color : "#F7A840"
	},
};

function labels(elem, color = 'white', select) {
	let backgroundImage = `linear-gradient(90deg, ${color} 50%, transparent 50%)`
	let countAttr = elem.getAttribute('data-label').split(',');

 	let deg = 90;
	for( const i of countAttr){
		if(objLabel.hasOwnProperty(i)){
			deg +=45 
			backgroundImage += ' , ' + decompLine(objLabel[i], deg, objLabel[i].color) ;					
		}

		let rot = (180 - countAttr.length * 45) /2;
		//elem.style.transform = `rotate(${rot}deg)`;				

	}


	elem.style.backgroundImage = backgroundImage;

}
const colorPicker = Array.from(document.querySelectorAll('.door_colorpicker .color')).forEach((el) => {
    let first = '';
    let	backgroundImage = 'linear-gradient(90deg, white 50%, transparent 50%)';
    let selected = '';

    if(el.classList.contains('selected')){
   	 	
   labelRemoval(el);

   	 	const dataAttr = el.getAttribute('data-label');

        el.closest('.door').querySelector('.content-wrapp').setAttribute('data-label' , dataAttr)
		labelDetection(el);

    }

    // el.addEventListener('mouseover', function() {
    //     const attr = el.getAttribute('data-attr');

    //     const parentElem = this.closest('.door').querySelector('.door_img');
    //     first = parentElem.getAttribute('src');

    //     parentElem.setAttribute('src',`img/door/door-${attr}.png`);
    //     labelRemoval(this);
    //     labelDetection(el);

    //     el.closest('.door_colorpicker').querySelector(' .color-descr').innerHTML = el.getAttribute('data-colorname');

    // });

    // el.addEventListener('mouseout' , function () {
    //     const parentElem =this.closest('.door').querySelector('.door_img');
    //     parentElem.setAttribute('src', first);
    //    labelRemoval(this);
    //    labelDetection(this.closest('.door').querySelector('.content-wrapp'));

    // });

    el.addEventListener('click', function () {

    	const parentElem = this.closest('.door').querySelector('.door_img');
        first = parentElem.getAttribute('src');
		parentElem.setAttribute('src', first);
		labelRemoval(this);
       	labelDetection(el);

        cleanSelect(this);

        const dataAttr = this.getAttribute('data-label');
        console.log(dataAttr);

        this.closest('.door').querySelector('.content-wrapp').setAttribute('data-label' , dataAttr)

        this.classList.toggle('selected');
		labels(this,'#009877', '#009877');
		this.style.backgroundColor= '#009877';
        
    });

    

    labels(el);

	if(el.classList.contains('selected')){
		labels(el,'#009877', '#009877');
		el.style.backgroundColor= '#009877';

    }


});




function cleanSelect(thisArg) {
    return Array.from(thisArg.closest('.door_colorpicker').querySelectorAll('.color')).map((el) => {
        el.classList.remove('selected');
       labels(el, 'white');
		el.style.backgroundColor= '';

    })
}

function decompLine (line, deg, color, select = 'transparent') {
	return `linear-gradient(${deg}deg, ${color}  50%, ${select} 50%)`;
}



