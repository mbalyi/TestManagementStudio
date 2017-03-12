import { Injectable } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { NavHeaders, NavPages, NavHeaderContext, NavContext, NavPage } from './../components/navheader/navheader.context';

@Injectable()
export class CurrentPageService {
    private headers: NavHeaders = new NavHeaders();

    @select(['navpage', 'page']) readonly currentPage$: Observable<NavPage>;
    private currentPage: NavPage;

    constructor () {
        this.currentPage$.subscribe((s) => this.currentPage = s);
    }

    getMenuItems(): NavHeaderContext[] {
        if (this.currentPage != null) {
            if(this.currentPage == NavPages.admin) {
                return this.headers.adminMenu;
            } else if (this.currentPage == NavPages.manager) {
                return this.headers.managerMenu;
            } else {
                return [];
            }
        }
        return [];
    }
}