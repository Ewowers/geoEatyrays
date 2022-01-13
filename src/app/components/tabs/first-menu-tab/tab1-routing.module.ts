import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { LandTendersComponent } from './land-tenders/land-tenders.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { AppealComponent } from './appeal/appeal.component';
import { BusRoutesComponent } from './bus-routes/bus-routes.component';
import { EventsComponent } from './events/events.component';
import { AuctionComponent } from './land-tenders/auction/auction.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'land-tenders',
    children: [
      {
        path: '',
        component: LandTendersComponent,
      },
      {
        path: 'auction',
        children: [
          {
            path: '',
            component: AuctionComponent,
          },
          {
            path: 'map',
            component: EventsComponent,
          },
        ],
      },
    ],
  },
  // {
  //   path: 'appointment-doctor',
  //   component: DoctorAppointmentComponent
  // },
  // {
  //   path: 'appeal',
  //   component: AppealComponent
  // },
  // {
  //   path: 'bus-routes',
  //   component: BusRoutesComponent
  // },
  //{
  //  path: "events",
  //  component: EventsComponent,
  //},
  // {
  //   path: 'handbook-of-organisations',
  //   loadChildren: () => import('./handbook-of-organisations/handbook-of-organisations.module').then( m => m.HandbookOfOrganisationsPageModule)
  // },
  {
    path: 'services',
    loadChildren: () =>
      import('./handbook-of-organisations/services/services.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: 'administrative-institutions',
    loadChildren: () =>
      import(
        './handbook-of-organisations/administrative-institutions/administrative-institutions.module'
      ).then((m) => m.AdministrativeInstitutionsPageModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./handbook-of-organisations/services/services.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: 'law-enforcement',
    loadChildren: () =>
      import(
        './handbook-of-organisations/law-enforcement/law-enforcement.module'
      ).then((m) => m.LawEnforcementPageModule),
  },
  {
    path: 'transport',
    loadChildren: () =>
      import('./handbook-of-organisations/transport/transport.module').then(
        (m) => m.TransportPageModule
      ),
  },
  {
    path: 'educational-institutions',
    loadChildren: () =>
      import(
        './handbook-of-organisations/educational-institutions/educational-institutions.module'
      ).then((m) => m.EducationalInstitutionsPageModule),
  },
  {
    path: 'culture',
    loadChildren: () =>
      import('./handbook-of-organisations/culture/culture.module').then(
        (m) => m.CulturePageModule
      ),
  },
  {
    path: 'healthcare-facilities',
    loadChildren: () =>
      import(
        './handbook-of-organisations/healthcare-facilities/healthcare-facilities.module'
      ).then((m) => m.HealthcareFacilitiesPageModule),
  },
  {
    path: 'fire-stations',
    loadChildren: () =>
      import(
        './handbook-of-organisations/fire-stations/fire-stations.module'
      ).then((m) => m.FireStationsPageModule),
  },
  {
    path: 'banks',
    loadChildren: () =>
      import('./handbook-of-organisations/banks/banks.module').then(
        (m) => m.BanksPageModule
      ),
  },
  {
    path: 'auction',
    loadChildren: () =>
      import('./handbook-of-organisations/auction/auction.module').then(
        (m) => m.AuctionPageModule
      ),
  },
  {
    path: 'contest',
    loadChildren: () =>
      import('./handbook-of-organisations/contest/contest.module').then(
        (m) => m.ContestPageModule
      ),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./handbook-of-organisations/event/event.module').then(
        (m) => m.EventPageModule
      ),
  },
  {
    path: 'bus',
    loadChildren: () =>
      import('./handbook-of-organisations/bus/bus.module').then(
        (m) => m.BusPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
