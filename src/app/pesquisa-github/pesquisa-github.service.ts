import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PesquisaGithubService {

  public urlApi = 'https://api.github.com/users/'

  constructor(private http: Http) {
    console.log('Serviço de busca Challenge-concrete está ativo..');
  }

  getUsuario(usuario) {
    return this.http.get(this.urlApi + usuario).map(data => data.json());
  }

}
