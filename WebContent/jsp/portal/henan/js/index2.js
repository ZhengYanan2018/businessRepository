$(document).ready(function(){
	 $(".link_nav .link_box").hover(function (){  
           $(this).addClass("select_this");
		   $(this).parent().addClass("hover")
        },function (){  
           $(".hover").removeClass("hover");
		   $(".select_this").removeClass("select_this")
        });  
	setHeight();
	$(window).resize(function(){
	   setHeight();
	 });
});
function setHeight(){
	if(document.body.clientHeight<620){
		var setheight=document.body.clientHeight-230-220;
		$(".tab_box").height(setheight+"px")
		$(".news_list").height(setheight+40+"px")
	}else{
		$(".tab_box,.news_list").removeAttr("style")
	}
}

