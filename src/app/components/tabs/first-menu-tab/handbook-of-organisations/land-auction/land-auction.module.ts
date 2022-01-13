import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LandAuctionPageRoutingModule } from "./land-auction-routing.module";

import { LandAuctionPage } from "./land-auction.page";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandAuctionPageRoutingModule, HttpClientModule],
  declarations: [LandAuctionPage],
})
export class LandAuctionPageModule {}
