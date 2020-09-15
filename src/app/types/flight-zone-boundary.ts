import { BoundaryPoint } from './boundary-point'

export class FlightZoneBoundary{
    constructor(
        public altitudeMax: number,
        public altitudeMin: number,
        public boundaryPoints: BoundaryPoint[],
        ) {}
}