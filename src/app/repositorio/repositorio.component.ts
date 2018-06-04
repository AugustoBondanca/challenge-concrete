import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http'
import { DetalheRepositorio } from './detalhe-repositorio';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  apiRepositorios: string = 'https://api.github.com/users/AugustoBondanca/repos';
  apiDetalhes: string = 'https://api.github.com/repos/'

  detalhesRepositorio: DetalheRepositorio;
  repositorios = [];
  nomeRepositorio: string;

  constructor(private http: Http) {
    this.detalhesRepositorio = new DetalheRepositorio;

  }

  ngOnInit() {
    let url = this.apiRepositorios;


    this.http.get(url).subscribe((res) => {
      console.log(res.json())
      this.repositorios = res.json();


    });

  }

  detalhes(nomeRepositorio) {
    let url = this.apiDetalhes + nomeRepositorio;

    this.http.get(url).subscribe((res) => {
      console.log(res.json())
    })
  }

}
