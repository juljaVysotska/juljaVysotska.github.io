$('.burger-menu').click(()=>{
	$('.burger-menu_modal').toggleClass('show');

	$('body').css('overflow', 'hidden');
});

$('.burger-menu_modal .close').click(()=>{
	$('.burger-menu_modal').removeClass('show');
	$('body').css('overflow', '');

});


$(window).scroll(()=>{
	$('nav').removeClass('white');
	$('nav').css('background-color','');
	$('nav').addClass('transparent');
	$('nav').css('position','absolute');
	$('nav').addClass('first-screen');
	

	if($(window).scrollTop() > 1200){
		$('nav').removeClass('first-screen');

		$('nav').addClass('white');
		$('nav').css('background-color','white');
		$('nav').removeClass('transparent');
		$('nav').css({
			'position':'fixed',
			'top': 0,
			'transition':'.3s all ease-in-out'
		});

	}


	if($(window).width() < 760 && $(window).scrollTop() > 500){
		$('nav').removeClass('first-screen');

		$('nav').addClass('white');
		$('nav').css('background-color','white');
		$('nav').removeClass('transparent');
		$('nav').css({
			'position':'fixed',
			'top': 0,
			'transition':'.3s all ease-in-out'
		});

	
	}
});