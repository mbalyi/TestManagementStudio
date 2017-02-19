import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { Users } from "./../../models/users.model";

@Component({
    selector: 'users',
    template: require('./users.component.html')
})

export class UsersComponent {   
    public users: Users[] = [];
    public name: string = null;

    constructor(http: Http) {
        http.get('/api/userscontroller/users').subscribe(result => {
            this.users = result.json();
        });
    }
}