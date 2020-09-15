import { from as observableFrom, Observable, Subject } from 'rxjs';

import { merge, flatMap, map, mergeAll,toArray, concat, pluck } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AcEntity, AcLayerComponent, AcNotification, ActionType, ZoomToRectangleService } from 'angular-cesium';
import { SearchGridBoundaryService } from '../services/search-grid-boundary/search-grid-boundary.service';
import { FlightZoneBoundaryService } from '../services/flight-zone-boundary/flight-zone-boundary.service';
import { SearchGridBoundary } from '../types/search-grid-boundary';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { BoundaryPoint } from '../types/boundary-point';

@Component({
  selector: 'polygon-layer-example',
  template: `
      <ac-layer acFor="let polygon of sgb$" [context]="this" [show]="show">
          <ac-polygon-desc props="{
        hierarchy: polygon.hierarchy,
        material: polygon.material,
        height: polygon.height,
        outline: polygon.outline,
        outlineColor: polygon.outlineColor,
        extrudedHeight: polygon.extrudedHeight,
        perPositionHeight: polygon.perPositionHeight,
        show: polygon.show
    }">
          </ac-polygon-desc>
      </ac-layer>
      <ac-layer acFor="let polygon of fzb$" [context]="this" [show]="show">
          <ac-polygon-desc props="{
        hierarchy: polygon.hierarchy,
        material: polygon.material,
        height: polygon.height,
        outline: polygon.outline,
        outlineColor: polygon.outlineColor,
        extrudedHeight: polygon.extrudedHeight,
        perPositionHeight: polygon.perPositionHeight,
        show: polygon.show
    }">
          </ac-polygon-desc>
      </ac-layer>

  `,
})
export class PolygonLayerExampleComponent implements OnInit {
  @ViewChild(AcLayerComponent, {static: false}) layer: AcLayerComponent;

  polygons$: Observable<AcNotification>;
  polygons$_test: Observable<any>;
  show = true;
  updater = new Subject<AcNotification>();
  private alt_max: number;
  private flat_sgb: any;
  private flat_fzb: any;
  private sgb$: Observable<AcNotification>;
  private fzb$: Observable<AcNotification>;

  constructor(
    private searchGridBoundaryService : SearchGridBoundaryService,
    private flightZoneBoundaryService : FlightZoneBoundaryService,
  ) {
    //this.alt_min = 100;
    this.alt_max = 750;
  }

  ngOnInit() {
    let a = 0;
    function getId(){
      a = a+1
      return a
    }

    function flat_points_to_poly(bps, material = Cesium.Color.ORANGE.withAlpha(0.3)): AcNotification {
      return {
        id: String(getId()),
        entity: new AcEntity({
          hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights(bps as number[]),
          extrudedHeight: 0,
          perPositionHeight: true,
          material: material,
          outline: true,
          outlineColor: Cesium.Color.BLACK
        }),
        actionType: ActionType.ADD_UPDATE,
        }
    }

    this.flat_sgb = this.searchGridBoundaryService.get_search_grid_boundary().pipe(
      flatMap(points => points.map(point => [
        point.longitude, point.latitude, this.alt_max,
      ]))
    ).pipe(mergeAll()).pipe(toArray());

    this.flat_fzb = this.flightZoneBoundaryService.get_flight_zone_boundary().pipe(
      flatMap(points => points[0].boundaryPoints.map(point => [
        point.longitude, point.latitude, this.alt_max,
      ]))
    ).pipe(mergeAll()).pipe(toArray());

    this.sgb$ = this.flat_sgb.pipe(map(x => flat_points_to_poly(x)));
    this.fzb$ = this.flat_fzb.pipe(map(x => flat_points_to_poly(x, Cesium.Color.TEAL.withAlpha(0.2))));

  }

  setShow($event: boolean) {
    this.show = $event;
  }
}
