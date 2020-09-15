import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { KeyboardAction, KeyboardControlService} from 'angular-cesium';

@Component({
  selector: 'keyboard-control-layer',
  template: '',
})
export class KeyboardControlLayerComponent implements OnInit, OnDestroy {
  constructor(private keyboardControlService: KeyboardControlService) {}

  ngOnInit() {
    this.keyboardControlService.setKeyboardControls({
      W: { action: KeyboardAction.CAMERA_FORWARD },
      S: { action: KeyboardAction.CAMERA_BACKWARD },
      D: { action: KeyboardAction.CAMERA_RIGHT },
      A: { action: KeyboardAction.CAMERA_LEFT },
    });
   }

  ngOnDestroy() {
    this.keyboardControlService.removeKeyboardControls();
  }
}
