import { Component, trigger, transition, style, animate, state } from '@angular/core';
import { Users } from '../../models/users.model';

@Component({
    selector: 'login',
    animations: [
        trigger('visibilityChanged', [
            state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
            state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
            transition('1 => 0', animate('300ms')),
            transition('0 => 1', animate('900ms'))
        ])
    ],
    template: require('./login.component.html')
})
export class LoginComponent {
    private user: Users = { userId: null, nickname: "", password: "", lastname: "", firstname: "", email: "", address: "", phone: "", roleId: null };
    private errorMsg: String = '';
    private confirmPassword: number = null;
    private loginEnable: Boolean = true;

    showLoginForm() {
        this.loginEnable = true;
    }

    showRegisterForm() {
        this.loginEnable = false;
    }

    login() {
        console.log(this.user);
    }

    register() {
        console.log(this.user);
    }
}
