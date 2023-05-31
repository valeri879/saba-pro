import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  public cards: Card[] = [
    {
      id: '620135ec045b728393d6c614',
      title: 'Javascript courses',
      descr: 'Courses about javascript and more',
      img: 'https://val-do.com/uploads/1668373202545.jpg',
      isPublished: true,
      insertDate: new Date(),
      price: 35.21
    },
    {
      id: '624b0a00fd7874ad2f9aedaa',
      title: 'HTML courses',
      descr: 'Courses about HTML and more',
      img: 'https://val-do.com/uploads/1667423488952.jpg',
      isPublished: true,
      insertDate: new Date(),
      price: 20
    },
    {
      id: '62012294045b728393d6c5d8',
      title: 'CSS courses',
      descr: 'Courses about CSS and more',
      img: 'https://val-do.com/uploads/1654851966929.jpg',
      isPublished: true,
      insertDate: new Date(),
      price: 25
    },
  ];

  constructor() { }
}
