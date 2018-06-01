import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PesquisaGithubComponent } from './pesquisa-github/pesquisa-github.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    PesquisaGithubComponent,
    RepositorioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
