import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';
import { DiagramModalComponent } from '../diagram-modal/diagram-modal.component';
import { element } from 'protractor';

@Component({
  selector: 'app-ontologies',
  templateUrl: './ontologies.component.html',
  styleUrls: ['./ontologies.component.css']
})
export class OntologiesComponent implements OnInit {

  activeJob: any;
  @ViewChild('descriptionModal', {static: false}) descriptionModal;

  activeDiag: any;
  @ViewChild('diagramModal', {static: false}) diagramModal;

  constructor() { }

  ngOnInit() { }
  
  handleClick(ppl) {
      this.activeJob = ppl;
      this.descriptionModal.show();
  }

  handleClickDiag(diag) {
      this.activeDiag = diag;
      this.diagramModal.show();
  }

  table = {
      caption: 'Relevant privacy-related policy languages',
      columns: [
          'Language',
          'Name',
          'Description',
          'Domain',
          'Resources',
          'Documentation',
          'Diagrams'
      ]
  }

  privacyPolicyLanguages = [
    {
        id: 'P3P',
        name: 'Platform for Privacy Preferences',
        description: 'Specification for websites to disclose privacy protocols that can be automatically read and interpreted by user agents',
        domain: [
            {
                name: 'privacy',
                dbPedia: 'http://dbpedia.org/page/Category:Privacy'
            }
        ],
        w3cStatus: 'W3C Obsolete Recommendation',
        dates: {
            created: '1998',
            lastUpdated: '2010'
        },
        idiom: [
            {
                imageSrc: '../../assets/flags/uk_flag.png',
                lang: 'en',
                link:'https://www.w3.org/TR/P3P/'
            },
            {
                imageSrc: '../../assets/flags/Flag_of_France.svg',
                lang: 'fr',
                link: 'http://www.yoyodesign.org/doc/w3c/p3p1/index.html'
            },
            {
                imageSrc: '../../assets/flags/Flag_of_Japan.svg.png',
                lang: 'jp',
                link: 'http://www.iajapan.org/trans2japanese/w3c/rec-p3p-20020416j.html'
            }
        ],
        responsible: {
            name: 'W3C P3P Specification Working Group',
            link: 'https://www.w3.org/P3P/'
        },
        project: {
            name: '',
            link: ''
        },
        authors: [
            {
                name: 'Lorrie Cranor',
                link: 'https://lorrie.cranor.org/'
            },
            {
                name: 'Marc Langheinrich',
                link: 'https://uc.inf.usi.ch/team/langheinrich/'
            },
            {
                name: 'Massimo Marchiori',
                link: 'https://www.w3.org/People/Massimo/'
            },
            {
                name: 'Martin Presler-Marshall',
                link: 'mailto:mpresler@us.ibm.com'
            },
            {
                name: 'Joseph Reagle',
                link: 'http://reagle.org/joseph/'
            }
        ],
        elements: [
            {
                name: 'Policy',
                link: 'https://www.w3.org/TR/P3P/#POLICY'
            },
            {
                name: 'Entity',
                link: 'https://www.w3.org/TR/P3P/#ENTITY'
            },
            {
                name: 'Access',
                link: 'https://www.w3.org/TR/P3P/#ACCESS'
            },
            {
                name: 'Disputes',
                link: 'https://www.w3.org/TR/P3P/#DISPUTES'
            },
            {
                name: 'Remedies',
                link: 'https://www.w3.org/TR/P3P/#REMEDIES'
            },
            {
                name: 'Purpose',
                link: 'https://www.w3.org/TR/P3P/#PURPOSE'
            },
            {
                name: 'Recipient',
                link: 'https://www.w3.org/TR/P3P/#RECPNT'
            },
            {
                name: 'Retention',
                link: 'https://www.w3.org/TR/P3P/#RETENTION'
            },
            {
                name: 'Data',
                link: 'https://www.w3.org/TR/P3P/#DATA'
            },
            {
                name: 'Categories',
                link: 'https://www.w3.org/TR/P3P/#Categories'
            }
        ],
        resources: [
            {
                type: 'RDF',
                link: 'https://www.w3.org/TR/p3p-rdfschema/p3p-rdf-schema.xml'
            },
            {
                type: 'DTD',
                link: 'https://www.w3.org/2002/01/P3Pv1.dtd'
            },
            {
                type: 'XML',
                link: 'https://www.w3.org/2002/01/P3Pv1'
            },
            {
                type: 'DATA-STRUCT XML',
                link: 'https://www.w3.org/TR/P3P/base'
            }
        ],
        documentation: [
            {
                type: 'HTML',
                link: 'https://www.w3.org/TR/P3P/'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the P3P specification',
                description: {
                    name: 'P3P specification',
                    link: 'https://www.w3.org/TR/P3P/#ref_file_example'
                },
                solutions: [
                    {
                        exampleName: 'Example 2.2',
                        resources: [
                            {
                                language: 'XML',
                                link: '../assets/languages/p3p/examples/XML_ex-2-2.xml'
                            },
                            {
                                language: 'RDF',
                                link: '../assets/languages/p3p/examples/RDF_ex-2-2.xml'
                            }
                        ]
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'xsddiagram',
                name: 'P3P v1',
                imageSrc: '../../assets/languages/p3p/diagrams/P3Pv1.svg',
                typeSrc: 'http://regis.cosnier.free.fr/?page=XSDDiagram',
                nameSrc: 'XSD Diagram'
            }
        ]
    }
  ]

}
