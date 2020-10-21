// 公用方法


// 限流函数
export function throttle(fn, interval){
	var last = new Date().getTime();
	var timeout;
 
	return function later(){
		var context = this;
		var args = arguments;
		var now = new Date().getTime();
		var delta = now - last;
		if(delta < interval && delta >= 0){//间隔时间小于interval，需要被限流
			if(!timeout){//若无定时，说明上一次执行点已过
				timeout = setTimeout(()=>{
					fn.apply(context,args);
					last = now + interval;//记录上一次具体执行时间点
					timeout = null;
				},interval - delta);
			}
		}
	}
}

// 倒计时函数
export function countDown (endFun, startTime, step, interval) {
	const foo = function(t) {
		return clearInterval(t)
	}
	const t = setInterval(() => {
		if (startTime === 0) {
			foo(t)
		}else {
			startTime -= step
			endFun (startTime)
		}
	}, interval);
}

// 时间戳转换日期格式
export function formatDateTime(inputTime) { 
	var date = new Date(inputTime);
	var y = date.getFullYear(); 
	var m = date.getMonth() + 1; 
	m = m < 10 ? ('0' + m) : m; 
	var d = date.getDate(); 
	d = d < 10 ? ('0' + d) : d; 
	var h = date.getHours();
	h = h < 10 ? ('0' + h) : h;
	var minute = date.getMinutes();
	var second = date.getSeconds();
	minute = minute < 10 ? ('0' + minute) : minute; 
	second = second < 10 ? ('0' + second) : second; 
	return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second; 
 }