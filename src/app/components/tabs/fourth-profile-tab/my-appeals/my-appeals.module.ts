import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppealsComponent } from './my-appeals.component';
import { AppealItemComponent } from './appeal-item/appeal-item.component';
import {IonicModule} from "@ionic/angular";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [MyAppealsComponent, AppealItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class MyAppealsModule { }
