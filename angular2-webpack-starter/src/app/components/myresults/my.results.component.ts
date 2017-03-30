import { Component } from '@angular/core';
import { TestExecution, Question, Answer } from './../../api/index';

import { ResultService } from './../../services/result.service';
import { TestService } from './../../services/test.service';

import { NotificationActions } from './../../actions/notification.actions';
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

    private fakeAdmin: FakeAdminServer = new FakeAdminServer();

    constructor(private pageAction: NavPageActions, private resultService: ResultService, private testService: TestService,
        private notificationAction: NotificationActions) { 
        pageAction.setPage(NavPages.myResults);
    }

    ngOnInit() {
        this.pageAction.setPage(NavPages.myResults);
        //TO DO: Get executions
        // this.testService.getAllExecutions().subscribe(
        //     exes => this.executions,
        //     err => this.notificationAction.setNotification(false, 'Request Failed', err.json().toString())
        // );
        this.executions = this.fakeAdmin.getExecutions();
        this.selectedTest = this.executions[0];
        this.getResults();
    }

    getResults() {
        this.resultService.reset();
        //TO DO: Get questions of selected test execution
        this.testService.getQuestionsOfTest(this.selectedTest.test.id).subscribe(
            questions => this.questions = questions,
            err => this.notificationAction.setNotification(false, 'Request Failed', err.json().toString())
        );
        this.resultService.sortResults(this.selectedTest, this.questions);

        this.correctQuestions = this.resultService.getCorrectQuestions();
        this.failedQuestions = this.resultService.getFailedQuestions();
        this.skippedQuestions = this.resultService.getSkippedQuestions();
    }

    selectTest(event) {
        this.selectedTest = event;
        this.getResults();
    }
}
