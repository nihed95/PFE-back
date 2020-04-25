import { TestBed } from '@angular/core/testing';

import { GammeServiceService } from './gamme-service.service';

describe('GammeServiceService', () => {
  let service: GammeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GammeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
