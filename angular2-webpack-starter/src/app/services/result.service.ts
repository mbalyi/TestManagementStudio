import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TestExecution, Test, Question, Answer } from './../api/index';

@Injectable()
export class ResultService {
    private correctQuestions: Question[] = [];
    private failedQuestions: Question[] = [];
    private skippedQuestions: Question[] = [];

    private correctAnswer: Answer[] = [];
    private failedAnswer: Answer[] = [];
    private skippedAnswer: Answer[] = [];

    getResults(selected: TestExecution): number[] {
        let all = selected.test.questions.length;
        let correct = 0;
        selected.answersGiven.forEach((answer) => {
            if(answer.correct)
                correct++;
        });
        let wrong = selected.answersGiven.length - correct;
        let skipped = selected.test.questions.length - selected.answersGiven.length;
        return [all, correct, wrong, skipped];
    }

    reset() {
        this.correctAnswer = [];
        this.failedAnswer = [];
        this.skippedAnswer = [];
        this.correctQuestions = [];
        this.failedQuestions = [];
        this.skippedQuestions = [];
    }

    sortResults(selected: TestExecution, questions: Question[]) {
        if (selected && selected.answersGiven && questions && questions.length > 0) {
            let answers = selected.answersGiven;
            
            questions.forEach((question) => {
                question.answersAll.forEach((answer) => {
                    let got = false;
                    let i = 0;
                    for (i; i < answers.length; i++) {
                        if (answer.id == answers[i].id) {
                            if (answer.correct)
                                this.correctAnswer.push(answer);
                            else
                                this.failedAnswer.push(answer);
                            got = true;
                            break;
                        }
                    }
                    if (got) {
                        if (this.correctAnswer.indexOf(answers[i]) > 0) {
                            this.correctQuestions.push(question);
                        } else {
                            this.failedQuestions.push(question);
                        }
                        answers.splice(i,1);
                    }
                });
            });
            this.skippedAnswer = answers;
            this.skippedQuestions = questions;
            this.correctQuestions.forEach((question) => {
                this.skippedQuestions.splice(this.skippedQuestions.indexOf(question),1);
            });
            this.failedQuestions.forEach((question) => {
                this.skippedQuestions.splice(this.skippedQuestions.indexOf(question),1);
            });
        }
    }

    getCorrectQuestions(): Question[] {
        return this.correctQuestions;
    }

    getFailedQuestions(): Question[] {
        return this.failedQuestions;
    }

    getSkippedQuestions(): Question[] {
        return this.skippedQuestions;
    }

    getCorrectAnswers(): Answer[] {
        return this.correctAnswer;
    }
    
    getFailedAnswers(): Answer[] {
        return this.failedAnswer;
    }
    
    getSkippedAnswers(): Answer[] {
        return this.skippedAnswer;
    }
}