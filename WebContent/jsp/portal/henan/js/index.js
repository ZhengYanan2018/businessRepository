var allData,provinces;var timeFn = null;
var geoCoordMap1 = {
	'危险1':[111.077399,34.273651],
	'危险2':[112.894132,35.21032],
	'危险3':[114.830448,35.013784],
	'危险4':[116.102,34.455613],
	'危险5':[113.942778,33.532326],
	'危险6':[112.940125,33.686268],
	'危险7':[113.032112,33.374247],
	'危险8':[113.041311,32.5632],
	'危险9':[111.247574,34.3],
	'危险10':[113.501243,35.149899],
	'危险11':[112.590577,35.059181],
}
var data1 = [
	{name: '危险1', value: 199},
	{name: '危险2', value: 39},
	{name: '危险3', value: 152},
	{name: '危险4', value: 299},
	{name: '危险5', value: 89},
	{name: '危险6', value: 52},
	{name: '危险7', value: 9},
	{name: '危险8', value: 352},
	{name: '危险9', value: 99},
	{name: '危险10', value: 39},
	{name: '危险11', value: 280},
];
var geoCoordMap2 = {
	'工贸1':[111.762698,35.066745],
	'工贸2':[111.785695,34.329787],
	'工贸3':[113.772603,33.555435],
	'工贸4':[115.037417,33.543881],
	'工贸5':[116.739167,34.303072],
	'工贸6':[115.708919,34.668698],
	'工贸7':[113.699014,34.759852],
	'工贸8':[113.349465,35.059181],
	'工贸9':[113.662219,35.770815],
	'工贸10':[113.878388,35.931833]
}
var data2= [
	{name: '工贸1', value: 199},
	{name: '工贸2', value: 39},
	{name: '工贸3', value: 152},
	{name: '工贸4', value: 299},
	{name: '工贸5', value: 89},
	{name: '工贸6', value: 52},
	{name: '工贸7', value: 9},
	{name: '工贸8', value: 352},
	{name: '工贸9', value: 99},
	{name: '工贸10', value: 39}
];
var geoCoordMap3 = {
	'非煤矿山1':[114.020967,33.041724],
	'非煤矿山2':[115.005222,33.489943],
	'非煤矿山3':[114.40731,34.165546],
	'非煤矿山4':[114.370515,34.84332],
	'非煤矿山5':[113.92898,35.168785],
	'非煤矿山6':[112.871136,35.304638],
	'非煤矿山7':[111.666113,34.820564],
	'非煤矿山8':[112.144442,34.295438],
	'非煤矿山9':[112.668765,34.562224],
	'非煤矿山10':[112.641169,34.188482],
}
var data3 = [
	{name: '非煤矿山1', value: 199},
	{name: '非煤矿山2', value: 39},
	{name: '非煤矿山3', value: 152},
	{name: '非煤矿山4', value: 299},
	{name: '非煤矿山5', value: 89},
	{name: '非煤矿山6', value: 52},
	{name: '非煤矿山7', value: 9},
	{name: '非煤矿山8', value: 352},
	{name: '非煤矿山9', value: 99},
	{name: '非煤矿山10', value: 39},
];
var geoCoordMap4 = {
	'烟花爆竹1':[111.077399,34.273651],
	'烟花爆竹2':[112.894132,35.21032],
	'烟花爆竹3':[114.830448,35.013784],
	'烟花爆竹4':[116.102,34.455613],
	'烟花爆竹5':[113.942778,33.532326],
	'烟花爆竹6':[112.940125,33.686268],
	'烟花爆竹7':[113.032112,33.374247],
	'烟花爆竹8':[113.041311,32.5632],
	'烟花爆竹9':[111.247574,34.3],
	'烟花爆竹10':[113.501243,35.149899],
}
var data4 = [
	{name: '烟花爆竹1', value: 199},
	{name: '烟花爆竹2', value: 39},
	{name: '烟花爆竹3', value: 152},
	{name: '烟花爆竹4', value: 299},
	{name: '烟花爆竹5', value: 89},
	{name: '烟花爆竹6', value: 52},
	{name: '烟花爆竹7', value: 9},
	{name: '烟花爆竹8', value: 352},
	{name: '烟花爆竹9', value: 99},
	{name: '烟花爆竹10', value: 39},
];
var geoCoordMap5 = {
	'新增点1':[113.747307,35.139037],
	'新增点2':[115.08801,34.672973],
	'新增点3':[113.889886,33.602115]
}
var data5 = [
	{name: '新增点1', value: 200},
	{name: '新增点2', value: 200},
	{name: '新增点3', value: 200}
];
var showName;
var convertData = function (data,geoCoordMap) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};
$(document).ready(function(){
	 provinces = {
    '开封市': 'http://10.12.1.80/portal/jsp/hnmap/json/kaifeng.json',
    '郑州市': 'http://10.12.1.80/portal/jsp/hnmap/json/zhengzhou.json',
    '平顶山市': 'http://10.12.1.80/portal/jsp/hnmap/json/pingdingshan.json',
    '驻马店市': 'http://10.12.1.80/portal/jsp/hnmap/json/zhumadian.json',
    '信阳市': 'http://10.12.1.80/portal/jsp/hnmap/json/xinyang.json',
    '南阳市': 'http://10.12.1.80/portal/jsp/hnmap/json/nanyang.json',
    '济源市': 'http://10.12.1.80/portal/jsp/hnmap/json/jiyuan.json',
    '周口市': 'http://10.12.1.80/portal/jsp/hnmap/json/zhoukou.json',
    '三门峡市': 'http://10.12.1.80/portal/jsp/hnmap/json/sanmenxia.json',
    '商丘市': 'http://10.12.1.80/portal/jsp/hnmap/json/shangqiu.json',
    '漯河市': 'http://10.12.1.80/portal/jsp/hnmap/json/luohe.json',
    '许昌市': 'http://10.12.1.80/portal/jsp/hnmap/json/xuchang.json',
    '濮阳市': 'http://10.12.1.80/portal/jsp/hnmap/json/puyang.json',
    '安阳市': 'http://10.12.1.80/portal/jsp/hnmap/json/anyang.json',
    '新乡市': 'http://10.12.1.80/portal/jsp/hnmap/json/xinxiang.json',
    '焦作市': 'http://10.12.1.80/portal/jsp/hnmap/json/jiaozuo.json',
    '鹤壁市': 'http://10.12.1.80/portal/jsp/hnmap/json/hebi.json',
    '洛阳市': 'http://10.12.1.80/portal/jsp/hnmap/json/luoyang.json'
};
	
	//各地市的数据
	allData = [{
		name: '开封市'
	}, {
		name: '郑州市'
	}, {
		name: '平顶山市'
	}, {
		name: '洛阳市'
	}, {
		name: '鹤壁市'
	}, {
		name: '焦作市'
	}, {
		name: '新乡市'
	}, {
		name: '安阳市'
	}, {
		name: '濮阳市'
	}, {
		name: '许昌市'
	}, {
		name: '漯河市'
	}, {
		name: '商丘市'
	}, {
		name: '三门峡市'
	}, {
		name: '周口市'
	}, {
		name: '济源市'
	}, {
		name: '南阳市'
	}, {
		name: '信阳市'
	}, {
		name: '驻马店市'
	}];
	for (var i = 0; i < allData.length; i++) {
		allData[i].value = Math.round(Math.random() * 100);
	}
		loadMap('http://10.12.1.80/portal/jsp/hnmap/json/henan.json', 'henan');//初始化河南地图
	})
	function loadMap(mapCode, name) {
		var myChart = echarts.init(document.getElementById('map'));


		//单击切换到市级地图，当mapCode有值,说明可以切换到下级地图
		myChart.on('click', function(params) {
			clearTimeout(timeFn);
			//由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
			timeFn = setTimeout(function() {
				var name = params.name; //地区name
				var mapCode = provinces[name]; //地区的json数据
				if (!mapCode) {
					alert('无此区域地图显示');
					return;
				}
				loadMap(mapCode, name);
				
			}, 250);
		});


	// 绑定双击事件，返回河南地图
	myChart.on('dblclick', function(params) {
		//当双击事件发生时，清除单击事件，仅响应双击事件
		clearTimeout(timeFn);
		
		//返回河南地图
		loadMap('http://10.12.1.80/portal/jsp/hnmap/json/henan.json', 'henan');
	});
	//var dianData=convertData(data123);
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                tooltip: {
                    show: true,
					enterable:true,
					transitionDuration:1,
                    formatter: function(params) {
						if(params.seriesType=="map"){
							 var tipHtml = '';
							 tipHtml='<div class="subChart"><div class="name">'+params.name+'</div><div id="line"></div><ul class="list"><li>互联网企业：<font class="hlwqy"></font></li><li>重大危险源：<font class="zdwxy"></font></li><li>重大安全事故：0</li><li>预警/响应：<font class="yjxy"></font></li></ul><div class="pieChart" id="pie"></div></div>'
							  setTimeout(function() {
									tooltipCharts(params.name);
							  }, 1);
							 return tipHtml;
						}
                    },
                },
				legend: {
					textStyle: {
						color: '#333'
					},
					orient: 'horizontal',
					top: '5%',
					data: ['危险', '工贸', '非煤矿山', '烟花爆竹']
				},
                visualMap: {
                    type: 'continuous',
                    text: ['', ''],
                    showLabel: true,
                    left: '50',
                    min: 0,
                    max: 100,
                    inRange: {
                        color: ['#bcfdfd', '#93c8fa', '#40a9ed', '#3598c1', '#215096', ]
                    },
					seriesIndex:[0]
                },
				geo:{
					map: name,
					label: {
						show:false,
						normal: {
                            show: false
                        },
						emphasis: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							areaColor: '#323c48',
							borderColor: '#111'
						},
						emphasis: {
							areaColor: '#fff'
						}
					}
				},
                series: [{
                    name: 'map',
                    type: 'map',
                    mapType: name,
                    selectedMode: 'false',//是否允许选中多个区域
					showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true,
							color:'#fff'
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: allData
                }, {
					name: '危险',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(data1,geoCoordMap1),
					symbolSize: function (val) {
						return val[2] / 10;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#ff0000'
						}
					},
					  zlevel: 0
				}, {
					name: '工贸',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(data2,geoCoordMap2),
					symbolSize: function (val) {
						return val[2] / 10;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#009966'
						}
					},
					  zlevel: 0
				}, {
					name: '非煤矿山',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(data3,geoCoordMap3),
					symbolSize: function (val) {
						return val[2] / 10;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#9900cc'
						}
					},
					  zlevel: 0
				}, {
					name: '烟花爆竹',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(data4,geoCoordMap4),
					symbolSize: function (val) {
						return val[2] / 10;
					},
					label: {
						normal: {
							formatter: '{b}',
							position: 'right',
							show: true
						},
						emphasis: {
							show: true
						}
					},
					itemStyle: {
						normal: {
							color: '#ffcc00'
						}
					},
					  zlevel: 0
				},{
                name: '新增',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data5,geoCoordMap5),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#eac736',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            }]
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}
function tooltipCharts(){
    var myChart1 = echarts.init(document.getElementById('line'));
    var option = {
		title: {
			text: '全区安全态势预测',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 16,
				color: '#fff'
			},
			left: '6%'
		},
		tooltip: {
			trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		grid: {
			left: '3%', //grid 组件离容器左侧的距离。
			right: '4%', //grid 组件离容器右侧的距离。
			bottom: '3%', //grid 组件离容器下侧的距离。
			containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisLine: {
				lineStyle: {
					color: '#ddd' //坐标轴线线的颜色。
				}
			},
			data: ['7', '8', '9', '10', '11', '12']
		}],
		yAxis: [{
			type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
			name: '安全指数', //坐标轴名称。
			axisTick: {
				show: false //是否显示坐标轴刻度
			},
			axisLine: {
				lineStyle: {
					color: '#ddd' //坐标轴线线的颜色
				}
			},
			axisLabel: {
				margin: 10, //刻度标签与轴线之间的距离
				textStyle: {
					fontSize: 14 //文字的字体大小
				}
			},
			splitLine: {
				lineStyle: {
					color: '#57617B' //分隔线颜色设置
				}
			}
		}],
		series: [{
			name: '安全指数', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
			type: 'line',
			animation:false,
			smooth: true, //是否平滑曲线显示
			symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
			symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ] 
			showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
			lineStyle: { //线条样式
				normal: {
					width: 1 //线宽。[ default: 2 ] 
				}
			},
			areaStyle: { //区域填充样式
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
						offset: 0, // 0% 处的颜色
						color: 'rgba(137, 189, 27, 0.3)'
					}, {
						offset: 0.8, // 80% 处的颜色
						color: 'rgba(137, 189, 27, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
					shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
				}
			},
			itemStyle: { //折线拐点标志的样式
				normal: {
					color: 'rgb(137,189,27)',
					borderColor: 'rgba(137,189,2,0.27)', //图形的描边颜色。支持的格式同 color
					borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ] 

				}
			},
			data: [80, 75, 60, 68, 73, 65]
		},]
	};
    myChart1.setOption(option);
	var myChart2 = echarts.init(document.getElementById('pie'));
	var option1 = {
		series: [{
			name: '',
			type: "gauge",
			animation:false,
			min: 0,
			max: 100,
			radius: "80%",
			center: ["50%", "50%"],
			axisLine: {
				show: true,
				lineStyle: {
					width: 5,
					shadowBlur: 0,
					color: [[0.3, '#dd3b11'],[0.7, '#f08c0a'],[1, '#00FF7F']]
				}
			},
            splitLine: {           // 分隔线
                length: 5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
				
		   itemStyle: {
				normal: {
					shadowBlur: 0
				}
			},
			detail: {fontSize:18,formatter:'{value}分'},
			data: [{value:50 , name: ''}]
		}]
	}



	 myChart2.setOption(option1);
	
}
	