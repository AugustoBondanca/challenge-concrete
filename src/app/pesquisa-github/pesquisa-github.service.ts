import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PesquisaGithubService {

  recebeUsuario: string;
  public urlApi = 'https://api.github.com/users/'
  private usuarioSource = new BehaviorSubject<string>(this.recebeUsuario);


  constructor(private http: Http) {
    console.log('Serviço de busca Challenge-concrete está ativo..');
  }

  getUsuario(usuario) {
    this.recebeUsuario = usuario;
    this.usuarioSource.next(this.recebeUsuario);
    return this.http.get(this.urlApi + usuario).map(data => data.json());
  }

}
