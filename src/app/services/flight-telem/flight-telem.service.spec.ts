import { TestBed } from '@angular/core/testing';

import { FlightTelemService } from './flight-telem.service';

describe('FlightTelemService', () => {
  let service: FlightTelemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightTelemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
