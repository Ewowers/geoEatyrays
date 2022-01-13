import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { baseUrl } from './../../../../../../environments/environment';

@Component({
  selector: 'app-administrative-institutions',
  templateUrl: './administrative-institutions.page.html',
  styleUrls: ['./administrative-institutions.page.scss'],
})
export class AdministrativeInstitutionsPage implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  // Переменные
  organizations:any
  menuItems:any[] = [
    {
      id: 1,
      title: 'Административные учреждения',
      active: true,
      data: []
    },
    {
      id: 2,
      title: 'Суды',
      active: false,
      data: [] 
    },
    {
      id: 3,
      title: 'Акиматы',
      active: false,
      data: [] 
    },
    {
      id: 4,
      title: 'Маслихаты',
      active: false,
      data: []
    },
    {
      id: 5,
      title: 'Департаменты',
      active: false,
      data: [] 
    },
  ]

  ngOnInit() {
    // get запрос
    this.fetchData('Атырауская область')
  }

  fetchData(e=null) {
    let region = e
    if(typeof region != 'string') {
      region = region.target.value
    }
    this.menuItems[0].data = []
    this.menuItems[1].data = []
    this.menuItems[2].data = []
    this.menuItems[3].data = []
    this.menuItems[4].data = []
    console.log(region)

    this.http.get(baseUrl + '/api/directory_organizations')
      .subscribe(data => {
        if(region === "Атырауская область") {
          for(let i in data) {
            if(data[i].type === "Административные учреждения") {
              this.menuItems[0].data.push(data[i])
            }
            if(data[i].type === "Суды") {
              this.menuItems[1].data.push(data[i])
            }
            if(data[i].type === "Акиматы") {
              this.menuItems[2].data.push(data[i])
            }
            if(data[i].type === "Маслихаты") {
              this.menuItems[3].data.push(data[i])
            }
            if(data[i].type === "Департаменты") {
              this.menuItems[4].data.push(data[i])
            }
          }
          console.log(this.menuItems)
          return
        }
        for(let i in data) {
          if(data[i].type === "Административные учреждения" && data[i].region === region) {
            this.menuItems[0].data.push(data[i])
          }
          if(data[i].type === "Суды" && data[i].region === region) {
            this.menuItems[1].data.push(data[i])
          }
          if(data[i].type === "Акиматы" && data[i].region === region) {
            this.menuItems[2].data.push(data[i])
          }
          if(data[i].type === "Маслихаты" && data[i].region === region) {
            this.menuItems[3].data.push(data[i])
          }
          if(data[i].type === "Департаменты" && data[i].region === region) {
            this.menuItems[4].data.push(data[i])
          }
        }
        console.log(this.menuItems)
      },(err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      )
  }

}
