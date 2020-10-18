import { Component, ElementRef, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-result-widget',
    template: `
        <li>
            Number of Questions: {{questionNo}}
        </li>
        <li>
            Correct Answers: {{corrects}}
        </li>
        <li>
            Failed Answers: {{faileds}}
        </li>
        <li>
            Skipped Answers: {{skippeds}}
        </li>
        <!--<li>
            <tms-three-buttons left-button="Corrects" middle-button="Faileds" right-button="Skippeds" [selectable]="true"
                (leftCommand)="cmd('left')" (middleCommand)="cmd('middle')" (rightCommand)="cmd('right')">
            </tms-three-buttons>
        </li>-->
        <li>
            <tms-button (command)="backCommand()">Back</tms-button>
        </li>
    `
})
export class ResultWidget {
    @Input() questionNo: number = 0;
    @Input() corrects: number = 0;
    @Input() faileds: number = 0;
    @Input() skippeds: number = 0;
    /** Event called when a valid click event happened */
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();
    @Output() back: EventEmitter<any> = new EventEmitter<any>();

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }

    cmd(btn: string) {
        this.filter.emit(btn);
    }

    backCommand() {
        this.back.emit();
    }
}
