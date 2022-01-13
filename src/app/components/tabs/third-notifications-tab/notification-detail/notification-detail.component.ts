import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { tab3Service } from "../tab3.service";

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.scss'],
})
export class NotificationDetailComponent implements OnInit {
  loadedNotification:any

  constructor(private activatedRoute: ActivatedRoute, private notificationService: tab3Service) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {
        return
      }
      const id = paramMap.get('id')
      this.loadedNotification = this.notificationService.getNotification(id)
    })
  }

}
