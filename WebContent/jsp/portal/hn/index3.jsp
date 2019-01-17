<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>安全生产大数据平台</title>
	<link rel="stylesheet" href="./css/main.css">
	<link rel="stylesheet" href="./css/index3.css">
	<link rel="stylesheet" href="./css/new1.css">
	<script type="text/javascript" src="./js/G3-all.js"></script>
</head>
<body>
	<div class="content_main">
		<div class="mind_box floatLeft">
			<div class="totalList">
				<div class="item floatLeft wow bounceInLeft" data-wow-delay=".01s">
					<img src="./images/lwqy.png" alt="">
					<p><span>630</span>家</p>
					<p>联网企业</p>
				</div>
				<div class="item floatLeft wow bounceInLeft" data-wow-delay=".02s">
					<img src="./images/yhpczs.png" alt="">
					<p><span>578</span>家</p>
					<p>隐患排查总数</p>
				</div>
				<div class="item floatLeft wow bounceInLeft" data-wow-delay=".03s">
					<img src="./images/wxy.png" alt="">
					<p><span>630</span>家</p>
					<p>重大危险源</p>
				</div>
				<div class="item floatLeft wow bounceInLeft" data-wow-delay=".04s">
					<img src="./images/ydzf.png" alt="">
					<p><span>794</span>家</p>
					<p>移动执法总数</p>
				</div>
				<div class="item floatLeft wow bounceInLeft" data-wow-delay=".05s">
					<img src="./images/tsjb.png" alt="">
					<p><span>880</span>家</p>
					<p>投诉举报总数</p>
				</div>
			</div>
			<div class="charts">
				<div class="floatCharts">
					<div class="chart wow slideInLeft" id="chart5" data-wow-delay=".06s"></div>
					<div class="chart wow slideInLeft" id="chart2" data-wow-delay=".06s">
						<p class="chartTitle"><span class="titleName"></span>危险源设备监测统计</p>
						<div class="count count1">
							<p>已接入企业数</p>
							<p><span class="red"></span>家</p>
						</div>
						<div class="count">
							<p>探头接入数</p>
							<p><span class="blue"></span>台</p>
						</div>
						<div class="count">
							<p>未接入企业数</p>
							<p><span class="green"></span>家</p>
						</div>
						<div class="count count4">
							<p>视频接入数</p>
							<p><span class="orange"></span>台</p>
						</div>
					</div>
				</div>
				<div class="map wow flipInX" id="map" data-wow-delay=".07s"></div>
				<div class="floatCharts">
					<div class="chart wow slideInRight" id="chart4" data-wow-delay=".06s"></div>
					<div class="chart wow slideInRight" id="chart1" data-wow-delay=".06s"></div>
				</div>
			</div>
		</div>
	</div>
	<script src="./js/echarts.min.js"></script>
	<script src="./js/tags.js"></script>
	<script src="./js/map.js"></script>
	<script src="./js/jquery.nicescroll.min.js"></script>
	<script src="./js/index3.js"></script>
	
</body>
</html>