import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { UserService } from './../../services/user/user.service';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

import { MenuItem } from 'primeng/primeng';
import { FakeAdminServer } from './../admin/fake.admin.server';

@Component({
    selector: 'tms-manager',
    template: ``
})

export class ManagerComponent implements OnInit {

    private fakeServer: FakeAdminServer = new FakeAdminServer();

    constructor(private userService: UserService, private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.manager);
    }

    ngOnInit() {
    }
}