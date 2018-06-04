import { TestBed, inject } from '@angular/core/testing';

import { RepositorioService } from './repositorio.service';

describe('RepositorioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositorioService]
    });
  });

  it('should be created', inject([RepositorioService], (service: RepositorioService) => {
    expect(service).toBeTruthy();
  }));
});
