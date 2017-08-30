import { TestBed, inject } from '@angular/core/testing';

import { BreedService } from './breed.service';

describe('BreedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreedService]
    });
  });

  it('should ...', inject([BreedService], (service: BreedService) => {
    expect(service).toBeTruthy();
  }));
});
