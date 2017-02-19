import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tms-selector-button',
    template: `
        <button class="circle-button" type="button" (click)="onClick()">
            <ng-content></ng-content>
        </button>
        <div *ngIf="isHighlighted" class="highlight"></div>
    `
})
export class SelectorButtonWidget {
    private isHighlighted: Boolean = false;

    /** Event called when a valid click event happened */
    @Output() command: EventEmitter<any> = new EventEmitter<any>();

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }

    public onClick(e) {
        this.command.emit(e);
        this.isHighlighted = true;
    }
}