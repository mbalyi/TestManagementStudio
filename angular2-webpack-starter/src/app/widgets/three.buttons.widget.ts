import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'tms-three-buttons',
    template: `
        <div class="button-group">
            <tms-button (command)="onLeftCommand()" [class.selected]="selectable && btn1Selected" [disabled]="leftDisabled">
                <i *ngIf="leftIcon!=null" [class]="leftIcon"></i>{{leftButton}}
            </tms-button>
            <tms-button (command)="onMiddleCommand()" [class.selected]="selectable && btn2Selected" [disabled]="middleDisabled">
                <i *ngIf="middleIcon!=null" [class]="middleIcon"></i>{{middleButton}}
            </tms-button>
            <tms-button (command)="onRightCommand()" [class.selected]="selectable && btn3Selected" [disabled]="rightDisabled">
                <i *ngIf="rightIcon!=null" [class]="rightIcon"></i>{{rightButton}}
            </tms-button>
        </div>
    `
})
export class ThreeButtonsWidget {
    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }
    /** Name of the left button, default ''. */
    @Input('left-button') leftButton: string = "";
    /** Icon of the left button. */
    @Input('left-icon') leftIcon: string = "";
    /** Name of the middle button, default ''. */
    @Input('middle-button') middleButton: string = "";
    /** Icon of the middle button. */
    @Input('middle-icon') middleIcon: string = "";
    /** Name of the right button, default '' */
    @Input('right-button') rightButton: string = "";
    /** Icon of the left button. */
    @Input('right-icon') rightIcon: string = "";
    /** It is called when the left button is clicked. */
    @Output() leftCommand: EventEmitter<any> = new EventEmitter<any>();
    /** It is called when the left button is clicked. */
    @Output() middleCommand: EventEmitter<any> = new EventEmitter<any>();
    /** It is called when the right button is clicked. */
    @Output() rightCommand: EventEmitter<any> = new EventEmitter<any>();
    /** Disable value of left button. */
    @Input('left-disabled') leftDisabled: boolean = false;
    /** Disable value of middle button. */
    @Input('middle-disabled') middleDisabled: boolean = false;
    /** Disable value of right button. */
    @Input('right-disabled') rightDisabled: boolean = false;
    /** Make the buttons selectable. Default : false */
    @Input('selectable') selectable: boolean = false;

    private btn1Selected: boolean = true;
    private btn2Selected: boolean = true;
    private btn3Selected: boolean = true;

    /** Raising the right button command. */
    onRightCommand() {
        this.btn3Selected = !this.btn3Selected;
        this.rightCommand.emit();
    }
    /** Raising the left button command. */
    onLeftCommand() {
        this.btn1Selected = !this.btn1Selected;
        this.leftCommand.emit();
    }
    /** Raising the middle button command. */
    onMiddleCommand() {
        this.btn2Selected = !this.btn2Selected;
        this.middleCommand.emit();
    }
}
