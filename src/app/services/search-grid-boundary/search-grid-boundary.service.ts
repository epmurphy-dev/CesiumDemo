import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchGridBoundary } from '../../types/search-grid-boundary'
import { BoundaryPoint } from '../../types/boundary-point';

@Injectable({
  providedIn: 'root'
})
export class SearchGridBoundaryService {

  constructor(
    private http: HttpClient,
  ) { }

  get_search_grid_boundary(): Observable<BoundaryPoint[]>{
    let params = new HttpParams();
    return this.http.get<BoundaryPoint[]>(`/api/searchGridPoints`, {params : params});
  }
}
