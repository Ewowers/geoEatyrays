import { Component, OnInit } from '@angular/core';
import {tab4Service} from "../tab4.service";

@Component({
  selector: 'app-my-appeals',
  templateUrl: './my-appeals.component.html',
  styleUrls: ['./my-appeals.component.scss'],
})
export class MyAppealsComponent implements OnInit {

  constructor(private appealService: tab4Service) { }

  appeals:any[]

  ngOnInit() {
    this.appeals = this.appealService.getAllAppeals()
  }



}
