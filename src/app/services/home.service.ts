import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http: HttpClient
  ) { }

  public getData(): Observable<Home> {
    return this._http.get<Home>(`http://localhost:8000/api`);
  }
}

