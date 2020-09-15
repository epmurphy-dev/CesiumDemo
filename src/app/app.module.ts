import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCesiumModule, ViewerConfiguration, CameraService } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { PolygonLayerExampleComponent } from './polygon-layer-example/polygon-layer-example.component';
import { CircleLayerExampleComponent } from './circle-layer-example/circle-layer-example.component';
import { KeyboardControlLayerComponent } from './keyboard-control-layer/keyboard-control-layer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { WaypointsComponent } from './waypoints/waypoints.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CameraTwodComponent } from './camera-twod/camera-twod.component';
import { PathLinesComponent } from './path-lines/path-lines.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PolygonLayerExampleComponent,
    CircleLayerExampleComponent,
    KeyboardControlLayerComponent,
    WaypointsComponent,
    CameraTwodComponent,
    PathLinesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
