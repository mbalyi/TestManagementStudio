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
    public user: Users;
    private displayDialog: boolean = false;

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

    /*showDialogToAdd() {
        this.user = { userid: null, nickname: "", password: "", lastname: "", firstname: "", email: "", address: "", phone: "", roleid: null };
        this.displayDialog = true;
    }*/

    /*onRowSelect(event) {
        this.user = this.cloneUser(event.data);
        this.displayDialog = true;
    }

    cloneUser(u: Users): Users {
        let user = { userid: null, nickname: "", password: "", lastname: "", firstname: "", email: "", address: "", phone: "", roleid: null };
        for(let prop in u) {
            user[prop] = u[prop];
        }
        return user;
    }*/
}