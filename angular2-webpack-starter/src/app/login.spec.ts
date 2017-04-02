import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { LoginComponent } from './components/login/login.component';

describe('LoginComponent (inline template)', () => {

    let comp:    LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginComponent ], // declare the test component
        });

        fixture = TestBed.createComponent(LoginComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    });
});