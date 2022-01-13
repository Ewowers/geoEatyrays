import {AfterViewInit, Component} from '@angular/core';

import * as L from 'leaflet'
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements AfterViewInit {
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

  async getCurrentCoordinates() {
    await this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.lCenter = [resp.coords.latitude, resp.coords.longitude]
        this.lZoom = 19
        this.map.setView(this.lCenter, this.lZoom)
        if(this.circle) return
        this.circle = L.circleMarker(this.lCenter, {color: 'red'}).bindPopup("Я").addTo(this.map)
    }).catch(error => console.log('Error getting location', error))
  }

  constructor(private geolocation: Geolocation){}

  ngAfterViewInit(): void {
    this.initMap();
  }

    // this.geolocation.getCurrentPosition(this.options)
    //   .then((resp) => {
    //     this.olCenter = [resp.coords.longitude, resp.coords.latitude]
    //     this.olZoom = 19
        // this.map.getView().setCenter(olProj.transform(this.olCenter, 'EPSG:4326', 'EPSG:3857'))
        // this.map.getView().setZoom(19)
      //   this.point = new Point(this.olCenter)
      //   console.log(this.olCenter)
      //   console.log(this.point)
      //   this.map.setTarget(null);
      //   this.map = null;
      // }).catch(error => console.log('Error getting location', error))

    // let watch = this.geolocation.watchPosition();
    // watch.subscribe((data) => {
    //   if ("coords" in data) {
    //     this.olCenter = [data.coords.longitude, data.coords.latitude]
    //   } else {
    //     console.error("There is no property 'coords'")
    //   }
    // })


}
