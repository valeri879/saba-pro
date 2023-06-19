import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from '../interfaces/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http = inject(HttpClient);
  private _router = inject(Router);
  
  login(data: any): Observable<Login> {
    return this._http.post<Login>(`http://localhost:8000/api/login`, data).pipe(
      tap(userData => this._setToken(userData))
    );
  }

  private _setToken(userData: Login): void {
    this._router.navigateByUrl('profile');
    localStorage.setItem('user', JSON.stringify(userData));
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true
    }
    return false
  }

  public logOut() {
    localStorage.removeItem('user');
  }

}
