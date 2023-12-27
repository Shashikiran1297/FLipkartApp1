import { TestBed } from '@angular/core/testing';

import { MensJeansService } from './mens-jeans.service';

describe('MensJeansService', () => {
  let service: MensJeansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensJeansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
