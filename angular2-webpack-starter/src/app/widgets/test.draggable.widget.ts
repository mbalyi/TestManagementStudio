import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Test } from './../api/index';

@Component({
    selector: 'tms-test-draggable',
    template: `
        <div [class]="class" (click)="openTest()">
            <span>{{test.text}}</span> 
            <span>
                <button type="button" class="btn btn-link" (click)="deleteTest()">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </span>
        </div>
    `
})
export class TestDraggableWidget {
    private isOpened: boolean = false;
    private class: string = 'row';

    @Input() test: Test = { id: null, text: ''};

    @Output() open = new EventEmitter<Test>();
    @Output() delete = new EventEmitter<Test>();

    @Input()  set selected(selected: boolean) {
        this.class = selected ? 'row selected-test' : 'row';
    }

    constructor(element: ElementRef) {
    }

    openTest() {
        this.open.emit(this.test);
        this.isOpened = !this.isOpened;
    }

    deleteTest() {
        this.delete.emit(this.test);
    }
}
