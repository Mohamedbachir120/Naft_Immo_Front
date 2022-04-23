import { TestBed } from '@angular/core/testing';

import { DechergeBienService } from './decherge-bien.service';

describe('DechergeBienService', () => {
  let service: DechergeBienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DechergeBienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
