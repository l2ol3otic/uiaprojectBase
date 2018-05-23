import { TestBed, inject } from '@angular/core/testing';

import { DataprocessingService } from './dataprocessing.service';

describe('DataprocessingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataprocessingService]
    });
  });

  it('should be created', inject([DataprocessingService], (service: DataprocessingService) => {
    expect(service).toBeTruthy();
  }));
});
