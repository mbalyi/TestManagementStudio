import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs/Rx';

import { Users } from './../../models/users.model';

let isLoggedIn: boolean = false;

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getLogFlag():boolean {
        return isLoggedIn;
    }

    setLogginFlag(flag: boolean): Observable<boolean> {
        return Observable.of(flag).do(val => isLoggedIn = flag);
    }

    login(user: Users): Observable<Users> {
        var body = JSON.stringify({ "nickName": user.nickname, "password": user.password });

        return this.http.post('api/accountcontroller/login', body, { headers: this.headers } )
            .map(res => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout() {
        this.http.get('api/accountcontroller/logout', { headers: this.headers }).subscribe(
            err => { console.log(err); },
            () => {
                isLoggedIn = false;
                console.log('Logout Completed');
            }
        );
    }

    register(user: Users): Observable<Users> {
        var body = JSON.stringify(user);

        return this.http.post('api/accountcontroller/register', body, { headers: this.headers })
            .map((res: Response) => { res.json(); isLoggedIn = true; })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}