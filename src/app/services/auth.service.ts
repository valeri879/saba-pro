import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http = inject(HttpClient);
  
  login(data: any): Observable<Login> {
    return this._http.post<Login>(`http://localhost:8000/api/login`, data)
  }

}
