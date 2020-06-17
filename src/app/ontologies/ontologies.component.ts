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
    },
    {
        id: 'DPO',
        name: 'Data Protection Ontology',
        description: "Data protection ontology based on the data protection principles, focused on the modelling of the data controllers' obligations and corresponding data subjects' rights",
        legalBasis: [
            {
                country: '../../assets/footer/eu_flag.jpg',
                name: 'GDPR (early version)',
                link: ''
            },
            {
                country: '../../assets/footer/eu_flag.jpg',
                name: 'DPD',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:31995L0046&from=en'
            },
            {
                country: '../../assets/footer/eu_flag.jpg',
                name: 'Handbook', //'Handbook on European data protection law',
                link: 'https://fra.europa.eu/sites/default/files/fra_uploads/fra-coe-edps-2018-handbook-data-protection_en.pdf'
            }

        ],
        w3cStatus: '',
        dates: {
            created: '2015',
            lastUpdated: '2016'
        },
        idiom: [
            {
                imageSrc: '../../assets/flags/uk_flag.png',
                lang: 'en',
                link:'https://pdfs.semanticscholar.org/e59a/5f9e9bfc990d9d62ac0102c612cade2f5642.pdf'
            }
        ],
        responsible: [
            {
                name: 'Joint International Doctoral (Ph.D.) Degree in Law, Science and Technology (LAST-JD)',
                link: 'http://www.last-jd.eu/'
            }
        ],
        project: {
            name: '',
            link: ''
        },
        authors: [
            {
                name: 'Cesare Bartolini',
                link: 'https://dblp.org/pers/b/Bartolini:Cesare.html'
            },
            {
                name: 'Robert Muthuri',
                link: 'https://dblp.org/pers/hd/m/Muthuri:Robert'
            }

        ],
        elements: [
            {
                name: 'Principles',
                link: ''
            },
            {
                name: 'Rules',
                link: ''
            },
            {
                name: "Data subject's rights",
                link: ''
            },
            {
                name: "Data processing",
                link: ''
            },
            {
                name: "Person",
                link: ''
            },
            {
                name: "Personal data",
                link: ''
            }
        ],
        resources: [
            {
                type: 'OWL',
                link: 'https://bitbucket.org/guerret/lu.uni.eclipse.bpmn2/src/master/resources/dataprotection.owl'
            },
            {
                type: 'RDF',
                link: 'https://bitbucket.org/guerret/lu.uni.eclipse.bpmn2/src/master/resources/dataprotection-rdf.owl'
            },
        ],
        documentation: [
            {
                type: 'PDF',
                link: 'https://pdfs.semanticscholar.org/e59a/5f9e9bfc990d9d62ac0102c612cade2f5642.pdf'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Extending the BPMN standard with a Data Protection Task',
                description: {
                    name: '"Using Ontologies to Model Data Protection Requirements in Workflows" article',
                    link: 'https://www.researchgate.net/publication/283325872_Using_Ontologies_to_Model_Data_Protection_Requirements_in_Workflows'
                },
                solutions: [
                    {
                        exampleName: 'BPMN2 data protection extension',
                        resources: [
                            {
                                language: 'Bitbucket',
                                link: 'https://bitbucket.org/guerret/lu.uni.eclipse.bpmn2/src/master/'
                            }
                        ]
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'spec',
                name: 'DPO',
                imageSrc: 'https://www.researchgate.net/profile/Cesare_Bartolini/publication/283325872/figure/fig1/AS:669142571032603@1536547429862/Schema-of-the-data-protection-ontology.ppm',
                typeSrc: 'https://www.researchgate.net/publication/283325872_Using_Ontologies_to_Model_Data_Protection_Requirements_in_Workflows',
                nameSrc: 'DPO article'
            }
        ]
    },
    {
        id: 'GDPRov',
        name: 'GDPR Provenance Ontology',
        description: 'Linked data ontology focused on the objective of conceptualizing the provenance of consent and the data life-cycle (collection, usage and storage), towards documenting GDPR compliance',
        legalBasis: [
            {
                country: '../../assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        w3cStatus: '',
        dates: {
            created: '2017',
            lastUpdated: '2019'
        },
        idiom: [
            {
                imageSrc: '../../assets/flags/uk_flag.png',
                lang: 'en',
                link:'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology'
            }
        ],
        responsible: [
            {
                name: 'ADAPT Centre, Trinity College Dublin',
                link: 'https://www.adaptcentre.ie/'
            }
        ],
        project: {
            name: '',
            link: ''
        },
        authors: [
            {
                name: 'Harshvardhan J. Pandit',
                link: 'https://harshp.com/research/'
            },
            {
                name: 'Dave Lewis',
                link: 'https://dblp.uni-trier.de/pers/hd/l/Lewis_0001:David'
            }

        ],
        elements: [
            {
                name: 'Consent agreement template',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#ConsentAgreementTemplate'
            },
            {
                name: 'Data',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#Data'
            },
            {
                name: "Terms and conditions",
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#TermsAndConditions'
            },
            {
                name: "Process",
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#Process'
            },
            {
                name: "Data step",
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#DataStep'
            },
            {
                name: "Consent step",
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#ConsentStep'
            },
            {
                name: "Anonymity level",
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#AnonymityLevel'
            },
            {
                name: "Third party",
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology#ThirdParty'
            }
        ],
        resources: [
            {
                type: 'RDF',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology.xml'
            },
            {
                type: 'N-Triples',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology.nt'
            },
            {
                type: 'Turtle',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology.ttl'
            },
            {
                type: 'JSON-LD',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology.json'
            }
        ],
        documentation: [
            {
                type: 'HTML',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/ontology'
            },
            {
                type: 'PDF',
                link: 'http://ceur-ws.org/Vol-1951/PrivOn2017_paper_6.pdf'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Compliance related queries using SPARQL',
                description: {
                    name: '"Modelling Provenance for GDPR Complianceusing Linked Open Data Vocabularies" article',
                    link: 'http://ceur-ws.org/Vol-1951/PrivOn2017_paper_6.pdf'
                },
                solutions: [
                    {
                        exampleName: 'Query to retrieve the entities involved in acquiring user consent - Listing 1.1',
                        resources: []
                    },
                    {
                        exampleName: 'Query to retrieve data shared with third parties - Listing 1.2',
                        resources: []
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'webvowl',
                name: 'GDPRov v0.7',
                imageSrc: 'https://openscience.adaptcentre.ie/ontologies/GDPRov/docs/webvowl/index.html#'
            }
        ]
    },
    {
        id: 'GDPRtEXT',
        name: 'GDPR text EXTensions',
        description: 'Open data resource, that extends the European Legislation Identifier (ELI) ontology, with the aim of connecting GDPR concepts, through the SKOS ontology, and their respective chapter, article, point, etc.',
        legalBasis: [
            {
                country: '../../assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        w3cStatus: '',
        dates: {
            created: '2018',
            lastUpdated: '2020'
        },
        idiom: [
            {
                imageSrc: '../../assets/flags/uk_flag.png',
                lang: 'en',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology'
            }
        ],
        responsible: [
            {
                name: 'ADAPT Centre, Trinity College Dublin',
                link: 'https://www.adaptcentre.ie/'
            }
        ],
        project: {
            name: '',
            link: ''
        },
        authors: [
            {
                name: 'Harshvardhan J. Pandit',
                link: 'https://harshp.com/research/'
            },
            {
                name: 'Kaniz Fatema',
                link: 'https://dblp.uni-trier.de/pers/hd/f/Fatema:Kaniz'
            },
            {
                name: 'Declan O’Sullivan',
                link: 'https://dblp.uni-trier.de/pers/hd/o/O=Sullivan:Declan'
            },
            {
                name: 'Dave Lewis',
                link: 'https://dblp.uni-trier.de/pers/hd/l/Lewis_0001:David'
            }
        ],
        elements: [
            {
                name: 'Chapter',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#Chapter'
            },
            {
                name: 'Section',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#Section'
            },
            {
                name: 'Article',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#Article'
            },
            {
                name: 'Point',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#Point'
            },
            {
                name: 'Sub point',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#SubPoint'
            },
            {
                name: 'Recital',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#Recital'
            },
            {
                name: 'Citation',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology#Citation'
            }
        ],
        resources: [
            {
                type: 'RDF',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology.xml'
            },
            {
                type: 'N-Triples',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology.nt'
            },
            {
                type: 'Turtle',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology.ttl'
            },
            {
                type: 'JSON-LD',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology.json'
            }
        ],
        documentation: [
            {
                type: 'HTML',
                link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology'
            },
            {
                type: 'PDF',
                link: 'http://www.tara.tcd.ie/bitstream/handle/2262/91559/ESWC_2018___GDPRtEXT_rebuttal.pdf;jsessionid=B050BB1B6863A96C3278E15687462D54?sequence=1'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the GDPRtEXT specification',
                description: {
                    name: 'GDPRtEXT specification',
                    link: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/ontology'
                },
                solutions: [
                    {
                        exampleName: 'Compliance reports - section 4.1',
                        resources: []
                    },
                    {
                        exampleName: 'Link obligations from Data Protection Directive - section 4.2',
                        resources: [
                            {
                                language: 'HTML',
                                link: 'http://openscience.adaptcentre.ie/projects/GDPRtEXT/dpd_mapping.html'
                            }
                        ]
                    }
                ]
            }
        ],
        diagrams: [ // add figures from https://www.semanticscholar.org/paper/GDPRtEXT-GDPR-as-a-Linked-Data-Resource-Pandit-Fatema/e957b1aaefe408b351c48b1862cf5cc7c970b364
            {
                type: 'webvowl',
                name: 'GDPRtEXT v0.7',
                imageSrc: 'https://openscience.adaptcentre.ie/ontologies/GDPRtEXT/deliverables/docs/webvowl/index.html#'
            }
        ]
    }
  ]

}
