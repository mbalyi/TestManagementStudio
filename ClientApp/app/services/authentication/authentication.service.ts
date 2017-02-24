import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs/Rx';

import { Users } from './../../models/users.model';

@Injectable()
export class AuthenticationService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    login(user: Users): Observable<Users> {
        var body = JSON.stringify({ "nickName": user.Nickname, "password": user.Password });

        return this.http.post('api/accountcontroller/login', body, { headers: this.headers } )
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logout() {
        this.http.get('api/accountcontroller/logout', { headers: this.headers }).subscribe(
            err => { console.log(err); },
            () => console.log('Logout Completed')
        );
    }

    register(user: Users): Observable<Users> {
        var body = JSON.stringify(user);

        return this.http.post('api/accountcontroller/register', body, { headers: this.headers })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}