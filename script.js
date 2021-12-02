window.onload = function() {

  // div要素のid
  var map = L.map('map');

  // 中心の緯度・経度とズームレベルを指定
  map.setView([35, 136], 5);

  //表示するタイルレイヤのURLとAttributionコントロールを設定
  L.tileLayer(
    // OpenStreetMap を利用
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  /* 地理院タイル を利用する場合
  L.tileLayer(
     'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',{
        attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
  }).addTo(map);
  */

  L.marker([ 33.66983627668292, 130.44487416744232 ] ).addTo(map)
    .bindPopup('Kyushu Sangyo University')
    .openPopup();

}
