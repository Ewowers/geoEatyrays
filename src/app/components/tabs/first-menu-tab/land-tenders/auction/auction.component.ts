import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],
})
export class AuctionComponent implements OnInit {

  menu:boolean = true
  atyrau:boolean = false
  regions:boolean = false

  constructor() { }

  showItems(e) {
    switch (e) {
      case 'menu':
        this.menu = true
        this.atyrau = false
        this.regions = false
        break
      case 'atyrau':
        this.menu = false
        this.atyrau = true
        this.regions = false
        break
      case 'regions':
        this.menu = false
        this.atyrau = false
        this.regions = true
        break
    }
  }

  ngOnInit() {}

}
