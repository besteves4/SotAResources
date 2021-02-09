import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-obligations-list',
    templateUrl: './obligations-list.component.html',
    styleUrls: ['./obligations-list.component.css']
})
export class ObligationsListComponent implements OnInit {

    @Input() obligations;
    @Output() setActiveObl = new EventEmitter<number>();
    activeId: number;

    constructor() {}

    ngOnInit() {}

    handleClick(id: number) {
        this.activeId = id;
        this.setActiveObl.emit(id);
    }

}
