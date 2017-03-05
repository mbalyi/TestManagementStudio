import { Component } from '@angular/core';
import { NavHeaders } from './../navheader/navheader.context';

@Component({
    selector: 'tms-navmenu',
    template: require('./navmenu.component.html'),
    styles: [require('./navmenu.component.css')]
})
export class NavMenuComponent {
    private headers: NavHeaders;

    ngOnInit() {
        this.headers = new NavHeaders();
    }
}
