	function forwardHomePage(){
		var url = context + "/jsp/portal/hn/main.jsp";
		window.location.href = url;
	}
	
	function cqSystemLoad(){
		var menuTypeId='0000000008';
		var url= context + '/jsp/portal/index-sc.jsp';
		$.cookie("menuTypeId",menuTypeId,{expires:1,path:'/'});
		window.open(url);	
	}
	
	function qjSystemLoad(index){
		var menuTypeId = "";
		var url = "";
		if (index == 1){
			menuTypeId = "0000000003";
			url = context + '/jsp/portal/index-xzbg.jsp';
		} else if (index == 2){
			menuTypeId = "0000000016";
			url = context + '/jsp/portal/index-wljg.jsp';
		} else if (index == 3){
			menuTypeId = "0000000014";
			url = context + '/jsp/portal/index-sjzy.jsp';
			//url = 'http://dd.hnsajj.com/mcloud/command/ajcompanyInfo/';
		} else if (index == 4){
			menuTypeId = "0000000009";
			url = context + '/jsp/portal/index-sprz.jsp';
		} else if (index == 5){
			menuTypeId = "0000000017";
			url = webPath+'/jsp/portal/index-jczc.jsp';
		} else if (index == 6){
			menuTypeId = "0000000018";
			url = context + '/jsp/portal/index-pxks.jsp';
		} else if (index == 7){
			url = context + '/jsp/portal/viz/main.html';
		}
		$.cookie("menuTypeId",menuTypeId,{expires:1,path:'/'});
		window.open(url);	
	}

	function zhjgtj(){
		var menuTypeId='0000000008';
		/*var url=webPath+'jsp/portal/index-zhjg.jsp';*/
		var url= "http://222.143.24.76:8044/cas.jsp?userName=YWRtaW4=&parentId=bd5ca457-b9f1-419b-94f4-75b140cc21d7";
		$.cookie("menuTypeId",menuTypeId,{expires:1,path:'/'});
		window.open(url);	
	}
	
	function wxyjgtj(){
		var menuTypeId='0000000008';
		var url= context + '/jsp/portal/index-wxyjg.jsp';
		$.cookie("menuTypeId",menuTypeId,{expires:1,path:'/'});
		window.open(url);	
	}
	
	function articelPageForward(forwardurl){
		if(forwardurl!=undefined && forwardurl!=''){
			var url = context + '/jsp/portal/hn/main.jsp?forwardurl=' + encodeURIComponent(encodeURIComponent(forwardurl));
			window.open(url);
		}
	}