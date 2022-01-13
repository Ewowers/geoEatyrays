import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";
import { LandTendersComponent } from './land-tenders.component';
import { AuctionModule } from './auction/auction.module';




@NgModule({
  declarations: [LandTendersComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    AuctionModule
  ]
})
export class LandTendersModule { }
