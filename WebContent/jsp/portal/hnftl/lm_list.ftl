<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>安全生产大数据平台</title>
<link rel="stylesheet" href="${data.resourceUrl}css/G3-all.css">
<script type="text/javascript" src="${data.resourceUrl}js/G3-all.js"></script>
<style type="text/css">
.content-html {
	background: #fff;
	padding: 10px 20px;
}

/* 文章列表样式 */
.ulist {
	list-style: none;
	position: relative;
	margin: 0;
}

.ulist > li {
	height: 35px;
	line-height: 35px;
}

.ulist > li:before {
    float: left;
    content: "";
    background: #80BBE6;
    width: 4px;
    height: 4px;
    overflow: hidden;
    display: inline-block;
    margin: 15px 11px 0 0;
    border-radius: 2px;
}

.ulist > li > a	{
	display: block;
	width: 75%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #3C3C3C;
}

.ulist > li > .right_time {
	display: inline-block;
	overflow: hidden;
	text-align: right;
	color: #cccccc;
	width: 150px;
	float: right;
	margin-top: -35px;
	padding-right: 2px;
}
.article_nav {
	
}

.article_main {
	min-height: 500px;
}

.article_pager {
	
}
</style>
<script type="text/javascript">
function forwardPage(url){
	var currenturl = window.location.href;
	var newurl = currenturl.substring(0, currenturl.lastIndexOf('/')) + '/' + url;
	window.parent.articelPageForward(newurl);
}
function forwardHomePage(){
	window.parent.forwardHomePage();
}
</script>
</head>
<body>
	<div class="content-html">
		<div class="row article_nav">
			<ol class="breadcrumb">
				<li><a href="javascript:forwardHomePage();">首页</a></li>
				<li><a href="javascript:forwardHomePage();">应用中心</a></li>
				<li class="active">${data.columnName }</li>
			</ol>
		</div>
		<div class="row article_main">
			<ul class="ulist">
				<#list data.articlePageData.dataList as article>
					<li>
						<a href="javascript:forwardPage('${article.url}');">${article.title}</a><span class="right_time">${article.datetime}</span>
					</li>
				</#list>
			</ul>
		</div>
		<div class="row article_pager">
			<nav>
				<ul class="pager">
					<li><a href="${data.articlePageData.firstUrl}">首页</a></li>
					<li><a href="${data.articlePageData.preUrl}">上一页</a></li>
					<li><a href="${data.articlePageData.nextUrl}">下一页</a></li>
					<li><a href="${data.articlePageData.lastUrl}">末页</a></li>
					<li>共${data.articlePageData.totalPage}页，当前第${data.articlePageData.currentPage }页</li>
				</ul>
			</nav>
		</div>
	</div>
</body>
</html>