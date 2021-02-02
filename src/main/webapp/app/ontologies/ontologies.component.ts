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
        description: 'Legal ontologies developed to represent data protection knowledge, focusing mainly on the correctness of files containing personal data and respective security measures applied to them',
        legalBasis: [
            {
                country: './assets/flags/Flag_of_Spain.svg.png',
                name: 'PPDR',
                link: 'https://apdcat.gencat.cat/web/.content/01-autoritat/normativa/documentos/2643.pdf'
            }
        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2008',
            lastUpdated: '2010'
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link:'https://ddd.uab.cat/pub/artpub/2010/137891/aaaisprsymser_a2010n1iENG.pdf'
            }
        ],
        responsible: [
            {
                name: 'Institute of Law and Technology, Universitat  Autònoma  de  Barcelona (IDT-UAB)',
                link: 'http://idt.uab.cat/'
            },
            {
                name: 'S21SEC',
                link: 'https://www.s21sec.com/'
            }
        ],
        project: [
            {
                name: 'NEURONA project',
                link: 'http://idt.uab.cat/index.php/competitive-projects/#2008'
            }
        ],
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
                imageSrc: './assets/ontologies/NEURONA/diagrams/DPKO.PNG',
                typeSrc: 'https://ddd.uab.cat/pub/artpub/2010/137891/aaaisprsymser_a2010n1iENG.pdf',
                nameSrc: 'NEURONA Project article'
            }
        ]
    },
    {
        id: 'DPO',
        name: 'Data Protection Ontology',
        description: "Data protection ontology based on the data protection principles, focused on the modelling of the data controllers' obligations and corresponding data subjects' rights",
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR (early version)',
                link: ''
            },
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'DPD',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:31995L0046&from=en'
            },
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'Handbook', //'Handbook on European data protection law',
                link: 'https://fra.europa.eu/sites/default/files/fra_uploads/fra-coe-edps-2018-handbook-data-protection_en.pdf'
            }

        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2015',
            lastUpdated: '2016'
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
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
        project: [],
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
            },
            {
                type: 'PDF',
                link: 'https://orbilu.uni.lu/bitstream/10993/22383/1/main.pdf'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Extending the BPMN standard with a Data Protection Task',
                description: {
                    name: '"Using Ontologies to Model Data Protection Requirements in Workflows" article',
                    link: 'https://orbilu.uni.lu/bitstream/10993/22383/1/main.pdf'
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
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        license: {
            name: 'CC-by-4.0',
            link: 'https://creativecommons.org/licenses/by/4.0/'
        },
        dates: {
            created: '2017',
            lastUpdated: '2019'
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
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
        project: [],
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
            },
            {
                type: 'OWL',
                link: 'http://purl.org/adaptcentre/openscience/ontologies/GDPRov'
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
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        license: {
            name: 'CC-by-4.0',
            link: 'https://creativecommons.org/licenses/by/4.0/'
        },
        dates: {
            created: '2018',
            lastUpdated: '2020'
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
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
        project: [],
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
    },
    {
        id: 'Cloud',
        name: 'Cloud GDPR ontology',
        description: "GDPR compliant ontology focused on the obligations of cloud services' providers and consumers, that takes into account the Cloud Security Alliance's (CSA) 'Code of Conduct for GDPR Compliance'",
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            },
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'CSA Code of Conduct',
                link: 'https://downloads.cloudsecurityalliance.org/assets/research/gdpr/CSA_Code_of_Conduct_for_GDPR_Compliance.pdf'
            }
        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2018',
            lastUpdated: ''
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link: 'https://ebiquity.umbc.edu/paper/html/id/827/A-Knowledge-Representation-of-Cloud-Data-controls-for-EU-GDPR-Compliance'
            }
        ],
        responsible: [
            {
                name: 'Information Systems Department, University of Maryland Baltimore County (UMBC)',
                link: 'https://informationsystems.umbc.edu/'
            }
        ],
        project: [],
        authors: [
            {
                name: 'Lavanya Elluri',
                link: 'https://dblp.org/pers/hd/e/Elluri:Lavanya'
            },
            {
                name: 'Karuna Pande Joshi',
                link: 'http://karuna.informationsystems.umbc.edu/'
            }
        ],
        elements: [
            {
                name: 'CSA controls',
                link: ''
            },
            {
                name: 'Common obligations',
                link: ''
            },
            {
                name: 'Consumer obligations',
                link: ''
            },
            {
                name: 'Provider obligations',
                link: ''
            },
            {
                name: 'Stakeholders',
                link: ''
            }
        ],
        resources: [
            {
                type: 'OWL',
                link: 'https://ebiquity.umbc.edu/_file_directory_/resources/377.rdf'
            }
        ],
        documentation: [
            {
                type: 'RDF',
                link: 'https://ebiquity.umbc.edu/paper/owl/id/827/A-Knowledge-Representation-of-Cloud-Data-controls-for-EU-GDPR-Compliance'
            },
            {
                type: 'PDF',
                link: 'https://ebiquity.umbc.edu/_file_directory_/papers/891.pdf'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Data compliance ontology for GDPR and PCI DSS',
                description: {
                    name: '"An Integrated Knowledge Graph to Automate GDPR and PCI DSS Compliance" article',
                    link: 'https://ebiquity.umbc.edu/_file_directory_/papers/907.pdf'
                },
                solutions: [
                    {
                        exampleName: 'Extend Cloud GDPR ontology to comply with the Payment Card Industry Data Security Standard (PCI DSS)',
                        resources: [
                            {
                                language: 'PNG',
                                link: 'https://d3i71xaburhd42.cloudfront.net/9171119bce7659b82f1b9d7387c7c178fccd169b/4-Figure3-1.png'
                            }
                        ]
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'spec',
                name: 'Cloud',
                imageSrc: './assets/ontologies/Cloud/diagrams/fig1.PNG',
                typeSrc: 'https://ebiquity.umbc.edu/_file_directory_/papers/891.pdf',
                nameSrc: 'Cloud GDPR ontology article'
            }
        ]
    },
    {
        id: 'SPLog',
        name: 'SPECIAL Policy Log Vocabulary',
        description: 'Log vocabulary built to record data processing events and consent that should comply with the consent actions given by the data owners. SPLog uses the SPL language to instantiate the content of a log entry',
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2017',
            lastUpdated: '2019'
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link: 'https://ai.wu.ac.at/policies/policylog/'
            }
        ],
        responsible: [],
        project: [
            {
                name: 'Scalable Policy-awarE linked data arChitecture For prIvacy, trAnsparency and compLiance (SPECIAL) project',
                link: 'https://www.specialprivacy.eu/'
            }
        ],
        authors: [
            {
                name: 'Piero A. Bonatti',
                link: 'http://wpage.unina.it/pieroandrea.bonatti/'
            },
            {
                name: 'Wouter Dullaert',
                link: 'https://wdullaer.com/'
            },
            {
                name: 'Javier D. Fernández',
                link: 'https://dblp.org/pers/f/Fern=aacute=ndez:Javier_D=.html'
            },
            {
                name: 'Sabrina Kirrane',
                link: 'http://sabrinakirrane.com/'
            },
            {
                name: 'Uros Milosevic',
                link: 'https://dblp.org/pers/hd/m/Milosevic:Uros'
            },
            {
                name: 'Axel Polleres',
                link: 'https://aic.ai.wu.ac.at/~polleres/'
            }
        ],
        elements: [
            {
                name: 'Log',
                link: 'https://ai.wu.ac.at/policies/policylog/#log'
            },
            {
                name: 'Log entry',
                link: 'https://ai.wu.ac.at/policies/policylog/#log-entries'
            },
            {
                name: 'Log entry group',
                link: 'https://ai.wu.ac.at/policies/policylog/#grouping'
            },
            {
                name: 'Log metadata',
                link: 'https://ai.wu.ac.at/policies/policylog/#h2_metadata'
            },
            {
                name: 'Log provenance',
                link: 'https://ai.wu.ac.at/policies/policylog/#h2_provenance'
            }
        ],
        resources: [
            {
                type: 'OWL',
                link: 'https://www.specialprivacy.eu/images/documents/splog.owl'
            }
        ],
        documentation: [
            {
                type: 'HTML',
                link: 'https://ai.wu.ac.at/policies/policylog/'
            },
            {
                type: 'PDF',
                link: 'https://www.specialprivacy.eu/images/documents/Kirrane-2018-ESWC.pdf'
            },
            {
                type: 'GitHub',
                link: 'https://github.com/specialprivacy'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the SPLog specification',
                description: {
                    name: 'SPLog specification',
                    link: 'https://ai.wu.ac.at/policies/policylog/'
                },
                solutions: [
                    {
                        exampleName: 'Example 1: Log description',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex1'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 2: A processing event',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex2'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 3: Event content',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#exContent'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 4: Immutable record',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex4'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 5: Log grouping',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex5'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 6: Integrating several events using provenance information in named graphs',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex6'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 7: Storing raw data (CSV)',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex7'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 8: Storing RDF data',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex8'
                            }
                        ]
                    },
                    {
                        exampleName: 'Example 9: Referring to external JSON',
                        resources: [
                            {
                                language: 'Turtle',
                                link: 'https://ai.wu.ac.at/policies/policylog/#ex9'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'deliverables',
                projectDeliverables: {
                    name: 'SPECIAL',
                    link: 'https://www.specialprivacy.eu/publications/public-deliverables'
                },
                deliverables: [
                    {
                        name: 'D2.3 - Transparency Framework V1',
                        link: 'https://www.specialprivacy.eu/images/documents/SPECIAL_D23_M14_V10.pdf'
                    },
                    {
                        name: 'D2.7 - Transparency Framework V2',
                        link: 'https://www.specialprivacy.eu/images/documents/SPECIAL_D27_M23_V10.pdf'
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'spec',
                name: 'SPLog v1.0',
                imageSrc: 'https://ai.wu.ac.at/policies/policylog/images/log.png',
                typeSrc: 'https://ai.wu.ac.at/policies/policylog/',
                nameSrc: 'SPLog specification'
            }
        ]
    },
    {
        id: 'PrOnto',
        name: 'Privacy Ontology for legal reasoning',
        description: 'Legal ontology with the aim of modelling the relationships between privacy agents, data types, processing operations and deontic specifications to support compliance with the GDPR',
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2018',
            lastUpdated: ''
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link: 'https://cris.unibo.it/retrieve/handle/11585/648022/467479/POST%20PRINT%20PrOntoPrivacyOntologyForLegalReasoning.pdf'
            }
        ],
        responsible: [],
        project: [
            {
                name: 'MIning  and  REasoning  with  Legal  texts (MIREL) project',
                link: 'https://www.mirelproject.eu/'
            },
            {
                name: 'DAta Protection REgulation COmpliance (DAPRECO) project',
                link: 'https://www.fnr.lu/projects/data-protection-regulation-compliance/'
            }
        ],
        authors: [
            {
                name: 'Monica Palmirani',
                link: 'https://www.unibo.it/sitoweb/monica.palmirani/en'
            },
            {
                name: 'Michele Martoni',
                link: 'https://www.unibo.it/sitoweb/michele.martoni/en'
            },
            {
                name: 'Arianna Rossi',
                link: 'https://dblp.org/pers/hd/r/Rossi:Arianna'
            },
            {
                name: 'Cesare Bartolini',
                link: 'https://dblp.org/pers/b/Bartolini:Cesare.html'
            },
            {
                name: 'Livio Robaldo',
                link: 'https://dblp.org/pers/hd/r/Robaldo:Livio'
            }
        ],
        elements: [
            {
                name: 'Data',
                link: ''
            },
            {
                name: 'Agents',
                link: ''
            },
            {
                name: 'Processing',
                link: ''
            },
            {
                name: 'Rights',
                link: ''
            },
            {
                name: 'Purposes',
                link: ''
            },
        ],
        resources: [],
        documentation: [
            {
                type: 'PDF',
                link: 'https://cris.unibo.it/retrieve/handle/11585/648022/467479/POST%20PRINT%20PrOntoPrivacyOntologyForLegalReasoning.pdf'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the "PrOnto: Privacy Ontology for Legal Reasoning" article',
                description: {
                    name: '"PrOnto: Privacy Ontology for Legal Reasoning" article',
                    link: 'https://cris.unibo.it/retrieve/handle/11585/648022/467479/POST%20PRINT%20PrOntoPrivacyOntologyForLegalReasoning.pdf'
                },
                solutions: [
                    {
                        exampleName: 'SPARQL queries - section 5',
                        resources: []
                    }
                ]
            },
            {
                type: 'deliverables',
                projectDeliverables: {
                    name: 'MIREL',
                    link: 'https://www.mirelproject.eu/publications.php'
                },
                deliverables: []
            }
        ],
        diagrams: [ // add more figures from https://www.semanticscholar.org/paper/PrOnto%3A-Privacy-Ontology-for-Legal-Reasoning-Palmirani-Martoni/cf52aa17e41f4e6aec9c9a6972f6e16c1988f5f8
            {
                type: 'spec',
                name: 'PrOnto',
                imageSrc: 'https://d3i71xaburhd42.cloudfront.net/cf52aa17e41f4e6aec9c9a6972f6e16c1988f5f8/8-Figure1-1.png',
                typeSrc: 'https://cris.unibo.it/retrieve/handle/11585/648022/467479/POST%20PRINT%20PrOntoPrivacyOntologyForLegalReasoning.pdf',
                nameSrc: 'PrOnto article'
            }
        ]
    },
    {
        id: 'GConsent',
        name: 'GDPR Consent ontology',
        description: 'Ontology focused on the concept of consent as one of the legal basis for the processing of personal data under the GDPR. Represents the consent life cycle for GDPR compliance, modelling several states of consent (given, expired, unknown, ...)',
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            },
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'Guidelines on consent',
                link: 'https://edpb.europa.eu/sites/edpb/files/files/file1/edpb_guidelines_202005_consent_en.pdf'
            }
        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2018',
            lastUpdated: ''
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link: 'http://openscience.adaptcentre.ie/ontologies/gconsent/main.html'
            }
        ],
        responsible: [
            {
                name: 'ADAPT Centre, Trinity College Dublin',
                link: 'https://www.adaptcentre.ie/'
            }
        ],
        project: [],
        authors: [
            {
                name: 'Harshvardhan J. Pandit',
                link: 'https://harshp.com/research/'
            },
            {
                name: 'Christophe Debruyne',
                link: 'https://chrdebru.github.io/'
            },
            {
                name: "Declan O'Sullivan",
                link: 'https://dblp.org/pers/o/O=Sullivan:Declan.html'
            },
            {
                name: 'Dave Lewis',
                link: 'https://dblp.uni-trier.de/pers/hd/l/Lewis_0001:David'
            }
        ],
        elements: [
            {
                name: 'Consent',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology#Consent'
            },
            {
                name: 'Status',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology#Status'
            },
            {
                name: 'Data subject',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology#DataSubject'
            },
            {
                name: 'Personal data',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology#PersonalData'
            },
            {
                name: 'Purpose',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology#Purpose'
            },
            {
                name: 'Processing',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology#Processing'
            }
        ],
        resources: [
            {
                type: 'RDF',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology.xml'
            },
            {
                type: 'N-Triples',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology.nt'
            },
            {
                type: 'Turtle',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology.ttl'
            },
            {
                type: 'JSON-LD',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology.json'
            }
        ],
        documentation: [
            {
                type: 'PDF',
                link: 'http://openscience.adaptcentre.ie/ontologies/gconsent/main.html'
            },
            {
                type: 'HTML',
                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology'
            },
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the GConsent specification',
                description: {
                    name: 'GConsent specification',
                    link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/ontology'
                },
                solutions: [
                    {
                        exampleName: 'Change in Consent State - Example 1',
                        resources: [
                            {
                                language: 'PNG',
                                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/diagrams/consent_invalidated_data_activity.png'
                            }
                        ]
                    },
                    {
                        exampleName: 'Capturing Given Consent - Example 2',
                        resources: [
                            {
                                language: 'PNG',
                                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/diagrams/example_ds1.png'
                            }
                        ]
                    },
                    {
                        exampleName: 'Capturing Consent Given via Delegation - Example 3',
                        resources: [
                            {
                                language: 'PNG',
                                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/diagrams/example_ds2.png'
                            }
                        ]
                    },
                    {
                        exampleName: 'Capturing Consent where Data is shared with a Third Party - Example 4',
                        resources: [
                            {
                                language: 'PNG',
                                link: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/diagrams/example_ds3.png'
                            }
                        ]
                    }
                ]
            }
        ],
        diagrams: [ // add more figures from http://openscience.adaptcentre.ie/ontologies/gconsent/main.html
            {
                type: 'webvowl',
                name: 'GConsent v0.5',
                imageSrc: 'http://openscience.adaptcentre.ie/ontologies/GConsent/docs/webvowl/index.html#'
            }
        ]
    },
    {
        id: 'IMO',
        name: 'BPR4GDPR Information Model Ontology',
        description: "Ontology that focuses on the entities and respective roles that are involved in the organizations' life cycle of processes, with the main goal of providing a framework to reinforce the implementation of GDPR inside organizations",
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        license: {
            name: '',
            link: ''
        },
        dates: {
            created: '2018',
            lastUpdated: ''
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D3.1-Compliance-Ontology-1.0.pdf'
            }
        ],
        responsible: [],
        project: [
            {
                name: 'Business Process Re-engineering and functional toolkit for GDPR compliance (BPR4GDPR) project',
                link: 'https://www.bpr4gdpr.eu/'
            },
        ],
        authors: [
            {
                name: 'Georgios Lioudakis',
                link: 'https://dblp.org/pers/l/Lioudakis:Georgios_V=.html'
            },
            {
                name: 'Davide Cascone',
                link: 'https://dblp.org/pers/hd/c/Cascone:Davide'
            }
        ],
        elements: [
            {
                name: 'Data types',
                link: ''
            },
            {
                name: 'Roles',
                link: ''
            },
            {
                name: 'Operations',
                link: ''
            },
            {
                name: 'Machine types',
                link: ''
            },
            {
                name: 'Organization types',
                link: ''
            },
            {
                name: 'Event types',
                link: ''
            },
            {
                name: 'Context types',
                link: ''
            },
            {
                name: 'Purposes',
                link: ''
            },
            {
                name: 'Attributes',
                link: ''
            }
        ],
        resources: [],
        documentation: [
            {
                type: 'PDF',
                link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D3.1-Compliance-Ontology-1.0.pdf'
            },
            {
                type: 'PDF',
                link: 'https://www.researchgate.net/publication/260706010_Leveraging_Ontologies_upon_a_Holistic_Privacy-Aware_Access_Control_Model'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the "Leveraging Ontologies upon a Holistic Privacy-Aware Access Control Model" article',
                description: {
                    name: '"Leveraging Ontologies upon a Holistic Privacy-Aware Access Control Model" article',
                    link: 'https://www.researchgate.net/publication/260706010_Leveraging_Ontologies_upon_a_Holistic_Privacy-Aware_Access_Control_Model'
                },
                solutions: [
                    {
                        exampleName: 'Example rule for the health sector - Figure 3',
                        resources: [
                            {
                                language: 'PNG',
                                link: 'https://www.researchgate.net/profile/Joaquin_Garcia-Alfaro/publication/260706010/figure/fig3/AS:296857856167938@1447787836426/Example-of-Ontological-Access-Control-Rule.png'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'deliverables',
                projectDeliverables: {
                    name: 'BPR4GDPR',
                    link: 'https://www.bpr4gdpr.eu/results/deliverables/'
                },
                deliverables: [
                    {
                        name: 'D3.1 - Compliance ontology',
                        link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D3.1-Compliance-Ontology-1.0.pdf'
                    },
                    {
                        name: 'D2.3 - Initial Specification of BPR4GDPR architecture',
                        link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D2.3-Initial-Specification-of-BPR4GDPR-architecture-%E2%80%94-final.pdf'
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'spec',
                name: 'IMO',
                imageSrc: 'https://www.researchgate.net/profile/Joaquin_Garcia-Alfaro/publication/260706010/figure/fig1/AS:296857856167936@1447787836335/Information-Model-Ontology-IMO.png',
                typeSrc: 'https://www.researchgate.net/publication/260706010_Leveraging_Ontologies_upon_a_Holistic_Privacy-Aware_Access_Control_Model',
                nameSrc: '"Leveraging Ontologies upon a Holistic Privacy-Aware Access Control Model" article'
            }
        ]
    },
    {
        id: 'DPV',
        name: 'Data Privacy Vocabulary',
        description: "Data privacy vocabularies with the main purpose of providing a taxonomy of terms to annotate and categorize the handling of personal data in accordance with the GDPR and which can be extended to cover other data protection legislations",
        legalBasis: [
            {
                country: './assets/footer/eu_flag.jpg',
                name: 'GDPR',
                link: 'https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN'
            }
        ],
        license: {
            name: 'W3C Community Group Draft',
            link: ''
        },
        dates: {
            created: '2018',
            lastUpdated: '2021'
        },
        idiom: [
            {
                imageSrc: './assets/flags/uk_flag.png',
                lang: 'en',
                link: 'http://doras.dcu.ie/23801/1/DPVCG___ODBASE.pdf'
            }
        ],
        responsible: [
            {
                name: 'Data Privacy Vocabularies and Controls Community Group (DPVCG)',
                link: 'https://www.w3.org/community/dpvcg/'
            }
        ],
        project: [],
        authors: [
            {
                name: 'Axel Polleres',
                link: 'https://aic.ai.wu.ac.at/~polleres/'
            },
            {
                name: 'Beatriz Esteves',
                link: 'https://besteves4.github.io/'
            },
            {
                name: 'Bert Bos',
                link: 'https://dblp.org/pers/hd/b/Bos:Bert'
            },
            {
                name: 'Bud Bruegger',
                link: 'https://dblp.org/pers/hd/b/Bruegger:Bud_P='
            },
            {
                name: 'Elmar Kiesling',
                link: 'https://dblp.org/pers/hd/k/Kiesling:Elmar'
            },
            {
                name: 'Eva Schlehahn',
                link: 'https://dblp.org/pers/hd/s/Schlehahn:Eva'
            },
            {
                name: 'Fajar J. Ekaputra',
                link: 'https://dblp.org/pers/hd/e/Ekaputra:Fajar_J='
            },
            {
                name: 'Georg P. Krog',
                link: 'https://www.linkedin.com/in/georg-philip-krog-a2a278104/?originalSubdomain=ch'
            },
            {
                name: 'Harshvardhan J. Pandit',
                link: 'https://harshp.com/research/'
            },
            {
                name: 'Javier D. Fernández',
                link: 'https://dblp.org/pers/f/Fern=aacute=ndez:Javier_D=.html'
            },
            {
                name: 'Mark Lizar',
                link: 'https://dblp.org/pers/hd/l/Lizar:Mark'
            },
            {
                name: 'Paul Ryan',
                link: 'https://dblp.org/pid/03/2731.html'
            },
            {
                name: 'Piero Bonatti',
                link: 'https://dblp.org/pid/b/PABonatti.html'
            },
            {
                name: 'Ramisa Gachpaz Hamed',
                link: 'https://dblp.org/pers/hd/h/Hamed:Roghaiyeh_Gachpaz'
            },
            {
                name: 'Rigo Wenning',
                link: 'https://dblp.org/pers/hd/w/Wenning:Rigo'
            },
            {
                name: 'Rob Brennan',
                link: 'https://dblp.org/pers/hd/b/Brennan:Rob'
            },
            {
                name: 'Simon Steyskal',
                link: 'https://dblp.org/pers/hd/s/Steyskal:Simon'
            }
        ],
        elements: [
            {
                name: 'Personal data categories',
                link: 'https://www.w3.org/ns/dpv#vocab-personal-data-categories'
            },
            {
                name: 'Purposes',
                link: 'https://www.w3.org/ns/dpv#vocab-purposes'
            },
            {
                name: 'Processing categories',
                link: 'https://www.w3.org/ns/dpv#vocab-processing-categories'
            },
            {
                name: 'Technical and organisational measures',
                link: 'https://www.w3.org/ns/dpv#vocab-technical-organisational-measures'
            },
            {
                name: 'Consent',
                link: 'https://www.w3.org/ns/dpv#vocab-consent'
            },
            {
                name: 'Entities',
                link: 'https://dpvcg.github.io/dpv/#vocab-entities'
            },
            {
                name: 'GDPR legal basis',
                link: 'https://dpvcg.github.io/dpv-gdpr/#vocab-legal-basis'
            },
            {
                name: 'GDPR rights',
                link: 'https://dpvcg.github.io/dpv-gdpr/#vocab-rights'
            }
        ],
        resources: [
            {
                type: 'DPV RDF',
                link: 'https://github.com/dpvcg/dpv/blob/master/dpv.rdf'
            },
            {
                type: 'DPV GDPR RDF',
                link: 'https://github.com/dpvcg/dpv-gdpr/blob/master/dpv-gdpr.rdf'
            },
            {
                type: 'DPV Turtle',
                link: 'https://www.w3.org/ns/dpv.ttl'
            },
            {
                type: 'DPV GDPR Turtle',
                link: 'https://github.com/dpvcg/dpv-gdpr/blob/master/dpv-gdpr.ttl'
            },
            {
                type: 'DPV JSON-LD',
                link: 'https://github.com/dpvcg/dpv/blob/master/dpv.jsonld'
            },
            {
                type: 'DPV GDPR JSON-LD',
                link: 'https://github.com/dpvcg/dpv-gdpr/blob/master/dpv-gdpr.jsonld'
            },
            {
                type: 'DPV N3',
                link: 'https://github.com/dpvcg/dpv/blob/master/dpv.n3'
            },{
                type: 'DPV GDPR N3',
                link: 'https://github.com/dpvcg/dpv-gdpr/blob/master/dpv-gdpr.n3'
            }
        ],
        documentation: [
            {
                type: 'DPV HTML',
                link: 'https://www.w3.org/ns/dpv'
            },
            {
                type: 'DPV GDPR HTML',
                link: 'https://www.w3.org/ns/dpv-gdpr'
            },
            {
                type: 'PDF',
                link: 'http://doras.dcu.ie/23801/1/DPVCG___ODBASE.pdf'
            },
            {
                type: 'GitHub',
                link: 'https://github.com/dpvcg'
            },
            {
                type: 'DPV CG Wiki',
                link: 'https://www.w3.org/community/dpvcg/wiki/Main_Page'
            }
        ],
        examples: [
            {
                type: 'sample',
                title: 'Examples from the W3C DPVCG',
                description: {
                    name: 'W3C DPVCG',
                    link: 'https://www.w3.org/community/dpvcg/2019/12/12/data-protection-aspects-of-online-shopping-a-use-case/'
                },
                solutions: [
                    {
                        exampleName: 'Data Protection Aspects of Online Shopping – A Use Case',
                        resources: []
                    }
                ]
            }
        ],
        diagrams: [
            {
                type: 'spec',
                name: 'Base',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/personaldatahandling.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            },
            {
                type: 'spec',
                name: 'Personal Data',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/personaldatacategories.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            },
            {
                type: 'spec',
                name: 'Purpose',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/purpose.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            },
            {
                type: 'spec',
                name: 'Processing',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/processing.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            },
            {
                type: 'spec',
                name: 'Measures',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/technicalorganisationalmeasures.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            },
            {
                type: 'spec',
                name: 'Entities',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/legalentities.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            },
            {
                type: 'spec',
                name: 'Entities',
                imageSrc: 'https://dpvcg.github.io/dpv/diagrams/legalentities.png',
                typeSrc: 'https://www.w3.org/ns/dpv',
                nameSrc: 'DPV v0.2 specification'
            }
        ]
    }
  ]

}
