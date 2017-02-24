import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs/Rx';

import { Users } from './../../models/users.model';

@Injectable()
export class AuthenticationService {
    public isLoggedIn: boolean = false;
    public log: Observable<boolean>;
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getIsLogged(): Observable<boolean> {
        return Observable.of(true).do(val => this.isLoggedIn = this.isLoggedIn);
    }

    setLogginFlag(flag: boolean): Observable<boolean> {
        this.log = new Observable<boolean>(observable => observable.next(flag));
        return Observable.of(flag).do(val => this.isLoggedIn = flag);
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
                this.isLoggedIn = false;
                console.log('Logout Completed');
            }
        );
    }

    register(user: Users): Observable<Users> {
        var body = JSON.stringify(user);

        return this.http.post('api/accountcontroller/register', body, { headers: this.headers })
            .map((res: Response) => { res.json(); this.isLoggedIn = true; })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}