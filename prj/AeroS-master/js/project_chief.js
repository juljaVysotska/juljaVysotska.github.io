
		
		var listOfProj;
		$(document).ready(function () {
			listOfProj = $('.list-item').clone(true);
			$('.main').css('min-height',$(window).height() - $('header').height());
			$(window).trigger('resize');



		});

		$('.modal-group .container-fluid.title').click(function(){
			$(this).closest('.modal-group').find(".users-list").animate({
			    height: "toggle"
			  });
			$(this).find("img").toggle();
		});

		$('.user-sort-modal .modal-body .modal-group .users-list li').click(function () {
			$('.user-filter-input p').text($(this).find('.name').text());
			$('.user-sort-modal').modal('hide');
		});

		$(' .modal.bottom .sort-list li').click(function () {
			$('#sortModal').modal('hide');
			$('.control.author-control span').text($(this).text());
		});




		
		

		
		$(window).on('resize', function () {

			$('.main').css('min-height',$(window).height() - $('header').height());
		
			if($(window).width() >= 768){


				$(' .list-item .context-section a.dropdown-toggle').attr('data-target', '');
				$(' .list-item .context-section a.dropdown-toggle').attr('data-toggle', '');


				$(' .list-item .context-section a.dropdown-toggle').attr('role', 'button');
				$(' .list-item .context-section a.dropdown-toggle').attr('id', 'dropdownMenuLink');
				$(' .list-item .context-section a.dropdown-toggle').attr('data-toggle', 'dropdown');
				$(' .list-item .context-section a.dropdown-toggle').attr('aria-haspopup', 'true');
				$(' .list-item .context-section a.dropdown-toggle').attr('aria-expanded', 'false');



				console.log('more than 768px');

				$('.preview-wrapp .col-3, .preview-wrapp .col-2, .preview-wrapp .special-col-city, .preview-wrapp .special-col-companyname, .preview-wrapp .special-col-date, .preview-wrapp .col-1, .preview-wrapp .column1').click(function () {
					$( ".details-wrapp" ).css('display', 'none');
					$('.preview-wrapp').css("display", 'block');
					$(this).closest('.list-item').find('.preview-wrapp').css("display", 'none');
					$(this).closest('.list-item').find( ".details-wrapp" ).css('display', 'block');
				});

				$('.details-wrapp .header .row div:not(.col-7), .hide-more').click(function () {
					$('.preview-wrapp').css("display", 'block');
					$(this).closest('.list-item').find('.preview-wrapp').css("display", 'block');
					$( ".details-wrapp" ).css('display', 'none');
					$(this).closest('.list-item').find( ".details-wrapp" ).css('display', 'none');
				});
		
			}else{

				$('.preview-wrapp .col-3, .preview-wrapp .col-2, .preview-wrapp .special-col-city, .preview-wrapp .special-col-companyname, .preview-wrapp .special-col-date, .preview-wrapp .col-1, .preview-wrapp .column1').click(function () {
					location.href = 'mobile_item_description.html'	
				});

				$(' .list-item .context-section a.dropdown-toggle').attr('role', '');
				$(' .list-item .context-section a.dropdown-toggle').attr('id', '');
				$(' .list-item .context-section a.dropdown-toggle').attr('data-toggle', '');
				$(' .list-item .context-section a.dropdown-toggle').attr('aria-haspopup', '');
				$(' .list-item .context-section a.dropdown-toggle').attr('aria-expanded', '');


				$(' .list-item .context-section a.dropdown-toggle').attr('data-target', '#contextModal');
				$(' .list-item .context-section a.dropdown-toggle').attr('data-toggle', 'modal');


				console.log("less than 768px;");

				$('.context-modal .rm-btn-modal').click(function () {
					
					$('#contextModal').modal('hide');
					$('#exampleModal').modal('show');
				});


			}

			if($(window).width() >= 1200){

				$('.controls .control.proj-control').attr('data-target', '');
				$('.controls .control.proj-control').attr('data-toggle', '');
			}else{

				$('.controls .control.proj-control').attr('data-target', '#sortModal');
				$('.controls .control.proj-control').attr('data-toggle', 'modal');
			}

		});
		
		$('.users-wrapper .col-12').click(function () {

			$('.col-12').removeClass('select-human');
			
		

		});

		$('.users-wrapper .col-12').click(function() {
		  var clicks = $(this).data('clicks');

		  if (clicks) {

			$('.col-12').removeClass('select-human');
			

		  } else {
		  	$(this).addClass('select-human');
			console.log($(this).closest('.col-12'));

			

		  }
		  $(this).data("clicks", !clicks);
		});



		$('.done').each(function () {
			$(this).find('p').text('Готовый');
		});

		$('.newProj').each(function () {
			$(this).find('p').text('Новый');
		});

		$('.inProcess').each(function () {
			$(this).find('p').text('Решается');
		});

		

		

		
		$(document).click( function (e) {
			var listItem = $('.list-item');
			var input = $('input');
			if ((!listItem.is(e.target)
			    && listItem.has(e.target).length === 0 && !input.is(e.target)) ) {

				$('.users-wrapper .user .col-12').removeClass('select-human');
			
				$('.preview-wrapp').css("display", 'block');
				$(this).closest('.list-item').find('.preview-wrapp').css("display", 'block');
				$( ".details-wrapp" ).css('display', 'none');
				$(this).closest('.list-item').find( ".details-wrapp" ).css('display', 'none');

				
			}
			

		});

		$('.title-group, .group .col-1 img').click(function () {
			$(this).closest('.group').find('.users-wrapper').animate({
			    height: "toggle"
			  });
			$(this).closest('.group').find('.col-1 img').toggle();

			

			  	
			  
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

		$('.remove-btn').click(function () {
			var item = $(this).closest('.list-item');
			$('.name-proj').text( $(this).closest('.list-item').find('.client').text());

			$('#myModal').modal(
				$('.btn-remove').click(function () {
					//item.remove();
				})
			);
			
				
		});