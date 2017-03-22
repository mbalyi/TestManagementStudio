import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tms-button',
    template: `
        <button type="button" class="btn" [class.blue]="color=='blue'" [class.green]="color=='green'" [class.selected]="selected" (click)="onClick()">
            <ng-content></ng-content>
        </button>
    `
})
export class ButtonWidget {
    /** Event called when a valid click event happened */
    @Output() command: EventEmitter<any> = new EventEmitter<any>();

    @Input() color: string = 'transparent';
    @Input() selected: boolean = false;

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }

    onClick() {
        this.command.emit();
    }
}
