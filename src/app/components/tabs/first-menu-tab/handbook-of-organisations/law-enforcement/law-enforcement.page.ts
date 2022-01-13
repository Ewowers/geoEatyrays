import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';

@Component({
  selector: 'app-law-enforcement',
  templateUrl: './law-enforcement.page.html',
  styleUrls: ['./law-enforcement.page.scss'],
})
export class LawEnforcementPage implements OnInit {
  constructor(private http: HttpClient) {}
  isOpen = true;
  arr;
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get(baseUrl + '/api/law_enforcement').subscribe(
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
