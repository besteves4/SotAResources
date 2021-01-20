import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { OntologiesComponent } from './ontologies/ontologies.component';
import { SearcherComponent } from './searcher/searcher.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'languages',
        component: LanguagesComponent
    },
    {
        path: 'ontologies',
        component: OntologiesComponent
    },
    {
        path: 'searcher',
        component: SearcherComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
}) export class AppRoutingModule {}