import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { UserService } from './../../services/user/user.service';
import { TestService } from './../../services/test.service';
import { ExecutionActions } from './../../actions/execution.actions';
import { LoginActions } from './../../actions/login.actions';
import { CurrentUserActions } from './../../actions/current.user.actions';
import { NotificationActions } from './../../actions/notification.actions';
import { Security } from './../../reducers/security.reducer';
import { Message } from 'primeng/primeng';
import { User } from './../../api/index';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IsLogin } from './../../reducers/login.reducer';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('./../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'),
        require('./../../../../node_modules/primeng/resources/themes/omega/theme.css'),
        require('./../../../../node_modules/primeng/resources/primeng.min.css'),
        require('./../../../../node_modules/font-awesome/css/font-awesome.min.css')
        ]
})
export class AppComponent {
    @select(['islogin']) readonly islogin$: Observable<IsLogin>;
    private islogin: IsLogin;
    @select(['notification']) readonly notification$: Observable<Message[]>;
    private notification: Message[];
    @select(['security']) readonly security$: Observable<Security>;
    private security: Security;

    private currentUser: User = null;

    constructor (private auth: AuthenticationService, private userService: UserService,
        private router: Router, private loginAction: LoginActions, 
        private userAction: CurrentUserActions, private testService: TestService,
        private executionAction: ExecutionActions, private msgAction: NotificationActions) {
        this.auth.getLogginFlag().subscribe(
            res => console.log(res),
            (data) => {console.log(data)}
        );
    }

    ngOnInit() {
        this.islogin$.subscribe((s) => this.islogin = s);
        this.notification$.subscribe((s) => this.notification = s);
        this.security$.subscribe( s => this.security = s);
        this.isLogged();
    }

    isLogged() {
        if(localStorage.getItem('id_token')) {
            this.userService.getCurrentUser(localStorage.getItem('id_token')).subscribe(
                user => {
                    this.currentUser = user;
                    if (this.currentUser) {
                        this.loginAction.login();
                        this.userAction.login(this.currentUser);
                        this.auth.setLogginFlag(true).subscribe();
                        if (this.security.shareLink && this.security.status == 'test') {
                            this.testService.getExecutionByTestId(this.security.id,this.currentUser.id).subscribe(
                                e => {
                                    this.executionAction.setExecution(e);
                                    this.router.navigate(['/test-execution']);
                                },
                                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                            );
                        } else
                            this.router.navigate(['/home']);
                    }
                },
                err => this.msgAction.setNotification(false, 'Login failed.', err.json().text)
            );
        }
    }
}
