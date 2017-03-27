import { Component, ElementRef, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-counter',
    template: `
        <h2>{{interval | numbertotime}} Time Left</h2>
    `
})
export class CounterWidget {
    @Input() interval: number = 0;
    /** Event called when a valid click event happened */
    @Output() end: EventEmitter<any> = new EventEmitter<any>();

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }


    ngOnInit() {
        let timer = Observable.timer(0,60000);
        timer.subscribe( t => {
            if (this.interval == 0) {
                this.end.emit();
            } else {
                this.interval--;
            }
        });
    }
}
