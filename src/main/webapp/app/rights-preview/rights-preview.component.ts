import { Component, OnInit, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-rights-preview',
    templateUrl: './rights-preview.component.html',
    styleUrls: ['./rights-preview.component.css']
})
export class RightsPreviewComponent implements OnInit {

    faExternalLinkAlt = faExternalLinkAlt;
    @Input() right;

    constructor() {}

    ngOnInit() {}

}
