import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { СontestPage } from './contest.page';

const routes: Routes = [
  {
    path: '',
    component: СontestPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContestPageRoutingModule {}
