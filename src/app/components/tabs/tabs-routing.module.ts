import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
// import { isPlatform } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'mobile',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./first-menu-tab/tab1.module').then(m => m.Tab1PageModule)
        // children: [
        //   {
        //     path: '',
        //     loadChildren: () => import('./first-menu-tab/tab1.module').then(m => m.Tab1PageModule)
        //   }
        // ]
      },
      // {
      //   path: 'widgets',
      //   loadChildren: () => import('./second-widgets-tab/tab2.module').then(m => m.Tab2PageModule)
      // },
      // {
      //   path: 'notifications',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('./third-notifications-tab/tab3.module').then(m => m.Tab3PageModule),
      //     },
      //     {
      //       path: ':id',
      //       loadChildren: () => import('./third-notifications-tab/notification-detail/notification-detail.module').then(m => m.NotificationDetailModule)
      //     }
      //   ]
      // },
      {
        path: 'profile',
        loadChildren: () => import('./fourth-profile-tab/tab4.module').then(m => m.Tab4PageModule)
      }
    ]
  },
  // {
  //   path: 'web',
  //   component: MainComponent,
  //   children: [{}]
  // },
  {
    path: '',
    redirectTo: 'mobile/menu',
    pathMatch: 'full'
  }
];

// function checkPlatform() {
//   return isPlatform('desktop') ? 'web':'mobile/fourth-profile-tab'
// }

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
