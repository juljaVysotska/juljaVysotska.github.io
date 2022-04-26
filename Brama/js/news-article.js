const parentElem = document.querySelector('.header .content-container');
    	const border = document.querySelector('.header .border');
    	

    	function imgWidth() {
	    	const bodyWidth = document.querySelector("body").clientWidth;
	    	const paddingTopBorder = parseInt(window.getComputedStyle(border).getPropertyValue('padding-top'));
	    	const paddingBottomBorder = parseInt(window.getComputedStyle(border).getPropertyValue('padding-bottom'));

    		if(bodyWidth >= 760){
    			parentElem.style.height = border.scrollHeight +paddingTopBorder+'px';
    		}else{
    			parentElem.style.height = '';

    		}
    	}

    	imgWidth();

    	window.onresize = imgWidth;