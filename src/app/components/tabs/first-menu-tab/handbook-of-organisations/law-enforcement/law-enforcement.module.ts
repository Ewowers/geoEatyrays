import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LawEnforcementPageRoutingModule } from './law-enforcement-routing.module';

import { LawEnforcementPage } from './law-enforcement.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LawEnforcementPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [LawEnforcementPage],
})
export class LawEnforcementPageModule {}
