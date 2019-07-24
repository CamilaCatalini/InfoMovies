import { TestBed } from '@angular/core/testing';

import { ImdbApiService } from './imdb-api.service';

describe('ImdbApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImdbApiService = TestBed.get(ImdbApiService);
    expect(service).toBeTruthy();
  });
});
