import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private _http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    return this._http.get<Category[]>(`http://localhost:8000/api/categories`);
  }
}
