import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

    footer = {
        acknowledgements: 'Acknowledgements',
        protectCordis: '',
        protectLinkedin: '',
        protectTwitter: '',
        author: {
            name: 'Beatriz Esteves',
            linkPersonalWebpage: 'https://besteves4.github.io',
        },
        lastUpdate : '--/--/----'
    }
    
    constructor() { }
    
    ngOnInit() {}

}
