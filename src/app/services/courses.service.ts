import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private _http: HttpClient
  ) { }

  getCoursesList(id: string): Observable<any[]> {
    return this._http.get<any[]>(`http://localhost:8000/api/courses/${id}`);
  }

  getCourse(id: string): Observable<any> {
    return this._http.get<any>(`http://localhost:8000/api/courses/detail/${id}`).pipe(
      map(res => {
        console.log(res)
        return res['data'];
      })
    );
  }
}
