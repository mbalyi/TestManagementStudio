import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Answer, Question, Category } from './../api/index';

@Component({
    selector: 'tms-question-form',
    template: `
        <p-dialog [(visible)]="display" [modal]="true" (onBeforeHide)="displayEmit.emit(false)">
            <p-header *ngIf="new">Add new Question</p-header>
            <p-header *ngIf="!new">Edit Question</p-header>
            <div class="inputRow">
                <div class="inputField1-1">
                    <div><label for="question">Question</label></div>
                    <div><textarea class="form-control" [(ngModel)]="_question.text" id="question"></textarea></div>
                </div>
            </div>
            <div class="inputRow">
                <div class="float-right">
                    <button type="button" pButton icon="fa-plus" class="btn btn-success" (click)="addAnswer()" label="Add Answer"></button>
                </div>
                <div class="inputField1-1">
                    <div *ngFor="let answer of _answers; let i = index" class="row answers">
                        <div>
                            <button type="button" [class]="((new && answer==selectedAnswer) || (!new && answer.correct)) ? 'btn btn-sm btn-info' : 'btn btn-sm btn-default'" (click)="selectAnswer(answer)">
                                {{i+1}}.
                            </button>
                        </div>
                        <div>
                            <input class="form-control" [(ngModel)]="answer.text">
                        </div>
                    </div>
                </div>
            </div>
            <p-footer>
                <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
                    <button type="button btn btn-success" pButton icon="fa-check" (click)="save()" label="Save"></button>
                    <button type="button btn btn-danger" pButton icon="fa-trash" (click)="delete()" label="Delete"></button>
                    <button type="button" pButton icon="fa-close" (click)="cancel()" label="Cancel"></button>
                </div>
            </p-footer>
        </p-dialog>
    `
})
export class QuestionFormWidget {
    @Input()  display: boolean = false;
    @Output() displayEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input()  new: boolean = true;

    private _question: Question;
    private _answers: Answer[] = [];

    @Input()  category: Category = null;
    @Input()  categories: Category[] = [];
    @Input()  set question(question: Question) {
        this._question = null;
        this._question = question==null?{ id: null, text: "", answersAll: [], categories: [] }:Object.assign({}, question);
    }
    @Input()  set answers(answers: Answer[]) {
        this._answers = [];
        if (answers == null || answers.length == 0)
            this._answers = [];
        else {
            answers.forEach((x) => {
                this._answers.push(Object.assign({}, x));
            })
        }
    }
    @Output() addQuestion: EventEmitter<Question> = new EventEmitter<Question>();
    @Output() deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

    private selectedAnswer: Answer;

    constructor(element: ElementRef) {
    }

    save() {
        if (!this.new) {
            this._answers.forEach((answer) => {
                if (answer.correct) {
                    this.selectedAnswer = answer;
                    return;
                }
            });
        }
        if (this.selectedAnswer != null) {
            this._question.answersAll = this._answers;
            if (this.category != null)
                this._question.categories.push(this.category);
            else
                this._question.categories = this.categories;
            this.addQuestion.emit(this._question);
            this.display = false;
            this.displayEmit.emit(this.display);
        }
    }

    cancel() {
        this.display = false;
        this.displayEmit.emit(this.display);
    }

    delete() {
        this.deleteQuestion.emit(null);
        this.display = false;
        this.displayEmit.emit(this.display);
    }

    selectAnswer(answer: Answer) {
        for (let i = 0; i < this._answers.length; i++) {
            if (this._answers[i].correct) {
                this._answers[i].correct = false;
                break;
            }
        }
        this.selectedAnswer = answer;
        this._answers[this._answers.indexOf(answer)].correct = true;
    }

    addAnswer() {
        if (this._answers == null)
            this._answers = [];
        this._answers.push({ id: null, text: "", correct: false });
    }
}
