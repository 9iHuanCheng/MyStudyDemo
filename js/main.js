;$(function(){
	'use strict';
	var sidebar = $('#sidebar'),//选择侧栏
		mask = $('.mask'),
		backButton = $('.back-to-top'),
		sidebar_trigger = $('#sidebar_trigger');
		function showSideBar(){
//			console.log('clicked');用来测试点击事件
			mask.fadeIn();//在mask中加入一个display:block,使画面变暗
			sidebar.css('right',0);
		}
		function hideSideBar(){
			mask.fadeOut();
			sidebar.css('right',-sidebar.width())
		}
		sidebar_trigger.on('click',showSideBar)
		mask.on('click',hideSideBar)
		backButton.on('click',function(){
//			console.log('back back');测试button是否工作
			$('html,doby').animate({
				scrollTop: 0
			},800)
		})
		$(window).on('scroll',function(){
			if($(window).scrollTop() > $(window).height())
			backButton.fadeIn();//检测scrollTop高度是否等于Window，如果等于就隐藏button
			else
			backButton.fadeOut();
		})
		$(window).trigger('scroll');//命令程序一开始触发scroll事件
})
//相当于自调用函数--作用是自动加载
/*javascript中没用私有作用域的概念，如果在多人开发的项目上，你在全局或局部作用域中声明了一些变量，可能会被其他人不小心用同名的变量给覆盖掉，根据javascript函数作用域链的特性，可以使用这种技术可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量，
所以( function(){…} )()内部定义的变量不会和外部的变量发生冲突俗称“匿名包裹器”或“命名空间”。
JQuery使用的就是这种方法，将JQuery代码包裹在( function (window,undefined){…jquery代码…} (window)中，在全局作用域中调用JQuery代码时，可以达到保护JQuery内部变量的作用*/
