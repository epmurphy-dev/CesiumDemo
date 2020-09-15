import { Injectable } from '@angular/core';
import { from, interval } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataProviderService {
  private raw_obstacles;
  private obstacles = [];

  constructor() {
    this.obstacles = [];

    this.raw_obstacles = [{
      "latitude": 38.146689,
      "longitude": -76.426475,
      "radius": 150.0,
      "height": 750.0
    },
    {
      "latitude": 38.142914,
      "longitude": -76.430297,
      "radius": 300.0,
      "height": 300.0
    },
    {
      "latitude": 38.149504,
      "longitude": -76.43311,
      "radius": 100.0,
      "height": 750.0
    },
    {
      "latitude": 38.148711,
      "longitude": -76.429061,
      "radius": 300.0,
      "height": 750.0
    },
    {
      "latitude": 38.144203,
      "longitude": -76.426155,
      "radius": 50.0,
      "height": 400.0
    },
    {
      "latitude": 38.146003,
      "longitude": -76.430733,
      "radius": 225.0,
      "height": 500.0
    }
    ];

    for (var obstacle_index in this.raw_obstacles){
      let current_obstacle = this.raw_obstacles[obstacle_index];
      this.obstacles[obstacle_index] = {
        id: obstacle_index,
        position: Cesium.Cartesian3.fromDegrees(
          current_obstacle["longitude"], current_obstacle["latitude"]
        ),
        radius: current_obstacle["radius"],
        height: current_obstacle["height"],
      }
    }
  }

  getDataSteam$() {
    return from(this.obstacles);
  }
}
