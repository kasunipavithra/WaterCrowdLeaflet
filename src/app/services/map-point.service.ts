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

	addMarker() {
		const newMarker = marker(
			[ 46.879966 + 0.1 * (Math.random() - 0.5), -121.726909 + 0.1 * (Math.random() - 0.5) ],
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
	}

	removeMarker() {
		this.markers.pop();
	}
}
}
