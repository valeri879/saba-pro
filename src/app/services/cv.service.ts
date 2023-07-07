import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(
    private _http: HttpClient
  ) { }

  delete() {
    return this._http.delete(`http://localhost:8000/api/cv`);
  }
}
