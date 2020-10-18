import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tms-home-button',
    template: `
        <button type="button" class="btn" [class.blue]="color=='blue'" [class.green]="color=='green'"
            [class.orange]="color=='orange'" [class.red]="color=='red'" (click)="onClick()" [disabled]="disabled">
            <ng-content></ng-content>
        </button>
    `
})
export class HomeButtonWidget {
    /** Event called when a valid click event happened */
    @Output() command: EventEmitter<any> = new EventEmitter<any>();

    @Input() color: string = 'transparent';
    @Input() route: string = '/';

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef, private router: Router) {
    }

    onClick() {
        this.command.emit();
        this.router.navigate([this.route]);
    }
}
