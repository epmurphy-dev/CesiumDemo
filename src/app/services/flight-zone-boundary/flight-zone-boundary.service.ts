import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightZoneBoundary } from '../../types/flight-zone-boundary'

@Injectable({
  providedIn: 'root'
})
export class FlightZoneBoundaryService {

  constructor(
    private http: HttpClient,
  ) { }

  get_flight_zone_boundary(): Observable<FlightZoneBoundary> {
    let params = new HttpParams();
    return this.http.get<FlightZoneBoundary>(`/api/flyZones`, {params : params});
  }

}
