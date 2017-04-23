import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from './../../api/index';

import { Users } from '../../models/users.model';

import { AuthenticationService } from './../../services/authentication/authentication.service';
import { UserService } from './../../services/user/user.service';
import { TestService } from './../../services/test.service';
import { ExecutionActions } from './../../actions/execution.actions';
import { AuthApi } from "../../api/v1/AuthApi";
import { LoginActions } from './../../actions/login.actions';
import { CurrentUserActions } from './../../actions/current.user.actions';
import { NotificationActions } from './../../actions/notification.actions';
import { Security } from './../../reducers/security.reducer';

@Component({
    selector: 'tms-login',
    animations: [
        trigger('visibilityChanged', [
            state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
            state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
            transition('1 => 0', animate('300ms')),
            transition('0 => 1', animate('900ms'))
        ])
    ],
    template: require('./login.component.html'),
    providers: [AuthenticationService]
})
export class LoginComponent {
    @select(['security']) readonly security$: Observable<Security>;
    private security: Security;

    private users: Array<Users> = [];
    private currentUser: User = null;

    private confirmPassword: string = null;
    private loginEnable: Boolean = true;
    private rememberme: Boolean = false;

    public username:string = "";
    public password:string="";

    public newUser: User = {id: null, nickName: '', firstName: '', lastName: '', password: '', email: '', roles: [{id :1}], groups: []};

    constructor(private authApi: AuthApi, private auth: AuthenticationService, private router: Router, 
        private loginAction: LoginActions, private userAction: CurrentUserActions, 
        private msgAction: NotificationActions, private userService: UserService,
        private testService: TestService, private executionAction: ExecutionActions) {}

    ngOnInit() {
        this.security$.subscribe( s => this.security = s);
        this.isLogged();
    }

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
        this.newUser = {id: null, nickName: '', firstName: '', lastName: '', password: '', email: '', roles: [{id :1}], groups: []};
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

    // login() {
    //     // try authenticate
    //     this.authApi.login(this.username, this.password).subscribe(
    //         (data) => {
    //             try{
    //                 // parse json token
    //                 let tokenData = JSON.parse(JSON.stringify(data));

    //                 //set logged in flag
    //                 this.auth.setLogginFlag(true).subscribe(
    //                     () => {
    //                         this.loginAction.login();
    //                         // this.userService.getCurrentUser().subscribe(
    //                         //     user => {
    //                         //         this.currentUser = user;
    //                         //         if (this.currentUser) {
    //                         //             this.userAction.login(this.currentUser);
    //                         //             localStorage.setItem('id_token', tokenData.access_token);
    //                         //             if (this.security.shareLink && this.security.status == 'test') {
    //                         //                 this.testService.getExecutionByTestId(this.security.id).subscribe(
    //                         //                     e => {
    //                         //                         this.executionAction.setExecution(e);
    //                         //                         this.router.navigate(['/test-execution']);
    //                         //                     },
    //                         //                     err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
    //                         //                 );
    //                         //             } else
    //                         //                 this.router.navigate(['/home']);
    //                         //         }
    //                         //     },
    //                         //     err => this.msgAction.setNotification(false, 'Login failed.', err.json().text)
    //                         // );
    //                         this.userAction.login({id: 1, email: "admin@tms2.com", password: null, firstName: "Mark", lastName: "Balyi", roles: [], permissions: []});
    //                     }
    //                 );

    //                 // //store token
    //                 localStorage.setItem('id_token', tokenData.access_token);
    //                 this.router.navigate(['/']);
                    

    //             }catch(e){
    //                 console.log('Error: ' + e + ' ' +  data);
    //             }
    //         },
    //         err => {
    //             console.log(err);
    //             this.msgAction.setNotification(false, 'Login failed.', err.json().text);
    //         },
    //         () => {
    //             //TODO: log it?
    //         });
    //     // this.auth.setLogginFlag(true).subscribe(
    //     //     () => {
    //     //         this.loginAction.login();
    //     //         this.userAction.login({id: 1, email: "admin@tms2.com", password: null, firstName: "Mark", lastName: "Balyi", roles: [], permissions: []});
    //     //     }
    //     // );
    //     // this.router.navigate(['/']);
    // }

    // Demo login function to use the In-memory web api.
    login() {
        this.userService.getLogin(this.username, this.password).subscribe(
            u => {
                let user = u[0];
                if (user.nickName == this.username && user.password == this.password) {
                    this.auth.setLogginFlag(true).subscribe(
                        () => {
                            this.loginAction.login();
                            this.userAction.login(user);
                            localStorage.setItem('id_token', user.id.toString());
                            this.router.navigate(['/']);
                        }
                    );
                } else {
                    this.msgAction.setNotification(false, 'Login failed.', 'Wrong username or password.');
                }
            },
            err => this.msgAction.setNotification(false, 'Login failed.', err.toString())
        );
    }

    logout() {
        this.auth.logout();
        this.loginAction.logout();
        localStorage.removeItem('id_token');
    }

    register() {
        if (this.newUser.password == this.confirmPassword) {
            this.userService.save(this.newUser).subscribe(
                user => {
                    this.loginAction.login();
                    this.userAction.login(user);
                    localStorage.setItem('id_token', user.id.toString());
                    this.auth.setLogginFlag(true).subscribe(() => {this.router.navigate(['/home']);});
                    this.msgAction.setNotification(true, 'Registration successfull.', 'Welcome '+user.nickName);
                },
                err => this.msgAction.setNotification(false, 'Registration failed.', err.toString())
            );
        } else {
            this.msgAction.setNotification(false, 'Registration failed.', 'Password & Confirm password are not matched!');
        }
    }
}
