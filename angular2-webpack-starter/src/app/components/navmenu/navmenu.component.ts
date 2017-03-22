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

    private selectedMenu: String = '';

    ngOnInit() {
        this.nav$.subscribe((s) => {
            this.nav = s;
            if (this.nav != null && this.nav.menuItems != null && this.nav.menuItems.length > 0) {
                this.selectedMenu = this.nav.menuItems[0].name;
            }
        });
    }
}
