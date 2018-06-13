window.onload = function () {
	//获得容器对象
	var box = document.getElementById('began');

	//获得ullist对象集合
	var uls = box.getElementsByClassName('community');
	
	//获得单个community的宽度
	var ulWidth = uls[0].offsetWidth;//返回元素宽度，包括边框与填充
	
	//设置掩藏门体露出的宽度
	var exposeWidth = 160;
	
	//设置容器总宽度
	var boxWidth = ulWidth + (uls.length - 1) * exposeWidth;
	box.style.width = boxWidth + 'px';
	
	//设置每道门的初始位置
	function setUlsPos(){
		for (var i = 1,len = uls.length; i < len; i++) {
			uls[i].style.left = ulWidth + exposeWidth * (i - 1) + 'px';//设置图片相对于容器的绝对定位
		}
	}
	setUlsPos();
	
	//计算每道门打开时应移动的距离
	var translate = ulWidth - exposeWidth;
	
	//为每道门绑定事件
	for(var i = 0,len = uls.length; i < len; i++){
		//使用立即调用的函数表达式，为了获取不同的i值
		(function(i){
			uls[i].onmouseover = function(){
				//先将每道门复位
				setUlsPos();
				//实现开门滑动效果
				for (var j = 1; j <= i; j++) {
					uls[j].style.left = parseInt(uls[j].style.left,10)-translate + 'px';
				}
			}
		})(i);
	}
}
