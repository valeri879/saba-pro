import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() public data!: Card;
  @Output() public dataEvent: EventEmitter<any> = new EventEmitter();

  public sendData(): void {
    this.dataEvent.emit(`${this.data.title} from child`);
  }
}
