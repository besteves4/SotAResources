import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';
import { DiagramModalComponent } from '../diagram-modal/diagram-modal.component';
import { element } from 'protractor';

@Component({
    selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})

export class LanguagesComponent implements OnInit {

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
            description: 'Specification for websites to disclose privacy protocols that can be automatically read and interpreted by user agents',
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                }
            ],
            license: {
                name: 'W3C Obsolete Recommendation',
                link: 'https://www.w3.org/2018/Process-20180201/#rec-rescind'
            },
            dates: {
                created: '1998',
                lastUpdated: '2010'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.w3.org/TR/P3P/'
                },
                {
                    imageSrc: './assets/flags/Flag_of_France.svg',
                    lang: 'fr',
                    link: 'http://www.yoyodesign.org/doc/w3c/p3p1/index.html'
                },
                {
                    imageSrc: './assets/flags/Flag_of_Japan.svg.png',
                    lang: 'jp',
                    link: 'http://www.iajapan.org/trans2japanese/w3c/rec-p3p-20020416j.html'
                }
            ],
            responsible: [
                {
                    name: 'W3C P3P Specification Working Group',
                    link: 'https://www.w3.org/P3P/'
                }
            ],
            project: [],
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
                                    language: 'RDF',
                                    link: './assets/languages/p3p/examples/RDF_ex-2-2.xml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 2.5',
                            resources: [
                                {
                                    language: 'RDF',
                                    link: './assets/languages/p3p/examples/RDF_ex-2-5.xml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 2.6',
                            resources: [
                                {
                                    language: 'RDF',
                                    link: './assets/languages/p3p/examples/RDF_ex-2-6.xml'
                                }
                            ]
                        },
                        {
                            exampleName: "CatalogExample's Privacy Policy for Browsers - Example 3.1",
                            resources: [
                                {
                                    language: 'RDF',
                                    link: './assets/languages/p3p/examples/RDF_ex-3-1.xml'
                                }
                            ]
                        },
                        {
                            exampleName: "CatalogExample's Privacy Policy for Shoppers - Example 3.2",
                            resources: [
                                {
                                    language: 'RDF',
                                    link: './assets/languages/p3p/examples/RDF_ex-3-2.xml'
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
                    imageSrc: './assets/languages/p3p/diagrams/P3Pv1.svg',
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
            license: {
                name: 'W3C Working Draft',
                link: 'https://www.w3.org/2018/Process-20180201/#working-draft'
            },
            dates: {
                created: '1998',
                lastUpdated: '2002'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.w3.org/TR/P3P-preferences/'
                }
            ],
            responsible: [
                {
                    name: 'W3C P3P Specification Working Group',
                    link: 'https://www.w3.org/P3P/'
                }
            ],
            project: [],
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
            resources: [
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
                            resources: []
                        },
                        {
                            exampleName: '"Privacy And Commerce" Ruleset',
                            resources: []
                        },
                        {
                            exampleName: '"Look For The Seal" Ruleset',
                            resources: []
                        },
                        {
                            exampleName: '"Information Only" Ruleset',
                            resources: []
                        }
                    ]
                }
            ],
            diagrams: []
        },
        {
            id: 'ODRL',
            name: 'Open Digital Rights Language',
            description: 'Policy expression language that provides a model, vocabulary and encoding mechanisms to express information about permissions, prohibitions and duties related to an asset',
            domain: [
                {
                    name: 'digital rights',
                    dbPedia: 'http://dbpedia.org/page/Digital_rights'
                }
            ],
            license: {
                name: 'W3C Recommendation',
                link: 'https://www.w3.org/2018/Process-20180201/#rec-publication'
            },
            dates: {
                created: '2001',
                lastUpdated: '2019'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.w3.org/TR/odrl-vocab/'
                },
                {
                    imageSrc: './assets/flags/Flag_of_Japan.svg.png',
                    lang: 'jp',
                    link: 'http://www.asahi-net.or.jp/~ax2s-kmtn/internet/rights/REC-odrl-vocab-20180215.html'
                }
            ],
            responsible: [
                {
                    name: 'W3C ODRL Community Group',
                    link: 'https://www.w3.org/community/odrl/'
                }
            ],
            project: [],
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
            resources: [
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
                    type: 'ODRL Model',
                    link: 'https://www.w3.org/TR/odrl-model/'
                },
                {
                    type: 'ODRL CG GitHub',
                    link: 'https://github.com/w3c/odrl'
                },
                {
                    type: 'POE WG GitHub',
                    link: 'https://github.com/w3c/poe'
                },
                {
                    type: 'POE WG Wiki',
                    link: 'https://www.w3.org/2016/poe/wiki/Main_Page'
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
                            resources: []
                        },
                        {
                            exampleName: 'XML Linking - Example 2',
                            resources: []
                        },
                        {
                            exampleName: 'Logical Constraints - Example 3',
                            resources: []
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
            name: 'XPath-based Preference Language',
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
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2003',
                lastUpdated: ''
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'http://www.rsrikant.com/papers/www03_xpref.pdf'
                }
            ],
            responsible: [
                {
                    name: 'IBM Research - Almaden',
                    link: 'https://www.research.ibm.com/labs/almaden/'
                }
            ],
            project: [],
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
            elements: [],
            resources: [],
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
            diagrams: []
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
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2007',
                lastUpdated: '2009'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'http://dig.csail.mit.edu/2009/AIR/'
                }
            ],
            responsible: [
                {
                    name: 'Decentralized Information Group - MIT',
                    link: 'http://dig.csail.mit.edu//Overview.html'
                }
            ],
            project: [],
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
                {
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
                }
            ],
            resources: [
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
                        link: 'https://tw.rpi.edu//proj/tami/AIR_Language_Formalization#2.1.2._Example_AIR-program'
                    },
                    solutions: [
                        {
                            exampleName: 'Conference publication policy',
                            resources: []
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
                                    link: './assets/languages/AIR/examples/policy1.n3'
                                },
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy2.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Rule with empty pattern',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy21.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Policy with Nested Rules',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy3.n3'
                                },
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy4.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Policy with Non-nested Rules',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy5.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Policy with Alternative Action (air:else)',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy16.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Variable Quantification and Scoping',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy6.n3'
                                },
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy8.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Multiple Policies in one Document',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy19.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Natural language explanation of the rule (air:description)',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy11.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Hiding Justification',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/policy12.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Math Policy',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/math.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'AIR Justifies',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/justifies.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'SPARQL',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/sparql.n3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Log includes',
                            resources: [
                                {
                                    language: 'N3',
                                    link: './assets/languages/AIR/examples/includes.n3'
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
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2009',
                lastUpdated: '2010'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link:'https://www.microsoft.com/en-us/research/wp-content/uploads/2010/04/main-1.pdf'
                }
            ],
            responsible: [
                {
                    name: 'Microsoft Research',
                    link: 'https://www.microsoft.com/en-us/research/'
                }
            ],
            project: [],
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
            elements: [],
            resources: [],
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
            diagrams: []
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
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2010',
                lastUpdated: '2013'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'http://kau.diva-portal.org/smash/get/diva2:623452/FULLTEXT01.pdf'
                }
            ],
            responsible: [
                {
                    name: 'Department of Mathematics and Computer Science, Karlstad University',
                    link: 'https://www.kau.se/en/cs'
                }
            ],
            project: [
                {
                    name: 'PETWeb II',
                    link: 'http://petweb2.projects.nislab.no/index.php/Main_Page'
                }
            ],
            authors: [
                {
                    name: 'Stefan Berthold',
                    link: 'https://dblp.uni-trier.de/pers/b/Berthold:Stefan.html'
                }
            ],
            elements: [],
            resources: [],
            documentation: [
                {
                    type: 'PDF',
                    link: 'http://kau.diva-portal.org/smash/get/diva2:623452/FULLTEXT01.pdf'
                },
                {
                    type: 'PDF',
                    link: 'https://link.springer.com/content/pdf/10.1007%2F978-3-642-20769-3_3.pdf'
                }
            ],
            examples: [],
            diagrams: []
        },
        {
            id: 'PPO',
            name: 'Privacy Preference Ontology',
            description: 'Lightweight vocabulary to create fine-grained privacy preferences for Linked Data, specifically to allow or restrict access to data within RDF documents',
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
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2011',
                lastUpdated: '2013'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
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
            project: [],
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
                    imageSrc: './assets/ontologies/PPO/diagrams/ppo.PNG',
                    typeSrc: 'http://ceur-ws.org/Vol-813/ldow2011-paper01.pdf',
                    nameSrc: 'PPO article'
                }
            ]
        },
        {
            id: 'LegalRuleML',
            name: 'LegalRuleML Core Specification',
            description: "Rule interchange language that extends RuleML with formal features to represent and reason over legal norms, guidelines and policies",
            domain: [
                {
                    name: 'digital rights',
                    dbPedia: 'http://dbpedia.org/page/Digital_rights'
                },
                {
                    name: 'law',
                    dbPedia: 'https://dbpedia.org/page/Law'
                }
            ],
            license: {
                name: 'RF on Limited Terms',
                link: 'https://www.oasis-open.org/policies-guidelines/ipr/#RF-on-Limited-Mode'
            },
            dates: {
                created: '2012',
                lastUpdated: '2020'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/legalruleml-core-spec-v1.0.html'
                }
            ],
            responsible: [
                {
                    name: 'OASIS LegalRuleML Technical Committee',
                    link: 'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=legalruleml'
                }
            ],
            project: [],
            authors: [
                {
                    name: 'Monica Palmirani',
                    link: 'https://scholar.google.com/citations?user=G5C54V4AAAAJ'
                },
                {
                    name: 'Guido Governatori',
                    link: 'http://www.governatori.net/research/'
                },
                {
                    name: 'Tara Athan',
                    link: 'https://dblp.org/pid/74/10301.html'
                },
                {
                    name: 'Harold Boley',
                    link: 'https://dblp.org/pid/08/422.html'
                },
                {
                    name: 'Adrian Paschke',
                    link: 'https://www.mi.fu-berlin.de/inf/groups/ag-csw/Members/members/paschke.html'
                },
                {
                    name: 'Adam Wyner',
                    link: 'https://dblp.org/pid/73/3639.html'
                }
            ],
            elements: [
                {
                    name: 'Deontic Operators',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017883'
                },
                {
                    name: 'Sources',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017887'
                },
                {
                    name: 'Agent',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017888'
                },
                {
                    name: 'Jurisdiction',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017889'
                },
                {
                    name: 'Authority',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017890'
                },
                {
                    name: 'Time',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017891'
                },
                {
                    name: 'Context',
                    link: 'http://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html#_Toc38017894'
                }
            ],
            resources: [
                {
                    type: 'RDF',
                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/rdfs/'
                },
                {
                    type: 'XML',
                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/xsd-schema/'
                }
            ],
            documentation: [
                {
                    type: 'HTML',
                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html'
                },
                {
                    type: 'PDF',
                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.pdf'
                },
                {
                    type: 'GitHub',
                    link: 'https://github.com/oasis-tcs/legalruleml'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the LegalRuleML specification',
                    description: {
                        name: 'LegalRuleML specification',
                        link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/legalruleml-core-spec-v1.0-cs02.html'
                    },
                    solutions: [
                        {
                            exampleName: 'Example 1: Use of CURIEs to abbreviate IRIs',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex1-curies-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 2: Specification of References and LegalSources',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex2-references-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 3: Specification of deontic elements',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex3-deontic-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 4: Specification of agents, figures and roles',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex4-meta-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 5: Section 29 of the Australian “National Consumer Credit Protection Act 2009” (Act No. 134 of 2009)',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex5-section29new-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 6: Specification of temporal parameters',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex6-temporal-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 7: Specification of temporal parameters',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex7-temporal-data-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 8: Specification of statements',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex8-defeasible-normal.lrml'
                                },
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex8b-defeasible-normal.lrml'
                                },
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex8c-defeasible-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 9: Specification of alternatives of law interpretations',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex9-alternatives-normal.lrml'
                                },
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex9b-alternatives-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 11: Specification of associations',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex11-maternity_alternatives-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 12: US Code section 504',
                            resources: [
                                {
                                    language: 'XML',
                                    link: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/examples/normalized/ex12-USC_17_504_context-normal.lrml'
                                }
                            ]
                        },
                        {
                            exampleName: 'Representation of GDPR Articles 5(1)(a), 6(1)(a), 8(1), 12(7)',
                            resources: [
                                {
                                    language: 'GitHub',
                                    link: 'https://github.com/oasis-tcs/legalruleml/blob/master/usecases/usecase1.md'
                                },
                                {
                                    language: 'PDF',
                                    link: 'https://www.aclweb.org/anthology/2020.lrec-1.698.pdf'
                                }
                            ]
                        }
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'spec',
                    name: 'Statements',
                    imageSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/diagrams/statement-subclass.png',
                    typeSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/legalruleml-core-spec-v1.0.html',
                    nameSrc: 'LegalRuleML Core Specification v1.0'
                },
                {
                    type: 'spec',
                    name: 'Deontic',
                    imageSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/diagrams/deontic-subclass.png',
                    typeSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/legalruleml-core-spec-v1.0.html',
                    nameSrc: 'LegalRuleML Core Specification v1.0'
                },
                {
                    type: 'spec',
                    name: 'Alternatives',
                    imageSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/diagrams/alternatives.png',
                    typeSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/legalruleml-core-spec-v1.0.html',
                    nameSrc: 'LegalRuleML Core Specification v1.0'
                },
                {
                    type: 'spec',
                    name: 'Sources',
                    imageSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/diagrams/source.png',
                    typeSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/legalruleml-core-spec-v1.0.html',
                    nameSrc: 'LegalRuleML Core Specification v1.0'
                },
                {
                    type: 'spec',
                    name: 'Agents',
                    imageSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/cs02/diagrams/metadata-actor.png',
                    typeSrc: 'https://docs.oasis-open.org/legalruleml/legalruleml-core-spec/v1.0/legalruleml-core-spec-v1.0.html',
                    nameSrc: 'LegalRuleML Core Specification v1.0'
                }
            ]
        },
        {
            id: 'A-PPL',
            name: 'Accountable Policy Language',
            description: "Accountability policy language that extends PPL and XACML with the notification, data location, data retention and logging concepts to provide cloud users with a way to express and enforce obligations",
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                },
                {
                    name: 'accountability',
                    dbPedia: 'http://dbpedia.org/page/Accountability'
                }
            ],
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2013',
                lastUpdated: '2016'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'http://www.eurecom.fr/en/publication/4372/download/rs-publi-4372.pdf'
                }
            ],
            responsible: [],
            project: [
                {
                    name: 'A4Cloud',
                    link: 'http://a4cloud.eu/index.html'
                }
            ],
            authors: [
                {
                    name: 'Monir Azraoui',
                    link: 'https://dblp.org/pers/a/Azraoui:Monir.html'
                },
                {
                    name: 'Kaoutar Elkhiyaoui',
                    link: 'https://dblp.org/pers/e/Elkhiyaoui:Kaoutar.html'
                },
                {
                    name: 'Melek ̈Önen',
                    link: 'https://dblp.uni-trier.de/pers/=/=Ouml=nen:Melek.html'
                },
                {
                    name: 'Karin Bernsmed',
                    link: 'https://dblp.org/pers/b/Bernsmed:Karin.html'
                },
                {
                    name: 'Anderson Santana de Oliveira',
                    link: 'https://dblp.org/pers/o/Oliveira:Anderson_Santana_de.html'
                },
                {
                    name: 'Jakub Sendor',
                    link: 'https://dblp.org/pers/s/Sendor:Jakub.html'
                }
            ],
            elements: [
                {
                    name: 'Policy',
                    link: ''
                },
                {
                    name: 'Rule',
                    link: ''
                },
                {
                    name: 'Target',
                    link: ''
                },
                {
                    name: 'Resource',
                    link: ''
                },
                {
                    name: 'Action',
                    link: ''
                },
                {
                    name: 'Trigger',
                    link: ''
                },
                {
                    name: 'Subject',
                    link: ''
                },
                
                {
                    name: 'Purpose',
                    link: ''
                },
                
            ],
            resources: [],
            documentation: [
                {
                    type: 'A-PPL PDF',
                    link: 'http://www.eurecom.fr/en/publication/4372/download/rs-publi-4372.pdf'
                },
                {
                    type: 'PPL PDF',
                    link: 'https://air.unimi.it/retrieve/handle/2434/158842/150231/Trabelisi.pdf'
                },
                {
                    type: 'XACML HTML',
                    link: 'http://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the A-PPL documentation',
                    description: {
                        name: 'A-PPL documentation',
                        link: 'http://www.eurecom.fr/en/publication/4372/download/rs-publi-4372.pdf'
                    },
                    solutions: [
                        {
                            exampleName: 'Use case: Medical sensor networks in the Cloud - section 5.1',
                            resources: []
                        }
                    ]
                },
                {
                    type: 'deliverables',
                    projectDeliverables: {
                        name: 'A4Cloud',
                        link: 'http://cloudaccountability.eu/deliverables'
                    },
                    deliverables: [
                        {
                            name: 'D34.1 - Policy Representation Framework',
                            link: 'http://cloudaccountability.eu/sites/default/files/D34.1%20Policy%20representation%20Framework.pdf'
                        },
                        {
                            name: 'D34.2 - Policy representation and enforcement techniques',
                            link: 'http://cloudaccountability.eu/sites/default/files/D34.2%20Policy%20representation%20and%20enforcement%20techniques.pdf'
                        }
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'spec',
                    name: 'A-PPL',
                    imageSrc: './assets/languages/A-PPL/diagrams/fig1.2-d34.1.PNG',
                    typeSrc: 'http://cloudaccountability.eu/sites/default/files/D34.1%20Policy%20representation%20Framework.pdf',
                    nameSrc: 'D34.1 - Policy Representation Framework'
                }
            ]
        },
        {
            id: 'P2U',
            name: 'Purpose-To-Use',
            description: "Policy language that builds on the purpose-relevance-sharing principle with the aim of enforcing privacy while enabling the secondary sharing and usage of data on the web",
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                }
            ],
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2014',
                lastUpdated: ''
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'https://ieeexplore.ieee.org/document/6957279'
                }
            ],
            responsible: [
                {
                    name: 'Department of Computer Science, University of Saskatchewan',
                    link: 'https://www.cs.usask.ca/'
                }
            ],
            project: [],
            authors: [
                {
                    name: 'Johnson Iyilade',
                    link: 'https://dblp.org/pers/i/Iyilade:Johnson.html'
                },
                {
                    name: 'Julita Vassileva',
                    link: 'http://julita.usask.ca/'
                }
            ],
            elements: [
                {
                    name: 'Policy',
                    link: ''
                },
                {
                    name: 'Data Provider',
                    link: ''
                },
                {
                    name: 'User',
                    link: ''
                },
                {
                    name: 'Purpose',
                    link: ''
                },
                {
                    name: 'Data Consumer',
                    link: ''
                },
                {
                    name: 'Retention',
                    link: ''
                },
                {
                    name: 'Data Group',
                    link: ''
                },
                {
                    name: 'Data',
                    link: ''
                }
            ],
            resources: [],
            documentation: [
                {
                    type: 'PDF',
                    link: 'https://ieeexplore.ieee.org/document/6957279'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the P2U documentation',
                    description: {
                        name: 'P2U documentation',
                        link: 'https://ieeexplore.ieee.org/document/6957279'
                    },
                    solutions: [
                        {
                            exampleName: 'P2U policy in XML format - Figure 2',
                            resources: [
                                {
                                    language: 'GIF',
                                    link: 'https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/6954698/6957265/6957279/6957279-fig-2-source-small.gif'
                                }]
                        }
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'spec',
                    name: 'P2U',
                    imageSrc: 'https://ieeexplore.ieee.org/mediastore_new/IEEE/content/media/6954698/6957265/6957279/6957279-fig-1-source-small.gif',
                    typeSrc: 'https://ieeexplore.ieee.org/document/6957279',
                    nameSrc: 'P2U documentation'
                }
            ]
        },
        {
            id: 'SPL',
            name: 'SPECIAL Usage Policy Language',
            description: "Usage language that can be used to specify in formal terms both the data subjects' consent and the data controllers' usage policies, to be in compliance with the GDPR",
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                },
                {
                    name: 'transparency',
                    dbPedia: 'http://dbpedia.org/page/Category:Transparency_(behavior)'
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
                    link: 'https://ai.wu.ac.at/policies/policylanguage/'
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
                    name: 'Sabrina Kirrane',
                    link: 'http://sabrinakirrane.com/'
                },
                {
                    name: 'Iliana Mineva Petrova',
                    link: 'https://dblp.org/pers/p/Petrova:Iliana_M=.html'
                },
                {
                    name: 'Luigi Sauro',
                    link: 'https://dblp.uni-trier.de/pers/s/Sauro:Luigi.html'
                },
                {
                    name: 'Eva Schlehahn',
                    link: 'https://dblp.org/pers/s/Schlehahn:Eva.html'
                },
            ],
            elements: [
                {
                    name: 'Data',
                    link: 'https://www.specialprivacy.eu/vocabs/data'
                },
                {
                    name: 'Duration',
                    link: 'https://www.specialprivacy.eu/vocabs/duration'
                },
                {
                    name: 'Location',
                    link: 'https://www.specialprivacy.eu/vocabs/locations'
                },
                {
                    name: 'Processing',
                    link: 'https://www.specialprivacy.eu/vocabs/processing'
                },
                {
                    name: 'Purpose',
                    link: 'https://www.specialprivacy.eu/vocabs/purposes'
                },
                {
                    name: 'Recipient',
                    link: 'https://www.specialprivacy.eu/vocabs/recipients'
                }
            ],
            resources: [
                {
                    type: 'OWL',
                    link: 'https://www.specialprivacy.eu/images/documents/func_usage-policy-language-1.0.owl'
                }
            ],
            documentation: [
                {
                    type: 'HTML',
                    link: 'https://ai.wu.ac.at/policies/policylanguage/'
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
                    title: 'Examples from the SPL specification',
                    description: {
                        name: 'SPL specification',
                        link: 'https://ai.wu.ac.at/policies/policylanguage/'
                    },
                    solutions: [
                        {
                            exampleName: 'Example 1: Abstract policy',
                            resources: [
                                {
                                    language: 'OWL',
                                    link: 'https://ai.wu.ac.at/policies/policylanguage/#ex1'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 2: General usage policy in SPECIAL',
                            resources: [
                                {
                                    language: 'OWL',
                                    link: 'https://ai.wu.ac.at/policies/policylanguage/#ex2'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 3: General usage policy in SPECIAL including a logical equivalence',
                            resources: [
                                {
                                    language: 'OWL',
                                    link: 'https://ai.wu.ac.at/policies/policylanguage/#ex3'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 4: Ellaborated policy',
                            resources: [
                                {
                                    language: 'OWL',
                                    link: 'https://ai.wu.ac.at/policies/policylanguage/#ex4'
                                }
                            ]
                        },
                        {
                            exampleName: 'Example 5: Sticky policies',
                            resources: [
                                {
                                    language: 'OWL',
                                    link: 'https://ai.wu.ac.at/policies/policylanguage/#ex5'
                                }
                            ]
                        },
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
                            name: 'D2.1 - Policy Language V1',
                            link: 'https://www.specialprivacy.eu/images/documents/SPECIAL_D21_M12_V10.pdf'
                        },
                        {
                            name: 'D2.5 - Policy Language V2',
                            link: 'https://www.specialprivacy.eu/images/documents/SPECIAL_D25_M21_V10.pdf'
                        }
                    ]
                },
                {
                    type: 'use-case',
                    heading: {
                        title: 'Proximus',
                        imageSrc: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEzyH2v-_XUqg/company-logo_200_200/0?e=2159024400&v=beta&t=UiruiM5e4sRZKjEc31nrjo2DDU3DaEjmqhGUFh1sMg4'
                    },
                    institution: {
                        name: 'Proximus',
                        link: 'https://www.proximus.be/en/'
                    },
                    specifications: [
                        {
                            name: 'Personalized touristic recommendations',
                            resources: [
                                {
                                    type: 'PDF',
                                    link: 'https://www.specialprivacy.eu/images/documents/report-D5.pdf'
                                },
                                {
                                    type: 'OWL',
                                    link: './assets/languages/SPL/examples/proximus.owl'
                                },
                                {
                                    type: 'DPV CG Wiki',
                                    link: 'https://www.w3.org/community/dpvcg/wiki/SPECIAL/Proximus_use_case'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'use-case',
                    heading: {
                        title: 'Thomson Reuters',
                        imageSrc: 'https://i7.pngflow.com/pngimage/471/378/png-thomson-reuters-corporation-business-avox-limited-reuters-tv-business-orange-people-logo-symmetry-clipart.png'
                    },
                    institution: {
                        name: 'Thomson Reuters',
                        link: 'https://www.thomsonreuters.com/en.html'
                    },
                    specifications: [
                        {
                            name: 'Support anti-money laundering requirements.',
                            resources: [
                                {
                                    type: 'PDF',
                                    link: 'https://www.specialprivacy.eu/images/documents/report-D5.pdf'
                                },
                                {
                                    type: 'OWL',
                                    link: './assets/languages/SPL/examples/tr.owl'
                                },
                                {
                                    type: 'DPV CG Wiki',
                                    link: 'https://www.w3.org/community/dpvcg/wiki/SPECIAL/TR_use_case'
                                }
                            ]
                        }
                    ]
                },
            ],
            diagrams: []
        },
        {
            id: 'DPF',
            name: 'Declarative Policy Framework',
            description: "Privacy policy framework that uses ontologies as a common data model to specify permissive and restrictive policies which are used to build user interfaces, so that users are not burdened with technical formalisms of the language",
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                },
                {
                    name: 'ontology',
                    dbPedia: ''
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
                    link: 'https://sunflower.csl.sri.com/wp-content/uploads/2018/05/policy-language.pdf'
                }
            ],
            responsible: [
                {
                    name: 'Defense  Advanced  Research  Projects  Agency’s (DARPA’s) Brandeis program',
                    link: ''
                }
            ],
            project: [],
            authors: [
                {
                    name: 'Karsten Martiny',
                    link: 'https://dblp.org/pers/m/Martiny:Karsten.html'
                },
                {
                    name: 'Daniel Elenius',
                    link: 'https://dblp.org/pers/e/Elenius:Daniel.html'
                },
                {
                    name: 'Grit Denker',
                    link: 'https://dblp.uni-trier.de/pers/d/Denker:Grit.html'
                }
            ],
            elements: [
                {
                    name: 'Policy rule',
                    link: ''
                },
                {
                    name: 'Policy authority',
                    link: ''
                },
                {
                    name: 'Data requester',
                    link: ''
                },
                {
                    name: 'Data',
                    link: ''
                },
                {
                    name: 'Time of request',
                    link: ''
                },
                {
                    name: 'Constraints',
                    link: ''
                } 
            ],
            resources: [],
            documentation: [
                {
                    type: 'PDF',
                    link: 'https://sunflower.csl.sri.com/wp-content/uploads/2018/05/policy-language.pdf'
                },
                {
                    type: 'PDF',
                    link: 'https://sunflower.csl.sri.com/wp-content/uploads/2020/02/policy-overrides.pdf'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'Examples from the "Partial Decision Overrides in a Declarative Policy Framework" article',
                    description: {
                        name: '"Partial Decision Overrides in a Declarative Policy Framework" article',
                        link: 'https://sunflower.csl.sri.com/wp-content/uploads/2020/02/policy-overrides.pdf'
                    },
                    solutions: [
                        {
                            exampleName: 'Pandemic use-case - monitor the disease’s outbreak',
                            resources: []
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Examples from the "Protecting Privacy with a Declarative Policy Framework" article',
                    description: {
                        name: '"Protecting Privacy with a Declarative Policy Framework" article',
                        link: 'https://sunflower.csl.sri.com/wp-content/uploads/2018/05/policy-language.pdf'
                    },
                    solutions: [
                        {
                            exampleName: 'Pandemic use-case - monitor the disease’s outbreak',
                            resources: []
                        }
                    ]
                }
            ],
            diagrams: []
        },
        {
            id: 'LPL',
            name: 'Layered Privacy Language',
            description: "Privacy language which promotes the expression and enforcement of GDPR’s legal requirements related to consent, personal data provenance and retention",
            domain: [
                {
                    name: 'privacy',
                    dbPedia: 'http://dbpedia.org/page/Category:Privacy'
                },
                {
                    name: 'provenance',
                    dbPedia: 'https://dbpedia.org/page/Provenance'
                }
            ],
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2018',
                lastUpdated: '2019'
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'https://link.springer.com/chapter/10.1007%2F978-3-662-57932-9_2'
                }
            ],
            responsible: [
                {
                    name: 'Distributed Multimedia Information Systems (DIMIS), University of Passau, Germany',
                    link: 'https://irixys.uni-passau.de/dimis-distributed-multimedia-information-systems-university-of-passau-chair-of-data-science/'
                }
            ],
            project: [],
            authors: [
                {
                    name: 'Armin Gerl',
                    link: 'https://dblp.org/pid/224/2559.html'
                },
                {
                    name: 'Nadia Bennani',
                    link: 'https://dblp.org/pid/b/NadiaBennani.html'
                },
                {
                    name: 'Harald Kosch',
                    link: 'https://dblp.org/pid/k/HaraldKosch.html'
                },
                {
                    name: 'Lionel Brunie',
                    link: 'https://dblp.org/pid/29/857.html'
                }
            ],
            elements: [
                {
                    name: 'Data Source',
                    link: ''
                },
                {
                    name: 'Purpose',
                    link: ''
                },
                {
                    name: 'Data Recipient',
                    link: ''
                },
                {
                    name: 'Data',
                    link: ''
                },
                {
                    name: 'Retention',
                    link: ''
                },
                {
                    name: 'Anonymization Method',
                    link: ''
                }

            ],
            resources: [],
            documentation: [
                {
                    type: 'PDF',
                    link: 'https://link.springer.com/chapter/10.1007%2F978-3-662-57932-9_2'
                },
                {
                    type: 'PDF',
                    link: 'https://dl.acm.org/doi/pdf/10.1145/3230833.3233267'
                }
            ],
            examples: [],
            diagrams: [
                {
                    type: 'spec',
                    name: 'Initial',
                    imageSrc: 'https://media.springernature.com/lw785/springer-static/image/chp%3A10.1007%2F978-3-662-57932-9_2/MediaObjects/472181_1_En_2_Fig2_HTML.gif',
                    typeSrc: 'https://link.springer.com/chapter/10.1007%2F978-3-662-57932-9_2',
                    nameSrc: '"LPL, Towards a GDPR-Compliant Privacy Language: Formal Definition and Usage" article'
                },
                {
                    type: 'spec',
                    name: 'Last update',
                    imageSrc: 'https://d3i71xaburhd42.cloudfront.net/d8efa3566aeb905cbe56134f1013f235f73ade92/8-Figure4-1.png',
                    typeSrc: 'https://dl.acm.org/doi/pdf/10.1145/3230833.3233267',
                    nameSrc: '"Critical Analysis of LPL according to Articles 12 - 14 of the GDPR" article'
                },
                {
                    type: 'spec',
                    name: 'UI',
                    imageSrc: 'https://d3i71xaburhd42.cloudfront.net/490f6649c279ca65a6d2015c0312e3522fc625f9/500px/5-Figure2-1.png',
                    typeSrc: 'https://dl.gi.de/bitstream/handle/20.500.12116/16908/Beitrag_540_final__a.pdf?sequence=1&isAllowed=y',
                    nameSrc: '"LPL Personal Privacy Policy User Interface: Design and Evaluation" article'
                }
            ]
        },
        {
            id: 'PMO',
            name: 'BPR4GDPR Policy Model Ontology',
            description: "Rule-based framework that extends BPR4GDPR's Information Model Ontology (IMO) to define permissions, prohibitions and obligations over actions under specific purposes and contexts",
            domain: [
                {
                    name: 'digital rights',
                    dbPedia: 'http://dbpedia.org/page/Digital_rights'
                }
            ],
            license: {
                name: '',
                link: ''
            },
            dates: {
                created: '2019',
                lastUpdated: ''
            },
            idiom: [
                {
                    imageSrc: './assets/flags/uk_flag.png',
                    lang: 'en',
                    link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D2.3-Initial-Specification-of-BPR4GDPR-architecture-%E2%80%94-final.pdf'
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
                    name: 'Nikolaos Dellas',
                    link: 'https://dblp.org/pers/d/Dellas:Nikolaos_L=.html'
                }
            ],
            elements: [
                {
                    name: 'Rules',
                    link: ''
                },
                {
                    name: 'Actions',
                    link: ''
                },
                {
                    name: 'Required actions',
                    link: ''
                },
                {
                    name: 'Concrete entities',
                    link: ''
                },
                {
                    name: 'Enhanced entities',
                    link: ''
                },
                {
                    name: 'Expressions',
                    link: ''
                },
                {
                    name: 'Skeletons',
                    link: ''
                }
            ],
            resources: [],
            documentation: [
                {
                    type: 'PDF',
                    link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D2.3-Initial-Specification-of-BPR4GDPR-architecture-%E2%80%94-final.pdf'
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
                            name: 'D2.3 - Initial Specification of BPR4GDPR architecture',
                            link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D2.3-Initial-Specification-of-BPR4GDPR-architecture-%E2%80%94-final.pdf'
                        },
                        {
                            name: 'D3.1 - Compliance ontology',
                            link: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D3.1-Compliance-Ontology-1.0.pdf'
                        },
                    ]
                }
            ],
            diagrams: [
                {
                    type: 'spec',
                    name: 'PMO',
                    imageSrc: 'https://www.researchgate.net/profile/Joaquin_Garcia-Alfaro/publication/260706010/figure/fig2/AS:296857856167937@1447787836378/Policy-Model-Ontology-PMO.png',
                    typeSrc: 'https://www.researchgate.net/publication/260706010_Leveraging_Ontologies_upon_a_Holistic_Privacy-Aware_Access_Control_Model',
                    nameSrc: '"Leveraging Ontologies upon a Holistic Privacy-Aware Access Control Model" article'
                },
                {
                    type: 'spec',
                    name: 'PMO rules format',
                    imageSrc: './assets/languages/PMO/diagrams/PMOformat_fig5_d23.PNG',
                    typeSrc: 'https://www.bpr4gdpr.eu/wp-content/uploads/2019/06/D2.3-Initial-Specification-of-BPR4GDPR-architecture-%E2%80%94-final.pdf',
                    nameSrc: 'D2.3 - Initial Specification of BPR4GDPR architecture'
                }
            ]
        }
    ]
}
