import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';

import { PesquisaGithubService } from './pesquisa-github.service';
import { BoundCallbackObservable } from 'rxjs/observable/BoundCallbackObservable';

@Component({
  selector: 'app-pesquisa-github',
  templateUrl: './pesquisa-github.component.html',
  styleUrls: ['./pesquisa-github.component.css']
})

export class PesquisaGithubComponent {

  validaPerfil: boolean = false;
  usuario: string;
  recebePerfil = [];



  constructor(private http: Http, private pesquisaGithubService: PesquisaGithubService) {
  }

  public buscarUsuario() {

    this.pesquisaGithubService.getUsuario(this.usuario).subscribe(data => {
      console.log('user returned of service', data);

      this.recebePerfil = data;
      this.validaPerfil = true;
    })

  }

}

