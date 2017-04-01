import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Answer, Question } from './../api/index';
import { QuestionModes } from './question.widget.context';

@Component({
    selector: 'tms-question-readonly',
    template: `
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-1">
                    <button type="button" class="btn btn-xs btn-link" (click)="isOpen=!isOpen;">
                        <span [class]="isOpen ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-right'"></span>
                    </button>
                </div>
                <div class="col-lg-11">
                    <div class="row">
                        <div class="col-lg-11">{{question.text}}</div>
                        <div class="col-lg-1 button-group">
                            <button *ngIf="mode == 'edit'" class="btn" type="button" (click)="editQuestion()"><i class="fa fa-edit"></i> </button>
                            <button *ngIf="mode == 'edit'" class="btn" type="button" (click)="deleteQuestion()"><i class="fa fa-trash"></i> </button>
                        </div>
                    </div>
                    <div *ngIf="mode == 'execute' || mode == 'result' || isOpen">
                        <div *ngFor="let answer of question.answersAll; let i = index" class="row answers">
                            <div *ngIf="mode == 'execute' || mode == 'edit'">
                                <button type="button" class="btn" [class.correct]="(mode == 'edit' && answer.correct) || (!(mode == 'edit') && answer==selectedAnswer)" (click)="selectAnswer(answer);selectedAnswer=answer;">
                                    {{i+1}}.
                                </button>
                            </div>
                            <div *ngIf="mode == 'result'">
                                <button type="button" class="btn" [class.skipped]="gaveAnswer == null && answer.correct" 
                                    [class.ok]="gaveAnswer && gaveAnswer.id == answer.id && answer.correct" 
                                    [class.failed]="gaveAnswer && gaveAnswer.id == answer.id && !answer.correct"
                                    [class.correct]="gaveAnswer && gaveAnswer.id != answer.id && answer.correct">
                                    {{i+1}}.
                                </button>
                            </div>
                            <div>
                                {{answer.text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class QuestionWidget {
    @Input() question: Question = {text: '', answersAll: []};
    @Input() mode: QuestionModes = QuestionModes.edit;
    @Input() gaveAnswer: Answer = null;

    @Output() select = new EventEmitter<Answer>();
    @Output() edit = new EventEmitter<Question>();
    @Output() delete = new EventEmitter<Question>();

    private selectedAnswer: Answer;
    private isOpen: boolean = false;

    constructor(element: ElementRef) {
    }

    editQuestion() {
        this.edit.emit(this.question);
    }

    deleteQuestion() {
        this.delete.emit(this.question);
    }

    selectAnswer(answer: Answer) {
        this.select.emit(answer);
    }
}
