import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.page.html',
  styleUrls: ['./banks.page.scss'],
})
export class BanksPage implements OnInit {
  constructor(private http: HttpClient) {}

  arr = [];
  isOpen = true;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get(baseUrl + '/api/bank').subscribe(
      (data) => {
        for (let elem in data) {
          if (!this.arr.find((item) => item.type === data[elem].type)) {
            this.arr.push({
              type: data[elem].type,
              isOpen: false,
              arr: [data[elem]],
            });
          } else {
            this.arr
              .find((item) => item.type === data[elem].type)
              .arr.push(data[elem]);
          }
        }
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
