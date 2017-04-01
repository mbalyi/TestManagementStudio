import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IsLogin } from './../reducers/login.reducer';

import { AuthenticationService } from './../services/authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    @select(['islogin']) readonly islogin$: Observable<IsLogin>;
    private islogin: IsLogin;

    constructor(private authService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.islogin$.subscribe((s) => this.islogin = s);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin(state);
    }

    checkLogin(state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('id_token') && this.authService.getLogFlag()) {
            return true;
        };

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}