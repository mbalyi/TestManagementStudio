import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Question } from './../api/index';

@Component({
    selector: 'tms-question-draggable',
    template: `
        <div class="row">
            <span>{{question.text}}</span> 
            <span>
                <button type="button" class="btn btn-link" (click)="openQuestion()">
                    <span [class]="class"></span>
                </button>
            </span>
        </div>
    `
})
export class QuestionDraggableWidget {
    private isOpened: boolean = false;
    private class: string = 'glyphicon glyphicon-zoom-in';

    @Input() question: Question = { id: null, text: ''};

    @Output() open = new EventEmitter<Question>();

    constructor(element: ElementRef) {
    }

    openQuestion() {
        this.open.emit(this.question);
        this.isOpened = !this.isOpened;
        this.class = this.isOpened ? 'glyphicon glyphicon-zoom-out' : 'glyphicon glyphicon-zoom-in';
    }
}
