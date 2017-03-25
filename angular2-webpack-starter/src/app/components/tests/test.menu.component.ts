import { Component } from '@angular/core';

import { NavPageActions } from './../../actions/navheader.actions';
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

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.testMenu);

        this.currentDate = new Date();
        this.executableTests = this.fakeBackend.getTestSetsToday();
        this.notOpenedTests = this.fakeBackend.getTestSetsOther();
    }

    select(event) {
        this.selectedTest = event.data;

        if (this.selectedTest.testSets[0].dueDate <= new Date()) {
            this.startAvailable = true;
        } else {
            this.startAvailable = false;
        }
    }
}
