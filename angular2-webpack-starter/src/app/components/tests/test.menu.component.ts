import { Component } from '@angular/core';

import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';
import { TestSet } from './../../api/index';

import { FakeAdminServer } from './../admin/fake.admin.server';

@Component({
    selector: 'tms-test-menu',
    template: require('./test.menu.component.html')
})
export class TestMenuComponent {
    private executableTests: TestSet[] = [];
    private notOpenedTests: TestSet[] = [];
    private selectedTest: TestSet = null;
    private startAvailable: boolean = false;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.testMenu);

        this.executableTests = this.fakeBackend.getTestSetsToday();
        this.notOpenedTests = this.fakeBackend.getTestSetsOther();
    }

    select(event) {
        this.selectedTest = event;

        if (this.selectedTest.dueDate == new Date()) {
            this.startAvailable = true;
        } else {
            this.startAvailable = false;
        }
    }
}
