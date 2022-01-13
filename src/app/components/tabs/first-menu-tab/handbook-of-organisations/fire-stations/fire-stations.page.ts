import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';
@Component({
  selector: 'app-fire-stations',
  templateUrl: './fire-stations.page.html',
  styleUrls: ['./fire-stations.page.scss'],
})
export class FireStationsPage implements OnInit {
  constructor(private http: HttpClient) {}
  isOpen = true;
  arr;
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get(baseUrl + '/api/fire_stations').subscribe(
      (data = []) => {
        this.arr = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(
            `Backend returned code ${err.status}, body was: ${err.error}`
          );
        }
      }
    );
  }
}
