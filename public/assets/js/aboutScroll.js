$(function(){
	$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top = $this.scrollTop();
   var $barFixedHeight = $('.sec1').height() - 140;
　　if($this_Top < $barFixedHeight){

　　　}
　　else if($this_Top > $barFixedHeight){
　　　 
　　　}
　　}).scroll();
})
