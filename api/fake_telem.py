import numpy as np
import json
import time
from pygeodesy.ecef import EcefCartesian
from pygeodesy.ellipsoidalVincenty import LatLon
from pygeodesy import Vector3d

class FakeTelem():
    def __init__(self, waypoints, velocity, dt):
        self.raw_waypoints = waypoints
        self.conv = EcefCartesian()
        self.current_location_gd = {
            "latitude": self.raw_waypoints[0]["latitude"],
            "longitude": self.raw_waypoints[0]["longitude"],
            "altitude": self.raw_waypoints[0]["altitude"],
        }
        self.planeLatLon = LatLon(
            self.current_location_gd["latitude"],
            self.current_location_gd["longitude"],
            self.current_location_gd["altitude"]
        )
        self.plane_cartesian = self.conv.forward(self.planeLatLon).toVector(Vector=Vector3d)
        self.waypointsLatLon = [
            LatLon(
                waypoint["latitude"],
                waypoint["longitude"],
                waypoint["altitude"]
                ) for waypoint in waypoints
            ]
        self.waypoints_cartesian = [
            self.conv.forward(waypoint).toVector(Vector=Vector3d) for waypoint in self.waypointsLatLon
        ]
        self.velocity = velocity
        self.dt = dt
        self.d_covered = self.velocity*self.dt
        self.route = []
        self.route_tuple = []

    def get_start_loc(self):
        return(self.waypointsLatLon[0])

    def get_end_loc(self):
        return(self.waypointsLatLon[len(self.waypointsLatLon)-1])

    def get_plane_loc_xyz(self):
        return self.plane_cartesian

    def get_plane_loc_gd(self):
        return self

    def get_dir_cartesian(self, next: Vector3d):
        return (next.__sub__(self.plane_cartesian).unit())

    def step(self, next):
        dir = self.get_dir_cartesian(next)
        self.plane_cartesian = self.plane_cartesian.__radd__(
            dir.times(self.dt*self.velocity)
        )
        self.planeLatLon = self.conv.reverse(self.plane_cartesian.xyz).toLatLon(LatLon=LatLon)

    def find_needed_steps(self, next: Vector3d) -> int:
        self.d_covered = self.velocity*self.dt
        steps_needed = int((next-self.plane_cartesian).length/self.d_covered)
        return steps_needed
        
    def move_between_wp(self, next: Vector3d):
        needed_steps = self.find_needed_steps(next)
        for __ in range(needed_steps):
            self.step(next)
            self.route.append(self.planeLatLon)
        self.plane_cartesian = next
        self.planeLatLon = self.conv.reverse(self.plane_cartesian.xyz).toLatLon(LatLon=LatLon)
        self.route.append(self.planeLatLon)

    def calc_route(self):
        for waypoint in self.waypoints_cartesian[1:]:
            self.move_between_wp(waypoint)

    def get_route(self):
        return self.route

    def get_route_tuple(self):
        return [
            (r.latlonheight.lat, r.latlonheight.lon, r.latlonheight.height)
            for r in self.route
        ]

if __name__ == "__main__":
    with open("mission_data.json") as json_file:
        mission_data = json.load(json_file)
    waypoints = mission_data["waypoints"]
    velocity = 70
    dt = 0.1
    telemTest = FakeTelem(waypoints, velocity, dt)
    telemTest.calc_route()
    route = telemTest.get_route_tuple()
    print(route)