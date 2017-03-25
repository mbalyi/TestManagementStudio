import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavPageActions } from './../../actions/navheader.actions';
import { ExecutionActions } from './../../actions/execution.actions';
import { NotificationActions } from './../../actions/notification.actions';
import { TestService } from './../../services/test.service';
import { NavPages } from './../navheader/navheader.context';
import { Test, TestSet } from './../../api/index';

import { FakeAdminServer } from './../admin/fake.admin.server';

@Component({
    selector: 'tms-test-menu',
    template: require('./test.menu.component.html')
})
export class TestMenuComponent {
    private executableTests: Test[] = [];
    private notOpenedTests: Test[] = [];
    private selectedTest: Test = null;
    private startAvailable: boolean = false;
    private currentDate: Date;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    constructor(private pageAction: NavPageActions, private router: Router, private executionAction: ExecutionActions,
        private testService: TestService, private notificationActions: NotificationActions) { 
        pageAction.setPage(NavPages.testMenu);

        this.currentDate = new Date();
        this.executableTests = this.fakeBackend.getTestSetsToday();
        this.notOpenedTests = this.fakeBackend.getTestSetsOther();
        // //TO DO: get tests
        // this.testService.getExecutableTest().subscribe(
        //     (data) => this.executableTests = data,
        //     err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
        // );
        // this.testService.getNextTest().subscribe(
        //     (data) => this.notOpenedTests = data,
        //     err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
        // );
    }

    select(event) {
        this.selectedTest = event.data;

        if (this.selectedTest.testSets[0].dueDate <= new Date()) {
            this.startAvailable = true;
        } else {
            this.startAvailable = false;
        }
    }

    startTest() {
        // //TO DO: get test execution, set execution reducer
        // this.testService.getExecutionByTestId(this.selectedTest.id).subscribe(
        //     (data) => {
        //         this.executionAction.setExecution(data);
        //         this.router.navigate(['/test-execution']);
        //     },
        //     err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
        // );
        this.executionAction.setExecution(this.fakeBackend.getExecution());
        this.router.navigate(['/test-execution']);
    }
}
