import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';
@Component({
  selector: 'app-educational-institutions',
  templateUrl: './educational-institutions.page.html',
  styleUrls: ['./educational-institutions.page.scss'],
})
export class EducationalInstitutionsPage implements OnInit {
  constructor(private http: HttpClient) {}
  isOpen = true;
  arr = [];
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get(baseUrl + '/api/educational_institutions').subscribe(
      (data = []) => {
        for (let elem in data) {
          console.log(data[elem].type);
          switch (data[elem].type) {
            case 'kindergartens':
              data[elem].type = 'Детские сады';
              break;
            case 'schools':
              data[elem].type = 'Школы';
              break;
            case 'college':
              data[elem].type = 'Колледж';
              break;
            case 'university':
              data[elem].type = 'Университеты';
              break;
            case 'child_development_center':
              data[elem].type = 'Центр развития ребенка';
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
