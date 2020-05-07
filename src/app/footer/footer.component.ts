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
        imageSrc: '../../assets/flags/eu_flag.jpg',
        protect: {
            icon: '../../assets/protect.png',
            webpage: 'https://protect-network.eu/',
            cordis: 'https://cordis.europa.eu/project/id/813497',  
            linkedin: '',
            twitter: 'https://twitter.com/ItnProtect'
        },
        author: {
            name: 'Beatriz Esteves',
            linkPersonalWebpage: 'https://besteves4.github.io',
        },
        lastUpdate : '--/--/----'
    }
    
    constructor() { }
    
    ngOnInit() {}

}
