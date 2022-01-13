import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { ScheduleKtzhComponent } from './schedule-ktzh/schedule-ktzh.component';
import { AirportTimetableComponent } from './airport-timetable/airport-timetable.component';
import { BusStationSheduleComponent } from './bus-station-shedule/bus-station-shedule.component';
import { TaxiAroundCityComponent } from './taxi-around-city/taxi-around-city.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'shedule-ktzh',
    component: ScheduleKtzhComponent,
  },
  {
    path: 'airport-timetable',
    component: AirportTimetableComponent,
  },
  {
    path: 'bus-station-shedule',
    component: BusStationSheduleComponent,
  },
  {
    path: 'taxi-around-the-city',
    component: TaxiAroundCityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
