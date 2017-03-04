import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from './../../services/authentication/authentication.service';

import { Observable } from 'rxjs/Observable';
import { select } from './../redux/decorators/select';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    //styleUrls: [require("./app.component.scss")],
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('./app.component.css'),
        require('./../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'),
        require('./../../../../node_modules/primeng/resources/themes/omega/theme.css'),
        require('./../../../../node_modules/primeng/resources/primeng.min.css'),
        require('./../../../../node_modules/font-awesome/css/font-awesome.min.css')
        ]
    //styles: [require("../../../css/_common.scss")]
})
export class AppComponent {
    //@select(['isLogin']) isLoginPage: Observable<Boolean>;

    constructor (private auth: AuthenticationService) {
        this.auth.getLogginFlag().subscribe(
            res => console.log(res),
            (data) => {debugger;}
        );
    }
}
