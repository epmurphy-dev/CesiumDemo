export enum PoiType {
    WAYPOINT = "Waypoint",
    OFFAXIS = "Off Axis",
    EMERGENT = "Emergent",
    OBSTACLE = "Obstacle",
    AIRDROP = "Airdrop",
    UGVDRIVE = "Ugv Drive",
    LOST_COMMS = "Lost Comms Position",
}

export class Poi {
    constructor(public latitude: number, public longitude: number, public altitude: number) { }
}