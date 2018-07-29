import { TestBed, inject } from '@angular/core/testing';

import { CheckedServiceService } from './checked-service.service';

describe('CheckedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckedServiceService]
    });
  });

  it('should be created', inject([CheckedServiceService], (service: CheckedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
