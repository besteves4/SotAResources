import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-rights-list',
    templateUrl: './rights-list.component.html',
    styleUrls: ['./rights-list.component.css']
})
export class RightsListComponent implements OnInit {

    @Input() rights;
    @Output() setActive = new EventEmitter<number>();
    activeId: number;

    constructor() {}

    ngOnInit() {}

    handleClick(id: number) {
        this.activeId = id;
        this.setActive.emit(id);
    }

}
