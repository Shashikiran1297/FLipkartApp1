import { TestBed } from '@angular/core/testing';

import { MensShirtService } from './mens-shirt.service';

describe('MensShirtService', () => {
  let service: MensShirtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensShirtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
