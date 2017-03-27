import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExecutionActions } from './../../actions/execution.actions';
import { NotificationActions } from './../../actions/notification.actions';
import { TestService } from './../../services/test.service';
import { NavHeaderContext, NavPage, NavContext } from './../navheader/navheader.context';
import { TestExecution } from './../../api/index';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-navmenu',
    template: require('./navmenu.component.html')
})
export class NavMenuComponent {
    @select(['navpage']) readonly nav$: Observable<NavContext>;
    private nav: NavContext;
    @select(['execution']) readonly execution$: Observable<TestExecution>;
    private execution: TestExecution;

    private selectedMenu: String = '';

    constructor(private service: TestService, private actions: ExecutionActions, 
        private notification: NotificationActions, private router: Router) {}

    ngOnInit() {
        this.nav$.subscribe((s) => {
            this.nav = s;
            if (this.nav != null && this.nav.menuItems != null && this.nav.menuItems.length > 0) {
                this.selectedMenu = this.nav.menuItems[0].name;
            }
        });
        this.execution$.subscribe(e => this.execution = e);
    }

    sendExecution() {
        let date = new Date();
        // this.service.close(this.execution.id, date).subscribe(
        //     (data) => {
        //         this.actions.closeExecution(date);
        //         this.notification.setNotification(true, 'Test stored.', 'Your test results have been saved.');
        //     },
        //     err => this.notification.setNotification(false, 'Request failed.', err.json().toString())
        // );
        this.actions.closeExecution(date);
        this.notification.setNotification(true, 'Test stored.', 'Your test results have been saved.');
        this.router.navigate(['my-results']);
    }
}
