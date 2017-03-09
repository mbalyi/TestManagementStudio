import { Component } from '@angular/core';
import { NavHeaderContext, NavPage, NavContext } from './../navheader/navheader.context';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-navmenu',
    template: require('./navmenu.component.html')
})
export class NavMenuComponent {
    @select(['navpage']) readonly nav$: Observable<NavContext>;
    private nav: NavContext;

    ngOnInit() {
        this.nav$.subscribe((s) => this.nav = s );
    }
}
