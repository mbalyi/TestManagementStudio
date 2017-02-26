import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DataTableModule } from 'primeng/primeng';

import { AuthGuard } from './guards/authentication.guard';

import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';

import { CapitalizePipe } from './pipes/capitalize.pipe';

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { NavHeaderComponent } from './components/navheader/navheader.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
    bootstrap: [AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,

        // Pages
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        NavHeaderComponent,
        UsersComponent,
        LoginComponent,
        SubjectsComponent,
        AdminComponent,

        // Widgets

        // Pipes
        CapitalizePipe
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
            { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
            { path: 'users-data', component: UsersComponent, canActivate: [AuthGuard] },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
            { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuard] },
            { path: '**', redirectTo: 'home' }
        ]),
        DataTableModule
    ],
    providers: [
        // Guards
        AuthGuard,

        // Services
        AuthenticationService,
        UserService
    ]
})
export class AppModule {
}
