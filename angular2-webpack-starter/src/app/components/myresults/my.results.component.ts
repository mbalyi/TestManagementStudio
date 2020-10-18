import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestExecution, Question, Answer } from './../../api/index';

import { ResultService } from './../../services/result.service';
import { TestService } from './../../services/test.service';

import { NotificationActions } from './../../actions/notification.actions';
import { ExecutionActions } from './../../actions/execution.actions';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { FakeAdminServer } from './../admin/fake.admin.server';

@Component({
    selector: 'tms-my-results',
    template: require('./my.results.component.html')
})
export class MyResultsComponent {
    private selectedTest: TestExecution = null;
    private questions: Question[] = [];
    private executions: TestExecution[] = [];
    private correctQuestions: Question[] = [];
    private failedQuestions: Question[] = [];
    private skippedQuestions: Question[] = [];

    constructor(private pageAction: NavPageActions, private resultService: ResultService, private testService: TestService,
        private notificationAction: NotificationActions, private executionAction: ExecutionActions, private router: Router) { 
        pageAction.setPage(NavPages.myResults);
    }

    ngOnInit() {
        this.pageAction.setPage(NavPages.myResults);
        //TO DO: Get executions
        this.testService.getAllExecutions().subscribe(
            exes => {
                this.executions = exes;
                if (exes.length > 0) {
                    this.selectedTest = this.executions[0];
                    this.getResults();
                }
            },
            err => this.notificationAction.setNotification(false, 'Request Failed', err.json().toString())
        );
    }

    getResults() {
        this.resultService.reset();
        //TO DO: Get questions of selected test execution
        this.testService.getTest(this.selectedTest.test.id).subscribe(
            test => {
                this.questions = test.questions;
                this.resultService.sortResults(this.selectedTest, this.questions);

                this.correctQuestions = this.resultService.getCorrectQuestions();
                this.failedQuestions = this.resultService.getFailedQuestions();
                this.skippedQuestions = this.resultService.getSkippedQuestions();
            },
            err => this.notificationAction.setNotification(false, 'Request Failed', err.toString())
        );
    }

    selectTest(event) {
        this.testService.getExecution(event.data.id).subscribe(
            execution => {
                this.selectedTest = execution;
                this.executionAction.setExecution(this.selectedTest);
                this.getResults();
            }
        );
        
    }

    seeTest() {
        this.testService.getExecution(this.selectedTest.id).subscribe(
            execution => {
                this.executionAction.setExecution(execution);
                this.router.navigate(['/test-result']);
            }
        );
    }
}
