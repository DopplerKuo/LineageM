$(document).ready(function() {

	// loading
  var progress = 0;
  var $img_count = $("img").length;
  $("img").on('load', function() {
    progress += 100 / $img_count
    var percent = Math.round(progress)
    $("#loading .loading-pt b").animateNumbers(percent, 100);
  });

  $(window).on('load', function() {
  	$("#loading .loading-pt b").animateNumbers(100, 100);
  	$("#loading").fadeOut(100);
  })

  // 首屏字幕輪播
  $('#header-slider').unslider({
  	nav: false,
  	autoplay: true,
  	animation: 'fade',
  	arrows: false,
  	delay: 5000,
  })

	// 英雄留言尋人榜的留言輪播
	$('#s3-slider').unslider({
		nav: false,
		autoplay: false,
		animation: 'vertical',
	})

	//手機版 尋人榜 tab
	$('.s3-rank-m-tab div').click(function() {
		var $t = $(this).attr('data-tab')
		$('.s3-rank-m-tab div').removeClass('active')
		$(this).addClass('active')
		$('.s3-rank-list').removeClass('active')
		$('.s3-rank-list[data-tab="' + $t + '"]').addClass('active')
	})

	// menu
	$('.menu-btn').click(function() {
		$('#mobile-nav').toggleClass('active')
	})

	// section3 pop
	$('#pop-up .close').click(function() {
		$('#pop-up').fadeOut(300)
	})

	$('.sec3 .see-more-btn').click(function() {
		$('#pop-up').fadeIn(300)
	})

	// section5 form
	$('#find-friend-form .close').click(function() {
		$('#find-friend-form').fadeOut(300)
	})

	$('#find-friend-btn').click(function() {
		$('#find-friend-form').fadeIn(300)
	})

	// ======== 伺服器選擇，彈跳視窗 =========
	$('#server-list div:not(.close)').click(function() {
		var $t = $(this).text()
		$('#s3-server-select, #s5-server-select').val($t)
		$('#server-list').fadeOut(300)
	})

	$('#server-list .close').click(function() {
		$('#server-list').fadeOut(300)
	})

	$('#s3-server-select-group, #s5-server-select-group').click(function(e) {
		$('#server-list').css('display', 'flex')
	})


	// ======== 關於滑鼠滾動特效 =========
	$('#nav a, #mobile-nav a, #go-top').click(function(e) {
		e.preventDefault
		var $anchor = $(this).attr('data-anchor')
		$('#mobile-nav').removeClass('active')
    var goFindIt = $( "." + $anchor ).offset().top;
    $(document.body).animate({
      scrollTop: (goFindIt)
    })
	})

	// 回去 top 按鈕出限時機
	$(window).bind('scroll resize', function(){
		var $this = $(this);
		var $this_Top = $this.scrollTop();
		var $barFixedHeight = $('.sec1').height();
		if ( $this_Top < $barFixedHeight ) {
			$('#go-top').fadeOut(300)
		} else {
			$('#go-top').fadeIn(300)
		}
　　}).scroll();


})