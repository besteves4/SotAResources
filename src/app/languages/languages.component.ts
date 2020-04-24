import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LanguagesDescriptionModalComponent } from '../languages-description-modal/languages-description-modal.component';
import { element } from 'protractor';

@Component({
    selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})

export class LanguagesComponent implements OnInit {

    activeJob: any;
    @ViewChild('languagesDescriptionModal', {static: false}) languagesDescriptionModal;

    constructor() { }

    ngOnInit() { }
    
    handleClick(ppl) {
        this.activeJob = ppl;
        this.languagesDescriptionModal.show()
    }

    faPlusSquare = faPlusSquare;

    languages = {
        title: 'Relevant privacy-related policy languages',
        columns: [
            'Language',
            'Name',
            'Description',
            'Resources',
            'Documentation',
            'Examples',
            'Diagrams'
        ],
        privacyPolicy: [
            {
                id: 'P3P',
                name: 'Platform for Privacy Preferences',
                description: 'Specification for websites to disclose privacy protocols that can be automatically read and interpreted by user agents',
                w3cStatus: 'W3C Obsolete Recommendation',
                authors: {
                    name: 'W3C P3P Specification Working Group',
                    link: 'https://www.w3.org/P3P/'
                },
                summary: [],
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
                idiom: {
                    imageSrc: '../../assets/uk_flag.png',
                    lang: 'en'
                },
                rdf: [
                    {
                        type: 'RDF',
                        link: 'https://www.w3.org/TR/p3p-rdfschema/p3p-rdf-schema.xml'
                    },
                    {
                        type: 'DTD',
                        link: 'https://www.w3.org/2002/01/P3Pv1.dtd'
                    },
                    {
                        type: ' XML',
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
                        link: ''
                    },
                    {
                        type: 'use-case',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: 'legal-basis',
                        link: ''
                    },
                    {
                        type: 'purposes',
                        link: ''
                    }
                ]
            },
            {
                id: 'ODRL',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: 'XML',
                        link: ''
                    },
                    {
                        type: 'DATA-STRUCT XML',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: 'HTML',
                        link: ''
                    },
                    {
                        type: 'DOC',
                        link: '#'
                    }
                ],
                examples: [
                    {
                        type: 'sample',
                        link: ''
                    },
                    {
                        type: 'use-case',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: 'legal-basis',
                        link: ''
                    },
                    {
                        type: 'purposes',
                        link: ''
                    }
                ]
            },
            {
                id: 'XPref',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            },
            {
                id: 'SecPAL4P',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            },
            {
                id: 'AIR',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            },
            {
                id: 'POL',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            },
            {
                id: 'P2U',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            },
            {
                id: 'A-PPL',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            },
            {
                id: 'DPF',
                name: '',
                description: '',
                creation: '',
                lastUpdate: '',
                idiom: '',
                rdf: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '',
                        link: ''
                    }
                ]
            }
        ]
    }
}
