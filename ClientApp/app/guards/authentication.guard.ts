import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './../services/authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin(state);
    }

    checkLogin(state: RouterStateSnapshot): boolean {
        if (this.authService.getLogFlag()) {
            return true;
        };

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}