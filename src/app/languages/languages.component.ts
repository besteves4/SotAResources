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

    table = {
        caption: 'Relevant privacy-related policy languages',
        columns: [
            'Language',
            'Name',
            'Description',
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
                    title: 'Example 2.2 from the P3P specification',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    solutions: [
                        {
                            id: 1,
                            language: 'XML',
                            link: '../assets/examples/p3p/RDF_ex-2-2.xml'
                        },
                        {
                            id: 2,
                            language: 'RDF',
                            link: '../assets/examples/p3p/RDF_ex-2-2.xml'
                        }
                    ]
                },
                {
                    type: 'use-case',
                    title: '',
                    description: '',
                    solutions: [
                        {
                            id: 3,
                            language: 'RDF',
                            link: '../assets/examples/p3p/RDF_ex-2-2.xml'
                        },
                        {
                            id: 4,
                            language: 'XML',
                            link: '../assets/examples/p3p/RDF_ex-2-2.xml'
                        }
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'legal-basis',
                    imageSrc: '../../assets/uk_flag.png'
                },
                {
                    type: 'purposes',
                    imageSrc: '../../assets/uk_flag.png'
                }
            ]
        },
        {}
    ]
}
