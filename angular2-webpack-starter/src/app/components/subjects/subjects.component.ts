import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Subjects } from "./../../models/subjects.model";
import { TestCases } from "./../../models/test.cases.model";

@Component({
    selector: 'tms-subjects',
    template: `
    <div>
        <div *ngFor="let subject of subjects">
            <button type="button" class="btn btn-default" (click)="show(subject.subjectId)">{{subject.title}}</button>
        </div>
    </div>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Created Date</th>
                    <th>Interval</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let case of testcases">
                    <td>{{case.question}}</td>
                    <td>{{case.createdDate}}</td>
                    <td>{{case.interval}}</td>
                    <td>{{case.levelId}}</td>
                </tr>
            </tbody>
            </table>
    </div>
    `
})

export class SubjectsComponent {
    public subjects: Subjects[] = [];
    public testcases: TestCases[] = [];
    public name: string = null;
    public http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    ngOnInit() {
        this.http.get('/api/subjects/subjects').subscribe(result => {
            this.subjects = result.json();
        });
    }

    show(subjectId: number) {
        this.http.get('/api/testcases/bysubjectid/' + subjectId.toString()).subscribe(result => {
            this.testcases = result.json();
        });
    }
}