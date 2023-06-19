import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private _http = inject(HttpClient);
  
  private _token(): string  {
    const user: Login = JSON.parse(localStorage.getItem('user')!);
    return user.token;
  }
  
  getProfile(): Observable<any> {
    return this._http.get(`http://localhost:8000/api/user`, {
      headers: new HttpHeaders({
        'x-auth-token': this._token()
      })
    })
  }

}
