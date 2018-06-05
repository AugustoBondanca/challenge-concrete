import { Component, OnInit } from '@angular/core';
import { Perfil } from './perfil';
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

  perfis: Perfil
  validaPerfil: boolean = false;
  usuario: string;



  constructor(private http: Http, private pesquisaGithubService: PesquisaGithubService) {
    this.perfis = new Perfil;
  }

  public buscarUsuario() {

    this.pesquisaGithubService.getUsuario(this.usuario).subscribe(data => {
      console.log('user returned of service', data);

      this.perfis.nome = data.name;
      this.perfis.bio = data.bio;
      this.perfis.email = data.email;
      this.perfis.seguindo = data.following;
      this.perfis.seguidores = data.followers;
      this.perfis.imagemPerfil = data.avatar_url;
      this.perfis.repositorios = data.public_repos;
      this.validaPerfil = true;
    })

  }

}

