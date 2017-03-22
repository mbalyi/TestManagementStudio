import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tms-three-buttons',
    template: `
        <div class="button-group">
            <tms-button (command)="onLeftCommand()"><i *ngIf="leftIcon!=null" [class]="leftIcon"></i>{{leftButton}}</tms-button>
            <tms-button (command)="onMiddleCommand()"><i *ngIf="middleIcon!=null" [class]="middleIcon"></i>{{middleButton}}</tms-button>
            <tms-button (command)="onRightCommand()"><i *ngIf="rightIcon!=null" [class]="rightIcon"></i>{{rightButton}}</tms-button>
        </div>
    `
})
export class ThreeButtonsWidget {
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }
    /** Name of the left button, default ''. */
    @Input('left-button') leftButton: string = "";
    /** Icon of the left button. */
    @Input('left-icon') leftIcon: string = null;
    /** Name of the middle button, default ''. */
    @Input('middle-button') middleButton: string = "";
    /** Icon of the middle button. */
    @Input('middle-icon') middleIcon: string = null;
    /** Name of the right button, default '' */
    /** Name of the right button, default '' */
    @Input('right-button') rightButton: string = "";
    /** Icon of the left button. */
    @Input('right-icon') rightIcon: string = null;
    /** It is called when the left button is clicked. */
    @Output() leftCommand: EventEmitter<any> = new EventEmitter<any>();
    /** It is called when the left button is clicked. */
    @Output() middleCommand: EventEmitter<any> = new EventEmitter<any>();
    /** It is called when the right button is clicked. */
    @Output() rightCommand: EventEmitter<any> = new EventEmitter<any>();
    /** Raising the right button command. */
    onRightCommand() {
        this.rightCommand.emit();
    }
    /** Raising the left button command. */
    onLeftCommand() {
        this.leftCommand.emit();
    }
    /** Raising the middle button command. */
    onMiddleCommand() {
        this.middleCommand.emit();
    }
}
