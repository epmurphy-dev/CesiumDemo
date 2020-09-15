import { TestBed } from '@angular/core/testing';

import { FlightZoneBoundaryService } from './flight-zone-boundary.service';

describe('FlightZoneBoundaryService', () => {
  let service: FlightZoneBoundaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightZoneBoundaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
