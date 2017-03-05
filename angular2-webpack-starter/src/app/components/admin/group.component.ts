import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { UserService } from './../../services/user/user.service';

import { MenuItem } from 'primeng/primeng';

import { Users } from "./../../models/users.model";
import { Roles } from "./../../models/roles.model";
import { Group } from './../../models/Group';

import { FakeAdminServer } from './fake.admin.server';

@Component({
    selector: 'tms-group',
    template: require('./group.component.html')
})

export class GroupComponent implements OnInit {
    private readonlyForm: boolean = false;
    private displayDialog: boolean = false;

    private modalHeader: string = "Add new group";

    private tabs: MenuItem[];
    private activeTab: MenuItem;

    private selectedRoles: string[] = [];
    private selectedGroups: string[] = [];

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    private users: Users[] = [];
    private roles: Roles[] = [];
    private groups: Group[] = [];

    private group: Group;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.users = this.fakeServer.getUsers();
        this.roles = this.fakeServer.getRoles();
        this.groups = this.fakeServer.getGroups();

        this.tabs = [
            {label: 'Group', icon: 'fa-group', command: (event) => this.activeTab = event.item},
            {label: 'Role', icon: 'fa-server', command: (event) => this.activeTab = event.item},
            {label: 'User', icon: 'fa-user', command: (event) => this.activeTab = event.item}
        ];
        this.activeTab = this.tabs[0];
    }

    addGroup() {
        this.group = { "name": "", "isPrivate": false, "creator": null, "members": null};
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "Add new group";
    }

    editGroup(group: Group) {
        this.group = group;
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "Group: "+this.group.name;
    }

    deleteGroup(group: Group) {

    }

    viewGroup(group: Group) {
        this.group = group;
        this.displayDialog = true;
        this.readonlyForm = true;
        this.activeTab = this.tabs[0];
        this.modalHeader = "View: "+this.group.name;
    }

    cancel() {
        this.displayDialog = false;
    }
}