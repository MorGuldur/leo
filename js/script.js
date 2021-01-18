$(document).ready(function(){
	$('.banner').slick({
		dots:true,
		speed:2000,
		autoplay:true,
		autoplaySpeed:3000
	});
});
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__nav').toggleClass('active');
	});
});