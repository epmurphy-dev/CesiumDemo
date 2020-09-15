import { Component, OnInit, ViewChild } from '@angular/core';
import { AcLayerComponent, AcNotification, ActionType } from 'angular-cesium';
import { Observable } from 'rxjs';
import { MockDataProviderService } from './mock-data-provider.service';
import { map, flatMap } from 'rxjs/operators';
import { ObstaclesService } from '../services/obstacles/obstacles.service';
import { Obstacle } from '../types/obstacle';

@Component({
  selector: 'circle-layer-example',
  templateUrl: 'circle-layer-example.component.html',
  styleUrls: ['circle-layer-example.component.css'],
  providers: []
})
export class CircleLayerExampleComponent implements OnInit {
  @ViewChild(AcLayerComponent, { static: false }) layer: AcLayerComponent;

  circles$: Observable<AcNotification>;
  Cesium = Cesium;
  show = true;

  constructor(private mockDataProvider: MockDataProviderService,
    private obstaclesService: ObstaclesService) {
  }

  ngOnInit() {
    let a = 0;
    function getId() {
      a = a + 1
      return a
    }

    function makeACEntity(a: Obstacle): AcNotification {
      return {
        id: String(getId()),
        actionType: ActionType.ADD_UPDATE,
        entity: {
          position: Cesium.Cartesian3.fromDegrees(
            a["longitude"], a["latitude"]
          ),
          radius: a["radius"],
          height: a["height"]
        }
      };
    }

    this.circles$ = this.obstaclesService.get_obstacles().pipe(
      flatMap(points => points.map(point => makeACEntity(point))
      )
    );
  }

  removeAll() {
    this.layer.removeAll();
  }

  setShow($event: boolean) {
    this.show = $event;
  }
}
