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
            'Creation',
            'Last Update',
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
                idiom: '...',
                rdf: [
                    {
                        type: '...',
                        link: ''
                    },
                    {
                        type: '...',
                        link: ''
                    }
                ],
                documentation: [
                    {
                        type: '...',
                        link: ''
                    },
                    {
                        type: '...',
                        link: ''
                    }
                ],
                examples: [
                    {
                        type: '...',
                        link: ''
                    },
                    {
                        type: '...',
                        link: ''
                    }
                ],
                diagrams: [
                    {
                        type: '...',
                        link: ''
                    },
                    {
                        type: '...',
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
