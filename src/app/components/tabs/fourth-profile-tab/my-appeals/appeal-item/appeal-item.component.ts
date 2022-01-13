import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appeal-item',
  templateUrl: './appeal-item.component.html',
  styleUrls: ['./appeal-item.component.scss'],
})
export class AppealItemComponent implements OnInit {

  constructor() { }

  @Input() appealTitle:string
  @Input() date:string
  @Input() text:string

  ngOnInit() {}

}
