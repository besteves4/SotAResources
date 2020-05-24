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
                    title: 'Example 2.2 from the P3P specification',
                    description: {
                        name: 'P3P specification',
                        link: 'https://www.w3.org/TR/P3P/#ref_file_example'
                    },
                    solutions: [
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
                    type: 'sample',
                    title: 'Example 2.5 from the P3P specification',
                    description: {
                        name: 'P3P specification',
                        link: 'https://www.w3.org/TR/P3P/#cookies'
                    },
                    solutions: [
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
                    type: 'sample',
                    title: 'Example 2.6 from the P3P specification',
                    description: {
                        name: 'P3P specification',
                        link: 'https://www.w3.org/TR/P3P/#ref_file_method'
                    },
                    solutions: [
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
                    type: 'sample',
                    title: "Example 3.1: CatalogExample's Privacy Policy for Browsers",
                    description: {
                        name: 'P3P specification',
                        link: 'https://www.w3.org/TR/P3P/#Example_policy'
                    },
                    solutions: [
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
                    type: 'sample',
                    title: "Example 3.2: CatalogExample's Privacy Policy for Shoppers",
                    description: {
                        name: 'P3P specification',
                        link: 'https://www.w3.org/TR/P3P/#Example_policy'
                    },
                    solutions: [
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
            ],
            diagrams: [
                {
                    type: 'P3P v1',
                    imageSrc: '../../assets/languages/p3p/diagrams/P3Pv1.svg'
                }
            ]
        },
        {
            id: 'APPEL',
            name: 'A P3P Preference Exchange Language',
            description: 'P3P extension for users to express their preferences through a set of preference-rules. P3P enabled Web sites can use these preferences for automated or semi-automated decision-making',
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
                    title: '"Almost Anonymous" Ruleset (APPEL specification)',
                    description: {
                        name: 'APPEL specification',
                        link: 'https://www.w3.org/TR/P3P-preferences/#examples'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B1.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: '"Privacy And Commerce" Ruleset (APPEL specification)',
                    description: {
                        name: 'APPEL specification',
                        link: 'https://www.w3.org/TR/P3P-preferences/#examples'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B2.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: '"Look For The Seal" Ruleset (APPEL specification)',
                    description: {
                        name: 'APPEL specification',
                        link: 'https://www.w3.org/TR/P3P-preferences/#examples'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B3.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Information Only" Ruleset (APPEL specification)',
                    description: {
                        name: 'APPEL specification',
                        link: 'https://www.w3.org/TR/P3P-preferences/#examples'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B4.xml'
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
                    type: 'ODRL VOCAB',
                    link: 'https://www.w3.org/TR/odrl-vocab/'
                },
                {
                    type: 'GitHub',
                    link: 'https://github.com/w3c/poe'
                },
                {
                    type: 'ODRL MODEL',
                    link: 'https://www.w3.org/TR/odrl-model/'
                }
            ],
            examples: [
                {
                    type: 'sample',
                    title: 'XML Example - Example 1 (ODRL specification)',
                    description: {
                        name: 'ODRL specification',
                        link: 'https://www.w3.org/TR/odrl-vocab/#xml'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-1.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'XML Linking - Example 2 (ODRL specification)',
                    description: {
                        name: 'ODRL specification',
                        link: 'https://www.w3.org/TR/odrl-vocab/#xml'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-2.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Logical Constraints - Example 3 (ODRL specification)',
                    description: {
                        name: 'ODRL specification',
                        link: 'https://www.w3.org/TR/odrl-vocab/#xml'
                    },
                    solutions: [
                        {
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-3.xml'
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
                                    type: 'DOC',
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
                }
            ],
            diagrams: [
/*                 {
                    type: 'APPEL v1',
                    imageSrc: '../../assets/languages/APPEL/diagrams/APPELv1.svg'
                } */
            ]
        },
        {}
    ]
}
