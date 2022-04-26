
		$('.agregat-card').click(function () {
			$('.card-header-wrapp').removeClass('selected-card');
			$('input[type="radio"]').attr('checked',false);
			$(this).closest('.col-3').find('input[type="radio"]').attr('checked', true);
			$(this).find('.card-header-wrapp').addClass('selected-card');


			$('.btn-submit').removeClass('btn-inactive');
			$('.btn-submit').addClass('btn-active');
		});

		$(document).click(function (e) {
			var card = $('.agregat-card');
			if(!card.is(e.target) && card.has(e.target).length ===0){
				// console.log('lkijuhygt');
				$('input[type="radio"]').attr('checked',false);
				$('.btn-submit').removeClass('btn-active');
				$('.btn-submit').addClass('btn-inactive');
				$('.agregat-card').find('.card-header-wrapp').removeClass('selected-card');
			}
		});

		$('.dropdown .dropdown-toggle img, header img.settings').each(function(){
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                var $svg = $(data).find('svg');

                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }

                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                $svg = $svg.removeAttr('xmlns:a');

                $img.replaceWith($svg);

            }, 'xml');

        });
		
		$('.modal.burger-menu .list-title').click(function () {

			
			var clicks = $(this).data('clicks');

			if (clicks) {
				$(this).closest('.list').removeClass('active-list');
				$(this).find('img').removeClass('arr-rotate-up');
				$(this).find('img').addClass('arr-rotate-down');
				$(this).closest('.list').find('.list-items').animate({
					height: "toggle"
				});
			} else {
				$(this).closest('.list').addClass('active-list');
				$(this).find('img').addClass('arr-rotate-up');
				$(this).find('img').removeClass('arr-rotate-down');
				$(this).closest('.list').find('.list-items').animate({
					height: "toggle"
				});
			}
			$(this).data("clicks", !clicks);
		});


		var pressTimer;

		$(document).ready(function () {
			$('.header .user-name').width($('.header .author-wrapp').width() - $('.header .author-wrapp img').width() );
			if($(window).width() <= 1200){
				// console.log('less than 1200');
				$(".card-header-wrapp").mouseup(function(){
				  clearTimeout(pressTimer);
				  // Clear timeout
				  console.log('mouse up');
				  return false;
				}).mousedown(function(){
					console.log('long click');

					var title = $(this).find('.agregat-title').text();
					// console.log(title);
					var imgSrc = $(this).find('img').attr('src');
					// console.log(imgSrc);
				  // Set timeout
				  pressTimer = window.setTimeout(function() {
				  	$('#modalCardInfo').modal('show');
				  	$('#modalCardInfo').on('shown.bs.modal' ,function () {
				  		$(this).find('.card-header-wrapp img').attr('src', imgSrc);
			  			$(this).find('.agregat-title').text(title);
				  	});
				  },500);
				  return false; 
				});
			}
		});


		$(window).on('resize', function () {
			if($(window).width() <= 1200){
				$(".card-header-wrapp").mouseup(function(){
				  clearTimeout(pressTimer);
				  // Clear timeout
				  return false;
				}).mousedown(function(){
					var title = $(this).find('.agregat-title').text();
					var imgSrc = $(this).find('img').attr('src');
				  // Set timeout
				  pressTimer = window.setTimeout(function() {
				  	$('#modalCardInfo').modal('show');
				  	$('#modalCardInfo').on('shown.bs.modal' ,function () {
				  		$(this).find('.card-header-wrapp img').attr('src', imgSrc);
			  			$(this).find('.agregat-title').text(title);
				  	});
				  },500);
				  return false; 
				});
			}

			$('.header .user-name').width($('.header .author-wrapp').width() - $('.header .author-wrapp img').width() );
		});
