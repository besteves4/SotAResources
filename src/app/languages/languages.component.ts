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
                    description: [
                        'P3P policy /P3P/Policies.xml#first applies to the entire site, except resources whose paths begin with /catalog, /cgi-bin, or /servlet.',
                        'P3P policy /P3P/Policies.xml#second applies to all resources whose paths begin with /catalog.',
                        'P3P policy /P3P/Policies.xml#third applies to all resources whose paths begin with /cgi-bin or /servlet, except for /servlet/unknown.',
                        'No statement is made about what P3P policy applies to /servlet/unknown.',
                        'These statements are valid for 2 days.'
                    ],
                    solutions: [
                        {
                            id: 1,
                            language: 'XML',
                            link: '../assets/languages/p3p/examples/XML_ex-2-2.xml'
                        },
                        {
                            id: 2,
                            language: 'RDF',
                            link: '../assets/languages/p3p/examples/RDF_ex-2-2.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Example 2.5 from the P3P specification',
                    description: [
                        '/P3P/Policies.xml#first applies to all cookies, except cookies with the cookie name value of "obnoxious-cookie", a domain value of ".example.com", and a path value of "/"',
                        '/P3P/Policies.xml#second applies to all cookies with the cookie name of "obnoxious-cookie", a domain value of ".example.com", and a path value of "/".',
                    ],
                    solutions: [
                        {
                            id: 3,
                            language: 'XML',
                            link: '../assets/languages/p3p/examples/XML_ex-2-5.xml'
                        },
                        {
                            id: 4,
                            language: 'RDF',
                            link: '../assets/languages/p3p/examples/RDF_ex-2-5.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Example 2.6 from the P3P specification',
                    description: [
                        '/P3P/Policies.xml#first applies to all resources whose paths begin with /docs/ for GET and HEAD methods',
                        '/P3P/Policies.xml#second applies for PUT and DELETE methods, the following policy reference would be written'
                    ],
                    solutions: [
                        {
                            id: 5,
                            language: 'XML',
                            link: '../assets/languages/p3p/examples/XML_ex-2-6.xml'
                        },
                        {
                            id: 6,
                            language: 'RDF',
                            link: '../assets/languages/p3p/examples/RDF_ex-2-6.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: "Example 3.1: CatalogExample's Privacy Policy for Browsers",
                    description: [
                        'At CatalogExample, we care about your privacy. When you come to our site to look for an item, we will only use this information to improve our site and will not store it with information we could use to identify you.',
                        'CatalogExample, Inc. is a licensee of the PrivacySealExample Program. The PrivacySealExample Program ensures your privacy by holding Web site licensees to high privacy standards and confirming with independent auditors that these information practices are being followed.',                        
                        'Questions regarding this statement should be directed to: CatalogExample, 4000 Lincoln Ave., Birmingham, MI 48009 USA, email: catalog@example.com, Telephone 248-EXAMPLE (248-392-6753).',
                        'If we have not responded to your inquiry or your inquiry has not been satisfactorily addressed, you can contact PrivacySealExample at http://www.privacyseal.example.org. CatalogExample will correct all errors or wrongful actions arising in connection with the privacy policy.',
                        'When you browse through our site we collect: the basic information about your computer and connection to make sure that we can get you the proper information and for security purposes; aggregate information on what pages consumers access or visit to improve our site.',
                        'Data retention: We purge every two weeks the browsing information that we collect.'
                    ],
                    solutions: [
                        {
                            id: 7,
                            language: 'XML',
                            link: '../assets/languages/p3p/examples/XML_ex-3-1.xml'
                        },
                        {
                            id: 8,
                            language: 'RDF',
                            link: '../assets/languages/p3p/examples/RDF_ex-3-1.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: "Example 3.2: CatalogExample's Privacy Policy for Shoppers",
                    description: [
                        "At CatalogExample, we care about your privacy. We will never share your credit card number or any other financial information with any third party. With your permission only, we will share information with carefully selected marketing partners that meet either the preferences that you've specifically provided or your past purchasing habits. The more we and know about your likes and dislikes, the better we can tailor offerings to your needs.",
                        "CatalogExample is a licensee of the PrivacySealExample Program. The PrivacySealExample Program ensures your privacy by holding Web site licensees to high privacy standards and confirming with independent auditors that these information practices are being followed.",
                        "Questions regarding this statement should be directed to: CatalogExample, 4000 Lincoln Ave., Birmingham, MI 48009 USA, email: catalog@example.com, Telephone +1 248-EXAMPLE (+1 248-392-6753)",
                        "If we have not responded to your inquiry or your inquiry has not been satisfactorily addressed, you can contact PrivacySealExample - http://privacyseal.example.org/privacyseal. CatalogExample will correct all errors or wrongful actions arising in connection with the privacy policy.",
                        "When you browse through our site we collect: the basic information about your computer and connection to make sure that we can get you the proper information and for security purposes; and aggregate information on what pages consumers access or visit to improve our site",
                        "If you choose to purchase an item we will ask you for more information including:  your name and address so that we can have your purchase delivered to you and so we can contact you in the future; your email address and telephone number so we can contact you; a login and password to use to update your information at any time in the future; and financial information to complete your purchase (you may choose to store this for future use); optionally, you can enter other demographic information so that we can tailor services to you in the future.",
                        "Also on this page we will give you the option to choose if you would like to receive email, telephone calls or written service from CatalogExample or from our carefully selected marketing partners who maintain similar privacy practices. If you would like to receive these solicitations simply check the appropriate boxes. You can choose to stop participating at any time simply by changing your preferences.",
                        "Changing and Updating personal information: Consumers can change all of their personal account information by going to the preferences section of CatalogExample at http://catalog.example.com/preferences.html. You can change your address, telephone number, email address, password as well as your privacy settings.",
                        "Cookies: CatalogExample uses cookies only to see if you have been an CatalogExample customer in the past and, if so, customize services based on your past browsing habits and purchases. We do not store any personal data in the cookie nor do we share or sell the any of the information with other parties or affiliates.",
                        "Data retention: We will keep the information about you and your purchases for as long as you remain our customer. If you do not place an order from us for one year we will remove your information from our databases."
                    ],
                    solutions: [
                        {
                            id: 9,
                            language: 'XML',
                            link: '../assets/languages/p3p/examples/XML_ex-3-2.xml'
                        },
                        {
                            id: 10,
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
                    description: [
                        'This ruleset provides a nearly anonymous browsing experience.',
                        'It prompts the user for a decision about Web sites that make an access disclosure other than "identifiable data is not used."',
                        'It also prompts for Web sites that collect physical contact information, online contact information, financial account identifiers, and data described as "other" data.',
                        'All prompts imply that all but the absolutely necessary request headers should be suppressed if the user decides to access the resource.',
                        'It allows for the collection of other kinds of data and the use of state management mechanisms as long as this data will not be shared, will not be used for contacting visitors for marking, will not be used for individual tailoring, and will not be used for purposes described as "other" uses.',
                        'Users wishing to engage in electronic commerce activities that require the exchange of personal information such as payment and billing information will have to override these settings on a site by site basis.'
                    ],
                    solutions: [
                        {
                            id: 11,
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B1.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: '"Privacy And Commerce" Ruleset (APPEL specification)',
                    description: [
                        'This ruleset allows users to exchange personal information needed for electronic commerce activities while providing warning prompts when that information may be shared with legal entities following different practices, public fora, or unrelated third parties; or used for marketing, tailoring, or "other" purposes.',
                        'A warning prompt will also be provided if the site collects healthcare information.',
                        'All warnings imply that all but the absolutely necessary request headers should be suppressed if the user decides to access the resource.',
                        'An informational prompt will be provided at sites that provide no access to identifiable information.',
                    ],
                    solutions: [
                        {
                            id: 12,
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B2.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: '"Look For The Seal" Ruleset (APPEL specification)',
                    description: [
                        'This ruleset allows users to exchange any type of personal information for any purpose with Web sites that have either a "PrivacyProtect" or "TrustUs" seal as long as those sites do not share the information with unrelated third parties.',
                        'It also allows users to exchange personal information needed for electronic commerce activities with any site, while providing warning prompts (and suppressing unnecessary request headers) when that information may be shared with legal entities following different practices, public fora, or unrelated third parties; or used for marketing, tailoring, or "other" purposes by sites that do not have a seal.',
                        'An informational prompt will be provided at sites that have seals and collect healthcare information; a warning prompt (again, suppressing all unnecessary headers) will be provided at sites that do not have seals and collect healthcare information.',
                        'An informational prompt will be provided at sites that provide no access.'
                    ],
                    solutions: [
                        {
                            id: 13,
                            language: 'XML',
                            link: '../assets/languages/APPEL/examples/XML_ex-B3.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Information Only" Ruleset (APPEL specification)',
                    description: [
                        'This ruleset allows users to exchange any type of personal information for any purpose.',
                        'However, it provides informational prompts when sites collect data for marketing, pseudonymous or individual tailoring, or "other" purposes; share data with legal entities following different practices, public fora, or unrelated third parties; or collect healthcare information.'
                    ],
                    solutions: [
                        {
                            id: 14,
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
                    title: 'Example 1 (ODRL specification)',
                    description: [
                        'The target asset and assigner and assignee parties are defined at the policy-level, and hence, are applied to both permission rules.',
                        'The first permission allows the assignee to play the target asset as long as they accept they will be tracked.',
                        'The second permission allows the assignee to distribute the target asset to the identified country (Italy) for a compensation payment of EUR5,000.'
                    ],
                    solutions: [
                        {
                            id: 15,
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-1.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'XML Linking - Example 2 (ODRL specification)',
                    description: [
                        'To support repeating the same element content across permissions and prohibitions, the asset, party, constraint, action, and duty elements support the xml id and idref attributes.',
                        'Any of these elements that has been identified using the id attribute can then be referred to by an element with the same name using the idref attribute.',
                        'In this case, the referring element must have no other content.',
                        'As shown in the below example, the prohibition refers to elements defined in the permission, except for the constraint element.',
                        'In this case, the assignee can play the music asset in Italy but not in France.'
                    ],
                    solutions: [
                        {
                            id: 16,
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-2.xml'
                        }
                    ]
                },
                {
                    type: 'sample',
                    title: 'Logical Constraints - Example 3 (ODRL specification)',
                    description: [
                        'To support logical constraints, constraint objects can be expressed at the policy level and locally identified with the id attribute.',
                        'The logical constraint (in the rule) can then refer to these constraints using its #id in the leftOperand, and the logical relationship in the name attribute.',                       
                        'The below example shows two constraints defined with ids C1 and C2.',
                        'The logical constraint in the permission refers to these using the #C1 and #C2 values in the rightOperand, and the logical relationship (xone) in the name attribute.'
                    ],
                    solutions: [
                        {
                            id: 17,
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-3.xml'
                        }
                    ]
                },
                {
                    type: 'use-case',
                    heading: {
                        title: 'OMA SpecWorks',
                        imageSrc: '../../assets/flags/Flag_of_Japan.svg.png'
                    },
                    institution: {
                        name: '',
                        link: 'https://omaspecworks.org/'
                    },
                    description: [
                        'To support logical constraints, constraint objects can be expressed at the policy level and locally identified with the id attribute.',
                        'The logical constraint (in the rule) can then refer to these constraints using its #id in the leftOperand, and the logical relationship in the name attribute.',                       
                        'The below example shows two constraints defined with ids C1 and C2.',
                        'The logical constraint in the permission refers to these using the #C1 and #C2 values in the rightOperand, and the logical relationship (xone) in the name attribute.'
                    ],
                    solutions: [
                        {
                            id: 17,
                            language: 'XML',
                            link: '../assets/languages/ODRL/examples/XML_ex-3.xml'
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
