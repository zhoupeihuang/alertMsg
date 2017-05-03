(function($) {
	//如无JQ币 可加QQ 发红包索要【3元即可】
	//QQ 625506370
	$.fn.extend({
		"alertMsg": function(options) {
			var opts = $.extend({}, defaluts, options); //如空 则使用默认
				var alertBox = document.createElement("div"),
				alertBoxspan = document.createElement("span")
				alertBox.appendChild(alertBoxspan);
				alertBoxspan.innerHTML = opts.texts;
				//设置它的CSS
				alertBox.style.cssText += 'position: fixed;margin: auto;left: 0;border-radius: 6px;text-align: center;font-size: 14px;right: 0;top: 0;bottom: 0;display: table;padding:0 10px;';
				alertBoxspan.style.cssText += 'vertical-align: middle;display: table-cell;'
				alertBox.className = "alertBox";
				$("body").append(alertBox)
				$(".alertBox").css({
					'color': opts.fcolor,
					'background-color': opts.bgcolor,
					'font-size':opts.fsize,
					'height': opts.heights,
					'width': opts.widths,
					'filter': 'alpha(opacity=' + opts.opacity + ')',
					'-moz-opacity': "0." + opts.opacity,
					'opacity': "0." + opts.opacity
				})
				setTimeout(function() {
					$(".alertBox").fadeOut("slow", function() {
						$(this).remove();
					});
				}, opts.times)
			return this
		}
	});
	//默认参数
	var defaluts = {
		texts: '输入您要提示的内容',
		fcolor: 'white',
		bgcolor: 'black',
		fsize:'14px',
		heights: "100px",
		widths: "200px",
		opacity: '80',
		times: '300'
	};

})(window.jQuery)