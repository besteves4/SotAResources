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
        {}
    ]
}
