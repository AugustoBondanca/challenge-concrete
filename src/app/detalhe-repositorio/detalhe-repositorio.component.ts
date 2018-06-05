import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { RepositorioService } from '../repositorio/repositorio.service';

@Component({
  selector: 'app-detalhe-repositorio',
  templateUrl: './detalhe-repositorio.component.html',
  styleUrls: ['./detalhe-repositorio.component.css']
})
export class DetalheRepositorioComponent implements OnInit {

  apiUrl = 'https://api.github.com/repos/'
  nomeCompleto: string;

  constructor() { }

  ngOnInit() {

  }

}
