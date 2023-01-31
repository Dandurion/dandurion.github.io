let mymap = L.map("mapid").setView([62.242, 25.747], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoidmFkaW0xNDU2MyIsImEiOiJja2NuZHR0YXgwM2gzMzFsZGp2c2luMWNqIn0.J5Uej7wEe_ti39pLSTrQ0Q",
  }
).addTo(mymap);
var marker = L.marker([62.242, 25.747]).addTo(mymap);



var circle = L.circle([62.242434, 25.738594], {
    color: 'yellow',
    fillColor: '#ffffaa',
    fillOpacity: 0.5,
    radius: 340
}).addTo(mymap);

circle.bindPopup("Harjun EK");

var polygon = L.polygon([
    [62.239227, 25.751227],
    [62.239227, 25.756386],
    [62.237464, 25.756386],
    [62.237464, 25.751227]
]).addTo(mymap);
