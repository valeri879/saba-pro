import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  public categoriesList$!: Observable<Category[]>;

  constructor(
    private _categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoriesList$ = this._categoriesService.getCategories();
  }

}
