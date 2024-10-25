import { TestBed } from '@angular/core/testing';

import { KnygosService } from './knygos.service';

describe('KnygosService', () => {
  let service: KnygosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnygosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
