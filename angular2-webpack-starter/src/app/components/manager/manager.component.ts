import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { UserService } from './../../services/user/user.service';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { Users } from "./../../models/users.model";

import { StepsModule, MenuItem, InputTextareaModule } from 'primeng/primeng';
import { FakeAdminServer } from './../admin/fake.admin.server';

@Component({
    selector: 'tms-manager',
    template: require('./manager.component.html')
})

export class ManagerComponent implements OnInit {
    private items: MenuItem[];
    private displayDialog: boolean = false;
    private finishEnable: boolean = false;
    private modalHeader: string = "Add new Category";
    private categories: any[];
    private activeIndex: number = 0;

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    private users: Users[] = [];
    private selectedUsers: Users[] = [];

    constructor(private userService: UserService, private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.manager);
    }

    ngOnInit() {
        this.users = this.fakeServer.getUsers();
        this.items = [{
                label: 'Category',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.finishEnable = false;
                }
            },
            {
                label: 'Group/User',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.finishEnable = true;
                }
            }
        ];
    }

    showDialogToAdd() {
        this.displayDialog = true;
        this.activeIndex = 0;
    }

    cancel() {
        this.finishEnable = false;
        this.displayDialog = false;
        this.activeIndex = 0;
    }

    
    move(direction: string, user: Users) {
        if (direction == 'left') {
            this.users.push(user);
            this.selectedUsers.splice(this.users.indexOf(user),1);
        } else if (direction == 'right') {
            this.selectedUsers.push(user);
            this.users.splice(this.selectedUsers.indexOf(user),1);
        }
    }
}