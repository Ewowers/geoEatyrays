import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  widgetItems:any[] = [
    {
      title: 'Расписание КТЖ',
      icon: 'train-outline',
      link: 'shedule-ktzh',
    },
    {
      title: 'Расписание аэропорта',
      icon: 'airplane-outline',
      link: 'airport-timetable',
    },
    {
      title: 'Расписание автовокзала',
      icon: 'bus-outline',
      link: 'bus-station-shedule',
    },
    {
      title: 'Такси по городу',
      icon: 'car-outline',
      link: 'taxi-around-the-city',
    },
    {
      title: 'Мероприятия с Instagram',
      icon: 'logo-instagram',
      link: '',
    },
  ]

  constructor() {}

  ngOnInit() {
  }
}
