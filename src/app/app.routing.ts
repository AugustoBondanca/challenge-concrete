import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositorioComponent } from './repositorio/repositorio.component';
import { PesquisaGithubComponent } from './pesquisa-github/pesquisa-github.component';
import { DetalheRepositorioComponent } from './detalhe-repositorio/detalhe-repositorio.component';



const APP_ROUTES: Routes = [

    { path: '', component: PesquisaGithubComponent },
    { path: 'pesquisa', component: PesquisaGithubComponent },
    { path: 'repositorios', component: RepositorioComponent },
    { path: 'detalhes', component: DetalheRepositorioComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);