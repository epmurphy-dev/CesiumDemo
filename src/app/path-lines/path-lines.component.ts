import { Component, OnInit } from '@angular/core';
import { AcNotification, ActionType } from 'angular-cesium';
import { Observable, from } from 'rxjs';
import { map, pairwise, flatMap } from 'rxjs/operators';
import { PoiService } from '../services/poi/poi.service';
import { Poi } from '../types/poi';

@Component({
  selector: 'app-path-lines',
  templateUrl: './path-lines.component.html',
  styleUrls: ['./path-lines.component.css']
})
export class PathLinesComponent implements OnInit {

  polylines$: Observable<AcNotification>;
  private interop_pois;
  private flat_wp: Observable<Poi>;
  Cesium = Cesium; 
  show = true;

  constructor(
    private poiService : PoiService
  ) {}

  ngOnInit() {
    let a = 100;
    function getId(){
      a = a+1
      return a
    }

    function pairToACEntity(pair: [Poi | Poi[], Poi | Poi[]]): AcNotification{
      return {
        id: String(getId()),
        actionType: ActionType.ADD_UPDATE,
        entity: { 
          positions: Cesium.Cartesian3.fromDegreesArrayHeights([
              pair[0]["longitude"], pair[0]["latitude"], pair[0]["altitude"],
              pair[1]["longitude"], pair[1]["latitude"], pair[1]["altitude"]
          ]),
        }
      };
    }

    this.flat_wp = this.poiService.get_waypoints().pipe(flatMap(x => x));
    this.polylines$ = this.flat_wp.pipe(pairwise()).pipe(map(pair => pairToACEntity(pair)));
  }

  setShow($event: boolean) {
    this.show = $event;
  }
}
