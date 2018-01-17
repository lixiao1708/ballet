$(()=>{
	//师资力量左右按钮点击切换
	var $teacher=$(".teacher")
	$teacher.on("click","a",function(e){
			e.preventDefault();
			var $tar=$(e.target);
			if($tar.is(".left")){
					var $div=$(".teacher>div.in")
					$div.removeClass("in").hide();
                console.log($div)
					if($div.prev().is("div")){
							$div.prev().addClass("in").show()
							console.log($div)
					}else{
							$("a.left").prev().addClass("in").show();

					}
			}else if($tar.is(".right")){
					var $div=$(".teacher>div.in")
					$div.removeClass("in").hide();
					if($div.next().is("div")){
							$div.next().addClass("in").show();

					}else{
							$teacher.children(":nth-child(3)").addClass("in").show();

					}
			}
	})
	//鼠标滚动事件
	
	$(window).scroll(function(e){
		var h=$(e.target).scrollTop();//鼠标滚动的高度
		var h0=$(window).height();  //当前页面的高度
		var h1=h+h0/3;
		if(h1+h0/3>=$("div.news").offset().top){
			//鼠标滚动到咨询动态时时，图片翻转进来，文字透明度增加
			$("div.news .row").addClass("show")
			$("div.news .row img").addClass("show")
		}else if(h1>=$("div.see").offset().top){
			//鼠标滚动到视频时，视频自动播放
			document.querySelector("div.see>video").play();
		}else if(h1>=$("div.room").offset().top){
			//鼠标滚动到环境的时候，图片从左侧滑出
			$(".room>ul.row img").addClass("show")
		}else if(h1>=$("div.teacher").offset().top){
			//鼠标滚动到师资力量时，透明度由0到1，添加class in
			 $("div.teacher").children(".in").show();
		}else if(h1>=$("div.environment").offset().top){
			//鼠标滚动到环境时，背景色最后添加，图片和文字两边进入
			function setShow(i){
				setTimeout(function(){
                    $("div.environment>div:nth-child("+i+")").addClass("show")
				},(i-2)*500)
			}
			for(var i=2;i<=4;i++){
				setShow(i);
			}
			//回到顶部
            $(".backToTop").addClass("show")
				.click(function(){
					$(window).scrollTop(0)
				})
		}else if(h1>=$("div.gold-class").offset().top){
			//鼠标滚动到金牌课程时，图片都从中间散开来
            $("div.gold-class>ul.row").addClass("show")
		}else{
            $(".backToTop").removeClass("show")
		}
	})

})
