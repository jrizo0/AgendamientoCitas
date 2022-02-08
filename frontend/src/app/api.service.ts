import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  urlDates = 'http://localhost:5000/date/';
  constructor(private _http: HttpClient) {}

  public saveDate(citaToSave: any): Observable<any> {
    console.log(citaToSave);
    return this._http.post(this.urlDates + 'insertDate', citaToSave);
  }

  public getCitasByDate(fecha: any): Observable<any> {
    console.log(fecha);
    return this._http.get(this.urlDates + 'getDates/' + fecha);
  }
}
