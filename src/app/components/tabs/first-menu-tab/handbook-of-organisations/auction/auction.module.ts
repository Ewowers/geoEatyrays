import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AuctionPageRoutingModule } from "./auction-routing.module";

import { AuctionPage } from "./auction.page";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AuctionPageRoutingModule, HttpClientModule],
  declarations: [AuctionPage],
})
export class AuctionPageModule {}
