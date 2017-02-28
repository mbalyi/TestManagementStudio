import { Component } from '@angular/core';
import { NavHeaders } from './navheader.context';

@Component({
    selector: 'navheader',
    template: require('./navheader.component.html'),
    styles: [require('./navheader.component.css')]
})
export class NavHeaderComponent {
    private headers: NavHeaders;

    ngOnInit() {
        this.headers = new NavHeaders();
    }
}