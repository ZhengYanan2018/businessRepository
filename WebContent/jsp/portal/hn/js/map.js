var allData,provinces;var timeFn = null;var zhengzhouData;
var geoData=[
	[[
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
	],[
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
	],[
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
	],[
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
	],[
	{name: '新增点1', value: 200},
	{name: '新增点2', value: 200},
	{name: '新增点3', value: 200}
	]
	],[
	[
	{name: '危险1', value: 199},
	{name: '危险2', value: 39},
	{name: '危险3', value: 152},
	{name: '危险4', value: 299}
	],[
	{name: '工贸1', value: 199},
	{name: '工贸2', value: 39},
	{name: '工贸3', value: 152}
	],[
	{name: '非煤矿山1', value: 199},
	{name: '非煤矿山2', value: 39}
	],[
	{name: '烟花爆竹1', value: 199},
	{name: '烟花爆竹2', value: 39}
	],[
	{name: '新增点1', value: 200}
	]
	]
	
]
var geoDataMap=[
	[[{
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
	}],[{
	'工贸1':[111.762698,35.066745],
	'工贸2':[111.785695,34.329787],
	'工贸3':[113.772603,33.555435],
	'工贸4':[115.037417,33.543881],
	'工贸5':[116.0,34.1],
	'工贸6':[115.708919,34.668698],
	'工贸7':[113.699014,34.759852],
	'工贸8':[113.349465,35.059181],
	'工贸9':[113.662219,35.770815],
	'工贸10':[113.878388,35.931833]
	}],[{
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
	}],[{
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
	}],[{
	'新增点1':[113.747307,35.139037],
	'新增点2':[115.08801,34.672973],
	'新增点3':[113.889886,33.602115]
	}]],[[{
	'危险1':[113.665911,34.751542],
	'危险2':[113.735476,34.730659],
	'危险3':[113.938996,34.673205],
	'危险4':[113.654988,34.623315]
	}],[{
	'工贸1':[113.593472,34.893307],
	'工贸2':[113.462966,34.787125],
	'工贸3':[113.980965,34.859666]
	}],[{
	'非煤矿山1':[113.554952,34.752965],
	'非煤矿山2':[113.479638,34.648501]
	}],[{
	'烟花爆竹1':[113.529081,34.812261],
	'烟花爆竹2':[113.530231,34.724014]
	}],[{
	'新增点1':[114.040181,34.850661]
	}]
	
	]
]
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
	'工贸5':[116.0,34.1],
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
var elseData={
	'河南省':[[20, 30, 16, 25, 24, 30],[16832,16832,16832,16832],[["开封市","郑州市","平顶山市","驻马店市","信阳市"],[150, 130, 110, 100, 90]],[["开封市","郑州市","平顶山市","驻马店市","信阳市"],[15, 25, 38, 45, 40]]],
	'开封市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'郑州市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'平顶山市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'驻马店市':[[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'信阳市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'南阳市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'济源市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'周口市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'三门峡市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'商丘市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'漯河市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'许昌市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'濮阳市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'安阳市':[[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'新乡市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'焦作市':[[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]] ,
	'鹤壁市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]],
	'洛阳市': [[16, 25, 24,20, 30, 30],[16832,16832,16832,16832],[["上街区","中原区","登封市","中牟县","新郑市"],[150, 90, 130, 110, 100]],[["上街区","中原区","登封市","中牟县","新郑市"],[15, 40, 25, 38, 45]]]
}
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
		'开封市': './json/kaifeng.json',
		'郑州市': './json/zhengzhou.json',
		'平顶山市': './json/pingdingshan.json',
		'驻马店市': './json/zhumadian.json',
		'信阳市': './json/xinyang.json',
		'南阳市': './json/nanyang.json',
		'济源市': './json/jiyuan.json',
		'周口市': './json/zhoukou.json',
		'三门峡市': './json/sanmenxia.json',
		'商丘市': './json/shangqiu.json',
		'漯河市': './json/luohe.json',
		'许昌市': './json/xuchang.json',
		'濮阳市': './json/puyang.json',
		'安阳市': './json/anyang.json',
		'新乡市': './json/xinxiang.json',
		'焦作市': './json/jiaozuo.json',
		'鹤壁市': './json/hebi.json',
		'洛阳市': './json/luoyang.json'
	};
	mapCenterdata = [
	{"name":'开封市',"value": [114.341447,34.797049,0]},
	{"name":'郑州市',"value": [113.665412,34.757975,0]},
	{"name":'平顶山市',"value": [113.307718,33.735241,0]},
	{"name":'驻马店市',"value": [114.024736,32.980169,0]},
	{"name":'信阳市',"value": [114.075031,32.123274,0]},
	{"name":'南阳市',"value": [112.540918,32.999082,0]},
	{"name":'济源市',"value": [112.590047,35.090378,0]},
	{"name":'周口市',"value":[114.649653,33.620357,0] },
	{"name":'三门峡市',"value":[111.194099,34.577338,0] },
	{"name":'商丘市',"value": [115.650497,34.437054,0]},
	{"name":'漯河市',"value": [114.026405,33.575855,0]},
	{"name":'许昌市',"value": [113.826063,34.022956,0]},
	{"name":'濮阳市',"value": [115.041299,35.768234,0]},
	{"name":'安阳市',"value": [114.352482,36.103442,0]},
	{"name":'新乡市',"value":[113.883991,35.302616,0] },
	{"name":'焦作市',"value": [113.238266,35.23904,0]},
	{"name":'鹤壁市',"value": [114.295444,35.748236,0]},
	{"name":'洛阳市',"value": [112.434468,34.663041,0]}
	];
	//各地市的数据
	allDataX = [{
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
	//各地市的数据
	zhengzhouData = [{
		name: '上街区'
	}, {
		name: '管城回族区'
	}, {
		name: '中原区'
	}, {
		name: '惠济区'
	}, {
		name: '金水区'
	}, {
		name: '二七区'
	}, {
		name: '中牟县'
	}, {
		name: '巩义市'
	}, {
		name: '荥阳市'
	}, {
		name: '新密市'
	}, {
		name: '新郑市'
	}, {
		name: '登封市'
	}];
	for (var i = 0; i < allDataX.length; i++) {
		allDataX[i].value = Math.round(Math.random() * 100);
	}
	for (var i = 0; i < zhengzhouData.length; i++) {
		zhengzhouData[i].value = Math.round(Math.random() * 100);
	}
		loadMap('./json/henan.json', 'henan',allDataX,geoData[0],geoDataMap[0],true);//初始化河南地图
	})
	function loadMap(mapCode, name,data,geoDataD,geoDataMapD,showType) {
		var myChart = echarts.init(document.getElementById('map'));
		var wx = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI5QTBGQjNBMUZGMTFFOEExNjA4NzQ4NzBGN0I0NDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI5QTBGQjRBMUZGMTFFOEExNjA4NzQ4NzBGN0I0NDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MjlBMEZCMUExRkYxMUU4QTE2MDg3NDg3MEY3QjQ0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MjlBMEZCMkExRkYxMUU4QTE2MDg3NDg3MEY3QjQ0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqYxpwIAAACwSURBVHjaYvr//z8DCm62UATiYhifiQETrABiFxgHVUGLpQWQNAPitdgVMDBshNJnMBW0WHYDSTEgfsdQc/wCTJgR5BCgpD6QDRN8CsQFQMwCxNwsUME1SNZIA/FqKPs+E1D3JiBDhQE7sAOZcAmIzwHxP6gPvGGuArrlCcQNCIdmAcmpQPwKKCmOzZteUDoaVziAjL8L1L0HWzjIQln+yDqQTdAF4jKg7qvICgACDABkuz1rl0hRYQAAAABJRU5ErkJggg==';
		var gm = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlGRjJCQTdBMUZGMTFFOEFEOUJGMDA2MzY2QUZGNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlGRjJCQThBMUZGMTFFOEFEOUJGMDA2MzY2QUZGNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OUZGMkJBNUExRkYxMUU4QUQ5QkYwMDYzNjZBRkY2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OUZGMkJBNkExRkYxMUU4QUQ5QkYwMDYzNjZBRkY2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PunAzoUAAADgSURBVHjalJDBCgFhEMfn0xaSiyRxpZwp5aZcnThIyc0DeADyEk5eQrk4yQPspryAo4vaiyRh/GfN1qe0MvWbnW+a2fnPGGamr+YZB74OElTjTZiOUbRlwBnNY1AIMjIhEpeqgEFX3r8miOX0a8Q5luYB/BKUAt1EO9CyZCffDZ6RzhmYggUYgS0oatNcG1Lh0nEtJi0Wa4IyWIO05i6hpCfwwV11ZsEJPEAfHMARDKFmL1cwwLeuwh+xSxUrnsiEVTDWM21dVg7Qgb+plAbeeY178nemP0yWvv5Rzy8BBgCjgWmxchJUEAAAAABJRU5ErkJggg==';
		var fmks = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjE5RDZCNUNBMUZFMTFFODlDRTBBODAwM0NDNkVCNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjE5RDZCNURBMUZFMTFFODlDRTBBODAwM0NDNkVCNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMTlENkI1QUExRkUxMUU4OUNFMEE4MDAzQ0M2RUI2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMTlENkI1QkExRkUxMUU4OUNFMEE4MDAzQ0M2RUI2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsgE//AAAADDSURBVHjaYvz//z8DPiD8WiMGSP18K3pjNUyMEZ8moAZhIPUGiM8ANZnCxJkY8IMdUFofaIAQQU1ARVOBlAmUywrE2RiagIocgFgOyo4EUllo5uRg+AmoEMTYBcSFQHwVhwNsgX47wgTVEAQVdMOjAQTK4TYBNT0BsqUZiAPSTEANqSRoAIEyRqFX6v8ZSAP/WIBEMdQmYjQzAvFdkKaZQBwLxH8IaARpAKlfzgIMwq9Afz0CcsyA+C8eTczQ5PQRIMAAY+RAvzbG7pIAAAAASUVORK5CYII=';
		var yhbz = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAYAAABlyXS1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkE2MzQyRkNBMUZFMTFFOEI3MDJEQ0IzOERCMEVERTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkE2MzQyRkRBMUZFMTFFOEI3MDJEQ0IzOERCMEVERTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQTYzNDJGQUExRkUxMUU4QjcwMkRDQjM4REIwRURFNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQTYzNDJGQkExRkUxMUU4QjcwMkRDQjM4REIwRURFNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjR9NaUAAADZSURBVHjaTM+/CwFhHMfxu5ssUierMhoMFptB/gHDZTTIcoMfKZMimdVlMUi6WeSPsCgho3QLIwYGtvP+6rm6q1ef5/v8+t6j+b6vBV7NjxWuDU1979a3RyzIUTBnqIUOMcAWbeqhzOtcVSfHaGCOMmboSp8vHNXTVtnHfxBXE65MYKVqU5cBPaZcU8MENpZRJ2JJT5eigjx2SGOPtfxtAVV2buTHyANZQu5/rXqOR6RwZ0Mi/M6jWsgiRn0J3nkiM0hy4sqCyfgBT07epIcsyG7ySRRx/gkwAF3NgpVzlcnfAAAAAElFTkSuQmCC';
		if(data){
			allData=data
		}else{
			allData=allDataX
		}
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
				if(name=="郑州市"){
					loadMap(mapCode, name,zhengzhouData,geoData[1],geoDataMap[1],false);
					chart1(elseData['郑州市'][0],'郑州市');
					chart2(elseData['郑州市'][1],'郑州市');
					chart4(elseData['郑州市'][2],'郑州市');
					chart5(elseData['郑州市'][3],'郑州市');
				}else{
					chart1(elseData[name][0],name);
					chart2(elseData[name][1],name);
					chart4(elseData[name][2],name);
					chart5(elseData[name][3],name);
					loadMap(mapCode, name,allDataX,geoData[0],geoDataMap[0],false);
				}
				
			}, 250);
		});


	// 绑定双击事件，返回河南地图
	myChart.on('dblclick', function(params) {
		//当双击事件发生时，清除单击事件，仅响应双击事件
		clearTimeout(timeFn);		
		//返回河南地图
		loadMap('http://10.12.1.80/portal/jsp/newHN/json/henan.json', 'henan',allDataX,geoData[0],geoDataMap[0],true);
		chart1(elseData['河南省'][0],'河南省');
		chart2(elseData['河南省'][1],'河南省');
		chart4(elseData['河南省'][2],'河南省');
		chart5(elseData['河南省'][3],'河南省');
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
					backgroundColor:'rgba(50,50,50,0)',
                    formatter: function(params) {
						var tipHtml = '';
						tipHtml='<div class="tooltip_box" diqu="'+params.name+'"><ul class="list" ><li onclick="showModal(this)" sjtype="wx"><img src="./images/wx.png"><font>65</font></li><li onclick="showModal(this)" sjtype="gm"><img src="./images/gm.png" alt="" /><font>35</font></li><li onclick="showModal(this)" sjtype="fmks"><img src="./images/fmks.png" alt="" /><font>30</font></li><li class="yjxy" onclick="showModal(this)" sjtype="yhbz"><img src="./images/yhbz.png" alt="" /><font>21</font></li></ul></div>'
						return tipHtml;
                    },
                    position: 'inside'
                },
				legend: {
					textStyle: {
						color: '#666666',
						fontSize: 14
					},
					orient: 'horizontal',
					top: '3%',
					data: [
					{
						name:'危险',
						icon:'image://' + wx,

					},{
						name:'工贸',
						icon:'image://' + gm,

					},{
						name:'非煤矿山',
						icon:'image://' + fmks,

					},{
						name:'烟花爆竹',
						icon:'image://' + yhbz,

					}]
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
				},
                series: [{
                    name: 'map',
                    type: 'map',
                    mapType: name,
                    selectedMode: 'false',//是否允许选中多个区域
					showLegendSymbol: false, // 存在legend时显示
                    data: allData,
                    itemStyle: {
						normal: {
							areaColor: '#92cffe',
							borderColor: '#ffffff'
						},
						emphasis: {
							areaColor: '#1b79c2'
						}
					},
					label: {
						show:!showType,
						normal: {
                            show: !showType,
                            textStyle: {
                            	color: '#333'
                            }
                        },
						emphasis: {
							show: false
						}
					},
                },{
					name: '散点',
					type: 'scatter',
					coordinateSystem: 'geo',
					data: mapCenterdata,
					symbolSize: function(val) {
						return 1;
					},
					label: {
						normal: {
							formatter: '{b}',
							show: showType,
							color:"#333",
							fontSize:14
						},
						emphasis: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							color: '#05C3F9'
						}
					}
				}
					/*{
					name: '危险',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(geoDataD[0],geoDataMapD[0][0]),
					zlevel: 0,
					itemStyle:{
						opacity:0
					}
				}, {
					name: '工贸',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(geoDataD[1],geoDataMapD[1][0]),
					zlevel: 0,
					itemStyle:{
						opacity:0
					}
				}, {
					name: '非煤矿山',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(geoDataD[2],geoDataMapD[2][0]),
					zlevel: 0,
					itemStyle:{
						opacity:0
					}
				}, {
					name: '烟花爆竹',
					type: 'scatter',
					coordinateSystem: 'geo',
					zlevel: 6,
					data: convertData(geoDataD[3],geoDataMapD[3][0]),
					zlevel: 0,
					itemStyle:{
						opacity:0
					}
				}*/
				]
            };
            myChart.setOption(option);
           	window.addEventListener("resize",function() {
    			myChart.resize();
    		})
        } else {
            alert('无法加载该地图');
        }
    });
}
