import { Component, ElementRef, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-counter',
    template: `
        <h2>{{interval | numbertotime}} Time Left</h2>
    `
})
export class CounterWidget {
    @Input() start: Date = new Date();
    
    @Output() end: EventEmitter<any> = new EventEmitter<any>();
    private interval: number = 0;

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }


    ngOnInit() {
        let cd = new Date();
        this.interval = 90*60 - Math.floor((cd.getTime() - (new Date(this.start)).getTime())/1000);
        let timer = Observable.timer(0,1000);
        timer.subscribe( t => {
            if (this.interval == 0) {
                this.end.emit();
            } else {
                this.interval--;
            }
        });
    }
}
