$(document).ready(function() {

	// 英雄留言尋人榜的留言輪播
	$('#s3-slider').unslider({
		nav: false,
		autoplay: true,
		animation: 'vertical',
	})

	// menu
	$('.menu-btn').click(function() {
		$('#mobile-nav').toggleClass('active')
	})



})