import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Obstacle } from '../../types/obstacle'

@Injectable({
  providedIn: 'root'
})
export class ObstaclesService {

  constructor(
    private http: HttpClient,
  ) { }

  get_obstacles(): Observable<Obstacle[]>{
    let params = new HttpParams();
    return this.http.get<Obstacle[]>(`/api/stationaryObstacles`, {params : params});
  }
}
