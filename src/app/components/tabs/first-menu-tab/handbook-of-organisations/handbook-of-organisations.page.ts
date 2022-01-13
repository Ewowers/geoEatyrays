import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handbook-of-organisations',
  templateUrl: './handbook-of-organisations.page.html',
  styleUrls: ['./handbook-of-organisations.page.scss'],
})
export class HandbookOfOrganisationsPage implements OnInit {
  constructor() {}

  menuItems: any[] = [
    {
      id: '0',
      title: 'Аукцион',
      src: 'auction',
      icon: 'pricetags',
    },
    {
      id: '1',
      title: 'Конкурс',
      src: 'contest',
      icon: 'pricetags',
    },
    {
      id: '1',
      title: 'Административные учреждения',
      src: 'administrative-institutions',
      icon: 'business',
    },
    {
      id: '2',
      title: 'Правоохранительные органы',
      src: 'law-enforcement',
      icon: 'shield',
    },
    {
      id: '3',
      title: 'Услуги',
      src: 'services',
      icon: 'help-buoy',
    },
    {
      id: '3',
      title: 'Транспорт',
      src: 'transport',
      icon: 'bus',
    },
    {
      id: '4',
      title: 'Образовательные учреждения',
      src: 'educational-institutions',
      icon: 'book',
    },
    {
      id: '5',
      title: 'Культура',
      src: 'culture',
      icon: 'body',
    },
    {
      id: '6',
      title: 'Объекты здравоохранения',
      src: 'healthcare-facilities',
      icon: 'medkit',
    },
    {
      id: '7',
      title: 'Пожарные станции',
      src: 'fire-stations',
      icon: 'water',
    },
    {
      id: '8',
      title: 'Банки (Филиалы)',
      src: 'banks',
      icon: 'home',
    },
    {
      id: '9',
      title: 'Банки (Филиалы)',
      src: 'banks',
      icon: 'home',
    },
  ];

  ngOnInit() {}
}
