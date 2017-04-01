import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { NotificationActions } from './../../actions/notification.actions';
import { UserService } from './../../services/user/user.service';
import { GroupService } from './../../services/user/group.service';
import { RoleService } from './../../services/user/role.service';

import { MenuItem } from 'primeng/primeng';

import { User, Group, Role } from './../../api/index';

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

    private selectedRoles: Role[] = [];
    private selectedUsers: User[] = [];

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    private users: User[] = [];
    private roles: Role[] = [];
    private groups: Group[] = [];

    private group: Group;

    constructor(private userService: UserService, private notificationAction: NotificationActions,
        private groupService: GroupService, private roleService: RoleService) { }

    ngOnInit() {
        this.getUsers();
        this.getGroups();
        this.getRoles();
        this.tabs = [
            {label: 'Group', icon: 'fa-group', command: (event) => this.activeTab = event.item},
            {label: 'Role', icon: 'fa-server', command: (event) => this.activeTab = event.item},
            {label: 'User', icon: 'fa-user', command: (event) => this.activeTab = event.item}
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

    addGroup() {
        this.group = { "name": "", "isPrivate": false, "creator": null, "members": null};
        this.selectedRoles = [];
        this.selectedUsers = [];
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "Add new group";
    }

    editGroup(group: Group) {
        this.group = Object.assign({}, group);
        this.selectedRoles = this.group.roles;
        this.selectedUsers = this.group.members;
        this.displayDialog = true;
        this.readonlyForm = false;
        this.activeTab = this.tabs[0];
        this.modalHeader = "Group: "+this.group.name;
    }

    getIndexOfGroup(group: Group): number {
        for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i].id == group.id) {
                return i;
            }
        }
        return null;
    }

    saveGroup(group: Group) {
        group.members = this.selectedUsers;
        group.roles = this.selectedRoles;
        
        if (group.id != null) {
            this.groupService.update(group).subscribe(
                user => {
                    let id = this.getIndexOfGroup(group);
                    if (id) {
                        this.group[id] = group;
                        this.notificationAction.setNotification(true, 'User updated.', 'User successfully updated.');
                        this.displayDialog = false;
                    } else {
                        this.notificationAction.setNotification(false, 'Request failed.', 'Can not update the user.')
                    }
                },
                err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
            );
        } else {
            this.groupService.save(group).subscribe(
                user => {
                    this.groups.push(group);
                    this.notificationAction.setNotification(true, 'User stored.', 'User successfully saved.');
                    this.displayDialog = false;
                },
                err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
            )
        }
    }

    deleteGroup(group: Group) {
        this.groupService.delete(group).subscribe(
            (data) => {
                this.groups.splice(this.users.indexOf(group),1);
                this.notificationAction.setNotification(true, 'Group deleted.', 'Group successfully deleted.');
                this.displayDialog = false;
            },
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
    }

    viewGroup(group: Group) {
        this.group = group;
        this.selectedRoles = this.group.roles;
        this.selectedUsers = this.group.members;
        this.displayDialog = true;
        this.readonlyForm = true;
        this.activeTab = this.tabs[0];
        this.modalHeader = "View: "+this.group.name;
    }

    cancel() {
        this.displayDialog = false;
    }
}