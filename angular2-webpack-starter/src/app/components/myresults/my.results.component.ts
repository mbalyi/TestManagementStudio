import { Component } from '@angular/core';

import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

@Component({
    selector: 'tms-my-results',
    template: require('./my.results.component.html')
})
export class MyResultsComponent {

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.myResults);
    }
}
