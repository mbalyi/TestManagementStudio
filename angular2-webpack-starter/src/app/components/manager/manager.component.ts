import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { UserService } from './../../services/user/user.service';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { User, Group, Role, Category, Question, Answer, Test } from './../../api/index';

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
    private activeIndex: number = 0;

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    private users: User[] = [];
    private selectedUsers: User[] = [];

    private categories: Category[] = [];
    private selectedCategory: Category;

    constructor(private userService: UserService, private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.manager);
    }

    ngOnInit() {
        this.users = this.fakeServer.getUsers();
        this.categories = this.fakeServer.getCategories();
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

    
    move(direction: string, user: User) {
        if (direction == 'left') {
            this.users.push(user);
            this.selectedUsers.splice(this.users.indexOf(user),1);
        } else if (direction == 'right') {
            this.selectedUsers.push(user);
            this.users.splice(this.selectedUsers.indexOf(user),1);
        }
    }
}