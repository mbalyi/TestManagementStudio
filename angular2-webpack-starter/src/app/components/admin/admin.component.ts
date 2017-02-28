import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Users } from "./../../models/users.model";
import { Observable } from 'rxjs/Rx';
import { UserService } from './../../services/user/user.service';

@Component({
    selector: 'tms-admin',
    template: require('./admin.component.html')
})

export class AdminComponent implements OnInit {
    public users: Users[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            err => { console.log(err); }
        );
    }
}