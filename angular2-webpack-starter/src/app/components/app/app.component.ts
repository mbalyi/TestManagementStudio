import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    //styleUrls: [require("./app.component.scss")],
    encapsulation: ViewEncapsulation.None,
    styles: [require('./app.component.css')]
    //styles: [require("../../../css/_common.scss")]
})
export class AppComponent {
}
