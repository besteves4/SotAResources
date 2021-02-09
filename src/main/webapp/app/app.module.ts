import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { DescriptionModalComponent } from './description-modal/description-modal.component';
import { DiagramModalComponent } from './diagram-modal/diagram-modal.component';
import { ExamplesAccordionComponent } from './examples-accordion/examples-accordion.component';
import { OntologiesComponent } from './ontologies/ontologies.component';
import { SearcherComponent } from './searcher/searcher.component';
import { GDPRifComponent } from './gdprif/gdprif.component';
import { RightsListComponent } from './rights-list/rights-list.component';
import { RightsPreviewComponent } from './rights-preview/rights-preview.component';
import { ObligationsListComponent } from './obligations-list/obligations-list.component';
import { ObligationsPreviewComponent } from './obligations-preview/obligations-preview.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { DividerPipe } from './pipes/divider.pipe';
import { OrderByPositionPipe } from './pipes/order-by-position.pipe';
import { StartsWithPipe } from './pipes/starts-with.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        LanguagesComponent,
        DescriptionModalComponent,
        DiagramModalComponent,
        ExamplesAccordionComponent,
        OntologiesComponent,
        SearcherComponent,
        GDPRifComponent,
        RightsListComponent,
        RightsPreviewComponent,
        ObligationsListComponent,
        ObligationsPreviewComponent,
        DividerPipe,
        OrderByPositionPipe,
        StartsWithPipe
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        AccordionModule.forRoot()
    ],
    entryComponents: [
        DescriptionModalComponent,
        DiagramModalComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}