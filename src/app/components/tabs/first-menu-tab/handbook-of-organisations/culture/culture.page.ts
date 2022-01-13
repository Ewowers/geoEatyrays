import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.page.html',
  styleUrls: ['./culture.page.scss'],
})
export class CulturePage implements OnInit {
  constructor(private http: HttpClient) {}
  arr = [];
  ngOnInit() {
    this.fetchData();
  }
  isOpen = true;

  fetchData() {
    this.http.get(baseUrl + '/api/culture').subscribe(
      (data = []) => {
        for (let elem in data) {
          switch (data[elem].type) {
            case 'house_of_culture':
              data[elem].type = 'Дом культуры';
              break;
            case 'Museum':
              data[elem].type = 'Музей';
              break;
            case 'cinema':
              data[elem].type = 'Кинотеатр';
              break;
            case 'theater':
              data[elem].type = 'Театр';
              break;
            case 'library':
              data[elem].type = 'Библиотека';
              break;
          }
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
        console.log(this.arr);
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
