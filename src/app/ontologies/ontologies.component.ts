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
      caption: 'Relevant data protection vocabularies and ontologies',
      columns: [
          'Ontology',
          'Name',
          'Description',
          'Legal Basis',
          'Resources',
          'Documentation',
          'Diagrams'
      ]
  }

  ontologies = [
    {
        id: 'DPKO, DPRO',
        name: 'Data Protection Knowledge Ontology, Data Protection Reasoning Ontology',
        description: 'Legal ontologies developed to represent data protection knowledge, focusing mainly on the correctness of files contaning personal data and respective security measures applied to them',
/*         domain: [
            {
                name: 'privacy',
                dbPedia: 'http://dbpedia.org/page/Category:Privacy'
            }
        ], */
        legalBasis: [
            {
                country: '../../assets/flags/Flag_of_Spain.svg.png',
                name: 'PPDR',
                link: 'https://apdcat.gencat.cat/web/.content/01-autoritat/normativa/documentos/2643.pdf'
            }
        ],
        w3cStatus: '',
        dates: {
            created: '2008',
            lastUpdated: '2010'
        },
        idiom: [
            {
                imageSrc: '../../assets/flags/uk_flag.png',
                lang: 'en',
                link:'https://ddd.uab.cat/pub/artpub/2010/137891/aaaisprsymser_a2010n1iENG.pdf'
            }
        ],
        responsible: [
            {
                name: 'Institute of Law and Technology, Universitat  Autònoma  de  Barcelona (IDT-UAB)',
                link: ''
            },
            {
                name: 'S21SEC',
                link: 'https://www.s21sec.com/'
            }
        ],
        project: {
            name: 'NEURONA project',
            link: ''
        },
        authors: [
            {
                name: 'Núria Casellas',
                link: 'https://dblp.org/pers/c/Casellas:Nuria.html'
            },
            {
                name: 'Juan-Emilio Nieto',
                link: 'https://dblp.org/pers/hd/n/Nieto:Juan=Emilio'
            },
            {
                name: 'Albert Meroño',
                link: 'https://www.albertmeronyo.org/'
            },
            {
                name: 'Antoni Roig',
                link: 'https://dblp.org/pers/hd/r/Roig:Antoni'
            },
            {
                name: 'Sergi Torralba',
                link: 'https://dblp.uni-trier.de/pers/hd/t/Torralba:Sergi'
            },
            {
                name: 'Mario Reyes',
                link: 'https://dblp.org/pers/hd/r/Reyes:Mario'
            },
            {
                name: 'Pompeu Casanovas',
                link: 'https://scholars.latrobe.edu.au/display/pcasanovasro'
            }
        ],
        elements: [
            {
                name: 'Data',
                link: ''
            },
            {
                name: 'Consent',
                link: ''
            },
            {
                name: 'Purpose',
                link: ''
            },
            {
                name: 'Security Measures',
                link: ''
            },
            {
                name: 'Person',
                link: ''
            },
            {
                name: 'Treatment Process',
                link: ''
            },
            {
                name: 'Security Degree',
                link: ''
            },
        ],
        resources: [],
        documentation: [
            {
                type: 'PDF',
                link: 'https://ddd.uab.cat/pub/artpub/2010/137891/aaaisprsymser_a2010n1iENG.pdf'
            }
        ],
        examples: [],
        diagrams: [
            {
                type: 'spec',
                name: 'DPKO',
                imageSrc: '../../assets/ontologies/NEURONA/diagrams/DPKO.PNG',
                typeSrc: 'https://ddd.uab.cat/pub/artpub/2010/137891/aaaisprsymser_a2010n1iENG.pdf',
                nameSrc: 'NEURONA Project article'
            }
        ]
    },
    {
        id: 'PPO',
        name: 'Privacy Preference Ontology',
        description: 'Lightweight vocabulary to create fine-grained privacy preferences for Linked Data, specifically to allow or restrict access to data within RDF documents',
        legalBasis: [],
        w3cStatus: '',
        dates: {
            created: '2011',
            lastUpdated: '2013'
        },
        idiom: [
            {
                imageSrc: '../../assets/flags/uk_flag.png',
                lang: 'en',
                link:'http://vocab.deri.ie/ppo#'
            }
        ],
        responsible: [
            {
                name: 'Digital Enterprise Research Institute (DERI), National University of Ireland',
                link: 'http://www.deri.ie/' // not working
            }
        ],
        project: {
            name: '',
            link: ''
        },
        authors: [
            {
                name: 'Owen Sacco',
                link: 'https://sites.google.com/site/owensacco/home'
            },
            {
                name: 'Alexandre Passant',
                link: 'https://dblp.org/pers/p/Passant:Alexandre.html'
            }
        ],
        elements: [
            {
                name: 'Access Space',
                link: 'http://vocab.deri.ie/ppo#AccessSpace'
            },
            {
                name: 'Operators',
                link: 'http://vocab.deri.ie/ppo#Operator'
            },
            {
                name: 'Condition',
                link: 'http://vocab.deri.ie/ppo#Condition'
            },
            {
                name: 'Create',
                link: 'http://vocab.deri.ie/ppo#Create'
            },
            {
                name: 'Update',
                link: 'http://vocab.deri.ie/ppo#Update'
            },
            {
                name: 'Delete',
                link: 'http://vocab.deri.ie/ppo#Delete'
            },
            {
                name: 'Privacy Preference',
                link: 'http://vocab.deri.ie/ppo#PrivacyPreference'
            },
        ],
        resources: [
            {
                type: 'Turtle',
                link: 'http://vocab.deri.ie/ppo.ttl'
            },
            {
                type: 'RDF',
                link: 'http://vocab.deri.ie/ppo.rdf'
            },
        ],
        documentation: [
            {
                type: 'HTML',
                link: 'http://vocab.deri.ie/ppo#'
            },
            {
                type: 'PDF',
                link: 'http://ceur-ws.org/Vol-813/ldow2011-paper01.pdf'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the "A Privacy Preference Ontology (PPO) for Linked Data" article',
                description: {
                    name: '"A Privacy Preference Ontology (PPO) for Linked Data"',
                    link: 'http://ceur-ws.org/Vol-813/ldow2011-paper01.pdf'
                },
                solutions: [
                    {
                        exampleName: 'Restrict access to phone number to whoever works at DERI - Section 3.2',
                        resources: []
                    },
                    {
                        exampleName: 'Restrict access to a post using the tags of said post - Section 3.2',
                        resources: []
                    }
                ]
            },
            {
                type: 'sample',
                title: 'Examples from the "A Privacy Preference Manager for the Social Semantic Web" article',
                description: {
                    name: '"A Privacy Preference Manager for the Social Semantic Web" article',
                    link: 'http://ceur-ws.org/Vol-781/paper6.pdf'
                },
                solutions: [
                    {
                        exampleName: 'MyPrivacyManager: privacy preference manager for users to create and manage preferences using PPO',
                        resources: []
                    }
                ]
            },
        ],
        diagrams: [
            {
                type: 'spec',
                name: 'PPO',
                imageSrc: '../../assets/ontologies/PPO/diagrams/ppo.PNG',
                typeSrc: 'http://ceur-ws.org/Vol-813/ldow2011-paper01.pdf',
                nameSrc: 'PPO article'
            }
        ]
    }
  ]

}
