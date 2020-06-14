import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css']
})

export class DescriptionModalComponent implements OnInit {

    @Input() ppl: any;
    @ViewChild('descriptionModal', {static: false}) modal;
    
    constructor() {}
   
    ngOnInit() {}

    show() {
        this.modal.show();
    }

}
