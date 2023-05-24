import { Component } from '@angular/core';
import { Card } from './interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  public isBold: boolean = false;
  public dataFromChild!: string;
  public cards: Card[] = [
    {
      title: 'Javascript courses',
      descr: 'Courses about javascript and more',
      img: 'https://val-do.com/uploads/1668373202545.jpg',
      isPublished: true
    },
    {
      title: 'HTML courses',
      descr: 'Courses about HTML and more',
      img: 'https://val-do.com/uploads/1667423488952.jpg',
      isPublished: false
    },
    {
      title: 'CSS courses',
      descr: 'Courses about CSS and more',
      img: 'https://val-do.com/uploads/1654851966929.jpg',
      isPublished: true
    },
  ];

  public myClasses: string[] = [
    'myClass-1',
    'myClass-2',
    'myClass-3',
    'myClass-4',
  ];

  public classObj: any = {
    myClass1: true,
    myClass2: true
  }

  public fontObj: any = {
    'font-size.px': 18
  }

  public toggle(): void {
    this.isBold = !this.isBold;
  }
}
