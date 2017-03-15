import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Answer } from './../api/index';

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
                        {{question}}
                    </div>
                    <div *ngIf="isOpen">
                        <div *ngFor="let answer of answers; let i = index" class="row answers">
                            <!--<div>
                                <button type="button" [class]="answer==selectedAnswer ? 'btn btn-sm btn-info' : 'btn btn-sm btn-default'" (click)="selectAnswer(answer)">
                                    {{i+1}}.
                                </button>
                            </div>-->
                            <div>
                                <button type="button" [class]="answer.correct ? 'btn btn-sm btn-success' : 'btn btn-sm btn-default'">
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
    @Input() question: string = "";
    @Input() answers: Answer[] = [];

    private isOpen: boolean = false;
    private selectedAnswer: Answer;

    constructor(element: ElementRef) {
    }

    selectAnswer(answer: Answer) {
        /*if (this.selectedAnswer == answer)
            this.selectedAnswer = null;
        else
            this.selectedAnswer = answer;*/
    }
}
