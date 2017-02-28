import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';
import {AuthGuard} from "./guards/authentication.guard";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {CounterComponent} from "./components/counter/counter.component";
import {FetchDataComponent} from "./components/fetchdata/fetchdata.component";
import {UsersComponent} from "./components/users/users.component";
import {AdminComponent} from "./components/admin/admin.component";
import {SubjectsComponent} from "./components/subjects/subjects.component";

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
  { path: 'users-data', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];
