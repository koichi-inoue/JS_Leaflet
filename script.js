window.onload = function() {

  // div要素のid
  var map = L.map('map');

  // 中心の緯度・経度とズームレベルを指定
  map.setView([35, 136], 5);

  //表示するタイルレイヤのURLとAttributionコントロールの記述を設定して、地図に追加する
  L.tileLayer(

    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ,
    // 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      //attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
    }

  ).addTo(map);

  L.marker([ 33.66983627668292, 130.44487416744232 ] ).addTo(map)
    .bindPopup('Kyushu Sangyo University')
    .openPopup();

}
