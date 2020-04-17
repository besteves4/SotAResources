import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})

export class LanguagesComponent implements OnInit {
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
                name: '...',
                description: '...',
                creation: '...',
                lastUpdate: '...',
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

  constructor() { }

  ngOnInit() {
  }

}
