import { Component, Input } from '@angular/core';
import { Pagination } from 'src/app/interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() data!: Pagination;
}
