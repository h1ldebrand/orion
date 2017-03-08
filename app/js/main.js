$(document).ready(function(){

	
	//подключаем слайдер owl-carousel
	var owl1 = $(".slider");
	owl1.owlCarousel({
		items: 1,
		loop:true,
		navText: ['', ''],
		autoplay: true,
		autoplayTimeout: 10000
	})

	$(".slider .owl-dot").each(function(){
		$(this).html("<span></span>");
	})

	var owl2 = $(".sites__list");
	owl2.owlCarousel({
		items: 2,
		loop:true,
		navText: ['', ''],
	})

	$('.switch__button_right').click(function() {
		owl2.trigger('next.owl.carousel');
	})
	$('.switch__button_left').click(function() {
		owl2.trigger('prev.owl.carousel');
	})

		var owl3 = $(".comments-wrap");
		owl3.owlCarousel({
			items: 1,
			loop:true,
			navText: ['', ''],
			autoplay: true,
			autoplayTimeout: 10000
		})
	


	$(".slider__image").each(function(){
		var that = $(this);
		var sliderWidth = that.closest(".slider").css("width");
		var sliderHeight = that.closest(".slider").css("height");
		that.css("min-width", sliderWidth);
		that.css("min-height", sliderHeight);
	})

	
	// section 3 
	$(".operation").each(function(e){

		var that = $(this);
		var operationTop = 0;

		if(e === 0){
			operationTop = that.offset({top: $(".working-process").offset().top +25})
			.offset().top;
		} else {
			operationTop = that.offset({top: that.prev().offset().top + that.prev().outerHeight() + 25})
			.offset().top;
		}

		if(e%2 == 0){

			that.addClass("operation_right");
			addElement("blue", operationTop);

		} else {

			that.addClass("operation_left");
			addElement("red", operationTop);

		}
		
		function addElement(color, operationTop){

			var circleTop = operationTop + 25;
			$("<div class='scale__circle'></div>")
				.appendTo(".scale__circle-operation-wrap")
					.addClass("scale__circle_"+color)
						.offset({top: circleTop});

		}
		if(e == $(".operation").length - 1){
			var lastTop = $(".operation").last().offset().top;
			var firstTop = $(".operation").first().offset().top;
			var lastHeight = $(".operation").last().outerHeight();

			var scaleLineHeight = lastTop - firstTop + lastHeight + ($(".operation").length + 1) * 25;
			
			$(".scale__line").height(scaleLineHeight)
		}
		
	});


	
		

})