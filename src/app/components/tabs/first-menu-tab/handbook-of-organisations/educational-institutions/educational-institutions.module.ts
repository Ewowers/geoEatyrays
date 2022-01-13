import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationalInstitutionsPageRoutingModule } from './educational-institutions-routing.module';

import { EducationalInstitutionsPage } from './educational-institutions.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationalInstitutionsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [EducationalInstitutionsPage],
})
export class EducationalInstitutionsPageModule {}
