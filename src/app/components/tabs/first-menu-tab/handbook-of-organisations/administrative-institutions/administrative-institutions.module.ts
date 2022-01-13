import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrativeInstitutionsPageRoutingModule } from './administrative-institutions-routing.module';

import { AdministrativeInstitutionsPage } from './administrative-institutions.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AdministrativeInstitutionsPageRoutingModule
  ],
  declarations: [AdministrativeInstitutionsPage]
})
export class AdministrativeInstitutionsPageModule {}
