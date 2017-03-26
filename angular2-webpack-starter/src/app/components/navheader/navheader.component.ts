import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { NavHeaders, NavPages, NavPage, NavContext } from './navheader.context';
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
    @select(['navpage']) readonly nav$: Observable<NavContext>;
    private nav: NavContext;

    private headers: NavHeaders;
    private selectedModule: String = '';

    constructor(private pageAction: NavPageActions, private auth: AuthenticationService, private loginAction: LoginActions) { 
        pageAction.setPage(NavPages.login);
    }

    ngOnInit() {
        this.headers = new NavHeaders();
        this.execution$.subscribe( e => this.execution = e);
        this.nav$.subscribe( n => {
            for (let i = 0; i < this.headers.headers.length; i++) {
                if (this.headers.headers[i].page == n.page)
                    this.selectedModule = this.headers.headers[i].page;
            }
        });
        if (this.headers != null && this.headers.headers != null && this.headers.headers.length > 0) {
            this.selectedModule = this.headers.headers[0].page;
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