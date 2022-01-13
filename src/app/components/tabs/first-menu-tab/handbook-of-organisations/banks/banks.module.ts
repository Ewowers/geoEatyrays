import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanksPageRoutingModule } from './banks-routing.module';

import { BanksPage } from './banks.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanksPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BanksPage]
})
export class BanksPageModule {}
