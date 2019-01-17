$(document).ready(function(){
	/*var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	});
	wow.init();*/
	chart1(elseData['河南省'][0],'河南省');
	chart2(elseData['河南省'][1],'河南省');
	chart4(elseData['河南省'][2],'河南省');
	chart5(elseData['河南省'][3],'河南省');
	$("#boxscroll").niceScroll({
		cursorborder:"",
		cursorcolor:"#d7d8d9",
		boxzoom:false,
		background: '#ecedee',
		autohidemode:false
	});
	//扩展$对象，添加方法animateCss
  $.fn.extend({
      animateCss: function (animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
              $(this).removeClass('animated ' + animationName);
          });
    	}
	});

	//使用示例：
	$('.totalList .item').mouseenter(function(){
		$(this).find('img').animateCss('bounce');
	});

});
function showModal(obj){
	var showplace=$(obj).parent().parent().attr("diqu");
	var showlb=$(obj).attr("sjtype");
	G3.showModalDialog("弹框标题",'search.jsp',{width:800,height:600},function(e,ret){
			
		});
}
function chart1(chartData,titleName){
	var myChart = echarts.init(document.getElementById('chart1'));
    var option = {
		title: {
			text: titleName+'安全态势预测',
			textStyle: {
				color: "#333",
				fontWeight: 'normal',
				fontSize: 14
			},
			top: 5,
			left: 10
		},
		tooltip: {
			trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
			axisPointer: {
				lineStyle: {
					color: '#333',
					fontSize: 14
				}
			}
		},
		grid: {
			backgroundColor: '#fff',
			top:40,
			left: 10, //grid 组件离容器左侧的距离。
			right: 20, //grid 组件离容器右侧的距离。
			bottom: 10, //grid 组件离容器下侧的距离。
			containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisLine: {
				lineStyle: {
					color: '#e9ebea' //坐标轴线线的颜色。
				}
			},
			axisLabel:{
				fontSize: 10,
				color: '#999999'
			},
			axisTick: {
				show: false
			},
			data: ['一月', '二月', '三月', '四月', '五月', '六月']
		}],
		yAxis: [{
			type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
			axisTick: {
				show: false //是否显示坐标轴刻度
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 10, //刻度标签与轴线之间的距离
				textStyle: {
					fontSize: 10 //文字的字体大小
				}
			},
			splitLine: {
				lineStyle: {
					color: '#e9ebea' //分隔线颜色设置
				}
			},
			splitNumber: 5
		}],
		series: [{
			name: '安全指数', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
			type: 'line',
			//smooth: true, //是否平滑曲线显示
			symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
			showSymbol: true, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
			lineStyle: { //线条样式
				normal: {
					width: 1 //线宽。[ default: 2 ] 
				}
			},
			areaStyle: { //区域填充样式
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
						offset: 0, // 0% 处的颜色
						color: 'rgba(14,198,139, 0.7)'
					}, {
						offset: 0.8, // 80% 处的颜色
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
					shadowBlur: 0 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
				}
			},
			itemStyle: { //折线拐点标志的样式
				normal: {
					color: 'rgb(14,198,139)',
					borderColor: 'rgba(255,255,255,1)', //图形的描边颜色。支持的格式同 color
					borderWidth: 2 //描边线宽。为 0 时无描边。[ default: 0 ] 

				}
			},
			data: chartData
		},]
	};
    myChart.setOption(option);
    window.addEventListener("resize",function() {
    	myChart.resize();
    })
    
}
function chart2(chartData,titleName){
	$("#chart2 .count span").each(function(index,item){
		$(this).text(chartData[index])
	});
	$(".titleName").text(titleName)
}
function chart4(chartData,titleName){
	var activeIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzNEOTkxNzBBMUY0MTFFODhDNzJGNURCQjExODU0OUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzNEOTkxNzFBMUY0MTFFODhDNzJGNURCQjExODU0OUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3M0Q5OTE2RUExRjQxMUU4OEM3MkY1REJCMTE4NTQ5RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3M0Q5OTE2RkExRjQxMUU4OEM3MkY1REJCMTE4NTQ5RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrCUctUAAAFfSURBVHjaYvz//z8DVlDv2Qok1YE4i6Fx+yt0aUYMjfWe/kCyFoiNoSJfgLgFiKcADfiKqrHe0wTIdgHicCA2wO4EhjdAvBiItwDxJcb/dR57gQwnJAV/gLgBiH2A2AKHIW+ZgIQRmiALEN8AOssSZDIOjcIgja+xSPhDaZA/bwHxXzT5z0w4TFwCJhu3g5y9AYizgXg9urPQQTxQwy4k/iEgPgYNmK+4NCYCNS1CEWncvhUpqkAGuoGYIKeyQYWfAxUtgCpQBOJoLK45D2OANH6Gsj8hKSgC+7PeEz06RKE0DxOSp9WBChWgbCEofRwopoKk0RfmOpDGbmikg8AqqL9AzvwJZd+BOn8jko0lsCTnBeTAAuEGEE8D4nZQkgTiMiCOQUpFa4GGhSASeb1nAZDsZ8APdgM1wUMVFuwToOnzDg5NXTBN2LMVxPZEIBkGxHzQBDAHqOkushKAAAMAq6dqd5j4inAAAAAASUVORK5CYII=';
	var normalIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjVBQkNBMUY0MTFFODlDRjNEQzYxMzgxMEE5ODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMjVBQkRBMUY0MTFFODlDRjNEQzYxMzgxMEE5ODQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2N0YyNUFCQUExRjQxMUU4OUNGM0RDNjEzODEwQTk4NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2N0YyNUFCQkExRjQxMUU4OUNGM0RDNjEzODEwQTk4NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plw2fxgAAAFfSURBVHjaYvz//z8DNnD27NlWIKUOxFnGxsav0OUZ0TUCNfgDqVogNoYKfQHiFiCeAjTgK4pGoGITINsFiMOB2IABO3gDxIuBeAsQX2I8c+bMXiDDCUnBHyBuAGIfILbAYchbJiBhhCbIAsQ3gM6yBJmMQ6MwSONrLBL+UBrkz1tA/BdN/jMTDhOXgHUZG4OcvQGIs4F4Pbqz0EE8UMMuJP4hID4GDZivuDQmAjUtQhYA8rciRRXIQDcQG+RUNqj4c6CiBVAFikAcjcU152EMkMbPUPYnJAVFIH8CNaNHhyiU5mFC8rQ6UKEClC0EpY8DxVSQNPrCXAfS2A2NdBBYBfUXyJk/oew7UOdvRLKxBJbkvIAcWCDcAOJpQNwOSpJAXAbEMUipaC3QsBB4IgdqLgBS/Qz4wW6gJniowoJ9AjR93sGhqQumCWu2gtqeCKTCgJgPmgDmADXdRVYDEGAA7F122Hst5MEAAAAASUVORK5CYII=';
	var myChart = echarts.init(document.getElementById('chart4'));
    var option = {
		title: {
			text: titleName+'重大危险源TOP5',
			textStyle: {
				color: "#333",
				fontWeight: 'normal',
				fontSize: 14
			},
			top: 5,
			left: 10
		},
		tooltip: {
			trigger: 'axis', //触发类型。[ default: 'item' ]:数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
			axisPointer: {
				lineStyle: {
					color: '#333',
					fontSize: 14
				}
			}
		},
		grid: {
			backgroundColor: '#fff',
			top:40,
			left: 10, //grid 组件离容器左侧的距离。
			right: 10, //grid 组件离容器右侧的距离。
			bottom: 10, //grid 组件离容器下侧的距离。
			containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		},
		xAxis: [{
			type: 'value',
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisLine: {
				show: false
			},
			axisLabel:{
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			},
		}],
		yAxis: [{
			type: 'category', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
			axisTick: {
				show: false //是否显示坐标轴刻度
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 10, //刻度标签与轴线之间的距离
				textStyle: {
					fontSize: 10 //文字的字体大小
				}
			},
			splitLine: {
				show: false
			},
			data: chartData[0]
		}],
		series: [{
			name: '安全指数', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
			type: 'pictorialBar',
			barGap: '-100%',
			symbolRepeat: true,
			symbolSize: 15,
			label:{
				show:false,
				
			},
			 itemStyle: {
		            normal: { 
						show:"false"
					},
					emphasis: { 
						show:"false"
					}
			 },
			data: [200, 200, 200, 200, 200],
			symbol: 'image://' + normalIcon
		},{
			name: '安全指数', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
			type: 'pictorialBar',
			symbolRepeat: true,
			symbolSize: 15,
			barCategoryGap: '40%',
			data:  chartData[1],
			symbol: 'image://' + activeIcon,
			label:{
				show: false,
				position: 'right'
			}
		}]
	};
    myChart.setOption(option);
    window.addEventListener("resize",function() {
    	myChart.resize();
    })
}
function chart5(chartData,titleName){
	var myChart = echarts.init(document.getElementById('chart5'));
    var option = {
    	title: {
			text: titleName+'安全态势预测',
			textStyle: {
				color: "#333",
				fontWeight: 'normal',
				fontSize: 14
			},
			top: 5,
			left: 10
		},
	    grid: {
			backgroundColor: '#fff',
			top:40,
			left: 10, //grid 组件离容器左侧的距离。
			right: 20, //grid 组件离容器右侧的距离。
			bottom: 10, //grid 组件离容器下侧的距离。
			containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		},
	    xAxis: [{
			type: 'category',
			
			axisLine: {
				lineStyle: {
					color: '#e9ebea' //坐标轴线线的颜色。
				}
			},
			axisLabel:{
				fontSize: 10,
				interval:0,
				color: '#999999'
			},
			axisTick: {
				show: false
			},
			data: chartData[0]
		}],
	    yAxis: [{
			type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
			axisTick: {
				show: false //是否显示坐标轴刻度
			},
			axisLine: {
				lineStyle: {
					color: '#e9ebea' //坐标轴线线的颜色。
				}
			},
			axisLabel:{
				fontSize: 10,
				color: '#999999'
			},
			splitLine: {
				show: false
			},
			splitNumber: 5
		}],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '30%',
	            data:chartData[1],
	            itemStyle: {
		            normal: {             
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(126, 213,252, 1)'
		                }, {
		                    offset: 1,
		                    color: 'rgba(126, 213,252, 0.1)'
		                }]),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		            }
		        }
	        },
	        
	    ],
	    label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
	};
	myChart.setOption(option);
    window.addEventListener("resize",function() {
    	myChart.resize();
    })
}
