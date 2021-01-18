import { TestBed } from '@angular/core/testing';

import { ServiceAuthentificationService } from './service-authentification.service';

describe('ServiceAuthentificationService', () => {
  let service: ServiceAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
