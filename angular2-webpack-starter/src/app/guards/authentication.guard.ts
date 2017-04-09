import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/platform-browser';

import { IsLogin } from './../reducers/login.reducer';

import { AuthenticationService } from './../services/authentication/authentication.service';
import { SecurityActions } from './../actions/security.actions';

@Injectable()
export class AuthGuard implements CanActivate {
    @select(['islogin']) readonly islogin$: Observable<IsLogin>;
    private islogin: IsLogin;

    constructor(private authService: AuthenticationService, private router: Router,
        @Inject(DOCUMENT) private document: any, private security: SecurityActions) { }

    ngOnInit() {
        this.islogin$.subscribe((s) => this.islogin = s);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin(state);
    }

    checkLogin(state: RouterStateSnapshot): boolean {
        this.checkShareUrl();
        if (localStorage.getItem('id_token') && this.authService.getLogFlag()) {
            return true;
        };
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }

    checkShareUrl() {
        if (this.document.location.href.toString().split("execute?").length > 1) {
            if (this.document.location.href.toString().split("p=test").length > 1) {
                let id = this.document.location.href.toString().split("execute?")[1].split("id=")[1];
                this.security.setSecurity(true, 'test', id);
            }
        }
    }
}