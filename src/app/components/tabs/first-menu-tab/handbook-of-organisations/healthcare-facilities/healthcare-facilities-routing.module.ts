import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthcareFacilitiesPage } from './healthcare-facilities.page';

const routes: Routes = [
  {
    path: '',
    component: HealthcareFacilitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthcareFacilitiesPageRoutingModule {}
