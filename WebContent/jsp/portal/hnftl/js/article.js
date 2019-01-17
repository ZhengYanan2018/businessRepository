function forwardListPage() {
	var columnId = $("#columnId").val();
	alert(columnId);
	var listUrl = $("#listUrl").val();
	alert(listUrl);
	// 获取
	var url = "/jsp/portal/hn/article.jsp?contenturl="+encodeURIComponent(encodeURIComponent(listUrl));
	window.open(url);
}