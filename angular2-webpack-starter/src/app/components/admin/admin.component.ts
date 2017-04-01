import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { NotificationActions } from './../../actions/notification.actions';
import { UserService } from './../../services/user/user.service';
import { GroupService } from './../../services/user/group.service';
import { RoleService } from './../../services/user/role.service';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { MenuItem } from 'primeng/primeng';

import { Roles } from "./../../models/roles.model";
import { User, Group, Role } from './../../api/index';

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

    private selectedRoles: Role[] = [];
    private selectedGroups: Group[] = [];

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    private users: User[] = [];
    private roles: Roles[] = [];
    private groups: Group[] = [];

    constructor(private userService: UserService, private pageAction: NavPageActions,
        private groupService: GroupService, private roleService: RoleService,
        private notificationAction: NotificationActions) { 
        pageAction.setPage(NavPages.login);
    }

    ngOnInit() {
        this.getUsers();
        this.getGroups();
        this.getRoles();
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
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
    }

    getGroups() {
        this.groupService.getAll().subscribe(
            groups => this.groups,
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
    }

    getRoles() {
        this.roleService.getAll().subscribe(
            roles => this.roles,
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
    }

    showDialogToAdd() {
        this.user = { id: null, password: "", lastName: "", firstName: "", email: "", roles: null, permissions: null };
        this.selectedRoles = [];
        this.selectedGroups = [];
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "Add new user";
    }

    editUser(user: User) {
        this.user = Object.assign({}, user);
        this.selectedRoles = Object.assign({}, user.roles);
        this.selectedGroups = Object.assign({}, user.groups);
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "User: "+this.user.firstName+" "+this.user.lastName;
    }

    getIndexOfUser(user: User): number {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id == user.id) {
                return i;
            }
        }
        return null;
    }

    saveUser(user: User) {
        user.groups = this.selectedGroups;
        user.roles = this.selectedRoles;
        
        if (user.id != null) {
            this.userService.update(user).subscribe(
                user => {
                    let id = this.getIndexOfUser(user);
                    if (id) {
                        this.users[0] = user;
                        this.notificationAction.setNotification(true, 'User updated.', 'User successfully updated.');
                        this.displayDialog = false;
                    } else {
                        this.notificationAction.setNotification(false, 'Request failed.', 'Can not update the user.')
                    }
                },
                err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
            );
        } else {
            this.userService.save(user).subscribe(
                user => {
                    this.users.push(user);
                    this.notificationAction.setNotification(true, 'User stored.', 'User successfully saved.');
                    this.displayDialog = false;
                },
                err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
            )
        }
    }

    deleteUser(user: User) {
        this.userService.delete(user).subscribe(
            (data) => {
                this.users.splice(this.users.indexOf(user),1);
                this.notificationAction.setNotification(true, 'User deleted.', 'User successfully deleted.');
                this.displayDialog = false;
            },
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
    }

    viewUser(user: User) {
        this.user = user;
        this.selectedRoles = user.roles;
        this.selectedGroups = user.groups;
        this.displayDialog = true;
        this.readonlyForm = true;
        this.activeTab = this.tabs[0];
        this.modalHeader = "View: "+this.user.firstName+" "+this.user.lastName;
    }

    cancel() {
        this.displayDialog = false;
    }
}