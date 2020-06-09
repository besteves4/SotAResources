import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LanguagesDescriptionModalComponent } from '../languages-description-modal/languages-description-modal.component';
import { DiagramModalComponent } from '../diagram-modal/diagram-modal.component';
import { element } from 'protractor';

@Component({
    selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})

export class LanguagesComponent implements OnInit {

    activeJob: any;
    @ViewChild('languagesDescriptionModal', {static: false}) languagesDescriptionModal;

    activeDiag: any;
    @ViewChild('diagramModal', {static: false}) diagramModal;

    constructor() { }

    ngOnInit() { }
    
    handleClick(ppl) {
        this.activeJob = ppl;
        this.languagesDescriptionModal.show();
    }

    handleClickDiag(diag) {
        this.activeDiag = diag;
        this.diagramModal.show();
    }

    faPlusSquare = faPlusSquare;

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
                        },
                        {
                            exampleName: 'Example 2.5',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/p3p/examples/XML_ex-2-5.xml'
                                },
                                {
                                    language: 'RDF',
                                    link: '../assets/languages/p3p/examples/RDF_ex-2-5.xml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 2.6',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/p3p/examples/XML_ex-2-6.xml'
                                },
                                {
                                    language: 'RDF',
                                    link: '../assets/languages/p3p/examples/RDF_ex-2-6.xml'
                                }
                            ]
                        },
                        {
                            exampleName: "CatalogExample's Privacy Policy for Browsers - Example 3.1",
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/p3p/examples/XML_ex-3-1.xml'
                                },
                                {
                                    language: 'RDF',
                                    link: '../assets/languages/p3p/examples/RDF_ex-3-1.xml'
                                }
                            ]
                        },
                        {
                            exampleName: "CatalogExample's Privacy Policy for Shoppers - Example 3.2",
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/p3p/examples/XML_ex-3-2.xml'
                                },
                                {
                                    language: 'RDF',
                                    link: '../assets/languages/p3p/examples/RDF_ex-3-2.xml'
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
        },
        {
            id: 'APPEL',
            name: 'A P3P Preference Exchange Language',
            description: 'P3P extension for users to express their preferences through a set of preference-rules. P3P enabled websites can use these preferences for automated or semi-automated decision-making',
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                }
            ],
            w3cStatus: 'W3C Working Draft',
            dates: {
                created: '1998',
                lastUpdated: '2002'
            },
            idiom: [
                {
                    imageSrc: '../../assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.w3.org/TR/P3P-preferences/'
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
                }
            ],
            elements: [
                {
                    name: 'Ruleset',
                    link: 'https://www.w3.org/TR/P3P-preferences/#RULESET'
                },
                {
                    name: 'Rule',
                    link: 'https://www.w3.org/TR/P3P-preferences/#RULE'
                },
                {
                    name: 'Otherwise',
                    link: 'https://www.w3.org/TR/P3P-preferences/#OTHERWISE'
                },
                {
                    name: 'Request',
                    link: 'https://www.w3.org/TR/P3P-preferences/#REQUEST'
                }
            ],
            rdf: [
                {
                    type: 'DTD',
                    link: 'https://www.w3.org/TR/P3P-preferences/APPELv1-20020415.dtd'
                },
                {
                    type: 'XML',
                    link: 'https://www.w3.org/TR/P3P-preferences/APPELv1-20020415.xsd'
                }
            ],
            documentation: [
                {
                    type: 'HTML',
                    link: 'https://www.w3.org/TR/P3P-preferences/'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the APPEL specification',
                    description: {
                        name: 'APPEL specification',
                        link: 'https://www.w3.org/TR/P3P-preferences/#examples'
                    },
                    solutions: [
                        {
                            exampleName: '"Almost Anonymous" Ruleset',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/APPEL/examples/XML_ex-B1.xml'
                                }
                            ]
                        },
                        {
                            exampleName: '"Privacy And Commerce" Ruleset',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/APPEL/examples/XML_ex-B2.xml'
                                }
                            ]
                        },
                        {
                            exampleName: '"Look For The Seal" Ruleset',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/APPEL/examples/XML_ex-B3.xml'
                                }
                            ]
                        },
                        {
                            exampleName: '"Information Only" Ruleset',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/APPEL/examples/XML_ex-B4.xml'
                                }
                            ]
                        }
                    ]
                }
            ],
            diagrams: [
/*                 {
                    type: 'APPEL v1',
                    imageSrc: '../../assets/languages/APPEL/diagrams/APPELv1.svg'
                } */
            ]
        },
        {
            id: 'ODRL',
            name: 'Open Digital Rights Language',
            description: 'Policy expression language that provides a model, vocabulary and encoding mechanisms to express information about permissions, prohibitions and duties related to an asset.',
            domain: [
                {
                    name: 'digital rights',
                    dbPedia: 'http://dbpedia.org/page/Digital_rights'
                },
/*                 {
                    name: 'duty',
                    dbPedia: 'http://dbpedia.org/page/Duty'
                },
                {
                    name: 'permission',
                    dbPedia: 'http://dbpedia.org/page/Permission_(philosophy)'
                },
                {
                    name: 'obligation',
                    dbPedia: 'http://dbpedia.org/page/Obligation'
                } */
            ],
            w3cStatus: 'W3C Recommendation',
            dates: {
                created: '2001',
                lastUpdated: '2019'
            },
            idiom: [
                {
                    imageSrc: '../../assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.w3.org/TR/odrl-vocab/'
                },
                {
                    imageSrc: '../../assets/flags/Flag_of_Japan.svg.png',
                    lang: 'jp',
                    link: 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rights/REC-odrl-vocab-20180215.html'
                }
            ],
            responsible: {
                name: 'W3C ODRL Community Group',
                link: 'https://www.w3.org/community/odrl/'
            },
            project: {
                name: '',
                link: ''
            },
            authors: [
                {
                    name: 'Renato Iannella',
                    link: 'https://www.linkedin.com/in/riannella/'
                },
                {
                    name: 'Michael Steidl',
                    link: 'https://www.linkedin.com/in/michaelwsteidl/'
                },
                {
                    name: 'Stuart Myles',
                    link: 'https://www.linkedin.com/in/stuart-myles-60a985/'
                },
                {
                    name: 'Víctor Rodríguez-Doncel',
                    link: 'http://cosasbuenas.es'
                }
            ],
            elements: [
                {
                    name: 'Policy',
                    link: 'https://www.w3.org/TR/odrl-vocab/#policyConcepts'
                },
                {
                    name: 'Rule',
                    link: 'https://www.w3.org/TR/odrl-vocab/#ruleConcepts'
                },
                {
                    name: 'Asset',
                    link: 'https://www.w3.org/TR/odrl-vocab/#assetConcepts'
                },
                {
                    name: 'Party',
                    link: 'https://www.w3.org/TR/odrl-vocab/#partyConcepts'
                },
                {
                    name: 'Permission',
                    link: 'https://www.w3.org/TR/odrl-vocab/#permissions'
                },
                {
                    name: 'Prohibition',
                    link: 'https://www.w3.org/TR/odrl-vocab/#prohibitions'
                },
                {
                    name: 'Action',
                    link: 'https://www.w3.org/TR/odrl-vocab/#actionConcepts'
                },
                {
                    name: 'Duty',
                    link: 'https://www.w3.org/TR/odrl-vocab/#duties'
                },
                {
                    name: 'Constraint',
                    link: 'https://www.w3.org/TR/odrl-vocab/#constraints'
                },
                {
                    name: 'Conflict terms',
                    link: 'https://www.w3.org/TR/odrl-vocab/#conflictConcepts'
                }
            ],
            rdf: [
                {
                    type: 'Turtle',
                    link: 'https://www.w3.org/ns/odrl/2/ODRL22.ttl'
                },
                {
                    type: 'RDF',
                    link: 'https://www.w3.org/ns/odrl/2/ODRL22.rdf'
                },
                {
                    type: 'XML',
                    link: 'https://www.w3.org/ns/odrl/2/ODRL22.xsd'
                },
                {
                    type: 'N-Triples',
                    link: 'https://www.w3.org/ns/odrl/2/ODRL22.nt'
                },
                {
                    type: 'JSON-LD',
                    link: 'https://www.w3.org/ns/odrl/2/ODRL22.json'
                },
                {
                    type: 'JSON-LD Context',
                    link: 'https://www.w3.org/ns/odrl.jsonld'
                }
            ],
            documentation: [
                {
                    type: 'ODRL Vocab',
                    link: 'https://www.w3.org/TR/odrl-vocab/'
                },
                {
                    type: 'GitHub',
                    link: 'https://github.com/w3c/poe'
                },
                {
                    type: 'ODRL Model',
                    link: 'https://www.w3.org/TR/odrl-model/'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the ODRL specification',
                    description: {
                        name: 'ODRL specification',
                        link: 'https://www.w3.org/TR/odrl-vocab/#xml'
                    },
                    solutions: [
                        {
                            exampleName: 'XML Example - Example 1',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/ODRL/examples/XML_ex-1.xml'
                                }
                            ]
                        },
                        {
                            exampleName: 'XML Linking - Example 2',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/ODRL/examples/XML_ex-2.xml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Logical Constraints - Example 3',
                            resources: [
                                {
                                    language: 'XML',
                                    link: '../assets/languages/ODRL/examples/XML_ex-3.xml'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'use-case',
                    heading: {
                        title: 'OMA SpecWorks',
                        imageSrc: 'https://pbs.twimg.com/profile_images/978341705949868034/pGc4LOw9_400x400.jpg'
                    },
                    institution: {
                        name: 'Open Mobile Alliance SpecWorks',
                        link: 'https://omaspecworks.org/'
                    },
                    specifications: [
                        {
                            name: 'OMA Digital Rights Management (DRM)',
                            resources: [
                                {
                                    type: 'PDF',
                                    link: 'http://www.openmobilealliance.org/release/DRM/V2_2-20110419-C/OMA-TS-DRM_REL-V2_2-20110419-C.pdf'
                                },
                                {
                                    type: 'XML',
                                    link: 'http://www.openmobilealliance.org/release/DRM/V2_2-20110419-C/OMA-SUP-XSD_DRM_REL-V2_2-20110419-C.xsd'
                                },
                                {
                                    type: 'DTD',
                                    link: 'http://www.openmobilealliance.org/release/DRM/V2_2-20110419-C/OMA-SUP-DTD_DRM_REL-V2_2-20110419-C.dtd'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'use-case',
                    heading: {
                        title: 'IPTC Standards',
                        imageSrc: 'https://iptc.org/std/RightsML/2.0/images/iptc_sv_gradient_150x150.jpg'
                    },
                    institution: {
                        name: 'International Press Telecommunications Council (IPTC)',
                        link: 'https://iptc.org/'
                    },
                    specifications: [
                        {
                            name: 'IPTC RightsML',
                            resources: [
                                {
                                    type: 'PDF',
                                    link: 'https://www.iptc.org/std/RightsML/1.1/RightsML_1.1EP2-spec_1.pdf'
                                },
                                {
                                    type: 'HTML',
                                    link: 'https://iptc.org/std/RightsML/2.0/RightsML_2.0-specification.html'
                                },
                                {
                                    type: 'Turtle',
                                    link: 'http://www.iptc.org/std/RightsML/2.0/RightsML_2.0-ontology.ttl'
                                },
                                {
                                    type: 'GitHub',
                                    link: 'https://github.com/iptc/rightsml-dev'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'editors',
                    editors: [
                        'http://odrleditor.appspot.com/',
                        'https://www.dalicc.net/',
                        'http://licentia.inria.fr/',
                        'https://licences.csiro.au/'
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'spec',
                    name: 'ODRL v2.2',
                    imageSrc: 'https://www.w3.org/TR/odrl-model/00Model.svg',
                    typeSrc: 'https://www.w3.org/TR/odrl-model/#infoModel',
                    nameSrc: 'ODRL Information Model 2.2'
                }
            ]
        },
        {
            id: 'XPref',
            name: 'Xpath-based Preference Language',
            description: 'Preference language that makes use of XPath to deal with the shortcomings of APPEL when it comes to establish privacy preferences to be used by P3P enabled websites',
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                },
                {
                    name: 'preference',
                    dbPedia: 'http://dbpedia.org/page/Preference'
                }
            ],
            w3cStatus: '',
            dates: {
                created: '2003',
                lastUpdated: ''
            },
            idiom: [
                {
                    imageSrc: '../../assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'http://www.rsrikant.com/papers/www03_xpref.pdf'
                }
            ],
            responsible: {
                name: 'IBM Research - Almaden',
                link: 'https://www.research.ibm.com/labs/almaden/'
            },
            project: {
                name: '',
                link: ''
            },
            authors: [
                {
                    name: 'Rakesh Agrawal',
                    link: 'https://rakesh.agrawal-family.com/'
                },
                {
                    name: 'Jerry Kiernan',
                    link: 'https://dblp.org/pers/hd/k/Kiernan:Jerry'
                },
                {
                    name: 'Ramakrishnan Srikant',
                    link: 'http://www.rsrikant.com/'
                },
                {
                    name: 'Yirong Xu',
                    link: 'https://dblp.org/pers/x/Xu:Yirong.html'
                }
            ],
            elements: [
/*                 {
                    name: 'Policy',
                    link: 'https://www.w3.org/TR/odrl-vocab/#policyConcepts'
                } */
            ],
            rdf: [
/*                 {
                    type: 'JSON-LD Context',
                    link: 'https://www.w3.org/ns/odrl.jsonld'
                } */
            ],
            documentation: [
                {
                    type: 'PDF',
                    link: 'http://www.rsrikant.com/papers/www03_xpref.pdf'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the XPref documentation',
                    description: {
                        name: 'XPref documentation',
                        link: 'http://www.rsrikant.com/papers/www03_xpref.pdf'
                    },
                    solutions: [
                        {
                            exampleName: 'Specifying what is unacceptable -  section 4.3.1',
                            resources: []
                        },
                        {
                            exampleName: 'Specifying what is acceptable -  section 4.3.2',
                            resources: []
                        },
                        {
                            exampleName: 'Combinations -  section 4.3.3',
                            resources: []
                        }
                    ]
                }
            ],
            diagrams: [
                /* {
                    type: 'spec',
                    name: 'ODRL v2.2',
                    imageSrc: 'https://www.w3.org/TR/odrl-model/00Model.svg',
                    typeSrc: 'https://www.w3.org/TR/odrl-model/#infoModel',
                    nameSrc: 'ODRL Information Model 2.2'
                } */
            ]
        },
        {
            id: 'S4P',
            name: 'SecPAL for Privacy',
            description: "Language framework that extends SecPAL to express user's preferences related to the handling of their Personally Identifiable Information (PII) and web services' data-handling policies on treating the collected PIIs",
            domain: [
                {
                    name: 'PII',
                    dbPedia: 'http://dbpedia.org/page/Personally_identifiable_information'
                },
                {
                    name: 'preference',
                    dbPedia: 'http://dbpedia.org/page/Preference'
                }
            ],
            w3cStatus: '',
            dates: {
                created: '2009',
                lastUpdated: '2010'
            },
            idiom: [
                {
                    imageSrc: '../../assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.microsoft.com/en-us/research/wp-content/uploads/2010/04/main-1.pdf'
                }
            ],
            responsible: {
                name: 'Microsoft Research',
                link: 'https://www.microsoft.com/en-us/research/'
            },
            project: {
                name: '',
                link: ''
            },
            authors: [
                {
                    name: 'Moritz Y. Becker',
                    link: 'https://dblp.org/pers/b/Becker:Moritz_Y=.html'
                },
                {
                    name: 'Alexander Malkis',
                    link: 'https://dblp.uni-trier.de/pers/m/Malkis:Alexander.html'
                },
                {
                    name: 'Laurent Bussard',
                    link: 'https://www.microsoft.com/en-us/research/people/lbussard/'
                }
            ],
            elements: [
/*                 {
                    name: 'Policy',
                    link: 'https://www.w3.org/TR/odrl-vocab/#policyConcepts'
                } */
            ],
            rdf: [
/*                 {
                    type: 'JSON-LD Context',
                    link: 'https://www.w3.org/ns/odrl.jsonld'
                } */
            ],
            documentation: [
                {
                    type: 'S4P PDF',
                    link: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2010/04/main-1.pdf'
                },
                {
                    type: 'SecPAL PDF',
                    link: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2006/09/BeckerFournetGordon_AuthorizationLanguage.pdf'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the S4P documentation',
                    description: {
                        name: 'S4P documentation',
                        link: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2010/04/main-1.pdf'
                    },
                    solutions: [
                        {
                            exampleName: 'Extended example on Annex A',
                            resources: []
                        }
                    ]
                }
            ],
            diagrams: [
                /* {
                    type: 'spec',
                    name: 'ODRL v2.2',
                    imageSrc: 'https://www.w3.org/TR/odrl-model/00Model.svg',
                    typeSrc: 'https://www.w3.org/TR/odrl-model/#infoModel',
                    nameSrc: 'ODRL Information Model 2.2'
                } */
            ]
        },
        {
            id: 'AIR',
            name: 'Accountability In RDF',
            description: "Rule-based policy language based on N3Logic that supports rule nesting, rule reuse by assigning each rule a unique URI and automated action explanations performed by the AIR reasoner",
            domain: [
                {
                    name: 'accountability',
                    dbPedia: 'http://dbpedia.org/page/Accountability'
                },
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                }
            ],
            w3cStatus: '',
            dates: {
                created: '2007',
                lastUpdated: '2009'
            },
            idiom: [
                {
                    imageSrc: '../../assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'http://dig.csail.mit.edu/2009/AIR/'
                }
            ],
            responsible: {
                name: 'Decentralized Information Group - MIT',
                link: 'http://dig.csail.mit.edu//Overview.html'
            },
            project: {
                name: '',
                link: ''
            },
            authors: [
                {
                    name: 'Ankesh Khandelwal',
                    link: 'http://www.cs.rpi.edu/~ankesh/'
                },
                {
                    name: 'Jie Bao',
                    link: 'https://dblp.uni-trier.de/pers/hd/b/Bao_0001:Jie'
                },
                {
                    name: 'Lalana Kagal',
                    link: 'http://people.csail.mit.edu/lkagal/'
                },
                {
                    name: 'Ian Jacobi',
                    link: 'https://dblp.uni-trier.de/pers/hd/j/Jacobi:Ian'
                },
                {
                    name: 'Li Ding',
                    link: 'https://dblp.uni-trier.de/pers/hd/d/Ding_0001:Li'
                },
                {
                    name: 'James Hendler',
                    link: 'https://www.cs.rpi.edu/~hendler/'
                },
            ],
            elements: [
/*                 {
                    name: 'Abstract Action',
                    link: ''
                },
                {
                    name: 'Abstract Container',
                    link: ''
                },
                {
                    name: 'Rule Set',
                    link: ''
                },
                {
                    name: 'Rule',
                    link: ''
                }, */
            ],
            rdf: [
                {
                    type: 'Turtle',
                    link: 'http://dig.csail.mit.edu/TAMI/2007/amord/air.ttl'
                },
                {
                    type: 'AIR N3',
                    link: 'http://dig.csail.mit.edu/2009/AIR/air.n3'
                },
                {
                    type: 'AIR Justification N3',
                    link: 'http://dig.csail.mit.edu/2009/AIR/airjustification.n3'
                }
            ],
            documentation: [
                {
                    type: 'HTML',
                    link: 'http://dig.csail.mit.edu/2009/AIR'
                },
                {
                    type: 'PDF',
                    link: 'http://dig.csail.mit.edu/2010/Papers/RR2010/paper.pdf'
                },
                {
                    type: 'GitHub',
                    link: 'https://github.com/mit-dig/air-reasoner/'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the AIR Language Formalization documentation',
                    description: {
                        name: 'AIR Language Formalization',
                        link: 'https://tw.rpi.edu//proj/tami/AIR_Language_Formalization'
                    },
                    solutions: [
                        {
                            exampleName: 'Conference publication policy',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/air_language_formalization-example_2_1_2.n3'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Examples from the AIR Policy Tutorial',
                    description: {
                        name: 'AIR Policy Tutorial',
                        link: 'http://dig.csail.mit.edu/2009/AIR/tutorial/'
                    },
                    solutions: [
                        {
                            exampleName: 'Policy with Single Rule',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy1.n3'
                                },
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy2.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Rule with empty pattern',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy21.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Policy with Nested Rules',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy3.n3'
                                },
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy4.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Policy with Non-nested Rules',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy5.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Policy with Alternative Action (air:else)',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy16.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Variable Quantification and Scoping',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy6.n3'
                                },
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy8.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Multiple Policies in one Document',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy19.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Natural language explanation of the rule (air:description)',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy11.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Hiding Justification',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/policy12.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Math Policy',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/math.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'AIR Justifies',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/justifies.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'SPARQL',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/sparql.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Log includes',
                            resources: [
                                {
                                    language: 'N3',
                                    link: '../assets/languages/AIR/examples/includes.n3'
                                }
                            ]
                        },
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'spec',
                    name: 'AIR',
                    imageSrc: 'http://dig.csail.mit.edu/2009/AIR/air-ont.jpg',
                    typeSrc: 'http://dig.csail.mit.edu/2009/AIR/',
                    nameSrc: 'AIR Web Rule Language'
                }
            ]
        },
        {
            id: 'POL',
            name: 'Privacy Option Language',
            description: "Privacy contract language, inspired on financial option contracts, that provides privacy by design through data minimisation to define privacy contracts between data controllers and data subjects",
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                }
            ],
            w3cStatus: '',
            dates: {
                created: '2010',
                lastUpdated: '2013'
            },
            idiom: [
                {
                    imageSrc: '../../assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'http://kau.diva-portal.org/smash/get/diva2:623452/FULLTEXT01.pdf'
                }
            ],
            responsible: {
                name: 'Department of Mathematics and Computer Science, Karlstad University',
                link: 'https://www.kau.se/en/cs'
            },
            project: {
                name: 'PETWeb II',
                link: 'http://petweb2.projects.nislab.no/index.php/Main_Page'
            },
            authors: [
                {
                    name: 'Stefan Berthold',
                    link: 'https://dblp.uni-trier.de/pers/b/Berthold:Stefan.html'
                }
            ],
            elements: [
/*                 {
                    name: 'Personal data',
                    link: ''
                },
                {
                    name: 'Purpose',
                    link: ''
                },
                {
                    name: 'Observables',
                    link: ''
                },
                {
                    name: 'Time',
                    link: ''
                } */
            ],
            rdf: [
/*                 {
                    type: 'JSON-LD Context',
                    link: 'https://www.w3.org/ns/odrl.jsonld'
                } */
            ],
            documentation: [
                {
                    type: 'PDF',
                    link: 'http://kau.diva-portal.org/smash/get/diva2:623452/FULLTEXT01.pdf'
                }
            ],
            examples: [
/*                 {
                    type: 'sample',
                    title: 'Examples from the S4P documentation',
                    description: {
                        name: 'S4P documentation',
                        link: 'https://www.microsoft.com/en-us/research/wp-content/uploads/2010/04/main-1.pdf'
                    },
                    solutions: [
                        {
                            exampleName: 'Extended example on Annex A',
                            resources: []
                        }
                    ]
                } */
            ],
            diagrams: [
                /* {
                    type: 'spec',
                    name: 'ODRL v2.2',
                    imageSrc: 'https://www.w3.org/TR/odrl-model/00Model.svg',
                    typeSrc: 'https://www.w3.org/TR/odrl-model/#infoModel',
                    nameSrc: 'ODRL Information Model 2.2'
                } */
            ]
        },
        {}
    ]
}
