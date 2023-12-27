import { TestBed } from '@angular/core/testing';

import { MensHoodiesService } from './mens-hoodies.service';

describe('MensHoodiesService', () => {
  let service: MensHoodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensHoodiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
