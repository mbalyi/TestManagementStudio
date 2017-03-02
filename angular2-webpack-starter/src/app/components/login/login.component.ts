﻿import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Users } from '../../models/users.model';

import { AuthenticationService } from './../../services/authentication/authentication.service';
import {AuthApi} from "../../api/v1/AuthApi";

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

    private users: Array<Users> = [];

    private confirmPassword: number = null;
    private loginEnable: Boolean = true;
    private rememberme: Boolean = false;

    public email:string = "";
    public password:string="";

    constructor(private authApi: AuthApi,private auth: AuthenticationService, private router: Router) {}

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
    }

    show() {
        console.log( this.email, this.password)
    }

    login() {
        console.error('Start login process');
        // try authenticate
        this.authApi.login(this.email, this.password).subscribe(
            (data) => {
                console.error('Data: ' + data);
                try{
                    // parse json token
                    let tokenData = JSON.parse(JSON.stringify(data));

                    //set logged in flag
                    this.auth.setLogginFlag(true).subscribe(
                        () => {
                            console.log();
                        }
                    );

                    //store token
                    localStorage.setItem('access_token', tokenData.access_token);
                    this.auth.setToken(tokenData).subscribe(
                        res => {
                            this.router.navigate(['/']);
                        }
                    );
                    

                }catch(e){
                    console.error('Error: ' + e + ' ' +  data);
                }
            },
            err => {
                console.log(err);
            },
            () => {
                //TODO: log it?
            });
    }

    logout() {
        this.auth.logout();
    }

    register() {

    }
}