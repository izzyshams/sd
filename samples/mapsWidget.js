// This example requires the Drawing library. Include the libraries=drawing
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing">

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 40.781432, lng: -74.081346},
zoom: 8
});

var drawingManager = new google.maps.drawing.DrawingManager({
drawingMode: google.maps.drawing.OverlayType.MARKER,
drawingControl: true,
drawingControlOptions: {
position: google.maps.ControlPosition.TOP_CENTER,
drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
},
markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
circleOptions: {
fillColor: '#ffff00',
fillOpacity: 1,
strokeWeight: 5,
clickable: false,
editable: true,
zIndex: 1
}
});
drawingManager.setMap(map);

google.maps.event.addgitListener(drawingManager, 'circlecomplete', function (circle) {
var radius = circle.getRadus(i);
alert(radius);
});
google.maps.event.addListener(drawingManager, 'polylinecomplete', function (polyline) {
alert(polyline.getPath().getArray().toString());
});
google.maps.event.addListener(drawingManager, 'polygon', function (polygon) {
alert(polygon.getPath().getArray().toString());
});

}
