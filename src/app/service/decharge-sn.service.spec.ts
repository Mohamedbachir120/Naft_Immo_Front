import { TestBed } from '@angular/core/testing';

import { DechargeSnService } from './decharge-sn.service';

describe('DechargeSnService', () => {
  let service: DechargeSnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DechargeSnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
