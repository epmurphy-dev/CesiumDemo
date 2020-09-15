import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poi } from '../../types/poi';

@Injectable({
  providedIn: 'root'
})
export class FlightTelemService {

  constructor(
    private http: HttpClient,
  ) { }

  get_telem(): Observable<Poi[]>{
    let params = new HttpParams();
    return this.http.get<Poi[]>(`/api/pos`, {params : params});
  }
}
