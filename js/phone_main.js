// JavaScript Document
$(function(){		
	//点击右上角折叠菜单栏弹出导航
	$('body').on("click", '.header_menu', function () {
		$('.nav_box').toggleClass('active')
	
	});
	$('body').on("click", '.link02', function () {
		$(this).addClass('active')
		$('.nav_box').removeClass('active')
	
	});
	//点击关闭按钮关闭盒子
	$('body').on("click", '.nav_box .closed', function () {
		$('.nav_box').removeClass('active')
	});
	//底部展开折叠
	var off=true;
	$('body').on("click", '.footer_center_left', function () {
		if(off){
			$(".footer_center_left h4").addClass("active");
		}else{
			$(".footer_center_left h4").removeClass("active");

		}
		off=!off;
		$('.footer_hide_box').toggleClass('active')
	
	});
	if (window.location.href.indexOf('yewu1') !== -1) {//不等于-1的时候就是有
	
		isBusiness();
	} else {
		return false;
		//('.link01').addClass('active');
		// v1111
	}

	function isBusiness() {
		//jQuery('html,body').animate({scrollTop:$('#yewu1').offset().top});
		$('.link02').addClass('active');
		$('.link01').removeClass('active');
	}
						
})

	//uc浏览器下关键词特别标出去掉
$(document).ready(function() {

	function removeUChref(){
		var hrefArr = $('a')
		for (var i=0;i<hrefArr.length;i++){
			var uca = hrefArr[i].href
			if(uca.indexOf('uc.cn')>=0){
				uca.attr("style","")
				uca.attr("href","")
			}
		}
	}	
	removeUChref();   //调用

})

