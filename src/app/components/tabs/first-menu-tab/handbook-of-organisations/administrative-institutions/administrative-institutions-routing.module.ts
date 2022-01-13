import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrativeInstitutionsPage } from './administrative-institutions.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrativeInstitutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativeInstitutionsPageRoutingModule {}
