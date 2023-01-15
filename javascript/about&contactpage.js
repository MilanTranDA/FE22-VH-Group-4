// Interactive contacts map:
let myMap = L.map("map").setView([55.598778, 13.010495], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	maxZoom: 20
}).addTo(myMap);

let hq_marker = L.marker([55.598778, 13.010495], 13).addTo(myMap);

hq_marker.bindPopup("<b>HQ</b>");

// Submit popup:
function submitConfirm(){
	alert("Thank you for your submition!")
}

