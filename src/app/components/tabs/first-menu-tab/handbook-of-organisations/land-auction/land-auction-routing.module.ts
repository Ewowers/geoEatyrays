import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandAuctionPage } from "./land-auction.page";

const routes: Routes = [
  {
    path: "",
    component: LandAuctionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandAuctionPageRoutingModule {}
