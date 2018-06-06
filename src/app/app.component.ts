import { Component } from '@angular/core';
import { PesquisaGithubComponent } from './pesquisa-github/pesquisa-github.component';

import { PesquisaGithubService } from './pesquisa-github/pesquisa-github.service';
import { HttpModule } from '@angular/http'
import { DetalheRepositorioService } from './detalhe-repositorio/detalhe-repositorio.service';
import { RepositorioService } from './repositorio/repositorio.service';
import { RepositorioComponent } from './repositorio/repositorio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    PesquisaGithubService,
    DetalheRepositorioService,
    RepositorioService,
    HttpModule,
    PesquisaGithubComponent,
    RepositorioComponent]
})
export class AppComponent {
  title = 'app';
}
