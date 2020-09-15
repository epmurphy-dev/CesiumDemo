from flask import Flask, json, Response, send_from_directory
import time
from fake_telem import FakeTelem

json_path = "mission_data.json"
base = "/api"

api = Flask(__name__)
with open(json_path) as json_file:
    mission_data = json.load(json_file)

@api.route('/<path:path>', methods=['GET'])
def static_proxy(path):
  return send_from_directory('../dist/', path)

@api.route('/')
def root():
  return send_from_directory('../dist/', 'index.html')

waypoints = mission_data["waypoints"]
velocity = 150
dt = 0.1
ft = FakeTelem(waypoints, velocity, dt)
ft.calc_route()
telem = ft.get_route_tuple()

@api.route(base+'/pos', methods=["GET"])
def get_uav_pos():
    def generate():
        for r in telem:
            yield json.dumps({
                "latitude": r[0],
                "longitude": r[1],
                "altitude": r[2],
                })
            time.sleep(dt)
    return Response(generate(), mimetype="application/json")

@api.route(base+'/lostCommsPos', methods=["GET"])
def get_lostCommsPos():
    return json.dumps(mission_data['lostCommsPos'])

@api.route(base+'/flyZones', methods=["GET"])
def get_flyZones():
    return json.dumps(mission_data['flyZones'])

@api.route(base+'/waypoints', methods=["GET"])
def get_waypoints():
    return json.dumps(mission_data['waypoints'])

@api.route(base+'/autogenPoints', methods=["GET"])
def get_autogen_points():
    return json.dumps(mission_data['autogenPoints'])

@api.route(base+'/searchGridPoints', methods=["GET"])
def get_searchGridPoints():
    return json.dumps(mission_data['searchGridPoints'])

@api.route(base+'/offAxisOdlcPos', methods=["GET"])
def get_offAxisOdlcPos():
    return json.dumps(mission_data['offAxisOdlcPos'])

@api.route(base+'/emergentLastKnownPos', methods=["GET"])
def get_emergentLastKnownPos():
    return json.dumps(mission_data['emergentLastKnownPos'])

@api.route(base+'/airDropPos', methods=["GET"])
def get_airDropPos():
    return json.dumps(mission_data['airDropPos'])

@api.route(base+'/ugvDrivePos', methods=["GET"])
def get_ugvDrivePos():
    return json.dumps(mission_data["ugvDrivePos"])

@api.route(base+'/stationaryObstacles', methods=["GET"])
def get_stationaryObstacles():
    return json.dumps(mission_data["stationaryObstacles"])

@api.route(base+'/mapCenterPos', methods=["GET"])
def get_mapCenterPos():
    return json.dumps(mission_data["mapCenterPos"])

@api.route(base+'/mapHeight', methods=["GET"])
def get_mapHeight():
    return json.dumps(mission_data["mapHeight"])

if __name__ == '__main__':
    api.run()
