
		
		


		$('.title-wrapp').click(function(){

			$('.aditional-info-form').animate({
			    height: "toggle"
			  });
		});


        $(window).on('resize', function () {
                $('.header .user-name').width($('.header .author-wrapp').width() - $('.header .author-wrapp img').width() );
        
        });
		
		var valueInputStreamGL;


        function drawPlot(seriesJson, plotIdName, plotColor) {
            var minx = seriesJson.PlotObj[0].min;
            var maxx = seriesJson.PlotObj[seriesJson.PlotObj.length - 1].max;

            var ticksArray = [];
            for (var i = 0; i < 8; ++i) {
                ticksArray.push(minx + (maxx - minx) * i / 7);
            }
            console.log(ticksArray);

            var seriesTransparent = [];
            var seriesValues = [];
            var iterator = seriesJson.PlotObj.length;
            seriesJson.PlotObj.forEach(function (plotObj) {
                seriesTransparent.push([plotObj.min, iterator]);
                seriesValues.push([plotObj.max - plotObj.min, iterator]);
                iterator--;
            });
            for (var i = 0; i < seriesJson.PlotObj.length - 1; ++i) {
                $('#' + plotIdName + ' .rows-hovers .background').first().clone().appendTo(('#' + plotIdName + ' .rows-hovers'));
            }

            $.jqplot(plotIdName, [seriesTransparent, seriesValues], {

                height: 22 + 56 * seriesJson.PlotObj.length,
                stackSeries: true,
                seriesDefaults: {
                    renderer: $.jqplot.BarRenderer,
                    rendererOptions: {
                        barDirection: 'horizontal',
                        highlightMouseDown: true,
                        barWidth: 41,
                        barPadding: -20,
                    },
                    shadow: false,
                    shadowAngle: false,
                },

                axes: {
                    yaxis: {
                        renderer: $.jqplot.CategoryAxisRenderer,
                        tickOptions: {
                            show: false,
                        },
                        // ticks: [],
                    },
                    xaxis: {
                        min: minx,
                        max: maxx,
                        rendererOptions: {
                            drawBaseline: false
                        },
                        ticks: ticksArray,
                    }
                },

                canvasOverlay: {
                    show: true,
                    objects: [
                        {
                            verticalLine: {
                                x: seriesJson.lineObj.x,

                                lineWidth: 2,
                                color: '#EB5757',//spesial red
                                shadow: false
                            }
                        }
                    ]
                },

                // colors
                series: [
                    {color: 'rgba(0, 0, 0, 0)'},
                    {color: plotColor}
                ],
                grid: {
                    background: 'transparent',
                    borderColor: 'transparent',
                    shadow: false,
                    drawBorder: false,
                    shadowColor: 'transparent',

                    gridLineColor: '#EEEEEE'
                }
            });
        }


		$(document).ready(function () {
            $('.header .user-name').width($('.header .author-wrapp').width() - $('.header .author-wrapp img').width() );

			$('input').change(function () {
				if($('.project-name').val() != ''){
					$('.btn-submit').addClass('btn-active');
					$('.btn-submit').attr('disabled',false);
					$('.btn-submit').removeClass('btn-inactive');
				}else{
					$('.btn-submit').removeClass('btn-active');
					$('.btn-submit').attr('disabled',true);
					$('.btn-submit').addClass('btn-inactive');

				}
			});

			$('.color-select .dropdown-item').ready(function () {
				var lll = $(this).find('.color').clone();
				$(this).closest('.dropdown').find('.btn').empty();
				lll.appendTo($(this).closest('.dropdown').find('.btn'));
			});


			$('.dropdown').each(function () {
				$(this).find('.btn').text($(this).find('.dropdown-item:not(.color-select .dropdown-item):first-child').text());
			});
			

			$('.color-select').each(function () {
				var lll = $(this).find('.dropdown-item:first-of-type').find('.color').clone();
				$(this).find('.btn').empty();
				lll.appendTo($(this).find('.btn'));
			});


            var seriesJson = {'PlotObj':[{'min': 1, 'max': 3.32},
                    {'min': 1.435, 'max': 4},
                    {'min': 2.83, 'max': 4.5},
                    {'min': 3, 'max': 6},
                    {'min': 3.84, 'max': 9}],
                'lineObj': {'x': 2.65}};
            var plotIdName= 'comingIn';
            var plotColor = '#C3DAE4';
            drawPlot(seriesJson, plotIdName, plotColor);

            var seriesJson = {'PlotObj':[{'min': 1, 'max': 2.32},
                    {'min': 1.435, 'max': 4},
                    {'min': 2.83, 'max': 4.5},
                    {'min': 3, 'max': 6},
                    {'min': 3.84, 'max': 9}],
                'lineObj': {'x': 2.65}};
            var plotIdName= 'comingOut';
            var plotColor = '#C9E0D6';
            drawPlot(seriesJson, plotIdName, plotColor);

            $( '.background, .table-hover tr' ).hover(
                function() {
                    $($('#comingIn .background')[$( this ).index()]).css('background-color', 'rgba(0,0,0,.075)');
                    $($('#comingOut .background')[$( this ).index()]).css('background-color', 'rgba(0,0,0,.075)');
                    $($('.params-table table tr')[$( this ).index()+1]).css('background-color', 'rgba(0,0,0,.075)');
                    $($('.agregat table tr')[$( this ).index()+1]).css('background-color', 'rgba(0,0,0,.075)');
                },
                function() {
                    $($('#comingIn .background')[$( this ).index()]).css('background-color', 'transparent');
                    $($('#comingOut .background')[$( this ).index()]).css('background-color', 'transparent');
                    $($('.params-table table tr')[$( this ).index()+1]).css('background-color', 'transparent');
                    $($('.agregat table tr')[$( this ).index()+1]).css('background-color', 'transparent');
                }
            );

            $( '.background, .table-hover tr' ).click( function(){
                var checkbox = $($('.agregat table tr')[$( this ).index()+1]).find('input[type=checkbox]');

                if ($( this ).index() != $('input[type=checkbox]:checked').parents('tr').index()) {
                    $('.graph input[type=checkbox]').attr('checked', false);
                    $('.graph .custom-checkbox').removeClass('custom-checkbox-checked');
                }
                

                if (checkbox.is(':checked')){

                    checkbox.attr('checked', false);
                    checkbox.parent().find('.custom-checkbox').removeClass('custom-checkbox-checked');
                    checkbox.trigger('change');

                } else {
                    checkbox.attr('checked', true);
                    checkbox.parent().find('.custom-checkbox').addClass('custom-checkbox-checked');
                    checkbox.trigger('change');
                }
            });

            $('.graph .custom-checkbox, .graph input').on('change',function() {
                console.log("change");

                $($('#comingIn .background')).removeClass('active');
                $($('#comingOut .background')).removeClass('active');
                $($('.table-params  tr')).removeClass('active');
                $($('.agregat  tr')).removeClass('active');

                if($(this).is(":checked")) {
                    $($('#comingOut .background')[$(this).parents('tr').index()]).addClass('active');
                    $($('#comingIn .background')[$(this).parents('tr').index()]).addClass('active');
                    $($('.params-table  tr')[$(this).parents('tr').index()+1]).addClass('active');
                    $($('.agregat  tr')[$(this).parents('tr').index()+1]).addClass('active');
                } else {
                    console.log('dechecked');
                    $($('#comingIn .background')[$(this).parents('tr').index()]).removeClass('active');
                    $($('#comingOut .background')[$(this).parents('tr').index()]).removeClass('active');
                    $($('.table-params  tr')[$(this).parents('tr').index()+1]).removeClass('active');
                    $($('.agregat  tr')[$(this).parents('tr').index()+1]).removeClass('active');
                }
            });


			

		
		});

		$('.sea-level').change(function () {
			var val = $(this).val();

			$(this).val(val + ' м над ур.м.');
		});

		$('#thickness').change(function () {
			var val = $(this).val();

			$(this).val(val + ' мм');
		});

		

		$('.params .checkbox-block span  ,.params .custom-checkbox,.select-add .checkbox-block span, .select-add .custom-checkbox').click(function () {
			var clicks = $(this).data('clicks');

				
			  if (clicks) {

			  	$(this).closest('.checkbox-block').find('.custom-checkbox').removeClass('custom-checkbox-checked');
			  	$(this).closest('.checkbox-block').find('input').attr('checked', false);
			

			  	} else {
			  	$(this).closest('.checkbox-block').find('.custom-checkbox').addClass('custom-checkbox-checked');
			  	$(this).closest('.checkbox-block').find('input').attr('checked', true);
			  	
				

			  }
			  $(this).data("clicks", !clicks);
		});



		$('.color-select .dropdown-item').click(function () {
			var lll = $(this).find('.color').clone();
			$(this).closest('.dropdown').find('.btn').empty();
			lll.appendTo($(this).closest('.dropdown').find('.btn'));
		});

		$('.dropdown-item:not(.color-select .dropdown-item)').click(function () {
			$(this).closest('.dropdown').find('.btn').text($(this).text());
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


       

		$('#summerTempInputPS').change(function () {
        	var value = $(this).val();

        	console.log(value);

			$(this).val(value + ' °C');
			$(this).closest('.creteria').find('.temperature-number').text(value);
        });

        $('#summerWetnessInputPS').change(function () {
        	var value = $(this).val();

        	console.log(value);

			$(this).val(value + '  %');

			$(this).closest('.creteria').find('.percent').text(value);
        });

        $('#winterTempInputPS').change(function () {
        	var value = $(this).val();

        	console.log(value);

			$(this).val(value + ' °C');
			$(this).closest('.creteria').find('.temperature-number').text(value);
        });

        $('#winterWetnessInputPS').change(function () {
        	var value = $(this).val();

        	console.log(value);

			$(this).val(value + '  %');
			$(this).closest('.creteria').find('.percent').text(value);
        });

        
          var isResize = false;
		  var isResize2 = false;
		  var left = $('.params-table');
		  var drag = $('#drag');

		  var drag2 = $('#drag2');

		  
		    drag.on('mousedown',function(){

                isResize = true;
                if( $('.coming-in').width() == 582 && $('.coming-out').width() == 582 && left.width() == 582){
                    isResize = false;
                }

                
		    });

		    drag2.on('mousedown',function(){
                isResize2 = true;
		      if( $('.coming-in').width() == 582 && $('.coming-out').width() == 582 && left.width() == 582){
                    isResize2 = false;
                }
		    });

		 $(document).on("mousemove", function(e){
		   if(isResize){
		    
		     left.width( e.pageX - $('.agregat').width() -40);
		      
		     $('.coming-in').width( $('.col-12').width() - left.width() - $('.agregat').width() - $('.coming-out').width());


            console.log($('.coming-in').width());
		     if($('.coming-in').width() == 582){
				 $('.coming-out').width($('.col-12').width() - e.pageX - 540);
		     }

             if($('.coming-in').width() == 80){
                $('.coming-out').width($('.col-12').width() - e.pageX);
             }

		   };
		   
		   if(isResize2){
		    
		     $('.coming-out').width($('.col-12').width() - e.pageX +40);

		     $('.coming-in').width( $('.col-12').width() - left.width() - $('.agregat').width() - $('.coming-out').width());


            if($('.coming-in').width() == 582){
               // console.log($('.coming-in').width() );
               // $('.coming-out').width($('.col-12').width() - e.pageX );
                left.width($('.col-12').width() - $('.coming-out').width() - $('.coming-in').width() - $('.agregat').width()) ;
                
                //console.log($('.col-12').width() - e.pageX );
             }

             if($('.coming-in').width() == 80){
                left.width($('.col-12').width() - $('.coming-out').width() - 80 - $('.agregat').width());
             }
		    
		   };
		     
		  }).on('mouseup',function(){
		   isResize = false;
		   isResize2 = false;
		 });












