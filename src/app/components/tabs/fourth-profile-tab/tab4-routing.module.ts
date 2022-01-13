import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import { MyAppealsComponent } from './my-appeals/my-appeals.component';
import { AboutAppComponent } from './about-app/about-app.component';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
  {
    path: 'my-appeals',
    children: [
      {
        path: '',
        component: MyAppealsComponent,
      },
      {
        path: ':id',
        loadChildren: () => import('./my-appeals/appeal-detail/appeal-detail.module').then(m => m.AppealDetailModule)
      }
    ]
  },
  {
    path: 'about-app',
    component: AboutAppComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
