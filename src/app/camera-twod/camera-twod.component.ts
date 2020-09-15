import { Component, OnInit } from '@angular/core';
import { CameraService } from 'angular-cesium';
import { SceneMode } from 'angular-cesium';

@Component({
  selector: 'app-camera-twod',
  templateUrl: './camera-twod.component.html',
  styleUrls: ['./camera-twod.component.css']
})
export class CameraTwodComponent implements OnInit {

  constructor( private cameraService: CameraService) {}

  ngOnInit(): void {
    this.cameraService.setSceneMode(SceneMode.SCENE3D);
  }

  set2D(): void {
    this.cameraService.setSceneMode(SceneMode.SCENE2D);
  }
  
  set3D(): void { 
    this.cameraService.setSceneMode(SceneMode.SCENE3D);
  }

}
