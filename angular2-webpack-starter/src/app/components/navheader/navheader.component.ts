import { Component } from '@angular/core';
import { NavHeaders, NavPages, NavPage } from './navheader.context';

import { NavPageActions } from './../../actions/navheader.actions';

@Component({
    selector: 'navheader',
    template: require('./navheader.component.html')
})
export class NavHeaderComponent {
    private headers: NavHeaders;

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.login);
    }

    ngOnInit() {
        this.headers = new NavHeaders();
    }

    setPage(page: NavPage) {
        this.pageAction.setPage(page);
    }
}