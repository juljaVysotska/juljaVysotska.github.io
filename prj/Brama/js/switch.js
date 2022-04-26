

function toggleTabs(element, className){
	Array.from(element.parentElement.querySelectorAll('.btn')).map((el) => {
		el.classList.remove(className);
		el.querySelector('input').removeAttribute('checked');

	})
}

const select = Array.from(document.querySelectorAll('.switch .btn'));

for(const el in select){

	select[el].onclick = function () {		
		
		toggleTabs(this, 'selected');
		this.classList.add('selected');
		this.querySelector('input').setAttribute('checked', true);
	}
	
}

