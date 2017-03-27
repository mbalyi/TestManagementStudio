import { Component, ElementRef, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-execution',
    template: `
        <li>
            Number of Questions: {{questionNo}}
        </li>
        <li>
            Executed Questions: {{executedQu}}
        </li>
        <li>
            Questions Left: {{questionNo - executedQu}}
        </li>
        <li>
            <tms-button (command)="sendIt()">Send!</tms-button>
        </li>
        <li>
            <tms-button (command)="cancel()">Cancel</tms-button>
        </li>
    `
})
export class ExecutionWidget {
    @Input() questionNo: number = 0;
    @Input() executedQu: number = 0;
    /** Event called when a valid click event happened */
    @Output() send: EventEmitter<any> = new EventEmitter<any>();

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }

    sendIt() {
        this.send.emit();
    }

    cancel() {
        this.send.emit();
    }
}
