import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poi } from '../../types/poi';

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  constructor(
    private http: HttpClient,
  ) { }

  get_lost_comms(): Observable<Poi>{
    let params = new HttpParams();
    return this.http.get<Poi>(`/api/lostCommsPos`, {params : params});
  }

  get_autogen_points(): Observable<Poi[]>{
    let params = new HttpParams();
    return this.http.get<Poi[]>(`/api/autogenPoints`, {params : params});
  }

  get_waypoints(): Observable<Poi[]>{
    let params = new HttpParams();
    return this.http.get<Poi[]>(`/api/waypoints`, {params : params});
  }

  get_off_axis(): Observable<Poi>{
    let params = new HttpParams();
    return this.http.get<Poi>(`/api/offAxisOdlcPos`, {params : params});
  }

  get_emergent(): Observable<Poi>{
    let params = new HttpParams();
    return this.http.get<Poi>(`/api/emergentLastKnownPos`, {params : params});
  }

  get_airdrop(): Observable<Poi>{
    let params = new HttpParams();
    return this.http.get<Poi>(`/api/airDropPos`, {params : params});
  }

  get_ugv_drive(): Observable<Poi>{
    let params = new HttpParams();
    return this.http.get<Poi>(`/api/ugvDrivePos`, {params : params});
  }
}
