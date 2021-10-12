// JavaScript Document
$(function(){
	//导航滚动出来
	(function () {
		var header = document.querySelector("#header");
		var headroom = new Headroom(header, {
			tolerance: {
			down: 10,
			up: 20
			},
			offset: 15
		});
		headroom.init();
		})();
			

		
		//二级页我们的业务链接到首页
	
		if (window.location.href.indexOf('yewu1') !== -1) {//不等于-1的时候就是有
			isBusiness();
		} else {
			$('.shou_index').children('a').addClass('active');
		}
	  $('.yewu2').click(function(){
			isBusiness();
	  });
	  
		function isBusiness() {
			//jQuery('html,body').animate({scrollTop:$('#yewu1').offset().top});
			$('.yewu2').children('a').addClass('active');
			$('.shou_index').children('a').removeClass('active');
		}

		
		// $(window).resize( function (){
		// 	//alert( "窗体大小改变了！" );
		// 	location.reload()
		// 	//这里你可以写你的刷新代码！
		// });



		
		
						
})

