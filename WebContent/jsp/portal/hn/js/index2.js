var timeid;
$(document).ready(function(){
	$('#notices-tabs a').hover(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$("#hn-infos-tabs a").hover(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	
	//循环执行，每隔3秒切换tab 
	//timeid = window.setInterval(toggleHnInfosTabs, 3000);
    
    // 向上滚动
    $('.zbxx-list').liMarquee({
		direction: 'up',
		runshort: false
	});
	
	/*$(".hn-infos-tab-content").hover(
	function () {
		window.clearInterval(timeid);
	},
	function () {
		timeid = window.setInterval(toggleHnInfosTabs, 3000);
	});*/
    
});

function toggleHnInfosTabs() {
	var current = $("#hn-infos-tabs li.active");
	var restart = false;
	if(current.length > 0) {
		var next = current.next();
		if(next.length > 0) {
			next.find('a').tab('show');
		}else {
			restart = true;
		}
	}else{
		restart = true;
	}
	if(restart){
		$("#hn-infos-tabs li:first a").tab('show');
	}
}

function articelPageForward(forwardurl) {
	if(forwardurl!=undefined && forwardurl!=''){
		var url = context + '/jsp/portal/hn/main.jsp?forwardurl=' + encodeURIComponent(encodeURIComponent(forwardurl));
		window.open(url);
	}
}

function forwardHomePage(){
	var url = context + "/jsp/portal/hn/index2.jsp";
	window.location.href = url;
}


