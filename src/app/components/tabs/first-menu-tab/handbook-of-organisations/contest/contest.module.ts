import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestPageRoutingModule } from './contest-routing.module';

import { СontestPage } from './contest.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [СontestPage],
})
export class ContestPageModule {}
