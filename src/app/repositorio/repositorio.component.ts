import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { DetalheRepositorioComponent } from '../detalhe-repositorio/detalhe-repositorio.component';

import { PesquisaGithubService } from '../pesquisa-github/pesquisa-github.service';
import { RepositorioService } from './repositorio.service';
import { DetalheRepositorioService } from '../detalhe-repositorio/detalhe-repositorio.service';

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
  detalheComponent: DetalheRepositorioComponent;
  detalheService: DetalheRepositorioService;

  constructor(
    private http: Http,
    private pesquisaService: PesquisaGithubService,
  ) {

    this.repositorioService = new RepositorioService(http);
    this.detalheComponent = new DetalheRepositorioComponent(http);
    this.detalheService = new DetalheRepositorioService(http);
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
    //aqui eu preciso enviar o valor do nomecompleto para o detalhe-repositorio.component.ts, 
    //so deve chamar a api no detalherepositorio.component.ts
  }
}
