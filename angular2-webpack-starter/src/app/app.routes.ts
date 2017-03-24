import { Routes } from '@angular/router';

import { DataResolver } from './app.resolver';
import { AuthGuard } from "./guards/authentication.guard";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CounterComponent } from "./components/counter/counter.component";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { UsersComponent } from "./components/users/users.component";
import { AdminComponent } from "./components/admin/admin.component";
import { GroupComponent } from './components/admin/group.component';
import { RoleComponent } from './components/admin/role.component';
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { ManagerComponent } from './components/manager/manager.component';
import { TestManagerComponent } from './components/manager/test.manager.component';
import { QuestionsComponent } from './components/manager/questions.component';
import { TestMenuComponent } from './components/tests/test.menu.component';
import { TestExecutionComponent } from './components/tests/test.execution.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'counter', component: CounterComponent, canActivate: [AuthGuard] },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthGuard] },
  { path: 'users-data', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'groups', component: GroupComponent, canActivate: [AuthGuard] },
  { path: 'roles', component: RoleComponent, canActivate: [AuthGuard] },
  { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuard] },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard] },
  { path: 'test-manager', component: TestManagerComponent, canActivate: [AuthGuard] },
  { path: 'questions', component: QuestionsComponent, canActivate: [AuthGuard] },
  { path: 'test-menu', component: TestMenuComponent, canActivate: [AuthGuard] },
  { path: 'test-execution', component: TestExecutionComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];
