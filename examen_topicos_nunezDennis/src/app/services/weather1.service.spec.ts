import { TestBed } from '@angular/core/testing';

import { Weather1Service } from './weather1.service';

describe('Weather1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Weather1Service = TestBed.get(Weather1Service);
    expect(service).toBeTruthy();
  });
});
