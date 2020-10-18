import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Users } from './../../models/users.model';

let isLoggedIn: boolean = false;
let token:JWTToken;

@Injectable()
export class AuthenticationService {

    constructor(private router: Router) { }

    getLogFlag():boolean {
        return isLoggedIn;
    }

    setLogginFlag(flag: boolean): Observable<boolean> {
        return Observable.of(flag).do(val => isLoggedIn = flag);
    }

    getLogginFlag(): Observable<boolean> {
        return Observable.of(isLoggedIn).do(val => isLoggedIn = isLoggedIn);
    }

    setToken(_token: JWTToken): Observable<JWTToken> {
        return Observable.of(_token).do(val => token = _token);
    }
    getToken():JWTToken{
        return token;
    }

    logout() {
        this.setLogginFlag(false).subscribe(
            res => {
                this.router.navigate(['/login']);
            }
        );
        console.log('Logout Completed');
    }

    register(user: Users): void {
        console.log('TODO');
    }
}

export class JWTToken {
    token: string;
    refreshToken: string;
}
