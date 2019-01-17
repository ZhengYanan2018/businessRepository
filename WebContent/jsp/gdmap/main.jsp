<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width initial-scale=1.0 maximum-scale=1.0 user-scalable=0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>3D地图</title>
<style>
body,html{ margin:0;padding:0;font:12px/16px Verdana,Helvetica,Arial,sans-serif;width: 100%;height: 100%}
.container{
  height: 100%
}
</style>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script language="javascript" src="//webapi.amap.com/maps?v=1.4.12&key=32e2ed119c887ae0a856c86af87a86d7&plugin=AMap.ControlBar"></script>
</head>
<body >
<div id="container" style="width:100%; height:100%;resize:both;"></div>
<script language="javascript">
var map;
function mapInit(){
  map = new AMap.Map('container', {
    resizeEnable: true,
    rotateEnable:true,
    pitchEnable:true,
    zoom: 17,
    pitch:80,
    rotation:-15,
    viewMode:'3D',//开启3D视图,默认为关闭
    buildingAnimation:true,//楼块出现是否带动画
    expandZoomRange:true,
    zooms:[3,20],
    center:[116.64899,36.12948]
  });
  
  map.addControl(new AMap.ControlBar({
    showZoomBar:false,
    showControlButton:true,
    position:{
      right:'10px',
      top:'10px'
    }
  }));
  map.on('complete', function() {
      $(".amap-logo").remove();
      $(".amap-copyright").remove();
      
      addMarker();
  });
  
//实例化点标记
  function addMarker() {
      marker = new AMap.Marker({
          icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          position: [116.406315,39.908775],
          offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(map);
  }
}
mapInit()
</script>
</body>
</html>