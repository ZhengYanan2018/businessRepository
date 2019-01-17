var wpData=[
	[20,80],
	[20,80],
	[21,79]
]
$(document).ready(function(){
	chart1();
	wpChart()

});


function chart1(chartData,titleName){
	var myChart = echarts.init(document.getElementById('chart1'));
    var option = {
		tooltip: {
		},	
		series: [{
			name: '使用情况',
			type: 'pie',
			radius: ['50%', '70%'],
			center:['50%','50%'],
			color:'#FF4500',
			label: {
				normal: {
					position: 'center'
				}
			},
			data: [{
				value: 32,
				name: '吊销注销数',				
				label: {
					normal: {
						formatter: '{d} %',
						textStyle: {
							fontSize: 14
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#87cefa'
					},
					emphasis: {
						color: '#87cefa'
					}
				},
				tooltip:{
					 trigger: 'item',
					 formatter: "已使用: 61G"
				}
			}, {
				value: 72,
				name: '未使用',
				label: {
					normal: {
						formatter: '\n使用率',
						textStyle: {
							color: '#555',
							fontSize: 13
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
			}]
		}]
	};
    myChart.setOption(option);
    window.addEventListener("resize",function() {
    	myChart.resize();
    })
    
}

function wpChart(){
	$.each(wpData,function(i,n){
		var num=2+i;
		chart3(n,"chart"+num)
	});
}
function chart3(chartData,ID){
	var use_data=(chartData[0]/(chartData[0]+chartData[1]).toFixed(2))*100;
	var empty_data=(chartData[1]/(chartData[0]+chartData[1]).toFixed(2))*100
	var myChart = echarts.init(document.getElementById(ID));
	$("#"+ID).prev().children(".num").text(empty_data+"%")
	var option = {
		grid: {
			top:0,
			left: 0,
			right:0,
			bottom: 0,
		},
		tooltip: {
			show:"true",
			trigger: 'axis',
		},
		xAxis:  {
			type: 'value',
			show:false,
			axisTick : {show: false},
			axisLine: {
				show: false,
				lineStyle:{
					color:'#fff',
				}
			},
			splitLine: {
				show: false
			},
		},
		yAxis: [
				{
					type: 'category',
					axisTick : {show: false},
					show:false,
					axisLine: {
						show: true,
						lineStyle:{
							color:'#fff',
						}
					},
					data: ['网盘']
				},
				{
					type: 'category',
					show:false,
					axisLine: {show:false},
					axisTick: {show:false},
					axisLabel: {show:false},
					splitArea: {show:false},
					splitLine: {show:false},
					data: ['网盘']
				},
				
		],
		series: [
			{
				name: '已使用',
				type: 'bar',
				stack: '总量',				
				itemStyle:{
					normal: {
						show: true,
						color: '#277ace',
						barBorderRadius:0,
					}
				},
				label:{
					normal:{
						show:true,
						formatter: '{c}GB',
					}
					
				},
				data: [use_data]
			},
			{
				name: '未使用',
				type: 'bar',
				stack: '总量',
				itemStyle:{
					normal: {
						show: true,
						color: '#f2f2f2',
						barBorderRadius:0,
					}
				},
				label:{
					normal:{
						show:true,
						formatter: '{c}GB',
						color:'#333'
					}
					
				},
				data: [empty_data]
			}
		   
		]
	};
    myChart.setOption(option);
    window.addEventListener("resize",function() {
    	myChart.resize();
    })
    
}

function chartmb(chartData,titleName){
	var myChart = echarts.init(document.getElementById('chart1'));
   
    myChart.setOption(option);
    window.addEventListener("resize",function() {
    	myChart.resize();
    })
    
}
