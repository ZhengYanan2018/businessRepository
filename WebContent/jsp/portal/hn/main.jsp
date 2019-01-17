<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page import="java.net.URLDecoder"%>
<%
	String forwardurl = request.getParameter("forwardurl");
	if(forwardurl!=null){
		forwardurl = URLDecoder.decode(forwardurl, "utf-8");
	}else{
		forwardurl = "./index2.jsp";
	}
%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>安全生产大数据平台</title>
<link rel="stylesheet" href="./css/G3-all.css">
<link rel="stylesheet" href="./css/main.css">
<script type="text/javascript" src="./js/G3-all.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/skins/common/ext/portal/index_ext.js"></script>
<script type="text/javascript">
var context = '<%=request.getContextPath() %>';
</script>
<script type="text/javascript" src="./js/main.js"></script>
</head>
<body class="hn-home">
	<div class="hn-main">

		<!-- 头部 -->
		<div class="navbar hn-nav">
			<div class="container">
				<div class="navbar-header">
					<a href="" class="navbar-brand"> 
						<img alt="" src="images/logo.png" class="logoimg">
					</a> 
					<a href="" class="navbar-brand"> 
						<img alt="" src="images/title.png" class="titleimg">
					</a> 
					<a href="" class="navbar-brand"> 
						<img alt="" src="images/biaoyu.png" class="biaoyuimg">
					</a>
				</div>
				<ul class="nav navbar-nav navbar-right user-nav">
					<li class="dropdown user-dropdown">
						<a href="" class="dropdown-toggle" data-toggle="dropdown"><img src="images/user.png" />&nbsp;&nbsp;欢迎您，管理员 <span
							class="caret"></span></a>
              			<ul class="dropdown-menu user-dropdown-menu" role="menu" id="userDropdownMenu">
							<li>
								<a href="#" id="userInfo" onclick="forwardUserInfo();">
									<i class="fa fa-3 fa-blue fa-user"></i>&nbsp; 修改密码
								</a>
							</li>
							<li class="divider"></li>
							<li>
								<a href="#" id="securitySet" onclick="forwardSecuruty();">
								<i class="fa fa-2 fa-green fa-sign-out"></i>&nbsp; 锁屏离开</a>
							</li>
							<li class="divider"></li>
							<li>
								<a onclick="logout();">
									<i class="fa fa-2 fa-red fa-power-off"></i>&nbsp; 退出
								</a>
							</li>
						</ul>		
					</li>
				</ul>
			</div>
		</div>

		<!-- 菜单导航 -->
		<div class="navbar hn-menu-navbar">
			<div class="container">
				<div class="hn-menu">
					<ul class="nav navbar-nav menu-nav">
						<li class="active"><a href="javascript:forwardHomePage();">首页</a></li>
						<li><a href="javascript:cqSystemLoad();">应用支撑平台</a></li>
						<li><a href="javascript:qjSystemLoad(3);">数据资源中心</a></li>
						<li><a href="javascript:qjSystemLoad(7);">辅助决策分析</a></li>
						<li><a href="javascript:zhjgtj();">综合业务统计</a></li>
						<li><a href="javascript:wxyjgtj();">危险源监管统计</a></li>
					</ul>
				</div>
			</div>
		</div>

		<!-- 主要内容 -->
		<div class="hn-content">
			<div class="container" id="hn-content-html">
				<ul class="nav nav-tabs hn_change_navtabs">
					<li class="active">
						<a href="#yyzx_tabcontent" data-toggle="tab">
							<i class="yyzx"></i>
							<p>应用中心</p>
						</a>
					</li>
					<li>
						<a href="#sjzx_tabcontent" data-toggle="tab">
							<i class="sjzx"></i>
							<p>数据中心</p>
						</a>
					</li>
				</ul>
				<div class="tab-content hn_change_tab_content">
					<div class="tab-content hn_change_tab_content">
						<div class="tab-pane active" id="yyzx_tabcontent">
							<iframe id="mainFrame1" name="mainFrame1" src="<%=forwardurl %>" 
								frameborder="0" allowtransparency="true" height="100%" width="100%"></iframe>
						</div>
						<div class="tab-pane" id="sjzx_tabcontent">
							<iframe id="mainFrame2" name="mainFrame2" src="index3.jsp" 
								frameborder="0" allowtransparency="true" height="100%" width="100%"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 图片口号 -->
		<div class="hn-slogon">
			<div class="container">
				<div class="row hn-slogon-list">
					<div class="col-md-3">
						<a href=""> 
							<img alt="" src="images/link_1.png">
						</a>
					</div>
					<div class="col-md-3">
						<a href=""> 
							<img alt="" src="images/link_2.png">
						</a>
					</div>
					<div class="col-md-3">
						<a href=""> 
							<img alt="" src="images/link_3.png">
						</a>
					</div>
					<div class="col-md-3">
						<a href=""> 
							<img alt="" src="images/link_4.png">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- 底部 -->
	<div class="hn-footer">
		<div class="container">
			<div class="row">
				<div class="com-md-12 hn-copyright">
					<a href=""><img alt="" src="images/sq.png"></a> <a>主办单位：河南省应急管理厅</a> <a>承办单位：浪潮软件集团有限公司</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>