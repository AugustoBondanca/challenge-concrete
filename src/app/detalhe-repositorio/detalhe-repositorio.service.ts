import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DetalheRepositorioService {

  public urlApi = 'https://api.github.com/repos/';


  constructor(private http: Http) { }

  getDetailsPerRepositoryName(nomeCompleto) {
    return this.http.get(this.urlApi + nomeCompleto).map(data => {
      console.log(data.json());
    })
  }
}
