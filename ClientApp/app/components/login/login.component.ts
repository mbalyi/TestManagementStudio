import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Users } from '../../models/users.model';
import 'rxjs/Rx';

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
    template: require('./login.component.html')
})
export class LoginComponent {
    private http: Http;

    private user: Users = { UserId: null, Nickname: "", Password: "", Lastname: "", Firstname: "", Email: "", Address: "", Phone: "", RoleId: null };
    private users: Array<Users> = [];
    private errorMsg: String = '';
    private confirmPassword: number = null;
    private loginEnable: Boolean = true;
    private rememberme: Boolean = false;

    constructor(http: Http) {
        this.http = http;
    }

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
    }

    login() {
        var body = JSON.stringify({ "nickName": this.user.Nickname, "password": this.user.Password });
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('api/accountcontroller/login', body, { headers: headers })
            .map(res => res.json() )
            .subscribe(
            err => this.errorMsg,
            data => { this.user = data; console.log(this.user); debugger; },
            () => console.log('Authentication Complete')
            )/*
            .map(response => {
                console.log(response.json());
            });*/
        debugger;
        this.http.get('api/accountcontroller/', { headers: headers })
            .map(res => res.json())
            .subscribe(
            err => { debugger; this.errorMsg; },
                data => { debugger;this.user = data; console.log(this.user); debugger; },
                () => console.log('Logout Complete')
        );
    }

    logout() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.get('api/accountcontroller/logout', { headers: headers }).subscribe(
            err => this.errorMsg,
            () => console.log('Logout Complete')
        );
    }

    register() {
        console.log(this.user);
    }
}
