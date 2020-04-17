import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-languages-description-modal',
  templateUrl: './languages-description-modal.component.html',
  styleUrls: ['./languages-description-modal.component.css']
})

export class LanguagesDescriptionModalComponent implements OnInit {

    @Input() ppl: any;
    @ViewChild('languagesDescriptionModal', {static: false}) modal;
    
    constructor() {}
   
    ngOnInit() {}

    show() {
        this.modal.show();
    }

}
