import { Component, OnInit, Input } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion';

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

  activeLink = '';

  handleClick(link) {
    this.activeLink = link;
  }
  constructor() {}
   
  ngOnInit() {}
  
}