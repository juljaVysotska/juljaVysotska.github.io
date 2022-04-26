
const layoutHiding = (element) => {
	Array.from(document.querySelectorAll(element)).map((el) => {
		el.classList.add('d-none');
		el.classList.remove('show');
	});
} 

function toggleTabs(element, className){
	Array.from(element.parentElement.querySelectorAll('.btn')).map((el) => {
		el.classList.remove(className);
		el.querySelector('input').removeAttribute('checked');

	})
}

	
layoutHiding('.layout');

const btn = Array.from(document.querySelectorAll('[role="tablist"] [role="tab"]'));

for(const el in btn){

	btn[el].onclick = function () {
		layoutHiding('.layout');

		const dataAttr = this.querySelector('input').value;
		
		toggleTabs(this, 'selected');
		this.classList.add('selected');
		this.querySelector('input').setAttribute('checked', true);

		document.querySelector(`[data-attr = "${dataAttr}"]`).classList.remove('d-none');
		
		setTimeout(()=>{
			document.querySelector(`[data-attr = "${dataAttr}"]`).classList.add('show');
		},50);
	}

	if(btn[el].classList.contains('selected')){
		document.querySelector(`[data-attr = "${btn[el].querySelector('input').value}"]`).classList.remove('d-none');
		document.querySelector(`[data-attr = "${btn[el].querySelector('input').value}"]`).classList.add('show');
	}

	
}


