// const wrapp = document.querySelector('.range .range-wrapp');

function createStrips(rangeEL) {

    const max = rangeEL.max;
    let createDIV = document.createElement('div');

    for (let i = 0; i < max; i++) {
        let hr = document.createElement('hr');
        createDIV.append(hr);

    }

    rangeEL.parentNode.append(createDIV);
}


let dateDiv = (elem , arr) => {
	let createDateDIV = document.createElement('div');
    createDateDIV.classList.add('date');
    createDateDIV.innerHTML = arr[elem.value - 1];
    // elem.parentNode.append(createDateDIV);
   createDateDIV.style.left = ((elem.offsetWidth - 30) / (+elem.max - 1)) * (elem.value - 1) + 'px';
   
    return createDateDIV;
   
};

let moveFunc = (elem,arr) => {
    const dateDiv = elem.parentElement.querySelector('.date');
   dateDiv.innerHTML = arr[elem.value - 1];
   dateDiv.style.left = ((elem.offsetWidth - 30) / (+elem.max - 1)) * (elem.value - 1) + 'px';
   
};



// const range = Array.from(document.querySelectorAll('input[type=range]')).map((el) => {

    
//     el.parentNode.append(dateDiv(el, arrValues));
    
//     createStrips(el);
//     moveFunc(el, arrValues)
//     // console.log(el)

//     el.addEventListener('input', function() {
//        moveFunc(this,arrValues)

//     });
// });




