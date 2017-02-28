import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tms-buttons',
    template: `
        <div>
            <ng-content></ng-content>
        </div>
    `
})
export class ButtonsWidget {
    /** Event called when a valid click event happened */
    @Output() command: EventEmitter<any> = new EventEmitter<any>();
    /** Event called when a valid hold event happened, called every 100 ms */
    @Output() holdCommand: EventEmitter<any> = new EventEmitter<any>();

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }
}
