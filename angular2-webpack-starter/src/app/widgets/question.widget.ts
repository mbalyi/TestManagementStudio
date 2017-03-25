import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Answer, Question } from './../api/index';

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
                            <button *ngIf="isEditable" class="btn" type="button" (click)="editQuestion()"><i class="fa fa-edit"></i> </button>
                            <button *ngIf="isEditable" class="btn" type="button" (click)="deleteQuestion()"><i class="fa fa-trash"></i> </button>
                        </div>
                    </div>
                    <div *ngIf="isOpen">
                        <div *ngFor="let answer of question.answersAll; let i = index" class="row answers">
                            <!--<div>
                                <button type="button" [class]="answer==selectedAnswer ? 'btn btn-sm btn-info' : 'btn btn-sm btn-default'" (click)="selectAnswer(answer)">
                                    {{i+1}}.
                                </button>
                            </div>-->
                            <div>
                                <button type="button" class="btn" [class.correct]="(showsCorrect && answer.correct) || (!showsCorrect && answer==selectedAnswer)" (click)="selectAnswer(answer);selectedAnswer=answer;">
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
    @Input() isOpen: boolean = false;
    @Input() showsCorrect: boolean = true;
    @Input() isEditable: boolean = true;

    @Output() select = new EventEmitter<Answer>();
    @Output() edit = new EventEmitter<Question>();
    @Output() delete = new EventEmitter<Question>();

    private selectedAnswer: Answer;

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
