import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from '../../../../../../environments/environment';
@Component({
  selector: 'app-services',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }
  datas: any = [];
  fetchData() {
    this.http.get(baseUrl + '/api/event').subscribe(
      (data = []) => {
        for (let key in data) {
          let date = new Date(data[key].edate);
          data[key].edate = date.toLocaleDateString();
        }
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
