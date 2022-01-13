import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';
@Component({
  selector: 'app-healthcare-facilities',
  templateUrl: './healthcare-facilities.page.html',
  styleUrls: ['./healthcare-facilities.page.scss'],
})
export class HealthcareFacilitiesPage implements OnInit {
  constructor(private http: HttpClient) {}
  isOpen = true;
  arr = [];
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get(baseUrl + '/api/healthcare_facilities').subscribe(
      (data = []) => {
        for (let elem in data) {
          console.log(data[elem].type);
          switch (data[elem].type) {
            case 'psc':
              data[elem].type = 'ЦОН';
              break;
            case 'сfs':
              data[elem].type = 'АЗС';
              break;
            case 'tourist_agency':
              data[elem].type = 'Турестическое агенство';
              break;
            case 'shop':
              data[elem].type = 'Магазины';
              break;
            case 'cafe':
              data[elem].type = 'Кафе';
              break;
            case 'restaurant':
              data[elem].type = 'Рестораны';
              break;
            case 'shopping_center':
              data[elem].type = 'Тоговые центры';
              break;
            case 'cgfs':
              data[elem].type = 'АГЭС';
              break;
            case 'sport_complex':
              data[elem].type = 'Спорт комплекс';
              break;
          }
          if (data[elem].type === undefined) data[elem].type = 'Пункт полиций';
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
