import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-diagram-modal',
  templateUrl: './diagram-modal.component.html',
  styleUrls: ['./diagram-modal.component.css']
})

export class DiagramModalComponent implements OnInit {

    @Input() diag: any;
    @ViewChild('diagramModal', {static: false}) modal;
    
    constructor() {}
   
    ngOnInit() {}

    show() {
        this.modal.show();
    }

}
