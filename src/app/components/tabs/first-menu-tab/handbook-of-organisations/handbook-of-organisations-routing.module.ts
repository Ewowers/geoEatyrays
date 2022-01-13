import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandbookOfOrganisationsPage } from './handbook-of-organisations.page';

const routes: Routes = [
  {
    path: '',
    component: HandbookOfOrganisationsPage,
  },
  {
    path: 'administrative-institutions',
    loadChildren: () =>
      import(
        './administrative-institutions/administrative-institutions.module'
      ).then((m) => m.AdministrativeInstitutionsPageModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesPageModule),
  },
  {
    path: 'law-enforcement',
    loadChildren: () =>
      import('./law-enforcement/law-enforcement.module').then(
        (m) => m.LawEnforcementPageModule
      ),
  },
  {
    path: 'transport',
    loadChildren: () =>
      import('./transport/transport.module').then((m) => m.TransportPageModule),
  },
  {
    path: 'educational-institutions',
    loadChildren: () =>
      import('./educational-institutions/educational-institutions.module').then(
        (m) => m.EducationalInstitutionsPageModule
      ),
  },
  {
    path: 'culture',
    loadChildren: () =>
      import('./culture/culture.module').then((m) => m.CulturePageModule),
  },
  {
    path: 'healthcare-facilities',
    loadChildren: () =>
      import('./healthcare-facilities/healthcare-facilities.module').then(
        (m) => m.HealthcareFacilitiesPageModule
      ),
  },
  {
    path: 'fire-stations',
    loadChildren: () =>
      import('./fire-stations/fire-stations.module').then(
        (m) => m.FireStationsPageModule
      ),
  },
  {
    path: 'banks',
    loadChildren: () =>
      import('./banks/banks.module').then((m) => m.BanksPageModule),
  },
  {
    path: 'auction',
    loadChildren: () =>
      import('./auction/auction.module').then((m) => m.AuctionPageModule),
  },
  {
    path: 'contest',
    loadChildren: () =>
      import('./contest/contest.module').then((m) => m.ContestPageModule),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./event/event.module').then((m) => m.EventPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandbookOfOrganisationsPageRoutingModule {}
