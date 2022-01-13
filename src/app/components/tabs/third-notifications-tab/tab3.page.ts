import {Component, OnInit} from '@angular/core';
import { tab3Service } from "./tab3.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  notifications:any

  constructor(private notificationService: tab3Service) {}

  ngOnInit() {
    this.notifications = this.notificationService.getAllNotifications()
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.notificationService.setNotification(
        {
          id: Date.now().toString(),
          title: 'Test',
          text: 'test',
          date: '08.04.21'
        }
      )
      console.log('Async operation has ended');
      this.notificationService.getCounter()
      this.notifications = this.notificationService.getAllNotifications()
      event.target.complete();
    }, 2000);
  }

}
