import { Component, OnInit, NgZone } from '@angular/core';
import { latLng, tileLayer,Map, Layer, marker,icon } from 'leaflet';
//import { MapPointService } from '../../services/map-point.service';


@Component({ 
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})

export class MapPanelComponent implements OnInit {


  constructor(private zone: NgZone) { }

fitBounds: any = null;
/*circle = circle([ 46.95, -122 ], { radius: 5000 });
*/
  ngOnInit() {
  
    /*
	// The 'add' event callback handler happens outside of the Angular zone
	this.circle.on('add', () => {
		
		// But, we can run stuff inside of Angular's zone by calling NgZone.run()
		// everything inside the arrow function body happens inside of Angular's zone, where changes will be detected
		this.zone.run(() => {
			this.fitBounds = this.circle.getBounds();
		});
		
  });
  
  */
  }

  onMapReady(map: Map) {
    map.on('click', <LeafletMouseEvent>(e) => { console.log(e.latlng.lat,e.latlng.lng);
    
    
    	this.zone.run(() => {
        this.fitBounds = this.addMarker(e.latlng.lat,e.latlng.lng);
      });
    
    });
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

addMarker(latitude:number,longitude:number) {
  const newMarker = marker(
    [latitude,longitude],
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
