import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthcareFacilitiesPageRoutingModule } from './healthcare-facilities-routing.module';

import { HealthcareFacilitiesPage } from './healthcare-facilities.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthcareFacilitiesPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [HealthcareFacilitiesPage],
})
export class HealthcareFacilitiesPageModule {}
