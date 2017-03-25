import { Component } from '@angular/core';

import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';
import { TestSet } from './../../api/index';

@Component({
    selector: 'tms-test-menu',
    template: require('./test.menu.component.html')
})
export class TestMenuComponent {
    private executableTests: TestSet[] = [];
    private notOpenedTests: TestSet[] = [];
    private selectedTest: TestSet = null;
    private startAvailable: boolean = false;

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.testMenu);
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
