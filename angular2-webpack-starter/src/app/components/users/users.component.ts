import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Users } from "./../../models/users.model";
import { Observable } from 'rxjs/Rx';
import { UserService } from './../../services/user/user.service';

@Component({
    selector: 'users',
    template: require('./users.component.html'),
    providers: [UserService]
})

export class UsersComponent implements OnInit {   
    public users: Users[] = [];
    public name: string = null;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getAll().subscribe(
            users => this.users = users,
            err => { console.log(err); }
        );
    }
}