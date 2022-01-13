import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationalInstitutionsPage } from './educational-institutions.page';

const routes: Routes = [
  {
    path: '',
    component: EducationalInstitutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationalInstitutionsPageRoutingModule {}
