import { Component, OnInit, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-obligations-preview',
    templateUrl: './obligations-preview.component.html',
    styleUrls: ['./obligations-preview.component.css']
})
export class ObligationsPreviewComponent implements OnInit {

    faExternalLinkAlt = faExternalLinkAlt;
    @Input() obligation;

    constructor() {}

    ngOnInit() {}

}
