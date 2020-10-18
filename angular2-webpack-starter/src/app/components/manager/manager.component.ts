import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { NotificationActions } from './../../actions/notification.actions';
import { UserService } from './../../services/user/user.service';
import { CategoryService } from './../../services/category.service';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { User, Group, Role, Category, Question, Answer, Test } from './../../api/index';

import { StepsModule, MenuItem, InputTextareaModule } from 'primeng/primeng';

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
    private tableHeight: number = 0;
    private scrollHeight: string = '';

    private users: User[] = [];
    private sortedUsers: User[] = [];

    private categories: Category[] = [];
    private selectedCategory: Category = {id: null, name: '', description: ''};

    constructor(private userService: UserService, private pageAction: NavPageActions,
        private notificationAction: NotificationActions, private categoryService: CategoryService) { 
        pageAction.setPage(NavPages.manager);
    }

    ngOnInit() {
        this.pageAction.setPage(NavPages.manager);
        this.tableHeight = (document.body.offsetHeight*0.9);
        this.scrollHeight = (this.tableHeight-60).toString()+'px';
        
        this.userService.getAll().subscribe(
            users => this.users = users,
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
        this.categoryService.getAll().subscribe(
            categories => this.categories = categories,
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );

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
        this.selectedCategory = {id: null, name: '', description: '', parent: null, childrens: null, questions: [], tests: [], users: []};
        this.sortedUsers = Object.assign([], this.users);
        this.activeIndex = 0;
        this.finishEnable = false;
        this.displayDialog = true;
    }

    cancel() {
        this.finishEnable = false;
        this.displayDialog = false;
        this.activeIndex = 0;
    }

    getUserAttach($event: any) {
        this.sortedUsers=$event.users;
        this.selectedCategory.users=$event.selectedUsers;
    }

    editCategory(category) {
        this.selectedCategory = Object.assign({}, category);
        this.sortedUsers = Object.assign([], this.users);
        let u =[];
        for (let i = 0; i < this.sortedUsers.length; i++) {
            let flag = false;
            for (let j = 0; j < this.selectedCategory.users.length; j++) {
                if (this.sortedUsers[i].id == this.selectedCategory.users[j].id)
                    flag = true;
            }
            if (!flag)
                u.push(this.sortedUsers[i]);
        }
        this.sortedUsers = u;
        this.finishEnable = false;
        this.displayDialog = true;
    }

    getIndexOfCategory(category: Category): number {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id == category.id) {
                return i;
            }
        }
        return null;
    }

    saveCategory() {
        if (this.selectedCategory.id != null) {
            this.categoryService.update(this.selectedCategory).subscribe(
                category => {
                    let id = this.getIndexOfCategory(this.selectedCategory);
                    if (id!=null) {
                        this.categories[id] = this.selectedCategory;
                        this.notificationAction.setNotification(true, 'Category updated.', 'Category successfully updated.');
                        this.displayDialog = false;
                    } else {
                        this.notificationAction.setNotification(false, 'Request failed.', 'Can not update the Category.')
                    }
                },
                err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
            );
        } else {
            this.categoryService.save(this.selectedCategory).subscribe(
                category => {
                    this.categories.push(this.selectedCategory);
                    this.notificationAction.setNotification(true, 'Category stored.', 'Category successfully saved.');
                    this.displayDialog = false;
                },
                err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
            )
        }
    }

    deleteCategory(category) {
        this.categoryService.delete(category).subscribe(
            (data) => {
                this.categories.splice(this.categories.indexOf(category),1);
                this.notificationAction.setNotification(true, 'Category deleted.', 'Category successfully deleted.');
                this.displayDialog = false;
            },
            err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        );
    }
}