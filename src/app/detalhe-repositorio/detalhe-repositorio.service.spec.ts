import { TestBed, inject } from '@angular/core/testing';

import { DetalheRepositorioService } from './detalhe-repositorio.service';

describe('DetalheRepositorioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalheRepositorioService]
    });
  });

  it('should be created', inject([DetalheRepositorioService], (service: DetalheRepositorioService) => {
    expect(service).toBeTruthy();
  }));
});
