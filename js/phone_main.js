// JavaScript Document
$(function(){

			
	//点击右上角折叠菜单栏弹出导航
	$('body').on("click", '#menu', function () {
		$('.nav_box').toggleClass('active')
	
	});
	$('body').on("click", '.link02', function () {
		$(this).addClass('active')
		$('.nav_box').removeClass('active')
	
	});
	
	
	$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active')
	});
	var off=true;
	$('body').on("click", '.footer_center_center h4', function () {
		if(off){
			$(".footer_center_center h4").addClass("active");
		}else{
			$(".footer_center_center h4").removeClass("active");

		}
		off=!off;
		$('.footer_hide_box').toggleClass('active')
	
	});




		// $(window).scroll(function(){
		// 	var offh=$(".part4").offset().top;
		// 	console.log(offh)
		// 	if ($(window).scrollTop() < (offh-100)) {
		// 		$('.link01').addClass('active');
		// 		$('.link02').removeClass('active');
		// 	} else {
		// 		$('.link02').addClass('active');
		// 		$('.link01').removeClass('active');
		// 	}
		// })
		// if (window.location.href.indexOf('link02') !== -1) {//不等于-1的时候就是有
		// 	isBusiness();
		// } else {
		// 	$('.link01').addClass('active');
		// }
		// $('.link02').click(function(){
		// 		isBusiness();
		// });
	
		// function isBusiness() {
		// 	//jQuery('html,body').animate({scrollTop:$('#yewu1').offset().top});
		// 	$('.link02').addClass('active');
		// 	$('.link01').removeClass('active');
		// }





						
})

