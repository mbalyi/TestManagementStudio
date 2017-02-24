import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Users } from '../../models/users.model';

import { AuthenticationService } from './../../services/authentication/authentication.service';

@Component({
    selector: 'login',
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
    private user: Users = { userid: null, nickname: "", password: "", lastname: "", firstname: "", email: "", address: "", phone: "", roleid: null };
    private users: Array<Users> = [];
    private confirmPassword: number = null;
    private loginEnable: Boolean = true;
    private rememberme: Boolean = false;

    constructor(private auth: AuthenticationService, private router: Router) {}

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
    }

    show() {
        console.log(this.user)
    }

    setAuthLogin() {
        this.auth.setLogginFlag(true).subscribe(res => console.log(res));
        this.router.navigate(['/home']);
    }

    login() {
        this.auth.login(this.user).subscribe(
            user => {
                this.user = user;
                if (user) {
                    this.setAuthLogin();
                }
            },
            err => console.log(err)
        );
    }

    logout() {
        this.auth.logout();
    }

    register() {
        if (this.user.password.toString() == this.confirmPassword.toString()) {
            this.auth.register(this.user).subscribe(
                user => {
                    this.user = user;
                    if (this.user && this.user.userid)
                        this.auth.isLoggedIn = true;
                },
                err => { console.log(err); }
            );
        }
    }
}
