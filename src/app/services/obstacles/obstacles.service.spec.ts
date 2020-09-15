import { TestBed } from '@angular/core/testing';

import { ObstaclesService } from './obstacles.service';

describe('ObstaclesService', () => {
  let service: ObstaclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObstaclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
