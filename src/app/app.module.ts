import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { OntologiesComponent } from './ontologies/ontologies.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { DividerPipe } from './pipes/divider.pipe';
import { OrderByPositionPipe } from './pipes/order-by-position.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        LanguagesComponent,
        OntologiesComponent,
        DividerPipe,
        OrderByPositionPipe
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}