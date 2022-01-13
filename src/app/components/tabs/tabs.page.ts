import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tab3Service } from "./third-notifications-tab/tab3.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnChanges {
  counter:number

  constructor(private notificationService: tab3Service) {}

  ngOnInit() {
    setInterval(()=>{
      this.counter = this.notificationService.getCounter()
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.counter = this.notificationService.getCounter()
  }

}
