
window.onload = function(){
				var oUl = document.getElementById("list");
				var oLi = document.getElementsByTagName("li");
				var inp = document.getElementsByTagName("input");
				var text = document.getElementsByTagName("textarea");
				//按下留言按钮发送消息
				inp[1].onclick = addInfo;
				//删除留言
				inp[2].onclick = function(){
					for (var i = 4;i < oLi.length; i++) {
						if (!oLi[i].onOff) {
						//判断oLi的onOff是否为false,如果为真，则删除li的子节点
							oLi[i].remove();
							//动态的改变li的长度
							i--;
						} 
					}
				}
				function addInfo(){
					var li = document.createElement("li");//创建li节点
					//判断输入框内容是否为空
					if(inp[0].value){
						if(text[0].value){
							li.innerHTML = inp[0].value + "&nbsp" + "&nbsp" +text[0].value;
							li.onOff = true;
							alert(li.innerHTML);
							if(oUl.children[0]){
								oUl.insertBefore(li,oUl.children[0]);
							}else{
								oUl.appendChild(li);
							}
						}
					else{
						alert("请输入正文内容！");
					}
					}else{
						alert("请给文章起个标题");
					}
					//点击隔行变色
					for(var i = 0; i < oLi.length; i++){
						(function(j){
							//鼠标移入颜色
							oLi[j].onmouseover = function(){
								this.style.background = "#999";
								this.style.color = "#fff";
							}
							//鼠标移开颜色消失
							oLi[j].onmouseout = function(){
								this.style.background = "";
								this.style.color = "";
							}
							//设置点击颜色显示
							oLi[j].onclick = function(){
								if(j%2 == 0){
									this.style.background = "pink";
									oLi[j].onmouseout = function(){
										this.style.background = "#";
									}
								}else{
									this.style.background = "#3c9";
									oLi[j].onmouseout = function(){
										this.style.background = "#3c9";
									}
								}
								this.onOff =!this.onOff;
							}
						})(i);
					}
					//清空文本框信息
					inp[0].value = "";
					text[0].value = "";
				}
			}