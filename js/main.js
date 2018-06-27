;$(function(){
	'use strict';
	var sidebar = $('#sidebar');//选择侧栏
	var	mask = $('.mask');
	var	backButton = $('.back-to-top');//选择back-to-top按钮
	var	sidebar_trigger = $('#sidebar_trigger');//选择sidebar_trigger
		function showSideBar(){
//			console.log('clicked');用来测试点击事件
			mask.fadeIn();//在mask中加入一个display:block,使画面变暗
			sidebar.css('right',0);//使用css方法传right=0
		}//负责侧栏滑出
		function hideSideBar(){
			mask.fadeOut();//放弃对mask的改变，恢复原样
			sidebar.css('right',-sidebar.width())//sidebar有多宽，就收多少
		}//负责侧栏滑回去
		sidebar_trigger.on('click',showSideBar)//只要sidebar_trigger被点击了，就执行showSideBar函数
		mask.on('click',hideSideBar)//点击后，执行hideSideBar函数
		backButton.on('click',function(){
//			console.log('back back');测试button是否工作
			$('html,body').animate({//选中html与body,向animate中传入一个对象
				scrollTop: 0//滚动到0
			},800)//定义滚动时间800ms
		})
//		过河拆桥
		$(window).on('scroll',function(){//检测鼠标是否开始滚动
			if($(window).scrollTop() > $(window).height())//滚动时判断scrollTop是否大于window的高度
			backButton.fadeIn();//检测scrollTop高度是否大于Window的高度，如果大于就隐藏button
			else
			backButton.fadeOut();
		})
		$(window).trigger('scroll');//命令程序一开始触发scroll事件
})
//相当于自调用函数--作用是自动加载
/*javascript中没用私有作用域的概念，如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉，根据javascript函数作用域链的特性，可以使用这种技术可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，
所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突俗称“匿名包裹器”或“命名空间”。
JQuery使用的就是这种方法，将JQuery代码包裹在( function (window,undefined){…jquery代码…} (window)中，在全局作用域中调用JQuery代码时，可以达到保护JQuery内部变量的作用*/
