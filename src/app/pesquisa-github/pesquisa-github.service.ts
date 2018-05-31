import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import { PesquisaGithubComponent } from './pesquisa-github.component';

@Injectable()
export class PesquisaGithubService {

  public pesquisas: PesquisaGithubComponent;

  constructor(private http: Http) {
    console.log('Serviço de busca Challenge-concrete está ativo..');
  }

  getUsuario() {
    return this.http.get('https://api.github.com/users/' + this.pesquisas.perfis.nome)
      .subscribe((res) => {
        console.log(res.json())

      })
  }
}
