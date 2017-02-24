import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Users } from '../../models/users.model';
import 'rxjs/Rx';

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
    private user: Users = { UserId: null, Nickname: "", Password: "", Lastname: "", Firstname: "", Email: "", Address: "", Phone: "", RoleId: null };
    private users: Array<Users> = [];
    private confirmPassword: number = null;
    private loginEnable: Boolean = true;
    private rememberme: Boolean = false;

    constructor(private auth: AuthenticationService) {}

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
    }

    login() {
        this.auth.login(this.user).subscribe(
            user => this.user = user,
            err => { console.log(err); }
        );
    }

    logout() {
        this.auth.logout();
    }

    register() {
        if (this.user.Password.toString() == this.confirmPassword.toString()) {
            this.auth.register(this.user).subscribe(
                user => this.user = user,
                err => { console.log(err); }
            );
        }
    }
}
