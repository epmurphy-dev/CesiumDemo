import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AcNotification } from "angular-cesium"
import { ActionType } from "angular-cesium";
import { WaypointsComponent } from './waypoints/waypoints.component';
import { CircleLayerExampleComponent } from './circle-layer-example/circle-layer-example.component';
import { PolygonLayerExampleComponent } from './polygon-layer-example/polygon-layer-example.component';
import { CameraService } from 'angular-cesium';
import { SceneMode } from 'angular-cesium';
import { CameraTwodComponent } from './camera-twod/camera-twod.component';
import { PathLinesComponent } from './path-lines/path-lines.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cesiumDemo';
  pois$: Observable<AcNotification>;
  show_fzb = true;
  show_waypoints= true;
  show_obstacles = true;
  perspective = true;
  show_flightlines = true;
  @ViewChild('waypoints') waypoints: WaypointsComponent;
  @ViewChild('obstacles') obstacles: CircleLayerExampleComponent;
  @ViewChild('fzb') fzb: PolygonLayerExampleComponent;
  @ViewChild('perspective_controller') pc: CameraTwodComponent;
  @ViewChild('flight_lines') fl: PathLinesComponent;
  public wp;

  constructor(
    public cameraService: CameraService,
    ){}

  ngOnInit(){}

  toggle_waypoints(){
    this.waypoints.setShow(this.show_waypoints);
  }

  toggle_obstacles(){
    this.obstacles.setShow(this.show_obstacles);
  }

  toggle_fzb(){
    this.fzb.setShow(this.show_fzb);
  }

  toggle_flightlines(){
    this.fl.setShow(this.show_flightlines);
  }

  get_perspective(): string{
    if(this.perspective == true){
      return "3D";
    }
    return "2D";
  }

  toggle_perspective(): void{
    if(this.perspective == true){
      this.pc.set3D();
    }
    else {
      this.pc.set2D();
    }
  }
}


