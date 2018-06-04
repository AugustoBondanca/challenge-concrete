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
  getUsuario: string = 'https://api.github.com/users/'
  validaPerfil: boolean = false;
  usuario: string;



  constructor(private http: Http) {
    this.perfis = new Perfil;
  }

  public buscarUsuario() {
    let url = this.getUsuario + this.usuario;

    this.http.get(url).subscribe((res) => {
      console.log(res.json())
      this.perfis.nome = res.json().name;
      this.perfis.bio = res.json().bio;
      this.perfis.email = res.json().email;
      this.perfis.seguindo = res.json().following;
      this.perfis.seguidores = res.json().followers;
      this.perfis.imagemPerfil = res.json().avatar_url;
      this.perfis.repositorios = res.json().public_repos;
      this.validaPerfil = true;
      console.log(this.perfis)


    });
  }

}

