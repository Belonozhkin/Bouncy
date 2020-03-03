$(document).ready(function(){
	$('.testimonials__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		easing: 'ease',
		autoplay: false,
		autoplaySpeed: 10000,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
	});

	$('.team__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 7000,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
	});

	$('.blog__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 15000,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		vertical: true,
		verticalSwiping: true,
	});

});