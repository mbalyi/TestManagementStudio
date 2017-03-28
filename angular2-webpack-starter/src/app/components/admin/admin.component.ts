import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { UserService } from './../../services/user/user.service';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { MenuItem } from 'primeng/primeng';

import { Roles } from "./../../models/roles.model";
import { User, Group } from './../../api/index';

import { FakeAdminServer } from './fake.admin.server';

@Component({
    selector: 'tms-admin',
    template: require('./admin.component.html')
})

export class AdminComponent implements OnInit {
    public user: User;
    private readonlyForm: boolean = false;
    private displayDialog: boolean = false;

    private modalHeader: string = "Add new user";

    private tabs: MenuItem[];
    private activeTab: MenuItem;

    private selectedRoles: string[] = [];
    private selectedGroups: string[] = [];

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    private users: User[] = [];
    private roles: Roles[] = [];
    private groups: Group[] = [];

    constructor(private userService: UserService, private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.login);
    }

    ngOnInit() {
        this.users = this.fakeServer.getUsers();
        this.roles = this.fakeServer.getRoles();
        this.groups = this.fakeServer.getGroups();

        this.getUsers();
        this.tabs = [
            {label: 'User', icon: 'fa-user', command: (event) => this.activeTab = event.item},
            {label: 'Group', icon: 'fa-group', command: (event) => this.activeTab = event.item},
            {label: 'Role', icon: 'fa-server', command: (event) => this.activeTab = event.item}
        ];
        this.activeTab = this.tabs[0];
    }

    getUsers() {
        this.userService.getAll().subscribe(
            users => this.users = users,
            err => { console.log(err); }
        );
    }

    showDialogToAdd() {
        this.user = { id: null, password: "", lastName: "", firstName: "", email: "", roles: null, permissions: null };
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "Add new user";
    }

    editUser(user: User) {
        this.user = user;
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "User: "+this.user.firstName+" "+this.user.lastName;
    }

    deleteUser(user: User) {

    }

    viewUser(user: User) {
        this.user = user;
        this.displayDialog = true;
        this.readonlyForm = true;
        this.activeTab = this.tabs[0];
        this.modalHeader = "View: "+this.user.firstName+" "+this.user.lastName;
    }

    cancel() {
        this.displayDialog = false;
    }
}