import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RepositorioService {

  recebeNomecompleto: string;
  public urlApiRepo = 'https://api.github.com/users/';
  nomeSource = new BehaviorSubject<string>(this.recebeNomecompleto);

  constructor(private http: Http) { }

  getRepositorio(usuario) {
    return this.http.get(this.urlApiRepo + usuario + '/repos').map(data => data.json());
  }

  getNomeCompleto(nomeCompleto) {
    this.recebeNomecompleto = nomeCompleto;
    this.nomeSource.next(this.recebeNomecompleto);
  }
}
