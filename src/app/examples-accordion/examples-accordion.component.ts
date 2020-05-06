import { Component, OnInit, Input } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

// such override allows to keep some initial values
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
}

@Component({
  selector: 'app-examples-accordion',
  templateUrl: './examples-accordion.component.html',
  styleUrls: ['./examples-accordion.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})

export class ExamplesAccordionComponent implements OnInit {

  @Input() ppl;

  activeId = '';
  handleRDF(id, rdf) {
    this.activeId = id;
    this.loadRDF(rdf)
  }
  handleXML(id, xml) {
    this.activeId = id;
    this.loadXML(xml)
  }

  public rdfItems = [];
  loadRDF(rdf) {
    console.log(rdf)
    this._http.get(rdf,  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      })
      .subscribe((data) => {  
        this.rdfItems = data.split('<rdf:RDF')[1].split('</rdf:RDF>')[0].split('\n');
      });
  }

  public xmlItems = [];
  loadXML(xml) {
    console.log(xml)
    this._http.get(xml,  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      })
      .subscribe((data) => {  
        this.xmlItems = data.split('\n');
      });
  }

  ngOnInit() {}

  constructor(private _http: HttpClient) {}  
  
}