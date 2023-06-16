import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog';
import { Pagination } from '../interfaces/pagination';

export interface BlogData extends Pagination {
  data?: Blog[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private _http: HttpClient
  ) { }

  getBlogs(params?: any): Observable<BlogData> {
    return this._http.get<BlogData>(`http://localhost:8000/api/blog`, {
      params: {
        ...params
      }
    });
  }

  getBlog(id: string): Observable<Blog> {
    return this._http.get<Blog>(`http://localhost:8000/api/blog/${id}`);
  }
}
