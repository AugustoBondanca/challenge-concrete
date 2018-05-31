import { TestBed, inject } from '@angular/core/testing';

import { PesquisaGithubService } from './pesquisa-github.service';

describe('PesquisaGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaGithubService]
    });
  });

  it('should be created', inject([PesquisaGithubService], (service: PesquisaGithubService) => {
    expect(service).toBeTruthy();
  }));
});
