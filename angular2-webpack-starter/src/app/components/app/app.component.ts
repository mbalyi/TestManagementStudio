import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from './../../services/authentication/authentication.service';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IsLogin } from './../../reducers/login.reducer';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
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
    @select(['islogin']) readonly islogin$: Observable<IsLogin>;
    private islogin: IsLogin;

    constructor (private auth: AuthenticationService) {
        this.auth.getLogginFlag().subscribe(
            res => console.log(res),
            (data) => {console.log(data)}
        );
    }

    ngOnInit() {
        this.islogin$.subscribe((s) => this.islogin = s);
    }
}
