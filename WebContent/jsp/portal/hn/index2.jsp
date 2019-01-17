<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>安全生产大数据平台</title>
<link rel="stylesheet" href="./css/G3-all.css">
<link rel="stylesheet" href="./css/liMarquee.css">
<link rel="stylesheet" href="./css/main.css">
<script type="text/javascript" src="./js/G3-all.js"></script>
<script type="text/javascript" src="./js/jquery.liMarquee.js"></script>
<script type="text/javascript">
var context = '<%=request.getContextPath() %>';
</script>
<script type="text/javascript" src="./js/index2.js"></script>
</head>
<body>
	<div class="content-html">
		<div class="row">
			<!-- 快速链接区域 -->
			<div class="col-md-4 hn-links">
				<div class="row">
					<div class="col-md-6 links-block">
						<a href="">
							<img alt="" src="images/icon_3.png">
							<h6>综合业务平台</h6>
						</a>
					</div>
					<div class="col-md-6 links-block">
						<a href=""> 
							<img alt="" src="images/icon_4.png">
							<h6>协同办公系统</h6>
						</a>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 links-block">
						<a href="">
							<img alt="" src="images/icon_5.png">
							<h6>危险源监控平台</h6>
						</a>
					</div>
					<div class="col-md-6 links-block">
						<a href=""> 
							<img alt="" src="images/icon_6.png">
							<h6>应急救援平台</h6>
						</a>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 links-block">
						<a href=""> 
							<img alt="" src="images/icon_7.png">
							<h6>大数据应用平台</h6>
						</a>
					</div>
					<div class="col-md-6 links-block">
						<a href=""> 
							<img alt="" src="images/icon_8.png" class="moreimg">
							<h6>更多</h6>
						</a>
					</div>
				</div>
			</div>
			<!-- 通知公告区域 -->
			<div class="col-md-4 hn-notices">
				<ul class="nav nav-tabs notices-tabs" id="notices-tabs">
					<li class="active">
						<a href="#yaowen" data-toggle="tab">内部要闻</a>
					</li>
					<li>
						<a href="#gonggao" data-toggle="tab">内部公告</a>
					</li>
				</ul>
				<div class="tab-content notices-tab-content">
					<div class="tab-pane active" id="yaowen">
						<ul class="ulist">
							<li>
								<a href="">副省长刘伟率队开展全省圣诞平安夜消防安全暗访检查</a> 
								<span class="right_time">2018-12-27</span>
							</li>
							<li>
								<a href="">吴忠华调研河南矿山抢险救灾中心和省安全生产宣传教育考试中心工作</a> 
								<span class="right_time">2018-12-26</span>
							</li>
							<li>
								<a href="">省应急管理厅召开全省圣诞元旦消防安保工作视频调度会</a> 
								<span class="right_time">2018-12-24</span>
							</li>
							<li>
								<a href="">省应急管理厅党组书记张昕到郑州市 督导检查安全生产工作</a> 
								<span class="right_time">2018-12-21</span>
							</li>
							<li>
								<a href="">胡永生在军地应急管理工作座谈会上要求建立联动机制共享信息资源切实提升我省应急救援工作水平</a> 
								<span class="right_time">2018-12-20</span>
							</li>
							<li>
								<a href="">省应急管理厅党组传达学习 习近平总书记在中央政治局第十次集体学习时的重要讲话精神</a> 
								<span class="right_time">2018-12-20</span>
							</li>
						</ul>
					</div>
					<div class="tab-pane" id="gonggao">
						<ul class="ulist">
							<li>
								<a href="">关于2018年11月全省安全生产监督检查计划完成和应急管理综合业务平台执法系统应用情况的通报</a> 
								<span class="right_time">2018-12-24</span>
							</li>
							<li>
								<a href="">关于做好2018年度市县安全监管机构编制统计工作的通知</a> 
								<span class="right_time">2018-12-24</span>
							</li>
							<li>
								<a href="">关于对2018年河南省安全工程专业高级职称评审结果进行公示的公告</a> 
								<span class="right_time">2018-12-21</span>
							</li>
							<li>
								<a href="">关于全省应急管理机构电子政务办公系统试运行的通知</a> 
								<span class="right_time">2018-12-20</span>
							</li>
							<li>
								<a href="">关于报送开展打击假冒特种作业操作证专项治理行动工作总结的通知</a> 
								<span class="right_time">2018-12-20</span>
							</li>
							<li>
								<a href="">关于报送2018年安全生产工作总结暨 2019年安全生产工作思路的通知</a> 
								<span class="right_time">2018-12-19</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 图片新闻轮播 -->
			<div class="col-md-4 hn-photonews">
				<div id="tupianxinwen" class="carousel" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#tupianxinwen" data-slide-to="0"
							class="active"></li>
						<li data-target="#tupianxinwen" data-slide-to="1"></li>
						<li data-target="#tupianxinwen" data-slide-to="2"></li>
						<li data-target="#tupianxinwen" data-slide-to="3"></li>
						<li data-target="#tupianxinwen" data-slide-to="4"></li>
					</ol>
					<div class="carousel-inner">
						<div class="item active">
							<a href=""> 
								<img alt="" src="images/1.png">
							</a>
							<div class="carousel-caption">
								<a href="">省应急管理厅召开全省圣诞元旦消防安保工作视频调度会 </a>
							</div>
						</div>
						<div class="item">
							<a href=""> 
								<img alt="" src="images/2.png">
							</a>
							<div class="carousel-caption">
								<a href="">吴忠华带队暗访洛阳市安全生产和消防管理工作 </a>
							</div>
						</div>
						<div class="item">
							<a href=""> 
								<img alt="" src="images/3.png">
							</a>
							<div class="carousel-caption">
								<a href="">省应急管理厅党组书记张昕到郑州市 督导检查安全生产工作 </a>
							</div>
						</div>
						<div class="item">
							<a href=""> 
								<img alt="" src="images/4.png">
							</a>
							<div class="carousel-caption">
								<a href="">胡永生在军地应急管理工作座谈会上要求建立联动机制共享信息资源切实提升我省应急救援工作水平</a>
							</div>
						</div>
						<div class="item">
							<a href=""> 
								<img alt="" src="images/5.jpg">
							</a>
							<div class="carousel-caption">
								<a href="">副省长刘伟赴洛阳调研双重预防体系建设和消防安全工作 </a>
							</div>
						</div>
					</div>
					<a class="left carousel-control" href="#tupianxinwen" role="button" data-slide="prev">
 								<span class="fa fa-chevron-left" aria-hidden="true"></span>
 								<span class="sr-only">上一个</span>
							</a>
							<a class="right carousel-control" href="#tupianxinwen" role="button" data-slide="next">
 								<span class="fa fa-chevron-right" aria-hidden="true"></span>
 								<span class="sr-only">下一个</span>
							</a>
				</div>
			</div>
		</div>
		<div class="row">
			<!-- 平台信息展示 -->
			<div class="col-md-9 hn-infos">
				<div class="row">
					<ul class="nav nav-tabs hn-infos-tabs col-md-2" id="hn-infos-tabs">
						<li class="active tongyidaiban">
							<a href="#tongyidaiban" data-toggle="tab">统一待办</a>
						</li>
						<li class="wanganxinxi">
							<a href="#wanganxinxi" data-toggle="tab">网安信息</a>
						</li>
						<li class="fengxianyujing">
							<a href="#fengxianyujing" data-toggle="tab">风险预警</a>
						</li>
						<li class="shiguxinxi">
							<a href="#shiguxinxi" data-toggle="tab">事故信息</a>
						</li>
						<li class="zhifaxinxi">
							<a href="#zhifaxinxi" data-toggle="tab">执法信息</a>
						</li>
						<li class="yinhuanyujing">
							<a href="#yinhuanyujing" data-toggle="tab">隐患预警</a>
						</li>
						<li class="xiaofanganquan">
							<a href="#xiaofanganquan" data-toggle="tab">消防安全</a>
						</li>
						<li class="fangxunkanghan">
							<a href="#fangxunkanghan" data-toggle="tab">防汛抗旱</a>
						</li>
						<li class="kangzhenjiuzai">
							<a href="#kangzhenjiuzai" data-toggle="tab">抗震救灾</a>
						</li>
						<li class="qixiangyujing">
							<a href="#qixiangyujing" data-toggle="tab">气象预警</a>
						</li>
					</ul>
					<div class="tab-content hn-infos-tab-content col-md-10">
						<div class="tab-pane active" id="tongyidaiban">
							<div class="info-main">
								<div class="info-title">
									<h5>协同办公平台（5）</h5>
									<a href="" class="more-info">更多</a>
								</div>
								<div class="info-list">
									<table class="table hn-table">
										<tr>
											<th width="50%">单位名称</th>
											<th width="25%">申请日期</th>
											<th width="25%">剩余时间</th>
										</tr>
										<tr>
											<td><a href="">洛阳市苏源工贸有限公司</a></td>
											<td align="center">2018/9/20</td>
											<td align="center"><span class="label label-success">未超时</span></td>
										</tr>
										<tr>
											<td><a href="">洛阳傲德办公家具有限公司</a></td>
											<td align="center">2018/9/17</td>
											<td align="center"><span class="label label-success">未超时</span></td>
										</tr>
										<tr>
											<td><a href="">偃师市诸葛镇炎伟石料厂</a></td>
											<td align="center">2018/9/16</td>
											<td align="center"><span class="label label-success">已超时</span></td>
										</tr>
										<tr>
											<td><a href="">洛阳市兴隆有色铸造有限责任公司</a></td>
											<td align="center">2018/9/15</td>
											<td align="center"><span class="label label-success">未超时</span></td>
										</tr>
										<tr>
											<td><a href="">洛阳焱玉成套设备有限公司</a></td>
											<td align="center">2018/9/17</td>
											<td align="center"><span class="label label-danger">已超时</span></td>
										</tr>
									</table>
								</div>
							</div>
							<div class="info-main">
								<div class="info-title">
									<h5>综合业务平台（5）</h5>
									<a href="" class="more-info">更多</a>
								</div>
								<div class="info-list">
									<table class="table hn-table">
										<tr>
											<th width="50%">单位名称</th>
											<th width="25%">申请日期</th>
											<th width="25%">剩余时间</th>
										</tr>
										<tr>
											<td><a href="">洛阳市兆兴粉末涂料有限公司</a></td>
											<td align="center">2018/9/20</td>
											<td align="center"><span class="label label-success">未超时</span></td>
										</tr>
										<tr>
											<td><a href="">偃师市德隆办公家具有限公司</a></td>
											<td align="center">2018/9/17</td>
											<td align="center"><span class="label label-success">未超时</span></td>
										</tr>
										<tr>
											<td><a href="">洛阳市雷魁轴承密封件有限公司</a></td>
											<td align="center">2018/9/16</td>
											<td align="center"><span class="label label-success">已超时</span></td>
										</tr>
										<tr>
											<td><a href="">宜阳铸鑫混凝土有限公司</a></td>
											<td align="center">2018/9/15</td>
											<td align="center"><span class="label label-success">未超时</span></td>
										</tr>
										<tr>
											<td><a href="">洛阳尚杰办公家具有限公司</a></td>
											<td align="center">2018/9/17</td>
											<td align="center"><span class="label label-danger">已超时</span></td>
										</tr>
									</table>
								</div>
							</div>
						</div>
						<div class="tab-pane" id="wanganxinxi">
							网安信息
						</div>
						<div class="tab-pane" id="fengxianyujing">
							风险预警
						</div>
						<div class="tab-pane" id="shiguxinxi">
							事故信息
						</div>
						<div class="tab-pane" id="zhifaxinxi">
							执法信息
						</div>
						<div class="tab-pane" id="yinhuanyujing">
							隐患预警
						</div>
						<div class="tab-pane" id="xiaofanganquan">
							<!-- 消防安全 -->
							<iframe id="xiaofanganquanFrame" name="xiaofanganquanFrame" src="http://127.0.0.1:8080/testProject/jsp/portal/hnftl/lm_index.html" 
								frameborder="0" allowtransparency="true" height="100%" width="100%"></iframe>
						</div>
						<div class="tab-pane" id="fangxunkanghan">
							防汛抗旱
						</div>
						<div class="tab-pane" id="kangzhenjiuzai">
							抗震救灾
						</div>
						<div class="tab-pane" id="qixiangyujing">
							气象预警
						</div>
					</div>
				</div>
			</div>
			<!-- 值班区域 -->
			<div class="col-md-3 hn-dutys">
				<div class="yjzb-main">
					<div class="zb-title">应急值班</div>
					<div class="row">
						<dl class="dl-horizontal zb-dl-horizontal">
							<dt><p>今<p>日<p>值<p>班</dt>
							<dd>
								<ul class="zb-list">
									<li><span>值班领导：李萍</span><span>电话：15989898765</span></li>
									<li><span>值班主任：孙青</span><span>电话：18678789876</span></li>
									<li><span>值班人员：秦兵</span><span>电话：13245456543</span></li>
									<li><span>值班人员：王义军</span><span>电话：15676785434</span></li>
								</ul>
							</dd>
						</dl>
					</div>
					<div class="row">
						<dl class="dl-horizontal zb-dl-horizontal">
							<dt><p>明<p>日<p>值<p>班</dt>
							<dd>
								<ul class="zb-list">
									<li><span>值班领导：李萍</span><span>电话：15989898765</span></li>
									<li><span>值班主任：孙青</span><span>电话：18678789876</span></li>
									<li><span>值班人员：秦兵</span><span>电话：13245456543</span></li>
									<li><span>值班人员：王义军</span><span>电话：15676785434</span></li>
								</ul>
							</dd>
						</dl>
					</div>
				</div>
				<div class="zbxx-main">
					<div class="zb-title">值班信息</div>
					<div class="zbxx-list">
						<ul class="ulist">
							<li><a href="">信阳市羊山新区发生一起高处坠落事故</a> <span class="right_time">2018/12/21</span></li>
							<li><a href="">商丘市发生一起火灾事故</a> <span class="right_time">2018/12/17</span></li>
							<li><a href="">濮阳市台前县马楼镇黄那里中学宿舍楼建筑工地发生一起高处坠落事故</a> <span class="right_time">2018/12/17</span></li>
							<li><a href="">开封市龙亭区发生一起物体打击事故</a> <span class="right_time">2018/12/17</span></li>
							<li><a href="">洛阳市孟津县河南省能源化工集团永龙乙二醇厂发生一起中毒窒息事故</a> <span class="right_time">2018/12/10</span></li>
							<li><a href="">郑州市经济技术开发区发生一起坍塌事故</a> <span class="right_time">2018/12/10</span></li>
							<li><a href="">新乡市卫辉市河南汉荣饮品有限公司发生一起物体打击事故</a> <span class="right_time">2018/12/05</span></li>
							<li><a href="">开封市通许县发生一起高处坠落事故</a> <span class="right_time">2018/11/27</span></li>
							<li><a href="">较大生产安全事故查处挂牌督办通知书</a> <span class="right_time">2018/12/10</span></li>
							<li><a href="">郑州市金水区一小区发生一起热力管道爆裂事故</a> <span class="right_time">2018/11/30</span></li>
							<li><a href="">驻马店市正阳县夕阳红老年公寓发生一起火灾事故</a> <span class="right_time">2018/11/26</span></li>
							<li><a href="">巩义市发生一起机械伤害事故</a> <span class="right_time">2018/11/19</span></li>
							<li><a href="">滑县道口镇河西新桥液化气厂发生一起其他伤害事故</a> <span class="right_time">2018/11/19</span></li>
							<li><a href="">郑州市新郑市发生一起爆炸事故</a> <span class="right_time">2018/11/09</span></li>
							<li><a href="">兰考县河南鑫宏保温材料有限公司发生一起爆燃事故</a> <span class="right_time">2018/11/03</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>