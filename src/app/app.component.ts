import { Component } from '@angular/core';
import { PesquisaGithubComponent } from './pesquisa-github/pesquisa-github.component';

import { PesquisaGithubService } from './pesquisa-github/pesquisa-github.service';
import { HttpModule } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PesquisaGithubService, HttpModule]
})
export class AppComponent {
  title = 'app';
}
