import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandbookOfOrganisationsPageRoutingModule } from './handbook-of-organisations-routing.module';

import { HandbookOfOrganisationsPage } from './handbook-of-organisations.page';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandbookOfOrganisationsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [HandbookOfOrganisationsPage],
})
export class HandbookOfOrganisationsPageModule {}
