import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { PesquisaGithubService } from '../pesquisa-github/pesquisa-github.service';
import { RepositorioService } from './repositorio.service';
import { DetalheRepositorioComponent } from '../detalhe-repositorio/detalhe-repositorio.component';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  usuario: string;
  repositorios = [];
  nomeCompleto: string;
  repositorioService: RepositorioService;
  detalheComponent: DetalheRepositorioComponent

  constructor(private http: Http, private pesquisaService: PesquisaGithubService) {
    this.repositorioService = new RepositorioService(http);
    this.detalheComponent = new DetalheRepositorioComponent();
  }

  ngOnInit() {
    this.usuario = this.pesquisaService.recebeUsuario;
    this.repositorioService.getRepositorio(this.usuario).subscribe(data => {
      console.log('repositories returned of service', data)
      this.repositorios = data;
    });
  }
  escolheRepositorio(nomeCompleto) {
    this.nomeCompleto = nomeCompleto;
    // this.repositorioService.getNomeCompleto(this.nomeCompleto);
  }
}
