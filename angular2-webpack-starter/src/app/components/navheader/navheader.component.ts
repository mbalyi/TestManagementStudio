﻿import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NavHeaders, NavPages, NavPage } from './navheader.context';
import { TestExecution, Test, Question, Answer } from './../../api/index';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { LoginActions } from './../../actions/login.actions';
import { NavPageActions } from './../../actions/navheader.actions';

@Component({
    selector: 'tms-navheader',
    template: require('./navheader.component.html')
})
export class NavHeaderComponent {
    @select(['execution']) readonly execution$: Observable<TestExecution>;
    private execution: TestExecution;

    private headers: NavHeaders;
    private selectedModule: String = '';

    constructor(private pageAction: NavPageActions, private auth: AuthenticationService, private loginAction: LoginActions) { 
        pageAction.setPage(NavPages.login);
    }

    ngOnInit() {
        this.execution$.subscribe( e => this.execution = e);
        this.headers = new NavHeaders();
        if (this.headers != null && this.headers.headers != null && this.headers.headers.length > 0) {
            this.selectedModule = this.headers.headers[0].name;
        }
    }

    setPage(page: NavPage) {
        this.pageAction.setPage(page);
    }

    logout() {
        this.auth.logout();
        this.loginAction.logout();
    }
}