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
            'Idiom',
            'RDF',
            'Documentation',
            'Examples',
            'Diagrams'
        ],
        privacyPolicy: [
            {
                id: 'P3P',
                name: 'Platform for Privacy Preferences',
                description: 'Lorem ipsum dolor sit amet, consectetur ut incididunt ut labore et dolore magna aliqua. ',
                created: '',
                lastUpdated: '',
                idiom: {
                    imageSrc: '../../assets/uk_flag.png',
                    lang: 'en'
                },
                rdf: [
                    {
                        type: 'xml',
                        link: ''
                    },
                    {
                        type: 'rdf',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: 'html',
                        link: '#'
                    },
                    {
                        type: 'doc',
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
                id: 'ODRL',
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
