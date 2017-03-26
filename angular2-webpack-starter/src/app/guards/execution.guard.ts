import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TestExecution } from './../api/index';

@Injectable()
export class ExecutionGuard implements CanActivate {
    @select(['execution']) readonly execution$: Observable<TestExecution>;
    private execution: TestExecution;

    constructor(private router: Router) { 
        this.execution$.subscribe( e => this.execution = e);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkTestExecution(state);
    }

    checkTestExecution(state: RouterStateSnapshot): boolean {
        if (this.execution != null && this.execution.id == null) {
            return true;
        };

        // Navigate to the execution page with extras
        this.router.navigate(['/test-execution']);
        return false;
    }
}