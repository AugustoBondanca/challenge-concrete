import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositorioComponent } from './repositorio/repositorio.component';
import { PesquisaGithubComponent } from './pesquisa-github/pesquisa-github.component';



const APP_ROUTES: Routes = [

    { path: '', component: PesquisaGithubComponent },
    { path: 'pesquisa', component: PesquisaGithubComponent },
    { path: 'repositorios', component: RepositorioComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);