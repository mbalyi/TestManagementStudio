import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { NavPageActions } from './../../actions/navheader.actions';
import { ExecutionActions } from './../../actions/execution.actions';
import { NotificationActions } from './../../actions/notification.actions';
import { TestService } from './../../services/test.service';
import { NavPages } from './../navheader/navheader.context';
import { TestExecution, TestSet, User } from './../../api/index';

import { FakeAdminServer } from './../admin/fake.admin.server';

@Component({
    selector: 'tms-test-menu',
    template: require('./test.menu.component.html')
})
export class TestMenuComponent {
    @select(['currentuser']) readonly user$: Observable<User>;
    private user: User;

    private executableTests: TestExecution[] = [];
    private notOpenedTests: TestExecution[] = [];
    private selectedTest: TestExecution = null;
    private startAvailable: boolean = false;
    private currentDate: Date;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    constructor(private pageAction: NavPageActions, private router: Router, private executionAction: ExecutionActions,
        private testService: TestService, private notificationActions: NotificationActions) { 
        pageAction.setPage(NavPages.testMenu);
    }

    ngOnInit() {
        this.user$.subscribe((s) => this.user = s );

        this.pageAction.setPage(NavPages.testMenu);

        this.currentDate = new Date();
        //TO DO: get tests
        this.testService.getExecutableTest(this.user.id, this.currentDate).subscribe(
            data => {this.executableTests = data;},
            err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
        );
        this.testService.getNextTest(this.user.id, this.currentDate).subscribe(
            data => {this.notOpenedTests = data;},
            err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
        );
    }

    select(event) {
        this.selectedTest = event.data;

        if (this.selectedTest.dueDate <= new Date()) {
            this.startAvailable = true;
        } else {
            this.startAvailable = false;
        }
    }

    startTest() {
        //TO DO: get test execution, set execution reducer
        this.testService.getExecution(this.selectedTest.id).subscribe(
            execution => {
                this.testService.getTest(execution.test).subscribe(
                    test => {
                        execution.test = test;
                        if (execution.dateOfStart == null)
                            execution.dateOfStart = new Date();
                        this.executionAction.setExecution(execution);
                        this.router.navigate(['/test-execution']);
                    },
                    err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
                );
            },
            err => this.notificationActions.setNotification(false, 'Request failed.', err.toString())
        );
    }
}
