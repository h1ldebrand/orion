$(document).ready(function(){

	//метод назначает одинаковую высоту указанным селекторам
	$.fn.sameHeight = function(){
		var icount = 1;
		this.each(function(){
			if(icount < $(this).height())
				icount = $(this).height();
			else
				icount = icount;
		})
		return this.height(icount);
	}

	$(".slider").owlCarousel({
		items: 1,
		loop:true,
		autoplay: true,
		autoplayTimeout: 10000
	})

	$(".slider .owl-dot").each(function(){
		$(this).html("<span></span>");
	})

	$(".service-item").sameHeight();

	var headerHeight = $(".header").first().height();


	$(".slider").css("min-height", headerHeight)






})