import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { RepositorioService } from '../repositorio/repositorio.service';
import { DetalheRepositorioService } from './detalhe-repositorio.service';
import { RepositorioComponent } from '../repositorio/repositorio.component';

@Component({
  selector: 'app-detalhe-repositorio',
  templateUrl: './detalhe-repositorio.component.html',
  styleUrls: ['./detalhe-repositorio.component.css'],
  providers: [DetalheRepositorioService]
})
export class DetalheRepositorioComponent implements OnInit {


  nomeCompleto: string;
  dadosDetalhe: string;

  constructor(
    private http: Http,
    private detalheService: DetalheRepositorioService,
    private repositorioService: RepositorioService) {

    this.repositorioService.onGetData.subscribe((data) => {
      this.dadosDetalhe = data;
      console.log(this.dadosDetalhe);
    })
  }

  ngOnInit() {
  }

}
