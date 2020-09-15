import { Injectable } from '@angular/core';
import { from, interval, pipe, of, concat } from 'rxjs';
import { flatMap, map, mergeMap, merge } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AcEntity, AcLayerComponent, AcNotification, ActionType, PointsEditorComponent, CesiumEvent } from 'angular-cesium';
import { PoiService } from '../services/poi/poi.service';
import { Poi } from '../types/poi';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'waypoints',
  template: `
      <ac-layer acFor="let point of entities$" [context]="this" [show]="show">
          <ac-point-desc props="{
              position: point.position,
              pixelSize : 10,
              outlineColor: point.color,
              outlineWidth: 2,
           }">
           </ac-point-desc>
           <ac-label-desc props="{
            position: point.position,
            pixelOffset : [-15, 20] | pixelOffset,
            text: point.id,
            font: '12px sans-serif'
            }">
          </ac-label-desc>
      </ac-layer>
  `,
  styleUrls: [],
})
export class WaypointsComponent implements OnInit {
  @ViewChild(AcLayerComponent, { static: false }) layer: AcLayerComponent;

  entities$: Observable<AcNotification>;
  waypoints$: Observable<AcNotification>;
  lost_comms$: Observable<AcNotification>;
  off_axis$: Observable<AcNotification>;
  emergent$: Observable<AcNotification>;
  ugv_drive$: Observable<AcNotification>;
  autogen_points$: Observable<AcNotification>;
  show = true;

  Cesium = Cesium;

  constructor(
    private poiService: PoiService) {
  }

  ngOnInit() {
    let a = 0;
    function getId(){
      a = a+1
      return a
    }

    function makeACEntity(a: Poi, color): AcNotification{
      return {
        id: String(getId()),
        actionType: ActionType.ADD_UPDATE,
        entity: { 
          position: Cesium.Cartesian3.fromDegrees(
            a["longitude"], a["latitude"], a["altitude"]
            ),
            color: color,
        }
      };
    }

    this.waypoints$ = this.poiService.get_waypoints().pipe(
      flatMap(points => points.map(point => makeACEntity(point, Cesium.Color.GREEN)))
    );

    this.autogen_points$ = this.poiService.get_autogen_points().pipe(
      flatMap(points => points.map(point => makeACEntity(point, Cesium.Color.TEAL)))
    );

    this.lost_comms$ = this.poiService.get_lost_comms().pipe(
      map(point => makeACEntity(point, Cesium.Color.RED))
    );

    this.off_axis$ = this.poiService.get_off_axis().pipe(
      map(point => makeACEntity(point, Cesium.Color.CHOCOLATE))
    );

    this.emergent$ = this.poiService.get_emergent().pipe(
      map(point => makeACEntity(point, Cesium.Color.ORANGE))
    );

    this.ugv_drive$ = this.poiService.get_ugv_drive().pipe(
      map(point => makeACEntity(point, Cesium.Color.BLACK))
    );

    this.entities$ = concat(
      this.waypoints$, this.lost_comms$, this.off_axis$, this.emergent$, this.ugv_drive$, this.autogen_points$
      );

  }

  removeAll() {
    this.layer.removeAll();
  }

  setShow($event: boolean) {
    this.show = $event;
  }


}
