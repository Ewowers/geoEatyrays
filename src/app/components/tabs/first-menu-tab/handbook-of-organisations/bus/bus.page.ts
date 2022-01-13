import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from '../../../../../../environments/environment';
@Component({
  selector: 'app-services',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }
  datas: any = [];
  fetchData() {
    this.http.get(baseUrl + '/api/bus').subscribe(
      (data = []) => {
        console.log(data);
        this.datas = data;
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
