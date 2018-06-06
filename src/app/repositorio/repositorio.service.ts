import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RepositorioService {

  recebeDetalhe: any;
  DetalheSource = new BehaviorSubject<any>(this.recebeDetalhe);
  public urlApiRepo = 'https://api.github.com/users/';
  public urlApiDetalhe = 'https://api.github.com/repos/';

  constructor(private http: Http) { }

  getRepositorio(usuario) {
    return this.http.get(this.urlApiRepo + usuario + '/repos').map(data => data.json());
  }
  getDetalhe(todosDetalhes) {
    this.recebeDetalhe = todosDetalhes;
    this.DetalheSource.next(this.recebeDetalhe);
  }
  getDetailsPerRepositoryName(nomeCompleto) {
    return this.http.get(this.urlApiDetalhe + nomeCompleto).map(data => data.json());
  }
}
