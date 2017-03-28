import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Users } from '../../models/users.model';

import { AuthenticationService } from './../../services/authentication/authentication.service';
import { AuthApi } from "../../api/v1/AuthApi";
import { LoginActions } from './../../actions/login.actions';
import { CurrentUserActions } from './../../actions/current.user.actions';
import { NotificationActions } from './../../actions/notification.actions';

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

    private users: Array<Users> = [];

    private confirmPassword: number = null;
    private loginEnable: Boolean = true;
    private rememberme: Boolean = false;

    public username:string = "";
    public password:string="";

    constructor(private authApi: AuthApi, private auth: AuthenticationService, private router: Router, 
        private loginAction: LoginActions, private userAction: CurrentUserActions, 
        private msgAction: NotificationActions) {}

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
    }

    login() {
        // try authenticate
        this.authApi.login(this.username, this.password).subscribe(
            (data) => {
                try{
                    // parse json token
                    let tokenData = JSON.parse(JSON.stringify(data));

                    //set logged in flag
                    this.auth.setLogginFlag(true).subscribe(
                        () => {
                            this.loginAction.login();
                            this.userAction.login({id: 1, email: "admin@tms2.com", password: null, firstName: "Mark", lastName: "Balyi", roles: [], permissions: []});
                        }
                    );

                    // //store token
                    localStorage.setItem('id_token', tokenData.access_token);
                    this.router.navigate(['/']);
                    // this.auth.setToken(tokenData).subscribe(
                    //     res => {
                    //         this.router.navigate(['/']);
                    //     }
                    // );
                    

                }catch(e){
                    console.log('Error: ' + e + ' ' +  data);
                }
            },
            err => {
                console.log(err);
                this.msgAction.setNotification(false, 'Login failed.', err.json().text);
            },
            () => {
                //TODO: log it?
            });
        // this.auth.setLogginFlag(true).subscribe(
        //     () => {
        //         this.loginAction.login();
        //         this.userAction.login({id: 1, email: "admin@tms2.com", password: null, firstName: "Mark", lastName: "Balyi", roles: [], permissions: []});
        //     }
        // );
        // this.router.navigate(['/']);
    }

    logout() {
        this.auth.logout();
        this.loginAction.logout();
        localStorage.removeItem('id_token');
    }

    register() {

    }
}
