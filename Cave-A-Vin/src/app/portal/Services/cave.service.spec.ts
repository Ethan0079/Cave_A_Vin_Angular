import { TestBed } from '@angular/core/testing';

import { CaveService } from './cave.service';

describe('CaveService', () => {
  let service: CaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
