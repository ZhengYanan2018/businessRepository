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
body{
	height: auto;
}
.info-main {
	
}
.info-main .info-title > h5 {
	display: block;
	font-size: 16px;
	margin: 5px 0 10px;
}
.info-main .info-title > h5:before{
	content: "";
	display: inline-block;
    width: 0;
    height: 0;
    margin-right: 5px;
    vertical-align: middle;
    border-left: 4px solid #0C79D1;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
}

.more-info {
	float: right;
	width: 30px;
	margin-top: -28px;
	color: #cccccc;
}

.hn-table > thead > tr > th, 
.hn-table > tbody > tr > th, 
.hn-table > tfoot > tr > th, 
.hn-table > thead > tr > td, 
.hn-table > tbody > tr > td, 
.hn-table > tfoot > tr > td {
    padding: 6px 8px;
    line-height: 1.428571429;
    vertical-align: top;
    border: 1px solid #F5F5F5;
    white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.hn-table > thead > tr > th, 
.hn-table > tbody > tr > th, 
.hn-table > tfoot > tr > th {
	background: #F7F7F7;
	text-align: center;
}

.hn-table .label {
	border-radius: 1em;
}
</style>
<script type="text/javascript">
function forwardPage(url){
	var currenturl = window.location.href;
	var newurl = currenturl.substring(0, currenturl.lastIndexOf('/')) + '/' + url;
	window.parent.articelPageForward(newurl);
}
</script>
</head>
<body>
	<!-- 消防安全 -->
	<div class="info-main">
		<input type="hidden" id="columnId" value="${data.id}">
		<div class="info-title">
			<h5>${data.columnName}（${data.articlePageData.totalCount }）</h5>
			<a href="javascript:forwardPage('${data.listUrl}');" class="more-info">更多</a>
		</div>
		<div class="info-list">
			<table class="table hn-table">
				<tr>
					<th width="75%">标题</th>
					<th width="25%">发布日期</th>
				</tr>
				<#list data.articlePageData.dataList as article>
					<tr>
						<td><a href="javascript:forwardPage('${article.url}');">${article.title}</a></td>
						<td align="center">${article.datetime?string('yyyy-MM-dd')}</td>
					</tr>
				</#list>
			</table>
		</div>
	</div>
</body>
</html>