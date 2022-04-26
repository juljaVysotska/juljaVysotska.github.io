		$('.temperature').change(function () {
			var value = $(this).val() +' ';

			$(this).val( value + '°C')
		});

		$('.wetness').change(function () {
			var value = $(this).val() +' ';

			$(this).val( value + '%')
		});


		$('.max-dir-pressure').change(function () {
			var value = $(this).val() +' ';

			$(this).val( value + 'Па')
		});


		$('.left-menu .agregat, .left-menu .elements').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height());
		$('.left-menu .elements').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height() - 26);
		$('.calculate-params').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height()+40);
	
		
		$(window).on('resize',function () {
			$('.left-menu .agregat, .left-menu .elements').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height());
			$('.left-menu .elements').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height() - 26);
			$('.constuctor-plate').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height());
			//$('.constuctor-plate').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height());
			$('.calculate-params').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height());
	
			if($(window).width() <= 750){
				$('.constuctor-plate').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height() +40);
				$('.calculate-params').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height()+40);
		
				
			}


		 });

		$(document).ready(function () {
			if($(window).width() <= 750){
				$('.constuctor-plate').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height() - $('.left-menu .tabs').height() +40);
				$('.constructor-layout-wrap').height( $(window).height() - $('header').height() - 40);
				$('.calculate-params').height($(window).height() - $(".main-body .breadcrumbs").height() - $('header').height()+40);
		
			}

		});

		

		$('.group-title').click(function () {
			$(this).closest('.element-section').find('.items').animate({
			    height: "toggle"
			  });

			$(this).find('img').toggleClass('rotate');
			$(this).find('img').toggleClass('rotate2');

		});

		$('.calc-params-title').click(function () {
			$(this).closest('.calculate-params').find('.params-fields').animate({
			    height: "toggle"
			  });

			$(this).find('img').toggleClass('rotate');
			$(this).find('img').toggleClass('rotate2');

		});


		$('.spes-params .dropdown').each(function () {
			$(this).find('.dropdown-toggle').text($(this).find('.dropdown-item:first-child').text());
		});

		$('.spes-params .dropdown-item').click(function () {
			$(this).closest('.dropdown').find('.dropdown-toggle').text($(this).text());
		});

		
		$('.custom-checkbox').click(function () {

			$('.custom-checkbox').removeClass('custom-checkbox-checked');
			$('.custom-checkbox').next().attr('checked',false);

			$(this).addClass('custom-checkbox-checked');
			$(this).next().attr('checked',true);

			$('.spes-params').css('display', 'block');
			

		});

		$('.fit-element-params').click(function () {
			$('.custom-checkbox').removeClass('custom-checkbox-checked');
			$('.custom-checkbox').next().attr('checked',false);

			$(this).find('.custom-checkbox').addClass('custom-checkbox-checked');
			$(this).find('.custom-checkbox').next().attr('checked',true);

			$('.spes-params').css('display', 'block');
		});


		$('.btn-calculate').click(function () {
			$('.preloader').css('height', '100%');
			$('.preloader img').css('height', 'auto');


			setTimeout(function () {
				$('.fit-elements-table').css('display', 'block');
				$('.custom-checkbox').removeClass('custom-checkbox-checked');
				$('.custom-checkbox').next().attr('checked',false);

			$('.spes-params').css('display', 'none');
			},2000);

				console.log($('.fit-elements-table').is(":visible"));
			

			setTimeout(function () {
				if($('.fit-elements-table').css("display") != "none"){
					console.log($('.fit-elements-table').is(":visible"));
					$('.preloader').css('height',0);
					$('.preloader img').css('height', 0);
				}
			},2000);
		});


		$('.card-wrapp').click(function () {
			$('.card-wrapp').closest('.card-preset').css('box-shadow','none');

			$('.card-wrapp').removeClass('card-wrapp-checked');
			$('input').attr('checked',false);

			$(this).closest('.card-preset').css('box-shadow','0px 10px 20px rgba(29, 59, 71, 0.15)');

			$(this).addClass('card-wrapp-checked');


			$(this).find('input').attr('checked',true);
		});

		$('.select-preset').click(function () {

			$('.card-wrapp').removeClass('card-wrapp-checked');
			$('.card-wrapp').closest('.card-preset').css('box-shadow','none');


			$('input').attr('checked',false);
		});

		$('.component').click(function () {
			
			$('.component').removeClass('select-comp');


			if($(this).hasClass('select-comp')){
				console.log($(this).hasClass('select-comp'));
				$(this).removeClass('select-comp');
			}else{

				$(this).addClass('select-comp');
			}
		});


		/*-----------Mobile version------------*/

		$('.editor-pane').click(function () {
			$('.black').addClass("black-visible");

			$('body').css("overflow", 'hidden')

			$('.constructor-layout-wrap').addClass("visible-constructor-layout-wrap");
			$('.constructor-layout-wrap').css("display", "unset");

			$('.constuctor-plate').css('overflow', 'hidden');
		});


		$('.agregat-pane').click(function () {
			$('.black').addClass("black-visible");

			$('body').css("overflow", 'hidden');

			$('.agregat-title-tabl').css('display','flex');
			$('.element-title-tabl').css('display','none');
			$('.left-section').addClass("visible-left-section");
			$('.left-section').css("display", "unset");
		

			$('.visible-left-section .tab-content .tab-pane:first-of-type').addClass("active");
			$('.visible-left-section .tab-content .tab-pane:first-of-type').addClass("show");


			$('.visible-left-section .tab-content .tab-pane:last-child').removeClass("active");
			$('.visible-left-section .tab-content .tab-pane:last-child').removeClass("show");

		});

		$('.elements-pane').click(function () {
			$('.black').addClass("black-visible");

			$('body').css("overflow", 'hidden');
			

			$('.element-title-tabl').css('display','flex');
			$('.agregat-title-tabl').css('display','none');
			$('.left-section').css("display", "unset");
		
			$('.left-section').addClass("visible-left-section");

			$('.visible-left-section .tab-content .tab-pane').removeClass("active");
			$('.visible-left-section .tab-content .tab-pane').removeClass("show");


			$('.visible-left-section .tab-content .tab-pane:last-child').addClass("active");
			$('.visible-left-section .tab-content .tab-pane:last-child').addClass("show");
			
		});

		$('.params-pane').click(function () {

			$('.black').addClass("black-visible");
			

			$('body').css("overflow", 'hidden');


			
			$('.col-2.right-section').css("display", "unset");
			$(".col-2.right-section").addClass('visible-right-section');
			

			$('.col-2.right-section .params-title-tabl').css('display', 'flex');
		});

		$('.tablet-title .title .hide-block, .black').click(function () {
			$('.col-2.left-section,.col-2.right-section').addClass('unvisible-section');


			setTimeout(function () {
				$('.black').addClass("black-opacity");
			}, 200);

			setTimeout(function () {
				$('.black').removeClass("black-opacity");
				$('.black').removeClass("black-visible");
				
			}, 500);

			$('.tz-section').css('display', 'flex');
			$('.constructor-layout-wrap').addClass('unvisible-section');
			$('.constructor-layout-wrap').removeClass('visible-constructor-layout-wrap');
			
			$('.constuctor-plate').css('overflow-y', 'scroll');
			setTimeout(function () {
				$('.col-2.left-section').removeClass('visible-left-section');
				$(".col-2.right-section").removeClass('visible-right-section');
				$('.col-2.left-section,.col-2.right-section').removeClass('unvisible-section');
				$('.left-section,.col-2.right-section').css("display", "none");
				console.log("100 milliseconds expired")
			}, 200);


		});

		$(document).ready(function () {
			$(window).trigger('resize');

		
			$('.component  .dropdown-toggle').click(function () {
				console.log('ololol');

				var projName = $(this).closest( ".component" ).find(".name-comp").text() + " " + $(this).closest( ".component" ).find(".model-comp").text();

				$(".delete-comp").click(function () {
					$('.delete-modal .name-proj').text(projName);
				});


			});

		
			

			

		});






		$(window).on('resize', function () {
		
			if($(window).width() >= 768){


				$('.ui-sortable-handle .context-section a.dropdown-toggle').attr('data-target', '');
				$('.ui-sortable-handle .context-section a.dropdown-toggle').attr('data-toggle', '');


				$(' .ui-sortable-handle .context-section a.dropdown-toggle').attr('role', 'button');
				$(' .ui-sortable-handle .context-section a.dropdown-toggle').attr('id', 'dropdownMenuLink');
				$(' .ui-sortable-handle .context-section a.dropdown-toggle').attr('data-toggle', 'dropdown');
				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('aria-haspopup', 'true');
				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('aria-expanded', 'false');



				console.log('more than 768px');
				$('.breadcrumbs').css('height', 40);

				$('.tablet-title .title .hide-block, .black').click(function () {

					$('.breadcrumbs').css('height', 40);
				});

		
			}else{

				var currentEl;
				var countLi = $('.ui-sortable li');
				var prevEl , nextEL;

				$('.component  .dropdown-toggle').click(function () {
					currentEl = $(this).closest( ".component" ).closest('li');
				});


				$(".control-up").click(function () {
					currentEl.index();
					prevEl = currentEl.prev();
					nextEl = currentEl.next();

					if(currentEl.index() != 0){
						var el = currentEl.detach();
						el.insertBefore(prevEl);
						
					}

				});

				$(".control-down").click(function () {
					currentEl.index();
					prevEl = currentEl.prev();
					nextEl = currentEl.next();
					if(currentEl.index() != countLi.length -1 ){
						var el = currentEl.detach();
						el.insertAfter(nextEl);
					}

				});

				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('role', '');
				$(' .ui-sortable-handle  .context-section a.dropdown-toggle').attr('id', '');
				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('data-toggle', '');
				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('aria-haspopup', '');
				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('aria-expanded', '');


				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('data-target', '#contextModal');
				$('  .ui-sortable-handle .context-section a.dropdown-toggle').attr('data-toggle', 'modal');


				console.log("less than 768px;");
				
					$('.agregat-pane, .params-pane, .elements-pane , .editor-pane').click(function () {
					
					$('.tz-section').css('display', 'none');
					$('.breadcrumbs').css('height', 40);
				$('.tablet-title .title .hide-block, .black').click(function () {

					$('.breadcrumbs').css('height', 80);
				});

				});

			}

			

		});
