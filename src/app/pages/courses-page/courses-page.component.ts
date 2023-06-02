import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/interfaces/card';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit{

  public cards: Card[] = [];

  constructor(
    public dataService: DataService,
    public _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cards = this.dataService.cards;

    this._route.queryParams.subscribe(
      params => {
        const filter = params['filter'];
        if (filter) {
          this.cards.sort(() => {
            if (filter === 'desc' || filter === 'asc') {
              return 1;
            }
            return 0;
          });
        }
      }
    )
  }
}
