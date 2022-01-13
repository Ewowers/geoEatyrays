import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawEnforcementPage } from './law-enforcement.page';

const routes: Routes = [
  {
    path: '',
    component: LawEnforcementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawEnforcementPageRoutingModule {}
