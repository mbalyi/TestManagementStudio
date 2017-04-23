import { Component } from '@angular/core';
import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {

    constructor(private pageAction: NavPageActions) { 
        pageAction.setPage(NavPages.home);
    }
}
