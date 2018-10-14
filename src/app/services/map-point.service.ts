//this service is to read to map point from map 

import { Injectable } from '@angular/core';
import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapPointService {

  constructor() { }

  hello(){
    alert("hellow mappoint service");
  }

  markers: Layer[] = [];

	addMarker(latitude:number,longitude:number) {
		const newMarker = marker(
			[ latitude, longitude ],
			{
				icon: icon({
					iconSize: [ 25, 41 ],
					iconAnchor: [ 13, 41 ],
					iconUrl: '2273e3d8ad9264b7daa5bdbf8e6b47f8.png',
					shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
				})
			}
		);

    this.markers.push(newMarker);
    alert("lat"+latitude+"lon"+longitude);
	}

	removeMarker() {
		this.markers.pop();
	}
}

