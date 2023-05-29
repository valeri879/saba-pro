import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Card;

  constructor(
    private dataService: DataService
  ) {
  }
}
