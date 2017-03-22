import { Component } from '@angular/core';
import { NavHeaders, NavPages, NavPage } from './navheader.context';

import { NavPageActions } from './../../actions/navheader.actions';

@Component({
    selector: 'tms-navheader',
    template: require('./navheader.component.html')
})
export class NavHeaderComponent {
    private headers: NavHeaders;
    private selectedModule: String = '';

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.login);
    }

    ngOnInit() {
        this.headers = new NavHeaders();
        if (this.headers != null && this.headers.headers != null && this.headers.headers.length > 0) {
            this.selectedModule = this.headers.headers[0].name;
        }
    }

    setPage(page: NavPage) {
        this.pageAction.setPage(page);
    }
}