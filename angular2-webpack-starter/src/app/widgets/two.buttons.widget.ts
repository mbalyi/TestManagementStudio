import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tms-two-buttons',
    template: `
        <div>
            <tms-button name="leftButton" class="left" (command)="onLeftCommand()">
                {{leftButton}}
            </tms-button>
        </div>
        <div>
            <tms-button name="rightButton" class="right" (command)="onRightCommand()">
                {{rightButton}}
            </tms-button>
        </div>
    `
})
export class TwoButtonsWidget {
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }
    /** Name of the left button, default 'No'. */
    @Input('left-button') leftButton: string = "No";
    /** Name of the right button, default 'Yes' */
    @Input('right-button') rightButton: string = "Yes";
    /** It is called when the left button is clicked. */
    @Output() leftCommand: EventEmitter<any> = new EventEmitter<any>();
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
}
