import {AfterViewInit, Component} from '@angular/core';

import * as L from 'leaflet'
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  map:any
  lZoom:number = 4
  lCenter:any = [45, 67]
  circle:any

  private initMap(): void {
    this.map = L.map('map').setView(this.lCenter, this.lZoom)

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit() {
    this.initMap()
  }

}
