---
**-----夜空的北斗也没有让她找到迷途的方向-----**
#**alertMsg 插件使用方法**

**功能介绍**

----
主要用于手机端 弹出提示 
	css内置
	自动关闭 
	定制样式
	定制内容

**代码使用**

----

    $(".aa").click(function() {
		$(this).alertMsg({
			texts: '迷雾迷雾在迷雾，我惊觉自己在原地踏步',//弹出的提示文字
	        fcolor: 'white',//字体颜色
	        bgcolor:'black',//背景颜色
	        fsize:'16px',//字体大小
	        heights:"60px",//高度
	        widths:"200px",//宽度
	        opacity:'80',//透明度
	        times:'1000'//自动关闭时长
		})	
		})

**页面截图**

