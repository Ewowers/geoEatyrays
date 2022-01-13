import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FireStationsPageRoutingModule } from './fire-stations-routing.module';

import { FireStationsPage } from './fire-stations.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FireStationsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [FireStationsPage],
})
export class FireStationsPageModule {}
