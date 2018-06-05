import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { RepositorioService } from '../repositorio/repositorio.service';
import { DetalheRepositorioService } from './detalhe-repositorio.service';

@Component({
  selector: 'app-detalhe-repositorio',
  templateUrl: './detalhe-repositorio.component.html',
  styleUrls: ['./detalhe-repositorio.component.css']
})
export class DetalheRepositorioComponent implements OnInit {
  detalheService: DetalheRepositorioService;
  detalhesRepositorio: any;
  nomeRepositorio: string;


  constructor(http: Http) {
    this.detalheService = new DetalheRepositorioService(http);
  }

  ngOnInit() {

  }

}
