// 13.028641818876078, 77.65504717856643
var latitude = 13.028641818876078;
var longitude = 77.65504717856643;
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhdGhlZXJ0aCIsImEiOiJjbDMydG9oY3oxYWQwM3Bwc2Fsdno3c2UyIn0.WOShnHZ-CicyxQIjJbQzQQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/navigation-night-v1",
  center: [longitude, latitude],
  zoom: 16,
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);
map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  "top-left"
);
