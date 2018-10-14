import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer,Map, Layer, marker,icon } from 'leaflet';
//import { MapPointService } from '../../services/map-point.service';


@Component({ 
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})

export class MapPanelComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    //this.mapPointService.hello();
  }

  onMapReady(map: Map) {
    map.on('click', <LeafletMouseEvent>(e) => { console.log(e.latlng.lat,e.latlng.lng); });
  }


  // Marker for the top of Mt. Ranier
  summit = marker([ 46.8523, -121.7603 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });



// Open Street Map definitions
LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });

// Values to bind to Leaflet Directive
options = {
  layers: [ this.LAYER_OSM , this.summit],
  zoom: 10,
  center: latLng(46.879966, -121.726909)
};




markers: Layer[] = [];

addMarker() {
  const newMarker = marker(
    [  46.879966 + 0.1 * (Math.random() - 0.5), -121.726909 + 0.1 * (Math.random() - 0.5) ],
    {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
      })
    }
  );

  this.markers.push(newMarker);
}

removeMarker() {
  this.markers.pop();
}


}
