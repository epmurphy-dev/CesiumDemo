import { TestBed } from '@angular/core/testing';

import { SearchGridBoundaryService } from './search-grid-boundary.service';

describe('SearchGridBoundaryService', () => {
  let service: SearchGridBoundaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGridBoundaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
