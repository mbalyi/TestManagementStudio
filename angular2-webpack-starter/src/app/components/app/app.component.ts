import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from './../../services/authentication/authentication.service';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IsLogin } from './../../reducers/login.reducer'

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
})
export class AppComponent {
    @select(['islogin']) islogin$: Observable<IsLogin>;

    constructor (private auth: AuthenticationService) {
        this.auth.getLogginFlag().subscribe(
            res => console.log(res),
            (data) => {debugger;}
        );
    }
    ngOnInit() {
        console.log(this.islogin$);
        
    }
}
