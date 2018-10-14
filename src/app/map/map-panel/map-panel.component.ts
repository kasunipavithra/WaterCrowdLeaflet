import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer,Map } from 'leaflet';
import { MapPointService } from '../../services/map-point.service';


@Component({ 
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})

export class MapPanelComponent implements OnInit {


  constructor(private mapPointService: MapPointService) { }

  ngOnInit() {
    this.mapPointService.hello();
  }

  onMapReady(map: Map) {
    map.on('click', <LeafletMouseEvent>(e) => { this.mapPointService.addMarker(e.latlng.lat,e.latlng.lng); });
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

}
