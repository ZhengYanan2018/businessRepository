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
.article_nav {
	
}

.article_main {
	min-height: 500px;
}

.article_detail {
    padding: 20px 30px;
    margin-bottom: 10px;
}
.biaoti {
	margin: 20px 0;
}
.shijian {
	text-align: center;
}
.zhengwen {
	min-height: 300px;
}
.fujian {
	margin: 10px 0;
}
</style>
<script type="text/javascript">
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
				<li class="active">${data.columnData.columnName }</li>
			</ol>
		</div>
		<div class="row article_main">
			<div class="article_detail">
				<h3 class="text-center biaoti">${data.title}</h3>
				<div class="shijian">
					<ul class="list-inline">
						<li>发布者：${data.editor}</li>
						<li>发布时间：${data.datetime}</li>
					</ul>
				</div>
				<hr/>
				<div class="zhengwen">
					${data.content}
				</div>
			</div>
		</div>
	</div>
</body>
</html>