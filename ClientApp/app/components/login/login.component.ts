import { Component, trigger, transition, style, animate } from '@angular/core';
import { Users } from '../../models/users.model';

@Component({
    selector: 'login',
    animations: [
        trigger(
            'fadeout', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        )
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
