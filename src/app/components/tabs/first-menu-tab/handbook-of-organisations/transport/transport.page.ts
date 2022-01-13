import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage implements OnInit {

  constructor(private http: HttpClient) { }

  transports:any[] = [
    {
      type: "airport",
      title: "Аэропорт",
      isOpen: false,
      data: []
    },
    {
      type: "nur-depot",
      title: "ЖД вокзал",
      isOpen: false,
      data: []
    },
    {
      type: "depot",
      title: "Автовокзал",
      isOpen: false,
      data: []
    },
    {
      type: "hospital",
      title: "Госпиталь",
      isOpen: false,
      data: []
    },
  ]

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.http.get(baseUrl + '/api/transport').subscribe(
      (transports) => {
        console.log(transports)
        for(let i in transports) {
          if(transports[i].type === this.transports[0].type) {
            this.transports[0].data.push(transports[i])
          }
          if(transports[i].type === this.transports[1].type) {
            this.transports[1].data.push(transports[i])
          }
          if(transports[i].type === this.transports[2].type) {
            this.transports[2].data.push(transports[i])
          }
          if(transports[i].type === this.transports[3].type) {
            this.transports[3].data.push(transports[i])
          }
        }
        console.log(this.transports)
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
