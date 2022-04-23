import { TestBed } from '@angular/core/testing';

import { SnService } from './sn.service';

describe('SnService', () => {
  let service: SnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
