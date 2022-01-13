import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { LandTendersModule } from './land-tenders/land-tenders.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    Tab1PageRoutingModule,
    LandTendersModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
