import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {tab4Service} from "../../tab4.service";

@Component({
  selector: 'app-appeal-detail',
  templateUrl: './appeal-detail.component.html',
  styleUrls: ['./appeal-detail.component.scss'],
})
export class AppealDetailComponent implements OnInit {

  loadedAppeal:any

  constructor(private activatedRoute: ActivatedRoute, private appealService: tab4Service) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {
        return
      }
      const id = paramMap.get('id')
      this.loadedAppeal = this.appealService.getAppeal(id)
    })
  }

}
