import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { User } from './../api/index';

@Component({
    selector: 'tms-home-buttonset',
    template: `
        <div *ngIf="userType==1" class="three">
            <tms-home-button color="orange" route="/home">
                <h1>Home</h1>
                <span>Hi there,</span>
                <h3>Welcome back!</h3>
            </tms-home-button>
            <tms-home-button color="red" route="/manager">
                <h1>Manager</h1>
                <h3>Manage your Categories & Tests!</h3>
            </tms-home-button>
            <tms-home-button color="orange" route="/admin">
                <h1>Admin</h1>
                <h3>Edit the Studio!</h3>
            </tms-home-button>
        </div>
        <div *ngIf="userType==4 || userType==5" class="three">
            <tms-home-button color="orange" route="/home">
                <h1>Home</h1>
                <span>Hi there,</span>
                <h3>Welcome back!</h3>
            </tms-home-button>
            <tms-home-button color="blue" route="/my-results">
                <h1>Results</h1>
                <h3>Check your Results!</h3>
            </tms-home-button>
            <tms-home-button color="green" route="/test-menu">
                <h1>Tests</h1>
                <h3>Complite your upcomin' test!</h3>
            </tms-home-button>
        </div>
        <div *ngIf="userType==2" class="two">
            <tms-home-button color="orange" route="/home">
                <h1>Home</h1>
                <span>Hi there,</span>
                <h3>Welcome back!</h3>
            </tms-home-button>
            <tms-home-button color="red" route="/manager">
                <h1>Manager</h1>
                <h3>Manage your Categories & Tests!</h3>
            </tms-home-button>
        </div>
        <div *ngIf="userType==5" class="two">
            <tms-home-button color="red" route="/manager">
                <h1>Manager</h1>
                <h3>Manage your Categories & Tests!</h3>
            </tms-home-button>
            <tms-home-button color="orange" route="/admin">
                <h1>Admin</h1>
                <h3>Edit the Studio!</h3>
            </tms-home-button>
        </div>
    `
})
export class HomeButtonSetWidget {
    @select(['currentuser']) readonly user$: Observable<User>;
    private user: User;
    private userType: number = 0;

    constructor() {}

    ngOnInit() {
        this.user$.subscribe( u => {
            this.user = u;
            this.userType = this.user.roles[0].id;
        });
    }
}
