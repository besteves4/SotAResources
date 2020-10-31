import { Component, OnInit } from '@angular/core';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

    faTwitterSquare = faTwitterSquare;

    footer = {
        logos: {
            oeg: {
                imgSrc: './../assets/footer/logooeg.png',
                link: 'https://www.oeg-upm.net/'
            },
            informatica: {
                imgSrc: '../../assets/footer/etsiinf.jfif',
                link: 'http://www.fi.upm.es/'
            },
            upm: {
                imgSrc: '../assets/footer/uni.jpg',
                link: 'https://www.upm.es/'
            }
        },
        imageSrc: '../../assets/footer/eu_flag.jpg',
        protect: {
            icon: '../../assets/footer/protect.png',
            webpage: 'https://protect-network.eu/',
            cordis: 'https://cordis.europa.eu/project/id/813497',  
            linkedin: '',
            twitter: 'https://twitter.com/ItnProtect'
        },
        author: {
            bia: {
                name: 'Beatriz Esteves',
                linkPersonalWebpage: 'https://besteves4.github.io'
            },
            victor: {
                name: 'Víctor Rodríguez-Doncel',
                linkPersonalWebpage: 'http://cosasbuenas.es/'
            }
        }
    }
    
    constructor() { }
    
    ngOnInit() {}

}
